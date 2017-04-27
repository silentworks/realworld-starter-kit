/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "differs", function() { return differs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatchObservers", function() { return dispatchObservers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fire", function() { return fire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observe", function() { return observe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observeDev", function() { return observeDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDev", function() { return onDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_flush", function() { return _flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proto", function() { return proto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "protoDev", function() { return protoDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendNode", function() { return appendNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertNode", function() { return insertNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detachNode", function() { return detachNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detachBetween", function() { return detachBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyEach", function() { return destroyEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSvgElement", function() { return createSvgElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createText", function() { return createText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComment", function() { return createComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventListener", function() { return addEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEventListener", function() { return removeEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttribute", function() { return setAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setXlinkAttribute", function() { return setXlinkAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBindingGroupValue", function() { return getBindingGroupValue; });
function appendNode ( node, target ) {
	target.appendChild( node );
}

function insertNode ( node, target, anchor ) {
	target.insertBefore( node, anchor );
}

function detachNode ( node ) {
	node.parentNode.removeChild( node );
}

function detachBetween ( before, after ) {
	while ( before.nextSibling && before.nextSibling !== after ) {
		before.parentNode.removeChild( before.nextSibling );
	}
}

function destroyEach ( iterations, detach, start ) {
	for ( var i = start; i < iterations.length; i += 1 ) {
		iterations[i].destroy( detach );
	}
}

function createElement ( name ) {
	return document.createElement( name );
}

function createSvgElement ( name ) {
	return document.createElementNS( 'http://www.w3.org/2000/svg', name );
}

function createText ( data ) {
	return document.createTextNode( data );
}

function createComment () {
	return document.createComment( '' );
}

function addEventListener ( node, event, handler ) {
	node.addEventListener( event, handler, false );
}

function removeEventListener ( node, event, handler ) {
	node.removeEventListener( event, handler, false );
}

function setAttribute ( node, attribute, value ) {
	node.setAttribute( attribute, value );
}

function setXlinkAttribute ( node, attribute, value ) {
	node.setAttributeNS( 'http://www.w3.org/1999/xlink', attribute, value );
}

function getBindingGroupValue ( group ) {
	var value = [];
	for ( var i = 0; i < group.length; i += 1 ) {
		if ( group[i].checked ) value.push( group[i].__value );
	}
	return value;
}

function noop () {}

function assign ( target ) {
	for ( var i = 1; i < arguments.length; i += 1 ) {
		var source = arguments[i];
		for ( var k in source ) target[k] = source[k];
	}

	return target;
}

function differs ( a, b ) {
	return ( a !== b ) || ( a && ( typeof a === 'object' ) || ( typeof a === 'function' ) );
}

function dispatchObservers ( component, group, newState, oldState ) {
	for ( var key in group ) {
		if ( !( key in newState ) ) continue;

		var newValue = newState[ key ];
		var oldValue = oldState[ key ];

		if ( differs( newValue, oldValue ) ) {
			var callbacks = group[ key ];
			if ( !callbacks ) continue;

			for ( var i = 0; i < callbacks.length; i += 1 ) {
				var callback = callbacks[i];
				if ( callback.__calling ) continue;

				callback.__calling = true;
				callback.call( component, newValue, oldValue );
				callback.__calling = false;
			}
		}
	}
}

function get ( key ) {
	return key ? this._state[ key ] : this._state;
}

function fire ( eventName, data ) {
	var handlers = eventName in this._handlers && this._handlers[ eventName ].slice();
	if ( !handlers ) return;

	for ( var i = 0; i < handlers.length; i += 1 ) {
		handlers[i].call( this, data );
	}
}

function observe ( key, callback, options ) {
	var group = ( options && options.defer ) ? this._observers.post : this._observers.pre;

	( group[ key ] || ( group[ key ] = [] ) ).push( callback );

	if ( !options || options.init !== false ) {
		callback.__calling = true;
		callback.call( this, this._state[ key ] );
		callback.__calling = false;
	}

	return {
		cancel: function () {
			var index = group[ key ].indexOf( callback );
			if ( ~index ) group[ key ].splice( index, 1 );
		}
	};
}

function observeDev ( key, callback, options ) {
	var c = ( key = '' + key ).search( /[^\w]/ );
	if ( c > -1 ) {
		var message = "The first argument to component.observe(...) must be the name of a top-level property";
		if ( c > 0 ) message += ", i.e. '" + key.slice( 0, c ) + "' rather than '" + key + "'";

		throw new Error( message );
	}

	return observe.call( this, key, callback, options );
}

function on ( eventName, handler ) {
	if ( eventName === 'teardown' ) return this.on( 'destroy', handler );

	var handlers = this._handlers[ eventName ] || ( this._handlers[ eventName ] = [] );
	handlers.push( handler );

	return {
		cancel: function () {
			var index = handlers.indexOf( handler );
			if ( ~index ) handlers.splice( index, 1 );
		}
	};
}

function onDev ( eventName, handler ) {
	if ( eventName === 'teardown' ) {
		console.warn( "Use component.on('destroy', ...) instead of component.on('teardown', ...) which has been deprecated and will be unsupported in Svelte 2" );
		return this.on( 'destroy', handler );
	}

	return on.call( this, eventName, handler );
}

function set ( newState ) {
	this._set( assign( {}, newState ) );
	( this._root || this )._flush();
}

function _flush () {
	if ( !this._renderHooks ) return;

	while ( this._renderHooks.length ) {
		var hook = this._renderHooks.pop();
		hook.fn.call( hook.context );
	}
}

var proto = {
	get: get,
	fire: fire,
	observe: observe,
	on: on,
	set: set,
	_flush: _flush
};

var protoDev = {
	get: get,
	fire: fire,
	observe: observeDev,
	on: onDev,
	set: set,
	_flush: _flush
};




/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var stripPrefix = exports.stripPrefix = function stripPrefix(path, prefix) {
  return path.indexOf(prefix) === 0 ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = exports.stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = exports.parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  pathname = decodeURI(pathname);

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = exports.createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;


  var path = encodeURI(pathname || '/');

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Navigation = __webpack_require__(10);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Feed = __webpack_require__(8);

var _Feed2 = _interopRequireDefault(_Feed);

var _Footer = __webpack_require__(9);

var _Footer2 = _interopRequireDefault(_Footer);

var _Settings = __webpack_require__(12);

var _Settings2 = _interopRequireDefault(_Settings);

var _Article = __webpack_require__(6);

var _Article2 = _interopRequireDefault(_Article);

var _CreateEditArticle = __webpack_require__(7);

var _CreateEditArticle2 = _interopRequireDefault(_CreateEditArticle);

var _Profile = __webpack_require__(11);

var _Profile2 = _interopRequireDefault(_Profile);

var _SignUp = __webpack_require__(13);

var _SignUp2 = _interopRequireDefault(_SignUp);

var _shared = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var template = function () {
	return {
		data: function data() {
			return {
				childview: 'feed'
			};
		}
	};
}();

function create_main_fragment(state, component) {
	var navigation = new _Navigation2.default({
		target: null,
		_root: component._root || component
	});

	var text = (0, _shared.createText)("\n\n  ");

	function get_block(state) {
		if (state.childview == 'signup') return create_if_block;
		if (state.childview == 'settings') return create_if_block_1;
		if (state.childview == 'create') return create_if_block_2;
		return create_if_block_3;
	}

	var current_block = get_block(state);
	var if_block = current_block && current_block(state, component);

	var text_1 = (0, _shared.createText)("\n\n");

	var footer = new _Footer2.default({
		target: null,
		_root: component._root || component
	});

	return {
		mount: function mount(target, anchor) {
			navigation._fragment.mount(target, anchor);
			(0, _shared.insertNode)(text, target, anchor);
			if (if_block) if_block.mount(target, null);
			(0, _shared.insertNode)(text_1, target, anchor);
			footer._fragment.mount(target, anchor);
		},

		update: function update(changed, state) {
			if (current_block !== (current_block = get_block(state))) {
				if (if_block) if_block.destroy(true);
				if_block = current_block && current_block(state, component);
				if (if_block) if_block.mount(text_1.parentNode, text_1);
			}
		},

		destroy: function destroy(detach) {
			navigation.destroy(detach);
			if (if_block) if_block.destroy(detach);
			footer.destroy(detach);

			if (detach) {
				(0, _shared.detachNode)(text);
				(0, _shared.detachNode)(text_1);
			}
		}
	};
}

function create_if_block(state, component) {
	var signup = new _SignUp2.default({
		target: null,
		_root: component._root || component
	});

	return {
		mount: function mount(target, anchor) {
			signup._fragment.mount(target, anchor);
		},

		destroy: function destroy(detach) {
			signup.destroy(detach);
		}
	};
}

function create_if_block_1(state, component) {
	var settings = new _Settings2.default({
		target: null,
		_root: component._root || component
	});

	return {
		mount: function mount(target, anchor) {
			settings._fragment.mount(target, anchor);
		},

		destroy: function destroy(detach) {
			settings.destroy(detach);
		}
	};
}

function create_if_block_2(state, component) {
	var createeditarticle = new _CreateEditArticle2.default({
		target: null,
		_root: component._root || component
	});

	return {
		mount: function mount(target, anchor) {
			createeditarticle._fragment.mount(target, anchor);
		},

		destroy: function destroy(detach) {
			createeditarticle.destroy(detach);
		}
	};
}

function create_if_block_3(state, component) {
	var feed = new _Feed2.default({
		target: null,
		_root: component._root || component
	});

	return {
		mount: function mount(target, anchor) {
			feed._fragment.mount(target, anchor);
		},

		destroy: function destroy(detach) {
			feed.destroy(detach);
		}
	};
}

function App(options) {
	options = options || {};
	this._state = (0, _shared.assign)(template.data(), options.data);

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root;
	this._yield = options._yield;

	this._torndown = false;
	this._renderHooks = [];

	this._fragment = create_main_fragment(this._state, this);
	if (options.target) this._fragment.mount(options.target, null);

	this._flush();
}

(0, _shared.assign)(App.prototype, _shared.proto);

App.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = (0, _shared.assign)({}, oldState, newState);
	(0, _shared.dispatchObservers)(this, this._observers.pre, newState, oldState);
	if (this._fragment) this._fragment.update(newState, this._state);
	(0, _shared.dispatchObservers)(this, this._observers.post, newState, oldState);

	this._flush();
};

App.prototype.teardown = App.prototype.destroy = function destroy(detach) {
	this.fire('destroy');

	this._fragment.destroy(detach !== false);
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

exports.default = App;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(3);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(18);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(16);

var _PathUtils = __webpack_require__(1);

var _createTransitionManager = __webpack_require__(17);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = (0, _DOMUtils.supportsHistory)();
  var needsHashChangeListener = !(0, _DOMUtils.supportsPopStateOnHashChange)();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;


    var path = pathname + search + hash;

    if (basename) path = (0, _PathUtils.stripPrefix)(path, basename);

    return _extends({}, (0, _PathUtils.parsePath)(path), {
      state: state,
      key: key
    });
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + (0, _PathUtils.createPath)(location);
  };

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createBrowserHistory;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _shared = __webpack_require__(0);

function create_main_fragment(state, component) {
	var div = (0, _shared.createElement)('div');
	div.className = "article-page";
	var div_1 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_1, div);
	div_1.className = "banner";
	var div_2 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_2, div_1);
	div_2.className = "container";
	var h1 = (0, _shared.createElement)('h1');
	(0, _shared.appendNode)(h1, div_2);
	(0, _shared.appendNode)((0, _shared.createText)("How to build webapps that scale"), h1);
	(0, _shared.appendNode)((0, _shared.createText)("\n      "), div_2);
	var div_3 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_3, div_2);
	div_3.className = "article-meta";
	var a = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a, div_3);
	a.href = '';
	var img = (0, _shared.createElement)('img');
	(0, _shared.appendNode)(img, a);
	img.src = "http://i.imgur.com/Qr71crq.jpg";
	(0, _shared.appendNode)((0, _shared.createText)("\n        "), div_3);
	var div_4 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_4, div_3);
	div_4.className = "info";
	var a_1 = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a_1, div_4);
	a_1.href = '';
	a_1.className = "author";
	(0, _shared.appendNode)((0, _shared.createText)("Eric Simons"), a_1);
	(0, _shared.appendNode)((0, _shared.createText)("\n          "), div_4);
	var span = (0, _shared.createElement)('span');
	(0, _shared.appendNode)(span, div_4);
	span.className = "date";
	(0, _shared.appendNode)((0, _shared.createText)("January 20th"), span);
	(0, _shared.appendNode)((0, _shared.createText)("\n        "), div_3);
	var button = (0, _shared.createElement)('button');
	(0, _shared.appendNode)(button, div_3);
	button.className = "btn btn-sm btn-outline-secondary";
	var i = (0, _shared.createElement)('i');
	(0, _shared.appendNode)(i, button);
	i.className = "ion-plus-round";
	(0, _shared.appendNode)((0, _shared.createText)("\n           \n          Follow Eric Simons "), button);
	var span_1 = (0, _shared.createElement)('span');
	(0, _shared.appendNode)(span_1, button);
	span_1.className = "counter";
	(0, _shared.appendNode)((0, _shared.createText)("(10)"), span_1);
	(0, _shared.appendNode)((0, _shared.createText)("\n          \n        "), div_3);
	var button_1 = (0, _shared.createElement)('button');
	(0, _shared.appendNode)(button_1, div_3);
	button_1.className = "btn btn-sm btn-outline-primary";
	var i_1 = (0, _shared.createElement)('i');
	(0, _shared.appendNode)(i_1, button_1);
	i_1.className = "ion-heart";
	(0, _shared.appendNode)((0, _shared.createText)("\n           \n          Favorite Post "), button_1);
	var span_2 = (0, _shared.createElement)('span');
	(0, _shared.appendNode)(span_2, button_1);
	span_2.className = "counter";
	(0, _shared.appendNode)((0, _shared.createText)("(29)"), span_2);
	(0, _shared.appendNode)((0, _shared.createText)("\n\n  "), div);
	var div_5 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_5, div);
	div_5.className = "container page";
	var div_6 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_6, div_5);
	div_6.className = "row article-content";
	var div_7 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_7, div_6);
	div_7.className = "col-md-12";
	var p = (0, _shared.createElement)('p');
	(0, _shared.appendNode)(p, div_7);
	(0, _shared.appendNode)((0, _shared.createText)("Web development technologies have evolved at an incredible clip over the past few years."), p);
	(0, _shared.appendNode)((0, _shared.createText)("\n        "), div_7);
	var h2 = (0, _shared.createElement)('h2');
	(0, _shared.appendNode)(h2, div_7);
	h2.id = "introducing-ionic";
	(0, _shared.appendNode)((0, _shared.createText)("Introducing RealWorld."), h2);
	(0, _shared.appendNode)((0, _shared.createText)("\n        "), div_7);
	var p_1 = (0, _shared.createElement)('p');
	(0, _shared.appendNode)(p_1, div_7);
	(0, _shared.appendNode)((0, _shared.createText)("It's a great solution for learning how other frameworks work."), p_1);
	(0, _shared.appendNode)((0, _shared.createText)("\n\n    "), div_5);
	var hr = (0, _shared.createElement)('hr');
	(0, _shared.appendNode)(hr, div_5);
	(0, _shared.appendNode)((0, _shared.createText)("\n\n    "), div_5);
	var div_8 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_8, div_5);
	div_8.className = "article-actions";
	var div_9 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_9, div_8);
	div_9.className = "article-meta";
	var a_2 = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a_2, div_9);
	a_2.href = "profile.html";
	var img_1 = (0, _shared.createElement)('img');
	(0, _shared.appendNode)(img_1, a_2);
	img_1.src = "http://i.imgur.com/Qr71crq.jpg";
	(0, _shared.appendNode)((0, _shared.createText)("\n        "), div_9);
	var div_10 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_10, div_9);
	div_10.className = "info";
	var a_3 = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a_3, div_10);
	a_3.href = '';
	a_3.className = "author";
	(0, _shared.appendNode)((0, _shared.createText)("Eric Simons"), a_3);
	(0, _shared.appendNode)((0, _shared.createText)("\n          "), div_10);
	var span_3 = (0, _shared.createElement)('span');
	(0, _shared.appendNode)(span_3, div_10);
	span_3.className = "date";
	(0, _shared.appendNode)((0, _shared.createText)("January 20th"), span_3);
	(0, _shared.appendNode)((0, _shared.createText)("\n\n        "), div_9);
	var button_2 = (0, _shared.createElement)('button');
	(0, _shared.appendNode)(button_2, div_9);
	button_2.className = "btn btn-sm btn-outline-secondary";
	var i_2 = (0, _shared.createElement)('i');
	(0, _shared.appendNode)(i_2, button_2);
	i_2.className = "ion-plus-round";
	(0, _shared.appendNode)((0, _shared.createText)("\n           \n          Follow Eric Simons "), button_2);
	var span_4 = (0, _shared.createElement)('span');
	(0, _shared.appendNode)(span_4, button_2);
	span_4.className = "counter";
	(0, _shared.appendNode)((0, _shared.createText)("(10)"), span_4);
	(0, _shared.appendNode)((0, _shared.createText)("\n         \n        "), div_9);
	var button_3 = (0, _shared.createElement)('button');
	(0, _shared.appendNode)(button_3, div_9);
	button_3.className = "btn btn-sm btn-outline-primary";
	var i_3 = (0, _shared.createElement)('i');
	(0, _shared.appendNode)(i_3, button_3);
	i_3.className = "ion-heart";
	(0, _shared.appendNode)((0, _shared.createText)("\n           \n          Favorite Post "), button_3);
	var span_5 = (0, _shared.createElement)('span');
	(0, _shared.appendNode)(span_5, button_3);
	span_5.className = "counter";
	(0, _shared.appendNode)((0, _shared.createText)("(29)"), span_5);
	(0, _shared.appendNode)((0, _shared.createText)("\n\n    "), div_5);
	var div_11 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_11, div_5);
	div_11.className = "row";
	var div_12 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_12, div_11);
	div_12.className = "col-xs-12 col-md-8 offset-md-2";
	var form = (0, _shared.createElement)('form');
	(0, _shared.appendNode)(form, div_12);
	form.className = "card comment-form";
	var div_13 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_13, form);
	div_13.className = "card-block";
	var textarea = (0, _shared.createElement)('textarea');
	(0, _shared.appendNode)(textarea, div_13);
	textarea.className = "form-control";
	textarea.placeholder = "Write a comment...";
	textarea.rows = "3";
	(0, _shared.appendNode)((0, _shared.createText)("\n          "), form);
	var div_14 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_14, form);
	div_14.className = "card-footer";
	var img_2 = (0, _shared.createElement)('img');
	(0, _shared.appendNode)(img_2, div_14);
	img_2.src = "http://i.imgur.com/Qr71crq.jpg";
	img_2.className = "comment-author-img";
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), div_14);
	var button_4 = (0, _shared.createElement)('button');
	(0, _shared.appendNode)(button_4, div_14);
	button_4.className = "btn btn-sm btn-primary";
	(0, _shared.appendNode)((0, _shared.createText)("Post Comment"), button_4);
	(0, _shared.appendNode)((0, _shared.createText)("\n\n        "), div_12);
	var div_15 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_15, div_12);
	div_15.className = "card";
	var div_16 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_16, div_15);
	div_16.className = "card-block";
	var p_2 = (0, _shared.createElement)('p');
	(0, _shared.appendNode)(p_2, div_16);
	p_2.className = "card-text";
	(0, _shared.appendNode)((0, _shared.createText)("With supporting text below as a natural lead-in to additional content."), p_2);
	(0, _shared.appendNode)((0, _shared.createText)("\n          "), div_15);
	var div_17 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_17, div_15);
	div_17.className = "card-footer";
	var a_4 = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a_4, div_17);
	a_4.href = '';
	a_4.className = "comment-author";
	var img_3 = (0, _shared.createElement)('img');
	(0, _shared.appendNode)(img_3, a_4);
	img_3.src = "http://i.imgur.com/Qr71crq.jpg";
	img_3.className = "comment-author-img";
	(0, _shared.appendNode)((0, _shared.createText)("\n             \n            "), div_17);
	var a_5 = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a_5, div_17);
	a_5.href = '';
	a_5.className = "comment-author";
	(0, _shared.appendNode)((0, _shared.createText)("Jacob Schmidt"), a_5);
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), div_17);
	var span_6 = (0, _shared.createElement)('span');
	(0, _shared.appendNode)(span_6, div_17);
	span_6.className = "date-posted";
	(0, _shared.appendNode)((0, _shared.createText)("Dec 29th"), span_6);
	(0, _shared.appendNode)((0, _shared.createText)("\n\n        "), div_12);
	var div_18 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_18, div_12);
	div_18.className = "card";
	var div_19 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_19, div_18);
	div_19.className = "card-block";
	var p_3 = (0, _shared.createElement)('p');
	(0, _shared.appendNode)(p_3, div_19);
	p_3.className = "card-text";
	(0, _shared.appendNode)((0, _shared.createText)("With supporting text below as a natural lead-in to additional content."), p_3);
	(0, _shared.appendNode)((0, _shared.createText)("\n          "), div_18);
	var div_20 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_20, div_18);
	div_20.className = "card-footer";
	var a_6 = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a_6, div_20);
	a_6.href = '';
	a_6.className = "comment-author";
	var img_4 = (0, _shared.createElement)('img');
	(0, _shared.appendNode)(img_4, a_6);
	img_4.src = "http://i.imgur.com/Qr71crq.jpg";
	img_4.className = "comment-author-img";
	(0, _shared.appendNode)((0, _shared.createText)("\n             \n            "), div_20);
	var a_7 = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a_7, div_20);
	a_7.href = '';
	a_7.className = "comment-author";
	(0, _shared.appendNode)((0, _shared.createText)("Jacob Schmidt"), a_7);
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), div_20);
	var span_7 = (0, _shared.createElement)('span');
	(0, _shared.appendNode)(span_7, div_20);
	span_7.className = "date-posted";
	(0, _shared.appendNode)((0, _shared.createText)("Dec 29th"), span_7);
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), div_20);
	var span_8 = (0, _shared.createElement)('span');
	(0, _shared.appendNode)(span_8, div_20);
	span_8.className = "mod-options";
	var i_4 = (0, _shared.createElement)('i');
	(0, _shared.appendNode)(i_4, span_8);
	i_4.className = "ion-edit";
	(0, _shared.appendNode)((0, _shared.createText)("\n              "), span_8);
	var i_5 = (0, _shared.createElement)('i');
	(0, _shared.appendNode)(i_5, span_8);
	i_5.className = "ion-trash-a";

	return {
		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);
		},

		destroy: function destroy(detach) {
			if (detach) {
				(0, _shared.detachNode)(div);
			}
		}
	};
}

