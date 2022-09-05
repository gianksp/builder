import React, { useState } from 'react';
import { useEffect } from 'react';
import grapesjs from 'grapesjs'
import PluginTailwind from 'grapesjs-tailwind';
import PluginEditorPanelButtons from 'components/Editor/Panel/Buttons';
import * as LandingPage from 'templates/LandingPage';

const Editor = () => {

    const loadEditor = () => {

        // Handle tailwind's use of slashes in css names
        const escapeName = (name) => `${name}`.trim().replace(/([^a-z0-9\w-:/]+)/gi, '-');

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
            pluginsOpts: {}
        });

        editor.setComponents(LandingPage.html);
        editor.setStyle(LandingPage.style);
    };

    useEffect(() => {
        loadEditor();
    }, []);

    return (
        <div id="gjs"></div>
    );
}

export default Editor;