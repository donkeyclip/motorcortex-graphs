'use strict';

var MotorCortex = require('@donkeyclip/motorcortex');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var MotorCortex__default = /*#__PURE__*/_interopDefaultLegacy(MotorCortex);

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$2(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$2(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$2(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf$2(subClass, superClass);
}

function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$1(o);
}

function _setPrototypeOf$2(o, p) {
  _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf$2(o, p);
}

function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized$2(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn$1(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized$2(self);
}

function _createSuper$1(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$1();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf$1(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$1(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn$1(this, result);
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var fails$k = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$j = fails$k; // Detect IE8's incomplete defineProperty implementation


var descriptors = !fails$j(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1] != 7;
});

var FunctionPrototype$3 = Function.prototype;
var bind$3 = FunctionPrototype$3.bind;
var call$a = FunctionPrototype$3.call;
var callBind = bind$3 && bind$3.bind(call$a);
var functionUncurryThis = bind$3 ? function (fn) {
  return fn && callBind(call$a, fn);
} : function (fn) {
  return fn && function () {
    return call$a.apply(fn, arguments);
  };
};

var check = function (it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


var global$F = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();

var global$E = global$F;

var TypeError$e = global$E.TypeError; // `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible

var requireObjectCoercible$7 = function (it) {
  if (it == undefined) throw TypeError$e("Can't call method on " + it);
  return it;
};

var global$D = global$F;

var requireObjectCoercible$6 = requireObjectCoercible$7;

var Object$5 = global$D.Object; // `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject

var toObject$4 = function (argument) {
  return Object$5(requireObjectCoercible$6(argument));
};

var uncurryThis$p = functionUncurryThis;

var toObject$3 = toObject$4;

var hasOwnProperty = uncurryThis$p({}.hasOwnProperty); // `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty

var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$3(it), key);
};

var DESCRIPTORS$b = descriptors;

var hasOwn$a = hasOwnProperty_1;

var FunctionPrototype$2 = Function.prototype; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getDescriptor = DESCRIPTORS$b && Object.getOwnPropertyDescriptor;
var EXISTS$1 = hasOwn$a(FunctionPrototype$2, 'name'); // additional protection from minified / mangled / dropped function names

var PROPER = EXISTS$1 && function something() {
  /* empty */
}.name === 'something';

var CONFIGURABLE = EXISTS$1 && (!DESCRIPTORS$b || DESCRIPTORS$b && getDescriptor(FunctionPrototype$2, 'name').configurable);
var functionName = {
  EXISTS: EXISTS$1,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var objectDefineProperty = {};

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
var isCallable$h = function (argument) {
  return typeof argument == 'function';
};

var isCallable$g = isCallable$h;

var isObject$a = function (it) {
  return typeof it == 'object' ? it !== null : isCallable$g(it);
};

var global$C = global$F;

var isObject$9 = isObject$a;

var document$1 = global$C.document; // typeof document.createElement is 'object' in old IE

var EXISTS = isObject$9(document$1) && isObject$9(document$1.createElement);

var documentCreateElement$2 = function (it) {
  return EXISTS ? document$1.createElement(it) : {};
};

var DESCRIPTORS$a = descriptors;

var fails$i = fails$k;

var createElement = documentCreateElement$2; // Thank's IE8 for his funny defineProperty


var ie8DomDefine = !DESCRIPTORS$a && !fails$i(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

var global$B = global$F;

var isObject$8 = isObject$a;

var String$5 = global$B.String;
var TypeError$d = global$B.TypeError; // `Assert: Type(argument) is Object`

var anObject$b = function (argument) {
  if (isObject$8(argument)) return argument;
  throw TypeError$d(String$5(argument) + ' is not an object');
};

var call$9 = Function.prototype.call;
var functionCall = call$9.bind ? call$9.bind(call$9) : function () {
  return call$9.apply(call$9, arguments);
};

var global$A = global$F;

var isCallable$f = isCallable$h;

var aFunction = function (argument) {
  return isCallable$f(argument) ? argument : undefined;
};

var getBuiltIn$6 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$A[namespace]) : global$A[namespace] && global$A[namespace][method];
};

var uncurryThis$o = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$o({}.isPrototypeOf);

var getBuiltIn$5 = getBuiltIn$6;

var engineUserAgent = getBuiltIn$5('navigator', 'userAgent') || '';

var global$z = global$F;

var userAgent = engineUserAgent;

var process$1 = global$z.process;
var Deno = global$z.Deno;
var versions = process$1 && process$1.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version$2;

if (v8) {
  match = v8.split('.'); // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us

  version$2 = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
} // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0


if (!version$2 && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);

  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version$2 = +match[1];
  }
}

var engineV8Version = version$2;

/* eslint-disable es/no-symbol -- required for testing */

var V8_VERSION$2 = engineV8Version;

var fails$h = fails$k; // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing


var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$h(function () {
  var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION$2 && V8_VERSION$2 < 41;
});

/* eslint-disable es/no-symbol -- required for testing */

var NATIVE_SYMBOL$1 = nativeSymbol;

var useSymbolAsUid = NATIVE_SYMBOL$1 && !Symbol.sham && typeof Symbol.iterator == 'symbol';

var global$y = global$F;

var getBuiltIn$4 = getBuiltIn$6;

var isCallable$e = isCallable$h;

var isPrototypeOf$3 = objectIsPrototypeOf;

var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var Object$4 = global$y.Object;
var isSymbol$3 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$4('Symbol');
  return isCallable$e($Symbol) && isPrototypeOf$3($Symbol.prototype, Object$4(it));
};

var global$x = global$F;

var String$4 = global$x.String;

var tryToString$2 = function (argument) {
  try {
    return String$4(argument);
  } catch (error) {
    return 'Object';
  }
};

var global$w = global$F;

var isCallable$d = isCallable$h;

var tryToString$1 = tryToString$2;

var TypeError$c = global$w.TypeError; // `Assert: IsCallable(argument) is true`

var aCallable$2 = function (argument) {
  if (isCallable$d(argument)) return argument;
  throw TypeError$c(tryToString$1(argument) + ' is not a function');
};

var aCallable$1 = aCallable$2; // `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod


var getMethod$3 = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable$1(func);
};

var global$v = global$F;

var call$8 = functionCall;

var isCallable$c = isCallable$h;

var isObject$7 = isObject$a;

var TypeError$b = global$v.TypeError; // `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive

var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$c(fn = input.toString) && !isObject$7(val = call$8(fn, input))) return val;
  if (isCallable$c(fn = input.valueOf) && !isObject$7(val = call$8(fn, input))) return val;
  if (pref !== 'string' && isCallable$c(fn = input.toString) && !isObject$7(val = call$8(fn, input))) return val;
  throw TypeError$b("Can't convert object to primitive value");
};

var shared$4 = {exports: {}};

var global$u = global$F; // eslint-disable-next-line es/no-object-defineproperty -- safe


var defineProperty$6 = Object.defineProperty;

var setGlobal$3 = function (key, value) {
  try {
    defineProperty$6(global$u, key, {
      value: value,
      configurable: true,
      writable: true
    });
  } catch (error) {
    global$u[key] = value;
  }

  return value;
};

var global$t = global$F;

var setGlobal$2 = setGlobal$3;

var SHARED = '__core-js_shared__';
var store$3 = global$t[SHARED] || setGlobal$2(SHARED, {});
var sharedStore = store$3;

var store$2 = sharedStore;

(shared$4.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.19.1',
  mode: 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});

var uncurryThis$n = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString$a = uncurryThis$n(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$a(++id + postfix, 36);
};

var global$s = global$F;

var shared$3 = shared$4.exports;

var hasOwn$9 = hasOwnProperty_1;

var uid$1 = uid$2;

var NATIVE_SYMBOL = nativeSymbol;

var USE_SYMBOL_AS_UID = useSymbolAsUid;