function Article(options) {
	options = options || {};
	this._state = options.data || {};

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root;
	this._yield = options._yield;

	this._torndown = false;

	this._fragment = create_main_fragment(this._state, this);
	if (options.target) this._fragment.mount(options.target, null);
}

(0, _shared.assign)(Article.prototype, _shared.proto);

Article.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = (0, _shared.assign)({}, oldState, newState);
	(0, _shared.dispatchObservers)(this, this._observers.pre, newState, oldState);
	(0, _shared.dispatchObservers)(this, this._observers.post, newState, oldState);
};

Article.prototype.teardown = Article.prototype.destroy = function destroy(detach) {
	this.fire('destroy');

	this._fragment.destroy(detach !== false);
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

exports.default = Article;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _shared = __webpack_require__(0);

function create_main_fragment(state, component) {
	var div = (0, _shared.createElement)('div');
	div.className = "editor-page";
	var div_1 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_1, div);
	div_1.className = "container page";
	var div_2 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_2, div_1);
	div_2.className = "row";
	var div_3 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_3, div_2);
	div_3.className = "col-md-10 offset-md-1 col-xs-12";
	var form = (0, _shared.createElement)('form');
	(0, _shared.appendNode)(form, div_3);
	var fieldset = (0, _shared.createElement)('fieldset');
	(0, _shared.appendNode)(fieldset, form);
	var fieldset_1 = (0, _shared.createElement)('fieldset');
	(0, _shared.appendNode)(fieldset_1, fieldset);
	fieldset_1.className = "form-group";
	var input = (0, _shared.createElement)('input');
	(0, _shared.appendNode)(input, fieldset_1);
	input.type = "text";
	input.className = "form-control form-control-lg";
	input.placeholder = "Article Title";
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), fieldset);
	var fieldset_2 = (0, _shared.createElement)('fieldset');
	(0, _shared.appendNode)(fieldset_2, fieldset);
	fieldset_2.className = "form-group";
	var input_1 = (0, _shared.createElement)('input');
	(0, _shared.appendNode)(input_1, fieldset_2);
	input_1.type = "text";
	input_1.className = "form-control";
	input_1.placeholder = "What's this article about?";
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), fieldset);
	var fieldset_3 = (0, _shared.createElement)('fieldset');
	(0, _shared.appendNode)(fieldset_3, fieldset);
	fieldset_3.className = "form-group";
	var textarea = (0, _shared.createElement)('textarea');
	(0, _shared.appendNode)(textarea, fieldset_3);
	textarea.className = "form-control";
	textarea.rows = "8";
	textarea.placeholder = "Write your article (in markdown)";
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), fieldset);
	var fieldset_4 = (0, _shared.createElement)('fieldset');
	(0, _shared.appendNode)(fieldset_4, fieldset);
	fieldset_4.className = "form-group";
	var input_2 = (0, _shared.createElement)('input');
	(0, _shared.appendNode)(input_2, fieldset_4);
	input_2.type = "text";
	input_2.className = "form-control";
	input_2.placeholder = "Enter tags";
	var div_4 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_4, fieldset_4);
	div_4.className = "tag-list";
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), fieldset);
	var button = (0, _shared.createElement)('button');
	(0, _shared.appendNode)(button, fieldset);
	button.className = "btn btn-lg pull-xs-right btn-primary";
	button.type = "button";
	(0, _shared.appendNode)((0, _shared.createText)("Publish Article"), button);

	return {
		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);
		},

		destroy: function destroy(detach) {
			if (detach) {
				(0, _shared.detachNode)(div);
			}
		}
	};
}

