System.register(["jimu-core","jimu-arcgis","jimu-ui","jimu-core/dnd","jimu-theme"],(function(e,t){var n={},a={},i={},o={},l={};return{setters:[function(e){n.AllDataSourceTypes=e.AllDataSourceTypes,n.AppMode=e.AppMode,n.BaseVersionManager=e.BaseVersionManager,n.DataSourceComponent=e.DataSourceComponent,n.DataSourceManager=e.DataSourceManager,n.DataSourceStatus=e.DataSourceStatus,n.DataSourceTypes=e.DataSourceTypes,n.Immutable=e.Immutable,n.React=e.React,n.ReactRedux=e.ReactRedux,n.ReactResizeDetector=e.ReactResizeDetector,n.TimezoneConfig=e.TimezoneConfig,n.classNames=e.classNames,n.css=e.css,n.dataSourceUtils=e.dataSourceUtils,n.dateUtils=e.dateUtils,n.defaultMessages=e.defaultMessages,n.focusElementInKeyboardMode=e.focusElementInKeyboardMode,n.getAppStore=e.getAppStore,n.hooks=e.hooks,n.jsx=e.jsx,n.lodash=e.lodash,n.polished=e.polished,n.useIntl=e.useIntl,n.utils=e.utils},function(e){a.JimuMapViewComponent=e.JimuMapViewComponent,a.MapViewManager=e.MapViewManager,a.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules},function(e){i.Alert=e.Alert,i.Button=e.Button,i.Dropdown=e.Dropdown,i.DropdownButton=e.DropdownButton,i.DropdownItem=e.DropdownItem,i.DropdownMenu=e.DropdownMenu,i.Icon=e.Icon,i.Label=e.Label,i.Popper=e.Popper,i.Switch=e.Switch,i.Tooltip=e.Tooltip,i.WidgetPlaceholder=e.WidgetPlaceholder,i.defaultMessages=e.defaultMessages},function(e){o.interact=e.interact},function(e){l.getThemeColorValue=e.getThemeColorValue}],execute:function(){e((()=>{var e={10307:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="#000" d="m9 6.809 3.276 1.638.448-.894L10 6.19V3H9z"></path><path fill="#000" fill-rule="evenodd" d="M10.293 11.943A5.501 5.501 0 0 0 9.5 1a5.5 5.5 0 0 0-.792 10.943L9.5 13zM14 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0M12 16.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-1 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" clip-rule="evenodd"></path><path fill="#000" d="M6 16H0v1h6zM13 16h6v1h-6z"></path></svg>'},44383:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 4 16"><path fill="#282828" fill-rule="evenodd" d="M.322.03A.504.504 0 0 1 .96.305L4 8 .96 15.695a.504.504 0 0 1-.638.275.464.464 0 0 1-.29-.606L2.94 8 .031.636A.464.464 0 0 1 .322.03" clip-rule="evenodd"></path></svg>'},75102:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 3c1.175 0 2.27.337 3.195.92l.9-.598A7 7 0 0 0 2.5 13.33h10.999A6.97 6.97 0 0 0 15 9a6.97 6.97 0 0 0-1.256-4.002l-.603.906C13.686 6.808 14 7.867 14 9a5.97 5.97 0 0 1-1.008 3.33H3.008A6 6 0 0 1 8 3m-.183 6.9a1.322 1.322 0 0 1-.43-2.158L13 4 9.258 9.612a1.32 1.32 0 0 1-1.441.287" clip-rule="evenodd"></path></svg>'},72259:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0m1 0A7 7 0 1 1 1 8a7 7 0 0 1 14 0M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" clip-rule="evenodd"></path></svg>'},62241:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2 2.22V1l1 .7 8.128 5.69L12 8l-.872.61L3 14.3 2 15V2.22M10.256 8 3 13.08V2.92zM14 1h-1v14h1z" clip-rule="evenodd"></path></svg>'},40904:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M5 1H4v14h1zm7 0h-1v14h1z" clip-rule="evenodd"></path></svg>'},97408:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="m2 1 12 7-12 7zm9.983 6.999L3 2.723v10.553z" clip-rule="evenodd"></path></svg>'},64811:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0m1 0A7 7 0 1 1 1 8a7 7 0 0 1 14 0M7.5 4.5a.5.5 0 0 1 1 0v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3z" clip-rule="evenodd"></path></svg>'},12033:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14 2.22V1l-1 .7-8.128 5.69L4 8l.872.61L13 14.3l1 .7V2.22M5.744 8 13 13.08V2.92zM2 1h1v14H2z" clip-rule="evenodd"></path></svg>'},45508:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6.5 7.5A.5.5 0 0 1 7 7h1.5v4.5h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1V8H7a.5.5 0 0 1-.5-.5"></path><path fill="#000" fill-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16m0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14" clip-rule="evenodd"></path></svg>'},62686:e=>{"use strict";e.exports=a},79244:e=>{"use strict";e.exports=n},26245:e=>{"use strict";e.exports=o},1888:e=>{"use strict";e.exports=l},14321:e=>{"use strict";e.exports=i}},t={};function s(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,s),i.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="";var r={};return s.p=window.jimuConfig.baseUrl,(()=>{"use strict";s.r(r),s.d(r,{__set_webpack_public_path__:()=>$e,default:()=>Fe});var e,t,n,a=s(79244),i=s(62686),o=s(14321);!function(e){e.Classic="CLASSIC",e.Modern="MODERN"}(e||(e={})),function(e){e.Slowest="SLOWEST",e.Slow="SLOW",e.Medium="MEDIUM",e.Fast="FAST",e.Fastest="FASTEST"}(t||(t={})),function(e){e.instant="INSTANT",e.current="CURRENT",e.cumulatively="CUMULATIVE"}(n||(n={}));const l=["year","month","day"],c=["hour","minute","second"],u=[...l,...c];var d;!function(e){e[e.year=31536e3]="year",e[e.month=2592e3]="month",e[e.day=86400]="day",e[e.hour=3600]="hour",e[e.minute=60]="minute",e[e.second=1]="second"}(d||(d={}));const m={slowest:5e3,slow:4e3,medium:3e3,fast:2e3,fastest:1e3};function p(e){let n;const a=1e3*Math.ceil(e/1e3);return Object.keys(m).some((e=>m[e]===a&&(n=e.toUpperCase(),!0))),n||(a>m.slowest?n=t.Slowest:a<m.fastest&&(n=t.Fastest)),n}function h(e,n,i=!1){const{startTime:o,endTime:l,layerList:s,accuracy:r,stepLength:c}=e||{};let u;const{startTime:m,endTime:p}=function(e,t,n,a){let i=g(n),o=g(a,!1),l=null,s=null;if(!i||!o){const n=v(e,t);n&&(e=n);if(Object.keys(e).filter((t=>null===e[t])).length===Object.keys(e).length)return{startTime:i,endTime:o};Object.keys(e).forEach((t=>{var n,a;const r=e[t];if(!r)return;const c=r.getTimeInfo();if(!i){const e=null===(n=null==c?void 0:c.timeExtent)||void 0===n?void 0:n[0];l=l?Math.min(l,e):e}if(!o){const e=null===(a=null==c?void 0:c.timeExtent)||void 0===a?void 0:a[1];s=s?Math.max(s,e):e}})),i=i||l,o=o||s}return y(i,o,!0)}(n,s,o,l);if(!m||!p)return null;const h=b(m,p),f=h[0],w=function(e,t,n){const a=(t-e)/1e3/d[n];return{val:a>15?10:a>10?5:1,unit:n}}(m,p,f);if(e){u=(0,a.Immutable)(e);const t=!h.includes(r);t&&(u=u.set("accuracy",f)),c&&(t||d[c.unit]>d[f]||1e3*d[c.unit]*c.val>p-m)&&(u=u.set("stepLength",w))}else u=(0,a.Immutable)(function(e,n){return{layerList:null,startTime:{value:a.dateUtils.VirtualDateType.Min},endTime:{value:a.dateUtils.VirtualDateType.Max},timeDisplayStrategy:"CURRENT",dividedCount:null,accuracy:e,stepLength:n,speed:t.Medium}}(f,w));return i?(u=u.set("startTime",{value:m}).set("endTime",{value:p}),u):(0,a.Immutable)({config:u,exactStartTime:m,exactEndTime:p,minAccuracy:f,accuracyList:h})}function g(e,t=!0){let n=null;if(e)if("number"==typeof e.value)n=e.value;else{const i=new Date;i.setMinutes(0),i.setSeconds(0),i.setMilliseconds(0),e.value===a.dateUtils.VirtualDateType.Today?(i.setHours(0),n=i.getTime()+f(e),n=t?n:n+1e3*d.day):e.value===a.dateUtils.VirtualDateType.Now&&(n=i.getTime()+f(e),n=t?n:n+1e3*d.hour)}return n}function f(e){return e.offset?e.offset.val*d[e.offset.unit]*1e3:0}function v(e,t){let n=null;const i=Object.keys(e).map((t=>e[t]))[0];if((null==i?void 0:i.type)===a.DataSourceTypes.WebMap){const e=[];i.getAllChildDataSources().forEach((t=>{(t.type===a.DataSourceTypes.MapService||t.type===a.DataSourceTypes.SubtypeGroupLayer||t.type===a.DataSourceTypes.ImageryLayer||t.type===a.DataSourceTypes.ImageryTileLayer||t.type===a.DataSourceTypes.FeatureLayer&&null===a.dataSourceUtils.findMapServiceDataSource(t))&&t.supportTime()&&e.push(t)}));const o=(null==t?void 0:t.map((e=>e.dataSourceId)))||[];n={},e.forEach((e=>{(0===o.length||o.includes(e.id))&&(n[e.id]=e)}))}return n}function y(e,t,n=!1){let i;if(i=window.jimuConfig.isBuilder?(0,a.getAppStore)().getState().appStateInBuilder.appConfig.attributes.timezone:(0,a.getAppStore)().getState().appConfig.attributes.timezone,(null==i?void 0:i.type)===a.TimezoneConfig.Specific){const o=a.dataSourceUtils.getTimeZoneOffsetByName(i.value),l=a.dataSourceUtils.getLocalTimeOffset();n?(e=e-l+o,t=t-l+o):(e=e+l-o,t=t+l-o)}return{startTime:e,endTime:t}}function b(e,t){const n=[...l,...c],a=[],i=t-e;return n.forEach((e=>{i>=1e3*d[e]&&a.push(e)})),a}function w(e){return e===a.DataSourceTypes.FeatureLayer||e===a.DataSourceTypes.ImageryLayer||e===a.DataSourceTypes.ImageryTileLayer||e===a.DataSourceTypes.SubtypeGroupLayer}var x;function S(e){const{width:t,startTime:n,endTime:a,accuracy:i="hour"}=e,o=x[i],l={year:null,month:null,day:null,hour:null,minute:null,second:null},s=function(e,t,n){const a=n/4;let i,o;const l=(t.getTime()-e.getTime())/31536e6,s=a/l;s>=1?(i=1,o=4*s):(s>=.2?i=5:s>=.1&&s<.2?i=10:s>=.02&&s<.1?i=50:s<.02&&(i=100),o=n/(l/i));return{value:i,tickWidth:o/n}}(new Date(n),new Date(a),t);if(l.year={value:s.value,tickWidth:s.tickWidth},x.month<=o&&1===s.value){const e=function(e,t){const n=e*t/4;let a=null;n>=12?a=1:n>=4?a=3:n>=2&&(a=6);return{value:a,tickWidth:e/(12/a)}}(s.tickWidth,t);if(null!==e.value&&(l.month={value:e.value,tickWidth:e.tickWidth},x.day<=o&&1===e.value)){const e=function(e,t,n){const a=n/4;let i;const o=(t-e)/864e5,l=a/o;i=l>=1?1:l>=.5&&l<1?2:l>=1/7&&l<.5?7:l>=.1&&l<1/7?10:l>=1/15&&l<.1?15:null;return{value:i,tickWidth:1/(o/i)}}(n,a,t);if(null!==e.value&&(l.day={value:e.value,tickWidth:e.tickWidth},x.hour<=o&&1===e.value)){const n=function(e,t){const n=e*t/4;let a;n>=24?a=1:n>=12&&n<24?a=2:n>=4&&n<12?a=6:n>=3&&n<4?a=8:n>=2&&n<3?a=12:n<2&&(a=null);return{value:a,tickWidth:e/(24/a)}}(e.tickWidth,t);if(null!==n.value&&(l.hour={value:n.value,tickWidth:n.tickWidth},x.minute<=o&&1===n.value)){const e=M(n.tickWidth,t);if(null!==e.value&&(l.minute={value:e.value,tickWidth:e.tickWidth},x.second<=o)){const n=M(e.tickWidth,t);null!==n.value&&(l.second={value:n.value,tickWidth:n.tickWidth})}}}}}return l}function M(e,t){const n=e*t/4;let a;n>=60?a=1:n>=12&&n<60?a=5:n>=6&&n<12?a=10:n>=4&&n<6?a=15:n>=2&&n<4?a=30:n<2&&(a=null);return{value:a,tickWidth:e/(60/a)}}function j(e){const{details:t,width:n,localStartTime:a,localEndTime:i,leftPosition:o,endPosition:l,scale:s}=e,r=new Date(a),c=new Date(i),u=r.getFullYear(),d=c.getFullYear(),m=[],p=[],h={value:u,label:N(t,r,!0),position:0};H(o,l,0,s)&&(m.push(h),p.push(h));let g=function(e,t){let n=new Date(e).getFullYear(),a=null;for(;!a;)n%100%t==0&&(a=n),n++;return a}(a,t.year.value);g===u&&(g=u+t.year.value);for(let e=g;e<=d;e+=t.year.value){const r=new Date(e,0,1,0,0,0),c=(r.getTime()-a)/(i-a);if(!H(o,l,100*c,s))continue;let d=!1;const h=t.year.tickWidth*n/52;h>=1?d=!0:h<.03?d=e%50==0&&e-u>=49:h<.15?d=e%(10*t.year.value)==0&&e-u>=9:h<.3?d=e%(5*t.year.value)==0&&e-u>=4:h<1&&(d=e%2==0);const g=N(t,r);d=C(d,g,c,p,n);const f={value:e,label:d?g:null,position:100*c+"%"};d&&p.push(f),m.push(f)}return m}function k(e){const{details:t,width:n,localStartTime:a,localEndTime:i,leftPosition:o,endPosition:l,scale:s}=e;if(!t.month||t.month.tickWidth>1&&new Date(i).getMonth()===new Date(a).getMonth())return[];const r=new Date(a),c=new Date(i),u=r.getMonth()+1,d=c.getMonth()+1,m=r.getFullYear(),p=12-u+12*(c.getFullYear()-m-1)+d+1,h=[],g=[];let f=function(e,t){const n=new Date(e);n.setDate(1),n.setHours(0),n.setMinutes(0),n.setSeconds(0),n.setMilliseconds(0),e>n.getTime()&&n.setMonth(n.getMonth()+1);let a=n.getMonth(),i=null;for(;!i;)a%t!=0&&11!==a||(i=a),a++;return i+1}(a,t.month.value);f===u&&(f=u+t.month.value);let v=!1;for(let e=f-u;e<=p-1;e+=t.month.value){const r=new Date(m,u+e-1,1,0,0,0),c=(r.getTime()-a)/(i-a);if(!H(o,l,100*c,s))continue;if(!v||0===r.getMonth()){const e=new Date(r.getFullYear(),r.getMonth()-1,1,0,0,0),n=e.getTime()-a,o=Math.max(n,0)/(i-a);if(g.unshift({value:e.getFullYear(),label:N(t,e,!v),position:100*o+"%"}),v=!0,0===r.getMonth())continue}let d=!1;const p=t.month.tickWidth*n;t.year.tickWidth*n>58&&(d=p>=28||(p>=15?r.getMonth()%3==0:(r.getMonth()+1)%12==7));const f=I(t,r);d=C(d,f,c,g,n);const y={value:r.getMonth()+1,label:d?f:null,position:100*c+"%"};d&&g.push(y),h.push(y)}return h}function T(e,t,n){let a=!1;const i=n.day.value;if(1!==i){const n=e.getMonth()+1;2===i?(2===n&&28===t||30===t)&&(a=!0):7===i?(2===n&&21===t||28===t)&&(a=!0):10===i?20===t&&(a=!0):15===i&&15===t&&(a=!0)}return a}function D(e){const{details:t,width:n,localStartTime:a,localEndTime:i,leftPosition:o,endPosition:l,scale:s}=e;if(!t.day)return[];const r=new Date(a),c=r.getDate(),u=r.getFullYear(),d=r.getMonth(),m=Math.ceil((i-a)/864e5)+1,p=[],h=[],g={value:c,label:I(t,r),position:0};h.push(g);let f=function(e,t){let n=new Date(e).getDate(),a=null;for(;!a;)(n-1)%t==0&&1!==n&&(a=n),n++;return a}(a,t.day.value);f===c&&(f=c+t.day.value);for(let e=f-c;e<=m-1;e+=t.day.value){const r=new Date(u,d,c+e,0,0,0),m=r.getDate();if(1===m)continue;const g=(r.getTime()-a)/(i-a);if(!H(o,l,100*g,s))continue;let f=!1;const v=t.day.tickWidth*n;t.month.tickWidth*n>100&&(v>=30?f=!0:v>=15?f=m%2==0:v>=8?f=(m-1)%7==0:v>=3&&(f=11===m||21===m));const y=L(r,t);f=C(f,y,g,h,n);const b={value:m,label:f?y:"",position:100*g+"%"};if(f&&h.push(b),p.push(b),T(r,m,t)){const t=new Date(r.getTime());t.setDate(1),t.setMonth(t.getMonth()+1);e+=(t.getTime()-r.getTime())/864e5-1}}return p}function R(e){const{details:t,width:n,localStartTime:a,localEndTime:i,leftPosition:o,endPosition:l,scale:s}=e;if(!t.hour)return[];const r=new Date(a),c=r.getHours(),u=r.getFullYear(),d=r.getMonth(),m=r.getDate(),p=Math.ceil((i-a)/36e5)+1,h=[],g=[],f={value:c,label:L(r,t),position:0};g.push(f);let v=function(e,t){let n=new Date(e).getHours(),a=null;for(;!a;)n%t==0&&(a=n),n++;return a}(a,t.hour.value);v===c&&(v=c+t.hour.value);for(let e=v-c;e<=p-1;e+=t.hour.value){const r=new Date(u,d,m,c+e,0,0),p=r.getHours();if(0===p)continue;if(r.getTime()>i)break;const f=(r.getTime()-a)/(i-a);if(!H(o,l,100*f,s))continue;let v=!1;const y=t.day.tickWidth*n,b=t.hour.tickWidth*n;y<60?v=!1:y<100?v=p%12==0:b>=40?v=!0:b>=20?v=p%2==0:b>=6.67?v=p%6==0:b>=5?v=p%8==0:b>=3.3&&(v=p%12==0);const w=z(r,t);v=C(v,w,f,g,n);const x={value:p,label:v?w:"",position:100*f+"%"};v&&g.push(x),h.push(x)}return h}function O(e){const{details:t,width:n,localStartTime:a,localEndTime:i,leftPosition:o,endPosition:l,scale:s}=e;if(!t.minute)return[];const r=new Date(a),c=r.getMinutes(),u=r.getFullYear(),d=r.getMonth(),m=r.getDate(),p=r.getHours(),h=(i-a)/6e4+1,g=[],f=[],v={value:c,label:z(r,t),position:0};f.push(v);let y=function(e,t){let n=new Date(e).getMinutes(),a=null;for(;!a;)n%t==0&&(a=n),n++;return a}(a,t.minute.value);y===c&&(y=c+t.minute.value);for(let e=y-c;e<=h-1;e+=t.minute.value){const r=new Date(u,d,m,p,c+e,0),h=r.getMinutes();if(0===r.getMinutes())continue;const v=(r.getTime()-a)/(i-a);if(!H(o,l,100*v,s))continue;let y=!1;const b=t.hour.tickWidth*n,w=t.minute.tickWidth*n;b<60?y=!1:b<=160?y=h%30==0:b<300?y=h%15==0:w>28?y=!0:w>20?y=h%2==0:b>15?y=h%5==0:b>10&&(y=h%10==0);const x=P(r,t);y=C(y,x,v,f,n);const S={value:r.getMinutes(),label:y?x:"",position:100*v+"%"};y&&f.push(S),g.push(S)}return g}function E(e){const{details:t,width:n,localStartTime:a,localEndTime:i,leftPosition:o,endPosition:l,scale:s}=e;if(!t.second)return[];const r=new Date(a),c=r.getSeconds(),u=r.getFullYear(),d=r.getMonth(),m=r.getDate(),p=r.getHours(),h=r.getMinutes(),g=(i-a)/1e3+1,f=[],v=[],y={value:c,label:P(r,t),position:0};v.push(y);let b=function(e,t){let n=new Date(e).getSeconds(),a=null;for(;!a;)n%t==0&&(a=n),n++;return a}(a,t.second.value);b===c&&(b=c+t.second.value);for(let e=b-c;e<=g-1;e+=t.second.value){const r=new Date(u,d,m,p,h,c+e),g=r.getSeconds();if(0===r.getSeconds())continue;const y=(r.getTime()-a)/(i-a);if(!H(o,l,100*y,s))continue;let b=!1;const w=t.minute.tickWidth*n,x=t.second.tickWidth*n;w<60?b=!1:w<=160?b=g%30==0:w<300?b=g%15==0:x>28?b=!0:x>20?b=g%2==0:w>15?b=g%5==0:w>10&&(b=g%10==0);const S=V(r,t);b=C(b,S,y,v,n);const M={value:r.getSeconds(),label:b?S:"",position:100*y+"%"};b&&v.push(M),f.push(M)}return f}function C(e,t,n,a,i){if(e){const o=a[a.length-1];if(!o)return!0;const l=A(o.label),s=A(t);l/(1===a.length?1:2)+s/2>(n-parseFloat(o.position)/100)*i&&(e=!1)}return e}function N(e,t,n=!1){let a="";return e.day?a=t.getFullYear():e.month?(a=t.getFullYear(),n&&(a+="/"+(t.getMonth()+1))):a=t.getFullYear(),a}function I(e,t){const n=t.getMonth()+1;let a="";return!e.day||e.hour&&1===e.hour.value?1!==n&&(a=n):a=n+"/"+t.getDate(),a}function L(e,t){let n=e.getDate();const a=e.getMonth()+1;return t.hour&&(n=a+"/"+n),n}function z(e,t){return e.getHours()+":00"}function P(e,t){let n=e.getMinutes();return t.second&&(n=e.getHours()+":"+(n<10?"0":"")+n),n}function V(e,t){return e.getSeconds()}!function(e){e[e.year=1]="year",e[e.month=2]="month",e[e.day=3]="day",e[e.hour=4]="hour",e[e.minute=5]="minute",e[e.second=6]="second"}(x||(x={}));const W={};function A(e,t,n){const a=window;if(void 0===a.measureCanvasCTX){const e=document.createElement("canvas");a.measureCanvasCTX=e.getContext("2d")}if(W[e])return W[e];const i=a.measureCanvasCTX.measureText(e).width+10;return W[e]=i,i}function F(e){const{interact:t,dragRef:n,getDragProps:a,resizeHandlerDragging:i,resizeHandlerDragend:o}=e;let l,s,r,c,u,m,p=null;return t(n).draggable({inertia:!1,modifiers:[],autoScroll:!0,onstart:e=>{e.stopPropagation(),e.preventDefault(),s=a(),r=s.startValue,c=s.endValue,u=s.startValue,m=s.endValue,l=0},onmove:e=>{e.stopPropagation(),e.preventDefault();const{extent:t,width:n}=s;l=e.clientX-e.clientX0;const a=function(e,t,n){return(e[1]-e[0])/t*n}(t,n,l),o=function(e){const{valueForDw:t,dragProps:n,initStartValue:a,initEndValue:i,startValue:o,endValue:l,newTempEnd:s}=e;let r=s;const{extent:c,stepLength:u,dividedCount:m}=n;let p=a,h=i;if(u){const e=Math.round(t/d[u.unit]/u.val/1e3);0!==e&&(p=B(u.unit,new Date(p),e*u.val),h=B(u.unit,new Date(h),e*u.val))}else{const e=(c[1]-c[0])/m,n=Math.round(t/e);0!==n&&(p+=n*e,h+=n*e)}t>0?h>c[1]?u?p>=c[1]?(p=o,h=l):r=c[1]:(p=c[1]-(i-a),h=c[1]):r=null:(r=null,p<c[0]&&(p=c[0],h=p+(i-a)));return{newStart:p,newEnd:h,updatedNewTempEnd:r}}({valueForDw:a,dragProps:s,initStartValue:r,initEndValue:c,startValue:u,endValue:m,newTempEnd:p});i(o.newStart,o.newEnd),u=o.newStart,m=o.newEnd,p=o.updatedNewTempEnd},onend:e=>{e.stopPropagation(),o(u,m,p)}})}function $(e,t,n,a,i){let o,l;let s,r,c,u,m,p;return e(t).resizable({edges:{left:".resize-left",right:".resize-right"}}).on("resizestart",(e=>{e.stopPropagation(),s=n(),c=s.startValue,u=s.endValue,m=s.startValue,p=s.endValue,r=u-c,o=0;const a=t.getBoundingClientRect();l=a.width,t.style.minWidth="0px"})).on("resizemove",(e=>{const{extent:t}=s;e.stopPropagation();const n=e.deltaRect;o+=n.width;const i=r&&l+o,h=function(e,t,n,a,i,o){let l=e,s=t;const r=(n[1]-n[0])/a*i;o.edges.left?l=e-r:s=t+r;return{newStart:l,newEnd:s}}(m,p,t,i,o,e),g=function(e,t,n,a,i){const{width:o,extent:l,stepLength:s,accuracy:r,dividedCount:c}=n,{initStartValue:u,initEndValue:m}=a,{newStart:p,newEnd:h}=i;let g=u,f=m;if(s){const n=Math.round((l[1]-l[0])*t/o/d[r]/1e3);e.edges.left?g=B(r,new Date(h),-n):f=B(r,new Date(p),n)}else{const n=(l[1]-l[0])/c,a=Math.round((l[1]-l[0])*t/o/n);e.edges.left?g=h-a*n:f=p+a*n}e.edges.left?(g=Math.min(g,f),g=Math.max(l[0],g),g=Math.min(l[1],g)):(f=Math.max(g,f),f=Math.min(l[1],f),f=Math.max(l[0],f));return{newStart:g,newEnd:f}}(e,i||o,s,{initStartValue:c,initEndValue:u},h);a(g.newStart,g.newEnd),m=g.newStart,p=g.newEnd})).on("resizeend",(e=>{e.stopPropagation(),i(m,p)}))}function B(e,t,n){switch(e){case"year":t.setFullYear(t.getFullYear()+n);break;case"month":t.setMonth(t.getMonth()+n);break;case"day":t.setDate(t.getDate()+n);break;case"hour":t.setHours(t.getHours()+n);break;case"minute":t.setMinutes(t.getMinutes()+n);break;case"second":t.setSeconds(t.getSeconds()+n)}return t.getTime()}function U(e,t,n,a,i,o=!0){let l;const s=o?1:-1;if(i)l=n+1/i*(t-e)*s,l=Math.round(l),Math.abs(l-e)<1e4?l=e:Math.abs(l-t)<1e4&&(l=t);else{const e=new Date(n),t=a.val*s;switch(null==a?void 0:a.unit){case"year":e.setFullYear(e.getFullYear()+t);break;case"month":e.setMonth(e.getMonth()+t);break;case"day":e.setDate(e.getDate()+t);break;case"hour":e.setHours(e.getHours()+t);break;case"minute":e.setMinutes(e.getMinutes()+t);break;case"second":e.setSeconds(e.getSeconds()+t)}l=e.getTime()}return l}function H(e,t,n,a){let i=!1;const o=1/a/2*100;return n>=e-o&&n<=t+o&&(i=!0),i}function Y(e,t,n){return(null==n?void 0:n.zoomLevel)===t&&0!==t?n.maxWidth/e:Math.pow(2,t)}function _(e,t,n){return e*Y(e,t,n)}var G=s(26245);const J={_widgetLabel:"Timeline",overallTimeExtent:"Overall time extent",filteringApplied:"Timeline filtering applied",noTlFromHonoredMapWarning:"Oops! Seems like something went wrong with this map and we cannot get any valid time settings.",noSupportedLayersInMapWidget:"The map does not contain any time-aware data.",invalidTimeSpanWarning:"Please check the widget configurations to make sure the time span is valid.",timezoneWarning:"The Timeline widget is not available to use under the data time zone."};var X=s(64811),K=s.n(X),q=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n};const Q=e=>{const t=window.SVG,{className:n}=e,i=q(e,["className"]),o=(0,a.classNames)("jimu-icon jimu-icon-component",n);return t?a.React.createElement(t,Object.assign({className:o,src:K()},i)):a.React.createElement("svg",Object.assign({className:o},i))};var Z=s(72259),ee=s.n(Z),te=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n};const ne=e=>{const t=window.SVG,{className:n}=e,i=te(e,["className"]),o=(0,a.classNames)("jimu-icon jimu-icon-component",n);return t?a.React.createElement(t,Object.assign({className:o,src:ee()},i)):a.React.createElement("svg",Object.assign({className:o},i))};var ae=s(45508),ie=s.n(ae),oe=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n};const le=e=>{const t=window.SVG,{className:n}=e,i=oe(e,["className"]),o=(0,a.classNames)("jimu-icon jimu-icon-component",n);return t?a.React.createElement(t,Object.assign({className:o,src:ie()},i)):a.React.createElement("svg",Object.assign({className:o},i))};var se=s(97408),re=s.n(se),ce=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n};const ue=e=>{const t=window.SVG,{className:n}=e,i=ce(e,["className"]),o=(0,a.classNames)("jimu-icon jimu-icon-component",n);return t?a.React.createElement(t,Object.assign({className:o,src:re()},i)):a.React.createElement("svg",Object.assign({className:o},i))};var de=s(40904),me=s.n(de),pe=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n};const he=e=>{const t=window.SVG,{className:n}=e,i=pe(e,["className"]),o=(0,a.classNames)("jimu-icon jimu-icon-component",n);return t?a.React.createElement(t,Object.assign({className:o,src:me()},i)):a.React.createElement("svg",Object.assign({className:o},i))};var ge=s(12033),fe=s.n(ge),ve=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n};const ye=e=>{const t=window.SVG,{className:n}=e,i=ve(e,["className"]),o=(0,a.classNames)("jimu-icon jimu-icon-component",n);return t?a.React.createElement(t,Object.assign({className:o,src:fe()},i)):a.React.createElement("svg",Object.assign({className:o},i))};var be=s(62241),we=s.n(be),xe=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n};const Se=e=>{const t=window.SVG,{className:n}=e,i=xe(e,["className"]),o=(0,a.classNames)("jimu-icon jimu-icon-component",n);return t?a.React.createElement(t,Object.assign({className:o,src:we()},i)):a.React.createElement("svg",Object.assign({className:o},i))};var Me=s(75102),je=s.n(Me),ke=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n};const Te=e=>{const t=window.SVG,{className:n}=e,i=ke(e,["className"]),o=(0,a.classNames)("jimu-icon jimu-icon-component",n);return t?a.React.createElement(t,Object.assign({className:o,src:je()},i)):a.React.createElement("svg",Object.assign({className:o},i))};var De=s(1888);const Re=s(44383),Oe=Object.assign({},J,a.defaultMessages,o.defaultMessages);const Ee=()=>{const e=(0,a.useIntl)();return a.React.useCallback(((t,n)=>e.formatMessage({id:t,defaultMessage:Oe[t]},n)),[e])},Ce=function(i){const{width:l,height:s,applied:r,timeStyle:c=e.Classic,foregroundColor:u,backgroundColor:p,sliderColor:h,theme:g,startTime:f,endTime:v,accuracy:y="year",stepLength:b,dividedCount:w,displayStrategy:x=n.current,enablePlayControl:M=!1,speed:T=t.Medium,autoPlay:C,dateTimePattern:N,updating:I=!1,onTimeChanged:L,onApplyStateChanged:z}=i,[P,V]=a.React.useState(l),[W,A]=a.React.useState(s);a.React.useEffect((()=>{V(l-(c===e.Classic?64:80)),A(c===e.Classic?52:80)}),[l,s,c]);const[H,J]=a.React.useState(0),[X,K]=a.React.useState(null),q=(0,a.useIntl)(),Z=Ee(),ee=a.React.useMemo((()=>[{value:t.Slowest,label:Z("slowest")},{value:t.Slow,label:Z("slow")},{value:t.Medium,label:Z("medium")},{value:t.Fast,label:Z("fast")},{value:t.Fastest,label:Z("fastest")}]),[]),[te,ae]=a.React.useState(T);a.React.useEffect((()=>{ae(T)}),[T]);const[ie,oe]=a.React.useState(C||!1),se=a.React.useRef(null),re=a.React.useRef(null),[ce,de]=a.React.useState(null),[me,pe]=a.React.useState(0),[ge,fe]=a.React.useState(f),[ve,be]=a.React.useState(null),[we,xe]=a.React.useState(null),[Me,je]=a.React.useState(null),[ke,Oe]=a.React.useState(null),[Ce,Ne]=a.React.useState(null),[Ie,Le]=a.React.useState(null),ze=a.React.useRef(null),Pe=a.React.useRef(null),Ve=a.React.useRef(null),We=a.React.useRef(null),Ae=a.React.useRef(null),Fe=a.React.useRef(null),[$e,Be]=a.React.useState(!1),Ue=a.React.useRef(!1),He=e=>{window.jimuConfig.isInBuilder&&Ue.current&&e.key.includes("Arrow")&&e.preventDefault()};a.React.useEffect((()=>{function e(e){Ue.current=!0}function t(e){Ue.current=!1}function n(e){e.edges={left:!0},Ye(e)}function a(e){e.edges={right:!0},Ye(e)}return se.current.addEventListener("mousedown",Qe),Pe.current?(Pe.current.addEventListener("keyup",n,!0),Pe.current.addEventListener("focus",e,!0),Pe.current.addEventListener("blur",t,!0)):(Ve.current.addEventListener("keyup",n,!0),We.current.addEventListener("keyup",a,!0),Ve.current.addEventListener("focus",e,!0),Ve.current.addEventListener("blur",t,!0),We.current.addEventListener("focus",e,!0),We.current.addEventListener("blur",t,!0)),document.body.addEventListener("keydown",He,{passive:!1}),()=>{var i;null===(i=se.current)||void 0===i||i.removeEventListener("mousedown",Qe),null==Ce||Ce.unset(),null==Ie||Ie.unset(),Pe.current?(Pe.current.removeEventListener("keyup",n,!0),Pe.current.removeEventListener("focus",e,!0),Pe.current.removeEventListener("blur",t,!0)):Ve.current&&We.current&&(Ve.current.removeEventListener("keyup",n,!0),We.current.removeEventListener("keyup",a,!0),Ve.current.removeEventListener("focus",e,!0),Ve.current.removeEventListener("blur",t,!0),We.current.removeEventListener("focus",e,!0),We.current.removeEventListener("blur",t,!0)),document.body.removeEventListener("keydown",He)}}),[]);const Ye=a.hooks.useEventCallback((e=>{if(e.key.includes("Arrow")){e.preventDefault();const t="ArrowLeft"===e.key||"ArrowTop"===e.key?-1:1,n=Je();let a=n.startValue,i=n.endValue;if(b)e.edges.left?a=B(b.unit,new Date(n.startValue),t*b.val):i=B(b.unit,new Date(n.endValue),t*b.val);else{const o=(n.extent[1]-n.extent[0])/w;e.edges.left?a+=t*o:i+=t*o}e.edges.left?(a=Math.max(n.extent[0],a),a=Math.min(a,i)):(i=Math.min(n.extent[1],i),i=Math.max(a,i)),it(a,i)}}));a.React.useEffect((()=>{if(ze.current){Ne($(G.interact,ze.current,Je,it,ot));const e={interact:G.interact,dragRef:ze.current,getDragProps:Xe,resizeHandlerDragging:it,resizeHandlerDragend:ot};Le(F(e))}}),[c]),a.React.useEffect((()=>{re.current={left:0,x:0},Be(!1),pe(0),J(0),oe(C),xe(null),fe(f);const e=x===n.current?U(f,v,f,b,w):f;be(e),L(f,e)}),[C,M,f,x,v,y,b,w]),a.React.useEffect((()=>{const e=S({width:_(P,H,X),startTime:f,endTime:v,accuracy:y});de(e)}),[P,f,v,y,H,X]),a.React.useEffect((()=>{const e=function(e,t,n,a){if(e<0)return;const i=(n-t)/d[a]/1e3,o=Math.max(e,32*i);let l=0;for(;_(e,l)<o||30===l;)l++;return{maxWidth:o,zoomLevel:l}}(P,f,v,y);K(e)}),[P,f,v,y]);const _e=a.ReactRedux.useSelector((e=>{var t,n;return ie?(null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.appMode)===a.AppMode.Design||(null===(n=e.appRuntimeInfo)||void 0===n?void 0:n.isPrintPreview):null})),Ge=a.React.useRef(_e),Je=a.hooks.useEventCallback((()=>({startValue:Me||ge,endValue:ke||we||ve,extent:[f,v],width:_(P,H,X),accuracy:y,stepLength:b,dividedCount:w}))),Xe=a.hooks.useEventCallback((()=>({startValue:Me||ge,endValue:ke||ve,extent:[f,v],width:_(P,H,X),accuracy:y,stepLength:b,dividedCount:w}))),Ke=a.hooks.useEventCallback((e=>{a.lodash.debounce((()=>{if(Me)return;const t=Y(P,H,X),n=e.clientX-re.current.x;let a=re.current.left-n/(t*P)*100;a=Math.min(a/100,(t-1)/t),a=a<0?0:a,pe(100*a)}),50)()})),qe=a.hooks.useEventCallback((()=>{se.current.style.cursor="grab",se.current.style.removeProperty("user-select"),document.removeEventListener("mousemove",Ke),document.removeEventListener("mouseup",qe)})),Qe=a.hooks.useEventCallback((e=>{0!==H&&"BUTTON"!==e.target.tagName&&(se.current.style.cursor="grabbing",se.current.style.userSelect="none",re.current={left:me,x:e.clientX},document.addEventListener("mousemove",Ke),document.addEventListener("mouseup",qe))})),Ze=a.React.useCallback(((e=ge,t=ve,n)=>{if(e<=f)return void pe(0);const a=v-f,i=a/Y(P,H,X),o=f+me/100*a,l=o+i;let s;if(n&&(t<=o||e>=l))s=Math.min(e,v-i);else{if(n||!(e>=l||t<=o))return;s=Math.max(f,t-i)}pe((s-f)/(v-f)*100)}),[H,f,v,me,ge,ve,P,X]),et=a.React.useCallback((e=>{const t=H+(e?1:-1);if(0===t)return void pe(0);const n=v-f,a=Y(P,H,X),i=Y(P,t,X),o=n/a,l=f+me/100*n,s=l+o;let r=me;const c=we||ve;if(c===v&&c===s)r=(i-1)/i*100;else if(ge<l&&c>l&&c<s)r=(c-(c-l)/(i/a)-f)/(v-f)*100;else{if(ge>=s||ve<=l&&ge!==ve||ge<l&&ve>s)r=(ge+(ve-ge)/2-o*a/i/2-f)/(v-f)*100;else{const t=(ge-f)/(v-f)*100-me;r=e?me+t/2:me-t}}r=Math.max(0,r),r=Math.min(r,(i-1)/i*100),pe(r)}),[H,f,v,me,P,ge,ve,we,X]),tt=a.React.useCallback((e=>{const t=U(f,v,ve,b,w,e);let a=f,i=v;if(x===n.instant)e&&t>v||!e&&t<f?(a=f,i=f):(a=t,i=t),fe(a);else if(x===n.cumulatively){const n=e&&ve>=v,a=!e&&f===ve;if(e&&t>v)(we||w)&&e?(i=f,xe(null)):(i=t,xe(v));else{if(a)return;i=n?f:t,xe(null)}}else{const n=U(f,v,ge,b,w,e),o=!e&&f===ge,l=!e&&n<f,s=e&&n>=v;if(n<v&&t>v)(we||w)&&e?(a=f,i=f+ve-ge,xe(null)):(a=n,i=t,xe(v));else{if(o)return;l||s?(a=f,i=f+ve-ge):(a=n,i=t),xe(null)}fe(a)}be(i),0!==H&&Ze(a,i,e),L(a,i)}),[w,v,ve,f,ge,b,x,L,Ze]),nt=a.React.useCallback((()=>{Ae.current&&(clearInterval(Ae.current),Ae.current=null)}),[]),at=a.React.useCallback((()=>{nt(),Ae.current=setInterval((()=>{I||tt(!0)}),m[te.toLowerCase()])}),[te,nt,I,tt]);a.React.useEffect((()=>{if(!Ae.current){if(_e||!ie||I)return void nt();at()}return()=>{nt()}}),[ie,I,_e,nt,at]),a.React.useEffect((()=>{if(Ge.current!==_e&&null!==_e){if(Ge.current=_e,_e)return void nt();ie&&!I&&at()}}),[_e,at,nt,ie,I]);const it=(e,t)=>{je(e),Oe(t)},ot=(e,t,n)=>{it(null,null),fe(e),be(t),xe(n),L(e,n||t)},lt=a.React.useMemo((()=>{if(!ce)return null;const e=_(P,H,X),t={details:ce,width:e,localStartTime:f,localEndTime:v,leftPosition:me,endPosition:P/e*100+me,scale:e/P},n=j(t),i=k(t),o=D(t),l=R(t),s=O(t),r=E(t),c=function(e){const{tsDetails:t,years:n,months:a,days:i,hours:o,minutes:l,seconds:s}=e,r={labels:{},ticks:{}},c=[];n.length>1&&c.push("year"),a.length>1&&c.push("month"),i.length>1&&c.push("day"),o.length>1&&c.push("hour"),l.length>1&&c.push("minute"),s.length>1&&c.push("second");const u=c[c.length-1],d=Object.keys(t).filter((e=>t[e]));if(1===c.length)d.forEach((e=>{r.ticks[e]="medium",r.labels[e]="short"}));else{if(2===c.length)r.ticks[u]="medium",d.forEach((e=>{e!==u&&(r.ticks[e]="long")}));else{const e=c[c.length-2];r.ticks[u]="short",r.ticks[e]="medium",d.forEach((t=>{t!==u&&t!==e&&(r.ticks[t]="long")}))}r.labels=r.ticks}return r}({tsDetails:ce,years:n,months:i,days:o,hours:l,minutes:s,seconds:r}),u=["year","month","day","hour","minute","second"];return(0,a.jsx)("div",{className:"timeline-ticks"},[n,i,o,l,s,r].map(((e,t)=>e.map(((e,n)=>{const i=e.position,o=u[t];return(0,a.jsx)("div",{key:`item-${t}-${n}`,className:"timeline-tick-container","data-unit":o,style:{left:i}},e.label&&(0,a.jsx)("div",{className:`timeline-tick_label ${c.labels[o]}-label ${"year"===o&&0===n&&0===me?"timeline-first_label":""}`},e.label),(0,a.jsx)("div",{key:n,className:(0,a.classNames)(`timeline-tick ${c.ticks[o]}-tick`,e.label?"has-label":"no-label")}))})))))}),[ce,H,me]),st=a.React.useMemo((()=>function(e,t,n,i,o){const l=(0,a.getAppStore)().getState().appContext.isRTL;return n=(0,De.getThemeColorValue)(n||e.ref.palette.black,e),i=i||e.ref.palette.white,o=(0,De.getThemeColorValue)(o||e.sys.color.primary.main,e),a.css`
    color: red;
    height: fit-content;
    color: ${n};

    // Common style
    .timeline-header, .timeline-footer {
      height: 16px;
      display: flex;
      flex-direction: ${l?"row-reverse":"row"};
      align-items: center;
      justify-content: space-between;
      .zoom-container {
        min-width: 36px;
        display: flex;
        flex-direction: ${l?"row-reverse":"row"};
      }
      .range-label {
        display: flex;
        align-items: center;
        font-size: ${a.polished.rem(12)};
        font-weight: 500;
        line-height: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        .range-label-badge {
          width: 8px;
          height: 8px;
          min-width: 8px;
          border-radius: 4px;
          margin-right: 0.25rem;
        }
      }
    }
    .timeline-content {
      overflow-x: hidden;

      .timeline-whole {
        .timeline-ticks {
          position: relative;
          .timeline-tick-container {
            position: absolute;
            user-select: none;
            .timeline-tick {
              width: 1px;
              background: ${a.polished.rgba(n,.5)};
            }
            .timeline-tick_label {
              font-size: ${a.polished.rem(11)};
              font-weight: 400;
              line-height: 15px;
              width: max-content;
              transform: translate(${l?"50%":"-50%"});
              color: foregroundColor;
              &.long-label {
                font-weight: 600;
              }
              &.medium-label {
                font-weight: 500;
              }
              &.short-label {
                font-weight: 400;
              }
              &.timeline-first_label {
                /* transform: ${`translate(-${t}px)`}; */
                transform: translate(0);
              }
            }
          }
        }
      }

      .timeline-range-container {
        height: 8px;
        /* width: ${`calc(100% - ${2*t}px)`}; */
        width: 100%;
        border-radius: 4px;
        background-color: ${a.polished.rgba(n,.2)};
        .resize-handlers {
          height: 100%;
          border-radius: 4px;
          display: flex;
          justify-content: space-between;
          background-color: ${o};

          .resize-handler {
            width: 8px;
            height: 8px;
            padding: 0;
            overflow: visible;
            border-radius: 8px;
            background: ${o};
            border: 2px solid ${o};
            &.resize-instant {
              background: ${i};
            }
          }

          &:hover {
            .resize-handler {
              background: ${i};
            }
          }
        }
      }
      .timeline-arrow {
        position: absolute;
        &.left-arrow{
          transform: scaleX(-1);
        }
      }
    }
    .jimu-btn {
        color: ${n};
        border-radius: 16px;
        &:hover:not(:disabled) {
          color: ${n};
          background-color: ${a.polished.rgba(n,.2)};
        }
        &.disabled {
          color: ${a.polished.rgba(n,.2)};
          &:hover {
            color: ${a.polished.rgba(n,.2)};
          }
        }
        .jimu-icon {
          margin: 0
        }

        .icon-btn-sizer {
          min-width: 0;
          min-height: 0;
        }
    }

    .jimu-dropdown-button {
      &:not(:disabled):not(.disabled):active,
      &[aria-expanded="true"]{
        border-color: transparent !important;
        color: unset !important;
      }
    }

    // Clasic style
    &.timeline-classic {
      padding: 1rem 1.5rem;
      .timeline-header .range-label {
        .range-label-badge {
          background-color: ${o};
        }
        .range-label-context {
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .timeline-content {
        margin: 1rem 0.5rem;
        .timeline-whole {
          .timeline-ticks {
            padding-top: 0.75rem;
            .timeline-tick-container {
              .timeline-tick {
                &.long-tick {
                  height: 12px;
                  &.no-label {
                    margin-top: 19px;
                  }
                  &.has-label {
                    margin-top: 0;
                  }
                }
                &.medium-tick {
                  height: 8px;
                  &.no-label {
                    margin-top: 23px;
                  }
                  &.has-label {
                    margin-top: 8px;
                  }
                }
                &.short-tick {
                  height: 4px;
                  &.no-label {
                    margin-top: 27px;
                  }
                  &.has-label {
                    margin-top: 12px;
                  }
                }
              }
              .timeline-tick_label {
                margin-bottom: 4px;
              }
            }
          }
          .timeline-arrow {
            top: 78px;
            &.left-arrow{
              left: ${l?"unset":"20px"};
              right: ${l?"20px":"unset"};
            }
            &.right-arrow{
              left: ${l?"20px":"unset"};
              right: ${l?"unset":"20px"};
            }
          }
        }
        .timeline-range-container .resize-handlers .resize-handler {
          min-width: 8px;
          &:focus {
            background: ${i};
            outline-offset: 0;
          }
        }
      }
      .timeline-footer {
        flex-direction: ${l?"row-reverse":"row"};
        .play-container {
          min-width: 65px;
        }
      }
    }

    // Modern style
    &.timeline-modern {
      padding: 1rem 0.5rem;
      height: 156px;

      .timeline-header{
        padding-top: 0;
        padding-bottom: 0;
        padding: 0 36px;
        &.no-play-container {
          padding-left: ${l?"12px":"36px"};
          padding-right: ${l?"36px":"12px"};
        }
        .range-label {
          margin: 0 0.25rem;
          .range-label-badge {
            background-color: ${a.polished.rgba(o,.7)};
          }
        }
      }

      .timeline-content {
        display: flex;
        margin-top: 0.5rem;
          .timeline-left, .timeline-right {
            display: flex;
            height: 80px;
            .play-container {
              min-width: 17px; /* when play btn is hidden */
              display: flex;
              flex-direction: column;
              justify-content: center;
              .jimu-btn {
                margin: 0 0.5rem;
                &.next-btn {
                  margin-bottom: 0.5rem;
                }
                &.play-btn {
                  margin-top: 0.5rem;
                }
              }
            }
          }
        .timeline-middle {
          height: 115px;
          overflow-x: hidden;
          flex-grow: 1;
          .timeline-content-inside {
            border: 1px solid ${a.polished.rgba(n,.5)};
            border-radius: 8px;
            .timeline-whole {
              display: flex;
              flex-direction: column;
              .timeline-ticks {
                .timeline-tick-container {
                  display: flex;
                  flex-direction: column-reverse;
                  .timeline-tick {
                    &.long-tick {
                      height: 32px;
                    }
                    &.medium-tick {
                      height: 16px;
                      margin-top: 16px;
                    }
                    &.short-tick {
                      height: 8px;
                      margin-top: 24px;
                    }
                  }
                  .timeline-tick_label {
                    margin-top: 0.5rem;
                  }
                }
              }
              .timeline-range-container {
                z-index: 1;
                width: 100%;
                background: transparent;
                .resize-handlers {
                  background-color: ${a.polished.rgba(o,.7)};
                  .resize-handler {
                    min-width: 4px;
                    width: 4px;
                    height: calc(100% - 10px);
                    margin: 5px 0;
                    background: transparent;
                    border: none;
                    &.show-bg { /** When handlers.w = 0 */
                      background-color: ${a.polished.rgba(o,.7)};
                      height: 100%;
                      margin: 0;
                      &:hover {
                        background-color: ${a.polished.rgba(o,.9)};
                      }
                    }
                  }
                  &:hover {
                    .resize-handler {
                      background: ${a.polished.rgba(o,.7)};

                    }
                  }
                }
              }
            }
          }
          .timeline-arrow {
            z-index: 2;
            top: 68px;
            &.left-arrow{
              left: 50px;
              left: ${l?"unset":"50px"};
              right: ${l?"50px":"unset"};
            }
            &.right-arrow{
              right: 50px;
              left: ${l?"50px":"unset"};
              right: ${l?"unset":"50px"};
              &.no-play-container {
                left: ${l?"25px":"unset"};
                right: ${l?"unset":"25px"};
              }
            }
          }
        }
      }
    }
  `}(g,7,u,p,h)),[g,7,u,p,h]),rt=a.React.useMemo((()=>{const e=(0,a.jsx)(o.Button,{icon:!0,type:"tertiary",size:"sm",disabled:0===H,onClick:()=>{et(!1),J(Math.max(0,H-1))}},(0,a.jsx)(ne,null)),t=(0,a.jsx)(o.Button,{icon:!0,type:"tertiary",size:"sm",disabled:H===(null==X?void 0:X.zoomLevel),onClick:()=>{et(!0),J(Math.min(null==X?void 0:X.zoomLevel,H+1))}},(0,a.jsx)(Q,null));return(0,a.jsx)("div",{className:"zoom-container"},0===H?e:(0,a.jsx)(o.Tooltip,{title:Z("zoomOut"),placement:"bottom"},e),H===(null==X?void 0:X.zoomLevel)?t:(0,a.jsx)(o.Tooltip,{title:Z("zoomIn"),placement:"bottom"},t))}),[H,Z,X,et]),ct=a.React.useMemo((()=>M?(0,a.jsx)(o.Tooltip,{title:Z(ie?"pause":"play"),placement:"bottom"},(0,a.jsx)(o.Button,{icon:!0,type:"tertiary",size:"sm",className:"play-btn",onClick:()=>{oe(!ie)}},ie?(0,a.jsx)(he,null):(0,a.jsx)(ue,null))):null),[M,ie,Z]),ut=a.React.useMemo((()=>(0,a.jsx)(o.Tooltip,{title:Z("previous"),placement:"bottom"},(0,a.jsx)(o.Button,{icon:!0,type:"tertiary",size:"sm",onClick:e=>{tt(!1)}},(0,a.jsx)(ye,null)))),[Z,tt]),dt=a.React.useMemo((()=>(0,a.jsx)(o.Tooltip,{title:Z("next"),placement:"bottom"},(0,a.jsx)(o.Button,{icon:!0,type:"tertiary",size:"sm",className:"next-btn",onClick:e=>{tt(!0)}},(0,a.jsx)(Se,null)))),[Z,tt]),mt=a.React.useMemo((()=>{const e=q.formatDate(f,N),t=q.formatDate(v,N);return(0,a.jsx)(a.React.Fragment,null,(0,a.jsx)(o.Button,{icon:!0,type:"tertiary",ref:e=>{Fe.current=e},"aria-label":Z("moreInfo"),"aria-haspopup":"true","aria-expanded":$e,onClick:e=>{Be(!$e)}},(0,a.jsx)(le,null)),(0,a.jsx)(o.Popper,{open:$e,keepMount:!0,arrowOptions:!0,reference:Fe,toggle:e=>{Be(!1),"Escape"===(null==e?void 0:e.key)&&a.lodash.defer((()=>{(0,a.focusElementInKeyboardMode)(Fe.current)}))}},(0,a.jsx)("div",{className:"p-4"},(0,a.jsx)("h6",{className:"mb-2"},Z("overallTimeExtent")),(0,a.jsx)("div",{className:"mb-4"},`${e} - ${t}`),(0,a.jsx)(o.Label,{check:!0,className:"d-flex align-items-center"},(0,a.jsx)("h6",{className:"flex-grow-1 mb-0 mr-1"},Z("filteringApplied")),(0,a.jsx)(o.Switch,{checked:r,onChange:(e,t)=>{z(t)}})))))}),[Z,f,v,q,$e,r,N,z]),pt=a.React.useMemo((()=>(0,a.jsx)(o.Dropdown,{menuRole:"listbox",activeIcon:!0,className:c===e.Classic?"":"justify-content-center"},(0,a.jsx)(o.Tooltip,{title:Z("speed"),placement:"bottom"},(0,a.jsx)(o.DropdownButton,{icon:!0,type:"tertiary",arrow:!1,"aria-label":Z("speed"),"a11y-description":ee.filter((e=>e.value===te))[0].label},(0,a.jsx)(Te,null))),(0,a.jsx)(o.DropdownMenu,null,ee.map((e=>(0,a.jsx)(o.DropdownItem,{key:e.value,active:e.value===te,onClick:()=>{ae(e.value)}},e.label)))))),[ee,te,c,Z]),ht=a.hooks.useEventCallback((e=>{const t=v-f,n=Y(P,H,X);let a=(f+me/100*t+(e?1:-1)*(t/n)-f)/(v-f)*100;a=Math.max(0,a),a=Math.min(a,(n-1)/n*100),pe(a)})),gt=Y(P,H,X),ft=(0,a.getAppStore)().getState().appContext.isRTL,vt=Me||ge,yt=ke||we||ve,{startPositionForStep:bt,widthForStep:wt}=((t,n)=>{let a=(t-f)/(v-f),i=(n-f)/(v-f)-a;return t===v?(a=c===e.Classic?"calc(100% - 16px)":"calc(100% - 8px)",i=0):a=100*a+"%",{startPositionForStep:a,widthForStep:i}})(vt,yt),xt=q.formatDate(vt,N),St=q.formatDate(yt,N),Mt=0!==me,jt=100-me-1/gt*100>1e-11,kt=x===n.instant,Tt=xt+(kt?"":" - "+St);return(0,a.jsx)("div",{css:st,dir:"ltr",className:(0,a.classNames)("timeline w-100",{"timeline-classic":c===e.Classic,"timeline-modern":c===e.Modern})},c===e.Classic?(0,a.jsx)(a.React.Fragment,null,(0,a.jsx)("div",{className:"timeline-header"},(0,a.jsx)("div",{className:"range-label",dir:ft?"rtl":"ltr"},(0,a.jsx)("div",{className:"range-label-badge"}),(0,a.jsx)("div",{className:"range-label-context"},Tt)),rt),(0,a.jsx)("div",{className:"timeline-content"},(0,a.jsx)("div",{className:"timeline-content-inside"},(0,a.jsx)("div",{className:"timeline-whole",ref:e=>{se.current=e},style:{width:100*gt+"%",height:W+"px",marginLeft:-me*gt+"%"}},lt,Mt&&(0,a.jsx)(o.Tooltip,{title:Z("slideBackward"),placement:"bottom"},(0,a.jsx)(o.Button,{icon:!0,type:"tertiary",size:"sm",className:"timeline-arrow left-arrow",onClick:e=>ht(!1)},(0,a.jsx)(o.Icon,{width:4,height:16,icon:Re}))),jt&&(0,a.jsx)(o.Tooltip,{title:Z("slideForward"),placement:"bottom"},(0,a.jsx)(o.Button,{icon:!0,type:"tertiary",size:"sm",className:"timeline-arrow right-arrow",onClick:e=>ht(!0)},(0,a.jsx)(o.Icon,{width:4,height:16,icon:Re})))),(0,a.jsx)("div",{className:"timeline-range-container",style:{width:100*gt+"%",marginLeft:-me*gt+"%"}},(0,a.jsx)("div",{className:"resize-handlers",ref:e=>{ze.current=e},style:{marginLeft:bt,width:kt?"fit-content":100*wt+"%"}},kt?(0,a.jsx)("button",{className:"resize-handler resize-instant",ref:e=>{Pe.current=e},title:xt,"aria-label":xt}):(0,a.jsx)(a.React.Fragment,null,(0,a.jsx)("button",{className:"resize-handler resize-left",ref:e=>{Ve.current=e},title:xt,"aria-label":xt}),(0,a.jsx)("button",{className:"resize-handler resize-right",ref:e=>{We.current=e},title:St,"aria-label":St})))))),(0,a.jsx)("div",{className:"timeline-footer"},mt,(0,a.jsx)("div",{className:"play-container"},ut,ct,dt),M?pt:(0,a.jsx)("div",null))):(0,a.jsx)(a.React.Fragment,null,(0,a.jsx)("div",{className:(0,a.classNames)("timeline-header",{"no-play-container":!M})},mt,(0,a.jsx)("div",{className:"range-label",dir:ft?"rtl":"ltr"},(0,a.jsx)("div",{className:"range-label-badge"}),Tt),rt),(0,a.jsx)("div",{className:"timeline-content"},(0,a.jsx)("div",{className:"timeline-left"},(0,a.jsx)("div",{className:"play-container"},dt,ut)),(0,a.jsx)("div",{className:"timeline-middle"},Mt&&(0,a.jsx)(o.Tooltip,{title:Z("slideBackward"),placement:"bottom"},(0,a.jsx)(o.Button,{icon:!0,type:"tertiary",size:"sm",className:(0,a.classNames)("timeline-arrow left-arrow",{"no-play-container":!M}),onClick:e=>ht(!1)},(0,a.jsx)(o.Icon,{width:4,height:16,icon:Re}))),(0,a.jsx)("div",{className:"timeline-content-inside"},(0,a.jsx)("div",{className:"timeline-whole",ref:e=>{se.current=e},style:{width:100*gt+"%",height:W+"px",marginLeft:-me*gt+"%"}},(0,a.jsx)("div",{style:{height:W-32+"px"}}),lt,(0,a.jsx)("div",{className:"timeline-range-container",style:{height:W+"px",marginTop:-(W-32)+"px"}},(0,a.jsx)("div",{className:"resize-handlers",ref:e=>{ze.current=e},style:{marginLeft:bt,width:kt?"fit-content":100*wt+"%"}},kt?(0,a.jsx)("button",{className:"resize-handler resize-instant",ref:e=>{Pe.current=e},title:xt,"aria-label":xt}):(0,a.jsx)(a.React.Fragment,null,(0,a.jsx)("button",{className:"resize-handler resize-left "+(vt===yt?"show-bg":""),ref:e=>{Ve.current=e},title:xt,"aria-label":xt}),(0,a.jsx)("button",{className:"resize-handler resize-right "+(vt===yt?"show-bg":""),ref:e=>{We.current=e},title:St,"aria-label":St})))))),jt&&(0,a.jsx)(o.Tooltip,{title:Z("slideForward"),placement:"bottom"},(0,a.jsx)(o.Button,{icon:!0,type:"tertiary",size:"sm",className:(0,a.classNames)("timeline-arrow right-arrow",{"no-play-container":!M}),onClick:e=>ht(!0)},(0,a.jsx)(o.Icon,{width:4,height:16,icon:Re})))),(0,a.jsx)("div",{className:"timeline-right"},(0,a.jsx)("div",{className:"play-container"},M&&pt,ct)))))};class Ne extends a.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.11.0",description:"",upgrader:e=>{let t=e;if(!t.honorTimeSettings)if(t.timeSettings){const{stepLength:e,dividedCount:n}=t.timeSettings;t=e?t.setIn(["timeSettings","stepLength","val"],Math.round(e.val)):t.setIn(["timeSettings","dividedCount"],Math.round(n))}else t=t.set("honorTimeSettings",!0);return t}},{version:"1.12.0",description:"",upgrader:e=>{let n=e;return n=n.without("speed"),!n.honorTimeSettings&&n.timeSettings&&(n=n.setIn(["timeSettings","speed"],t.Medium)),n}}]}}const Ie=new Ne;class Le extends a.React.PureComponent{constructor(){super(...arguments),this.onDataSourceCreated=e=>{this.props.onCreateDataSourceCreatedOrFailed(this.props.useDataSource.dataSourceId,e)},this.onCreateDataSourceFailed=()=>{this.props.onCreateDataSourceCreatedOrFailed(this.props.useDataSource.dataSourceId,null)},this.onDataSourceInfoChange=e=>{this.props.onIsDataSourceNotReady(this.props.useDataSource.dataSourceId,null==e?void 0:e.status)}}componentWillUnmount(){this.props.onCreateDataSourceCreatedOrFailed(this.props.useDataSource.dataSourceId,null,!0),this.props.onIsDataSourceNotReady(this.props.useDataSource.dataSourceId,a.DataSourceStatus.NotReady)}render(){const{useDataSource:e}=this.props;return(0,a.jsx)(a.DataSourceComponent,{useDataSource:e,onDataSourceCreated:this.onDataSourceCreated,onCreateDataSourceFailed:this.onCreateDataSourceFailed,onDataSourceInfoChange:this.onDataSourceInfoChange})}}var ze=function(e,t,n,a){return new(n||(n=Promise))((function(i,o){function l(e){try{r(a.next(e))}catch(e){o(e)}}function s(e){try{r(a.throw(e))}catch(e){o(e)}}function r(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,s)}r((a=a.apply(e,t||[])).next())}))};const Pe=Object.assign({},J,a.defaultMessages,o.defaultMessages),Ve=s(10307),We="156px",Ae=e=>{var t,l,s,r,c,m;const{useMapWidgetIds:g,useDataSources:f,theme:x,id:S,config:M,intl:j,autoWidth:k,autoHeight:T,controllerWidgetId:D,offPanel:R}=e,{addSourceByData:O=!0,enablePlayControl:E,applyFilteringByDefault:C=!0,autoPlay:N,enableDisplayAccuracy:I=!1,displayAccuracy:L,timeSettings:z,honorTimeSettings:P,dataSourceType:V,timeStyle:W,foregroundColor:A,backgroundColor:F,sliderColor:$}=M,B=O?null:g,U=D&&R,{speed:H}=z||{},[Y,_]=a.React.useState(null),[G,J]=a.React.useState(C),[X,K]=a.React.useState(H),[q,Q]=a.React.useState(null),Z=a.React.useRef(null),[ee,te]=a.React.useState(!1),[ne,ae]=a.React.useState(null),[ie,oe]=a.React.useState(null),[le,se]=a.React.useState(null),[re,ce]=a.React.useState([]),[ue,de]=a.React.useState(!0),[me,pe]=a.React.useState(null),[he,ge]=a.React.useState(null),fe=a.React.useRef(null),ve=a.ReactRedux.useSelector((e=>{var t,n;return(null===(n=null===(t=e.appConfig.attributes)||void 0===t?void 0:t.timezone)||void 0===n?void 0:n.type)===a.TimezoneConfig.Data})),ye=a.React.useMemo((()=>i.MapViewManager.getInstance()),[]),be=a.React.useMemo((()=>a.DataSourceManager.getInstance()),[]),we=a.React.useMemo((()=>{if(re.length)return!1;const e=Object.keys(le||{}).sort();let t;if(null==B?void 0:B.length)t=!0;else{const n=(f||(0,a.Immutable)([])).map((e=>e.dataSourceId)).asMutable({deep:!0});t=a.utils.diffArrays(!0,e,n).isEqual}return t}),[B,le,f,re]);a.React.useEffect((()=>{var e;return pe(U?480:null===(e=fe.current)||void 0===e?void 0:e.clientWidth),(0,i.loadArcGISJSAPIModules)(["esri/core/reactiveUtils"]).then((e=>{oe(e[0])})),()=>{Se(null,null,!0)}}),[]),a.React.useEffect((()=>{se(null),ae(null),ge(null)}),[V]),a.React.useEffect((()=>{J(C)}),[C]),a.React.useEffect((()=>{if(w(V))te(!1),ae(f);else if((null==B?void 0:B.length)>0)if(Z.current){const e={},t={dataSourceId:Z.current,mainDataSourceId:Z.current};be.createDataSourceByUseDataSource((0,a.Immutable)(t)).then((t=>ze(void 0,void 0,void 0,(function*(){if(Z.current&&q){const n=[];Object.keys(q).forEach((e=>{n.push(q[e].createLayerDataSource())})),yield Promise.all(n),e[t.id]=t,se(e),te(0===Object.keys(q).length)}}))))}else""===Z.current?(te(!0),se(null)):(te(!1),se(null));else if((null==f?void 0:f.length)>0){te(!1);const e=[];f.forEach((t=>{e.push(be.createDataSourceByUseDataSource((0,a.Immutable)(t)).then((e=>e.isDataSourceSet()&&!e.areChildDataSourcesCreated()?e.childDataSourcesReady().then((()=>e)):e)))})),Promise.all(e).then((e=>{const t={};e.forEach((e=>{t[e.id]=e})),se(t)}))}}),[B,Z,q,f,be,V,ae,se]),a.React.useEffect((()=>{if(le&&ie&&we)if(P){const e=function(e,t=!1){var i,o,l;let s=null;const r=e[Object.keys(e).filter((t=>e[t].type===a.DataSourceTypes.WebMap))[0]],c=null===(l=null===(o=null===(i=null==r?void 0:r.getItemData())||void 0===i?void 0:i.widgets)||void 0===o?void 0:o.timeSlider)||void 0===l?void 0:l.properties;if(c){const{startTime:e,endTime:a,timeStopInterval:i,numberOfStops:o,thumbMovingRate:l,thumbCount:r}=c;let u=e,m=a;if(t){const t=y(e,a,!0);u=t.startTime,m=t.endTime}if(s={speed:p(l),layerList:null,startTime:{value:u},endTime:{value:m},timeDisplayStrategy:2===r?n.current:n.cumulatively},i){const e=function(e){switch(e){case"esriTimeUnitsMonths":return"month";case"esriTimeUnitsDays":return"day";case"esriTimeUnitsHours":return"hour";case"esriTimeUnitsMinutes":return"minute";default:return"year"}}(i.units);s.accuracy=e,s.stepLength={val:i.interval,unit:e}}else if(o){s.dividedCount=o;const e=b(u,m);s.accuracy=e[0];const t=(m-u)/o;e.some((e=>t>=1e3*d[e]&&(s.accuracy=e,!0)))}}return s}(le,!0);K(null==e?void 0:e.speed),ge(e)}else{const e=h(z,le,!0);K(H),ge(e)}}),[le,ie,P,H,z,we]);const xe=(e,t)=>{let n=null;return Object.keys(e.jimuLayerViews).forEach((a=>{e.jimuLayerViews[a].layerDataSourceId===t&&(n=e.jimuLayerViews[a])})),n},Se=a.hooks.useEventCallback(((e,t,n=!1)=>{var i;if(!le)return;const o={time:n?null:[e,t]};if(!n){const n=y(e,t);o.time=[n.startTime,n.endTime]}if(n||(()=>{let e=[],t=null;const n=[];if(null==B?void 0:B.length)q&&Object.keys(q).forEach((e=>{var t;(null===(t=q[e])||void 0===t?void 0:t.view)&&n.push(ie.whenOnce((()=>!q[e].view.updating)))}));else{const i=ye.getAllJimuMapViewIds();V===a.AllDataSourceTypes.WebMap?(t=le[Object.keys(le)[0]],e=t.getAllChildDataSources().map((e=>e.id))):e=Object.keys(le),e.forEach((e=>{var o;const l=t||(null===(o=le[e])||void 0===o?void 0:o.getRootDataSource());if((null==l?void 0:l.type)===a.AllDataSourceTypes.WebMap){const t=i.filter((e=>ye.getJimuMapViewById(e).dataSourceId===l.id));t.forEach((t=>{const a=ye.getJimuMapViewById(t),i=xe(a,e);(null==i?void 0:i.view)&&n.push(ie.whenOnce((()=>!i.view.updating)))}))}}))}Promise.all(n).then((e=>{de(!1)}))})(),V===a.AllDataSourceTypes.WebMap)if(null==B?void 0:B.length)Object.keys(q).forEach((e=>{const t=q[e].getLayerDataSource();Me(t,o,e)}));else{const e=v(le,null===(i=M.timeSettings)||void 0===i?void 0:i.layerList);Object.keys(e).forEach((t=>{Me(e[t],o,S)}))}else Object.keys(le).forEach((e=>{le[e]&&Me(le[e],o,S)}))}));a.React.useEffect((()=>{Y&&Se(Y[0],Y[1],!G)}),[Y,G,Se]);const Me=(e,t,n)=>{var i,o,l,s;e.type===a.DataSourceTypes.MapService?(null===(i=e.supportTime)||void 0===i?void 0:i.call(e))&&(t=je(e,t),null===(o=e.changeTimeExtent)||void 0===o||o.call(e,t.time,n)):w(e.type)&&(null===(l=e.supportTime)||void 0===l?void 0:l.call(e))&&(t=je(e,t),null===(s=e.updateQueryParams)||void 0===s||s.call(e,t,n))},je=(e,t)=>{const n=e.getTimeInfo().exportOptions||{},{TimeOffset:a=0,timeOffsetUnits:i}=n;if((null==t?void 0:t.time)&&0!==a){let e=t.time[0],n=t.time[1];const o=new Date(e),l=new Date(n);switch(i){case"esriTimeUnitsCenturies":case"esriTimeUnitsDecades":case"esriTimeUnitsYears":const t="esriTimeUnitsCenturies"===i?100:"esriTimeUnitsDecades"===i?10:1;e=o.setFullYear(o.getFullYear()-a*t),n=l.setFullYear(l.getFullYear()-a*t);break;case"esriTimeUnitsMonths":e=o.setMonth(o.getMonth()-a),n=l.setMonth(l.getMonth()-a);break;case"esriTimeUnitsWeeks":case"esriTimeUnitsDays":const s="esriTimeUnitsWeeks"===i?7:1;e=o.setDate(o.getDate()-a*s),n=l.setDate(l.getDate()-a*s);break;case"esriTimeUnitsHours":e=o.setHours(o.getHours()-a),n=l.setHours(l.getHours()-a);break;case"esriTimeUnitsMinutes":e=o.setMinutes(o.getMinutes()-a),n=l.setMinutes(l.getMinutes()-a);break;case"esriTimeUnitsSeconds":e=o.setSeconds(o.getSeconds()-a),n=l.setSeconds(l.getSeconds()-a);break;case"esriTimeUnitsMilliseconds":e=o.setMilliseconds(o.getMilliseconds()-a),n=l.setMilliseconds(l.getMilliseconds()-a)}t.time=[e,n]}return t},ke=({width:t,height:n})=>{var i,o,l,s;if(k){const{layoutId:n,layoutItemId:r}=e,c=(0,a.getAppStore)().getState(),u=null===(s=null===(l=null===(o=null===(i=null==c?void 0:c.appConfig)||void 0===i?void 0:i.layouts)||void 0===o?void 0:o[n])||void 0===l?void 0:l.content)||void 0===s?void 0:s[r];if(!u)return;const d=u.bbox.width;if(d.includes("px"))t=d;else{const e=`div.layout[data-layoutid=${n}]`,a=document.querySelector(e),{clientWidth:i=480}=a||{};t=i*parseInt(d.split("%")[0])/100}}pe(t)},Te=a.React.useMemo((()=>null!==le&&Object.keys(le).filter((e=>null===le[e])).length===Object.keys(le).length),[le]),De=re.length>0,Re=(e,t)=>{w(V)&&le&&le[e]&&le[e].getDataSourceJson().isOutputFromWidget&&Ee(e,t)},Oe=(e,t,n=!1)=>{w(V)&&se((i=>{const o=t||(null==i?void 0:i[e]);if((null==o?void 0:o.getDataSourceJson().isOutputFromWidget)&&Ee(e,t?o.getInfo().status:a.DataSourceStatus.Unloaded),!i&&!t&&n)return i;const l=Object.assign({},i);return(null==i?void 0:i[e])&&!t?delete l[e]:l[e]=t,l}))},Ee=(e,t)=>{ce((n=>{let i=[];return i=t===a.DataSourceStatus.NotReady?n.includes(e)?n:n.concat(e):n.includes(e)?n.filter((t=>t!==e)):n,i}))},Ne=e=>{(null==e?void 0:e.view)&&e.dataSourceId?(Z.current=e.dataSourceId,Ie(e.id).then((e=>{Q(e)}))):(Z.current="",Q(null))},Ie=e=>ze(void 0,void 0,void 0,(function*(){const t=i.MapViewManager.getInstance().getJimuMapViewById(e),n=yield t.whenAllJimuLayerViewLoaded(),a={};return Object.keys(n).forEach((e=>{"sublayer"!==n[e].layer.type&&n[e].supportTime()&&(a[e]=n[e])})),a})),Ae=e=>j.formatMessage({id:e,defaultMessage:Pe[e]}),Fe=()=>(0,a.jsx)(o.WidgetPlaceholder,{className:"timeline-placeholder",icon:Ve,widgetId:S,css:a.css`
          width: ${U?"480px":"inherit"};
          height: ${T||U?We:"100%"};
        `,message:Ae("_widgetLabel")}),$e=a.React.useMemo((()=>function(e){const t={second:"2-digit",minute:"2-digit",hour:"2-digit",day:"numeric",month:"numeric",year:"numeric"},n={};return u.some((a=>(n[a]=t[a],a===e))),n}(I?L:"second")),[I,L]),Be=le&&V===a.AllDataSourceTypes.WebMap&&ie&&null===he,Ue=(null===(t=null==he?void 0:he.startTime)||void 0===t?void 0:t.value)>(null===(l=null==he?void 0:he.endTime)||void 0===l?void 0:l.value),He=Te||De||ee||Be||Ue||ve;return!O&&0===(B||[]).length||O&&(!f||0===f.length)||!De&&he&&(null===(s=null==he?void 0:he.startTime)||void 0===s?void 0:s.value)===(null===(r=null==he?void 0:he.endTime)||void 0===r?void 0:r.value)?Fe():(0,a.jsx)(a.React.Fragment,null,(null==B?void 0:B.length)>0&&(0,a.jsx)(i.JimuMapViewComponent,{useMapWidgetId:B[0],onActiveViewChange:Ne}),(null==ne?void 0:ne.length)>0&&(null==ne?void 0:ne.map((e=>(0,a.jsx)(Le,{key:e.dataSourceId,useDataSource:e,onIsDataSourceNotReady:Re,onCreateDataSourceCreatedOrFailed:Oe})))),He?(()=>{let e="";return e=Te?"dataSourceCreateError":De?"outputDatasAreNotGenerated":ee?"noSupportedLayersInMapWidget":Be?"noTlFromHonoredMapWarning":ve?"timezoneWarning":"invalidTimeSpanWarning",(0,a.jsx)("div",{className:"placeholder-container w-100 h-100 position-relative"},Fe(),(0,a.jsx)(o.Alert,{form:"tooltip",size:"small",type:"warning",withIcon:!0,className:"position-absolute",style:{bottom:10,right:10},text:Ae(e)}))})():O||null!==le?(0,a.jsx)("div",{className:"timeline-widget",css:a.css`
                    width: ${U||k?me+"px":"unset"};
                    height: ${U||T&&!le?We:"unset"};
                    background: ${F||x.ref.palette.white};
                  `,ref:e=>{fe.current=e}},!U&&(0,a.jsx)(a.ReactResizeDetector,{targetRef:fe,handleWidth:!0,onResize:ke}),null!==le&&we?he&&me>=0&&(0,a.jsx)(Ce,{theme:x,width:me,updating:!!le&&Object.keys(le).filter((e=>{var t;return(null===(t=le[e])||void 0===t?void 0:t.getInfo().status)===a.DataSourceStatus.Loading})).length>0||ue,startTime:null===(c=he.startTime)||void 0===c?void 0:c.value,endTime:null===(m=he.endTime)||void 0===m?void 0:m.value,accuracy:he.accuracy,stepLength:he.stepLength,dividedCount:he.dividedCount,displayStrategy:he.timeDisplayStrategy,timeStyle:W,foregroundColor:A,backgroundColor:F,sliderColor:$,enablePlayControl:E,speed:X,autoPlay:N,dateTimePattern:$e,applied:G,onTimeChanged:(e,t)=>{_([e,t])},onApplyStateChanged:e=>{J(e)}}):(0,a.jsx)("div",{className:"jimu-secondary-loading",css:a.css`position: 'absolute';left: '50%';top: '50%';`})):Fe())};Ae.versionManager=Ie;const Fe=Ae;function $e(e){s.p=e}})(),r})())}}}));