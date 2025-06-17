System.register(["jimu-core","jimu-theme","jimu-ui","jimu-for-builder"],(function(e,t){var s={},i={},o={},n={};return{setters:[function(e){s.ReactRedux=e.ReactRedux,s.classNames=e.classNames,s.css=e.css,s.hooks=e.hooks,s.jsx=e.jsx,s.polished=e.polished},function(e){i.ThemeSwitchComponent=e.ThemeSwitchComponent,i.useTheme=e.useTheme,i.useTheme2=e.useTheme2,i.useUseTheme2=e.useUseTheme2},function(e){o.Link=e.Link,o.defaultMessages=e.defaultMessages},function(e){n.getAppConfigAction=e.getAppConfigAction}],execute:function(){e((()=>{var e={79244:e=>{"use strict";e.exports=s},4108:e=>{"use strict";e.exports=n},1888:e=>{"use strict";e.exports=i},14321:e=>{"use strict";e.exports=o}},t={};function u(s){var i=t[s];if(void 0!==i)return i.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,u),o.exports}u.d=(e,t)=>{for(var s in t)u.o(t,s)&&!u.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},u.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.p="";var r={};return u.p=window.jimuConfig.baseUrl,(()=>{"use strict";u.r(r),u.d(r,{default:()=>l});var e=u(79244),t=u(1888),s=u(14321),i=u(4108);const o=["default","primary","secondary","tertiary","danger","link"],n=(t,s)=>e.css`
    width: 360px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: ${t.sys.spacing[3]};
    padding: ${t.sys.spacing[5]};
    .button-item{
      width: 100%;
      font-size: ${e.polished.rem(13)};
    }
    .quick-style-item{
      padding: ${t.sys.spacing[2]};
      margin: 2px;
      &.quick-style-item-selected{
        outline: 2px solid ${s.sys.color.primary.light};
      }
      background-color: ${t.sys.color.surface.background};
        cursor: pointer;
    }
  `,l={QuickStyle:u=>{var r,l,a;const{widgetId:c}=u,d=e.ReactRedux.useSelector((e=>{var t;return null===(t=(e.appStateInBuilder?e.appStateInBuilder:e).appConfig.widgets[c])||void 0===t?void 0:t.config})),m=!(null===(r=null==d?void 0:d.styleConfig)||void 0===r?void 0:r.useCustom)&&(null===(a=null===(l=null==d?void 0:d.styleConfig)||void 0===l?void 0:l.themeStyle)||void 0===a?void 0:a.quickStyleType)||"default",p=(0,t.useTheme)(),g=(0,t.useTheme2)(),f=(0,t.useUseTheme2)(),y=window.jimuConfig.isBuilder!==f?g:p,h=window.jimuConfig.isBuilder!==f?p:g,v=e.hooks.useTranslation(s.defaultMessages);return(0,e.jsx)("div",{css:n(y,h)},(0,e.jsx)(t.ThemeSwitchComponent,{useTheme2:window.jimuConfig.isBuilder},o.map(((t,o)=>(0,e.jsx)("div",{key:o,className:(0,e.classNames)("quick-style-item",{"quick-style-item-selected":m===t}),onClick:()=>{(e=>{let t=d.setIn(["styleConfig","useCustom"],!1);t=t.setIn(["styleConfig","themeStyle","quickStyleType"],e),t=t.set("styleConfig",t.styleConfig.without("customStyle")),(0,i.getAppConfigAction)().editWidgetConfig(c,t).exec()})(t)}},(0,e.jsx)(s.Link,{title:v("variableButton"),role:"button",className:"button-item text-truncate",type:t},v("variableButton")))))))}}})(),r})())}}}));