var WellKnownSymbolsStore = shared$3('wks');
var Symbol$1 = global$s.Symbol;
var symbolFor = Symbol$1 && Symbol$1['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

var wellKnownSymbol$h = function (name) {
  if (!hasOwn$9(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;

    if (NATIVE_SYMBOL && hasOwn$9(Symbol$1, name)) {
      WellKnownSymbolsStore[name] = Symbol$1[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  }

  return WellKnownSymbolsStore[name];
};

var global$r = global$F;

var call$7 = functionCall;

var isObject$6 = isObject$a;

var isSymbol$2 = isSymbol$3;

var getMethod$2 = getMethod$3;

var ordinaryToPrimitive = ordinaryToPrimitive$1;

var wellKnownSymbol$g = wellKnownSymbol$h;

var TypeError$a = global$r.TypeError;
var TO_PRIMITIVE = wellKnownSymbol$g('toPrimitive'); // `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive

var toPrimitive$2 = function (input, pref) {
  if (!isObject$6(input) || isSymbol$2(input)) return input;
  var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
  var result;

  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$7(exoticToPrim, input, pref);
    if (!isObject$6(result) || isSymbol$2(result)) return result;
    throw TypeError$a("Can't convert object to primitive value");
  }

  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive$1 = toPrimitive$2;

var isSymbol$1 = isSymbol$3; // `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey


var toPropertyKey$3 = function (argument) {
  var key = toPrimitive$1(argument, 'string');
  return isSymbol$1(key) ? key : key + '';
};

var global$q = global$F;

var DESCRIPTORS$9 = descriptors;

var IE8_DOM_DEFINE$1 = ie8DomDefine;

var anObject$a = anObject$b;

var toPropertyKey$2 = toPropertyKey$3;

var TypeError$9 = global$q.TypeError; // eslint-disable-next-line es/no-object-defineproperty -- safe

var $defineProperty = Object.defineProperty; // `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty

objectDefineProperty.f = DESCRIPTORS$9 ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$a(O);
  P = toPropertyKey$2(P);
  anObject$a(Attributes);
  if (IE8_DOM_DEFINE$1) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError$9('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$8 = descriptors;

var FUNCTION_NAME_EXISTS = functionName.EXISTS;

var uncurryThis$m = functionUncurryThis;

var defineProperty$5 = objectDefineProperty.f;

var FunctionPrototype$1 = Function.prototype;
var functionToString$1 = uncurryThis$m(FunctionPrototype$1.toString);
var nameRE = /^\s*function ([^ (]*)/;
var regExpExec$1 = uncurryThis$m(nameRE.exec);
var NAME = 'name'; // Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name

if (DESCRIPTORS$8 && !FUNCTION_NAME_EXISTS) {
  defineProperty$5(FunctionPrototype$1, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec$1(nameRE, functionToString$1(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}

var objectGetOwnPropertyDescriptor = {};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable.call({
  1: 2
}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$2(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var createPropertyDescriptor$4 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var uncurryThis$l = functionUncurryThis;

var toString$9 = uncurryThis$l({}.toString);
var stringSlice$5 = uncurryThis$l(''.slice);

var classofRaw$1 = function (it) {
  return stringSlice$5(toString$9(it), 8, -1);
};

var global$p = global$F;

var uncurryThis$k = functionUncurryThis;

var fails$g = fails$k;

var classof$9 = classofRaw$1;

var Object$3 = global$p.Object;
var split = uncurryThis$k(''.split); // fallback for non-array-like ES3 and non-enumerable old V8 strings

var indexedObject = fails$g(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object$3('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$9(it) == 'String' ? split(it, '') : Object$3(it);
} : Object$3;

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$2 = indexedObject;

var requireObjectCoercible$5 = requireObjectCoercible$7;

var toIndexedObject$7 = function (it) {
  return IndexedObject$2(requireObjectCoercible$5(it));
};

var DESCRIPTORS$7 = descriptors;

var call$6 = functionCall;

var propertyIsEnumerableModule = objectPropertyIsEnumerable;

var createPropertyDescriptor$3 = createPropertyDescriptor$4;

var toIndexedObject$6 = toIndexedObject$7;

var toPropertyKey$1 = toPropertyKey$3;

var hasOwn$8 = hasOwnProperty_1;

var IE8_DOM_DEFINE = ie8DomDefine; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe


var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

objectGetOwnPropertyDescriptor.f = DESCRIPTORS$7 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$6(O);
  P = toPropertyKey$1(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) {
    /* empty */
  }
  if (hasOwn$8(O, P)) return createPropertyDescriptor$3(!call$6(propertyIsEnumerableModule.f, O, P), O[P]);
};

var DESCRIPTORS$6 = descriptors;

var definePropertyModule$5 = objectDefineProperty;

var createPropertyDescriptor$2 = createPropertyDescriptor$4;

var createNonEnumerableProperty$8 = DESCRIPTORS$6 ? function (object, key, value) {
  return definePropertyModule$5.f(object, key, createPropertyDescriptor$2(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var redefine$8 = {exports: {}};

var uncurryThis$j = functionUncurryThis;

var isCallable$b = isCallable$h;

var store$1 = sharedStore;

var functionToString = uncurryThis$j(Function.toString); // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

if (!isCallable$b(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$3 = store$1.inspectSource;

var global$o = global$F;

var isCallable$a = isCallable$h;

var inspectSource$2 = inspectSource$3;

var WeakMap$1 = global$o.WeakMap;
var nativeWeakMap = isCallable$a(WeakMap$1) && /native code/.test(inspectSource$2(WeakMap$1));

var shared$2 = shared$4.exports;

var uid = uid$2;

var keys$2 = shared$2('keys');

var sharedKey$3 = function (key) {
  return keys$2[key] || (keys$2[key] = uid(key));
};

var hiddenKeys$4 = {};

var NATIVE_WEAK_MAP = nativeWeakMap;

var global$n = global$F;

var uncurryThis$i = functionUncurryThis;

var isObject$5 = isObject$a;

var createNonEnumerableProperty$7 = createNonEnumerableProperty$8;

var hasOwn$7 = hasOwnProperty_1;

var shared$1 = sharedStore;

var sharedKey$2 = sharedKey$3;

var hiddenKeys$3 = hiddenKeys$4;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$8 = global$n.TypeError;
var WeakMap = global$n.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;

    if (!isObject$5(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$8('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (NATIVE_WEAK_MAP || shared$1.state) {
  var store = shared$1.state || (shared$1.state = new WeakMap());
  var wmget = uncurryThis$i(store.get);
  var wmhas = uncurryThis$i(store.has);
  var wmset = uncurryThis$i(store.set);

  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError$8(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };

  get = function (it) {
    return wmget(store, it) || {};
  };

  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey$2('state');
  hiddenKeys$3[STATE] = true;

  set = function (it, metadata) {
    if (hasOwn$7(it, STATE)) throw new TypeError$8(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$7(it, STATE, metadata);
    return metadata;
  };

  get = function (it) {
    return hasOwn$7(it, STATE) ? it[STATE] : {};
  };

  has = function (it) {
    return hasOwn$7(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var global$m = global$F;

var isCallable$9 = isCallable$h;

var hasOwn$6 = hasOwnProperty_1;

var createNonEnumerableProperty$6 = createNonEnumerableProperty$8;

var setGlobal$1 = setGlobal$3;

var inspectSource$1 = inspectSource$3;

var InternalStateModule$1 = internalState;

var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;

var getInternalState$4 = InternalStateModule$1.get;
var enforceInternalState$1 = InternalStateModule$1.enforce;
var TEMPLATE = String(String).split('String');
(redefine$8.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;

  if (isCallable$9(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }

    if (!hasOwn$6(value, 'name') || CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name) {
      createNonEnumerableProperty$6(value, 'name', name);
    }

    state = enforceInternalState$1(value);

    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }

  if (O === global$m) {
    if (simple) O[key] = value;else setGlobal$1(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }

  if (simple) O[key] = value;else createNonEnumerableProperty$6(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable$9(this) && getInternalState$4(this).source || inspectSource$1(this);
});

var objectGetOwnPropertyNames = {};

var ceil$1 = Math.ceil;
var floor$2 = Math.floor; // `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity

var toIntegerOrInfinity$5 = function (argument) {
  var number = +argument; // eslint-disable-next-line no-self-compare -- safe

  return number !== number || number === 0 ? 0 : (number > 0 ? floor$2 : ceil$1)(number);
};

var toIntegerOrInfinity$4 = toIntegerOrInfinity$5;

var max$1 = Math.max;
var min$2 = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

var toAbsoluteIndex$2 = function (index, length) {
  var integer = toIntegerOrInfinity$4(index);
  return integer < 0 ? max$1(integer + length, 0) : min$2(integer, length);
};

var toIntegerOrInfinity$3 = toIntegerOrInfinity$5;

var min$1 = Math.min; // `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength

var toLength$3 = function (argument) {
  return argument > 0 ? min$1(toIntegerOrInfinity$3(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$2 = toLength$3; // `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike


var lengthOfArrayLike$4 = function (obj) {
  return toLength$2(obj.length);
};

var toIndexedObject$5 = toIndexedObject$7;

var toAbsoluteIndex$1 = toAbsoluteIndex$2;

var lengthOfArrayLike$3 = lengthOfArrayLike$4; // `Array.prototype.{ indexOf, includes }` methods implementation


var createMethod$3 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$5($this);
    var length = lengthOfArrayLike$3(O);
    var index = toAbsoluteIndex$1(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$3(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$3(false)
};

var uncurryThis$h = functionUncurryThis;

var hasOwn$5 = hasOwnProperty_1;

var toIndexedObject$4 = toIndexedObject$7;

var indexOf$1 = arrayIncludes.indexOf;

var hiddenKeys$2 = hiddenKeys$4;

var push$2 = uncurryThis$h([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$4(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) !hasOwn$5(hiddenKeys$2, key) && hasOwn$5(O, key) && push$2(result, key); // Don't enum bug & hidden keys


  while (names.length > i) if (hasOwn$5(O, key = names[i++])) {
    ~indexOf$1(result, key) || push$2(result, key);
  }

  return result;
};

// IE8- don't enum bug keys
var enumBugKeys$3 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

var internalObjectKeys$1 = objectKeysInternal;

var enumBugKeys$2 = enumBugKeys$3;

var hiddenKeys$1 = enumBugKeys$2.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe

objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys$1);
};

var objectGetOwnPropertySymbols = {};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$3 = getBuiltIn$6;

var uncurryThis$g = functionUncurryThis;

var getOwnPropertyNamesModule = objectGetOwnPropertyNames;

var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;

var anObject$9 = anObject$b;

var concat = uncurryThis$g([].concat); // all object keys, includes non-enumerable and symbols

var ownKeys$1 = getBuiltIn$3('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$9(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$4 = hasOwnProperty_1;

var ownKeys = ownKeys$1;

var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;

var definePropertyModule$4 = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$4.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$4(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

var fails$f = fails$k;

var isCallable$8 = isCallable$h;

var replacement = /#|\.prototype\./;

var isForced$3 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : isCallable$8(detection) ? fails$f(detection) : !!detection;
};

var normalize = isForced$3.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$3.data = {};
var NATIVE = isForced$3.NATIVE = 'N';
var POLYFILL = isForced$3.POLYFILL = 'P';
var isForced_1 = isForced$3;

var global$l = global$F;

var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;

var createNonEnumerableProperty$5 = createNonEnumerableProperty$8;

var redefine$7 = redefine$8.exports;

var setGlobal = setGlobal$3;

var copyConstructorProperties = copyConstructorProperties$1;

var isForced$2 = isForced_1;
/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/


var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;

  if (GLOBAL) {
    target = global$l;
  } else if (STATIC) {
    target = global$l[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global$l[TARGET] || {}).prototype;
  }

  if (target) for (key in source) {
    sourceProperty = source[key];

    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor$1(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];

    FORCED = isForced$2(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    } // add a flag to not completely full polyfills


    if (options.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty$5(sourceProperty, 'sham', true);
    } // extend global


    redefine$7(target, key, sourceProperty, options);
  }
};

var classof$8 = classofRaw$1; // `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe


var isArray$3 = Array.isArray || function isArray(argument) {
  return classof$8(argument) == 'Array';
};

var wellKnownSymbol$f = wellKnownSymbol$h;

var TO_STRING_TAG$3 = wellKnownSymbol$f('toStringTag');
var test = {};
test[TO_STRING_TAG$3] = 'z';
var toStringTagSupport = String(test) === '[object z]';

var global$k = global$F;

var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;

var isCallable$7 = isCallable$h;

var classofRaw = classofRaw$1;

var wellKnownSymbol$e = wellKnownSymbol$h;

var TO_STRING_TAG$2 = wellKnownSymbol$e('toStringTag');
var Object$2 = global$k.Object; // ES3 wrong here

var CORRECT_ARGUMENTS = classofRaw(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) {
    /* empty */
  }
}; // getting tag from ES6+ `Object.prototype.toString`


var classof$7 = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (tag = tryGet(O = Object$2(it), TO_STRING_TAG$2)) == 'string' ? tag // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
  : (result = classofRaw(O)) == 'Object' && isCallable$7(O.callee) ? 'Arguments' : result;
};

var uncurryThis$f = functionUncurryThis;

var fails$e = fails$k;

var isCallable$6 = isCallable$h;

var classof$6 = classof$7;

var getBuiltIn$2 = getBuiltIn$6;

var inspectSource = inspectSource$3;

var noop = function () {
  /* empty */
};

var empty = [];
var construct = getBuiltIn$2('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$3 = uncurryThis$f(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function (argument) {
  if (!isCallable$6(argument)) return false;

  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function (argument) {
  if (!isCallable$6(argument)) return false;

  switch (classof$6(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction':
      return false;
    // we can't check .prototype since constructors produced by .bind haven't it
  }

  return INCORRECT_TO_STRING || !!exec$3(constructorRegExp, inspectSource(argument));
}; // `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor


var isConstructor$3 = !construct || fails$e(function () {
  var called;
  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
    called = true;
  }) || called;
}) ? isConstructorLegacy : isConstructorModern;

var toPropertyKey = toPropertyKey$3;

var definePropertyModule$3 = objectDefineProperty;

var createPropertyDescriptor$1 = createPropertyDescriptor$4;

var createProperty$2 = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule$3.f(object, propertyKey, createPropertyDescriptor$1(0, value));else object[propertyKey] = value;
};

var fails$d = fails$k;

var wellKnownSymbol$d = wellKnownSymbol$h;

var V8_VERSION$1 = engineV8Version;

var SPECIES$5 = wellKnownSymbol$d('species');

var arrayMethodHasSpeciesSupport$3 = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION$1 >= 51 || !fails$d(function () {
    var array = [];
    var constructor = array.constructor = {};

    constructor[SPECIES$5] = function () {
      return {
        foo: 1
      };
    };

    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var uncurryThis$e = functionUncurryThis;

var arraySlice$2 = uncurryThis$e([].slice);

var $$7 = _export;

var global$j = global$F;

var isArray$2 = isArray$3;

var isConstructor$2 = isConstructor$3;

var isObject$4 = isObject$a;

var toAbsoluteIndex = toAbsoluteIndex$2;

var lengthOfArrayLike$2 = lengthOfArrayLike$4;

var toIndexedObject$3 = toIndexedObject$7;

var createProperty$1 = createProperty$2;

var wellKnownSymbol$c = wellKnownSymbol$h;

var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$3;

var un$Slice = arraySlice$2;

var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$2('slice');
var SPECIES$4 = wellKnownSymbol$c('species');
var Array$2 = global$j.Array;
var max = Math.max; // `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects

$$7({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT$1
}, {
  slice: function slice(start, end) {
    var O = toIndexedObject$3(this);
    var length = lengthOfArrayLike$2(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

    var Constructor, result, n;

    if (isArray$2(O)) {
      Constructor = O.constructor; // cross-realm fallback

      if (isConstructor$2(Constructor) && (Constructor === Array$2 || isArray$2(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject$4(Constructor)) {
        Constructor = Constructor[SPECIES$4];
        if (Constructor === null) Constructor = undefined;
      }

      if (Constructor === Array$2 || Constructor === undefined) {
        return un$Slice(O, k, fin);
      }
    }

    result = new (Constructor === undefined ? Array$2 : Constructor)(max(fin - k, 0));

    for (n = 0; k < fin; k++, n++) if (k in O) createProperty$1(result, n, O[k]);

    result.length = n;
    return result;
  }
});

var uncurryThis$d = functionUncurryThis;

var aCallable = aCallable$2;

var bind$2 = uncurryThis$d(uncurryThis$d.bind); // optional / simple context binding

var functionBindContext = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : bind$2 ? bind$2(fn, that) : function
    /* ...args */
  () {
    return fn.apply(that, arguments);
  };
};

var global$i = global$F;

var isArray$1 = isArray$3;

var isConstructor$1 = isConstructor$3;

var isObject$3 = isObject$a;

var wellKnownSymbol$b = wellKnownSymbol$h;

var SPECIES$3 = wellKnownSymbol$b('species');
var Array$1 = global$i.Array; // a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

var arraySpeciesConstructor$1 = function (originalArray) {
  var C;

  if (isArray$1(originalArray)) {
    C = originalArray.constructor; // cross-realm fallback

    if (isConstructor$1(C) && (C === Array$1 || isArray$1(C.prototype))) C = undefined;else if (isObject$3(C)) {
      C = C[SPECIES$3];
      if (C === null) C = undefined;
    }
  }

  return C === undefined ? Array$1 : C;
};

var arraySpeciesConstructor = arraySpeciesConstructor$1; // `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate


var arraySpeciesCreate$2 = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

var bind$1 = functionBindContext;

var uncurryThis$c = functionUncurryThis;

var IndexedObject$1 = indexedObject;

var toObject$2 = toObject$4;

var lengthOfArrayLike$1 = lengthOfArrayLike$4;

var arraySpeciesCreate$1 = arraySpeciesCreate$2;

var push$1 = uncurryThis$c([].push); // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation

var createMethod$2 = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject$2($this);
    var self = IndexedObject$1(O);
    var boundFunction = bind$1(callbackfn, that);
    var length = lengthOfArrayLike$1(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate$1;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;

    for (; length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);

      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3:
            return true;
          // some

          case 5:
            return value;
          // find

          case 6:
            return index;
          // findIndex

          case 2:
            push$1(target, value);
          // filter
        } else switch (TYPE) {
          case 4:
            return false;
          // every

          case 7:
            push$1(target, value);
          // filterReject
        }
      }
    }

    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod$2(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod$2(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod$2(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod$2(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod$2(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod$2(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod$2(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod$2(7)
};

var $$6 = _export;

var $map = arrayIteration.map;

var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$3;

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$1('map'); // `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species

$$6({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT
}, {
  map: function map(callbackfn
  /* , thisArg */
  ) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var $$5 = _export;

var ceil = Math.ceil;
var floor$1 = Math.floor; // `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc

$$5({
  target: 'Math',
  stat: true
}, {
  trunc: function trunc(it) {
    return (it > 0 ? floor$1 : ceil)(it);
  }
});

var $$4 = _export;

var global$h = global$F;

var fails$c = fails$k;

var isArray = isArray$3;

var isObject$2 = isObject$a;

var toObject$1 = toObject$4;

var lengthOfArrayLike = lengthOfArrayLike$4;

var createProperty = createProperty$2;

var arraySpeciesCreate = arraySpeciesCreate$2;

var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$3;

var wellKnownSymbol$a = wellKnownSymbol$h;

var V8_VERSION = engineV8Version;

var IS_CONCAT_SPREADABLE = wellKnownSymbol$a('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
var TypeError$7 = global$h.TypeError; // We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679

var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$c(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});
var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject$2(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED$1 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species

$$4({
  target: 'Array',
  proto: true,
  forced: FORCED$1
}, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject$1(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;

    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];

      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError$7(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError$7(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }

    A.length = n;
    return A;
  }
});

var colorPalette = {
  gray: "#75706E",
  lightGray: "#B2B1AE",
  darkGray: "#434243",
  whiteBack: "#EEEEEE",
  font: "#100300",
  accent: "#FFD800",
  background: "transparent",
  dataColors: ["rgb(117,112,110)", "rgb(255,216,0)", "rgb(87,86,87)", "rgb(163, 255, 200)", "rgb(255,255,255)", "rgb(206, 36, 132)", "rgb(68, 214, 37)", "rgb(228, 31, 31)", "rgb(68, 36, 157)", "rgb(45, 109, 121)"]
};

// Making the contents of this animation invisible before timestamp:0
// and after timestamp: {totalDuration}

function opacityControl(clip, selector) {
  clip.addIncident(new MotorCortex.CSSEffect({
    animatedAttrs: {
      opacity: 1
    },
    initialValues: {
      opacity: 0
    }
  }, {
    selector: selector,
    duration: 1
  }), 0);
  clip.addIncident(new MotorCortex.CSSEffect({
    animatedAttrs: {
      opacity: 0
    }
  }, {
    selector: selector,
    duration: 1
  }), clip.introDur + clip.staticDur + clip.outroDur - 1);
} // Static control: used for fadeout outro components
// Making the contents of this animation invisible before timestamp:0
// and after timestamp: {totalDuration}

function fadeOutOpacityControl(clip, selector) {
  clip.addIncident(new MotorCortex.CSSEffect({
    animatedAttrs: {
      opacity: 1
    },
    initialValues: {
      opacity: 0
    }
  }, {
    selector: selector,
    duration: 1
  }), 0);

  if (!clip.attrs.timings.outro) {
    clip.addIncident(new MotorCortex.CSSEffect({
      animatedAttrs: {
        opacity: 0
      }
    }, {
      selector: selector,
      duration: 1
    }), clip.attrs.timings.intro + clip.attrs.timings.static - 1);
  }
}

var uncurryThis$b = functionUncurryThis; // `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue


var thisNumberValue$2 = uncurryThis$b(1.0.valueOf);

var global$g = global$F;

var classof$5 = classof$7;

var String$3 = global$g.String;

var toString$8 = function (argument) {
  if (classof$5(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String$3(argument);
};

var global$f = global$F;

var toIntegerOrInfinity$2 = toIntegerOrInfinity$5;

var toString$7 = toString$8;

var requireObjectCoercible$4 = requireObjectCoercible$7;

var RangeError$1 = global$f.RangeError; // `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat

var stringRepeat = function repeat(count) {
  var str = toString$7(requireObjectCoercible$4(this));
  var result = '';
  var n = toIntegerOrInfinity$2(count);
  if (n < 0 || n == Infinity) throw RangeError$1('Wrong number of repetitions');

  for (; n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;

  return result;
};

var $$3 = _export;

var global$e = global$F;

var uncurryThis$a = functionUncurryThis;

var toIntegerOrInfinity$1 = toIntegerOrInfinity$5;

var thisNumberValue$1 = thisNumberValue$2;

var $repeat = stringRepeat;

var fails$b = fails$k;

var RangeError = global$e.RangeError;
var String$2 = global$e.String;
var floor = Math.floor;
var repeat = uncurryThis$a($repeat);
var stringSlice$4 = uncurryThis$a(''.slice);
var un$ToFixed = uncurryThis$a(1.0.toFixed);

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;

  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }

  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  }

  return n;
};

var multiply = function (data, n, c) {
  var index = -1;
  var c2 = c;

  while (++index < 6) {
    c2 += n * data[index];
    data[index] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};

var divide = function (data, n) {
  var index = 6;
  var c = 0;

  while (--index >= 0) {
    c += data[index];
    data[index] = floor(c / n);
    c = c % n * 1e7;
  }
};

var dataToString = function (data) {
  var index = 6;
  var s = '';

  while (--index >= 0) {
    if (s !== '' || index === 0 || data[index] !== 0) {
      var t = String$2(data[index]);
      s = s === '' ? t : s + repeat('0', 7 - t.length) + t;
    }
  }

  return s;
};

var FORCED = fails$b(function () {
  return un$ToFixed(0.00008, 3) !== '0.000' || un$ToFixed(0.9, 0) !== '1' || un$ToFixed(1.255, 2) !== '1.25' || un$ToFixed(1000000000000000128.0, 0) !== '1000000000000000128';
}) || !fails$b(function () {
  // V8 ~ Android 4.3-
  un$ToFixed({});
}); // `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed

$$3({
  target: 'Number',
  proto: true,
  forced: FORCED
}, {
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue$1(this);
    var fractDigits = toIntegerOrInfinity$1(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;
    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits'); // eslint-disable-next-line no-self-compare -- NaN check

    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return String$2(number);

    if (number < 0) {
      sign = '-';
      number = -number;
    }

    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;

      if (e > 0) {
        multiply(data, 0, z);
        j = fractDigits;

        while (j >= 7) {
          multiply(data, 1e7, 0);
          j -= 7;
        }

        multiply(data, pow(10, j, 1), 0);
        j = e - 1;

        while (j >= 23) {
          divide(data, 1 << 23);
          j -= 23;
        }

        divide(data, 1 << j);
        multiply(data, 1, 1);
        divide(data, 2);
        result = dataToString(data);
      } else {
        multiply(data, 0, z);
        multiply(data, 1 << -e, 0);
        result = dataToString(data) + repeat('0', fractDigits);
      }
    }

    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits ? '0.' + repeat('0', fractDigits - k) + result : stringSlice$4(result, 0, k - fractDigits) + '.' + stringSlice$4(result, k - fractDigits));
    } else {
      result = sign + result;
    }

    return result;
  }
});

var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;

var classof$4 = classof$7; // `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring


var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
  return '[object ' + classof$4(this) + ']';
};

var TO_STRING_TAG_SUPPORT = toStringTagSupport;

var redefine$6 = redefine$8.exports;

var toString$6 = objectToString; // `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring


if (!TO_STRING_TAG_SUPPORT) {
  redefine$6(Object.prototype, 'toString', toString$6, {
    unsafe: true
  });
}

var anObject$8 = anObject$b; // `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags


var regexpFlags$1 = function () {
  var that = anObject$8(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

var uncurryThis$9 = functionUncurryThis;

var PROPER_FUNCTION_NAME$1 = functionName.PROPER;

var redefine$5 = redefine$8.exports;

var anObject$7 = anObject$b;

var isPrototypeOf$2 = objectIsPrototypeOf;

var $toString = toString$8;

var fails$a = fails$k;

var regExpFlags$1 = regexpFlags$1;

var TO_STRING = 'toString';
var RegExpPrototype$4 = RegExp.prototype;
var n$ToString = RegExpPrototype$4[TO_STRING];
var getFlags$1 = uncurryThis$9(regExpFlags$1);
var NOT_GENERIC = fails$a(function () {
  return n$ToString.call({
    source: 'a',
    flags: 'b'
  }) != '/a/b';
}); // FF44- RegExp#toString has a wrong name

var INCORRECT_NAME = PROPER_FUNCTION_NAME$1 && n$ToString.name != TO_STRING; // `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring

if (NOT_GENERIC || INCORRECT_NAME) {
  redefine$5(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject$7(this);
    var p = $toString(R.source);
    var rf = R.flags;
    var f = $toString(rf === undefined && isPrototypeOf$2(RegExpPrototype$4, R) && !('flags' in RegExpPrototype$4) ? getFlags$1(R) : rf);
    return '/' + p + '/' + f;
  }, {
    unsafe: true
  });
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document.nodeType === 9;

var isProduction = process.env.NODE_ENV === 'production';

function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}

function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf$1(o, p);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf$1(subClass, superClass);
}

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var plainObjectConstrurctor = {}.constructor;

function cloneStyle(style) {
  if (style == null || typeof style !== 'object') return style;
  if (Array.isArray(style)) return style.map(cloneStyle);
  if (style.constructor !== plainObjectConstrurctor) return style;
  var newStyle = {};

  for (var name in style) {
    newStyle[name] = cloneStyle(style[name]);
  }

  return newStyle;
}
/**
 * Create a rule instance.
 */


function createRule(name, decl, options) {
  if (name === void 0) {
    name = 'unnamed';
  }

  var jss = options.jss;
  var declCopy = cloneStyle(decl);
  var rule = jss.plugins.onCreateRule(name, declCopy, options);
  if (rule) return rule; // It is an at-rule and it has no instance.

  if (name[0] === '@') {
    process.env.NODE_ENV !== "production" ? warning(false, "[JSS] Unknown rule " + name) : void 0;
  }

  return null;
}

var join = function join(value, by) {
  var result = '';

  for (var i = 0; i < value.length; i++) {
    // Remove !important from the value, it will be readded later.
    if (value[i] === '!important') break;
    if (result) result += by;
    result += value[i];
  }

  return result;
};
/**
 * Converts JSS array value to a CSS string.
 *
 * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
 * `border: ['1px', '2px']` > `border: 1px, 2px;`
 * `margin: [['5px', '10px'], '!important']` > `margin: 5px 10px !important;`
 * `color: ['red', !important]` > `color: red !important;`
 */


var toCssValue = function toCssValue(value, ignoreImportant) {
  if (ignoreImportant === void 0) {
    ignoreImportant = false;
  }

  if (!Array.isArray(value)) return value;
  var cssValue = ''; // Support space separated values via `[['5px', '10px']]`.

  if (Array.isArray(value[0])) {
    for (var i = 0; i < value.length; i++) {
      if (value[i] === '!important') break;
      if (cssValue) cssValue += ', ';
      cssValue += join(value[i], ' ');
    }
  } else cssValue = join(value, ', '); // Add !important, because it was ignored.


  if (!ignoreImportant && value[value.length - 1] === '!important') {
    cssValue += ' !important';
  }

  return cssValue;
};

function getWhitespaceSymbols(options) {
  if (options && options.format === false) {
    return {
      linebreak: '',
      space: ''
    };
  }

  return {
    linebreak: '\n',
    space: ' '
  };
}
/**
 * Indent a string.
 * http://jsperf.com/array-join-vs-for
 */


function indentStr(str, indent) {
  var result = '';

  for (var index = 0; index < indent; index++) {
    result += '  ';
  }

  return result + str;
}
/**
 * Converts a Rule to CSS string.
 */


function toCss(selector, style, options) {
  if (options === void 0) {
    options = {};
  }

  var result = '';
  if (!style) return result;
  var _options = options,
      _options$indent = _options.indent,
      indent = _options$indent === void 0 ? 0 : _options$indent;
  var fallbacks = style.fallbacks;

  if (options.format === false) {
    indent = -Infinity;
  }

  var _getWhitespaceSymbols = getWhitespaceSymbols(options),
      linebreak = _getWhitespaceSymbols.linebreak,
      space = _getWhitespaceSymbols.space;

  if (selector) indent++; // Apply fallbacks first.

  if (fallbacks) {
    // Array syntax {fallbacks: [{prop: value}]}
    if (Array.isArray(fallbacks)) {
      for (var index = 0; index < fallbacks.length; index++) {
        var fallback = fallbacks[index];

        for (var prop in fallback) {
          var value = fallback[prop];

          if (value != null) {
            if (result) result += linebreak;
            result += indentStr(prop + ":" + space + toCssValue(value) + ";", indent);
          }
        }
      }
    } else {
      // Object syntax {fallbacks: {prop: value}}
      for (var _prop in fallbacks) {
        var _value = fallbacks[_prop];

        if (_value != null) {
          if (result) result += linebreak;
          result += indentStr(_prop + ":" + space + toCssValue(_value) + ";", indent);
        }
      }
    }
  }

  for (var _prop2 in style) {
    var _value2 = style[_prop2];

    if (_value2 != null && _prop2 !== 'fallbacks') {
      if (result) result += linebreak;
      result += indentStr(_prop2 + ":" + space + toCssValue(_value2) + ";", indent);
    }
  } // Allow empty style in this case, because properties will be added dynamically.


  if (!result && !options.allowEmpty) return result; // When rule is being stringified before selector was defined.

  if (!selector) return result;
  indent--;
  if (result) result = "" + linebreak + result + linebreak;
  return indentStr("" + selector + space + "{" + result, indent) + indentStr('}', indent);
}

var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
var nativeEscape = typeof CSS !== 'undefined' && CSS.escape;

var escape = function (str) {
  return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, '\\$1');
};

var BaseStyleRule = /*#__PURE__*/function () {
  function BaseStyleRule(key, style, options) {
    this.type = 'style';
    this.isProcessed = false;
    var sheet = options.sheet,
        Renderer = options.Renderer;
    this.key = key;
    this.options = options;
    this.style = style;
    if (sheet) this.renderer = sheet.renderer;else if (Renderer) this.renderer = new Renderer();
  }
  /**
   * Get or set a style property.
   */


  var _proto = BaseStyleRule.prototype;

  _proto.prop = function prop(name, value, options) {
    // It's a getter.
    if (value === undefined) return this.style[name]; // Don't do anything if the value has not changed.

    var force = options ? options.force : false;
    if (!force && this.style[name] === value) return this;
    var newValue = value;

    if (!options || options.process !== false) {
      newValue = this.options.jss.plugins.onChangeValue(value, name, this);
    }

    var isEmpty = newValue == null || newValue === false;
    var isDefined = (name in this.style); // Value is empty and wasn't defined before.

    if (isEmpty && !isDefined && !force) return this; // We are going to remove this value.

    var remove = isEmpty && isDefined;
    if (remove) delete this.style[name];else this.style[name] = newValue; // Renderable is defined if StyleSheet option `link` is true.

    if (this.renderable && this.renderer) {
      if (remove) this.renderer.removeProperty(this.renderable, name);else this.renderer.setProperty(this.renderable, name, newValue);
      return this;
    }

    var sheet = this.options.sheet;

    if (sheet && sheet.attached) {
      process.env.NODE_ENV !== "production" ? warning(false, '[JSS] Rule is not linked. Missing sheet option "link: true".') : void 0;
    }

    return this;
  };

  return BaseStyleRule;
}();

var StyleRule = /*#__PURE__*/function (_BaseStyleRule) {
  _inheritsLoose(StyleRule, _BaseStyleRule);

  function StyleRule(key, style, options) {
    var _this;

    _this = _BaseStyleRule.call(this, key, style, options) || this;
    var selector = options.selector,
        scoped = options.scoped,
        sheet = options.sheet,
        generateId = options.generateId;

    if (selector) {
      _this.selectorText = selector;
    } else if (scoped !== false) {
      _this.id = generateId(_assertThisInitialized$1(_assertThisInitialized$1(_this)), sheet);
      _this.selectorText = "." + escape(_this.id);
    }

    return _this;
  }
  /**
   * Set selector string.
   * Attention: use this with caution. Most browsers didn't implement
   * selectorText setter, so this may result in rerendering of entire Style Sheet.
   */


  var _proto2 = StyleRule.prototype;
  /**
   * Apply rule to an element inline.
   */

  _proto2.applyTo = function applyTo(renderable) {
    var renderer = this.renderer;

    if (renderer) {
      var json = this.toJSON();

      for (var prop in json) {
        renderer.setProperty(renderable, prop, json[prop]);
      }
    }

    return this;
  }
  /**
   * Returns JSON representation of the rule.
   * Fallbacks are not supported.
   * Useful for inline styles.
   */
  ;

  _proto2.toJSON = function toJSON() {
    var json = {};

    for (var prop in this.style) {
      var value = this.style[prop];
      if (typeof value !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = toCssValue(value);
    }

    return json;
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto2.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? _extends({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.selectorText, this.style, opts);
  };

  _createClass$1(StyleRule, [{
    key: "selector",
    set: function set(selector) {
      if (selector === this.selectorText) return;
      this.selectorText = selector;
      var renderer = this.renderer,
          renderable = this.renderable;
      if (!renderable || !renderer) return;
      var hasChanged = renderer.setSelector(renderable, selector); // If selector setter is not implemented, rerender the rule.

      if (!hasChanged) {
        renderer.replaceRule(renderable, this);
      }
    }
    /**
     * Get selector string.
     */
    ,
    get: function get() {
      return this.selectorText;
    }
  }]);

  return StyleRule;
}(BaseStyleRule);

var pluginStyleRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    if (key[0] === '@' || options.parent && options.parent.type === 'keyframes') {
      return null;
    }

    return new StyleRule(key, style, options);
  }
};
var defaultToStringOptions = {
  indent: 1,
  children: true
};
var atRegExp = /@([\w-]+)/;
/**
 * Conditional rule for @media, @supports
 */

var ConditionalRule = /*#__PURE__*/function () {
  function ConditionalRule(key, styles, options) {
    this.type = 'conditional';
    this.isProcessed = false;
    this.key = key;
    var atMatch = key.match(atRegExp);
    this.at = atMatch ? atMatch[1] : 'unknown'; // Key might contain a unique suffix in case the `name` passed by user was duplicate.

    this.query = options.name || "@" + this.at;
    this.options = options;
    this.rules = new RuleList(_extends({}, options, {
      parent: this
    }));

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }
  /**
   * Get a rule.
   */


  var _proto = ConditionalRule.prototype;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Create and register rule, run plugins.
   */
  ;

  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    if (!rule) return null;
    this.options.jss.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions;
    }

    var _getWhitespaceSymbols = getWhitespaceSymbols(options),
        linebreak = _getWhitespaceSymbols.linebreak;

    if (options.indent == null) options.indent = defaultToStringOptions.indent;
    if (options.children == null) options.children = defaultToStringOptions.children;

    if (options.children === false) {
      return this.query + " {}";
    }

    var children = this.rules.toString(options);
    return children ? this.query + " {" + linebreak + children + linebreak + "}" : '';
  };

  return ConditionalRule;
}();

var keyRegExp = /@media|@supports\s+/;
var pluginConditionalRule = {
  onCreateRule: function onCreateRule(key, styles, options) {
    return keyRegExp.test(key) ? new ConditionalRule(key, styles, options) : null;
  }
};
var defaultToStringOptions$1 = {
  indent: 1,
  children: true
};
var nameRegExp = /@keyframes\s+([\w-]+)/;
/**
 * Rule for @keyframes
 */

var KeyframesRule = /*#__PURE__*/function () {
  function KeyframesRule(key, frames, options) {
    this.type = 'keyframes';
    this.at = '@keyframes';
    this.isProcessed = false;
    var nameMatch = key.match(nameRegExp);

    if (nameMatch && nameMatch[1]) {
      this.name = nameMatch[1];
    } else {
      this.name = 'noname';
      process.env.NODE_ENV !== "production" ? warning(false, "[JSS] Bad keyframes name " + key) : void 0;
    }

    this.key = this.type + "-" + this.name;
    this.options = options;
    var scoped = options.scoped,
        sheet = options.sheet,
        generateId = options.generateId;
    this.id = scoped === false ? this.name : escape(generateId(this, sheet));
    this.rules = new RuleList(_extends({}, options, {
      parent: this
    }));

    for (var name in frames) {
      this.rules.add(name, frames[name], _extends({}, options, {
        parent: this
      }));
    }

    this.rules.process();
  }
  /**
   * Generates a CSS string.
   */


  var _proto = KeyframesRule.prototype;

  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions$1;
    }

    var _getWhitespaceSymbols = getWhitespaceSymbols(options),
        linebreak = _getWhitespaceSymbols.linebreak;

    if (options.indent == null) options.indent = defaultToStringOptions$1.indent;
    if (options.children == null) options.children = defaultToStringOptions$1.children;

    if (options.children === false) {
      return this.at + " " + this.id + " {}";
    }

    var children = this.rules.toString(options);
    if (children) children = "" + linebreak + children + linebreak;
    return this.at + " " + this.id + " {" + children + "}";
  };

  return KeyframesRule;
}();

var keyRegExp$1 = /@keyframes\s+/;
var refRegExp = /\$([\w-]+)/g;

var findReferencedKeyframe = function findReferencedKeyframe(val, keyframes) {
  if (typeof val === 'string') {
    return val.replace(refRegExp, function (match, name) {
      if (name in keyframes) {
        return keyframes[name];
      }

      process.env.NODE_ENV !== "production" ? warning(false, "[JSS] Referenced keyframes rule \"" + name + "\" is not defined.") : void 0;
      return match;
    });
  }

  return val;
};
/**
 * Replace the reference for a animation name.
 */


var replaceRef = function replaceRef(style, prop, keyframes) {
  var value = style[prop];
  var refKeyframe = findReferencedKeyframe(value, keyframes);

  if (refKeyframe !== value) {
    style[prop] = refKeyframe;
  }
};

var pluginKeyframesRule = {
  onCreateRule: function onCreateRule(key, frames, options) {
    return typeof key === 'string' && keyRegExp$1.test(key) ? new KeyframesRule(key, frames, options) : null;
  },
  // Animation name ref replacer.
  onProcessStyle: function onProcessStyle(style, rule, sheet) {
    if (rule.type !== 'style' || !sheet) return style;
    if ('animation-name' in style) replaceRef(style, 'animation-name', sheet.keyframes);
    if ('animation' in style) replaceRef(style, 'animation', sheet.keyframes);
    return style;
  },
  onChangeValue: function onChangeValue(val, prop, rule) {
    var sheet = rule.options.sheet;

    if (!sheet) {
      return val;
    }

    switch (prop) {
      case 'animation':
        return findReferencedKeyframe(val, sheet.keyframes);

      case 'animation-name':
        return findReferencedKeyframe(val, sheet.keyframes);

      default:
        return val;
    }
  }
};

var KeyframeRule = /*#__PURE__*/function (_BaseStyleRule) {
  _inheritsLoose(KeyframeRule, _BaseStyleRule);

  function KeyframeRule() {
    return _BaseStyleRule.apply(this, arguments) || this;
  }

  var _proto = KeyframeRule.prototype;
  /**
   * Generates a CSS string.
   */

  _proto.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? _extends({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.key, this.style, opts);
  };

  return KeyframeRule;
}(BaseStyleRule);

var pluginKeyframeRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    if (options.parent && options.parent.type === 'keyframes') {
      return new KeyframeRule(key, style, options);
    }

    return null;
  }
};

var FontFaceRule = /*#__PURE__*/function () {
  function FontFaceRule(key, style, options) {
    this.type = 'font-face';
    this.at = '@font-face';
    this.isProcessed = false;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */


  var _proto = FontFaceRule.prototype;

  _proto.toString = function toString(options) {
    var _getWhitespaceSymbols = getWhitespaceSymbols(options),
        linebreak = _getWhitespaceSymbols.linebreak;

    if (Array.isArray(this.style)) {
      var str = '';

      for (var index = 0; index < this.style.length; index++) {
        str += toCss(this.at, this.style[index]);
        if (this.style[index + 1]) str += linebreak;
      }

      return str;
    }

    return toCss(this.at, this.style, options);
  };

  return FontFaceRule;
}();

var keyRegExp$2 = /@font-face/;
var pluginFontFaceRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    return keyRegExp$2.test(key) ? new FontFaceRule(key, style, options) : null;
  }
};

var ViewportRule = /*#__PURE__*/function () {
  function ViewportRule(key, style, options) {
    this.type = 'viewport';
    this.at = '@viewport';
    this.isProcessed = false;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */


  var _proto = ViewportRule.prototype;

  _proto.toString = function toString(options) {
    return toCss(this.key, this.style, options);
  };

  return ViewportRule;
}();

var pluginViewportRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    return key === '@viewport' || key === '@-ms-viewport' ? new ViewportRule(key, style, options) : null;
  }
};

var SimpleRule = /*#__PURE__*/function () {
  function SimpleRule(key, value, options) {
    this.type = 'simple';
    this.isProcessed = false;
    this.key = key;
    this.value = value;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */
  // eslint-disable-next-line no-unused-vars


  var _proto = SimpleRule.prototype;

  _proto.toString = function toString(options) {
    if (Array.isArray(this.value)) {
      var str = '';

      for (var index = 0; index < this.value.length; index++) {
        str += this.key + " " + this.value[index] + ";";
        if (this.value[index + 1]) str += '\n';
      }

      return str;
    }

    return this.key + " " + this.value + ";";
  };

  return SimpleRule;
}();

var keysMap = {
  '@charset': true,
  '@import': true,
  '@namespace': true
};
var pluginSimpleRule = {
  onCreateRule: function onCreateRule(key, value, options) {
    return key in keysMap ? new SimpleRule(key, value, options) : null;
  }
};
var plugins = [pluginStyleRule, pluginConditionalRule, pluginKeyframesRule, pluginKeyframeRule, pluginFontFaceRule, pluginViewportRule, pluginSimpleRule];
var defaultUpdateOptions = {
  process: true
};
var forceUpdateOptions = {
  force: true,
  process: true
  /**
   * Contains rules objects and allows adding/removing etc.
   * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
   */

};

var RuleList = /*#__PURE__*/function () {
  // Rules registry for access by .get() method.
  // It contains the same rule registered by name and by selector.
  // Original styles object.
  // Used to ensure correct rules order.
  function RuleList(options) {
    this.map = {};
    this.raw = {};
    this.index = [];
    this.counter = 0;
    this.options = options;
    this.classes = options.classes;
    this.keyframes = options.keyframes;
  }
  /**
   * Create and register rule.
   *
   * Will not render after Style Sheet was rendered the first time.
   */


  var _proto = RuleList.prototype;

  _proto.add = function add(name, decl, ruleOptions) {
    var _this$options = this.options,
        parent = _this$options.parent,
        sheet = _this$options.sheet,
        jss = _this$options.jss,
        Renderer = _this$options.Renderer,
        generateId = _this$options.generateId,
        scoped = _this$options.scoped;

    var options = _extends({
      classes: this.classes,
      parent: parent,
      sheet: sheet,
      jss: jss,
      Renderer: Renderer,
      generateId: generateId,
      scoped: scoped,
      name: name,
      keyframes: this.keyframes,
      selector: undefined
    }, ruleOptions); // When user uses .createStyleSheet(), duplicate names are not possible, but
    // `sheet.addRule()` opens the door for any duplicate rule name. When this happens
    // we need to make the key unique within this RuleList instance scope.


    var key = name;

    if (name in this.raw) {
      key = name + "-d" + this.counter++;
    } // We need to save the original decl before creating the rule
    // because cache plugin needs to use it as a key to return a cached rule.


    this.raw[key] = decl;

    if (key in this.classes) {
      // E.g. rules inside of @media container
      options.selector = "." + escape(this.classes[key]);
    }

    var rule = createRule(key, decl, options);
    if (!rule) return null;
    this.register(rule);
    var index = options.index === undefined ? this.index.length : options.index;
    this.index.splice(index, 0, rule);
    return rule;
  }
  /**
   * Get a rule.
   */
  ;

  _proto.get = function get(name) {
    return this.map[name];
  }
  /**
   * Delete a rule.
   */
  ;

  _proto.remove = function remove(rule) {
    this.unregister(rule);
    delete this.raw[rule.key];
    this.index.splice(this.index.indexOf(rule), 1);
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.index.indexOf(rule);
  }
  /**
   * Run `onProcessRule()` plugins on every rule.
   */
  ;

  _proto.process = function process() {
    var plugins = this.options.jss.plugins; // We need to clone array because if we modify the index somewhere else during a loop
    // we end up with very hard-to-track-down side effects.

    this.index.slice(0).forEach(plugins.onProcessRule, plugins);
  }
  /**
   * Register a rule in `.map`, `.classes` and `.keyframes` maps.
   */
  ;

  _proto.register = function register(rule) {
    this.map[rule.key] = rule;

    if (rule instanceof StyleRule) {
      this.map[rule.selector] = rule;
      if (rule.id) this.classes[rule.key] = rule.id;
    } else if (rule instanceof KeyframesRule && this.keyframes) {
      this.keyframes[rule.name] = rule.id;
    }
  }
  /**
   * Unregister a rule.
   */
  ;

  _proto.unregister = function unregister(rule) {
    delete this.map[rule.key];

    if (rule instanceof StyleRule) {
      delete this.map[rule.selector];
      delete this.classes[rule.key];
    } else if (rule instanceof KeyframesRule) {
      delete this.keyframes[rule.name];
    }
  }
  /**
   * Update the function values with a new data.
   */
  ;

  _proto.update = function update() {
    var name;
    var data;
    var options;

    if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
      name = arguments.length <= 0 ? undefined : arguments[0];
      data = arguments.length <= 1 ? undefined : arguments[1];
      options = arguments.length <= 2 ? undefined : arguments[2];
    } else {
      data = arguments.length <= 0 ? undefined : arguments[0];
      options = arguments.length <= 1 ? undefined : arguments[1];
      name = null;
    }

    if (name) {
      this.updateOne(this.map[name], data, options);
    } else {
      for (var index = 0; index < this.index.length; index++) {
        this.updateOne(this.index[index], data, options);
      }
    }
  }
  /**
   * Execute plugins, update rule props.
   */
  ;

  _proto.updateOne = function updateOne(rule, data, options) {
    if (options === void 0) {
      options = defaultUpdateOptions;
    }

    var _this$options2 = this.options,
        plugins = _this$options2.jss.plugins,
        sheet = _this$options2.sheet; // It is a rules container like for e.g. ConditionalRule.

    if (rule.rules instanceof RuleList) {
      rule.rules.update(data, options);
      return;
    }

    var style = rule.style;
    plugins.onUpdate(data, rule, sheet, options); // We rely on a new `style` ref in case it was mutated during onUpdate hook.

    if (options.process && style && style !== rule.style) {
      // We need to run the plugins in case new `style` relies on syntax plugins.
      plugins.onProcessStyle(rule.style, rule, sheet); // Update and add props.

      for (var prop in rule.style) {
        var nextValue = rule.style[prop];
        var prevValue = style[prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
        // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

        if (nextValue !== prevValue) {
          rule.prop(prop, nextValue, forceUpdateOptions);
        }
      } // Remove props.


      for (var _prop in style) {
        var _nextValue = rule.style[_prop];
        var _prevValue = style[_prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
        // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

        if (_nextValue == null && _nextValue !== _prevValue) {
          rule.prop(_prop, null, forceUpdateOptions);
        }
      }
    }
  }
  /**
   * Convert rules to a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    var str = '';
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;

    var _getWhitespaceSymbols = getWhitespaceSymbols(options),
        linebreak = _getWhitespaceSymbols.linebreak;

    for (var index = 0; index < this.index.length; index++) {
      var rule = this.index[index];
      var css = rule.toString(options); // No need to render an empty rule.

      if (!css && !link) continue;
      if (str) str += linebreak;
      str += css;
    }

    return str;
  };

  return RuleList;
}();

var StyleSheet = /*#__PURE__*/function () {
  function StyleSheet(styles, options) {
    this.attached = false;
    this.deployed = false;
    this.classes = {};
    this.keyframes = {};
    this.options = _extends({}, options, {
      sheet: this,
      parent: this,
      classes: this.classes,
      keyframes: this.keyframes
    });

    if (options.Renderer) {
      this.renderer = new options.Renderer(this);
    }

    this.rules = new RuleList(this.options);

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }
  /**
   * Attach renderable to the render tree.
   */


  var _proto = StyleSheet.prototype;

  _proto.attach = function attach() {
    if (this.attached) return this;
    if (this.renderer) this.renderer.attach();
    this.attached = true; // Order is important, because we can't use insertRule API if style element is not attached.

    if (!this.deployed) this.deploy();
    return this;
  }
  /**
   * Remove renderable from render tree.
   */
  ;

  _proto.detach = function detach() {
    if (!this.attached) return this;
    if (this.renderer) this.renderer.detach();
    this.attached = false;
    return this;
  }
  /**
   * Add a rule to the current stylesheet.
   * Will insert a rule also after the stylesheet has been rendered first time.
   */
  ;

  _proto.addRule = function addRule(name, decl, options) {
    var queue = this.queue; // Plugins can create rules.
    // In order to preserve the right order, we need to queue all `.addRule` calls,
    // which happen after the first `rules.add()` call.

    if (this.attached && !queue) this.queue = [];
    var rule = this.rules.add(name, decl, options);
    if (!rule) return null;
    this.options.jss.plugins.onProcessRule(rule);

    if (this.attached) {
      if (!this.deployed) return rule; // Don't insert rule directly if there is no stringified version yet.
      // It will be inserted all together when .attach is called.

      if (queue) queue.push(rule);else {
        this.insertRule(rule);

        if (this.queue) {
          this.queue.forEach(this.insertRule, this);
          this.queue = undefined;
        }
      }
      return rule;
    } // We can't add rules to a detached style node.
    // We will redeploy the sheet once user will attach it.


    this.deployed = false;
    return rule;
  }
  /**
   * Insert rule into the StyleSheet
   */
  ;

  _proto.insertRule = function insertRule(rule) {
    if (this.renderer) {
      this.renderer.insertRule(rule);
    }
  }
  /**
   * Create and add rules.
   * Will render also after Style Sheet was rendered the first time.
   */
  ;

  _proto.addRules = function addRules(styles, options) {
    var added = [];

    for (var name in styles) {
      var rule = this.addRule(name, styles[name], options);
      if (rule) added.push(rule);
    }

    return added;
  }
  /**
   * Get a rule by name.
   */
  ;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Delete a rule by name.
   * Returns `true`: if rule has been deleted from the DOM.
   */
  ;

  _proto.deleteRule = function deleteRule(name) {
    var rule = typeof name === 'object' ? name : this.rules.get(name);

    if (!rule || // Style sheet was created without link: true and attached, in this case we
    // won't be able to remove the CSS rule from the DOM.
    this.attached && !rule.renderable) {
      return false;
    }

    this.rules.remove(rule);

    if (this.attached && rule.renderable && this.renderer) {
      return this.renderer.deleteRule(rule.renderable);
    }

    return true;
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Deploy pure CSS string to a renderable.
   */
  ;

  _proto.deploy = function deploy() {
    if (this.renderer) this.renderer.deploy();
    this.deployed = true;
    return this;
  }
  /**
   * Update the function values with a new data.
   */
  ;

  _proto.update = function update() {
    var _this$rules;

    (_this$rules = this.rules).update.apply(_this$rules, arguments);

    return this;
  }
  /**
   * Updates a single rule.
   */
  ;

  _proto.updateOne = function updateOne(rule, data, options) {
    this.rules.updateOne(rule, data, options);
    return this;
  }
  /**
   * Convert rules to a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    return this.rules.toString(options);
  };

  return StyleSheet;
}();

var PluginsRegistry = /*#__PURE__*/function () {
  function PluginsRegistry() {
    this.plugins = {
      internal: [],
      external: []
    };
    this.registry = {};
  }

  var _proto = PluginsRegistry.prototype;
  /**
   * Call `onCreateRule` hooks and return an object if returned by a hook.
   */

  _proto.onCreateRule = function onCreateRule(name, decl, options) {
    for (var i = 0; i < this.registry.onCreateRule.length; i++) {
      var rule = this.registry.onCreateRule[i](name, decl, options);
      if (rule) return rule;
    }

    return null;
  }
  /**
   * Call `onProcessRule` hooks.
   */
  ;

  _proto.onProcessRule = function onProcessRule(rule) {
    if (rule.isProcessed) return;
    var sheet = rule.options.sheet;

    for (var i = 0; i < this.registry.onProcessRule.length; i++) {
      this.registry.onProcessRule[i](rule, sheet);
    }

    if (rule.style) this.onProcessStyle(rule.style, rule, sheet);
    rule.isProcessed = true;
  }
  /**
   * Call `onProcessStyle` hooks.
   */
  ;

  _proto.onProcessStyle = function onProcessStyle(style, rule, sheet) {
    for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
      rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet);
    }
  }
  /**
   * Call `onProcessSheet` hooks.
   */
  ;

  _proto.onProcessSheet = function onProcessSheet(sheet) {
    for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
      this.registry.onProcessSheet[i](sheet);
    }
  }
  /**
   * Call `onUpdate` hooks.
   */
  ;

  _proto.onUpdate = function onUpdate(data, rule, sheet, options) {
    for (var i = 0; i < this.registry.onUpdate.length; i++) {
      this.registry.onUpdate[i](data, rule, sheet, options);
    }
  }
  /**
   * Call `onChangeValue` hooks.
   */
  ;

  _proto.onChangeValue = function onChangeValue(value, prop, rule) {
    var processedValue = value;

    for (var i = 0; i < this.registry.onChangeValue.length; i++) {
      processedValue = this.registry.onChangeValue[i](processedValue, prop, rule);
    }

    return processedValue;
  }
  /**
   * Register a plugin.
   */
  ;

  _proto.use = function use(newPlugin, options) {
    if (options === void 0) {
      options = {
        queue: 'external'
      };
    }

    var plugins = this.plugins[options.queue]; // Avoids applying same plugin twice, at least based on ref.

    if (plugins.indexOf(newPlugin) !== -1) {
      return;
    }

    plugins.push(newPlugin);
    this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function (registry, plugin) {
      for (var name in plugin) {
        if (name in registry) {
          registry[name].push(plugin[name]);
        } else {
          process.env.NODE_ENV !== "production" ? warning(false, "[JSS] Unknown hook \"" + name + "\".") : void 0;
        }
      }

      return registry;
    }, {
      onCreateRule: [],
      onProcessRule: [],
      onProcessStyle: [],
      onProcessSheet: [],
      onChangeValue: [],
      onUpdate: []
    });
  };

  return PluginsRegistry;
}();
/**
 * Sheets registry to access all instances in one place.
 */


var SheetsRegistry = /*#__PURE__*/function () {
  function SheetsRegistry() {
    this.registry = [];
  }

  var _proto = SheetsRegistry.prototype;
  /**
   * Register a Style Sheet.
   */

  _proto.add = function add(sheet) {
    var registry = this.registry;
    var index = sheet.options.index;
    if (registry.indexOf(sheet) !== -1) return;

    if (registry.length === 0 || index >= this.index) {
      registry.push(sheet);
      return;
    } // Find a position.


    for (var i = 0; i < registry.length; i++) {
      if (registry[i].options.index > index) {
        registry.splice(i, 0, sheet);
        return;
      }
    }
  }
  /**
   * Reset the registry.
   */
  ;

  _proto.reset = function reset() {
    this.registry = [];
  }
  /**
   * Remove a Style Sheet.
   */
  ;

  _proto.remove = function remove(sheet) {
    var index = this.registry.indexOf(sheet);
    this.registry.splice(index, 1);
  }
  /**
   * Convert all attached sheets to a CSS string.
   */
  ;

  _proto.toString = function toString(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        attached = _ref.attached,
        options = _objectWithoutPropertiesLoose(_ref, ["attached"]);

    var _getWhitespaceSymbols = getWhitespaceSymbols(options),
        linebreak = _getWhitespaceSymbols.linebreak;

    var css = '';

    for (var i = 0; i < this.registry.length; i++) {
      var sheet = this.registry[i];

      if (attached != null && sheet.attached !== attached) {
        continue;
      }

      if (css) css += linebreak;
      css += sheet.toString(options);
    }

    return css;
  };

  _createClass$1(SheetsRegistry, [{
    key: "index",

    /**
     * Current highest index number.
     */
    get: function get() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]);

  return SheetsRegistry;
}();
/**
 * This is a global sheets registry. Only DomRenderer will add sheets to it.
 * On the server one should use an own SheetsRegistry instance and add the
 * sheets to it, because you need to make sure to create a new registry for
 * each request in order to not leak sheets across requests.
 */


var sheets = new SheetsRegistry();
/* eslint-disable */

/**
 * Now that `globalThis` is available on most platforms
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis#browser_compatibility)
 * we check for `globalThis` first. `globalThis` is necessary for jss
 * to run in Agoric's secure version of JavaScript (SES). Under SES,
 * `globalThis` exists, but `window`, `self`, and `Function('return
 * this')()` are all undefined for security reasons.
 *
 * https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
 */

var globalThis$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' && window.Math === Math ? window : typeof self !== 'undefined' && self.Math === Math ? self : Function('return this')();
var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
if (globalThis$1[ns] == null) globalThis$1[ns] = 0; // Bundle may contain multiple JSS versions at the same time. In order to identify
// the current version with just one short number and use it for classes generation
// we use a counter. Also it is more accurate, because user can manually reevaluate
// the module.

var moduleId = globalThis$1[ns]++;
var maxRules = 1e10;
/**
 * Returns a function which generates unique class names based on counters.
 * When new generator function is created, rule counter is reseted.
 * We need to reset the rule counter for SSR for each request.
 */

var createGenerateId = function createGenerateId(options) {
  if (options === void 0) {
    options = {};
  }

  var ruleCounter = 0;

  var generateId = function generateId(rule, sheet) {
    ruleCounter += 1;

    if (ruleCounter > maxRules) {
      process.env.NODE_ENV !== "production" ? warning(false, "[JSS] You might have a memory leak. Rule counter is at " + ruleCounter + ".") : void 0;
    }

    var jssId = '';
    var prefix = '';

    if (sheet) {
      if (sheet.options.classNamePrefix) {
        prefix = sheet.options.classNamePrefix;
      }

      if (sheet.options.jss.id != null) {
        jssId = String(sheet.options.jss.id);
      }
    }

    if (options.minify) {
      // Using "c" because a number can't be the first char in a class name.
      return "" + (prefix || 'c') + moduleId + jssId + ruleCounter;
    }

    return prefix + rule.key + "-" + moduleId + (jssId ? "-" + jssId : '') + "-" + ruleCounter;
  };

  return generateId;
};
/**
 * Cache the value from the first time a function is called.
 */


var memoize = function memoize(fn) {
  var value;
  return function () {
    if (!value) value = fn();
    return value;
  };
};
/**
 * Get a style property value.
 */


var getPropertyValue = function getPropertyValue(cssRule, prop) {
  try {
    // Support CSSTOM.
    if (cssRule.attributeStyleMap) {
      return cssRule.attributeStyleMap.get(prop);
    }

    return cssRule.style.getPropertyValue(prop);
  } catch (err) {
    // IE may throw if property is unknown.
    return '';
  }
};
/**
 * Set a style property.
 */


var setProperty = function setProperty(cssRule, prop, value) {
  try {
    var cssValue = value;

    if (Array.isArray(value)) {
      cssValue = toCssValue(value, true);

      if (value[value.length - 1] === '!important') {
        cssRule.style.setProperty(prop, cssValue, 'important');
        return true;
      }
    } // Support CSSTOM.


    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.set(prop, cssValue);
    } else {
      cssRule.style.setProperty(prop, cssValue);
    }
  } catch (err) {
    // IE may throw if property is unknown.
    return false;
  }

  return true;
};
/**
 * Remove a style property.
 */


var removeProperty = function removeProperty(cssRule, prop) {
  try {
    // Support CSSTOM.
    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.delete(prop);
    } else {
      cssRule.style.removeProperty(prop);
    }
  } catch (err) {
    process.env.NODE_ENV !== "production" ? warning(false, "[JSS] DOMException \"" + err.message + "\" was thrown. Tried to remove property \"" + prop + "\".") : void 0;
  }
};
/**
 * Set the selector.
 */


var setSelector = function setSelector(cssRule, selectorText) {
  cssRule.selectorText = selectorText; // Return false if setter was not successful.
  // Currently works in chrome only.

  return cssRule.selectorText === selectorText;
};
/**
 * Gets the `head` element upon the first call and caches it.
 * We assume it can't be null.
 */


var getHead = memoize(function () {
  return document.querySelector('head');
});
/**
 * Find attached sheet with an index higher than the passed one.
 */

function findHigherSheet(registry, options) {
  for (var i = 0; i < registry.length; i++) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}
/**
 * Find attached sheet with the highest index.
 */


function findHighestSheet(registry, options) {
  for (var i = registry.length - 1; i >= 0; i--) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}
/**
 * Find a comment with "jss" inside.
 */


function findCommentNode(text) {
  var head = getHead();

  for (var i = 0; i < head.childNodes.length; i++) {
    var node = head.childNodes[i];

    if (node.nodeType === 8 && node.nodeValue.trim() === text) {
      return node;
    }
  }

  return null;
}
/**
 * Find a node before which we can insert the sheet.
 */


function findPrevNode(options) {
  var registry = sheets.registry;

  if (registry.length > 0) {
    // Try to insert before the next higher sheet.
    var sheet = findHigherSheet(registry, options);

    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element
      };
    } // Otherwise insert after the last attached.


    sheet = findHighestSheet(registry, options);

    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element.nextSibling
      };
    }
  } // Try to find a comment placeholder if registry is empty.


  var insertionPoint = options.insertionPoint;

  if (insertionPoint && typeof insertionPoint === 'string') {
    var comment = findCommentNode(insertionPoint);

    if (comment) {
      return {
        parent: comment.parentNode,
        node: comment.nextSibling
      };
    } // If user specifies an insertion point and it can't be found in the document -
    // bad specificity issues may appear.


    process.env.NODE_ENV !== "production" ? warning(false, "[JSS] Insertion point \"" + insertionPoint + "\" not found.") : void 0;
  }

  return false;
}
/**
 * Insert style element into the DOM.
 */


function insertStyle(style, options) {
  var insertionPoint = options.insertionPoint;
  var nextNode = findPrevNode(options);

  if (nextNode !== false && nextNode.parent) {
    nextNode.parent.insertBefore(style, nextNode.node);
    return;
  } // Works with iframes and any node types.


  if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
    var insertionPointElement = insertionPoint;
    var parentNode = insertionPointElement.parentNode;
    if (parentNode) parentNode.insertBefore(style, insertionPointElement.nextSibling);else process.env.NODE_ENV !== "production" ? warning(false, '[JSS] Insertion point is not in the DOM.') : void 0;
    return;
  }

  getHead().appendChild(style);
}
/**
 * Read jss nonce setting from the page if the user has set it.
 */


var getNonce = memoize(function () {
  var node = document.querySelector('meta[property="csp-nonce"]');
  return node ? node.getAttribute('content') : null;
});

var _insertRule = function insertRule(container, rule, index) {
  try {
    if ('insertRule' in container) {
      container.insertRule(rule, index);
    } // Keyframes rule.
    else if ('appendRule' in container) {
      container.appendRule(rule);
    }
  } catch (err) {
    process.env.NODE_ENV !== "production" ? warning(false, "[JSS] " + err.message) : void 0;
    return false;
  }

  return container.cssRules[index];
};

var getValidRuleInsertionIndex = function getValidRuleInsertionIndex(container, index) {
  var maxIndex = container.cssRules.length; // In case previous insertion fails, passed index might be wrong

  if (index === undefined || index > maxIndex) {
    // eslint-disable-next-line no-param-reassign
    return maxIndex;
  }

  return index;
};

var createStyle = function createStyle() {
  var el = document.createElement('style'); // Without it, IE will have a broken source order specificity if we
  // insert rules after we insert the style tag.
  // It seems to kick-off the source order specificity algorithm.

  el.textContent = '\n';
  return el;
};

var DomRenderer = /*#__PURE__*/function () {
  // Will be empty if link: true option is not set, because
  // it is only for use together with insertRule API.
  function DomRenderer(sheet) {
    this.getPropertyValue = getPropertyValue;
    this.setProperty = setProperty;
    this.removeProperty = removeProperty;
    this.setSelector = setSelector;
    this.hasInsertedRules = false;
    this.cssRules = []; // There is no sheet when the renderer is used from a standalone StyleRule.

    if (sheet) sheets.add(sheet);
    this.sheet = sheet;

    var _ref = this.sheet ? this.sheet.options : {},
        media = _ref.media,
        meta = _ref.meta,
        element = _ref.element;

    this.element = element || createStyle();
    this.element.setAttribute('data-jss', '');
    if (media) this.element.setAttribute('media', media);
    if (meta) this.element.setAttribute('data-meta', meta);
    var nonce = getNonce();
    if (nonce) this.element.setAttribute('nonce', nonce);
  }
  /**
   * Insert style element into render tree.
   */


  var _proto = DomRenderer.prototype;

  _proto.attach = function attach() {
    // In the case the element node is external and it is already in the DOM.
    if (this.element.parentNode || !this.sheet) return;
    insertStyle(this.element, this.sheet.options); // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
    // most browsers create a new CSSStyleSheet, except of all IEs.

    var deployed = Boolean(this.sheet && this.sheet.deployed);

    if (this.hasInsertedRules && deployed) {
      this.hasInsertedRules = false;
      this.deploy();
    }
  }
  /**
   * Remove style element from render tree.
   */
  ;

  _proto.detach = function detach() {
    if (!this.sheet) return;
    var parentNode = this.element.parentNode;
    if (parentNode) parentNode.removeChild(this.element); // In the most browsers, rules inserted using insertRule() API will be lost when style element is removed.
    // Though IE will keep them and we need a consistent behavior.

    if (this.sheet.options.link) {
      this.cssRules = [];
      this.element.textContent = '\n';
    }
  }
  /**
   * Inject CSS string into element.
   */
  ;

  _proto.deploy = function deploy() {
    var sheet = this.sheet;
    if (!sheet) return;

    if (sheet.options.link) {
      this.insertRules(sheet.rules);
      return;
    }

    this.element.textContent = "\n" + sheet.toString() + "\n";
  }
  /**
   * Insert RuleList into an element.
   */
  ;

  _proto.insertRules = function insertRules(rules, nativeParent) {
    for (var i = 0; i < rules.index.length; i++) {
      this.insertRule(rules.index[i], i, nativeParent);
    }
  }
  /**
   * Insert a rule into element.
   */
  ;

  _proto.insertRule = function insertRule(rule, index, nativeParent) {
    if (nativeParent === void 0) {
      nativeParent = this.element.sheet;
    }

    if (rule.rules) {
      var parent = rule;
      var latestNativeParent = nativeParent;

      if (rule.type === 'conditional' || rule.type === 'keyframes') {
        var _insertionIndex = getValidRuleInsertionIndex(nativeParent, index); // We need to render the container without children first.


        latestNativeParent = _insertRule(nativeParent, parent.toString({
          children: false
        }), _insertionIndex);

        if (latestNativeParent === false) {
          return false;
        }

        this.refCssRule(rule, _insertionIndex, latestNativeParent);
      }

      this.insertRules(parent.rules, latestNativeParent);
      return latestNativeParent;
    }

    var ruleStr = rule.toString();
    if (!ruleStr) return false;
    var insertionIndex = getValidRuleInsertionIndex(nativeParent, index);

    var nativeRule = _insertRule(nativeParent, ruleStr, insertionIndex);

    if (nativeRule === false) {
      return false;
    }

    this.hasInsertedRules = true;
    this.refCssRule(rule, insertionIndex, nativeRule);
    return nativeRule;
  };

  _proto.refCssRule = function refCssRule(rule, index, cssRule) {
    rule.renderable = cssRule; // We only want to reference the top level rules, deleteRule API doesn't support removing nested rules
    // like rules inside media queries or keyframes

    if (rule.options.parent instanceof StyleSheet) {
      this.cssRules[index] = cssRule;
    }
  }
  /**
   * Delete a rule.
   */
  ;

  _proto.deleteRule = function deleteRule(cssRule) {
    var sheet = this.element.sheet;
    var index = this.indexOf(cssRule);
    if (index === -1) return false;
    sheet.deleteRule(index);
    this.cssRules.splice(index, 1);
    return true;
  }
  /**
   * Get index of a CSS Rule.
   */
  ;

  _proto.indexOf = function indexOf(cssRule) {
    return this.cssRules.indexOf(cssRule);
  }
  /**
   * Generate a new CSS rule and replace the existing one.
   *
   * Only used for some old browsers because they can't set a selector.
   */
  ;

  _proto.replaceRule = function replaceRule(cssRule, rule) {
    var index = this.indexOf(cssRule);
    if (index === -1) return false;
    this.element.sheet.deleteRule(index);
    this.cssRules.splice(index, 1);
    return this.insertRule(rule, index);
  }
  /**
   * Get all rules elements.
   */
  ;

  _proto.getRules = function getRules() {
    return this.element.sheet.cssRules;
  };

  return DomRenderer;
}();

var instanceCounter = 0;

var Jss = /*#__PURE__*/function () {
  function Jss(options) {
    this.id = instanceCounter++;
    this.version = "10.8.0";
    this.plugins = new PluginsRegistry();
    this.options = {
      id: {
        minify: false
      },
      createGenerateId: createGenerateId,
      Renderer: isBrowser ? DomRenderer : null,
      plugins: []
    };
    this.generateId = createGenerateId({
      minify: false
    });

    for (var i = 0; i < plugins.length; i++) {
      this.plugins.use(plugins[i], {
        queue: 'internal'
      });
    }

    this.setup(options);
  }
  /**
   * Prepares various options, applies plugins.
   * Should not be used twice on the same instance, because there is no plugins
   * deduplication logic.
   */


  var _proto = Jss.prototype;

  _proto.setup = function setup(options) {
    if (options === void 0) {
      options = {};
    }

    if (options.createGenerateId) {
      this.options.createGenerateId = options.createGenerateId;
    }

    if (options.id) {
      this.options.id = _extends({}, this.options.id, options.id);
    }

    if (options.createGenerateId || options.id) {
      this.generateId = this.options.createGenerateId(this.options.id);
    }

    if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;

    if ('Renderer' in options) {
      this.options.Renderer = options.Renderer;
    } // eslint-disable-next-line prefer-spread


    if (options.plugins) this.use.apply(this, options.plugins);
    return this;
  }
  /**
   * Create a Style Sheet.
   */
  ;

  _proto.createStyleSheet = function createStyleSheet(styles, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        index = _options.index;

    if (typeof index !== 'number') {
      index = sheets.index === 0 ? 0 : sheets.index + 1;
    }

    var sheet = new StyleSheet(styles, _extends({}, options, {
      jss: this,
      generateId: options.generateId || this.generateId,
      insertionPoint: this.options.insertionPoint,
      Renderer: this.options.Renderer,
      index: index
    }));
    this.plugins.onProcessSheet(sheet);
    return sheet;
  }
  /**
   * Detach the Style Sheet and remove it from the registry.
   */
  ;

  _proto.removeStyleSheet = function removeStyleSheet(sheet) {
    sheet.detach();
    sheets.remove(sheet);
    return this;
  }
  /**
   * Create a rule without a Style Sheet.
   * [Deprecated] will be removed in the next major version.
   */
  ;

  _proto.createRule = function createRule$1(name, style, options) {
    if (style === void 0) {
      style = {};
    }

    if (options === void 0) {
      options = {};
    } // Enable rule without name for inline styles.


    if (typeof name === 'object') {
      return this.createRule(undefined, name, style);
    }

    var ruleOptions = _extends({}, options, {
      name: name,
      jss: this,
      Renderer: this.options.Renderer
    });

    if (!ruleOptions.generateId) ruleOptions.generateId = this.generateId;
    if (!ruleOptions.classes) ruleOptions.classes = {};
    if (!ruleOptions.keyframes) ruleOptions.keyframes = {};
    var rule = createRule(name, style, ruleOptions);
    if (rule) this.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Register plugin. Passed function will be invoked with a rule instance.
   */
  ;

  _proto.use = function use() {
    var _this = this;

    for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
      plugins[_key] = arguments[_key];
    }

    plugins.forEach(function (plugin) {
      _this.plugins.use(plugin);
    });
    return this;
  };

  return Jss;
}();

var createJss = function createJss(options) {
  return new Jss(options);
};
/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */


var index$3 = createJss();
var jss = index$3;

function buildCSS$4(barChart) {
  var _titleContainer;

  var createGenerateId = function createGenerateId() {
    return function (rule) {
      return rule.key;
    };
  };

  jss.setup({
    createGenerateId: createGenerateId
  });
  var styles = {
    "y-axis": {
      width: "4px",
      height: "70%",
      left: "14%",
      top: "15%",
      background: barChart.tertiaryC,
      position: "absolute"
    },
    "x-axis": {
      width: "74%",
      height: "4px",
      top: "85%",
      left: "14%",
      background: barChart.tertiaryC,
      position: "absolute"
    },
    gridlines: {
      width: "100%",
      height: "calc(100% + 3px)",
      display: "flex",
      "flex-direction": "column",
      "justify-content": "space-between"
    },
    gridLine: {
      height: "3px",
      width: "100%",
      background: barChart.secondaryC,
      "align-self": "flex-end"
    },
    graph: {
      top: 0,
      left: 0,
      position: "absolute",
      width: "100%",
      height: "100%",
      display: "flex",
      "justify-content": "space-around",
      overflow: "hidden"
    },
    "bar-container": {
      "align-self": "flex-end",
      width: "".concat(100 / barChart.data.length, "%"),
      margin: "0% ".concat(10 / barChart.data.length + 1, "%"),
      height: "100%",
      display: "flex"
    },
    "bar-fill": {
      width: "100%",
      height: "100%",
      background: barChart.primaryC,
      "align-self": "center"
    },
    "block-background": {
      width: "100%",
      height: "100%",
      background: barChart.accentC,
      position: "relative"
    },
    "title-back-animHelper": {
      width: "100%",
      height: "100%",
      display: "flex",
      "flex-direction": "row-reverse"
    },
    "title-back-wrapper": {
      width: "100%",
      height: "100%",
      display: "flex",
      position: "absolute",
      "flex-direction": "row",
      "z-index": "-1"
    },
    "x-labels-back-wrapper": {
      width: "70%",
      height: "5%",
      top: "87%",
      left: "16%",
      position: "absolute",
      display: "flex",
      "flex-direction": "row-reverse"
    },
    "x-labels-container": {
      "font-family": barChart.fontFamily,
      background: "transparent",
      width: "70%",
      height: "5%",
      top: "87%",
      left: "16%",
      position: "absolute",
      display: "flex",
      "align-items": "center",
      "z-index": "1",
      "justify-content": "space-around"
    },
    "letter-wrapper": {
      "font-size": barChart.fontSize,
      display: "flex",
      "flex-direction": "column",
      position: "relative"
    },
    "letter-container": {
      overflow: "hidden",
      position: "relative"
    },
    "title-container": (_titleContainer = {
      "font-family": barChart.fontFamily,
      background: "transparent",
      width: "70%",
      height: "fit-content"
    }, _defineProperty(_titleContainer, "height", "-moz-fit-content"), _defineProperty(_titleContainer, "min-height", "5%"), _defineProperty(_titleContainer, "max-height", "7%"), _defineProperty(_titleContainer, "top", "7%"), _defineProperty(_titleContainer, "left", "16%"), _defineProperty(_titleContainer, "position", "absolute"), _defineProperty(_titleContainer, "display", "flex"), _defineProperty(_titleContainer, "z-index", "1"), _defineProperty(_titleContainer, "justify-content", "space-around"), _titleContainer),
    "title-wrapper": {
      display: "flex",
      "flex-grow": "2",
      "flex-wrap": "wrap",
      "align-items": "center",
      overflow: "hidden",
      "padding-left": "6px",
      "z-index": "1"
    },
    "subtitle-wrapper": {
      display: "flex",
      "z-index": "1",
      "flex-wrap": "wrap",
      "align-items": "center"
    },
    "subtitle-position-end": {
      display: "flex",
      "flex-grow": "1",
      "padding-right": "6px",
      "flex-wrap": "wrap",
      "max-width": "34%",
      overflow: "hidden",
      "justify-content": "flex-end"
    },
    "label-container": {
      position: "relative",
      top: "1px",
      display: "flex",
      "flex-direction": "row",
      overflow: "hidden"
    },
    "container-barChart": {
      width: "100%",
      height: "100%",
      background: barChart.backgroundC,
      display: "flex"
    },
    "graph-container": {
      left: "16%",
      top: "17%",
      width: "70%",
      height: "63%",
      position: "absolute"
    },
    fontColorOn: {
      color: barChart.fontC
    },
    "space-char": {
      visibility: "hidden"
    },
    "accent-background": {
      width: "100%",
      height: "100%",
      background: barChart.accentC,
      position: "relative"
    }
  };
  barChart.data.map(function (datum, i) {
    styles["".concat(datum.name, "-bar-").concat(i)] = {
      "align-self": "flex-end",
      width: "".concat(100 / barChart.data.length, "%"),
      margin: "0% ".concat(10 / barChart.data.length + 1, "%"),
      height: "100%",
      display: "flex"
    };
    styles["".concat(datum.name, "-bar-").concat(i)].height = "\n            ".concat(datum.value.toFixed(2) / barChart.maxPoint * 100, "%");
    styles["".concat(datum.name, "-bar-fill")] = {
      height: "100%"
    };
  });
  var styleSheet = jss.createStyleSheet(styles).toString();
  return styleSheet;
}

/**
 * BAR CHART SIMPLE GRAPH: MotorCortex Implementation
 */

var BarChartSimple = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits$1(BarChartSimple, _MotorCortex$HTMLClip);

  var _super = _createSuper$1(BarChartSimple);

  function BarChartSimple() {
    _classCallCheck$1(this, BarChartSimple);

    return _super.apply(this, arguments);
  }

  _createClass$2(BarChartSimple, [{
    key: "html",
    get: // Building HTML tree for incident
    function get() {
      var _this = this;

      this.buildVars(); // Title modal html generation

      var title = [];

      for (var i in this.title) {
        var letter = [];

        if (this.title[i] === " ") {
          letter.push('<div class="space-char letter-wrapper">-</div>');
        } else {
          letter.push("<div class=\"fontColorOn letter-wrapper\">".concat(this.title[i], "</div>"));
        }

        title.push("<div id={\"letter-\" + i} class=\"letter-container\">\n          ".concat(letter, "\n        </div>"));
      } // Subtitle modal html generation


      var subtitle = [];

      for (var _i in this.subtitle) {
        var _letter = [];

        if (this.subtitle[_i] === " ") {
          _letter.push('<div class="space-char letter-wrapper">-</div>');
        } else {
          _letter.push(MotorCortex__default["default"].utils.createDOMElement("div", {
            class: "fontColorOn letter-wrapper"
          }, this.subtitle[_i]));
        }

        subtitle.push("<div id={\"letter-\" + i} class=\"letter-container\">\n          ".concat(_letter, "\n        </div>"));
      } // Gridlines conditional html generation


      var gridLines = [];

      for (var _i2 = 0; _i2 < this.gridLinesNum; _i2++) {
        gridLines.push(MotorCortex__default["default"].utils.createDOMElement("div", {
          class: "gridLine",
          id: "gridLine" + _i2
        }));
      } // X-axis labels html generation with data parameter as reference


      var xLabels = [];

      for (var _i3 in this.data) {
        var label = [];

        if (this.data[_i3].name.length > 4) {
          this.data[_i3].name = this.data[_i3].name.slice(0, 4);
        }

        xLabels.push(MotorCortex__default["default"].utils.createDOMElement("div", {
          class: "label-container",
          id: "label-" + _i3
        }, label));
      } //  Bars html generation with data parameter as reference


      var bars = this.data.map(function (datum, i) {
        _this.maxPoint = _this.maxPoint < datum.value ? datum.value : _this.maxPoint;
        return MotorCortex__default["default"].utils.createDOMElement("div", {
          class: datum.name + "-bar-".concat(i)
        }, MotorCortex__default["default"].utils.createDOMElement("div", {
          class: "bar-fill",
          style: " background: ".concat(datum.color ? datum.color : _this.primaryC, " "),
          id: datum.name + "-bar-fill"
        }));
      });
      this.maxPoint = this.attrs.data.maxValue ? this.attrs.data.maxValue : this.maxPoint; // MAIN HTML TREE

      var barGraphHTML = MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "container-barChart"
      }, MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "title-container"
      }, MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "title-wrapper"
      }, title), MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "subtitle-position-end"
      }, MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "subtitle-wrapper"
      }, subtitle)), MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "title-back-wrapper"
      }, MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "title-back-animHelper"
      }, MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "title-background block-background"
      })))), MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "graph-container"
      }, MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "graph"
      }, bars), MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "gridlines"
      }, gridLines)), MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "y-axis"
      }), MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "x-axis"
      }), MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "x-labels-container"
      }, xLabels), MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "x-labels-back-wrapper"
      }, MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "x-labels-background block-background"
      })));
      return barGraphHTML;
    } // Build CSS rules for incident

  }, {
    key: "css",
    get: function get() {
      return buildCSS$4(this);
    } // Font API call (only google fonts API supported)

  }, {
    key: "fonts",
    get: function get() {
      return [{
        type: "google-font",
        src: "".concat(this.url)
      }];
    } // MotorCortex Animation generation and

  }, {
    key: "buildTree",
    value: function buildTree() {
      opacityControl(this, ".container-barChart"); // INTRO CONTROL

      if (this.attrs.timings.intro) {
        var textAnimDur = this.introDur * 0.75;
        var introGroup = new MotorCortex__default["default"].Group(); // Axis Intro Control

        var axisCombo = new MotorCortex__default["default"].Combo({
          incidents: [{
            incidentClass: MotorCortex.CSSEffect,
            attrs: {
              animatedAttrs: {
                height: "70%"
              },
              initialValues: {
                height: "0%"
              }
            },
            props: {
              selector: ".y-axis",
              duration: Math.trunc(this.introDur * 0.2),
              easing: "easeInQuad"
            },
            position: Math.trunc(this.introDur * 0)
          }, {
            incidentClass: MotorCortex.CSSEffect,
            attrs: {
              animatedAttrs: {
                width: "74%"
              },
              initialValues: {
                width: "0%"
              }
            },
            props: {
              selector: ".x-axis",
              duration: Math.trunc(this.introDur * 0.3),
              easing: "easeOutQuad"
            },
            position: Math.trunc(this.introDur * 0.2)
          }]
        }, {
          selector: ".container-barChart"
        });
        introGroup.addIncident(axisCombo, this.introDur * 0); // GridLines Intro Control

        var gridLinesAnim = new MotorCortex.CSSEffect({
          animatedAttrs: {
            width: "100%"
          },
          initialValues: {
            width: "0%"
          }
        }, {
          selector: ".gridLine",
          duration: Math.trunc(this.introDur * 0.5),
          easing: "easeOutQuad"
        });
        introGroup.addIncident(gridLinesAnim, Math.trunc(this.introDur * 0.2)); // Title Bar Intro Control

        var titlesAnim = new MotorCortex__default["default"].Group();
        titlesAnim.addIncident(new MotorCortex.CSSEffect({
          animatedAttrs: {
            width: "100%"
          },
          initialValues: {
            width: "0%"
          }
        }, {
          selector: ".title-background",
          duration: Math.trunc(this.introDur * 0.25),
          easing: "easeInOutQuad"
        }), 0); // Main Title Intro: letter animation control

        var titleDur = this.introDur * 0.7;
        var titleLetterDur = titleDur * 2 / (this.title.length + 1);
        var titleIncidents = [];

        for (var i in this.title) {
          titleIncidents.push({
            incidentClass: MotorCortex.CSSEffect,
            attrs: {
              animatedAttrs: {
                left: "0px",
                opacity: 1
              },
              initialValues: {
                left: "20px",
                opacity: 0
              }
            },
            props: {
              selector: "#letter-".concat(i),
              duration: Math.trunc(titleLetterDur),
              easing: "easeOutQuart"
            },
            position: Math.trunc(titleLetterDur * i / 2)
          });
        }

        var titleCombo = new MotorCortex__default["default"].Combo({
          incidents: titleIncidents
        }, {
          selector: ".title-wrapper"
        });
        titlesAnim.addIncident(titleCombo, Math.trunc(this.introDur * 0.25)); // Subtitle Intro: letter animation control

        var subtitleDur = this.introDur * 0.8;
        var subLetterDur = subtitleDur * 2 / (this.subtitle.length + 1);
        var subIncidents = [];

        for (var _i4 in this.subtitle) {
          subIncidents.push({
            incidentClass: MotorCortex.CSSEffect,
            attrs: {
              animatedAttrs: {
                left: "0px",
                opacity: 1
              },
              initialValues: {
                left: "20px",
                opacity: 0
              }
            },
            props: {
              selector: "#letter-".concat(_i4),
              duration: Math.trunc(subLetterDur),
              easing: "easeOutQuart"
            },
            position: Math.trunc(subLetterDur * _i4 / 2)
          });
        }

        var subtitleCombo = new MotorCortex__default["default"].Combo({
          incidents: subIncidents
        }, {
          selector: ".subtitle-wrapper"
        });
        titlesAnim.addIncident(subtitleCombo, Math.trunc(this.introDur * 0.1));
        introGroup.addIncident(titlesAnim, Math.trunc(this.introDur * 0.05)); // Labels (xAxis) Intro Control

        var xLabelsAnim = new MotorCortex__default["default"].Group();
        xLabelsAnim.addIncident(new MotorCortex.CSSEffect({
          animatedAttrs: {
            width: "70%"
          },
          initialValues: {
            width: "0%"
          }
        }, {
          selector: ".x-labels-back-wrapper",
          duration: Math.trunc(this.introDur * 0.25),
          easing: "easeInOutCubic"
        }), 0); // Labels (xAxis) Intro: letter animation control

        var labelDur = textAnimDur * 2 / (this.data.length + 1);

        for (var _i5 in this.data) {
          var labelLength = this.data[_i5].name.length;
          var letterDur = labelDur * 2 / (labelLength + 1);
          var incidents = [];

          for (var z in this.data[_i5].name) {
            incidents.push({
              incidentClass: MotorCortex.CSSEffect,
              attrs: {
                animatedAttrs: {
                  top: "0px",
                  opacity: 1
                },
                initialValues: {
                  top: "-30px",
                  opacity: 0
                }
              },
              props: {
                selector: "#letter-".concat(_i5, "-").concat(z),
                duration: Math.trunc(letterDur),
                easing: "easeOutQuart"
              },
              position: Math.trunc(letterDur * z / 2)
            });
          }

          var datumCombo = new MotorCortex__default["default"].Combo({
            incidents: incidents
          }, {
            selector: ".label-container"
          });
          xLabelsAnim.addIncident(datumCombo, Math.trunc(textAnimDur / (this.data.length + 1) * _i5));
        }

        introGroup.addIncident(xLabelsAnim, Math.trunc(this.introDur * 0.05)); // Bar Intro Control

        var barAnimation = new MotorCortex__default["default"].Combo({
          incidents: [{
            incidentClass: MotorCortex.CSSEffect,
            attrs: {
              animatedAttrs: {
                height: "100%"
              },
              initialValues: {
                height: "0%"
              }
            },
            props: {
              duration: Math.trunc(this.introDur * 0.3),
              easing: "easeInOutQuad"
            },
            position: 0
          }]
        }, {
          selector: ".bar-fill",
          delay: "@stagger(0, ".concat(Math.trunc(this.introDur * 0.4), ")")
        });
        introGroup.addIncident(barAnimation, Math.trunc(this.introDur * 0.3));
        this.addIncident(introGroup, this.introDur * 0);
      } // OUTRO CONTROL


      if (this.attrs.timings.outro) {
        var _textAnimDur = this.outroDur * 0.75;

        var outroGroup = new MotorCortex__default["default"].Group(); // Axis Outro Control

        var axisCombooutro = new MotorCortex__default["default"].Combo({
          incidents: [{
            incidentClass: MotorCortex.CSSEffect,
            attrs: {
              animatedAttrs: {
                width: "0%"
              },
              initialValues: {
                width: "74%"
              }
            },
            props: {
              selector: ".x-axis",
              duration: Math.trunc(this.outroDur * 0.2),
              easing: "easeInQuad"
            },
            position: this.outroDur * 0
          }, {
            incidentClass: MotorCortex.CSSEffect,
            attrs: {
              animatedAttrs: {
                height: "0%"
              },
              initialValues: {
                height: "70%"
              }
            },
            props: {
              selector: ".y-axis",
              duration: Math.trunc(this.outroDur * 0.3),
              easing: "easeOutQuad"
            },
            position: Math.trunc(this.outroDur * 0.2)
          }]
        }, {
          selector: ".container-barChart"
        });
        outroGroup.addIncident(axisCombooutro, Math.trunc(this.outroDur * 0.5)); // GridLines Outro Control

        var gridLinesoutro = new MotorCortex.CSSEffect({
          animatedAttrs: {
            width: "0%"
          },
          initialValues: {
            width: "100%"
          }
        }, {
          selector: ".gridlines",
          easing: "easeInOutQuad",
          duration: Math.trunc(this.outroDur * 0.5)
        });
        outroGroup.addIncident(gridLinesoutro, Math.trunc(this.outroDur * 0.2)); // Title Bar Outro Control

        var titlesoutro = new MotorCortex__default["default"].Group();
        titlesoutro.addIncident(new MotorCortex.CSSEffect({
          animatedAttrs: {
            width: "0%"
          },
          initialValues: {
            width: "100%"
          }
        }, {
          selector: ".title-back-animHelper",
          duration: Math.trunc(this.outroDur * 0.45),
          easing: "easeInOutQuad"
        }), Math.trunc(this.outroDur * 0.3)); // Main Title Outro: letter animation control

        var _titleDur = this.outroDur * 0.8;

        var _letterDur = _titleDur * 2 / (this.title.length + 1);

        var _titleIncidents = [];

        for (var _i6 in this.title) {
          _titleIncidents.push({
            incidentClass: MotorCortex.CSSEffect,
            attrs: {
              animatedAttrs: {
                left: "20px",
                opacity: 0
              },
              initialValues: {
                left: "0px",
                opacity: 1
              }
            },
            props: {
              selector: "#letter-".concat(_i6),
              duration: Math.trunc(_letterDur),
              easing: "easeOutQuart"
            },
            position: Math.trunc(_letterDur * (this.title.length - _i6 - 1) / 2)
          });
        }

        var _titleCombo = new MotorCortex__default["default"].Combo({
          incidents: _titleIncidents
        }, {
          selector: ".title-wrapper"
        });

        titlesoutro.addIncident(_titleCombo, Math.trunc(this.outroDur * 0.1)); // Subtitle Outro: letter animation control

        var _subtitleDur = this.outroDur * 0.4;

        var _subLetterDur = _subtitleDur * 2 / (this.subtitle.length + 1);

        var _subIncidents = [];

        for (var _i7 in this.subtitle) {
          _subIncidents.push({
            incidentClass: MotorCortex.CSSEffect,
            attrs: {
              animatedAttrs: {
                left: "20px",
                opacity: 0
              },
              initialValues: {
                left: "0px",
                opacity: 1
              }
            },
            props: {
              selector: "#letter-".concat(_i7),
              duration: Math.trunc(_subLetterDur),
              easing: "easeOutQuart"
            },
            position: Math.trunc(_subLetterDur * (this.subtitle.length - _i7 - 1) / 2)
          });
        }

        var _subtitleCombo = new MotorCortex__default["default"].Combo({
          incidents: _subIncidents
        }, {
          selector: ".subtitle-wrapper"
        });

        titlesoutro.addIncident(_subtitleCombo, Math.trunc(this.outroDur * 0));
        outroGroup.addIncident(titlesoutro, Math.trunc(this.outroDur * 0.05)); // Labels (xAxis) Outro Control

        var xLabelsoutro = new MotorCortex__default["default"].Group();
        xLabelsoutro.addIncident(new MotorCortex.CSSEffect({
          animatedAttrs: {
            width: "0%"
          },
          initialValues: {
            width: "100%"
          }
        }, {
          selector: ".x-labels-background",
          duration: Math.trunc(this.outroDur * 0.45),
          easing: "easeInOutCubic"
        }), this.outroDur * 0.3); // Labels (xAxis) Outro: letter animation control

        var _labelDur = _textAnimDur * 2 / (this.data.length + 1);

        for (var _i8 in this.data) {
          var _labelLength = this.data[_i8].name.length;

          var _letterDur2 = _labelDur * 2 / (_labelLength + 1);

          var _incidents = [];

          for (var _z in this.data[_i8].name) {
            _incidents.push({
              incidentClass: MotorCortex.CSSEffect,
              attrs: {
                animatedAttrs: {
                  opacity: 0,
                  top: "-30px"
                },
                initialValues: {
                  opacity: 1,
                  top: "0px"
                }
              },
              props: {
                selector: "#letter-".concat(_i8, "-").concat(_z),
                duration: Math.trunc(_letterDur2),
                easing: "easeInQuart"
              },
              position: Math.trunc(_letterDur2 * _z / 2)
            });
          }

          var _datumCombo = new MotorCortex__default["default"].Combo({
            incidents: _incidents
          }, {
            selector: ".label-container"
          });

          xLabelsoutro.addIncident(_datumCombo, Math.trunc(_textAnimDur / (this.data.length + 1) * _i8));
        }

        outroGroup.addIncident(xLabelsoutro, Math.trunc(this.outroDur * 0.05)); // Bar outro Control

        var barIncidents = [];

        for (var _i9 in this.data) {
          barIncidents.push({
            incidentClass: MotorCortex.CSSEffect,
            attrs: {
              animatedAttrs: {
                height: "0%"
              },
              initialValues: {
                height: "100%"
              }
            },
            props: {
              duration: Math.trunc(this.outroDur * 0.3),
              easing: "easeInOutCubic",
              selector: "#".concat(this.data[_i9].name, "-bar-fill")
            },
            position: Math.trunc(_subLetterDur * (this.data.length - _i9 - 1) / 2)
          });
        }

        var barAnimationoutro = new MotorCortex__default["default"].Combo({
          incidents: barIncidents
        }, {
          selector: ".graph"
        });
        outroGroup.addIncident(barAnimationoutro, this.outroDur * 0);
        this.addIncident(outroGroup, 0 + this.introDur + this.staticDur);
      } // STATIC DURATION CONTROL


      var staticIncident = new MotorCortex.CSSEffect({
        animatedAttrs: {}
      }, {
        selector: ".container-barChart",
        duration: this.staticDur
      });
      this.addIncident(staticIncident, this.introDur);
    }
  }, {
    key: "buildVars",
    value: function buildVars() {
      this.data = this.attrs.data.data;
      this.title = this.attrs.data.title;
      this.subtitle = this.attrs.data.subtitle;
      this.maxPoint = 0;
      this.gridLinesNum = this.attrs.data.showGrid ? 11 : 0;
      this.attrs.palette = this.attrs.palette ? this.attrs.palette : {};
      this.primaryC = this.attrs.palette.primary ? this.attrs.palette.primary : colorPalette.gray;
      this.secondaryC = this.attrs.palette.secondary ? this.attrs.palette.secondary : colorPalette.lightGray;
      this.tertiaryC = this.attrs.palette.tertiary ? this.attrs.palette.tertiary : colorPalette.darkGray;
      this.fontC = this.attrs.palette.font ? this.attrs.palette.font : colorPalette.font;
      this.accentC = this.attrs.palette.accent ? this.attrs.palette.accent : colorPalette.accent;
      this.backgroundC = this.attrs.palette.background ? this.attrs.palette.background : colorPalette.background;
      this.attrs.font = this.attrs.font ? this.attrs.font : {};
      this.fontFamily = this.attrs.font.fontFamily ? this.attrs.font.fontFamily : "'Staatliches', cursive";
      this.fontSize = this.attrs.font.size ? this.attrs.font.size : "1.7rem";
      this.url = this.attrs.font.url ? this.attrs.font.url : "https://fonts.googleapis.com/css2?family=Staatliches&display=swap";
      this.attrs.timings = this.attrs.timings ? this.attrs.timings : {};
      this.introDur = this.attrs.timings.intro ? this.attrs.timings.intro : 0;
      this.outroDur = this.attrs.timings.outro ? this.attrs.timings.outro : 0;

      if (this.attrs.timings.static === 0) {
        this.staticDur = 0;
      } else {
        this.staticDur = this.attrs.timings.static ? this.attrs.timings.static : 1000;
      }
    }
  }]);

  return BarChartSimple;
}(MotorCortex__default["default"].HTMLClip);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}
/**
 * The purpose of Effects is to timely alter the state or value of attributes of
 * selected elements of the context, specified on the "selector"
 * property of theirs.
 *
 * The attributes of the elements that the Effect manipulates are
 * always defined on the attrs.animatedAttrs object, passed to it on its constructor.
 * Each key of this object corresponds to an attribute that the Effect will alter and the value
 * of each specifies the final value to go to.
 * On runtime, each Effect is analysed first by element and secondly
 * by animatedAttr.
 * For example an Effect that has the selector ".my-class",
 * that applies in two elements of the context, and has two animatedAttrs
 * will be analysed into four in total "MonoIncidents" (2 elements * 2 animatedAttrs).
 * Each of these produced MonoIncidents refer to a very specific element and
 * to a very specific animated attribute.
 * The Class that you are defining here extends Effect which represents exactly this MonoIncident.
 *
 * Thus, here you'll find:
 * the following properties:
 * - this.element: provides a reference to the specific element of the MonoIncident
 * - this.attributeKey: the key of the animatedAttr of the MonoIncident
 * - this.targetValue: the final value of the animatedAttr
 * - this.initialValue: the initial value of the animatedAttr
 * and the following methods:
 * - onGetContext
 * - getScratchValue
 * - onProgress
 * which are analysed more inline
 *
 **/


