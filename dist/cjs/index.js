"use strict";function e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t,r={exports:{}},n={};var o,a={exports:{}};
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */"production"===process.env.NODE_ENV?r.exports=function(){if(t)return n;t=1;var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator,y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function v(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}function g(){}function b(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=v.prototype;var _=b.prototype=new g;_.constructor=b,m(_,v.prototype),_.isPureReactComponent=!0;var w=Array.isArray,x=Object.prototype.hasOwnProperty,E={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function S(t,r,n){var o,a={},u=null,i=null;if(null!=r)for(o in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(u=""+r.key),r)x.call(r,o)&&!k.hasOwnProperty(o)&&(a[o]=r[o]);var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){for(var c=Array(s),l=0;l<s;l++)c[l]=arguments[l+2];a.children=c}if(t&&t.defaultProps)for(o in s=t.defaultProps)void 0===a[o]&&(a[o]=s[o]);return{$$typeof:e,type:t,key:u,ref:i,props:a,_owner:E.current}}function C(t){return"object"==typeof t&&null!==t&&t.$$typeof===e}var O=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function j(t,n,o,a,u){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var s=!1;if(null===t)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case e:case r:s=!0}}if(s)return u=u(s=t),t=""===a?"."+R(s,0):a,w(u)?(o="",null!=t&&(o=t.replace(O,"$&/")+"/"),j(u,n,o,"",(function(e){return e}))):null!=u&&(C(u)&&(u=function(t,r){return{$$typeof:e,type:t.type,key:r,ref:t.ref,props:t.props,_owner:t._owner}}(u,o+(!u.key||s&&s.key===u.key?"":(""+u.key).replace(O,"$&/")+"/")+t)),n.push(u)),1;if(s=0,a=""===a?".":a+":",w(t))for(var c=0;c<t.length;c++){var l=a+R(i=t[c],c);s+=j(i,n,o,l,u)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(t),"function"==typeof l)for(t=l.call(t),c=0;!(i=t.next()).done;)s+=j(i=i.value,n,o,l=a+R(i,c++),u);else if("object"===i)throw n=String(t),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function N(e,t,r){if(null==e)return e;var n=[],o=0;return j(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},T={transition:null},I={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:T,ReactCurrentOwner:E};return n.Children={map:N,forEach:function(e,t,r){N(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return N(e,(function(){t++})),t},toArray:function(e){return N(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=v,n.Fragment=o,n.Profiler=u,n.PureComponent=b,n.StrictMode=a,n.Suspense=l,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,n.cloneElement=function(t,r,n){if(null==t)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o=m({},t.props),a=t.key,u=t.ref,i=t._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,i=E.current),void 0!==r.key&&(a=""+r.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(c in r)x.call(r,c)&&!k.hasOwnProperty(c)&&(o[c]=void 0===r[c]&&void 0!==s?s[c]:r[c])}var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){s=Array(c);for(var l=0;l<c;l++)s[l]=arguments[l+2];o.children=s}return{$$typeof:e,type:t.type,key:a,ref:u,props:o,_owner:i}},n.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},n.createElement=S,n.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:c,render:e}},n.isValidElement=C,n.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},n.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},n.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,t){return $.current.useCallback(e,t)},n.useContext=function(e){return $.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return $.current.useDeferredValue(e)},n.useEffect=function(e,t){return $.current.useEffect(e,t)},n.useId=function(){return $.current.useId()},n.useImperativeHandle=function(e,t,r){return $.current.useImperativeHandle(e,t,r)},n.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},n.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},n.useMemo=function(e,t){return $.current.useMemo(e,t)},n.useReducer=function(e,t,r){return $.current.useReducer(e,t,r)},n.useRef=function(e){return $.current.useRef(e)},n.useState=function(e){return $.current.useState(e)},n.useSyncExternalStore=function(e,t,r){return $.current.useSyncExternalStore(e,t,r)},n.useTransition=function(){return $.current.useTransition()},n.version="18.2.0",n}():r.exports=(o||(o=1,function(e,t){"production"!==process.env.NODE_ENV&&function(){"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),y=Symbol.for("react.offscreen"),m=Symbol.iterator,h="@@iterator";function v(e){if(null===e||"object"!=typeof e)return null;var t=m&&e[m]||e[h];return"function"==typeof t?t:null}var g={current:null},b={transition:null},_={current:null,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1},w={current:null},x={},E=null;function k(e){E=e}x.setExtraStackFrame=function(e){E=e},x.getCurrentStack=null,x.getStackAddendum=function(){var e="";E&&(e+=E);var t=x.getCurrentStack;return t&&(e+=t()||""),e};var S=!1,C=!1,O=!1,R=!1,j=!1,N={ReactCurrentDispatcher:g,ReactCurrentBatchConfig:b,ReactCurrentOwner:w};function P(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];T("warn",e,r)}function $(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];T("error",e,r)}function T(e,t,r){var n=N.ReactDebugCurrentFrame.getStackAddendum();""!==n&&(t+="%s",r=r.concat([n]));var o=r.map((function(e){return String(e)}));o.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,o)}N.ReactDebugCurrentFrame=x,N.ReactCurrentActQueue=_;var I={};function D(e,t){var r=e.constructor,n=r&&(r.displayName||r.name)||"ReactClass",o=n+"."+t;I[o]||($("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",t,n),I[o]=!0)}var L={isMounted:function(e){return!1},enqueueForceUpdate:function(e,t,r){D(e,"forceUpdate")},enqueueReplaceState:function(e,t,r,n){D(e,"replaceState")},enqueueSetState:function(e,t,r,n){D(e,"setState")}},M=Object.assign,A={};function F(e,t,r){this.props=e,this.context=t,this.refs=A,this.updater=r||L}Object.freeze(A),F.prototype.isReactComponent={},F.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},F.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};var V={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},U=function(e,t){Object.defineProperty(F.prototype,e,{get:function(){P("%s(...) is deprecated in plain JavaScript React classes. %s",t[0],t[1])}})};for(var z in V)V.hasOwnProperty(z)&&U(z,V[z]);function B(){}function q(e,t,r){this.props=e,this.context=t,this.refs=A,this.updater=r||L}B.prototype=F.prototype;var W=q.prototype=new B;W.constructor=q,M(W,F.prototype),W.isPureReactComponent=!0;var Y=Array.isArray;function H(e){return Y(e)}function G(e){return""+e}function K(e){if(function(e){try{return G(e),!1}catch(e){return!0}}(e))return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",function(e){return"function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"}(e)),G(e)}function J(e){return e.displayName||"Context"}function Q(e){if(null==e)return null;if("number"==typeof e.tag&&$("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case o:return"Fragment";case n:return"Portal";case u:return"Profiler";case a:return"StrictMode";case l:return"Suspense";case f:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case s:return J(e)+".Consumer";case i:return J(e._context)+".Provider";case c:return function(e,t,r){var n=e.displayName;if(n)return n;var o=t.displayName||t.name||"";return""!==o?r+"("+o+")":r}(e,e.render,"ForwardRef");case p:var t=e.displayName||null;return null!==t?t:Q(e.type)||"Memo";case d:var r=e,y=r._payload,m=r._init;try{return Q(m(y))}catch(e){return null}}return null}var X,Z,ee,te=Object.prototype.hasOwnProperty,re={key:!0,ref:!0,__self:!0,__source:!0};function ne(e){if(te.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}function oe(e){if(te.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}ee={};var ae=function(e,t,n,o,a,u,i){var s={$$typeof:r,type:e,key:t,ref:n,props:i,_owner:u,_store:{}};return Object.defineProperty(s._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(s,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(s,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(s.props),Object.freeze(s)),s};function ue(e,t,r){var n,o={},a=null,u=null,i=null,s=null;if(null!=t)for(n in ne(t)&&(u=t.ref,function(e){if("string"==typeof e.ref&&w.current&&e.__self&&w.current.stateNode!==e.__self){var t=Q(w.current.type);ee[t]||($('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',t,e.ref),ee[t]=!0)}}(t)),oe(t)&&(K(t.key),a=""+t.key),i=void 0===t.__self?null:t.__self,s=void 0===t.__source?null:t.__source,t)te.call(t,n)&&!re.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(c>1){for(var l=Array(c),f=0;f<c;f++)l[f]=arguments[f+2];Object.freeze&&Object.freeze(l),o.children=l}if(e&&e.defaultProps){var p=e.defaultProps;for(n in p)void 0===o[n]&&(o[n]=p[n])}if(a||u){var d="function"==typeof e?e.displayName||e.name||"Unknown":e;a&&function(e,t){var r=function(){X||(X=!0,$("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"key",{get:r,configurable:!0})}(o,d),u&&function(e,t){var r=function(){Z||(Z=!0,$("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"ref",{get:r,configurable:!0})}(o,d)}return ae(e,a,u,i,s,w.current,o)}function ie(e,t,r){if(null==e)throw new Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n,o,a=M({},e.props),u=e.key,i=e.ref,s=e._self,c=e._source,l=e._owner;if(null!=t)for(n in ne(t)&&(i=t.ref,l=w.current),oe(t)&&(K(t.key),u=""+t.key),e.type&&e.type.defaultProps&&(o=e.type.defaultProps),t)te.call(t,n)&&!re.hasOwnProperty(n)&&(void 0===t[n]&&void 0!==o?a[n]=o[n]:a[n]=t[n]);var f=arguments.length-2;if(1===f)a.children=r;else if(f>1){for(var p=Array(f),d=0;d<f;d++)p[d]=arguments[d+2];a.children=p}return ae(e.type,u,i,s,c,l,a)}function se(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var ce=".",le=":",fe=!1,pe=/\/+/g;function de(e){return e.replace(pe,"$&/")}function ye(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(K(e.key),r=""+e.key,n={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,(function(e){return n[e]}))):t.toString(36);var r,n}function me(e,t,o,a,u){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s,c,l,f=!1;if(null===e)f=!0;else switch(i){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case r:case n:f=!0}}if(f){var p=e,d=u(p),y=""===a?ce+ye(p,0):a;if(H(d)){var m="";null!=y&&(m=de(y)+"/"),me(d,t,m,"",(function(e){return e}))}else null!=d&&(se(d)&&(!d.key||p&&p.key===d.key||K(d.key),s=d,c=o+(!d.key||p&&p.key===d.key?"":de(""+d.key)+"/")+y,d=ae(s.type,c,s.ref,s._self,s._source,s._owner,s.props)),t.push(d));return 1}var h=0,g=""===a?ce:a+le;if(H(e))for(var b=0;b<e.length;b++)h+=me(l=e[b],t,o,g+ye(l,b),u);else{var _=v(e);if("function"==typeof _){var w=e;_===w.entries&&(fe||P("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),fe=!0);for(var x,E=_.call(w),k=0;!(x=E.next()).done;)h+=me(l=x.value,t,o,g+ye(l,k++),u)}else if("object"===i){var S=String(e);throw new Error("Objects are not valid as a React child (found: "+("[object Object]"===S?"object with keys {"+Object.keys(e).join(", ")+"}":S)+"). If you meant to render a collection of children, use an array instead.")}}return h}function he(e,t,r){if(null==e)return e;var n=[],o=0;return me(e,n,"","",(function(e){return t.call(r,e,o++)})),n}var ve,ge=-1,be=0,_e=1,we=2;function xe(e){if(e._status===ge){var t=(0,e._result)();if(t.then((function(t){if(e._status===be||e._status===ge){var r=e;r._status=_e,r._result=t}}),(function(t){if(e._status===be||e._status===ge){var r=e;r._status=we,r._result=t}})),e._status===ge){var r=e;r._status=be,r._result=t}}if(e._status===_e){var n=e._result;return void 0===n&&$("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",n),"default"in n||$("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",n),n.default}throw e._result}function Ee(e){return"string"==typeof e||"function"==typeof e||!!(e===o||e===u||j||e===a||e===l||e===f||R||e===y||S||C||O)||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===p||e.$$typeof===i||e.$$typeof===s||e.$$typeof===c||e.$$typeof===ve||void 0!==e.getModuleId)}function ke(){var e=g.current;return null===e&&$("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem."),e}ve=Symbol.for("react.module.reference");var Se,Ce,Oe,Re,je,Ne,Pe,$e=0;function Te(){}Te.__reactDisabledLog=!0;var Ie,De=N.ReactCurrentDispatcher;function Le(e,t,r){if(void 0===Ie)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);Ie=n&&n[1]||""}return"\n"+Ie+e}var Me,Ae=!1,Fe="function"==typeof WeakMap?WeakMap:Map;function Ve(e,t){if(!e||Ae)return"";var r,n=Me.get(e);if(void 0!==n)return n;Ae=!0;var o,a=Error.prepareStackTrace;Error.prepareStackTrace=void 0,o=De.current,De.current=null,function(){if(0===$e){Se=console.log,Ce=console.info,Oe=console.warn,Re=console.error,je=console.group,Ne=console.groupCollapsed,Pe=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Te,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}$e++}();try{if(t){var u=function(){throw Error()};if(Object.defineProperty(u.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(u,[])}catch(e){r=e}Reflect.construct(e,[],u)}else{try{u.call()}catch(e){r=e}e.call(u.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var i=t.stack.split("\n"),s=r.stack.split("\n"),c=i.length-1,l=s.length-1;c>=1&&l>=0&&i[c]!==s[l];)l--;for(;c>=1&&l>=0;c--,l--)if(i[c]!==s[l]){if(1!==c||1!==l)do{if(c--,--l<0||i[c]!==s[l]){var f="\n"+i[c].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),"function"==typeof e&&Me.set(e,f),f}}while(c>=1&&l>=0);break}}}finally{Ae=!1,De.current=o,function(){if(0==--$e){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:M({},e,{value:Se}),info:M({},e,{value:Ce}),warn:M({},e,{value:Oe}),error:M({},e,{value:Re}),group:M({},e,{value:je}),groupCollapsed:M({},e,{value:Ne}),groupEnd:M({},e,{value:Pe})})}$e<0&&$("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=a}var p=e?e.displayName||e.name:"",d=p?Le(p):"";return"function"==typeof e&&Me.set(e,d),d}function Ue(e,t,r){if(null==e)return"";if("function"==typeof e)return Ve(e,function(e){var t=e.prototype;return!(!t||!t.isReactComponent)}(e));if("string"==typeof e)return Le(e);switch(e){case l:return Le("Suspense");case f:return Le("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case c:return Ve(e.render,!1);case p:return Ue(e.type,t,r);case d:var n=e,o=n._payload,a=n._init;try{return Ue(a(o),t,r)}catch(e){}}return""}Me=new Fe;var ze,Be={},qe=N.ReactDebugCurrentFrame;function We(e){if(e){var t=e._owner,r=Ue(e.type,e._source,t?t.type:null);qe.setExtraStackFrame(r)}else qe.setExtraStackFrame(null)}function Ye(e){if(e){var t=e._owner;k(Ue(e.type,e._source,t?t.type:null))}else k(null)}function He(){if(w.current){var e=Q(w.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}ze=!1;var Ge={};function Ke(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var r=function(e){var t=He();if(!t){var r="string"==typeof e?e:e.displayName||e.name;r&&(t="\n\nCheck the top-level render call using <"+r+">.")}return t}(t);if(!Ge[r]){Ge[r]=!0;var n="";e&&e._owner&&e._owner!==w.current&&(n=" It was passed a child from "+Q(e._owner.type)+"."),Ye(e),$('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',r,n),Ye(null)}}}function Je(e,t){if("object"==typeof e)if(H(e))for(var r=0;r<e.length;r++){var n=e[r];se(n)&&Ke(n,t)}else if(se(e))e._store&&(e._store.validated=!0);else if(e){var o=v(e);if("function"==typeof o&&o!==e.entries)for(var a,u=o.call(e);!(a=u.next()).done;)se(a.value)&&Ke(a.value,t)}}function Qe(e){var t,r=e.type;if(null!=r&&"string"!=typeof r){if("function"==typeof r)t=r.propTypes;else{if("object"!=typeof r||r.$$typeof!==c&&r.$$typeof!==p)return;t=r.propTypes}if(t){var n=Q(r);!function(e,t,r,n,o){var a=Function.call.bind(te);for(var u in e)if(a(e,u)){var i=void 0;try{if("function"!=typeof e[u]){var s=Error((n||"React class")+": "+r+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw s.name="Invariant Violation",s}i=e[u](t,u,n,r,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){i=e}!i||i instanceof Error||(We(o),$("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",r,u,typeof i),We(null)),i instanceof Error&&!(i.message in Be)&&(Be[i.message]=!0,We(o),$("Failed %s type: %s",r,i.message),We(null))}}(t,e.props,"prop",n,e)}else void 0===r.PropTypes||ze||(ze=!0,$("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",Q(r)||"Unknown"));"function"!=typeof r.getDefaultProps||r.getDefaultProps.isReactClassApproved||$("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Xe(e,t,n){var a,u,i=Ee(e);if(!i){var s,c="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(c+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),c+=(null!=(a=t)&&void 0!==(u=a.__source)?"\n\nCheck your code at "+u.fileName.replace(/^.*[\\\/]/,"")+":"+u.lineNumber+".":"")||He(),null===e?s="null":H(e)?s="array":void 0!==e&&e.$$typeof===r?(s="<"+(Q(e.type)||"Unknown")+" />",c=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,$("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,c)}var l=ue.apply(this,arguments);if(null==l)return l;if(i)for(var f=2;f<arguments.length;f++)Je(arguments[f],e);return e===o?function(e){for(var t=Object.keys(e.props),r=0;r<t.length;r++){var n=t[r];if("children"!==n&&"key"!==n){Ye(e),$("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),Ye(null);break}}null!==e.ref&&(Ye(e),$("Invalid attribute `ref` supplied to `React.Fragment`."),Ye(null))}(l):Qe(l),l}var Ze=!1,et=!1,tt=null,rt=0,nt=!1;function ot(e){e!==rt-1&&$("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),rt=e}function at(t,r,n){var o=_.current;if(null!==o)try{it(o),function(t){if(null===tt)try{var r=("require"+Math.random()).slice(0,7);tt=(e&&e[r]).call(e,"timers").setImmediate}catch(e){tt=function(e){!1===et&&(et=!0,"undefined"==typeof MessageChannel&&$("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var t=new MessageChannel;t.port1.onmessage=e,t.port2.postMessage(void 0)}}tt(t)}((function(){0===o.length?(_.current=null,r(t)):at(t,r,n)}))}catch(e){n(e)}else r(t)}var ut=!1;function it(e){if(!ut){ut=!0;var t=0;try{for(;t<e.length;t++){var r=e[t];do{r=r(!0)}while(null!==r)}e.length=0}catch(r){throw e=e.slice(t+1),r}finally{ut=!1}}}var st=Xe,ct=function(e,t,r){for(var n=ie.apply(this,arguments),o=2;o<arguments.length;o++)Je(arguments[o],n.type);return Qe(n),n},lt=function(e){var t=Xe.bind(null,e);return t.type=e,Ze||(Ze=!0,P("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),Object.defineProperty(t,"type",{enumerable:!1,get:function(){return P("Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),t},ft={map:he,forEach:function(e,t,r){he(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return he(e,(function(){t++})),t},toArray:function(e){return he(e,(function(e){return e}))||[]},only:function(e){if(!se(e))throw new Error("React.Children.only expected to receive a single React element child.");return e}};t.Children=ft,t.Component=F,t.Fragment=o,t.Profiler=u,t.PureComponent=q,t.StrictMode=a,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,t.cloneElement=ct,t.createContext=function(e){var t={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};t.Provider={$$typeof:i,_context:t};var r=!1,n=!1,o=!1,a={$$typeof:s,_context:t};return Object.defineProperties(a,{Provider:{get:function(){return n||(n=!0,$("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),t.Provider},set:function(e){t.Provider=e}},_currentValue:{get:function(){return t._currentValue},set:function(e){t._currentValue=e}},_currentValue2:{get:function(){return t._currentValue2},set:function(e){t._currentValue2=e}},_threadCount:{get:function(){return t._threadCount},set:function(e){t._threadCount=e}},Consumer:{get:function(){return r||(r=!0,$("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),t.Consumer}},displayName:{get:function(){return t.displayName},set:function(e){o||(P("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",e),o=!0)}}}),t.Consumer=a,t._currentRenderer=null,t._currentRenderer2=null,t},t.createElement=st,t.createFactory=lt,t.createRef=function(){var e={current:null};return Object.seal(e),e},t.forwardRef=function(e){null!=e&&e.$$typeof===p?$("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):"function"!=typeof e?$("forwardRef requires a render function but was given %s.",null===e?"null":typeof e):0!==e.length&&2!==e.length&&$("forwardRef render functions accept exactly two parameters: props and ref. %s",1===e.length?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),null!=e&&(null==e.defaultProps&&null==e.propTypes||$("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?"));var t,r={$$typeof:c,render:e};return Object.defineProperty(r,"displayName",{enumerable:!1,configurable:!0,get:function(){return t},set:function(r){t=r,e.name||e.displayName||(e.displayName=r)}}),r},t.isValidElement=se,t.lazy=function(e){var t,r,n={$$typeof:d,_payload:{_status:ge,_result:e},_init:xe};return Object.defineProperties(n,{defaultProps:{configurable:!0,get:function(){return t},set:function(e){$("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),t=e,Object.defineProperty(n,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return r},set:function(e){$("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),r=e,Object.defineProperty(n,"propTypes",{enumerable:!0})}}}),n},t.memo=function(e,t){Ee(e)||$("memo: The first argument must be a component. Instead received: %s",null===e?"null":typeof e);var r,n={$$typeof:p,type:e,compare:void 0===t?null:t};return Object.defineProperty(n,"displayName",{enumerable:!1,configurable:!0,get:function(){return r},set:function(t){r=t,e.name||e.displayName||(e.displayName=t)}}),n},t.startTransition=function(e,t){var r=b.transition;b.transition={};var n=b.transition;b.transition._updatedFibers=new Set;try{e()}finally{b.transition=r,null===r&&n._updatedFibers&&(n._updatedFibers.size>10&&P("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."),n._updatedFibers.clear())}},t.unstable_act=function(e){var t=rt;rt++,null===_.current&&(_.current=[]);var r,n=_.isBatchingLegacy;try{if(_.isBatchingLegacy=!0,r=e(),!n&&_.didScheduleLegacyUpdate){var o=_.current;null!==o&&(_.didScheduleLegacyUpdate=!1,it(o))}}catch(e){throw ot(t),e}finally{_.isBatchingLegacy=n}if(null!==r&&"object"==typeof r&&"function"==typeof r.then){var a=r,u=!1,i={then:function(e,r){u=!0,a.then((function(n){ot(t),0===rt?at(n,e,r):e(n)}),(function(e){ot(t),r(e)}))}};return nt||"undefined"==typeof Promise||Promise.resolve().then((function(){})).then((function(){u||(nt=!0,$("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))})),i}var s=r;if(ot(t),0===rt){var c=_.current;return null!==c&&(it(c),_.current=null),{then:function(e,t){null===_.current?(_.current=[],at(s,e,t)):e(s)}}}return{then:function(e,t){e(s)}}},t.useCallback=function(e,t){return ke().useCallback(e,t)},t.useContext=function(e){var t=ke();if(void 0!==e._context){var r=e._context;r.Consumer===e?$("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):r.Provider===e&&$("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return t.useContext(e)},t.useDebugValue=function(e,t){return ke().useDebugValue(e,t)},t.useDeferredValue=function(e){return ke().useDeferredValue(e)},t.useEffect=function(e,t){return ke().useEffect(e,t)},t.useId=function(){return ke().useId()},t.useImperativeHandle=function(e,t,r){return ke().useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return ke().useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return ke().useLayoutEffect(e,t)},t.useMemo=function(e,t){return ke().useMemo(e,t)},t.useReducer=function(e,t,r){return ke().useReducer(e,t,r)},t.useRef=function(e){return ke().useRef(e)},t.useState=function(e){return ke().useState(e)},t.useSyncExternalStore=function(e,t,r){return ke().useSyncExternalStore(e,t,r)},t.useTransition=function(){return ke().useTransition()},t.version="18.2.0","undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)}()}(a,a.exports)),a.exports);var u=r.exports,i=e(u);exports.Button=e=>{const{label:t}=e;return i.createElement("button",{className:"btn btn-blue"},t)},exports.Homepage=e=>{const{children:t}=e;return u.createElement("div",{className:"container mx-auto sm:px-4"},u.createElement("div",{className:"flex flex-wrap"},u.createElement("div",{className:"md:w-full pr-4 pl-4"},u.createElement("nav",{className:"bg-gray-800"},u.createElement("div",{className:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"},u.createElement("div",{className:"relative flex h-16 items-center justify-between"},u.createElement("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden"},u.createElement("button",{type:"button",className:"relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white","aria-controls":"mobile-menu","aria-expanded":"false"},u.createElement("span",{className:"absolute -inset-0.5"}),u.createElement("span",{className:"sr-only"},"Open main menu"),u.createElement("svg",{className:"block h-6 w-6",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},u.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})),u.createElement("svg",{className:"hidden h-6 w-6",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},u.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})))),u.createElement("div",{className:"flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"},u.createElement("div",{className:"flex flex-shrink-0 items-center"},u.createElement("img",{className:"h-8 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500",alt:"Your Company"})),u.createElement("div",{className:"hidden sm:ml-6 sm:block"},u.createElement("div",{className:"flex space-x-4"},u.createElement("a",{href:"#",className:"bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium","aria-current":"page"},"Dashboard"),u.createElement("a",{href:"#",className:"text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"},"Team"),u.createElement("a",{href:"#",className:"text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"},"Projects"),u.createElement("a",{href:"#",className:"text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"},"Calendar")))),u.createElement("div",{className:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"},u.createElement("button",{type:"button",className:"relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"},u.createElement("span",{className:"absolute -inset-1.5"}),u.createElement("span",{className:"sr-only"},"View notifications"),u.createElement("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},u.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"}))),u.createElement("div",{className:"relative ml-3"},u.createElement("div",null,u.createElement("button",{type:"button",className:"relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",id:"user-menu-button","aria-expanded":"false","aria-haspopup":"true"},u.createElement("span",{className:"absolute -inset-1.5"}),u.createElement("span",{className:"sr-only"},"Open user menu"),u.createElement("img",{className:"h-8 w-8 rounded-full",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:""}))),u.createElement("div",{className:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",role:"menu","aria-orientation":"vertical","aria-labelledby":"user-menu-button",tabIndex:-1},u.createElement("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700",role:"menuitem",tabIndex:-1,id:"user-menu-item-0"},"Your Profile"),u.createElement("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700",role:"menuitem",tabIndex:-1,id:"user-menu-item-1"},"Settings"),u.createElement("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700",role:"menuitem",tabIndex:-1,id:"user-menu-item-2"},"Sign out")))))),u.createElement("div",{className:"sm:hidden",id:"mobile-menu"},u.createElement("div",{className:"space-y-1 px-2 pb-3 pt-2"},u.createElement("a",{href:"#",className:"bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium","aria-current":"page"},"Dashboard"),u.createElement("a",{href:"#",className:"text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"},"Team"),u.createElement("a",{href:"#",className:"text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"},"Projects"),u.createElement("a",{href:"#",className:"text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"},"Calendar")))),t)))};
//# sourceMappingURL=index.js.map
