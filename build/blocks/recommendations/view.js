!function(){"use strict";var e={20:function(e,r,n){var t=n(609),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,n){var t,a={},u=null,c=null;for(t in void 0!==n&&(u=""+n),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(c=r.ref),r)i.call(r,t)&&!l.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===a[t]&&(a[t]=r[t]);return{$$typeof:o,type:e,key:u,ref:c,props:a,_owner:s.current}}r.Fragment=a,r.jsx=u,r.jsxs=u},848:function(e,r,n){e.exports=n(20)},609:function(e){e.exports=window.React}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={exports:{}};return e[t](a,a.exports,n),a.exports}n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,{a:r}),r},n.d=function(e,r){for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},function(){var e,r,t=n(848),o=n(609),a=window.wp.domReady,i=n.n(a),s=window.wp.element,l=window.wp.i18n;(r=e||(e={}))[r.Error=0]="Error",r[r.Loaded=1]="Loaded",r[r.Recommendations=2]="Recommendations";var u=function(){return u=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},u.apply(this,arguments)},c=(0,s.createContext)({}),d=function(r,n){switch(n.type){case e.Error:return u(u({},r),{isLoaded:!0,error:n.error,recommendations:[]});case e.Loaded:return u(u({},r),{isLoaded:!0});case e.Recommendations:var t=n.recommendations;if(!Array.isArray(t))return u(u({},r),{recommendations:[]});var o=t.map((function(e){return{title:e.title,url:e.url,image_url:e.image_url,thumb_url_medium:e.thumb_url_medium}}));return u(u({},r),{isLoaded:!0,error:null,recommendations:o});default:return u({},r)}},m=function(e){var r,n,o,a,i={isLoaded:!1,recommendations:[],uuid:null!==(o=null===(n=null===(r=window.PARSELY)||void 0===r?void 0:r.config)||void 0===n?void 0:n.uuid)&&void 0!==o?o:null,clientId:null!==(a=null==e?void 0:e.clientId)&&void 0!==a?a:null,error:null},l=(0,s.useReducer)(d,i),m=l[0],p=l[1];return(0,s.useMemo)((function(){return(0,t.jsx)(c.Provider,u({value:{state:m,dispatch:p}},e))}),[e,m])},p=function(){return(0,s.useContext)(c)},f=window.wp.apiFetch,y=n.n(f),w=window.wp.compose,h=window.wp.url,v=function(){return v=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},v.apply(this,arguments)},_=function(r){var n=r.limit,t=r.sort,o=r.isEditMode,a=p().dispatch,i=(0,s.useMemo)((function(){return{limit:n,sort:t,url:window.location.href,itm_source:"wp-parsely-recommendations-block"}}),[n,t]),l=(0,s.useCallback)((function(){return r=void 0,n=void 0,s=function(){var r,n,t,s,l;return function(e,r){var n,t,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(s){return function(l){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(i=0)),i;)try{if(n=1,t&&(o=2&s[0]?t.return:s[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,s[1])).done)return o;switch(t=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,t=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=r.call(e,i)}catch(e){s=[6,e],t=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}(this,(function(u){switch(u.label){case 0:return u.trys.push([0,2,,3]),[4,y()({path:(0,h.addQueryArgs)("/wp-parsely/v1/related",{query:i})})];case 1:return r=u.sent(),[3,3];case 2:return t=u.sent(),n=t,[3,3];case 3:return(null==r?void 0:r.error)&&(n=r.error),n?(a(function(r){var n=r.error;return{type:e.Error,error:n}}({error:n})),[2]):(s=null!==(l=null==r?void 0:r.data)&&void 0!==l?l:[],o&&(s=s.map((function(e){return v(v({},e),{url:"#"})}))),a(function(r){var n=r.recommendations;return{type:e.Recommendations,recommendations:n}}({recommendations:s})),[2])}}))},new((t=void 0)||(t=Promise))((function(e,o){function a(e){try{l(s.next(e))}catch(e){o(e)}}function i(e){try{l(s.throw(e))}catch(e){o(e)}}function l(r){var n;r.done?e(r.value):(n=r.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,i)}l((s=s.apply(r,n||[])).next())}));var r,n,t,s}),[i,a,o]),u=(0,w.useDebounce)(l,300);return(0,s.useEffect)((function(){u()}),[i,u]),null},b=window.wp.components,g=function(){return g=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},g.apply(this,arguments)},x=function(e,r,n){return"original"===e?r:n},j=function(e){return!0===Boolean(e)?{target:"_blank",rel:"noopener"}:{target:"_self",rel:""}},O=function(e){var r=e.imageAlt,n=e.imagestyle,o=e.openlinksinnewtab,a=e.recommendation,i=a.title,s=a.url,l=a.image_url,u=a.thumb_url_medium,c=e.showimages;return(0,t.jsx)("li",{children:(0,t.jsx)("a",g({href:s,className:"parsely-recommendations-link"},j(o),{children:(0,t.jsxs)(b.Card,{className:"parsely-recommendations-card",children:[c&&(0,t.jsx)(b.CardMedia,{className:"parsely-recommendations-cardmedia",children:(0,t.jsx)("img",{className:"parsely-recommendations-image",src:x(n,l,u),alt:r})}),(0,t.jsx)(b.CardBody,{className:"parsely-recommendations-cardbody",children:i})]})}))})},E=function(e){var r=e.imagestyle,n=e.recommendations,o=e.showimages,a=e.openlinksinnewtab;return(0,t.jsx)("ul",{className:"parsely-recommendations-list",children:n.map((function(e){return(0,t.jsx)(O,{imageAlt:(0,l.__)("Image for link","wp-parsely"),imagestyle:r,openlinksinnewtab:a,recommendation:e,showimages:o},e.url+" "+e.title)}))})},k=function(e){var r=e.title;return r?(0,t.jsx)("p",{className:"parsely-recommendations-list-title",children:r}):(0,t.jsx)(t.Fragment,{})};function P(e){var r,n,o=e.imagestyle,a=e.isEditMode,i=e.limit,s=e.openlinksinnewtab,u=e.showimages,c=e.sort,d=e.title,m=p().state,f=m.error,y=m.isLoaded,w=m.recommendations;return y&&a&&(f?((n="".concat((0,l.__)("Error:","wp-parsely")," ").concat(JSON.stringify(f))).includes('"errors":{"http_request_failed"')||"object"==typeof f&&"fetch_error"===(null==f?void 0:f.code)?n=(0,l.__)("The Parse.ly Recommendations API is not accessible. You may be offline.","wp-parsely"):n.includes('Error: {"code":403,"message":"Forbidden","data":null}')?n=(0,l.__)("Access denied. Please verify that your Site ID is valid.","wp-parsely"):"object"==typeof f&&"rest_no_route"===(null==f?void 0:f.code)&&(n=(0,l.__)("The REST route is unavailable. To use it, wp_parsely_enable_related_api_proxy should be true.","wp-parsely")),r=n):Array.isArray(w)&&!(null==w?void 0:w.length)&&(r=(0,l.__)("No recommendations found.","wp-parsely"))),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(_,{limit:i,sort:c,isEditMode:a}),!y&&(0,t.jsx)("span",{className:"parsely-recommendations-loading",children:(0,l.__)("Loading…","wp-parsely")}),r&&(0,t.jsx)("span",{className:"parsely-recommendations-error",children:r}),y&&!!(null==w?void 0:w.length)&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(k,{title:d}),(0,t.jsx)(E,{imagestyle:o,openlinksinnewtab:s,recommendations:w,showimages:u})]})]})}var R=function(){return R=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},R.apply(this,arguments)};i()((function(){document.querySelectorAll(".wp-block-wp-parsely-recommendations").forEach((function(e){return(0,s.render)((0,t.jsx)(m,{children:(0,o.createElement)(P,R({},e.dataset,{key:e.id}))}),e)}))}))}()}();