var Counter$2 = /*#__PURE__*/function (_MotorCortex$Effect) {
  _inherits(Counter, _MotorCortex$Effect);

  var _super = _createSuper(Counter);

  function Counter() {
    _classCallCheck(this, Counter);

    return _super.apply(this, arguments);
  }

  _createClass(Counter, [{
    key: "getScratchValue",
    value:
    /**
     * the very first MonoIncident of the specific element and the
     * specific attribute that will ever enter a Clip will be asked
     * to provide the initial (the scratch) value of its animatedAttr
     * for its element.
     **/
    function getScratchValue() {
      return 0;
    }
    /**
     * The moment the Effect gets applied as MonoIncident to the specific
     * element and for the specific animatedAttr.
     * You can use this method to initialise anything you need to initialise
     * in order to use it on the onProgress method
     **/

  }, {
    key: "onGetContext",
    value: function onGetContext() {
      this.element.innerHTML = this.initialValue;
    }
    /**
     * Takes two arguments the "fraction" which is a number from 0 to 1, representing
     * the fraction (the percentage) of the duration that we are in,
     * and the millisecond which defines the absolute millisecond.
     * You can use this method to animate your attribute.
     * Remember that you don't need to worry about easings. Easings are already
     * applied before reaching the execution of this method. This method's
     * arguments have already been re-calculated based on the easing.
     **/

  }, {
    key: "onProgress",
    value: function onProgress(fraction) {
      var currentVal = this.initialValue + (this.targetValue - this.initialValue) * fraction;

      if (this.attrs.decimals) {
        currentVal = currentVal.toFixed(this.attrs.decimals);
      } else {
        currentVal = Math.trunc(currentVal);
      }

      this.element.innerHTML = currentVal;
    }
  }]);

  return Counter;
}(MotorCortex__default["default"].Effect);