function CreateEditArticle(options) {
	options = options || {};
	this._state = options.data || {};

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root;
	this._yield = options._yield;

	this._torndown = false;

	this._fragment = create_main_fragment(this._state, this);
	if (options.target) this._fragment.mount(options.target, null);
}

(0, _shared.assign)(CreateEditArticle.prototype, _shared.proto);

CreateEditArticle.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = (0, _shared.assign)({}, oldState, newState);
	(0, _shared.dispatchObservers)(this, this._observers.pre, newState, oldState);
	(0, _shared.dispatchObservers)(this, this._observers.post, newState, oldState);
};

CreateEditArticle.prototype.teardown = CreateEditArticle.prototype.destroy = function destroy(detach) {
	this.fire('destroy');

	this._fragment.destroy(detach !== false);
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

exports.default = CreateEditArticle;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _shared = __webpack_require__(0);

function create_main_fragment(state, component) {
	var div = (0, _shared.createElement)('div');
	div.className = "home-page";
	var div_1 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_1, div);
	div_1.className = "banner";
	var div_2 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_2, div_1);
	div_2.className = "container";
	var h1 = (0, _shared.createElement)('h1');
	(0, _shared.appendNode)(h1, div_2);
	h1.className = "logo-font";
	(0, _shared.appendNode)((0, _shared.createText)("conduit"), h1);
	(0, _shared.appendNode)((0, _shared.createText)("\n      "), div_2);
	var p = (0, _shared.createElement)('p');
	(0, _shared.appendNode)(p, div_2);
	(0, _shared.appendNode)((0, _shared.createText)("A place to share your knowledge."), p);
	(0, _shared.appendNode)((0, _shared.createText)("\n\n  "), div);
	var div_3 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_3, div);
	div_3.className = "container page";
	var div_4 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_4, div_3);
	div_4.className = "row";
	var div_5 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_5, div_4);
	div_5.className = "col-md-9";
	var div_6 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_6, div_5);
	div_6.className = "feed-toggle";
	var ul = (0, _shared.createElement)('ul');
	(0, _shared.appendNode)(ul, div_6);
	ul.className = "nav nav-pills outline-active";
	var li = (0, _shared.createElement)('li');
	(0, _shared.appendNode)(li, ul);
	li.className = "nav-item";
	var a = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a, li);
	a.className = "nav-link disabled";
	a.href = '';
	(0, _shared.appendNode)((0, _shared.createText)("Your Feed"), a);
	var li_1 = (0, _shared.createElement)('li');
	(0, _shared.appendNode)(li_1, ul);
	li_1.className = "nav-item";
	var a_1 = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a_1, li_1);
	a_1.className = "nav-link active";
	a_1.href = '';
	(0, _shared.appendNode)((0, _shared.createText)("Global Feed"), a_1);
	(0, _shared.appendNode)((0, _shared.createText)("\n\n        "), div_5);
	var div_7 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_7, div_5);
	div_7.className = "article-preview";
	var div_8 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_8, div_7);
	div_8.className = "article-meta";
	var a_2 = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a_2, div_8);
	a_2.href = "profile.html";
	var img = (0, _shared.createElement)('img');
	(0, _shared.appendNode)(img, a_2);
	img.src = "http://i.imgur.com/Qr71crq.jpg";
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), div_8);
	var div_9 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_9, div_8);
	div_9.className = "info";
	var a_3 = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a_3, div_9);
	a_3.href = '';
	a_3.className = "author";
	(0, _shared.appendNode)((0, _shared.createText)("Eric Simons"), a_3);
	(0, _shared.appendNode)((0, _shared.createText)("\n              "), div_9);
	var span = (0, _shared.createElement)('span');
	(0, _shared.appendNode)(span, div_9);
	span.className = "date";
	(0, _shared.appendNode)((0, _shared.createText)("January 20th"), span);
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), div_8);
	var button = (0, _shared.createElement)('button');
	(0, _shared.appendNode)(button, div_8);
	button.className = "btn btn-outline-primary btn-sm pull-xs-right";
	var i = (0, _shared.createElement)('i');
	(0, _shared.appendNode)(i, button);
	i.className = "ion-heart";
	(0, _shared.appendNode)((0, _shared.createText)(" 29"), button);
	(0, _shared.appendNode)((0, _shared.createText)("\n          "), div_7);
	var a_4 = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a_4, div_7);
	a_4.href = '';
	a_4.className = "preview-link";
	var h1_1 = (0, _shared.createElement)('h1');
	(0, _shared.appendNode)(h1_1, a_4);
	(0, _shared.appendNode)((0, _shared.createText)("How to build webapps that scale"), h1_1);
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), a_4);
	var p_1 = (0, _shared.createElement)('p');
	(0, _shared.appendNode)(p_1, a_4);
	(0, _shared.appendNode)((0, _shared.createText)("This is the description for the post."), p_1);
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), a_4);
	var span_1 = (0, _shared.createElement)('span');
	(0, _shared.appendNode)(span_1, a_4);
	(0, _shared.appendNode)((0, _shared.createText)("Read more..."), span_1);
	(0, _shared.appendNode)((0, _shared.createText)("\n\n        "), div_5);
	var div_10 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_10, div_5);
	div_10.className = "article-preview";
	var div_11 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_11, div_10);
	div_11.className = "article-meta";
	var a_5 = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a_5, div_11);
	a_5.href = "profile.html";
	var img_1 = (0, _shared.createElement)('img');
	(0, _shared.appendNode)(img_1, a_5);
	img_1.src = "http://i.imgur.com/N4VcUeJ.jpg";
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), div_11);
	var div_12 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_12, div_11);
	div_12.className = "info";
	var a_6 = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a_6, div_12);
	a_6.href = '';
	a_6.className = "author";
	(0, _shared.appendNode)((0, _shared.createText)("Albert Pai"), a_6);
	(0, _shared.appendNode)((0, _shared.createText)("\n              "), div_12);
	var span_2 = (0, _shared.createElement)('span');
	(0, _shared.appendNode)(span_2, div_12);
	span_2.className = "date";
	(0, _shared.appendNode)((0, _shared.createText)("January 20th"), span_2);
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), div_11);
	var button_1 = (0, _shared.createElement)('button');
	(0, _shared.appendNode)(button_1, div_11);
	button_1.className = "btn btn-outline-primary btn-sm pull-xs-right";
	var i_1 = (0, _shared.createElement)('i');
	(0, _shared.appendNode)(i_1, button_1);
	i_1.className = "ion-heart";
	(0, _shared.appendNode)((0, _shared.createText)(" 32"), button_1);
	(0, _shared.appendNode)((0, _shared.createText)("\n          "), div_10);
	var a_7 = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a_7, div_10);
	a_7.href = '';
	a_7.className = "preview-link";
	var h1_2 = (0, _shared.createElement)('h1');
	(0, _shared.appendNode)(h1_2, a_7);
	(0, _shared.appendNode)((0, _shared.createText)("The song you won't ever stop singing. No matter how hard you try."), h1_2);
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), a_7);
	var p_2 = (0, _shared.createElement)('p');
	(0, _shared.appendNode)(p_2, a_7);
	(0, _shared.appendNode)((0, _shared.createText)("This is the description for the post."), p_2);
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), a_7);
	var span_3 = (0, _shared.createElement)('span');
	(0, _shared.appendNode)(span_3, a_7);
	(0, _shared.appendNode)((0, _shared.createText)("Read more..."), span_3);
	(0, _shared.appendNode)((0, _shared.createText)("\n\n      "), div_4);
	var div_13 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_13, div_4);
	div_13.className = "col-md-3";
	var div_14 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_14, div_13);
	div_14.className = "sidebar";
	var p_3 = (0, _shared.createElement)('p');
	(0, _shared.appendNode)(p_3, div_14);
	(0, _shared.appendNode)((0, _shared.createText)("Popular Tags"), p_3);
	(0, _shared.appendNode)((0, _shared.createText)("\n\n          "), div_14);
	var div_15 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_15, div_14);
	div_15.className = "tag-list";
	var a_8 = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a_8, div_15);
	a_8.href = '';
	a_8.className = "tag-pill tag-default";
	(0, _shared.appendNode)((0, _shared.createText)("programming"), a_8);
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), div_15);
	var a_9 = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a_9, div_15);
	a_9.href = '';
	a_9.className = "tag-pill tag-default";
	(0, _shared.appendNode)((0, _shared.createText)("javascript"), a_9);
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), div_15);
	var a_10 = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a_10, div_15);
	a_10.href = '';
	a_10.className = "tag-pill tag-default";
	(0, _shared.appendNode)((0, _shared.createText)("emberjs"), a_10);
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), div_15);
	var a_11 = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a_11, div_15);
	a_11.href = '';
	a_11.className = "tag-pill tag-default";
	(0, _shared.appendNode)((0, _shared.createText)("angularjs"), a_11);
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), div_15);
	var a_12 = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a_12, div_15);
	a_12.href = '';
	a_12.className = "tag-pill tag-default";
	(0, _shared.appendNode)((0, _shared.createText)("react"), a_12);
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), div_15);
	var a_13 = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a_13, div_15);
	a_13.href = '';
	a_13.className = "tag-pill tag-default";
	(0, _shared.appendNode)((0, _shared.createText)("mean"), a_13);
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), div_15);
	var a_14 = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a_14, div_15);
	a_14.href = '';
	a_14.className = "tag-pill tag-default";
	(0, _shared.appendNode)((0, _shared.createText)("node"), a_14);
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), div_15);
	var a_15 = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a_15, div_15);
	a_15.href = '';
	a_15.className = "tag-pill tag-default";
	(0, _shared.appendNode)((0, _shared.createText)("rails"), a_15);

	return {
		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);
		},

		destroy: function destroy(detach) {
			if (detach) {
				(0, _shared.detachNode)(div);
			}
		}
	};
}

