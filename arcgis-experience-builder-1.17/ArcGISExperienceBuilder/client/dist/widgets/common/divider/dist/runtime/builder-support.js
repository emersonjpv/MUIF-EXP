System.register(["jimu-core","jimu-ui","jimu-theme","jimu-for-builder"],(function(t,e){var o={},i={},n={},r={};return{setters:[function(t){o.Immutable=t.Immutable,o.React=t.React,o.ReactRedux=t.ReactRedux,o.classNames=t.classNames,o.css=t.css,o.hooks=t.hooks,o.i18n=t.i18n,o.injectIntl=t.injectIntl,o.jsx=t.jsx,o.polished=t.polished},function(t){i.Button=t.Button},function(t){n.ThemeSwitchComponent=t.ThemeSwitchComponent,n.useTheme=t.useTheme,n.useTheme2=t.useTheme2,n.useUseTheme2=t.useUseTheme2},function(t){r.appBuilderSync=t.appBuilderSync,r.getAppConfigAction=t.getAppConfigAction}],execute:function(){t((()=>{var t={79244:t=>{"use strict";t.exports=o},4108:t=>{"use strict";t.exports=r},1888:t=>{"use strict";t.exports=n},14321:t=>{"use strict";t.exports=i}},e={};function l(o){var i=e[o];if(void 0!==i)return i.exports;var n=e[o]={exports:{}};return t[o](n,n.exports,l),n.exports}l.d=(t,e)=>{for(var o in e)l.o(e,o)&&!l.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},l.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),l.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.p="";var s={};return l.p=window.jimuConfig.baseUrl,(()=>{"use strict";l.r(s),l.d(s,{default:()=>m});var t,e,o,i,n,r=l(79244);!function(t){t.Regular="REGULAR",t.Hover="HOVER"}(t||(t={})),function(t){t.Horizontal="Horizontal",t.Vertical="Vertical"}(e||(e={})),function(t){t.Style0="Style0",t.Style1="Style1",t.Style2="Style2",t.Style3="Style3",t.Style4="Style4",t.Style5="Style5",t.Style6="Style6",t.Style7="Style7",t.Style8="Style8",t.Style9="Style9",t.Style10="Style10"}(o||(o={})),function(t){t.None="None",t.Point0="Point0",t.Point1="Point1",t.Point2="Point2",t.Point3="Point3",t.Point4="Point4",t.Point5="Point5",t.Point6="Point6",t.Point7="Point7",t.Point8="Point8"}(i||(i={})),function(t){t.None="None",t.Default="Default",t.Style1="Style1",t.Style2="Style2",t.Style3="Style3",t.Style4="Style4",t.Style5="Style5",t.Style6="Style6",t.Style7="Style7",t.Style8="Style8",t.Style9="Style9",t.Style10="Style10",t.Style11="Style11",t.Style12="Style12",t.Style13="Style13",t.Style14="Style14",t.Style15="Style15",t.Style16="Style16",t.Style17="Style17",t.Style18="Style18",t.Style19="Style19"}(n||(n={}));var p=l(14321),a=l(1888);const y={_widgetLabel:"Divider",quickStyleItem:"Quick style {index}"};function S(t,e=1.5,o=null){if(!t)return"0px";const i=o?Number(o.split("px")[0]):0;let n=Number(t.split("px")[0]);return n=i>n?i:n,n*e<1?"1px":`${Math.round(n*e)}px`}const d=t=>{const{direction:o}=t,{size:i,color:n,type:l}=t.strokeStyle;return function(t,o,i=e.Horizontal,n=!1){const l=i===e.Horizontal,s={},p={};return o=o||"transparent",s.Style0=r.css`
    & {
      border-bottom: ${t} solid ${o};
    }
  `,s.Style1=r.css`
    & {
      border-bottom: ${t} dashed ${o};
    }
  `,s.Style2=r.css`
    & {
      border-bottom: ${t} dotted ${o};
    }
  `,s.Style3=r.css`
    & {
      height: ${t};
      position: relative;
    }
    &:before {
      position: absolute;
      content: '';
      height: ${t};
      left: ${S(t,4)};
      right: 0;
      background-image: repeating-linear-gradient(
        to right,
        ${o} 0,
        ${o} ${S(t,1)},
        transparent 0,
        transparent ${S(t,6)}
      );
    }
    &:after {
      position: absolute;
      content: '';
      height: ${t};
      left: 0;
      right: 0;
      background-image: repeating-linear-gradient(
        to right,
        ${o} 0,
        ${o} ${S(t,3)},
        transparent 0,
        transparent ${S(t,6)}
      );
    }
  `,s.Style6=r.css`
    & {
      height: ${t};
      background-image: repeating-linear-gradient(
        to right,
        ${o} 0,
        ${o} ${S(t,4)},
        transparent 0,
        transparent ${S(t,6)}
      );
    }
  `,s.Style7=r.css`
    & {
      border-color: ${o};
      border-bottom-style: double;
      border-bottom-width: ${n?"4px":t};
    }
  `,s.Style8=r.css`
    & {
      height: ${t};
      min-height: ${n?"6px":"unset"};
      position: relative;
    }
    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      height: ${S(t,.2,"4px")};
      background: ${o};
    }
    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: ${S(t,.4,"4px")};
      background: ${o};
    }
  `,s.Style9=r.css`
    & {
      height: ${t};
      min-height: ${n?"6px":"unset"};
      position: relative;
    }
    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      height: ${S(t,.4,"4px")};
      background: ${o};
    }
    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: ${S(t,.2,"4px")};
      background: ${o};
    }
  `,s.Style10=r.css`
    & {
      height: ${t};
      min-height: ${n?"8px":"unset"};
      position: relative;
      background-clip: content-box;
      border-top: ${S(t,.167)} solid ${o};
      border-bottom: ${S(t,.167)} solid ${o};
    }
    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      height: ${n?"2px":S(t,.3)};
      background: ${o};
      transform: translateY(-50%);
    }
  `,p.Style0=r.css`
    & {
      border-left: ${t} solid ${o};
    }
  `,p.Style1=r.css`
    & {
      border-left: ${t} dashed ${o};
    }
  `,p.Style2=r.css`
    & {
      border-left: ${t} dotted ${o};
    }
  `,p.Style3=r.css`
    & {
      width: ${t};
      position: relative;
    }
    &:before {
      position: absolute;
      content: '';
      width: ${t};
      top: ${S(t,3.8)};
      bottom: 0;
      background-image: repeating-linear-gradient(
        to bottom,
        ${o} 0,
        ${o} ${S(t,1)},
        transparent 0,
        transparent ${S(t,6)}
      );
    }
    &:after {
      position: absolute;
      content: '';
      width: ${t};
      top: 0;
      bottom: 0;
      background-image: repeating-linear-gradient(
        to bottom,
        ${o} 0,
        ${o} ${S(t,2.5)},
        transparent 0,
        transparent ${S(t,6)}
      );
    }
  `,p.Style6=r.css`
    & {
      width: ${t};
      background-image: repeating-linear-gradient(
        to bottom,
        ${o} 0,
        ${o} ${S(t,4)},
        transparent 0,
        transparent ${S(t,6)}
      );
    }
  `,p.Style7=r.css`
    & {
      border-left: ${t} double ${o};
    }
  `,p.Style8=r.css`
    & {
      width: ${t};
      position: relative;
    }
    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: ${S(t,.2,"4px")};
      background: ${o};
    }
    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: ${S(t,.4,"4px")};
      background: ${o};
    }
  `,p.Style9=r.css`
    & {
      width: ${t};
      position: relative;
    }
    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: ${S(t,.4,"4px")};
      background: ${o};
    }
    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: ${S(t,.2,"4px")};
      background: ${o};
    }
  `,p.Style10=r.css`
    & {
      width: ${t};
      position: relative;
      background-clip: content-box;
      border-left: ${S(t,.167)} solid ${o};
      border-right: ${S(t,.167)} solid ${o};
    }
    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      width: ${n?"2px":S(t,.3)};
      background: ${o};
      transform: translateX(-50%);
    }
  `,l?s:p}(i,n,o)[l]},c=t=>{const{direction:o,pointEnd:n,pointStart:l,strokeStyle:s}=t,p=o===e.Horizontal,a=l.pointStyle,y=l.pointSize*$(null==s?void 0:s.size),S=n.pointStyle,d=n.pointSize*$(null==s?void 0:s.size);return function(t,e,o,i,n){const l=e?i/2+"px":0,s=e?i/2.5+"px":0,p=o?n/2+"px":0,a=o?n/2.5+"px":0,y=r.css`
    left: ${l};
    right: ${p};
    top: 50%;
    transform: translateY(-50%);
    &.point-start-Point1,
    &.point-start-Point2,
    &.point-start-Point5 {
      left: 0;
    }
    &.point-end-Point1,
    &.point-end-Point2,
    &.point-end-Point5 {
      right: 0;
    }
    &.point-start-Point7 {
      left: ${s};
    }
    &.point-end-Point7 {
      right: ${a};
    }
  `,S=r.css`
    top: ${l};
    bottom: ${p};
    left: 50%;
    transform: translateX(-50%);
    &.point-start-Point1,
    &.point-start-Point2,
    &.point-start-Point5 {
      top: 0;
    }
    &.point-end-Point1,
    &.point-end-Point2,
    &.point-end-Point5 {
      bottom: 0;
    }
  `;return t?y:S}(p,a!==i.None,S!==i.None,y,d)},u=(t,o=!0)=>{const{pointEnd:i,pointStart:n,strokeStyle:l,direction:s}=t,p=Number($(l.size)),a=(o?n.pointSize*p:i.pointSize*p)+"px",y=null==l?void 0:l.color,d=o?n.pointStyle:i.pointStyle,c=function(t,o,i=e.Horizontal,n=!0){const l=S(t,1),s=S(t,.5),p=S(t,.1),a=S(t,.3);o=o||"transparent";const y=i===e.Horizontal;let d={None:"None"},c={None:"None"};d.Point0=r.css`
    & {
      width: ${l};
      height: ${l};
      border-radius: 50%;
      background-color: ${o};
      left: ${n?0:"unset"};
      right: ${n?"unset":0};
      top: 50%;
      transform: translateY(-50%);
    }
  `,d.Point1=r.css`
    & {
      width: ${a};
      height: ${l};
      background-color: ${o};
      left: ${n?"4%":"unset"};
      right: ${n?"unset":"4%"};
      top: 50%;
      transform: translateY(-50%);
    }
  `,d.Point2=r.css`
    & {
      width: ${a};
      height: ${l};
      background-color: ${o};
      left: ${n?0:"unset"};
      right: ${n?"unset":0};
      top: 50%;
      transform: translateY(-50%);
    }
  `,d.Point3=r.css`
    & {
      width: ${l};
      height: ${l};
      background-color: ${o};
      left: ${n?0:"unset"};
      right: ${n?"unset":0};
      top: 50%;
      transform: translateY(-50%);
    }
  `,d.Point4=r.css`
    & {
      width: ${S(t,.71)};
      height: ${S(t,.71)};
      background-color: ${o};
      left: ${n?S(t,.2):"unset"};
      right: ${n?"unset":S(t,.2)};
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
    }
  `;const u=r.css`
    .jimu-rtl & {
      border-color: transparent ${o} transparent transparent;
    }
    & {
      width: 0;
      height: 0;
      border-width: ${s};
      border-style: solid;
      border-color: transparent transparent transparent ${o};
      left: ${n?0:"unset"};
      right: ${n?"unset":`-${S(t,.5)}`};
      top: 50%;
      transform: translateY(-50%);
    }
  `,$=r.css`
    .jimu-rtl & {
      border-color: transparent transparent transparent ${o};
    }
    & {
      width: 0;
      height: 0;
      border-width: ${s};
      border-style: solid;
      border-color: transparent ${o} transparent transparent;
      left: ${n?`-${S(t,.5)}`:"unset"};
      right: ${n?"unset":0};
      top: 50%;
      transform: translateY(-50%);
    }
  `,h=r.css`
    .jimu-rtl & {
      border-top: ${a} solid ${o};
      border-left: ${a} solid ${o};
    }
    .jimu-ltr & {
      border-bottom: ${a} solid ${o};
      border-left: ${a} solid ${o};
    }
    & {
      width: ${S(t,.8)};
      height: ${S(t,.8)};
      left: ${n?S(t,.2):"unset"};
      right: ${n?"unset":`-${S(t,.2)}`};
      top: 50%;
      border-radius: ${p};
      transform: translateY(-50%) rotate(45deg);
    }
  `,b=r.css`
    .jimu-rtl & {
      border-right: ${a} solid ${o};
      border-bottom: ${a} solid ${o};
    }
    .jimu-ltr & {
      border-top: ${a} solid ${o};
      border-right: ${a} solid ${o};
    }
    & {
      width: ${S(t,.8)};
      height: ${S(t,.8)};
      left: ${n?`-${S(t,.2)}`:"unset"};
      right: ${n?"unset":S(t,.2)};
      top: 50%;
      border-radius: ${p};
      transform: translateY(-50%) rotate(45deg);
    }
  `;c.Point0=r.css`
    & {
      width: ${l};
      height: ${l};
      border-radius: 50%;
      background-color: ${o};
      top: ${n?0:"unset"};
      bottom: ${n?"unset":0};
      left: 50%;
      transform: translateX(-50%);
    }
  `,c.Point1=r.css`
    & {
      width: ${l};
      height: ${a};
      background-color: ${o};
      top: ${n?"4%":"unset"};
      bottom: ${n?"unset":"4%"};
      left: 50%;
      transform: translateX(-50%);
    }
  `,c.Point2=r.css`
    & {
      width: ${l};
      height: ${a};
      background-color: ${o};
      top: ${n?0:"unset"};
      bottom: ${n?"unset":0};
      left: 50%;
      transform: translateX(-50%);
    }
  `,c.Point3=r.css`
    & {
      width: ${l};
      height: ${l};
      background-color: ${o};
      top: ${n?0:"unset"};
      bottom: ${n?"unset":0};
      left: 50%;
      transform: translateX(-50%);
    }
  `,c.Point4=r.css`
    & {
      width: ${S(t,.71)};
      height: ${S(t,.71)};
      background-color: ${o};
      top: ${n?S(t,.2):"unset"};
      bottom: ${n?"unset":S(t,.2)};
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
    }
  `;const m=r.css`
    & {
      width: 0;
      height: 0;
      border-width: ${s};
      border-style: solid;
      border-color: transparent transparent ${o} transparent;
      top: ${n?`-${S(t,.5)}`:"unset"};
      bottom: ${n?"unset":0};
      left: 50%;
      transform: translateX(-50%);
    }
  `,g=r.css`
    & {
      width: 0;
      height: 0;
      border-width: ${s};
      border-style: solid;
      border-color: ${o} transparent transparent transparent;
      top: ${n?0:"unset"};
      bottom: ${n?"unset":`-${S(t,.5)}`};
      left: 50%;
      transform: translateX(-50%);
    }
  `,f=r.css`
    .jimu-rtl & {
      border-bottom: ${a} solid ${o};
      border-left: ${a} solid ${o};
    }
    .jimu-ltr & {
      border-bottom: ${a} solid ${o};
      border-right: ${a} solid ${o};
    }
    & {
      width: ${S(t,.8)};
      height: ${S(t,.8)};
      top: ${n?`-${S(t,.2)}`:"unset"};
      bottom: ${n?"unset":S(t,.2)};
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      border-radius: ${p};
    }
  `,k=r.css`
    .jimu-rtl & {
      border-top: ${a} solid ${o};
      border-right: ${a} solid ${o};
    }
    .jimu-ltr & {
      border-top: ${a} solid ${o};
      border-left: ${a} solid ${o};
    }
    & {
      width: ${S(t,.8)};
      height: ${S(t,.8)};
      top: ${n?S(t,.2):"unset"};
      bottom: ${n?"unset":`-${S(t,.2)}`};
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      border-radius: ${p};
    }
  `;let P,z;return n?(P={Point5:u,Point6:$,Point7:h,Point8:b},z={Point5:g,Point6:m,Point7:k,Point8:f}):(P={Point5:$,Point6:u,Point7:b,Point8:h},z={Point5:m,Point6:g,Point7:f,Point8:k}),d=Object.assign(Object.assign({},d),P),c=Object.assign(Object.assign({},c),z),y?d:c}(a,y,s,o);return c[d]},$=t=>{const e=t.split("px")[0];return Number(e)};var h=l(4108);const b=(0,r.injectIntl)((t=>{const{widgetId:l}=t,s=r.ReactRedux.useSelector((t=>{var e,o,i;const n=(null===(e=null==t?void 0:t.appStateInBuilder)||void 0===e?void 0:e.appConfig)||t.appConfig;return null===(i=null===(o=null==n?void 0:n.widgets)||void 0===o?void 0:o[l])||void 0===i?void 0:i.config})),S=r.i18n.getIntl(l,"runtime"),$=r.React.useCallback(((t,e)=>S.formatMessage({id:t,defaultMessage:y[t]},e)),[S]),b=(0,a.useTheme)(),m=(0,a.useTheme2)(),g=(0,a.useUseTheme2)(),f=window.jimuConfig.isBuilder!==g?m:b,k=window.jimuConfig.isBuilder!==g?b:m,P=r.hooks.useEventCallback((t=>{t.direction=s.direction||e.Horizontal,(0,h.getAppConfigAction)().editWidgetConfig(l,(0,r.Immutable)(t)).exec()}));return(0,r.jsx)("div",null,(0,r.jsx)("div",{css:r.css`
      width: ${r.polished.rem(360)};
      padding: 16px 12px 8px 12px;
      z-index: 1001 !important;
      button {
        border-radius: 0;
      }
      .quick-style-item-container {
        padding-left: 4px;
        padding-right: 4px;
        padding-bottom: 8px;
      }
      .quick-style-item {
        border: 2px solid transparent;
        &.quick-style-item-selected {
          border: 2px solid ${k.sys.color.primary.light};
        }
        .quick-style-item-inner {
          background-color: ${f.ref.palette.neutral[300]};
          cursor: pointer;
        }
      }
    `},(0,r.jsx)("div",{className:"row no-gutters"},(0,r.jsx)(a.ThemeSwitchComponent,{useTheme2:!1},(()=>{var t;const l=null===(t=null==s?void 0:s.themeStyle)||void 0===t?void 0:t.quickStyleType,a=[],y=function(t){const r="3px",l="6px",s=e.Horizontal;return{Default:{direction:s,strokeStyle:{type:o.Style0,color:t.ref.palette.neutral[1200],size:r},pointStart:{pointStyle:i.None,pointSize:4},pointEnd:{pointStyle:i.None,pointSize:4},themeStyle:{quickStyleType:n.Default}},Style1:{direction:s,strokeStyle:{type:o.Style2,color:t.sys.color.error.dark,size:r},pointStart:{pointStyle:i.None,pointSize:4},pointEnd:{pointStyle:i.None,pointSize:4},themeStyle:{quickStyleType:n.Style1}},Style2:{direction:s,strokeStyle:{type:o.Style3,color:t.sys.color.warning.dark,size:r},pointStart:{pointStyle:i.None,pointSize:4},pointEnd:{pointStyle:i.None,pointSize:4},themeStyle:{quickStyleType:n.Style2}},Style3:{direction:s,strokeStyle:{type:o.Style6,color:t.ref.palette.neutral[1100],size:r},pointStart:{pointStyle:i.None,pointSize:4},pointEnd:{pointStyle:i.None,pointSize:4},themeStyle:{quickStyleType:n.Style3}},Style4:{direction:s,strokeStyle:{type:o.Style1,color:t.ref.palette.neutral[1100],size:r},pointStart:{pointStyle:i.None,pointSize:4},pointEnd:{pointStyle:i.None,pointSize:4},themeStyle:{quickStyleType:n.Style4}},Style5:{direction:s,strokeStyle:{type:o.Style7,color:t.sys.color.info.main,size:l},pointStart:{pointStyle:i.None,pointSize:4},pointEnd:{pointStyle:i.None,pointSize:4},themeStyle:{quickStyleType:n.Style5}},Style6:{direction:s,strokeStyle:{type:o.Style8,color:t.sys.color.success.dark,size:l},pointStart:{pointStyle:i.None,pointSize:4},pointEnd:{pointStyle:i.None,pointSize:4},themeStyle:{quickStyleType:n.Style6}},Style7:{direction:s,strokeStyle:{type:o.Style9,color:t.ref.palette.neutral[1100],size:l},pointStart:{pointStyle:i.None,pointSize:4},pointEnd:{pointStyle:i.None,pointSize:4},themeStyle:{quickStyleType:n.Style7}},Style18:{direction:s,strokeStyle:{type:o.Style0,color:t.ref.palette.neutral[1100],size:r},pointStart:{pointStyle:i.None,pointSize:4},pointEnd:{pointStyle:i.Point7,pointSize:4},themeStyle:{quickStyleType:n.Style18}},Style19:{direction:s,strokeStyle:{type:o.Style0,color:t.sys.color.info.main,size:r},pointStart:{pointStyle:i.Point0,pointSize:2},pointEnd:{pointStyle:i.Point6,pointSize:4},themeStyle:{quickStyleType:n.Style19}},Style8:{direction:s,strokeStyle:{type:o.Style0,color:t.ref.palette.neutral[1100],size:r},pointStart:{pointStyle:i.Point3,pointSize:4},pointEnd:{pointStyle:i.Point3,pointSize:4},themeStyle:{quickStyleType:n.Style8}},Style9:{direction:s,strokeStyle:{type:o.Style0,color:t.sys.color.warning.dark,size:r},pointStart:{pointStyle:i.Point6,pointSize:4},pointEnd:{pointStyle:i.Point6,pointSize:4},themeStyle:{quickStyleType:n.Style9}},Style10:{direction:s,strokeStyle:{type:o.Style0,color:t.sys.color.error.dark,size:r},pointStart:{pointStyle:i.Point4,pointSize:4},pointEnd:{pointStyle:i.Point4,pointSize:4},themeStyle:{quickStyleType:n.Style10}},Style11:{direction:s,strokeStyle:{type:o.Style0,color:t.ref.palette.neutral[1100],size:r},pointStart:{pointStyle:i.Point5,pointSize:4},pointEnd:{pointStyle:i.Point5,pointSize:4},themeStyle:{quickStyleType:n.Style11}},Style12:{direction:s,strokeStyle:{type:o.Style0,color:t.ref.palette.neutral[1100],size:r},pointStart:{pointStyle:i.Point2,pointSize:4},pointEnd:{pointStyle:i.Point2,pointSize:4},themeStyle:{quickStyleType:n.Style12}},Style13:{direction:s,strokeStyle:{type:o.Style0,color:t.sys.color.success.dark,size:r},pointStart:{pointStyle:i.Point7,pointSize:4},pointEnd:{pointStyle:i.Point7,pointSize:4},themeStyle:{quickStyleType:n.Style13}},Style14:{direction:s,strokeStyle:{type:o.Style0,color:t.sys.color.info.main,size:r},pointStart:{pointStyle:i.Point0,pointSize:4},pointEnd:{pointStyle:i.Point0,pointSize:4},themeStyle:{quickStyleType:n.Style14}},Style15:{direction:s,strokeStyle:{type:o.Style0,color:t.ref.palette.neutral[1100],size:r},pointStart:{pointStyle:i.Point8,pointSize:4},pointEnd:{pointStyle:i.Point8,pointSize:4},themeStyle:{quickStyleType:n.Style15}},Style16:{direction:s,strokeStyle:{type:o.Style10,color:t.ref.palette.neutral[1100],size:"8px"},pointStart:{pointStyle:i.None,pointSize:4},pointEnd:{pointStyle:i.None,pointSize:4},themeStyle:{quickStyleType:n.Style16}},Style17:{direction:s,strokeStyle:{type:o.Style0,color:t.sys.color.error.dark,size:r},pointStart:{pointStyle:i.Point1,pointSize:4},pointEnd:{pointStyle:i.Point1,pointSize:4},themeStyle:{quickStyleType:n.Style17}}}}(f);let S=0;for(const t in y){S+=1;const e=y[t],{pointStart:o,pointEnd:n,themeStyle:s}=e,h=d(e),b=c(e),m=u(e,!0),g=u(e,!1),f=(0,r.classNames)("divider-line","position-absolute",`point-start-${o.pointStyle}`,`point-end-${n.pointStyle}`),k=(0,r.jsx)("div",{key:t,className:"col-6 quick-style-item-container"},(0,r.jsx)("div",{className:(0,r.classNames)("quick-style-item",{"quick-style-item-selected":l===s.quickStyleType})},(0,r.jsx)(p.Button,{className:"quick-style-item-inner p-2 w-100",onClick:()=>{P(e)},disableHoverEffect:!0,disableRipple:!0,type:"tertiary",title:$("quickStyleItem",{index:S})},(0,r.jsx)("div",{className:"quick-style-item-inner w-100 p-2 position-relative"},o.pointStyle!==i.None&&(0,r.jsx)("span",{className:"point-start position-absolute",css:m}),(0,r.jsx)("div",{className:f,css:[h,b]}),n.pointStyle!==i.None&&(0,r.jsx)("span",{className:"point-end position-absolute",css:g})))));a.push(k)}return a})()))))})),m={appBuilderSync:h.appBuilderSync,QuickStyle:b}})(),s})())}}}));