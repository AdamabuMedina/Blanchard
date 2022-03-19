(function ymapsInit(e,n){var t=this,r={ns:{},supports:{},env:e},i=.01;r.performance=function(e){function n(){E=E||setTimeout(t,_)}function t(){clearTimeout(E),E=null;var e=r();if(e){var t=s+"/vars="+e+"/*";if(!a||!navigator.sendBeacon(o,t)){var i=new Image,c=(new Date).getTime()+Math.round(100*Math.random());i.src=o+"/rnd="+c+t}n()}}function r(){var e=[];return i(e,v),i(e,p),e.join(",")}function i(e,n){for(var t in n)if(n.hasOwnProperty(t)&&n[t].length&&(e.push(t+"="+n[t].shift()),e.length>=y))return}var o,s,a,c,u={exports:{}},l=(u.exports,window.performance||Object.create(null)),f=l.now?l.now.bind(l):function(){return Date.now()},d=l.getEntriesByType?function(e){return l.getEntriesByType("resource").filter(function(n){return n.name===e})[0]}:function(){},p={},v={},h={initjs:"i",mapjs:"m",combine_s:"cs",combine_m:"cm",combine_l:"cl"},m={eval:"e",duration:"d",cached:"c",encodedSize:"esz",decodedSize:"dsz",responseDuration:"res",requestDuration:"req"},g={statistics:{combine:{total:0,size:0,modules:0}},initTimings:{},now:f,getResourceTimings:function(e){return d(e)||{}},init:function(e){o=e.url,s="/pid=443/cid=73188/dtype=stred"+e.data,a=Boolean(e.useSendBeacon&&navigator.sendBeacon),c=e.enable,g.initTimings=g.getResourceTimings(e.initUrl),g.saveResourceTimings("initjs",g.initTimings,{size:!1,cached:!1})},saveMeasure:function(e,t){if(c){var r=/^@/.test(e);if(r){var i=e.replace(/^@/,"").split(".");e=(h[i[0]]||i[0])+"."+(m[i[1]]||i[1])}if(t=Math.round(t),!isNaN(t)){var o=r?p:v;o[e]=o[e]||[],o[e].push(t),n()}}},startMeasure:function(e,n){n="undefined"==typeof n?f():n;var t=!1;return{finish:function(r){t||(r="undefined"==typeof r?f():r,g.saveMeasure(e,r-n),t=!0)}}},saveResourceTimings:function(e,n,t){var r="object"==typeof n?n:d(n);if(r&&(t=t||{},e=e.replace(/^@?/,"@"),this.saveMeasure(e+".duration",r.duration),r.responseStart)){var i=0===r.transferSize?1:0;this.saveMeasure(e+".responseDuration",r.responseEnd-r.responseStart),this.saveMeasure(e+".requestDuration",r.responseStart-r.requestStart),t.cached!==!1&&this.saveMeasure(e+".cached",i),t.size===!1||i||(this.saveMeasure(e+".encodedSize",r.encodedBodySize/1024),this.saveMeasure(e+".decodedSize",r.decodedBodySize/1024))}}},y=40,_=5e3,E=null;return window.addEventListener("beforeunload",function(){g.saveMeasure("combine.total",g.statistics.combine.total),g.saveMeasure("combine.modules",g.statistics.combine.modules),g.saveMeasure("combine.size",g.statistics.combine.size/1024),t()}),u.exports=g,u.exports}();var o=r.performance.startMeasure("@initjs.eval");r.count=function(e){function n(){r.push(arguments)}var t={exports:{}},r=(t.exports,[]),i=null,o=function(){(i||n).apply(null,arguments)};return o.provideImplementation=function(e){if(i)throw new Error("ym.count: implementation was already provided.");i=e(r)},t.exports=o,t.exports}(),r.vow=r.ns.vow=function(e){var n,r={exports:{}};r.exports;return function(e){var t,i=function(){var n=[],t=function(e){return n.push(e),1===n.length},r=function(){var e=n,t=0,r=n.length;for(n=[];t<r;)e[t++]()};if("function"==typeof setImmediate)return function(e){t(e)&&setImmediate(r)};if("object"==typeof process&&process.nextTick)return function(e){t(e)&&process.nextTick(r)};var i=e.MutationObserver||e.WebKitMutationObserver;if(i){var o=1,s=document.createTextNode("");return new i(r).observe(s,{characterData:!0}),function(e){t(e)&&(s.data=o*=-1)}}if(e.postMessage){var a=!0;if(e.attachEvent){var c=function(){a=!1};e.attachEvent("onmessage",c),e.postMessage("__checkAsync","*"),e.detachEvent("onmessage",c)}if(a){var u="__promise"+Math.random()+"_"+new Date,l=function(e){e.data===u&&(e.stopPropagation&&e.stopPropagation(),r())};return e.addEventListener?e.addEventListener("message",l,!0):e.attachEvent("onmessage",l),function(n){t(n)&&e.postMessage(u,"*")}}}var f=e.document;if("onreadystatechange"in f.createElement("script")){var d=function(){var e=f.createElement("script");e.onreadystatechange=function(){e.parentNode.removeChild(e),e=e.onreadystatechange=null,r()},(f.documentElement||f.body).appendChild(e)};return function(e){t(e)&&d()}}return function(e){t(e)&&setTimeout(r,0)}}(),o=function(e){i(function(){throw e})},s=function(e){return"function"==typeof e},a=function(e){return null!==e&&"object"==typeof e},c=Object.prototype.toString,u=Array.isArray||function(e){return"[object Array]"===c.call(e)},l=function(e){for(var n=[],t=0,r=e.length;t<r;)n.push(t++);return n},f=Object.keys||function(e){var n=[];for(var t in e)e.hasOwnProperty(t)&&n.push(t);return n},d=function(e){var n=function(n){this.name=e,this.message=n};return n.prototype=new Error,n},p=function(e,n){return function(t){e.call(this,t,n)}},v=function(){this._promise=new m};v.prototype={promise:function(){return this._promise},resolve:function(e){this._promise.isResolved()||this._promise._resolve(e)},reject:function(e){this._promise.isResolved()||(_.isPromise(e)?(e=e.then(function(e){var n=_.defer();return n.reject(e),n.promise()}),this._promise._resolve(e)):this._promise._reject(e))},notify:function(e){this._promise.isResolved()||this._promise._notify(e)}};var h={PENDING:0,RESOLVED:1,FULFILLED:2,REJECTED:3},m=function(e){if(this._value=t,this._status=h.PENDING,this._fulfilledCallbacks=[],this._rejectedCallbacks=[],this._progressCallbacks=[],e){var n=this,r=e.length;e(function(e){n.isResolved()||n._resolve(e)},r>1?function(e){n.isResolved()||n._reject(e)}:t,r>2?function(e){n.isResolved()||n._notify(e)}:t)}};m.prototype={valueOf:function(){return this._value},isResolved:function(){return this._status!==h.PENDING},isFulfilled:function(){return this._status===h.FULFILLED},isRejected:function(){return this._status===h.REJECTED},then:function(e,n,t,r){var i=new v;return this._addCallbacks(i,e,n,t,r),i.promise()},"catch":function(e,n){return this.then(t,e,n)},fail:function(e,n){return this.then(t,e,n)},always:function(e,n){var t=this,r=function(){return e.call(this,t)};return this.then(r,r,n)},progress:function(e,n){return this.then(t,t,e,n)},spread:function(e,n,t){return this.then(function(n){return e.apply(this,n)},n,t)},done:function(e,n,t,r){this.then(e,n,t,r).fail(o)},delay:function(e){var n,t=this.then(function(t){var r=new v;return n=setTimeout(function(){r.resolve(t)},e),r.promise()});return t.always(function(){clearTimeout(n)}),t},timeout:function(e){var n=new v,t=setTimeout(function(){n.reject(new _.TimedOutError("timed out"))},e);return this.then(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise().always(function(){clearTimeout(t)}),n.promise()},_vow:!0,_resolve:function(e){if(!(this._status>h.RESOLVED)){if(e===this)return void this._reject(TypeError("Can't resolve promise with itself"));if(this._status=h.RESOLVED,e&&e._vow)return void(e.isFulfilled()?this._fulfill(e.valueOf()):e.isRejected()?this._reject(e.valueOf()):e.then(this._fulfill,this._reject,this._notify,this));if(a(e)||s(e)){var n;try{n=e.then}catch(t){return void this._reject(t)}if(s(n)){var r=this,i=!1;try{n.call(e,function(e){i||(i=!0,r._resolve(e))},function(e){i||(i=!0,r._reject(e))},function(e){r._notify(e)})}catch(t){i||this._reject(t)}return}}this._fulfill(e)}},_fulfill:function(e){this._status>h.RESOLVED||(this._status=h.FULFILLED,this._value=e,this._callCallbacks(this._fulfilledCallbacks,e),this._fulfilledCallbacks=this._rejectedCallbacks=this._progressCallbacks=t)},_reject:function(e){this._status>h.RESOLVED||(this._status=h.REJECTED,this._value=e,this._callCallbacks(this._rejectedCallbacks,e),this._fulfilledCallbacks=this._rejectedCallbacks=this._progressCallbacks=t)},_notify:function(e){this._callCallbacks(this._progressCallbacks,e)},_addCallbacks:function(e,n,r,i,o){r&&!s(r)?(o=r,r=t):i&&!s(i)&&(o=i,i=t);var a;this.isRejected()||(a={defer:e,fn:s(n)?n:t,ctx:o},this.isFulfilled()?this._callCallbacks([a],this._value):this._fulfilledCallbacks.push(a)),this.isFulfilled()||(a={defer:e,fn:r,ctx:o},this.isRejected()?this._callCallbacks([a],this._value):this._rejectedCallbacks.push(a)),this._status<=h.RESOLVED&&this._progressCallbacks.push({defer:e,fn:i,ctx:o})},_callCallbacks:function(e,n){var t=e.length;if(t){var r=this.isResolved(),o=this.isFulfilled(),s=this.isRejected();i(function(){for(var i,a,c,u=0;u<t;)if(i=e[u++],a=i.defer,c=i.fn){var l,f=i.ctx;try{l=f?c.call(f,n):c(n)}catch(d){a.reject(d);continue}r?a.resolve(l):a.notify(l)}else o?a.resolve(n):s?a.reject(n):a.notify(n)})}}};var g={cast:function(e){return _.cast(e)},all:function(e){return _.all(e)},race:function(e){return _.anyResolved(e)},resolve:function(e){return _.resolve(e)},reject:function(e){return _.reject(e)}};for(var y in g)g.hasOwnProperty(y)&&(m[y]=g[y]);var _={Deferred:v,Promise:m,defer:function(){return new v},when:function(e,n,t,r,i){return _.cast(e).then(n,t,r,i)},fail:function(e,n,r){return _.when(e,t,n,r)},always:function(e,n,t){return _.when(e).always(n,t)},progress:function(e,n,t){return _.when(e).progress(n,t)},spread:function(e,n,t,r){return _.when(e).spread(n,t,r)},done:function(e,n,t,r,i){_.when(e).done(n,t,r,i)},isPromise:function(e){return a(e)&&s(e.then)},cast:function(e){return e&&e._vow?e:_.resolve(e)},valueOf:function(e){return e&&s(e.valueOf)?e.valueOf():e},isFulfilled:function(e){return!e||!s(e.isFulfilled)||e.isFulfilled()},isRejected:function(e){return!(!e||!s(e.isRejected))&&e.isRejected()},isResolved:function(e){return!e||!s(e.isResolved)||e.isResolved()},resolve:function(e){var n=_.defer();return n.resolve(e),n.promise()},fulfill:function(e){var n=_.defer(),t=n.promise();return n.resolve(e),t.isFulfilled()?t:t.then(null,function(e){return e})},reject:function(e){var n=_.defer();return n.reject(e),n.promise()},invoke:function(n,t){var r,i=Math.max(arguments.length-1,0);if(i){r=Array(i);for(var o=0;o<i;)r[o++]=arguments[o]}try{return _.resolve(r?n.apply(e,r):n.call(e))}catch(s){return _.reject(s)}},all:function(e){var n=new v,t=u(e),r=t?l(e):f(e),i=r.length,o=t?[]:{};if(!i)return n.resolve(o),n.promise();var s=i;return _._forEach(e,function(e,t){o[r[t]]=e,--s||n.resolve(o)},n.reject,n.notify,n,r),n.promise()},allResolved:function(e){var n=new v,t=u(e),r=t?l(e):f(e),i=r.length,o=t?[]:{};if(!i)return n.resolve(o),n.promise();var s=function(){--i||n.resolve(e)};return _._forEach(e,s,s,n.notify,n,r),n.promise()},allPatiently:function(e){return _.allResolved(e).then(function(){var n,t,r,i,o=u(e),s=o?l(e):f(e),a=s.length,c=0;if(!a)return o?[]:{};for(;c<a;)r=s[c++],i=e[r],_.isRejected(i)?(n||(n=o?[]:{}),o?n.push(i.valueOf()):n[r]=i.valueOf()):n||((t||(t=o?[]:{}))[r]=_.valueOf(i));if(n)throw n;return t})},any:function(e){var n=new v,t=e.length;if(!t)return n.reject(Error()),n.promise();var r,i=0;return _._forEach(e,n.resolve,function(e){i||(r=e),++i===t&&n.reject(r)},n.notify,n),n.promise()},anyResolved:function(e){var n=new v,t=e.length;return t?(_._forEach(e,n.resolve,n.reject,n.notify,n),n.promise()):(n.reject(Error()),n.promise())},delay:function(e,n){return _.resolve(e).delay(n)},timeout:function(e,n){return _.resolve(e).timeout(n)},_forEach:function(e,n,t,r,i,o){for(var s=o?o.length:e.length,a=0;a<s;)_.when(e[o?o[a]:a],p(n,a),t,r,i),++a},TimedOutError:d("TimedOut")};_.__nextTick__=i;var E=!0;"object"==typeof r&&"object"==typeof r.exports&&(r.exports=_,E=!1),"object"==typeof modules&&s(modules.define)&&(modules.define("vow",function(e){e(_)}),E=!1),"function"==typeof n&&(n(function(e,n,t){t.exports=_}),E=!1),E&&(e.vow=_)}("undefined"!=typeof window?window:t),r.exports}(),r.utils=function(e){function n(n){return e[n]}var t={exports:{}},r=t.exports,i=n("vow"),o=Object.prototype.hasOwnProperty;return r.nextTick=i.__nextTick__,i.__nextTick__=void 0,r.isArray=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},r.extend=Object.assign?Object.assign:function(e){for(var n=1,t=arguments.length;n<t;n++){var r=arguments[n];if(null!=r)for(var i in r)o.call(r,i)&&(e[i]=r[i])}return e},r.setDeep=function(e,n,t){for(var r=n.split("."),i=0;i<r.length-1;i++){var o=r[i];e[o]=e[o]||{},e=e[o]}var s=r[r.length-1];e[s]=t},r.createPackage=function(e,n,t){var i=r.registerImports({},e,n);return t&&(i.__expand={depends:e,imports:n}),i},r.registerImports=function(e,n,t){for(var i=0;i<n.length;i++)t[i].__expand?r.registerImports(e,t[i].__expand.depends,t[i].__expand.imports):r.setDeep(e,n[i],t[i]);return e},t.exports}({vow:r.vow}),function(){function e(e){return"undefined"==typeof f[e]?f[e]=n(e):f[e]}function n(e){return t(e)||t(d+o(e))||t(r.env.browser.cssPrefix+o(e))}function t(e){return"undefined"!=typeof i().style[e]?e:null}function i(){return c||(c=document.createElement("div"))}function o(e){return e?e.substr(0,1).toUpperCase()+e.substr(1):e}function s(n){var t=e(n);return t&&t!=n&&(t="-"+d+"-"+n),t}function a(n){return u[n]&&e("transitionProperty")?s(u[n]):null}var c,u={transform:"transform",opacity:"opacity",transitionTimingFunction:"transition-timing-function",userSelect:"user-select",height:"height"},l={},f={},d=r.env.browser.cssPrefix.toLowerCase();r.supports.css={checkProperty:e,checkTransitionProperty:function(e){return"undefined"==typeof l[e]?l[e]=a(e):l[e]},checkTransitionAvailability:a}}(),r.supports.csp={isSupported:"undefined"!=typeof Blob&&"undefined"!=typeof URL,isNonceSupported:r.env.browser.name&&r.env.browser.version?!(r.env.browser.name.search("Safari")!=-1&&parseInt(r.env.browser.version)<10):null},function(){function e(){if(!window.WebGLRenderingContext)return!1;var e={"Samsung Internet":!0,AndroidBrowser:!0},n="Webkit"==r.env.browser.engine&&+r.env.browser.engineVersion<537;return!n&&!e[r.env.browser.name]}function n(){if(!e())return null;var n,t;try{var r=document.createElement("canvas");t=r.getContext(n="webgl",i),t||(t=r.getContext(n="experimental-webgl",i),t||(n=null))}catch(o){n=null}return n?{contextName:n,context:t}:null}function t(e,n){e.width=226,e.height=256,n.fillStyle="#fff",n.fillRect(0,0,150,150),n.globalCompositeOperation="xor",n.fillStyle="#f00",n.fillRect(10,10,100,100),n.fillStyle="#0f0",n.fillRect(50,50,100,100);for(var t=n.getImageData(49,49,2,2),r=[],i=0;i<16;i++)r.push(t.data[i]);return"0x0x0x0x0x0x0x0x0x0x0x0x0x255x0x255"==r.join("x")}var i={failIfMajorPerformanceCaveat:!0,antialias:!1},o={};r.supports.graphics={hasSvg:function(){return"svg"in o||(o.svg=document.implementation&&document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")),o.svg},hasCanvas:function(){if(!("canvas"in o)){var e=document.createElement("canvas"),n="getContext"in e?e.getContext("2d"):null;o.canvas=!!n&&t(e,n)}return o.canvas},hasWebGl:function(){return"webgl"in o||(o.webgl=n()),o.webgl},redetect:function(){o={}},getWebGlContextName:function(){return o.webgl&&o.webgl.contextName}}}(),function(){function e(){var e=!0;"MacOS"==r.env.browser.osFamily&&/^10\.[0-8](\.|$)/.test(r.env.browser.osVersion)&&(e=!1,n("OldMac"));var o=["requestAnimationFrame","Worker","URL","Blob","XMLHttpRequest","Set","Map","WebAssembly"];o.forEach(function(t){window[t]||(e=!1,n(t))}),"function"!=typeof Math.trunc&&(e=!1,n("MathTrunc"));var s=r.supports.graphics.hasWebGl();if(!s||"webgl"!==s.contextName)return n("hasWebGl"),!1;var a=s.context;0==a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS)&&(e=!1,n("MAX_VERTEX_TEXTURE_IMAGE_UNITS")),a.getExtension("OES_vertex_array_object")||(e=!1,n("OES_vertex_array_object")),a.getExtension("OES_standard_derivatives")||(e=!1,n("OES_standard_derivatives"));var c=a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT);if(c&&0!=c.precision||(e=!1,n("highp")),!t()){var u=i();e=!1,r.count("error",{path:["vectorEngine.drawPointsError",r.env.browser.platform,r.env.browser.name,u.vendor,u.renderer].join("."),share:1})}return e}function n(e){var n=i();r.count("error",{path:["vectorEngine.reasonsVectorNotSupported",e,r.env.browser.platform,r.env.browser.name,n.vendor,n.renderer].join("."),share:.1})}function t(){var e=document.createElement("canvas");e.width=1,e.height=1;var n=e.getContext("webgl",{alpha:!1,depth:!1,antialias:!1}),t=n.createShader(n.VERTEX_SHADER);n.shaderSource(t,"#version 100\nattribute vec2 p;\nvoid main() {\n    gl_Position = vec4(p,0,1);\n    gl_PointSize = 1.0;\n}"),n.compileShader(t);var r=n.createShader(n.FRAGMENT_SHADER);n.shaderSource(r,"#version 100\nvoid main() {\n    gl_FragColor = vec4(1, 0, 0, 1);\n}"),n.compileShader(r);var i=n.createProgram();n.attachShader(i,t),n.attachShader(i,r),n.bindAttribLocation(i,0,"p"),n.linkProgram(i);var o=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,o),n.bufferData(n.ARRAY_BUFFER,new Float32Array([0,0]),n.STATIC_DRAW),n.enableVertexAttribArray(0),n.vertexAttribPointer(0,2,n.FLOAT,!1,0,0),n.clearColor(0,1,0,1),n.clear(n.COLOR_BUFFER_BIT),n.useProgram(i),n.drawArrays(n.POINTS,0,1);var s=new Uint8Array(4);return n.readPixels(0,0,1,1,n.RGBA,n.UNSIGNED_BYTE,s),255===s[0]}function i(){var e={},n=r.supports.graphics.hasWebGl();if(!n)return e;var t=n.context,i=t.getExtension("WEBGL_debug_renderer_info");return i&&(e.vendor=t.getParameter(i.UNMASKED_VENDOR_WEBGL).replace(/\W/g,"_"),e.renderer=t.getParameter(i.UNMASKED_RENDERER_WEBGL).replace(/\W/g,"_")),e}var o;r.supports.vector={isSupported:function(){return void 0===o&&(o=e()),o}}}(),r.supports.printPatchNeeded=!r.supports.css.checkProperty("printColorAdjust"),r.logger=function(e){function n(e,n){var t="";return r.env.debug&&(t+="("+e+"): "),t+=n}var t={exports:{}},i=(t.exports,"Yandex Maps JS API");return t.exports={assert:function(e,t){e||r.env.debug&&console.log(n(i,t))},log:function(e){r.env.debug&&console.log(n(i,e))},notice:function(e){r.env.debug&&console.info(n(i,e))},warning:function(e){r.env.debug&&console.warn(n(i,e))},error:function(e){console.error(n(i,e))},exception:function(e,t){throw new Error(n(e,t))}},t.exports}(),function(){var e=r.env.browser;e.documentMode=document.documentMode,e.isIE="MSIE"==e.name||"IEMobile"==e.name,e.isEdge="Edge"==e.engine,e.isChromium=e.base&&"chromium"==e.base.toLocaleLowerCase(),e.isSafari="Safari"==e.name;var n="Edge"==e.engine||"MSIE"==e.name&&e.osVersion>6.1||"IEMobile"==e.name&&e.engineVersion>=6;n?e.eventMapper="pointer":e.eventMapper="touchMouse",e.androidBrokenBuild="AndroidBrowser"==e.name&&"534.30"==e.engineVersion;var t=window.devicePixelRatio||screen.deviceXDPI&&screen.deviceXDPI/96||1;"MSIE"==e.name||"IEMobile"==e.name||"Android"==e.osFamily&&"Gecko"==e.engine||t>1&&t<2?e.graphicsRenderEngine="svg":e.graphicsRenderEngine="canvas",e.transformTransition="Android"==e.osFamily||"iOS"==e.osFamily||"MSIE"==e.name||e.isChromium,e.css3DTransform="WebKit"==e.engine&&!("Android"==e.osFamily&&parseFloat(e.osVersion)<3)||"Gecko"==e.engine&&parseInt(e.engineVersion.split(".")[0])>=10,e.unsupported="OperaMini"==e.name}();var s=function(e){function n(n){return e[n]}var t={exports:{}},i=(t.exports,n("vow"));return t.exports=function(e,n){var t=document.createElement("script"),o=i.defer();return"production"==r.env.type&&(t.crossOrigin="anonymous"),window[n]=function(e){delete window[n],t.parentElement.removeChild(t),o.resolve(e)},t.src=e,document.head.appendChild(t),o.promise()},t.exports}({vow:r.vow}),a="__jsonp_"+(r.env.namespace||"ymaps"+Date.now()),c=function(e){function n(n){return e[n]}function t(e){this._config=e,this._sandbox=null,this._definitionsByName=Object.create(null),this._definitionsByStorage=Object.create(null),this._definitionsByAlias=Object.create(null),this._queuedForFetching=Object.create(null),this._remoteLoadingAllowed=f.defer(),this._initialized=this._remoteLoadingAllowed.promise().then(function(){return this._config.useBundles?this._loadBundle(this._config.initialBudleName):this._loadModulesMap()},this)["catch"](function(e){throw console.error("Unable to load modules."),console.error(e),e},this)}function r(e,n,t,r,i,o,s,a,c){this.state=e,this.alias=null,this.name=n,this.storage=t,this.key=r,this.depends=i,this.dynamicDepends=a,this.declaration=o,this.context=s,this.exports=e===m.DEFINED?c:void 0,this.resolvingPromise=void 0,this.fetchingDeferred=void 0}function i(e,n){if(!e.dynamicDepends)return h;var t=[];for(var r in e.dynamicDepends)if(p.call(e.dynamicDepends,r))for(var i=0,o=n.length;i<o;i++){var a=n[i];if(void 0!==a){var c=e.dynamicDepends[r](a);s(c)&&t.push(c)}}return t}function o(e,n,t){return p.call(e.dynamicDepends,n)?e.dynamicDepends[n].call(null,t):v}function s(e){return"string"==typeof e||c(e)}function a(e){return e&&"object"==typeof e?e.key+"@"+e.storage:String(e)}function c(e){return null!=e&&"object"==typeof e&&"string"==typeof e.key&&"string"==typeof e.storage}function u(e){var n=d.isArray(e);return"object"==typeof e&&!n&&p.call(e,"modules")?{modules:d.isArray(e.modules)?e.modules:[e.modules],data:e.data}:n?{modules:e}:{modules:[e]}}var l={exports:{}},f=(l.exports,n("vow")),d=n("./ym.utils"),p=Object.prototype.hasOwnProperty,v={},h=Object.freeze([]),m={MENTIONED:1,QUEUED:2,FETCHING:3,DECLARED:4,RESOLVING:5,ERROR:6,DEFINED:7};return l.exports=t,t.prototype.allowRemoteLoading=function(){this._remoteLoadingAllowed.resolve()},t.prototype.isDefined=function(e){return Boolean(this._findDefinition(e))},t.prototype.preload=function(e){return e},t.prototype.define=function(e,n,t,i){var o,s,a,c;if("object"==typeof e){var u=e;e=u.name,s=u.storage,o=u.key,n=u.depends,t=u.declaration,i=u.context,a=u.dynamicDepends,c=u.exports}else 2===arguments.length&&(t=n,n=null);var l=new r(m.DECLARED,e,s,o,n,t,i,a,c);this._define(l)},t.prototype.defineSync=function(e){var n=new r(m.DEFINED,e.name,e.storage,e.key,null,null,null,null,e.module);this._define(n)},t.prototype._define=function(e){function n(){var n=new Error("ymaps.modules: redefinition of "+e.name);throw console.error(n),n}var t=this._definitionsByName[e.name];if(t){if(this._config.useBundles){if(t.state>=m.DECLARED)return;t.state!==m.MENTIONED&&n()}else t.state===m.FETCHING&&e.state===m.DECLARED||n();return t.state=m.DECLARED,t.declaration=e.declaration,t.context=e.context,void(this._config.useBundles&&(t.storage=e.storage,t.key=e.key,e.depends&&("function"==typeof e.depends&&(e.depends=e.depends.call({name:e.name},this._config.dependenciesContext)),t.depends=e.depends),t.dynamicDepends=e.dynamicDepends,t.exports=e.exports))}"function"==typeof e.depends&&(e.depends=e.depends.call({name:e.name},this._config.dependenciesContext)),e.depends=e.depends||h,this._definitionsByName[e.name]=e,this._saveDefinitionToStorage(e)},t.prototype._resolve=function(e,n){if(!e.dynamicDepends){if(e.state===m.DEFINED)return f.resolve(e.exports);if(e.state===m.ERROR)return f.reject(e.exports)}e.state<m.RESOLVING&&!e.resolvingPromise&&(e.resolvingPromise=this._resolveCore(e,n).always(function(n){return e.resolvingPromise=void 0,n}));var t=i(e,[n]);return f.all([e.resolvingPromise,this._require(t,n)]).then(function(){return e.state===m.DEFINED?f.resolve(e.exports):f.reject(e.exports)})},t.prototype._resolveCore=function(e,n){return this._fetchModule(e,n).then(function(){return e.state=m.RESOLVING,this._require(e.depends,n)},this).then(function(n){function t(n,t){e.state===m.RESOLVING&&(e.state=t?m.ERROR:m.DEFINED,e.exports=t||n),i&&i.resolve(),t&&console.warn("ymaps.modules: provide(undefined, error) is deprecated and will be removed, throw instead. Module `"+e.name+"`.")}var r,i;t.async=function(n){e.state===m.RESOLVING&&(r=n.then(function(e){t(e)},function(e){t(void 0,e)}))},t.provide=t,t.provideAsync=t.async,t.dynamicDepends=e.dynamicDepends?{getValue:function(n,t){var r=o(e,n,t);return r===v?f.reject(new Error("ymaps.modules: dynamic dependency `"+n+"` is not declared.")):s(r)?this._require([r],t):f.resolve([r])}.bind(this),getValueSync:function(n,t){var r=o(e,n,t);if(!s(r))return r;var i=this._findDefinition(r);return i?this._requireSingleSync(i,t):void 0}.bind(this)}:null;var a=e.context||{name:e.name,depends:e.depends};try{e.declaration.apply(a,[t].concat(n))}catch(c){return e.state=m.ERROR,void(e.exports=c)}return r?r:e.state!==m.DEFINED&&e.state!==m.ERROR?(console.warn("ymaps.modules: asynchronous provide is deprecated and will be removed. Module `"+e.name+"`."),i=f.defer(),i.promise()):void 0},this)},t.prototype.require=function(e,n,t,r){var i="object"==typeof e&&!d.isArray(e),o=1===arguments.length;i&&(n=e.successCallback,t=e.errorCallback,r=e.context,o=!n&&!t),e=u(e);var s=this._require(e.modules,e.data);return o?s:void s.spread(n,t,r)},t.prototype.requireSync=function(e){if(e=u(e),1!==e.modules.length)throw new Error("ymaps.modules: only one module can be required synchronously.");var n=this._findDefinition(e.modules[0]);return n&&this._requireSingleSync(n,e.data)},t.prototype._requireSingleSync=function(e,n){for(var t=i(e,[n]),r=0,o=t.length;r<o;r++){var s=this._findDefinition(t[r]);if(!s||!this._requireSingleSync(s,n))return}return e.state===m.DEFINED?e.exports:void 0},t.prototype._require=function(e,n){var t=e.map(function(e){return this._requireSingle(e,n)},this);return f.all(t)},t.prototype._requireSingle=function(e,n){var t=this._findDefinition(e);return t?this._resolve(t,n):this._initialized.then(function(){var t=this._findDefinition(e);return t?this._resolve(t,n):f.reject(new Error("ymaps.modules: module `"+a(e)+"` is not defined."))},this)},t.prototype._findDefinition=function(e){if("undefined"!=typeof e)return"string"==typeof e?this._definitionsByName[e]:this._definitionsByStorage[e.storage]&&this._definitionsByStorage[e.storage][e.key]},t.prototype._saveDefinitionToStorage=function(e,n){if(e.key&&e.storage){n=n||{key:e.key,storage:e.storage};for(var t=d.isArray(n.key)?n.key:[n.key],r=0,i=t.length;r<i;r++)this._definitionsByStorage[n.storage]=this._definitionsByStorage[n.storage]||{},this._definitionsByStorage[n.storage][t[r]]=e}},t.prototype._fetchModule=function(e,n){return e.state>=m.DECLARED?f.resolve():this._config.useBundles?(this._fullBundlePromise=this._fullBundlePromise||this._loadBundle("full"),this._fullBundlePromise):(e.fetchingDeferred=e.fetchingDeferred||f.defer(),e.state===m.MENTIONED&&(e.state=m.QUEUED,this._queuedForFetching[e.name]={definition:e,dataList:[]},this._enqueueCombine()),e.state!==m.FETCHING&&this._queuedForFetching[e.name].dataList.push(n),e.fetchingDeferred.promise())},t.prototype._enqueueCombine=function(){this._combineEnqueued||(this._combineEnqueued=!0,this._initialized.then(function(){this._combineEnqueued=!1;var e=this._queuedForFetching;this._queuedForFetching=Object.create(null);var n=Object.create(null);for(var t in e)if(t in e){var r=e[t],i=this._getAliasesToFetchFor(t,r.dataList);d.extend(n,i)}for(var o=Object.keys(n),s=0,a=o.length;s<a;s+=this._config.combineBatchSize)this._fetchCombine(o.slice(s,s+this._config.combineBatchSize))},this))},t.prototype._loadBundle=function(e){return this._config.fetchBundle(e).then(function(e){function n(){return f.delay().then(function(){var e=i.splice(0,o);if(e.forEach(function(e){e(t)}),i.length>0)return n()})}e.missingModules.forEach(function(e){var n=new r(m.MENTIONED,e,(void 0),(void 0),[],null,null,(void 0));this._definitionsByName[e]=n},this);var t=this._sandbox=this._sandbox||this._config.createSandbox(),i=e.modules,o=400;return n()},this)},t.prototype._loadModulesMap=function(){return this._config.fetchMap().spread(function(e,n){this._processLoadedMap(e),n()},this)},t.prototype._fetchCombine=function(e){this._config.fetchCombine(e).spread(function(e,n){this._sandbox=this._sandbox||this._config.createSandbox();for(var t=0,r=e.length;t<r;t++){var i=e[t][0],o=this._definitionsByAlias[i];if(e[t][1].call(null,this._sandbox),o.state===m.DECLARED)o.fetchingDeferred&&o.fetchingDeferred.resolve();else{o.state=m.ERROR;var s=new Error("[internal] ymaps.modules: module `"+o.name+"` was not defined after dynamic module loading");o.exports=s,o.fetchingDeferred&&o.fetchingDeferred.reject(s)}o.fetchingDeferred=void 0}n()},this)["catch"](function(n){for(var t=0,r=e.length;t<r;t++){var i=this._definitionsByAlias[e[t]],n=new Error("[internal] ymaps.modules: dynamic module loading failed");i.state=m.ERROR,i.exports=n,i.fetchingDeferred&&i.fetchingDeferred.reject(n),i.fetchingDeferred=void 0}},this)},t.prototype._getAliasesToFetchFor=function(e,n){for(var t=[e],r=Object.create(null);t.length;){var o=t.shift(),s=this._findDefinition(o);if(!s)return void console.error("ymaps.modules: trying to fetch unknown module `"+a(o)+"` while loading `"+a(e)+"`.");s.state<=m.QUEUED&&(s.state=m.FETCHING,r[s.alias]=!0,Array.prototype.push.apply(t,s.depends)),Array.prototype.push.apply(t,i(s,n))}return r},t.prototype._processLoadedMap=function(e){function n(e){if("function"==typeof e)return e;for(var n=[],r=0,i=e.length;r<i;r+=2){var o=e.substr(r,2);n.push(t[o])}return n}for(var t={},i=0,o=e.length;i<o;i++){var s=e[i][0],a=e[i][1];t[a]=s}for(var i=0,o=e.length;i<o;i++){var s=e[i][0],a=e[i][1],c=this._definitionsByName[s];if(!c){var u=n(e[i][2]),l=e[i][3],f=e[i][4],d=e[i][5];c=new r(m.MENTIONED,s,f,l,u,null,null,d),this._define(c)}c.alias=a,this._definitionsByAlias[a]=c}},l.exports}({vow:r.vow,"./ym.utils":r.utils}),u="&mode="+r.env.server.params.mode+"&v="+r.env.tag+(r.env.cacheVersion?"-"+r.env.cacheVersion:"")+"&flags="+r.env.flags.join(","),l=r.env.server.url+"/map.js?callback={CALLBACK}"+u,f=r.env.server.url+"/combine.js?callback_prefix={CALLBACK_PREFIX}"+u,d=r.env.server.url+"/"+r.env.server.path.replace(/\/$/,"")+"/images/";r.modules=new c({dependenciesContext:r,combineBatchSize:500,initialBudleName:r.env.preload.bundle,useBundles:r.env.useBundles,fetchMap:function(){if(r.env.flags.indexOf("inline-map")>=0&&n){var e=r.performance.startMeasure("@mapjs.eval");return r.vow.resolve([n,e.finish.bind(e)])}var t=a+"_map",i=l.replace("{CALLBACK}",t);return s(i,t).then(function(e){var n=r.performance.getResourceTimings(i);r.performance.saveResourceTimings("mapjs",n);var t=r.performance.startMeasure("@mapjs.eval");return[e,t.finish.bind(t)]})},fetchCombine:function(e){r.performance.statistics.combine.total++,r.performance.statistics.combine.modules+=e.length;var n=e.length<100?"s":e.length<300?"m":"l",t=e.join(""),i=a+"_combine",o=f.replace("{CALLBACK_PREFIX}",i)+"&load="+t,c=i+"_"+t;return s(o,c).then(function(e){var t=r.performance.getResourceTimings(o);r.performance.saveResourceTimings("combine_"+n,t),r.performance.statistics.combine.size+=t.encodedBodySize;var i=r.performance.startMeasure("@combine_"+n+".eval");return[e,i.finish.bind(i)]})},fetchBundle:function(e){var n=("__ymaps_"+r.env.namespace+"_"+Date.now()).replace(/\W/g,"_");t[n]=r.ns;var i=document.createElement("script");i.src=r.env.bundles.BASE+r.env.bundles[e],i.setAttribute("data-ymaps-api-ns",n),i.setAttribute("data-ymaps-api-version","2.1.77"),i.async=!0;var o=r.vow.defer();return i.onerror=o.reject.bind(o),r.ns.__provideBundle=o.resolve.bind(o),document.head.appendChild(i),o.promise().always(function(e){return delete t[n],e})},createSandbox:function(){var e=Object.create(r.modules);return e.importImages=function(e){return{get:function(n){return d+e[n].src}}},r.utils.extend({},r,{modules:e})}}),r.ns.load=function(e,n,t,i){return"function"==typeof e?n?r.ns.ready(["package.full"],e,n):r.ns.ready(["package.full"],e):("string"==typeof e&&(e=[e]),r.ns.ready.apply(this,arguments))},function(){function e(e){return function(){console.warn("{NS}.modules.{FN} is not a public API and will be removed from {NS}.modules.".replace(/\{NS\}/g,r.env.namespace).replace(/\{FN\}/g,e));var n=r.modules[e].apply(r.modules,arguments);return n===r.modules?r.ns.modules:n}}r.ns.modules={require:function(){return r.modules.require.apply(r.modules,arguments)},isDefined:function(){return r.modules.isDefined.apply(r.modules,arguments)},requireSync:function(){return r.modules.requireSync.apply(r.modules,arguments)},define:function(e,n,t,i){return r.modules.define.apply(r.modules,arguments),r.ns.modules},defineSync:e("defineSync"),getDefinition:e("getDefinition"),getState:e("getState"),setOptions:e("setOptions"),flush:e("flush"),nextTick:e("nextTick"),watchResolving:e("watchResolving"),__modules:r.modules}}(),function(e){function n(){l&&(r.performance.saveMeasure("ymaps.readyDelay",r.performance.now()-r.performance.initTimings.responseEnd),l=!1);var e=r.performance.startMeasure("ymaps.ready"),n={};arguments.length&&(1!=arguments.length||"object"!=typeof arguments[0]||arguments[0].length?"function"!=typeof arguments[0]?(n.require="string"==typeof arguments[0]?[arguments[0]]:arguments[0],
  n.successCallback=arguments[1],n.errorCallback=arguments[2]&&"function"==typeof arguments[2]?arguments[2]:null,n.context=arguments[2]&&"object"==typeof arguments[2]?arguments[2]:arguments[3]):(n.successCallback=arguments[0],n.errorCallback=arguments[1]&&"function"==typeof arguments[1]?arguments[1]:null,n.context=arguments[1]&&"object"==typeof arguments[1]?arguments[1]:arguments[2]):n=arguments[0]);var t=n.require||[],i=o.all([r.modules.require(t),c,u]).spread(function(n){return r.utils.registerImports(r.ns,t,n),e.finish(),r.ns});return i.then(n.successCallback&&function(e){setTimeout(n.successCallback.bind(n.context),0,e)},n.errorCallback&&function(e){setTimeout(n.errorCallback.bind(n.context),0,e)}),i}function t(n,t){if(n){var r=i(e,n);r&&setTimeout(function(){r.method.call(r.context,t)})}}function i(e,n){var t=e;n=n.split(".");for(var r=0,i=n.length-1;r<i;r++)if(t=t[n[r]],!t)return;return{method:t[n[i]],context:t}}var o=r.vow,s=[].concat(["package.system"],r.env.preload.load.split(",").filter(Boolean)),a=r.performance.startMeasure("ymaps.preload"),c=r.modules.require(s).then(function(e){r.utils.registerImports(r.ns,s,e),a.finish(),t(r.env.preload.onLoad,r.ns)},function(e){return t(r.env.preload.onError,e),o.reject(e)}),u="complete"===document.readyState||"interactive"===document.readyState?o.resolve():new o.Promise(function(e){document.addEventListener("DOMContentLoaded",e,!1),document.addEventListener("load",e,!1)});r.ns.ready=n;var l=!0}(this),r.env.server.params.csp&&!r.supports.csp.isSupported&&r.logger.warning("CSP is not suported in this browser"),r.modules.define("vectorEngine.loadEngine",["vow","Hotspot","Monitor","collection.Item","event.Manager","hotspot.layer.Hint","hotspot.layer.optionMapper","interactivityModel.EventController","interactivityModel.layer","option.Manager","poi.BalloonManager","util.shapeFactory"],function(e,n){function t(){var e=n.defer(),t=document.createElement("script");return t.onload=e.resolve.bind(e),t.onerror=e.reject.bind(e),t.src=r.env.hosts.vectorIndex.replace("{{version}}",r.env.vectorVersion),r.env.vectorEngineFileName&&(t.src=t.src.replace("vector.min.js",r.env.vectorEngineFileName)),document.head.insertAdjacentElement("afterbegin",t),e.promise()["catch"](function(){return n.reject(new Error("Failed to load vector engine"))})}if("ymaps"!==r.env.namespace)throw new Error("Vector supports only `ymaps` namespace.");if(null==r.env.vectorVersion)throw new Error("No vector version.");var i=null;e(function(){return i=i||t()})}),r.modules.define("vectorEngine.preload",[],function(e){r.supports.vector.isSupported()&&r.modules.require(["vectorEngine.loadEngine"]).spread(function(e){e()}),e({})}),r.modules.allowRemoteLoading(),r.env.namespace&&r.utils.setDeep(t,r.env.namespace,r.ns),r.performance.init({url:r.env.hosts.api.statCounter+"/counter",data:"/path="+r.env.version.replace(/\W/g,"_")+"."+r.env.browser.platform,enable:"all"==r.env.counters||Math.random()<i&&!r.env.server.params.debug,initUrl:document.currentScript&&document.currentScript.src,useSendBeacon:!r.env.server.params.csp}),r.env.hasValidApiKey||(r.env.apikey=void 0,"undefined"!=typeof r.env.hasValidApiKey&&console.warn("(Yandex Maps JS API): Invalid API key")),o.finish()})({"vectorVersion":"5.11.4","vectorVersionTimestamp":1607250818180,"cacheVersion":"3","type":"production","flags":[],"server":{"url":"https://api-maps.yandex.ru/2.1.77","path":"build/release","params":{"apikey":"ваш API-ключ","mode":"release","ns":"ymaps","csp":null}},"preload":{"load":"package.full","bundle":"full"},"mode":"release","debug":false,"namespace":"ymaps","enterprise":false,"apikey":"ваш API-ключ","hasValidApiKey":false,"hasApiKeyParam":true,"browser":{"name":"Chrome","version":"87.0.4280.88","base":"Chromium","engine":"WebKit","engineVersion":"537.36","osName":"Unknown","osFamily":"Linux","osVersion":0,"isMobile":false,"isTablet":false,"multiTouch":false,"platform":"Desktop","cssPrefix":"Webkit"},"lang":"ru_RU","languageCode":"ru","countryCode":"RU","hosts":{"api":{"main":"https://api-maps.yandex.ru/","ua":"https://yandex.ru/legal/maps_termsofuse/?lang={{lang}}","maps":"https://yandex.ru/maps/","statCounter":"https://yandex.ru/clck/","services":{"coverage":"https://api-maps.yandex.ru/services/coverage/","geocode":"https://geocode-maps.yandex.ru/","geoxml":"https://api-maps.yandex.ru/services/geoxml/","inception":"https://api-maps.yandex.ru/services/inception/","panoramaLocate":"https://api-maps.yandex.ru/services/panoramas/","search":"https://api-maps.yandex.ru/services/search/","suggest":"https://suggest-maps.yandex.ru/","regions":"https://api-maps.yandex.ru/services/regions/","route":"https://api-maps.yandex.ru/services/route/"}},"layers":{"map":"https://vec0%d.maps.yandex.net/tiles?l=map&%c&%l","mapj":"https://vec0%d.maps.yandex.net/tiles?l=mapj&%c&%l","sat":"https://core-sat.maps.yandex.net/tiles?l=sat&%c&%l","skl":"https://vec0%d.maps.yandex.net/tiles?l=skl&%c&%l","sklj":"https://vec0%d.maps.yandex.net/tiles?l=sklj&%c&%l","stv":"https://0%d.core-stv-renderer.maps.yandex.net/2.x/tiles?l=stv&%c&v=%v&%l&format=png","sta":"https://0%d.core-stv-renderer.maps.yandex.net/2.x/tiles?l=sta&%c&v=%v&%l&format=png","staHotspot":"https://core-stv-renderer.maps.yandex.net/2.x/tiles?l=stj&%c&v=%v&format=js","staHotspotKey":"%c&l=stj&tm=%v","carparks":"https://core-carparks-renderer-lots.maps.yandex.net/"},"metro_RU":"https://yandex.ru/metro/","metro_UA":"https://yandex.ua/metro/","metro_BY":"https://yandex.by/metro/","metro_US":"https://yandex.com/metro/","traffic":"https://core-jams-rdr-cache.maps.yandex.net/","trafficInfo":"https://core-jams-info.maps.yandex.net/","trafficArchive":"https://core-jams-rdr-hist.maps.yandex.net/","vectorIndex":"https://yastatic.net/s3/mapsapi-v3/vector/{{version}}/out/vector.min.js","vectorTiles":"https://vec0{{hostAlias}}.maps.yandex.net/vmap2/tiles?lang={{lang}}&x={{x}}&y={{y}}&z={{z}}&zmin={{zmin}}&zmax={{zmax}}&v={{version}}","vectorImages":"https://vec0{{hostAlias}}.maps.yandex.net/vmap2/icons?id={{id}}&scale={{scale}}","vectorMeshes":"https://vec0{{hostAlias}}.maps.yandex.net/vmap2/meshes?id={{id}}","vectorGlyphs":"https://vec0{{hostAlias}}.maps.yandex.net/vmap2/glyphs?lang={{lang}}&font_id={{fontId}}&range={{range}}","indoorTiles":"https://vec0{{hostAlias}}.maps.yandex.net/","panoramasTiles":"https://pano.maps.yandex.net/%s/%z.%x.%y","taxiRouteInfo":"https://taxi-routeinfo.taxi.yandex.net/taxi_info?clid=yamaps&apikey=f6d7c076e16e4d53a928961595e76215&rll={rll}"},"layers":{"map":{"version":"20.12.06-0","scaled":true,"hotspotZoomRange":[8,23]},"sat":{"version":"3.741.0"},"skl":{"version":"20.12.06-0","scaled":true,"hotspotZoomRange":[8,23]},"sta":{"version":"2020.12.05.14.42-1"},"trf":{"version":"1607250900","scaled":true},"stv":{"version":"2020.12.05.14.42-1"},"carparks":{"version":"20201205-190128"}},"geolocation":{"longitude":41.969083,"latitude":45.044521,"isHighAccuracy":false,"span":{"longitude":0.33553,"latitude":0.151429}},"token":"87146d7d4376c72a3b7e52eb49a1a061","distribution":{},"version":"2.1.77","majorVersion":"2.1","cssPrefix":"ymaps-2-1-77-","tag":"2.1.77-27","coordinatesOrder":"latlong","useBundles":true,"bundles":{"BASE":"https://yastatic.net/s3/front-maps-static/front-jsapi-v2-1/2.1.77-27/build","panoramas":"/release/panoramas-e864025cd198d38a898c034edd9637311a3046e8.js","full":"/release/full-d3f34cc99c9c0dd436b9bc268e8dd6c17d0c711a.js"}}, null)
