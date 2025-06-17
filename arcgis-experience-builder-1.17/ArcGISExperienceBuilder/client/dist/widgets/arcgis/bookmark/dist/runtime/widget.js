System.register(["jimu-core","jimu-ui","jimu-core/react","jimu-arcgis","jimu-layouts/layout-runtime","jimu-theme"],(function(e,t){var i={},a={},o={},s={},n={},r={};return{setters:[function(e){i.AnimationDirection=e.AnimationDirection,i.AnimationEffectType=e.AnimationEffectType,i.AnimationType=e.AnimationType,i.AppMode=e.AppMode,i.BaseVersionManager=e.BaseVersionManager,i.BrowserSizeMode=e.BrowserSizeMode,i.Immutable=e.Immutable,i.React=e.React,i.ReactRedux=e.ReactRedux,i.ReactResizeDetector=e.ReactResizeDetector,i.TransitionContainer=e.TransitionContainer,i.TransitionDirection=e.TransitionDirection,i.TransitionType=e.TransitionType,i.appActions=e.appActions,i.classNames=e.classNames,i.css=e.css,i.defaultMessages=e.defaultMessages,i.getAppStore=e.getAppStore,i.hooks=e.hooks,i.indexedDBUtils=e.indexedDBUtils,i.jsx=e.jsx,i.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules,i.lodash=e.lodash,i.polished=e.polished,i.utils=e.utils},function(e){a.Button=e.Button,a.Card=e.Card,a.CardBody=e.CardBody,a.DistanceUnits=e.DistanceUnits,a.Dropdown=e.Dropdown,a.DropdownButton=e.DropdownButton,a.DropdownItem=e.DropdownItem,a.DropdownMenu=e.DropdownMenu,a.FontFamilyValue=e.FontFamilyValue,a.ImageFillMode=e.ImageFillMode,a.ImageWithParam=e.ImageWithParam,a.NavButtonGroup=e.NavButtonGroup,a.Select=e.Select,a.TextInput=e.TextInput,a.defaultMessages=e.defaultMessages,a.utils=e.utils},function(e){o.Fragment=e.Fragment},function(e){s.JimuMapViewComponent=e.JimuMapViewComponent,s.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules},function(e){n.LayoutEntry=e.LayoutEntry,n.ViewVisibilityContext=e.ViewVisibilityContext},function(e){r.useTheme=e.useTheme}],execute:function(){e((()=>{var e={79703:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.25 5.621a.6.6 0 0 1 .933-.5l3.568 2.38a.6.6 0 0 1 0 .998l-3.568 2.38a.6.6 0 0 1-.933-.5z" clip-rule="evenodd"></path></svg>'},81594:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m2.556 4.75.297 9.75c0 .398.164.78.455 1.06.292.282.688.44 1.1.44h7.184c.412 0 .808-.158 1.1-.44.291-.28.455-.662.455-1.06l.297-9.75zm4.333 8.222a.778.778 0 1 1-1.556 0V7.778a.778.778 0 1 1 1.556 0zm3.667 0a.778.778 0 1 1-1.556 0V7.778a.778.778 0 1 1 1.556 0zM12.058 2.5a1 1 0 0 1-.766-.357l-.659-.786A1 1 0 0 0 9.867 1H6.133a1 1 0 0 0-.766.357l-.659.786a1 1 0 0 1-.766.357H2a1 1 0 0 0-1 1V4h14v-.5a1 1 0 0 0-1-1z"></path></svg>'},21210:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13 6.133c0 .598-.28 1.46-.825 2.51-.53 1.02-1.247 2.102-1.981 3.102A46 46 0 0 1 8 14.492a48 48 0 0 1-2.194-2.747c-.734-1-1.451-2.081-1.98-3.102C3.28 7.593 3 6.731 3 6.133 3 3.277 5.26 1 8 1s5 2.277 5 5.133m1 0c0 2.685-3.768 7.311-5.332 9.115C8.258 15.722 8 16 8 16s-.258-.279-.668-.751C5.768 13.444 2 8.817 2 6.133 2 2.746 4.686 0 8 0s6 2.746 6 6.133M10 5.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m1 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0" clip-rule="evenodd"></path></svg>'},30655:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2.146 4.653a.485.485 0 0 1 .708 0L8 10.24l5.146-5.587a.485.485 0 0 1 .708 0 .54.54 0 0 1 0 .738l-5.5 5.956a.485.485 0 0 1-.708 0l-5.5-5.956a.54.54 0 0 1 0-.738" clip-rule="evenodd"></path></svg>'},37568:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M11.347 2.146a.485.485 0 0 1 0 .708L5.76 8l5.587 5.146a.486.486 0 0 1 0 .708.54.54 0 0 1-.738 0l-5.956-5.5a.485.485 0 0 1 0-.708l5.956-5.5a.54.54 0 0 1 .738 0" clip-rule="evenodd"></path></svg>'},52943:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.54.54 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.54.54 0 0 1-.738 0" clip-rule="evenodd"></path></svg>'},94064:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13.854 11.347a.486.486 0 0 1-.708 0L8 5.76l-5.146 5.587a.485.485 0 0 1-.708 0 .54.54 0 0 1 0-.738l5.5-5.956a.485.485 0 0 1 .708 0l5.5 5.956a.54.54 0 0 1 0 .738" clip-rule="evenodd"></path></svg>'},40904:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M5 1H4v14h1zm7 0h-1v14h1z" clip-rule="evenodd"></path></svg>'},23662:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5"></path></svg>'},38796:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M4 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0m1.5-.5a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1zM3 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m1-4a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8A.5.5 0 0 1 5 8m.5 3.5a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1z" clip-rule="evenodd"></path></svg>'},54855:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjU2cHgiIGhlaWdodD0iMjU2cHgiIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiB2ZXJzaW9uPSIxLjEiPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTY3LjAwMDAwMCwgLTY1Ny4wMDAwMDApIiBmaWxsPSIjQzVDNUM1Ij4NCiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2Ny4wMDAwMDAsIDY1Ny4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTczLjcxNDI4Niw4OSBMMjU2LDE5OCBMMCwxOTggTDY0LDExNi4yNSBMMTA5LjcxNDI4NiwxNzAuNzUgTDE3My43MTQyODYsODkgWiBNOTksNTggQzEwNy44MzY1NTYsNTggMTE1LDY1LjE2MzQ0NCAxMTUsNzQgQzExNSw4Mi44MzY1NTYgMTA3LjgzNjU1Niw5MCA5OSw5MCBDOTAuMTYzNDQ0LDkwIDgzLDgyLjgzNjU1NiA4Myw3NCBDODMsNjUuMTYzNDQ0IDkwLjE2MzQ0NCw1OCA5OSw1OCBaIi8+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="},62686:e=>{"use strict";e.exports=s},79244:e=>{"use strict";e.exports=i},68972:e=>{"use strict";e.exports=o},41496:e=>{"use strict";e.exports=n},1888:e=>{"use strict";e.exports=r},14321:e=>{"use strict";e.exports=a}},t={};function l(i){var a=t[i];if(void 0!==a)return a.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,l),o.exports}l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var i in t)l.o(t,i)&&!l.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="";var d={};return l.p=window.jimuConfig.baseUrl,(()=>{"use strict";l.r(d),l.d(d,{Widget:()=>je,__set_webpack_public_path__:()=>Ie,default:()=>Ne});var e,t,i,a,o,s,n,r=l(79244),m=l(14321);!function(e){e.Horizon="HORIZON",e.Vertical="VERTICAL"}(e||(e={})),function(e){e.Scroll="SCROLL",e.Paging="PAGING"}(t||(t={})),function(e){e.All="ALL",e.Selected="SELECTED"}(i||(i={})),function(e){e.Card="CARD",e.List="LIST",e.Slide1="SLIDE1",e.Slide2="SLIDE2",e.Slide3="SLIDE3",e.Gallery="GALLERY",e.Navigator="NAVIGATOR",e.Custom1="CUSTOM1",e.Custom2="CUSTOM2"}(a||(a={})),function(e){e.Default="DEFAULT",e.Regular="REGULAR",e.Hover="HOVER"}(o||(o={})),function(e){e.Snapshot="SNAPSHOT",e.Custom="CUSTOM"}(s||(s={})),function(e){e.HonorMap="HONOR_MAP",e.Custom="CUSTOM"}(n||(n={}));const c=35;var p=function(e,t,i,a){return new(i||(i=Promise))((function(o,s){function n(e){try{l(a.next(e))}catch(e){s(e)}}function r(e){try{l(a.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,r)}l((a=a.apply(e,t||[])).next())}))};const u=r.utils.getLocalStorageAppKey(),g=(e,t)=>`${u}-bookmark-${e}-bookmarks-${t||"default"}`,h=(e,t)=>{const i=((e,t)=>`${u}-${e}-${t||"default"}-RtBmArray`)(e,t),a=g(e,t);return JSON.parse(r.utils.readLocalStorage(a)||r.utils.readLocalStorage(i))||[]};function y(e,t){return e.unit===m.DistanceUnits.PERCENTAGE?e.distance/100*t:e.distance}function k(e,t,i,a){const o=function(e,t,i,a){const o=t-24,s=e+10,n=Math.floor(o/s)||1;if(0===i&&0===a)return Math.min(n,3);{const e=Math.max(i,a);return Math.min(n,e)}}(e,t,i,a);return(t-o*(e+10)-24)/2}const v=(e,t)=>![a.Custom1,a.Custom2].includes(e.templateType)&&e.displayFromWeb?e.bookmarks.concat(t):e.bookmarks,f={_widgetLabel:"Bookmark",_widgetDescription:"A widget identify specific geographic locations and save to refer later.",addBookmark:"Add bookmark",addBookmarkAriaLabel:"Click to add a new bookmark based on the current map status",layoutTips:"This is the customizable area",bookmarkList:"Bookmark list",graphicLayer:"Bookmark graphics layer",previousBookmark:"Click to view the previous bookmark",nextBookmark:"Click to view the next bookmark"};var x=l(68972),b=l(62686),w=l(41496),S=l(1888);function j(t){const{theme:i,direction:a,galleryItemWidth:o,galleryItemHeight:s,galleryItemSpace:l,cardBackground:d,displayName:m,isWebMap:p,itemSizeType:u,widgetRect:g}=t,h=a===e.Horizon,y=h&&void 0===o,k=d?`background-color: ${d} !important;`:"",v=u===n.HonorMap,f=(e,t,i,a,o,s)=>{if(t){if(e){let e;return o?(e=s-24,(a?e-c:e)+"px"):(e=s-24-2,(a?e-c:e)/31*57+2+"px")}return`${i||200}px !important`}},x=(e,t,i,a,o,n)=>{if(e)return t?"187.5px !important":"auto";if(i){let e;return a?(e=n-32,(o?e+c:e)+"px"):(e=n-32-2,(o?e/57*31+c+2:e/57*31+2)+"px")}return`${s}px !important`};return r.css`
    &.gallery-card {
      width: ${f(v,h,o,m,p,null==g?void 0:g.height)};
      min-width: ${f(v,h,o,m,p,null==g?void 0:g.height)};
      height: ${x(h,y,v,p,m,null==g?void 0:g.width)};
      position: relative;
      margin: ${h?"var(--sys-spacing-3) 0":"0 var(--sys-spacing-4)"};
      ${!h&&`margin-top: ${l}px`};
      ${h&&`margin-left: ${l}px`};
      &:first-of-type {
        margin-top: ${h?"var(--sys-spacing-3)":"var(--sys-spacing-4)"};
        margin-left: ${h?"var(--sys-spacing-3)":"var(--sys-spacing-4)"};
      };
      .gallery-card-inner {
        transition: all 0.5s;
        ${k}
        &:hover {
          transform: scale(1.05);
        }
      }
      .gallery-card-operation {
        display: none;
      }
      &:hover, &:focus, &:focus-within {
        .gallery-card-operation {
          display: block;
          position: absolute;
          top: var(--sys-spacing-1);
          right: var(--sys-spacing-1);
        }
      }
      .gallery-img, .gallery-img-vertical {
        width: 100%;
        height: ${m?"calc(100% - 35px)":"100%"};
      }
    }
    &.gallery-card-add {
    cursor: pointer;
    width: ${f(v,h,o,m,p,null==g?void 0:g.height)};
    min-width: ${f(v,h,o,m,p,null==g?void 0:g.height)};
    height: ${x(h,y,v,p,m,null==g?void 0:g.width)};
    display: grid;
    border: 1px solid ${i.sys.color.secondary.main};
    background: ${i.ref.palette.white};
    margin: ${h?"var(--sys-spacing-3) 0":"0 var(--sys-spacing-4)"};
    ${!h&&`margin-top: ${l}px`};
    ${h&&`margin-left: ${l}px`};
  }
  `}function N(t){const{config:i,bookmarkName:a,isWebMap:o,widgetRect:s}=t,{displayName:n,direction:l,galleryItemWidth:d,galleryItemHeight:c=237.5,galleryItemSpace:p=24,cardBackground:u,itemSizeType:g}=i,h=l===e.Horizon,y=j({theme:(0,S.useTheme)(),direction:l,galleryItemWidth:d,galleryItemHeight:c,galleryItemSpace:p,cardBackground:u,displayName:n,isWebMap:o,itemSizeType:g,widgetRect:s});return new Array(3).fill(1).map(((e,t)=>(0,r.jsx)("div",{className:"gallery-card",key:t,css:y},(0,r.jsx)(m.Card,{className:"bookmark-pointer gallery-card-inner h-100 surface-1"},(0,r.jsx)("div",{className:"widget-card-image bg-light-300 "+(h?"gallery-img":"gallery-img-vertical")},(0,r.jsx)("div",{className:"default-img"})),n&&(0,r.jsx)(m.CardBody,{className:"pl-2 pr-2 bookmark-card-title text-truncate"},(0,r.jsx)("span",{title:a},a))))))}var I=l(81594),C=l.n(I),M=function(e,t){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(i[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(i[a[o]]=e[a[o]])}return i};const B=e=>{const t=window.SVG,{className:i}=e,a=M(e,["className"]),o=(0,r.classNames)("jimu-icon jimu-icon-component",i);return t?r.React.createElement(t,Object.assign({className:o,src:C()},a)):r.React.createElement("svg",Object.assign({className:o},a))};var O=l(23662),A=l.n(O),P=function(e,t){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(i[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(i[a[o]]=e[a[o]])}return i};const T=e=>{const t=window.SVG,{className:i}=e,a=P(e,["className"]),o=(0,r.classNames)("jimu-icon jimu-icon-component",i);return t?r.React.createElement(t,Object.assign({className:o,src:A()},a)):r.React.createElement("svg",Object.assign({className:o},a))};var $=l(30655),L=l.n($),R=function(e,t){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(i[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(i[a[o]]=e[a[o]])}return i};const D=e=>{const t=window.SVG,{className:i}=e,a=R(e,["className"]),o=(0,r.classNames)("jimu-icon jimu-icon-component",i);return t?r.React.createElement(t,Object.assign({className:o,src:L()},a)):r.React.createElement("svg",Object.assign({className:o},a))};var z=l(94064),E=l.n(z),V=function(e,t){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(i[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(i[a[o]]=e[a[o]])}return i};const F=e=>{const t=window.SVG,{className:i}=e,a=V(e,["className"]),o=(0,r.classNames)("jimu-icon jimu-icon-component",i);return t?r.React.createElement(t,Object.assign({className:o,src:E()},a)):r.React.createElement("svg",Object.assign({className:o},a))};var H=l(52943),W=l.n(H),G=function(e,t){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(i[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(i[a[o]]=e[a[o]])}return i};const U=e=>{const t=window.SVG,{className:i}=e,a=G(e,["className"]),o=(0,r.classNames)("jimu-icon jimu-icon-component",i);return t?r.React.createElement(t,Object.assign({className:o,src:W()},a)):r.React.createElement("svg",Object.assign({className:o},a))};var J=l(37568),K=l.n(J),_=function(e,t){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(i[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(i[a[o]]=e[a[o]])}return i};const Y=e=>{const t=window.SVG,{className:i}=e,a=_(e,["className"]),o=(0,r.classNames)("jimu-icon jimu-icon-component",i);return t?r.React.createElement(t,Object.assign({className:o,src:K()},a)):r.React.createElement("svg",Object.assign({className:o},a))},Z=r.css`
&.suspension-navbar {
  display: flex;
  width: 100%;
  padding: 0 8px;
  position: absolute;
  top: 50%;
  z-index: 1;
  .navbar-btn-pre{
    position: absolute;
    left: 5px;
    border-radius: 50%;
  }
  .navbar-btn-next{
    position: absolute;
    right: 5px;
    border-radius: 50%;
  }
}
&.suspension-navbar-vertical {
  display: flex;
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 1;
  margin-left: -13px;
  .navbar-btn-pre{
    position: absolute;
    top: 5px;
    border-radius: 50%;
  }
  .navbar-btn-next{
    position: absolute;
    bottom: 5px;
    border-radius: 50%;
  }
}
`;function Q(t){const{config:i}=t,{itemHeight:a=280,itemWidth:o=210,space:s=0,direction:n}=i,l=r.React.useRef(null),d=n===e.Horizon,c=r.ReactRedux.useSelector((e=>e.appContext.isRTL)),p=r.hooks.useTranslation(m.defaultMessages),u=(e="next")=>{var t;const i=null===(t=l.current)||void 0===t?void 0:t.parentElement;if(!i)return;const n=((e,t,i,a,o,s)=>{let n,r;const l=a+s;return"next"===e?(n=t?0:o,r=t?i?-l:l:0):"previous"===e&&(n=t?0:-o,r=t?i?l:-l:0),{top:n,left:r,behavior:"smooth"}})(e,d,c,o,a,s);i.scrollBy(n)};return(0,r.jsx)("div",{key:"navBar",ref:l,css:Z,className:(d?"suspension-navbar":"suspension-navbar-vertical")+" align-items-center justify-content-between"},(0,r.jsx)(m.Button,{title:p("slideBackward"),"aria-label":p("slideBackward"),type:"primary",size:"sm",icon:!0,onClick:()=>{u("previous")},className:"navbar-btn-pre"},d?(0,r.jsx)(Y,{autoFlip:!0,size:"s"}):(0,r.jsx)(F,{autoFlip:!0,size:"s"})),(0,r.jsx)(m.Button,{title:p("slideForward"),"aria-label":p("slideForward"),type:"primary",size:"sm",icon:!0,onClick:()=>{u("next")},className:"navbar-btn-next"},d?(0,r.jsx)(U,{autoFlip:!0,size:"s"}):(0,r.jsx)(D,{autoFlip:!0,size:"s"})))}function X(t){const{config:i,bookmarks:a,runtimeBookmarkArray:o,runtimeBmItemsInfo:n,runtimeSnaps:l,highLightIndex:d,runtimeHighLightIndex:c,onViewBookmark:p,handleRuntimeTitleChange:u,onRuntimeBookmarkNameChange:g,onRuntimeAdd:h,onRuntimeDelete:y,isWebMap:k,widgetRect:v}=t,{displayName:x,direction:b,runtimeAddAllow:w,galleryItemWidth:N,galleryItemHeight:I=237.5,galleryItemSpace:C=24,cardBackground:M,itemSizeType:O}=i,A=b===e.Horizon,P=(0,S.useTheme)(),$=e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation())},L=(e,t)=>{"Enter"!==e.key&&" "!==e.key||(e.stopPropagation(),p(t))},R=r.hooks.useTranslation(f),D=j({theme:P,direction:b,galleryItemWidth:N,galleryItemHeight:I,galleryItemSpace:C,cardBackground:M,displayName:x,isWebMap:k,itemSizeType:O,widgetRect:v});return(0,r.jsx)(r.React.Fragment,null,a.map(((e,t)=>{var i,a;const o=e.imgSourceType===s.Snapshot,n=o?null===(i=e.snapParam)||void 0===i?void 0:i.url:null===(a=e.imgParam)||void 0===a?void 0:a.url,l=t===d;return(0,r.jsx)("div",{className:"gallery-card",key:t,css:D},(0,r.jsx)(m.Card,{onClick:()=>{p(e,!1,t)},role:"listitem","aria-selected":l,tabIndex:"0",onKeyDown:$,onKeyUp:t=>{L(t,e)},className:(0,r.classNames)("gallery-card-inner surface-1 h-100 bookmark-pointer",{"active-bookmark-item":l})},(0,r.jsx)("div",{className:"widget-card-image bg-light-300 "+(A?"gallery-img":"gallery-img-vertical")},n?(0,r.jsx)(m.ImageWithParam,{imageParam:o?e.snapParam:e.imgParam,altText:"",useFadein:!0,imageFillMode:e.imagePosition}):(0,r.jsx)("div",{className:"default-img"})),x&&(0,r.jsx)(m.CardBody,{className:"pl-2 pr-2 bookmark-card-title text-truncate"},(0,r.jsx)("span",{title:e.name},e.name))))})),o.map(((e,t)=>{var i;let a=(0,r.Immutable)(n[e]);a=a.set("snapParam",{url:l[a.id]});const o=null===(i=a.snapParam)||void 0===i?void 0:i.url,s=r.React.createRef(),d=t===c;return(0,r.jsx)("div",{className:"gallery-card",key:`RuntimeGallery-${e}`,css:D},(0,r.jsx)(m.Card,{onClick:()=>{p(a,!0,t)},className:(0,r.classNames)("gallery-card-inner h-100 surface-1 runtime-bookmark bookmark-pointer bookmark-pointer",{"active-bookmark-item":d}),role:"listitem","aria-selected":d,tabIndex:"0",onKeyUp:e=>{"INPUT"!==e.target.tagName&&L(e,a)}},(0,r.jsx)("div",{className:"widget-card-image bg-light-300 "+(A?"gallery-img":"gallery-img-vertical")},o?(0,r.jsx)(m.ImageWithParam,{imageParam:a.snapParam,altText:"",useFadein:!0,imageFillMode:a.imagePosition}):(0,r.jsx)("div",{className:"default-img"})),x&&(0,r.jsx)(m.CardBody,{className:"bookmark-card-title text-truncate runtime-title-con"},(0,r.jsx)(m.TextInput,{className:"runtime-title w-100",ref:s,size:"sm",title:a.name,value:a.name||"",onClick:e=>{e.stopPropagation()},onKeyDown:e=>{((e,t)=>{"Enter"===e.key&&t.current.blur()})(e,s)},onChange:t=>{u(e,t)},onAcceptValue:t=>{g(e,t)}}))),(0,r.jsx)("span",{className:"gallery-card-operation float-right"},(0,r.jsx)(m.Button,{title:R("deleteOption"),onClick:t=>{y(t,e)},type:"tertiary",icon:!0},(0,r.jsx)(B,{size:"s"}))))})),w&&(0,r.jsx)(r.React.Fragment,{key:"galleryAdd"},(0,r.jsx)("div",{className:"gallery-card-add",css:D,onClick:h,title:R("addBookmark"),"aria-label":R("addBookmarkAriaLabel"),role:"button",tabIndex:0,onKeyDown:$,onKeyUp:e=>{"Enter"!==e.key&&" "!==e.key||(e.stopPropagation(),h())}},(0,r.jsx)("div",{className:"gallery-add-icon"},(0,r.jsx)(T,{className:"mr-1",size:"l"})))),(0,r.jsx)("div",{className:"vertical-border",key:"last"}),(0,r.jsx)(Q,{config:i}))}class q extends r.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.2.0",description:"1.2.0",upgrader:e=>{let t=e;return t.bookmarks?(t.bookmarks.forEach(((e,i)=>{Object.keys(e.layersConfig||{}).forEach((a=>{const o=e.layersConfig[a];t=t.setIn(["bookmarks",i,"layersConfig",a],{visibility:o})}))})),t):t}}]}}const ee=new q;var te=l(38796),ie=l.n(te),ae=function(e,t){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(i[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(i[a[o]]=e[a[o]])}return i};const oe=e=>{const t=window.SVG,{className:i}=e,a=ae(e,["className"]),o=(0,r.classNames)("jimu-icon jimu-icon-component",i);return t?r.React.createElement(t,Object.assign({className:o,src:ie()},a)):r.React.createElement("svg",Object.assign({className:o},a))};var se=l(79703),ne=l.n(se),re=function(e,t){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(i[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(i[a[o]]=e[a[o]])}return i};const le=e=>{const t=window.SVG,{className:i}=e,a=re(e,["className"]),o=(0,r.classNames)("jimu-icon jimu-icon-component",i);return t?r.React.createElement(t,Object.assign({className:o,src:ne()},a)):r.React.createElement("svg",Object.assign({className:o},a))};var de=l(40904),me=l.n(de),ce=function(e,t){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(i[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(i[a[o]]=e[a[o]])}return i};const pe=e=>{const t=window.SVG,{className:i}=e,a=ce(e,["className"]),o=(0,r.classNames)("jimu-icon jimu-icon-component",i);return t?r.React.createElement(t,Object.assign({className:o,src:me()},a)):r.React.createElement("svg",Object.assign({className:o},a))};var ue=l(21210),ge=l.n(ue),he=function(e,t){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(i[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(i[a[o]]=e[a[o]])}return i};const ye=e=>{const t=window.SVG,{className:i}=e,a=he(e,["className"]),o=(0,r.classNames)("jimu-icon jimu-icon-component",i);return t?r.React.createElement(t,Object.assign({className:o,src:ge()},a)):r.React.createElement("svg",Object.assign({className:o},a))};const ke=e=>"hide"!==(null==e?void 0:e.listMode);function ve(i){var o,s,d,c,p,u,g,h,v,f,x,b,w,S,j,N;const{theme:I,config:C,id:M,appMode:B,widgetRect:O,configBookmarkNum:A,runtimeBookmarkNum:P,isWebMap:T}=i,$=[a.Custom1,a.Custom2],L=C.cardBackground?`background-color: ${C.cardBackground} !important;`:"",R=function(e,t,i,a,o){const s=m.utils.toLinearUnit(e);let n=y(m.utils.toLinearUnit(e),o.width-24);s.unit===m.DistanceUnits.PERCENTAGE&&(n-=10);let r=y(m.utils.toLinearUnit(t),o.height);return i&&(r=n*a),{width:n,height:r}}(C.cardItemWidth,C.cardItemHeight,C.keepAspectRatio,C.cardItemSizeRatio,O),D=k(R.width,O.width,A,P),z=void 0===C.cardItemWidth,E=C.itemSizeType===n.HonorMap,V=(e,t,i,a)=>e?t?"128px":"114px":i?"150px":`${a.width}px`,F=(e,t,i,a)=>e?t?i?"163px":"128px":i?"97px":"62px":`${a.height}px`,H=e=>{const t=e.fontStyles;return`${(null==t?void 0:t.decoration)?null==t?void 0:t.decoration:""} ${"underline"===(null==t?void 0:t.underline)?"underline":""} ${"line-through"===(null==t?void 0:t.strike)?"line-through":""};`};return r.css`
    ${"&.bookmark-widget-"+M} {
      overflow: ${window.jimuConfig.isInBuilder&&B===r.AppMode.Design?"hidden":"auto"};
      position: relative;
      height: 100%;
      width: 100%;
      .bookmark-btn-container {
        width: 32px;
        height: 32px;
      }
      .bookmark-btn {
        font-weight: bold;
        font-size: ${r.polished.rem(12)};
      }
      .bookmark-view-auto {
        overflow-y: ${window.jimuConfig.isInBuilder&&B===r.AppMode.Design&&!$.includes(C.templateType)?"hidden":"auto"};
        align-content: flex-start;
      }
      .card-add {
        cursor: pointer;
        width: ${V(E,T,z,R)};
        height: ${F(E,T,C.displayName,R)};
        display: inline-flex;
        border: 1px solid ${I.ref.palette.neutral[500]};
        background: ${I.ref.palette.white};
        margin: 5px;
        position: relative;
        .add-placeholder {
          height: ${C.displayName?"calc(100% - 35px)":"100%"};
        }
      }
      .list-add {
        cursor: pointer;
        height: 37px;
        display: inline-flex;
        border: 1px solid ${I.ref.palette.neutral[500]};
        background: ${I.ref.palette.white};
        width: calc(100% - 30px);
        margin: 0 15px 15px;
        position: relative;
      }
      .gallery-add-icon {
        position: relative;
        top: 50%;
        left: 50%;
        width: 20px;
        height: 20px;
        margin-top: -${r.polished.rem(10)};
        margin-left: -${r.polished.rem(10)};
      }
      .bookmark-runtimeSeparator {
        ${C.templateType===a.Card&&"margin: 5px 0"};
        ${C.templateType===a.List&&"margin: 10px 0 0"};
        border: 1px dashed ${I.sys.color.secondary.main};
        width: 100%;
        height: 1px;
        &:last-of-type, &:first-of-type {
          display: none;
        }
      }
      .bookmark-container {
        ${C.templateType!==a.Card&&C.templateType!==a.List&&"height: 100%"};
        width: 100%;
        color: ${I.ref.palette.black};
        ${C.templateType===a.Card&&!z&&`padding: 5px ${D}px 5px ${D+12}px`};
        .bookmark-card-title, .bookmark-card-title input {
          padding: 0px;
          height: 35px;
          line-height: 35px;
          font-family: ${C.cardNameStyle.fontFamily};
          font-size: ${C.cardNameStyle.fontSize}px;
          font-weight: ${null===(o=C.cardNameStyle.fontStyles)||void 0===o?void 0:o.weight};
          font-style: ${null===(s=C.cardNameStyle.fontStyles)||void 0===s?void 0:s.style};
          text-decoration: ${H(C.cardNameStyle)};
          color: ${C.cardNameStyle.fontColor};
        }
        .bookmark-card-col {
          width: ${V(E,T,z,R)};
          margin: 5px;
          height: ${F(E,T,C.displayName,R)};
          position: relative;
          .card-inner{
            width: 100%;
            transition: all 0.5s;
            ${L}
            .widget-card-image {
            width: 100%;
            height: ${C.displayName?"calc(100% - 35px)":"100%"};
            img {
              vertical-align: unset;
            }
          }
          }
        }
        .bookmark-list-col {
          height: 37.5px;
          align-items: center !important;
          margin: 8px 15px 0;
          ${L}
          .bookmark-list-icon {
            flex: 0 0 20px;
            color: ${C.cardNameStyle.fontColor};
          }
        }
        .bookmark-list-title {
          flex: 1;
        }
        .bookmark-list-title, .bookmark-list-title-runtime input {
          font-family: ${C.cardNameStyle.fontFamily};
          font-size: ${C.cardNameStyle.fontSize}px;
          font-weight: ${null===(d=C.cardNameStyle.fontStyles)||void 0===d?void 0:d.weight};
          font-style: ${null===(c=C.cardNameStyle.fontStyles)||void 0===c?void 0:c.style};
          text-decoration: ${H(C.cardNameStyle)};;
          color: ${C.cardNameStyle.fontColor};
        }
        .bookmark-custom-contents {
          ${L}
        }
        .jimu-keyboard-nav & .bookmark-custom-contents:focus {
          padding: 2px 2px 0;
        }
        .bookmark-pointer {
          cursor: pointer;
        }
        .active-bookmark-item {
          border: 1px solid var(--sys-color-primary-main) !important;
        }
        .bookmark-custom-pointer {
          cursor: pointer;
          border: 1px solid ${I.ref.palette.neutral[200]};
          width: 100%;
          ${C.direction===e.Vertical&&"position: absolute;"}
          ${C.direction===e.Vertical&&`height: calc(100% - ${C.space}px) !important;`}
        }
        .layout-height{
          height: ${C.pageStyle===t.Paging?"calc(100% - 49px)":"100%"} !important;
        }
        .border-none {
          border: none !important;
        }
        .runtime-bookmarkCard {
          .runtime-bookmark {
            ${L}
          }
          .runtimeBookmarkCard-operation {
            display: none;
          }
          &:hover, &:focus, &:focus-within {
            .runtimeBookmarkCard-operation {
              display: block;
              position: absolute;
              top: var(--sys-spacing-1);
              right: var(--sys-spacing-1);
            }
          }
        }
        .runtime-bookmarkList {
          width: calc(100% - 30px);
          height: 37.5px;
          line-height: 37.5px;
          margin: 8px 15px 0;
          align-items: center !important;
          ${L}
          .bookmark-list-title-runtime {
            width: 50%;
            display: flex;
            align-items: center;
            .input-wrapper {
              border: none;
              background-color: transparent;
            }
          }
          .bookmark-list-icon {
            color: ${C.cardNameStyle.fontColor};
          }
          .runtimeBookmarkList-operation {
            margin-right: 15px;
            display: none;
          }
          &:hover, &:focus, &:focus-within  {
            .runtimeBookmarkList-operation {
              display: block;
            }
          }
        }
        .runtime-title-con {
          height: 35px;
          line-height: 35px;
        }
        .runtime-title {
          width: auto;
          display: inline-block !important;
          height: 35px;
          .input-wrapper {
            border: none;
            background-color: transparent;
          }
        }
        .suspension-drop-btn{
          border-radius: 12px;
          border: 0;
        }
        .suspension-drop-placeholder{
          width: 32px;
        }
        .suspension-nav-placeholder1{
          height: 32px;
          width: 60px;
        }
        .suspension-nav-placeholder2{
          height: 24px;
          width: 100px;
        }
        .suspension-noborder-btn{
          border: 0;
          padding-left: ${r.polished.rem(7)};
        }
        .suspension-tools-top {
          position: absolute;
          top: 5px;
          left: 5px;
          z-index: 1;
          .jimu-dropdown {
            width: 32px;
          }
          .caret-icon {
            margin-left: 2px;
          }
        }
        .suspension-top-number {
          position: absolute;
          top: 5px;
          right: 5px;
          background: ${I.ref.palette.white};
          border-radius: 10px;
          opacity: 0.8;
          width: 40px;
          text-align: center;
          z-index: 1;
        }
        .suspension-tools-middle {
          display: flex;
          width: 100%;
          padding: 0 var(--sys-spacing-2);
          position: absolute;
          top: 50%;
          margin-top: ${C.direction===e.Horizon?"-13px":"-26px"};
          z-index: 1;
          .middle-nav-group button {
            background: ${I.ref.palette.white};
            opacity: 0.8;
            border-radius: 50%;
          }
        }
        .suspension-middle-play {
          position: absolute;
          right: 5px;
          bottom: 20px;
          z-index: 2;
        }
        .suspension-tools-text {
          display: flex;
          width: 100%;
          padding: var(--sys-spacing-2);
          position: absolute;
          border-top: 1px solid ${I.sys.color.secondary.main};
          bottom: 0;
          z-index: 1;
          .jimu-dropdown {
            width: 32px;
          }
          .caret-icon {
            margin-left: 2px;
          }
          .nav-btn-text {
            width: 100px;
          }
        }
        .suspension-tools-bottom {
          display: flex;
          width: 100%;
          padding: 0 var(--sys-spacing-2);
          position: absolute;
          bottom: 5px;
          z-index: 1;
          .jimu-dropdown {
            width: 32px;
          }
          .caret-icon {
            margin-left: 3px;
          }
          .scroll-navigator {
            .btn {
              border-radius: 50%;
            }
          }
          .nav-btn-bottom {
            width: ${C.autoPlayAllow?"100px":"60px"};
            border-radius: 16px;
            opacity: 0.8;
            background: ${I.ref.palette.white};
          }
          .number-count {
            border-radius: 10px;
            opacity: 0.8;
            background: ${I.ref.palette.white};
            width: 40px;
            text-align: center;
          }
        }
        .bookmark-slide {
          position: absolute;
          bottom: ${C.templateType===a.Slide3?"0px":"unset"};
          opacity: 0.8;
          background: ${I.ref.palette.white};
          ${L}
          width: 100%;
          z-index: 1;
          padding: var(--sys-spacing-2);
          .bookmark-slide-title {
            font-family: ${C.slidesNameStyle.fontFamily};
            font-size: ${C.slidesNameStyle.fontSize}px;
            font-weight: ${null===(p=C.slidesNameStyle.fontStyles)||void 0===p?void 0:p.weight};
            font-style: ${null===(u=C.slidesNameStyle.fontStyles)||void 0===u?void 0:u.style};
            text-decoration: ${H(C.slidesNameStyle)};
            color: ${C.slidesNameStyle.fontColor};
          }
          .bookmark-slide-description {
            max-height: 80px;
            overflow-y: auto;
            font-family: ${C.slidesDescriptionStyle.fontFamily};
            font-size: ${C.slidesDescriptionStyle.fontSize}px;
            font-weight: ${null===(g=C.slidesDescriptionStyle.fontStyles)||void 0===g?void 0:g.weight};
            font-style: ${null===(h=C.slidesDescriptionStyle.fontStyles)||void 0===h?void 0:h.style};
            text-decoration: ${H(C.slidesDescriptionStyle)};
            color: ${C.slidesDescriptionStyle.fontColor};
          }
        }
        .jimu-keyboard-nav & .bookmark-slide-outline:focus {
          .bookmark-slide {
            margin: 2px;
            width: calc(100% - 4px);
          }
        }
        .bookmark-slide-gallery {
          position: absolute;
          bottom: ${C.templateType===a.Slide3?0:"unset"};
          opacity: 0.8;
          background: ${I.ref.palette.white};
          ${L}
          width: 100%;
          z-index: 1;
          padding: var(--sys-spacing-2);
          .bookmark-slide-title {
            font-family: ${C.slidesNameStyle.fontFamily};
            font-size: ${C.slidesNameStyle.fontSize}px;
            font-weight: ${null===(v=C.slidesNameStyle.fontStyles)||void 0===v?void 0:v.weight};
            font-style: ${null===(f=C.slidesNameStyle.fontStyles)||void 0===f?void 0:f.style};
            text-decoration: ${H(C.slidesNameStyle)};
            color: ${C.slidesNameStyle.fontColor};
          }
          .bookmark-slide-description {
            max-height: 60px;
            overflow-y: auto;
            font-family: ${C.slidesDescriptionStyle.fontFamily};
            font-size: ${C.slidesDescriptionStyle.fontSize}px;
            font-weight: ${null===(x=C.slidesDescriptionStyle.fontStyles)||void 0===x?void 0:x.weight};
            font-style: ${null===(b=C.slidesDescriptionStyle.fontStyles)||void 0===b?void 0:b.style};
            text-decoration: ${H(C.slidesDescriptionStyle)};
            color: ${C.slidesDescriptionStyle.fontColor};
          }
        }
        .bookmark-slide2 {
          background: ${I.ref.palette.white};
          ${L}
          width: 100%;
          height: 60%;
          z-index: 1;
          padding: var(--sys-spacing-2);
          .bookmark-slide2-title {
            font-family: ${C.slidesNameStyle.fontFamily};
            font-size: ${C.slidesNameStyle.fontSize}px;
            font-weight: ${null===(w=C.slidesNameStyle.fontStyles)||void 0===w?void 0:w.weight};
            font-style: ${null===(S=C.slidesNameStyle.fontStyles)||void 0===S?void 0:S.style};
            text-decoration: ${H(C.slidesNameStyle)};
            color: ${C.slidesNameStyle.fontColor};
          }
          .bookmark-slide2-description {
            height: calc(100% - 75px);
            overflow-y: auto;
            font-family: ${C.slidesDescriptionStyle.fontFamily};
            font-size: ${C.slidesDescriptionStyle.fontSize}px;
            font-weight: ${null===(j=C.slidesDescriptionStyle.fontStyles)||void 0===j?void 0:j.weight};
            font-style: ${null===(N=C.slidesDescriptionStyle.fontStyles)||void 0===N?void 0:N.style};
            text-decoration: ${H(C.slidesDescriptionStyle)};
            color: ${C.slidesDescriptionStyle.fontColor};
          }
        }
        .gallery-slide-card {
          ${C.direction===e.Horizon&&`width: ${C.itemWidth}px !important`};
          ${C.direction===e.Horizon?`min-width: ${C.itemWidth}px !important`:`height: ${C.itemHeight}px !important`};
          height: calc(100% - ${r.polished.rem(32)});
          position: relative;
          margin: ${C.direction===e.Horizon?"var(--sys-spacing-4) 0":"0 var(--sys-spacing-4)"};
          padding-top: ${C.direction===e.Horizon?"unset":r.polished.rem(C.space)};
          ${C.direction===e.Horizon&&`margin-left: ${r.polished.rem(C.space)}`};
          &:first-of-type {
            margin-top: ${C.direction===e.Horizon?"var(--sys-spacing-4)":"10px"};
            padding-top: ${C.direction===e.Horizon?"unset":r.polished.rem(10)};
          }
          &:last-of-type {
            ${C.direction===e.Horizon?"padding-right: var(--sys-spacing-4)":`margin-bottom: ${r.polished.rem(20)}`};
          }
          .gallery-slide-inner {
            transition: all 0.5s;
            &:hover {
              transform: scale(1.05);
              .bookmark-slide-gallery {
                width: 100%;
              }
            }
          }
        }
        .gallery-slide-lastItem {
          padding-right: 16px;
          margin-bottom: 16px;
        }
        .nav-bar {
          height: 48px;
          width: 280px;
          min-width: 280px;
          border: 1px solid ${I.sys.color.secondary.main};
          ${L}
          padding: 0 var(--sys-spacing-2);
          position: absolute;
          top: 50%;
          left: 50%;
          margin-top: -24px;
          margin-left: -140px;
          .scroll-navigator {
            .btn {
              border-radius: 50%;
            }
          }
          .nav-btn {
            width: 100px;
          }
        }
        .example-tips {
          margin-top: -10px;
          top: 50%;
          position: relative;
          text-align: center;
        }
      }
      .bookmark-container::-webkit-scrollbar {
        display: none;
      }
      .gallery-container {
        display: inline-flex !important;
        overflow-x: ${window.jimuConfig.isInBuilder&&B===r.AppMode.Design&&!$.includes(C.templateType)?"hidden":"auto"};
        scrollbar-width: none;
      }
      .gallery-container-ver {
        overflow-y: ${window.jimuConfig.isInBuilder&&B===r.AppMode.Design&&!$.includes(C.templateType)?"hidden":"auto"};
        scrollbar-width: none;
      }
      .horizon-line {
        margin: 10px 15px;
        border-bottom: 1px solid ${I.sys.color.secondary.main};
      }
      .vertical-line {
        margin: 10px 15px;
        border-right: 1px solid ${I.sys.color.secondary.main};
      }
      .vertical-border {
        padding-right: var(--sys-spacing-4);
      }
      .default-img {
        width: 100%;
        height: 100%;
        background: ${I.ref.palette.neutral[300]} url(${l(54855)}) center center no-repeat;
        background-size: 50% 50%;
      }
      .edit-mask {
        height: calc(100% - 49px);
        z-index: 2;
      }
    }
  `}function fe(e){const{config:t,bookmarks:i,runtimeBookmarkArray:a,runtimeBmItemsInfo:o,runtimeSnaps:n,highLightIndex:l,runtimeHighLightIndex:d,onViewBookmark:c,handleRuntimeTitleChange:p,onRuntimeBookmarkNameChange:u,onRuntimeAdd:g,onRuntimeDelete:h}=e,{displayName:y,runtimeAddAllow:k}=t,v=r.hooks.useTranslation(f),x=e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation())},b=(e,t)=>{"Enter"!==e.key&&" "!==e.key||(e.stopPropagation(),c(t))};return(0,r.jsx)(r.React.Fragment,null,i.map(((e,t)=>{var i,a;const o=e.imgSourceType===s.Snapshot,n=o?null===(i=e.snapParam)||void 0===i?void 0:i.url:null===(a=e.imgParam)||void 0===a?void 0:a.url,d=t===l;return(0,r.jsx)(r.React.Fragment,{key:t},(0,r.jsx)("div",{className:"d-inline-flex bookmark-card-col"},(0,r.jsx)(m.Card,{onClick:()=>{c(e,!1,t)},className:(0,r.classNames)("card-inner surface-1 bookmark-pointer",{"active-bookmark-item":d}),role:"listitem","aria-selected":d,tabIndex:"0",onKeyDown:x,onKeyUp:t=>{b(t,e)}},(0,r.jsx)("div",{className:"widget-card-image"},n?(0,r.jsx)(m.ImageWithParam,{imageParam:o?e.snapParam:e.imgParam,altText:"",useFadein:!0,imageFillMode:e.imagePosition}):(0,r.jsx)("div",{className:"default-img"})),y&&(0,r.jsx)(m.CardBody,{className:"pl-2 pr-2 bookmark-card-title text-truncate"},(0,r.jsx)("span",{title:e.name},e.name)))))})),(0,r.jsx)("div",{className:"bookmark-runtimeSeparator"}),a.map(((e,t)=>{var i;let a=(0,r.Immutable)(o[e]);a=a.set("snapParam",{url:n[a.id]});const s=null===(i=null==a?void 0:a.snapParam)||void 0===i?void 0:i.url,l=r.React.createRef(),g=t===d;return(0,r.jsx)(r.React.Fragment,{key:e},(0,r.jsx)("div",{className:"d-inline-flex bookmark-card-col runtime-bookmarkCard"},(0,r.jsx)(m.Card,{onClick:()=>{c(a,!0,t)},className:(0,r.classNames)("card-inner runtime-bookmark bookmark-pointer",{"active-bookmark-item":g}),role:"listitem","aria-selected":g,tabIndex:"0",onKeyUp:e=>{"INPUT"!==e.target.tagName&&b(e,a)}},(0,r.jsx)("div",{className:"widget-card-image bg-default"},s?(0,r.jsx)(m.ImageWithParam,{imageParam:a.snapParam,altText:"",useFadein:!0,imageFillMode:a.imagePosition}):(0,r.jsx)("div",{className:"default-img"})),y&&(0,r.jsx)(m.CardBody,{className:"bookmark-card-title runtime-title-con"},(0,r.jsx)(m.TextInput,{className:"runtime-title w-100",ref:l,size:"sm",title:a.name,value:a.name||"",onClick:e=>{e.stopPropagation()},onKeyDown:e=>{((e,t)=>{"Enter"===e.key&&t.current.blur()})(e,l)},onChange:t=>{p(e,t)},onAcceptValue:t=>{u(e,t)}}))),(0,r.jsx)("span",{className:"runtimeBookmarkCard-operation float-right"},(0,r.jsx)(m.Button,{title:v("deleteOption"),onClick:t=>{h(t,e)},type:"tertiary",icon:!0},(0,r.jsx)(B,{size:"s"})))))})),k&&(0,r.jsx)(r.React.Fragment,{key:"card-add"},(0,r.jsx)("div",{className:"card-add",onClick:g,title:v("addBookmark"),"aria-label":v("addBookmarkAriaLabel"),role:"button",tabIndex:0,onKeyDown:x,onKeyUp:e=>{"Enter"!==e.key&&" "!==e.key||(e.stopPropagation(),g())}},(0,r.jsx)("div",{className:"add-placeholder"}),(0,r.jsx)("div",{className:"gallery-add-icon"},(0,r.jsx)(T,{className:"mr-1",size:"l"}))),(0,r.jsx)("div",{className:"vertical-border"})))}function xe(e){const{config:t,bookmarkName:i}=e,{displayName:a}=t;return new Array(3).fill(1).map(((e,t)=>(0,r.jsx)("div",{className:"d-inline-flex bookmark-card-col",key:t},(0,r.jsx)(m.Card,{className:"card-inner surface-1 bookmark-pointer"},(0,r.jsx)("div",{className:"widget-card-image bg-default"},(0,r.jsx)("div",{className:"default-img"})),a&&(0,r.jsx)(m.CardBody,{className:"pl-2 pr-2 bookmark-card-title text-truncate"},(0,r.jsx)("span",{title:i},i))))))}function be(e){const{config:t,bookmarks:i,runtimeBookmarkArray:a,runtimeBmItemsInfo:o,highLightIndex:s,runtimeHighLightIndex:n,onViewBookmark:l,handleRuntimeTitleChange:d,onRuntimeBookmarkNameChange:c,onRuntimeAdd:p,onRuntimeDelete:u}=e,{runtimeAddAllow:g,hideIcon:h}=t,y=r.hooks.useTranslation(f),k=(e,t)=>{"Enter"!==e.key&&" "!==e.key||(e.stopPropagation(),l(t))};return(0,r.jsx)(r.React.Fragment,null,i.map(((e,t)=>{const i=t===s;return(0,r.jsx)("div",{key:t,onClick:()=>{l(e,!1,t)},className:(0,r.classNames)("d-flex bookmark-list-col surface-1 bookmark-pointer",{"active-bookmark-item":i}),role:"listitem","aria-selected":i,tabIndex:0,onKeyUp:t=>{k(t,e)}},!h&&(0,r.jsx)(ye,{className:"ml-4 bookmark-list-icon"}),(0,r.jsx)("div",{className:"ml-2 bookmark-list-title text-truncate",title:e.name},e.name))})),(0,r.jsx)("div",{className:"bookmark-runtimeSeparator"}),a.map(((e,t)=>{const i=(0,r.Immutable)(o[e]),a=r.React.createRef(),s=t===n;return(0,r.jsx)("div",{key:e,onClick:()=>{l(i,!0,t)},role:"listitem","aria-selected":s,tabIndex:0,onKeyUp:e=>{k(e,i)},className:(0,r.classNames)("d-flex runtime-bookmark runtime-bookmarkList surface-1 bookmark-pointer",{"active-bookmark-item":s})},!h&&(0,r.jsx)(ye,{className:"ml-4 bookmark-list-icon"}),(0,r.jsx)(m.TextInput,{className:"bookmark-list-title-runtime",ref:a,size:"sm",title:i.name,value:i.name||"",onKeyDown:e=>{((e,t)=>{"Enter"===e.key&&t.current.blur()})(e,a)},onChange:t=>{d(e,t)},onAcceptValue:t=>{c(e,t)}}),(0,r.jsx)("div",{className:"h-100 flex-grow-1"}),(0,r.jsx)(m.Button,{className:"runtimeBookmarkList-operation",title:y("deleteOption"),onClick:t=>{u(t,e)},type:"tertiary",icon:!0,size:"sm"},(0,r.jsx)(B,{size:"s"})))})),g&&(0,r.jsx)(r.React.Fragment,{key:"list-add"},(0,r.jsx)("div",{className:"list-add",onClick:p,onKeyUp:e=>{"Enter"!==e.key&&" "!==e.key||(e.stopPropagation(),p())},title:y("addBookmark"),"aria-label":y("addBookmarkAriaLabel"),role:"button",tabIndex:0},(0,r.jsx)("div",{className:"gallery-add-icon"},(0,r.jsx)(T,{className:"mr-1",size:"l"}))),(0,r.jsx)("div",{className:"vertical-border"})))}var we=function(e,t,i,a){return new(i||(i=Promise))((function(o,s){function n(e){try{l(a.next(e))}catch(e){s(e)}}function r(e){try{l(a.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,r)}l((a=a.apply(e,t||[])).next())}))},Se=function(e,t){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(i[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(i[a[o]]=e[a[o]])}return i};class je extends r.React.PureComponent{constructor(n){var l;super(n),this.Graphic=null,this.GraphicsLayer=null,this.Extent=null,this.Viewpoint=null,this.Basemap=null,this.resizeConRef=r.React.createRef(),this.autoOffCondition=e=>{var i,a;const{config:o,appMode:s,browserSizeMode:n}=this.props,{pageStyle:l,autoPlayAllow:d,autoInterval:m,autoLoopAllow:c}=o,p=n!==e.browserSizeMode,u=m!==(null===(i=e.config)||void 0===i?void 0:i.autoInterval)||c!==(null===(a=e.config)||void 0===a?void 0:a.autoLoopAllow);return s===r.AppMode.Design||l===t.Scroll||!d||u||p},this.settingLayout=()=>{const{layoutId:e,layoutItemId:t,id:i,selectionIsSelf:a}=this.props,{isSetLayout:o}=this.state;e&&i&&t&&!o&&a&&(this.props.dispatch(r.appActions.widgetStatePropChange(i,"layoutInfo",{layoutId:e,layoutItemId:t})),this.setState({isSetLayout:!0}))},this.formatMessage=(e,t)=>{const i=Object.assign({},f,m.defaultMessages,r.defaultMessages);return this.props.intl.formatMessage({id:e,defaultMessage:i[e]},t)},this.onResize=(e,t)=>{const{id:i,dispatch:a}=this.props,o={width:e,height:t};this.setState({widgetRect:o}),a(r.appActions.widgetStatePropChange(i,"widgetRect",o))},this.isEditing=()=>{const{appMode:e,config:t,selectionIsSelf:i,selectionIsInSelf:a}=this.props;return!!window.jimuConfig.isInBuilder&&((i||a)&&window.jimuConfig.isInBuilder&&e!==r.AppMode.Run&&t.isTemplateConfirm)},this.handleRuntimeAdd=()=>we(this,void 0,void 0,(function*(){this.rtBookmarkId++;const{jimuMapView:e}=this.state;if(!e)return;const t=e.view,{id:i}=this.props,a=(e=>{const t=(e,i)=>(e.forEach((e=>{var a;if("string"==typeof e.id&&e.id.includes("jimu-draw"))return;i[e.id]={layers:{}},i[e.id].visibility=null==e?void 0:e.visible;const o=e.layers||e.sublayers||e.allSublayers;o&&o.length>0&&t(o,null===(a=i[e.id])||void 0===a?void 0:a.layers)})),i);return t(e,{})})(t.map.layers.toArray());let o=this.rtBookmarkId.toString();const{dataUrl:n}=yield t.takeScreenshot({width:148,height:120});if(this.isUseCache){o=`${r.utils.getLocalStorageAppKey()}-bookmark-${i}-bookmark-${r.utils.getUUID()}`}const l={id:o,name:`${this.formatMessage("_widgetLabel")}(${this.rtBookmarkId})`,title:`${this.formatMessage("_widgetLabel")}-${this.rtBookmarkId}`,type:t.type,imgSourceType:s.Snapshot,extent:t.extent.toJSON(),viewpoint:t.viewpoint.toJSON(),showFlag:!0,runTimeFlag:!0,mapDataSourceId:e.dataSourceId,layersConfig:a};if("3d"===t.type&&(l.environment=JSON.parse(JSON.stringify(t.environment))),this.isUseCache){const e=g(this.props.id,this.props.mapWidgetId);r.utils.setLocalStorage(e,JSON.stringify(this.state.runtimeBmArray.concat(o))),r.utils.setLocalStorage(o,JSON.stringify(l)),this.runtimeSnapCache.put(o,n)}this.setState({runtimeBmArray:this.state.runtimeBmArray.concat(o),runtimeBmItemsInfo:Object.assign(Object.assign({},this.state.runtimeBmItemsInfo),{[o]:l}),runtimeSnaps:Object.assign(Object.assign({},this.state.runtimeSnaps),{[o]:n})})})),this.showMapOriginLayer=(e,t)=>{const i=(e,t)=>{e.forEach((e=>{if(ke(e))for(const i in t){const a=t[i];if(e.visible=!1,e.id===a.id){e.visible=!0;break}}e.layers&&e.layers.length>0&&i(e.layers.toArray(),t)}))};i(e,t)},this.onViewBookmark=(e,t,i)=>{var a,o;if(!e)return;const{jimuMapView:s,viewGroup:n}=this.state,{id:l,useMapWidgetIds:d}=this.props,m=(null===(o=null===(a=this.props)||void 0===a?void 0:a.stateProps)||void 0===o?void 0:o.activeBookmarkId)||0;t?this.setState({highLightIndex:-1,runtimeHighLightIndex:i}):void 0!==t&&this.setState({highLightIndex:i,runtimeHighLightIndex:-1});const c=document.querySelectorAll(`.widget-bookmark.useMapWidgetId-${null==d?void 0:d[0]}`),p=`bookmark-widget-${l}`;c.forEach((e=>{if(!e.classList.contains(p)){const t=e.querySelector(".bookmark-container .active-bookmark-item");null==t||t.classList.remove("active-bookmark-item")}})),t||i!==this.state.highLightIndex||c.forEach((e=>{if(e.classList.contains(p)){e.querySelectorAll(".bookmark-container .bookmark-pointer,.bookmark-custom-pointer")[i].classList.add("active-bookmark-item")}})),t&&i===this.state.runtimeHighLightIndex&&c.forEach((e=>{if(e.classList.contains(p)){e.querySelectorAll(".bookmark-container .bookmark-pointer.runtime-bookmark")[i].classList.add("active-bookmark-item")}})),e&&!e.runTimeFlag&&m!==e.id&&this.props.dispatch(r.appActions.widgetStatePropChange(l,"activeBookmarkId",e.id)),d&&0!==d.length&&(0,r.getAppStore)().dispatch(r.appActions.requestAutoControlMapWidget(d[0],l)),s&&(e&&s.dataSourceId!==e.mapDataSourceId?n&&n.switchMap().then((()=>{this.viewBookmark(e)})):this.viewBookmark(e))},this.isNumber=e=>!isNaN(parseFloat(e))&&isFinite(e)&&"[object Number]"===Object.prototype.toString.call(e),this.viewBookmark=e=>{var t,a,o;const{appMode:s,config:n}=this.props,{jimuMapView:l}=this.state,{viewpoint:d}=e,m={duration:1e3};if((s===r.AppMode.Run||s===r.AppMode.Express)&&l&&l.view){if(l.view.goTo(this.Viewpoint.fromJSON(d),m),e.baseMap){const t=e.baseMap.asMutable?e.baseMap.asMutable({deep:!0}):e.baseMap;l.view.map.basemap=this.Basemap.fromJSON(t,{origin:"web-scene"})}if(e.timeExtent){((e,t)=>{const i=e.getAllJimuLayerViews();(0,r.loadArcGISJSAPIModules)(["esri/layers/support/FeatureFilter","esri/TimeExtent"]).then((a=>{const o=a[0],s=a[1];i.forEach((i=>p(void 0,void 0,void 0,(function*(){yield e.whenJimuLayerViewLoaded(i.id);const a=i.view;if(a)if(a.filter){const e=a.filter.clone();e.timeExtent=new s({start:t[0],end:t[1]}),a.filter=e}else{const e=new o({});e.timeExtent=new s({start:t[0],end:t[1]}),a.filter=e}}))))}))})(l,e.timeExtent.asMutable({deep:!0}))}const s=null===(t=null==e?void 0:e.ground)||void 0===t?void 0:t.transparency;(null==e?void 0:e.ground)&&this.isNumber(s)?l.view.map.ground.opacity=(100-s)/100:l.view.map.ground.opacity=this.mapOpacity;const c=l.view.map.layers.toArray(),u=null===(a=null==e?void 0:e.environment)||void 0===a?void 0:a.lighting.asMutable({deep:!0});if((null==e?void 0:e.environment)&&u){l.view.environment.lighting={type:u.type,date:u.datetime,directShadowsEnabled:u.directShadows,displayUTCOffset:u.displayUTCOffset}}const g=null===(o=null==e?void 0:e.environment)||void 0===o?void 0:o.weather;if((null==e?void 0:e.environment)&&g){l.view.environment.weather=g.asMutable({deep:!0})}const h=l.dataSourceId!==e.mapDataSourceId;if(!n.ignoreLayerVisibility)if(e.mapOriginFlag){if("3d"===l.view.type){const t=c.concat(l.view.map.ground.layers.toArray());this.showMapOriginLayer(t,e.visibleLayers)}}else((e,t,i=!1)=>{if(i)return;const a=(e,t)=>{e.forEach((e=>{var i,o,s;ke(e)&&void 0!==(null===(i=t[e.id])||void 0===i?void 0:i.visibility)&&(e.visible=null===(o=t[e.id])||void 0===o?void 0:o.visibility);const n=e.layers||e.sublayers||e.allSublayers,r=null===(s=null==t?void 0:t[e.id])||void 0===s?void 0:s.layers;n&&n.length>0&&r&&Object.keys(r).length>0&&a(n.toArray(),r)}))};a(e,t)})(c,e.layersConfig,h);const y=e.graphics&&e.graphics.length>0;if(this.graphicsLayerCreated[l.id]){const t=l.view.map.findLayerById(this.graphicsLayerId[l.id]);n.displayType===i.Selected?(null==t||t.removeAll(),y&&t&&e.graphics.forEach((e=>{t.graphics.push(this.Graphic.fromJSON(e))}))):this.graphicsPainted[l.id][e.id]?y&&(e.graphics.forEach((e=>{const i=t.graphics.find((t=>t.attributes.jimuDrawId===e.attributes.jimuDrawId));t.remove(i)})),e.graphics.forEach((e=>{t.graphics.push(this.Graphic.fromJSON(e))}))):(y&&e.graphics.forEach((e=>{t.graphics.push(this.Graphic.fromJSON(e))})),this.graphicsPainted[l.id][e.id]=!0)}else{const t=(new Date).getTime(),i=`bookmark-layer-${l.id}-${t}`,a=new this.GraphicsLayer({id:i,listMode:"hide",title:this.formatMessage("graphicLayer"),elevationInfo:{mode:"relative-to-scene"}});y&&e.graphics.forEach((e=>{a.graphics.push(this.Graphic.fromJSON(e))})),l.view.map.add(a),this.graphicsPainted[l.id]={},this.graphicsPainted[l.id][e.id]=!0,this.graphicsLayerId[l.id]=a.id,this.graphicsLayerCreated[l.id]=!0}}},this.onActiveViewChange=e=>{var t,i,a;const{appMode:o,config:s}=this.props;if(this.setState({jimuMapView:e}),this.mapOpacity=(null===(a=null===(i=null===(t=null==e?void 0:e.view)||void 0===t?void 0:t.map)||void 0===i?void 0:i.ground)||void 0===a?void 0:a.opacity)||1,e&&(o===r.AppMode.Run||o===r.AppMode.Express)&&s.initBookmark&&!this.alreadyActiveLoading){const t=this.getMapBookmarks(e)||[],i=v(s,t);i.length>0&&(this.alreadyActiveLoading=!0,e.view.when((()=>{this.setState({bookmarkOnViewId:i[0].id}),setTimeout((()=>{this.onViewBookmark(i[0])}),0)})))}},this.handleViewGroupCreate=e=>{this.setState({viewGroup:e})},this.typedImgExist=e=>{var t,i;return e.imgSourceType===s.Snapshot?null===(t=e.snapParam)||void 0===t?void 0:t.url:null===(i=e.imgParam)||void 0===i?void 0:i.url},this.renderSlideViewTop=e=>{var t,i;const a=e.imgSourceType===s.Snapshot,o=a?null===(t=e.snapParam)||void 0===t?void 0:t.url:null===(i=e.imgParam)||void 0===i?void 0:i.url,{displayName:n}=this.props.config;return(0,r.jsx)("div",{className:"w-100 h-100 bookmark-pointer surface-1 border-0 bookmark-slide-outline jimu-outline-inside",onClick:()=>{this.onViewBookmark(e)},key:e.id||`webmap-${e.name}`,role:"listitem",tabIndex:0,"aria-label":this.formatMessage("_widgetLabel"),onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation())},onKeyUp:t=>{"Enter"!==t.key&&" "!==t.key||(t.stopPropagation(),this.onViewBookmark(e))}},(0,r.jsx)("div",{className:(0,r.classNames)("bookmark-slide",{"d-none":!n&&!e.description})},(0,r.jsx)("div",{className:(0,r.classNames)("bookmark-slide-title",{"d-none":!n})},e.name),(0,r.jsx)("div",{className:"bookmark-slide-description"},e.description)),o?(0,r.jsx)(m.ImageWithParam,{imageParam:a?e.snapParam:e.imgParam,altText:"",useFadein:!0,imageFillMode:e.imagePosition}):(0,r.jsx)("div",{className:"default-img"}))},this.renderSlideViewText=e=>{var t,i;const a=e.imgSourceType===s.Snapshot,o=a?null===(t=e.snapParam)||void 0===t?void 0:t.url:null===(i=e.imgParam)||void 0===i?void 0:i.url,{displayName:n}=this.props.config;return(0,r.jsx)("div",{className:"w-100 h-100 bookmark-pointer jimu-outline-inside surface-1 border-0",onClick:()=>{this.onViewBookmark(e)},key:e.id||`webmap-${e.name}`,role:"listitem",tabIndex:0,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation())},onKeyUp:t=>{"Enter"!==t.key&&" "!==t.key||(t.stopPropagation(),this.onViewBookmark(e))}},(0,r.jsx)("div",{className:"w-100",style:{height:"40%"}},o?(0,r.jsx)(m.ImageWithParam,{imageParam:a?e.snapParam:e.imgParam,altText:"",useFadein:!0,imageFillMode:e.imagePosition}):(0,r.jsx)("div",{className:"default-img"})),(0,r.jsx)("div",{className:(0,r.classNames)("bookmark-slide2",{"d-none":!n&&!e.description})},(0,r.jsx)("div",{className:(0,r.classNames)("bookmark-slide2-title",{"d-none":!n})},e.name),(0,r.jsx)("div",{className:"bookmark-slide2-description"},e.description)))},this.renderSlideViewBottom=e=>{var t,i;const a=e.imgSourceType===s.Snapshot,o=a?null===(t=e.snapParam)||void 0===t?void 0:t.url:null===(i=e.imgParam)||void 0===i?void 0:i.url,{displayName:n}=this.props.config;return(0,r.jsx)("div",{className:"w-100 h-100 bookmark-pointer surface-1 border-0 bookmark-slide-outline jimu-outline-inside",onClick:()=>{this.onViewBookmark(e)},key:e.id||`webmap-${e.name}`,role:"listitem","aria-label":this.formatMessage("_widgetLabel"),tabIndex:0},o?(0,r.jsx)(m.ImageWithParam,{imageParam:a?e.snapParam:e.imgParam,altText:"",useFadein:!0,imageFillMode:e.imagePosition}):(0,r.jsx)("div",{className:"default-img"}),(0,r.jsx)("div",{className:(0,r.classNames)("bookmark-slide",{"d-none":!n&&!e.description})},(0,r.jsx)("div",{className:(0,r.classNames)("bookmark-slide-title",{"d-none":!n})},e.name),(0,r.jsx)("div",{className:"bookmark-slide-description"},e.description)))},this.renderCustomContents=e=>{const t=this.getLayoutEntry(),{layouts:i}=this.props;return e.layoutName?(0,r.jsx)("div",{className:"w-100 h-100 bookmark-custom-contents bookmark-pointer surface-1 border-0 jimu-outline-inside",onClick:()=>{this.onViewBookmark(e)},key:e.id,role:"listitem",tabIndex:0,onKeyUp:t=>{"Enter"!==t.key&&" "!==t.key||(t.stopPropagation(),this.onViewBookmark(e))}},(0,r.jsx)(t,{isRepeat:!0,layouts:i[e.layoutName],isInWidget:!0,className:"layout-height"})):(0,r.jsx)("div",null)},this.renderCustomExample=()=>{const e=this.getLayoutEntry(),{layouts:t}=this.props;if(t[o.Default])return(0,r.jsx)("div",{className:"w-100 h-100 bookmark-custom-contents bookmark-pointer surface-1 border-0"},(0,r.jsx)(e,{isRepeat:!0,layouts:t[o.Default],isInWidget:!0,className:"layout-height"}))},this.handleArrowChange=e=>{const{config:t}=this.props,{jimuMapView:i}=this.state,a=this.getMapBookmarks(i)||[],o=v(t,a),s=o.length;if(0===s)return;const{bookmarkOnViewId:n}=this.state;let r=o.findIndex((e=>e.id===n))>-1?o.findIndex((e=>e.id===n)):0;r!==s-1||e?0===r&&e?r=s-1:e&&r>0?r--:e||r++:r=0,this.setState({bookmarkOnViewId:o[r].id}),this.onViewBookmark(o[r])},this.handleOnViewChange=e=>{const{config:t}=this.props,{jimuMapView:i}=this.state,a=this.getMapBookmarks(i)||[],o=v(t,a),s=o.findIndex((t=>t.id===e))>-1?o.findIndex((t=>t.id===e)):0;this.setState({bookmarkOnViewId:e}),this.onViewBookmark(o[s])},this.getBookmarksOptions=e=>{const t=[];return e.forEach((e=>{t.push((0,r.jsx)("option",{key:e.id,value:e.id},e.name))})),t},this.getBookmarksDropdownItems=e=>{const{bookmarkOnViewId:t}=this.state,i=[];return e.forEach((e=>{i.push((0,r.jsx)(m.DropdownItem,{key:e.id,active:e.id===t},e.name))})),i},this.handleAutoPlay=()=>{const{config:e,useMapWidgetIds:t,id:i}=this.props,{bookmarkOnViewId:a,autoPlayStart:o,playTimer:s,jimuMapView:n}=this.state,l=this.getMapBookmarks(n)||[],d=v(e,l);if(0===d.length)return;if(o)return s&&clearInterval(s),void this.setState({autoPlayStart:!1,playTimer:void 0});t&&0!==t.length&&(0,r.getAppStore)().dispatch(r.appActions.requestAutoControlMapWidget(t[0],i));const{autoInterval:m,autoLoopAllow:c}=e;let p=d.findIndex((e=>e.id===a));-1!==p&&p!==d.length-1||(p=0),this.setState({bookmarkOnViewId:d[p].id}),this.onViewBookmark(d[p]);const u=setInterval((()=>{if(p++,c)p>=d.length&&(p=0);else if(p>=d.length)return clearInterval(u),s&&clearInterval(s),void this.setState({autoPlayStart:!1,playTimer:void 0});this.setState({bookmarkOnViewId:d[p].id}),this.onViewBookmark(d[p])}),1e3*m+1e3);this.setState({autoPlayStart:!0,playTimer:u})},this.renderBottomTools=e=>{const{config:t}=this.props,{jimuMapView:i}=this.state,o=this.getMapBookmarks(i)||[],s=v(t,o),n=s.length,{bookmarkOnViewId:l,autoPlayStart:d}=this.state;let c=1;c=e?0:s.findIndex((e=>e.id===l))>-1?s.findIndex((e=>e.id===l))+1:1;return(e=>{let i;switch(e){case a.Slide1:i=(0,r.jsx)("div",{className:"suspension-tools-bottom align-items-center justify-content-around"},s.length>1?(0,r.jsx)(m.Dropdown,{size:"sm",activeIcon:!0,menuRole:"listbox"},(0,r.jsx)(m.DropdownButton,{arrow:!1,icon:!0,size:"sm",type:"default",className:"suspension-drop-btn",title:this.formatMessage("bookmarkList")},(0,r.jsx)(oe,{autoFlip:!0,className:"suspension-drop-btn"})),(0,r.jsx)(m.DropdownMenu,null,s.map((e=>{const t=e.id===l;return(0,r.jsx)(m.DropdownItem,{key:e.id,active:t,onClick:()=>{this.handleOnViewChange(e.id)}},e.name)})))):(0,r.jsx)("div",{className:"suspension-drop-placeholder"}),s.length>1?(0,r.jsx)(m.NavButtonGroup,{type:"tertiary",vertical:!1,onChange:this.handleArrowChange,className:"nav-btn-bottom",previousAriaLabel:`${c}/${n}. `+this.formatMessage("previousBookmark"),nextAriaLabel:`${c}/${n}. `+this.formatMessage("nextBookmark"),previousTitle:this.formatMessage("previousBookmark"),nextTitle:this.formatMessage("nextBookmark")},(0,r.jsx)("div",{className:"bookmark-btn-container"},t.autoPlayAllow&&(0,r.jsx)(m.Button,{icon:!0,className:"bookmark-btn",type:"link",onClick:this.handleAutoPlay,title:d?this.formatMessage("pause"):this.formatMessage("play"),"aria-label":d?this.formatMessage("pause"):this.formatMessage("play"),"data-testid":"triggerAuto"},d?(0,r.jsx)(pe,{className:"mr-1",size:"l"}):(0,r.jsx)(le,{className:"mr-1",size:"l"})))):(0,r.jsx)("div",{className:"suspension-nav-placeholder1"}),(0,r.jsx)("span",{className:"number-count"},this.isRTL?`${n}/${c}`:`${c}/${n}`));break;case a.Slide2:case a.Custom1:case a.Custom2:i=s.length>1?(0,r.jsx)("div",{className:"suspension-tools-text align-items-center justify-content-around"},(0,r.jsx)(m.Dropdown,{size:"sm",activeIcon:!0},(0,r.jsx)(m.DropdownButton,{arrow:!1,icon:!0,size:"sm",type:"default",className:"suspension-drop-btn",title:this.formatMessage("bookmarkList")},(0,r.jsx)(oe,{autoFlip:!0,className:"suspension-drop-btn"})),(0,r.jsx)(m.DropdownMenu,null,s.map((e=>{const t=e.id===l;return(0,r.jsx)(m.DropdownItem,{key:e.id,active:t,onClick:()=>{this.handleOnViewChange(e.id)}},e.name)})))),(0,r.jsx)(m.NavButtonGroup,{type:"tertiary",vertical:!1,onChange:this.handleArrowChange,className:"nav-btn-text",previousAriaLabel:`${c}/${n}. `+this.formatMessage("previousBookmark"),nextAriaLabel:`${c}/${n}. `+this.formatMessage("nextBookmark"),previousTitle:this.formatMessage("previousBookmark"),nextTitle:this.formatMessage("nextBookmark")},(0,r.jsx)("span",null,c,"/",n)),(0,r.jsx)("div",{className:"bookmark-btn-container"},t.autoPlayAllow&&(0,r.jsx)(m.Button,{icon:!0,className:"bookmark-btn",type:"link",onClick:this.handleAutoPlay,title:d?this.formatMessage("pause"):this.formatMessage("play"),"aria-label":d?this.formatMessage("pause"):this.formatMessage("play")},d?(0,r.jsx)(pe,{className:"mr-1",size:"l"}):(0,r.jsx)(le,{className:"mr-1",size:"l"})))):(0,r.jsx)("div",{className:"align-items-center"});break;case a.Slide3:i=(0,r.jsx)(x.Fragment,null,(0,r.jsx)("div",{className:"suspension-tools-top align-items-center justify-content-around"},s.length>1?(0,r.jsx)(m.Dropdown,{size:"sm",activeIcon:!0},(0,r.jsx)(m.DropdownButton,{arrow:!1,icon:!0,size:"sm",type:"default",className:"suspension-drop-btn",title:this.formatMessage("bookmarkList")},(0,r.jsx)(oe,{autoFlip:!0,className:"suspension-drop-btn"})),(0,r.jsx)(m.DropdownMenu,null,s.map((e=>{const t=e.id===l;return(0,r.jsx)(m.DropdownItem,{key:e.id,active:t,onClick:()=>{this.handleOnViewChange(e.id)}},e.name)})))):(0,r.jsx)("div",{className:"suspension-drop-placeholder"})),(0,r.jsx)("span",{className:"suspension-top-number"},c,"/",n),(0,r.jsx)("div",{className:"suspension-tools-middle"},s.length>1&&(0,r.jsx)(m.NavButtonGroup,{type:"tertiary",vertical:!1,onChange:this.handleArrowChange,className:"middle-nav-group",previousAriaLabel:`${c}/${n}. `+this.formatMessage("previousBookmark"),nextAriaLabel:`${c}/${n}. `+this.formatMessage("nextBookmark"),previousTitle:this.formatMessage("previousBookmark"),nextTitle:this.formatMessage("nextBookmark")})),t.autoPlayAllow&&(0,r.jsx)("div",{className:"suspension-middle-play"},(0,r.jsx)(m.Button,{icon:!0,className:"bookmark-btn",type:"link",onClick:this.handleAutoPlay,title:d?this.formatMessage("pause"):this.formatMessage("play"),"aria-label":d?this.formatMessage("pause"):this.formatMessage("play")},d?(0,r.jsx)(pe,{className:"mr-1",size:30}):(0,r.jsx)(le,{className:"mr-1",size:30}))))}return i})(t.templateType)},this.renderSlideScroll=e=>{const t=e.map(((e,t)=>{var i,a;const o=e.imgSourceType===s.Snapshot,n=o?null===(i=e.snapParam)||void 0===i?void 0:i.url:null===(a=e.imgParam)||void 0===a?void 0:a.url,l=t===this.state.highLightIndex,{displayName:d}=this.props.config;return(0,r.jsx)("div",{className:"gallery-slide-card",key:t},(0,r.jsx)("div",{className:(0,r.classNames)("w-100 h-100 bookmark-pointer gallery-slide-inner surface-1 border-0",{"active-bookmark-item":l}),onClick:()=>{this.onViewBookmark(e,!1,t)},role:"listitem","aria-selected":l,tabIndex:0,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation())},onKeyUp:t=>{"Enter"!==t.key&&" "!==t.key||(t.stopPropagation(),this.onViewBookmark(e))}},(0,r.jsx)("div",{className:(0,r.classNames)("bookmark-slide-gallery",{"d-none":!d&&!e.description})},(0,r.jsx)("div",{className:(0,r.classNames)("bookmark-slide-title",{"d-none":!d})},e.name),(0,r.jsx)("div",{className:"bookmark-slide-description"},e.description)),n?(0,r.jsx)(m.ImageWithParam,{imageParam:o?e.snapParam:e.imgParam,altText:"",useFadein:!0,imageFillMode:e.imagePosition}):(0,r.jsx)("div",{className:"default-img"})))})),i=(0,r.jsx)("div",{className:"gallery-slide-lastItem",key:"last"});return t.asMutable({deep:!0}).concat(i)},this.renderCustomScroll=e=>{const t=this.getLayoutEntry(),{layouts:i}=this.props,a=e.map(((e,a)=>{const o=a===this.state.highLightIndex;return(0,r.jsx)("div",{className:"gallery-slide-card",key:a},(0,r.jsx)("div",{className:(0,r.classNames)("w-100 h-100 bookmark-custom-pointer surface-1 border-0",{"active-bookmark-item":o}),onClick:()=>{this.onViewBookmark(e,!1,a)},role:"listitem","aria-selected":o,tabIndex:0},(0,r.jsx)(t,{isRepeat:!0,layouts:i[e.layoutName],isInWidget:!0,className:"layout-height"})))})),o=(0,r.jsx)("div",{className:"gallery-slide-lastItem",key:"last"});return a.asMutable({deep:!0}).concat(o)},this.getMapBookmarks=e=>{var t,i;if(e&&(null==e?void 0:e.dataSourceId)){const a=e.view;if(!a)return;const o=null===(t=e.view)||void 0===t?void 0:t.map;let s=[];if("3d"===a.type){const e=o.toJSON();s=(null===(i=null==e?void 0:e.presentation)||void 0===i?void 0:i.slides)?JSON.parse(JSON.stringify(null==e?void 0:e.presentation.slides)):[]}else"2d"===a.type&&(s=(null==o?void 0:o.bookmarks)?JSON.parse(JSON.stringify(o.bookmarks)):[]);return s.map(((t,i)=>{var a,o;return t.id=`mapOrigin-${i}`,t.runTimeFlag=!0,t.mapOriginFlag=!0,t.mapDataSourceId=e.dataSourceId,(null===(a=t.thumbnail)||void 0===a?void 0:a.url)?t.imgParam={url:t.thumbnail.url}:t.imgParam={},(null===(o=t.title)||void 0===o?void 0:o.text)&&(t.name=t.title.text),t.imagePosition=m.ImageFillMode.Fill,t}))}},this.renderBookmarkList=i=>{var o;const{appMode:s,config:n,selectionIsSelf:l,selectionIsInSelf:d}=this.props,{transitionInfo:c}=n,{bookmarkOnViewId:p,autoPlayStart:u,jimuMapView:g}=this.state,h="3d"!==(null===(o=null==g?void 0:g.view)||void 0===o?void 0:o.type),y=this.getMapBookmarks(g)||[];![a.Custom1,a.Custom2].includes(n.templateType)&&n.displayFromWeb&&(i=i.concat(y));const k=i.findIndex((e=>e.id===p))>-1?i.findIndex((e=>e.id===p)):0,v=0===k?1:Math.max(0,k-1),f=n.direction===e.Horizon,b=[a.Slide1,a.Slide2,a.Slide3,a.Custom1,a.Custom2],w=(l||d?null==c?void 0:c.previewId:null)||null,S=n.templateType===a.Gallery||b.includes(n.templateType)&&n.pageStyle===t.Scroll;return(0,r.jsx)("div",{className:"bookmark-container "+(S?f?"gallery-container":"gallery-container-ver":""),ref:this.containerRef,role:"list"},(e=>{var o,l,d,g,y,f,b,S;let j;switch(e){case a.Card:j=(0,r.jsx)(fe,{config:this.props.config,bookmarks:i,runtimeBookmarkArray:this.state.runtimeBmArray,runtimeBmItemsInfo:this.state.runtimeBmItemsInfo,runtimeSnaps:this.state.runtimeSnaps,highLightIndex:this.state.highLightIndex,runtimeHighLightIndex:this.state.runtimeHighLightIndex,onViewBookmark:this.onViewBookmark,handleRuntimeTitleChange:this.handleRuntimeTitleChange,onRuntimeBookmarkNameChange:this.onRuntimeBookmarkNameChange,onRuntimeDelete:this.handleRuntimeDelete,onRuntimeAdd:this.handleRuntimeAdd});break;case a.List:j=(0,r.jsx)(be,{config:this.props.config,bookmarks:i,runtimeBookmarkArray:this.state.runtimeBmArray,runtimeBmItemsInfo:this.state.runtimeBmItemsInfo,highLightIndex:this.state.highLightIndex,runtimeHighLightIndex:this.state.runtimeHighLightIndex,onViewBookmark:this.onViewBookmark,handleRuntimeTitleChange:this.handleRuntimeTitleChange,onRuntimeBookmarkNameChange:this.onRuntimeBookmarkNameChange,onRuntimeDelete:this.handleRuntimeDelete,onRuntimeAdd:this.handleRuntimeAdd});break;case a.Slide1:const e=i.map((e=>this.renderSlideViewTop(e)));return(0,r.jsx)(x.Fragment,null,n.pageStyle===t.Paging?(0,r.jsx)(r.TransitionContainer,{previousIndex:v,currentIndex:k,transitionType:null===(o=null==c?void 0:c.transition)||void 0===o?void 0:o.type,direction:null===(l=null==c?void 0:c.transition)||void 0===l?void 0:l.direction,playId:w},e):this.renderSlideScroll(i),n.pageStyle===t.Scroll&&(0,r.jsx)(Q,{config:n}),n.pageStyle===t.Paging&&this.renderBottomTools());case a.Slide2:const N=i.map((e=>this.renderSlideViewText(e)));return(0,r.jsx)(x.Fragment,null,n.pageStyle===t.Paging?(0,r.jsx)(r.TransitionContainer,{previousIndex:v,currentIndex:k,transitionType:null===(d=null==c?void 0:c.transition)||void 0===d?void 0:d.type,direction:null===(g=null==c?void 0:c.transition)||void 0===g?void 0:g.direction,playId:w},N):this.renderSlideScroll(i),n.pageStyle===t.Scroll&&(0,r.jsx)(Q,{config:n}),n.pageStyle===t.Paging&&this.renderBottomTools());case a.Slide3:const I=i.map((e=>this.renderSlideViewBottom(e)));return(0,r.jsx)(x.Fragment,null,n.pageStyle===t.Paging?(0,r.jsx)(r.TransitionContainer,{previousIndex:v,currentIndex:k,transitionType:null===(y=null==c?void 0:c.transition)||void 0===y?void 0:y.type,direction:null===(f=null==c?void 0:c.transition)||void 0===f?void 0:f.direction,playId:w},I):this.renderSlideScroll(i),n.pageStyle===t.Scroll&&(0,r.jsx)(Q,{config:n}),n.pageStyle===t.Paging&&this.renderBottomTools());case a.Gallery:j=(0,r.jsx)(X,{config:this.props.config,bookmarks:i,runtimeBookmarkArray:this.state.runtimeBmArray,runtimeBmItemsInfo:this.state.runtimeBmItemsInfo,runtimeSnaps:this.state.runtimeSnaps,highLightIndex:this.state.highLightIndex,runtimeHighLightIndex:this.state.runtimeHighLightIndex,onViewBookmark:this.onViewBookmark,handleRuntimeTitleChange:this.handleRuntimeTitleChange,onRuntimeBookmarkNameChange:this.onRuntimeBookmarkNameChange,onRuntimeDelete:this.handleRuntimeDelete,onRuntimeAdd:this.handleRuntimeAdd,isWebMap:h,widgetRect:this.state.widgetRect});break;case a.Navigator:const C=n.bookmarks.length,M=n.bookmarks.findIndex((e=>e.id===p))>-1?n.bookmarks.findIndex((e=>e.id===p))+1:1;return(0,r.jsx)("div",{className:"nav-bar d-flex align-items-center justify-content-around"},(0,r.jsx)(m.Select,{size:"sm",value:p,onChange:this.handleOnViewChange,style:{width:32}},this.getBookmarksOptions(i)),(0,r.jsx)(m.Button,{icon:!0,className:"bookmark-btn",type:"tertiary",onClick:this.handleRuntimeAdd},(0,r.jsx)(T,{className:"mr-1",size:"l"})),(0,r.jsx)(m.NavButtonGroup,{type:"tertiary",circle:!0,vertical:!1,onChange:this.handleArrowChange,className:"nav-btn"},(0,r.jsx)("span",null,M,"/",C)),(0,r.jsx)(m.Button,{icon:!0,className:"bookmark-btn",type:"tertiary",onClick:this.handleAutoPlay,title:u?this.formatMessage("pause"):this.formatMessage("play"),"aria-label":u?this.formatMessage("pause"):this.formatMessage("play"),disabled:!n.autoPlayAllow},u?(0,r.jsx)(pe,{className:"mr-1",size:"l"}):(0,r.jsx)(le,{className:"mr-1",size:"l"})));case a.Custom1:case a.Custom2:const B=this.isEditing(),O=i.map((e=>this.renderCustomContents(e)));return(0,r.jsx)(x.Fragment,null,n.pageStyle===t.Paging?(0,r.jsx)(r.TransitionContainer,{previousIndex:v,currentIndex:k,transitionType:null===(b=null==c?void 0:c.transition)||void 0===b?void 0:b.type,direction:null===(S=null==c?void 0:c.transition)||void 0===S?void 0:S.direction,playId:w},O):this.renderCustomScroll(i),n.pageStyle===t.Scroll&&(0,r.jsx)(Q,{config:n}),n.pageStyle===t.Paging&&this.renderBottomTools(),!B&&n.pageStyle===t.Paging&&s===r.AppMode.Design&&(0,r.jsx)("div",{className:"edit-mask position-absolute w-100"}))}return j})(n.templateType))},this.renderExampleSlideScroll=e=>(0,r.jsx)("div",{className:"gallery-slide-card"},(0,r.jsx)("div",{className:"w-100 h-100 bookmark-pointer surface-1 border-0"},(0,r.jsx)("div",{className:"bookmark-slide-gallery"},(0,r.jsx)("div",{className:"bookmark-slide-title"},e.title),(0,r.jsx)("div",{className:"bookmark-slide-description"},e.description)),(0,r.jsx)("div",{className:"default-img"}))),this.renderBookmarkExample=i=>{var o;const{appMode:s,config:n}=this.props,{jimuMapView:l}=this.state,d=n.direction===e.Horizon,m="3d"!==(null===(o=null==l?void 0:l.view)||void 0===o?void 0:o.type),c=n.templateType===a.Gallery;return(0,r.jsx)("div",{className:"bookmark-container "+(c?d?"gallery-container":"gallery-container-ver":""),ref:this.containerRef},(e=>{let o;switch(e){case a.Card:o=(0,r.jsx)(xe,{config:this.props.config,bookmarkName:i.name});break;case a.List:o=new Array(3).fill(1).map(((e,t)=>(0,r.jsx)("div",{className:"d-flex bookmark-list-col surface-1 bookmark-pointer",key:t},!n.hideIcon&&(0,r.jsx)(ye,{className:"ml-4 bookmark-list-icon"}),(0,r.jsx)("div",{className:"ml-2 bookmark-list-title"},i.name))));break;case a.Slide1:o=(0,r.jsx)(x.Fragment,null,n.pageStyle===t.Paging?(0,r.jsx)(r.TransitionContainer,{previousIndex:1,currentIndex:0,transitionType:n.transition,direction:n.transitionDirection},(0,r.jsx)("div",{className:"w-100 h-100 bookmark-pointer surface-1 border-0"},(0,r.jsx)("div",{className:"bookmark-slide"},(0,r.jsx)("div",{className:"bookmark-slide-title"},i.title),(0,r.jsx)("div",{className:"bookmark-slide-description"},i.description)),(0,r.jsx)("div",{className:"default-img"}))):this.renderExampleSlideScroll(i),n.pageStyle===t.Scroll&&(0,r.jsx)(Q,{config:n}),n.pageStyle===t.Paging&&this.renderBottomTools(!0));break;case a.Slide2:o=(0,r.jsx)(x.Fragment,null,n.pageStyle===t.Paging?(0,r.jsx)(r.TransitionContainer,{previousIndex:1,currentIndex:0,transitionType:n.transition,direction:n.transitionDirection},(0,r.jsx)("div",{className:"w-100 h-100 bookmark-pointer surface-1 border-0"},(0,r.jsx)("div",{className:"w-100",style:{height:"40%"}},(0,r.jsx)("div",{className:"default-img"})),(0,r.jsx)("div",{className:"bookmark-slide2"},(0,r.jsx)("div",{className:"bookmark-slide2-title"},i.title),(0,r.jsx)("div",{className:"bookmark-slide2-description"},i.description)))):this.renderExampleSlideScroll(i),n.pageStyle===t.Scroll&&(0,r.jsx)(Q,{config:n}),n.pageStyle===t.Paging&&this.renderBottomTools(!0));break;case a.Slide3:o=(0,r.jsx)(x.Fragment,null,n.pageStyle===t.Paging?(0,r.jsx)(r.TransitionContainer,{previousIndex:1,currentIndex:0,transitionType:n.transition,direction:n.transitionDirection},(0,r.jsx)("div",{className:"w-100 h-100 bookmark-pointer surface-1 border-0"},(0,r.jsx)("div",{className:"default-img"}),(0,r.jsx)("div",{className:"bookmark-slide"},(0,r.jsx)("div",{className:"bookmark-slide-title"},i.title),(0,r.jsx)("div",{className:"bookmark-slide-description"},i.description)))):this.renderExampleSlideScroll(i),n.pageStyle===t.Scroll&&(0,r.jsx)(Q,{config:n}),n.pageStyle===t.Paging&&this.renderBottomTools(!0));break;case a.Gallery:o=(0,r.jsx)(N,{config:this.props.config,bookmarkName:i.name,isWebMap:m,widgetRect:this.state.widgetRect});break;case a.Custom1:case a.Custom2:const e=this.isEditing(),l=this.renderCustomExample();o=(0,r.jsx)(x.Fragment,null,n.pageStyle===t.Paging?(0,r.jsx)(r.TransitionContainer,{previousIndex:1,currentIndex:0,transitionType:n.transition,direction:n.transitionDirection},l):(0,r.jsx)("div",{className:"gallery-slide-card"},l),n.pageStyle===t.Scroll&&(0,r.jsx)(Q,{config:n}),n.pageStyle===t.Paging&&this.renderBottomTools(!0),!e&&n.pageStyle===t.Paging&&s===r.AppMode.Design&&(0,r.jsx)("div",{className:"edit-mask position-absolute w-100 h-100"}))}return o})(n.templateType))},this.onRuntimeBookmarkNameChange=(e,t)=>{this.setState((i=>{const a=Object.assign(Object.assign({},i.runtimeBmItemsInfo[e]),{name:t}),o=Object.assign(Object.assign({},i.runtimeBmItemsInfo),{[e]:a});return this.isUseCache&&r.utils.setLocalStorage(e,JSON.stringify(a)),{runtimeBmItemsInfo:o}}))},this.handleRuntimeTitleChange=(e,t)=>{const i=t.target.value;this.setState((t=>{const a=Object.assign(Object.assign({},t.runtimeBmItemsInfo[e]),{name:i});return{runtimeBmItemsInfo:Object.assign(Object.assign({},t.runtimeBmItemsInfo),{[e]:a})}}))},this.handleKeydown=(e,t)=>{"Enter"===e.key&&t.current.blur()},this.handleRuntimeDelete=(e,t)=>{e.stopPropagation();const i=this.state.runtimeBmArray.filter((e=>e!==t));if(this.isUseCache){const e=g(this.props.id,this.props.mapWidgetId);r.utils.setLocalStorage(e,JSON.stringify(i)),r.utils.removeFromLocalStorage(t),this.runtimeSnapCache.delete(t)}const a=this.state.runtimeSnaps,{rmbId:o}=a,s=Se(a,["rmbId"]),n=this.state.runtimeBmItemsInfo,{rmbId:l}=n,d=Se(n,["rmbId"]);this.setState({runtimeBmArray:i,runtimeSnaps:s,runtimeBmItemsInfo:d})},this.isUseCache=!window.jimuConfig.isInBuilder;const d=(0,r.getAppStore)().getState(),c=this.isUseCache?h(this.props.id,this.props.mapWidgetId):[],u=this.isUseCache?(e=>{const t={};return e.forEach((e=>{const i=r.utils.readLocalStorage(e);t[e]=JSON.parse(i)})),t})(c):{},y={jimuMapView:void 0,widgetRect:{width:516,height:210},apiLoaded:!1,viewGroup:void 0,bookmarkOnViewId:1,autoPlayStart:!1,runtimeBmArray:c,runtimeBmItemsInfo:u,runtimeSnaps:{},playTimer:void 0,isSetLayout:!1,isSuspendMode:!1,highLightIndex:-1,runtimeHighLightIndex:-1,showInView:!0};let k=0;if(c.length>0){const e=c[c.length-1],{title:t}=JSON.parse(r.utils.readLocalStorage(e)),i=t.lastIndexOf("-");k=parseInt(t.substring(i+1))}this.state=y,this.graphicsLayerCreated={},this.graphicsPainted={},this.graphicsLayerId={},this.runtimeReference=void 0,this.containerRef=r.React.createRef(),this.rtBookmarkId=k,this.alreadyActiveLoading=!1,this.mapOpacity=1,this.isRTL=null===(l=null==d?void 0:d.appContext)||void 0===l?void 0:l.isRTL,this.runtimeSnapCache=new r.indexedDBUtils.IndexedDBCache(n.id,"bookmark","runtime-snap"),this.intersectionObserver=null,this.onResize=this.onResize.bind(this),this.debounceOnResize=r.lodash.debounce((({width:e,height:t})=>{this.onResize(e,t)}),100)}getLayoutEntry(){return window.jimuConfig.isInBuilder&&this.props.appMode===r.AppMode.Design?this.props.builderSupportModules.LayoutEntry:w.LayoutEntry}initRuntimeSnaps(){return we(this,void 0,void 0,(function*(){this.runtimeSnapCache.initialized()||(yield this.runtimeSnapCache.init());const e=yield this.runtimeSnapCache.getAllKeys(),t=yield this.runtimeSnapCache.getAll(),i={};e.forEach(((e,a)=>{i[e]=t[a]})),this.setState({runtimeSnaps:i})}))}static getDerivedStateFromProps(e,t){if(!e||0===Object.keys(e).length||!t||0===Object.keys(t).length)return null;const{autoPlayStart:i,playTimer:a}=t;return e.autoplayActiveId!==e.id?(i&&a&&clearInterval(a),{autoPlayStart:!1,playTimer:void 0}):null}componentDidMount(){this.state.apiLoaded||(0,b.loadArcGISJSAPIModules)(["esri/Graphic","esri/layers/GraphicsLayer","esri/Viewpoint","esri/Basemap"]).then((e=>{[this.Graphic,this.GraphicsLayer,this.Viewpoint,this.Basemap]=e,this.setState({apiLoaded:!0})})),this.isUseCache&&this.initRuntimeSnaps()}componentDidUpdate(e){var t,i,a,o,s,n;const{config:l,appMode:d,id:m,autoplayActiveId:c,isPrintPreview:p}=this.props,{autoPlayStart:u,playTimer:g,jimuMapView:h,isSuspendMode:y,showInView:k}=this.state,f=(null===(i=null===(t=this.props)||void 0===t?void 0:t.stateProps)||void 0===i?void 0:i.activeBookmarkId)||0;if(c&&h&&m!==c){const e=this.graphicsLayerId[h.id];if(!e)return;const t=h.view.map.findLayerById(e);t&&t.removeAll(),this.graphicsPainted[h.id]={}}if(e.appMode===r.AppMode.Design&&d===r.AppMode.Run&&h&&l.initBookmark){const e=this.getMapBookmarks(h)||[],t=v(l,e);t.length>0&&k&&h.view.when((()=>{this.setState({bookmarkOnViewId:t[0].id}),this.onViewBookmark(t[0])}))}if(this.autoOffCondition(e)&&u)return g&&clearInterval(g),void this.setState({autoPlayStart:!1,playTimer:void 0});e.isPrintPreview!==p&&(u?(this.setState({isSuspendMode:!0}),this.handleAutoPlay()):y&&!u&&(this.setState({isSuspendMode:!1}),this.handleAutoPlay()));if(((null===(o=null===(a=this.props)||void 0===a?void 0:a.stateProps)||void 0===o?void 0:o.settingChangeBookmark)||!1)&&f){const e=l.bookmarks.findIndex((e=>e.id===f))>-1?l.bookmarks.findIndex((e=>e.id===f)):0;this.setState({bookmarkOnViewId:f}),this.props.dispatch(r.appActions.widgetStatePropChange(m,"settingChangeBookmark",!1)),d!==r.AppMode.Run&&d!==r.AppMode.Express||this.onViewBookmark(l.bookmarks[e],!1,e)}if((null===(n=null===(s=this.props)||void 0===s?void 0:s.stateProps)||void 0===n?void 0:n.lastFlag)||!1){this.props.dispatch(r.appActions.widgetStatePropChange(m,"lastFlag",!1));const e=h.view.map.findLayerById(this.graphicsLayerId[h.id]);e&&e.removeAll()}this.settingLayout()}componentWillUnmount(){var e,t;const{jimuMapView:i}=this.state;if(!(0,r.getAppStore)().getState().appConfig.widgets[this.props.id]&&i){const a=null===(t=null===(e=null==i?void 0:i.view)||void 0===e?void 0:e.map)||void 0===t?void 0:t.findLayerById(this.graphicsLayerId[i.id]);a&&a.removeAll()}this.intersectionObserver&&this.intersectionObserver.disconnect()}rootRefCallback(e){if(!e)return;this.intersectionObserver&&this.intersectionObserver.disconnect();this.intersectionObserver=new IntersectionObserver((e=>{var t;const i=(null===(t=e[0])||void 0===t?void 0:t.intersectionRatio)>.5;i&&(this.alreadyActiveLoading=!1),this.setState({showInView:i})}),{threshold:[0,.5,1]}),this.intersectionObserver.observe(e)}render(){var e;const{config:t,id:i,useMapWidgetIds:o,theme:s,isPrintPreview:n,appMode:l}=this.props,{jimuMapView:d,apiLoaded:m,showInView:c}=this.state,{runtimeAddAllow:p}=t,u=(0,r.classNames)("jimu-widget","widget-bookmark","bookmark-widget-"+i,"useMapWidgetId-"+(null==o?void 0:o[0])),g=this.getMapBookmarks(d)||[],h=v(t,g).length,y=this.state.runtimeBmArray.length,k={id:99999,name:this.formatMessage("_widgetLabel"),title:this.formatMessage("_widgetLabel"),description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",type:"2d",mapDataSourceId:"dataSource_eg"},f="3d"!==(null===(e=null==d?void 0:d.view)||void 0===e?void 0:e.type);return(0,r.jsx)(w.ViewVisibilityContext.Consumer,null,(({isInView:e,isInCurrentView:d})=>{var g;let v=!0;v=!e||d,v||(this.alreadyActiveLoading=!1);const w=this.state.widgetRect;return(0,r.jsx)(x.Fragment,null,v&&(0,r.jsx)("div",{ref:this.rootRefCallback.bind(this),className:u,css:ve({theme:s,config:t,id:i,appMode:l,widgetRect:w,configBookmarkNum:h,runtimeBookmarkNum:null===(g=this.state.runtimeBmArray)||void 0===g?void 0:g.length,isWebMap:f})},(0,r.jsx)(x.Fragment,null,(n||c)&&m&&(0,r.jsx)(b.JimuMapViewComponent,{useMapWidgetId:null==o?void 0:o[0],onActiveViewChange:this.onActiveViewChange,onViewGroupCreate:this.handleViewGroupCreate}),(p||0!==y||0!==h)&&(null==o?void 0:o[0])?(0,r.jsx)(x.Fragment,null,(0,r.jsx)("div",{className:"h-100 d-flex flex-wrap bookmark-view-auto"},this.renderBookmarkList(t.bookmarks))):(0,r.jsx)(x.Fragment,null,(0,r.jsx)("div",{className:"h-100 d-flex flex-wrap bookmark-view-auto"},this.renderBookmarkExample(k))),(t.templateType===a.Card||t.templateType===a.Gallery)&&(0,r.jsx)(r.ReactResizeDetector,{targetRef:this.resizeConRef,handleWidth:!0,handleHeight:!0,onResize:this.debounceOnResize}),(0,r.jsx)("div",{css:r.css`
                      position: absolute;
                      left: 0;
                      right: 0;
                      top: 0;
                      bottom: 0;
                      background: transparent;
                      pointer-events: none;
                    `,ref:this.resizeConRef}))))}))}}je.mapExtraStateProps=(e,t)=>{var i,a,o,s,n;const l=null==e?void 0:e.appConfig,{layouts:d,layoutId:m,layoutItemId:c,builderSupportModules:p,id:u,useMapWidgetIds:g}=t,h=null===(i=null==e?void 0:e.appRuntimeInfo)||void 0===i?void 0:i.selection,y=h&&p&&p.widgetModules&&p.widgetModules.selectionInBookmark(h,u,l,!1),k=null==e?void 0:e.mapWidgetsInfo,v=g&&0!==g.length?g[0]:void 0,f=(null==e?void 0:e.browserSizeMode)||r.BrowserSizeMode.Large;return{appMode:null===(a=null==e?void 0:e.appRuntimeInfo)||void 0===a?void 0:a.appMode,appConfig:l,layouts:d,selectionIsSelf:h&&h.layoutId===m&&h.layoutItemId===c,selectionIsInSelf:y,autoplayActiveId:v?null===(o=k[v])||void 0===o?void 0:o.autoControlWidgetId:void 0,mapWidgetId:v,browserSizeMode:f,isPrintPreview:null!==(n=null===(s=null==e?void 0:e.appRuntimeInfo)||void 0===s?void 0:s.isPrintPreview)&&void 0!==n&&n}},je.getFullConfig=o=>(0,r.Immutable)({templateType:a.Card,isTemplateConfirm:!1,style:(0,r.Immutable)({id:"default"}),isInitialed:!1,bookmarks:[],initBookmark:!1,runtimeAddAllow:!1,ignoreLayerVisibility:!1,autoPlayAllow:!1,autoInterval:3,autoLoopAllow:!0,direction:e.Horizon,pageStyle:t.Paging,space:10,scrollBarOpen:!0,navigatorOpen:!1,transition:r.TransitionType.None,transitionDirection:r.TransitionDirection.Horizontal,displayType:i.Selected,itemHeight:240,itemWidth:240,transitionInfo:{transition:{type:r.TransitionType.None,direction:r.TransitionDirection.Horizontal},effect:{type:r.AnimationType.None,option:{direction:r.AnimationDirection.Top,configType:r.AnimationEffectType.Default}},oneByOneEffect:null,previewId:null},cardBackground:"",displayName:!0,hideIcon:!1,cardItemHeight:157.5,keepAspectRatio:!1,itemSizeType:n.Custom,cardNameStyle:{fontFamily:m.FontFamilyValue.AVENIRNEXT,fontStyles:{style:"normal",weight:"normal",strike:"none",underline:"none"},fontColor:"var(--ref-palette-black)",fontSize:"13"},slidesNameStyle:{fontFamily:m.FontFamilyValue.AVENIRNEXT,fontStyles:{style:"normal",weight:"bold",strike:"none",underline:"none"},fontColor:"var(--ref-palette-black)",fontSize:"16"},slidesDescriptionStyle:{fontFamily:m.FontFamilyValue.AVENIRNEXT,fontStyles:{style:"normal",weight:"normal",strike:"none",underline:"none"},fontColor:"var(--ref-palette-black)",fontSize:"13"}}).merge(o,{deep:!0}),je.versionManager=ee;const Ne=je;function Ie(e){l.p=e}})(),d})())}}}));