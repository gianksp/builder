# [Dappify Builder ✨](http://grapesjs.com)

[![Build Status](https://github.com/DappifyWeb3/studio/actions/workflows/build.yml/badge.svg)](https://github.com/DappifyWeb3/studio/actions)
[![Chat](https://img.shields.io/badge/chat-discord-7289da.svg)](https://discord.gg/CYYX8yUVgc)


<p align="center"><img src="https://storage.googleapis.com/ethglobal-api-production/projects%2Fawy06%2Fimages%2FScreenshot%202022-07-23%20at%2021.56.32.png" alt="Dappify" width="500" align="center"/></p>


Dappify Builder is a multi-purpose web dApp builder CMS with composable modules, similar to “legos”, that users drag and drop into a canvas for a WYSIWYG experience. These modules are composable and interoperable meaning they can talk to each other. It uses [GrapesJS](http://grapesjs.com) as drag and drop editor. To better understand this concept check the image below

<br/>
<p align="center"><img src="http://grapesjs.com/img/gjs-concept.png" alt="GrapesJS - Style Manager" height="400" align="center"/></p>
<br/>

Generally any 'template system', that you'd find in various applications like CMS, is composed by the **structure** (HTML), **style** (CSS) and **variables**, which are then replaced with other templates and contents on server-side and rendered on client.

You can visit the live builder:<br/>
Dappify - http://dappify.com<br/>


## Table of contents

* [Features](#features)
* [Usage](#usage)
* [Development](#development)
* [Documentation](#documentation)
* [API](#api)
* [Testing](#testing)
* [Plugins](#plugins)
* [Support](#support)
* [Changelog](https://github.com/DappifyWeb3/builder/releases)
* [Contributing](https://github.com/DappifyWeb3/builder/blob/master/CONTRIBUTING.md)
* [License](#license)




## Features

| Blocks | Style Manager | Layer Manager |
|--|--|--|
|<img  src="http://grapesjs.com/img/sc-grapesjs-blocks-prp.jpg"  alt="GrapesJS - Block Manager"  height="400"  align="center"/>|<img  src="http://grapesjs.com/img/sc-grapesjs-style-2.jpg"  alt="GrapesJS - Style Manager"  height="400"  align="center"/>|<img  src="http://grapesjs.com/img/sc-grapesjs-layers-2.jpg"  alt="GrapesJS - Layer Manager"  height="400"  align="center"/>|

| Code Viewer | Asset Manager |
|--|--|
|<img  src="http://grapesjs.com/img/sc-grapesjs-code.jpg"  alt="GrapesJS - Code Viewer"  height="300"  align="center"/>|<img  src="http://grapesjs.com/img/sc-grapesjs-assets-1.jpg"  alt="GrapesJS - Asset Manager"  height="250"  align="center"/>|




## Usage

TBD


## Development

Clone the repository and install all the necessary dependencies (`yarn` is highly recommended)

```sh
$ git clone https://github.com/DappifyWeb3/builder.git
$ cd studio
$ yarn
```

Create .env

```
SKIP_PREFLIGHT_CHECK=true
NODE_PATH=src/
SKIP_PREFLIGHT_CHECK=true
REACT_APP_MIXPANEL_ID=<ID>
REACT_APP_MORALIS_APP_ID=<ID>
REACT_APP_MORALIS_SERVER_URL=<URL>
REACT_APP_HOST_ENV=local
```

Add Tailwind via CDN import to parent project in header inside index.html
```
<script src="https://cdn.tailwindcss.com"></script>
```

Start the dev server

```sh
$ yarn start
```

Once the development server is started you should be able to reach the demo page (eg. `http://localhost:8080`)





## Documentation

Check the getting started guide here: [Documentation]





## API

API References could be found here: [API-Reference]





## Testing

```sh
$ yarn test
```





## Plugins

### Extensions
* [grapesjs-plugin-export](https://github.com/artf/grapesjs-plugin-export) - Export GrapesJS templates in a zip archive
* [grapesjs-plugin-filestack](https://github.com/artf/grapesjs-plugin-filestack) - Add Filestack uploader in Asset Manager
* [grapesjs-plugin-ckeditor](https://github.com/artf/grapesjs-plugin-ckeditor) - Replaces the built-in RTE with CKEditor
* [grapesjs-aviary](https://github.com/artf/grapesjs-aviary) - Add the Aviary Image Editor (dismissed, use the plugin below instead)
* [grapesjs-tui-image-editor](https://github.com/artf/grapesjs-tui-image-editor) - GrapesJS TOAST UI Image Editor
* [grapesjs-blocks-basic](https://github.com/artf/grapesjs-blocks-basic) - Basic set of blocks
* [grapesjs-plugin-forms](https://github.com/artf/grapesjs-plugin-forms) - Set of form components and blocks
* [grapesjs-navbar](https://github.com/artf/grapesjs-navbar) - Simple navbar component
* [grapesjs-component-countdown](https://github.com/artf/grapesjs-component-countdown) - Simple countdown component
* [grapesjs-style-gradient](https://github.com/artf/grapesjs-style-gradient) - Add `gradient` type input to the Style Manager
* [grapesjs-style-filter](https://github.com/artf/grapesjs-style-filter) - Add `filter` type input to the Style Manager
* [grapesjs-style-bg](https://github.com/artf/grapesjs-style-bg) - Full-stack background style property type, with the possibility to add images, colors, and gradients
* [grapesjs-blocks-flexbox](https://github.com/artf/grapesjs-blocks-flexbox) - Add the flexbox block
* [grapesjs-lory-slider](https://github.com/artf/grapesjs-lory-slider) - Slider component by using [lory](https://github.com/meandmax/lory)
* [grapesjs-tabs](https://github.com/artf/grapesjs-tabs) - Simple tabs component
* [grapesjs-tooltip](https://github.com/artf/grapesjs-tooltip) - Simple, CSS only, tooltip component for GrapesJS
* [grapesjs-custom-code](https://github.com/artf/grapesjs-custom-code) - Embed custom code
* [grapesjs-touch](https://github.com/artf/grapesjs-touch) - Enable touch support
* [grapesjs-indexeddb](https://github.com/artf/grapesjs-indexeddb) - Storage wrapper for IndexedDB
* [grapesjs-firestore](https://github.com/artf/grapesjs-firestore) - Storage wrapper for [Cloud Firestore](https://firebase.google.com/docs/firestore)
* [grapesjs-parser-postcss](https://github.com/artf/grapesjs-parser-postcss) - Custom CSS parser for GrapesJS by using [PostCSS](https://github.com/postcss/postcss)
* [grapesjs-typed](https://github.com/artf/grapesjs-typed) - Typed component made by wrapping Typed.js library

### Presets
* [grapesjs-preset-webpage](https://github.com/artf/grapesjs-preset-webpage) - Webpage Builder
* [grapesjs-preset-newsletter](https://github.com/artf/grapesjs-preset-newsletter) - Newsletter Builder
* [grapesjs-mjml](https://github.com/artf/grapesjs-mjml) - Newsletter Builder with MJML components


Find out more about plugins here: [Creating plugins](https://grapesjs.com/docs/modules/Plugins.html)