function Feed(options) {
	options = options || {};
	this._state = options.data || {};

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root;
	this._yield = options._yield;

	this._torndown = false;

	this._fragment = create_main_fragment(this._state, this);
	if (options.target) this._fragment.mount(options.target, null);
}

(0, _shared.assign)(Feed.prototype, _shared.proto);

Feed.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = (0, _shared.assign)({}, oldState, newState);
	(0, _shared.dispatchObservers)(this, this._observers.pre, newState, oldState);
	(0, _shared.dispatchObservers)(this, this._observers.post, newState, oldState);
};

Feed.prototype.teardown = Feed.prototype.destroy = function destroy(detach) {
	this.fire('destroy');

	this._fragment.destroy(detach !== false);
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

exports.default = Feed;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _shared = __webpack_require__(0);

function create_main_fragment(state, component) {
	var footer = (0, _shared.createElement)('footer');
	var div = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div, footer);
	div.className = "container";
	var a = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a, div);
	a.href = "/";
	a.className = "logo-font";
	(0, _shared.appendNode)((0, _shared.createText)("conduit"), a);
	(0, _shared.appendNode)((0, _shared.createText)("\n    "), div);
	var span = (0, _shared.createElement)('span');
	(0, _shared.appendNode)(span, div);
	span.className = "attribution";
	(0, _shared.appendNode)((0, _shared.createText)("An interactive learning project from "), span);
	var a_1 = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a_1, span);
	a_1.href = "https://thinkster.io";
	(0, _shared.appendNode)((0, _shared.createText)("Thinkster"), a_1);
	(0, _shared.appendNode)((0, _shared.createText)(". Code & design licensed under MIT."), span);

	return {
		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(footer, target, anchor);
		},

		destroy: function destroy(detach) {
			if (detach) {
				(0, _shared.detachNode)(footer);
			}
		}
	};
}

