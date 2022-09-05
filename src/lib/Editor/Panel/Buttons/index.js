import LoginModal from "lib/views/modal/Login";

const
  cmdImport = 'gjs-open-import-webpage',
  cmdDeviceDesktop = 'set-device-desktop',
  cmdDeviceTablet = 'set-device-tablet',
  cmdDeviceMobile = 'set-device-mobile',
  cmdClear = 'canvas-clear',
  publish = 'publish-ipfs';
  
const Plugin = (editor, config) => {
    const pn = editor.Panels;
    const eConfig = editor.getConfig();
    const crc = 'create-comp';
    const mvc = 'move-comp';
    const swv = 'sw-visibility';
    const expt = 'export-template';
    const osm = 'open-sm';
    const otm = 'open-tm';
    const ola = 'open-layers';
    const obl = 'open-blocks';
    const ful = 'fullscreen';
    const prv = 'preview';
    const backProfile = 'back-profile';
  
    eConfig.showDevices = 0;
  
    pn.getPanels().reset([{
      id: 'commands',
      buttons: [{}],
    },{
      id: 'options',
      buttons: [
        // {
        //   id: 'launch',
        //   command: publish,
        //   attributes: { title: 'Publish'},
        //   // className: 'fa fa-square-o',
        //   label: `
        //     <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-rocket" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        //         <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        //         <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"></path>
        //         <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"></path>
        //         <circle cx="15" cy="9" r="1"></circle>
        //     </svg>
        //   `
        // }, 
        {
        id: swv,
        command: swv,
        context: swv,
        active: true,
        attributes: { title: 'Toggle Show Grid'},
        // className: 'fa fa-square-o',
        label: `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-margin" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M8 8h8v8h-8z"></path>
                <path d="M4 4v.01"></path>
                <path d="M8 4v.01"></path>
                <path d="M12 4v.01"></path>
                <path d="M16 4v.01"></path>
                <path d="M20 4v.01"></path>
                <path d="M4 20v.01"></path>
                <path d="M8 20v.01"></path>
                <path d="M12 20v.01"></path>
                <path d="M16 20v.01"></path>
                <path d="M20 20v.01"></path>
                <path d="M20 16v.01"></path>
                <path d="M20 12v.01"></path>
                <path d="M20 8v.01"></path>
                <path d="M4 16v.01"></path>
                <path d="M4 12v.01"></path>
                <path d="M4 8v.01"></path>
            </svg>
        `
      },{
        id: prv,
        context: prv,
        command: e => e.runCommand(prv),
        attributes: { title: 'Preview'},
        // className: 'fa fa-eye',
        label: `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="12" cy="12" r="2"></circle>
                <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"></path>
            </svg>
        `
      },
    //   {
    //     id: ful,
    //     command: ful,
    //     context: ful,
    //     className: 'fa fa-arrows-alt',
    //   },
      {
        id: expt,
        // className: 'fa fa-code',
        command: e => e.runCommand(expt),
        attributes: { title: 'View Source Code'},
        label: `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-code" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <polyline points="7 8 3 12 7 16"></polyline>
                <polyline points="17 8 21 12 17 16"></polyline>
                <line x1="14" y1="4" x2="10" y2="20"></line>
            </svg>
        `
      },{
        id: 'undo',
        // className: 'fa fa-undo',
        command: e => e.runCommand('core:undo'),
        attributes: { title: 'Undo'},
        label: `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-rotate-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M15 4.55a8 8 0 0 0 -6 14.9m0 -4.45v5h-5"></path>
                <line x1="18.37" y1="7.16" x2="18.37" y2="7.17"></line>
                <line x1="13" y1="19.94" x2="13" y2="19.95"></line>
                <line x1="16.84" y1="18.37" x2="16.84" y2="18.38"></line>
                <line x1="19.37" y1="15.1" x2="19.37" y2="15.11"></line>
                <line x1="19.94" y1="11" x2="19.94" y2="11.01"></line>
            </svg>
        ` 
      },{
        id: 'redo',
        // className: 'fa fa-repeat',
        command: e => e.runCommand('core:redo'),
        attributes: { title: 'Redo'},
        label: `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-rotate-clockwise-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5"></path>
                <line x1="5.63" y1="7.16" x2="5.63" y2="7.17"></line>
                <line x1="4.06" y1="11" x2="4.06" y2="11.01"></line>
                <line x1="4.63" y1="15.1" x2="4.63" y2="15.11"></line>
                <line x1="7.16" y1="18.37" x2="7.16" y2="18.38"></line>
                <line x1="11" y1="19.94" x2="11" y2="19.95"></line>
            </svg>
        `
      },{
        id: cmdClear,
        // className: 'fa fa-trash',
        command: e => e.runCommand(cmdClear),
        attributes: { title: 'Clear Canvas'},
        label: `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="4" y1="7" x2="20" y2="7"></line>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
            </svg>
        `
      }],
    },{
      id: 'views',
      buttons  : [{
        id: osm,
        command: osm,
        // active: true,
        // className: 'fa fa-paint-brush',
        label: `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-palette" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 21a9 9 0 1 1 0 -18a9 8 0 0 1 9 8a4.5 4 0 0 1 -4.5 4h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"></path>
                <circle cx="7.5" cy="10.5" r=".5" fill="currentColor"></circle>
                <circle cx="12" cy="7.5" r=".5" fill="currentColor"></circle>
                <circle cx="16.5" cy="10.5" r=".5" fill="currentColor"></circle>
            </svg>
        `
      },{
        id: otm,
        command: otm,
        // className: 'fa fa-cog',
        label: `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                <circle cx="12" cy="12" r="3"></circle>
            </svg>
        `
      },{
        id: ola,
        command: ola,
        // className: 'fa fa-bars',
        label: `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-stack-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <polyline points="12 4 4 8 12 12 20 8 12 4"></polyline>
                <polyline points="4 12 12 16 20 12"></polyline>
                <polyline points="4 16 12 20 20 16"></polyline>
            </svg>
        `
      },{
        id: obl,
        command: obl,
        active: true,
        // className: 'fa fa-th-large',
        label: `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-package" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"></polyline>
                <line x1="12" y1="12" x2="20" y2="7.5"></line>
                <line x1="12" y1="12" x2="12" y2="21"></line>
                <line x1="12" y1="12" x2="4" y2="7.5"></line>
                <line x1="16" y1="5.25" x2="8" y2="9.75"></line>
            </svg>
        `
      }],
    }]);
  
    // Add devices buttons
    const panelDevices = pn.addPanel({id: 'devices-c'});
    panelDevices.get('buttons').add([{
      id: cmdDeviceDesktop,
      command: cmdDeviceDesktop,
    //   className: 'fa fa-desktop',
    attributes: { title: 'Desktop'},
      active: 1,
      label: `
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-desktop" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <rect x="3" y="4" width="18" height="12" rx="1"></rect>
            <line x1="7" y1="20" x2="17" y2="20"></line>
            <line x1="9" y1="16" x2="9" y2="20"></line>
            <line x1="15" y1="16" x2="15" y2="20"></line>
        </svg>
      `
    },{
        id: cmdDeviceTablet,
        command: cmdDeviceTablet,
        //   className: 'fa fa-tablet',
        attributes: { title: 'Tablet Portrait'},
        label: `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-tablet" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <rect x="5" y="3" width="14" height="18" rx="1"></rect>
                <circle cx="12" cy="17" r="1"></circle>
            </svg>
        `
    },{
      id: cmdDeviceMobile,
      command: cmdDeviceMobile,
        //   className: 'fa fa-mobile',
        attributes: { title: 'Mobile Portrait'},
        label: `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-mobile" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <rect x="6" y="3" width="12" height="18" rx="2"></rect>
                <line x1="11" y1="4" x2="13" y2="4"></line>
                <line x1="12" y1="17" x2="12" y2="17.01"></line>
            </svg>
        `
    }]);
  
    const openBl = pn.getButton('views', obl);
    editor.on('load', () => openBl && openBl.set('active', 1));
  
    // On component change show the Style Manager
    config.showStylesOnChange && editor.on('component:selected', () => {
      const openSmBtn = pn.getButton('views', osm);
      const openLayersBtn = pn.getButton('views', ola);
  
      // Don't switch when the Layer Manager is on or
      // there is no selected component
      if ((!openLayersBtn || !openLayersBtn.get('active')) && editor.getSelected()) {
        openSmBtn && openSmBtn.set('active', 1);
      }
    });


    var cmdm = editor.Commands;

    cmdm.add(publish, () => {




      const modal = editor.Modal;
      modal.open({
        title: 'My title',
        content: LoginModal(),
        attributes: { class: 'my-class' },
      });

      // if(confirm('Are you sure to clean the canvas?')) {
        // var comps = editor.DomComponents.clear();
        // setTimeout(function(){ localStorage.clear()}, 0)
      // }
    });

    cmdm.add('canvas-clear', () => {




      // const modal = editor.Modal;
      // modal.open({
      //   title: 'My title',
      //   content: LoginModal(),
      //   attributes: { class: 'my-class' },
      // });

      // if(confirm('Are you sure to clean the canvas?')) {
        var comps = editor.DomComponents.clear();
        setTimeout(function(){ localStorage.clear()}, 0)
      // }
    });
    cmdm.add(cmdDeviceDesktop, {
        run: (ed) => ed.setDevice('Desktop'),
        stop: () => {},
    });
    cmdm.add(cmdDeviceTablet, {
        run: (ed) => ed.setDevice('Tablet'),
        stop: () => {},
    });
    cmdm.add(cmdDeviceMobile, {
        run: (ed) => ed.setDevice('Mobile portrait'),
        stop: () => {},
    });


}

export default Plugin;