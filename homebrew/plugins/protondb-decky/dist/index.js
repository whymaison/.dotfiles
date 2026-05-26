// Decky Loader will pass this api in, it's versioned to allow for backwards compatibility.
// @ts-ignore

// Prevents it from being duplicated in output.
const manifest = {"name":"ProtonDB Badges","author":"OMGDuke","flags":[],"api_version":2,"publish":{"tags":["protondb"],"description":"Display tappable ProtonDB badges on your game pages","image":"https://raw.githubusercontent.com/OMGDuke/protondb-decky/main/assets/publish_image.png"}};
const API_VERSION = 2;
const internalAPIConnection = window.__DECKY_SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_deckyLoaderAPIInit;
// Initialize
if (!internalAPIConnection) {
    throw new Error('[@decky/api]: Failed to connect to the loader as as the loader API was not initialized. This is likely a bug in Decky Loader.');
}
// Version 1 throws on version mismatch so we have to account for that here.
let api;
try {
    api = internalAPIConnection.connect(API_VERSION, manifest.name);
}
catch {
    api = internalAPIConnection.connect(1, manifest.name);
    console.warn(`[@decky/api] Requested API version ${API_VERSION} but the running loader only supports version 1. Some features may not work.`);
}
if (api._version != API_VERSION) {
    console.warn(`[@decky/api] Requested API version ${API_VERSION} but the running loader only supports version ${api._version}. Some features may not work.`);
}
// TODO these could use a lot of JSDoc
const call = api.call;
const routerHook = api.routerHook;
const fetchNoCors = api.fetchNoCors;

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = SP_REACT.createContext && SP_REACT.createContext(DefaultContext);