function Footer(options) {
	options = options || {};
	this._state = options.data || {};

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root;
	this._yield = options._yield;

	this._torndown = false;

	this._fragment = create_main_fragment(this._state, this);
	if (options.target) this._fragment.mount(options.target, null);
}

(0, _shared.assign)(Footer.prototype, _shared.proto);

Footer.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = (0, _shared.assign)({}, oldState, newState);
	(0, _shared.dispatchObservers)(this, this._observers.pre, newState, oldState);
	(0, _shared.dispatchObservers)(this, this._observers.post, newState, oldState);
};

Footer.prototype.teardown = Footer.prototype.destroy = function destroy(detach) {
	this.fire('destroy');

	this._fragment.destroy(detach !== false);
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

exports.default = Footer;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _shared = __webpack_require__(0);

function create_main_fragment(state, component) {
	var nav = (0, _shared.createElement)('nav');
	nav.className = "navbar navbar-light";
	var div = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div, nav);
	div.className = "container";
	var a = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a, div);
	a.className = "navbar-brand";
	a.href = "index.html";
	(0, _shared.appendNode)((0, _shared.createText)("conduit"), a);
	(0, _shared.appendNode)((0, _shared.createText)("\n    "), div);
	var ul = (0, _shared.createElement)('ul');
	(0, _shared.appendNode)(ul, div);
	ul.className = "nav navbar-nav pull-xs-right";
	var li = (0, _shared.createElement)('li');
	(0, _shared.appendNode)(li, ul);
	li.className = "nav-item active";
	var a_1 = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a_1, li);
	a_1.className = "nav-link";
	a_1.href = "#/";
	(0, _shared.appendNode)((0, _shared.createText)("Home"), a_1);
	var li_1 = (0, _shared.createElement)('li');
	(0, _shared.appendNode)(li_1, ul);
	li_1.className = "nav-item";
	var a_2 = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a_2, li_1);
	a_2.className = "nav-link";
	a_2.href = "#/create";
	var i = (0, _shared.createElement)('i');
	(0, _shared.appendNode)(i, a_2);
	i.className = "ion-compose";
	(0, _shared.appendNode)((0, _shared.createText)(" New Post"), a_2);
	var li_2 = (0, _shared.createElement)('li');
	(0, _shared.appendNode)(li_2, ul);
	li_2.className = "nav-item";
	var a_3 = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a_3, li_2);
	a_3.className = "nav-link";
	a_3.href = "#/settings";
	var i_1 = (0, _shared.createElement)('i');
	(0, _shared.appendNode)(i_1, a_3);
	i_1.className = "ion-gear-a";
	(0, _shared.appendNode)((0, _shared.createText)(" Settings"), a_3);
	var li_3 = (0, _shared.createElement)('li');
	(0, _shared.appendNode)(li_3, ul);
	li_3.className = "nav-item";
	var a_4 = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a_4, li_3);
	a_4.className = "nav-link";
	a_4.href = "#/signup";
	(0, _shared.appendNode)((0, _shared.createText)("Sign up"), a_4);

	return {
		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(nav, target, anchor);
		},

		destroy: function destroy(detach) {
			if (detach) {
				(0, _shared.detachNode)(nav);
			}
		}
	};
}