var name$1 = "@donkeyclip/motorcortex-counter";
var version$1 = "1.1.1";
var index$2 = {
  npm_name: name$1,
  // don't touch this
  version: version$1,
  // don't touch this
  incidents: [{
    exportable: Counter$2,
    name: "Counter",
    attributesValidationRules: {
      animatedAttrs: {
        type: "object",
        props: {
          count: {
            type: "number"
          }
        }
      },
      decimals: {
        type: "number",
        optional: true,
        min: 0,
        max: 20,
        integer: true
      }
    }
  }]
};

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement$1 = documentCreateElement$2;

var classList = documentCreateElement$1('span').classList;
var DOMTokenListPrototype$2 = classList && classList.constructor && classList.constructor.prototype;
var domTokenListPrototype = DOMTokenListPrototype$2 === Object.prototype ? undefined : DOMTokenListPrototype$2;

var fails$9 = fails$k;

var arrayMethodIsStrict$2 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails$9(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () {
      throw 1;
    }, 1);
  });
};

var $forEach = arrayIteration.forEach;

var arrayMethodIsStrict$1 = arrayMethodIsStrict$2;

var STRICT_METHOD$1 = arrayMethodIsStrict$1('forEach'); // `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach

var arrayForEach = !STRICT_METHOD$1 ? function forEach(callbackfn
/* , thisArg */
) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined); // eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;

var global$d = global$F;

var DOMIterables$1 = domIterables;

var DOMTokenListPrototype$1 = domTokenListPrototype;

var forEach = arrayForEach;

var createNonEnumerableProperty$4 = createNonEnumerableProperty$8;

var handlePrototype$1 = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty$4(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME$1 in DOMIterables$1) {
  if (DOMIterables$1[COLLECTION_NAME$1]) {
    handlePrototype$1(global$d[COLLECTION_NAME$1] && global$d[COLLECTION_NAME$1].prototype);
  }
}

handlePrototype$1(DOMTokenListPrototype$1);

function buildCSS$3(cssArgs) {
  var createGenerateId = function createGenerateId() {
    return function (rule) {
      return rule.key;
    };
  };

  jss.setup({
    createGenerateId: createGenerateId
  });
  var styles = {
    "container-progressBar": {
      height: "100%",
      background: cssArgs.palette.background ? cssArgs.palette.background : colorPalette.background,
      display: "flex",
      color: cssArgs.palette.font ? cssArgs.palette.font : colorPalette.font,
      "font-family": cssArgs.font.fontFamily ? cssArgs.font.fontFamily : "'Staatliches', cursive"
    },
    row: {
      display: "flex",
      "flex-direction": "row",
      position: "absolute",
      left: "20%",
      "align-items": "center",
      height: "".concat(60 / cssArgs.barCount, "%"),
      width: "100%"
    },
    "container-bar": {
      position: "absolute",
      height: "100%",
      background: cssArgs.palette.secondary ? cssArgs.palette.secondary : colorPalette.darkGray,
      "border-radius": "4rem",
      width: "60%",
      "box-shadow": "2px 2px 5px gray",
      border: "0.2rem solid ".concat(cssArgs.palette.accent ? cssArgs.palette.accent : colorPalette.accent),
      "z-index": "1",
      overflow: "hidden"
    },
    "inner-bar": {
      position: "relative",
      background: cssArgs.palette.primary ? cssArgs.palette.primary : colorPalette.lightGray,
      height: "102%",
      "border-radius": "4rem",
      bottom: "-1px",
      "z-index": "2px",
      top: "-0.5px"
    },
    text: {
      position: "relative",
      "z-index": "0",
      opacity: "1",
      left: "62%",
      "font-size": cssArgs.font.size ? cssArgs.font.size : "1.2rem"
    },
    "bar-header": {
      position: "absolute",
      left: "-21%",
      "text-align": "right",
      width: "20%",
      "font-size": cssArgs.font.size ? cssArgs.font.size : "1.2rem"
    }
  };
  var avg = cssArgs.barSum / cssArgs.barCount;
  cssArgs.data.forEach(function (elem, index) {
    styles["row-".concat(index)] = {
      bottom: "".concat(50 + (avg - index) * 100 / cssArgs.barCount - 60 / cssArgs.barCount * 2.15, "%")
    };
    styles["inner-bar-".concat(index)] = {
      width: "".concat(elem.value.toFixed(2), "%")
    };
  });
  var styleSheet = jss.createStyleSheet(styles).toString();
  return styleSheet;
}

var Counter$1 = MotorCortex__default["default"].loadPlugin(index$2);
/**
 * The purpose of extending the HTMLClip is to full, parametric
 * HTMLClips with both context and Incidents.
 *
 * HTMLClip allows you to set your html, css, fonts and audioSources
 * upfront by the corresponding getter methods. You can use the this.attrs
 * reference on these methods so you can generate dynamic content.
 * Overwrite ONLY the ones you are interested in, ignore the rest.
 * The buildTree method allows developers to define Incidents (of any plugin)
 * dynamically and position them on the Clip.
 */

var ProgressBar = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits$1(ProgressBar, _MotorCortex$HTMLClip);

  var _super = _createSuper$1(ProgressBar);

  function ProgressBar() {
    _classCallCheck$1(this, ProgressBar);

    return _super.apply(this, arguments);
  }

  _createClass$2(ProgressBar, [{
    key: "html",
    get: function get() {
      var _this = this;

      var list = this.attrs.data.map(function (elem, index) {
        var _this$attrs$options;

        return MotorCortex__default["default"].utils.createDOMElement("div", {
          class: "row row-" + index
        }, MotorCortex__default["default"].utils.createDOMElement("div", {
          class: "bar-header"
        }, elem.name), MotorCortex__default["default"].utils.createDOMElement("div", {
          class: "container-bar container-bar-" + index
        }, MotorCortex__default["default"].utils.createDOMElement("div", {
          class: "inner-bar inner-bar-" + index + " " + (elem.value < _this.criticalValue ? "extra-trunced-" + index : null)
        })), MotorCortex__default["default"].utils.createDOMElement("div", {
          class: "text indicator-".concat(index)
        }, elem.value), MotorCortex__default["default"].utils.createDOMElement("div", {
          class: "text text-unit"
        }, !((_this$attrs$options = _this.attrs.options) !== null && _this$attrs$options !== void 0 && _this$attrs$options.hidePercentage) ? "%" : null));
      });
      return MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "container-progressBar"
      }, list);
    }
  }, {
    key: "css",
    get: function get() {
      var cssArgs = {
        barSum: this.barSum,
        barCount: this.barCount,
        data: this.attrs.data,
        palette: this.attrs.palette ? this.attrs.palette : {},
        font: this.attrs.font ? this.attrs.font : {},
        options: this.attrs.options ? this.attrs.options : {}
      };
      return buildCSS$3(cssArgs);
    }
  }, {
    key: "fonts",
    get: function get() {
      var _this$attrs$font;

      return [{
        type: "google-font",
        src: (_this$attrs$font = this.attrs.font) !== null && _this$attrs$font !== void 0 && _this$attrs$font.url ? this.attrs.font.url : "https://fonts.googleapis.com/css2?family=Staatliches&display=swap"
      }];
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var _this$attrs$timings;

      if (this.attrs.timings.static === 0) {
        this.static = 0;
      } else {
        this.static = this.attrs.timings.static ? this.attrs.timings.static : 1000;
      }

      this.intro = this.attrs.timings.intro ? this.attrs.timings.intro : 0;
      this.outro = this.attrs.timings.outro ? this.attrs.timings.outro : 0;
      var avg = this.barSum / this.barCount;
      fadeOutOpacityControl(this, ".container-progressBar");

      if ((_this$attrs$timings = this.attrs.timings) !== null && _this$attrs$timings !== void 0 && _this$attrs$timings.intro) {
        var slideInDuration = Math.floor(this.intro * 0.33);
        var expandBaseDuration = Math.floor(this.intro * 0.25);
        var expandBarDuration = Math.floor(this.intro * 0.33);

        for (var i = 0; i < this.barCount; i++) {
          var slideIn = new MotorCortex.CSSEffect({
            animatedAttrs: {
              bottom: "".concat(50 + (avg - i) * 100 / this.barCount - 60 / this.barCount * 2.15, "%"),
              opacity: 1
            },
            initialValues: {
              bottom: "-".concat(65 / this.barCount, "%"),
              opacity: 0
            }
          }, {
            duration: slideInDuration,
            selector: ".row-".concat(i),
            easing: "easeInOutQuad"
          });
          var expand_base = new MotorCortex.CSSEffect({
            animatedAttrs: {
              width: "60%"
            },
            initialValues: {
              width: "0.2%"
            }
          }, {
            duration: expandBaseDuration,
            selector: ".container-bar-".concat(i),
            easing: "easeInOutQuad"
          });
          var expand_bar = new MotorCortex.CSSEffect({
            animatedAttrs: {
              width: "".concat(this.attrs.data[i].value.toFixed(2), "%")
            },
            initialValues: {
              width: "0%"
            }
          }, {
            duration: expandBarDuration,
            selector: ".inner-bar-".concat(i),
            easing: "easeInOutQuad"
          });
          var indicatorCounter = new Counter$1.Counter({
            animatedAttrs: {
              count: this.attrs.data[i].value
            },
            initialValues: {
              count: 0
            }
          }, {
            easing: "easeInOutQuad",
            selector: ".indicator-".concat(i),
            duration: expandBarDuration
          });
          this.addIncident(slideIn, 0);
          this.addIncident(expand_base, slideInDuration);
          this.addIncident(expand_bar, slideInDuration + expandBaseDuration);
          this.addIncident(indicatorCounter, slideInDuration + expandBaseDuration);
        }

        var expand_text = new MotorCortex.CSSEffect({
          animatedAttrs: {
            left: "62%",
            opacity: 1
          },
          initialValues: {
            left: "0%",
            opacity: 0
          }
        }, {
          duration: expandBarDuration,
          selector: ".text",
          easing: "easeInOutQuad"
        });
        this.addIncident(expand_text, slideInDuration);
      }

      var staticGraph = new MotorCortex.CSSEffect({
        animatedAttrs: {}
      }, {
        duration: this.static,
        selector: ".container-progressBar"
      });
      this.addIncident(staticGraph, this.intro);

      if (this.outro) {
        var bufferTime = this.intro + this.static + this.outro;

        var _slideInDuration = Math.floor(this.outro * 0.33);

        var _expandBaseDuration = Math.floor(this.outro * 0.25);

        var _expandBarDuration = Math.floor(this.outro * 0.33);

        for (var _i = 0; _i < this.barCount; _i++) {
          var _slideIn = new MotorCortex.CSSEffect({
            animatedAttrs: {
              bottom: "-".concat(65 / this.barCount, "%"),
              opacity: 0
            },
            initialValues: {
              bottom: "".concat(50 + (avg - _i) * 100 / this.barCount - 60 / this.barCount * 2.15, "%"),
              opacity: 1
            }
          }, {
            duration: _slideInDuration,
            selector: ".row-".concat(_i),
            easing: "easeInOutQuad"
          });

          var _expand_base = new MotorCortex.CSSEffect({
            animatedAttrs: {
              width: "0.2%"
            },
            initialValues: {
              width: "60%"
            }
          }, {
            duration: _expandBaseDuration,
            selector: ".container-bar-".concat(_i),
            easing: "easeInOutQuad"
          });

          var _expand_bar = new MotorCortex.CSSEffect({
            animatedAttrs: {
              width: "0%"
            },
            initialValues: {
              width: "".concat(this.attrs.data[_i].value.toFixed(2), "%")
            }
          }, {
            duration: _expandBarDuration,
            selector: ".inner-bar-".concat(_i),
            easing: "easeInOutQuad"
          });

          var _indicatorCounter = new Counter$1.Counter({
            animatedAttrs: {
              count: 0
            },
            initialValues: {
              count: this.attrs.data[_i].value
            }
          }, {
            easing: "easeInOutQuad",
            selector: ".indicator-".concat(_i),
            duration: _expandBarDuration
          });

          this.addIncident(_slideIn, bufferTime - _slideInDuration);
          this.addIncident(_expand_base, bufferTime - _slideInDuration - _expandBaseDuration);
          this.addIncident(_expand_bar, bufferTime - _slideInDuration - _expandBaseDuration - _expandBarDuration);
          this.addIncident(_indicatorCounter, bufferTime - _slideInDuration - _expandBaseDuration - _expandBarDuration);
        }

        var _expand_text = new MotorCortex.CSSEffect({
          animatedAttrs: {
            left: "0%",
            opacity: 0
          },
          initialValues: {
            left: "62%",
            opacity: 1
          }
        }, {
          duration: _expandBarDuration,
          selector: ".text",
          easing: "easeInOutQuad"
        });

        this.addIncident(_expand_text, bufferTime - _slideInDuration - _expandBaseDuration * 1.1);
      }
    }
  }, {
    key: "barSum",
    get: function get() {
      var sum = 0;

      for (var i = 1; i <= this.barCount; i++) {
        sum += i;
      }

      return sum;
    }
  }, {
    key: "barCount",
    get: function get() {
      return this.attrs.data.length;
    }
  }, {
    key: "criticalValue",
    get: function get() {
      if (this.barCount / 10 === 1) {
        return this.barCount / 10 * 10;
      } else if (this.barCount / 10 > 1) {
        return (this.barCount / 10 - 1) * 10;
      } else {
        return (this.barCount / 10 + 1) * 10;
      }
    }
  }]);

  return ProgressBar;
}(MotorCortex__default["default"].HTMLClip);

var $$2 = _export;

var uncurryThis$8 = functionUncurryThis;

var IndexedObject = indexedObject;

var toIndexedObject$2 = toIndexedObject$7;

var arrayMethodIsStrict = arrayMethodIsStrict$2;

var un$Join = uncurryThis$8([].join);
var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ','); // `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join

$$2({
  target: 'Array',
  proto: true,
  forced: ES3_STRINGS || !STRICT_METHOD
}, {
  join: function join(separator) {
    return un$Join(toIndexedObject$2(this), separator === undefined ? ',' : separator);
  }
});

var global$c = global$F;

var isCallable$5 = isCallable$h;

