!function(){"use strict";var e={418:function(e){var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function s(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var o,i,c=s(e),l=1;l<arguments.length;l++){for(var u in o=Object(arguments[l]))r.call(o,u)&&(c[u]=o[u]);if(t){i=t(o);for(var p=0;p<i.length;p++)n.call(o,i[p])&&(c[i[p]]=o[i[p]])}}return c}},251:function(e,t,r){r(418);var n=r(196),s=60103;if("function"==typeof Symbol&&Symbol.for){var a=Symbol.for;s=a("react.element"),a("react.fragment")}var o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,a={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:s,type:e,key:l,ref:u,props:a,_owner:o.current}}t.jsx=l,t.jsxs=l},893:function(e,t,r){e.exports=r(251)},196:function(e){e.exports=window.React}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e,t,n=r(893),s=window.wp.i18n,a=window.wp.components,o=window.wp.editPost,i=window.wp.plugins,c=window.wp.element,l=window.wp.data,u=window.wp.url,p=window.wp.apiFetch,d=r.n(p),f=(e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},e(t,r)},function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function __(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(__.prototype=r.prototype,new __)}),h=function(){return h=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},h.apply(this,arguments)};!function(e){e.CannotFormulateApiQuery="ch_cannot_formulate_api_query",e.FetchError="fetch_error",e[e.ParselyApiForbidden=403]="ParselyApiForbidden",e.ParselyApiResponseContainsError="ch_response_contains_error",e.ParselyApiReturnedNoData="ch_parsely_api_returned_no_data",e.ParselyApiReturnedTooManyResults="ch_parsely_api_returned_too_many_results",e.PluginCredentialsNotSetMessageDetected="parsely_credentials_not_set_message_detected",e.PluginSettingsApiSecretNotSet="parsely_api_secret_not_set",e.PluginSettingsSiteIdNotSet="parsely_site_id_not_set",e.PostIsNotPublished="ch_post_not_published"}(t||(t={}));var y=function(e){function r(n,a,o){void 0===o&&(o=(0,s.__)("Error: ","wp-parsely"));var i=e.call(this,o+n)||this;i.hint=null,i.name=i.constructor.name,i.code=a;var c=[t.ParselyApiForbidden,t.ParselyApiResponseContainsError,t.ParselyApiReturnedNoData,t.ParselyApiReturnedTooManyResults,t.PluginCredentialsNotSetMessageDetected,t.PluginSettingsApiSecretNotSet,t.PluginSettingsSiteIdNotSet,t.PostIsNotPublished];return i.retryFetch=!c.includes(i.code),Object.setPrototypeOf(i,r.prototype),i}return f(r,e),r.prototype.ContentHelperErrorMessage=function(e){var t="";e.children&&(t=e.children);var r="content-helper-error-message";return e.className&&(r+=" "+e.className),(0,n.jsx)("div",{className:r,"data-testid":null==e?void 0:e.testId,dangerouslySetInnerHTML:{__html:t}})},r.prototype.renderMessage=function(e){return void 0===e&&(e=null),[t.PluginCredentialsNotSetMessageDetected,t.PluginSettingsSiteIdNotSet,t.PluginSettingsApiSecretNotSet].includes(this.code)?(0,n.jsx)(this.ContentHelperErrorMessage,h({className:null==e?void 0:e.className,testId:"credentials-not-set-message"},{children:window.wpParselyCredentialsNotSetMessage})):(this.code===t.FetchError&&(this.hint=this.Hint((0,s.__)("This error can sometimes be caused by ad-blockers or browser tracking protections. Please add this site to any applicable allow lists and try again.","wp-parsely"))),this.code===t.ParselyApiForbidden&&(this.hint=this.Hint((0,s.__)("Please ensure that the Site ID and API Secret given in the plugin's settings are correct.","wp-parsely"))),(0,n.jsx)(this.ContentHelperErrorMessage,h({className:null==e?void 0:e.className,testId:"error"},{children:"<p>".concat(this.message,"</p>").concat(this.hint?this.hint:"")})))},r.prototype.Hint=function(e){return'<p className="content-helper-error-message-hint" data-testid="content-helper-error-message-hint"><strong>'.concat((0,s.__)("Hint:","wp-parsely"),"</strong> ").concat(e,"</p>")},r}(Error),w={month:"short",day:"numeric",year:"numeric"},v={month:"short",day:"numeric"},g=(0,s.__)("Date N/A","wp-parsely");function b(e){"string"==typeof e&&(e=new Date(e));var t=e instanceof Date&&!isNaN(+e),r=0!==e.getTime();return t&&r}function m(e){if(!1===b(e))return g;var t=w;return e.getUTCFullYear()===(new Date).getUTCFullYear()&&(t=v),Intl.DateTimeFormat(document.documentElement.lang||"en",t).format(e)}function j(e){return{period_start:"".concat(e,"d"),period_end:""}}var _=function(){return _=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},_.apply(this,arguments)},x=function(e,t,r,n){return new(r||(r=Promise))((function(s,a){function o(e){try{c(n.next(e))}catch(e){a(e)}}function i(e){try{c(n.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,i)}c((n=n.apply(e,t||[])).next())}))},P=function(e,t){var r,n,s,a,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(o=0)),o;)try{if(r=1,n&&(s=2&i[0]?n.return:i[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,i[1])).done)return s;switch(n=0,s&&(i=[2&i[0],s.value]),i[0]){case 0:case 1:s=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((s=(s=o.trys).length>0&&s[s.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){o.label=i[1];break}if(6===i[0]&&o.label<s[1]){o.label=s[1],s=i;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(i);break}s[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],n=0}finally{r=s=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},O=function(){function e(){this.apiPeriodRange=j(7)}return e.prototype.getPerformanceDetails=function(){return x(this,void 0,void 0,(function(){var e,r,n,a,o;return P(this,(function(i){switch(i.label){case 0:if(!1===(e=(0,l.select)("core/editor")).isCurrentPostPublished())return[2,Promise.reject(new y((0,s.__)("This post is not published, so its details are unavailable.","wp-parsely"),t.PostIsNotPublished,""))];r=e.getPermalink(),i.label=1;case 1:return i.trys.push([1,4,,5]),[4,this.fetchPerformanceDataFromWpEndpoint(r)];case 2:return n=i.sent(),[4,this.fetchReferrerDataFromWpEndpoint(r,n.views)];case 3:return a=i.sent(),[3,5];case 4:return o=i.sent(),[2,Promise.reject(o)];case 5:return[2,_(_({},n),{referrers:a})]}}))}))},e.prototype.fetchPerformanceDataFromWpEndpoint=function(e){return x(this,void 0,void 0,(function(){var r,n;return P(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,d()({path:(0,u.addQueryArgs)("/wp-parsely/v1/stats/post/detail",_({url:e},this.apiPeriodRange))})];case 1:return r=a.sent(),[3,3];case 2:return n=a.sent(),[2,Promise.reject(new y(n.message,n.code))];case 3:return(null==r?void 0:r.error)?[2,Promise.reject(new y(r.error.message,t.ParselyApiResponseContainsError))]:0===r.data.length?[2,Promise.reject(new y((0,s.sprintf)(
/* translators: URL of the published post */
(0,s.__)("The post %s has 0 views, or the Parse.ly API returned no data.","wp-parsely"),e),t.ParselyApiReturnedNoData,""))]:r.data.length>1?[2,Promise.reject(new y((0,s.sprintf)(
/* translators: URL of the published post */
(0,s.__)("Multiple results were returned for the post %s by the Parse.ly API.","wp-parsely"),e),t.ParselyApiReturnedTooManyResults))]:[2,r.data[0]]}}))}))},e.prototype.fetchReferrerDataFromWpEndpoint=function(e,r){return x(this,void 0,void 0,(function(){var n,s;return P(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,d()({path:(0,u.addQueryArgs)("/wp-parsely/v1/referrers/post/detail",_({url:e,total_views:r},this.apiPeriodRange))})];case 1:return n=a.sent(),[3,3];case 2:return s=a.sent(),[2,Promise.reject(new y(s.message,s.code))];case 3:return(null==n?void 0:n.error)?[2,Promise.reject(new y(n.error.message,t.ParselyApiResponseContainsError))]:[2,n.data]}}))}))},e}();function S(e,t,r){void 0===t&&(t=1),void 0===r&&(r="");var n=parseInt(e.replace(/\D/g,""),10);if(n<1e3)return e;n<1e4&&(t=1);var s=n,a=n.toString(),o="",i=0;return Object.entries({1e3:"k","1,000,000":"M","1,000,000,000":"B","1,000,000,000,000":"T","1,000,000,000,000,000":"Q"}).forEach((function(e){var r=e[0],c=e[1],l=parseInt(r.replace(/\D/g,""),10);if(n>=l){var u=t;(s=n/l)%1>1/i&&(u=s>10?1:2),u=parseFloat(s.toFixed(2))===parseFloat(s.toFixed(0))?0:u,a=s.toFixed(u),o=c}i=l})),a+r+o}var N=function(){return N=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},N.apply(this,arguments)},C=function(e,t,r,n){return new(r||(r=Promise))((function(s,a){function o(e){try{c(n.next(e))}catch(e){a(e)}}function i(e){try{c(n.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,i)}c((n=n.apply(e,t||[])).next())}))},A=function(e,t){var r,n,s,a,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(o=0)),o;)try{if(r=1,n&&(s=2&i[0]?n.return:i[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,i[1])).done)return s;switch(n=0,s&&(i=[2&i[0],s.value]),i[0]){case 0:case 1:s=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((s=(s=o.trys).length>0&&s[s.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){o.label=i[1];break}if(6===i[0]&&o.label<s[1]){o.label=s[1],s=i;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(i);break}s[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],n=0}finally{r=s=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};function E(e){return(0,n.jsxs)("div",N({className:"performance-details-panel"},{children:[(0,n.jsx)(k,{}),(0,n.jsx)(R,N({},e)),(0,n.jsx)(T,N({},e)),(0,n.jsx)(D,N({},e)),(0,n.jsx)(M,N({},e))]}))}function k(){var e=m(new Date((7,function(e,t){if(!1===b(e))return g;var r=new Date(e);return r.setDate(r.getDate()-t),function(e){return!1===b(e)?g:e.toISOString().substring(0,10)}(r)}((new Date).toISOString(),6)+"T00:00")));return(0,n.jsxs)("div",N({className:"section period"},{children:[
/* translators: Number of days for which data is being shown */
(0,s.sprintf)((0,s.__)("Last %d Days","wp-parsely"),7),(0,n.jsx)("span",{children:
/* translators: Period starting date in short format */
(0,s.sprintf)((0,s.__)(" (%s - Today)","wp-parsely"),e)})]}))}function R(e){var t=e.data;return(0,n.jsx)("div",N({className:"section general-performance"},{children:(0,n.jsxs)("table",{children:[(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:S(t.views)}),(0,n.jsx)("td",{children:S(t.visitors)}),(0,n.jsx)("td",{children:t.avgEngaged})]})}),(0,n.jsx)("tfoot",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,s.__)("Page Views","wp-parsely")}),(0,n.jsx)("th",{children:(0,s.__)("Visitors","wp-parsely")}),(0,n.jsx)("th",{children:(0,s.__)("Avg. Time","wp-parsely")})]})})]})}))}function T(e){var t=e.data;delete t.referrers.types.totals;var r=function(e){switch(e){case"social":return(0,s.__)("Social","wp-parsely");case"search":return(0,s.__)("Search","wp-parsely");case"other":return(0,s.__)("Other","wp-parsely");case"internal":return(0,s.__)("Internal","wp-parsely");case"direct":return(0,s.__)("Direct","wp-parsely")}return e};return(0,n.jsxs)("div",N({className:"section referrer-types"},{children:[(0,n.jsx)("div",N({className:"section-title"},{children:(0,s.__)("Referrers (Page Views)","wp-parsely")})),(0,n.jsx)("div",N({className:"multi-percentage-bar"},{children:Object.entries(t.referrers.types).map((function(e){var t=e[0],a=e[1],o=(0,s.sprintf)(
/* translators: 1: Referrer type, 2: Percentage value, %%: Escaped percent sign */
(0,s.__)("%1$s: %2$s%%","wp-parsely"),r(t),a.viewsPercentage);return(0,n.jsx)("div",{"aria-label":o,className:"bar-fill "+t,style:{width:a.viewsPercentage+"%"}},t)}))})),(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:Object.keys(t.referrers.types).map((function(e){return(0,n.jsx)("th",{children:r(e)},e)}))})}),(0,n.jsx)("tbody",{children:(0,n.jsx)("tr",{children:Object.entries(t.referrers.types).map((function(e){var t=e[0],r=e[1];return(0,n.jsx)("td",{children:S(r.views)},t)}))})})]})]}))}function D(e){var t=e.data,r=0;return(0,n.jsxs)("div",N({className:"section top-referrers"},{children:[(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",N({scope:"col"},{children:(0,s.__)("Top Referrers","wp-parsely")})),(0,n.jsx)("th",N({colSpan:2,scope:"colgroup"},{children:(0,s.__)("Page Views","wp-parsely")}))]})}),(0,n.jsx)("tbody",{children:Object.entries(t.referrers.top).map((function(e){var t=e[0],a=e[1];if("totals"===t)return r=Number(a.viewsPercentage),null;var o=t;"direct"===t&&(o=(0,s.__)("Direct","wp-parsely"))
/* translators: %s: Percentage value, %%: Escaped percent sign */;var i=(0,s.sprintf)((0,s.__)("%s%%","wp-parsely"),a.viewsPercentage);return(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",N({scope:"row"},{children:o})),(0,n.jsx)("td",{children:(0,n.jsx)("div",{"aria-label":i,className:"percentage-bar",style:{"--bar-fill":a.viewsPercentage+"%"}})}),(0,n.jsx)("td",{children:S(a.views)})]},t)}))})]}),(0,n.jsxs)("div",{children:[" ",
/* translators: %s: Percentage value, %%: Escaped percent sign */
(0,s.sprintf)((0,s._n)("%s%% of views came from top referrers.","%s%% of views came from top referrers.",r,"wp-parsely"),r)]})]}))}function M(e){var t=e.data,r=(0,n.jsxs)("span",N({className:"screen-reader-text"},{children:[" ",(0,s.__)("(opens in new tab)","wp-parsely")]}));return(0,n.jsxs)("div",N({className:"section actions"},{children:[(0,n.jsxs)(a.Button,N({href:t.url,rel:"noopener",target:"_blank",variant:"secondary"},{children:[(0,s.__)("Visit Post","wp-parsely"),r]})),(0,n.jsxs)(a.Button,N({href:t.dashUrl,rel:"noopener",target:"_blank",variant:"primary"},{children:[(0,s.__)("View in Parse.ly","wp-parsely"),r]}))]}))}var F=function(){var e=this,t=(0,c.useState)(!0),r=t[0],s=t[1],o=(0,c.useState)(),i=o[0],l=o[1],u=(0,c.useState)(),p=u[0],d=u[1];return(0,c.useEffect)((function(){var t=new O,r=function(n){return C(e,void 0,void 0,(function(){var e=this;return A(this,(function(a){return t.getPerformanceDetails().then((function(e){d(e),s(!1)})).catch((function(t){return C(e,void 0,void 0,(function(){return A(this,(function(e){switch(e.label){case 0:return n>0&&t.retryFetch?[4,new Promise((function(e){return setTimeout(e,500)}))]:[3,3];case 1:return e.sent(),[4,r(n-1)];case 2:return e.sent(),[3,4];case 3:l(t),s(!1),e.label=4;case 4:return[2]}}))}))})),[2]}))}))};s(!0),r(1)}),[]),i?i.renderMessage():r?(0,n.jsx)("div",N({className:"parsely-spinner-wrapper","data-testid":"parsely-spinner-wrapper"},{children:(0,n.jsx)(a.Spinner,{})})):(0,n.jsx)(E,{data:p})},I=function(){return I=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},I.apply(this,arguments)},V=function(e,t,r,n){return new(r||(r=Promise))((function(s,a){function o(e){try{c(n.next(e))}catch(e){a(e)}}function i(e){try{c(n.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,i)}c((n=n.apply(e,t||[])).next())}))},L=function(e,t){var r,n,s,a,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(o=0)),o;)try{if(r=1,n&&(s=2&i[0]?n.return:i[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,i[1])).done)return s;switch(n=0,s&&(i=[2&i[0],s.value]),i[0]){case 0:case 1:s=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((s=(s=o.trys).length>0&&s[s.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){o.label=i[1];break}if(6===i[0]&&o.label<s[1]){o.label=s[1],s=i;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(i);break}s[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],n=0}finally{r=s=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},H=function(){function e(){}return e.getRelatedTopPosts=function(){return V(this,void 0,void 0,(function(){var e,t,r,n,a,o,i,c,u,p,d;return L(this,(function(f){switch(f.label){case 0:e=(0,l.select)("core/editor"),t=e.getCurrentPost(),r=(0,l.select)("core").getEntityRecord("root","user",t.author),n=e.getEditedPostAttribute("categories"),a=(0,l.select)("core").getEntityRecord("taxonomy","category",null==n?void 0:n[0]),o=e.getEditedPostAttribute("tags"),i=(0,l.select)("core").getEntityRecord("taxonomy","post_tag",null==o?void 0:o[0]);try{c=this.buildRelatedTopPostsApiQuery(r,a,i)}catch(e){return[2,Promise.reject(e)]}f.label=1;case 1:return f.trys.push([1,3,,4]),[4,this.fetchRelatedTopPostsFromWpEndpoint(c)];case 2:return u=f.sent(),[3,4];case 3:return p=f.sent(),[2,Promise.reject(p)];case 4:return d=(0,s.sprintf)((0,s.__)("Top posts %1$s in last %2$d days.","wp-parsely"),c.message,7),0===u.length&&(d="".concat((0,s.__)("The Parse.ly API did not return any results for related top posts","wp-parsely")," ").concat(c.message,".")),[2,{message:d,posts:u}]}}))}))},e.fetchRelatedTopPostsFromWpEndpoint=function(e){return V(this,void 0,void 0,(function(){var r,n;return L(this,(function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),[4,d()({path:(0,u.addQueryArgs)("/wp-parsely/v1/stats/posts",e.query)})];case 1:return r=s.sent(),[3,3];case 2:return n=s.sent(),[2,Promise.reject(new y(n.message,n.code))];case 3:return(null==r?void 0:r.error)?[2,Promise.reject(new y(r.error.message,t.ParselyApiResponseContainsError))]:[2,(null==r?void 0:r.data)||[]]}}))}))},e.buildRelatedTopPostsApiQuery=function(e,r,n){var a=I({},j(7));if(null==n?void 0:n.slug)return{query:I({limit:5,tag:n.slug},a),
/* translators: %s: message such as "with tag Foo" */
message:(0,s.sprintf)((0,s.__)('with tag "%1$s"',"wp-parsely"),n.name)};if(null==r?void 0:r.name)return{query:I({limit:5,section:r.name},a),
/* translators: %s: message such as "in category Foo" */
message:(0,s.sprintf)((0,s.__)('in category "%1$s"',"wp-parsely"),r.name)};if(null==e?void 0:e.name)return{query:I({limit:5,author:e.name},a),
/* translators: %s: message such as "by author John" */
message:(0,s.sprintf)((0,s.__)('by author "%1$s"',"wp-parsely"),e.name)};throw new y((0,s.__)("Cannot formulate query because the post's Tag, Category and Author are empty.","wp-parsely"),t.CannotFormulateApiQuery)},e}(),B=function(){return B=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},B.apply(this,arguments)},$=function(){return(0,n.jsx)(a.SVG,B({"aria-hidden":"true",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 42 42"},{children:(0,n.jsx)(a.Path,{d:"M15.3,20.1c0,3.1,2.6,5.7,5.7,5.7s5.7-2.6,5.7-5.7s-2.6-5.7-5.7-5.7S15.3,17,15.3,20.1z M23.4,32.4\n\t\t\tC30.1,30.9,40.5,22,40.5,22s-7.7-12-18-13.3c-0.6-0.1-2.6-0.1-3-0.1c-10,1-18,13.7-18,13.7s8.7,8.6,17,9.9\n\t\t\tC19.4,32.6,22.4,32.6,23.4,32.4z M11.1,20.7c0-5.2,4.4-9.4,9.9-9.4s9.9,4.2,9.9,9.4S26.5,30,21,30S11.1,25.8,11.1,20.7z"})}))},q=function(){return q=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},q.apply(this,arguments)},G=function(){return(0,n.jsxs)(a.SVG,q({"aria-hidden":"true",version:"1.1",viewBox:"0 0 16 16",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg"},{children:[(0,n.jsx)(a.Path,{d:"M0 3.29592C0 2.73237 0.456853 2.27551 1.02041 2.27551H4.08165C4.50432 2.27551 4.84696 2.61815 4.84696 3.04082C4.84696 3.46349 4.50432 3.80613 4.08165 3.80613H1.53062V11.9694H9.69391V9.6735C9.69391 9.25083 10.0366 8.90819 10.4592 8.90819C10.8819 8.90819 11.2245 9.25083 11.2245 9.6735V12.4796C11.2245 13.0432 10.7677 13.5 10.2041 13.5H1.02041C0.456854 13.5 0 13.0432 0 12.4796V3.29592Z"}),(0,n.jsx)(a.Path,{d:"M12.531 1.22415C12.8299 1.52303 12.8299 2.00759 12.531 2.30646L6.15342 8.68404C5.85455 8.98291 5.36998 8.98291 5.07111 8.68404C4.77224 8.38517 4.77224 7.9006 5.07111 7.60173L11.4487 1.22415C11.7476 0.925282 12.2321 0.925282 12.531 1.22415Z"}),(0,n.jsx)(a.Path,{d:"M6.63268 1.51012C6.63268 1.08745 6.97532 0.744812 7.39799 0.744812H12.2449C12.6676 0.744812 13.0103 1.08745 13.0103 1.51012V6.35708C13.0103 6.77975 12.6676 7.12239 12.2449 7.12239C11.8223 7.12239 11.4796 6.77975 11.4796 6.35708V2.27543H7.39799C6.97532 2.27543 6.63268 1.93279 6.63268 1.51012Z"})]}))},Q=function(){return Q=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},Q.apply(this,arguments)},W=function(){return(0,n.jsx)(a.SVG,Q({"aria-hidden":"true",version:"1.1",viewBox:"0 0 15 15",width:"15",height:"15",xmlns:"http://www.w3.org/2000/svg"},{children:(0,n.jsx)(a.Path,{d:"M0 14.0025V11.0025L7.5 3.5025L10.5 6.5025L3 14.0025H0ZM12 5.0025L13.56 3.4425C14.15 2.8525 14.15 1.9025 13.56 1.3225L12.68 0.4425C12.09 -0.1475 11.14 -0.1475 10.56 0.4425L9 2.0025L12 5.0025Z"})}))},U=function(){return U=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},U.apply(this,arguments)},Z=function(e){var t,r=e.post;return(0,n.jsxs)("li",U({className:"parsely-top-post","data-testid":"parsely-top-post"},{children:[(0,n.jsxs)("div",U({className:"parsely-top-post-title"},{children:[(0,n.jsx)("a",U({className:"parsely-top-post-stats-link",href:r.dashUrl,target:"_blank",rel:"noreferrer",title:(0,s.__)("View in Parse.ly (opens new tab)","wp-parsely")},{children:r.title})),(0,n.jsx)("a",U({className:"parsely-top-post-view-link",href:r.url,target:"_blank",rel:"noreferrer",title:(0,s.__)("View Post (opens new tab)","wp-parsely")},{children:(0,n.jsx)(G,{})})),0!==r.postId&&(0,n.jsx)("a",U({className:"parsely-top-post-edit-link",href:(t=r.postId,"/wp-admin/post.php?post=".concat(t,"&action=edit")),target:"_blank",rel:"noreferrer",title:(0,s.__)("Edit Post (opens new tab)","wp-parsely")},{children:(0,n.jsx)(W,{})}))]})),(0,n.jsxs)("p",U({className:"parsely-top-post-info"},{children:[(0,n.jsxs)("span",U({className:"parsely-top-post-date"},{children:[(0,n.jsx)("span",U({className:"screen-reader-text"},{children:"Date "})),m(new Date(r.date))]})),(0,n.jsxs)("span",U({className:"parsely-top-post-author"},{children:[(0,n.jsx)("span",U({className:"screen-reader-text"},{children:"Author "})),r.author]})),(0,n.jsxs)("span",U({className:"parsely-top-post-views"},{children:[(0,n.jsx)("span",U({className:"screen-reader-text"},{children:"Number of Views "})),(0,n.jsx)($,{}),r.views]}))]}))]}))},z=function(){return z=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},z.apply(this,arguments)},Y=function(e,t,r,n){return new(r||(r=Promise))((function(s,a){function o(e){try{c(n.next(e))}catch(e){a(e)}}function i(e){try{c(n.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,i)}c((n=n.apply(e,t||[])).next())}))},J=function(e,t){var r,n,s,a,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(o=0)),o;)try{if(r=1,n&&(s=2&i[0]?n.return:i[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,i[1])).done)return s;switch(n=0,s&&(i=[2&i[0],s.value]),i[0]){case 0:case 1:s=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((s=(s=o.trys).length>0&&s[s.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){o.label=i[1];break}if(6===i[0]&&o.label<s[1]){o.label=s[1],s=i;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(i);break}s[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],n=0}finally{r=s=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},K=function(){var e=this,t=(0,c.useState)(!0),r=t[0],s=t[1],o=(0,c.useState)(),i=o[0],l=o[1],u=(0,c.useState)(),p=u[0],d=u[1],f=(0,c.useState)([]),h=f[0],y=f[1];if((0,c.useEffect)((function(){var t=function(r){return Y(e,void 0,void 0,(function(){var e=this;return J(this,(function(n){return H.getRelatedTopPosts().then((function(e){y(e.posts),d(e.message),s(!1)})).catch((function(n){return Y(e,void 0,void 0,(function(){return J(this,(function(e){switch(e.label){case 0:return r>0&&n.retryFetch?[4,new Promise((function(e){return setTimeout(e,500)}))]:[3,3];case 1:return e.sent(),[4,t(r-1)];case 2:return e.sent(),[3,4];case 3:s(!1),l(n),e.label=4;case 4:return[2]}}))}))})),[2]}))}))};return s(!0),t(1),function(){s(!1),y([]),d(""),l(void 0)}}),[]),i)return i.renderMessage({className:"parsely-top-posts-descr"});var w=(0,n.jsx)("ol",z({className:"parsely-top-posts"},{children:h.map((function(e){return(0,n.jsx)(Z,{post:e},e.id)}))}));return r?(0,n.jsx)("div",z({className:"parsely-spinner-wrapper","data-testid":"parsely-spinner-wrapper"},{children:(0,n.jsx)(a.Spinner,{})})):(0,n.jsxs)("div",z({className:"parsely-top-posts-wrapper"},{children:[(0,n.jsx)("p",z({className:"parsely-top-posts-descr","data-testid":"parsely-top-posts-descr"},{children:p})),w]}))},X=function(){return X=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},X.apply(this,arguments)},ee=function(){return(0,n.jsxs)(a.SVG,X({height:24,viewBox:"0 0 60 65",width:24,xmlns:"http://www.w3.org/2000/svg"},{children:[(0,n.jsx)(a.Path,{fill:"#5ba745",d:"M23.72,51.53c0-.18,0-.34-.06-.52a13.11,13.11,0,0,0-2.1-5.53A14.74,14.74,0,0,0,19.12,43c-.27-.21-.5-.11-.51.22l-.24,3.42c0,.33-.38.35-.49,0l-1.5-4.8a1.4,1.4,0,0,0-.77-.78,23.91,23.91,0,0,0-3.1-.84c-1.38-.24-3.39-.39-3.39-.39-.34,0-.45.21-.25.49l2.06,3.76c.2.27,0,.54-.29.33l-4.51-3.6a3.68,3.68,0,0,0-2.86-.48c-1,.16-2.44.46-2.44.46a.68.68,0,0,0-.39.25.73.73,0,0,0-.14.45S.41,43,.54,44a3.63,3.63,0,0,0,1.25,2.62L6.48,50c.28.2.09.49-.23.37l-4.18-.94c-.32-.12-.5,0-.4.37,0,0,.69,1.89,1.31,3.16a24,24,0,0,0,1.66,2.74,1.34,1.34,0,0,0,1,.52l5,.13c.33,0,.41.38.1.48L7.51,58c-.31.1-.34.35-.07.55a14.29,14.29,0,0,0,3.05,1.66,13.09,13.09,0,0,0,5.9.5,25.13,25.13,0,0,0,4.34-1,9.55,9.55,0,0,1-.08-1.2,9.32,9.32,0,0,1,3.07-6.91"}),(0,n.jsx)(a.Path,{fill:"#5ba745",d:"M59.7,41.53a.73.73,0,0,0-.14-.45.68.68,0,0,0-.39-.25s-1.43-.3-2.44-.46a3.64,3.64,0,0,0-2.86.48l-4.51,3.6c-.26.21-.49-.06-.29-.33l2.06-3.76c.2-.28.09-.49-.25-.49,0,0-2,.15-3.39.39a23.91,23.91,0,0,0-3.1.84,1.4,1.4,0,0,0-.77.78l-1.5,4.8c-.11.32-.48.3-.49,0l-.24-3.42c0-.33-.24-.43-.51-.22a14.74,14.74,0,0,0-2.44,2.47A13.11,13.11,0,0,0,36.34,51c0,.18,0,.34-.06.52a9.26,9.26,0,0,1,3,8.1,24.1,24.1,0,0,0,4.34,1,13.09,13.09,0,0,0,5.9-.5,14.29,14.29,0,0,0,3.05-1.66c.27-.2.24-.45-.07-.55l-3.22-1.17c-.31-.1-.23-.47.1-.48l5-.13a1.38,1.38,0,0,0,1-.52A24.6,24.6,0,0,0,57,52.92c.61-1.27,1.31-3.16,1.31-3.16.1-.33-.08-.49-.4-.37l-4.18.94c-.32.12-.51-.17-.23-.37l4.69-3.34A3.63,3.63,0,0,0,59.46,44c.13-1,.24-2.47.24-2.47"}),(0,n.jsx)(a.Path,{fill:"#5ba745",d:"M46.5,25.61c0-.53-.35-.72-.8-.43l-4.86,2.66c-.45.28-.56-.27-.23-.69l4.66-6.23a2,2,0,0,0,.28-1.68,36.51,36.51,0,0,0-2.19-4.89,34,34,0,0,0-2.81-3.94c-.33-.41-.74-.35-.91.16l-2.28,5.68c-.16.5-.6.48-.59-.05l.28-8.93a2.54,2.54,0,0,0-.66-1.64S35,4.27,33.88,3.27,30.78.69,30.78.69a1.29,1.29,0,0,0-1.54,0s-1.88,1.49-3.12,2.59-2.48,2.35-2.48,2.35A2.5,2.5,0,0,0,23,7.27l.27,8.93c0,.53-.41.55-.58.05l-2.29-5.69c-.17-.5-.57-.56-.91-.14a35.77,35.77,0,0,0-3,4.2,35.55,35.55,0,0,0-2,4.62,2,2,0,0,0,.27,1.67l4.67,6.24c.33.42.23,1-.22.69l-4.87-2.66c-.45-.29-.82-.1-.82.43a18.6,18.6,0,0,0,.83,5.07,20.16,20.16,0,0,0,5.37,7.77c3.19,3,5.93,7.8,7.45,11.08A9.6,9.6,0,0,1,30,49.09a9.31,9.31,0,0,1,2.86.45c1.52-3.28,4.26-8.11,7.44-11.09a20.46,20.46,0,0,0,5.09-7,19,19,0,0,0,1.11-5.82"}),(0,n.jsx)(a.Path,{fill:"#5ba745",d:"M36.12,58.44A6.12,6.12,0,1,1,30,52.32a6.11,6.11,0,0,1,6.12,6.12"})]}))},te=function(){return te=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},te.apply(this,arguments)};function re(e){return window.wpParselyCredentialsNotSetMessage?new y("",t.PluginCredentialsNotSetMessageDetected).renderMessage():e}(0,i.registerPlugin)("wp-parsely-block-editor-sidebar",{icon:ee,render:function(){return(0,n.jsxs)(o.PluginSidebar,te({icon:(0,n.jsx)(ee,{}),name:"wp-parsely-content-helper",className:"wp-parsely-content-helper",title:(0,s.__)("Parse.ly Editor Sidebar","wp-parsely")},{children:[(0,n.jsx)(a.Panel,{children:(0,n.jsx)(a.PanelBody,te({title:(0,s.__)("Performance Details","wp-parsely"),initialOpen:!0},{children:re((0,n.jsx)(F,{}))}))}),(0,n.jsx)(a.Panel,{children:(0,n.jsx)(a.PanelBody,te({title:(0,s.__)("Related Top Posts","wp-parsely"),initialOpen:!1},{children:re((0,n.jsx)(K,{}))}))})]}))}})}()}();