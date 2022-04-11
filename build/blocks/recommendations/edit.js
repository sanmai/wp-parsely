!function(){"use strict";var e,t={392:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}var l=window.wp.element,o=window.wp.i18n,i=window.wp.blocks,s=window.wp.blockEditor;function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}function p(e,t,r,n,a,l,o){try{var i=e[l](o),s=i.value}catch(e){return void r(e)}i.done?t(s):Promise.resolve(s).then(n,a)}function m(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var l=e.apply(t,r);function o(e){p(l,n,a,o,i,"next",e)}function i(e){p(l,n,a,o,i,"throw",e)}o(void 0)}))}}var f=window.regeneratorRuntime,d=r.n(f),y=window.wp.apiFetch,w=r.n(y),g=window.wp.compose,v=window.wp.url,b="RECOMMENDATIONS_BLOCK_ERROR",_="RECOMMENDATIONS_BLOCK_RECOMMENDATIONS",h=function(e){var t=e.error;return{type:b,error:t}},O=function(e){var t=e.recommendations;return{type:_,recommendations:t}};function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=(0,l.createContext)(),C=function(e,t){switch(t.type){case b:return P(P({},e),{},{isLoaded:!0,error:t.error,recommendations:void 0});case"RECOMMENDATIONS_BLOCK_LOADED":return P(P({},e),{},{isLoaded:!0});case _:var r=t.recommendations;if(!Array.isArray(r))return P(P({},e),{},{recommendations:void 0});var n=r.map((function(e){return{title:e.title,url:e.url,image_url:e.image_url,thumb_url_medium:e.thumb_url_medium}}));return P(P({},e),{},{isLoaded:!0,error:void 0,recommendations:n});default:return P({},e)}},A=function(){return(0,l.useContext)(j)},k=function(e){var t,r,n,o,i={isLoaded:!1,recommendations:void 0,uuid:null===(t=window.PARSELY)||void 0===t||null===(r=t.config)||void 0===r?void 0:r.uuid,clientId:e.clientId},s=(n=(0,l.useReducer)(C,i),o=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l=[],_n=!0,o=!1;try{for(r=r.call(e);!(_n=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);_n=!0);}catch(e){o=!0,a=e}finally{try{_n||null==r.return||r.return()}finally{if(o)throw a}}return l}}(n,o)||u(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=s[0],p=s[1];return(0,l.createElement)(j.Provider,a({value:{state:c,dispatch:p}},e))};function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var M=function(e){var t=e.boost,r=e.limit,n=e.sort,a=e.isEditMode,o=A().dispatch,i={boost:t,limit:r,sort:n,url:window.location.href};function s(){return p.apply(this,arguments)}function p(){return(p=m(d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w()({path:(0,v.addQueryArgs)("/wp-parsely/v1/related",{query:i})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=m(d().mark((function e(){var t,r,n,l,i;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s();case 3:n=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),l=e.t0;case 9:if(null!==(t=n)&&void 0!==t&&t.error&&(l=n.error),!l){e.next=13;break}return o(h({error:n.error})),e.abrupt("return");case 13:i=(null===(r=n)||void 0===r?void 0:r.data)||[],a&&(i=i.map((function(e){return R(R({},e),{},{url:"#"})}))),o(O({recommendations:i}));case 16:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}var y,b=function(e){if(Array.isArray(e))return c(e)}(y=Object.values(i))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(y)||u(y)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),_=(0,l.useCallback)((function(){return f.apply(this,arguments)}),b),E=(0,g.useDebounce)(_,300);return(0,l.useEffect)(E,b),null},N=window.wp.components,D=function(e){var t,r=e.imageAlt,n=e.imagestyle,a=e.recommendation,o=a.title,i=a.url,s=a.image_url,c=a.thumb_url_medium,u=e.showimages&&(t={imagestyle:n,imageUrl:s,thumbUrlMedium:c},"original"===t.imagestyle?t.imageUrl:t.thumbUrlMedium);return(0,l.createElement)("li",null,(0,l.createElement)("a",{href:i,className:"parsely-recommendations-link"},(0,l.createElement)(N.Card,{className:"parsely-recommendations-card",size:"custom"},u&&(0,l.createElement)(N.CardMedia,{className:"parsely-recommendations-cardmedia"},(0,l.createElement)("img",{className:"parsely-recommendations-image",src:u,alt:r})),(0,l.createElement)(N.CardBody,{className:"parsely-recommendations-cardbody"},o))))},x=function(e){var t=e.imagestyle,r=e.recommendations,n=e.showimages;return(0,l.createElement)("ul",{className:"parsely-recommendations-list"},r.map((function(e,r){return(0,l.createElement)(D,{imagestyle:t,imageAlt:(0,o.__)("Image for link","wp-parsely"),key:r,recommendation:e,showimages:n})})))},I=function(e){var t=e.title;return t?(0,l.createElement)("p",{className:"parsely-recommendations-list-title"},t):(0,l.createElement)(l.Fragment,null)};function T(e){var t,r=e.boost,n=e.limit,a=e.imagestyle,i=e.isEditMode,s=e.personalized,c=e.showimages,u=e.sort,p=e.title,m=A().state,f=m.error,d=m.isLoaded,y=m.recommendations;return d&&i&&(f?t=(0,o.__)("Parse.ly API replied with error: ","wp-parsely")+JSON.stringify(f):!Array.isArray(y)||null!=y&&y.length||(t=(0,o.__)("No recommendations found.","wp-parsely"))),(0,l.createElement)(l.Fragment,null,(0,l.createElement)(M,{boost:r,limit:n,personalized:s,sort:u,isEditMode:i}),!d&&(0,l.createElement)("span",{className:"parsely-recommendations-loading"},(0,o.__)("Loading…","wp-parsely")),t&&(0,l.createElement)("span",null,t),d&&!(null==y||!y.length)&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)(I,{title:p}),(0,l.createElement)(x,{imagestyle:a,recommendations:y,showimages:c})))}var L,B,U=function(e){var t=e.attributes,r=t.boost,n=t.imagestyle,a=t.limit,i=t.showimages,c=t.sort,u=t.tag,p=t.title,m=e.setAttributes;return(0,l.createElement)(s.InspectorControls,null,(0,l.createElement)(N.PanelBody,{title:"Settings",initialOpen:!0},(0,l.createElement)(N.PanelRow,null,(0,l.createElement)(N.TextControl,{label:(0,o.__)("Title","wp-parsely"),value:p,onChange:function(e){return m({title:e})}})),(0,l.createElement)(N.PanelRow,null,(0,l.createElement)(N.RangeControl,{label:(0,o.__)("Maximum Results","wp-parsely"),min:"1",max:"25",onChange:function(e){return m({limit:e})},value:a})),(0,l.createElement)(N.PanelRow,null,(0,l.createElement)(N.ToggleControl,{label:(0,o.__)("Show Images","wp-parsely"),help:i?(0,o.__)("Showing images","wp-parsely"):(0,o.__)("Not showing images","wp-parsely"),checked:i,onChange:function(){return m({showimages:!i})}})),i&&(0,l.createElement)(N.PanelRow,null,(0,l.createElement)(N.RadioControl,{label:(0,o.__)("Image style","wp-parsely"),selected:n,options:[{label:(0,o.__)("Original image","wp-parsely"),value:"original"},{label:(0,o.__)("Thumbnail from Parse.ly","wp-parsely"),value:"thumbnail"}],onChange:function(e){return m({imagestyle:"original"===e?"original":"thumbnail"})}})),(0,l.createElement)(N.PanelRow,null,(0,l.createElement)(N.TextControl,{label:(0,o.__)("Tag","wp-parsely"),value:u,onChange:function(e){return m({tag:e})}})),(0,l.createElement)(N.PanelRow,null,(0,l.createElement)(N.SelectControl,{label:(0,o.__)("Sort Recommendations","wp-parsely"),value:c,options:[{label:(0,o.__)("Score","wp-parsely"),value:"score"},{label:(0,o.__)("Publication Date","wp-parsely"),value:"pub_date"}],onChange:function(e){return m({sort:e})}})),(0,l.createElement)(N.PanelRow,null,(0,l.createElement)(N.SelectControl,{label:(0,o.__)("Boost","wp-parsely"),value:r,options:[{label:(0,o.__)("Page views","wp-parsely"),value:"views"},{label:(0,o.__)("Page views on mobile devices","wp-parsely"),value:"mobile_views"},{label:(0,o.__)("Page views on tablet devices","wp-parsely"),value:"tablet_views"},{label:(0,o.__)("Page views on desktop devices","wp-parsely"),value:"desktop_views"},{label:(0,o.__)("Unique page visitors","wp-parsely"),value:"visitors"},{label:(0,o.__)("New visitors","wp-parsely"),value:"visitors_new"},{label:(0,o.__)("Returning visitors","wp-parsely"),value:"visitors_returning"},{label:(0,o.__)("Total engagement time in minutes","wp-parsely"),value:"engaged_minutes"},{label:(0,o.__)("Engaged minutes spent by total visitors","wp-parsely"),value:"avg_engaged"},{label:(0,o.__)("Average engaged minutes spent by new visitors","wp-parsely"),value:"avg_engaged_new"},{label:(0,o.__)("Average engaged minutes spent by returning visitors","wp-parsely"),value:"avg_engaged_returning"},{label:(0,o.__)("Total social interactions","wp-parsely"),value:"social_interactions"},{label:(0,o.__)("Count of Facebook shares, likes, and comments","wp-parsely"),value:"fb_interactions"},{label:(0,o.__)("Count of Twitter tweets and retweets","wp-parsely"),value:"tw_interactions"},{label:(0,o.__)("Count of Pinterest pins","wp-parsely"),value:"pi_interactions"},{label:(0,o.__)("Page views where the referrer was any social network","wp-parsely"),value:"social_referrals"},{label:(0,o.__)("Page views where the referrer was facebook.com","wp-parsely"),value:"fb_referrals"},{label:(0,o.__)("Page views where the referrer was twitter.com","wp-parsely"),value:"tw_referrals"},{label:(0,o.__)("Page views where the referrer was pinterest.com","wp-parsely"),value:"pi_referrals"}],onChange:function(e){return m({boost:e})}}))))},F=window.React;function z(){return z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},z.apply(this,arguments)}var K=JSON.parse('{"u2":"wp-parsely/recommendations","Y4":{"boost":{"type":"string","default":"views"},"imagestyle":{"type":"string","default":"original"},"limit":{"type":"number","default":3},"showimages":{"type":"boolean","default":true},"sort":{"type":"string","default":"score"},"tag":{"type":"string"},"title":{"type":"string","default":"Related Content"}}}');function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var J=K.u2,Q=K.Y4;(0,i.registerBlockType)(J,{apiVersion:2,icon:function(e){return F.createElement("svg",z({id:"parsely-logo_svg__Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 60 65"},e),L||(L=F.createElement("defs",null,F.createElement("style",null,".parsely-logo_svg__cls-1{fill:#5ba745}"))),B||(B=F.createElement("path",{className:"parsely-logo_svg__cls-1",d:"M23.72 51.53c0-.18 0-.34-.06-.52a13.11 13.11 0 0 0-2.1-5.53A14.74 14.74 0 0 0 19.12 43c-.27-.21-.5-.11-.51.22l-.24 3.42c0 .33-.38.35-.49 0l-1.5-4.8a1.4 1.4 0 0 0-.77-.78 23.91 23.91 0 0 0-3.1-.84c-1.38-.24-3.39-.39-3.39-.39-.34 0-.45.21-.25.49l2.06 3.76c.2.27 0 .54-.29.33l-4.51-3.6a3.68 3.68 0 0 0-2.86-.48c-1 .16-2.44.46-2.44.46a.68.68 0 0 0-.39.25.73.73 0 0 0-.14.45S.41 43 .54 44a3.63 3.63 0 0 0 1.25 2.62L6.48 50c.28.2.09.49-.23.37l-4.18-.94c-.32-.12-.5 0-.4.37 0 0 .69 1.89 1.31 3.16a24 24 0 0 0 1.66 2.74 1.34 1.34 0 0 0 1 .52l5 .13c.33 0 .41.38.1.48L7.51 58c-.31.1-.34.35-.07.55a14.29 14.29 0 0 0 3.05 1.66 13.09 13.09 0 0 0 5.9.5 25.13 25.13 0 0 0 4.34-1 9.55 9.55 0 0 1-.08-1.2 9.32 9.32 0 0 1 3.07-6.91M59.7 41.53a.73.73 0 0 0-.14-.45.68.68 0 0 0-.39-.25s-1.43-.3-2.44-.46a3.64 3.64 0 0 0-2.86.48l-4.51 3.6c-.26.21-.49-.06-.29-.33l2.06-3.76c.2-.28.09-.49-.25-.49 0 0-2 .15-3.39.39a23.91 23.91 0 0 0-3.1.84 1.4 1.4 0 0 0-.77.78l-1.5 4.8c-.11.32-.48.3-.49 0l-.24-3.42c0-.33-.24-.43-.51-.22a14.74 14.74 0 0 0-2.44 2.47 13.11 13.11 0 0 0-2.1 5.49c0 .18 0 .34-.06.52a9.26 9.26 0 0 1 3 8.1 24.1 24.1 0 0 0 4.34 1 13.09 13.09 0 0 0 5.9-.5 14.29 14.29 0 0 0 3.05-1.66c.27-.2.24-.45-.07-.55l-3.22-1.17c-.31-.1-.23-.47.1-.48l5-.13a1.38 1.38 0 0 0 1-.52A24.6 24.6 0 0 0 57 52.92c.61-1.27 1.31-3.16 1.31-3.16.1-.33-.08-.49-.4-.37l-4.18.94c-.32.12-.51-.17-.23-.37l4.69-3.34A3.63 3.63 0 0 0 59.46 44c.13-1 .24-2.47.24-2.47M46.5 25.61c0-.53-.35-.72-.8-.43l-4.86 2.66c-.45.28-.56-.27-.23-.69l4.66-6.23a2 2 0 0 0 .28-1.68 36.51 36.51 0 0 0-2.19-4.89 34 34 0 0 0-2.81-3.94c-.33-.41-.74-.35-.91.16l-2.28 5.68c-.16.5-.6.48-.59-.05l.28-8.93a2.54 2.54 0 0 0-.66-1.64S35 4.27 33.88 3.27 30.78.69 30.78.69a1.29 1.29 0 0 0-1.54 0s-1.88 1.49-3.12 2.59-2.48 2.35-2.48 2.35A2.5 2.5 0 0 0 23 7.27l.27 8.93c0 .53-.41.55-.58.05l-2.29-5.69c-.17-.5-.57-.56-.91-.14a35.77 35.77 0 0 0-3 4.2 35.55 35.55 0 0 0-2 4.62 2 2 0 0 0 .27 1.67l4.67 6.24c.33.42.23 1-.22.69l-4.87-2.66c-.45-.29-.82-.1-.82.43a18.6 18.6 0 0 0 .83 5.07 20.16 20.16 0 0 0 5.37 7.77c3.19 3 5.93 7.8 7.45 11.08a9.6 9.6 0 0 1 2.83-.44 9.31 9.31 0 0 1 2.86.45c1.52-3.28 4.26-8.11 7.44-11.09a20.46 20.46 0 0 0 5.09-7 19 19 0 0 0 1.11-5.82M36.12 58.44A6.12 6.12 0 1 1 30 52.32a6.11 6.11 0 0 1 6.12 6.12"})))},category:"widgets",edit:function(e){return(0,l.createElement)("div",(0,s.useBlockProps)(),(0,l.createElement)(k,{clientId:e.clientId},(0,l.createElement)(U,e),(0,l.createElement)(T,a({},e.attributes,{isEditMode:"true"}))))},attributes:q(q({},Q),{},{title:{type:"string",default:(0,o.__)("Related Content","wp-parsely")}}),transforms:{from:[{type:"block",blocks:["core/legacy-widget"],isMatch:function(e){var t=e.idBase,r=e.instance;return!(null==r||!r.raw)&&"Parsely_Recommended_Widget"===t},transform:function(e){var t=e.instance;return(0,i.createBlock)("wp-parsely/recommendations",{name:t.raw.name})}}]}})}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,n),l.exports}n.m=t,e=[],n.O=function(t,r,a,l){if(!r){var o=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],l=e[u][2];for(var i=!0,s=0;s<r.length;s++)(!1&l||o>=l)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(i=!1,l<o&&(o=l));if(i){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[r,a,l]},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={878:0,570:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,l,o=r[0],i=r[1],s=r[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(s)var u=s(n)}for(t&&t(r);c<o.length;c++)l=o[c],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(u)},r=self.webpackChunkwp_parsely=self.webpackChunkwp_parsely||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var a=n.O(void 0,[570],(function(){return n(392)}));a=n.O(a)}();