var String$1 = global$c.String;
var TypeError$6 = global$c.TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable$5(argument)) return argument;
  throw TypeError$6("Can't set " + String$1(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */

var uncurryThis$7 = functionUncurryThis;

var anObject$6 = anObject$b;

var aPossiblePrototype = aPossiblePrototype$1; // `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe


var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;

  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis$7(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) {
    /* empty */
  }

  return function setPrototypeOf(O, proto) {
    anObject$6(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var isCallable$4 = isCallable$h;

var isObject$1 = isObject$a;

var setPrototypeOf$1 = objectSetPrototypeOf; // makes subclassing work correct for wrapped built-ins


var inheritIfRequired$2 = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if ( // it can work only with native `setPrototypeOf`
  setPrototypeOf$1 && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
  isCallable$4(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject$1(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf$1($this, NewTargetPrototype);
  return $this;
};

var isObject = isObject$a;

var classof$3 = classofRaw$1;

var wellKnownSymbol$9 = wellKnownSymbol$h;

var MATCH$1 = wellKnownSymbol$9('match'); // `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp

var isRegexp = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof$3(it) == 'RegExp');
};

var regexpStickyHelpers = {};

var fails$8 = fails$k;

var global$b = global$F; // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError


var $RegExp$2 = global$b.RegExp;
regexpStickyHelpers.UNSUPPORTED_Y = fails$8(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});
regexpStickyHelpers.BROKEN_CARET = fails$8(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp$2('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

var getBuiltIn$1 = getBuiltIn$6;

var definePropertyModule$2 = objectDefineProperty;

var wellKnownSymbol$8 = wellKnownSymbol$h;

var DESCRIPTORS$5 = descriptors;

var SPECIES$2 = wellKnownSymbol$8('species');

var setSpecies$1 = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn$1(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule$2.f;

  if (DESCRIPTORS$5 && Constructor && !Constructor[SPECIES$2]) {
    defineProperty(Constructor, SPECIES$2, {
      configurable: true,
      get: function () {
        return this;
      }
    });
  }
};

var fails$7 = fails$k;

var global$a = global$F; // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError


var $RegExp$1 = global$a.RegExp;
var regexpUnsupportedDotAll = fails$7(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails$6 = fails$k;

var global$9 = global$F; // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError


var $RegExp = global$9.RegExp;
var regexpUnsupportedNcg = fails$6(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' || 'b'.replace(re, '$<a>c') !== 'bc';
});

var DESCRIPTORS$4 = descriptors;

var global$8 = global$F;

var uncurryThis$6 = functionUncurryThis;

var isForced$1 = isForced_1;

var inheritIfRequired$1 = inheritIfRequired$2;

var createNonEnumerableProperty$3 = createNonEnumerableProperty$8;

var defineProperty$4 = objectDefineProperty.f;

var getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;

var isPrototypeOf$1 = objectIsPrototypeOf;

var isRegExp$1 = isRegexp;

var toString$5 = toString$8;

var regExpFlags = regexpFlags$1;

var stickyHelpers$2 = regexpStickyHelpers;

var redefine$4 = redefine$8.exports;

var fails$5 = fails$k;

var hasOwn$3 = hasOwnProperty_1;

var enforceInternalState = internalState.enforce;

var setSpecies = setSpecies$1;

var wellKnownSymbol$7 = wellKnownSymbol$h;

var UNSUPPORTED_DOT_ALL$2 = regexpUnsupportedDotAll;

var UNSUPPORTED_NCG$1 = regexpUnsupportedNcg;

var MATCH = wellKnownSymbol$7('match');
var NativeRegExp = global$8.RegExp;
var RegExpPrototype$3 = NativeRegExp.prototype;
var SyntaxError = global$8.SyntaxError;
var getFlags = uncurryThis$6(regExpFlags);
var exec$2 = uncurryThis$6(RegExpPrototype$3.exec);
var charAt$3 = uncurryThis$6(''.charAt);
var replace$2 = uncurryThis$6(''.replace);
var stringIndexOf = uncurryThis$6(''.indexOf);
var stringSlice$3 = uncurryThis$6(''.slice); // TODO: Use only propper RegExpIdentifierName

var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1 = /a/g;
var re2 = /a/g; // "new" should create a new object, old webkit bug

var CORRECT_NEW = new NativeRegExp(re1) !== re1;
var UNSUPPORTED_Y$3 = stickyHelpers$2.UNSUPPORTED_Y;
var BASE_FORCED = DESCRIPTORS$4 && (!CORRECT_NEW || UNSUPPORTED_Y$3 || UNSUPPORTED_DOT_ALL$2 || UNSUPPORTED_NCG$1 || fails$5(function () {
  re2[MATCH] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match

  return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
}));

var handleDotAll = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var brackets = false;
  var chr;

  for (; index <= length; index++) {
    chr = charAt$3(string, index);

    if (chr === '\\') {
      result += chr + charAt$3(string, ++index);
      continue;
    }

    if (!brackets && chr === '.') {
      result += '[\\s\\S]';
    } else {
      if (chr === '[') {
        brackets = true;
      } else if (chr === ']') {
        brackets = false;
      }

      result += chr;
    }
  }

  return result;
};

var handleNCG = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var named = [];
  var names = {};
  var brackets = false;
  var ncg = false;
  var groupid = 0;
  var groupname = '';
  var chr;

  for (; index <= length; index++) {
    chr = charAt$3(string, index);

    if (chr === '\\') {
      chr = chr + charAt$3(string, ++index);
    } else if (chr === ']') {
      brackets = false;
    } else if (!brackets) switch (true) {
      case chr === '[':
        brackets = true;
        break;

      case chr === '(':
        if (exec$2(IS_NCG, stringSlice$3(string, index + 1))) {
          index += 2;
          ncg = true;
        }

        result += chr;
        groupid++;
        continue;

      case chr === '>' && ncg:
        if (groupname === '' || hasOwn$3(names, groupname)) {
          throw new SyntaxError('Invalid capture group name');
        }

        names[groupname] = true;
        named[named.length] = [groupname, groupid];
        ncg = false;
        groupname = '';
        continue;
    }

    if (ncg) groupname += chr;else result += chr;
  }

  return [result, named];
}; // `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor


if (isForced$1('RegExp', BASE_FORCED)) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = isPrototypeOf$1(RegExpPrototype$3, this);
    var patternIsRegExp = isRegExp$1(pattern);
    var flagsAreUndefined = flags === undefined;
    var groups = [];
    var rawPattern = pattern;
    var rawFlags, dotAll, sticky, handled, result, state;

    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
      return pattern;
    }

    if (patternIsRegExp || isPrototypeOf$1(RegExpPrototype$3, pattern)) {
      pattern = pattern.source;
      if (flagsAreUndefined) flags = 'flags' in rawPattern ? rawPattern.flags : getFlags(rawPattern);
    }

    pattern = pattern === undefined ? '' : toString$5(pattern);
    flags = flags === undefined ? '' : toString$5(flags);
    rawPattern = pattern;

    if (UNSUPPORTED_DOT_ALL$2 && 'dotAll' in re1) {
      dotAll = !!flags && stringIndexOf(flags, 's') > -1;
      if (dotAll) flags = replace$2(flags, /s/g, '');
    }

    rawFlags = flags;

    if (UNSUPPORTED_Y$3 && 'sticky' in re1) {
      sticky = !!flags && stringIndexOf(flags, 'y') > -1;
      if (sticky) flags = replace$2(flags, /y/g, '');
    }

    if (UNSUPPORTED_NCG$1) {
      handled = handleNCG(pattern);
      pattern = handled[0];
      groups = handled[1];
    }

    result = inheritIfRequired$1(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype$3, RegExpWrapper);

    if (dotAll || sticky || groups.length) {
      state = enforceInternalState(result);

      if (dotAll) {
        state.dotAll = true;
        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
      }

      if (sticky) state.sticky = true;
      if (groups.length) state.groups = groups;
    }

    if (pattern !== rawPattern) try {
      // fails in old engines, but we have no alternatives for unsupported regex syntax
      createNonEnumerableProperty$3(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
    } catch (error) {
      /* empty */
    }
    return result;
  };

  var proxy = function (key) {
    key in RegExpWrapper || defineProperty$4(RegExpWrapper, key, {
      configurable: true,
      get: function () {
        return NativeRegExp[key];
      },
      set: function (it) {
        NativeRegExp[key] = it;
      }
    });
  };

  for (var keys$1 = getOwnPropertyNames$1(NativeRegExp), index$1 = 0; keys$1.length > index$1;) {
    proxy(keys$1[index$1++]);
  }

  RegExpPrototype$3.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype$3;
  redefine$4(global$8, 'RegExp', RegExpWrapper);
} // https://tc39.es/ecma262/#sec-get-regexp-@@species


setSpecies('RegExp');

var global$7 = global$F;

var DESCRIPTORS$3 = descriptors;

var UNSUPPORTED_DOT_ALL$1 = regexpUnsupportedDotAll;

var classof$2 = classofRaw$1;

var defineProperty$3 = objectDefineProperty.f;

var getInternalState$3 = internalState.get;

var RegExpPrototype$2 = RegExp.prototype;
var TypeError$5 = global$7.TypeError; // `RegExp.prototype.dotAll` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.dotall

if (DESCRIPTORS$3 && UNSUPPORTED_DOT_ALL$1) {
  defineProperty$3(RegExpPrototype$2, 'dotAll', {
    configurable: true,
    get: function () {
      if (this === RegExpPrototype$2) return undefined; // We can't use InternalStateModule.getterFor because
      // we don't add metadata for regexps created by a literal.

      if (classof$2(this) === 'RegExp') {
        return !!getInternalState$3(this).dotAll;
      }

      throw TypeError$5('Incompatible receiver, RegExp required');
    }
  });
}

var internalObjectKeys = objectKeysInternal;

var enumBugKeys$1 = enumBugKeys$3; // `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe


var objectKeys$1 = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};

var DESCRIPTORS$2 = descriptors;

var definePropertyModule$1 = objectDefineProperty;

var anObject$5 = anObject$b;

var toIndexedObject$1 = toIndexedObject$7;

var objectKeys = objectKeys$1; // `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe


var objectDefineProperties = DESCRIPTORS$2 ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$5(O);
  var props = toIndexedObject$1(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;

  while (length > index) definePropertyModule$1.f(O, key = keys[index++], props[key]);

  return O;
};

var getBuiltIn = getBuiltIn$6;

var html$1 = getBuiltIn('document', 'documentElement');

/* global ActiveXObject -- old IE, WSH */

var anObject$4 = anObject$b;

var defineProperties = objectDefineProperties;

var enumBugKeys = enumBugKeys$3;

var hiddenKeys = hiddenKeys$4;

var html = html$1;

var documentCreateElement = documentCreateElement$2;

var sharedKey$1 = sharedKey$3;

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO$1 = sharedKey$1('IE_PROTO');

var EmptyConstructor = function () {
  /* empty */
};

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
}; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak

  return temp;
}; // Create object with fake `null` prototype: use iframe Object with cleared prototype


var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
}; // Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug


var activeXDocument;

var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) {
    /* ignore */
  }

  NullProtoObject = typeof document != 'undefined' ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) // old IE
  : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument); // WSH

  var length = enumBugKeys.length;

  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];

  return NullProtoObject();
};

hiddenKeys[IE_PROTO$1] = true; // `Object.create` method
// https://tc39.es/ecma262/#sec-object.create

var objectCreate = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject$4(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();

  return Properties === undefined ? result : defineProperties(result, Properties);
};

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */

/* eslint-disable regexp/no-useless-quantifier -- testing */

var call$5 = functionCall;

var uncurryThis$5 = functionUncurryThis;

var toString$4 = toString$8;

var regexpFlags = regexpFlags$1;

var stickyHelpers$1 = regexpStickyHelpers;

var shared = shared$4.exports;

var create$2 = objectCreate;

var getInternalState$2 = internalState.get;

var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;

var UNSUPPORTED_NCG = regexpUnsupportedNcg;

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt$2 = uncurryThis$5(''.charAt);
var indexOf = uncurryThis$5(''.indexOf);
var replace$1 = uncurryThis$5(''.replace);
var stringSlice$2 = uncurryThis$5(''.slice);

var UPDATES_LAST_INDEX_WRONG = function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call$5(nativeExec, re1, 'a');
  call$5(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
}();

var UNSUPPORTED_Y$2 = stickyHelpers$1.UNSUPPORTED_Y || stickyHelpers$1.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.

var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$2 || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  // eslint-disable-next-line max-statements -- TODO
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState$2(re);
    var str = toString$4(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call$5(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y$2 && re.sticky;
    var flags = call$5(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace$1(flags, 'y', '');

      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice$2(str, re.lastIndex); // Support anchored sticky behavior.

      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$2(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      } // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.


      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }

    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
    match = call$5(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice$2(match.input, charsAdded);
        match[0] = stringSlice$2(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }

    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      call$5(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create$2(null);

      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

var regexpExec$3 = patchedExec;

var $$1 = _export;

var exec$1 = regexpExec$3; // `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec


$$1({
  target: 'RegExp',
  proto: true,
  forced: /./.exec !== exec$1
}, {
  exec: exec$1
});

var global$6 = global$F;

var DESCRIPTORS$1 = descriptors;

var UNSUPPORTED_Y$1 = regexpStickyHelpers.UNSUPPORTED_Y;

var classof$1 = classofRaw$1;

var defineProperty$2 = objectDefineProperty.f;

var getInternalState$1 = internalState.get;

var RegExpPrototype$1 = RegExp.prototype;
var TypeError$4 = global$6.TypeError; // `RegExp.prototype.sticky` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.sticky

if (DESCRIPTORS$1 && UNSUPPORTED_Y$1) {
  defineProperty$2(RegExpPrototype$1, 'sticky', {
    configurable: true,
    get: function () {
      if (this === RegExpPrototype$1) return undefined; // We can't use InternalStateModule.getterFor because
      // we don't add metadata for regexps created by a literal.

      if (classof$1(this) === 'RegExp') {
        return !!getInternalState$1(this).sticky;
      }

      throw TypeError$4('Incompatible receiver, RegExp required');
    }
  });
}

var uncurryThis$4 = functionUncurryThis;

var redefine$3 = redefine$8.exports;

var regexpExec$2 = regexpExec$3;

var fails$4 = fails$k;

var wellKnownSymbol$6 = wellKnownSymbol$h;

var createNonEnumerableProperty$2 = createNonEnumerableProperty$8;

var SPECIES$1 = wellKnownSymbol$6('species');
var RegExpPrototype = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$6(KEY);
  var DELEGATES_TO_SYMBOL = !fails$4(function () {
    // String methods call symbol-named RegEp methods
    var O = {};

    O[SYMBOL] = function () {
      return 7;
    };

    return ''[KEY](O) != 7;
  });
  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$4(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {}; // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.

      re.constructor = {};

      re.constructor[SPECIES$1] = function () {
        return re;
      };

      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () {
      execCalled = true;
      return null;
    };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
    var uncurriedNativeRegExpMethod = uncurryThis$4(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis$4(nativeMethod);
      var $exec = regexp.exec;

      if ($exec === regexpExec$2 || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return {
            done: true,
            value: uncurriedNativeRegExpMethod(regexp, str, arg2)
          };
        }

        return {
          done: true,
          value: uncurriedNativeMethod(str, regexp, arg2)
        };
      }

      return {
        done: false
      };
    });
    redefine$3(String.prototype, KEY, methods[0]);
    redefine$3(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty$2(RegExpPrototype[SYMBOL], 'sham', true);
};

var uncurryThis$3 = functionUncurryThis;

var toIntegerOrInfinity = toIntegerOrInfinity$5;

var toString$3 = toString$8;

var requireObjectCoercible$3 = requireObjectCoercible$7;

var charAt$1 = uncurryThis$3(''.charAt);
var charCodeAt$1 = uncurryThis$3(''.charCodeAt);
var stringSlice$1 = uncurryThis$3(''.slice);

var createMethod$1 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$3(requireObjectCoercible$3($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt$1(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = charCodeAt$1(S, position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? charAt$1(S, position) : first : CONVERT_TO_STRING ? stringSlice$1(S, position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$1(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$1(true)
};

var charAt = stringMultibyte.charAt; // `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex


var advanceStringIndex$2 = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};

var global$5 = global$F;

var call$4 = functionCall;

var anObject$3 = anObject$b;

var isCallable$3 = isCallable$h;

var classof = classofRaw$1;

var regexpExec$1 = regexpExec$3;

var TypeError$3 = global$5.TypeError; // `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec

var regexpExecAbstract = function (R, S) {
  var exec = R.exec;

  if (isCallable$3(exec)) {
    var result = call$4(exec, R, S);
    if (result !== null) anObject$3(result);
    return result;
  }

  if (classof(R) === 'RegExp') return call$4(regexpExec$1, R, S);
  throw TypeError$3('RegExp#exec called on incompatible receiver');
};

var call$3 = functionCall;

var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;

var anObject$2 = anObject$b;

var toLength$1 = toLength$3;

var toString$2 = toString$8;

var requireObjectCoercible$2 = requireObjectCoercible$7;

var getMethod$1 = getMethod$3;

var advanceStringIndex$1 = advanceStringIndex$2;

var regExpExec = regexpExecAbstract; // @@match logic


fixRegExpWellKnownSymbolLogic$1('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [// `String.prototype.match` method
  // https://tc39.es/ecma262/#sec-string.prototype.match
  function match(regexp) {
    var O = requireObjectCoercible$2(this);
    var matcher = regexp == undefined ? undefined : getMethod$1(regexp, MATCH);
    return matcher ? call$3(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$2(O));
  }, // `RegExp.prototype[@@match]` method
  // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
  function (string) {
    var rx = anObject$2(this);
    var S = toString$2(string);
    var res = maybeCallNative(nativeMatch, rx, S);
    if (res.done) return res.value;
    if (!rx.global) return regExpExec(rx, S);
    var fullUnicode = rx.unicode;
    rx.lastIndex = 0;
    var A = [];
    var n = 0;
    var result;

    while ((result = regExpExec(rx, S)) !== null) {
      var matchStr = toString$2(result[0]);
      A[n] = matchStr;
      if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$1(rx.lastIndex), fullUnicode);
      n++;
    }

    return n === 0 ? null : A;
  }];
});

// a string of all valid unicode whitespaces
var whitespaces$1 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' + '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var uncurryThis$2 = functionUncurryThis;

var requireObjectCoercible$1 = requireObjectCoercible$7;

var toString$1 = toString$8;

var whitespaces = whitespaces$1;

var replace = uncurryThis$2(''.replace);
var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$'); // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation

var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString$1(requireObjectCoercible$1($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '');
    return string;
  };
};

var stringTrim = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};

var DESCRIPTORS = descriptors;

var global$4 = global$F;

var uncurryThis$1 = functionUncurryThis;

var isForced = isForced_1;

var redefine$2 = redefine$8.exports;

var hasOwn$2 = hasOwnProperty_1;

var inheritIfRequired = inheritIfRequired$2;

var isPrototypeOf = objectIsPrototypeOf;

var isSymbol = isSymbol$3;

var toPrimitive = toPrimitive$2;

var fails$3 = fails$k;

var getOwnPropertyNames = objectGetOwnPropertyNames.f;

var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;

var defineProperty$1 = objectDefineProperty.f;

var thisNumberValue = thisNumberValue$2;

var trim = stringTrim.trim;

var NUMBER = 'Number';
var NativeNumber = global$4[NUMBER];
var NumberPrototype = NativeNumber.prototype;
var TypeError$2 = global$4.TypeError;
var arraySlice$1 = uncurryThis$1(''.slice);
var charCodeAt = uncurryThis$1(''.charCodeAt); // `ToNumeric` abstract operation
// https://tc39.es/ecma262/#sec-tonumeric

var toNumeric = function (value) {
  var primValue = toPrimitive(value, 'number');
  return typeof primValue == 'bigint' ? primValue : toNumber(primValue);
}; // `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber


var toNumber = function (argument) {
  var it = toPrimitive(argument, 'number');
  var first, third, radix, maxCode, digits, length, index, code;
  if (isSymbol(it)) throw TypeError$2('Cannot convert a Symbol value to a number');

  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = charCodeAt(it, 0);

    if (first === 43 || first === 45) {
      third = charCodeAt(it, 2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (charCodeAt(it, 1)) {
        case 66:
        case 98:
          radix = 2;
          maxCode = 49;
          break;
        // fast equal of /^0b[01]+$/i

        case 79:
        case 111:
          radix = 8;
          maxCode = 55;
          break;
        // fast equal of /^0o[0-7]+$/i

        default:
          return +it;
      }

      digits = arraySlice$1(it, 2);
      length = digits.length;

      for (index = 0; index < length; index++) {
        code = charCodeAt(digits, index); // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols

        if (code < 48 || code > maxCode) return NaN;
      }

      return parseInt(digits, radix);
    }
  }

  return +it;
}; // `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor


if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
    var dummy = this; // check on 1..constructor(foo) case

    return isPrototypeOf(NumberPrototype, dummy) && fails$3(function () {
      thisNumberValue(dummy);
    }) ? inheritIfRequired(Object(n), dummy, NumberWrapper) : n;
  };

  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : ( // ES3:
  'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + // ES2015 (in case, if modules with ES2015 Number statics required before):
  'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' + // ESNext
  'fromString,range').split(','), j = 0, key; keys.length > j; j++) {
    if (hasOwn$2(NativeNumber, key = keys[j]) && !hasOwn$2(NumberWrapper, key)) {
      defineProperty$1(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }

  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine$2(global$4, NUMBER, NumberWrapper);
}

var helpers = {
  extractUnitsNums: function extractUnitsNums(givenString) {
    var numberPartRegexp = new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)", "gi");
    var widthNumberPart = givenString.match(numberPartRegexp)[0];
    var widthUnitPart = givenString.substring(widthNumberPart.length);

    if (isNumber(Number(widthNumberPart)) && (widthUnitPart !== "%" || widthUnitPart !== "px")) {
      return {
        number: Number(widthNumberPart),
        unit: widthUnitPart
      };
    }
  }
};

function isNumber(value) {
  return typeof value === "number" && isFinite(value);
}

function buildCSS$2(progressMeter) {
  var createGenerateId = function createGenerateId() {
    return function (rule) {
      return rule.key;
    };
  };

  jss.setup({
    createGenerateId: createGenerateId
  });
  var styles = {
    "container-progressMeter": {
      width: "100%",
      height: "100%",
      display: "flex",
      "justify-content": "center",
      "align-items": "center",
      "flex-direction": "column",
      "font-family": progressMeter.fontFamily,
      "font-size": progressMeter.fontSize,
      "background-color": progressMeter.backgroundC
    },
    "svg-container": {
      width: "".concat(progressMeter.boxSize, "px"),
      height: "".concat(progressMeter.boxSize, "px"),
      position: "relative"
    },
    "svg-viewbox": {
      width: "100%",
      height: "100%"
    },
    "meter-general": {
      "stroke-width": progressMeter.boxSize * 0.06,
      r: progressMeter.boxSize * 0.46,
      "stroke-linecap": "round",
      "fill-opacity": 0,
      "transform-origin": "center",
      transform: "rotate(-90deg)"
    },
    "meter-track": {
      stroke: progressMeter.accentC,
      opacity: 0.3,
      "stroke-dasharray": progressMeter.pathLength,
      "stroke-dashoffset": 0
    },
    "meter-path": {
      stroke: progressMeter.accentC,
      "stroke-dasharray": progressMeter.pathLength,
      "stroke-dashoffset": progressMeter.pathLength - progressMeter.pathLength * progressMeter.data.value / 100
    },
    "indicator-general": {
      width: "".concat(progressMeter.boxSize, "px"),
      display: "flex",
      "justify-content": "center",
      "align-items": "center",
      color: progressMeter.fontC
    },
    "indicator-label": {
      "align-items": "center"
    },
    "indicator-value": {},
    "indicator-center": {
      position: "absolute",
      "font-size": "165%"
    },
    "indicator-inner": {
      display: "flex",
      "justify-content": "center",
      "align-items": "center"
    },
    "inner-svg-container": {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0
    },
    "path-container": {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      display: "flex",
      "justify-content": "center",
      "align-items": "center"
    },
    "svg-preset": {
      width: "".concat(progressMeter.boxSize * 0.5, "px"),
      height: "".concat(progressMeter.boxSize * 0.5, "px")
    },
    "gradient-filter": {},
    "gradient-stop": {
      offset: "".concat(progressMeter.data.value, "%")
    }
  };
  var styleSheet = jss.createStyleSheet(styles).toString();
  return styleSheet;
}

var config = {
  lineGraph: {
    originalDims: {
      width: 1200,
      height: 900
    }
  },
  progressMeter: {
    originalDims: {
      width: 1200,
      height: 900
    }
  }
};

var svgPresets = {
  battery: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="48px" height="48px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>',
  backup: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="48px" height="48px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>',
  checkMark: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="48px" height="48px"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>',
  synch: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="48px" height="48px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></svg>',
  folder: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="48px" height="48px"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>'
};

var Counter = MotorCortex__default["default"].loadPlugin(index$2);
/**
 * BAR CHART SIMPLE GRAPH: MotorCortex Implementation
 */

var ProgressMeter = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits$1(ProgressMeter, _MotorCortex$HTMLClip);

  var _super = _createSuper$1(ProgressMeter);

  function ProgressMeter() {
    _classCallCheck$1(this, ProgressMeter);

    return _super.apply(this, arguments);
  }

  _createClass$2(ProgressMeter, [{
    key: "html",
    get: // Building HTML tree for incident
    function get() {
      this.buildVars(); // Building Inner SVG

      var innerImage = null;

      if (this.innerSVG) {
        var initialSVG = svgPresets[this.innerSVG] ? svgPresets[this.innerSVG] : this.innerSVG;
        var gradientControl = {
          x1: this.innerFill.rotate ? this.innerFill.revert ? 1 : 0 : 0,
          x2: this.innerFill.rotate ? this.innerFill.revert ? 0 : 1 : 0,
          y1: this.innerFill.rotate ? 0 : this.innerFill.revert ? 0 : 1,
          y2: this.innerFill.rotate ? 0 : this.innerFill.revert ? 1 : 0
        };
        var classPos = initialSVG.indexOf("<svg ") + 5;
        var customPathClass = "class=\"svg-preset\" fill=\"url(#gradientFilter)\"";
        var svgPath = [initialSVG.slice(0, classPos), customPathClass, initialSVG.slice(classPos)].join("");
        var gradientPos = svgPath.indexOf(">") + 1;
        var gradient = MotorCortex__default["default"].utils.createDOMElement("linearGradient", {
          class: "gradient-filter",
          id: "gradientFilter",
          x1: gradientControl.x1,
          x2: gradientControl.x2,
          y1: gradientControl.y1,
          y2: gradientControl.y2
        }, MotorCortex__default["default"].utils.createDOMElement("stop", {
          offset: "0%",
          "stop-opacity": "1",
          "stop-color": this.accentC
        }), MotorCortex__default["default"].utils.createDOMElement("stop", {
          offset: "".concat(this.data.value, "%"),
          "stop-opacity": "1",
          class: "gradient-stop",
          "stop-color": this.accentC
        }), MotorCortex__default["default"].utils.createDOMElement("stop", {
          offset: "".concat(this.data.value, "%"),
          "stop-opacity": "0.3",
          class: "gradient-stop",
          "stop-color": this.accentC
        }), MotorCortex__default["default"].utils.createDOMElement("stop", {
          offset: "100%",
          "stop-opacity": "0.3",
          class: "gradient-back-bottom",
          "stop-color": this.accentC
        }), MotorCortex__default["default"].utils.createDOMElement("stop", {
          offset: "100%",
          "stop-opacity": "0.0",
          class: "gradient-back-bottom",
          "stop-color": this.accentC
        }), MotorCortex__default["default"].utils.createDOMElement("stop", {
          offset: "100%",
          "stop-opacity": "0.0",
          class: "gradient-back-top",
          "stop-color": this.accentC
        })).toString();
        svgPath = [svgPath.slice(0, gradientPos), gradient, svgPath.slice(gradientPos)].join("");
        innerImage = MotorCortex__default["default"].utils.createDOMElement("div", {
          class: "inner-svg-container"
        }, MotorCortex__default["default"].utils.createDOMElement("div", {
          class: "path-container"
        }, svgPath));
      } // Bulding SVG for meter circle


      var svgViewBox = MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "svg-container"
      }, MotorCortex__default["default"].utils.createDOMElement("svg", {
        class: "svg-viewbox",
        viewbox: "0 0 ".concat(this.boxSize, " ").concat(this.boxSize)
      }, MotorCortex__default["default"].utils.createDOMElement("circle", {
        class: "meter-track meter-general",
        cx: "".concat(this.boxSize * 0.5),
        cy: "".concat(this.boxSize * 0.5),
        pathLength: this.pathLength
      }), MotorCortex__default["default"].utils.createDOMElement("circle", {
        class: "meter-path meter-general",
        cx: "".concat(this.boxSize * 0.5),
        cy: "".concat(this.boxSize * 0.5),
        pathLength: this.pathLength
      })), innerImage); // Building Meter Indicator

      var indicatorClass = this.innerSVG === null ? "indicator-center" : "indicator-label";
      var indicator = MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "indicator-general ".concat(indicatorClass)
      }, MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "indicator-value indicator-inner"
      }, this.data.value), MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "indicator-unit indicator-inner"
      }, this.data.unit)); // Complete HTML tree construction

      var progressMeterHTML = MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "container-progressMeter"
      }, svgViewBox, indicator);
      return progressMeterHTML;
    } // Build CSS rules for incident

  }, {
    key: "css",
    get: function get() {
      return buildCSS$2(this);
    } // Font API call (only google fonts API supported)

  }, {
    key: "fonts",
    get: function get() {
      return [{
        type: "google-font",
        src: "".concat(this.url)
      }];
    } // MotorCortex Animation generation and

  }, {
    key: "buildTree",
    value: function buildTree() {
      opacityControl(this, ".container-progressMeter"); // INTRO CONTROL

      if (this.attrs.timings.intro) {
        var introGroup = new MotorCortex__default["default"].Group();
        var pathAnimsDur = this.introDur * 0.7;
        var trackAnimsDur = this.introDur * 0.7; // Circle Track Intro Animation

        var circleTrackAnim = new MotorCortex.CSSEffect({
          animatedAttrs: {
            "stroke-dashoffset": 0
          },
          initialValues: {
            "stroke-dashoffset": this.pathLength
          }
        }, {
          duration: Math.trunc(trackAnimsDur),
          easing: "easeInOutCubic",
          selector: ".meter-track"
        });
        introGroup.addIncident(circleTrackAnim, 0); // Circle Path Intro Animation

        var circlePathAnim = new MotorCortex.CSSEffect({
          animatedAttrs: {
            "stroke-dashoffset": this.pathLength - this.pathLength * this.data.value / 100
          },
          initialValues: {
            "stroke-dashoffset": this.pathLength
          }
        }, {
          duration: Math.trunc(pathAnimsDur),
          easing: "easeInOutCubic",
          selector: ".meter-path"
        });
        introGroup.addIncident(circlePathAnim, Math.trunc(this.introDur * 0.3)); // Circle Track Animation Fade In Effect

        var circleTrackFadeIn = new MotorCortex.CSSEffect({
          animatedAttrs: {
            "stroke-width": this.boxSize * 0.05
          },
          initialValues: {
            "stroke-width": 0
          }
        }, {
          selector: ".meter-track",
          easing: "easeInQuart",
          duration: Math.trunc(trackAnimsDur * 0.04)
        });
        introGroup.addIncident(circleTrackFadeIn, 0); // Circle Path Animation Fade In Effect

        var circlePathFadeIn = new MotorCortex.CSSEffect({
          animatedAttrs: {
            "stroke-width": this.boxSize * 0.05
          },
          initialValues: {
            "stroke-width": 0
          }
        }, {
          selector: ".meter-path",
          easing: "easeInQuart",
          duration: Math.trunc(trackAnimsDur * 0.04)
        });
        introGroup.addIncident(circlePathFadeIn, Math.trunc(this.introDur * 0.3)); // Indicator Fade In Animation

        var indicatorFade = new MotorCortex.CSSEffect({
          animatedAttrs: {
            opacity: 1
          },
          initialValues: {
            opacity: 0
          }
        }, {
          selector: ".indicator-general",
          easing: "easeInQuart",
          duration: Math.trunc(this.introDur * 0.3)
        });
        introGroup.addIncident(indicatorFade, 0); // Indicator Counter Intro Animation

        var indicatorCounter = new Counter.Counter({
          animatedAttrs: {
            count: Math.round(this.data.value)
          }
        }, {
          selector: ".indicator-value",
          easing: "easeInOutCubic",
          duration: Math.trunc(pathAnimsDur)
        });
        introGroup.addIncident(indicatorCounter, Math.trunc(this.introDur * 0.3));

        if (this.innerSVG) {
          // Gradient Background Fill-Up Intro Animation
          var gradientBackFillBottom = new MotorCortex.CSSEffect({
            animatedAttrs: {
              offset: "100%"
            },
            initialValues: {
              offset: "".concat(0, "%")
            }
          }, {
            selector: ".gradient-back-bottom",
            easing: "easeInOutCubic",
            duration: Math.trunc(trackAnimsDur)
          });
          introGroup.addIncident(gradientBackFillBottom, 0); // Gradient Background Fill-Up Intro Animation

          var gradientFill = new MotorCortex.CSSEffect({
            animatedAttrs: {
              offset: "".concat(this.data.value, "%")
            },
            initialValues: {
              offset: "0%"
            }
          }, {
            selector: ".gradient-stop",
            easing: "easeInOutCubic",
            duration: Math.trunc(pathAnimsDur)
          });
          introGroup.addIncident(gradientFill, Math.trunc(this.introDur * 0.3));
          var svgOpacity = new MotorCortex.CSSEffect({
            animatedAttrs: {
              opacity: 1
            },
            initialValues: {
              opacity: 0
            }
          }, {
            selector: ".inner-svg-container",
            easing: "easeInCubic",
            duration: Math.trunc(this.introDur * 0.05)
          });
          introGroup.addIncident(svgOpacity, Math.trunc(this.introDur * 0.1));
        }

        this.addIncident(introGroup, 0);
      } // OUTRO CONTROL


      if (this.attrs.timings.outro) {
        var outroGroup = new MotorCortex__default["default"].Group();

        var _pathAnimsDur = this.outroDur * 0.7;

        var _trackAnimsDur = this.outroDur * 0.7; // Circle Track OUtro Animation


        var _circleTrackAnim = new MotorCortex.CSSEffect({
          animatedAttrs: {
            "stroke-dashoffset": this.pathLength
          },
          initialValues: {
            "stroke-dashoffset": 0
          }
        }, {
          duration: Math.trunc(_trackAnimsDur),
          easing: "easeInOutCubic",
          selector: ".meter-track"
        });

        outroGroup.addIncident(_circleTrackAnim, Math.trunc(this.outroDur * 0.3)); // Circle Path Outro Animation

        var _circlePathAnim = new MotorCortex.CSSEffect({
          animatedAttrs: {
            "stroke-dashoffset": this.pathLength
          },
          initialValues: {
            "stroke-dashoffset": this.pathLength - this.pathLength * this.data.value / 100
          }
        }, {
          duration: Math.trunc(_pathAnimsDur),
          easing: "easeInOutCubic",
          selector: ".meter-path"
        });

        outroGroup.addIncident(_circlePathAnim, 0); // Circle Track Animation Fade Out Effect

        var _circleTrackFadeIn = new MotorCortex.CSSEffect({
          animatedAttrs: {
            "stroke-width": 0
          },
          initialValues: {
            "stroke-width": this.boxSize * 0.05
          }
        }, {
          selector: ".meter-track",
          easing: "easeInQuart",
          duration: Math.trunc(_trackAnimsDur * 0.1)
        });

        outroGroup.addIncident(_circleTrackFadeIn, Math.trunc(this.outroDur - _trackAnimsDur * 0.1)); // Circle Path Animation Fade Out Effect

        var _circlePathFadeIn = new MotorCortex.CSSEffect({
          animatedAttrs: {
            "stroke-width": 0
          },
          initialValues: {
            "stroke-width": this.boxSize * 0.05
          }
        }, {
          selector: ".meter-path",
          easing: "easeInQuart",
          duration: Math.trunc(_trackAnimsDur * 0.1)
        });

        outroGroup.addIncident(_circlePathFadeIn, Math.trunc(this.outroDur * 0.7 - _trackAnimsDur * 0.1)); // Indicator Fade Out Animation

        var _indicatorFade = new MotorCortex.CSSEffect({
          animatedAttrs: {
            opacity: 0
          },
          initialValues: {
            opacity: 1
          }
        }, {
          selector: ".indicator-general",
          easing: "easeInQuart",
          duration: Math.trunc(this.outroDur * 0.3)
        });

        outroGroup.addIncident(_indicatorFade, Math.trunc(this.outroDur * 0.55)); // Indicator Counter Outtro Animation

        var _indicatorCounter = new Counter.Counter({
          animatedAttrs: {
            count: 0
          }
        }, {
          selector: ".indicator-value",
          easing: "easeInOutCubic",
          duration: Math.trunc(_pathAnimsDur)
        });

        outroGroup.addIncident(_indicatorCounter, 0);

        if (this.innerSVG) {
          // Gradient Background Empty-Out Intro Animation4
          var _gradientBackFillBottom = new MotorCortex.CSSEffect({
            animatedAttrs: {
              offset: "".concat(0, "%")
            },
            initialValues: {
              offset: "100%"
            }
          }, {
            selector: ".gradient-back-bottom",
            easing: "easeInOutCubic",
            duration: Math.trunc(_trackAnimsDur)
          });

          outroGroup.addIncident(_gradientBackFillBottom, Math.trunc(this.outroDur * 0.3)); // Gradient Background Fill-Up Intro Animation

          var _gradientFill = new MotorCortex.CSSEffect({
            animatedAttrs: {
              offset: "0%"
            },
            initialValues: {
              offset: "".concat(this.data.value, "%")
            }
          }, {
            selector: ".gradient-stop",
            easing: "easeInOutCubic",
            duration: Math.trunc(_pathAnimsDur)
          });

          outroGroup.addIncident(_gradientFill, 0);

          var _svgOpacity = new MotorCortex.CSSEffect({
            animatedAttrs: {
              opacity: 0
            },
            initialValues: {
              opacity: 1
            }
          }, {
            selector: ".inner-svg-container",
            easing: "easeOutCubic",
            duration: Math.trunc(this.outroDur * 0.1)
          });

          outroGroup.addIncident(_svgOpacity, Math.trunc(this.outroDur * 0.75));
        }

        this.addIncident(outroGroup, 0 + this.introDur + this.staticDur);
      } // STATIC DURATION CONTROL


      var staticIncident = new MotorCortex.CSSEffect({
        animatedAttrs: {}
      }, {
        selector: ".container-progressMeter",
        duration: this.staticDur
      });
      this.addIncident(staticIncident, this.introDur);
    }
  }, {
    key: "buildVars",
    value: function buildVars() {
      this.data = this.attrs.data;
      this.innerSVG = this.attrs.innerImage ? this.attrs.innerImage : null;
      this.innerFill = this.data.innerFill ? this.data.innerFill : {
        revert: false,
        rotate: false
      };
      this.originalDims = config.progressMeter.originalDims;
      this.heightDimension = helpers.extractUnitsNums(this.props.containerParams.height).number;
      this.widthDimension = helpers.extractUnitsNums(this.props.containerParams.width).number;
      this.boxSize = this.widthDimension < this.heightDimension ? this.widthDimension * 0.65 : this.heightDimension * 0.65;
      this.pathLength = 10000;
      this.attrs.palette = this.attrs.palette ? this.attrs.palette : {};
      this.fontC = this.attrs.palette.font ? this.attrs.palette.font : colorPalette.font;
      this.accentC = this.attrs.palette.accent ? this.attrs.palette.accent : colorPalette.accent;
      this.backgroundC = this.attrs.palette.background ? this.attrs.palette.background : colorPalette.background;
      this.attrs.font = this.attrs.font ? this.attrs.font : {};
      this.fontFamily = this.attrs.font.fontFamily ? this.attrs.font.fontFamily : "'Staatliches', cursive";
      this.fontSize = this.attrs.font.size ? this.attrs.font.size : "1.7rem";
      this.url = this.attrs.font.url ? this.attrs.font.url : "https://fonts.googleapis.com/css2?family=Staatliches&display=swap";
      this.attrs.timings = this.attrs.timings ? this.attrs.timings : {};
      this.introDur = this.attrs.timings.intro ? this.attrs.timings.intro : 0;
      this.outroDur = this.attrs.timings.outro ? this.attrs.timings.outro : 0;

      if (this.attrs.timings.static === 0) {
        this.staticDur = 0;
      } else {
        this.staticDur = this.attrs.timings.static ? this.attrs.timings.static : 1000;
      }
    }
  }]);

  return ProgressMeter;
}(MotorCortex__default["default"].HTMLClip);

