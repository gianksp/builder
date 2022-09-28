import React, { useContext, useEffect, useState } from 'react';
import grapesjs from 'grapesjs'
// import PluginTailwind from 'grapesjs-tailwind';
import PluginTailwind from 'dappify-tailwind-module';
import PluginEditorPanelButtons from './Panel/Buttons';
import * as LandingPage from '../templates/LandingPage';
import ConfirmationModal from '../views/modal/Confirmation';
import { DappifyContext } from 'react-dappify';
import isEmpty from 'lodash/isEmpty';

const Editor = ({ projectId, onClickHome }) => {
    const [editor, setEditor] = useState({});
    const [project, setProject] = useState({});
    const {Provider, user} = useContext(DappifyContext);
    const [isLoaded, setLoaded] = useState(false);

    const getUrl = (subdomain) => {
        const environmentPrefix =
            process.env.REACT_APP_HOST_ENV === "production"
                ? ""
                : `${process.env.REACT_APP_HOST_ENV}.`;
        const subdomainPrefix = subdomain ? `${subdomain}.` : "";
        return `https://${subdomainPrefix}${environmentPrefix}dappify.com`;
    };

    const loadFns = () => {
        window.handlePublishToIpfs = async(event) => {
            event.preventDefault();
            event.target.parentNode.querySelector('#publish-btn').style.display = 'none';
            event.target.parentNode.querySelector('#wait-publish-btn').style.display = 'block';

            const html = editor.getHtml();
            const css = editor.getCss();
                
            // Generate final HTML
            const content = `
                <!doctype html>
                <html lang="en">
                    <head>
                        <style tyle="text/css">${css}</style>
                    </head>
                    ${html}
                </html>`;

            // Upload to IPFS
            var blob = new Blob([content], { type: "text/plain" });
            const file = new Provider.File('project', blob);
            const deployed = await file.saveIPFS();
            const hash = deployed.hash();
            const url = `https://dappify.mypinata.cloud/ipfs/${hash}`;
            const uri = getUrl(project.get('subdomain'));

            // Show confirmation modal
            const modal = editor.Modal;
            modal.open({
              title: 'Congratulations',
              content: ConfirmationModal({ url, uri, hash }),
              attributes: { class: 'my-class' },
            });

            // Save as project
            project.set('url', url);
            project.set('hash', hash);
            await project.save();
        }
    }

    const loadProject = async () => {
        const Proj = Provider.Object.extend('Project');
        const query = new Provider.Query(Proj);
        query.equalTo('owner', user);
        query.equalTo('objectId', projectId);
        const foundProject = await query.first();
        setProject(foundProject);
        setTimeout(() => {
            loadEditor();
        }, 1500);
    }

    const loadEditor = () => {
        if (!isEmpty(editor)) return;

        // Handle tailwind's use of slashes in css names
        const escapeName = (name) => `${name}`.trim().replace(/([^a-z0-9\w-:/]+)/gi, '-');

        const editorUI = grapesjs.init({
            container: '#gjs',
            height: '100vh',
            width: '100%',
            fromElement: true,
            storageManager: false,
            selectorManager: { escapeName },
            plugins: [
                PluginTailwind,
                PluginEditorPanelButtons
            ],
            pluginsOpts: {},
            canvas: {
                scripts: [
                //   'https://cdn.tailwindcss.com',
                //   'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js',
                //   'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js',
                //   'https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js',
                //   'https://cdnjs.cloudflare.com/ajax/libs/ethers/5.6.9/ethers.umd.min.js',
                //   'https://cdn.jsdelivr.net/npm/chart.js'
                ],
                // The same would be for external styles
                // styles: [
                //   'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css'
                // ],
            }
        });

        editorUI.setComponents(LandingPage.html);
        editorUI.setStyle(LandingPage.style);

        editorUI.Panels.addButton('options', [
            { 
                id: 'home',
                command: onClickHome,
                label: `
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <polyline points="5 12 3 12 12 3 21 12 19 12" />
                        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                        <rect x="10" y="12" width="4" height="4" />
                    </svg>
                `,
                attributes: { 
                    title: 'Home Profile' 
                } 
            }, 
        ]);
        
        setEditor(editorUI);

    };

    useEffect(() => {
        loadProject();
    }, []);

    useEffect(() => {
        if (editor)
            loadFns();
    }, [editor]);

    return (
        <div id="gjs"></div>
    );
}

export default Editor;