function Navigation(options) {
	options = options || {};
	this._state = options.data || {};

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root;
	this._yield = options._yield;

	this._torndown = false;

	this._fragment = create_main_fragment(this._state, this);
	if (options.target) this._fragment.mount(options.target, null);
}

(0, _shared.assign)(Navigation.prototype, _shared.proto);

Navigation.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = (0, _shared.assign)({}, oldState, newState);
	(0, _shared.dispatchObservers)(this, this._observers.pre, newState, oldState);
	(0, _shared.dispatchObservers)(this, this._observers.post, newState, oldState);
};

Navigation.prototype.teardown = Navigation.prototype.destroy = function destroy(detach) {
	this.fire('destroy');

	this._fragment.destroy(detach !== false);
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

exports.default = Navigation;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _shared = __webpack_require__(0);

function create_main_fragment(state, component) {
	var div = (0, _shared.createElement)('div');
	div.className = "profile-page";
	var div_1 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_1, div);
	div_1.className = "user-info";
	var div_2 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_2, div_1);
	div_2.className = "container";
	var div_3 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_3, div_2);
	div_3.className = "row";
	var div_4 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_4, div_3);
	div_4.className = "col-xs-12 col-md-10 offset-md-1";
	var img = (0, _shared.createElement)('img');
	(0, _shared.appendNode)(img, div_4);
	img.src = "http://i.imgur.com/Qr71crq.jpg";
	img.className = "user-img";
	(0, _shared.appendNode)((0, _shared.createText)("\n          "), div_4);
	var h4 = (0, _shared.createElement)('h4');
	(0, _shared.appendNode)(h4, div_4);
	(0, _shared.appendNode)((0, _shared.createText)("Eric Simons"), h4);
	(0, _shared.appendNode)((0, _shared.createText)("\n          "), div_4);
	var p = (0, _shared.createElement)('p');
	(0, _shared.appendNode)(p, div_4);
	(0, _shared.appendNode)((0, _shared.createText)("Cofounder @GoThinkster, lived in Aol's HQ for a few months, kinda looks like Peeta from the Hunger Games"), p);
	(0, _shared.appendNode)((0, _shared.createText)("\n          "), div_4);
	var button = (0, _shared.createElement)('button');
	(0, _shared.appendNode)(button, div_4);
	button.className = "btn btn-sm btn-outline-secondary action-btn";
	var i = (0, _shared.createElement)('i');
	(0, _shared.appendNode)(i, button);
	i.className = "ion-plus-round";
	(0, _shared.appendNode)((0, _shared.createText)("\n             \n            Follow Eric Simons "), button);
	var span = (0, _shared.createElement)('span');
	(0, _shared.appendNode)(span, button);
	span.className = "counter";
	(0, _shared.appendNode)((0, _shared.createText)("(10)"), span);
	(0, _shared.appendNode)((0, _shared.createText)("\n\n  "), div);
	var div_5 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_5, div);
	div_5.className = "container";
	var div_6 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_6, div_5);
	div_6.className = "row";
	var div_7 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_7, div_6);
	div_7.className = "col-xs-12 col-md-10 offset-md-1";
	var div_8 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_8, div_7);
	div_8.className = "articles-toggle";
	var ul = (0, _shared.createElement)('ul');
	(0, _shared.appendNode)(ul, div_8);
	ul.className = "nav nav-pills outline-active";
	var li = (0, _shared.createElement)('li');
	(0, _shared.appendNode)(li, ul);
	li.className = "nav-item";
	var a = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a, li);
	a.className = "nav-link active";
	a.href = '';
	(0, _shared.appendNode)((0, _shared.createText)("My Posts"), a);
	var li_1 = (0, _shared.createElement)('li');
	(0, _shared.appendNode)(li_1, ul);
	li_1.className = "nav-item";
	var a_1 = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a_1, li_1);
	a_1.className = "nav-link";
	a_1.href = '';
	(0, _shared.appendNode)((0, _shared.createText)("Favorited Posts"), a_1);
	(0, _shared.appendNode)((0, _shared.createText)("\n\n        "), div_7);
	var div_9 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_9, div_7);
	div_9.className = "article-preview";
	var div_10 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_10, div_9);
	div_10.className = "article-meta";
	var a_2 = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a_2, div_10);
	a_2.href = '';
	var img_1 = (0, _shared.createElement)('img');
	(0, _shared.appendNode)(img_1, a_2);
	img_1.src = "http://i.imgur.com/Qr71crq.jpg";
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), div_10);
	var div_11 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_11, div_10);
	div_11.className = "info";
	var a_3 = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a_3, div_11);
	a_3.href = '';
	a_3.className = "author";
	(0, _shared.appendNode)((0, _shared.createText)("Eric Simons"), a_3);
	(0, _shared.appendNode)((0, _shared.createText)("\n              "), div_11);
	var span_1 = (0, _shared.createElement)('span');
	(0, _shared.appendNode)(span_1, div_11);
	span_1.className = "date";
	(0, _shared.appendNode)((0, _shared.createText)("January 20th"), span_1);
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), div_10);
	var button_1 = (0, _shared.createElement)('button');
	(0, _shared.appendNode)(button_1, div_10);
	button_1.className = "btn btn-outline-primary btn-sm pull-xs-right";
	var i_1 = (0, _shared.createElement)('i');
	(0, _shared.appendNode)(i_1, button_1);
	i_1.className = "ion-heart";
	(0, _shared.appendNode)((0, _shared.createText)(" 29"), button_1);
	(0, _shared.appendNode)((0, _shared.createText)("\n          "), div_9);
	var a_4 = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a_4, div_9);
	a_4.href = '';
	a_4.className = "preview-link";
	var h1 = (0, _shared.createElement)('h1');
	(0, _shared.appendNode)(h1, a_4);
	(0, _shared.appendNode)((0, _shared.createText)("How to build webapps that scale"), h1);
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), a_4);
	var p_1 = (0, _shared.createElement)('p');
	(0, _shared.appendNode)(p_1, a_4);
	(0, _shared.appendNode)((0, _shared.createText)("This is the description for the post."), p_1);
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), a_4);
	var span_2 = (0, _shared.createElement)('span');
	(0, _shared.appendNode)(span_2, a_4);
	(0, _shared.appendNode)((0, _shared.createText)("Read more..."), span_2);
	(0, _shared.appendNode)((0, _shared.createText)("\n\n        "), div_7);
	var div_12 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_12, div_7);
	div_12.className = "article-preview";
	var div_13 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_13, div_12);
	div_13.className = "article-meta";
	var a_5 = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a_5, div_13);
	a_5.href = '';
	var img_2 = (0, _shared.createElement)('img');
	(0, _shared.appendNode)(img_2, a_5);
	img_2.src = "http://i.imgur.com/N4VcUeJ.jpg";
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), div_13);
	var div_14 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_14, div_13);
	div_14.className = "info";
	var a_6 = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a_6, div_14);
	a_6.href = '';
	a_6.className = "author";
	(0, _shared.appendNode)((0, _shared.createText)("Albert Pai"), a_6);
	(0, _shared.appendNode)((0, _shared.createText)("\n              "), div_14);
	var span_3 = (0, _shared.createElement)('span');
	(0, _shared.appendNode)(span_3, div_14);
	span_3.className = "date";
	(0, _shared.appendNode)((0, _shared.createText)("January 20th"), span_3);
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), div_13);
	var button_2 = (0, _shared.createElement)('button');
	(0, _shared.appendNode)(button_2, div_13);
	button_2.className = "btn btn-outline-primary btn-sm pull-xs-right";
	var i_2 = (0, _shared.createElement)('i');
	(0, _shared.appendNode)(i_2, button_2);
	i_2.className = "ion-heart";
	(0, _shared.appendNode)((0, _shared.createText)(" 32"), button_2);
	(0, _shared.appendNode)((0, _shared.createText)("\n          "), div_12);
	var a_7 = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a_7, div_12);
	a_7.href = '';
	a_7.className = "preview-link";
	var h1_1 = (0, _shared.createElement)('h1');
	(0, _shared.appendNode)(h1_1, a_7);
	(0, _shared.appendNode)((0, _shared.createText)("The song you won't ever stop singing. No matter how hard you try."), h1_1);
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), a_7);
	var p_2 = (0, _shared.createElement)('p');
	(0, _shared.appendNode)(p_2, a_7);
	(0, _shared.appendNode)((0, _shared.createText)("This is the description for the post."), p_2);
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), a_7);
	var span_4 = (0, _shared.createElement)('span');
	(0, _shared.appendNode)(span_4, a_7);
	(0, _shared.appendNode)((0, _shared.createText)("Read more..."), span_4);
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), a_7);
	var ul_1 = (0, _shared.createElement)('ul');
	(0, _shared.appendNode)(ul_1, a_7);
	ul_1.className = "tag-list";
	var li_2 = (0, _shared.createElement)('li');
	(0, _shared.appendNode)(li_2, ul_1);
	li_2.className = "tag-default tag-pill tag-outline";
	(0, _shared.appendNode)((0, _shared.createText)("Music"), li_2);
	var li_3 = (0, _shared.createElement)('li');
	(0, _shared.appendNode)(li_3, ul_1);
	li_3.className = "tag-default tag-pill tag-outline";
	(0, _shared.appendNode)((0, _shared.createText)("Song"), li_3);

	return {
		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);
		},

		destroy: function destroy(detach) {
			if (detach) {
				(0, _shared.detachNode)(div);
			}
		}
	};
}