var wellKnownSymbol$5 = wellKnownSymbol$h;

var create$1 = objectCreate;

var definePropertyModule = objectDefineProperty;

var UNSCOPABLES = wellKnownSymbol$5('unscopables');
var ArrayPrototype = Array.prototype; // Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create$1(null)
  });
} // add a key to Array.prototype[@@unscopables]


var addToUnscopables$1 = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

var iterators = {};

var fails$2 = fails$k;

var correctPrototypeGetter = !fails$2(function () {
  function F() {
    /* empty */
  }

  F.prototype.constructor = null; // eslint-disable-next-line es/no-object-getprototypeof -- required for testing

  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var global$3 = global$F;

var hasOwn$1 = hasOwnProperty_1;

var isCallable$2 = isCallable$h;

var toObject = toObject$4;

var sharedKey = sharedKey$3;

var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

var IE_PROTO = sharedKey('IE_PROTO');
var Object$1 = global$3.Object;
var ObjectPrototype = Object$1.prototype; // `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof

var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? Object$1.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn$1(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;

  if (isCallable$2(constructor) && object instanceof constructor) {
    return constructor.prototype;
  }

  return object instanceof Object$1 ? ObjectPrototype : null;
};

var fails$1 = fails$k;

var isCallable$1 = isCallable$h;

var getPrototypeOf$1 = objectGetPrototypeOf;

var redefine$1 = redefine$8.exports;

var wellKnownSymbol$4 = wellKnownSymbol$h;

var ITERATOR$2 = wellKnownSymbol$4('iterator');
var BUGGY_SAFARI_ITERATORS$1 = false; // `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object

var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;
/* eslint-disable es/no-array-prototype-keys -- safe */

if ([].keys) {
  arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$2 == undefined || fails$1(function () {
  var test = {}; // FF44- legacy iterators case

  return IteratorPrototype$2[ITERATOR$2].call(test) !== test;
});
if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {}; // `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator

if (!isCallable$1(IteratorPrototype$2[ITERATOR$2])) {
  redefine$1(IteratorPrototype$2, ITERATOR$2, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var defineProperty = objectDefineProperty.f;

var hasOwn = hasOwnProperty_1;

var wellKnownSymbol$3 = wellKnownSymbol$h;

var TO_STRING_TAG$1 = wellKnownSymbol$3('toStringTag');

var setToStringTag$2 = function (it, TAG, STATIC) {
  if (it && !hasOwn(it = STATIC ? it : it.prototype, TO_STRING_TAG$1)) {
    defineProperty(it, TO_STRING_TAG$1, {
      configurable: true,
      value: TAG
    });
  }
};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;

var create = objectCreate;

var createPropertyDescriptor = createPropertyDescriptor$4;

var setToStringTag$1 = setToStringTag$2;

var Iterators$2 = iterators;

var returnThis$1 = function () {
  return this;
};

var createIteratorConstructor$1 = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype$1, {
    next: createPropertyDescriptor(1, next)
  });
  setToStringTag$1(IteratorConstructor, TO_STRING_TAG, false);
  Iterators$2[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var $ = _export;

var call$2 = functionCall;

var FunctionName = functionName;

var isCallable = isCallable$h;

var createIteratorConstructor = createIteratorConstructor$1;

var getPrototypeOf = objectGetPrototypeOf;

var setPrototypeOf = objectSetPrototypeOf;

var setToStringTag = setToStringTag$2;

var createNonEnumerableProperty$1 = createNonEnumerableProperty$8;

var redefine = redefine$8.exports;

var wellKnownSymbol$2 = wellKnownSymbol$h;

var Iterators$1 = iterators;

var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$1 = wellKnownSymbol$2('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () {
  return this;
};

var defineIterator$1 = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];

    switch (KIND) {
      case KEYS:
        return function keys() {
          return new IteratorConstructor(this, KIND);
        };

      case VALUES:
        return function values() {
          return new IteratorConstructor(this, KIND);
        };

      case ENTRIES:
        return function entries() {
          return new IteratorConstructor(this, KIND);
        };
    }

    return function () {
      return new IteratorConstructor(this);
    };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$1] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY; // fix native

  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));

    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR$1])) {
          redefine(CurrentIteratorPrototype, ITERATOR$1, returnThis);
        }
      } // Set @@toStringTag to native iterators


      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  } // fix Array.prototype.{ values, @@iterator }.name in V8 / FF


  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty$1(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;

      defaultIterator = function values() {
        return call$2(nativeIterator, this);
      };
    }
  } // export additional methods


  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({
      target: NAME,
      proto: true,
      forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
    }, methods);
  } // define iterator


  if (IterablePrototype[ITERATOR$1] !== defaultIterator) {
    redefine(IterablePrototype, ITERATOR$1, defaultIterator, {
      name: DEFAULT
    });
  }

  Iterators$1[NAME] = defaultIterator;
  return methods;
};

var toIndexedObject = toIndexedObject$7;

var addToUnscopables = addToUnscopables$1;

var Iterators = iterators;

var InternalStateModule = internalState;

var defineIterator = defineIterator$1;

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator

var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated),
    // target
    index: 0,
    // next index
    kind: kind // kind

  }); // `%ArrayIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;

  if (!target || index >= target.length) {
    state.target = undefined;
    return {
      value: undefined,
      done: true
    };
  }

  if (kind == 'keys') return {
    value: index,
    done: false
  };
  if (kind == 'values') return {
    value: target[index],
    done: false
  };
  return {
    value: [index, target[index]],
    done: false
  };
}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject

Iterators.Arguments = Iterators.Array; // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

var global$2 = global$F;

var DOMIterables = domIterables;

var DOMTokenListPrototype = domTokenListPrototype;

var ArrayIteratorMethods = es_array_iterator;

var createNonEnumerableProperty = createNonEnumerableProperty$8;

var wellKnownSymbol$1 = wellKnownSymbol$h;

var ITERATOR = wellKnownSymbol$1('iterator');
var TO_STRING_TAG = wellKnownSymbol$1('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }

    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }

    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global$2[COLLECTION_NAME] && global$2[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

var FunctionPrototype = Function.prototype;
var apply$1 = FunctionPrototype.apply;
var bind = FunctionPrototype.bind;
var call$1 = FunctionPrototype.call; // eslint-disable-next-line es/no-reflect -- safe

var functionApply = typeof Reflect == 'object' && Reflect.apply || (bind ? call$1.bind(apply$1) : function () {
  return call$1.apply(apply$1, arguments);
});

var global$1 = global$F;

var isConstructor = isConstructor$3;

var tryToString = tryToString$2;

var TypeError$1 = global$1.TypeError; // `Assert: IsConstructor(argument) is true`

var aConstructor$1 = function (argument) {
  if (isConstructor(argument)) return argument;
  throw TypeError$1(tryToString(argument) + ' is not a constructor');
};

var anObject$1 = anObject$b;

var aConstructor = aConstructor$1;

var wellKnownSymbol = wellKnownSymbol$h;

var SPECIES = wellKnownSymbol('species'); // `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor

var speciesConstructor$1 = function (O, defaultConstructor) {
  var C = anObject$1(O).constructor;
  var S;
  return C === undefined || (S = anObject$1(C)[SPECIES]) == undefined ? defaultConstructor : aConstructor(S);
};

var apply = functionApply;

var call = functionCall;

var uncurryThis = functionUncurryThis;

var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;

var isRegExp = isRegexp;

var anObject = anObject$b;

var requireObjectCoercible = requireObjectCoercible$7;

var speciesConstructor = speciesConstructor$1;

var advanceStringIndex = advanceStringIndex$2;

var toLength = toLength$3;

var toString = toString$8;

var getMethod = getMethod$3;

var arraySlice = arraySlice$2;

var callRegExpExec = regexpExecAbstract;

var regexpExec = regexpExec$3;

var stickyHelpers = regexpStickyHelpers;

var fails = fails$k;

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min = Math.min;
var $push = [].push;
var exec = uncurryThis(/./.exec);
var push = uncurryThis($push);
var stringSlice = uncurryThis(''.slice); // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;

  re.exec = function () {
    return originalExec.apply(this, arguments);
  };

  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
}); // @@split logic

fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;

  if ('abbc'.split(/(b)*/)[1] == 'c' || // eslint-disable-next-line regexp/no-empty-group -- required for testing
  'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
  '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = toString(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string]; // If `separator` is not a regex, use native split

      if (!isRegExp(separator)) {
        return call(nativeSplit, string, separator, lim);
      }

      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
      var lastLastIndex = 0; // Make `global` and avoid `lastIndex` issues by working with a copy

      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;

      while (match = call(regexpExec, separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;

        if (lastIndex > lastLastIndex) {
          push(output, stringSlice(string, lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) apply($push, output, arraySlice(match, 1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }

        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }

      if (lastLastIndex === string.length) {
        if (lastLength || !exec(separatorCopy, '')) push(output, '');
      } else push(output, stringSlice(string, lastLastIndex));

      return output.length > lim ? arraySlice(output, 0, lim) : output;
    }; // Chakra, V8

  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [// `String.prototype.split` method
  // https://tc39.es/ecma262/#sec-string.prototype.split
  function split(separator, limit) {
    var O = requireObjectCoercible(this);
    var splitter = separator == undefined ? undefined : getMethod(separator, SPLIT);
    return splitter ? call(splitter, separator, O, limit) : call(internalSplit, toString(O), separator, limit);
  }, // `RegExp.prototype[@@split]` method
  // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
  //
  // NOTE: This cannot be properly polyfilled in engines that don't support
  // the 'y' flag.
  function (string, limit) {
    var rx = anObject(this);
    var S = toString(string);
    var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
    if (res.done) return res.value;
    var C = speciesConstructor(rx, RegExp);
    var unicodeMatching = rx.unicode;
    var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (UNSUPPORTED_Y ? 'g' : 'y'); // ^(? + rx + ) is needed, in combination with some S slicing, to
    // simulate the 'y' flag.

    var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
    var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
    if (lim === 0) return [];
    if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
    var p = 0;
    var q = 0;
    var A = [];

    while (q < S.length) {
      splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
      var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
      var e;

      if (z === null || (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) {
        q = advanceStringIndex(S, q, unicodeMatching);
      } else {
        push(A, stringSlice(S, p, q));
        if (A.length === lim) return A;

        for (var i = 1; i <= z.length - 1; i++) {
          push(A, z[i]);
          if (A.length === lim) return A;
        }

        q = p = e;
      }
    }

    push(A, stringSlice(S, p));
    return A;
  }];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

function buildCSS$1(lineGraph) {
  var createGenerateId = function createGenerateId() {
    return function (rule) {
      return rule.key;
    };
  };

  jss.setup({
    createGenerateId: createGenerateId
  });
  var styles = {
    "container-lineGraph": {
      width: "100%",
      height: "100%",
      background: lineGraph.backgroundC,
      "font-family": lineGraph.fontFamily,
      "font-size": lineGraph.fontSizeTitle,
      display: "flex"
    },
    "viewport-lineGraph": {
      position: "absolute",
      top: "".concat(lineGraph.legend ? "2%" : "0%"),
      "transform-origin": "top left",
      width: "100%",
      height: "100%"
    },
    "title-container-lineGraph": {
      background: "transparent",
      width: "60%",
      height: "10%",
      top: "8%",
      left: "8%",
      position: "absolute",
      display: "flex",
      "align-items": "center",
      "z-index": "1",
      "justify-content": "space-around"
    },
    "title-wrapper-lineGraph": {
      display: "flex",
      "flex-grow": "2",
      "flex-wrap": "nowrap",
      overflow: "hidden",
      "padding-left": "6px"
    },
    "letter-wrapper-title": {
      display: "flex",
      "flex-direction": "column",
      position: "relative",
      "font-size": "190%"
    },
    "legend-wrapper": {
      position: "absolute",
      width: "".concat(lineGraph.dataSetsNum === 1 ? 14 : 26, "%"),
      height: "".concat(lineGraph.legendHeight, "%"),
      top: "".concat(11 - 3 * (lineGraph.legendHeightFactor + (lineGraph.legendHeightFactor % 1 ? 1 : 0) - 1), "%"),
      left: "".concat(68 + (lineGraph.dataSetsNum === 1 ? 12 : 0), "%"),
      background: lineGraph.quinaryC,
      "font-size": lineGraph.fontSizeInner,
      display: "flex",
      "flex-wrap": lineGraph.attrs.legendWrrap ? "flex" : "nowrap",
      "align-items": "center",
      "z-index": "1"
    },
    "line-wrapper": {
      width: "".concat(lineGraph.dataSetsNum === 1 ? 100 : 50, "%"),
      height: "".concat(1 / (lineGraph.legendHeightFactor + (lineGraph.legendHeightFactor % 1 ? 1 : 0)) * 100, "%"),
      display: "flex",
      overflow: "hidden"
    },
    "color-wrapper": {
      display: "flex",
      "align-items": "center",
      "justify-content": "center",
      width: "25%",
      height: "100%"
    },
    "line-color": {
      width: "60%",
      height: "60%"
    },
    "line-title": {
      display: "flex",
      "align-items": "flex-start",
      "justify-content": "flex-start",
      "font-size": lineGraph.fontSizeInner,
      width: "75%",
      height: "100%"
    },
    "graph-background": {
      left: "10%",
      top: "13%",
      width: "80%",
      height: "70%",
      position: "absolute",
      background: lineGraph.secondaryC
    },
    "svg-container": {
      width: "76%",
      height: "58%",
      top: "21%",
      left: "12%",
      position: "relative",
      "z-index": "1",
      overflow: "visible"
    },
    "lines-container": {
      width: "100%",
      height: "100%",
      "min-height": "100%",
      "min-width": "100%",
      overflow: "visible"
    },
    "dataStele-container": {
      width: "76%",
      height: "58%",
      top: "21%",
      left: "12%",
      position: "absolute",
      display: "flex",
      "align-items": "center",
      "justify-content": "space-around",
      "z-index": "0"
    },
    "data-stele": {
      height: "100%",
      display: "flex",
      "flex-direction": "column-reverse",
      "justify-content": "space-between"
    },
    "line-grid": {
      width: "100%",
      height: "100%"
    },
    "stele-grid": {
      width: "1%",
      height: "100%"
    },
    "line-grid-block": {
      width: "100%",
      height: "".concat(Math.trunc(lineGraph.linesHeight * (0.13 * lineGraph.gridH / lineGraph.steleBlockNum)), "px")
    },
    "stele-grid-block": {
      width: "100%",
      height: "".concat(Math.trunc(lineGraph.linesHeight * (0.26 * lineGraph.gridH / lineGraph.steleBlockNum)), "px")
    },
    "stele-block": {
      "max-height": "".concat(5 * lineGraph.gridH, "px"),
      opacity: "0.8",
      background: lineGraph.primaryC
    },
    "graph-labels-container": {
      width: "76%",
      height: "58%",
      top: "21%",
      left: "12%",
      position: "absolute"
    },
    "x-labels-back-wrapper-lineGraph": {
      width: "76%",
      height: "6%",
      top: "80%",
      left: "12%",
      position: "absolute",
      display: "flex",
      "justify-content": "flex-end"
    },
    "block-background": {
      width: "100%",
      height: "100%",
      background: lineGraph.accentC,
      position: "relative"
    },
    "x-labels-container-lineGraph": {
      background: "transparent",
      width: "76%",
      height: "6%",
      top: "80%",
      left: "12%",
      position: "absolute",
      display: "flex",
      "align-items": "center",
      "z-index": "1",
      "justify-content": "space-around"
    },
    "label-container": {
      display: "flex",
      "flex-direction": "row",
      overflow: "hidden"
    },
    "letter-container": {
      overflow: "hidden",
      position: "relative"
    },
    "letter-wrapper-label": {
      "font-size": "100%",
      display: "flex",
      "flex-direction": "column",
      position: "relative"
    },
    fontColorOn: {
      color: lineGraph.fontC
    },
    "space-char": {
      visibility: "hidden"
    },
    "inner-label": {
      opacity: "1",
      display: "flex",
      "justify-content": "center",
      "align-items": "center",
      width: "100%",
      height: "100%"
    },
    "inner-label-container": {
      "font-size": lineGraph.fontSizeInner,
      opacity: "0.6",
      width: "".concat(10 / 2 * lineGraph.data.length, "%"),
      "min-width": "6%",
      "max-width": "10%",
      height: "7%",
      position: "absolute",
      display: "".concat(lineGraph.hover ? "none" : "block"),
      "z-index": "2"
    },
    hoverPoint: {
      position: "absolute",
      width: "".concat(config.lineGraph.originalDims.width * 0.01, "px"),
      height: "".concat(config.lineGraph.originalDims.width * 0.01, "px"),
      "border-radius": "50%",
      "z-index": "9999"
    }
  };

  for (var l = 0; l < lineGraph.dataSetsNum; l++) {
    var dynamicColor = void 0;

    if (lineGraph.dataSetsNum > 1) {
      dynamicColor = lineGraph.dataSets[l].color;
    } else {
      dynamicColor = lineGraph.quaternaryC;
    }

    styles["color-".concat(l)] = {
      background: dynamicColor
    };
    styles["line-".concat(l, "-label-container")] = {
      width: "100%",
      height: "100%",
      position: "absolute"
    };

    for (var i = 0; i < lineGraph.data.length; i++) {
      var targetTop = lineGraph.findPointY(i, l) - lineGraph.linesHeight * 0.083;
      var fullWidth = 10 / 2 * lineGraph.data.length > 10 ? 10 : 10 / 2 * lineGraph.data.length;
      fullWidth = fullWidth < 6 ? 6 : fullWidth;
      var targetLeft = lineGraph.findPointX(i) - fullWidth * lineGraph.linesWidth / 100 * 0.5;
      styles["label-".concat(l, "-").concat(lineGraph.data[i].name)] = {
        background: dynamicColor,
        top: "".concat(targetTop, "px"),
        left: "".concat(targetLeft, "px")
      };
      var pointLeftOffset = fullWidth * lineGraph.linesWidth / 100 * 0.5 - config.lineGraph.originalDims.width * 0.01 / 2;
      var pointTopOffset = 0.07 * lineGraph.linesHeight;
      styles["hoverPoint-".concat(l, "-").concat(lineGraph.data[i].name)] = {
        top: "".concat(targetTop + pointTopOffset, "px"),
        left: "".concat(targetLeft + pointLeftOffset, "px")
      };
    }
  }

  var styleSheet = jss.createStyleSheet(styles).toString();

  for (var _l = 0; _l < lineGraph.dataSetsNum; _l++) {
    for (var _i = 0; _i < lineGraph.data.length; _i++) {
      styleSheet += "\n                .hoverPoint-".concat(_l, "-").concat(lineGraph.data[_i].name, ":hover + .label-").concat(_l, "-").concat(lineGraph.data[_i].name, " {\n                    display: block;\n                }\n            ");
    }
  }

  return styleSheet;
}

function e$1(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function n$1(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
  }
}

function r$1(t) {
  return r$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, r$1(t);
}

function o$1(t, e) {
  return o$1 = Object.setPrototypeOf || function (t, e) {
    return t.__proto__ = e, t;
  }, o$1(t, e);
}

function i$1(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return function (t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }(t);
}

function a$1(t) {
  var e = function () {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (t) {
      return !1;
    }
  }();

  return function () {
    var n,
        o = r$1(t);

    if (e) {
      var a = r$1(this).constructor;
      n = Reflect.construct(o, arguments, a);
    } else n = o.apply(this, arguments);

    return i$1(this, n);
  };
}

var c$1 = {
  npm_name: "@donkeyclip/motorcortex-svgdraw",
  version: "0.0.10",
  incidents: [{
    exportable: function (r) {
      !function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && o$1(t, e);
      }(f, MotorCortex__default["default"].Effect);
      var i,
          c,
          s = a$1(f);

      function f() {
        return e$1(this, f), s.apply(this, arguments);
      }

      return i = f, (c = [{
        key: "getScratchValue",
        value: function () {
          return this.pathLength = Math.ceil(this.element.getTotalLength()), this.element.style.strokeDasharray = this.pathLength + " " + this.pathLength, this.element.style.strokeDashoffset = this.pathLength, 0;
        }
      }, {
        key: "onGetContext",
        value: function () {
          this.pathLength = Math.ceil(this.element.getTotalLength());
        }
      }, {
        key: "onProgress",
        value: function (t) {
          var e = (this.targetValue - this.initialValue) * t + this.initialValue;
          this.element.style.strokeDashoffset = Math.ceil(this.pathLength * (1 - e));
        }
      }]) && n$1(i.prototype, c), f;
    }(),
    name: "Draw",
    attributesValidationRules: {
      animatedAttrs: {
        type: "object",
        props: {
          cover: {
            type: "number",
            min: 0,
            max: 1
          }
        }
      }
    }
  }]
};

function e(t, e) {
  var n = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function (e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), n.push.apply(n, o);
  }

  return n;
}

function n(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    n % 2 ? e(Object(o), !0).forEach(function (e) {
      i(t, e, o[e]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : e(Object(o)).forEach(function (e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
    });
  }

  return t;
}

function o(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function r(t, e) {
  for (var n = 0; n < e.length; n++) {
    var o = e[n];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
  }
}

function a(t, e, n) {
  return e && r(t.prototype, e), n && r(t, n), t;
}

function i(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}

function s(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), e && l(t, e);
}

function u(t) {
  return u = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, u(t);
}

function l(t, e) {
  return l = Object.setPrototypeOf || function (t, e) {
    return t.__proto__ = e, t;
  }, l(t, e);
}

function c(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return function (t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }(t);
}

function p(t) {
  var e = function () {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (t) {
      return !1;
    }
  }();

  return function () {
    var n,
        o = u(t);

    if (e) {
      var r = u(this).constructor;
      n = Reflect.construct(o, arguments, r);
    } else n = o.apply(this, arguments);

    return c(this, n);
  };
}

var h = function () {
  function t(e) {
    o(this, t), this.el = e, this.matrix = this.getMatrix(e), this.viewportCenter = this.getViewPortCenter(), this.idlePosition = this.getIdlePosition();
  }

  return a(t, [{
    key: "getMatrix",
    value: function (t) {
      return function (t) {
        var e = window.getComputedStyle(t).transform;
        if ("" === e || "none" === e) return {
          rotate: "0deg",
          scaleX: 1,
          scaleY: 1,
          skewX: "0deg",
          skewY: "0deg",
          translateX: "0px",
          translateY: "0px"
        };
        var n,
            o,
            r,
            a,
            i,
            s,
            u,
            l,
            c = e.split("(")[1].split(")")[0].split(",");
        return n = c, o = Math.atan2(n[1], n[0]), r = Math.pow(n[0], 2) + Math.pow(n[1], 2), a = Math.pow(n[2], 2) + Math.pow(n[3], 2), i = Math.sqrt(r), s = (n[0] * n[3] - n[2] * n[1]) / i, u = Math.atan2(n[0] * n[2] + n[1] * n[3], r), l = Math.atan2(n[1] * n[3] + n[0] * n[2], a), {
          rotate: o / (Math.PI / 180) + "deg",
          scaleX: i,
          scaleY: s,
          skewX: (1 === r ? u / (Math.PI / 180) : 0) + "deg",
          skewY: (1 === a ? l / (Math.PI / 180) : 0) + "deg",
          translateX: n[4] + "px",
          translateY: n[5] + "px"
        };
      }(t);
    }
  }, {
    key: "getViewPortCenter",
    value: function () {
      var t = this.el.parentNode;
      return {
        x: parseFloat(getComputedStyle(t, null).width.replace("px", "")) / 2,
        y: parseFloat(getComputedStyle(t, null).height.replace("px", "")) / 2
      };
    }
  }, {
    key: "getIdlePosition",
    value: function () {
      var t = this.el,
          e = t.getBoundingClientRect(),
          n = t.parentNode.getBoundingClientRect();
      return {
        x: e.left - n.left,
        y: e.top - n.top
      };
    }
  }, {
    key: "calcXYZoom",
    value: function () {
      var t = this.matrix,
          e = this.idlePosition,
          o = this.viewportCenter,
          r = o.x - e.x,
          a = o.y - e.y;
      return n(n({}, {
        x: r / t.scaleX,
        y: a / t.scaleY
      }), {}, {
        zoom: t.scaleX
      });
    }
  }, {
    key: "createProgressFunction",
    value: function (t) {
      var e = this._xyzoomToTranslate(t.start),
          n = this._xyzoomToTranslate(t.target),
          o = Math.atan(Math.abs(n.y - e.y) / Math.abs(n.x - e.x)),
          r = Math.sqrt(Math.pow(n.y - e.y, 2) + Math.pow(n.x - e.x, 2)),
          a = 1,
          i = 1;

      return n.x < e.x && (a = -1), n.y < e.y && (i = -1), function (t) {
        var s = t * r;
        return {
          translateX: a * s * Math.cos(o) + e.x,
          translateY: i * s * Math.sin(o) + e.y,
          scale: (n.scale - e.scale) * t + e.scale
        };
      };
    }
  }, {
    key: "_xyzoomToTranslate",
    value: function (t) {
      var e = t.zoom * t.x,
          n = t.zoom * t.y,
          o = this.viewportCenter.x - e,
          r = this.viewportCenter.y - n;
      return {
        x: o - this.idlePosition.x,
        y: r - this.idlePosition.y,
        scale: t.zoom
      };
    }
  }, {
    key: "createPathProgressFunction",
    value: function (t, e) {
      var n = this,
          o = function (t) {};

      t.transitionDuration > 0 && (o = this.createProgressFunction({
        start: e,
        target: {
          x: t.startPoint.x,
          y: t.startPoint.y,
          zoom: e.zoom
        }
      }));
      var r = t.transitionDuration / (t.transitionDuration + t.alongPathDuration),
          a = t.alongPathDuration / (t.transitionDuration + t.alongPathDuration),
          i = (t.endTo - t.startFrom) * t.pathLength;
      return function (s) {
        if (t.transitionDuration > 0 && s < r) return o(s / r);

        var u = (s - r) / a,
            l = (t.zoom - e.zoom) * u + e.zoom,
            c = u * i + t.startFrom * t.pathLength,
            p = t.path.getPointAtLength(c),
            h = n._xyzoomToTranslate({
          x: p.x,
          y: p.y,
          zoom: l
        });

        return {
          translateX: h.x,
          translateY: h.y,
          scale: h.scale
        };
      };
    }
  }]), t;
}(),
    f = function (e) {
  s(r, MotorCortex__default["default"].Effect);
  var n = p(r);

  function r() {
    return o(this, r), n.apply(this, arguments);
  }

  return a(r, [{
    key: "getScratchValue",
    value: function () {
      return this.adaptor = new h(this.element), this.adaptor.calcXYZoom();
    }
  }, {
    key: "onGetContext",
    value: function () {
      this.adaptor = new h(this.element), this.progressMethod = this.adaptor.createProgressFunction({
        start: this.initialValue,
        target: this.targetValue
      });
    }
  }, {
    key: "onProgress",
    value: function (t) {
      var e = this.progressMethod(t);
      this.element.style.transform = "translateX(".concat(e.translateX, "px) translateY(").concat(e.translateY, "px) scaleX(").concat(e.scale, ") scaleY(").concat(e.scale, ")");
    }
  }]), r;
}(),
    y = {
  npm_name: "@donkeyclip/motorcortex-2dcam",
  version: "0.0.16",
  incidents: [{
    exportable: f,
    name: "ZoomTo",
    attributesValidationRules: {
      animatedAttrs: {
        type: "object",
        props: {
          position: {
            type: "object",
            props: {
              x: {
                type: "number",
                optional: !0,
                min: 0
              },
              y: {
                type: "number",
                optional: !0,
                min: 0
              },
              zoom: {
                type: "number",
                optional: !0,
                min: 0
              }
            }
          }
        }
      }
    }
  }, {
    exportable: function (t) {
      s(n, f);
      var e = p(n);

      function n() {
        return o(this, n), e.apply(this, arguments);
      }

      return a(n, [{
        key: "onInitialise",
        value: function () {
          var t = this.props.duration,
              e = document.createElementNS("http://www.w3.org/2000/svg", "path");
          e.setAttributeNS(null, "d", this.targetValue.path), this.data = {
            path: e,
            finalPoint: null,
            startPoint: null,
            zoom: this.targetValue.zoom,
            pathLength: e.getTotalLength(),
            startFrom: this.attrs.from ? this.attrs.from : 0,
            endTo: this.attrs.to ? this.attrs.to : 1,
            transitionDuration: this.attrs.transition ? this.attrs.transition : 0,

            get alongPathDuration() {
              return t - this.transitionDuration;
            }

          }, this.data.finalPoint = e.getPointAtLength(this.data.endTo * this.data.pathLength), this.data.startPoint = e.getPointAtLength(this.data.startFrom * this.data.pathLength), this.targetValue.x = this.data.finalPoint.x, this.targetValue.y = this.data.finalPoint.y;
        }
      }, {
        key: "onGetContext",
        value: function () {
          this.adaptor = new h(this.element), this.data.zoom = this.targetValue.zoom, this.progressMethod = this.adaptor.createPathProgressFunction(this.data, this.initialValue);
        }
      }]), n;
    }(),
    name: "FollowPath",
    attributesValidationRules: {
      animatedAttrs: {
        type: "object",
        props: {
          position: {
            type: "object",
            props: {
              path: {
                type: "string",
                optional: !1
              },
              zoom: {
                type: "number",
                optional: !0,
                min: 0
              }
            }
          }
        }
      },
      transition: {
        type: "number",
        integer: !0,
        min: 0,
        optional: !0
      },
      from: {
        type: "number",
        min: 0,
        max: 1,
        optional: !0
      },
      to: {
        type: "number",
        min: 0,
        max: 1,
        optional: !0
      }
    }
  }],
  compositeAttributes: {
    position: ["x", "y", "zoom", "path"]
  }
};

var SVGD = MotorCortex__default["default"].loadPlugin(c$1);
var TDCAM = MotorCortex__default["default"].loadPlugin(y);

var AnimationConstructor = /*#__PURE__*/function () {
  function AnimationConstructor(instance) {
    _classCallCheck$1(this, AnimationConstructor);

    this.instance = instance;
  }

  _createClass$2(AnimationConstructor, [{
    key: "buildStaticControl",
    value: function buildStaticControl() {
      return new MotorCortex.CSSEffect({
        animatedAttrs: {}
      }, {
        selector: ".container-lineGraph",
        duration: this.instance.staticDur
      });
    }
  }, {
    key: "buildBackgroundIntro",
    value: function buildBackgroundIntro() {
      return new MotorCortex.CSSEffect({
        animatedAttrs: {
          height: "70%"
        },
        initialValues: {
          height: "0%"
        }
      }, {
        selector: ".graph-background",
        duration: Math.trunc(this.instance.introDur * 0.2),
        easing: "easeInOutQuart"
      });
    }
  }, {
    key: "buildBackgroundOutro",
    value: function buildBackgroundOutro() {
      return new MotorCortex.CSSEffect({
        animatedAttrs: {
          height: "0%"
        },
        initialValues: {
          height: "70%"
        }
      }, {
        selector: ".graph-background",
        duration: Math.trunc(this.instance.outroDur * 0.2),
        easing: "easeInOutQuart"
      });
    }
  }, {
    key: "buildTitleIntroCombo",
    value: function buildTitleIntroCombo() {
      var titleDur = this.instance.introDur * 0.13;
      var titleIncidents = [];

      for (var i in this.instance.words) {
        titleIncidents.push({
          incidentClass: MotorCortex.CSSEffect,
          attrs: {
            animatedAttrs: {
              top: "0px",
              opacity: 1
            },
            initialValues: {
              top: "-50px",
              opacity: 0
            }
          },
          props: {
            selector: "#word-".concat(i),
            duration: Math.trunc(titleDur / this.instance.words.length),
            easing: "easeInOutQuart"
          },
          position: Math.trunc(titleDur / this.instance.words.length * i)
        });
      }

      return new MotorCortex__default["default"].Combo({
        incidents: titleIncidents
      }, {
        selector: ".title-wrapper-lineGraph"
      });
    }
  }, {
    key: "buildTitleOutroCombo",
    value: function buildTitleOutroCombo() {
      var titleDur = this.instance.outroDur * 0.13;
      var titleIncidents = [];

      for (var i in this.instance.words) {
        titleIncidents.push({
          incidentClass: MotorCortex.CSSEffect,
          attrs: {
            animatedAttrs: {
              top: "-50px",
              opacity: 0
            },
            initialValues: {
              top: "0px",
              opacity: 1
            }
          },
          props: {
            selector: "#word-".concat(i),
            duration: Math.trunc(titleDur / this.instance.words.length),
            easing: "easeInOutQuart"
          },
          position: Math.trunc(titleDur / this.instance.words.length * (this.instance.words.length - 1 - i))
        });
      }

      return new MotorCortex__default["default"].Combo({
        incidents: titleIncidents
      }, {
        selector: ".title-wrapper-lineGraph"
      });
    }
  }, {
    key: "buildIntroLegend",
    value: function buildIntroLegend() {
      var colorsDur = this.instance.introDur * 0.25;
      var colorDur = colorsDur / this.instance.dataSetsNum;
      var delay = this.instance.dataSetsNum === 1 ? null : "@stagger(0, ".concat(colorsDur - colorDur, ")");
      var legendIncidents = [{
        incidentClass: MotorCortex.CSSEffect,
        attrs: {
          animatedAttrs: {
            height: "".concat(this.instance.legendHeight, "%")
          },
          initialValues: {
            height: "0%"
          }
        },
        props: {
          duration: Math.trunc(this.instance.introDur * 0.2),
          easing: "easeInOutQuart"
        },
        position: 0
      }, {
        incidentClass: MotorCortex.CSSEffect,
        attrs: {
          animatedAttrs: {
            opacity: "1"
          },
          initialValues: {
            opacity: "0"
          }
        },
        props: {
          selector: ".color-wrapper",
          duration: Math.trunc(this.instance.introDur * 0.1),
          delay: delay,
          easing: "easeInOutQuad"
        },
        position: Math.trunc(this.instance.introDur * 0.15)
      }, {
        incidentClass: MotorCortex.CSSEffect,
        attrs: {
          animatedAttrs: {
            opacity: "1"
          },
          initialValues: {
            opacity: "0"
          }
        },
        props: {
          selector: ".line-title",
          duration: Math.trunc(this.instance.introDur * 0.1),
          delay: delay,
          easing: "easeInOutQuad"
        },
        position: Math.trunc(this.instance.introDur * 0.15)
      }];
      return new MotorCortex__default["default"].Combo({
        incidents: legendIncidents
      }, {
        selector: ".legend-wrapper"
      });
    }
  }, {
    key: "buildOutroLegend",
    value: function buildOutroLegend() {
      var colorsDur = this.instance.outroDur * 0.25;
      var colorDur = colorsDur / this.instance.dataSetsNum;
      var delay = this.instance.dataSetsNum === 1 ? null : "@stagger(0, ".concat(colorsDur - colorDur, ", 0, linear, linear, true)");
      var legendIncidents = [{
        incidentClass: MotorCortex.CSSEffect,
        attrs: {
          animatedAttrs: {
            height: "0%"
          },
          initialValues: {
            height: "".concat(this.instance.legendHeight, "%")
          }
        },
        props: {
          duration: Math.trunc(this.instance.introDur * 0.2),
          easing: "easeInOutQuart"
        },
        position: colorsDur
      }, {
        incidentClass: MotorCortex.CSSEffect,
        attrs: {
          animatedAttrs: {
            opacity: "0"
          },
          initialValues: {
            opacity: "1"
          }
        },
        props: {
          selector: ".color-wrapper",
          duration: Math.trunc(this.instance.introDur * 0.1),
          delay: delay,
          easing: "easeInOutQuad"
        },
        position: Math.trunc(colorsDur - this.instance.introDur * 0.15)
      }, {
        incidentClass: MotorCortex.CSSEffect,
        attrs: {
          animatedAttrs: {
            opacity: "0"
          },
          initialValues: {
            opacity: "1"
          }
        },
        props: {
          selector: ".line-title",
          duration: Math.trunc(this.instance.introDur * 0.1),
          delay: delay,
          easing: "easeInOutQuad"
        },
        position: Math.trunc(colorsDur - this.instance.introDur * 0.15)
      }];
      return new MotorCortex__default["default"].Combo({
        incidents: legendIncidents
      }, {
        selector: ".legend-wrapper"
      });
    }
  }, {
    key: "buildIntroLabels",
    value: function buildIntroLabels() {
      var xLabelsAnim = new MotorCortex__default["default"].Group(); // Label Background intro animation

      xLabelsAnim.addIncident(new MotorCortex.CSSEffect({
        animatedAttrs: {
          width: "100%"
        },
        initialValues: {
          width: "0%"
        }
      }, {
        selector: ".block-background",
        duration: Math.trunc(this.instance.introDur * 0.25),
        easing: "easeInOutQuart"
      }), 0); // Labels Intro Animation

      var textAnimDur = this.instance.introDur * 0.2;
      var labelDur = textAnimDur * 3 / (this.instance.data.length + 2);

      for (var i in this.instance.data) {
        var remainingDur = labelDur / 2;
        var incidents = [];

        for (var z in this.instance.data[i].name) {
          incidents.push({
            incidentClass: MotorCortex.CSSEffect,
            attrs: {
              animatedAttrs: {
                opacity: 1
              },
              initialValues: {
                opacity: 0
              }
            },
            props: {
              selector: "#letter-".concat(i, "-").concat(z),
              duration: Math.trunc(this.instance.introDur * 0.015),
              easing: "easeInOutQuart"
            },
            position: Math.trunc(labelDur - remainingDur)
          });
          remainingDur = remainingDur / 2;
        }

        var datumCombo = new MotorCortex__default["default"].Combo({
          incidents: incidents
        }, {
          selector: ".label-container"
        });
        xLabelsAnim.addIncident(datumCombo, Math.trunc(this.instance.introDur * 0.14 + textAnimDur / (this.instance.data.length + 1) * (this.instance.data.length - i - 1)));
      }

      return xLabelsAnim;
    }
  }, {
    key: "buildOutroLabels",
    value: function buildOutroLabels() {
      var xLabelsAnim = new MotorCortex__default["default"].Group();
      var labelsDur = this.instance.outroDur * 0.55; // Label Background outro animation

      xLabelsAnim.addIncident(new MotorCortex.CSSEffect({
        animatedAttrs: {
          width: "0%"
        },
        initialValues: {
          width: "100%"
        }
      }, {
        selector: ".block-background",
        duration: Math.trunc(labelsDur * 0.55),
        easing: "easeInOutQuart"
      }), labelsDur * 0); // Labels Outro Animation

      var textAnimDur = this.instance.outroDur * 0.2;
      var labelDur = textAnimDur * 3 / (this.instance.data.length + 2);

      for (var i in this.instance.data) {
        var remainingDur = labelDur / 2;
        var incidents = [];

        for (var z in this.instance.data[i].name) {
          incidents.push({
            incidentClass: MotorCortex.CSSEffect,
            attrs: {
              animatedAttrs: {
                opacity: 0
              },
              initialValues: {
                opacity: 1
              }
            },
            props: {
              selector: "#letter-".concat(i, "-").concat(z),
              duration: Math.trunc(this.instance.outroDur * 0.015),
              easing: "easeInOutQuart"
            },
            position: Math.trunc(labelDur - (labelDur - remainingDur))
          });
          remainingDur = remainingDur / 2;
        }

        var datumCombo = new MotorCortex__default["default"].Combo({
          incidents: incidents
        }, {
          selector: ".label-container"
        });
        xLabelsAnim.addIncident(datumCombo, Math.trunc(textAnimDur * i / (this.instance.data.length + 1)));
      }

      return xLabelsAnim;
    }
  }, {
    key: "buildIntroStele",
    value: function buildIntroStele() {
      var stelesIntro = new MotorCortex__default["default"].Group();
      var stelesFullDur = this.instance.introDur * 0.3;
      var steleOverlapIndex = 5;
      var blockOverlapIndex = 3;
      var steleDur = stelesFullDur * steleOverlapIndex / (this.instance.data.length + 1);
      var steleDelay = steleDur / steleOverlapIndex;
      var blockDur = steleDur * blockOverlapIndex / (this.instance.steleBlockNum + 1);

      if (this.instance.grid === "steles") {
        for (var i in this.instance.data) {
          var steleGroup = new MotorCortex__default["default"].Group({
            selector: "#stele-".concat(i)
          });
          var blockCombo = new MotorCortex__default["default"].Combo({
            incidents: [{
              incidentClass: MotorCortex.CSSEffect,
              attrs: {
                animatedAttrs: {
                  opacity: 1
                },
                initialValues: {
                  opacity: 0
                }
              },
              props: {
                duration: Math.trunc(blockDur)
              },
              position: 0
            }]
          }, {
            selector: ".stele-block-".concat(i),
            delay: "@stagger(0, ".concat(Math.trunc(steleDur - blockDur), ", 0, easeOutQuad)")
          });
          steleGroup.addIncident(blockCombo, 0);
          stelesIntro.addIncident(steleGroup, Math.trunc(i * steleDelay));
        }
      } else if (this.instance.grid === "lines") {
        var _steleGroup = new MotorCortex__default["default"].Group({
          selector: "#stele-".concat(0)
        });

        var _blockCombo = new MotorCortex__default["default"].Combo({
          incidents: [{
            incidentClass: MotorCortex.CSSEffect,
            attrs: {
              animatedAttrs: {
                width: "100%"
              },
              initialValues: {
                width: "0%"
              }
            },
            props: {
              duration: Math.trunc(steleDur),
              easing: "easeInOutQuad"
            },
            position: 0
          }]
        }, {
          selector: ".stele-block-".concat(0),
          delay: "@stagger(0, ".concat(Math.trunc(steleDur - blockDur), ", 0)")
        });

        _steleGroup.addIncident(_blockCombo, 0);

        stelesIntro.addIncident(_steleGroup, Math.trunc(steleDelay));
      }

      return stelesIntro;
    }
  }, {
    key: "buildOutroStele",
    value: function buildOutroStele() {
      var stelesOutro = new MotorCortex__default["default"].Group();
      var stelesFullDur = this.instance.outroDur * 0.3;
      var steleOverlapIndex = 5;
      var blockOverlapIndex = 3;
      var steleDur = stelesFullDur * steleOverlapIndex / (this.instance.data.length + 1);
      var steleDelay = steleDur / steleOverlapIndex;
      var blockDur = steleDur * blockOverlapIndex / (this.instance.steleBlockNum + 1);

      if (this.instance.grid === "steles") {
        for (var i in this.instance.data) {
          var steleGroup = new MotorCortex__default["default"].Group({
            selector: "#stele-".concat(i)
          });
          var blockCombo = new MotorCortex__default["default"].Combo({
            incidents: [{
              incidentClass: MotorCortex.CSSEffect,
              attrs: {
                animatedAttrs: {
                  opacity: 0
                },
                initialValues: {
                  opacity: 1
                }
              },
              props: {
                duration: Math.trunc(blockDur)
              },
              position: 0
            }]
          }, {
            selector: ".stele-block-".concat(i),
            delay: "@stagger(0, ".concat(Math.trunc(steleDur - blockDur), ", 0, easeOutQuad, omni, true)")
          });
          steleGroup.addIncident(blockCombo, 0);
          stelesOutro.addIncident(steleGroup, (this.instance.data.length - 1 - i) * steleDelay);
        }
      } else if (this.instance.grid === "lines") {
        var _steleGroup2 = new MotorCortex__default["default"].Group({
          selector: "#stele-".concat(0)
        });

        var _blockCombo2 = new MotorCortex__default["default"].Combo({
          incidents: [{
            incidentClass: MotorCortex.CSSEffect,
            attrs: {
              animatedAttrs: {
                width: "0%"
              },
              initialValues: {
                width: "100%"
              }
            },
            props: {
              duration: Math.trunc(steleDur),
              easing: "easeInOutQuad"
            },
            position: 0
          }]
        }, {
          selector: ".stele-block-".concat(0),
          delay: "@stagger(0, ".concat(Math.trunc(steleDur - blockDur), ", 0, linear, omni, true)")
        });

        _steleGroup2.addIncident(_blockCombo2, 0);

        stelesOutro.addIncident(_steleGroup2, (this.instance.data.length - 1) * steleDelay);
      }

      return stelesOutro;
    }
  }, {
    key: "buildIntroGraph",
    value: function buildIntroGraph(targetGroup) {
      var segmentDur = this.instance.introDur / this.instance.data.length;
      var pointDur = segmentDur * 0.35;
      var pathDur = segmentDur * 0.8;
      var pathAnimGroup = new MotorCortex__default["default"].Group();
      var pointAnimGroup = new MotorCortex__default["default"].Group();

      for (var l = 0; l < this.instance.dataSetsNum; l++) {
        for (var i = 0; i < this.instance.data.length; i++) {
          // Path Intro Animation
          if (i !== this.instance.data.length - 1) {
            var pathAnimation = new SVGD.Draw({
              animatedAttrs: {
                cover: 1
              },
              initialValues: {
                cover: 0
              }
            }, {
              selector: "#line-".concat(l, "-").concat(i),
              duration: Math.trunc(pathDur),
              easing: "easeInOutQuad"
            });
            pathAnimGroup.addIncident(pathAnimation, Math.trunc(segmentDur * i + segmentDur * 0.2));
          } // Points Intro Animation


          var pointAnimation = new MotorCortex.CSSEffect({
            animatedAttrs: {
              opacity: 1,
              r: this.instance.r
            },
            initialValues: {
              opacity: 0,
              r: 0
            }
          }, {
            selector: "#point-".concat(l, "-").concat(i),
            duration: Math.trunc(pointDur),
            easing: "easeInQuart"
          });
          pointAnimGroup.addIncident(pointAnimation, Math.trunc(segmentDur * i)); // Graph Label Intro Animation

          var targetTop = this.instance.findPointY(i, l) - this.instance.linesHeight * 0.083;
          var topOffset = targetTop + this.instance.linesHeight * 0.07 / 2;
          var targetWidth = 10 / 2 * this.instance.data.length > 10 ? 10 : 10 / 2 * this.instance.data.length;
          targetWidth = targetWidth < 6 ? 6 : targetWidth;
          var targetLeft = this.instance.findPointX(i) - targetWidth * this.instance.linesWidth / 100 * 0.5;
          var leftOffset = targetLeft + this.instance.linesWidth * (targetWidth / 100) / 2;
          var gLabelAnimation = new MotorCortex.CSSEffect({
            animatedAttrs: {
              opacity: 0.6,
              width: "".concat(targetWidth, "%"),
              "min-width": "".concat(targetWidth, "%"),
              height: "7%",
              top: "".concat(targetTop, "px"),
              left: "".concat(targetLeft, "px"),
              "font-size": this.instance.fontSizeInner
            },
            initialValues: {
              opacity: 0,
              width: "0%",
              "min-width": "0%",
              height: "0%",
              top: "".concat(topOffset, "px"),
              left: "".concat(leftOffset, "px"),
              "font-size": 0
            }
          }, {
            selector: ".label-".concat(l, "-").concat(this.instance.data[i].name),
            duration: Math.trunc(pointDur),
            easeing: "easeInOutCubic"
          });
          targetGroup.addIncident(gLabelAnimation, Math.trunc(segmentDur * i + pointDur * 0.2));

          if (this.instance.trace) {
            var _ref = _toConsumableArray(this.buildSvgIntroParams(i, pointDur, segmentDur)),
                entry = _ref[0],
                duration = _ref[1],
                xInit = _ref[2],
                yInit = _ref[3],
                zoomInit = _ref[4],
                xTarget = _ref[5],
                yTarget = _ref[6],
                zoomTarget = _ref[7];

            var zoomIncident = new TDCAM.ZoomTo({
              animatedAttrs: {
                position: {
                  x: xTarget,
                  y: yTarget,
                  zoom: zoomTarget
                }
              },
              initialValues: {
                position: {
                  x: xInit,
                  y: yInit,
                  zoom: zoomInit
                }
              }
            }, {
              selector: ".viewport-lineGraph",
              duration: Math.trunc(duration),
              easing: "easeInOutQuad"
            });
            targetGroup.addIncident(zoomIncident, Math.trunc(entry));
          }
        }
      }

      return [targetGroup, pathAnimGroup, pointAnimGroup];
    }
  }, {
    key: "buildSvgIntroParams",
    value: function buildSvgIntroParams(index, pointDur, segmentDur) {
      var entry = 0;
      var duration = 0;
      var xTarget = this.instance.findPointX(index) + (1 - this.instance.graphScale.width) / 2 * config.lineGraph.originalDims.width;
      var yTarget = this.instance.findPointY(index, 0) + (1 - this.instance.graphScale.height) / 2 * config.lineGraph.originalDims.height;
      var zoomTarget = this.instance.traceScale;
      var xInit, yInit, zoomInit;

      if (index === 0) {
        xInit = config.lineGraph.originalDims.width * 0.5;
        yInit = config.lineGraph.originalDims.height * 0.5;
        zoomInit = this.instance.traceScale;
        duration = pointDur - segmentDur * 0.15;
        entry = 0;
      } else if (index === this.instance.data.length - 1) {
        xInit = this.instance.findPointX(index - 1) + (1 - this.instance.graphScale.width) / 2 * config.lineGraph.originalDims.width;
        yInit = this.instance.findPointY(index - 1, 0) + (1 - this.instance.graphScale.height) / 2 * config.lineGraph.originalDims.height;
        zoomInit = this.instance.traceScale;
        xTarget = config.lineGraph.originalDims.width * 0.5;
        yTarget = config.lineGraph.originalDims.height * 0.5;
        zoomTarget = 1;
        entry = segmentDur * (index - 1) + pointDur;
        duration = segmentDur + pointDur - segmentDur * 0.15;
      } else {
        xInit = this.instance.findPointX(index - 1) + (1 - this.instance.graphScale.width) / 2 * config.lineGraph.originalDims.width;
        yInit = this.instance.findPointY(index - 1, 0) + (1 - this.instance.graphScale.height) / 2 * config.lineGraph.originalDims.height;
        zoomInit = this.instance.traceScale;
        duration = segmentDur;
        entry = segmentDur * (index - 1) + pointDur;
      }

      return [entry, duration, xInit, yInit, zoomInit, xTarget, yTarget, zoomTarget];
    }
  }, {
    key: "buildOutroGraph",
    value: function buildOutroGraph(targetGroup) {
      var segmentDur = this.instance.outroDur / (this.instance.data.length + 1);
      var pointDur = segmentDur * 0.25;
      var pathDur = segmentDur * 0.8;
      var zoomOffset = this.instance.trace ? 1 : 0;
      var pathAnimGroup = new MotorCortex__default["default"].Group();
      var pointAnimGroup = new MotorCortex__default["default"].Group();

      for (var l = 0; l < this.instance.dataSetsNum; l++) {
        var gLabelGroup = new MotorCortex__default["default"].Group();

        for (var i = 0; i < this.instance.data.length; i++) {
          // Path outro Animation
          if (i !== this.instance.data.length - 1) {
            var pathAnimation = new SVGD.Draw({
              animatedAttrs: {
                cover: 0
              },
              initialValues: {
                cover: 1
              }
            }, {
              selector: "#line-".concat(l, "-").concat(i),
              duration: Math.trunc(pathDur),
              easing: "easeInOutQuad"
            });
            pathAnimGroup.addIncident(pathAnimation, Math.trunc(segmentDur * (this.instance.data.length + zoomOffset - i - 2) + segmentDur * 0.2));
          } // Points outro Animation


          var pointAnimation = new MotorCortex.CSSEffect({
            animatedAttrs: {
              opacity: 0,
              r: 0
            },
            initialValues: {
              opacity: 1,
              r: this.instance.r
            }
          }, {
            selector: "#point-".concat(l, "-").concat(i),
            duration: Math.trunc(pointDur),
            easeing: "easeOutCubic"
          });
          pointAnimGroup.addIncident(pointAnimation, Math.trunc(segmentDur * (this.instance.data.length + zoomOffset - i - 1))); // Graph Label Outro Animation

          var targetTop = this.instance.findPointY(i, l) - this.instance.linesHeight * 0.083;
          var topOffset = targetTop + this.instance.linesHeight * 0.07 / 2;
          var targetWidth = 10 / 2 * this.instance.data.length > 10 ? 10 : 10 / 2 * this.instance.data.length;
          targetWidth = targetWidth < 6 ? 6 : targetWidth;
          var targetLeft = this.instance.findPointX(i) - targetWidth * this.instance.linesWidth / 100 * 0.5;
          var leftOffset = targetLeft + this.instance.linesWidth * (targetWidth / 100) / 2;
          var gLabelAnimation = new MotorCortex.CSSEffect({
            animatedAttrs: {
              opacity: 0,
              width: "0%",
              "min-width": "0%",
              height: "0%",
              top: "".concat(topOffset, "px"),
              left: "".concat(leftOffset, "px"),
              "font-size": 0
            },
            initialValues: {
              opacity: 0.6,
              width: "".concat(targetWidth, "%"),
              "min-width": "".concat(targetWidth, "%"),
              height: "7%",
              top: "".concat(targetTop, "px"),
              left: "".concat(targetLeft, "px"),
              "font-size": this.instance.fontSizeInner
            }
          }, {
            selector: ".label-".concat(l, "-").concat(this.instance.data[i].name),
            duration: Math.trunc(pointDur),
            easeing: "easeInOutCubic"
          });
          gLabelGroup.addIncident(gLabelAnimation, Math.trunc(segmentDur * (this.instance.data.length + zoomOffset - i - 1) + pointDur * 0.2));
        }

        targetGroup.addIncident(gLabelGroup, 0);
      }

      return [targetGroup, pathAnimGroup, pointAnimGroup];
    }
  }]);

  return AnimationConstructor;
}();

/**
 * LINE GRAPH: MotorCortex Implementation
 */

var LineGraph = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits$1(LineGraph, _MotorCortex$HTMLClip);

  var _super = _createSuper$1(LineGraph);

  function LineGraph() {
    _classCallCheck$1(this, LineGraph);

    return _super.apply(this, arguments);
  }

  _createClass$2(LineGraph, [{
    key: "html",
    get: // Building HTML tree for incident
    function get() {
      this.buildVars(); // Title modal html generation

      var title = [];

      for (var i in this.words) {
        var word = [];

        for (var z = 0; z < this.words[i].length; z++) {
          word += this.words[i][z];
        }

        title.push(MotorCortex__default["default"].utils.createDOMElement("div", {
          id: "word-" + i,
          class: "fontColorOn letter-wrapper-title"
        }, word));

        if (i != this.words.length - 1) {
          title.push(MotorCortex__default["default"].utils.createDOMElement("div", {
            class: "space-char letter-wrapper-title"
          }, "-"));
        }
      } // Legend html generation


      var legend = [];

      if (this.legend) {
        var legendLine = [];

        for (var l = 0; l < this.dataSetsNum; l++) {
          legendLine.push(MotorCortex__default["default"].utils.createDOMElement("div", {
            class: "line-wrapper"
          }, MotorCortex__default["default"].utils.createDOMElement("div", {
            class: "color-wrapper"
          }, MotorCortex__default["default"].utils.createDOMElement("div", {
            class: "line-color color-" + l
          })), MotorCortex__default["default"].utils.createDOMElement("div", {
            class: "line-title"
          }, this.dataSets[l].title)));
        }

        legend.push(MotorCortex__default["default"].utils.createDOMElement("div", {
          class: "legend-wrapper"
        }, legendLine));
      } // Data stele html generation


      var dataSteles = [];

      if (this.grid === "steles") {
        for (var _i in this.data) {
          var stele = [];

          for (var _z = 0; _z < this.steleBlockNum; _z++) {
            stele.push(MotorCortex__default["default"].utils.createDOMElement("div", {
              class: "stele-block-" + _i + " stele-block stele-grid-block"
            }));
          }

          dataSteles.push(MotorCortex__default["default"].utils.createDOMElement("div", {
            id: "stele-" + _i,
            class: "data-stele stele-grid"
          }, stele));
        }
      } else if (this.grid === "lines") {
        var _stele = [];

        for (var _z2 = 0; _z2 < this.steleBlockNum; _z2++) {
          _stele.push(MotorCortex__default["default"].utils.createDOMElement("div", {
            class: "stele-block-" + 0 + " stele-block line-grid-block"
          }));
        }

        dataSteles.push(MotorCortex__default["default"].utils.createDOMElement("div", {
          id: "stele-" + 0,
          class: "data-stele line-grid"
        }, _stele));
      } // Graph Lines SVG hmtl generation


      var lineGroups = [];

      for (var _l = 0; _l < this.dataSetsNum; _l++) {
        var linePaths = [];

        for (var _i2 = 0; _i2 < this.data.length; _i2++) {
          var lineSegment = [];
          var xPoint1 = this.findPointX(_i2);
          var yPoint1 = this.findPointY(_i2, _l);

          if (_i2 !== this.data.length - 1) {
            var xPoint2 = this.findPointX(_i2 + 1);
            var yPoint2 = this.findPointY(_i2 + 1, _l); // Dataline Generation

            lineSegment.push(MotorCortex__default["default"].utils.createDOMElement("path", {
              id: "line-".concat(_l, "-").concat(_i2),
              class: "line-".concat(_l),
              d: "M ".concat(xPoint1, " ").concat(yPoint1) + "L ".concat(xPoint2, " ").concat(yPoint2),
              stroke: this.dataSets[_l].color,
              "stroke-width": "0.65%",
              "stroke-linecap": "round",
              fill: "none"
            }));
          } // Datapoint Generation


          lineSegment.push(MotorCortex__default["default"].utils.createDOMElement("circle", {
            id: "point-".concat(_l, "-").concat(_i2),
            class: "point-".concat(_l, " datapoint"),
            cx: "".concat(xPoint1),
            cy: "".concat(yPoint1),
            r: "".concat(this.r, "%"),
            fill: this.senaryC,
            stroke: this.senaryC
          }));
          linePaths.push(MotorCortex__default["default"].utils.createDOMElement("g", null, lineSegment));
        }

        lineGroups.push(MotorCortex__default["default"].utils.createDOMElement("g", null, linePaths));
      }

      var lines = [];
      lines.push(MotorCortex__default["default"].utils.createDOMElement("svg", {
        class: "lines-container",
        viewbox: "0 0 ".concat(this.linesWidth, " ").concat(this.linesHeight)
      }, lineGroups)); // Graph labels html generation with data parameters as reference

      var labelGroups = [];

      for (var _l2 = 0; _l2 < this.dataSetsNum; _l2++) {
        var graphLabels = [];

        for (var _i3 = 0; _i3 < this.data.length; _i3++) {
          graphLabels.push(MotorCortex__default["default"].utils.createDOMElement("div", null, MotorCortex__default["default"].utils.createDOMElement("div", {
            class: "hoverPoint-".concat(_l2, "-").concat(this.data[_i3].name, " hoverPoint")
          }), MotorCortex__default["default"].utils.createDOMElement("div", {
            class: "label-".concat(_l2, "-").concat(this.data[_i3].name, " inner-label-container"),
            id: "label-".concat(_l2, "-").concat(this.data[_i3].name)
          }, MotorCortex__default["default"].utils.createDOMElement("div", {
            class: "inner-label"
          }, "".concat(parseFloat(this.data[_i3].values[_l2].toFixed(2)), " ").concat(this.unit)))));
        }

        labelGroups.push(MotorCortex__default["default"].utils.createDOMElement("div", {
          class: "line-".concat(_l2, "-label-container")
        }, graphLabels));
      } // X-axis labels html generation with data parameter as reference


      var xLabels = [];

      for (var _i4 in this.data) {
        var labelX = [];

        if (this.data[_i4].name.length > 4) {
          this.data[_i4].name = this.data[_i4].name.slice(0, 4);
        }

        for (var _z3 in this.data[_i4].name) {
          labelX.push(MotorCortex__default["default"].utils.createDOMElement("div", {
            id: "letter-" + _i4 + "-" + _z3,
            class: "letter-container"
          }, MotorCortex__default["default"].utils.createDOMElement("div", {
            class: "letter-wrapper-label fontColorOn"
          }, this.data[_i4].name[_z3])));
        }

        xLabels.push(MotorCortex__default["default"].utils.createDOMElement("div", {
          class: "label-container",
          id: "label-" + _i4
        }, labelX));
      } // MAIN HTML TREE


      var lineGraphHTML = MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "container-lineGraph"
      }, MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "viewport-lineGraph"
      }, MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "title-container-lineGraph"
      }, MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "title-wrapper-lineGraph"
      }, title)), legend, MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "graph-background"
      }), MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "dataStele-container"
      }, dataSteles), MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "svg-container"
      }, lines), MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "graph-labels-container"
      }, labelGroups), MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "x-labels-container-lineGraph"
      }, xLabels), MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "x-labels-back-wrapper-lineGraph"
      }, MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "block-background"
      }))));
      return lineGraphHTML;
    } // Build CSS rules for incident

  }, {
    key: "css",
    get: function get() {
      return buildCSS$1(this);
    } // Font API call (only google fonts API supported)

  }, {
    key: "fonts",
    get: function get() {
      return [{
        type: "google-font",
        src: "".concat(this.url)
      }];
    } // MotorCortex Animation generation and

  }, {
    key: "buildTree",
    value: function buildTree() {
      opacityControl(this, ".container-lineGraph"); // INTRO CONTROL

      if (this.attrs.timings.intro) {
        var introGroup = new MotorCortex__default["default"].Group(); // Background Intro Animation

        introGroup.addIncident(this.animConstructor.buildBackgroundIntro(), this.introDur * 0); // Main Title Intro Animation

        introGroup.addIncident(this.animConstructor.buildTitleIntroCombo(), Math.trunc(this.introDur * 0.14)); // Legend Intro Animation

        introGroup.addIncident(this.animConstructor.buildIntroLegend(), Math.trunc(this.introDur * 0.1)); // Label Intro Animation

        introGroup.addIncident(this.animConstructor.buildIntroLabels(), Math.trunc(this.introDur * 0.18)); // Data Stele intro animation

        introGroup.addIncident(this.animConstructor.buildIntroStele(), Math.trunc(this.introDur * 0.45)); // Graph SVG, Labels, & Zoom Intro Animation

        var segmentDur = this.introDur / this.data.length;
        var pointDur = segmentDur * 0.35;

        var _ref = _toConsumableArray(this.animConstructor.buildIntroGraph(introGroup)),
            targetGroup = _ref[0],
            pathGroup = _ref[1],
            pointGroup = _ref[2];

        introGroup = targetGroup;
        introGroup.addIncident(pathGroup, Math.trunc(pointDur));
        introGroup.addIncident(pointGroup, 0);
        this.addIncident(introGroup, 0);
      } // OUTRO CONTROL


      if (this.attrs.timings.outro) {
        var outroGroup = new MotorCortex__default["default"].Group(); // Background Outro Animation

        outroGroup.addIncident(this.animConstructor.buildBackgroundOutro(), Math.trunc(this.outroDur * 0.8)); // Main Title Outro Animation

        outroGroup.addIncident(this.animConstructor.buildTitleOutroCombo(), Math.trunc(this.outroDur * 0.76)); // Legend Outro Animation

        outroGroup.addIncident(this.animConstructor.buildOutroLegend(), Math.trunc(this.outroDur * 0.1)); // Label Outro Animation

        outroGroup.addIncident(this.animConstructor.buildOutroLabels(), this.outroDur - this.outroDur * 0.55); // Data Stele Outro Animation

        outroGroup.addIncident(this.animConstructor.buildOutroStele(), this.outroDur * 0.25); // Graph SVG & Labels Outro Animation

        var _segmentDur = this.outroDur / (this.data.length + 1);

        var _pointDur = _segmentDur * 0.25;

        var _ref2 = _toConsumableArray(this.animConstructor.buildOutroGraph(outroGroup)),
            _targetGroup = _ref2[0],
            _pathGroup = _ref2[1],
            _pointGroup = _ref2[2];

        outroGroup = _targetGroup;
        outroGroup.addIncident(_pathGroup, Math.trunc(_pointDur));
        outroGroup.addIncident(_pointGroup, 0);
        this.addIncident(outroGroup, 0 + this.introDur + this.staticDur);
      } // STATIC DURATION CONTROL


      this.addIncident(this.animConstructor.buildStaticControl(), this.introDur);
    }
  }, {
    key: "buildVars",
    value: function buildVars() {
      var _this = this;

      // AnimConstructor Init
      this.animConstructor = new AnimationConstructor(this); // Data init

      this.data = this.attrs.data.data; // Colors control

      this.colorPalette = colorPalette;
      this.attrs.palette = this.attrs.palette ? this.attrs.palette : {};
      this.primaryC = this.attrs.palette.primary ? this.attrs.palette.primary : this.colorPalette.gray;
      this.secondaryC = this.attrs.palette.secondary ? this.attrs.palette.secondary : this.colorPalette.lightGray;
      this.tertiaryC = this.attrs.palette.tertiary ? this.attrs.palette.tertiary : this.colorPalette.darkGray;
      this.quaternaryC = this.attrs.palette.quaternary ? this.attrs.palette.quaternary : this.colorPalette.whiteBack;
      this.quinaryC = this.attrs.palette.quinary ? this.attrs.palette.quinary : this.colorPalette.gray;
      this.senaryC = this.attrs.palette.senary ? this.attrs.palette.senary : this.colorPalette.accent;
      this.fontC = this.attrs.palette.font ? this.attrs.palette.font : this.colorPalette.font;
      this.accentC = this.attrs.palette.accent ? this.attrs.palette.accent : this.colorPalette.accent;
      this.backgroundC = this.attrs.palette.background ? this.attrs.palette.background : this.colorPalette.background; // Data processing

      this.title = this.attrs.data.title;
      this.words = this.title.split(" ");
      this.dataSets = this.attrs.data.dataSets ? this.attrs.data.dataSets : [{
        title: "",
        color: this.accentC
      }];
      this.dataSetsNum = this.dataSets.length;
      var colorCount = 2;
      this.dataSets.map(function (dataSet, l) {
        if (dataSet.color === "" || !dataSet.color) {
          dataSet.color = _this.colorPalette.dataColors[colorCount], colorCount++;
        }

        if (dataSet.title === "" || !dataSet.title) {
          dataSet.title = "Dataset-".concat(l + 1);
        } else if (dataSet.title.length > 10) {
          dataSet.title = dataSet.title.substr(0, 10);
        }
      });
      this.legend = this.attrs.legend ? this.attrs.legend : false;
      this.legend = this.dataSetsNum > 1 ? true : this.legend;
      this.maxPoint = 0;

      var _iterator = _createForOfIteratorHelper(this.data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var datum = _step.value;

          if (Math.max.apply(Math, _toConsumableArray(datum.values)) > this.maxPoint) {
            this.maxPoint = Math.max.apply(Math, _toConsumableArray(datum.values));
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.maxPoint = this.attrs.data.maxValue ? this.attrs.data.maxValue : this.maxPoint;
      this.hover = this.attrs.data.hover ? this.attrs.data.hover : false;
      this.hover = this.dataSetsNum !== 1 ? true : this.hover;
      this.grid = this.attrs.grid ? this.attrs.grid : "lines";
      this.grid = this.grid !== "lines" && this.grid !== "steles" ? "lines" : this.grid;
      this.gridH = this.attrs.gridH ? this.attrs.gridH : 1;
      this.attrs.trace = this.attrs.trace ? this.attrs.trace : {};
      this.trace = this.attrs.trace.toggle ? this.attrs.trace.toggle : false;
      this.trace = this.dataSetsNum === 1 ? this.trace : false;
      this.traceScale = this.attrs.trace.scale ? this.attrs.trace.scale : 1.4;
      this.unit = this.attrs.data.unit ? this.attrs.data.unit : "%";
      this.interval = this.attrs.data.interval ? this.attrs.data.interval : 5;
      this.steleBlockNum = this.maxPoint / this.interval + 1; // Sizing and position controls

      this.config = config;
      this.graphScale = {
        width: 0.76,
        height: 0.58
      };
      this.legendHeightFactor = this.dataSetsNum === 1 ? 1 : this.dataSetsNum / 2;
      this.legendHeight = this.attrs.legendHeight ? this.attrs.legendHeight : 4 * (this.legendHeightFactor + (this.legendHeightFactor % 1 ? 1 : 0));
      this.linesWidth = helpers.extractUnitsNums(this.props.containerParams.width).number * this.graphScale.width;
      this.linesHeight = helpers.extractUnitsNums(this.props.containerParams.height).number * this.graphScale.height;
      this.steleWidth = this.linesWidth * 0.01;
      this.spaceAround = (this.linesWidth - this.steleWidth * this.data.length) / (this.data.length * 2);
      this.r = this.attrs.dataPointR ? this.attrs.dataPointR : 0.65; // Global access data process functions

      this.findPointX = function (datapoint) {
        return _this.steleWidth / 2 + _this.spaceAround + datapoint * (2 * _this.spaceAround + _this.steleWidth);
      };

      this.findPointY = function (datapoint, line) {
        return _this.linesHeight - _this.data[datapoint].values[line] * _this.linesHeight / _this.maxPoint;
      }; // Fonts control


      this.attrs.font = this.attrs.font ? this.attrs.font : {};
      this.fontFamily = this.attrs.font.fontFamily ? this.attrs.font.fontFamily : "'Staatliches', cursive";
      this.fontSizeLabel = this.attrs.font.size ? this.attrs.font.size : "1.7rem";
      this.fontSizeTitle = 1.5 * helpers.extractUnitsNums(this.fontSizeLabel).number + helpers.extractUnitsNums(this.fontSizeLabel).unit;
      this.fontSizeInner = 1 * helpers.extractUnitsNums(this.fontSizeLabel).number + helpers.extractUnitsNums(this.fontSizeLabel).unit;
      this.url = this.attrs.font.url ? this.attrs.font.url : "https://fonts.googleapis.com/css2?family=Staatliches&display=swap"; // Timeline control

      this.attrs.timings = this.attrs.timings ? this.attrs.timings : {};
      this.introDur = this.attrs.timings.intro ? this.attrs.timings.intro : 0;
      this.outroDur = this.attrs.timings.outro ? this.attrs.timings.outro : 0;

      if (this.attrs.timings.static === 0) {
        this.staticDur = 0;
      } else {
        this.staticDur = this.attrs.timings.static ? this.attrs.timings.static : 1000;
      }
    }
  }]);

  return LineGraph;
}(MotorCortex__default["default"].HTMLClip);