var __assign = window && window.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = window && window.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return SP_REACT.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  // eslint-disable-next-line react/display-name
  return function (props) {
    return SP_REACT.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var attr = props.attr,
      size = props.size,
      title = props.title,
      svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return SP_REACT.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && SP_REACT.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? SP_REACT.createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function FaReact (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"}}]})(props);
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function commonjsRequire(path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var localforage$1 = {exports: {}};

/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/

(function (module, exports) {
	(function(f){{module.exports=f();}})(function(){return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof commonjsRequire=="function"&&commonjsRequire;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw (f.code="MODULE_NOT_FOUND", f)}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r);}return n[o].exports}var i=typeof commonjsRequire=="function"&&commonjsRequire;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
	(function (global){
	var Mutation = global.MutationObserver || global.WebKitMutationObserver;

	var scheduleDrain;

	{
	  if (Mutation) {
	    var called = 0;
	    var observer = new Mutation(nextTick);
	    var element = global.document.createTextNode('');
	    observer.observe(element, {
	      characterData: true
	    });
	    scheduleDrain = function () {
	      element.data = (called = ++called % 2);
	    };
	  } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
	    var channel = new global.MessageChannel();
	    channel.port1.onmessage = nextTick;
	    scheduleDrain = function () {
	      channel.port2.postMessage(0);
	    };
	  } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
	    scheduleDrain = function () {

	      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	      var scriptEl = global.document.createElement('script');
	      scriptEl.onreadystatechange = function () {
	        nextTick();

	        scriptEl.onreadystatechange = null;
	        scriptEl.parentNode.removeChild(scriptEl);
	        scriptEl = null;
	      };
	      global.document.documentElement.appendChild(scriptEl);
	    };
	  } else {
	    scheduleDrain = function () {
	      setTimeout(nextTick, 0);
	    };
	  }
	}

	var draining;
	var queue = [];
	//named nextTick for less confusing stack traces
	function nextTick() {
	  draining = true;
	  var i, oldQueue;
	  var len = queue.length;
	  while (len) {
	    oldQueue = queue;
	    queue = [];
	    i = -1;
	    while (++i < len) {
	      oldQueue[i]();
	    }
	    len = queue.length;
	  }
	  draining = false;
	}

	module.exports = immediate;
	function immediate(task) {
	  if (queue.push(task) === 1 && !draining) {
	    scheduleDrain();
	  }
	}

	}).call(this,typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
	},{}],2:[function(_dereq_,module,exports){
	var immediate = _dereq_(1);

	/* istanbul ignore next */
	function INTERNAL() {}

	var handlers = {};

	var REJECTED = ['REJECTED'];
	var FULFILLED = ['FULFILLED'];
	var PENDING = ['PENDING'];

	module.exports = Promise;

	function Promise(resolver) {
	  if (typeof resolver !== 'function') {
	    throw new TypeError('resolver must be a function');
	  }
	  this.state = PENDING;
	  this.queue = [];
	  this.outcome = void 0;
	  if (resolver !== INTERNAL) {
	    safelyResolveThenable(this, resolver);
	  }
	}

	Promise.prototype["catch"] = function (onRejected) {
	  return this.then(null, onRejected);
	};
	Promise.prototype.then = function (onFulfilled, onRejected) {
	  if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||
	    typeof onRejected !== 'function' && this.state === REJECTED) {
	    return this;
	  }
	  var promise = new this.constructor(INTERNAL);
	  if (this.state !== PENDING) {
	    var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
	    unwrap(promise, resolver, this.outcome);
	  } else {
	    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
	  }

	  return promise;
	};
	function QueueItem(promise, onFulfilled, onRejected) {
	  this.promise = promise;
	  if (typeof onFulfilled === 'function') {
	    this.onFulfilled = onFulfilled;
	    this.callFulfilled = this.otherCallFulfilled;
	  }
	  if (typeof onRejected === 'function') {
	    this.onRejected = onRejected;
	    this.callRejected = this.otherCallRejected;
	  }
	}
	QueueItem.prototype.callFulfilled = function (value) {
	  handlers.resolve(this.promise, value);
	};
	QueueItem.prototype.otherCallFulfilled = function (value) {
	  unwrap(this.promise, this.onFulfilled, value);
	};
	QueueItem.prototype.callRejected = function (value) {
	  handlers.reject(this.promise, value);
	};
	QueueItem.prototype.otherCallRejected = function (value) {
	  unwrap(this.promise, this.onRejected, value);
	};

	function unwrap(promise, func, value) {
	  immediate(function () {
	    var returnValue;
	    try {
	      returnValue = func(value);
	    } catch (e) {
	      return handlers.reject(promise, e);
	    }
	    if (returnValue === promise) {
	      handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
	    } else {
	      handlers.resolve(promise, returnValue);
	    }
	  });
	}

	handlers.resolve = function (self, value) {
	  var result = tryCatch(getThen, value);
	  if (result.status === 'error') {
	    return handlers.reject(self, result.value);
	  }
	  var thenable = result.value;

	  if (thenable) {
	    safelyResolveThenable(self, thenable);
	  } else {
	    self.state = FULFILLED;
	    self.outcome = value;
	    var i = -1;
	    var len = self.queue.length;
	    while (++i < len) {
	      self.queue[i].callFulfilled(value);
	    }
	  }
	  return self;
	};
	handlers.reject = function (self, error) {
	  self.state = REJECTED;
	  self.outcome = error;
	  var i = -1;
	  var len = self.queue.length;
	  while (++i < len) {
	    self.queue[i].callRejected(error);
	  }
	  return self;
	};

	function getThen(obj) {
	  // Make sure we only access the accessor once as required by the spec
	  var then = obj && obj.then;
	  if (obj && (typeof obj === 'object' || typeof obj === 'function') && typeof then === 'function') {
	    return function appyThen() {
	      then.apply(obj, arguments);
	    };
	  }
	}

	function safelyResolveThenable(self, thenable) {
	  // Either fulfill, reject or reject with error
	  var called = false;
	  function onError(value) {
	    if (called) {
	      return;
	    }
	    called = true;
	    handlers.reject(self, value);
	  }

	  function onSuccess(value) {
	    if (called) {
	      return;
	    }
	    called = true;
	    handlers.resolve(self, value);
	  }

	  function tryToUnwrap() {
	    thenable(onSuccess, onError);
	  }

	  var result = tryCatch(tryToUnwrap);
	  if (result.status === 'error') {
	    onError(result.value);
	  }
	}

	function tryCatch(func, value) {
	  var out = {};
	  try {
	    out.value = func(value);
	    out.status = 'success';
	  } catch (e) {
	    out.status = 'error';
	    out.value = e;
	  }
	  return out;
	}

	Promise.resolve = resolve;
	function resolve(value) {
	  if (value instanceof this) {
	    return value;
	  }
	  return handlers.resolve(new this(INTERNAL), value);
	}

	Promise.reject = reject;
	function reject(reason) {
	  var promise = new this(INTERNAL);
	  return handlers.reject(promise, reason);
	}

	Promise.all = all;
	function all(iterable) {
	  var self = this;
	  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
	    return this.reject(new TypeError('must be an array'));
	  }

	  var len = iterable.length;
	  var called = false;
	  if (!len) {
	    return this.resolve([]);
	  }

	  var values = new Array(len);
	  var resolved = 0;
	  var i = -1;
	  var promise = new this(INTERNAL);

	  while (++i < len) {
	    allResolver(iterable[i], i);
	  }
	  return promise;
	  function allResolver(value, i) {
	    self.resolve(value).then(resolveFromAll, function (error) {
	      if (!called) {
	        called = true;
	        handlers.reject(promise, error);
	      }
	    });
	    function resolveFromAll(outValue) {
	      values[i] = outValue;
	      if (++resolved === len && !called) {
	        called = true;
	        handlers.resolve(promise, values);
	      }
	    }
	  }
	}

	Promise.race = race;
	function race(iterable) {
	  var self = this;
	  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
	    return this.reject(new TypeError('must be an array'));
	  }

	  var len = iterable.length;
	  var called = false;
	  if (!len) {
	    return this.resolve([]);
	  }

	  var i = -1;
	  var promise = new this(INTERNAL);

	  while (++i < len) {
	    resolver(iterable[i]);
	  }
	  return promise;
	  function resolver(value) {
	    self.resolve(value).then(function (response) {
	      if (!called) {
	        called = true;
	        handlers.resolve(promise, response);
	      }
	    }, function (error) {
	      if (!called) {
	        called = true;
	        handlers.reject(promise, error);
	      }
	    });
	  }
	}

	},{"1":1}],3:[function(_dereq_,module,exports){
	(function (global){
	if (typeof global.Promise !== 'function') {
	  global.Promise = _dereq_(2);
	}

	}).call(this,typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
	},{"2":2}],4:[function(_dereq_,module,exports){

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function getIDB() {
	    /* global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */
	    try {
	        if (typeof indexedDB !== 'undefined') {
	            return indexedDB;
	        }
	        if (typeof webkitIndexedDB !== 'undefined') {
	            return webkitIndexedDB;
	        }
	        if (typeof mozIndexedDB !== 'undefined') {
	            return mozIndexedDB;
	        }
	        if (typeof OIndexedDB !== 'undefined') {
	            return OIndexedDB;
	        }
	        if (typeof msIndexedDB !== 'undefined') {
	            return msIndexedDB;
	        }
	    } catch (e) {
	        return;
	    }
	}

	var idb = getIDB();

	function isIndexedDBValid() {
	    try {
	        // Initialize IndexedDB; fall back to vendor-prefixed versions
	        // if needed.
	        if (!idb || !idb.open) {
	            return false;
	        }
	        // We mimic PouchDB here;
	        //
	        // We test for openDatabase because IE Mobile identifies itself
	        // as Safari. Oh the lulz...
	        var isSafari = typeof openDatabase !== 'undefined' && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);

	        var hasFetch = typeof fetch === 'function' && fetch.toString().indexOf('[native code') !== -1;

	        // Safari <10.1 does not meet our requirements for IDB support
	        // (see: https://github.com/pouchdb/pouchdb/issues/5572).
	        // Safari 10.1 shipped with fetch, we can use that to detect it.
	        // Note: this creates issues with `window.fetch` polyfills and
	        // overrides; see:
	        // https://github.com/localForage/localForage/issues/856
	        return (!isSafari || hasFetch) && typeof indexedDB !== 'undefined' &&
	        // some outdated implementations of IDB that appear on Samsung
	        // and HTC Android devices <4.4 are missing IDBKeyRange
	        // See: https://github.com/mozilla/localForage/issues/128
	        // See: https://github.com/mozilla/localForage/issues/272
	        typeof IDBKeyRange !== 'undefined';
	    } catch (e) {
	        return false;
	    }
	}

	// Abstracts constructing a Blob object, so it also works in older
	// browsers that don't support the native Blob constructor. (i.e.
	// old QtWebKit versions, at least).
	// Abstracts constructing a Blob object, so it also works in older
	// browsers that don't support the native Blob constructor. (i.e.
	// old QtWebKit versions, at least).
	function createBlob(parts, properties) {
	    /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
	    parts = parts || [];
	    properties = properties || {};
	    try {
	        return new Blob(parts, properties);
	    } catch (e) {
	        if (e.name !== 'TypeError') {
	            throw e;
	        }
	        var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : WebKitBlobBuilder;
	        var builder = new Builder();
	        for (var i = 0; i < parts.length; i += 1) {
	            builder.append(parts[i]);
	        }
	        return builder.getBlob(properties.type);
	    }
	}

	// This is CommonJS because lie is an external dependency, so Rollup
	// can just ignore it.
	if (typeof Promise === 'undefined') {
	    // In the "nopromises" build this will just throw if you don't have
	    // a global promise object, but it would throw anyway later.
	    _dereq_(3);
	}
	var Promise$1 = Promise;

	function executeCallback(promise, callback) {
	    if (callback) {
	        promise.then(function (result) {
	            callback(null, result);
	        }, function (error) {
	            callback(error);
	        });
	    }
	}

	function executeTwoCallbacks(promise, callback, errorCallback) {
	    if (typeof callback === 'function') {
	        promise.then(callback);
	    }

	    if (typeof errorCallback === 'function') {
	        promise["catch"](errorCallback);
	    }
	}

	function normalizeKey(key) {
	    // Cast the key to a string, as that's all we can set as a key.
	    if (typeof key !== 'string') {
	        console.warn(key + ' used as a key, but it is not a string.');
	        key = String(key);
	    }

	    return key;
	}

	function getCallback() {
	    if (arguments.length && typeof arguments[arguments.length - 1] === 'function') {
	        return arguments[arguments.length - 1];
	    }
	}

	// Some code originally from async_storage.js in
	// [Gaia](https://github.com/mozilla-b2g/gaia).

	var DETECT_BLOB_SUPPORT_STORE = 'local-forage-detect-blob-support';
	var supportsBlobs = void 0;
	var dbContexts = {};
	var toString = Object.prototype.toString;

	// Transaction Modes
	var READ_ONLY = 'readonly';
	var READ_WRITE = 'readwrite';

	// Transform a binary string to an array buffer, because otherwise
	// weird stuff happens when you try to work with the binary string directly.
	// It is known.
	// From http://stackoverflow.com/questions/14967647/ (continues on next line)
	// encode-decode-image-with-base64-breaks-image (2013-04-21)
	function _binStringToArrayBuffer(bin) {
	    var length = bin.length;
	    var buf = new ArrayBuffer(length);
	    var arr = new Uint8Array(buf);
	    for (var i = 0; i < length; i++) {
	        arr[i] = bin.charCodeAt(i);
	    }
	    return buf;
	}

	//
	// Blobs are not supported in all versions of IndexedDB, notably
	// Chrome <37 and Android <5. In those versions, storing a blob will throw.
	//
	// Various other blob bugs exist in Chrome v37-42 (inclusive).
	// Detecting them is expensive and confusing to users, and Chrome 37-42
	// is at very low usage worldwide, so we do a hacky userAgent check instead.
	//
	// content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
	// 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
	// FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
	//
	// Code borrowed from PouchDB. See:
	// https://github.com/pouchdb/pouchdb/blob/master/packages/node_modules/pouchdb-adapter-idb/src/blobSupport.js
	//
	function _checkBlobSupportWithoutCaching(idb) {
	    return new Promise$1(function (resolve) {
	        var txn = idb.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
	        var blob = createBlob(['']);
	        txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, 'key');

	        txn.onabort = function (e) {
	            // If the transaction aborts now its due to not being able to
	            // write to the database, likely due to the disk being full
	            e.preventDefault();
	            e.stopPropagation();
	            resolve(false);
	        };

	        txn.oncomplete = function () {
	            var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
	            var matchedEdge = navigator.userAgent.match(/Edge\//);
	            // MS Edge pretends to be Chrome 42:
	            // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx
	            resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
	        };
	    })["catch"](function () {
	        return false; // error, so assume unsupported
	    });
	}

	function _checkBlobSupport(idb) {
	    if (typeof supportsBlobs === 'boolean') {
	        return Promise$1.resolve(supportsBlobs);
	    }
	    return _checkBlobSupportWithoutCaching(idb).then(function (value) {
	        supportsBlobs = value;
	        return supportsBlobs;
	    });
	}

	function _deferReadiness(dbInfo) {
	    var dbContext = dbContexts[dbInfo.name];

	    // Create a deferred object representing the current database operation.
	    var deferredOperation = {};

	    deferredOperation.promise = new Promise$1(function (resolve, reject) {
	        deferredOperation.resolve = resolve;
	        deferredOperation.reject = reject;
	    });

	    // Enqueue the deferred operation.
	    dbContext.deferredOperations.push(deferredOperation);

	    // Chain its promise to the database readiness.
	    if (!dbContext.dbReady) {
	        dbContext.dbReady = deferredOperation.promise;
	    } else {
	        dbContext.dbReady = dbContext.dbReady.then(function () {
	            return deferredOperation.promise;
	        });
	    }
	}

	function _advanceReadiness(dbInfo) {
	    var dbContext = dbContexts[dbInfo.name];

	    // Dequeue a deferred operation.
	    var deferredOperation = dbContext.deferredOperations.pop();

	    // Resolve its promise (which is part of the database readiness
	    // chain of promises).
	    if (deferredOperation) {
	        deferredOperation.resolve();
	        return deferredOperation.promise;
	    }
	}

	function _rejectReadiness(dbInfo, err) {
	    var dbContext = dbContexts[dbInfo.name];

	    // Dequeue a deferred operation.
	    var deferredOperation = dbContext.deferredOperations.pop();

	    // Reject its promise (which is part of the database readiness
	    // chain of promises).
	    if (deferredOperation) {
	        deferredOperation.reject(err);
	        return deferredOperation.promise;
	    }
	}

	function _getConnection(dbInfo, upgradeNeeded) {
	    return new Promise$1(function (resolve, reject) {
	        dbContexts[dbInfo.name] = dbContexts[dbInfo.name] || createDbContext();

	        if (dbInfo.db) {
	            if (upgradeNeeded) {
	                _deferReadiness(dbInfo);
	                dbInfo.db.close();
	            } else {
	                return resolve(dbInfo.db);
	            }
	        }

	        var dbArgs = [dbInfo.name];

	        if (upgradeNeeded) {
	            dbArgs.push(dbInfo.version);
	        }

	        var openreq = idb.open.apply(idb, dbArgs);

	        if (upgradeNeeded) {
	            openreq.onupgradeneeded = function (e) {
	                var db = openreq.result;
	                try {
	                    db.createObjectStore(dbInfo.storeName);
	                    if (e.oldVersion <= 1) {
	                        // Added when support for blob shims was added
	                        db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
	                    }
	                } catch (ex) {
	                    if (ex.name === 'ConstraintError') {
	                        console.warn('The database "' + dbInfo.name + '"' + ' has been upgraded from version ' + e.oldVersion + ' to version ' + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
	                    } else {
	                        throw ex;
	                    }
	                }
	            };
	        }

	        openreq.onerror = function (e) {
	            e.preventDefault();
	            reject(openreq.error);
	        };

	        openreq.onsuccess = function () {
	            var db = openreq.result;
	            db.onversionchange = function (e) {
	                // Triggered when the database is modified (e.g. adding an objectStore) or
	                // deleted (even when initiated by other sessions in different tabs).
	                // Closing the connection here prevents those operations from being blocked.
	                // If the database is accessed again later by this instance, the connection
	                // will be reopened or the database recreated as needed.
	                e.target.close();
	            };
	            resolve(db);
	            _advanceReadiness(dbInfo);
	        };
	    });
	}

	function _getOriginalConnection(dbInfo) {
	    return _getConnection(dbInfo, false);
	}

	function _getUpgradedConnection(dbInfo) {
	    return _getConnection(dbInfo, true);
	}

	function _isUpgradeNeeded(dbInfo, defaultVersion) {
	    if (!dbInfo.db) {
	        return true;
	    }

	    var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
	    var isDowngrade = dbInfo.version < dbInfo.db.version;
	    var isUpgrade = dbInfo.version > dbInfo.db.version;

	    if (isDowngrade) {
	        // If the version is not the default one
	        // then warn for impossible downgrade.
	        if (dbInfo.version !== defaultVersion) {
	            console.warn('The database "' + dbInfo.name + '"' + " can't be downgraded from version " + dbInfo.db.version + ' to version ' + dbInfo.version + '.');
	        }
	        // Align the versions to prevent errors.
	        dbInfo.version = dbInfo.db.version;
	    }

	    if (isUpgrade || isNewStore) {
	        // If the store is new then increment the version (if needed).
	        // This will trigger an "upgradeneeded" event which is required
	        // for creating a store.
	        if (isNewStore) {
	            var incVersion = dbInfo.db.version + 1;
	            if (incVersion > dbInfo.version) {
	                dbInfo.version = incVersion;
	            }
	        }

	        return true;
	    }

	    return false;
	}

	// encode a blob for indexeddb engines that don't support blobs
	function _encodeBlob(blob) {
	    return new Promise$1(function (resolve, reject) {
	        var reader = new FileReader();
	        reader.onerror = reject;
	        reader.onloadend = function (e) {
	            var base64 = btoa(e.target.result || '');
	            resolve({
	                __local_forage_encoded_blob: true,
	                data: base64,
	                type: blob.type
	            });
	        };
	        reader.readAsBinaryString(blob);
	    });
	}

	// decode an encoded blob
	function _decodeBlob(encodedBlob) {
	    var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
	    return createBlob([arrayBuff], { type: encodedBlob.type });
	}

	// is this one of our fancy encoded blobs?
	function _isEncodedBlob(value) {
	    return value && value.__local_forage_encoded_blob;
	}

	// Specialize the default `ready()` function by making it dependent
	// on the current database operations. Thus, the driver will be actually
	// ready when it's been initialized (default) *and* there are no pending
	// operations on the database (initiated by some other instances).
	function _fullyReady(callback) {
	    var self = this;

	    var promise = self._initReady().then(function () {
	        var dbContext = dbContexts[self._dbInfo.name];

	        if (dbContext && dbContext.dbReady) {
	            return dbContext.dbReady;
	        }
	    });

	    executeTwoCallbacks(promise, callback, callback);
	    return promise;
	}

	// Try to establish a new db connection to replace the
	// current one which is broken (i.e. experiencing
	// InvalidStateError while creating a transaction).
	function _tryReconnect(dbInfo) {
	    _deferReadiness(dbInfo);

	    var dbContext = dbContexts[dbInfo.name];
	    var forages = dbContext.forages;

	    for (var i = 0; i < forages.length; i++) {
	        var forage = forages[i];
	        if (forage._dbInfo.db) {
	            forage._dbInfo.db.close();
	            forage._dbInfo.db = null;
	        }
	    }
	    dbInfo.db = null;

	    return _getOriginalConnection(dbInfo).then(function (db) {
	        dbInfo.db = db;
	        if (_isUpgradeNeeded(dbInfo)) {
	            // Reopen the database for upgrading.
	            return _getUpgradedConnection(dbInfo);
	        }
	        return db;
	    }).then(function (db) {
	        // store the latest db reference
	        // in case the db was upgraded
	        dbInfo.db = dbContext.db = db;
	        for (var i = 0; i < forages.length; i++) {
	            forages[i]._dbInfo.db = db;
	        }
	    })["catch"](function (err) {
	        _rejectReadiness(dbInfo, err);
	        throw err;
	    });
	}

	// FF doesn't like Promises (micro-tasks) and IDDB store operations,
	// so we have to do it with callbacks
	function createTransaction(dbInfo, mode, callback, retries) {
	    if (retries === undefined) {
	        retries = 1;
	    }

	    try {
	        var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
	        callback(null, tx);
	    } catch (err) {
	        if (retries > 0 && (!dbInfo.db || err.name === 'InvalidStateError' || err.name === 'NotFoundError')) {
	            return Promise$1.resolve().then(function () {
	                if (!dbInfo.db || err.name === 'NotFoundError' && !dbInfo.db.objectStoreNames.contains(dbInfo.storeName) && dbInfo.version <= dbInfo.db.version) {
	                    // increase the db version, to create the new ObjectStore
	                    if (dbInfo.db) {
	                        dbInfo.version = dbInfo.db.version + 1;
	                    }
	                    // Reopen the database for upgrading.
	                    return _getUpgradedConnection(dbInfo);
	                }
	            }).then(function () {
	                return _tryReconnect(dbInfo).then(function () {
	                    createTransaction(dbInfo, mode, callback, retries - 1);
	                });
	            })["catch"](callback);
	        }

	        callback(err);
	    }
	}

	function createDbContext() {
	    return {
	        // Running localForages sharing a database.
	        forages: [],
	        // Shared database.
	        db: null,
	        // Database readiness (promise).
	        dbReady: null,
	        // Deferred operations on the database.
	        deferredOperations: []
	    };
	}

	// Open the IndexedDB database (automatically creates one if one didn't
	// previously exist), using any options set in the config.
	function _initStorage(options) {
	    var self = this;
	    var dbInfo = {
	        db: null
	    };

	    if (options) {
	        for (var i in options) {
	            dbInfo[i] = options[i];
	        }
	    }

	    // Get the current context of the database;
	    var dbContext = dbContexts[dbInfo.name];

	    // ...or create a new context.
	    if (!dbContext) {
	        dbContext = createDbContext();
	        // Register the new context in the global container.
	        dbContexts[dbInfo.name] = dbContext;
	    }

	    // Register itself as a running localForage in the current context.
	    dbContext.forages.push(self);

	    // Replace the default `ready()` function with the specialized one.
	    if (!self._initReady) {
	        self._initReady = self.ready;
	        self.ready = _fullyReady;
	    }

	    // Create an array of initialization states of the related localForages.
	    var initPromises = [];

	    function ignoreErrors() {
	        // Don't handle errors here,
	        // just makes sure related localForages aren't pending.
	        return Promise$1.resolve();
	    }

	    for (var j = 0; j < dbContext.forages.length; j++) {
	        var forage = dbContext.forages[j];
	        if (forage !== self) {
	            // Don't wait for itself...
	            initPromises.push(forage._initReady()["catch"](ignoreErrors));
	        }
	    }

	    // Take a snapshot of the related localForages.
	    var forages = dbContext.forages.slice(0);

	    // Initialize the connection process only when
	    // all the related localForages aren't pending.
	    return Promise$1.all(initPromises).then(function () {
	        dbInfo.db = dbContext.db;
	        // Get the connection or open a new one without upgrade.
	        return _getOriginalConnection(dbInfo);
	    }).then(function (db) {
	        dbInfo.db = db;
	        if (_isUpgradeNeeded(dbInfo, self._defaultConfig.version)) {
	            // Reopen the database for upgrading.
	            return _getUpgradedConnection(dbInfo);
	        }
	        return db;
	    }).then(function (db) {
	        dbInfo.db = dbContext.db = db;
	        self._dbInfo = dbInfo;
	        // Share the final connection amongst related localForages.
	        for (var k = 0; k < forages.length; k++) {
	            var forage = forages[k];
	            if (forage !== self) {
	                // Self is already up-to-date.
	                forage._dbInfo.db = dbInfo.db;
	                forage._dbInfo.version = dbInfo.version;
	            }
	        }
	    });
	}

	function getItem(key, callback) {
	    var self = this;

	    key = normalizeKey(key);

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
	                if (err) {
	                    return reject(err);
	                }

	                try {
	                    var store = transaction.objectStore(self._dbInfo.storeName);
	                    var req = store.get(key);

	                    req.onsuccess = function () {
	                        var value = req.result;
	                        if (value === undefined) {
	                            value = null;
	                        }
	                        if (_isEncodedBlob(value)) {
	                            value = _decodeBlob(value);
	                        }
	                        resolve(value);
	                    };

	                    req.onerror = function () {
	                        reject(req.error);
	                    };
	                } catch (e) {
	                    reject(e);
	                }
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	// Iterate over all items stored in database.
	function iterate(iterator, callback) {
	    var self = this;

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
	                if (err) {
	                    return reject(err);
	                }

	                try {
	                    var store = transaction.objectStore(self._dbInfo.storeName);
	                    var req = store.openCursor();
	                    var iterationNumber = 1;

	                    req.onsuccess = function () {
	                        var cursor = req.result;

	                        if (cursor) {
	                            var value = cursor.value;
	                            if (_isEncodedBlob(value)) {
	                                value = _decodeBlob(value);
	                            }
	                            var result = iterator(value, cursor.key, iterationNumber++);

	                            // when the iterator callback returns any
	                            // (non-`undefined`) value, then we stop
	                            // the iteration immediately
	                            if (result !== void 0) {
	                                resolve(result);
	                            } else {
	                                cursor["continue"]();
	                            }
	                        } else {
	                            resolve();
	                        }
	                    };

	                    req.onerror = function () {
	                        reject(req.error);
	                    };
	                } catch (e) {
	                    reject(e);
	                }
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);

	    return promise;
	}

	function setItem(key, value, callback) {
	    var self = this;

	    key = normalizeKey(key);

	    var promise = new Promise$1(function (resolve, reject) {
	        var dbInfo;
	        self.ready().then(function () {
	            dbInfo = self._dbInfo;
	            if (toString.call(value) === '[object Blob]') {
	                return _checkBlobSupport(dbInfo.db).then(function (blobSupport) {
	                    if (blobSupport) {
	                        return value;
	                    }
	                    return _encodeBlob(value);
	                });
	            }
	            return value;
	        }).then(function (value) {
	            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
	                if (err) {
	                    return reject(err);
	                }

	                try {
	                    var store = transaction.objectStore(self._dbInfo.storeName);

	                    // The reason we don't _save_ null is because IE 10 does
	                    // not support saving the `null` type in IndexedDB. How
	                    // ironic, given the bug below!
	                    // See: https://github.com/mozilla/localForage/issues/161
	                    if (value === null) {
	                        value = undefined;
	                    }

	                    var req = store.put(value, key);

	                    transaction.oncomplete = function () {
	                        // Cast to undefined so the value passed to
	                        // callback/promise is the same as what one would get out
	                        // of `getItem()` later. This leads to some weirdness
	                        // (setItem('foo', undefined) will return `null`), but
	                        // it's not my fault localStorage is our baseline and that
	                        // it's weird.
	                        if (value === undefined) {
	                            value = null;
	                        }

	                        resolve(value);
	                    };
	                    transaction.onabort = transaction.onerror = function () {
	                        var err = req.error ? req.error : req.transaction.error;
	                        reject(err);
	                    };
	                } catch (e) {
	                    reject(e);
	                }
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	function removeItem(key, callback) {
	    var self = this;

	    key = normalizeKey(key);

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
	                if (err) {
	                    return reject(err);
	                }

	                try {
	                    var store = transaction.objectStore(self._dbInfo.storeName);
	                    // We use a Grunt task to make this safe for IE and some
	                    // versions of Android (including those used by Cordova).
	                    // Normally IE won't like `.delete()` and will insist on
	                    // using `['delete']()`, but we have a build step that
	                    // fixes this for us now.
	                    var req = store["delete"](key);
	                    transaction.oncomplete = function () {
	                        resolve();
	                    };

	                    transaction.onerror = function () {
	                        reject(req.error);
	                    };

	                    // The request will be also be aborted if we've exceeded our storage
	                    // space.
	                    transaction.onabort = function () {
	                        var err = req.error ? req.error : req.transaction.error;
	                        reject(err);
	                    };
	                } catch (e) {
	                    reject(e);
	                }
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	function clear(callback) {
	    var self = this;

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
	                if (err) {
	                    return reject(err);
	                }

	                try {
	                    var store = transaction.objectStore(self._dbInfo.storeName);
	                    var req = store.clear();

	                    transaction.oncomplete = function () {
	                        resolve();
	                    };

	                    transaction.onabort = transaction.onerror = function () {
	                        var err = req.error ? req.error : req.transaction.error;
	                        reject(err);
	                    };
	                } catch (e) {
	                    reject(e);
	                }
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	function length(callback) {
	    var self = this;

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
	                if (err) {
	                    return reject(err);
	                }

	                try {
	                    var store = transaction.objectStore(self._dbInfo.storeName);
	                    var req = store.count();

	                    req.onsuccess = function () {
	                        resolve(req.result);
	                    };

	                    req.onerror = function () {
	                        reject(req.error);
	                    };
	                } catch (e) {
	                    reject(e);
	                }
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	function key(n, callback) {
	    var self = this;

	    var promise = new Promise$1(function (resolve, reject) {
	        if (n < 0) {
	            resolve(null);

	            return;
	        }

	        self.ready().then(function () {
	            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
	                if (err) {
	                    return reject(err);
	                }

	                try {
	                    var store = transaction.objectStore(self._dbInfo.storeName);
	                    var advanced = false;
	                    var req = store.openKeyCursor();

	                    req.onsuccess = function () {
	                        var cursor = req.result;
	                        if (!cursor) {
	                            // this means there weren't enough keys
	                            resolve(null);

	                            return;
	                        }

	                        if (n === 0) {
	                            // We have the first key, return it if that's what they
	                            // wanted.
	                            resolve(cursor.key);
	                        } else {
	                            if (!advanced) {
	                                // Otherwise, ask the cursor to skip ahead n
	                                // records.
	                                advanced = true;
	                                cursor.advance(n);
	                            } else {
	                                // When we get here, we've got the nth key.
	                                resolve(cursor.key);
	                            }
	                        }
	                    };

	                    req.onerror = function () {
	                        reject(req.error);
	                    };
	                } catch (e) {
	                    reject(e);
	                }
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	function keys(callback) {
	    var self = this;

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
	                if (err) {
	                    return reject(err);
	                }

	                try {
	                    var store = transaction.objectStore(self._dbInfo.storeName);
	                    var req = store.openKeyCursor();
	                    var keys = [];

	                    req.onsuccess = function () {
	                        var cursor = req.result;

	                        if (!cursor) {
	                            resolve(keys);
	                            return;
	                        }

	                        keys.push(cursor.key);
	                        cursor["continue"]();
	                    };

	                    req.onerror = function () {
	                        reject(req.error);
	                    };
	                } catch (e) {
	                    reject(e);
	                }
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	function dropInstance(options, callback) {
	    callback = getCallback.apply(this, arguments);

	    var currentConfig = this.config();
	    options = typeof options !== 'function' && options || {};
	    if (!options.name) {
	        options.name = options.name || currentConfig.name;
	        options.storeName = options.storeName || currentConfig.storeName;
	    }

	    var self = this;
	    var promise;
	    if (!options.name) {
	        promise = Promise$1.reject('Invalid arguments');
	    } else {
	        var isCurrentDb = options.name === currentConfig.name && self._dbInfo.db;

	        var dbPromise = isCurrentDb ? Promise$1.resolve(self._dbInfo.db) : _getOriginalConnection(options).then(function (db) {
	            var dbContext = dbContexts[options.name];
	            var forages = dbContext.forages;
	            dbContext.db = db;
	            for (var i = 0; i < forages.length; i++) {
	                forages[i]._dbInfo.db = db;
	            }
	            return db;
	        });

	        if (!options.storeName) {
	            promise = dbPromise.then(function (db) {
	                _deferReadiness(options);

	                var dbContext = dbContexts[options.name];
	                var forages = dbContext.forages;

	                db.close();
	                for (var i = 0; i < forages.length; i++) {
	                    var forage = forages[i];
	                    forage._dbInfo.db = null;
	                }

	                var dropDBPromise = new Promise$1(function (resolve, reject) {
	                    var req = idb.deleteDatabase(options.name);

	                    req.onerror = function () {
	                        var db = req.result;
	                        if (db) {
	                            db.close();
	                        }
	                        reject(req.error);
	                    };

	                    req.onblocked = function () {
	                        // Closing all open connections in onversionchange handler should prevent this situation, but if
	                        // we do get here, it just means the request remains pending - eventually it will succeed or error
	                        console.warn('dropInstance blocked for database "' + options.name + '" until all open connections are closed');
	                    };

	                    req.onsuccess = function () {
	                        var db = req.result;
	                        if (db) {
	                            db.close();
	                        }
	                        resolve(db);
	                    };
	                });

	                return dropDBPromise.then(function (db) {
	                    dbContext.db = db;
	                    for (var i = 0; i < forages.length; i++) {
	                        var _forage = forages[i];
	                        _advanceReadiness(_forage._dbInfo);
	                    }
	                })["catch"](function (err) {
	                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
	                    throw err;
	                });
	            });
	        } else {
	            promise = dbPromise.then(function (db) {
	                if (!db.objectStoreNames.contains(options.storeName)) {
	                    return;
	                }

	                var newVersion = db.version + 1;

	                _deferReadiness(options);

	                var dbContext = dbContexts[options.name];
	                var forages = dbContext.forages;

	                db.close();
	                for (var i = 0; i < forages.length; i++) {
	                    var forage = forages[i];
	                    forage._dbInfo.db = null;
	                    forage._dbInfo.version = newVersion;
	                }

	                var dropObjectPromise = new Promise$1(function (resolve, reject) {
	                    var req = idb.open(options.name, newVersion);

	                    req.onerror = function (err) {
	                        var db = req.result;
	                        db.close();
	                        reject(err);
	                    };

	                    req.onupgradeneeded = function () {
	                        var db = req.result;
	                        db.deleteObjectStore(options.storeName);
	                    };

	                    req.onsuccess = function () {
	                        var db = req.result;
	                        db.close();
	                        resolve(db);
	                    };
	                });

	                return dropObjectPromise.then(function (db) {
	                    dbContext.db = db;
	                    for (var j = 0; j < forages.length; j++) {
	                        var _forage2 = forages[j];
	                        _forage2._dbInfo.db = db;
	                        _advanceReadiness(_forage2._dbInfo);
	                    }
	                })["catch"](function (err) {
	                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
	                    throw err;
	                });
	            });
	        }
	    }

	    executeCallback(promise, callback);
	    return promise;
	}

	var asyncStorage = {
	    _driver: 'asyncStorage',
	    _initStorage: _initStorage,
	    _support: isIndexedDBValid(),
	    iterate: iterate,
	    getItem: getItem,
	    setItem: setItem,
	    removeItem: removeItem,
	    clear: clear,
	    length: length,
	    key: key,
	    keys: keys,
	    dropInstance: dropInstance
	};

	function isWebSQLValid() {
	    return typeof openDatabase === 'function';
	}

	// Sadly, the best way to save binary data in WebSQL/localStorage is serializing
	// it to Base64, so this is how we store it to prevent very strange errors with less
	// verbose ways of binary <-> string data storage.
	var BASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

	var BLOB_TYPE_PREFIX = '~~local_forage_type~';
	var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;

	var SERIALIZED_MARKER = '__lfsc__:';
	var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;

	// OMG the serializations!
	var TYPE_ARRAYBUFFER = 'arbf';
	var TYPE_BLOB = 'blob';
	var TYPE_INT8ARRAY = 'si08';
	var TYPE_UINT8ARRAY = 'ui08';
	var TYPE_UINT8CLAMPEDARRAY = 'uic8';
	var TYPE_INT16ARRAY = 'si16';
	var TYPE_INT32ARRAY = 'si32';
	var TYPE_UINT16ARRAY = 'ur16';
	var TYPE_UINT32ARRAY = 'ui32';
	var TYPE_FLOAT32ARRAY = 'fl32';
	var TYPE_FLOAT64ARRAY = 'fl64';
	var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;

	var toString$1 = Object.prototype.toString;

	function stringToBuffer(serializedString) {
	    // Fill the string into a ArrayBuffer.
	    var bufferLength = serializedString.length * 0.75;
	    var len = serializedString.length;
	    var i;
	    var p = 0;
	    var encoded1, encoded2, encoded3, encoded4;

	    if (serializedString[serializedString.length - 1] === '=') {
	        bufferLength--;
	        if (serializedString[serializedString.length - 2] === '=') {
	            bufferLength--;
	        }
	    }

	    var buffer = new ArrayBuffer(bufferLength);
	    var bytes = new Uint8Array(buffer);

	    for (i = 0; i < len; i += 4) {
	        encoded1 = BASE_CHARS.indexOf(serializedString[i]);
	        encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
	        encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
	        encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);

	        /*jslint bitwise: true */
	        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
	        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
	        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
	    }
	    return buffer;
	}

	// Converts a buffer to a string to store, serialized, in the backend
	// storage library.
	function bufferToString(buffer) {
	    // base64-arraybuffer
	    var bytes = new Uint8Array(buffer);
	    var base64String = '';
	    var i;

	    for (i = 0; i < bytes.length; i += 3) {
	        /*jslint bitwise: true */
	        base64String += BASE_CHARS[bytes[i] >> 2];
	        base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
	        base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
	        base64String += BASE_CHARS[bytes[i + 2] & 63];
	    }

	    if (bytes.length % 3 === 2) {
	        base64String = base64String.substring(0, base64String.length - 1) + '=';
	    } else if (bytes.length % 3 === 1) {
	        base64String = base64String.substring(0, base64String.length - 2) + '==';
	    }

	    return base64String;
	}

	// Serialize a value, afterwards executing a callback (which usually
	// instructs the `setItem()` callback/promise to be executed). This is how
	// we store binary data with localStorage.
	function serialize(value, callback) {
	    var valueType = '';
	    if (value) {
	        valueType = toString$1.call(value);
	    }

	    // Cannot use `value instanceof ArrayBuffer` or such here, as these
	    // checks fail when running the tests using casper.js...
	    //
	    // TODO: See why those tests fail and use a better solution.
	    if (value && (valueType === '[object ArrayBuffer]' || value.buffer && toString$1.call(value.buffer) === '[object ArrayBuffer]')) {
	        // Convert binary arrays to a string and prefix the string with
	        // a special marker.
	        var buffer;
	        var marker = SERIALIZED_MARKER;

	        if (value instanceof ArrayBuffer) {
	            buffer = value;
	            marker += TYPE_ARRAYBUFFER;
	        } else {
	            buffer = value.buffer;

	            if (valueType === '[object Int8Array]') {
	                marker += TYPE_INT8ARRAY;
	            } else if (valueType === '[object Uint8Array]') {
	                marker += TYPE_UINT8ARRAY;
	            } else if (valueType === '[object Uint8ClampedArray]') {
	                marker += TYPE_UINT8CLAMPEDARRAY;
	            } else if (valueType === '[object Int16Array]') {
	                marker += TYPE_INT16ARRAY;
	            } else if (valueType === '[object Uint16Array]') {
	                marker += TYPE_UINT16ARRAY;
	            } else if (valueType === '[object Int32Array]') {
	                marker += TYPE_INT32ARRAY;
	            } else if (valueType === '[object Uint32Array]') {
	                marker += TYPE_UINT32ARRAY;
	            } else if (valueType === '[object Float32Array]') {
	                marker += TYPE_FLOAT32ARRAY;
	            } else if (valueType === '[object Float64Array]') {
	                marker += TYPE_FLOAT64ARRAY;
	            } else {
	                callback(new Error('Failed to get type for BinaryArray'));
	            }
	        }

	        callback(marker + bufferToString(buffer));
	    } else if (valueType === '[object Blob]') {
	        // Conver the blob to a binaryArray and then to a string.
	        var fileReader = new FileReader();

	        fileReader.onload = function () {
	            // Backwards-compatible prefix for the blob type.
	            var str = BLOB_TYPE_PREFIX + value.type + '~' + bufferToString(this.result);

	            callback(SERIALIZED_MARKER + TYPE_BLOB + str);
	        };

	        fileReader.readAsArrayBuffer(value);
	    } else {
	        try {
	            callback(JSON.stringify(value));
	        } catch (e) {
	            console.error("Couldn't convert value into a JSON string: ", value);

	            callback(null, e);
	        }
	    }
	}

	// Deserialize data we've inserted into a value column/field. We place
	// special markers into our strings to mark them as encoded; this isn't
	// as nice as a meta field, but it's the only sane thing we can do whilst
	// keeping localStorage support intact.
	//
	// Oftentimes this will just deserialize JSON content, but if we have a
	// special marker (SERIALIZED_MARKER, defined above), we will extract
	// some kind of arraybuffer/binary data/typed array out of the string.
	function deserialize(value) {
	    // If we haven't marked this string as being specially serialized (i.e.
	    // something other than serialized JSON), we can just return it and be
	    // done with it.
	    if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
	        return JSON.parse(value);
	    }

	    // The following code deals with deserializing some kind of Blob or
	    // TypedArray. First we separate out the type of data we're dealing
	    // with from the data itself.
	    var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
	    var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);

	    var blobType;
	    // Backwards-compatible blob type serialization strategy.
	    // DBs created with older versions of localForage will simply not have the blob type.
	    if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
	        var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
	        blobType = matcher[1];
	        serializedString = serializedString.substring(matcher[0].length);
	    }
	    var buffer = stringToBuffer(serializedString);

	    // Return the right type based on the code/type set during
	    // serialization.
	    switch (type) {
	        case TYPE_ARRAYBUFFER:
	            return buffer;
	        case TYPE_BLOB:
	            return createBlob([buffer], { type: blobType });
	        case TYPE_INT8ARRAY:
	            return new Int8Array(buffer);
	        case TYPE_UINT8ARRAY:
	            return new Uint8Array(buffer);
	        case TYPE_UINT8CLAMPEDARRAY:
	            return new Uint8ClampedArray(buffer);
	        case TYPE_INT16ARRAY:
	            return new Int16Array(buffer);
	        case TYPE_UINT16ARRAY:
	            return new Uint16Array(buffer);
	        case TYPE_INT32ARRAY:
	            return new Int32Array(buffer);
	        case TYPE_UINT32ARRAY:
	            return new Uint32Array(buffer);
	        case TYPE_FLOAT32ARRAY:
	            return new Float32Array(buffer);
	        case TYPE_FLOAT64ARRAY:
	            return new Float64Array(buffer);
	        default:
	            throw new Error('Unkown type: ' + type);
	    }
	}

	var localforageSerializer = {
	    serialize: serialize,
	    deserialize: deserialize,
	    stringToBuffer: stringToBuffer,
	    bufferToString: bufferToString
	};

	/*
	 * Includes code from:
	 *
	 * base64-arraybuffer
	 * https://github.com/niklasvh/base64-arraybuffer
	 *
	 * Copyright (c) 2012 Niklas von Hertzen
	 * Licensed under the MIT license.
	 */

	function createDbTable(t, dbInfo, callback, errorCallback) {
	    t.executeSql('CREATE TABLE IF NOT EXISTS ' + dbInfo.storeName + ' ' + '(id INTEGER PRIMARY KEY, key unique, value)', [], callback, errorCallback);
	}

	// Open the WebSQL database (automatically creates one if one didn't
	// previously exist), using any options set in the config.
	function _initStorage$1(options) {
	    var self = this;
	    var dbInfo = {
	        db: null
	    };

	    if (options) {
	        for (var i in options) {
	            dbInfo[i] = typeof options[i] !== 'string' ? options[i].toString() : options[i];
	        }
	    }

	    var dbInfoPromise = new Promise$1(function (resolve, reject) {
	        // Open the database; the openDatabase API will automatically
	        // create it for us if it doesn't exist.
	        try {
	            dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
	        } catch (e) {
	            return reject(e);
	        }

	        // Create our key/value table if it doesn't exist.
	        dbInfo.db.transaction(function (t) {
	            createDbTable(t, dbInfo, function () {
	                self._dbInfo = dbInfo;
	                resolve();
	            }, function (t, error) {
	                reject(error);
	            });
	        }, reject);
	    });

	    dbInfo.serializer = localforageSerializer;
	    return dbInfoPromise;
	}

	function tryExecuteSql(t, dbInfo, sqlStatement, args, callback, errorCallback) {
	    t.executeSql(sqlStatement, args, callback, function (t, error) {
	        if (error.code === error.SYNTAX_ERR) {
	            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name = ?", [dbInfo.storeName], function (t, results) {
	                if (!results.rows.length) {
	                    // if the table is missing (was deleted)
	                    // re-create it table and retry
	                    createDbTable(t, dbInfo, function () {
	                        t.executeSql(sqlStatement, args, callback, errorCallback);
	                    }, errorCallback);
	                } else {
	                    errorCallback(t, error);
	                }
	            }, errorCallback);
	        } else {
	            errorCallback(t, error);
	        }
	    }, errorCallback);
	}

	function getItem$1(key, callback) {
	    var self = this;

	    key = normalizeKey(key);

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            var dbInfo = self._dbInfo;
	            dbInfo.db.transaction(function (t) {
	                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName + ' WHERE key = ? LIMIT 1', [key], function (t, results) {
	                    var result = results.rows.length ? results.rows.item(0).value : null;

	                    // Check to see if this is serialized content we need to
	                    // unpack.
	                    if (result) {
	                        result = dbInfo.serializer.deserialize(result);
	                    }

	                    resolve(result);
	                }, function (t, error) {
	                    reject(error);
	                });
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	function iterate$1(iterator, callback) {
	    var self = this;

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            var dbInfo = self._dbInfo;

	            dbInfo.db.transaction(function (t) {
	                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName, [], function (t, results) {
	                    var rows = results.rows;
	                    var length = rows.length;

	                    for (var i = 0; i < length; i++) {
	                        var item = rows.item(i);
	                        var result = item.value;

	                        // Check to see if this is serialized content
	                        // we need to unpack.
	                        if (result) {
	                            result = dbInfo.serializer.deserialize(result);
	                        }

	                        result = iterator(result, item.key, i + 1);

	                        // void(0) prevents problems with redefinition
	                        // of `undefined`.
	                        if (result !== void 0) {
	                            resolve(result);
	                            return;
	                        }
	                    }

	                    resolve();
	                }, function (t, error) {
	                    reject(error);
	                });
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	function _setItem(key, value, callback, retriesLeft) {
	    var self = this;

	    key = normalizeKey(key);

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            // The localStorage API doesn't return undefined values in an
	            // "expected" way, so undefined is always cast to null in all
	            // drivers. See: https://github.com/mozilla/localForage/pull/42
	            if (value === undefined) {
	                value = null;
	            }

	            // Save the original value to pass to the callback.
	            var originalValue = value;

	            var dbInfo = self._dbInfo;
	            dbInfo.serializer.serialize(value, function (value, error) {
	                if (error) {
	                    reject(error);
	                } else {
	                    dbInfo.db.transaction(function (t) {
	                        tryExecuteSql(t, dbInfo, 'INSERT OR REPLACE INTO ' + dbInfo.storeName + ' ' + '(key, value) VALUES (?, ?)', [key, value], function () {
	                            resolve(originalValue);
	                        }, function (t, error) {
	                            reject(error);
	                        });
	                    }, function (sqlError) {
	                        // The transaction failed; check
	                        // to see if it's a quota error.
	                        if (sqlError.code === sqlError.QUOTA_ERR) {
	                            // We reject the callback outright for now, but
	                            // it's worth trying to re-run the transaction.
	                            // Even if the user accepts the prompt to use
	                            // more storage on Safari, this error will
	                            // be called.
	                            //
	                            // Try to re-run the transaction.
	                            if (retriesLeft > 0) {
	                                resolve(_setItem.apply(self, [key, originalValue, callback, retriesLeft - 1]));
	                                return;
	                            }
	                            reject(sqlError);
	                        }
	                    });
	                }
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	function setItem$1(key, value, callback) {
	    return _setItem.apply(this, [key, value, callback, 1]);
	}

	function removeItem$1(key, callback) {
	    var self = this;

	    key = normalizeKey(key);

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            var dbInfo = self._dbInfo;
	            dbInfo.db.transaction(function (t) {
	                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName + ' WHERE key = ?', [key], function () {
	                    resolve();
	                }, function (t, error) {
	                    reject(error);
	                });
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	// Deletes every item in the table.
	// TODO: Find out if this resets the AUTO_INCREMENT number.
	function clear$1(callback) {
	    var self = this;

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            var dbInfo = self._dbInfo;
	            dbInfo.db.transaction(function (t) {
	                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName, [], function () {
	                    resolve();
	                }, function (t, error) {
	                    reject(error);
	                });
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	// Does a simple `COUNT(key)` to get the number of items stored in
	// localForage.
	function length$1(callback) {
	    var self = this;

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            var dbInfo = self._dbInfo;
	            dbInfo.db.transaction(function (t) {
	                // Ahhh, SQL makes this one soooooo easy.
	                tryExecuteSql(t, dbInfo, 'SELECT COUNT(key) as c FROM ' + dbInfo.storeName, [], function (t, results) {
	                    var result = results.rows.item(0).c;
	                    resolve(result);
	                }, function (t, error) {
	                    reject(error);
	                });
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	// Return the key located at key index X; essentially gets the key from a
	// `WHERE id = ?`. This is the most efficient way I can think to implement
	// this rarely-used (in my experience) part of the API, but it can seem
	// inconsistent, because we do `INSERT OR REPLACE INTO` on `setItem()`, so
	// the ID of each key will change every time it's updated. Perhaps a stored
	// procedure for the `setItem()` SQL would solve this problem?
	// TODO: Don't change ID on `setItem()`.
	function key$1(n, callback) {
	    var self = this;

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            var dbInfo = self._dbInfo;
	            dbInfo.db.transaction(function (t) {
	                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName + ' WHERE id = ? LIMIT 1', [n + 1], function (t, results) {
	                    var result = results.rows.length ? results.rows.item(0).key : null;
	                    resolve(result);
	                }, function (t, error) {
	                    reject(error);
	                });
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	function keys$1(callback) {
	    var self = this;

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            var dbInfo = self._dbInfo;
	            dbInfo.db.transaction(function (t) {
	                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName, [], function (t, results) {
	                    var keys = [];

	                    for (var i = 0; i < results.rows.length; i++) {
	                        keys.push(results.rows.item(i).key);
	                    }

	                    resolve(keys);
	                }, function (t, error) {
	                    reject(error);
	                });
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	// https://www.w3.org/TR/webdatabase/#databases
	// > There is no way to enumerate or delete the databases available for an origin from this API.
	function getAllStoreNames(db) {
	    return new Promise$1(function (resolve, reject) {
	        db.transaction(function (t) {
	            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function (t, results) {
	                var storeNames = [];

	                for (var i = 0; i < results.rows.length; i++) {
	                    storeNames.push(results.rows.item(i).name);
	                }

	                resolve({
	                    db: db,
	                    storeNames: storeNames
	                });
	            }, function (t, error) {
	                reject(error);
	            });
	        }, function (sqlError) {
	            reject(sqlError);
	        });
	    });
	}

	function dropInstance$1(options, callback) {
	    callback = getCallback.apply(this, arguments);

	    var currentConfig = this.config();
	    options = typeof options !== 'function' && options || {};
	    if (!options.name) {
	        options.name = options.name || currentConfig.name;
	        options.storeName = options.storeName || currentConfig.storeName;
	    }

	    var self = this;
	    var promise;
	    if (!options.name) {
	        promise = Promise$1.reject('Invalid arguments');
	    } else {
	        promise = new Promise$1(function (resolve) {
	            var db;
	            if (options.name === currentConfig.name) {
	                // use the db reference of the current instance
	                db = self._dbInfo.db;
	            } else {
	                db = openDatabase(options.name, '', '', 0);
	            }

	            if (!options.storeName) {
	                // drop all database tables
	                resolve(getAllStoreNames(db));
	            } else {
	                resolve({
	                    db: db,
	                    storeNames: [options.storeName]
	                });
	            }
	        }).then(function (operationInfo) {
	            return new Promise$1(function (resolve, reject) {
	                operationInfo.db.transaction(function (t) {
	                    function dropTable(storeName) {
	                        return new Promise$1(function (resolve, reject) {
	                            t.executeSql('DROP TABLE IF EXISTS ' + storeName, [], function () {
	                                resolve();
	                            }, function (t, error) {
	                                reject(error);
	                            });
	                        });
	                    }

	                    var operations = [];
	                    for (var i = 0, len = operationInfo.storeNames.length; i < len; i++) {
	                        operations.push(dropTable(operationInfo.storeNames[i]));
	                    }

	                    Promise$1.all(operations).then(function () {
	                        resolve();
	                    })["catch"](function (e) {
	                        reject(e);
	                    });
	                }, function (sqlError) {
	                    reject(sqlError);
	                });
	            });
	        });
	    }

	    executeCallback(promise, callback);
	    return promise;
	}

	var webSQLStorage = {
	    _driver: 'webSQLStorage',
	    _initStorage: _initStorage$1,
	    _support: isWebSQLValid(),
	    iterate: iterate$1,
	    getItem: getItem$1,
	    setItem: setItem$1,
	    removeItem: removeItem$1,
	    clear: clear$1,
	    length: length$1,
	    key: key$1,
	    keys: keys$1,
	    dropInstance: dropInstance$1
	};

	function isLocalStorageValid() {
	    try {
	        return typeof localStorage !== 'undefined' && 'setItem' in localStorage &&
	        // in IE8 typeof localStorage.setItem === 'object'
	        !!localStorage.setItem;
	    } catch (e) {
	        return false;
	    }
	}

	function _getKeyPrefix(options, defaultConfig) {
	    var keyPrefix = options.name + '/';

	    if (options.storeName !== defaultConfig.storeName) {
	        keyPrefix += options.storeName + '/';
	    }
	    return keyPrefix;
	}

	// Check if localStorage throws when saving an item
	function checkIfLocalStorageThrows() {
	    var localStorageTestKey = '_localforage_support_test';

	    try {
	        localStorage.setItem(localStorageTestKey, true);
	        localStorage.removeItem(localStorageTestKey);

	        return false;
	    } catch (e) {
	        return true;
	    }
	}

	// Check if localStorage is usable and allows to save an item
	// This method checks if localStorage is usable in Safari Private Browsing
	// mode, or in any other case where the available quota for localStorage
	// is 0 and there wasn't any saved items yet.
	function _isLocalStorageUsable() {
	    return !checkIfLocalStorageThrows() || localStorage.length > 0;
	}

	// Config the localStorage backend, using options set in the config.
	function _initStorage$2(options) {
	    var self = this;
	    var dbInfo = {};
	    if (options) {
	        for (var i in options) {
	            dbInfo[i] = options[i];
	        }
	    }

	    dbInfo.keyPrefix = _getKeyPrefix(options, self._defaultConfig);

	    if (!_isLocalStorageUsable()) {
	        return Promise$1.reject();
	    }

	    self._dbInfo = dbInfo;
	    dbInfo.serializer = localforageSerializer;

	    return Promise$1.resolve();
	}

	// Remove all keys from the datastore, effectively destroying all data in
	// the app's key/value store!
	function clear$2(callback) {
	    var self = this;
	    var promise = self.ready().then(function () {
	        var keyPrefix = self._dbInfo.keyPrefix;

	        for (var i = localStorage.length - 1; i >= 0; i--) {
	            var key = localStorage.key(i);

	            if (key.indexOf(keyPrefix) === 0) {
	                localStorage.removeItem(key);
	            }
	        }
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	// Retrieve an item from the store. Unlike the original async_storage
	// library in Gaia, we don't modify return values at all. If a key's value
	// is `undefined`, we pass that value to the callback function.
	function getItem$2(key, callback) {
	    var self = this;

	    key = normalizeKey(key);

	    var promise = self.ready().then(function () {
	        var dbInfo = self._dbInfo;
	        var result = localStorage.getItem(dbInfo.keyPrefix + key);

	        // If a result was found, parse it from the serialized
	        // string into a JS object. If result isn't truthy, the key
	        // is likely undefined and we'll pass it straight to the
	        // callback.
	        if (result) {
	            result = dbInfo.serializer.deserialize(result);
	        }

	        return result;
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	// Iterate over all items in the store.
	function iterate$2(iterator, callback) {
	    var self = this;

	    var promise = self.ready().then(function () {
	        var dbInfo = self._dbInfo;
	        var keyPrefix = dbInfo.keyPrefix;
	        var keyPrefixLength = keyPrefix.length;
	        var length = localStorage.length;

	        // We use a dedicated iterator instead of the `i` variable below
	        // so other keys we fetch in localStorage aren't counted in
	        // the `iterationNumber` argument passed to the `iterate()`
	        // callback.
	        //
	        // See: github.com/mozilla/localForage/pull/435#discussion_r38061530
	        var iterationNumber = 1;

	        for (var i = 0; i < length; i++) {
	            var key = localStorage.key(i);
	            if (key.indexOf(keyPrefix) !== 0) {
	                continue;
	            }
	            var value = localStorage.getItem(key);

	            // If a result was found, parse it from the serialized
	            // string into a JS object. If result isn't truthy, the
	            // key is likely undefined and we'll pass it straight
	            // to the iterator.
	            if (value) {
	                value = dbInfo.serializer.deserialize(value);
	            }

	            value = iterator(value, key.substring(keyPrefixLength), iterationNumber++);

	            if (value !== void 0) {
	                return value;
	            }
	        }
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	// Same as localStorage's key() method, except takes a callback.
	function key$2(n, callback) {
	    var self = this;
	    var promise = self.ready().then(function () {
	        var dbInfo = self._dbInfo;
	        var result;
	        try {
	            result = localStorage.key(n);
	        } catch (error) {
	            result = null;
	        }

	        // Remove the prefix from the key, if a key is found.
	        if (result) {
	            result = result.substring(dbInfo.keyPrefix.length);
	        }

	        return result;
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	function keys$2(callback) {
	    var self = this;
	    var promise = self.ready().then(function () {
	        var dbInfo = self._dbInfo;
	        var length = localStorage.length;
	        var keys = [];

	        for (var i = 0; i < length; i++) {
	            var itemKey = localStorage.key(i);
	            if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
	                keys.push(itemKey.substring(dbInfo.keyPrefix.length));
	            }
	        }

	        return keys;
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	// Supply the number of keys in the datastore to the callback function.
	function length$2(callback) {
	    var self = this;
	    var promise = self.keys().then(function (keys) {
	        return keys.length;
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	// Remove an item from the store, nice and simple.
	function removeItem$2(key, callback) {
	    var self = this;

	    key = normalizeKey(key);

	    var promise = self.ready().then(function () {
	        var dbInfo = self._dbInfo;
	        localStorage.removeItem(dbInfo.keyPrefix + key);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	// Set a key's value and run an optional callback once the value is set.
	// Unlike Gaia's implementation, the callback function is passed the value,
	// in case you want to operate on that value only after you're sure it
	// saved, or something like that.
	function setItem$2(key, value, callback) {
	    var self = this;

	    key = normalizeKey(key);

	    var promise = self.ready().then(function () {
	        // Convert undefined values to null.
	        // https://github.com/mozilla/localForage/pull/42
	        if (value === undefined) {
	            value = null;
	        }

	        // Save the original value to pass to the callback.
	        var originalValue = value;

	        return new Promise$1(function (resolve, reject) {
	            var dbInfo = self._dbInfo;
	            dbInfo.serializer.serialize(value, function (value, error) {
	                if (error) {
	                    reject(error);
	                } else {
	                    try {
	                        localStorage.setItem(dbInfo.keyPrefix + key, value);
	                        resolve(originalValue);
	                    } catch (e) {
	                        // localStorage capacity exceeded.
	                        // TODO: Make this a specific error/event.
	                        if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
	                            reject(e);
	                        }
	                        reject(e);
	                    }
	                }
	            });
	        });
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	function dropInstance$2(options, callback) {
	    callback = getCallback.apply(this, arguments);

	    options = typeof options !== 'function' && options || {};
	    if (!options.name) {
	        var currentConfig = this.config();
	        options.name = options.name || currentConfig.name;
	        options.storeName = options.storeName || currentConfig.storeName;
	    }

	    var self = this;
	    var promise;
	    if (!options.name) {
	        promise = Promise$1.reject('Invalid arguments');
	    } else {
	        promise = new Promise$1(function (resolve) {
	            if (!options.storeName) {
	                resolve(options.name + '/');
	            } else {
	                resolve(_getKeyPrefix(options, self._defaultConfig));
	            }
	        }).then(function (keyPrefix) {
	            for (var i = localStorage.length - 1; i >= 0; i--) {
	                var key = localStorage.key(i);

	                if (key.indexOf(keyPrefix) === 0) {
	                    localStorage.removeItem(key);
	                }
	            }
	        });
	    }

	    executeCallback(promise, callback);
	    return promise;
	}

	var localStorageWrapper = {
	    _driver: 'localStorageWrapper',
	    _initStorage: _initStorage$2,
	    _support: isLocalStorageValid(),
	    iterate: iterate$2,
	    getItem: getItem$2,
	    setItem: setItem$2,
	    removeItem: removeItem$2,
	    clear: clear$2,
	    length: length$2,
	    key: key$2,
	    keys: keys$2,
	    dropInstance: dropInstance$2
	};

	var sameValue = function sameValue(x, y) {
	    return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
	};

	var includes = function includes(array, searchElement) {
	    var len = array.length;
	    var i = 0;
	    while (i < len) {
	        if (sameValue(array[i], searchElement)) {
	            return true;
	        }
	        i++;
	    }

	    return false;
	};

	var isArray = Array.isArray || function (arg) {
	    return Object.prototype.toString.call(arg) === '[object Array]';
	};

	// Drivers are stored here when `defineDriver()` is called.
	// They are shared across all instances of localForage.
	var DefinedDrivers = {};

	var DriverSupport = {};

	var DefaultDrivers = {
	    INDEXEDDB: asyncStorage,
	    WEBSQL: webSQLStorage,
	    LOCALSTORAGE: localStorageWrapper
	};

	var DefaultDriverOrder = [DefaultDrivers.INDEXEDDB._driver, DefaultDrivers.WEBSQL._driver, DefaultDrivers.LOCALSTORAGE._driver];

	var OptionalDriverMethods = ['dropInstance'];

	var LibraryMethods = ['clear', 'getItem', 'iterate', 'key', 'keys', 'length', 'removeItem', 'setItem'].concat(OptionalDriverMethods);

	var DefaultConfig = {
	    description: '',
	    driver: DefaultDriverOrder.slice(),
	    name: 'localforage',
	    // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
	    // we can use without a prompt.
	    size: 4980736,
	    storeName: 'keyvaluepairs',
	    version: 1.0
	};

	function callWhenReady(localForageInstance, libraryMethod) {
	    localForageInstance[libraryMethod] = function () {
	        var _args = arguments;
	        return localForageInstance.ready().then(function () {
	            return localForageInstance[libraryMethod].apply(localForageInstance, _args);
	        });
	    };
	}

	function extend() {
	    for (var i = 1; i < arguments.length; i++) {
	        var arg = arguments[i];

	        if (arg) {
	            for (var _key in arg) {
	                if (arg.hasOwnProperty(_key)) {
	                    if (isArray(arg[_key])) {
	                        arguments[0][_key] = arg[_key].slice();
	                    } else {
	                        arguments[0][_key] = arg[_key];
	                    }
	                }
	            }
	        }
	    }

	    return arguments[0];
	}

	var LocalForage = function () {
	    function LocalForage(options) {
	        _classCallCheck(this, LocalForage);

	        for (var driverTypeKey in DefaultDrivers) {
	            if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
	                var driver = DefaultDrivers[driverTypeKey];
	                var driverName = driver._driver;
	                this[driverTypeKey] = driverName;

	                if (!DefinedDrivers[driverName]) {
	                    // we don't need to wait for the promise,
	                    // since the default drivers can be defined
	                    // in a blocking manner
	                    this.defineDriver(driver);
	                }
	            }
	        }

	        this._defaultConfig = extend({}, DefaultConfig);
	        this._config = extend({}, this._defaultConfig, options);
	        this._driverSet = null;
	        this._initDriver = null;
	        this._ready = false;
	        this._dbInfo = null;

	        this._wrapLibraryMethodsWithReady();
	        this.setDriver(this._config.driver)["catch"](function () {});
	    }

	    // Set any config values for localForage; can be called anytime before
	    // the first API call (e.g. `getItem`, `setItem`).
	    // We loop through options so we don't overwrite existing config
	    // values.


	    LocalForage.prototype.config = function config(options) {
	        // If the options argument is an object, we use it to set values.
	        // Otherwise, we return either a specified config value or all
	        // config values.
	        if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
	            // If localforage is ready and fully initialized, we can't set
	            // any new configuration values. Instead, we return an error.
	            if (this._ready) {
	                return new Error("Can't call config() after localforage " + 'has been used.');
	            }

	            for (var i in options) {
	                if (i === 'storeName') {
	                    options[i] = options[i].replace(/\W/g, '_');
	                }

	                if (i === 'version' && typeof options[i] !== 'number') {
	                    return new Error('Database version must be a number.');
	                }

	                this._config[i] = options[i];
	            }

	            // after all config options are set and
	            // the driver option is used, try setting it
	            if ('driver' in options && options.driver) {
	                return this.setDriver(this._config.driver);
	            }

	            return true;
	        } else if (typeof options === 'string') {
	            return this._config[options];
	        } else {
	            return this._config;
	        }
	    };

	    // Used to define a custom driver, shared across all instances of
	    // localForage.


	    LocalForage.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
	        var promise = new Promise$1(function (resolve, reject) {
	            try {
	                var driverName = driverObject._driver;
	                var complianceError = new Error('Custom driver not compliant; see ' + 'https://mozilla.github.io/localForage/#definedriver');

	                // A driver name should be defined and not overlap with the
	                // library-defined, default drivers.
	                if (!driverObject._driver) {
	                    reject(complianceError);
	                    return;
	                }

	                var driverMethods = LibraryMethods.concat('_initStorage');
	                for (var i = 0, len = driverMethods.length; i < len; i++) {
	                    var driverMethodName = driverMethods[i];

	                    // when the property is there,
	                    // it should be a method even when optional
	                    var isRequired = !includes(OptionalDriverMethods, driverMethodName);
	                    if ((isRequired || driverObject[driverMethodName]) && typeof driverObject[driverMethodName] !== 'function') {
	                        reject(complianceError);
	                        return;
	                    }
	                }

	                var configureMissingMethods = function configureMissingMethods() {
	                    var methodNotImplementedFactory = function methodNotImplementedFactory(methodName) {
	                        return function () {
	                            var error = new Error('Method ' + methodName + ' is not implemented by the current driver');
	                            var promise = Promise$1.reject(error);
	                            executeCallback(promise, arguments[arguments.length - 1]);
	                            return promise;
	                        };
	                    };

	                    for (var _i = 0, _len = OptionalDriverMethods.length; _i < _len; _i++) {
	                        var optionalDriverMethod = OptionalDriverMethods[_i];
	                        if (!driverObject[optionalDriverMethod]) {
	                            driverObject[optionalDriverMethod] = methodNotImplementedFactory(optionalDriverMethod);
	                        }
	                    }
	                };

	                configureMissingMethods();

	                var setDriverSupport = function setDriverSupport(support) {
	                    if (DefinedDrivers[driverName]) {
	                        console.info('Redefining LocalForage driver: ' + driverName);
	                    }
	                    DefinedDrivers[driverName] = driverObject;
	                    DriverSupport[driverName] = support;
	                    // don't use a then, so that we can define
	                    // drivers that have simple _support methods
	                    // in a blocking manner
	                    resolve();
	                };

	                if ('_support' in driverObject) {
	                    if (driverObject._support && typeof driverObject._support === 'function') {
	                        driverObject._support().then(setDriverSupport, reject);
	                    } else {
	                        setDriverSupport(!!driverObject._support);
	                    }
	                } else {
	                    setDriverSupport(true);
	                }
	            } catch (e) {
	                reject(e);
	            }
	        });

	        executeTwoCallbacks(promise, callback, errorCallback);
	        return promise;
	    };

	    LocalForage.prototype.driver = function driver() {
	        return this._driver || null;
	    };

	    LocalForage.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
	        var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error('Driver not found.'));

	        executeTwoCallbacks(getDriverPromise, callback, errorCallback);
	        return getDriverPromise;
	    };

	    LocalForage.prototype.getSerializer = function getSerializer(callback) {
	        var serializerPromise = Promise$1.resolve(localforageSerializer);
	        executeTwoCallbacks(serializerPromise, callback);
	        return serializerPromise;
	    };

	    LocalForage.prototype.ready = function ready(callback) {
	        var self = this;

	        var promise = self._driverSet.then(function () {
	            if (self._ready === null) {
	                self._ready = self._initDriver();
	            }

	            return self._ready;
	        });

	        executeTwoCallbacks(promise, callback, callback);
	        return promise;
	    };

	    LocalForage.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
	        var self = this;

	        if (!isArray(drivers)) {
	            drivers = [drivers];
	        }

	        var supportedDrivers = this._getSupportedDrivers(drivers);

	        function setDriverToConfig() {
	            self._config.driver = self.driver();
	        }

	        function extendSelfWithDriver(driver) {
	            self._extend(driver);
	            setDriverToConfig();

	            self._ready = self._initStorage(self._config);
	            return self._ready;
	        }

	        function initDriver(supportedDrivers) {
	            return function () {
	                var currentDriverIndex = 0;

	                function driverPromiseLoop() {
	                    while (currentDriverIndex < supportedDrivers.length) {
	                        var driverName = supportedDrivers[currentDriverIndex];
	                        currentDriverIndex++;

	                        self._dbInfo = null;
	                        self._ready = null;

	                        return self.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
	                    }

	                    setDriverToConfig();
	                    var error = new Error('No available storage method found.');
	                    self._driverSet = Promise$1.reject(error);
	                    return self._driverSet;
	                }

	                return driverPromiseLoop();
	            };
	        }

	        // There might be a driver initialization in progress
	        // so wait for it to finish in order to avoid a possible
	        // race condition to set _dbInfo
	        var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function () {
	            return Promise$1.resolve();
	        }) : Promise$1.resolve();

	        this._driverSet = oldDriverSetDone.then(function () {
	            var driverName = supportedDrivers[0];
	            self._dbInfo = null;
	            self._ready = null;

	            return self.getDriver(driverName).then(function (driver) {
	                self._driver = driver._driver;
	                setDriverToConfig();
	                self._wrapLibraryMethodsWithReady();
	                self._initDriver = initDriver(supportedDrivers);
	            });
	        })["catch"](function () {
	            setDriverToConfig();
	            var error = new Error('No available storage method found.');
	            self._driverSet = Promise$1.reject(error);
	            return self._driverSet;
	        });

	        executeTwoCallbacks(this._driverSet, callback, errorCallback);
	        return this._driverSet;
	    };

	    LocalForage.prototype.supports = function supports(driverName) {
	        return !!DriverSupport[driverName];
	    };

	    LocalForage.prototype._extend = function _extend(libraryMethodsAndProperties) {
	        extend(this, libraryMethodsAndProperties);
	    };

	    LocalForage.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
	        var supportedDrivers = [];
	        for (var i = 0, len = drivers.length; i < len; i++) {
	            var driverName = drivers[i];
	            if (this.supports(driverName)) {
	                supportedDrivers.push(driverName);
	            }
	        }
	        return supportedDrivers;
	    };

	    LocalForage.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
	        // Add a stub for each driver API method that delays the call to the
	        // corresponding driver method until localForage is ready. These stubs
	        // will be replaced by the driver methods as soon as the driver is
	        // loaded, so there is no performance impact.
	        for (var i = 0, len = LibraryMethods.length; i < len; i++) {
	            callWhenReady(this, LibraryMethods[i]);
	        }
	    };

	    LocalForage.prototype.createInstance = function createInstance(options) {
	        return new LocalForage(options);
	    };

	    return LocalForage;
	}();

	// The actual localForage object that we expose as a module or via a
	// global. It's extended by pulling in one of our other libraries.


	var localforage_js = new LocalForage();

	module.exports = localforage_js;

	},{"3":3}]},{},[4])(4)
	}); 
} (localforage$1));

var localforageExports = localforage$1.exports;
var localforage = /*@__PURE__*/getDefaultExportFromCjs(localforageExports);

const STORAGE_KEY = 'protondb-badges-cache';
localforage.config({
    name: STORAGE_KEY
});
async function updateCache(appId, newData) {
    const oldCache = await localforage.getItem(appId);
    const newCache = { ...oldCache, ...newData };
    await localforage.setItem(appId, newCache);
    return newCache;
}
function clearCache$s(appId) {
    {
        localforage.clear();
    }
}
async function getCache(appId) {
    const data = await localforage.getItem(appId);
    return data;
}

var badgePosition$r = "Badge Position";
var badgePositionDescription$r = "Position the badge within the game page header";
var badgeSize$r = "Badge Size";
var badgeSizeDescription$r = "Choose a different size for the badge";
var caching$r = "Caching";
var clearCache$r = "Clear ProtonDB Cache";
var clearCacheLabel$r = "Clear the cache to force refresh all ProtonDB badges";
var expandOnHover$r = "Expand Label on hover";
var expandOnHoverDescription$r = "Minimalist Only. Display badge text on focus";
var positionTopLeft$r = "Top Left";
var positionTopRight$r = "Top Right";
var settings$r = "Settings";
var sizeMinimalist$r = "Minimalist";
var sizeRegular$r = "Regular";
var sizeSmall$r = "Small";
var tierborked$r = "НЕРАБОТЕЩИ";
var tierbronze$r = "БРОНЗ";
var tiergold$r = "ЗЛАТО";
var tierMinborked$r = "BORK";
var tierMinbronze$r = "BRON";
var tierMingold$r = "GOLD";
var tierMinpending$r = "PEND";
var tierMinplatinum$r = "PLAT";
var tierMinsilver$r = "SILV";
var tierpending$r = "PENDING";
var tierplatinum$r = "ПЛАТИНА";
var tiersilver$r = "СРЕБРО";
var expandOnHoverOff$r = "Off";
var bg = {
	badgePosition: badgePosition$r,
	badgePositionDescription: badgePositionDescription$r,
	badgeSize: badgeSize$r,
	badgeSizeDescription: badgeSizeDescription$r,
	caching: caching$r,
	clearCache: clearCache$r,
	clearCacheLabel: clearCacheLabel$r,
	expandOnHover: expandOnHover$r,
	expandOnHoverDescription: expandOnHoverDescription$r,
	positionTopLeft: positionTopLeft$r,
	positionTopRight: positionTopRight$r,
	settings: settings$r,
	sizeMinimalist: sizeMinimalist$r,
	sizeRegular: sizeRegular$r,
	sizeSmall: sizeSmall$r,
	tierborked: tierborked$r,
	tierbronze: tierbronze$r,
	tiergold: tiergold$r,
	tierMinborked: tierMinborked$r,
	tierMinbronze: tierMinbronze$r,
	tierMingold: tierMingold$r,
	tierMinpending: tierMinpending$r,
	tierMinplatinum: tierMinplatinum$r,
	tierMinsilver: tierMinsilver$r,
	tierpending: tierpending$r,
	tierplatinum: tierplatinum$r,
	tiersilver: tiersilver$r,
	expandOnHoverOff: expandOnHoverOff$r
};

var badgePosition$q = "Pozice Odznaku";
var badgePositionDescription$q = "Position the badge within the game page header";
var badgeSize$q = "Velikost Odznaku";
var badgeSizeDescription$q = "Choose a different size for the badge";
var caching$q = "Cachování";
var clearCache$q = "Smazat ProtonDB Cache";
var clearCacheLabel$q = "Vymažte cache pro vynucenou aktualizaci všech ProtonDB odznaků";
var expandOnHover$q = "Rozbalit Štítek při přejetí";
var expandOnHoverDescription$q = "Minimalist Only. Display badge text on focus";
var positionTopLeft$q = "Top Left";
var positionTopRight$q = "Top Right";
var settings$q = "Settings";
var sizeMinimalist$q = "Minimalist";
var sizeRegular$q = "Regular";
var sizeSmall$q = "Small";
var tierborked$q = "BORKED";
var tierbronze$q = "BRONZE";
var tiergold$q = "GOLD";
var tierMinborked$q = "BORK";
var tierMinbronze$q = "BRON";
var tierMingold$q = "GOLD";
var tierMinpending$q = "PEND";
var tierMinplatinum$q = "PLAT";
var tierMinsilver$q = "SILV";
var tierpending$q = "PENDING";
var tierplatinum$q = "PLATINUM";
var tiersilver$q = "SILVER";
var expandOnHoverOff$q = "Off";
var cs = {
	badgePosition: badgePosition$q,
	badgePositionDescription: badgePositionDescription$q,
	badgeSize: badgeSize$q,
	badgeSizeDescription: badgeSizeDescription$q,
	caching: caching$q,
	clearCache: clearCache$q,
	clearCacheLabel: clearCacheLabel$q,
	expandOnHover: expandOnHover$q,
	expandOnHoverDescription: expandOnHoverDescription$q,
	positionTopLeft: positionTopLeft$q,
	positionTopRight: positionTopRight$q,
	settings: settings$q,
	sizeMinimalist: sizeMinimalist$q,
	sizeRegular: sizeRegular$q,
	sizeSmall: sizeSmall$q,
	tierborked: tierborked$q,
	tierbronze: tierbronze$q,
	tiergold: tiergold$q,
	tierMinborked: tierMinborked$q,
	tierMinbronze: tierMinbronze$q,
	tierMingold: tierMingold$q,
	tierMinpending: tierMinpending$q,
	tierMinplatinum: tierMinplatinum$q,
	tierMinsilver: tierMinsilver$q,
	tierpending: tierpending$q,
	tierplatinum: tierplatinum$q,
	tiersilver: tiersilver$q,
	expandOnHoverOff: expandOnHoverOff$q
};

var badgePosition$p = "Placering af mærke";
var badgePositionDescription$p = "Placer emblemet i spillets sidehoved";
var badgeSize$p = "Mærkets størrelse";
var badgeSizeDescription$p = "Vælg en anden størrelse til emblemet";
var caching$p = "Cachelagring";
var clearCache$p = "Ryd ProtonDB Cache";
var clearCacheLabel$p = "Ryd cachen for at tvinge opdatering alle ProtonDB mærker";
var expandOnHover$p = "Hold over etiket for at udvide";
var expandOnHoverDescription$p = "Minimalistisk. Vis kun emblem tekst ved fokus";
var positionTopLeft$p = "Øverst til venstre";
var positionTopRight$p = "Øverst til højre";
var settings$p = "Indstillinger";
var sizeMinimalist$p = "Minimalistisk";
var sizeRegular$p = "Almindelig";
var sizeSmall$p = "Lille";
var tierborked$p = "VIRKER IKKE";
var tierbronze$p = "BRONZE";
var tiergold$p = "GULD";
var tierMinborked$p = "ITU";
var tierMinbronze$p = "BRON";
var tierMingold$p = "GULD";
var tierMinpending$p = "AFVENT";
var tierMinplatinum$p = "PLAT";
var tierMinsilver$p = "SØLV";
var tierpending$p = "AFVENTER";
var tierplatinum$p = "PLATIN";
var tiersilver$p = "SØLV";
var expandOnHoverOff$p = "Fra";
var da = {
	badgePosition: badgePosition$p,
	badgePositionDescription: badgePositionDescription$p,
	badgeSize: badgeSize$p,
	badgeSizeDescription: badgeSizeDescription$p,
	caching: caching$p,
	clearCache: clearCache$p,
	clearCacheLabel: clearCacheLabel$p,
	expandOnHover: expandOnHover$p,
	expandOnHoverDescription: expandOnHoverDescription$p,
	positionTopLeft: positionTopLeft$p,
	positionTopRight: positionTopRight$p,
	settings: settings$p,
	sizeMinimalist: sizeMinimalist$p,
	sizeRegular: sizeRegular$p,
	sizeSmall: sizeSmall$p,
	tierborked: tierborked$p,
	tierbronze: tierbronze$p,
	tiergold: tiergold$p,
	tierMinborked: tierMinborked$p,
	tierMinbronze: tierMinbronze$p,
	tierMingold: tierMingold$p,
	tierMinpending: tierMinpending$p,
	tierMinplatinum: tierMinplatinum$p,
	tierMinsilver: tierMinsilver$p,
	tierpending: tierpending$p,
	tierplatinum: tierplatinum$p,
	tiersilver: tiersilver$p,
	expandOnHoverOff: expandOnHoverOff$p
};

var badgePosition$o = "Abzeichen Position";
var badgePositionDescription$o = "Positioniere das Abzeichen in der Überschrift der Spiele Seite";
var badgeSize$o = "Abzeichen Größe";
var badgeSizeDescription$o = "Wähle eine andere Größe für das Abzeichen";
var caching$o = "Zwischenspeicherung";
var clearCache$o = "Setze die ProtonDB Zwischenspeicherung zurück";
var clearCacheLabel$o = "Setze die Zwischenspeicherung zurück um alle ProtonDB Abzeichen zu erneuern";
var expandOnHover$o = "Vergrößere das Abzeichen beim Fokussieren";
var expandOnHoverDescription$o = "Nur für Minimalistisch. Zeige den Abzeichen-Text beim Fokussieren";
var positionTopLeft$o = "Oben Links";
var positionTopRight$o = "Oben Rechts";
var settings$o = "Einstellungen";
var sizeMinimalist$o = "Minimalistisch";
var sizeRegular$o = "Regulär";
var sizeSmall$o = "Klein";
var tierborked$o = "DEFEKT";
var tierbronze$o = "BRONZE";
var tiergold$o = "GOLD";
var tierMinborked$o = "DFKT";
var tierMinbronze$o = "BRON";
var tierMingold$o = "GOLD";
var tierMinpending$o = "UBST";
var tierMinplatinum$o = "PLAT";
var tierMinsilver$o = "SILB";
var tierpending$o = "UNBESTIMMT";
var tierplatinum$o = "PLATIN";
var tiersilver$o = "SILBER";
var expandOnHoverOff$o = "Aus";
var de = {
	badgePosition: badgePosition$o,
	badgePositionDescription: badgePositionDescription$o,
	badgeSize: badgeSize$o,
	badgeSizeDescription: badgeSizeDescription$o,
	caching: caching$o,
	clearCache: clearCache$o,
	clearCacheLabel: clearCacheLabel$o,
	expandOnHover: expandOnHover$o,
	expandOnHoverDescription: expandOnHoverDescription$o,
	positionTopLeft: positionTopLeft$o,
	positionTopRight: positionTopRight$o,
	settings: settings$o,
	sizeMinimalist: sizeMinimalist$o,
	sizeRegular: sizeRegular$o,
	sizeSmall: sizeSmall$o,
	tierborked: tierborked$o,
	tierbronze: tierbronze$o,
	tiergold: tiergold$o,
	tierMinborked: tierMinborked$o,
	tierMinbronze: tierMinbronze$o,
	tierMingold: tierMingold$o,
	tierMinpending: tierMinpending$o,
	tierMinplatinum: tierMinplatinum$o,
	tierMinsilver: tierMinsilver$o,
	tierpending: tierpending$o,
	tierplatinum: tierplatinum$o,
	tiersilver: tiersilver$o,
	expandOnHoverOff: expandOnHoverOff$o
};

var badgePosition$n = "Badge Position";
var badgePositionDescription$n = "Position the badge within the game page header";
var badgeSize$n = "Badge Size";
var badgeSizeDescription$n = "Choose a different size for the badge";
var caching$n = "Caching";
var clearCache$n = "Clear ProtonDB Cache";
var clearCacheLabel$n = "Clear the cache to force refresh all ProtonDB badges";
var expandOnHover$n = "Expand Label on hover";
var expandOnHoverDescription$n = "Minimalist Only. Display badge text on focus";
var positionTopLeft$n = "Top Left";
var positionTopRight$n = "Top Right";
var settings$n = "Settings";
var sizeMinimalist$n = "Minimalist";
var sizeRegular$n = "Regular";
var sizeSmall$n = "Small";
var tierborked$n = "ΤΖΟΎΦΙΟ";
var tierbronze$n = "ΧΆΛΚΙΝΟ";
var tiergold$n = "ΧΡΥΣΌ";
var tierMinborked$n = "BORK";
var tierMinbronze$n = "BRON";
var tierMingold$n = "GOLD";
var tierMinpending$n = "PEND";
var tierMinplatinum$n = "PLAT";
var tierMinsilver$n = "SILV";
var tierpending$n = "PENDING";
var tierplatinum$n = "ΠΛΑΤΙΝΈΝΙΟ";
var tiersilver$n = "ΑΣΗΜΈΝΙΟ";
var expandOnHoverOff$n = "Off";
var el = {
	badgePosition: badgePosition$n,
	badgePositionDescription: badgePositionDescription$n,
	badgeSize: badgeSize$n,
	badgeSizeDescription: badgeSizeDescription$n,
	caching: caching$n,
	clearCache: clearCache$n,
	clearCacheLabel: clearCacheLabel$n,
	expandOnHover: expandOnHover$n,
	expandOnHoverDescription: expandOnHoverDescription$n,
	positionTopLeft: positionTopLeft$n,
	positionTopRight: positionTopRight$n,
	settings: settings$n,
	sizeMinimalist: sizeMinimalist$n,
	sizeRegular: sizeRegular$n,
	sizeSmall: sizeSmall$n,
	tierborked: tierborked$n,
	tierbronze: tierbronze$n,
	tiergold: tiergold$n,
	tierMinborked: tierMinborked$n,
	tierMinbronze: tierMinbronze$n,
	tierMingold: tierMingold$n,
	tierMinpending: tierMinpending$n,
	tierMinplatinum: tierMinplatinum$n,
	tierMinsilver: tierMinsilver$n,
	tierpending: tierpending$n,
	tierplatinum: tierplatinum$n,
	tiersilver: tiersilver$n,
	expandOnHoverOff: expandOnHoverOff$n
};

var badgePosition$m = "Badge Position";
var badgePositionDescription$m = "Position the badge within the game page header";
var badgeSize$m = "Badge Size";
var badgeSizeDescription$m = "Choose a different size for the badge";
var caching$m = "Caching";
var clearCache$m = "Clear ProtonDB Cache";
var clearCacheLabel$m = "Clear the cache to force refresh all ProtonDB badges";
var expandOnHover$m = "Expand Label on hover";
var expandOnHoverDescription$m = "Minimalist Only. Display badge text on focus";
var positionTopLeft$m = "Top Left";
var positionTopRight$m = "Top Right";
var settings$m = "Settings";
var sizeMinimalist$m = "Minimalist";
var sizeRegular$m = "Regular";
var sizeSmall$m = "Small";
var tierborked$m = "BORKED";
var tierbronze$m = "BRONZE";
var tiergold$m = "GOLD";
var tierMinborked$m = "BORK";
var tierMinbronze$m = "BRON";
var tierMingold$m = "GOLD";
var tierMinpending$m = "PEND";
var tierMinplatinum$m = "PLAT";
var tierMinsilver$m = "SILV";
var tierpending$m = "PENDING";
var tierplatinum$m = "PLATINUM";
var tiersilver$m = "SILVER";
var expandOnHoverOff$m = "Off";
var en = {
	badgePosition: badgePosition$m,
	badgePositionDescription: badgePositionDescription$m,
	badgeSize: badgeSize$m,
	badgeSizeDescription: badgeSizeDescription$m,
	caching: caching$m,
	clearCache: clearCache$m,
	clearCacheLabel: clearCacheLabel$m,
	expandOnHover: expandOnHover$m,
	expandOnHoverDescription: expandOnHoverDescription$m,
	positionTopLeft: positionTopLeft$m,
	positionTopRight: positionTopRight$m,
	settings: settings$m,
	sizeMinimalist: sizeMinimalist$m,
	sizeRegular: sizeRegular$m,
	sizeSmall: sizeSmall$m,
	tierborked: tierborked$m,
	tierbronze: tierbronze$m,
	tiergold: tiergold$m,
	tierMinborked: tierMinborked$m,
	tierMinbronze: tierMinbronze$m,
	tierMingold: tierMingold$m,
	tierMinpending: tierMinpending$m,
	tierMinplatinum: tierMinplatinum$m,
	tierMinsilver: tierMinsilver$m,
	tierpending: tierpending$m,
	tierplatinum: tierplatinum$m,
	tiersilver: tiersilver$m,
	expandOnHoverOff: expandOnHoverOff$m
};

var badgePosition$l = "Posición de la insignia";
var badgePositionDescription$l = "Coloca la insignia dentro del encabezado de la página del juego";
var badgeSize$l = "Tamaño de la insignia";
var badgeSizeDescription$l = "Selecciona un tamaño diferente para la insignia";
var caching$l = "Caché";
var clearCache$l = "Limpiar el caché de ProtonDB";
var clearCacheLabel$l = "Borra el caché para forzar la actualización de todas las insignias de ProtonDB";
var expandOnHover$l = "Expandir insignia al seleccionar";
var expandOnHoverDescription$l = "Solo Minimalista. Muestra el texto de la insignia al seleccionar";
var positionTopLeft$l = "Arriba a la izquierda";
var positionTopRight$l = "Arriba a la derecha";
var settings$l = "Ajustes";
var sizeMinimalist$l = "Minimalista";
var sizeRegular$l = "Normal";
var sizeSmall$l = "Pequeño";
var tierborked$l = "ROTO";
var tierbronze$l = "BRONCE";
var tiergold$l = "ORO";
var tierMinborked$l = "ROTO";
var tierMinbronze$l = "BRON";
var tierMingold$l = "ORO";
var tierMinpending$l = "PEND";
var tierMinplatinum$l = "PLATI";
var tierMinsilver$l = "PLATA";
var tierpending$l = "PENDIENTE";
var tierplatinum$l = "PLATINO";
var tiersilver$l = "PLATA";
var expandOnHoverOff$l = "Desactivado";
var es = {
	badgePosition: badgePosition$l,
	badgePositionDescription: badgePositionDescription$l,
	badgeSize: badgeSize$l,
	badgeSizeDescription: badgeSizeDescription$l,
	caching: caching$l,
	clearCache: clearCache$l,
	clearCacheLabel: clearCacheLabel$l,
	expandOnHover: expandOnHover$l,
	expandOnHoverDescription: expandOnHoverDescription$l,
	positionTopLeft: positionTopLeft$l,
	positionTopRight: positionTopRight$l,
	settings: settings$l,
	sizeMinimalist: sizeMinimalist$l,
	sizeRegular: sizeRegular$l,
	sizeSmall: sizeSmall$l,
	tierborked: tierborked$l,
	tierbronze: tierbronze$l,
	tiergold: tiergold$l,
	tierMinborked: tierMinborked$l,
	tierMinbronze: tierMinbronze$l,
	tierMingold: tierMingold$l,
	tierMinpending: tierMinpending$l,
	tierMinplatinum: tierMinplatinum$l,
	tierMinsilver: tierMinsilver$l,
	tierpending: tierpending$l,
	tierplatinum: tierplatinum$l,
	tiersilver: tiersilver$l,
	expandOnHoverOff: expandOnHoverOff$l
};

var badgePosition$k = "Posición de medalla";
var badgePositionDescription$k = "Posición de la medalla dentro de la página encabezado del juego";
var badgeSize$k = "Tamaño de medalla";
var badgeSizeDescription$k = "Elige un tamaño diferente para la medalla";
var caching$k = "Caché";
var clearCache$k = "Limpiar caché de ProtonDB";
var clearCacheLabel$k = "Limpiar la caché para forzar el refresco de todas las medallas ProtonDB";
var expandOnHover$k = "Expandir etiqueta al colocar el cursor";
var expandOnHoverDescription$k = "Solo minimalista. Mostrar texto al enfocar";
var positionTopLeft$k = "Superior izquierda";
var positionTopRight$k = "Superior derecha";
var settings$k = "Configuración";
var sizeMinimalist$k = "Minimalista";
var sizeRegular$k = "Regular";
var sizeSmall$k = "Pequeño";
var tierborked$k = "ROTO";
var tierbronze$k = "BRONCE";
var tiergold$k = "ORO";
var tierMinborked$k = "ROTO";
var tierMinbronze$k = "BRON";
var tierMingold$k = "ORO";
var tierMinpending$k = "PEND";
var tierMinplatinum$k = "PLATI";
var tierMinsilver$k = "PLATA";
var tierpending$k = "PENDIENTE";
var tierplatinum$k = "PLATINO";
var tiersilver$k = "PLATA";
var expandOnHoverOff$k = "Apagado";
var es419 = {
	badgePosition: badgePosition$k,
	badgePositionDescription: badgePositionDescription$k,
	badgeSize: badgeSize$k,
	badgeSizeDescription: badgeSizeDescription$k,
	caching: caching$k,
	clearCache: clearCache$k,
	clearCacheLabel: clearCacheLabel$k,
	expandOnHover: expandOnHover$k,
	expandOnHoverDescription: expandOnHoverDescription$k,
	positionTopLeft: positionTopLeft$k,
	positionTopRight: positionTopRight$k,
	settings: settings$k,
	sizeMinimalist: sizeMinimalist$k,
	sizeRegular: sizeRegular$k,
	sizeSmall: sizeSmall$k,
	tierborked: tierborked$k,
	tierbronze: tierbronze$k,
	tiergold: tiergold$k,
	tierMinborked: tierMinborked$k,
	tierMinbronze: tierMinbronze$k,
	tierMingold: tierMingold$k,
	tierMinpending: tierMinpending$k,
	tierMinplatinum: tierMinplatinum$k,
	tierMinsilver: tierMinsilver$k,
	tierpending: tierpending$k,
	tierplatinum: tierplatinum$k,
	tiersilver: tiersilver$k,
	expandOnHoverOff: expandOnHoverOff$k
};

var badgePosition$j = "Merkin Sijainti";
var badgePositionDescription$j = "Sijoita merkki pelin sivun otsikkoon";
var badgeSize$j = "Merkin koko";
var badgeSizeDescription$j = "Valitse eri koko merkille";
var caching$j = "Välimuisti";
var clearCache$j = "Tyhjennä ProtonDB Välimuisti";
var clearCacheLabel$j = "Tyhjennä välimuisti pakottaaksesi virkistämään kaikki ProtonDB merkit";
var expandOnHover$j = "Laajenna nimi hiiren päällä";
var expandOnHoverDescription$j = "Vain minimalisti. Näytä merkkiteksti tarkennettaessa";
var positionTopLeft$j = "Vasen Yläreuna";
var positionTopRight$j = "Oikea Yläreuna";
var settings$j = "Asetukset";
var sizeMinimalist$j = "Minimalisti";
var sizeRegular$j = "Tavallinen";
var sizeSmall$j = "Pieni";
var tierborked$j = "RAJOITETTU";
var tierbronze$j = "PRONSSI";
var tiergold$j = "KULTA";
var tierMinborked$j = "RAJOITETTU";
var tierMinbronze$j = "PRONSSI";
var tierMingold$j = "KULTA";
var tierMinpending$j = "ODOTTAA";
var tierMinplatinum$j = "PLATINA";
var tierMinsilver$j = "HOPEA";
var tierpending$j = "ODOTTAA";
var tierplatinum$j = "PLATINA";
var tiersilver$j = "HOPEA";
var expandOnHoverOff$j = "Pois Päältä";
var fi = {
	badgePosition: badgePosition$j,
	badgePositionDescription: badgePositionDescription$j,
	badgeSize: badgeSize$j,
	badgeSizeDescription: badgeSizeDescription$j,
	caching: caching$j,
	clearCache: clearCache$j,
	clearCacheLabel: clearCacheLabel$j,
	expandOnHover: expandOnHover$j,
	expandOnHoverDescription: expandOnHoverDescription$j,
	positionTopLeft: positionTopLeft$j,
	positionTopRight: positionTopRight$j,
	settings: settings$j,
	sizeMinimalist: sizeMinimalist$j,
	sizeRegular: sizeRegular$j,
	sizeSmall: sizeSmall$j,
	tierborked: tierborked$j,
	tierbronze: tierbronze$j,
	tiergold: tiergold$j,
	tierMinborked: tierMinborked$j,
	tierMinbronze: tierMinbronze$j,
	tierMingold: tierMingold$j,
	tierMinpending: tierMinpending$j,
	tierMinplatinum: tierMinplatinum$j,
	tierMinsilver: tierMinsilver$j,
	tierpending: tierpending$j,
	tierplatinum: tierplatinum$j,
	tiersilver: tiersilver$j,
	expandOnHoverOff: expandOnHoverOff$j
};

var badgePosition$i = "Badge Position";
var badgePositionDescription$i = "Position the badge within the game page header";
var badgeSize$i = "Badge Size";
var badgeSizeDescription$i = "Choose a different size for the badge";
var caching$i = "Caching";
var clearCache$i = "Clear ProtonDB Cache";
var clearCacheLabel$i = "Clear the cache to force refresh all ProtonDB badges";
var expandOnHover$i = "Expand Label on hover";
var expandOnHoverDescription$i = "Minimalist Only. Display badge text on focus";
var positionTopLeft$i = "À gauche en haut";
var positionTopRight$i = "En haut à droite";
var settings$i = "Paramètres";
var sizeMinimalist$i = "Minimalist";
var sizeRegular$i = "Standard";
var sizeSmall$i = "Petit";
var tierborked$i = "INJOUABLE";
var tierbronze$i = "BRONZE";
var tiergold$i = "OR";
var tierMinborked$i = "BORK";
var tierMinbronze$i = "BRON";
var tierMingold$i = "OR";
var tierMinpending$i = "PEND";
var tierMinplatinum$i = "PLAT";
var tierMinsilver$i = "SILV";
var tierpending$i = "EN ATTENTE";
var tierplatinum$i = "PLATINE";
var tiersilver$i = "ARGENT";
var expandOnHoverOff$i = "Off";
var fr = {
	badgePosition: badgePosition$i,
	badgePositionDescription: badgePositionDescription$i,
	badgeSize: badgeSize$i,
	badgeSizeDescription: badgeSizeDescription$i,
	caching: caching$i,
	clearCache: clearCache$i,
	clearCacheLabel: clearCacheLabel$i,
	expandOnHover: expandOnHover$i,
	expandOnHoverDescription: expandOnHoverDescription$i,
	positionTopLeft: positionTopLeft$i,
	positionTopRight: positionTopRight$i,
	settings: settings$i,
	sizeMinimalist: sizeMinimalist$i,
	sizeRegular: sizeRegular$i,
	sizeSmall: sizeSmall$i,
	tierborked: tierborked$i,
	tierbronze: tierbronze$i,
	tiergold: tiergold$i,
	tierMinborked: tierMinborked$i,
	tierMinbronze: tierMinbronze$i,
	tierMingold: tierMingold$i,
	tierMinpending: tierMinpending$i,
	tierMinplatinum: tierMinplatinum$i,
	tierMinsilver: tierMinsilver$i,
	tierpending: tierpending$i,
	tierplatinum: tierplatinum$i,
	tiersilver: tiersilver$i,
	expandOnHoverOff: expandOnHoverOff$i
};

var badgePosition$h = "Badge Position";
var badgePositionDescription$h = "Position the badge within the game page header";
var badgeSize$h = "Badge Size";
var badgeSizeDescription$h = "Choose a different size for the badge";
var caching$h = "Caching";
var clearCache$h = "Clear ProtonDB Cache";
var clearCacheLabel$h = "Clear the cache to force refresh all ProtonDB badges";
var expandOnHover$h = "Expand Label on hover";
var expandOnHoverDescription$h = "Minimalist Only. Display badge text on focus";
var positionTopLeft$h = "Top Left";
var positionTopRight$h = "Top Right";
var settings$h = "Settings";
var sizeMinimalist$h = "Minimalist";
var sizeRegular$h = "Regular";
var sizeSmall$h = "Small";
var tierborked$h = "BORKED";
var tierbronze$h = "BRONZE";
var tiergold$h = "GOLD";
var tierMinborked$h = "BORK";
var tierMinbronze$h = "BRON";
var tierMingold$h = "GOLD";
var tierMinpending$h = "PEND";
var tierMinplatinum$h = "PLAT";
var tierMinsilver$h = "SILV";
var tierpending$h = "PENDING";
var tierplatinum$h = "PLATINUM";
var tiersilver$h = "SILVER";
var expandOnHoverOff$h = "Off";
var hu = {
	badgePosition: badgePosition$h,
	badgePositionDescription: badgePositionDescription$h,
	badgeSize: badgeSize$h,
	badgeSizeDescription: badgeSizeDescription$h,
	caching: caching$h,
	clearCache: clearCache$h,
	clearCacheLabel: clearCacheLabel$h,
	expandOnHover: expandOnHover$h,
	expandOnHoverDescription: expandOnHoverDescription$h,
	positionTopLeft: positionTopLeft$h,
	positionTopRight: positionTopRight$h,
	settings: settings$h,
	sizeMinimalist: sizeMinimalist$h,
	sizeRegular: sizeRegular$h,
	sizeSmall: sizeSmall$h,
	tierborked: tierborked$h,
	tierbronze: tierbronze$h,
	tiergold: tiergold$h,
	tierMinborked: tierMinborked$h,
	tierMinbronze: tierMinbronze$h,
	tierMingold: tierMingold$h,
	tierMinpending: tierMinpending$h,
	tierMinplatinum: tierMinplatinum$h,
	tierMinsilver: tierMinsilver$h,
	tierpending: tierpending$h,
	tierplatinum: tierplatinum$h,
	tiersilver: tiersilver$h,
	expandOnHoverOff: expandOnHoverOff$h
};

var badgePosition$g = "Posizione del badge";
var badgePositionDescription$g = "Posizione del badge all'interno dell'header del gioco";
var badgeSize$g = "Dimensione badge";
var badgeSizeDescription$g = "Scegli una dimensione per il badge";
var caching$g = "Caching";
var clearCache$g = "Rimuovi la cache di ProtonDB";
var clearCacheLabel$g = "Rimuovi la cache di ProtonDB per forzarne l'aggiornamento";
var expandOnHover$g = "Espandi le label quando selezionate";
var expandOnHoverDescription$g = "Stile minimalista. Mostra il testo del badge solo quando selezionato";
var positionTopLeft$g = "In alto a sinistra";
var positionTopRight$g = "In alto a destra";
var settings$g = "Impostazioni";
var sizeMinimalist$g = "Minimalista";
var sizeRegular$g = "Regolare";
var sizeSmall$g = "Piccolo";
var tierborked$g = "ROTTO";
var tierbronze$g = "BRONZO";
var tiergold$g = "ORO";
var tierMinborked$g = "ROTTO";
var tierMinbronze$g = "BRON";
var tierMingold$g = "ORO";
var tierMinpending$g = "ATT";
var tierMinplatinum$g = "PLAT";
var tierMinsilver$g = "ARG";
var tierpending$g = "IN ATTESA";
var tierplatinum$g = "PLATINO";
var tiersilver$g = "ARGENTO";
var expandOnHoverOff$g = "Off";
var it = {
	badgePosition: badgePosition$g,
	badgePositionDescription: badgePositionDescription$g,
	badgeSize: badgeSize$g,
	badgeSizeDescription: badgeSizeDescription$g,
	caching: caching$g,
	clearCache: clearCache$g,
	clearCacheLabel: clearCacheLabel$g,
	expandOnHover: expandOnHover$g,
	expandOnHoverDescription: expandOnHoverDescription$g,
	positionTopLeft: positionTopLeft$g,
	positionTopRight: positionTopRight$g,
	settings: settings$g,
	sizeMinimalist: sizeMinimalist$g,
	sizeRegular: sizeRegular$g,
	sizeSmall: sizeSmall$g,
	tierborked: tierborked$g,
	tierbronze: tierbronze$g,
	tiergold: tiergold$g,
	tierMinborked: tierMinborked$g,
	tierMinbronze: tierMinbronze$g,
	tierMingold: tierMingold$g,
	tierMinpending: tierMinpending$g,
	tierMinplatinum: tierMinplatinum$g,
	tierMinsilver: tierMinsilver$g,
	tierpending: tierpending$g,
	tierplatinum: tierplatinum$g,
	tiersilver: tiersilver$g,
	expandOnHoverOff: expandOnHoverOff$g
};

var badgePosition$f = "Badge Position";
var badgePositionDescription$f = "Position the badge within the game page header";
var badgeSize$f = "Badge Size";
var badgeSizeDescription$f = "Choose a different size for the badge";
var caching$f = "Caching";
var clearCache$f = "Clear ProtonDB Cache";
var clearCacheLabel$f = "Clear the cache to force refresh all ProtonDB badges";
var expandOnHover$f = "Expand Label on hover";
var expandOnHoverDescription$f = "Minimalist Only. Display badge text on focus";
var positionTopLeft$f = "Top Left";
var positionTopRight$f = "Top Right";
var settings$f = "Settings";
var sizeMinimalist$f = "Minimalist";
var sizeRegular$f = "Regular";
var sizeSmall$f = "Small";
var tierborked$f = "BORKED";
var tierbronze$f = "BRONZE";
var tiergold$f = "GOLD";
var tierMinborked$f = "BORK";
var tierMinbronze$f = "BRON";
var tierMingold$f = "GOLD";
var tierMinpending$f = "PEND";
var tierMinplatinum$f = "PLAT";
var tierMinsilver$f = "SILV";
var tierpending$f = "PENDING";
var tierplatinum$f = "PLATINUM";
var tiersilver$f = "SILVER";
var expandOnHoverOff$f = "Off";
var ja = {
	badgePosition: badgePosition$f,
	badgePositionDescription: badgePositionDescription$f,
	badgeSize: badgeSize$f,
	badgeSizeDescription: badgeSizeDescription$f,
	caching: caching$f,
	clearCache: clearCache$f,
	clearCacheLabel: clearCacheLabel$f,
	expandOnHover: expandOnHover$f,
	expandOnHoverDescription: expandOnHoverDescription$f,
	positionTopLeft: positionTopLeft$f,
	positionTopRight: positionTopRight$f,
	settings: settings$f,
	sizeMinimalist: sizeMinimalist$f,
	sizeRegular: sizeRegular$f,
	sizeSmall: sizeSmall$f,
	tierborked: tierborked$f,
	tierbronze: tierbronze$f,
	tiergold: tiergold$f,
	tierMinborked: tierMinborked$f,
	tierMinbronze: tierMinbronze$f,
	tierMingold: tierMingold$f,
	tierMinpending: tierMinpending$f,
	tierMinplatinum: tierMinplatinum$f,
	tierMinsilver: tierMinsilver$f,
	tierpending: tierpending$f,
	tierplatinum: tierplatinum$f,
	tiersilver: tiersilver$f,
	expandOnHoverOff: expandOnHoverOff$f
};

var badgePosition$e = "배지 위치";
var badgePositionDescription$e = "게임 페이지 헤더 내의 배지 위치를 조정합니다";
var badgeSize$e = "배지 크기";
var badgeSizeDescription$e = "배지 크기를 변경합니다";
var caching$e = "캐시";
var clearCache$e = "ProtonDB 캐시 지우기";
var clearCacheLabel$e = "캐시를 삭제하여 모든 ProtonDB 배지를 갱신합니다";
var expandOnHover$e = "호버 시 펼치기";
var expandOnHoverDescription$e = "최소한 전용. 포커스 시에 배지 내용을 표시 합니다";
var positionTopLeft$e = "좌상단";
var positionTopRight$e = "우상단";
var settings$e = "설정";
var sizeMinimalist$e = "최소";
var sizeRegular$e = "기본";
var sizeSmall$e = "작게";
var tierborked$e = "작동하지 않음";
var tierbronze$e = "브론즈";
var tiergold$e = "골드";
var tierMinborked$e = "망가짐";
var tierMinbronze$e = "브론즈";
var tierMingold$e = "골드";
var tierMinpending$e = "대기중";
var tierMinplatinum$e = "플래티넘";
var tierMinsilver$e = "실버";
var tierpending$e = "리뷰 대기중";
var tierplatinum$e = "플래티넘";
var tiersilver$e = "실버";
var expandOnHoverOff$e = "끄기";
var ko = {
	badgePosition: badgePosition$e,
	badgePositionDescription: badgePositionDescription$e,
	badgeSize: badgeSize$e,
	badgeSizeDescription: badgeSizeDescription$e,
	caching: caching$e,
	clearCache: clearCache$e,
	clearCacheLabel: clearCacheLabel$e,
	expandOnHover: expandOnHover$e,
	expandOnHoverDescription: expandOnHoverDescription$e,
	positionTopLeft: positionTopLeft$e,
	positionTopRight: positionTopRight$e,
	settings: settings$e,
	sizeMinimalist: sizeMinimalist$e,
	sizeRegular: sizeRegular$e,
	sizeSmall: sizeSmall$e,
	tierborked: tierborked$e,
	tierbronze: tierbronze$e,
	tiergold: tiergold$e,
	tierMinborked: tierMinborked$e,
	tierMinbronze: tierMinbronze$e,
	tierMingold: tierMingold$e,
	tierMinpending: tierMinpending$e,
	tierMinplatinum: tierMinplatinum$e,
	tierMinsilver: tierMinsilver$e,
	tierpending: tierpending$e,
	tierplatinum: tierplatinum$e,
	tiersilver: tiersilver$e,
	expandOnHoverOff: expandOnHoverOff$e
};

var badgePosition$d = "Badge Position";
var badgePositionDescription$d = "Position the badge within the game page header";
var badgeSize$d = "Badge Size";
var badgeSizeDescription$d = "Choose a different size for the badge";
var caching$d = "Caching";
var clearCache$d = "Clear ProtonDB Cache";
var clearCacheLabel$d = "Clear the cache to force refresh all ProtonDB badges";
var expandOnHover$d = "Expand Label on hover";
var expandOnHoverDescription$d = "Minimalist Only. Display badge text on focus";
var positionTopLeft$d = "Top Left";
var positionTopRight$d = "Top Right";
var settings$d = "Settings";
var sizeMinimalist$d = "Minimalist";
var sizeRegular$d = "Regular";
var sizeSmall$d = "Small";
var tierborked$d = "ONSPEELBAAR";
var tierbronze$d = "BRONS";
var tiergold$d = "GOUD";
var tierMinborked$d = "BORK";
var tierMinbronze$d = "BRON";
var tierMingold$d = "GOUD";
var tierMinpending$d = "PEND";
var tierMinplatinum$d = "PLAT";
var tierMinsilver$d = "ZILV";
var tierpending$d = "PENDING";
var tierplatinum$d = "PLATINA";
var tiersilver$d = "ZILVER";
var expandOnHoverOff$d = "Off";
var nl = {
	badgePosition: badgePosition$d,
	badgePositionDescription: badgePositionDescription$d,
	badgeSize: badgeSize$d,
	badgeSizeDescription: badgeSizeDescription$d,
	caching: caching$d,
	clearCache: clearCache$d,
	clearCacheLabel: clearCacheLabel$d,
	expandOnHover: expandOnHover$d,
	expandOnHoverDescription: expandOnHoverDescription$d,
	positionTopLeft: positionTopLeft$d,
	positionTopRight: positionTopRight$d,
	settings: settings$d,
	sizeMinimalist: sizeMinimalist$d,
	sizeRegular: sizeRegular$d,
	sizeSmall: sizeSmall$d,
	tierborked: tierborked$d,
	tierbronze: tierbronze$d,
	tiergold: tiergold$d,
	tierMinborked: tierMinborked$d,
	tierMinbronze: tierMinbronze$d,
	tierMingold: tierMingold$d,
	tierMinpending: tierMinpending$d,
	tierMinplatinum: tierMinplatinum$d,
	tierMinsilver: tierMinsilver$d,
	tierpending: tierpending$d,
	tierplatinum: tierplatinum$d,
	tiersilver: tiersilver$d,
	expandOnHoverOff: expandOnHoverOff$d
};

var badgePosition$c = "Badge Position";
var badgePositionDescription$c = "Position the badge within the game page header";
var badgeSize$c = "Badge Size";
var badgeSizeDescription$c = "Choose a different size for the badge";
var caching$c = "Caching";
var clearCache$c = "Clear ProtonDB Cache";
var clearCacheLabel$c = "Clear the cache to force refresh all ProtonDB badges";
var expandOnHover$c = "Expand Label on hover";
var expandOnHoverDescription$c = "Minimalist Only. Display badge text on focus";
var positionTopLeft$c = "Top Left";
var positionTopRight$c = "Top Right";
var settings$c = "Settings";
var sizeMinimalist$c = "Minimalist";
var sizeRegular$c = "Regular";
var sizeSmall$c = "Small";
var tierborked$c = "BORKED";
var tierbronze$c = "BRONZE";
var tiergold$c = "GOLD";
var tierMinborked$c = "BORK";
var tierMinbronze$c = "BRON";
var tierMingold$c = "GOLD";
var tierMinpending$c = "PEND";
var tierMinplatinum$c = "PLAT";
var tierMinsilver$c = "SILV";
var tierpending$c = "PENDING";
var tierplatinum$c = "PLATINUM";
var tiersilver$c = "SILVER";
var expandOnHoverOff$c = "Off";
var no = {
	badgePosition: badgePosition$c,
	badgePositionDescription: badgePositionDescription$c,
	badgeSize: badgeSize$c,
	badgeSizeDescription: badgeSizeDescription$c,
	caching: caching$c,
	clearCache: clearCache$c,
	clearCacheLabel: clearCacheLabel$c,
	expandOnHover: expandOnHover$c,
	expandOnHoverDescription: expandOnHoverDescription$c,
	positionTopLeft: positionTopLeft$c,
	positionTopRight: positionTopRight$c,
	settings: settings$c,
	sizeMinimalist: sizeMinimalist$c,
	sizeRegular: sizeRegular$c,
	sizeSmall: sizeSmall$c,
	tierborked: tierborked$c,
	tierbronze: tierbronze$c,
	tiergold: tiergold$c,
	tierMinborked: tierMinborked$c,
	tierMinbronze: tierMinbronze$c,
	tierMingold: tierMingold$c,
	tierMinpending: tierMinpending$c,
	tierMinplatinum: tierMinplatinum$c,
	tierMinsilver: tierMinsilver$c,
	tierpending: tierpending$c,
	tierplatinum: tierplatinum$c,
	tiersilver: tiersilver$c,
	expandOnHoverOff: expandOnHoverOff$c
};

var badgePosition$b = "Pozycja odznaki";
var badgePositionDescription$b = "Umieść odznakę wewnątrz nagłówka strony gry";
var badgeSize$b = "Rozmiar odznaki";
var badgeSizeDescription$b = "Wybierz inny rozmiar odznaki";
var caching$b = "Pamięć podręczna";
var clearCache$b = "Wyczyść pamięć podręczną ProtonDB";
var clearCacheLabel$b = "Wyczyść pamięć podręczną, aby wymusić odświeżenie wszystkich odznak ProtonDB";
var expandOnHover$b = "Rozwiń etykietę po wybraniu kursorem";
var expandOnHoverDescription$b = "Dotyczy tylko rozmiaru 'Minimalistyczny'. Wyświetlaj tekst odznaki po wybraniu kursorem";
var positionTopLeft$b = "Lewy górny róg";
var positionTopRight$b = "Prawy górny róg";
var settings$b = "Ustawienia";
var sizeMinimalist$b = "Minimalistyczny";
var sizeRegular$b = "Normalny";
var sizeSmall$b = "Mały";
var tierborked$b = "ZEPSUTE";
var tierbronze$b = "BRĄZ";
var tiergold$b = "ZŁOTO";
var tierMinborked$b = "ZEP";
var tierMinbronze$b = "BRĄZ";
var tierMingold$b = "ZŁOT";
var tierMinpending$b = "BRAK";
var tierMinplatinum$b = "PLAT";
var tierMinsilver$b = "SREB";
var tierpending$b = "BRAK DANYCH";
var tierplatinum$b = "PLATYNA";
var tiersilver$b = "SREBRO";
var expandOnHoverOff$b = "Wyłączone";
var pl = {
	badgePosition: badgePosition$b,
	badgePositionDescription: badgePositionDescription$b,
	badgeSize: badgeSize$b,
	badgeSizeDescription: badgeSizeDescription$b,
	caching: caching$b,
	clearCache: clearCache$b,
	clearCacheLabel: clearCacheLabel$b,
	expandOnHover: expandOnHover$b,
	expandOnHoverDescription: expandOnHoverDescription$b,
	positionTopLeft: positionTopLeft$b,
	positionTopRight: positionTopRight$b,
	settings: settings$b,
	sizeMinimalist: sizeMinimalist$b,
	sizeRegular: sizeRegular$b,
	sizeSmall: sizeSmall$b,
	tierborked: tierborked$b,
	tierbronze: tierbronze$b,
	tiergold: tiergold$b,
	tierMinborked: tierMinborked$b,
	tierMinbronze: tierMinbronze$b,
	tierMingold: tierMingold$b,
	tierMinpending: tierMinpending$b,
	tierMinplatinum: tierMinplatinum$b,
	tierMinsilver: tierMinsilver$b,
	tierpending: tierpending$b,
	tierplatinum: tierplatinum$b,
	tiersilver: tiersilver$b,
	expandOnHoverOff: expandOnHoverOff$b
};

var badgePosition$a = "Badge Position";
var badgePositionDescription$a = "Position the badge within the game page header";
var badgeSize$a = "Badge Size";
var badgeSizeDescription$a = "Choose a different size for the badge";
var caching$a = "Caching";
var clearCache$a = "Clear ProtonDB Cache";
var clearCacheLabel$a = "Clear the cache to force refresh all ProtonDB badges";
var expandOnHover$a = "Expand Label on hover";
var expandOnHoverDescription$a = "Minimalist Only. Display badge text on focus";
var positionTopLeft$a = "Top Left";
var positionTopRight$a = "Top Right";
var settings$a = "Settings";
var sizeMinimalist$a = "Minimalist";
var sizeRegular$a = "Regular";
var sizeSmall$a = "Small";
var tierborked$a = "QUEBRADO";
var tierbronze$a = "BRONZE";
var tiergold$a = "OURO";
var tierMinborked$a = "QUEB";
var tierMinbronze$a = "BRON";
var tierMingold$a = "OURO";
var tierMinpending$a = "PEND";
var tierMinplatinum$a = "PLAT";
var tierMinsilver$a = "PRAT";
var tierpending$a = "PENDENTE";
var tierplatinum$a = "PLATINA";
var tiersilver$a = "PRATA";
var expandOnHoverOff$a = "Desactivado";
var pt = {
	badgePosition: badgePosition$a,
	badgePositionDescription: badgePositionDescription$a,
	badgeSize: badgeSize$a,
	badgeSizeDescription: badgeSizeDescription$a,
	caching: caching$a,
	clearCache: clearCache$a,
	clearCacheLabel: clearCacheLabel$a,
	expandOnHover: expandOnHover$a,
	expandOnHoverDescription: expandOnHoverDescription$a,
	positionTopLeft: positionTopLeft$a,
	positionTopRight: positionTopRight$a,
	settings: settings$a,
	sizeMinimalist: sizeMinimalist$a,
	sizeRegular: sizeRegular$a,
	sizeSmall: sizeSmall$a,
	tierborked: tierborked$a,
	tierbronze: tierbronze$a,
	tiergold: tiergold$a,
	tierMinborked: tierMinborked$a,
	tierMinbronze: tierMinbronze$a,
	tierMingold: tierMingold$a,
	tierMinpending: tierMinpending$a,
	tierMinplatinum: tierMinplatinum$a,
	tierMinsilver: tierMinsilver$a,
	tierpending: tierpending$a,
	tierplatinum: tierplatinum$a,
	tiersilver: tiersilver$a,
	expandOnHoverOff: expandOnHoverOff$a
};

var badgePosition$9 = "Posição da Medalha";
var badgePositionDescription$9 = "A posição aonde a medalha ficará na página do jogo";
var badgeSize$9 = "Tamanho da Medalha";
var badgeSizeDescription$9 = "Escolha um tamanho diferente para a medalha";
var caching$9 = "Cacheamento";
var clearCache$9 = "Limpar Cache do ProtonDB";
var clearCacheLabel$9 = "Limpe o cache para forçar a atualização de todas as medalhas do ProtonDB";
var expandOnHover$9 = "Expandir Selo ao focalizar";
var expandOnHoverDescription$9 = "Apenas para Minimalista. Exibe o texto da medalha quando estiver em foco";
var positionTopLeft$9 = "Superior Esquerdo";
var positionTopRight$9 = "Superior Direito";
var settings$9 = "Configurações";
var sizeMinimalist$9 = "Minimalista";
var sizeRegular$9 = "Normal";
var sizeSmall$9 = "Pequeno";
var tierborked$9 = "QUEBRADO";
var tierbronze$9 = "BRONZE";
var tiergold$9 = "OURO";
var tierMinborked$9 = "QUEB";
var tierMinbronze$9 = "BRON";
var tierMingold$9 = "OURO";
var tierMinpending$9 = "PEND";
var tierMinplatinum$9 = "PLAT";
var tierMinsilver$9 = "PRAT";
var tierpending$9 = "PENDENTE";
var tierplatinum$9 = "PLATINA";
var tiersilver$9 = "PRATA";
var expandOnHoverOff$9 = "Desativado";
var ptBr = {
	badgePosition: badgePosition$9,
	badgePositionDescription: badgePositionDescription$9,
	badgeSize: badgeSize$9,
	badgeSizeDescription: badgeSizeDescription$9,
	caching: caching$9,
	clearCache: clearCache$9,
	clearCacheLabel: clearCacheLabel$9,
	expandOnHover: expandOnHover$9,
	expandOnHoverDescription: expandOnHoverDescription$9,
	positionTopLeft: positionTopLeft$9,
	positionTopRight: positionTopRight$9,
	settings: settings$9,
	sizeMinimalist: sizeMinimalist$9,
	sizeRegular: sizeRegular$9,
	sizeSmall: sizeSmall$9,
	tierborked: tierborked$9,
	tierbronze: tierbronze$9,
	tiergold: tiergold$9,
	tierMinborked: tierMinborked$9,
	tierMinbronze: tierMinbronze$9,
	tierMingold: tierMingold$9,
	tierMinpending: tierMinpending$9,
	tierMinplatinum: tierMinplatinum$9,
	tierMinsilver: tierMinsilver$9,
	tierpending: tierpending$9,
	tierplatinum: tierplatinum$9,
	tiersilver: tiersilver$9,
	expandOnHoverOff: expandOnHoverOff$9
};

var badgePosition$8 = "Poziția Ecusonului";
var badgePositionDescription$8 = "Poziționați ecusonul în interiorul antetului paginii de joc";
var badgeSize$8 = "Dimensiunea Ecusonului";
var badgeSizeDescription$8 = "Alegeți o dimensiune diferită pentru ecuson";
var caching$8 = "Cache-are";
var clearCache$8 = "Ștergeți Cache-ul ProtonDB";
var clearCacheLabel$8 = "Ștergeți cache-ul pentru a forța reîmprospătarea tuturor ecusoanelor ProtonDB";
var expandOnHover$8 = "Extindeți eticheta la survol";
var expandOnHoverDescription$8 = "Doar minimalist. Afișați textul ecusonului la focalizare";
var positionTopLeft$8 = "Stânga Sus";
var positionTopRight$8 = "Dreapta Sus";
var settings$8 = "Setări";
var sizeMinimalist$8 = "Minimalist";
var sizeRegular$8 = "Obișnuit";
var sizeSmall$8 = "Mic";
var tierborked$8 = "BORKED";
var tierbronze$8 = "BRONZĂ";
var tiergold$8 = "AUR";
var tierMinborked$8 = "BORK";
var tierMinbronze$8 = "BRON";
var tierMingold$8 = "AUR";
var tierMinpending$8 = "ÎN AȘTEPTARE";
var tierMinplatinum$8 = "PLAT";
var tierMinsilver$8 = "ARGI";
var tierpending$8 = "ÎN AȘTEPTARE";
var tierplatinum$8 = "PLATINUM";
var tiersilver$8 = "ARGINT";
var expandOnHoverOff$8 = "Dezactivată";
var ro = {
	badgePosition: badgePosition$8,
	badgePositionDescription: badgePositionDescription$8,
	badgeSize: badgeSize$8,
	badgeSizeDescription: badgeSizeDescription$8,
	caching: caching$8,
	clearCache: clearCache$8,
	clearCacheLabel: clearCacheLabel$8,
	expandOnHover: expandOnHover$8,
	expandOnHoverDescription: expandOnHoverDescription$8,
	positionTopLeft: positionTopLeft$8,
	positionTopRight: positionTopRight$8,
	settings: settings$8,
	sizeMinimalist: sizeMinimalist$8,
	sizeRegular: sizeRegular$8,
	sizeSmall: sizeSmall$8,
	tierborked: tierborked$8,
	tierbronze: tierbronze$8,
	tiergold: tiergold$8,
	tierMinborked: tierMinborked$8,
	tierMinbronze: tierMinbronze$8,
	tierMingold: tierMingold$8,
	tierMinpending: tierMinpending$8,
	tierMinplatinum: tierMinplatinum$8,
	tierMinsilver: tierMinsilver$8,
	tierpending: tierpending$8,
	tierplatinum: tierplatinum$8,
	tiersilver: tiersilver$8,
	expandOnHoverOff: expandOnHoverOff$8
};

var badgePosition$7 = "Позиция значка";
var badgePositionDescription$7 = "Где будет значок на фоне страницы игры";
var badgeSize$7 = "Размер значка";
var badgeSizeDescription$7 = "Выберите другой размер значка";
var caching$7 = "Кэширование";
var clearCache$7 = "Очистить кэш ProtonDB";
var clearCacheLabel$7 = "Очистить кэш, чтобы принудительно обновить все значки ProtonDB";
var expandOnHover$7 = "Развернуть ярлык при наведении";
var expandOnHoverDescription$7 = "Только минималистичный. Показывать текст значка на наведении";
var positionTopLeft$7 = "Вверху слева";
var positionTopRight$7 = "Вверху справа";
var settings$7 = "Настройки";
var sizeMinimalist$7 = "Минималистичный";
var sizeRegular$7 = "Обычный";
var sizeSmall$7 = "Маленький";
var tierborked$7 = "СЛОМАНО";
var tierbronze$7 = "БРОНЗА";
var tiergold$7 = "ЗОЛОТО";
var tierMinborked$7 = "СЛОМ";
var tierMinbronze$7 = "БРОН";
var tierMingold$7 = "ЗОЛ";
var tierMinpending$7 = "ОЖИД";
var tierMinplatinum$7 = "ПЛАТ";
var tierMinsilver$7 = "СЕРБ";
var tierpending$7 = "В ОЖИДАНИИ";
var tierplatinum$7 = "ПЛАТИНА";
var tiersilver$7 = "СЕРЕБРО";
var expandOnHoverOff$7 = "Выкл";
var ru = {
	badgePosition: badgePosition$7,
	badgePositionDescription: badgePositionDescription$7,
	badgeSize: badgeSize$7,
	badgeSizeDescription: badgeSizeDescription$7,
	caching: caching$7,
	clearCache: clearCache$7,
	clearCacheLabel: clearCacheLabel$7,
	expandOnHover: expandOnHover$7,
	expandOnHoverDescription: expandOnHoverDescription$7,
	positionTopLeft: positionTopLeft$7,
	positionTopRight: positionTopRight$7,
	settings: settings$7,
	sizeMinimalist: sizeMinimalist$7,
	sizeRegular: sizeRegular$7,
	sizeSmall: sizeSmall$7,
	tierborked: tierborked$7,
	tierbronze: tierbronze$7,
	tiergold: tiergold$7,
	tierMinborked: tierMinborked$7,
	tierMinbronze: tierMinbronze$7,
	tierMingold: tierMingold$7,
	tierMinpending: tierMinpending$7,
	tierMinplatinum: tierMinplatinum$7,
	tierMinsilver: tierMinsilver$7,
	tierpending: tierpending$7,
	tierplatinum: tierplatinum$7,
	tiersilver: tiersilver$7,
	expandOnHoverOff: expandOnHoverOff$7
};

var badgePosition$6 = "Badge Position";
var badgePositionDescription$6 = "Position the badge within the game page header";
var badgeSize$6 = "Badge Size";
var badgeSizeDescription$6 = "Choose a different size for the badge";
var caching$6 = "Caching";
var clearCache$6 = "Clear ProtonDB Cache";
var clearCacheLabel$6 = "Clear the cache to force refresh all ProtonDB badges";
var expandOnHover$6 = "Expand Label on hover";
var expandOnHoverDescription$6 = "Minimalist Only. Display badge text on focus";
var positionTopLeft$6 = "Top Left";
var positionTopRight$6 = "Top Right";
var settings$6 = "Settings";
var sizeMinimalist$6 = "Minimalist";
var sizeRegular$6 = "Regular";
var sizeSmall$6 = "Small";
var tierborked$6 = "KAPUTT";
var tierbronze$6 = "BRONS";
var tiergold$6 = "GULD";
var tierMinborked$6 = "BORK";
var tierMinbronze$6 = "BRON";
var tierMingold$6 = "GULD";
var tierMinpending$6 = "PEND";
var tierMinplatinum$6 = "PLAT";
var tierMinsilver$6 = "SILV";
var tierpending$6 = "PENDING";
var tierplatinum$6 = "PLATINA";
var tiersilver$6 = "SILVER";
var expandOnHoverOff$6 = "Off";
var sv = {
	badgePosition: badgePosition$6,
	badgePositionDescription: badgePositionDescription$6,
	badgeSize: badgeSize$6,
	badgeSizeDescription: badgeSizeDescription$6,
	caching: caching$6,
	clearCache: clearCache$6,
	clearCacheLabel: clearCacheLabel$6,
	expandOnHover: expandOnHover$6,
	expandOnHoverDescription: expandOnHoverDescription$6,
	positionTopLeft: positionTopLeft$6,
	positionTopRight: positionTopRight$6,
	settings: settings$6,
	sizeMinimalist: sizeMinimalist$6,
	sizeRegular: sizeRegular$6,
	sizeSmall: sizeSmall$6,
	tierborked: tierborked$6,
	tierbronze: tierbronze$6,
	tiergold: tiergold$6,
	tierMinborked: tierMinborked$6,
	tierMinbronze: tierMinbronze$6,
	tierMingold: tierMingold$6,
	tierMinpending: tierMinpending$6,
	tierMinplatinum: tierMinplatinum$6,
	tierMinsilver: tierMinsilver$6,
	tierpending: tierpending$6,
	tierplatinum: tierplatinum$6,
	tiersilver: tiersilver$6,
	expandOnHoverOff: expandOnHoverOff$6
};

var badgePosition$5 = "ตําแหน่งตรารับรอง";
var badgePositionDescription$5 = "ตำแหน่งของตรารับรองในหน้าเกมส์ส่วนบน";
var badgeSize$5 = "ขนาดตรารับรอง";
var badgeSizeDescription$5 = "เลือกขนาดตรารับรอง";
var caching$5 = "แคช";
var clearCache$5 = "ลบ ProtonDB แคช";
var clearCacheLabel$5 = "ลบแคชเพื่อบังคับให้รีเฟรชตรารับรองทั้งหมดใหม่";
var expandOnHover$5 = "ขยายเครื่องหมายเมื่อเลือก";
var expandOnHoverDescription$5 = "เฉพาะแบบย่อ แสดงตรารับรองเมื่อโฟกัส";
var positionTopLeft$5 = "ด้านบนซ้าย";
var positionTopRight$5 = "ด้านบนขวา";
var settings$5 = "การตั้งค่า";
var sizeMinimalist$5 = "แบบย่อ";
var sizeRegular$5 = "ปกติ";
var sizeSmall$5 = "เล็ก";
var tierborked$5 = "ขัดข้อง";
var tierbronze$5 = "บรอนซ์";
var tiergold$5 = "ทอง";
var tierMinborked$5 = "ขัดข้อง";
var tierMinbronze$5 = "บรอนซ์";
var tierMingold$5 = "ทองคำ";
var tierMinpending$5 = "รอ";
var tierMinplatinum$5 = "แพลต";
var tierMinsilver$5 = "เงิน";
var tierpending$5 = "รอตรวจสอบ";
var tierplatinum$5 = "แพลตตินั่ม";
var tiersilver$5 = "เงิน";
var expandOnHoverOff$5 = "ปิด";
var th = {
	badgePosition: badgePosition$5,
	badgePositionDescription: badgePositionDescription$5,
	badgeSize: badgeSize$5,
	badgeSizeDescription: badgeSizeDescription$5,
	caching: caching$5,
	clearCache: clearCache$5,
	clearCacheLabel: clearCacheLabel$5,
	expandOnHover: expandOnHover$5,
	expandOnHoverDescription: expandOnHoverDescription$5,
	positionTopLeft: positionTopLeft$5,
	positionTopRight: positionTopRight$5,
	settings: settings$5,
	sizeMinimalist: sizeMinimalist$5,
	sizeRegular: sizeRegular$5,
	sizeSmall: sizeSmall$5,
	tierborked: tierborked$5,
	tierbronze: tierbronze$5,
	tiergold: tiergold$5,
	tierMinborked: tierMinborked$5,
	tierMinbronze: tierMinbronze$5,
	tierMingold: tierMingold$5,
	tierMinpending: tierMinpending$5,
	tierMinplatinum: tierMinplatinum$5,
	tierMinsilver: tierMinsilver$5,
	tierpending: tierpending$5,
	tierplatinum: tierplatinum$5,
	tiersilver: tiersilver$5,
	expandOnHoverOff: expandOnHoverOff$5
};

var badgePosition$4 = "Badge Position";
var badgePositionDescription$4 = "Position the badge within the game page header";
var badgeSize$4 = "Badge Size";
var badgeSizeDescription$4 = "Choose a different size for the badge";
var caching$4 = "Caching";
var clearCache$4 = "Clear ProtonDB Cache";
var clearCacheLabel$4 = "Clear the cache to force refresh all ProtonDB badges";
var expandOnHover$4 = "Expand Label on hover";
var expandOnHoverDescription$4 = "Minimalist Only. Display badge text on focus";
var positionTopLeft$4 = "Top Left";
var positionTopRight$4 = "Top Right";
var settings$4 = "Settings";
var sizeMinimalist$4 = "Minimalist";
var sizeRegular$4 = "Regular";
var sizeSmall$4 = "Small";
var tierborked$4 = "OLMAMIŞ";
var tierbronze$4 = "BRONZ";
var tiergold$4 = "ALTIN";
var tierMinborked$4 = "BORK";
var tierMinbronze$4 = "BRON";
var tierMingold$4 = "GOLD";
var tierMinpending$4 = "PEND";
var tierMinplatinum$4 = "PLAT";
var tierMinsilver$4 = "SILV";
var tierpending$4 = "PENDING";
var tierplatinum$4 = "PLATIN";
var tiersilver$4 = "GÜMÜŞ";
var expandOnHoverOff$4 = "Off";
var tr = {
	badgePosition: badgePosition$4,
	badgePositionDescription: badgePositionDescription$4,
	badgeSize: badgeSize$4,
	badgeSizeDescription: badgeSizeDescription$4,
	caching: caching$4,
	clearCache: clearCache$4,
	clearCacheLabel: clearCacheLabel$4,
	expandOnHover: expandOnHover$4,
	expandOnHoverDescription: expandOnHoverDescription$4,
	positionTopLeft: positionTopLeft$4,
	positionTopRight: positionTopRight$4,
	settings: settings$4,
	sizeMinimalist: sizeMinimalist$4,
	sizeRegular: sizeRegular$4,
	sizeSmall: sizeSmall$4,
	tierborked: tierborked$4,
	tierbronze: tierbronze$4,
	tiergold: tiergold$4,
	tierMinborked: tierMinborked$4,
	tierMinbronze: tierMinbronze$4,
	tierMingold: tierMingold$4,
	tierMinpending: tierMinpending$4,
	tierMinplatinum: tierMinplatinum$4,
	tierMinsilver: tierMinsilver$4,
	tierpending: tierpending$4,
	tierplatinum: tierplatinum$4,
	tiersilver: tiersilver$4,
	expandOnHoverOff: expandOnHoverOff$4
};

var badgePosition$3 = "Розташування значка";
var badgePositionDescription$3 = "Розташуйте значок в заголовку гри";
var badgeSize$3 = "Розмір значка";
var badgeSizeDescription$3 = "Оберіть інший розмір для значка";
var caching$3 = "Кешування";
var clearCache$3 = "Очистити кеш ProtonDB";
var clearCacheLabel$3 = "Очистити кеш, щоб примусово оновити всі значки ProtonDB";
var expandOnHover$3 = "Розгорнути мітку на наведенні";
var expandOnHoverDescription$3 = "Тільки мінімалістичний. Показувати текст значка при наведенні";
var positionTopLeft$3 = "Зверху зліва";
var positionTopRight$3 = "Зверху справа";
var settings$3 = "Налаштування";
var sizeMinimalist$3 = "Мінімалістичний";
var sizeRegular$3 = "Звичайний";
var sizeSmall$3 = "Маленький";
var tierborked$3 = "ЗЛАМАНО";
var tierbronze$3 = "БРОНЗА";
var tiergold$3 = "ЗОЛОТО";
var tierMinborked$3 = "ЗЛАМ";
var tierMinbronze$3 = "БРОН";
var tierMingold$3 = "ЗОЛ";
var tierMinpending$3 = "ОЧІК";
var tierMinplatinum$3 = "ПЛАТ";
var tierMinsilver$3 = "СРІБ";
var tierpending$3 = "В ОЧІКУВАННІ";
var tierplatinum$3 = "ПЛАТИНУМ";
var tiersilver$3 = "СРІБЛО";
var expandOnHoverOff$3 = "Вимк";
var uk = {
	badgePosition: badgePosition$3,
	badgePositionDescription: badgePositionDescription$3,
	badgeSize: badgeSize$3,
	badgeSizeDescription: badgeSizeDescription$3,
	caching: caching$3,
	clearCache: clearCache$3,
	clearCacheLabel: clearCacheLabel$3,
	expandOnHover: expandOnHover$3,
	expandOnHoverDescription: expandOnHoverDescription$3,
	positionTopLeft: positionTopLeft$3,
	positionTopRight: positionTopRight$3,
	settings: settings$3,
	sizeMinimalist: sizeMinimalist$3,
	sizeRegular: sizeRegular$3,
	sizeSmall: sizeSmall$3,
	tierborked: tierborked$3,
	tierbronze: tierbronze$3,
	tiergold: tiergold$3,
	tierMinborked: tierMinborked$3,
	tierMinbronze: tierMinbronze$3,
	tierMingold: tierMingold$3,
	tierMinpending: tierMinpending$3,
	tierMinplatinum: tierMinplatinum$3,
	tierMinsilver: tierMinsilver$3,
	tierpending: tierpending$3,
	tierplatinum: tierplatinum$3,
	tiersilver: tiersilver$3,
	expandOnHoverOff: expandOnHoverOff$3
};

var badgePosition$2 = "Badge Position";
var badgePositionDescription$2 = "Position the badge within the game page header";
var badgeSize$2 = "Badge Size";
var badgeSizeDescription$2 = "Choose a different size for the badge";
var caching$2 = "Caching";
var clearCache$2 = "Clear ProtonDB Cache";
var clearCacheLabel$2 = "Clear the cache to force refresh all ProtonDB badges";
var expandOnHover$2 = "Expand Label on hover";
var expandOnHoverDescription$2 = "Minimalist Only. Display badge text on focus";
var positionTopLeft$2 = "Top Left";
var positionTopRight$2 = "Top Right";
var settings$2 = "Settings";
var sizeMinimalist$2 = "Minimalist";
var sizeRegular$2 = "Regular";
var sizeSmall$2 = "Small";
var tierborked$2 = "BORKED";
var tierbronze$2 = "BRONZE";
var tiergold$2 = "GOLD";
var tierMinborked$2 = "BORK";
var tierMinbronze$2 = "BRON";
var tierMingold$2 = "GOLD";
var tierMinpending$2 = "PEND";
var tierMinplatinum$2 = "PLAT";
var tierMinsilver$2 = "SILV";
var tierpending$2 = "PENDING";
var tierplatinum$2 = "PLATINUM";
var tiersilver$2 = "SILVER";
var expandOnHoverOff$2 = "Off";
var vi = {
	badgePosition: badgePosition$2,
	badgePositionDescription: badgePositionDescription$2,
	badgeSize: badgeSize$2,
	badgeSizeDescription: badgeSizeDescription$2,
	caching: caching$2,
	clearCache: clearCache$2,
	clearCacheLabel: clearCacheLabel$2,
	expandOnHover: expandOnHover$2,
	expandOnHoverDescription: expandOnHoverDescription$2,
	positionTopLeft: positionTopLeft$2,
	positionTopRight: positionTopRight$2,
	settings: settings$2,
	sizeMinimalist: sizeMinimalist$2,
	sizeRegular: sizeRegular$2,
	sizeSmall: sizeSmall$2,
	tierborked: tierborked$2,
	tierbronze: tierbronze$2,
	tiergold: tiergold$2,
	tierMinborked: tierMinborked$2,
	tierMinbronze: tierMinbronze$2,
	tierMingold: tierMingold$2,
	tierMinpending: tierMinpending$2,
	tierMinplatinum: tierMinplatinum$2,
	tierMinsilver: tierMinsilver$2,
	tierpending: tierpending$2,
	tierplatinum: tierplatinum$2,
	tiersilver: tiersilver$2,
	expandOnHoverOff: expandOnHoverOff$2
};

var badgePosition$1 = "徽章位置";
var badgePositionDescription$1 = "徽章在游戏详情页的位置";
var badgeSize$1 = "徽章尺寸";
var badgeSizeDescription$1 = "为徽章选择尺寸";
var caching$1 = "缓存";
var clearCache$1 = "清除 ProtonDB 缓存";
var clearCacheLabel$1 = "清除所有缓存并且强制刷新 ProtonDB 徽章";
var expandOnHover$1 = "悬停时展开";
var expandOnHoverDescription$1 = "仅支持极简徽章。在选中徽章时显示文字。";
var positionTopLeft$1 = "左上角";
var positionTopRight$1 = "右上角";
var settings$1 = "设置";
var sizeMinimalist$1 = "极简";
var sizeRegular$1 = "正常";
var sizeSmall$1 = "小型";
var tierborked$1 = "不可玩";
var tierbronze$1 = "铜牌";
var tiergold$1 = "金牌";
var tierMinborked$1 = "不可玩";
var tierMinbronze$1 = "铜牌";
var tierMingold$1 = "金牌";
var tierMinpending$1 = "暂无";
var tierMinplatinum$1 = "白金";
var tierMinsilver$1 = "银牌";
var tierpending$1 = "暂无";
var tierplatinum$1 = "白金";
var tiersilver$1 = "银牌";
var expandOnHoverOff$1 = "关闭";
var zhCn = {
	badgePosition: badgePosition$1,
	badgePositionDescription: badgePositionDescription$1,
	badgeSize: badgeSize$1,
	badgeSizeDescription: badgeSizeDescription$1,
	caching: caching$1,
	clearCache: clearCache$1,
	clearCacheLabel: clearCacheLabel$1,
	expandOnHover: expandOnHover$1,
	expandOnHoverDescription: expandOnHoverDescription$1,
	positionTopLeft: positionTopLeft$1,
	positionTopRight: positionTopRight$1,
	settings: settings$1,
	sizeMinimalist: sizeMinimalist$1,
	sizeRegular: sizeRegular$1,
	sizeSmall: sizeSmall$1,
	tierborked: tierborked$1,
	tierbronze: tierbronze$1,
	tiergold: tiergold$1,
	tierMinborked: tierMinborked$1,
	tierMinbronze: tierMinbronze$1,
	tierMingold: tierMingold$1,
	tierMinpending: tierMinpending$1,
	tierMinplatinum: tierMinplatinum$1,
	tierMinsilver: tierMinsilver$1,
	tierpending: tierpending$1,
	tierplatinum: tierplatinum$1,
	tiersilver: tiersilver$1,
	expandOnHoverOff: expandOnHoverOff$1
};

var badgePosition = "徽章位置";
var badgePositionDescription = "顯示在遊戲詳細資料頁面的位置";
var badgeSize = "徽章尺寸";
var badgeSizeDescription = "選擇不同徽章大小";
var caching = "快取";
var clearCache = "清除 ProtonDB 快取";
var clearCacheLabel = "清除快取，以便更新從 ProtonDB 下載的徽章";
var expandOnHover = "懸浮時展開標籤";
var expandOnHoverDescription = "僅極簡可用。在被選擇時顯示徽章文字。";
var positionTopLeft = "左上";
var positionTopRight = "右上";
var settings = "設定";
var sizeMinimalist = "極簡";
var sizeRegular = "正常";
var sizeSmall = "小型";
var tierborked = "不可玩";
var tierbronze = "銅";
var tiergold = "金";
var tierMinborked = "不可玩";
var tierMinbronze = "銅";
var tierMingold = "金";
var tierMinpending = "無";
var tierMinplatinum = "白金";
var tierMinsilver = "銀";
var tierpending = "等您回報";
var tierplatinum = "白金";
var tiersilver = "銀";
var expandOnHoverOff = "關閉";
var zhTw = {
	badgePosition: badgePosition,
	badgePositionDescription: badgePositionDescription,
	badgeSize: badgeSize,
	badgeSizeDescription: badgeSizeDescription,
	caching: caching,
	clearCache: clearCache,
	clearCacheLabel: clearCacheLabel,
	expandOnHover: expandOnHover,
	expandOnHoverDescription: expandOnHoverDescription,
	positionTopLeft: positionTopLeft,
	positionTopRight: positionTopRight,
	settings: settings,
	sizeMinimalist: sizeMinimalist,
	sizeRegular: sizeRegular,
	sizeSmall: sizeSmall,
	tierborked: tierborked,
	tierbronze: tierbronze,
	tiergold: tiergold,
	tierMinborked: tierMinborked,
	tierMinbronze: tierMinbronze,
	tierMingold: tierMingold,
	tierMinpending: tierMinpending,
	tierMinplatinum: tierMinplatinum,
	tierMinsilver: tierMinsilver,
	tierpending: tierpending,
	tierplatinum: tierplatinum,
	tiersilver: tiersilver,
	expandOnHoverOff: expandOnHoverOff
};

const languages = {
    bg,
    cs,
    da,
    de,
    el,
    en,
    es,
    es419,
    fi,
    fr,
    hu,
    it,
    ja,
    ko,
    nl,
    no,
    pl,
    pt,
    ptBr,
    ro,
    ru,
    sv,
    th,
    tr,
    uk,
    vi,
    zhCn,
    zhTw
};

function getCurrentLanguage() {
    const steamLang = window.LocalizationManager.m_rgLocalesToUse[0];
    const lang = steamLang.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    return languages[lang] ? lang : 'en';
}
function useTranslations() {
    const [lang] = SP_REACT.useState(getCurrentLanguage());
    return function (key) {
        if (languages[lang]?.[key]?.length) {
            return languages[lang]?.[key];
        }
        else if (languages.en?.[key]?.length) {
            return languages.en?.[key];
        }
        else {
            return key;
        }
    };
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function isFunction(value) {
    return typeof value === 'function';
}

function createErrorClass(createImpl) {
    var _super = function (instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}

var UnsubscriptionError = createErrorClass(function (_super) {
    return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors
            ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ')
            : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
    };
});

function arrRemove(arr, item) {
    if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}

var Subscription = (function () {
    function Subscription(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._finalizers = null;
    }
    Subscription.prototype.unsubscribe = function () {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) {
                    try {
                        for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                            var parent_1 = _parentage_1_1.value;
                            parent_1.remove(this);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                else {
                    _parentage.remove(this);
                }
            }
            var initialFinalizer = this.initialTeardown;
            if (isFunction(initialFinalizer)) {
                try {
                    initialFinalizer();
                }
                catch (e) {
                    errors = e instanceof UnsubscriptionError ? e.errors : [e];
                }
            }
            var _finalizers = this._finalizers;
            if (_finalizers) {
                this._finalizers = null;
                try {
                    for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
                        var finalizer = _finalizers_1_1.value;
                        try {
                            execFinalizer(finalizer);
                        }
                        catch (err) {
                            errors = errors !== null && errors !== void 0 ? errors : [];
                            if (err instanceof UnsubscriptionError) {
                                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                            }
                            else {
                                errors.push(err);
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            if (errors) {
                throw new UnsubscriptionError(errors);
            }
        }
    };
    Subscription.prototype.add = function (teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) {
                execFinalizer(teardown);
            }
            else {
                if (teardown instanceof Subscription) {
                    if (teardown.closed || teardown._hasParent(this)) {
                        return;
                    }
                    teardown._addParent(this);
                }
                (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
        }
    };
    Subscription.prototype._hasParent = function (parent) {
        var _parentage = this._parentage;
        return _parentage === parent || (Array.isArray(_parentage) && _parentage.includes(parent));
    };
    Subscription.prototype._addParent = function (parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };
    Subscription.prototype._removeParent = function (parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) {
            this._parentage = null;
        }
        else if (Array.isArray(_parentage)) {
            arrRemove(_parentage, parent);
        }
    };
    Subscription.prototype.remove = function (teardown) {
        var _finalizers = this._finalizers;
        _finalizers && arrRemove(_finalizers, teardown);
        if (teardown instanceof Subscription) {
            teardown._removeParent(this);
        }
    };
    Subscription.EMPTY = (function () {
        var empty = new Subscription();
        empty.closed = true;
        return empty;
    })();
    return Subscription;
}());
var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
    return (value instanceof Subscription ||
        (value && 'closed' in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe)));
}
function execFinalizer(finalizer) {
    if (isFunction(finalizer)) {
        finalizer();
    }
    else {
        finalizer.unsubscribe();
    }
}

var config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false,
};

var timeoutProvider = {
    setTimeout: function (handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    },
    clearTimeout: function (handle) {
        var delegate = timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: undefined,
};

function reportUnhandledError(err) {
    timeoutProvider.setTimeout(function () {
        {
            throw err;
        }
    });
}

function noop() { }

function errorContext(cb) {
    {
        cb();
    }
}

var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
            _this.destination = destination;
            if (isSubscription(destination)) {
                destination.add(_this);
            }
        }
        else {
            _this.destination = EMPTY_OBSERVER;
        }
        return _this;
    }
    Subscriber.create = function (next, error, complete) {
        return new SafeSubscriber(next, error, complete);
    };
    Subscriber.prototype.next = function (value) {
        if (this.isStopped) ;
        else {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (this.isStopped) ;
        else {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (this.isStopped) ;
        else {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
        }
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        try {
            this.destination.error(err);
        }
        finally {
            this.unsubscribe();
        }
    };
    Subscriber.prototype._complete = function () {
        try {
            this.destination.complete();
        }
        finally {
            this.unsubscribe();
        }
    };
    return Subscriber;
}(Subscription));
var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
    return _bind.call(fn, thisArg);
}
var ConsumerObserver = (function () {
    function ConsumerObserver(partialObserver) {
        this.partialObserver = partialObserver;
    }
    ConsumerObserver.prototype.next = function (value) {
        var partialObserver = this.partialObserver;
        if (partialObserver.next) {
            try {
                partialObserver.next(value);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    ConsumerObserver.prototype.error = function (err) {
        var partialObserver = this.partialObserver;
        if (partialObserver.error) {
            try {
                partialObserver.error(err);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
        else {
            handleUnhandledError(err);
        }
    };
    ConsumerObserver.prototype.complete = function () {
        var partialObserver = this.partialObserver;
        if (partialObserver.complete) {
            try {
                partialObserver.complete();
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    return ConsumerObserver;
}());
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var partialObserver;
        if (isFunction(observerOrNext) || !observerOrNext) {
            partialObserver = {
                next: (observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined),
                error: error !== null && error !== void 0 ? error : undefined,
                complete: complete !== null && complete !== void 0 ? complete : undefined,
            };
        }
        else {
            var context_1;
            if (_this && config.useDeprecatedNextContext) {
                context_1 = Object.create(observerOrNext);
                context_1.unsubscribe = function () { return _this.unsubscribe(); };
                partialObserver = {
                    next: observerOrNext.next && bind(observerOrNext.next, context_1),
                    error: observerOrNext.error && bind(observerOrNext.error, context_1),
                    complete: observerOrNext.complete && bind(observerOrNext.complete, context_1),
                };
            }
            else {
                partialObserver = observerOrNext;
            }
        }
        _this.destination = new ConsumerObserver(partialObserver);
        return _this;
    }
    return SafeSubscriber;
}(Subscriber));
function handleUnhandledError(error) {
    {
        reportUnhandledError(error);
    }
}
function defaultErrorHandler(err) {
    throw err;
}
var EMPTY_OBSERVER = {
    closed: true,
    next: noop,
    error: defaultErrorHandler,
    complete: noop,
};

var observable = (function () { return (typeof Symbol === 'function' && Symbol.observable) || '@@observable'; })();

function identity(x) {
    return x;
}

function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}

var Observable = (function () {
    function Observable(subscribe) {
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var _this = this;
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
        errorContext(function () {
            var _a = _this, operator = _a.operator, source = _a.source;
            subscriber.add(operator
                ?
                    operator.call(subscriber, source)
                : source
                    ?
                        _this._subscribe(subscriber)
                    :
                        _this._trySubscribe(subscriber));
        });
        return subscriber;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.error(err);
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscriber = new SafeSubscriber({
                next: function (value) {
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscriber.unsubscribe();
                    }
                },
                error: reject,
                complete: resolve,
            });
            _this.subscribe(subscriber);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable.prototype[observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        return pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return (value = x); }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
    return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
function isSubscriber(value) {
    return (value && value instanceof Subscriber) || (isObserver(value) && isSubscription(value));
}

var ObjectUnsubscribedError = createErrorClass(function (_super) {
    return function ObjectUnsubscribedErrorImpl() {
        _super(this);
        this.name = 'ObjectUnsubscribedError';
        this.message = 'object unsubscribed';
    };
});

var Subject = (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.closed = false;
        _this.currentObservers = null;
        _this.observers = [];
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype._throwIfClosed = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
    };
    Subject.prototype.next = function (value) {
        var _this = this;
        errorContext(function () {
            var e_1, _a;
            _this._throwIfClosed();
            if (!_this.isStopped) {
                if (!_this.currentObservers) {
                    _this.currentObservers = Array.from(_this.observers);
                }
                try {
                    for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var observer = _c.value;
                        observer.next(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        });
    };
    Subject.prototype.error = function (err) {
        var _this = this;
        errorContext(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.hasError = _this.isStopped = true;
                _this.thrownError = err;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().error(err);
                }
            }
        });
    };
    Subject.prototype.complete = function () {
        var _this = this;
        errorContext(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.isStopped = true;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().complete();
                }
            }
        });
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = this.closed = true;
        this.observers = this.currentObservers = null;
    };
    Object.defineProperty(Subject.prototype, "observed", {
        get: function () {
            var _a;
            return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
        },
        enumerable: false,
        configurable: true
    });
    Subject.prototype._trySubscribe = function (subscriber) {
        this._throwIfClosed();
        return _super.prototype._trySubscribe.call(this, subscriber);
    };
    Subject.prototype._subscribe = function (subscriber) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(subscriber);
        return this._innerSubscribe(subscriber);
    };
    Subject.prototype._innerSubscribe = function (subscriber) {
        var _this = this;
        var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
        if (hasError || isStopped) {
            return EMPTY_SUBSCRIPTION;
        }
        this.currentObservers = null;
        observers.push(subscriber);
        return new Subscription(function () {
            _this.currentObservers = null;
            arrRemove(observers, subscriber);
        });
    };
    Subject.prototype._checkFinalizedStatuses = function (subscriber) {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
        if (hasError) {
            subscriber.error(thrownError);
        }
        else if (isStopped) {
            subscriber.complete();
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable));
var AnonymousSubject = (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
    };
    AnonymousSubject.prototype.error = function (err) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
    };
    AnonymousSubject.prototype.complete = function () {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var _a, _b;
        return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
    };
    return AnonymousSubject;
}(Subject));

var BehaviorSubject = (function (_super) {
    __extends(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function () {
            return this.getValue();
        },
        enumerable: false,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function (subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        !subscription.closed && subscriber.next(this._value);
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function () {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, _value = _a._value;
        if (hasError) {
            throw thrownError;
        }
        this._throwIfClosed();
        return _value;
    };
    BehaviorSubject.prototype.next = function (value) {
        _super.prototype.next.call(this, (this._value = value));
    };
    return BehaviorSubject;
}(Subject));

// Not using the React context here as this approach is simpler.
const SettingsContext = new BehaviorSubject({
    size: 'regular',
    position: 'tl',
    labelTypeOnHover: 'off'
});
const LoadingContext = new BehaviorSubject(true);
function updateSettings(key, value) {
    const newSettings = { ...SettingsContext.value, [key]: value };
    call('set_setting', 'settings', newSettings).catch(console.error);
    SettingsContext.next(newSettings);
}
function loadSettings() {
    LoadingContext.next(true);
    call('get_setting', 'settings', SettingsContext.value)
        .then(settings => SettingsContext.next(settings))
        .catch(console.error)
        .finally(() => LoadingContext.next(false));
}
const useSettings = () => {
    const [settings, setSettings] = SP_REACT.useState(SettingsContext.value);
    const [loading, setLoading] = SP_REACT.useState(LoadingContext.value);
    SP_REACT.useEffect(() => {
        const settingsSub = SettingsContext.asObservable().subscribe((value) => setSettings(value));
        const loadingSub = LoadingContext.asObservable().subscribe((value) => setLoading(value));
        return () => {
            loadingSub.unsubscribe();
            settingsSub.unsubscribe();
        };
    }, []);
    function setSize(value) {
        updateSettings('size', value);
    }
    function setPosition(value) {
        updateSettings('position', value);
    }
    function setLabelOnHover(value) {
        updateSettings('labelTypeOnHover', value);
    }
    return { settings, setSize, setPosition, setLabelOnHover, loading };
};

// THIS FILE IS AUTO GENERATED
function ImSpinner2 (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.1","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M16 8c-0.020-1.045-0.247-2.086-0.665-3.038-0.417-0.953-1.023-1.817-1.766-2.53s-1.624-1.278-2.578-1.651c-0.953-0.374-1.978-0.552-2.991-0.531-1.013 0.020-2.021 0.24-2.943 0.646-0.923 0.405-1.758 0.992-2.449 1.712s-1.237 1.574-1.597 2.497c-0.361 0.923-0.533 1.914-0.512 2.895 0.020 0.981 0.234 1.955 0.627 2.847 0.392 0.892 0.961 1.7 1.658 2.368s1.523 1.195 2.416 1.543c0.892 0.348 1.851 0.514 2.799 0.493 0.949-0.020 1.89-0.227 2.751-0.608 0.862-0.379 1.642-0.929 2.287-1.604s1.154-1.472 1.488-2.335c0.204-0.523 0.342-1.069 0.415-1.622 0.019 0.001 0.039 0.002 0.059 0.002 0.552 0 1-0.448 1-1 0-0.028-0.001-0.056-0.004-0.083h0.004zM14.411 10.655c-0.367 0.831-0.898 1.584-1.55 2.206s-1.422 1.112-2.254 1.434c-0.832 0.323-1.723 0.476-2.608 0.454-0.884-0.020-1.759-0.215-2.56-0.57-0.801-0.354-1.526-0.867-2.125-1.495s-1.071-1.371-1.38-2.173c-0.31-0.801-0.457-1.66-0.435-2.512s0.208-1.694 0.551-2.464c0.342-0.77 0.836-1.468 1.441-2.044s1.321-1.029 2.092-1.326c0.771-0.298 1.596-0.438 2.416-0.416s1.629 0.202 2.368 0.532c0.74 0.329 1.41 0.805 1.963 1.387s0.988 1.27 1.272 2.011c0.285 0.74 0.418 1.532 0.397 2.32h0.004c-0.002 0.027-0.004 0.055-0.004 0.083 0 0.516 0.39 0.94 0.892 0.994-0.097 0.544-0.258 1.075-0.481 1.578z"}}]})(props);
}

function Spinner() {
    return (SP_REACT.createElement("div", null,
        SP_REACT.createElement("style", null, `
            .icon-spin {
              
              -webkit-animation: icon-spin 2s infinite linear;
                      animation: icon-spin 2s infinite linear;
            }
            
            @-webkit-keyframes icon-spin {
              0% {
                -webkit-transform: rotate(0deg);
                        transform: rotate(0deg);
              }
              100% {
                -webkit-transform: rotate(359deg);
                        transform: rotate(359deg);
              }
            }
            
            @keyframes icon-spin {
              0% {
                -webkit-transform: rotate(0deg);
                        transform: rotate(0deg);
              }
              100% {
                -webkit-transform: rotate(359deg);
                        transform: rotate(359deg);
              }
            }
              `),
        SP_REACT.createElement(ImSpinner2, { className: "icon-spin" })));
}

const DeckPanelSection = DFL.PanelSection;
const DeckPanelSectionRow = DFL.PanelSectionRow;
const DeckButtonItem = DFL.ButtonItem;
function Index() {
    const { settings, setSize, setPosition, setLabelOnHover, loading } = useSettings();
    const t = useTranslations();
    const sizeOptions = [
        { data: 0, label: t('sizeRegular'), value: 'regular' },
        { data: 1, label: t('sizeSmall'), value: 'small' },
        { data: 2, label: t('sizeMinimalist'), value: 'minimalist' }
    ];
    const positionOptions = [
        { data: 0, label: t('positionTopLeft'), value: 'tl' },
        { data: 1, label: t('positionTopRight'), value: 'tr' }
    ];
    const hoverTypeOptions = [
        { data: 0, label: t('expandOnHoverOff'), value: 'off' },
        { data: 1, label: t('sizeSmall'), value: 'small' },
        { data: 2, label: t('sizeRegular'), value: 'regular' }
    ];
    if (loading) {
        return (SP_REACT.createElement("div", { style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10
            } },
            SP_REACT.createElement(Spinner, null)));
    }
    return (SP_REACT.createElement("div", null,
        SP_REACT.createElement(DeckPanelSection, { title: t('settings') },
            SP_REACT.createElement(DeckPanelSectionRow, null,
                SP_REACT.createElement(DFL.DropdownItem, { label: t('badgeSize'), description: t('badgeSizeDescription'), menuLabel: t('badgeSize'), rgOptions: sizeOptions.map((o) => ({
                        data: o.data,
                        label: o.label
                    })), selectedOption: sizeOptions.find((o) => o.value === settings.size)?.data || 0, onChange: (newVal) => {
                        const newSize = sizeOptions.find((o) => o.data === newVal.data)?.value ||
                            'regular';
                        setSize(newSize);
                    } })),
            settings.size === 'minimalist' ? (SP_REACT.createElement(DeckPanelSectionRow, null,
                SP_REACT.createElement(DFL.DropdownItem, { label: t('expandOnHover'), description: t('expandOnHoverDescription'), menuLabel: t('expandOnHover'), rgOptions: hoverTypeOptions.map((o) => ({
                        data: o.data,
                        label: o.label
                    })), selectedOption: hoverTypeOptions.find((o) => o.value === settings.labelTypeOnHover)?.data || 0, onChange: (newVal) => {
                        const newHoverType = hoverTypeOptions.find((o) => o.data === newVal.data)?.value ||
                            'off';
                        setLabelOnHover(newHoverType);
                    } }))) : (''),
            SP_REACT.createElement(DeckPanelSectionRow, null,
                SP_REACT.createElement(DFL.DropdownItem, { label: t('badgePosition'), description: t('badgePositionDescription'), menuLabel: t('badgePosition'), rgOptions: positionOptions.map((o) => ({
                        data: o.data,
                        label: o.label
                    })), selectedOption: positionOptions.find((o) => o.value === settings.position)
                        ?.data || 0, onChange: (newVal) => {
                        const newPosition = positionOptions.find((o) => o.data === newVal.data)?.value ||
                            'tl';
                        setPosition(newPosition);
                    } }))),
        SP_REACT.createElement(DeckPanelSection, { title: t('caching') },
            SP_REACT.createElement(DeckPanelSectionRow, null,
                SP_REACT.createElement(DeckButtonItem, { label: t('clearCacheLabel'), bottomSeparator: "none", layout: "below", onClick: () => clearCache$s() }, t('clearCache'))))));
}

// THIS FILE IS AUTO GENERATED
function IoLogoTux (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M426.3 396c-6.7-4-13.2-11-12-18.8 2.3-15.3 2.5-21.5-.2-25.8-1.9-3.2-5.5-5-8.6-5.8 2-2.5 3.1-5.4 3.8-10.9 1.3-10-4.7-41-12.7-65.7s-29.9-50-44.7-68c-26-31.8-22.8-39.2-26.3-99.7C323.4 62.8 306.3 32 256 32s-67 32-67 59c0 28.7 2 51 2 51 1.3 33.4 1 39.4-8 55.3-4.9 8.7-27 30-35.7 44.7s-7.6 29.5-24.6 52.8c-12.4 17-13.8 28.4-9.7 44-7 8.2-3.6 19.9-5 24.9-2.6 8.7-13.7 10.3-22.3 11s-15.3 0-18.7 5.3.7 16 4.3 30-7.3 15-7.3 31 30 16 59.7 22.7 40.7 16.3 56 16.3 26.8-10.2 38-19.3c7.2-5.9 29-3.7 42.3-3.7s34.3-.6 45.7 2.4S317 480 345 480s34.7-20.7 61-34.3 42-20 42-29.7-15-16-21.7-20zm-226.5 55.5c-1.3 13-12.6 17.1-24.1 16.1-13-1.1-29-7.6-44.1-12.1s-35.5-7.5-49-9.9c-15.3-2.7 0-13.6-.2-34.2-.1-8-7.1-19.4-4.2-24.7s17.3-2.4 22.3-3.8 12.7-5.7 15.3-11.9c1.4-3.4 1.8-17.7 2.9-22.8 1.1-4.9 7.9-7.2 22.2.1s28.9 38.1 42.3 59.8 17.9 30.4 16.6 43.4zm118.5-65.8c2 10.3 3.2 24.5.7 36.3s-7 15.5-10.7 23c-2.2-6.8 5.3-13.8 4.4-30.8-.5-9.5-.8-7.8-11.5 1.8-12.2 10.8-27.6 20.1-53 22.5-21 2-32.5-8.3-32.5-8.3 5 16-4.3 24.7-4.3 24.7.3-3.7.8-14.3-2.5-21.6-4-9-9.3-18.7-9.3-18.7s8.6-2.7 11.6-10 2-17.3-8.7-27.7-52.5-37.6-55.9-42.1c-4.9-6.5-6.7-10.2-7-23.2s5.4-24.8 4.3-20.3c-.8 3.2.1 6.8.1 19.8s7.6 23.3 13.9 25c9.5 2.6 2-26.1 8-53.1s11.7-32.8 19.2-43.8 19.2-20.5 17-43.1-.1-20.1 5.1-11.8c4 6.5 13.3 24 24.7 22 19.4-3.3 43.9-24.6 47.6-28.2 3.7-3.6.7-7.1-2.3-5.8-15.5 6.7-44.3 21.5-51.5 18.2s-18.1-20.6-16.8-19.5c15.4 13.6 19.9 11.1 26.4 9 8.4-2.8 12.8-4.3 28.5-11.3s20.7-5.3 22.3-8.7-.4-6.7-4.7-5.7c-6.4 1.5-3.4 5.1-22.7 12.3-25.3 9.5-33.3 10.3-44 3-8.6-5.9-15-12.7-15-16.7s8.3-8.3 12.3-11.3 12.3-10.9 12.3-10.9 1-7.2-.6-12.7c-1.9-6.5-7.8-9.3-11.9-8.1-4.1 1.1-8 5.5-6.8 14.8 1 8.3 7 11 7 11s-2.7 3.5-5.2 4.7c0 0-.8-.3-3.5-6.3s-6.6-19.5-.3-31.1 19.6-5.2 23.8 3.8c3.9 8.3 2.4 22.7 2.4 22.7 6-2.2 13-2 21 3.5-7.1-29.8 9.5-41.1 22-41.1s22.3 9.6 22.3 25c0 12-3.5 18.2-6.9 22-4.1-.5-8.2-1.5-6.3-3.4 1.3-1.4 4.4-5.7 4.4-13.2s-5.9-13.7-13.7-13.7c-9.2 0-12.6 8.3-13.7 13s-.4 8.6-.2 10.4c.6 5 10.9 9.6 23.9 12.9s11.3 9 8.3 25.3 6.3 18.3 14.3 33.8 5.7 21.8 15.9 35.2 19 47.8 16.4 76.8c-.9 10.5-3.9 10.2 7.3 6.7 5.6-1.7 12-2.7 12-2.7 3.1-6.3 3.4-16.3 3.5-22.3.2-13.5.7-41.5-26.7-71.5 0 0 29.5 21.7 34 62 2.5 22.3-2 32.4-2 32.4 5.3 1.3 9.8 7.3 12.6 11.8 3.7 6.1-3.9-5.8-20-5.8-8.5 0-15.3 3.9-18.5 7.9s-3.1 7.6-3.2 11.7c-7.1-1.2-12.4 0-16.8 4.9-5.6 7-2.8 24.2-.8 34.6zm90.1 47.2c-24.1 10.4-32.7 23.5-47.7 31.5s-27.7 2.3-33.7-8 10.4-28.2 4.7-59.6c-4.4-24.2-6.3-31-4.9-36.8 1.4-5.5 9.4-4.4 11.5-3.9 1.3 5.4 6.7 19.5 27 19.5 0 0 23.2 2.6 32.7-21.2 0 0 5.7-.2 7.2 3.5 2.3 5.8-2.9 16.5-2.8 21.3.3 15.7 11.7 21.1 28.4 32 8.2 5.6 2.1 11.1-22.4 21.7z"}}]})(props);
}

const appTypes = {
    1: 'game',
    2: 'software',
    4: 'tool',
    8: 'demo',
    2048: 'video',
    65536: 'playtest'
};

const useParams = Object.values(DFL.ReactRouter).find((val) => /return (\w)\?\1\.params:{}/.test(`${val}`));

function cleanString(str) {
    return str
        .replace(/['"\u0040\u0026\u2122\u00ae]/g, '')
        .toLowerCase()
        .trim();
}
const useAppId = () => {
    const [appId, setAppId] = SP_REACT.useState();
    const { appid: pathId } = useParams();
    SP_REACT.useEffect(() => {
        let ignore = false;
        async function getNonSteamAppId(gameName) {
            if (ignore) {
                return;
            }
            try {
                const res = await fetchNoCors(`https://steamcommunity.com/actions/SearchApps/${gameName}`, {
                    method: 'GET'
                });
                if (res.status === 200) {
                    const options = await res.json();
                    const appId = options.find((o) => {
                        return cleanString(o.name) === cleanString(gameName);
                    })?.appid;
                    setAppId(appId);
                    return;
                }
            }
            catch (error) {
                console.error(error);
            }
            setAppId(undefined);
        }
        const appDetails = appStore.GetAppOverviewByGameID(parseInt(pathId));
        const isSteamGame = Boolean(appTypes[appDetails?.app_type]);
        if (isSteamGame) {
            setAppId(pathId);
        }
        else {
            getNonSteamAppId(appDetails?.display_name);
        }
        return () => {
            ignore = true;
        };
    }, []);
    return appId;
};

async function getProtonDBInfo(appId) {
    try {
        const res = await fetchNoCors(`https://www.protondb.com/api/v1/reports/summaries/${appId}.json`, {
            method: 'GET'
        });
        if (res.status === 200) {
            return (await res.json())?.tier;
        }
    }
    catch (error) {
        console.log(error);
        return "pending";
    }
    return undefined;
}
async function getLinuxInfo(appId) {
    try {
        const res = await fetchNoCors(`https://store.steampowered.com/api/appdetails/?appids=${appId}`, {
            method: 'GET'
        });
        if (res.status === 200) {
            return Boolean((await res.json())?.[appId]?.data?.platforms?.linux);
        }
    }
    catch (error) {
        console.log(error);
    }
    return false;
}

function isOutdated(lastUpdated) {
    const now = new Date();
    const msBetweenDates = Math.abs(new Date(lastUpdated).getTime() - now.getTime());
    const hoursBetweenDates = msBetweenDates / (60 * 60 * 1000);
    return hoursBetweenDates > 24;
}

const useBadgeData = (appId) => {
    const [protonDBTier, setProtonDBTier] = SP_REACT.useState();
    const [linuxSupport, setLinuxSupport] = SP_REACT.useState(false);
    async function refresh() {
        const tierPromise = getProtonDBInfo(appId);
        const linuxPromise = getLinuxInfo(appId);
        const [tier, linuxSupport] = await Promise.all([tierPromise, linuxPromise]);
        if (tier?.length && appId?.length) {
            updateCache(appId, {
                tier: tier,
                linuxSupport,
                lastUpdated: new Date().toISOString()
            });
            setProtonDBTier(tier);
        }
        setLinuxSupport(linuxSupport);
    }
    SP_REACT.useEffect(() => {
        // Proton DB Data
        let ignore = false;
        async function getData() {
            const cache = await getCache(appId);
            if (cache?.tier) {
                setProtonDBTier(cache.tier);
                if (!isOutdated(cache?.lastUpdated))
                    return;
            }
            const tier = await getProtonDBInfo(appId);
            if (ignore) {
                return;
            }
            if (!tier?.length)
                return;
            setProtonDBTier(tier);
        }
        if (appId?.length) {
            getData();
        }
        return () => {
            ignore = true;
        };
    }, [appId]);
    SP_REACT.useEffect(() => {
        // Linux Data
        let ignore = false;
        async function getData() {
            const cache = await getCache(appId);
            if (typeof cache?.linuxSupport !== 'undefined') {
                setLinuxSupport(cache?.linuxSupport);
                if (!isOutdated(cache?.lastUpdated))
                    return;
            }
            const linuxSupport = await getLinuxInfo(appId);
            if (ignore) {
                return;
            }
            setLinuxSupport(linuxSupport);
        }
        if (appId?.length) {
            getData();
        }
        return () => {
            ignore = true;
        };
    }, [appId]);
    SP_REACT.useEffect(() => {
        if (protonDBTier) {
            updateCache(appId, {
                tier: protonDBTier,
                linuxSupport,
                lastUpdated: new Date().toISOString()
            });
        }
    }, [protonDBTier, linuxSupport]);
    return {
        protonDBTier,
        linuxSupport,
        refresh
    };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Button = DFL.DialogButton.render({}).type;

var style = (SP_REACT.createElement("style", null, `
    @font-face {
        font-family: Abel;
        src: url(data:font/truetype;base64,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AA8AFP/XAA8AFv/HAA8AF/+VAA8AGP/HAA8AGf+yAA8AGv/bAA8AG//HAA8AHP+yABEAE//HABEAFP/bABEAFv/HABEAF/+VABEAGP/HABEAGf+yABEAGv/bABEAG//HABEAHP+yABIAE//sABIAFv/sABIAF/9oABIAGf/XABIAG//sABIAHP/XABIAJP+BABIAJv/sABIAKv/sABIALf95ABIAMv/sABIANP/sABIARP+RABIARv+aABIAR/+aABIASP+aABIASv+iABIAUP/bABIAUf/bABIAUv+aABIAU//bABIAVP+iABIAVf/bABIAVv+RABIAWP/bABIAgf+BABIAgv+BABIAg/+BABIAhP+BABIAhf+BABIAhv+BABIAiP/sABIAk//sABIAlP/sABIAlf/sABIAlv/sABIAl//sABIAof+RABIAov+RABIAo/+RABIApP+RABIApf+RABIApv+RABIAp/+RABIAqf+aABIAqv+aABIAq/+aABIArP+aABIAs/+aABIAtP+aABIAtf+aABIAtv+aABIAt/+aABIAuv/bABIAu//bABIAvP/bABIAvf/bABIAx/95ABMAD//HABMAEf/HABMAEv/nABMAGP/sABMAGf/XABMAGv/XABMAG//sABMA3/9kABQAF//sABQAGf/fABQAHP/fABUAGP/bABUAGf/nABUAGv/sABUAHP/nABYAD//HABYAEf/HABYAE//sABYAFv/sABYAGP/sABYAGf/XABYAGv/XABYAG//sABYAHP/XABcAE//sABcAFv/sABcAGP/sABcAGv/XABcAHP/XABgAD//HABgAEf/HABgAE//sABgAFv/sABgAGP/sABgAGf/XABgAGv/XABgAG//sABgAHP/XABkAD//bABkAEf/bABkAGv/sABsAD//HABsAEf/HABsAEv/nABsAE//sABsAFv/sABsAGP/sABsAGf/XABsAGv/XABsAG//sABsAHP/XABwAD//bABwAEf/bABwAGf/sABwAGv/sACQABf+BACQACv+RACQAIv/XACQAN//DACQAOf/XACQAOv/XACQAPP+aACQAnv+qACQA2v+qACYAD//bACYAEf/bACYAPP/sACYAnv/sACYA2v/sACcAD/++ACcAEf++ACcAEv/nACcAPP/XACcATP/XACcAnv/XACcA2v/XACgAV//XACkAD/5WACkAEf5WACkAEv+FACkAJP/TACkAgf/TACkAgv/TACkAg//TACkAhP/TACkAhf/TACkAhv/TACoAD//bACoAEf/bACoAPP/sACoATP/sACoAnv/sACoA2v/sACsAD//XACsAEf/XACsARP/sACsASP/sACsATP/LACsAUv/sACsAWP/sACsAof/sACsAov/sACsAo//sACsApP/sACsApf/sACsApv/sACsAp//sACsAqf/sACsAqv/sACsAq//sACsArP/sACsAs//sACsAtP/sACsAtf/sACsAtv/sACsAt//sACsAuv/sACsAu//sACsAvP/sACsAvf/sACwATP/TACwATv/LACwAT//LAC0AD//bAC0AEf/bAC8ABf72AC8ACv8GAC8AIv/bAC8AN//LAC8AOf/HAC8AOv/TAC8APP+PAC8Anv+PAC8A2v+PADAABP/sADAAD//XADAAEf/XADAARP/sADAARv/sADAAR//sADAASP/sADAATP/LADAAUf/sADAAUv/sADAAWP/sADAAof/sADAAov/sADAAo//sADAApP/sADAApf/sADAApv/sADAAp//sADAAqf/sADAAqv/sADAAq//sADAArP/sADAAs//sADAAtP/sADAAtf/sADAAtv/sADAAt//sADAAuv/sADAAu//sADAAvP/sADAAvf/sADEAD//XADEAEf/XADEARP/sADEASP/sADEATP/LADEAUv/sADEAWP/sADEAof/sADEAov/sADEAo//sADEApP/sADEApf/sADEApv/sADEAp//sADEAqf/sADEAqv/sADEAq//sADEArP/sADEAs//sADEAtP/sADEAtf/sADEAtv/sADEAt//sADEAuv/sADEAu//sADEAvP/sADEAvf/sADIAD//HADIAEf/HADIAEv/nADIAPP/XADIATP/XADIATv/XADIAT//XADIAnv/XADIA2v/XADMAD/5WADMAEf5WADMAEv+qADMAnv/sADMA2v/sADQAD//HADQAEf/HADQAEv/nADQAPP/XADQATP/XADQATv/XADQAT//XADQAnv/XADQA2v/XADUAPP/XADUAnv/XADUA2v/XADYAD//bADYAEf/bADYAPP/XADYATP/sADYATv/sADYAT//sADYAnv/XADYA2v/XADcAD/9YADcAEP+6ADcAEf9YADcAEv+NADcAHf+uADcAHv+uADcAJP/DADcALf8zADcARP+iADcASP+uADcAUP/DADcAUv+uADcAVf/DADcAVv+eADcAWP/DADcAWv+uADcAXf/bADcAgf/DADcAgv/DADcAg//DADcAhP/DADcAhf/DADcAhv/DADcAof+iADcAov+iADcAo/+iADcApP+iADcApf+iADcApv+iADcAp/+iADcAqf+uADcAqv+uADcAq/+uADcArP+uADcAs/+uADcAtP+uADcAtf+uADcAtv+uADcAt/+uADcAuv/DADcAu//DADcAvP/DADcAvf/DADcAx/8zADgAD//HADgAEf/HADgAEv/nADgATP/fADkAD/9UADkAEf9UADkAEv99ADkAJP/XADkARP/fADkASP/nADkAUv/nADkAgf/XADkAgv/XADkAg//XADkAhP/XADkAhf/XADkAhv/XADkAof/fADkAov/fADkAo//fADkApP/fADkApf/fADkApv/fADkAp//fADkAqf/nADkAqv/nADkAq//nADkArP/nADkAs//nADkAtP/nADkAtf/nADkAtv/nADkAt//nADoAD/9cADoAEf9cADoAEv+JADoAJP/XADoARP/bADoAR//jADoASP/jADoAUv/jADoAgf/XADoAgv/XADoAg//XADoAhP/XADoAhf/XADoAhv/XADoAof/bADoAov/bADoAo//bADoApP/bADoApf/bADoApv/bADoAp//bADoAqf/jADoAqv/jADoAq//jADoArP/jADoAs//jADoAtP/jADoAtf/jADoAtv/jADoAt//jADoAxP/sADwAJP+aADwARP+uADwASP+uADwAUv+uADwAWP/DADwAgf+aADwAgv+aADwAg/+aADwAhP+aADwAhf+aADwAhv+aADwAof+uADwAov+uADwAo/+uADwApP+uADwApf+uADwApv+uADwAp/+uADwAqf+uADwAqv+uADwAq/+uADwArP+uADwAs/+uADwAtP+uADwAtf+uADwAtv+uADwAt/+uADwAuv/DADwAu//DADwAvP/DADwAvf/DAEQAIv9xAEUAD//sAEUAEf/sAEUAIv9tAEUAT//sAEYAD//sAEYAEf/sAEYAIv9tAEYATv/sAEYAT//s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AXQAAwABBAkACAAeAcIAAwABBAkACQAeAcIAAwABBAkACwAsAeAAAwABBAkADAAsAeAAAwABBAkADQEgAgwAAwABBAkADgA0AywAQwBvAHAAeQByAGkAZwBoAHQAIAAoAGMAKQAgADIAMAAxADEALAAgAE0AYQB0AHQAaABlAHcAIABEAGUAcwBtAG8AbgBkACAAKABoAHQAdABwADoALwAvAHcAdwB3AC4AbQBhAGQAdAB5AHAAZQAuAGMAbwBtACAAfAAgAG0AYQB0AHQAZABlAHMAbQBvAG4AZABAAGcAbQBhAGkAbAAuAGMAbwBtACkALAAgAHcAaQB0AGgAIABSAGUAcwBlAHIAdgBlAGQAIABGAG8AbgB0ACAATgBhAG0AZQAgAEEAYgBlAGwALgBBAGIAZQBsAFIAZQBnAHUAbABhAHIAMQAuADAAMAAzADsATQBBAEQAVAA7AEEAYgBlAGwALQBSAGUAZwB1AGwAYQByAEEAYgBlAGwAIABSAGUAZwB1AGwAYQByAFYAZQByAHMAaQBvAG4AIAAxAC4AMAAwADMAQQBiAGUAbAAtAFIAZQBnAHUAbABhAHIAQQBiAGUAbAAgAGkAcwAgAGEAIAB0AHIAYQBkAGUAbQBhAHIAawAgAG8AZgAgAE0AYQB0AHQAaABlAHcAIABEAGUAcwBtAG8AbgBkAC4ATQBhAHQAdABoAGUAdwAgAEQAZQBzAG0AbwBuAGQAaAB0AHQAcAA6AC8ALwB3AHcAdwAuAG0AYQBkAHQAeQBwAGUALgBjAG8AbQBUAGgAaQBzACAARgBvAG4AdAAgAFMAbwBmAHQAdwBhAHIAZQAgAGkAcwAgAGwAaQBjAGUAbgBzAGUAZAAgAHUAbgBkAGUAcgAgAHQAaABlACAAUwBJAEwAIABPAHAAZQBuACAARgBvAG4AdAAgAEwAaQBjAGUAbgBzAGUALAAgAFYAZQByAHMAaQBvAG4AIAAxAC4AMQAuACAAVABoAGkAcwAgAGwAaQBjAGUAbgBzAGUAIABpAHMAIABhAHYAYQBpAGwAYQBiAGwAZQAgAHcAaQB0AGgAIABhACAARgBBAFEAIABhAHQAOgAgAGgAdAB0AHAAOgAvAC8AcwBjAHIAaQBwAHQAcwAuAHMAaQBsAC4AbwByAGcALwBPAEYATABoAHQAdABwADoALwAvAHMAYwByAGkAcAB0AHMALgBzAGkAbAAuAG8AcgBnAC8ATwBGAEwAAAACAAAAAAAA/o8AUgAAAAAAAAAAAAAAAAAAAAAAAAAAAPsAAAABAAIAAwAEAAUABgAHAAgACQAKAAsADAANAA4ADwAQABEAEgATABQAFQAWABcAGAAZABoAGwAcAB0AHgAfACAAIQAiACMAJAAlACYAJwAoACkAKgArACwALQAuAC8AMAAxADIAMwA0ADUANgA3ADgAOQA6ADsAPAA9AD4APwBAAEEAQgBDAEQARQBGAEcASABJAEoASwBMAE0ATgBPAFAAUQBSAFMAVABVAFYAVwBYAFkAWgBbAFwAXQBeAF8AYABhAQIAowCEAIUAvQCWAOgAhgCOAIsAnQCpAKQAigDaAIMAkwDyAPMAjQCXAIgAwwDeAPEAngCqAPUA9AD2AKIArQDJAMcArgBiAGMAkABkAMsAZQDIAMoAzwDMAM0AzgDpAGYA0wDQANEArwBnAPAAkQDWANQA1QBoAOsA7QCJAGoAaQBrAG0AbABuAKAAbwBxAHAAcgBzAHUAdAB2AHcA6gB4AHoAeQB7AH0AfAC4AKEAfwB+AIAAgQDsAO4AugEDAQQBBQDXAQYBBwEIAQkBCgELAQwBDQDiAOMBDgEPALAAsQEQAREBEgETARQA5ADlALsA5gDnAKYA2ADhANsA3ADdAOAA2QDfARUAsgCzALYAtwDEALQAtQDFAIIAwgCHAKsAvgC/ALwBFgCMAO8BFwEYB3VuaTAwQTAEaGJhcgZJdGlsZGUGaXRpbGRlAklKAmlqC0pjaXJjdW1mbGV4C2pjaXJjdW1mbGV4DGtjb21tYWFjY2VudAxrZ3JlZW5sYW5kaWMKTGRvdGFjY2VudARsZG90Bk5hY3V0ZQZuYWN1dGUGUmFjdXRlDFJjb21tYWFjY2VudAxyY29tbWFhY2NlbnQGUmNhcm9uBnJjYXJvbgxkb3RhY2NlbnRjbWIERXVybwhkb3RsZXNzagtjb21tYWFjY2VudAAAAQAB//8ADw==);
    }

    .protondb-decky-indicator {
      border: none;
      z-index: 20;
      display: flex;
      align-items: center;
      width: max-content;
      height: max-content;
      border-radius: 0;
      color: black;
    }

    .protondb-decky-indicator.gpfocus, .protondb-decky-indicator:hover {
      filter: brightness(1.3);
    }

    .protondb-decky-indicator span {
      height: max-content;
      font-family: Abel,"Motiva Sans",Arial,Helvetica,sans-serif;
    }

    .protondb-decky-indicator-platinum {
      background: rgb(180, 199, 220);
      color: #000000;
      outline-color: rgb(180, 199, 220);
    }

    .protondb-decky-indicator-gold {
      background: rgb(207, 181, 59);
      color: #000000;
      outline-color: rgb(207, 181, 59);
    }

    .protondb-decky-indicator-silver {
      background: rgb(166, 166, 166);
      color: #000000;
      outline-color: rgb(166, 166, 166);
    }

    .protondb-decky-indicator-bronze {
      background: rgb(205, 127, 50);
      color: #000000;
      outline-color: rgb(205, 127, 50);
    }

    .protondb-decky-indicator-borked {
      background: red;
      color: #000000;
      outline-color: red;
    }

    .protondb-decky-indicator-pending {
      background: rgb(68, 68, 68);
      color: #FFFFFF;
      outline-color: rgb(68, 68, 68);
    }

    .protondb-decky-indicator-regular {
      flex-direction: row;
      padding: 6px 18px;
    }

    .protondb-decky-indicator-regular > div {
      height: 28px;
    }

    .protondb-decky-indicator-regular > div > svg {
      width: 28px;
      height: 28px;
    }

    .protondb-decky-indicator-regular > span {
      margin-left: 10px;
      font-size: 24px;
      width: 132px;
      line-height: 24px;
      margin-right: 28px;
    }

    .protondb-decky-indicator-small {
      flex-direction: column;
      padding: 6px 8px;
    }

    .protondb-decky-indicator-small > div {
      height: 20px;
    }

    .protondb-decky-indicator-small > div > svg {
      width: 20px;
      height: 20px;
    }

    .protondb-decky-indicator-small > span {
      margin-left: 0;
      font-size: 12px;
      width: auto;
      line-height: 12px;
      margin-right: 0;
    }

    .protondb-decky-indicator-minimalist {
      padding: 6px;
    }

    .protondb-decky-indicator-minimalist > div {
      height: 20px;
    }

    .protondb-decky-indicator-minimalist > div > svg {
      width: 20px;
      height: 20px;
    }

    .protondb-decky-indicator-minimalist > span {
      display: none;
    }

    .protondb-decky-indicator-label-on-hover-small:hover,
    .protondb-decky-indicator-label-on-hover-small.gpfocus {
      flex-direction: column;
      padding: 6px 8px;
    }

    .protondb-decky-indicator-label-on-hover-regular:hover,
    .protondb-decky-indicator-label-on-hover-regular.gpfocus {
      flex-direction: row;
      padding: 6px 18px;
    }

    .protondb-decky-indicator-label-on-hover-small:hover > span,
    .protondb-decky-indicator-label-on-hover-small.gpfocus > span {
      display: block;
    }

    .protondb-decky-indicator-label-on-hover-regular:hover > div,
    .protondb-decky-indicator-label-on-hover-regular.gpfocus > div {
      height: 28px;
    }

    .protondb-decky-indicator-label-on-hover-regular:hover > div > svg,
    .protondb-decky-indicator-label-on-hover-regular.gpfocus > div > svg {
      width: 28px;
      height: 28px;
    }

    .protondb-decky-indicator-label-on-hover-regular:hover > span,
    .protondb-decky-indicator-label-on-hover-regular.gpfocus > span {
      display: block;
      margin-left: 10px;
      font-size: 24px;
      width: 132px;
      line-height: 24px;
      margin-right: 28px;
    }
`));

const DeckButton = Button;
const positonSettings = {
    tl: { top: '40px', left: '20px' },
    tr: { top: '60px', right: '20px' },
    bl: { bottom: '40px', left: '20px' },
    br: { bottom: '40px', right: '20px' }
};
function findTopCapsuleParent(ref) {
    const children = ref?.parentElement?.children;
    if (!children) {
        return null;
    }
    let headerContainer;
    for (const child of children) {
        if (child.className.includes(DFL.appDetailsClasses.Header)) {
            headerContainer = child;
            break;
        }
    }
    if (!headerContainer) {
        return null;
    }
    let topCapsule = null;
    for (const child of headerContainer.children) {
        if (child.className.includes(DFL.appDetailsHeaderClasses.TopCapsule)) {
            topCapsule = child;
            break;
        }
    }
    return topCapsule;
}
function ProtonMedal() {
    const t = useTranslations();
    const appId = useAppId();
    const { protonDBTier, linuxSupport, refresh } = useBadgeData(appId);
    const { settings, loading } = useSettings();
    // There will be no mutation when the page is loaded (either from exiting the game
    // or just newly opening the page), therefore it's visible by default.
    const [show, setShow] = SP_REACT.useState(true);
    const ref = SP_REACT.useRef(null);
    SP_REACT.useEffect(() => {
        const topCapsule = findTopCapsuleParent(ref?.current);
        if (!topCapsule) {
            console.error("TopCapsule container not found!");
            return;
        }
        const mutationObserver = new MutationObserver((entries) => {
            for (const entry of entries) {
                if (entry.type !== "attributes" || entry.attributeName !== "class") {
                    continue;
                }
                const className = entry.target.className;
                const fullscreenMode = className.includes(DFL.appDetailsHeaderClasses.FullscreenEnterStart) ||
                    className.includes(DFL.appDetailsHeaderClasses.FullscreenEnterActive) ||
                    className.includes(DFL.appDetailsHeaderClasses.FullscreenEnterDone) ||
                    className.includes(DFL.appDetailsHeaderClasses.FullscreenExitStart) ||
                    className.includes(DFL.appDetailsHeaderClasses.FullscreenExitActive);
                const fullscreenAborted = className.includes(DFL.appDetailsHeaderClasses.FullscreenExitDone);
                setShow(!fullscreenMode || fullscreenAborted);
            }
        });
        mutationObserver.observe(topCapsule, { attributes: true, attributeFilter: ["class"] });
        return () => {
            mutationObserver.disconnect();
        };
    }, []);
    const tierClass = `protondb-decky-indicator-${protonDBTier}`;
    const nativeClass = linuxSupport ? 'protondb-decky-indicator-native' : '';
    const sizeClass = `protondb-decky-indicator-${settings.size || 'regular'}`;
    const labelTypeOnHoverClass = settings.size !== 'minimalist' || settings.labelTypeOnHover === 'off'
        ? ''
        : `protondb-decky-indicator-label-on-hover-${settings.labelTypeOnHover}`;
    return (SP_REACT.createElement("div", { ref: ref, className: "protondb-decky-indicator-container", style: { position: 'absolute', ...positonSettings[settings.position] } }, protonDBTier && show && !loading &&
        SP_REACT.createElement(SP_REACT.Fragment, null,
            style,
            SP_REACT.createElement(DeckButton, { className: `protondb-decky-indicator ${tierClass} ${nativeClass} ${sizeClass} ${labelTypeOnHoverClass}`, type: "button", onClick: async () => {
                    refresh();
                    DFL.Navigation.NavigateToExternalWeb(`https://www.protondb.com/app/${appId}`);
                } },
                SP_REACT.createElement("div", null,
                    linuxSupport ? (SP_REACT.createElement(IoLogoTux, { style: { marginRight: 10 } })) : (SP_REACT.createElement(SP_REACT.Fragment, null)),
                    SP_REACT.createElement(FaReact, null)),
                SP_REACT.createElement("span", null, settings.size === 'small' ||
                    (settings.size === 'minimalist' &&
                        settings.labelTypeOnHover !== 'regular')
                    ? t(`tierMin${protonDBTier}`)
                    : t(`tier${protonDBTier}`))))));
}

function patchLibraryApp() {
    return routerHook.addPatch('/library/app/:appid', (tree) => {
        const routeProps = DFL.findInReactTree(tree, (x) => x?.renderFunc);
        if (routeProps) {
            const patchHandler = DFL.createReactTreePatcher([
                (tree) => DFL.findInReactTree(tree, (x) => x?.props?.children?.props?.overview)?.props?.children
            ], (_, ret) => {
                const container = DFL.findInReactTree(ret, (x) => Array.isArray(x?.props?.children) &&
                    x?.props?.className?.includes(DFL.appDetailsClasses.InnerContainer));
                if (typeof container !== 'object') {
                    return ret;
                }
                container.props.children.splice(1, 0, SP_REACT.createElement(ProtonMedal, null));
                return ret;
            });
            DFL.afterPatch(routeProps, "renderFunc", patchHandler);
        }
        return tree;
    });
}

var index = DFL.definePlugin(() => {
    loadSettings();
    const libraryPatch = patchLibraryApp();
    return {
        title: SP_REACT.createElement("div", { className: DFL.staticClasses.Title }, "ProtonDB Badges"),
        icon: SP_REACT.createElement(FaReact, null),
        content: SP_REACT.createElement(Index, null),
        onDismount() {
            routerHook.removePatch('/library/app/:appid', libraryPatch);
        }
    };
});

export { index as default };
//# sourceMappingURL=index.js.map
