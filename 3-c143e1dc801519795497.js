(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{143:function(e,t,n){"use strict";var r=n(35);t.__esModule=!0,t.withPrefix=A,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var f=r(n(196)),p=r(n(197)),o=r(n(7)),i=r(n(50)),a=r(n(51)),u=r(n(4)),T=r(n(0)),d=n(15),E=n(147);function A(e){return("/portfolio/"+e).replace(/\/+/g,"/")}var c={activeClassName:u.default.string,activeStyle:u.default.object},s=function(r){function e(e){var t;t=r.call(this)||this,(0,a.default)((0,i.default)((0,i.default)(t)),"defaultGetProps",function(e){return e.isCurrent?{className:[t.props.className,t.props.activeClassName].filter(Boolean).join(" "),style:(0,p.default)({},t.props.style,t.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),t.state={IOSupported:n},t.handleRef=t.handleRef.bind((0,i.default)((0,i.default)(t))),t}(0,o.default)(e,r);var t=e.prototype;return t.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,E.parsePath)(this.props.to).pathname)},t.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,E.parsePath)(this.props.to).pathname)},t.handleRef=function(e){var t,n,r,o=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,E.parsePath)(o.props.to).pathname)},(r=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||0<e.intersectionRatio)&&(r.unobserve(t),r.disconnect(),n())})})).observe(t))},t.render=function(){var t=this,e=this.props,n=e.to,r=e.getProps,o=void 0===r?this.defaultGetProps:r,i=e.onClick,a=e.onMouseEnter,u=(e.activeClassName,e.activeStyle,e.ref,e.innerRef,e.state),c=e.replace,s=(0,f.default)(e,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),l=A(n);return T.default.createElement(d.Link,(0,p.default)({to:l,state:u,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){a&&a(e),___loader.hovering((0,E.parsePath)(n).pathname)},onClick:function(e){return i&&i(e),0!==e.button||t.props.target||e.defaultPrevented||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(e.preventDefault(),h(n,{state:u,replace:c})),!0}},s))},e}(T.default.Component);s.propTypes=(0,p.default)({},c,{innerRef:u.default.func,onClick:u.default.func,to:u.default.string.isRequired,replace:u.default.bool});var l=s;t.default=l;var h=function(e,t){window.___navigate(A(e),t)};t.navigate=h;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(A(e))};t.push=y,t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(A(e))},t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},172:function(e,t,n){t.__esModule=!0,t.Helmet=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),o=f(n(0)),i=f(n(4)),a=f(n(188)),c=f(n(191)),s=n(194),l=n(173);function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var T,d,E,A=(0,a.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)(function(){return null}),h=(T=A,E=d=function(e){function n(){return function(e,t){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,e),n.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case l.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return u({},r,((t={})[n.type]=[].concat(r[n.type]||[],[u({},o,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case l.TAG_NAMES.TITLE:return u({},o,((t={})[r.type]=a,t.titleAttributes=u({},i),t));case l.TAG_NAMES.BODY:return u({},o,{bodyAttributes:u({},i)});case l.TAG_NAMES.HTML:return u({},o,{htmlAttributes:u({},i)})}return u({},o,((n={})[r.type]=u({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(n,e){var r=u({},e);return Object.keys(n).forEach(function(e){var t;r=u({},r,((t={})[e]=n[e],t))}),r},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,i){var a=this,u={};return o.default.Children.forEach(e,function(e){if(e&&e.props){var t=e.props,n=t.children,r=p(t,["children"]),o=(0,s.convertReactPropstoHtmlAttributes)(r);switch(a.warnOnInvalidChildren(e,n),e.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:u=a.flattenArrayTypeChildren({child:e,arrayTypeChildren:u,newChildProps:o,nestedChildren:n});break;default:i=a.mapObjectTypeChildren({child:e,newProps:i,newChildProps:o,nestedChildren:n})}}}),i=this.mapArrayTypeChildrenToProps(u,i)},n.prototype.render=function(){var e=this.props,t=e.children,n=p(e,["children"]),r=u({},n);return t&&(r=this.mapChildrenToProps(t,r)),o.default.createElement(T,r)},r(n,null,[{key:"canUseDOM",set:function(e){T.canUseDOM=e}}]),n}(o.default.Component),d.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},d.defaultProps={defer:!0,encodeSpecialCharacters:!0},d.peek=T.peek,d.rewind=function(){var e=T.rewind();return e||(e=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},E);h.renderStatic=h.rewind,t.Helmet=h,t.default=h},173:function(e,t){t.__esModule=!0,t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},188:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var s=n(0),l=r(s),f=r(n(189)),p=r(n(190));e.exports=function(a,u,c){if("function"!=typeof a)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof u)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==c&&"function"!=typeof c)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(t){if("function"!=typeof t)throw new Error("Expected WrappedComponent to be a React component.");var r=[],o=void 0;function i(){o=a(r.map(function(e){return e.props})),n.canUseDOM?u(o):c&&(o=c(o))}var e,n=function(e){function n(){return function(e,t){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,e),n.peek=function(){return o},n.rewind=function(){if(n.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=o;return o=void 0,r=[],e},n.prototype.shouldComponentUpdate=function(e){return!p(e,this.props)},n.prototype.componentWillMount=function(){r.push(this),i()},n.prototype.componentDidUpdate=function(){i()},n.prototype.componentWillUnmount=function(){var e=r.indexOf(this);r.splice(e,1),i()},n.prototype.render=function(){return l.createElement(t,this.props)},n}(s.Component);return n.displayName="SideEffect("+((e=t).displayName||e.name||"Component")+")",n.canUseDOM=f.canUseDOM,n}}},189:function(n,r,o){var i;
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/!function(){"use strict";var e=!("undefined"==typeof window||!window.document||!window.document.createElement),t={canUseDOM:e,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:e&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:e&&!!window.screen};void 0===(i=function(){return t}.call(r,o,r,n))||(n.exports=i)}()},190:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var s=i[c];if(!u(s))return!1;var l=e[s],f=t[s];if(!1===(o=n?n.call(r,l,f,s):void 0)||void 0===o&&l!==f)return!1}return!0}},191:function(e,t,n){var u=Array.prototype.slice,c=n(192),s=n(193),l=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:function(e,t,n){var r,o;if(f(e)||f(t))return!1;if(e.prototype!==t.prototype)return!1;if(s(e))return!!s(t)&&(e=u.call(e),t=u.call(t),l(e,t,n));if(p(e)){if(!p(t))return!1;if(e.length!==t.length)return!1;for(r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}try{var i=c(e),a=c(t)}catch(e){return!1}if(i.length!=a.length)return!1;for(i.sort(),a.sort(),r=i.length-1;0<=r;r--)if(i[r]!=a[r])return!1;for(r=i.length-1;0<=r;r--)if(o=i[r],!l(e[o],t[o],n))return!1;return typeof e==typeof t}(e,t,n))};function f(e){return null==e}function p(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length||"function"!=typeof e.copy||"function"!=typeof e.slice||0<e.length&&"number"!=typeof e[0])}},192:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}(e.exports="function"==typeof Object.keys?Object.keys:n).shim=n},193:function(e,t){var n="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();function r(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function o(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}(t=e.exports=n?r:o).supported=r,t.unsupported=o},194:function(e,R,g){(function(e){R.__esModule=!0,R.warn=R.requestAnimationFrame=R.reducePropsToState=R.mapStateOnServer=R.handleClientStateChange=R.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=t(g(0)),a=t(g(49)),A=g(173);function t(e){return e&&e.__esModule?e:{default:e}}var o,l=function(e){return!1===(!(1<arguments.length&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},u=function(t,e){return e.filter(function(e){return void 0!==e[t]}).map(function(e){return e[t]}).reduce(function(e,t){return r({},e,t)},{})},c=function(t,c,e){var s={};return e.filter(function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&E("Helmet: "+t+' should be of type "Array". Instead found type "'+n(e[t])+'"'),!1)}).map(function(e){return e[t]}).reverse().reduce(function(t,e){var u={};e.filter(function(e){for(var t=void 0,n=Object.keys(e),r=0;r<n.length;r++){var o=n[r],i=o.toLowerCase();-1===c.indexOf(i)||t===A.TAG_PROPERTIES.REL&&"canonical"===e[t].toLowerCase()||i===A.TAG_PROPERTIES.REL&&"stylesheet"===e[i].toLowerCase()||(t=i),-1===c.indexOf(o)||o!==A.TAG_PROPERTIES.INNER_HTML&&o!==A.TAG_PROPERTIES.CSS_TEXT&&o!==A.TAG_PROPERTIES.ITEM_PROP||(t=o)}if(!t||!e[t])return!1;var a=e[t].toLowerCase();return s[t]||(s[t]={}),u[t]||(u[t]={}),!s[t][a]&&(u[t][a]=!0)}).reverse().forEach(function(e){return t.push(e)});for(var n=Object.keys(u),r=0;r<n.length;r++){var o=n[r],i=(0,a.default)({},s[o],u[o]);s[o]=i}return t},[]).reverse()},s=function(e,t){for(var n=e.length-1;0<=n;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},f=(o=Date.now(),function(e){var t=Date.now();16<t-o?e(o=t):setTimeout(function(){f(e)},0)}),p=function(e){return clearTimeout(e)},T="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||f:e.requestAnimationFrame||f,d="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||p:e.cancelAnimationFrame||p,E=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},h=null,y=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;_(A.TAG_NAMES.BODY,r),_(A.TAG_NAMES.HTML,o),v(f,p);var T={baseTag:b(A.TAG_NAMES.BASE,n),linkTags:b(A.TAG_NAMES.LINK,i),metaTags:b(A.TAG_NAMES.META,a),noscriptTags:b(A.TAG_NAMES.NOSCRIPT,u),scriptTags:b(A.TAG_NAMES.SCRIPT,s),styleTags:b(A.TAG_NAMES.STYLE,l)},d={},E={};Object.keys(T).forEach(function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(E[e]=T[e].oldTags)}),t&&t(),c(e,d,E)},S=function(e){return Array.isArray(e)?e.join(""):e},v=function(e,t){void 0!==e&&document.title!==e&&(document.title=S(e)),_(A.TAG_NAMES.TITLE,t)},_=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(A.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var c=a[u],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===o.indexOf(c)&&o.push(c);var l=i.indexOf(c);-1!==l&&i.splice(l,1)}for(var f=i.length-1;0<=f;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(A.HELMET_ATTRIBUTE):n.getAttribute(A.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(A.HELMET_ATTRIBUTE,a.join(","))}},b=function(o,e){var t=document.head||document.querySelector(A.TAG_NAMES.HEAD),n=t.querySelectorAll(o+"["+A.HELMET_ATTRIBUTE+"]"),i=Array.prototype.slice.call(n),a=[],u=void 0;return e&&e.length&&e.forEach(function(e){var n=document.createElement(o);for(var t in e)if(e.hasOwnProperty(t))if(t===A.TAG_PROPERTIES.INNER_HTML)n.innerHTML=e.innerHTML;else if(t===A.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var r=void 0===e[t]?"":e[t];n.setAttribute(t,r)}n.setAttribute(A.HELMET_ATTRIBUTE,"true"),i.some(function(e,t){return u=t,n.isEqualNode(e)})?i.splice(u,1):a.push(n)}),i.forEach(function(e){return e.parentNode.removeChild(e)}),a.forEach(function(e){return t.appendChild(e)}),{oldTags:i,newTags:a}},m=function(r){return Object.keys(r).reduce(function(e,t){var n=void 0!==r[t]?t+'="'+r[t]+'"':""+t;return e?e+" "+n:n},"")},P=function(n){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(n).reduce(function(e,t){return e[A.REACT_TAG_MAP[t]||t]=n[t],e},e)},O=function(u,c,s){switch(u){case A.TAG_NAMES.TITLE:return{toComponent:function(){return e=c.title,t=c.titleAttributes,(n={key:e})[A.HELMET_ATTRIBUTE]=!0,r=P(t,n),[i.default.createElement(A.TAG_NAMES.TITLE,r,e)];var e,t,n,r},toString:function(){return e=u,t=c.title,n=c.titleAttributes,r=s,o=m(n),i=S(t),o?"<"+e+" "+A.HELMET_ATTRIBUTE+'="true" '+o+">"+l(i,r)+"</"+e+">":"<"+e+" "+A.HELMET_ATTRIBUTE+'="true">'+l(i,r)+"</"+e+">";var e,t,n,r,o,i}};case A.ATTRIBUTE_NAMES.BODY:case A.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return P(c)},toString:function(){return m(c)}};default:return{toComponent:function(){return n=u,c.map(function(r,e){var t,o=((t={key:e})[A.HELMET_ATTRIBUTE]=!0,t);return Object.keys(r).forEach(function(e){var t=A.REACT_TAG_MAP[e]||e;if(t===A.TAG_PROPERTIES.INNER_HTML||t===A.TAG_PROPERTIES.CSS_TEXT){var n=r.innerHTML||r.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[t]=r[e]}),i.default.createElement(n,o)});var n},toString:function(){return i=u,a=s,c.reduce(function(e,r){var t=Object.keys(r).filter(function(e){return!(e===A.TAG_PROPERTIES.INNER_HTML||e===A.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var n=void 0===r[t]?t:t+'="'+l(r[t],a)+'"';return e?e+" "+n:n},""),n=r.innerHTML||r.cssText||"",o=-1===A.SELF_CLOSING_TAGS.indexOf(i);return e+"<"+i+" "+A.HELMET_ATTRIBUTE+'="true" '+t+(o?"/>":">"+n+"</"+i+">")},"");var i,a}}}};R.convertReactPropstoHtmlAttributes=function(n){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(n).reduce(function(e,t){return e[A.HTML_TAG_MAP[t]||t]=n[t],e},e)},R.handleClientStateChange=function(e){h&&d(h),h=e.defer?T(function(){y(e,function(){h=null})}):(y(e),null)},R.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:O(A.TAG_NAMES.BASE,t,r),bodyAttributes:O(A.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:O(A.ATTRIBUTE_NAMES.HTML,o,r),link:O(A.TAG_NAMES.LINK,i,r),meta:O(A.TAG_NAMES.META,a,r),noscript:O(A.TAG_NAMES.NOSCRIPT,u,r),script:O(A.TAG_NAMES.SCRIPT,c,r),style:O(A.TAG_NAMES.STYLE,s,r),title:O(A.TAG_NAMES.TITLE,{title:f,titleAttributes:p},r)}},R.reducePropsToState=function(e){return{baseTag:(i=[A.TAG_PROPERTIES.HREF],e.filter(function(e){return void 0!==e[A.TAG_NAMES.BASE]}).map(function(e){return e[A.TAG_NAMES.BASE]}).reverse().reduce(function(e,t){if(!e.length)for(var n=Object.keys(t),r=0;r<n.length;r++){var o=n[r].toLowerCase();if(-1!==i.indexOf(o)&&t[o])return e.concat(t)}return e},[])),bodyAttributes:u(A.ATTRIBUTE_NAMES.BODY,e),defer:s(e,A.HELMET_PROPS.DEFER),encode:s(e,A.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:u(A.ATTRIBUTE_NAMES.HTML,e),linkTags:c(A.TAG_NAMES.LINK,[A.TAG_PROPERTIES.REL,A.TAG_PROPERTIES.HREF],e),metaTags:c(A.TAG_NAMES.META,[A.TAG_PROPERTIES.NAME,A.TAG_PROPERTIES.CHARSET,A.TAG_PROPERTIES.HTTPEQUIV,A.TAG_PROPERTIES.PROPERTY,A.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:c(A.TAG_NAMES.NOSCRIPT,[A.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:s(e,A.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){},scriptTags:c(A.TAG_NAMES.SCRIPT,[A.TAG_PROPERTIES.SRC,A.TAG_PROPERTIES.INNER_HTML],e),styleTags:c(A.TAG_NAMES.STYLE,[A.TAG_PROPERTIES.CSS_TEXT],e),title:function(e){var t=s(e,A.TAG_NAMES.TITLE),n=s(e,A.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=s(e,A.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0}(e),titleAttributes:u(A.ATTRIBUTE_NAMES.TITLE,e)};var i},R.requestAnimationFrame=T,R.warn=E}).call(this,g(195))},195:function(Vg,Wg){var Xg;Xg=function(){return this}();try{Xg=Xg||Function("return this")()||eval("this")}catch(Vg){"object"==typeof window&&(Xg=window)}Vg.exports=Xg},196:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],0<=t.indexOf(n)||(o[n]=e[n]);return o}},197:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n}}]);