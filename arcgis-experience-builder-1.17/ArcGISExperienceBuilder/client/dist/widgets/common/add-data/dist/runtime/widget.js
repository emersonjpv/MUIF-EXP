System.register(["jimu-core","jimu-ui","jimu-ui/basic/item-selector","jimu-theme"],(function(e,t){var a={},o={},r={},i={};return{setters:[function(e){a.BaseVersionManager=e.BaseVersionManager,a.DataSourceManager=e.DataSourceManager,a.DataSourceStatus=e.DataSourceStatus,a.DataSourceTypes=e.DataSourceTypes,a.DataSourcesChangeMessage=e.DataSourcesChangeMessage,a.DataSourcesChangeType=e.DataSourcesChangeType,a.Immutable=e.Immutable,a.MessageManager=e.MessageManager,a.MutableStoreManager=e.MutableStoreManager,a.React=e.React,a.ReactRedux=e.ReactRedux,a.ServiceManager=e.ServiceManager,a.SupportedItemTypes=e.SupportedItemTypes,a.SupportedLayerServiceTypes=e.SupportedLayerServiceTypes,a.WidgetState=e.WidgetState,a.classNames=e.classNames,a.css=e.css,a.dataSourceUtils=e.dataSourceUtils,a.defaultMessages=e.defaultMessages,a.esri=e.esri,a.focusElementInKeyboardMode=e.focusElementInKeyboardMode,a.getAppStore=e.getAppStore,a.hooks=e.hooks,a.i18n=e.i18n,a.indexedDBUtils=e.indexedDBUtils,a.jsx=e.jsx,a.loadArcGISJSAPIModule=e.loadArcGISJSAPIModule,a.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules,a.polished=e.polished,a.requestUtils=e.requestUtils,a.uuidv1=e.uuidv1},function(e){o.Alert=e.Alert,o.Button=e.Button,o.CollapsablePanel=e.CollapsablePanel,o.DataActionList=e.DataActionList,o.DataActionListStyle=e.DataActionListStyle,o.Dropdown=e.Dropdown,o.DropdownButton=e.DropdownButton,o.DropdownItem=e.DropdownItem,o.DropdownMenu=e.DropdownMenu,o.FOCUSABLE_CONTAINER_CLASS=e.FOCUSABLE_CONTAINER_CLASS,o.Icon=e.Icon,o.Input=e.Input,o.Label=e.Label,o.Loading=e.Loading,o.LoadingType=e.LoadingType,o.MobilePanel=e.MobilePanel,o.PanelHeader=e.PanelHeader,o.Popper=e.Popper,o.Resizable=e.Resizable,o.Tab=e.Tab,o.Tabs=e.Tabs,o.TextInput=e.TextInput,o.UrlInput=e.UrlInput,o.defaultMessages=e.defaultMessages},function(e){r.ItemCategory=e.ItemCategory,r.ItemSelector=e.ItemSelector,r.ItemSelectorMode=e.ItemSelectorMode},function(e){i.useTheme=e.useTheme}],execute:function(){e((()=>{var e={39524:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M7.5 1.5a.5.5 0 0 1 1 0v2.8a.5.5 0 0 1-1 0zm6.028.874a.5.5 0 0 1 .062.705l-1.414 1.685a.5.5 0 1 1-.766-.643l1.414-1.685a.5.5 0 0 1 .704-.062m-10.352.062a.5.5 0 1 0-.766.643l1.414 1.685a.5.5 0 0 0 .766-.643zM6.244 10.6H5.43zM.961 9.8h4.88c.211 0 .359.19.359.4q0 .207.045.4a1.8 1.8 0 0 0 3.51 0h.814a2.6 2.6 0 0 1-5.139 0H.8v3.6h14.4v-3.6H9.755q.045-.194.045-.4c0-.21.148-.4.358-.4h4.881l-2.267-3.4H3.228zm11.81-4.2a.8.8 0 0 1 .666.356l2.429 3.642a.8.8 0 0 1 .134.444V14.2a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1-.8-.8v-4.158a.8.8 0 0 1 .134-.444l2.429-3.642a.8.8 0 0 1 .665-.356z" clip-rule="evenodd"></path></svg>'},30655:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2.146 4.653a.485.485 0 0 1 .708 0L8 10.24l5.146-5.587a.485.485 0 0 1 .708 0 .54.54 0 0 1 0 .738l-5.5 5.956a.485.485 0 0 1-.708 0l-5.5-5.956a.54.54 0 0 1 0-.738" clip-rule="evenodd"></path></svg>'},94064:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13.854 11.347a.486.486 0 0 1-.708 0L8 5.76l-5.146 5.587a.485.485 0 0 1-.708 0 .54.54 0 0 1 0-.738l5.5-5.956a.485.485 0 0 1 .708 0l5.5 5.956a.54.54 0 0 1 0 .738" clip-rule="evenodd"></path></svg>'},62838:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746z"></path></svg>'},12046:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M11.227 1.312c-.404-.404-1.045-.417-1.432-.03L2.49 8.587l-.48 2.674a.637.637 0 0 0 .73.73l2.673-.48 7.305-7.306c.387-.387.374-1.028-.03-1.431zm-8.114 9.575.32-1.781 4.991-4.992 1.462 1.462-4.992 4.991zm7.473-6.012 1.402-1.4-1.462-1.463-1.401 1.402z" clip-rule="evenodd"></path><path fill="#000" d="M1.5 14a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1z"></path></svg>'},23662:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5"></path></svg>'},9044:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M6 6.5a.5.5 0 0 1 1 0v6a.5.5 0 0 1-1 0zM9.5 6a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5"></path><path fill="#000" fill-rule="evenodd" d="M11 0H5a1 1 0 0 0-1 1v2H.5a.5.5 0 0 0 0 1h1.6l.81 11.1a1 1 0 0 0 .995.9h8.19a1 1 0 0 0 .995-.9L13.9 4h1.6a.5.5 0 0 0 0-1H12V1a1 1 0 0 0-1-1m0 3V1H5v2zm1.895 1h-9.79l.8 11h8.19z" clip-rule="evenodd"></path></svg>'},78791:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxMyAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIG9wYWNpdHk9IjAuNiIgZD0iTTkuNCAwSDBWMTZIMTNWMy42TDkuNCAwWk0xMiAxNUgxVjFIOFY1SDEyVjE1Wk0xMiA0SDlWMUg5LjMxTDEyIDMuNjlWNFoiIGZpbGw9IiMwNzZGRTUiLz4NCjwvc3ZnPg0K"},26356:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxnIG9wYWNpdHk9IjAuOCI+DQo8cGF0aCBkPSJNMTUuMjkgMUgzVjIzSDIxVjYuNzA5TDE1LjI5IDFaTTIwIDIySDRWMkgxNFY4SDIwVjIyWk0yMCA3SDE1VjJIMTUuMkwyMCA2LjhWN1pNMTQgMTFIMTBWMTBIN1YxM0g4VjE3SDdWMjBIMTBWMTlIMTRWMjBIMTdWMTdIMTZWMTNIMTdWMTBIMTRWMTFaTTE2IDExVjEySDE1VjExSDE2Wk04IDExSDlWMTJIOFYxMVpNOSAxOUg4VjE4SDlWMTlaTTE2IDE5SDE1VjE4SDE2VjE5Wk0xNSAxN0gxNFYxOEgxMFYxN0g5VjEzSDEwVjEySDE0VjEzSDE1VjE3WiIgZmlsbD0iIzA3NkZFNSIvPg0KPC9nPg0KPC9zdmc+DQo="},97863:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjcuMDAwMSAxMy4wMThWOS42OTlMMTkuMzAwMSAySDUuMDAwMDdWMTMuMDE4SDIuMDE4MDdWMjcuOTgySDUuMDAwMDdWMzBIMjcuMDAwMVYyNy45ODJIMjkuOTgyMVYxMy4wMThIMjcuMDAwMVpNMTkuMDAwMSAzTDI2LjAwMDEgMTBIMTkuMDAwMVYzWk02LjAwMDA3IDNIMTguMDAwMVYxMUgyNi4wMDAxVjEzLjAxOEg2LjAwMDA3VjNaTTI2LjAwMDEgMjlINi4wMDAwN1YyNy45ODJIMjYuMDAwMVYyOVpNMjkuMDE4MSAyNy4wMThIMi45ODIwN1YxMy45ODJIMjkuMDE4MVYyNy4wMThaTTguODUwMDcgMjMuMjY4QzguMDIxOTEgMjIuNDcwMiA3LjY4OTEzIDIxLjI4NzQgNy45Nzk4MiAyMC4xNzQ5QzguMjcwNTEgMTkuMDYyMyA5LjEzOTM2IDE4LjE5MzQgMTAuMjUxOSAxNy45MDI4QzExLjM2NDUgMTcuNjEyMSAxMi41NDczIDE3Ljk0NDggMTMuMzQ1MSAxOC43NzNMMTIuNjM4MSAxOS40OEMxMi4wODg4IDE4LjkyMzQgMTEuMjgzMyAxOC43MDM4IDEwLjUyNzUgMTguOTA0NkM5Ljc3MTc2IDE5LjEwNTQgOS4xODE1MyAxOS42OTU4IDguOTgwOTcgMjAuNDUxN0M4Ljc4MDQgMjEuMjA3NSA5LjAwMDI2IDIyLjAxMjkgOS41NTcwNyAyMi41NjJDMTAuNDE4NyAyMy4zODU0IDExLjc3NTUgMjMuMzg1NCAxMi42MzcxIDIyLjU2MkwxMy4zNDUxIDIzLjI2OUMxMi43NDkyIDIzLjg2NTQgMTEuOTQwNyAyNC4yMDA1IDExLjA5NzYgMjQuMjAwNUMxMC4yNTQ1IDI0LjIwMDUgOS40NDU5NSAyMy44NjQ0IDguODUwMDcgMjMuMjY4Wk0yMi4wNDAxIDIzLjk4NEwxOS42NjYxIDE4SDIwLjc0MjFMMjIuNTEwMSAyMi40NTNMMjQuMzA0MSAxOEgyNS4zODIxTDIyLjk3MDEgMjMuOTg2TDIyLjA0MDEgMjMuOTg0Wk0xNy45NjYxIDIyLjQ2MUMxOC4wNTA4IDIyLjIzNzYgMTguMDM1OCAyMS45ODg3IDE3LjkyNTEgMjEuNzc3QzE3LjY4OTIgMjEuNDk0IDE3LjM0NjggMjEuMzIxNCAxNi45NzkxIDIxLjNDMTUuNjkwMSAyMS4xMDIgMTUuMDI2MSAyMC41MTYgMTUuMDA1MSAxOS41NTdDMTQuOTk2NCAxOS4xMDg2IDE1LjE2OTUgMTguNjc1NyAxNS40ODUxIDE4LjM1N0MxNS44MjUxIDE4LjAwMjkgMTYuMjk0MiAxNy44MDE5IDE2Ljc4NTEgMTcuOEMxNy41NzU1IDE3Ljc4MiAxOC4zMDk2IDE4LjIwNzMgMTguNjg3MSAxOC45MDJMMTcuODM2MSAxOS40MjhDMTcuNjQwOCAxOS4wMjk2IDE3LjIyOTQgMTguNzgzNiAxNi43ODYxIDE4LjhDMTYuNTY2OCAxOC44IDE2LjM1NzEgMTguODkgMTYuMjA2MSAxOS4wNDlDMTYuMDc3OCAxOS4xNzQyIDE2LjAwNTQgMTkuMzQ1OCAxNi4wMDUxIDE5LjUyNUMxNi4wMDkxIDE5LjczMSAxNi4wMTkxIDIwLjE0MSAxNy4xMzExIDIwLjMxMUMxNy43OTgyIDIwLjM1OTQgMTguNDA2NyAyMC43MSAxOC43ODMxIDIxLjI2M0MxOS4wNDc2IDIxLjcyOTggMTkuMDkzNiAyMi4yODkyIDE4LjkwOTEgMjIuNzkzQzE4LjU1ODIgMjMuNjMyNyAxNy43MTM0IDI0LjE1NzYgMTYuODA1MSAyNC4xQzE1LjkxMDMgMjQuMTM1OSAxNS4wNzQ4IDIzLjY1MzIgMTQuNjU5MSAyMi44NkwxNS41MjMxIDIyLjM1NUMxNS43NjE2IDIyLjgzODcgMTYuMjY2OCAyMy4xMzIzIDE2LjgwNTEgMjMuMUMxNy4yODcyIDIzLjE0ODcgMTcuNzQ5MSAyMi44OTM4IDE3Ljk2NTEgMjIuNDZMMTcuOTY2MSAyMi40NjFaTTQuNTAwMDcgMjMuNUM0LjUwMDA3IDIyLjk0NzcgNC45NDc3OCAyMi41IDUuNTAwMDcgMjIuNUM2LjA1MjM1IDIyLjUgNi41MDAwNyAyMi45NDc3IDYuNTAwMDcgMjMuNUM2LjUwMDA3IDI0LjA1MjMgNi4wNTIzNSAyNC41IDUuNTAwMDcgMjQuNUM0Ljk0ODI0IDI0LjQ5ODkgNC41MDExNyAyNC4wNTE4IDQuNTAwMDcgMjMuNVoiIGZpbGw9IiMwNzZGRTUiLz4NCjwvc3ZnPg0K"},10742:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxnIG9wYWNpdHk9IjAuOCI+DQo8cGF0aCBkPSJNMyAxOEgyVjExSDNWMTUuMjkzTDUuMjkzIDEzSDYuNzA3TDQuODUgMTQuODU3TDcuMDA2IDE4SDUuNzkzTDQuMTMxIDE1LjU3NkwzIDE2LjcwN1YxOFpNMTYgMTFWMThIMTdWMTFIMTZaTTggMTNWMThIOVYxNUM5IDE0LjczNDggOS4xMDUzNiAxNC40ODA0IDkuMjkyODkgMTQuMjkyOUM5LjQ4MDQzIDE0LjEwNTQgOS43MzQ3OCAxNCAxMCAxNEMxMC4yNjUyIDE0IDEwLjUxOTYgMTQuMTA1NCAxMC43MDcxIDE0LjI5MjlDMTAuODk0NiAxNC40ODA0IDExIDE0LjczNDggMTEgMTVWMThIMTJWMTVDMTIgMTQuNzM0OCAxMi4xMDU0IDE0LjQ4MDQgMTIuMjkyOSAxNC4yOTI5QzEyLjQ4MDQgMTQuMTA1NCAxMi43MzQ4IDE0IDEzIDE0QzEzLjI2NTIgMTQgMTMuNTE5NiAxNC4xMDU0IDEzLjcwNzEgMTQuMjkyOUMxMy44OTQ2IDE0LjQ4MDQgMTQgMTQuNzM0OCAxNCAxNVYxOEgxNVYxNUMxNS4wMDIxIDE0LjU5MjcgMTQuODc5MiAxNC4xOTQ1IDE0LjY0NzkgMTMuODU5MkMxNC40MTY2IDEzLjUyMzkgMTQuMDg4IDEzLjI2NzcgMTMuNzA2NSAxMy4xMjVDMTMuMzI1IDEyLjk4MjMgMTIuOTA4OCAxMi45NiAxMi41MTQzIDEzLjA2MTNDMTIuMTE5NyAxMy4xNjI1IDExLjc2NTcgMTMuMzgyMyAxMS41IDEzLjY5MUMxMS4xOTk3IDEzLjMzNzIgMTAuNzgzNiAxMy4xMDE1IDEwLjMyNTggMTMuMDI1OUM5Ljg2NzkzIDEyLjk1MDMgOS4zOTgxMSAxMy4wMzk2IDkgMTMuMjc4VjEzSDhaTTIxIDYuNzA5VjIzSDNWMTlINFYyMkgyMFY4SDE0VjJINFYxMEgzVjFIMTUuMjlMMjEgNi43MDlaTTIwIDYuOEwxNS4yIDJIMTVWN0gyMFY2LjhaIiBmaWxsPSIjMDc2RkU1Ii8+DQo8L2c+DQo8L3N2Zz4NCg=="},79244:e=>{"use strict";e.exports=a},1888:e=>{"use strict";e.exports=i},14321:e=>{"use strict";e.exports=o},56340:e=>{"use strict";e.exports=r}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="";var l={};return n.p=window.jimuConfig.baseUrl,(()=>{"use strict";n.r(l),n.d(l,{__set_webpack_public_path__:()=>ct,default:()=>lt});var e=n(79244),t=n(14321),a=n(39524),o=n.n(a),r=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]])}return a};const i=t=>{const a=window.SVG,{className:i}=t,n=r(t,["className"]),l=(0,e.classNames)("jimu-icon jimu-icon-component",i);return a?e.React.createElement(a,Object.assign({className:l,src:o()},n)):e.React.createElement("svg",Object.assign({className:l},n))},s={_widgetLabel:"Add Data",urlType:"Type",arcgisUrl:"ArcGIS Server Web Service",csvUrl:"CSV Layer",geojsonUrl:"GeoJSON Layer",kmlUrl:"KML Layer",wfsUrl:"WFS OGC Web Service",wmsUrl:"WMS OGC Web Service",wmtsUrl:"WMTS OGC Web Service",dropOrBrowse:"Drop or browse",defaultPlaceholderText:"There is currently no added data.",dropOrBrowseToUpload:"Drop or browse to upload",upload:"Upload",notSupportedFileTypeError:"The file type of {fileName} is not supported.",failedToUploadError:"The file {fileName} cannot be successfully uploaded.",exceedMaxSizeError:"The file size of {fileName} exceeds the maximum limit.",exceedMaxRecordsError:"The number of records in {fileName} exceeds the maximum threshold.",exceedMaxFileNumberError:"The number of files exceeds the allowed limit.",cannotBeAddedError:"{layerName} cannot be added. Support for adding this type is not yet available.",supportedTypesHint:"Supported formats: Shapefile, CSV, KML, GeoJSON, GPX.",fileIsUploading:"{fileName} is being uploaded",filesAreUploading:"{number} files are being uploaded",clickToAddData:"Click to add data",sampleUrl:"Sample URL",fileHasNoValidData:"The file {fileName} does not contain any valid data.",multiFilesNotSupportedFileTypeError:"Unsupported type: The file type for {number} file(s) is not supported.",multiFilesFailedToUploadError:"Upload failed: Unable to upload {number} file(s).",multiFilesExceedMaxRecordsError:"Too many records: The limit for {number} file(s) has been exceeded.",multiFilesExceedMaxSizeError:"File size too large: The limit of {number} file(s) has been exceeded.",multiFilesHasNoValidData:"Invalid data: No valid data found for {number} file(s)."};var c=function(e,t,a,o){return new(a||(a=Promise))((function(r,i){function n(e){try{s(o.next(e))}catch(e){i(e)}}function l(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(n,l)}s((o=o.apply(e,t||[])).next())}))};function d(t){return e.DataSourceManager.getInstance().getDataSource(t)}function u(t,a,o){const r=new e.DataSourcesChangeMessage(t,a,o);e.MessageManager.getInstance().publishMessage(r)}function p(t,a){return c(this,arguments,void 0,(function*(t,a,o=!0){if(!t||0===t.length)return Promise.resolve([]);let r,i,n;if(t.some((e=>e.restLayer))){const t=yield(0,e.loadArcGISJSAPIModules)(["esri/layers/FeatureLayer","esri/Graphic","esri/layers/support/Field"]);r=t[0],i=t[1],n=t[2]}const l=t.map((t=>{var a,o,l,s,c;return t.restLayer&&r&&i&&n?{id:t.dataSourceJson.id,dataSourceJson:(0,e.Immutable)(t.dataSourceJson),layer:new r({source:(null===(o=null===(a=t.restLayer.featureSet)||void 0===a?void 0:a.features)||void 0===o?void 0:o.map((e=>i.fromJSON(e))))||[],objectIdField:null===(l=t.restLayer.layerDefinition)||void 0===l?void 0:l.objectIdField,fields:null===(c=null===(s=t.restLayer.layerDefinition)||void 0===s?void 0:s.fields)||void 0===c?void 0:c.map((e=>n.fromJSON(e))),sourceJSON:t.restLayer.layerDefinition,title:t.dataSourceJson.label||t.dataSourceJson.sourceLabel})}:{id:t.dataSourceJson.id,dataSourceJson:(0,e.Immutable)(t.dataSourceJson)}}));return yield Promise.allSettled(l.filter((e=>e.layer)).map((e=>c(this,void 0,void 0,(function*(){var t;const a=null===(t=e.layer.sourceJSON)||void 0===t?void 0:t.capabilities;a&&(yield e.layer.load(),e.layer.sourceJSON.capabilities=a)}))))),Promise.allSettled(l.map((t=>e.DataSourceManager.getInstance().createDataSource(t).then((e=>e.isDataSourceSet()&&!e.areChildDataSourcesCreated()?e.childDataSourcesReady().then((()=>e)):e))))).then((e=>e.filter((e=>"fulfilled"===e.status)).map((e=>e.value)))).then((r=>(o&&r.length>0&&u(a,e.DataSourcesChangeType.Create,r),r.length<t.length?Promise.reject(new Error("Failed to create some data source.")):r)))}))}function m(e){var t;e.stopPropagation(),e.preventDefault(),null===(t=e.nativeEvent)||void 0===t||t.stopImmediatePropagation()}function g(t){const a=e.React.useRef(),o=e.React.useRef();return Object.is(o.current,t)||(a.current=o.current,o.current=t),a.current}function M(e,t){return`add-data-${e}-${t}-${(new Date).getTime()}`}function x(t,a){return c(this,void 0,void 0,(function*(){var o,r,i,n;if(1===((null==a?void 0:a.layers)||[]).concat((null==a?void 0:a.tables)||[]).length&&(1===(null===(o=null==a?void 0:a.layers)||void 0===o?void 0:o.length)&&(null===(i=null===(r=null==a?void 0:a.layers)||void 0===r?void 0:r[0])||void 0===i?void 0:i.type)===e.SupportedLayerServiceTypes.FeatureLayer||1===(null===(n=null==a?void 0:a.tables)||void 0===n?void 0:n.length))){const o=function(e,t){var a;return`${e}/${(null===(a=((null==t?void 0:t.layers)||[]).concat((null==t?void 0:t.tables)||[])[0])||void 0===a?void 0:a.id)||0}`}(t,a);return{url:o,layerDefinition:yield e.ServiceManager.getInstance().fetchServiceInfo(o).then((e=>e.definition))}}return null}))}var f=n(23662),y=n.n(f),v=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]])}return a};const S=t=>{const a=window.SVG,{className:o}=t,r=v(t,["className"]),i=(0,e.classNames)("jimu-icon jimu-icon-component",o);return a?e.React.createElement(a,Object.assign({className:i,src:y()},r)):e.React.createElement("svg",Object.assign({className:i},r))};var h=n(56340);const j=()=>[{type:h.ItemCategory.MyContent,customLabel:"",enabled:!0,id:h.ItemCategory.MyContent},{type:h.ItemCategory.MyGroup,customLabel:"",enabled:!0,id:h.ItemCategory.MyGroup},{type:h.ItemCategory.MyOrganization,customLabel:"",enabled:!0,id:h.ItemCategory.MyOrganization},{type:h.ItemCategory.Public,customLabel:"",enabled:!0,id:h.ItemCategory.Public},{type:h.ItemCategory.LivingAtlas,customLabel:"",enabled:!0,id:h.ItemCategory.LivingAtlas}],D=t=>{const a=(e=>new Map([[h.ItemCategory.MyContent,e("myContent")],[h.ItemCategory.MyGroup,e("myGroup")],[h.ItemCategory.MyOrganization,e("myOrganization")],[h.ItemCategory.Public,e("public")],[h.ItemCategory.LivingAtlas,e("livingAtlas")],[h.ItemCategory.Curated,e("curated")]]))(t);return e.React.useCallback((e=>{var t;const o=a.get(e.type);if(e.type!==h.ItemCategory.Curated)return o;const r=Number(null===(t=e.id.split("_"))||void 0===t?void 0:t.pop());return!r||r<2?o:`${o} ${r}`}),[a])};var I=function(e,t,a,o){return new(a||(a=Promise))((function(r,i){function n(e){try{s(o.next(e))}catch(e){i(e)}}function l(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(n,l)}s((o=o.apply(e,t||[])).next())}))};const N=e.dataSourceUtils.dataSourceJsonCreator,{useMemo:b,useState:w}=e.React,{useSelector:T}=e.ReactRedux,O=(0,e.Immutable)([e.SupportedItemTypes.FeatureService,e.SupportedItemTypes.MapService,e.SupportedItemTypes.SceneService,e.SupportedItemTypes.FeatureCollection,e.SupportedItemTypes.ImageService,e.SupportedItemTypes.VectorTileService,e.SupportedItemTypes.CSV,e.SupportedItemTypes.GeoJSON,e.SupportedItemTypes.KML,e.SupportedItemTypes.WFS,e.SupportedItemTypes.WMS,e.SupportedItemTypes.WMTS,e.SupportedItemTypes.GroupLayer]),A=a=>{const{className:o="",widgetId:r,multiDataOptions:i,portalUrl:n,nextOrder:l,onChange:c,itemCategoriesInfo:d}=a,u=T((e=>e.dataSourcesInfo)),[p,m]=w([]),g=b((()=>(0,e.Immutable)(i.filter((t=>{var a;return t.dataSourceJson.itemId&&(null===(a=null==u?void 0:u[t.dataSourceJson.id])||void 0===a?void 0:a.instanceStatus)===e.DataSourceStatus.NotCreated})).map((e=>e.dataSourceJson.itemId)).concat(p))),[i,u,p]),f=b((()=>(0,e.Immutable)(i.map((e=>e.dataSourceJson.itemId)).filter((e=>!g.some((t=>t===e)))))),[i,g]),y=e.hooks.useTranslation(t.defaultMessages,s),v=D(y),S=b((()=>d?d.filter((e=>e.enabled)).map((e=>({id:e.id,type:e.type,customLabel:e.customLabel||v(e),curatedFilter:e.curatedFilter}))).asMutable():void 0),[v,d]);return(0,e.jsx)("div",{className:`data-item-search w-100 h-100 ${o}`,css:E},(0,e.jsx)(h.ItemSelector,{mode:h.ItemSelectorMode.Simple,itemType:O,portalUrl:n,isMultiple:!0,onSelect:(t,a)=>I(void 0,void 0,void 0,(function*(){if(i.some((e=>{var t;return(null===(t=e.dataSourceJson)||void 0===t?void 0:t.itemId)===a.id})))return;m(p.concat(null==a?void 0:a.id));const t=yield function(t,a){return I(this,void 0,void 0,(function*(){var o,r,i;try{if(!a)return Promise.resolve(null);if(a.type===e.SupportedItemTypes.FeatureService&&a.url&&/^(http(s)?:)?\/\//.test(a.url)){const n=a.url.split("?")[0].replace(/^http:/,"https:").replace(/\/$/,""),l=yield e.ServiceManager.getInstance().fetchServiceInfo(n).then((e=>e.definition));let s,c;const d={itemId:a.id,portalUrl:a.portalUrl};if(e.dataSourceUtils.isSupportedSingleArcGISLayerService(a.url))s=a.url,c=l;else{const e=((null==l?void 0:l.layers)||[]).concat((null==l?void 0:l.tables)||[]),t=yield x(n,l);t&&(s=t.url,c=t.layerDefinition,d.sourceLabel=a.title||(null===(o=e[0])||void 0===o?void 0:o.name))}if(s&&c)return null===(i=null===(r=N.createDataSourceJsonByLayerDefinition(t,c,s))||void 0===r?void 0:r.merge(d))||void 0===i?void 0:i.asMutable({deep:!0})}return Promise.resolve(N.createDataSourceJsonByItemInfo(t,a,a.portalUrl).asMutable({deep:!0}))}catch(e){return console.error("Failed to create data source",e),Promise.resolve(null)}}))}(M(r,l),a);m(p.filter((e=>e!==(null==a?void 0:a.id)))),c(i.concat({dataSourceJson:t,order:l}).filter((e=>!!e.dataSourceJson)))})),onRemove:(e,t)=>{c(i.filter((e=>e.dataSourceJson.itemId!==t.id)))},selectedItems:f,loadingItems:g,itemCategoriesInfo:S,disableDetailPopper:!0,allowAllSceneService:!0,showItemTypeCategoryFilter:!0,enableContentSortInSimpleMode:!0,disableDefaultSortSetting:!0}))};const E=e.css`
  position: relative;
`;var C=function(e,t,a,o){return new(a||(a=Promise))((function(r,i){function n(e){try{s(o.next(e))}catch(e){i(e)}}function l(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(n,l)}s((o=o.apply(e,t||[])).next())}))};const z=e.dataSourceUtils.dataSourceJsonCreator;var L;!function(e){e.NotSupportedType="addDataErrorNotSupported",e.FailedToFetch="invalidResourceItem",e.CannotBeAdded="cannotBeAddedError"}(L||(L={}));const{useState:k,useMemo:U,useRef:F}=e.React;var P;!function(e){e.ArcGISWebService="arcgisUrl",e.WMS="wmsUrl",e.WMTS="wmtsUrl",e.WFS="wfsUrl",e.KML="kmlUrl",e.CSV="csvUrl",e.GeoJSON="geojsonUrl"}(P||(P={}));const R={[P.ArcGISWebService]:"https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Cities/FeatureServer/0",[P.WMS]:"https://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi?service=WMS&request=GetCapabilities",[P.WMTS]:"https://wayback.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/WMTS/1.0.0/default028mm/MapServer/tile/45134/%7Blevel%7D/%7Brow%7D/%7Bcol%7D",[P.WFS]:"https://dservices.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/services/JapanPrefectures2018/WFSServer",[P.KML]:"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month_age_animated.kml",[P.CSV]:"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.csv",[P.GeoJSON]:"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson"},J=["https"],W=a=>{const{className:o="",widgetId:r,onChange:i,setErrorMsg:n,nextOrder:l,multiDataOptions:c}=a,d=e.hooks.useTranslation(e.defaultMessages,t.defaultMessages,s),[u,p]=k(P.ArcGISWebService),[m,g]=k({value:"",valid:!0}),[f,y]=k(!1),v=F(null),S=U((()=>{const e={};return Object.values(P).forEach((t=>{e[t]=d(t)})),e}),[d]),h=t=>{const a=function(t,a){if(!t||!a)return!0;return a!==P.ArcGISWebService?/^https:\/\//.test(t):e.dataSourceUtils.isSupportedArcGISService(t)||B(t)}(t,u);return{valid:a,msg:!a&&d("invalidUrlMessage")}};return(0,e.jsx)("div",{className:`data-url-input w-100 h-100 p-4 ${o}`,css:Q},(0,e.jsx)("div",null,(0,e.jsx)("div",{className:"url-input-label"},d("urlType")),(0,e.jsx)(t.Dropdown,{className:"w-100"},(0,e.jsx)(t.DropdownButton,{size:"sm",className:"text-left","aria-label":d("urlType")},S[u]),(0,e.jsx)(t.DropdownMenu,null,Object.keys(S).map(((a,o)=>(0,e.jsx)(t.DropdownItem,{key:o,onClick:()=>{var e;(e=a)!==u&&(p(e),g({value:"",valid:m.valid}))}},S[a])))))),(0,e.jsx)("div",{className:"mt-4"},(0,e.jsx)("div",{className:"url-input-label"},d("url")),(0,e.jsx)(t.UrlInput,{className:(0,e.classNames)({"with-error":!m.valid}),height:80,schemes:J,value:m.value,checkValidityOnChange:h,checkValidityOnAccept:h,onChange:e=>{g(e)},"aria-label":d("url")})),(0,e.jsx)("div",{className:"mt-4"},(0,e.jsx)(t.Button,{onClick:()=>C(void 0,void 0,void 0,(function*(){var t;const a=null==m?void 0:m.value;if(a)try{y(!0);const t=yield function(t,a,o){return C(this,void 0,void 0,(function*(){return a&&o?(a=a.replace(/^http:/,"https:"),Object.keys(V).some((e=>e===o))?{id:t,type:V[o],sourceLabel:a.split("?")[0].split("/").filter((e=>!!e)).reverse()[0],url:a}:o===P.ArcGISWebService?B(a=a.split("?")[0])?function(t,a){return C(this,void 0,void 0,(function*(){if(!t||!a)return Promise.reject(new Error(L.NotSupportedType));const o=t.match(new RegExp("(?<portalUrl>.+)content/items/.+/resources/styles/root.json")).groups.portalUrl,r=t.match(new RegExp(".+/content/items/(?<itemId>.+)/resources/styles/root.json")).groups.itemId,i=yield e.requestUtils.requestWrapper(o,(t=>e.esri.restPortal.getItem(r,{portal:o,authentication:t})));return"Vector Tile Service"!==i.type?Promise.reject(new Error(L.NotSupportedType)):{id:a,type:e.DataSourceTypes.VectorTileService,sourceLabel:i.title,url:t,itemId:r,portalUrl:o.replace("/sharing/rest/","")}}))}(a,t):function(t,a){return C(this,void 0,void 0,(function*(){if(!t||!a)return Promise.reject(new Error(L.NotSupportedType));const o=yield e.ServiceManager.getInstance().fetchServiceInfo(t).then((e=>e.definition));let r=t,i=o;if(e.dataSourceUtils.isSupportedWholeArcGISService(t)&&z.getDataSourceTypeFromArcGISWholeServiceUrl(t)===e.DataSourceTypes.FeatureService){const e=t.split("?")[0].replace(/^http:/,"https:").replace(/\/$/,""),a=yield x(e,o);a&&(r=a.url,i=a.layerDefinition)}return function(e,t,a){var o;const r=null===(o=z.createDataSourceJsonByLayerDefinition(e,a,t))||void 0===o?void 0:o.asMutable({deep:!0});if(r)return r;throw new Error(L.FailedToFetch)}(a,r,i)}))}(a,t):Promise.reject(new Error(L.NotSupportedType))):Promise.reject(new Error("Need URL."))}))}(M(r,l),a,u);if(v.current=t,t.type===e.DataSourceTypes.GroupLayer)throw new Error(L.CannotBeAdded);t&&i(c.concat({dataSourceJson:t,order:l}))}catch(e){e.message===L.NotSupportedType?n(d(L.NotSupportedType)):e.message===L.CannotBeAdded?n(d(L.CannotBeAdded,{layerName:null===(t=v.current)||void 0===t?void 0:t.sourceLabel})):n(d(L.FailedToFetch))}finally{v.current=null,y(!1)}})),type:"primary",disabled:!m.value||!m.valid,className:"px-4 w-100",title:d("add"),"aria-label":d("add")},d("add"))),(0,e.jsx)("div",{className:"mt-4"},(0,e.jsx)("div",{className:"url-input-label mb-1"},d("sampleUrl")),(0,e.jsx)("div",{className:"sample-url"},R[u])),f&&(0,e.jsx)("div",{className:"upload-loading-container"},(0,e.jsx)("div",{className:"upload-loading-content"},(0,e.jsx)(t.Loading,{className:"upload-loading",type:t.LoadingType.Primary,width:30,height:28}))))};function B(e){return!(!e||!/^https:\/\//.test(e))&&/\/content\/items\/.+\/resources\/styles\/root.json/.test(e)}const V={[P.CSV]:e.DataSourceTypes.CSV,[P.GeoJSON]:e.DataSourceTypes.GeoJSON,[P.KML]:e.DataSourceTypes.KML,[P.WFS]:e.DataSourceTypes.WFS,[P.WMS]:e.DataSourceTypes.WMS,[P.WMTS]:e.DataSourceTypes.WMTS};const Q=e.css`
  position: relative;
  overflow: auto;

  .upload-loading-container {
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .upload-loading-content {
    position: absolute;
    top: 0;
    bottom: 60px;
    right: 0;
    left: 0;
  }
  .upload-loading {
    .donut-loading {
      background-color: var(--ref-palette-white);
    }
  }

  .sample-url {
    font-style: italic;
    font-weight: 400;
    font-size: 13px;
    word-break: break-all;
  }

  .url-input.with-error {
    margin-bottom: 60px;
  }
  .url-input-label {
    font-size: 13px;
    font-weight: 500;
    margin-bottom: 8px;
    color: var(--ref-palette-neutral-1100);
  }
`;var G,Y=n(1888),Z=function(e,t,a,o){return new(a||(a=Promise))((function(r,i){function n(e){try{s(o.next(e))}catch(e){i(e)}}function l(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(n,l)}s((o=o.apply(e,t||[])).next())}))};!function(e){e.CSV="csv",e.GeoJson="geojson",e.Shapefile="shapefile",e.KML="kml",e.GPX="gpx"}(G||(G={}));const H={[G.CSV]:10485760,[G.GeoJson]:10485760,[G.Shapefile]:2097152,[G.KML]:10485760,[G.GPX]:10485760};var $;!function(e){e.NotSupportedType="notSupportedFileTypeError",e.FailedToUpload="failedToUploadError",e.ExceedMaxSize="exceedMaxSizeError",e.ExceedMaxRecords="exceedMaxRecordsError",e.NoValidData="fileHasNoValidData",e.ExceedMaxFileNumber="exceedMaxFileNumberError"}($||($={}));const _=new Map([[$.NotSupportedType,"multiFilesNotSupportedFileTypeError"],[$.FailedToUpload,"multiFilesFailedToUploadError"],[$.ExceedMaxSize,"multiFilesExceedMaxSizeError"],[$.ExceedMaxRecords,"multiFilesExceedMaxRecordsError"],[$.NoValidData,"multiFilesHasNoValidData"]]),{useState:K,useEffect:q,useMemo:X,useRef:ee}=e.React,te=/iPad|iPhone|iPod/.test(window.navigator.userAgent)?void 0:Object.values(G).map((e=>oe(e))).join(","),ae=a=>{const{className:o="",onChange:r,setErrorMsg:i,nextOrder:l,portalUrl:c,widgetId:d,multiDataOptions:u}=a,p=e.hooks.useTranslation(e.defaultMessages,s),g=X((()=>`${d}-drag-to-upload`),[d]),x=X((()=>`${d}-click-to-upload`),[d]),[f,y]=K(!1),v=ee(null),h=ee([]);q((()=>{r(u)}),[u,r]);const j=ee(),D=t=>Z(void 0,void 0,void 0,(function*(){var a;if(!t.type)throw new Error($.NotSupportedType);if(t.size>H[t.type])throw new Error($.ExceedMaxSize);const o=yield function(t,a){return Z(this,void 0,void 0,(function*(){var o,r,i,n,l,s,c,d,u,p,m;const g=yield(0,e.loadArcGISJSAPIModule)("esri/request");if(t.type===G.KML){const a=function(){var t,a,o;const r=null===(a=null===(t=(0,e.getAppStore)().getState())||void 0===t?void 0:t.portalSelf)||void 0===a?void 0:a.isPortal;if(r){return`${null===(o=(0,e.getAppStore)().getState())||void 0===o?void 0:o.portalUrl}/sharing/kml`}const i=window.jimuConfig.hostEnv;return`https://utility${"dev"===i?"devext":"qa"===i?"qa":""}.arcgis.com/sharing/kml`}(),r=yield function(e){return new Promise((t=>{const a=new FileReader;a.onload=e=>{t(e.target.result)},a.readAsText(e.data.get("file"))}))}(t),i=yield g(a,{query:{kmlString:encodeURIComponent(r),model:"simple",folders:""},responseType:"json"});return null===(o=null==i?void 0:i.data)||void 0===o?void 0:o.featureCollection}let M={};if(t.type!==G.GPX){if((null===(i=null===(r=(0,e.getAppStore)().getState())||void 0===r?void 0:r.portalSelf)||void 0===i?void 0:i.isPortal)&&t.type===G.GeoJson)M={targetSR:{wkid:102100,latestWkid:3857},type:t.type,maxRecordCount:4e3};else{const o=`${a}/sharing/rest/content/features/analyze`;t.data.set("analyzeParameters",JSON.stringify({enableGlobalGeocoding:!0,sourceLocale:null!==(l=null===(n=(0,e.getAppStore)().getState().appContext)||void 0===n?void 0:n.locale)&&void 0!==l?l:"en"}));const r=yield g(o,{body:t.data,method:"post"});t.data.delete("analyzeParameters"),M=null===(s=null==r?void 0:r.data)||void 0===s?void 0:s.publishParameters}}const x=`${a}/sharing/rest/content/features/generate`;t.data.set("publishParameters",JSON.stringify(Object.assign(Object.assign({},M),{name:t.name})));const f=yield g(x,{body:t.data,method:"post"});return t.data.delete("publishParameters"),(null===(c=null==f?void 0:f.data)||void 0===c?void 0:c.featureCollection)&&(null===(p=null===(u=null===(d=null==f?void 0:f.data)||void 0===d?void 0:d.featureCollection)||void 0===u?void 0:u.layers)||void 0===p||p.forEach((e=>{var a,o,r,i;null===(o=null===(a=e.featureSet)||void 0===a?void 0:a.features)||void 0===o||o.forEach((t=>{var a,o;null===(o=null===(a=e.layerDefinition)||void 0===a?void 0:a.fields)||void 0===o||o.forEach((e=>{var a;const o=null===(a=t.attributes)||void 0===a?void 0:a[e.name];if("esriFieldTypeSmallInteger"===e.type){if("boolean"==typeof o)return void(t.attributes[e.name]=o?1:0);"number"!=typeof o&&(t.attributes[e.name]=null)}}))})),(null===(i=null===(r=e.layerDefinition)||void 0===r?void 0:r.name)||void 0===i?void 0:i.includes(t.name))||(e.layerDefinition.name=`${t.name} - ${e.layerDefinition.name}`)}))),null===(m=null==f?void 0:f.data)||void 0===m?void 0:m.featureCollection}))}(t,c),r=null===(a=null==o?void 0:o.layers)||void 0===a?void 0:a.filter((e=>{var t,a;return(null===(a=null===(t=null==e?void 0:e.featureSet)||void 0===t?void 0:t.features)||void 0===a?void 0:a.length)>0}));if((null==r?void 0:r.length)>0)return r.map(((a,o)=>{var r;return{dataSourceJson:{id:M(d,l+o),type:e.DataSourceTypes.FeatureLayer,sourceLabel:(null===(r=a.layerDefinition)||void 0===r?void 0:r.name)||(0===o?t.name:`${t.name} ${o}`)},order:l+o,restLayer:Object.assign(Object.assign({},a),{layerDefinition:Object.assign(Object.assign({},a.layerDefinition),{capabilities:"Query, Editing, Create, Delete, Update, Extract"})})}}));throw new Error($.NoValidData)})),[I,N]=K(null),b=t=>Z(void 0,void 0,void 0,(function*(){if(!t.target.files)return;y(!0),N(null);let a=[];const o=new Map,n=Array.from(t.target.files);if(n.length>30)o.set($.ExceedMaxFileNumber,[]);else{const t=n.map((t=>function(t){const a=function(e){return Object.values(G).find((t=>null==e?void 0:e.endsWith(oe(t))))}(t.name),o=t.name.replace(`.${a}`,""),r=new FormData;return r.set("file",t),r.set("filetype",a),r.set("f","json"),{id:(0,e.uuidv1)(),type:a,name:o,data:r,size:t.size}}(t)));v.current=t,yield Promise.allSettled(t.map((e=>D(e)))).then((e=>{e.forEach(((e,r)=>{var i;const n=t[r];if(h.current.some((e=>e.id===n.id)))h.current=h.current.filter((e=>e.id!==n.id));else if("fulfilled"===e.status)(null===(i=e.value)||void 0===i?void 0:i.length)&&(a=a.concat(e.value));else{const t=(e=>{var t,a,o,r;return e.message===$.NotSupportedType?$.NotSupportedType:e.message===$.ExceedMaxSize||(null===(o=null===(a=null===(t=e.details)||void 0===t?void 0:t.messages)||void 0===a?void 0:a[0])||void 0===o?void 0:o.includes("max size"))?$.ExceedMaxSize:e.message===$.ExceedMaxRecords||(null===(r=e.message)||void 0===r?void 0:r.includes("maximum number"))?$.ExceedMaxRecords:e.message===$.NoValidData?$.NoValidData:$.FailedToUpload})(e.reason);o.set(t,o.has(t)?o.get(t).concat(n.name):[n.name])}}))}))}if((null==a?void 0:a.length)>0&&r(u.concat(a)),o.size>0){const e=Array.from(o.keys()).map((e=>{const t=o.get(e);return t.length?1===t.length&&1===o.size?{errStr:p(e,{fileName:t[0]})}:{errStr:p(_.get(e),{number:t.length}),details:t}:{errStr:p(e)}}));1!==e.length||e[0].details?N(e.map((e=>Object.assign(Object.assign({},e),{open:!0})))):i(e[0].errStr)}y(!1),v.current=null,t.target.value=null,j.current&&(0,e.focusElementInKeyboardMode)(j.current)})),[w,T]=K(!1),O=(0,Y.useTheme)(),A=ee(null);q((()=>{if(null==I?void 0:I.length){const e=setTimeout((()=>{A.current===e&&(N(null),A.current=null)}),5e3);A.current=e}}),[I]);const E=(t=!1)=>{var a,o,r;const i=null===(a=v.current)||void 0===a?void 0:a.length,n=i>1,l=n?"filesAreUploading":"fileIsUploading",s=n?"number":"fileName",c=n?i:null===(r=null===(o=v.current)||void 0===o?void 0:o[0])||void 0===r?void 0:r.name;return p(l,{[s]:!n&&t?(0,e.jsx)("div",{className:"w-100 multiple-lines-truncate font-16"},c):c})};return(0,e.jsx)("div",{className:`data-file-upload w-100 h-100 pb-4 pt-6 px-4 d-flex ${o}`,css:re},(0,e.jsx)("div",{className:"supported-type-icons d-flex justify-content-around align-items-center px-6 mb-4"},(0,e.jsx)(t.Icon,{width:13,height:16,icon:n(78791)}),(0,e.jsx)(t.Icon,{width:24,height:24,icon:n(26356)}),(0,e.jsx)(t.Icon,{width:32,height:32,icon:n(97863)}),(0,e.jsx)(t.Icon,{width:24,height:24,icon:n(10742)}),(0,e.jsx)(t.Icon,{width:13,height:16,icon:n(78791)})),(0,e.jsx)("div",{className:"supported-types"},p("supportedTypesHint")),(0,e.jsx)("div",{className:"mt-4 drag-area-container"},(0,e.jsx)(t.Label,{for:g,className:"drag-area text-center d-flex"},(0,e.jsx)("div",{className:"font-14"},p("dropOrBrowseToUpload")),(0,e.jsx)("div",{className:"upload-btn-container",title:p("upload")},(0,e.jsx)(t.Label,{for:x,className:"upload-btn text-center mt-4 mb-0 text-truncate",css:w?e.css`outline: ${e.polished.rem(2)} solid ${O.sys.color.primary.dark}`:""},(0,e.jsx)(S,{size:15,className:"mr-2"}),(0,e.jsx)("span",null,p("upload"))),(0,e.jsx)(t.Input,{id:x,title:"",className:"upload-btn-file-input",type:"file",accept:te,onChange:b,tabIndex:f?-1:0,ref:j,onFocus:()=>{T(!0)},onBlur:()=>{T(!1)},multiple:!0}))),(0,e.jsx)(t.Input,{id:g,onClick:m,title:"",className:"drag-area-file-input",type:"file",accept:te,onChange:b,tabIndex:-1})),f&&(0,e.jsx)("div",{className:"upload-loading-container",title:E()},(0,e.jsx)("div",{className:"upload-loading-content"},(0,e.jsx)(t.Loading,{className:"upload-loading",type:t.LoadingType.Primary,width:30,height:28}),(0,e.jsx)("div",{className:"upload-loading-file-name d-flex justify-content-center align-items-center"},(0,e.jsx)("div",{className:"w-100 font-14 text-center"},E(!0))),(0,e.jsx)("div",{className:"upload-loading-btn d-flex justify-content-center"},(0,e.jsx)(t.Button,{type:"danger",onClick:()=>{h.current=h.current.concat(v.current),v.current=null,y(!1)}},p("cancel"))))),(null==I?void 0:I.length)&&(0,e.jsx)("div",{className:"errors-container"},I.map(((a,o)=>{var r;return(0,e.jsx)(t.Alert,{className:"w-100 mb-2",closable:!0,withIcon:!0,form:"basic",type:"warning",title:a.errStr,open:a.open,key:a.errStr,onClose:()=>{(e=>{const t=[...I];t[e].open=!1,t.every((e=>!e.open))?N(null):N(t)})(o)}},(null===(r=a.details)||void 0===r?void 0:r.length)&&(0,e.jsx)("div",{className:"collapse-panel-container"},(0,e.jsx)(t.CollapsablePanel,{label:p("details")},a.details.map(((t,a)=>(0,e.jsx)("p",{key:a,className:"mb-1"},t))))))}))))};function oe(e){return"shapefile"===e?".zip":`.${e}`}const re=e.css`
  position: relative;
  flex-direction: column;
  color: var(--ref-palette-neutral-1000);

  .font-14 {
    font-size: 14px;
  }

  .font-16 {
    font-size: 16px;
    font-weight: 500;
  }

  .upload-loading-container {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: var(--ref-palette-white);
    z-index: 2;
  }
  .upload-loading-content {
    position: absolute;
    top: 0;
    bottom: 60px;
    right: 0;
    left: 0;
  }
  .upload-loading-file-name {
    position: absolute;
    width: 200px;
    height: 100px;
    right: calc(50% - 100px);
    top: 80px;
    word-break: break-all;
    overflow: hidden;
  }
  .upload-loading-btn {
    position: absolute;
    width: 200px;
    height: 32px;
    right: calc(50% - 100px);
    top: calc(50% + 80px);
    button.btn-danger {
      background-color: var(--sys-color-error-main);
      border: 0;
    }
  }

  .supported-types {
    font-size: 13px;
  }

  .drag-area-container {
    width: 100%;
    flex: 1
  }
  .drag-area {
    border: 1px dashed var(--ref-palette-neutral-500);
    width: 100%;
    height: 100%;
    user-select: none;
    flex-direction: column;
    justify-content: center;
  }
  .upload-btn {
    border: 1px solid var(--ref-palette-neutral-500);
    color: var(--ref-palette-neutral-1100);
    background-color: var(--ref-palette-white);
    border-radius: 2px;
    line-height: 28px;
    padding-left: 16px;
    padding-right: 16px;
    height: 30px;
    user-select: none;
    max-width: 100%;
  }
  .upload-btn-container:hover {
    .upload-btn {
      background-color: var(--ref-palette-neutral-300) !important;
    }
  }
  .drag-area-container, .upload-btn-container {
    position: relative;
    display: inline-block;
    z-index: 1;
  }
  .upload-btn-file-input, .drag-area-file-input {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
  }
  .upload-btn-file-input {
    cursor: pointer;
  }

  .errors-container {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    max-height: 100%;
    overflow-y: auto;
    .jimu-alert-panel-title {
      font-size: 13px;
      font-weight: 400;
    }
    .collapse-label {
      font-size: 13px;
    }
    .collapse-panel-container {
      border-top: 1px solid var(--sys-color-divider-tertiary);
    }
  }

`;var ie=n(30655),ne=n.n(ie),le=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]])}return a};const se=t=>{const a=window.SVG,{className:o}=t,r=le(t,["className"]),i=(0,e.classNames)("jimu-icon jimu-icon-component",o);return a?e.React.createElement(a,Object.assign({className:i,src:ne()},r)):e.React.createElement("svg",Object.assign({className:i},r))};var ce=n(94064),de=n.n(ce),ue=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]])}return a};const pe=t=>{const a=window.SVG,{className:o}=t,r=ue(t,["className"]),i=(0,e.classNames)("jimu-icon jimu-icon-component",o);return a?e.React.createElement(a,Object.assign({className:i,src:de()},r)):e.React.createElement("svg",Object.assign({className:i},r))};var me=n(62838),ge=n.n(me),Me=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]])}return a};const xe=t=>{const a=window.SVG,{className:o}=t,r=Me(t,["className"]),i=(0,e.classNames)("jimu-icon jimu-icon-component",o);return a?e.React.createElement(a,Object.assign({className:i,src:ge()},r)):e.React.createElement("svg",Object.assign({className:i},r))},{useState:fe,useEffect:ye}=e.React,{useSelector:ve}=e.ReactRedux,Se=a=>{const{multiDataOptions:o,widgetId:r,onFinish:i,onRemove:n,setErrorMsg:l}=a,s=e.hooks.useTranslation(t.defaultMessages),[c,m]=fe(!1),[M,x]=fe(!1),f=g(o);ye((()=>{!function(t,a,o=!0){const r=t.map((e=>d(e))).filter((e=>!!e));o&&r.length>0&&u(a,e.DataSourcesChangeType.Remove,r),Promise.resolve().then((()=>{t.forEach((t=>{e.MutableStoreManager.getInstance().updateStateValue("setFilter",t,null),e.DataSourceManager.getInstance().destroyDataSource(t)}))}))}(((null==f?void 0:f.filter((e=>!o.some((t=>t.dataSourceJson.id===e.dataSourceJson.id)))))||[]).map((e=>e.dataSourceJson.id)),r,!1),x(!0);p(o.filter((e=>!(null==f?void 0:f.some((t=>e.dataSourceJson.id===t.dataSourceJson.id))))),r,!1).catch((e=>{l(s("dataSourceCreateError"))})).finally((()=>{x(!1)}))}),[r,o,f,l,s]);const y=()=>{i(o)};return(0,e.jsx)("div",{className:`data-collapse ${t.FOCUSABLE_CONTAINER_CLASS}`,css:je},o.length>0&&(0,e.jsx)("div",{className:"data-container surface-2 p-4"},(0,e.jsx)("div",{className:"d-flex justify-content-between align-items-center"},(0,e.jsx)("div",{className:"d-flex align-items-center n-selected",role:"group","aria-label":s("selected")},(0,e.jsx)("span",{className:"mr-2"},o.length),(0,e.jsx)("span",{className:"text-truncate",title:s("selected")},s("selected")),(0,e.jsx)(t.Button,{className:"jimu-outline-inside",type:"tertiary",size:"sm",icon:!0,onClick:()=>{m(!c)},title:s(c?"down":"up"),"aria-label":s(c?"down":"up")},c?(0,e.jsx)(se,{size:"s"}):(0,e.jsx)(pe,{size:"s"}))),(0,e.jsx)("div",{className:"small-done-btn"},!c&&(0,e.jsx)(t.Button,{onClick:y,disabled:M,type:"primary",className:"text-truncate w-100 px-2",title:s("done")},s("done")))),c&&(0,e.jsx)("div",{className:"data-items",role:"list"},o.map(((t,a)=>(0,e.jsx)(he,{key:a,isLoading:M,onRemove:n,dsJson:(0,e.Immutable)(t.dataSourceJson)})))),c&&(0,e.jsx)("div",{className:"big-done-btn w-100"},(0,e.jsx)(t.Button,{onClick:y,disabled:M,type:"primary",className:"text-truncate w-100",title:s("done"),"aria-label":s("done")},s("done")))))};function he({dsJson:a,isLoading:o,onRemove:r}){const i=e.hooks.useTranslation(t.defaultMessages),n=e.i18n.getIntl(),l=d(a.id),s=ve((e=>{var t;return null===(t=e.dataSourcesInfo)||void 0===t?void 0:t[a.id]})),c=s?s.instanceStatus===e.DataSourceStatus.CreateError:!l&&!o,u=s?s.instanceStatus===e.DataSourceStatus.NotCreated:!l&&o;return(0,e.jsx)("div",{className:"d-flex align-items-center justify-content-between w-100 data-item",role:"listitem","aria-label":a.label||a.sourceLabel},(0,e.jsx)("div",{className:"d-flex align-items-center flex-grow-1 text-truncate",title:e.dataSourceUtils.getDsTypeString(null==a?void 0:a.type,n)},c&&(0,e.jsx)("div",{className:"d-flex justify-content-center align-items-center flex-shrink-0 data-error"},(0,e.jsx)(t.Alert,{className:"flex-shrink-0",css:e.css`padding-left: 0 !important; padding-right: 0 !important;`,buttonType:"tertiary",form:"tooltip",size:"small",type:"error",text:i("dataSourceCreateError")})),u&&(0,e.jsx)("div",{className:"d-flex justify-content-center align-items-center flex-shrink-0 data-loading"},(0,e.jsx)(t.Loading,{type:t.LoadingType.Donut,width:16,height:16})),!c&&!u&&(0,e.jsx)("div",{className:"d-flex justify-content-center align-items-center flex-shrink-0 data-thumbnail"},(0,e.jsx)(t.Icon,{icon:e.dataSourceUtils.getDsIcon(a),color:"#FFFFFF",size:"12"})),(0,e.jsx)("div",{className:"flex-grow-1 text-truncate pl-2 data-label",title:a.label||a.sourceLabel},a.label||a.sourceLabel)),(0,e.jsx)("div",{className:"d-flex align-items-center flex-shrink-0"},(0,e.jsx)(t.Button,{className:"jimu-outline-inside",type:"tertiary",size:"sm",icon:!0,onClick:()=>{r(a.id)},title:i("remove"),"aria-label":i("remove")},(0,e.jsx)(xe,{size:14,color:"var(--ref-palette-neutral-1100)"}))))}const je=e.css`
  .data-container {
    background-color: var(--ref-palette-white);
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.16) !important;
    border: 0 !important;
    z-index: 10;
    .n-selected {
      font-size: 14px;
      max-width: 130px;
    }
    .data-items {
      max-height: 500px;
      overflow-y: auto;
      overflow-x: hidden;
      .data-thumbnail {
        width:  26px;
        height:  26px;
        background-color: #0095DB;
      }
      .data-loading, .data-error {
        position: relative;
        width: 24px;
        height: 24px;
        border: 1px solid #0095DB;
      }
      .data-label {
        font-size: 13px;
        color: var(--ref-palette-neutral-1100);
      }
      .data-item {
        height: 26px;
        margin-bottom: 12px;
      }
    }
    .small-done-btn {
      max-width: 90px;
    }
  }
`,{useState:De,useMemo:Ie,useRef:Ne,useCallback:be,useEffect:we}=e.React,Te=["search","url","file"],Oe={width:240,height:600},Ae=a=>{const{portalUrl:o,widgetId:r,buttonSize:i,hiddenTabs:n,popperReference:l,nextOrder:c,onFinish:d,itemCategoriesInfo:u,hidePopper:p}=a,[m,g]=De(!1),[M,x]=De(null),[f,y]=De([]),[v,h]=De([]),[j,D]=De([]),I=Ie((()=>f.concat(v).concat(j).sort(((e,t)=>e.order-t.order))),[f,v,j]),N=Ie((()=>I.length>0?Math.max(...I.map((e=>e.order)))+1:c),[I,c]),b=Ie((()=>Te.filter((e=>!(null==n?void 0:n.some((t=>e===t)))))),[n]),w=e.hooks.useTranslation(t.defaultMessages,e.defaultMessages,s),T=Ne(null),O=e.hooks.useCheckSmallBrowserSizeMode(),A=Ne();we((()=>{M&&!T.current&&(T.current=setTimeout((()=>{x(null),T.current=null}),5e3))}),[M]);const E=e=>{f.some((t=>t.dataSourceJson.id===e))&&y(f.filter((t=>t.dataSourceJson.id!==e))),v.some((t=>t.dataSourceJson.id===e))&&h(v.filter((t=>t.dataSourceJson.id!==e))),j.some((t=>t.dataSourceJson.id===e))&&D(j.filter((t=>t.dataSourceJson.id!==e)))},C=e=>{d(e),F()},[z,L]=De(),k=Ne(null),U=Ne(null),F=be((()=>{const t=!m;g(t),t||(y([]),h([]),D([]),A.current&&(0,e.focusElementInKeyboardMode)(A.current)),t&&setTimeout((()=>{var e;const t=document.body.getBoundingClientRect(),a=null===(e=k.current)||void 0===e?void 0:e.getBoundingClientRect();t&&a&&L({left:-a.left,top:0,right:t.width-a.right+Oe.width,bottom:t.height-a.bottom+Oe.height})}),500)}),[m]);we((()=>{!O&&p&&m&&F()}),[p]);const P=Ne(null),R=Ne(null),J=()=>(0,e.jsx)(Ce,{mobile:O,errorMsg:M,translate:w,tabs:b,togglePopper:F,onFinish:C,onRemove:E,portalUrl:o,widgetId:r,nextOrder:N,multiDataOptions:I,multiDataOptionsFromSearch:f,multiDataOptionsFromUrl:v,multiDataOptionsFromFile:j,setErrorMsg:x,setMultiDataOptionsFromSearch:y,setMultiDataOptionsFromUrl:h,setMultiDataOptionsFromFile:D,itemCategoriesInfo:u,containerRef:P,closeButtonRef:R});return(0,e.jsx)("div",{className:"add-data-popper",css:ze},"lg"===i&&(0,e.jsx)(t.Button,{type:"primary",className:"flex-grow-1 text-center",onClick:F,"aria-label":w("clickToAddData"),ref:A,title:w("clickToAddData"),"aria-haspopup":"dialog"},(0,e.jsx)("div",{className:"w-100 px-2 d-flex align-items-center justify-content-center"},(0,e.jsx)(S,{size:"m",className:"mr-2"}),(0,e.jsx)("div",{className:"text-truncate"},w("clickToAddData")))),"sm"===i&&(0,e.jsx)(t.Button,{type:"primary",className:"d-flex justify-content-center align-items-center small-add-btn",onClick:F,"aria-label":w("clickToAddData"),ref:A,title:w("clickToAddData"),"aria-haspopup":"dialog"},(0,e.jsx)(S,{size:"m",className:"m-0"})),O?(0,e.jsx)(t.MobilePanel,{open:m,onClose:F,title:w("addData")},J()):(0,e.jsx)(t.Popper,{open:m,toggle:null,reference:l,placement:"right-start",ref:k,css:Le,"aria-label":w("addData"),forceLatestFocusElements:!0,onKeyDown:t=>{var a;if("Escape"===t.key){if(!(null===(a=P.current)||void 0===a?void 0:a.contains(t.target)))return;t.target===R.current?F():(0,e.focusElementInKeyboardMode)(R.current)}}},(0,e.jsx)(t.Resizable,{ref:U,defaultSize:Oe,minSize:Oe,handles:["bottom-right","bottom-left"],bounds:z},J())))},Ee=({tab:t,portalUrl:a,widgetId:o,nextOrder:r,multiDataOptionsFromSearch:i,multiDataOptionsFromUrl:n,multiDataOptionsFromFile:l,setMultiDataOptionsFromSearch:s,setMultiDataOptionsFromUrl:c,setMultiDataOptionsFromFile:d,setErrorMsg:u,itemCategoriesInfo:p,className:m})=>"search"===t?(0,e.jsx)(A,{className:m,portalUrl:a,widgetId:o,onChange:s,nextOrder:r,multiDataOptions:i,itemCategoriesInfo:p}):"url"===t?(0,e.jsx)(W,{className:m,widgetId:o,onChange:c,nextOrder:r,multiDataOptions:n,setErrorMsg:u}):"file"===t?(0,e.jsx)(ae,{className:m,portalUrl:a,widgetId:o,nextOrder:r,onChange:d,multiDataOptions:l,setErrorMsg:u}):void 0,Ce=({mobile:a,errorMsg:o,translate:r,tabs:i,togglePopper:n,onFinish:l,onRemove:s,portalUrl:c,widgetId:d,nextOrder:u,multiDataOptions:p,multiDataOptionsFromSearch:m,multiDataOptionsFromUrl:g,multiDataOptionsFromFile:M,setMultiDataOptionsFromSearch:x,setMultiDataOptionsFromUrl:f,setMultiDataOptionsFromFile:y,setErrorMsg:v,itemCategoriesInfo:S,containerRef:h,closeButtonRef:j})=>{const[D,I]=De(i.length?i[0]:"");return(0,e.jsx)("div",{ref:h,css:e.css`
    width: 100%;
    height: 100%;
    .add-data-popper-content {
      position: relative;
      height: ${p.length?a?"calc(100% - 64px)":"calc(100% - 120px)":a?"100%":"calc(100% - 56px)"};
    }
    .tab-content {
      overflow: hidden;
    }
    .jimu-nav {
      border-bottom: 1px solid var(--ref-palette-neutral-500);
    }
    .multiple-lines-truncate {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      word-break: break-word;
      word-wrap: break-word;
    }
    .item-selector-search {
      .text-input-prefix {
        svg {
          margin-left: 0 !important;
          color: var(--ref-palette-neutral-700) !important;
        }
      }
    }
  `},!a&&(0,e.jsx)(t.PanelHeader,{title:r("addData"),showClose:!0,onClose:n,level:1,className:`p-4 ${t.FOCUSABLE_CONTAINER_CLASS}`,closeButtonRef:j}),(0,e.jsx)("div",{className:"add-data-popper-content"},i.length>1&&(0,e.jsx)(t.Tabs,{type:"underline",className:"w-100 h-100",fill:!0,defaultValue:i[0],onChange:I},i.map(((a,o)=>(0,e.jsx)(t.Tab,{key:o,id:a,title:r(a)},(0,e.jsx)(Ee,{className:a===D?t.FOCUSABLE_CONTAINER_CLASS:"",tab:a,portalUrl:c,widgetId:d,nextOrder:u,setErrorMsg:v,multiDataOptionsFromSearch:m,multiDataOptionsFromUrl:g,multiDataOptionsFromFile:M,setMultiDataOptionsFromSearch:x,setMultiDataOptionsFromUrl:f,setMultiDataOptionsFromFile:y,itemCategoriesInfo:S}))))),1===i.length&&(0,e.jsx)("div",{className:"w-100 h-100"},(0,e.jsx)(Ee,{className:t.FOCUSABLE_CONTAINER_CLASS,tab:i[0],portalUrl:c,widgetId:d,nextOrder:u,setErrorMsg:v,multiDataOptionsFromSearch:m,multiDataOptionsFromUrl:g,multiDataOptionsFromFile:M,setMultiDataOptionsFromSearch:x,setMultiDataOptionsFromUrl:f,setMultiDataOptionsFromFile:y,itemCategoriesInfo:S})),o&&(0,e.jsx)(t.Alert,{className:"w-100",css:e.css`position: absolute; top: ${1===i.length?0:"33px"}; left: 0; right: 0; z-index: 1;`,closable:!0,form:"basic",onClose:()=>{v(null)},open:!0,text:o,type:"warning",withIcon:!0})),(0,e.jsx)(Se,{multiDataOptions:p,widgetId:d,onFinish:l,onRemove:s,setErrorMsg:v}))},ze=e.css`
  .small-add-btn {
    border-radius: 16px;
    width: 32px;
    height: 32px;
    padding: 0;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
`,Le=e.css`
  width: ${Oe.width}px;
  height: ${Oe.height}px;
  border: none;
  box-shadow: none;
  background: none;
  overflow: visible;
  .resizable {
    background: var(--sys-color-surface-overlay);
    border-width: 1px;
    border-style: solid;
    border-color: var(--sys-color-divider-secondary);
    box-shadow: var(--sys-shadow-2);
  }
`;var ke=n(9044),Ue=n.n(ke),Fe=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]])}return a};const Pe=t=>{const a=window.SVG,{className:o}=t,r=Fe(t,["className"]),i=(0,e.classNames)("jimu-icon jimu-icon-component",o);return a?e.React.createElement(a,Object.assign({className:i,src:Ue()},r)):e.React.createElement("svg",Object.assign({className:i},r))};var Re=n(12046),Je=n.n(Re),We=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]])}return a};const Be=t=>{const a=window.SVG,{className:o}=t,r=We(t,["className"]),i=(0,e.classNames)("jimu-icon jimu-icon-component",o);return a?e.React.createElement(a,Object.assign({className:i,src:Je()},r)):e.React.createElement("svg",Object.assign({className:i},r))},{useLayoutEffect:Ve,useState:Qe,useRef:Ge,useMemo:Ye}=e.React,{useSelector:Ze}=e.ReactRedux,He=a=>{const{multiDataOptions:o,enableDataAction:r,isLoading:i,onRemoveData:n,onChangeData:l,widgetId:s,disableRenaming:c}=a,u=e.hooks.useTranslation(t.defaultMessages,e.defaultMessages),[p,m]=Qe(null),M=Ge(null),x=Ze((e=>e.dataSourcesInfo)),f=g(M),y=e.i18n.getIntl(),v=(0,Y.useTheme)(),S=_e(v);Ve((()=>{p&&M.current&&(null==f?void 0:f.current)!==M.current&&((0,e.focusElementInKeyboardMode)(M.current),M.current.select())}),[M,f,p]);const h=e=>{m((null==p?void 0:p.dataSourceJson.id)===(null==e?void 0:e.dataSourceJson.id)?null:e)};return(0,e.jsx)("div",{className:"data-list",css:S,role:"list"},o.map(((a,o)=>{var m;const g=d(a.dataSourceJson.id),f=null==x?void 0:x[a.dataSourceJson.id],v=f?f.instanceStatus===e.DataSourceStatus.CreateError:!g&&!i,S=f?f.instanceStatus===e.DataSourceStatus.NotCreated:!g&&i,j=(null==p?void 0:p.dataSourceJson.id)===a.dataSourceJson.id,D=a.dataSourceJson.label||a.dataSourceJson.sourceLabel,I=r&&g;return(0,e.jsx)("div",{key:a.dataSourceJson.id,className:(0,e.classNames)("d-flex justify-content-between align-items-center data-item",{"pt-3":0!==o}),role:"listitem","aria-label":D},(0,e.jsx)("div",{className:"flex-grow-1 text-truncate d-flex justify-content-start align-items-center"},S&&(0,e.jsx)("div",{className:"flex-shrink-0 d-flex justify-content-center align-items-center mr-1 data-item-loading"},(0,e.jsx)(t.Loading,{type:t.LoadingType.Donut,width:16,height:16})),(0,e.jsx)("div",{className:"flex-grow-1 text-truncate d-flex align-items-center",title:e.dataSourceUtils.getDsTypeString(null===(m=a.dataSourceJson)||void 0===m?void 0:m.type,y)},!S&&(0,e.jsx)("div",{className:"flex-shrink-0 d-flex justify-content-center align-items-center data-thumbnail"},(0,e.jsx)(t.Icon,{icon:e.dataSourceUtils.getDsIcon((0,e.Immutable)(a.dataSourceJson)),color:"#FFFFFF",size:"12"})),v&&(0,e.jsx)(t.Alert,{className:"flex-shrink-0",css:e.css`padding-left: 0 !important; padding-right: 0 !important;`,buttonType:"tertiary",form:"tooltip",size:"small",type:"error",text:u("dataSourceCreateError")}),(0,e.jsx)("div",{className:(0,e.classNames)("flex-grow-1 text-truncate data-label",{"pl-2":!v}),title:p?"":D},j?(0,e.jsx)(t.TextInput,{className:"w-100",size:"sm",defaultValue:D,onAcceptValue:e=>{((e,t)=>{h(e),l(Object.assign(Object.assign({},e),{dataSourceJson:Object.assign(Object.assign({},e.dataSourceJson),{label:t})}))})(a,e)},ref:M}):D))),(0,e.jsx)("div",{className:"flex-shrink-0 d-flex justify-content-end align-items-center data-item-operations"},!c&&!S&&!v&&(0,e.jsx)(t.Button,{className:"jimu-outline-inside",type:"tertiary",size:"sm",icon:!0,onClick:()=>{h(a)},title:u("rename"),"aria-label":u("rename")},(0,e.jsx)(Be,{size:"m"})),I&&(0,e.jsx)(t.DataActionList,{widgetId:s,dataSets:[{dataSource:g,records:[],name:g.getDataSourceJson().label||g.getDataSourceJson().sourceLabel}],listStyle:t.DataActionListStyle.Dropdown,buttonSize:"sm",buttonType:"tertiary",hideGroupTitle:!0,buttonClassName:"jimu-outline-inside"}),(0,e.jsx)(t.Button,{className:"jimu-outline-inside",type:"tertiary",size:"sm",icon:!0,onClick:()=>{n(a.dataSourceJson.id)},title:u("remove"),"aria-label":u("remove")},(0,e.jsx)(Pe,{size:"m"}))))})))},$e=e.css`
  max-height: calc(100% - 35px);
  overflow: auto;

  .data-item {
    width: 100%;
    overflow: hidden;
  }
  .data-item-loading {
    position: relative;
    width: 24px;
    height: 24px;
    border: 1px solid #0095DB;
  }
  .data-thumbnail {
    width:  26px;
    height:  26px;
    background-color: #0095DB;
  }
  .data-label {
    font-size: 13px;
    color: var(--ref-palette-neutral-1100);
  }
`,_e=t=>Ye((()=>e.css`
    ${$e}
    .data-item-operations .data-action-dropdown .data-action-button{
      &:focus,
      &:focus-visible {
        outline-offset: -2px;
      }
      border: 0;
    }
  `),[]);class Ke extends e.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.12.0",description:"Allow to configure curated filter",upgrader:e=>e.disableAddBySearch||e.itemCategoriesInfo?e:e.set("itemCategoriesInfo",j())}]}}const qe=new Ke;var Xe=function(e,t,a,o){return new(a||(a=Promise))((function(r,i){function n(e){try{s(o.next(e))}catch(e){i(e)}}function l(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(n,l)}s((o=o.apply(e,t||[])).next())}))};const{useState:et,useEffect:tt,useMemo:at,useRef:ot,useCallback:rt}=e.React,it=!window.jimuConfig.isInBuilder,nt=a=>{const{portalUrl:o,id:r,enableDataAction:n=!0,config:l,mutableStateProps:m}=a,g=(t=>e.React.useMemo((()=>t.disableAddBySearch||t.itemCategoriesInfo?t.itemCategoriesInfo:(0,e.Immutable)(j())),[t.disableAddBySearch,t.itemCategoriesInfo]))(l),M=at((()=>(null==m?void 0:m.multiDataOptions)||[]),[null==m?void 0:m.multiDataOptions]),x=rt((t=>{e.MutableStoreManager.getInstance().updateStateValue(r,"multiDataOptions",t)}),[r]),f=e.hooks.useTranslation(t.defaultMessages,s),[y,v]=et(!1),S=at((()=>{const e=[];return l.disableAddBySearch&&e.push("search"),l.disableAddByUrl&&e.push("url"),l.disableAddByFile&&e.push("file"),e}),[l.disableAddBySearch,l.disableAddByUrl,l.disableAddByFile]),h=at((()=>M.length>0?Math.max(...M.map((e=>e.order)))+1:0),[M]),D=e.React.useRef(null),I=ot(null);tt((()=>(I.current=new e.indexedDBUtils.IndexedDBCache(r,"add-data","added-data"),it&&I.current.init().then((()=>Xe(void 0,void 0,void 0,(function*(){const e=yield I.current.getAll();e.length>0&&(v(!0),p(e,r).catch((e=>{console.error("Failed to create data source",e)})).finally((()=>{v(!1)})),x(e.sort(((e,t)=>e.order-t.order))))})))).catch((e=>{console.error("Failed to read cache.",e)})),()=>{I.current.close()})),[r,x]);const N=e=>{I.current.initialized()&&I.current.putAll(e.map((e=>({key:e.dataSourceJson.id,value:e})))),v(!0),p(e,r).catch((e=>{console.error("Failed to create data source",e)})).finally((()=>{v(!1)})),x(M.concat(e))},b=e.ReactRedux.useSelector((e=>{var t;const a=null==e?void 0:e.widgetsRuntimeInfo;return null===(t=null==a?void 0:a[r])||void 0===t?void 0:t.state})),w=at((()=>b===e.WidgetState.Closed),[b]);return(0,e.jsx)("div",{className:"widget-add-data jimu-widget d-flex align-items-center justify-content-center surface-1 border-0",css:st,ref:D},0===M.length&&(0,e.jsx)("div",{className:"no-data-placeholder w-100"},(0,e.jsx)("div",{className:"no-data-placeholder-icon"},(0,e.jsx)(i,{size:32,color:"var(--ref-palette-neutral-1000)"})),(0,e.jsx)("div",{className:"no-data-placeholder-text"},(0,e.jsx)("span",null,l.placeholderText||f("defaultPlaceholderText"))),(0,e.jsx)("div",{className:"no-data-placeholder-btn"},(0,e.jsx)(Ae,{buttonSize:"lg",portalUrl:o,widgetId:r,onFinish:N,hiddenTabs:S,popperReference:D,nextOrder:h,itemCategoriesInfo:g,hidePopper:w}))),M.length>0&&(0,e.jsx)("div",{className:"w-100 h-100 p-4"},(0,e.jsx)(He,{multiDataOptions:M,enableDataAction:n,isLoading:y,widgetId:r,disableRenaming:l.disableRenaming,onRemoveData:t=>{I.current.initialized()&&I.current.deleteAll([t]),x(M.filter((e=>e.dataSourceJson.id!==t))),u(r,e.DataSourcesChangeType.Remove,[d(t)])},onChangeData:t=>{I.current.initialized()&&I.current.put(t.dataSourceJson.id,t),v(!0),function(t){return c(this,void 0,void 0,(function*(){return t&&0!==t.length?Promise.resolve().then((()=>{t.forEach((t=>{const a=d(t.dataSourceJson.id);a&&e.DataSourceManager.getInstance().updateDataSourceByDataSourceJson(a,(0,e.Immutable)(t.dataSourceJson))}))})):Promise.resolve()}))}([t]).catch((e=>{console.error("Failed to update data source",e)})).finally((()=>{v(!1)})),x(M.map((e=>e.dataSourceJson.id===t.dataSourceJson.id?t:e)))}}),(0,e.jsx)("div",{className:"w-100 d-flex justify-content-end add-by-search-samll"},(0,e.jsx)(Ae,{buttonSize:"sm",portalUrl:o,widgetId:r,onFinish:N,hiddenTabs:S,popperReference:D,nextOrder:h,itemCategoriesInfo:g,hidePopper:w}))))};nt.versionManager=qe;const lt=nt,st=e.css`
  background-color: var(--ref-palette-white);
  position: relative;

  .data-list {
    margin-bottom: 38px;
  }

  .add-by-search-samll {
    position: absolute;
    bottom: 10px;
    right: 15px;
  }

  .no-data-placeholder {
    padding: 8px;
    .no-data-placeholder-text, .no-data-placeholder-icon, .no-data-placeholder-btn{
      display: table;
      margin: 0 auto;
    }
    .no-data-placeholder-text {
      color: var(--ref-palette-neutral-1000);
      font-size: 0.8125rem;
      margin-top: 1rem;
      text-align: center;
    }
    .no-data-placeholder-icon {
      color: var(--ref-palette-neutral-1100);
    }
    .no-data-placeholder-btn {
      margin-top: 1rem;
    }
  }
`;function ct(e){n.p=e}})(),l})())}}}));