function Profile(options) {
	options = options || {};
	this._state = options.data || {};

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root;
	this._yield = options._yield;

	this._torndown = false;

	this._fragment = create_main_fragment(this._state, this);
	if (options.target) this._fragment.mount(options.target, null);
}

(0, _shared.assign)(Profile.prototype, _shared.proto);

Profile.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = (0, _shared.assign)({}, oldState, newState);
	(0, _shared.dispatchObservers)(this, this._observers.pre, newState, oldState);
	(0, _shared.dispatchObservers)(this, this._observers.post, newState, oldState);
};

Profile.prototype.teardown = Profile.prototype.destroy = function destroy(detach) {
	this.fire('destroy');

	this._fragment.destroy(detach !== false);
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

exports.default = Profile;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _shared = __webpack_require__(0);

function create_main_fragment(state, component) {
	var div = (0, _shared.createElement)('div');
	div.className = "settings-page";
	var div_1 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_1, div);
	div_1.className = "container page";
	var div_2 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_2, div_1);
	div_2.className = "row";
	var div_3 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_3, div_2);
	div_3.className = "col-md-6 offset-md-3 col-xs-12";
	var h1 = (0, _shared.createElement)('h1');
	(0, _shared.appendNode)(h1, div_3);
	h1.className = "text-xs-center";
	(0, _shared.appendNode)((0, _shared.createText)("Your Settings"), h1);
	(0, _shared.appendNode)((0, _shared.createText)("\n\n        "), div_3);
	var form = (0, _shared.createElement)('form');
	(0, _shared.appendNode)(form, div_3);
	var fieldset = (0, _shared.createElement)('fieldset');
	(0, _shared.appendNode)(fieldset, form);
	var fieldset_1 = (0, _shared.createElement)('fieldset');
	(0, _shared.appendNode)(fieldset_1, fieldset);
	fieldset_1.className = "form-group";
	var input = (0, _shared.createElement)('input');
	(0, _shared.appendNode)(input, fieldset_1);
	input.className = "form-control";
	input.type = "text";
	input.placeholder = "URL of profile picture";
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), fieldset);
	var fieldset_2 = (0, _shared.createElement)('fieldset');
	(0, _shared.appendNode)(fieldset_2, fieldset);
	fieldset_2.className = "form-group";
	var input_1 = (0, _shared.createElement)('input');
	(0, _shared.appendNode)(input_1, fieldset_2);
	input_1.className = "form-control form-control-lg";
	input_1.type = "text";
	input_1.placeholder = "Your Name";
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), fieldset);
	var fieldset_3 = (0, _shared.createElement)('fieldset');
	(0, _shared.appendNode)(fieldset_3, fieldset);
	fieldset_3.className = "form-group";
	var textarea = (0, _shared.createElement)('textarea');
	(0, _shared.appendNode)(textarea, fieldset_3);
	textarea.className = "form-control form-control-lg";
	textarea.rows = "8";
	textarea.placeholder = "Short bio about you";
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), fieldset);
	var fieldset_4 = (0, _shared.createElement)('fieldset');
	(0, _shared.appendNode)(fieldset_4, fieldset);
	fieldset_4.className = "form-group";
	var input_2 = (0, _shared.createElement)('input');
	(0, _shared.appendNode)(input_2, fieldset_4);
	input_2.className = "form-control form-control-lg";
	input_2.type = "text";
	input_2.placeholder = "Email";
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), fieldset);
	var fieldset_5 = (0, _shared.createElement)('fieldset');
	(0, _shared.appendNode)(fieldset_5, fieldset);
	fieldset_5.className = "form-group";
	var input_3 = (0, _shared.createElement)('input');
	(0, _shared.appendNode)(input_3, fieldset_5);
	input_3.className = "form-control form-control-lg";
	input_3.type = "password";
	input_3.placeholder = "Password";
	(0, _shared.appendNode)((0, _shared.createText)("\n            "), fieldset);
	var button = (0, _shared.createElement)('button');
	(0, _shared.appendNode)(button, fieldset);
	button.className = "btn btn-lg btn-primary pull-xs-right";
	(0, _shared.appendNode)((0, _shared.createText)("Update Settings"), button);

	return {
		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);
		},

		destroy: function destroy(detach) {
			if (detach) {
				(0, _shared.detachNode)(div);
			}
		}
	};
}

