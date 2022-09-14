import React, { useEffect } from 'react';
import grapesjs from 'grapesjs'
import PluginTailwind from 'grapesjs-tailwind';
import PluginEditorPanelButtons from 'lib/Editor/Panel/Buttons';
import * as LandingPage from 'lib/templates/LandingPage';

const Editor = () => {

    const loadEditor = () => {

        // Handle tailwind's use of slashes in css names
        const escapeName = (name) => `${name}`.trim().replace(/([^a-z0-9\w-:/]+)/gi, '-');

        setTimeout(() => {
            const editor = grapesjs.init({
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
                  },
            });
    
            editor.setComponents(LandingPage.html);
            editor.setStyle(LandingPage.style);
        }, 100);

    };

    useEffect(() => {
        loadEditor();
    }, []);

    return (
        <div id="gjs"></div>
    );
}

export default Editor;