function buildCSS(cssArgs) {
  var _cssArgs$font, _cssArgs$font2, _cssArgs$font3;

  var createGenerateId = function createGenerateId() {
    return function (rule) {
      return rule.key;
    };
  };

  jss.setup({
    createGenerateId: createGenerateId
  });
  var styles = {
    "container-pieChart": {
      opacity: 1,
      "background-color": "transparent",
      width: "100%",
      height: "100%",
      display: "flex",
      "align-items": "center",
      "flex-direction": "column",
      "font-family": "".concat((_cssArgs$font = cssArgs.font) !== null && _cssArgs$font !== void 0 && _cssArgs$font.fontFamily ? cssArgs.font.fontFamily : "Staatliches, cursive"),
      "font-size": "".concat((_cssArgs$font2 = cssArgs.font) !== null && _cssArgs$font2 !== void 0 && _cssArgs$font2.size ? cssArgs.font.size : "1.6rem"),
      color: cssArgs.palette.font ? cssArgs.palette.font : colorPalette.font
    },
    title: {
      top: "-1rem",
      position: "relative",
      display: "flex",
      "justify-content": "center",
      "align-items": "center",
      "flex:direction": "row",
      overflow: "hidden"
    },
    columns: {
      width: "100%",
      height: "100%",
      display: "flex"
    },
    "col-1": {
      width: "65%",
      height: "100%",
      display: "flex",
      "justify-content": "center",
      "align-items": "center"
    },
    "col-2": {
      width: "35%",
      height: "100%",
      display: "flex",
      "justify-content": "center",
      "align-items": "center"
    },
    piechart: {
      display: "block",
      width: "95%",
      height: "95%",
      "border-radius": "50%",
      "background-image": "conic-gradient(".concat(cssArgs.radiusString, ")"),
      "margin-left": "2rem"
    },
    legend: {
      display: "flex",
      "flex-direction": "column",
      padding: "1rem",
      "max-width": "75%",
      "min-width": "50%",
      background: cssArgs.palette.primary ? cssArgs.palette.primary : "rgba(0,0,0, 0.2)",
      position: "relative",
      top: "22.5%",
      overflow: "hidden"
    },
    "legend-row": {
      display: "flex",
      "flex-direction": "row",
      "align-items": "center",
      "align-self": "flex-start"
    },
    "legend-text": {
      " white-space": "nowrap"
    },
    space: {
      "min-width": (_cssArgs$font3 = cssArgs.font) !== null && _cssArgs$font3 !== void 0 && _cssArgs$font3.size ? "calc(".concat(cssArgs.font.size, " * 0.5)") : "0.8rem"
    },
    char: {
      position: "relative"
    }
  };
  cssArgs.data.data.forEach(function (elem, i) {
    styles["meter-" + i] = {
      background: elem.color ? elem.color : generateColor(i),
      width: "1rem",
      height: "1rem",
      display: "block",
      "margin-right": "0.5rem",
      "margin-bottom": "0.25rem"
    };
  });
  var styleSheet = jss.createStyleSheet(styles).toString();
  return styleSheet;
}

function generateColor(index) {
  if (index > colorPalette.dataColors.length - 1) {
    return colorPalette.dataColors[Math.floor(Math.random() * Math.floor(colorPalette.dataColors.length))];
  }

  return colorPalette.dataColors[index];
}

/**
 * The purpose of extending the HTMLClip is to full, parametric
 * HTMLClips with both context and Incidents.
 *
 * HTMLClip allows you to set your html, css, fonts and audioSources
 * upfront by the corresponding getter methods. You can use the this.attrs
 * reference on these methods so you can generate dynamic content.
 * Overwrite ONLY the ones you are interested in, ignore the rest.
 * The buildTree method allows developers to define Incidents (of any plugin)
 * dynamically and position them on the Clip.
 */

var PieChart = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits$1(PieChart, _MotorCortex$HTMLClip);

  var _super = _createSuper$1(PieChart);

  function PieChart() {
    _classCallCheck$1(this, PieChart);

    return _super.apply(this, arguments);
  }

  _createClass$2(PieChart, [{
    key: "html",
    get: function get() {
      this.data = this.attrs.data.data;
      return MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "container-pieChart"
      }, MotorCortex__default["default"].utils.createDOMElement("h1", {
        class: "title"
      }, this.buildTitle()), MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "columns"
      }, MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "col-1"
      }, MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "piechart"
      })), MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "col-2"
      }, MotorCortex__default["default"].utils.createDOMElement("div", {
        class: "legend"
      }, this.buildLegend()))));
    }
  }, {
    key: "css",
    get: function get() {
      var cssArgs = {
        data: this.attrs.data,
        palette: this.attrs.palette ? this.attrs.palette : {},
        font: this.attrs.font ? this.attrs.font : {},
        radiusString: this.createRadiusString()
      };
      return buildCSS(cssArgs);
    }
  }, {
    key: "fonts",
    get: function get() {
      var _this$attrs$font;

      return [{
        type: "google-font",
        src: (_this$attrs$font = this.attrs.font) !== null && _this$attrs$font !== void 0 && _this$attrs$font.url ? this.attrs.font.url : "https://fonts.googleapis.com/css2?family=Staatliches&display=swap"
      }];
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var _this = this,
          _this$attrs$timings;

      fadeOutOpacityControl(this, ".container-pieChart");

      if (this.attrs.timings.static === 0) {
        this.static = 0;
      } else {
        this.static = this.attrs.timings.static ? this.attrs.timings.static : 1000;
      }

      this.intro = this.attrs.timings.intro ? this.attrs.timings.intro : 0;
      this.outro = this.attrs.timings.outro ? this.attrs.timings.outro : 0;

      if (this.intro) {
        var rotateDuration = Math.round(this.intro * 0.8);
        var titleInDuration = Math.round(this.intro * 0.4);

        if (this.attrs.data.title) {
          _toConsumableArray(this.attrs.data.title).forEach(function (char, index) {
            var titleIn = new MotorCortex.CSSEffect({
              animatedAttrs: {
                right: "0%",
                opacity: 1
              },
              initialValues: {
                right: "-102%",
                opacity: 0,
                position: "relative"
              }
            }, {
              duration: Math.round(titleInDuration / _this.attrs.data.title.length),
              selector: ".char-".concat(index),
              easing: "easeOutCubic"
            });

            _this.addIncident(titleIn, Math.round(titleInDuration / _this.attrs.data.title.length) * index);
          });
        }

        var rotateIn = new MotorCortex.CSSEffect({
          animatedAttrs: {
            "background-image": "conic-gradient(".concat(this.createRadiusString(), ")")
          },
          initialValues: {
            "background-image": "conic-gradient(".concat(this.createNullRadiusString(), ")")
          }
        }, {
          duration: rotateDuration,
          selector: ".piechart",
          easing: "easeInOutCubic"
        });
        this.addIncident(rotateIn, titleInDuration - this.intro * 0.2);
        var legendIn = new MotorCortex.CSSEffect({
          animatedAttrs: {
            width: "75%",
            "min-width": "50%",
            opacity: 1
          },
          initialValues: {
            width: "0%",
            "min-width": "0%",
            opacity: 0
          }
        }, {
          duration: rotateDuration,
          selector: ".legend",
          easing: "easeInOutCubic"
        });
        this.addIncident(legendIn, titleInDuration - this.intro * 0.2);
      }

      var staticPie = new MotorCortex.CSSEffect({
        animatedAttrs: {}
      }, {
        duration: this.static,
        selector: ".container-pieChart"
      });
      this.addIncident(staticPie, this.intro);

      if ((_this$attrs$timings = this.attrs.timings) !== null && _this$attrs$timings !== void 0 && _this$attrs$timings.outro) {
        var _this$attrs$timings2;

        var outroDuration = Math.round((_this$attrs$timings2 = this.attrs.timings) === null || _this$attrs$timings2 === void 0 ? void 0 : _this$attrs$timings2.outro);
        var titleOut = new MotorCortex.CSSEffect({
          animatedAttrs: {
            top: "-10%"
          },
          initialValues: {
            top: "0%"
          }
        }, {
          duration: outroDuration * 0.5,
          selector: ".title",
          easing: "easeInQuart"
        });
        this.addIncident(titleOut, this.intro + this.static + this.outro * 0.2);
        var legendOut = new MotorCortex.CSSEffect({
          animatedAttrs: {
            width: "0%",
            "min-width": "0%",
            opacity: 0
          }
        }, {
          duration: outroDuration,
          selector: ".legend",
          easing: "easeInOutCirc"
        });
        this.addIncident(legendOut, this.intro + this.static);
        var pieOut = new MotorCortex.CSSEffect({
          animatedAttrs: {
            "background-image": "conic-gradient(".concat(this.createNullRadiusString(), ")")
          },
          initialValues: {
            "background-image": "conic-gradient(".concat(this.createRadiusString(), ")")
          }
        }, {
          duration: outroDuration,
          selector: ".piechart",
          easing: "easeInOutCubic"
        });
        this.addIncident(pieOut, this.intro + this.static);
      }
    }
  }, {
    key: "createRadiusString",
    value: function createRadiusString() {
      var gradientString = "";
      var turnCount = 0;

      for (var datum in this.data) {
        if (datum === "0") {
          gradientString += "\n                    ".concat(this.data[datum].color ? this.data[datum].color : this.generateColor(datum), "\n                    ").concat(this.data[datum].value / 100, "turn,\n                ");
        } else {
          gradientString += "\n                    ".concat(this.data[datum - 1].color ? this.data[datum].color : this.generateColor(datum), "\n                    ").concat(this.data[datum - 1].value / 100, "turn,\n                    ").concat(this.data[datum].color ? this.data[datum].color : this.generateColor(datum), "\n                    ").concat(turnCount + this.data[datum].value / 100, "turn,\n                ");
        }

        turnCount += this.data[datum].value / 100;
      }

      gradientString = gradientString + "rgba(0,0,0,0) 0 360deg";
      return gradientString;
    }
  }, {
    key: "createNullRadiusString",
    value: function createNullRadiusString() {
      var gradientString = "";

      for (var datum in this.data) {
        if (datum === "0") {
          gradientString += "\n                    ".concat(this.data[datum].color ? this.data[datum].color : this.generateColor(datum), "\n                    ", 0, "turn,\n                ");
        } else {
          gradientString += "\n                    ".concat(this.data[datum - 1].color ? this.data[datum].color : this.generateColor(datum), "\n                    ", 0, "turn,\n                    ").concat(this.data[datum].color ? this.data[datum].color : this.generateColor(datum), "\n                    ", 0, "turn,\n                ");
        }
      }

      gradientString = gradientString + "rgba(0,0,0,0) 0 360deg";
      return gradientString;
    }
  }, {
    key: "generateColor",
    value: function generateColor(index) {
      if (index > colorPalette.dataColors.length - 1) {
        return colorPalette.dataColors[Math.floor(Math.random() * Math.floor(colorPalette.dataColors.length))];
      }

      return colorPalette.dataColors[index];
    }
  }, {
    key: "buildTitle",
    value: function buildTitle() {
      return _toConsumableArray(this.attrs.data.title).map(function (char, index) {
        return MotorCortex__default["default"].utils.createDOMElement("div", {
          class: "char"
        }, MotorCortex__default["default"].utils.createDOMElement("div", {
          class: "char-" + index + (char === " " ? " space" : "")
        }, char));
      });
    }
  }, {
    key: "buildLegend",
    value: function buildLegend() {
      return this.attrs.data.data.map(function (elem, index) {
        if (elem.name.length > 24) {
          elem.name = elem.name.substring(0, 21);
          elem.name += "...";
        }

        var legendRow = MotorCortex__default["default"].utils.createDOMElement("div", {
          class: "legend-row"
        }, MotorCortex__default["default"].utils.createDOMElement("div", {
          class: "meter-" + index
        }), MotorCortex__default["default"].utils.createDOMElement("div", {
          class: "legend-text"
        }, elem.name));
        return legendRow;
      });
    }
  }]);

  return PieChart;
}(MotorCortex__default["default"].HTMLClip);

var validationRules = {
  ProgressBar: {
    data: {
      type: "array",
      items: {
        type: "any"
      }
    },
    timings: {
      type: "object",
      props: {
        intro: {
          type: "number",
          min: 0,
          optional: true
        },
        static: {
          type: "number",
          min: 0,
          optional: true
        },
        outro: {
          type: "number",
          min: 0,
          optional: true
        }
      }
    },
    pallete: {
      type: "object",
      optional: true,
      props: {
        primary: {
          type: "color",
          optional: true
        },
        secondary: {
          type: "color",
          optional: true
        },
        font: {
          type: "color",
          optional: true
        },
        accent: {
          type: "color",
          optional: true
        },
        background: {
          type: "color",
          optional: true
        }
      }
    },
    font: {
      type: "object",
      optional: true,
      props: {
        url: {
          type: "string",
          optional: true
        },
        fontFamily: {
          type: "string",
          optional: true
        },
        size: {
          type: "measurement",
          optional: true,
          min: 0,
          units: ["px", "%", "em", "rem"]
        }
      }
    },
    options: {
      type: "object",
      optional: true,
      props: {
        hidePercentage: {
          type: "boolean",
          optional: true
        }
      }
    }
  },
  BarChartSimple: {
    data: {
      type: "object",
      props: {
        title: {
          type: "string",
          optional: true
        },
        subtitle: {
          type: "string",
          optional: true
        },
        showGrid: {
          type: "boolean",
          optional: true
        },
        maxValue: {
          type: "number",
          min: 0,
          optional: true
        },
        data: {
          type: "array",
          items: {
            type: "any"
          }
        }
      }
    },
    timings: {
      type: "object",
      props: {
        intro: {
          type: "number",
          min: 0,
          optional: true
        },
        static: {
          type: "number",
          min: 0,
          optional: true
        },
        outro: {
          type: "number",
          min: 0,
          optional: true
        }
      }
    },
    pallete: {
      type: "object",
      optional: true,
      props: {
        primary: {
          type: "color",
          optional: true
        },
        secondary: {
          type: "color",
          optional: true
        },
        tertiary: {
          type: "color",
          optional: true
        },
        font: {
          type: "color",
          optional: true
        },
        accent: {
          type: "color",
          optional: true
        },
        background: {
          type: "color",
          optional: true
        }
      }
    },
    font: {
      type: "object",
      optional: true,
      props: {
        url: {
          type: "string",
          optional: true
        },
        fontFamily: {
          type: "string",
          optional: true
        },
        size: {
          type: "measurement",
          optional: true,
          min: 0,
          units: ["px", "%", "em", "rem"]
        }
      }
    }
  },
  LineGraph: {
    data: {
      type: "object",
      props: {
        title: {
          type: "string",
          optional: true
        },
        showGrid: {
          type: "boolean",
          optional: true
        },
        interval: {
          type: "number",
          min: 0,
          optional: true
        },
        maxValue: {
          type: "number",
          min: 0,
          optional: true
        },
        unit: {
          type: "string",
          optional: true
        },
        hover: {
          type: "boolean",
          optional: true
        },
        data: {
          type: "array",
          items: {
            type: "any"
          }
        },
        dataSets: {
          type: "array",
          items: {
            type: "any"
          }
        }
      }
    },
    timings: {
      type: "object",
      props: {
        intro: {
          type: "number",
          min: 0,
          optional: true
        },
        static: {
          type: "number",
          min: 0,
          optional: true
        },
        outro: {
          type: "number",
          min: 0,
          optional: true
        }
      }
    },
    pallete: {
      type: "object",
      optional: true,
      props: {
        primary: {
          type: "color",
          optional: true
        },
        secondary: {
          type: "color",
          optional: true
        },
        tertiary: {
          type: "color",
          optional: true
        },
        quaternary: {
          type: "color",
          optional: true
        },
        font: {
          type: "color",
          optional: true
        },
        accent: {
          type: "color",
          optional: true
        },
        background: {
          type: "color",
          optional: true
        }
      }
    },
    font: {
      type: "object",
      optional: true,
      props: {
        url: {
          type: "string",
          optional: true
        },
        fontFamily: {
          type: "string",
          optional: true
        },
        size: {
          type: "measurement",
          optional: true,
          min: 0,
          units: ["px", "%", "em", "rem"]
        }
      }
    },
    hover: {
      type: "boolean",
      optional: true
    },
    legend: {
      type: "boolean",
      optional: true
    },
    trace: {
      type: "object",
      optional: true,
      props: {
        toggle: {
          type: "boolean",
          optional: true
        },
        scale: {
          type: "number",
          optional: true
        }
      }
    }
  },
  PieChart: {
    data: {
      type: "object",
      props: {
        title: {
          type: "string",
          optional: true
        },
        data: {
          type: "array",
          items: {
            type: "any"
          }
        }
      }
    },
    timings: {
      type: "object",
      props: {
        intro: {
          type: "number",
          min: 0,
          optional: true
        },
        static: {
          type: "number",
          min: 0,
          optional: true
        },
        outro: {
          type: "number",
          min: 0,
          optional: true
        }
      }
    },
    pallete: {
      type: "object",
      optional: true,
      props: {
        font: {
          type: "color",
          optional: true
        },
        background: {
          type: "color",
          optional: true
        }
      }
    },
    font: {
      type: "object",
      optional: true,
      props: {
        url: {
          type: "string",
          optional: true
        },
        fontFamily: {
          type: "string",
          optional: true
        },
        size: {
          type: "measurement",
          optional: true,
          min: 0,
          units: ["px", "%", "em", "rem"]
        }
      }
    }
  },
  ProgressMeter: {
    data: {
      type: "object",
      props: {
        value: {
          type: "number",
          min: 0,
          max: 100,
          integer: true,
          optional: true
        },
        unit: {
          type: "string",
          optional: true
        },
        innerFill: {
          type: "object",
          optional: true,
          props: {
            revert: {
              type: "boolean",
              optional: true
            },
            rotate: {
              type: "boolean",
              optional: true
            }
          }
        }
      }
    },
    innerImage: {
      type: "string",
      optional: true
    },
    timings: {
      type: "object",
      props: {
        intro: {
          type: "number",
          min: 0,
          optional: true
        },
        static: {
          type: "number",
          min: 0,
          optional: true
        },
        outro: {
          type: "number",
          min: 0,
          optional: true
        }
      }
    },
    pallete: {
      type: "object",
      optional: true,
      props: {
        font: {
          type: "color",
          optional: true
        },
        accent: {
          type: "color",
          optional: true
        },
        background: {
          type: "color",
          optional: true
        }
      }
    },
    font: {
      type: "object",
      optional: true,
      props: {
        url: {
          type: "string",
          optional: true
        },
        fontFamily: {
          type: "string",
          optional: true
        },
        size: {
          type: "measurement",
          optional: true,
          min: 0,
          units: ["px", "%", "em", "rem"]
        }
      }
    }
  }
};

var name = "@donkeyclip/motorcortex-graphs";
var version = "1.7.0";

var index = {
  npm_name: name,
  version: version,
  incidents: [{
    exportable: ProgressBar,
    name: "ProgressBar",
    attributesValidationRules: validationRules.ProgressBar,
    originalDims: {
      width: "1200px",
      height: "900px"
    }
  }, {
    exportable: BarChartSimple,
    name: "BarChartSimple",
    attributesValidationRules: validationRules.BarChartSimple
  }, {
    exportable: LineGraph,
    name: "LineGraph",
    attributesValidationRules: validationRules.LineGraph
  }, {
    exportable: PieChart,
    name: "PieChart",
    attributesValidationRules: validationRules.PieChart,
    originalDims: {
      width: "1200px",
      height: "900px"
    }
  }, {
    exportable: ProgressMeter,
    name: "ProgressMeter",
    attributesValidationRules: validationRules.ProgressMeter
  }]
};

module.exports = index;
