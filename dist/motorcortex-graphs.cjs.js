'use strict';

var MotorCortex = require('@donkeyclip/motorcortex');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var MotorCortex__default = /*#__PURE__*/_interopDefaultLegacy(MotorCortex);

const colorPalette = {
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

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

function _assertThisInitialized(self) {
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

  if (name[0] === '@') ;

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

    if (sheet && sheet.attached) ;

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
      _this.id = generateId(_assertThisInitialized(_assertThisInitialized(_this)), sheet);
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

  _createClass(StyleRule, [{
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
   * Replace rule, run plugins.
   */
  ;

  _proto.replaceRule = function replaceRule(name, style, options) {
    var newRule = this.rules.replace(name, style, options);
    if (newRule) this.options.jss.plugins.onProcessRule(newRule);
    return newRule;
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
   * Replace rule.
   * Create a new rule and remove old one instead of overwriting
   * because we want to invoke onCreateRule hook to make plugins work.
   */
  ;

  _proto.replace = function replace(name, decl, ruleOptions) {
    var oldRule = this.get(name);
    var oldIndex = this.index.indexOf(oldRule);

    if (oldRule) {
      this.remove(oldRule);
    }

    var options = ruleOptions;
    if (oldIndex !== -1) options = _extends({}, ruleOptions, {
      index: oldIndex
    });
    return this.add(name, decl, options);
  }
  /**
   * Get a rule by name or selector.
   */
  ;

  _proto.get = function get(nameOrSelector) {
    return this.map[nameOrSelector];
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
      this.updateOne(this.get(name), data, options);
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
   * Replace a rule in the current stylesheet.
   */
  ;

  _proto.replaceRule = function replaceRule(nameOrSelector, decl, options) {
    var oldRule = this.rules.get(nameOrSelector);
    if (!oldRule) return this.addRule(nameOrSelector, decl, options);
    var newRule = this.rules.replace(nameOrSelector, decl, options);

    if (newRule) {
      this.options.jss.plugins.onProcessRule(newRule);
    }

    if (this.attached) {
      if (!this.deployed) return newRule; // Don't replace / delete rule directly if there is no stringified version yet.
      // It will be inserted all together when .attach is called.

      if (this.renderer) {
        if (!newRule) {
          this.renderer.deleteRule(oldRule);
        } else if (oldRule.renderable) {
          this.renderer.replaceRule(oldRule.renderable, newRule);
        }
      }

      return newRule;
    } // We can't replace rules to a detached style node.
    // We will redeploy the sheet once user will attach it.


    this.deployed = false;
    return newRule;
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
   * Get a rule by name or selector.
   */
  ;

  _proto.getRule = function getRule(nameOrSelector) {
    return this.rules.get(nameOrSelector);
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

  _createClass(SheetsRegistry, [{
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
    if (parentNode) parentNode.insertBefore(style, insertionPointElement.nextSibling);
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
      this.cssRules.splice(index, 0, cssRule);
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
    this.version = "10.9.0";
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


var index$5 = createJss();
var jss = index$5;

function buildCSS$4(barChart) {
  const createGenerateId = () => rule => rule.key;

  jss.setup({
    createGenerateId
  });
  const styles = {
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
    "title-container": {
      "font-family": barChart.fontFamily,
      background: "transparent",
      width: "70%",
      height: "fit-content",
      "min-height": "5%",
      "max-height": "7%",
      top: "7%",
      left: "16%",
      position: "absolute",
      display: "flex",
      "z-index": "1",
      "justify-content": "space-around"
    },
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
  barChart.data.map((datum, i) => {
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
  const styleSheet = jss.createStyleSheet(styles).toString();
  return styleSheet;
}

/**
 * BAR CHART SIMPLE GRAPH: MotorCortex Implementation
 */

class BarChartSimple extends MotorCortex.HTMLClip {
  // Building HTML tree for incident
  get html() {
    this.buildVars(); // Title modal html generation

    const title = [];

    for (const i in this.title) {
      const letter = this.title[i] === " " ? "<div class=\"space-char letter-wrapper\">-</div>" : "<div class=\"fontColorOn letter-wrapper\">".concat(this.title[i], "</div>");
      title.push("<div id=\"letter-".concat(i, "\" class=\"letter-container\">").concat(letter, "</div>"));
    } // Subtitle modal html generation


    const subtitle = [];

    for (const i in this.subtitle) {
      const letter = this.subtitle[i] === " " ? "<div class=\"space-char letter-wrapper\">-</div>" : "<div className=\"fontColorOn letter-wrapper\">".concat(this.subtitle[i], "</div>");
      subtitle.push("<div id=\"letter-".concat(i, "\" class=\"letter-container\">").concat(letter, "</div>"));
    } // Gridlines conditional html generation


    const gridLines = [];

    for (let i = 0; i < this.gridLinesNum; i++) {
      gridLines.push("<div class=\"gridLine\" id=\"gridLine".concat(i, "\"></div>"));
    } // X-axis labels html generation with data parameter as reference


    const xLabels = [];
    const bars = [];

    for (const i in this.data) {
      const datum = this.data[i];

      if (datum.name.length > 4) {
        datum.name = datum.name.slice(0, 4);
        this.data[i] = datum;
      }

      xLabels.push("<div class=\"label-container\" id=\"label-".concat(i, "\">").concat(this.data[i].name, "</div>")); //  Bars html generation with data parameter as reference

      if (this.maxPoint < datum.value) {
        this.maxPoint = datum.value;
      }

      bars.push("<div class=\"".concat(datum.name, "-bar-").concat(i, "\">\n          <div\n            class=\"bar-fill\"\n            style=\"background:").concat(datum.color ? datum.color : this.primaryC, "\"\n            id=\"").concat(datum.name, "-bar-fill\"\n          ></div>\n        </div>"));
    }

    this.maxPoint = this.attrs.data.maxValue ? this.attrs.data.maxValue : this.maxPoint; // MAIN HTML TREE

    return "<div class=\"container-barChart\">\n        <div class=\"title-container\">\n          <div class=\"title-wrapper\">".concat(title.join(""), "</div>\n          <div class=\"subtitle-position-end\">\n            <div class=\"subtitle-wrapper\">").concat(subtitle.join(""), "</div>\n          </div>\n          <div class=\"title-back-wrapper\">\n            <div class=\"title-back-animHelper\">\n              <div class=\"title-background block-background\"></div>\n            </div>\n          </div>\n        </div>\n        <div class=\"graph-container\">\n          <div class=\"graph\">").concat(bars.join(""), "</div>\n          <div class=\"gridlines\">").concat(gridLines.join(""), "</div>\n        </div>\n        <div class=\"y-axis\"></div>\n        <div class=\"x-axis\"></div>\n        <div class=\"x-labels-container\">").concat(xLabels.join(""), "</div>\n        <div class=\"x-labels-back-wrapper\">\n          <div class=\"x-labels-background block-background\"></div>\n        </div>\n      </div>");
  } // Build CSS rules for incident


  get css() {
    return buildCSS$4(this);
  } // Font API call (only google fonts API supported)


  get fonts() {
    return [{
      type: "google-font",
      src: "".concat(this.url)
    }];
  } // MotorCortex Animation generation and


  buildTree() {
    opacityControl(this, ".container-barChart"); // INTRO CONTROL

    if (this.attrs.timings.intro) {
      const textAnimDur = this.introDur * 0.75;
      const introGroup = new MotorCortex.Group(); // Axis Intro Control

      const axisCombo = new MotorCortex.Combo({
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

      const gridLinesAnim = new MotorCortex.CSSEffect({
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

      const titlesAnim = new MotorCortex.Group();
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

      const titleDur = this.introDur * 0.7;
      const titleLetterDur = titleDur * 2 / (this.title.length + 1);
      const titleIncidents = [];

      for (const i in this.title) {
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

      const titleCombo = new MotorCortex.Combo({
        incidents: titleIncidents
      }, {
        selector: ".title-wrapper"
      });
      titlesAnim.addIncident(titleCombo, Math.trunc(this.introDur * 0.25)); // Subtitle Intro: letter animation control

      const subtitleDur = this.introDur * 0.8;
      const subLetterDur = subtitleDur * 2 / (this.subtitle.length + 1);
      const subIncidents = [];

      for (const i in this.subtitle) {
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
            selector: "#letter-".concat(i),
            duration: Math.trunc(subLetterDur),
            easing: "easeOutQuart"
          },
          position: Math.trunc(subLetterDur * i / 2)
        });
      }

      const subtitleCombo = new MotorCortex.Combo({
        incidents: subIncidents
      }, {
        selector: ".subtitle-wrapper"
      });
      titlesAnim.addIncident(subtitleCombo, Math.trunc(this.introDur * 0.1));
      introGroup.addIncident(titlesAnim, Math.trunc(this.introDur * 0.05)); // Labels (xAxis) Intro Control

      const xLabelsAnim = new MotorCortex.Group();
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

      const labelDur = textAnimDur * 2 / (this.data.length + 1);

      for (const i in this.data) {
        const labelLength = this.data[i].name.length;
        const letterDur = labelDur * 2 / (labelLength + 1);
        const incidents = [];

        for (const z in this.data[i].name) {
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
              selector: "#letter-".concat(i, "-").concat(z),
              duration: Math.trunc(letterDur),
              easing: "easeOutQuart"
            },
            position: Math.trunc(letterDur * z / 2)
          });
        }

        const datumCombo = new MotorCortex.Combo({
          incidents: incidents
        }, {
          selector: ".label-container"
        });
        xLabelsAnim.addIncident(datumCombo, Math.trunc(textAnimDur / (this.data.length + 1) * i));
      }

      introGroup.addIncident(xLabelsAnim, Math.trunc(this.introDur * 0.05)); // Bar Intro Control

      const barAnimation = new MotorCortex.Combo({
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
      const textAnimDur = this.outroDur * 0.75;
      const outroGroup = new MotorCortex.Group(); // Axis Outro Control

      const axisCombooutro = new MotorCortex.Combo({
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

      const gridLinesoutro = new MotorCortex.CSSEffect({
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

      const titlesoutro = new MotorCortex.Group();
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

      const titleDur = this.outroDur * 0.8;
      const letterDur = titleDur * 2 / (this.title.length + 1);
      const titleIncidents = [];

      for (const i in this.title) {
        titleIncidents.push({
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
            selector: "#letter-".concat(i),
            duration: Math.trunc(letterDur),
            easing: "easeOutQuart"
          },
          position: Math.trunc(letterDur * (this.title.length - i - 1) / 2)
        });
      }

      const titleCombo = new MotorCortex.Combo({
        incidents: titleIncidents
      }, {
        selector: ".title-wrapper"
      });
      titlesoutro.addIncident(titleCombo, Math.trunc(this.outroDur * 0.1)); // Subtitle Outro: letter animation control

      const subtitleDur = this.outroDur * 0.4;
      const subLetterDur = subtitleDur * 2 / (this.subtitle.length + 1);
      const subIncidents = [];

      for (const i in this.subtitle) {
        subIncidents.push({
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
            selector: "#letter-".concat(i),
            duration: Math.trunc(subLetterDur),
            easing: "easeOutQuart"
          },
          position: Math.trunc(subLetterDur * (this.subtitle.length - i - 1) / 2)
        });
      }

      const subtitleCombo = new MotorCortex.Combo({
        incidents: subIncidents
      }, {
        selector: ".subtitle-wrapper"
      });
      titlesoutro.addIncident(subtitleCombo, Math.trunc(this.outroDur * 0));
      outroGroup.addIncident(titlesoutro, Math.trunc(this.outroDur * 0.05)); // Labels (xAxis) Outro Control

      const xLabelsoutro = new MotorCortex.Group();
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

      const labelDur = textAnimDur * 2 / (this.data.length + 1);

      for (const i in this.data) {
        const labelLength = this.data[i].name.length;
        const letterDur = labelDur * 2 / (labelLength + 1);
        const incidents = [];

        for (const z in this.data[i].name) {
          incidents.push({
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
              selector: "#letter-".concat(i, "-").concat(z),
              duration: Math.trunc(letterDur),
              easing: "easeInQuart"
            },
            position: Math.trunc(letterDur * z / 2)
          });
        }

        const datumCombo = new MotorCortex.Combo({
          incidents: incidents
        }, {
          selector: ".label-container"
        });
        xLabelsoutro.addIncident(datumCombo, Math.trunc(textAnimDur / (this.data.length + 1) * i));
      }

      outroGroup.addIncident(xLabelsoutro, Math.trunc(this.outroDur * 0.05)); // Bar outro Control

      const barIncidents = [];

      for (const i in this.data) {
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
            selector: "#".concat(this.data[i].name, "-bar-fill")
          },
          position: Math.trunc(subLetterDur * (this.data.length - i - 1) / 2)
        });
      }

      const barAnimationoutro = new MotorCortex.Combo({
        incidents: barIncidents
      }, {
        selector: ".graph"
      });
      outroGroup.addIncident(barAnimationoutro, this.outroDur * 0);
      this.addIncident(outroGroup, 0 + this.introDur + this.staticDur);
    } // STATIC DURATION CONTROL


    const staticIncident = new MotorCortex.CSSEffect({
      animatedAttrs: {}
    }, {
      selector: ".container-barChart",
      duration: this.staticDur
    });
    this.addIncident(staticIncident, this.introDur);
  }

  buildVars() {
    var _this$attrs$timings$s;

    this.data = this.attrs.data.data;
    this.title = this.attrs.data.title;
    this.subtitle = this.attrs.data.subtitle;
    this.maxPoint = 0;
    this.gridLinesNum = this.attrs.data.showGrid ? 11 : 0;
    this.attrs.palette = this.attrs.palette || {};
    this.primaryC = this.attrs.palette.primary || colorPalette.gray;
    this.secondaryC = this.attrs.palette.secondary || colorPalette.lightGray;
    this.tertiaryC = this.attrs.palette.tertiary || colorPalette.darkGray;
    this.fontC = this.attrs.palette.font || colorPalette.font;
    this.accentC = this.attrs.palette.accent || colorPalette.accent;
    this.backgroundC = this.attrs.palette.background || colorPalette.background;
    this.attrs.font = this.attrs.font || {};
    this.fontFamily = this.attrs.font.fontFamily || "'Staatliches', cursive";
    this.fontSize = this.attrs.font.size || "1.7rem";
    this.url = this.attrs.font.url || "https://fonts.googleapis.com/css2?family=Staatliches&display=swap";
    this.attrs.timings = this.attrs.timings || {};
    this.introDur = this.attrs.timings.intro || 0;
    this.outroDur = this.attrs.timings.outro || 0;
    this.staticDur = (_this$attrs$timings$s = this.attrs.timings.static) !== null && _this$attrs$timings$s !== void 0 ? _this$attrs$timings$s : 1000;
  }

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

class Counter$2 extends MotorCortex__default["default"].Effect {
  /**
   * the very first MonoIncident of the specific element and the
   * specific attribute that will ever enter a Clip will be asked
   * to provide the initial (the scratch) value of its animatedAttr
   * for its element.
   **/
  getScratchValue() {
    return 0;
  }
  /**
   * The moment the Effect gets applied as MonoIncident to the specific
   * element and for the specific animatedAttr.
   * You can use this method to initialise anything you need to initialise
   * in order to use it on the onProgress method
   **/


  onGetContext() {
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


  onProgress(millisecond) {
    let currentVal = this.initialValue + (this.targetValue - this.initialValue) * this.getFraction(millisecond);

    if (this.attrs.decimals) {
      currentVal = currentVal.toFixed(this.attrs.decimals);
    } else {
      currentVal = Math.trunc(currentVal);
    }

    this.element.innerHTML = currentVal;
  }

}

var name$4 = "@donkeyclip/motorcortex-counter";
var version$4 = "2.1.1";
var index$4 = {
  npm_name: name$4,
  // don't touch this
  version: version$4,
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

function buildCSS$3(cssArgs) {
  const createGenerateId = () => {
    return rule => rule.key;
  };

  jss.setup({
    createGenerateId
  });
  const styles = {
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
  const avg = cssArgs.barSum / cssArgs.barCount;
  cssArgs.data.forEach((elem, index) => {
    styles["row-".concat(index)] = {
      bottom: "".concat(50 + (avg - index) * 100 / cssArgs.barCount - 60 / cssArgs.barCount * 2.15, "%")
    };
    styles["inner-bar-".concat(index)] = {
      width: "".concat(elem.value.toFixed(2), "%")
    };
  });
  const styleSheet = jss.createStyleSheet(styles).toString();
  return styleSheet;
}

const Counter$1 = MotorCortex.loadPlugin(index$4);
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

class ProgressBar extends MotorCortex.HTMLClip {
  get html() {
    const list = this.attrs.data.map((elem, index) => {
      var _this$attrs$options;

      return "<div class=\"row row-".concat(index, "\">\n          <div class=\"bar-header\">").concat(elem.name, "</div>\n          <div class=\"container-bar container-bar-").concat(index, "\">\n            <div\n              class=\"inner-bar inner-bar-").concat(index, " ").concat(elem.value < this.criticalValue ? "extra-trunced-" + index : "", "\"\n            ></div>\n          </div>\n          <div class=\"text indicator-").concat(index, "\">").concat(elem.value, "</div>\n          <div class=\"text text-unit\">\n            ").concat(!((_this$attrs$options = this.attrs.options) !== null && _this$attrs$options !== void 0 && _this$attrs$options.hidePercentage) ? "%" : "", "\n          </div>\n        </div>");
    });
    return "<div class=\"container-progressBar\">".concat(list.join(""), "</div>");
  }

  get css() {
    const cssArgs = {
      barSum: this.barSum,
      barCount: this.barCount,
      data: this.attrs.data,
      palette: this.attrs.palette ? this.attrs.palette : {},
      font: this.attrs.font ? this.attrs.font : {},
      options: this.attrs.options ? this.attrs.options : {}
    };
    return buildCSS$3(cssArgs);
  }

  get fonts() {
    var _this$attrs$font;

    return [{
      type: "google-font",
      src: ((_this$attrs$font = this.attrs.font) === null || _this$attrs$font === void 0 ? void 0 : _this$attrs$font.url) || "https://fonts.googleapis.com/css2?family=Staatliches&display=swap"
    }];
  }

  buildTree() {
    var _this$attrs$timings$s, _this$attrs$timings;

    this.static = (_this$attrs$timings$s = this.attrs.timings.static) !== null && _this$attrs$timings$s !== void 0 ? _this$attrs$timings$s : 1000;
    this.intro = this.attrs.timings.intro || 0;
    this.outro = this.attrs.timings.outro || 0;
    const avg = this.barSum / this.barCount;
    fadeOutOpacityControl(this, ".container-progressBar");

    if ((_this$attrs$timings = this.attrs.timings) !== null && _this$attrs$timings !== void 0 && _this$attrs$timings.intro) {
      const slideInDuration = Math.floor(this.intro * 0.33);
      const expandBaseDuration = Math.floor(this.intro * 0.25);
      const expandBarDuration = Math.floor(this.intro * 0.33);

      for (let i = 0; i < this.barCount; i++) {
        const slideIn = new MotorCortex.CSSEffect({
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
        const expand_base = new MotorCortex.CSSEffect({
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
        const expand_bar = new MotorCortex.CSSEffect({
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
        const indicatorCounter = new Counter$1.Counter({
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

      const expand_text = new MotorCortex.CSSEffect({
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

    const staticGraph = new MotorCortex.CSSEffect({
      animatedAttrs: {}
    }, {
      duration: this.static,
      selector: ".container-progressBar"
    });
    this.addIncident(staticGraph, this.intro);

    if (this.outro) {
      const bufferTime = this.intro + this.static + this.outro;
      const slideInDuration = Math.floor(this.outro * 0.33);
      const expandBaseDuration = Math.floor(this.outro * 0.25);
      const expandBarDuration = Math.floor(this.outro * 0.33);

      for (let i = 0; i < this.barCount; i++) {
        const slideIn = new MotorCortex.CSSEffect({
          animatedAttrs: {
            bottom: "-".concat(65 / this.barCount, "%"),
            opacity: 0
          },
          initialValues: {
            bottom: "".concat(50 + (avg - i) * 100 / this.barCount - 60 / this.barCount * 2.15, "%"),
            opacity: 1
          }
        }, {
          duration: slideInDuration,
          selector: ".row-".concat(i),
          easing: "easeInOutQuad"
        });
        const expand_base = new MotorCortex.CSSEffect({
          animatedAttrs: {
            width: "0.2%"
          },
          initialValues: {
            width: "60%"
          }
        }, {
          duration: expandBaseDuration,
          selector: ".container-bar-".concat(i),
          easing: "easeInOutQuad"
        });
        const expand_bar = new MotorCortex.CSSEffect({
          animatedAttrs: {
            width: "0%"
          },
          initialValues: {
            width: "".concat(this.attrs.data[i].value.toFixed(2), "%")
          }
        }, {
          duration: expandBarDuration,
          selector: ".inner-bar-".concat(i),
          easing: "easeInOutQuad"
        });
        const indicatorCounter = new Counter$1.Counter({
          animatedAttrs: {
            count: 0
          },
          initialValues: {
            count: this.attrs.data[i].value
          }
        }, {
          easing: "easeInOutQuad",
          selector: ".indicator-".concat(i),
          duration: expandBarDuration
        });
        this.addIncident(slideIn, bufferTime - slideInDuration);
        this.addIncident(expand_base, bufferTime - slideInDuration - expandBaseDuration);
        this.addIncident(expand_bar, bufferTime - slideInDuration - expandBaseDuration - expandBarDuration);
        this.addIncident(indicatorCounter, bufferTime - slideInDuration - expandBaseDuration - expandBarDuration);
      }

      const expand_text = new MotorCortex.CSSEffect({
        animatedAttrs: {
          left: "0%",
          opacity: 0
        },
        initialValues: {
          left: "62%",
          opacity: 1
        }
      }, {
        duration: expandBarDuration,
        selector: ".text",
        easing: "easeInOutQuad"
      });
      this.addIncident(expand_text, bufferTime - slideInDuration - expandBaseDuration * 1.1);
    }
  }

  get barSum() {
    let sum = 0;

    for (let i = 1; i <= this.barCount; i++) {
      sum += i;
    }

    return sum;
  }

  get barCount() {
    return this.attrs.data.length;
  }

  get criticalValue() {
    const barCount = this.barCount / 10;

    if (barCount === 1) {
      return barCount * 10;
    } else if (barCount > 1) {
      return (barCount - 1) * 10;
    } else {
      return (barCount + 1) * 10;
    }
  }

}

/*
 * anime.js v3.1.5
 * (c) 2021 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */

/*
 * anime.js v3.1.2
 * (c) 2020 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */
// Defaults

var defaultInstanceSettings = {};
var defaultTweenSettings = {
  duration: 1000,
  round: 0
};
var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective']; // Caching

var cache = {
  CSS: {}
}; // Utils

function minMax(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

var is = {
  arr: function (a) {
    return Array.isArray(a);
  },
  obj: function (a) {
    return stringContains(Object.prototype.toString.call(a), 'Object');
  },
  pth: function (a) {
    return is.obj(a) && a.hasOwnProperty('totalLength');
  },
  svg: function (a) {
    return a instanceof SVGElement;
  },
  inp: function (a) {
    return a instanceof HTMLInputElement;
  },
  dom: function (a) {
    return a.nodeType || is.svg(a);
  },
  str: function (a) {
    return typeof a === 'string';
  },
  fnc: function (a) {
    return typeof a === 'function';
  },
  und: function (a) {
    return typeof a === 'undefined';
  },
  hex: function (a) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
  },
  rgb: function (a) {
    return /^rgb/.test(a);
  },
  hsl: function (a) {
    return /^hsl/.test(a);
  },
  col: function (a) {
    return is.hex(a) || is.rgb(a) || is.hsl(a);
  },
  key: function (a) {
    return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes';
  }
};

var penner = function () {
  // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)
  var eases = {
    linear: function () {
      return function (t) {
        return t;
      };
    }
  };
  return eases;
}(); // Strings


function selectString(str) {
  try {
    var nodes = document.querySelectorAll(str);
    return nodes;
  } catch (e) {
    return;
  }
} // Arrays


function filterArray(arr, callback) {
  var len = arr.length;
  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  var result = [];

  for (var i = 0; i < len; i++) {
    if (i in arr) {
      var val = arr[i];

      if (callback.call(thisArg, val, i, arr)) {
        result.push(val);
      }
    }
  }

  return result;
}

function flattenArray(arr) {
  return arr.reduce(function (a, b) {
    return a.concat(is.arr(b) ? flattenArray(b) : b);
  }, []);
}

function toArray(o) {
  if (is.arr(o)) {
    return o;
  }

  if (is.str(o)) {
    o = selectString(o) || o;
  }

  if (o instanceof NodeList || o instanceof HTMLCollection) {
    return [].slice.call(o);
  }

  return [o];
}

function arrayContains(arr, val) {
  return arr.some(function (a) {
    return a === val;
  });
} // Objects


function cloneObject(o) {
  var clone = {};

  for (var p in o) {
    clone[p] = o[p];
  }

  return clone;
}

function replaceObjectProps(o1, o2) {
  var o = cloneObject(o1);

  for (var p in o1) {
    o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p];
  }

  return o;
}

function mergeObjects(o1, o2) {
  var o = cloneObject(o1);

  for (var p in o2) {
    o[p] = is.und(o1[p]) ? o2[p] : o1[p];
  }

  return o;
} // Colors


function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? "rgba(" + rgb[1] + ",1)" : rgbValue;
}

function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return "rgba(" + r + "," + g + "," + b + ",1)";
}

function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h = parseInt(hsl[1], 10) / 360;
  var s = parseInt(hsl[2], 10) / 100;
  var l = parseInt(hsl[3], 10) / 100;
  var a = hsl[4] || 1;

  function hue2rgb(p, q, t) {
    if (t < 0) {
      t += 1;
    }

    if (t > 1) {
      t -= 1;
    }

    if (t < 1 / 6) {
      return p + (q - p) * 6 * t;
    }

    if (t < 1 / 2) {
      return q;
    }

    if (t < 2 / 3) {
      return p + (q - p) * (2 / 3 - t) * 6;
    }

    return p;
  }

  var r, g, b;

  if (s == 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return "rgba(" + r * 255 + "," + g * 255 + "," + b * 255 + "," + a + ")";
}

function colorToRgb(val) {
  if (is.rgb(val)) {
    return rgbToRgba(val);
  }

  if (is.hex(val)) {
    return hexToRgba(val);
  }

  if (is.hsl(val)) {
    return hslToRgba(val);
  }
} // Units


function getUnit(val) {
  var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);

  if (split) {
    return split[1];
  }
}

function getTransformUnit(propName) {
  if (stringContains(propName, 'translate') || propName === 'perspective') {
    return 'px';
  }

  if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) {
    return 'deg';
  }
} // Values


function getFunctionValue(val, animatable) {
  if (!is.fnc(val)) {
    return val;
  }

  return val(animatable.target, animatable.id, animatable.total);
}

function getAttribute(el, prop) {
  return el.getAttribute(prop);
}

function convertPxToUnit(el, value, unit) {
  var valueUnit = getUnit(value);

  if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) {
    return value;
  }

  var cached = cache.CSS[value + unit];

  if (!is.und(cached)) {
    return cached;
  }

  var baseline = 100;
  var tempEl = document.createElement(el.tagName);
  var parentEl = el.parentNode && el.parentNode !== document ? el.parentNode : document.body;
  parentEl.appendChild(tempEl);
  tempEl.style.position = 'absolute';
  tempEl.style.width = baseline + unit;
  var factor = baseline / tempEl.offsetWidth;
  parentEl.removeChild(tempEl);
  var convertedUnit = factor * parseFloat(value);
  cache.CSS[value + unit] = convertedUnit;
  return convertedUnit;
}

function getCSSValue(el, prop, unit) {
  if (prop in el.style) {
    var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
}

function getAnimationType(el, prop) {
  if (is.dom(el) && !is.inp(el) && (getAttribute(el, prop) || is.svg(el) && el[prop])) {
    return 'attribute';
  }

  if (is.dom(el) && arrayContains(validTransforms, prop)) {
    return 'transform';
  }

  if (is.dom(el) && prop !== 'transform' && getCSSValue(el, prop)) {
    return 'css';
  }

  if (el[prop] != null) {
    return 'object';
  }
}

function getElementTransforms(el) {
  if (!is.dom(el)) {
    return;
  }

  var str = el.style.transform || '';
  var reg = /(\w+)\(([^)]*)\)/g;
  var transforms = new Map();
  var m;

  while (m = reg.exec(str)) {
    transforms.set(m[1], m[2]);
  }

  return transforms;
}

function getTransformValue(el, propName, animatable, unit) {
  var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
  var value = getElementTransforms(el).get(propName) || defaultVal;

  if (animatable) {
    animatable.transforms.list.set(propName, value);
    animatable.transforms['last'] = propName;
  }

  return unit ? convertPxToUnit(el, value, unit) : value;
}

function getOriginalTargetValue(target, propName, unit, animatable) {
  switch (getAnimationType(target, propName)) {
    case 'transform':
      return getTransformValue(target, propName, animatable, unit);

    case 'css':
      return getCSSValue(target, propName, unit);

    case 'attribute':
      return getAttribute(target, propName);

    default:
      return target[propName] || 0;
  }
}

function getRelativeValue(to, from) {
  var operator = /^(\*=|\+=|-=)/.exec(to);

  if (!operator) {
    return to;
  }

  var u = getUnit(to) || 0;
  var x = parseFloat(from);
  var y = parseFloat(to.replace(operator[0], ''));

  switch (operator[0][0]) {
    case '+':
      return x + y + u;

    case '-':
      return x - y + u;

    case '*':
      return x * y + u;
  }
}

function validateValue(val, unit) {
  if (is.col(val)) {
    return colorToRgb(val);
  }

  if (/\s/g.test(val)) {
    return val;
  }

  var originalUnit = getUnit(val);
  var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;

  if (unit) {
    return unitLess + unit;
  }

  return unitLess;
} // Decompose value


function decomposeValue(val, unit) {
  // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
  // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation

  var value = validateValue(is.pth(val) ? val.totalLength : val, unit) + '';
  return {
    original: value,
    numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
    strings: is.str(val) || unit ? value.split(rgx) : []
  };
} // Animatables


function parseTargets(targets) {
  var targetsArray = targets ? flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets)) : [];
  return filterArray(targetsArray, function (item, pos, self) {
    return self.indexOf(item) === pos;
  });
}

function getAnimatables(targets) {
  var parsed = parseTargets(targets);
  return parsed.map(function (t, i) {
    return {
      target: t,
      id: i,
      total: parsed.length,
      transforms: {
        list: getElementTransforms(t)
      }
    };
  });
} // Properties


function normalizePropertyTweens(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings);

  if (is.arr(prop)) {
    var l = prop.length;
    var isFromTo = l === 2 && !is.obj(prop[0]);

    if (!isFromTo) {
      // Duration divided by the number of tweens
      if (!is.fnc(tweenSettings.duration)) {
        settings.duration = tweenSettings.duration / l;
      }
    } else {
      // Transform [from, to] values shorthand to a valid tween value
      prop = {
        value: prop
      };
    }
  }

  var propArray = is.arr(prop) ? prop : [prop];
  return propArray.map(function (v, i) {
    var obj = is.obj(v) && !is.pth(v) ? v : {
      value: v
    };
    return obj;
  }).map(function (k) {
    return mergeObjects(k, settings);
  });
}

function getProperties(tweenSettings, params) {
  var properties = [];

  for (var p in params) {
    if (is.key(p)) {
      properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
      });
    }
  }

  return properties;
} // Tweens


function normalizeTweenValues(tween, animatable) {
  var t = {};

  for (var p in tween) {
    var value = getFunctionValue(tween[p], animatable);

    if (is.arr(value)) {
      value = value.map(function (v) {
        return getFunctionValue(v, animatable);
      });

      if (value.length === 1) {
        value = value[0];
      }
    }

    t[p] = value;
  }

  t.duration = parseFloat(t.duration);
  return t;
}

function normalizeTweens(prop, animatable) {
  var previousTween;
  return prop.tweens.map(function (t) {
    var tween = normalizeTweenValues(t, animatable);
    var tweenValue = tween.value;
    var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
    var toUnit = getUnit(to);
    var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
    var previousValue = previousTween ? previousTween.to.original : originalValue;
    var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
    var fromUnit = getUnit(from) || getUnit(originalValue);
    var unit = toUnit || fromUnit;

    if (is.und(to)) {
      to = previousValue;
    }

    tween.from = decomposeValue(from, unit);
    tween.to = decomposeValue(getRelativeValue(to, from), unit);
    tween.start = previousTween ? previousTween.end : 0;
    tween.end = tween.start + tween.duration;
    tween.isPath = false;
    tween.isColor = is.col(tween.from.original);

    if (tween.isColor) {
      tween.round = 1;
    }

    previousTween = tween;
    return tween;
  });
} // Tween progress


var setProgressValue = {
  css: function (t, p, v) {
    return t.style[p] = v;
  },
  attribute: function (t, p, v) {
    return t.setAttribute(p, v);
  },
  object: function (t, p, v) {
    return t[p] = v;
  },
  transform: function (t, p, v, transforms, manual) {
    transforms.list.set(p, v);

    if (p === transforms.last || manual) {
      var str = '';
      transforms.list.forEach(function (value, prop) {
        str += prop + "(" + value + ") ";
      });
      t.style.transform = str;
    }
  }
}; // Set Value helper

function setTargetsValue(targets, properties) {
  var animatables = getAnimatables(targets);
  animatables.forEach(function (animatable) {
    for (var property in properties) {
      var value = getFunctionValue(properties[property], animatable);
      var target = animatable.target;
      var valueUnit = getUnit(value);
      var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
      var unit = valueUnit || getUnit(originalValue);
      var to = getRelativeValue(validateValue(value, unit), originalValue);
      var animType = getAnimationType(target, property);
      setProgressValue[animType](target, property, to, animatable.transforms, true);
    }
  });
} // Animations


function createAnimation(animatable, prop) {
  var animType = getAnimationType(animatable.target, prop.name);

  if (animType) {
    var tweens = normalizeTweens(prop, animatable);
    var lastTween = tweens[tweens.length - 1];
    return {
      type: animType,
      property: prop.name,
      animatable: animatable,
      tweens: tweens,
      duration: lastTween.end
    };
  }
}

function getAnimations(animatables, properties) {
  return filterArray(flattenArray(animatables.map(function (animatable) {
    return properties.map(function (prop) {
      return createAnimation(animatable, prop);
    });
  })), function (a) {
    return !is.und(a);
  });
} // Create Instance


function getInstanceTimings(animations, tweenSettings) {
  var animLength = animations.length;
  var timings = {};
  timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) {
    return anim.duration;
  })) : tweenSettings.duration;
  return timings;
}

var instanceID = 0;

function createNewInstance(params) {
  var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
  var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
  var properties = getProperties(tweenSettings, params);
  var animatables = getAnimatables(params.targets);
  var animations = getAnimations(animatables, properties);
  var timings = getInstanceTimings(animations, tweenSettings);
  var id = instanceID;
  instanceID++;
  return mergeObjects(instanceSettings, {
    id: id,
    children: [],
    animatables: animatables,
    animations: animations,
    duration: timings.duration
  });
} // Public Instance


function anime(params) {
  if (params === void 0) {
    params = {};
  }

  var children,
      childrenLength = 0;
  var resolve = null;

  function makePromise(instance) {
    var promise = window.Promise && new Promise(function (_resolve) {
      return resolve = _resolve;
    });
    instance.finished = promise;
    return promise;
  }

  var instance = createNewInstance(params);
  makePromise(instance);

  function seekChild(time, child) {
    if (child) {
      child.seek(time);
    }
  }

  function syncInstanceChildren(time) {
    if (!instance.reversePlayback) {
      for (var i = 0; i < childrenLength; i++) {
        seekChild(time, children[i]);
      }
    } else {
      for (var i$1 = childrenLength; i$1--;) {
        seekChild(time, children[i$1]);
      }
    }
  }

  function setAnimationsProgress(insTime) {
    var i = 0;
    var animations = instance.animations;
    var animationsLength = animations.length;

    while (i < animationsLength) {
      var anim = animations[i];
      var animatable = anim.animatable;
      var tweens = anim.tweens;
      var tweenLength = tweens.length - 1;
      var tween = tweens[tweenLength]; // Only check for keyframes if there is more than one tween

      if (tweenLength) {
        tween = filterArray(tweens, function (t) {
          return insTime < t.end;
        })[0] || tween;
      }

      var elapsed = minMax(insTime - tween.start, 0, tween.duration) / tween.duration;
      var strings = tween.to.strings;
      var round = tween.round;
      var numbers = [];
      var toNumbersLength = tween.to.numbers.length;
      var progress = void 0;

      for (var n = 0; n < toNumbersLength; n++) {
        var value = void 0;
        var toNumber = tween.to.numbers[n];
        var fromNumber = tween.from.numbers[n] || 0;
        value = fromNumber + elapsed * (toNumber - fromNumber);

        if (round) {
          if (!(tween.isColor && n > 2)) {
            value = Math.round(value * round) / round;
          }
        }

        numbers.push(value);
      } // Manual Array.reduce for better performances


      var stringsLength = strings.length;

      if (!stringsLength) {
        progress = numbers[0];
      } else {
        progress = strings[0];

        for (var s = 0; s < stringsLength; s++) {
          strings[s];
          var b = strings[s + 1];
          var n$1 = numbers[s];

          if (!isNaN(n$1)) {
            if (!b) {
              progress += n$1 + ' ';
            } else {
              progress += n$1 + b;
            }
          }
        }
      }

      setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
      anim.currentValue = progress;
      i++;
    }
  }

  function setInstanceProgress(engineTime) {
    var insDuration = instance.duration;
    var insTime = engineTime;
    instance.progress = minMax(insTime / insDuration * 100, 0, 100);
    instance.reversePlayback = insTime < instance.currentTime;

    if (children) {
      syncInstanceChildren(insTime);
    }

    if (!instance.began && instance.currentTime > 0) {
      instance.began = true;
    }

    setAnimationsProgress(insTime);
    instance.currentTime = minMax(insTime, 0, insDuration);

    if (engineTime >= insDuration) {
      instance.paused = true;

      if (!instance.completed) {
        instance.completed = true;

        if (!instance.passThrough && 'Promise' in window) {
          resolve();
          makePromise(instance);
        }
      }
    }
  }

  instance.reset = function () {
    instance.passThrough = false;
    instance.currentTime = 0;
    instance.progress = 0;
    instance.paused = true;
    instance.began = false;
    instance.completed = false;
    instance.reversePlayback = false;
    children = instance.children;
    childrenLength = children.length;

    for (var i = childrenLength; i--;) {
      instance.children[i].reset();
    }
  }; // Set Value helper


  instance.set = function (targets, properties) {
    setTargetsValue(targets, properties);
    return instance;
  };

  instance.seek = function (time) {
    setInstanceProgress(time);
  };

  instance.reset();
  return instance;
} // getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
// adapted from https://gist.github.com/SebLambla/3e0550c496c236709744


function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function getCircleLength(el) {
  return Math.PI * 2 * getAttribute(el, 'r');
}

function getRectLength(el) {
  return getAttribute(el, 'width') * 2 + getAttribute(el, 'height') * 2;
}

function getLineLength(el) {
  return getDistance({
    x: getAttribute(el, 'x1'),
    y: getAttribute(el, 'y1')
  }, {
    x: getAttribute(el, 'x2'),
    y: getAttribute(el, 'y2')
  });
}

function getPolylineLength(el) {
  var points = el.points;
  var totalLength = 0;
  var previousPos;

  for (var i = 0; i < points.numberOfItems; i++) {
    var currentPos = points.getItem(i);

    if (i > 0) {
      totalLength += getDistance(previousPos, currentPos);
    }

    previousPos = currentPos;
  }

  return totalLength;
}

function getPolygonLength(el) {
  var points = el.points;
  return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
} // Path animation


function getTotalLength(el) {
  if (el.getTotalLength) {
    return el.getTotalLength();
  }

  switch (el.tagName.toLowerCase()) {
    case 'circle':
      return getCircleLength(el);

    case 'rect':
      return getRectLength(el);

    case 'line':
      return getLineLength(el);

    case 'polyline':
      return getPolylineLength(el);

    case 'polygon':
      return getPolygonLength(el);
  }
} // Motion path


function getParentSvgEl(el) {
  var parentEl = el.parentNode;

  while (is.svg(parentEl)) {
    if (!is.svg(parentEl.parentNode)) {
      break;
    }

    parentEl = parentEl.parentNode;
  }

  return parentEl;
}

function getParentSvg(pathEl, svgData) {
  var svg = svgData || {};
  var parentSvgEl = svg.el || getParentSvgEl(pathEl);
  var rect = parentSvgEl.getBoundingClientRect();
  var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
  var width = rect.width;
  var height = rect.height;
  var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [0, 0, width, height]);
  return {
    el: parentSvgEl,
    viewBox: viewBox,
    x: viewBox[0] / 1,
    y: viewBox[1] / 1,
    w: width,
    h: height,
    vW: viewBox[2],
    vH: viewBox[3]
  };
}

function getPath(path) {
  return {
    el: path,
    svg: getParentSvg(path),
    totalLength: getTotalLength(path),
    deltaCorrections: {
      x: 4,
      y: 5
    }
  };
}

function getPathProgress(path, progress, isPathTargetInsideSVG) {
  function point(offset) {
    if (offset === void 0) offset = 0;

    var _progress = progress * path.totalLength;

    var l = _progress + offset >= 1 ? _progress + offset : 0;
    return path.el.getPointAtLength(l);
  }

  var svg = getParentSvg(path.el, path.svg);
  var p = point();
  var p0 = point(-1);
  var p1 = point(+1);
  var scaleX = 1; //isPathTargetInsideSVG ? 1 : svg.w / svg.vW;

  var scaleY = 1; //isPathTargetInsideSVG ? 1 : svg.h / svg.vH;

  return {
    x: (p.x - svg.x) * scaleX,
    y: (p.y - svg.y) * scaleY,
    angle: Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI
  };
}

anime.version = '3.1.0';
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.penner = penner;
anime.path = getPath;
anime.getPathProgress = getPathProgress;
var anime_es = anime;

class Anime extends MotorCortex.ExtendableCSSEffect {
  onGetContext() {
    const options = {};

    if (Object.prototype.hasOwnProperty.call(this.compoAttributes, this.attributeKey)) {
      const compoAttribute = this.compoAttributes[this.attributeKey];

      for (let i = 0; i < compoAttribute.length; i++) {
        if (!Object.prototype.hasOwnProperty.call(this.targetValue, compoAttribute[i])) {
          continue;
        }

        options[compoAttribute[i]] = [this.initialValue[compoAttribute[i]], this.targetValue[compoAttribute[i]]];
      }
    } else {
      options[this.attributeKey] = [this.initialValue, this.targetValue];
    }

    this.target = anime_es({
      autoplay: false,
      duration: this.props.duration,
      easing: "linear",
      targets: this.element,
      ...((this.attrs || {}).attrs || {}),
      ...options
    }); // handle first render initial values
  }
  /**
   * @param {number} f
   */


  onProgress(m) {
    return this.target.seek(this.target.duration * this.getFraction(m));
  }

}
/**
 * Takes as attributes:
 * {
 *  animatedAttrs: {
 *      positionOn: {
 *          pathElement: "selector of the path element"
 *      }
 *  }
 * }
 }
**/


class MotionPath extends MotorCortex.Effect {
  onGetContext() {
    this.pixelsAccuracy = this.attrs.pixelsAccuracy || 4;
    this.calculatedPoints = [];
    const svgEl = this.context.getElements(this.targetValue.pathElement)[0];
    this.path = anime_es.path(svgEl);
    this.isPathTargetInsideSVG = this.element instanceof SVGElement;
  }

  onProgress(m) {
    let toSet;
    const distance = Math.round(this.path.totalLength / this.pixelsAccuracy * this.getFraction(m)) * this.pixelsAccuracy;

    if (this.calculatedPoints[distance] != null) {
      toSet = this.calculatedPoints[distance];
    } else {
      const position = anime_es.getPathProgress(this.path, distance / this.path.totalLength, this.isPathTargetInsideSVG);
      toSet = "\n            translateX(".concat(position.x, "px)\n            translateY(").concat(position.y, "px)\n            rotate(").concat(position.angle, "deg)\n        ");
      this.calculatedPoints[distance] = toSet;
    }

    this.element.style.transform = toSet;
  }

}

var name$3 = "@donkeyclip/motorcortex-anime";
var version$3 = "3.1.1";
var index$3 = {
  npm_name: name$3,
  version: version$3,
  CSSEffect: Anime,
  incidents: [{
    exportable: MotionPath,
    name: "MotionPath",
    attributesValidationRules: {
      animatedAttrs: {
        type: "object",
        props: {
          positionOn: {
            type: "object",
            props: {
              pathElement: {
                type: "string"
              }
            }
          }
        }
      }
    }
  }]
};

const numberPartRegexp = /^[+-]?(\d+([.]\d*)?|[.]\d+)/gi;
var helpers = {
  extractUnitsNums: givenString => {
    const widthNumberPart = givenString.match(numberPartRegexp)[0];
    const widthUnitPart = givenString.substring(widthNumberPart.length);

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
  const createGenerateId = () => {
    return rule => rule.key;
  };

  jss.setup({
    createGenerateId
  });
  const styles = {
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
  return jss.createStyleSheet(styles).toString();
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

const svgPresets = {
  battery: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="48px" height="48px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>',
  backup: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="48px" height="48px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>',
  checkMark: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="48px" height="48px"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>',
  synch: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="48px" height="48px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></svg>',
  folder: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="48px" height="48px"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>'
};

MotorCortex.setCSSCore(index$3.CSSEffect);
const Counter = MotorCortex.loadPlugin(index$4);
/**
 * BAR CHART SIMPLE GRAPH: MotorCortex Implementation
 */

class ProgressMeter extends MotorCortex.HTMLClip {
  // Building HTML tree for incident
  get html() {
    this.buildVars(); // Building Inner SVG

    let innerImage = null;

    if (this.innerSVG) {
      const initialSVG = svgPresets[this.innerSVG] || this.innerSVG;
      const gradientControl = this.innerFill.rotate ? {
        x1: this.innerFill.revert ? 1 : 0,
        x2: this.innerFill.revert ? 0 : 1,
        y1: 0,
        y2: 0
      } : {
        x1: 0,
        x2: 0,
        y1: this.innerFill.revert ? 0 : 1,
        y2: this.innerFill.revert ? 1 : 0
      };
      const classPos = initialSVG.indexOf("<svg ") + 5;
      const customPathClass = "class=\"svg-preset\" fill=\"url(#gradientFilter)\"";
      let svgPath = [initialSVG.slice(0, classPos), customPathClass, initialSVG.slice(classPos)].join("");
      const gradientPos = svgPath.indexOf(">") + 1;
      const gradient = "<linearGradient\n          class=\"gradient-filter\"\n          id=\"gradientFilter\"\n          x1=\"".concat(gradientControl.x1, "\"\n          x2=\"").concat(gradientControl.x2, "\"\n          y1=\"").concat(gradientControl.y1, "\"\n          y2=\"").concat(gradientControl.y2, "\"\n        >\n          <stop offset=0 stop-opacity=\"1\" stop-color=\"").concat(this.accentC, "\"/>\n          <stop\n            offset=").concat(this.data.value, "\n            stop-opacity=\"1\"\n            class=\"gradient-stop\"\n            stop-color=\"").concat(this.accentC, "\"\n          />\n          <stop\n            offset=").concat(this.data.value, "\n            stop-opacity=\"0.3\"\n            class=\"gradient-stop\"\n            stop-color=\"").concat(this.accentC, "\"\n          />\n          <stop\n            offset=1\n            stop-opacity=\"0.3\"\n            class=\"gradient-back-bottom\"\n            stop-color=\"").concat(this.accentC, "\"\n          />\n          <stop\n            offset=1\n            stop-opacity=\"0.0\"\n            class=\"gradient-back-bottom\"\n            stop-color=\"").concat(this.accentC, "\"\n          />\n          <stop\n            offset=1\n            stop-opacity=\"0.0\"\n            class=\"gradient-back-top\"\n            stop-color=\"").concat(this.accentC, "\"\n          />\n        </linearGradient>");
      svgPath = [svgPath.slice(0, gradientPos), gradient, svgPath.slice(gradientPos)].join("");
      innerImage = "<div class=\"inner-svg-container\">\n          <div class=\"path-container\">".concat(svgPath, "</div>\n        </div>");
    } // Bulding SVG for meter circle


    const svgViewBox = "<div class=\"svg-container\">\n        <svg\n          class=\"svg-viewbox\"\n          viewbox=\"0 0 ".concat(this.boxSize, " ").concat(this.boxSize, "\"\n        >\n          <circle\n            class=\"meter-track meter-general\"\n            cx=\"").concat(this.boxSize * 0.5, "\"\n            cy=\"").concat(this.boxSize * 0.5, "\"\n            r= ").concat(this.boxSize * 0.46, "\n            pathLength=\"").concat(this.pathLength, "\"\n          ></circle>\n          <circle\n            class=\"meter-path meter-general\"\n            cx=\"").concat(this.boxSize * 0.5, "\"\n            cy=\"").concat(this.boxSize * 0.5, "\"\n            pathLength=\"").concat(this.pathLength, "\"\n          ></circle>\n        </svg>\n        ").concat(innerImage, "\n      </div>"); // Building Meter Indicator

    const indicatorClass = this.innerSVG == null ? "indicator-center" : "indicator-label";
    const indicator = "<div class=\"indicator-general ".concat(indicatorClass, "\">\n        <div class=\"indicator-value indicator-inner\">").concat(this.data.value, "</div>\n        <div class=\"indicator-unit indicator-inner\">").concat(this.data.unit, "</div>\n      </div>"); // Complete HTML tree construction

    return "<div class=\"container-progressMeter\">\n        ".concat(svgViewBox, "\n        ").concat(indicator, "\n      </div>");
  } // Build CSS rules for incident


  get css() {
    return buildCSS$2(this);
  } // Font API call (only google fonts API supported)


  get fonts() {
    return [{
      type: "google-font",
      src: "".concat(this.url)
    }];
  } // MotorCortex Animation generation and


  buildTree() {
    opacityControl(this, ".container-progressMeter"); // INTRO CONTROL

    if (this.attrs.timings.intro) {
      const introGroup = new MotorCortex.Group();
      const pathAnimsDur = this.introDur * 0.7;
      const trackAnimsDur = pathAnimsDur; // Circle Track Intro Animation

      const circleTrackAnim = new MotorCortex.CSSEffect({
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

      const circlePathAnim = new MotorCortex.CSSEffect({
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

      const circleTrackFadeIn = new MotorCortex.CSSEffect({
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

      const circlePathFadeIn = new MotorCortex.CSSEffect({
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

      const indicatorFade = new MotorCortex.CSSEffect({
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

      const indicatorCounter = new Counter.Counter({
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
        const gradientBackFillBottom = new MotorCortex.CSSEffect({
          animatedAttrs: {
            offset: 1
          },
          initialValues: {
            offset: 0
          }
        }, {
          selector: ".gradient-back-bottom",
          easing: "easeInOutCubic",
          duration: Math.trunc(trackAnimsDur)
        });
        introGroup.addIncident(gradientBackFillBottom, 0); // Gradient Background Fill-Up Intro Animation

        const gradientFill = new MotorCortex.CSSEffect({
          animatedAttrs: {
            offset: this.data.value
          },
          initialValues: {
            offset: 0
          }
        }, {
          selector: ".gradient-stop",
          easing: "easeInOutCubic",
          duration: Math.trunc(pathAnimsDur)
        });
        introGroup.addIncident(gradientFill, Math.trunc(this.introDur * 0.3));
        const svgOpacity = new MotorCortex.CSSEffect({
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
      const outroGroup = new MotorCortex.Group();
      const pathAnimsDur = this.outroDur * 0.7;
      const trackAnimsDur = pathAnimsDur; // Circle Track OUtro Animation

      const circleTrackAnim = new MotorCortex.CSSEffect({
        animatedAttrs: {
          "stroke-dashoffset": this.pathLength
        },
        initialValues: {
          "stroke-dashoffset": 0
        }
      }, {
        duration: Math.trunc(trackAnimsDur),
        easing: "easeInOutCubic",
        selector: ".meter-track"
      });
      outroGroup.addIncident(circleTrackAnim, Math.trunc(this.outroDur * 0.3)); // Circle Path Outro Animation

      const circlePathAnim = new MotorCortex.CSSEffect({
        animatedAttrs: {
          "stroke-dashoffset": this.pathLength
        },
        initialValues: {
          "stroke-dashoffset": this.pathLength - this.pathLength * this.data.value / 100
        }
      }, {
        duration: Math.trunc(pathAnimsDur),
        easing: "easeInOutCubic",
        selector: ".meter-path"
      });
      outroGroup.addIncident(circlePathAnim, 0); // Circle Track Animation Fade Out Effect

      const circleTrackFadeIn = new MotorCortex.CSSEffect({
        animatedAttrs: {
          "stroke-width": 0
        },
        initialValues: {
          "stroke-width": this.boxSize * 0.05
        }
      }, {
        selector: ".meter-track",
        easing: "easeInQuart",
        duration: Math.trunc(trackAnimsDur * 0.1)
      });
      outroGroup.addIncident(circleTrackFadeIn, Math.trunc(this.outroDur - trackAnimsDur * 0.1)); // Circle Path Animation Fade Out Effect

      const circlePathFadeIn = new MotorCortex.CSSEffect({
        animatedAttrs: {
          "stroke-width": 0
        },
        initialValues: {
          "stroke-width": this.boxSize * 0.05
        }
      }, {
        selector: ".meter-path",
        easing: "easeInQuart",
        duration: Math.trunc(trackAnimsDur * 0.1)
      });
      outroGroup.addIncident(circlePathFadeIn, Math.trunc(this.outroDur * 0.7 - trackAnimsDur * 0.1)); // Indicator Fade Out Animation

      const indicatorFade = new MotorCortex.CSSEffect({
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
      outroGroup.addIncident(indicatorFade, Math.trunc(this.outroDur * 0.55)); // Indicator Counter Outtro Animation

      const indicatorCounter = new Counter.Counter({
        animatedAttrs: {
          count: 0
        }
      }, {
        selector: ".indicator-value",
        easing: "easeInOutCubic",
        duration: Math.trunc(pathAnimsDur)
      });
      outroGroup.addIncident(indicatorCounter, 0);

      if (this.innerSVG) {
        // Gradient Background Empty-Out Intro Animation4
        const gradientBackFillBottom = new MotorCortex.CSSEffect({
          animatedAttrs: {
            offset: 0
          },
          initialValues: {
            offset: 1
          }
        }, {
          selector: ".gradient-back-bottom",
          easing: "easeInOutCubic",
          duration: Math.trunc(trackAnimsDur)
        });
        outroGroup.addIncident(gradientBackFillBottom, Math.trunc(this.outroDur * 0.3)); // Gradient Background Fill-Up Intro Animation

        const gradientFill = new MotorCortex.CSSEffect({
          animatedAttrs: {
            offset: 0
          },
          initialValues: {
            offset: this.data.value
          }
        }, {
          selector: ".gradient-stop",
          easing: "easeInOutCubic",
          duration: Math.trunc(pathAnimsDur)
        });
        outroGroup.addIncident(gradientFill, 0);
        const svgOpacity = new MotorCortex.CSSEffect({
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
        outroGroup.addIncident(svgOpacity, Math.trunc(this.outroDur * 0.75));
      }

      this.addIncident(outroGroup, 0 + this.introDur + this.staticDur);
    } // STATIC DURATION CONTROL


    const staticIncident = new MotorCortex.CSSEffect({
      animatedAttrs: {}
    }, {
      selector: ".container-progressMeter",
      duration: this.staticDur
    });
    this.addIncident(staticIncident, this.introDur);
  }

  buildVars() {
    var _this$attrs$timings$s;

    this.data = this.attrs.data;
    this.innerSVG = this.attrs.innerImage || null;
    this.innerFill = this.data.innerFill || {
      revert: false,
      rotate: false
    };
    this.originalDims = config.progressMeter.originalDims;
    this.heightDimension = helpers.extractUnitsNums(this.props.containerParams.height).number;
    this.widthDimension = helpers.extractUnitsNums(this.props.containerParams.width).number;
    this.boxSize = this.widthDimension < this.heightDimension ? this.widthDimension * 0.65 : this.heightDimension * 0.65;
    this.pathLength = 10000;
    this.attrs.palette = this.attrs.palette || {};
    this.fontC = this.attrs.palette.font || colorPalette.font;
    this.accentC = this.attrs.palette.accent || colorPalette.accent;
    this.backgroundC = this.attrs.palette.background || colorPalette.background;
    this.attrs.font = this.attrs.font || {};
    this.fontFamily = this.attrs.font.fontFamily || "'Staatliches', cursive";
    this.fontSize = this.attrs.font.size || "1.7rem";
    this.url = this.attrs.font.url || "https://fonts.googleapis.com/css2?family=Staatliches&display=swap";
    this.attrs.timings = this.attrs.timings || {};
    this.introDur = this.attrs.timings.intro || 0;
    this.outroDur = this.attrs.timings.outro || 0;
    this.staticDur = (_this$attrs$timings$s = this.attrs.timings.static) !== null && _this$attrs$timings$s !== void 0 ? _this$attrs$timings$s : 1000;
  }

}

function buildCSS$1(lineGraph) {
  const createGenerateId = () => {
    return rule => rule.key;
  };

  jss.setup({
    createGenerateId
  });
  const styles = {
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
      "flex-wrap": lineGraph.attrs.legendWrrap ? "wrap" : "nowrap",
      "align-items": "center",
      "z-index": "1",
      padding: "0 10px"
    },
    "line-wrapper": {
      // width: `${lineGraph.dataSetsNum === 1 ? 100 : 50}%`,
      height: "".concat(1 / (lineGraph.legendHeightFactor + (lineGraph.legendHeightFactor % 1 ? 1 : 0)) * 100, "%"),
      display: "flex",
      overflow: "hidden",
      "flex-grow": 1
    },
    "color-wrapper": {
      display: "flex",
      "align-items": "center",
      "justify-content": "center",
      width: "100%",
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

  for (let l = 0; l < lineGraph.dataSetsNum; l++) {
    let dynamicColor;

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

    for (let i = 0; i < lineGraph.data.length; i++) {
      const targetTop = lineGraph.findPointY(i, l) - lineGraph.linesHeight * 0.083;
      let fullWidth = 10 / 2 * lineGraph.data.length > 10 ? 10 : 10 / 2 * lineGraph.data.length;
      fullWidth = fullWidth < 6 ? 6 : fullWidth;
      const targetLeft = lineGraph.findPointX(i) - fullWidth * lineGraph.linesWidth / 100 * 0.5;
      styles["label-".concat(l, "-").concat(lineGraph.data[i].name)] = {
        background: dynamicColor,
        top: "".concat(targetTop, "px"),
        left: "".concat(targetLeft, "px")
      };
      const pointLeftOffset = fullWidth * lineGraph.linesWidth / 100 * 0.5 - config.lineGraph.originalDims.width * 0.01 / 2;
      const pointTopOffset = 0.07 * lineGraph.linesHeight;
      styles["hoverPoint-".concat(l, "-").concat(lineGraph.data[i].name)] = {
        top: "".concat(targetTop + pointTopOffset, "px"),
        left: "".concat(targetLeft + pointLeftOffset, "px")
      };
    }
  }

  let styleSheet = jss.createStyleSheet(styles).toString();

  for (let l = 0; l < lineGraph.dataSetsNum; l++) {
    for (let i = 0; i < lineGraph.data.length; i++) {
      styleSheet += "\n                .hoverPoint-".concat(l, "-").concat(lineGraph.data[i].name, ":hover + .label-").concat(l, "-").concat(lineGraph.data[i].name, " {\n                    display: block;\n                }\n            ");
    }
  }

  return styleSheet;
}

class Draw extends MotorCortex.Effect {
  getScratchValue() {
    this.pathLength = Math.ceil(this.element.getTotalLength());
    this.element.style.strokeDasharray = "".concat(this.pathLength, " ").concat(this.pathLength);
    this.element.style.strokeDashoffset = this.pathLength;
    return 0;
  }

  onGetContext() {
    this.pathLength = Math.ceil(this.element.getTotalLength());
  }

  onProgress(millisecond) {
    const cover = (this.targetValue - this.initialValue) * this.getFraction(millisecond) + this.initialValue;
    this.element.style.strokeDashoffset = Math.ceil(this.pathLength * (1 - cover));
  }

}

var name$2 = "@donkeyclip/motorcortex-svgdraw";
var version$2 = "1.2.0";
var index$2 = {
  npm_name: name$2,
  version: version$2,
  incidents: [{
    exportable: Draw,
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

function getMatrix2D(element) {
  const win = window;
  const transform = win.getComputedStyle(element).transform;

  if (transform === "" || transform === "none") {
    return {
      rotate: "0deg",
      scaleX: 1,
      scaleY: 1,
      skewX: "0deg",
      skewY: "0deg",
      translateX: "0px",
      translateY: "0px"
    };
  }

  const values = transform.split("(")[1].split(")")[0].split(",");

  const qrDecompone = function qrDecompone(a) {
    const angle = Math.atan2(a[1], a[0]),
          denom = Math.pow(a[0], 2) + Math.pow(a[1], 2),
          denom2 = Math.pow(a[2], 2) + Math.pow(a[3], 2),
          scaleX = Math.sqrt(denom),
          scaleY = (a[0] * a[3] - a[2] * a[1]) / scaleX,
          skewX = Math.atan2(a[0] * a[2] + a[1] * a[3], denom),
          skewY = Math.atan2(a[1] * a[3] + a[0] * a[2], denom2);
    return {
      rotate: angle / (Math.PI / 180) + "deg",
      // this is rotation angle in degrees
      scaleX: scaleX,
      // scaleX factor
      scaleY: scaleY,
      // scaleY factor
      skewX: (denom === 1 ? skewX / (Math.PI / 180) : 0) + "deg",
      // skewX angle degrees
      skewY: (denom2 === 1 ? skewY / (Math.PI / 180) : 0) + "deg",
      // skewY angle degrees
      translateX: a[4] + "px",
      // translation point  x
      translateY: a[5] + "px" // translation point  y

    };
  };

  return qrDecompone(values);
}

class Adaptor {
  constructor(el) {
    this.el = el;
    this.matrix = this.getMatrix(el);
    this.viewportCenter = this.getViewPortCenter();
    this.idlePosition = this.getIdlePosition();
  }

  getMatrix(el) {
    return getMatrix2D(el);
  }

  getViewPortCenter() {
    const el = this.el;
    const parentNode = el.parentNode;
    const viewportDims = {
      width: parseFloat(getComputedStyle(parentNode, null).width.replace("px", "")),
      height: parseFloat(getComputedStyle(parentNode, null).height.replace("px", ""))
    };
    return {
      x: viewportDims.width / 2,
      y: viewportDims.height / 2
    };
  }
  /**
   * Returns the position of the element on its parent on its initial state,
   * with translateX and translateY = 0. We consider this position as the
   * idle position of the element on its parent.
   */


  getIdlePosition() {
    const el = this.el; // bounding rect: {top, right, bottom, left}

    const elBoundingRect = el.getBoundingClientRect();
    const parentBoundingRect = el.parentNode.getBoundingClientRect(); // the absolute position of our element on its parent

    return {
      x: elBoundingRect.left - parentBoundingRect.left,
      y: elBoundingRect.top - parentBoundingRect.top
    };
  }
  /**
   *
   * @param {HTMLElement} el
   * @returns {object} x, y, zoom, initialTransofrm{x,y}
   */


  calcXYZoom() {
    const matrix = this.matrix;
    const position = this.idlePosition;
    const viewportCenter = this.viewportCenter;
    const currentOneToOneCenter = {
      x: viewportCenter.x - position.x,
      y: viewportCenter.y - position.y
    }; // the current X,Y of our element

    const currentCenter = {
      x: currentOneToOneCenter.x / matrix.scaleX,
      y: currentOneToOneCenter.y / matrix.scaleY
    };
    return { ...currentCenter,
      zoom: matrix.scaleX
    };
  }
  /**
   * @param {object} params - {start{x,y,zoom}, target{x,y.zoom}}
   */


  createProgressFunction(params) {
    const start = this._xyzoomToTranslate(params.start);

    const target = this._xyzoomToTranslate(params.target); // first we need to calculate the angle and the distance that we are going to use for our calculations


    const theta = Math.atan(Math.abs(target.y - start.y) / Math.abs(target.x - start.x));
    const lineLength = Math.sqrt(Math.pow(target.y - start.y, 2) + Math.pow(target.x - start.x, 2)); // secondly we need to identify the multipliers that we are going to use to calculate for our x and y
    // depending on the relative position of our target compared to our start

    let _x = 1,
        _y = 1;
    if (target.x < start.x) _x = -1;
    if (target.y < start.y) _y = -1;
    return function progress(fraction) {
      const distanceOnLine = fraction * lineLength;
      return {
        translateX: _x * distanceOnLine * Math.cos(theta) + start.x,
        translateY: _y * distanceOnLine * Math.sin(theta) + start.y,
        scale: (target.scale - start.scale) * fraction + start.scale
      };
    };
  }

  _xyzoomToTranslate(vals) {
    // the target point from the top-left corner of the element, having applied the target zoom
    const targetCenter = {
      x: vals.zoom * vals.x,
      y: vals.zoom * vals.y
    };
    const move = {
      x: this.viewportCenter.x - targetCenter.x,
      y: this.viewportCenter.y - targetCenter.y
    };
    return {
      x: move.x - this.idlePosition.x,
      y: move.y - this.idlePosition.y,
      scale: vals.zoom
    };
  }
  /**
     * 
     * @param {object} data - {
            path,
            startPoint,
            finalPoint,
            pathLength,
            zoom,
            startFrom,
            endTo,
            transitionDuration,
            alongPathDuration
        }
     */


  createPathProgressFunction(data, initialValue) {
    let transitionProgress = progress => {};

    if (data.transitionDuration > 0) {
      transitionProgress = this.createProgressFunction({
        start: initialValue,
        target: {
          x: data.startPoint.x,
          y: data.startPoint.y,
          zoom: initialValue.zoom
        }
      });
    }

    const transitionFraction = data.transitionDuration / (data.transitionDuration + data.alongPathDuration);
    const alongPathFraction = data.alongPathDuration / (data.transitionDuration + data.alongPathDuration); // the actual length of the path to move on having taken out the startFrom and endTo parts

    const fractionPathLength = (data.endTo - data.startFrom) * data.pathLength;
    return progress => {
      if (data.transitionDuration > 0 && progress < transitionFraction) {
        return transitionProgress(progress / transitionFraction);
      } // the fraction from 0 to 1 of the second part calculated strictly out of the durations


      const secondPartProgress = (progress - transitionFraction) / alongPathFraction; // calculate the scale of the point

      const scale = (data.zoom - initialValue.zoom) * secondPartProgress + initialValue.zoom; // the distance that we expect to have covered on the full path

      const distanceFromZero = secondPartProgress * fractionPathLength + data.startFrom * data.pathLength;
      const point = data.path.getPointAtLength(distanceFromZero); // x, y -> that's where we want to be

      const res = this._xyzoomToTranslate({
        x: point.x,
        y: point.y,
        zoom: scale
      });

      return {
        translateX: res.x,
        translateY: res.y,
        scale: res.scale
      };
    };
  }

}
/**
 * Thus, here you'll find:
 * the following properties:
 * - this.element: provides a reference to the specific element of the MonoIncident
 * - this.attributeKey: the key of the animatedAttr of the MonoIncident
 * - this.targetValue: the final value of the animatedAttr
 * and the following methods:
 * - onGetContext
 * - getScratchValue
 * - onProgress
 * which are analysed more inline
 *
 **/


class MyEffect extends MotorCortex__default["default"].Effect {
  /**
   * the scratch value of the Incident should return back the triplette
   * x, y, zoom
   * We consider as the viewport the parent node of our element and we calculate
   * its initial position taking in consideration the relative position of our
   * element into its parent node. The initial zoom is calculated out of the
   * scaleX value of our element
   **/
  getScratchValue() {
    this.adaptor = new Adaptor(this.element);
    return this.adaptor.calcXYZoom();
  }

  onGetContext() {
    this.adaptor = new Adaptor(this.element);
    this.progressMethod = this.adaptor.createProgressFunction({
      start: this.initialValue,
      target: this.targetValue
    });
  }

  onProgress(m) {
    const vals = this.progressMethod(this.getFraction(m));
    this.element.style.transform = "translateX(".concat(vals.translateX, "px) translateY(").concat(vals.translateY, "px) scaleX(").concat(vals.scale, ") scaleY(").concat(vals.scale, ")");
  }

}

const xmlns = "http://www.w3.org/2000/svg";
/**
 * The attrs that this Incident expect are almost identical with its "brother's"
 * ZoomTo:
 * {
 *  animatedAttrs:{
 *      position: {
 *          path,
 *          zoom
 *      }
 *  },
 *  transition: 0,
 *  from: 0,
 *  to: 1
 * }
 *
 * path must be a valid svg path that will be put on the "d" attribute of the path element
 * that will be created out of it and which will be used as our guide for the
 * move.
 * A difference between this Incident and the simple ZoomTo Incident is that
 * ZoomTo optionally takes initial values, meaning that it will just move from
 * where the camera is to the target value. FocusAlongPath will start from the
 * first point of the provided path, no matter where the camera was. This might
 * introduce an anwanted jump effect.
 * The "transition" attribute, provided outside the animatedAttrs allows us to optionally
 * define a transition duration from the current point to the start of the path. This is
 * by default 0. Keep in mind that the duration of the transition will be substracted from
 * the move along path. For example if the user provides props.duration = 2000 and
 * attrs.transition = 100, then the move along the path will only last 1900 milliseconds
 * and the total duration of the Incident will still be 2000. Zoom remains tha same during
 * the transition and only starts animating when the movement enters the path.
 * The "from" and "to" attributes (also outside the animatedAttrs) allows the developer
 * to define if they want the movement to start from a specific portion (0 to 1) of the
 * path or to end on a specific portion of it (again 0 to 1). These two attributes are
 * optional too with default values from:0 and to:1.
 */

class FollowPath extends MyEffect {
  onInitialise() {
    const duration = this.props.duration;
    const path = document.createElementNS(xmlns, "path");
    path.setAttributeNS(null, "d", this.targetValue.path); // create a data repository that will hold useful info of our Incident

    this.data = {
      path,
      finalPoint: null,
      startPoint: null,
      zoom: this.targetValue.zoom,
      pathLength: path.getTotalLength(),
      startFrom: !this.attrs.from ? 0 : this.attrs.from,
      endTo: !this.attrs.to ? 1 : this.attrs.to,
      transitionDuration: !this.attrs.transition ? 0 : this.attrs.transition,

      get alongPathDuration() {
        return duration - this.transitionDuration;
      }

    };
    this.data.finalPoint = path.getPointAtLength(this.data.endTo * this.data.pathLength);
    this.data.startPoint = path.getPointAtLength(this.data.startFrom * this.data.pathLength); // then set the final values of the Incident in terms of x, y, zoom so the
    // following Incidents can use it

    this.targetValue.x = this.data.finalPoint.x;
    this.targetValue.y = this.data.finalPoint.y;
  }

  onGetContext() {
    this.adaptor = new Adaptor(this.element);
    this.data.zoom = this.targetValue.zoom;
    this.progressMethod = this.adaptor.createPathProgressFunction(this.data, this.initialValue);
  }

}

var name$1 = "@donkeyclip/motorcortex-2dcam";
var version$1 = "0.3.0";
var index$1 = {
  npm_name: name$1,
  version: version$1,
  incidents: [{
    exportable: MyEffect,
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
                optional: true,
                min: 0
              },
              y: {
                type: "number",
                optional: true,
                min: 0
              },
              zoom: {
                type: "number",
                optional: true,
                min: 0
              }
            }
          }
        }
      }
    }
  }, {
    exportable: FollowPath,
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
                optional: false
              },
              zoom: {
                type: "number",
                optional: true,
                min: 0
              }
            }
          }
        }
      },
      transition: {
        type: "number",
        integer: true,
        min: 0,
        optional: true
      },
      from: {
        type: "number",
        min: 0,
        max: 1,
        optional: true
      },
      to: {
        type: "number",
        min: 0,
        max: 1,
        optional: true
      }
    }
  }],
  compositeAttributes: {
    position: ["x", "y", "zoom", "path"]
  }
};

const SVGD = MotorCortex.loadPlugin(index$2);
const TDCAM = MotorCortex.loadPlugin(index$1);
class AnimationConstructor {
  constructor(instance) {
    this.instance = instance;
  }

  buildStaticControl() {
    return new MotorCortex.CSSEffect({
      animatedAttrs: {}
    }, {
      selector: ".container-lineGraph",
      duration: this.instance.staticDur
    });
  }

  buildBackgroundIntro() {
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

  buildBackgroundOutro() {
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

  buildTitleIntroCombo() {
    const titleDur = this.instance.introDur * 0.13;
    const titleIncidents = [];

    for (const i in this.instance.words) {
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

    return new MotorCortex.Combo({
      incidents: titleIncidents
    }, {
      selector: ".title-wrapper-lineGraph"
    });
  }

  buildTitleOutroCombo() {
    const titleDur = this.instance.outroDur * 0.13;
    const titleIncidents = [];

    for (const i in this.instance.words) {
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

    return new MotorCortex.Combo({
      incidents: titleIncidents
    }, {
      selector: ".title-wrapper-lineGraph"
    });
  }

  buildIntroLegend() {
    const colorsDur = this.instance.introDur * 0.25;
    const colorDur = colorsDur / this.instance.dataSetsNum;
    const delay = this.instance.dataSetsNum === 1 ? null : "@stagger(0, ".concat(colorsDur - colorDur, ")");
    const legendIncidents = [{
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
          opacity: 1
        },
        initialValues: {
          opacity: 0
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
          opacity: 1
        },
        initialValues: {
          opacity: 0
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
    return new MotorCortex.Combo({
      incidents: legendIncidents
    }, {
      selector: ".legend-wrapper"
    });
  }

  buildOutroLegend() {
    const colorsDur = this.instance.outroDur * 0.25;
    const colorDur = colorsDur / this.instance.dataSetsNum;
    const delay = this.instance.dataSetsNum === 1 ? null : "@stagger(0, ".concat(colorsDur - colorDur, ", 0, linear, linear, true)");
    const legendIncidents = [{
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
          opacity: 1
        },
        initialValues: {
          opacity: 0
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
          opacity: 1
        },
        initialValues: {
          opacity: 0
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
    return new MotorCortex.Combo({
      incidents: legendIncidents
    }, {
      selector: ".legend-wrapper"
    });
  }

  buildIntroLabels() {
    const xLabelsAnim = new MotorCortex.Group(); // Label Background intro animation

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

    const textAnimDur = this.instance.introDur * 0.2;
    const labelDur = textAnimDur * 3 / (this.instance.data.length + 2);

    for (const i in this.instance.data) {
      let remainingDur = labelDur / 2;
      const incidents = [];

      for (const z in this.instance.data[i].name) {
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

      const datumCombo = new MotorCortex.Combo({
        incidents: incidents
      }, {
        selector: ".label-container"
      });
      xLabelsAnim.addIncident(datumCombo, Math.trunc(this.instance.introDur * 0.14 + textAnimDur / (this.instance.data.length + 1) * (this.instance.data.length - i - 1)));
    }

    return xLabelsAnim;
  }

  buildOutroLabels() {
    const xLabelsAnim = new MotorCortex.Group();
    const labelsDur = this.instance.outroDur * 0.55; // Label Background outro animation

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

    const textAnimDur = this.instance.outroDur * 0.2;
    const labelDur = textAnimDur * 3 / (this.instance.data.length + 2);

    for (const i in this.instance.data) {
      let remainingDur = labelDur / 2;
      const incidents = [];

      for (const z in this.instance.data[i].name) {
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

      const datumCombo = new MotorCortex.Combo({
        incidents: incidents
      }, {
        selector: ".label-container"
      });
      xLabelsAnim.addIncident(datumCombo, Math.trunc(textAnimDur * i / (this.instance.data.length + 1)));
    }

    return xLabelsAnim;
  }

  buildIntroStele() {
    const stelesIntro = new MotorCortex.Group();
    const stelesFullDur = this.instance.introDur * 0.3;
    const steleOverlapIndex = 5;
    const blockOverlapIndex = 3;
    const steleDur = stelesFullDur * steleOverlapIndex / (this.instance.data.length + 1);
    const steleDelay = steleDur / steleOverlapIndex;
    const blockDur = steleDur * blockOverlapIndex / (this.instance.steleBlockNum + 1);

    if (this.instance.grid === "steles") {
      for (const i in this.instance.data) {
        const steleGroup = new MotorCortex.Group({
          selector: "#stele-".concat(i)
        });
        const blockCombo = new MotorCortex.Combo({
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
      const steleGroup = new MotorCortex.Group({
        selector: "#stele-".concat(0)
      });
      const blockCombo = new MotorCortex.Combo({
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
      steleGroup.addIncident(blockCombo, 0);
      stelesIntro.addIncident(steleGroup, Math.trunc(steleDelay));
    }

    return stelesIntro;
  }

  buildOutroStele() {
    const stelesOutro = new MotorCortex.Group();
    const stelesFullDur = this.instance.outroDur * 0.3;
    const steleOverlapIndex = 5;
    const blockOverlapIndex = 3;
    const steleDur = stelesFullDur * steleOverlapIndex / (this.instance.data.length + 1);
    const steleDelay = steleDur / steleOverlapIndex;
    const blockDur = steleDur * blockOverlapIndex / (this.instance.steleBlockNum + 1);

    if (this.instance.grid === "steles") {
      for (const i in this.instance.data) {
        const steleGroup = new MotorCortex.Group({
          selector: "#stele-".concat(i)
        });
        const blockCombo = new MotorCortex.Combo({
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
      const steleGroup = new MotorCortex.Group({
        selector: "#stele-".concat(0)
      });
      const blockCombo = new MotorCortex.Combo({
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
      steleGroup.addIncident(blockCombo, 0);
      stelesOutro.addIncident(steleGroup, (this.instance.data.length - 1) * steleDelay);
    }

    return stelesOutro;
  }

  buildIntroGraph(targetGroup) {
    const segmentDur = this.instance.introDur / this.instance.data.length;
    const pointDur = segmentDur * 0.35;
    const pathDur = segmentDur * 0.8;
    const pathAnimGroup = new MotorCortex.Group();
    const pointAnimGroup = new MotorCortex.Group();

    for (let l = 0; l < this.instance.dataSetsNum; l++) {
      for (let i = 0; i < this.instance.data.length; i++) {
        // Path Intro Animation
        if (i !== this.instance.data.length - 1) {
          const pathAnimation = new SVGD.Draw({
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


        const pointAnimation = new MotorCortex.CSSEffect({
          animatedAttrs: {
            opacity: 1,
            r: "".concat(this.instance.r, "%")
          },
          initialValues: {
            opacity: 0,
            r: "0"
          }
        }, {
          selector: "#point-".concat(l, "-").concat(i),
          duration: Math.trunc(pointDur),
          easing: "easeInQuart"
        });
        pointAnimGroup.addIncident(pointAnimation, Math.trunc(segmentDur * i)); // Graph Label Intro Animation

        const targetTop = this.instance.findPointY(i, l) - this.instance.linesHeight * 0.083;
        const topOffset = targetTop + this.instance.linesHeight * 0.07 / 2;
        let targetWidth = this.instance.data.length > 2 ? 10 : 5 * this.instance.data.length;
        targetWidth = targetWidth < 6 ? 6 : targetWidth;
        const targetLeft = this.instance.findPointX(i) - targetWidth * this.instance.linesWidth / 100 * 0.5;
        const leftOffset = targetLeft + this.instance.linesWidth * (targetWidth / 100) / 2;
        const gLabelAnimation = new MotorCortex.CSSEffect({
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
          const [entry, duration, xInit, yInit, zoomInit, xTarget, yTarget, zoomTarget] = [...this.buildSvgIntroParams(i, pointDur, segmentDur)];
          const zoomIncident = new TDCAM.ZoomTo({
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

  buildSvgIntroParams(index, pointDur, segmentDur) {
    let entry = 0;
    let duration = 0;
    let xTarget = this.instance.findPointX(index) + (1 - this.instance.graphScale.width) / 2 * config.lineGraph.originalDims.width;
    let yTarget = this.instance.findPointY(index, 0) + (1 - this.instance.graphScale.height) / 2 * config.lineGraph.originalDims.height;
    let zoomTarget = this.instance.traceScale;
    let xInit, yInit, zoomInit;

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

  buildOutroGraph(targetGroup) {
    const segmentDur = this.instance.outroDur / (this.instance.data.length + 1);
    const pointDur = segmentDur * 0.25;
    const pathDur = segmentDur * 0.8;
    const zoomOffset = this.instance.trace ? 1 : 0;
    const pathAnimGroup = new MotorCortex.Group();
    const pointAnimGroup = new MotorCortex.Group();

    for (let l = 0; l < this.instance.dataSetsNum; l++) {
      const gLabelGroup = new MotorCortex.Group();

      for (let i = 0; i < this.instance.data.length; i++) {
        // Path outro Animation
        if (i !== this.instance.data.length - 1) {
          const pathAnimation = new SVGD.Draw({
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


        const pointAnimation = new MotorCortex.CSSEffect({
          animatedAttrs: {
            opacity: 0,
            r: "0"
          },
          initialValues: {
            opacity: 1,
            r: "".concat(this.instance.r, "%")
          }
        }, {
          selector: "#point-".concat(l, "-").concat(i),
          duration: Math.trunc(pointDur),
          easeing: "easeOutCubic"
        });
        pointAnimGroup.addIncident(pointAnimation, Math.trunc(segmentDur * (this.instance.data.length + zoomOffset - i - 1))); // Graph Label Outro Animation

        const targetTop = this.instance.findPointY(i, l) - this.instance.linesHeight * 0.083;
        const topOffset = targetTop + this.instance.linesHeight * 0.07 / 2;
        let targetWidth = 10 / 2 * this.instance.data.length > 10 ? 10 : 10 / 2 * this.instance.data.length;
        targetWidth = targetWidth < 6 ? 6 : targetWidth;
        const targetLeft = this.instance.findPointX(i) - targetWidth * this.instance.linesWidth / 100 * 0.5;
        const leftOffset = targetLeft + this.instance.linesWidth * (targetWidth / 100) / 2;
        const gLabelAnimation = new MotorCortex.CSSEffect({
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

}

/**
 * LINE GRAPH: MotorCortex Implementation
 */

class LineGraph extends MotorCortex.HTMLClip {
  // Building HTML tree for incident
  get html() {
    this.buildVars(); // Title modal html generation

    const title = [];

    for (let i = 0; i < this.words.length; i++) {
      title.push("<div id=\"word-".concat(i, "\" class=\"fontColorOn letter-wrapper-title\">").concat(this.words[i], "</div>"));

      if (i !== this.words.length - 1) {
        title.push('<div class="space-char letter-wrapper-title">-</div>');
      }
    } // Legend html generation


    const legend = [];

    if (this.legend) {
      const legendLine = [];

      for (let l = 0; l < this.dataSetsNum; l++) {
        legendLine.push("<div class=\"line-wrapper\"><div class=\"color-wrapper\">\n              <div class=\"line-color color-".concat(l, "\"></div>\n            </div><div class=\"line-title\">").concat(this.dataSets[l].title, "</div></div>"));
      }

      legend.push("<div class=\"legend-wrapper\">".concat(legendLine.join(""), "</div>"));
    } // Data stele html generation


    const dataSteles = [];

    if (this.grid === "steles") {
      for (const i in this.data) {
        const stele = [];

        for (let z = 0; z < this.steleBlockNum; z++) {
          stele.push("<div\n              class=\"stele-block-".concat(i, " stele-block stele-grid-block\"}\n            ></div>"));
        }

        dataSteles.push("<div id=\"stele-".concat(i, "\" class=\"data-stele stele-grid\">").concat(stele.join(""), "</div>"));
      }
    } else if (this.grid === "lines") {
      const stele = [];

      for (let z = 0; z < this.steleBlockNum; z++) {
        stele.push('<div class="stele-block-0 stele-block line-grid-block"></div>');
      }

      dataSteles.push("<div id=\"stele-0\" class=\"data-stele line-grid\">".concat(stele.join(""), "</div>"));
    } // Graph Lines SVG hmtl generation


    const lineGroups = [];

    for (let l = 0; l < this.dataSetsNum; l++) {
      const linePaths = [];

      for (let i = 0; i < this.data.length; i++) {
        const lineSegment = [];
        const xPoint1 = this.findPointX(i);
        const yPoint1 = this.findPointY(i, l);

        if (i !== this.data.length - 1) {
          const xPoint2 = this.findPointX(i + 1);
          const yPoint2 = this.findPointY(i + 1, l); // Dataline Generation

          lineSegment.push("<path\n              id=\"line-".concat(l, "-").concat(i, "\"\n              class=\"line-").concat(l, "\"\n              d=\"M ").concat(xPoint1, " ").concat(yPoint1, "L ").concat(xPoint2, " ").concat(yPoint2, "\"\n              stroke=\"").concat(this.dataSets[l].color, "\"\n              stroke-width=\"0.65%\"\n              stroke-linecap=\"round\"\n              fill=\"none\"\n            />"));
        } // Datapoint Generation


        lineSegment.push("<circle\n            id=\"point-".concat(l, "-").concat(i, "\"\n            class=\"point-").concat(l, " datapoint\"\n            cx=\"").concat(xPoint1, "\"\n            cy=\"").concat(yPoint1, "\"\n            r=\"").concat(this.r, "%\"\n            fill=\"").concat(this.senaryC, "\"\n            stroke=\"").concat(this.senaryC, "\"\n          />"));
        linePaths.push("<g>".concat(lineSegment.join(""), "</g>"));
      }

      lineGroups.push("<g>".concat(linePaths.join(""), "</g>"));
    }

    const lines = [];
    lines.push("<svg\n        class=\"lines-container\"\n        viewbox=\"0 0 ".concat(this.linesWidth, " ").concat(this.linesHeight, "\"\n      >").concat(lineGroups.join(""), "</svg>")); // Graph labels html generation with data parameters as reference

    const labelGroups = [];

    for (let l = 0; l < this.dataSetsNum; l++) {
      const graphLabels = [];

      for (let i = 0; i < this.data.length; i++) {
        const {
          name,
          values
        } = this.data[i];
        graphLabels.push("<div>\n            <div\n              class=\"hoverPoint-".concat(l, "-").concat(name, " hoverPoint\"\n            ></div>\n            <div\n              class=\"label-").concat(l, "-").concat(name, " inner-label-container\"\n              id=\"label-").concat(l, "-").concat(name, "\"\n            >\n              <div class=\"inner-label\">\n                ").concat(parseFloat(values[l].toFixed(2)), " ").concat(this.unit, "\n              </div>\n            </div>\n          </div>"));
      }

      labelGroups.push("<div class=\"line-".concat(l, "-label-container\">").concat(graphLabels.join(""), "</div>"));
    } // X-axis labels html generation with data parameter as reference


    const xLabels = [];

    for (const i in this.data) {
      const labelX = [];

      if (this.data[i].name.length > 4) {
        this.data[i].name = this.data[i].name.slice(0, 4);
      }

      for (const z in this.data[i].name) {
        labelX.push("<div id=\"letter-".concat(i, "-").concat(z, "\" class=\"letter-container\">\n            <div class=\"letter-wrapper-label fontColorOn\">\n              ").concat(this.data[i].name[z], "\n            </div>\n          </div>"));
      }

      xLabels.push("<div class=\"label-container\" id=\"label-".concat(i, "\">\n          ").concat(labelX.join(""), "\n        </div>"));
    } // MAIN HTML TREE


    return "<div class=\"container-lineGraph\">\n        <div class=\"viewport-lineGraph\">\n          <div class=\"title-container-lineGraph\">\n            <div class=\"title-wrapper-lineGraph\">".concat(title.join(""), "</div>\n          </div>\n          ").concat(legend.join(""), "\n          <div class=\"graph-background\"></div>\n          <div class=\"dataStele-container\">").concat(dataSteles.join(""), "</div>\n          <div class=\"svg-container\">").concat(lines.join(""), "</div>\n          <div class=\"graph-labels-container\">").concat(labelGroups.join(""), "</div>\n          <div class=\"x-labels-container-lineGraph\">").concat(xLabels.join(""), "</div>\n          <div class=\"x-labels-back-wrapper-lineGraph\">\n            <div class=\"block-background\"></div>\n          </div>\n        </div>\n      </div>");
  } // Build CSS rules for incident


  get css() {
    return buildCSS$1(this);
  } // Font API call (only google fonts API supported)


  get fonts() {
    return [{
      type: "google-font",
      src: "".concat(this.url)
    }];
  } // MotorCortex Animation generation and


  buildTree() {
    opacityControl(this, ".container-lineGraph"); // INTRO CONTROL

    if (this.attrs.timings.intro) {
      let introGroup = new MotorCortex.Group(); // Background Intro Animation

      introGroup.addIncident(this.animConstructor.buildBackgroundIntro(), this.introDur * 0); // Main Title Intro Animation

      introGroup.addIncident(this.animConstructor.buildTitleIntroCombo(), Math.trunc(this.introDur * 0.14)); // Legend Intro Animation

      introGroup.addIncident(this.animConstructor.buildIntroLegend(), Math.trunc(this.introDur * 0.1)); // Label Intro Animation

      introGroup.addIncident(this.animConstructor.buildIntroLabels(), Math.trunc(this.introDur * 0.18)); // Data Stele intro animation

      introGroup.addIncident(this.animConstructor.buildIntroStele(), Math.trunc(this.introDur * 0.45)); // Graph SVG, Labels, & Zoom Intro Animation

      const segmentDur = this.introDur / this.data.length;
      const pointDur = segmentDur * 0.35;
      const [targetGroup, pathGroup, pointGroup] = this.animConstructor.buildIntroGraph(introGroup);
      introGroup = targetGroup;
      introGroup.addIncident(pathGroup, Math.trunc(pointDur));
      introGroup.addIncident(pointGroup, 0);
      this.addIncident(introGroup, 0);
    } // OUTRO CONTROL


    if (this.attrs.timings.outro) {
      let outroGroup = new MotorCortex.Group(); // Background Outro Animation

      outroGroup.addIncident(this.animConstructor.buildBackgroundOutro(), Math.trunc(this.outroDur * 0.8)); // Main Title Outro Animation

      outroGroup.addIncident(this.animConstructor.buildTitleOutroCombo(), Math.trunc(this.outroDur * 0.76)); // Legend Outro Animation

      outroGroup.addIncident(this.animConstructor.buildOutroLegend(), Math.trunc(this.outroDur * 0.1)); // Label Outro Animation

      outroGroup.addIncident(this.animConstructor.buildOutroLabels(), this.outroDur - this.outroDur * 0.55); // Data Stele Outro Animation

      outroGroup.addIncident(this.animConstructor.buildOutroStele(), this.outroDur * 0.25); // Graph SVG & Labels Outro Animation

      const segmentDur = this.outroDur / (this.data.length + 1);
      const pointDur = segmentDur * 0.25;
      const [targetGroup, pathGroup, pointGroup] = [...this.animConstructor.buildOutroGraph(outroGroup)];
      outroGroup = targetGroup;
      outroGroup.addIncident(pathGroup, Math.trunc(pointDur));
      outroGroup.addIncident(pointGroup, 0);
      this.addIncident(outroGroup, 0 + this.introDur + this.staticDur);
    } // STATIC DURATION CONTROL


    this.addIncident(this.animConstructor.buildStaticControl(), this.introDur);
  }

  buildVars() {
    var _this$attrs$timings$s;

    // AnimConstructor Init
    this.animConstructor = new AnimationConstructor(this); // Data init

    this.data = this.attrs.data.data; // Colors control

    this.colorPalette = colorPalette;
    this.attrs.palette = this.attrs.palette || {};
    this.primaryC = this.attrs.palette.primary || this.colorPalette.gray;
    this.secondaryC = this.attrs.palette.secondary || this.colorPalette.lightGray;
    this.tertiaryC = this.attrs.palette.tertiary || this.colorPalette.darkGray;
    this.quaternaryC = this.attrs.palette.quaternary || this.colorPalette.whiteBack;
    this.quinaryC = this.attrs.palette.quinary || this.colorPalette.gray;
    this.senaryC = this.attrs.palette.senary || this.colorPalette.accent;
    this.fontC = this.attrs.palette.font || this.colorPalette.font;
    this.accentC = this.attrs.palette.accent || this.colorPalette.accent;
    this.backgroundC = this.attrs.palette.background || this.colorPalette.background; // Data processing

    this.title = this.attrs.data.title;
    this.words = this.title.split(" ");
    this.dataSets = this.attrs.data.dataSets ? this.attrs.data.dataSets : [{
      title: "",
      color: this.accentC
    }];
    this.dataSetsNum = this.dataSets.length;
    let colorCount = 2;
    this.dataSets.map((dataSet, l) => {
      if (dataSet.color === "" || !dataSet.color) {
        dataSet.color = this.colorPalette.dataColors[colorCount];
        colorCount++;
      }

      if (dataSet.title === "" || !dataSet.title) {
        dataSet.title = "Dataset-".concat(l + 1);
      } else if (dataSet.title.length > 10) {
        dataSet.title = dataSet.title.substr(0, 10);
      }
    });
    this.legend = this.dataSetsNum > 1 ? true : this.attrs.legend || false;
    this.maxPoint = 0;

    for (const datum of this.data) {
      if (Math.max(...datum.values) > this.maxPoint) {
        this.maxPoint = Math.max(...datum.values);
      }
    }

    this.maxPoint = this.attrs.data.maxValue ? this.attrs.data.maxValue : this.maxPoint;
    this.hover = this.attrs.data.hover || false;
    this.hover = this.dataSetsNum !== 1 ? true : this.hover;
    this.grid = this.attrs.grid || "lines";
    this.grid = this.grid !== "lines" && this.grid !== "steles" ? "lines" : this.grid;
    this.gridH = this.attrs.gridH || 1;
    this.attrs.trace = this.attrs.trace || {};
    this.trace = this.dataSetsNum === 1 ? this.attrs.trace.toggle || false : false;
    this.traceScale = this.attrs.trace.scale || 1.4;
    this.unit = this.attrs.data.unit || "%";
    this.interval = this.attrs.data.interval || 5;
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
    this.r = this.attrs.dataPointR || 0.65; // Global access data process functions

    this.findPointX = datapoint => {
      return this.steleWidth / 2 + this.spaceAround + datapoint * (2 * this.spaceAround + this.steleWidth);
    };

    this.findPointY = (datapoint, line) => {
      return this.linesHeight - this.data[datapoint].values[line] * this.linesHeight / this.maxPoint;
    }; // Fonts control


    this.attrs.font = this.attrs.font || {};
    this.fontFamily = this.attrs.font.fontFamily || "'Staatliches', cursive";
    this.fontSizeLabel = this.attrs.font.size || "1.7rem";
    this.fontSizeTitle = 1.5 * helpers.extractUnitsNums(this.fontSizeLabel).number + helpers.extractUnitsNums(this.fontSizeLabel).unit;
    this.fontSizeInner = 1 * helpers.extractUnitsNums(this.fontSizeLabel).number + helpers.extractUnitsNums(this.fontSizeLabel).unit;
    this.url = this.attrs.font.url || "https://fonts.googleapis.com/css2?family=Staatliches&display=swap"; // Timeline control

    this.attrs.timings = this.attrs.timings || {};
    this.introDur = this.attrs.timings.intro || 0;
    this.outroDur = this.attrs.timings.outro || 0;
    this.staticDur = (_this$attrs$timings$s = this.attrs.timings.static) !== null && _this$attrs$timings$s !== void 0 ? _this$attrs$timings$s : 1000;
  }

}

function buildCSS(cssArgs) {
  var _cssArgs$font, _cssArgs$font2, _cssArgs$font3;

  const createGenerateId = () => {
    return rule => rule.key;
  };

  jss.setup({
    createGenerateId
  });
  const styles = {
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
  cssArgs.data.data.forEach((elem, i) => {
    styles["meter-" + i] = {
      background: elem.color ? elem.color : generateColor(i),
      width: "1rem",
      height: "1rem",
      display: "block",
      "margin-right": "0.5rem",
      "margin-bottom": "0.25rem"
    };
  });
  const styleSheet = jss.createStyleSheet(styles).toString();
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

class PieChart extends MotorCortex.HTMLClip {
  get html() {
    this.data = this.attrs.data.data;
    return "<div class=\"container-pieChart\">\n        <h1 class=\"title\">".concat(this.buildTitle().join(""), "</h1>\n        <div class=\"columns\">\n          <div class=\"col-1\">\n            <div class=\"piechart\"></div>\n          </div>\n          <div class=\"col-2\">\n            <div class=\"legend\">").concat(this.buildLegend().join(""), "</div>\n          </div>\n        </div>\n      </div>");
  }

  get css() {
    const cssArgs = {
      data: this.attrs.data,
      palette: this.attrs.palette ? this.attrs.palette : {},
      font: this.attrs.font ? this.attrs.font : {},
      radiusString: this.createRadiusString()
    };
    return buildCSS(cssArgs);
  }

  get fonts() {
    var _this$attrs$font;

    return [{
      type: "google-font",
      src: (_this$attrs$font = this.attrs.font) !== null && _this$attrs$font !== void 0 && _this$attrs$font.url ? this.attrs.font.url : "https://fonts.googleapis.com/css2?family=Staatliches&display=swap"
    }];
  }

  buildTree() {
    var _this$attrs$timings$s, _this$attrs$timings;

    fadeOutOpacityControl(this, ".container-pieChart");
    this.static = (_this$attrs$timings$s = this.attrs.timings.static) !== null && _this$attrs$timings$s !== void 0 ? _this$attrs$timings$s : 1000;
    this.intro = this.attrs.timings.intro || 0;
    this.outro = this.attrs.timings.outro || 0;

    if (this.intro) {
      const rotateDuration = Math.round(this.intro * 0.8);
      const titleInDuration = Math.round(this.intro * 0.4);

      if (this.attrs.data.title) {
        [...this.attrs.data.title].forEach((char, index) => {
          const titleIn = new MotorCortex.CSSEffect({
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
            duration: Math.round(titleInDuration / this.attrs.data.title.length),
            selector: ".char-".concat(index),
            easing: "easeOutCubic"
          });
          this.addIncident(titleIn, Math.round(titleInDuration / this.attrs.data.title.length) * index);
        });
      }

      const rotateIn = new MotorCortex.CSSEffect({
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
      const legendIn = new MotorCortex.CSSEffect({
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

    const staticPie = new MotorCortex.CSSEffect({
      animatedAttrs: {}
    }, {
      duration: this.static,
      selector: ".container-pieChart"
    });
    this.addIncident(staticPie, this.intro);

    if ((_this$attrs$timings = this.attrs.timings) !== null && _this$attrs$timings !== void 0 && _this$attrs$timings.outro) {
      var _this$attrs$timings2;

      const outroDuration = Math.round((_this$attrs$timings2 = this.attrs.timings) === null || _this$attrs$timings2 === void 0 ? void 0 : _this$attrs$timings2.outro);
      const titleOut = new MotorCortex.CSSEffect({
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
      const legendOut = new MotorCortex.CSSEffect({
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
      const pieOut = new MotorCortex.CSSEffect({
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

  createRadiusString() {
    let gradientString = "";
    let turnCount = 0;

    for (const datum in this.data) {
      if (datum === "0") {
        gradientString += "\n                    ".concat(this.data[datum].color ? this.data[datum].color : this.generateColor(datum), "\n                    ").concat(this.data[datum].value / 100, "turn,\n                ");
      } else {
        gradientString += "\n                    ".concat(this.data[datum - 1].color ? this.data[datum].color : this.generateColor(datum), "\n                    ").concat(this.data[datum - 1].value / 100, "turn,\n                    ").concat(this.data[datum].color ? this.data[datum].color : this.generateColor(datum), "\n                    ").concat(turnCount + this.data[datum].value / 100, "turn,\n                ");
      }

      turnCount += this.data[datum].value / 100;
    }

    return gradientString + "rgba(0,0,0,0) 0 360deg";
  }

  createNullRadiusString() {
    let gradientString = "";

    for (const datum in this.data) {
      if (datum === "0") {
        gradientString += "\n                    ".concat(this.data[datum].color ? this.data[datum].color : this.generateColor(datum), "\n                    ", 0, "turn,\n                ");
      } else {
        gradientString += "\n                    ".concat(this.data[datum - 1].color ? this.data[datum].color : this.generateColor(datum), "\n                    ", 0, "turn,\n                    ").concat(this.data[datum].color ? this.data[datum].color : this.generateColor(datum), "\n                    ", 0, "turn,\n                ");
      }
    }

    return gradientString + "rgba(0,0,0,0) 0 360deg";
  }

  generateColor(index) {
    if (index > colorPalette.dataColors.length - 1) {
      return colorPalette.dataColors[Math.floor(Math.random() * Math.floor(colorPalette.dataColors.length))];
    }

    return colorPalette.dataColors[index];
  }

  buildTitle() {
    return (this.data.title || []).map((char, index) => "<div class=\"char\">\n          <div class=\"char-".concat(index, " ").concat(char === " " ? " space" : "", "\">\n            ").concat(char, "\n          </div>\n        </div>"));
  }

  buildLegend() {
    return this.data.map((elem, index) => {
      if (elem.name.length > 24) {
        elem.name = elem.name.substring(0, 21) + "...";
      }

      return "<div class=\"legend-row\">\n          <div class=\"meter-".concat(index, "\"></div>\n          <div class=\"legend-text\">").concat(elem.name, "</div>\n        </div>");
    });
  }

}

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
var version = "2.1.0";

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