function Settings(options) {
	options = options || {};
	this._state = options.data || {};

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root;
	this._yield = options._yield;

	this._torndown = false;

	this._fragment = create_main_fragment(this._state, this);
	if (options.target) this._fragment.mount(options.target, null);
}

(0, _shared.assign)(Settings.prototype, _shared.proto);

Settings.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = (0, _shared.assign)({}, oldState, newState);
	(0, _shared.dispatchObservers)(this, this._observers.pre, newState, oldState);
	(0, _shared.dispatchObservers)(this, this._observers.post, newState, oldState);
};

Settings.prototype.teardown = Settings.prototype.destroy = function destroy(detach) {
	this.fire('destroy');

	this._fragment.destroy(detach !== false);
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

exports.default = Settings;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _shared = __webpack_require__(0);

function create_main_fragment(state, component) {
	var div = (0, _shared.createElement)('div');
	div.className = "auth-page";
	var div_1 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_1, div);
	div_1.className = "container page";
	var div_2 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_2, div_1);
	div_2.className = "row";
	var div_3 = (0, _shared.createElement)('div');
	(0, _shared.appendNode)(div_3, div_2);
	div_3.className = "col-md-6 offset-md-3 col-xs-12";
	var h1 = (0, _shared.createElement)('h1');
	(0, _shared.appendNode)(h1, div_3);
	h1.className = "text-xs-center";
	(0, _shared.appendNode)((0, _shared.createText)("Sign up"), h1);
	(0, _shared.appendNode)((0, _shared.createText)("\n        "), div_3);
	var p = (0, _shared.createElement)('p');
	(0, _shared.appendNode)(p, div_3);
	p.className = "text-xs-center";
	var a = (0, _shared.createElement)('a');
	(0, _shared.appendNode)(a, p);
	a.href = '';
	(0, _shared.appendNode)((0, _shared.createText)("Have an account?"), a);
	(0, _shared.appendNode)((0, _shared.createText)("\n\n        "), div_3);
	var ul = (0, _shared.createElement)('ul');
	(0, _shared.appendNode)(ul, div_3);
	ul.className = "error-messages";
	var li = (0, _shared.createElement)('li');
	(0, _shared.appendNode)(li, ul);
	(0, _shared.appendNode)((0, _shared.createText)("That email is already taken"), li);
	(0, _shared.appendNode)((0, _shared.createText)("\n\n        "), div_3);
	var form = (0, _shared.createElement)('form');
	(0, _shared.appendNode)(form, div_3);
	var fieldset = (0, _shared.createElement)('fieldset');
	(0, _shared.appendNode)(fieldset, form);
	fieldset.className = "form-group";
	var input = (0, _shared.createElement)('input');
	(0, _shared.appendNode)(input, fieldset);
	input.className = "form-control form-control-lg";
	input.type = "text";
	input.placeholder = "Your Name";
	(0, _shared.appendNode)((0, _shared.createText)("\n          "), form);
	var fieldset_1 = (0, _shared.createElement)('fieldset');
	(0, _shared.appendNode)(fieldset_1, form);
	fieldset_1.className = "form-group";
	var input_1 = (0, _shared.createElement)('input');
	(0, _shared.appendNode)(input_1, fieldset_1);
	input_1.className = "form-control form-control-lg";
	input_1.type = "text";
	input_1.placeholder = "Email";
	(0, _shared.appendNode)((0, _shared.createText)("\n          "), form);
	var fieldset_2 = (0, _shared.createElement)('fieldset');
	(0, _shared.appendNode)(fieldset_2, form);
	fieldset_2.className = "form-group";
	var input_2 = (0, _shared.createElement)('input');
	(0, _shared.appendNode)(input_2, fieldset_2);
	input_2.className = "form-control form-control-lg";
	input_2.type = "password";
	input_2.placeholder = "Password";
	(0, _shared.appendNode)((0, _shared.createText)("\n          "), form);
	var button = (0, _shared.createElement)('button');
	(0, _shared.appendNode)(button, form);
	button.className = "btn btn-lg btn-primary pull-xs-right";
	(0, _shared.appendNode)((0, _shared.createText)("Sign up"), button);

	return {
		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);
		},

		destroy: function destroy(detach) {
			if (detach) {
				(0, _shared.detachNode)(div);
			}
		}
	};
}

function SignUp(options) {
	options = options || {};
	this._state = options.data || {};

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root;
	this._yield = options._yield;

	this._torndown = false;

	this._fragment = create_main_fragment(this._state, this);
	if (options.target) this._fragment.mount(options.target, null);
}

(0, _shared.assign)(SignUp.prototype, _shared.proto);

SignUp.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = (0, _shared.assign)({}, oldState, newState);
	(0, _shared.dispatchObservers)(this, this._observers.pre, newState, oldState);
	(0, _shared.dispatchObservers)(this, this._observers.post, newState, oldState);
};

SignUp.prototype.teardown = SignUp.prototype.destroy = function destroy(detach) {
	this.fire('destroy');

	this._fragment.destroy(detach !== false);
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

exports.default = SignUp;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createBrowserHistory = __webpack_require__(5);

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _App = __webpack_require__(4);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)();

var app = new _App2.default({
  target: document.querySelector('main')
});

var SetChildViewComponent = function SetChildViewComponent(location) {
  var path = location.pathname;
  var hash = location.hash;

  console.log('Path ==> ', path, ' hash ==> ', hash);
  var hashValue = hash.replace('#/', '');
  var childComp = 'feed';

  if (hashValue) {
    childComp = hashValue;
  }
  app.set({ childview: childComp });
};

// Listens for location change and sets appropriate child view
history.listen(SetChildViewComponent);

// Intial view or handles when page refreshed
SetChildViewComponent(window.location);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = exports.supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.locationsAreEqual = exports.createLocation = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _resolvePathname = __webpack_require__(19);

var _resolvePathname2 = _interopRequireDefault(_resolvePathname);

var _valueEqual = __webpack_require__(20);

var _valueEqual2 = _interopRequireDefault(_valueEqual);

var _PathUtils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createLocation = exports.createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = (0, _PathUtils.parsePath)(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = (0, _resolvePathname2.default)(location.pathname, currentLocation.pathname);
    }
  }

  return location;
};

var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual2.default)(a.state, b.state);
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__(3);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    (0, _warning2.default)(prompt == null, 'A history supports only one prompt at a time');

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          (0, _warning2.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

exports.default = createTransitionManager;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsolute = function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
};

// About 1.5x faster than the two-arg version of Array#splice()
var spliceOne = function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }list.pop();
};

// This implementation is based heavily on node's url.parse
var resolvePathname = function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
};

module.exports = resolvePathname;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var valueEqual = function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
    return valueEqual(item, b[index]);
  });

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
};

exports.default = valueEqual;

/***/ })
/******/ ]);