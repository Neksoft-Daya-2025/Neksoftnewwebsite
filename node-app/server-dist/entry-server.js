import React, { useEffect, useId, useLayoutEffect, useRef, useState, useSyncExternalStore } from "react";
import { renderToString } from "react-dom/server";
import { Link, NavLink, StaticRouter, useLocation } from "react-router-dom";
import { Activity, ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Bot, Check, CheckCheck, ChevronDown, ChevronLeft, ChevronRight, CircleCheck, ClipboardList, Cloud, Code2, Compass, Cpu, ExternalLink, Eye, Fish, Globe, Globe2, GraduationCap, Handshake, Image, Layers, LayoutDashboard, LayoutGrid, LoaderCircle, LockKeyhole, Mail, MapPin, Megaphone, Menu, Minus, Monitor, MoveVertical, Navigation, Palette, PanelsTopLeft, PlugZap, Plus, Radio, RotateCw, Search, ShieldCheck, SlidersHorizontal, Smartphone, Target, TrendingUp, Users, UsersRound, Workflow, X, Zap } from "lucide-react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
// node_modules/gsap/gsap-core.js
function _assertThisInitialized(self) {
	if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	return self;
}
function _inheritsLoose(subClass, superClass) {
	subClass.prototype = Object.create(superClass.prototype);
	subClass.prototype.constructor = subClass;
	subClass.__proto__ = superClass;
}
/*!
* GSAP 3.15.0
* https://gsap.com
*
* @license Copyright 2008-2026, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license
* @author: Jack Doyle, jack@greensock.com
*/
var _config = {
	autoSleep: 120,
	force3D: "auto",
	nullTargetWarn: 1,
	units: { lineHeight: "" }
};
var _defaults$1 = {
	duration: .5,
	overwrite: false,
	delay: 0
};
var _suppressOverwrites$1;
var _reverting$1;
var _context$2;
var _bigNum$1 = 1e8;
var _tinyNum = 1 / _bigNum$1;
var _2PI = Math.PI * 2;
var _HALF_PI = _2PI / 4;
var _gsID = 0;
var _sqrt = Math.sqrt;
var _cos = Math.cos;
var _sin = Math.sin;
var _isString$1 = function _isString(value) {
	return typeof value === "string";
};
var _isFunction$1 = function _isFunction(value) {
	return typeof value === "function";
};
var _isNumber$1 = function _isNumber(value) {
	return typeof value === "number";
};
var _isUndefined = function _isUndefined(value) {
	return typeof value === "undefined";
};
var _isObject$1 = function _isObject(value) {
	return typeof value === "object";
};
var _isNotFalse = function _isNotFalse(value) {
	return value !== false;
};
var _windowExists$2 = function _windowExists() {
	return typeof window !== "undefined";
};
var _isFuncOrString = function _isFuncOrString(value) {
	return _isFunction$1(value) || _isString$1(value);
};
var _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {};
var _isArray = Array.isArray;
var _randomExp = /random\([^)]+\)/g;
var _commaDelimExp = /,\s*/g;
var _strictNumExp = /(?:-?\.?\d|\.)+/gi;
var _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
var _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
var _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
var _relExp = /[+-]=-?[.\d]+/;
var _delimitedValueExp = /[^,'"\[\]\s]+/gi;
var _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;
var _globalTimeline;
var _win$3;
var _coreInitted$2;
var _doc$3;
var _globals = {};
var _installScope = {};
var _coreReady;
var _install = function _install(scope) {
	return (_installScope = _merge(scope, _globals)) && gsap$2;
};
var _missingPlugin = function _missingPlugin(property, value) {
	return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
};
var _warn = function _warn(message, suppress) {
	return !suppress && console.warn(message);
};
var _addGlobal = function _addGlobal(name, obj) {
	return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
};
var _emptyFunc = function _emptyFunc() {
	return 0;
};
var _startAtRevertConfig = {
	suppressEvents: true,
	isStart: true,
	kill: false
};
var _revertConfigNoKill = {
	suppressEvents: true,
	kill: false
};
var _revertConfig = { suppressEvents: true };
var _reservedProps = {};
var _lazyTweens = [];
var _lazyLookup = {};
var _lastRenderedFrame;
var _plugins = {};
var _effects = {};
var _nextGCFrame = 30;
var _harnessPlugins = [];
var _callbackNames = "";
var _harness = function _harness(targets) {
	var target = targets[0], harnessPlugin, i;
	_isObject$1(target) || _isFunction$1(target) || (targets = [targets]);
	if (!(harnessPlugin = (target._gsap || {}).harness)) {
		i = _harnessPlugins.length;
		while (i-- && !_harnessPlugins[i].targetTest(target));
		harnessPlugin = _harnessPlugins[i];
	}
	i = targets.length;
	while (i--) targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
	return targets;
};
var _getCache = function _getCache(target) {
	return target._gsap || _harness(toArray(target))[0]._gsap;
};
var _getProperty = function _getProperty(target, property, v) {
	return (v = target[property]) && _isFunction$1(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
};
var _forEachName = function _forEachName(names, func) {
	return (names = names.split(",")).forEach(func) || names;
};
var _round$1 = function _round(value) {
	return Math.round(value * 1e5) / 1e5 || 0;
};
var _roundPrecise = function _roundPrecise(value) {
	return Math.round(value * 1e7) / 1e7 || 0;
};
var _parseRelative = function _parseRelative(start, value) {
	var operator = value.charAt(0), end = parseFloat(value.substr(2));
	start = parseFloat(start);
	return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
};
var _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
	var l = toFind.length, i = 0;
	for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;);
	return i < l;
};
var _lazyRender = function _lazyRender() {
	var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
	_lazyLookup = {};
	_lazyTweens.length = 0;
	for (i = 0; i < l; i++) {
		tween = a[i];
		tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
	}
};
var _isRevertWorthy = function _isRevertWorthy(animation) {
	return !!(animation._initted || animation._startAt || animation.add);
};
var _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
	_lazyTweens.length && !_reverting$1 && _lazyRender();
	animation.render(time, suppressEvents, force || !!(_reverting$1 && time < 0 && _isRevertWorthy(animation)));
	_lazyTweens.length && !_reverting$1 && _lazyRender();
};
var _numericIfPossible = function _numericIfPossible(value) {
	var n = parseFloat(value);
	return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString$1(value) ? value.trim() : value;
};
var _passThrough$1 = function _passThrough(p) {
	return p;
};
var _setDefaults$1 = function _setDefaults(obj, defaults) {
	for (var p in defaults) p in obj || (obj[p] = defaults[p]);
	return obj;
};
var _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
	return function(obj, defaults) {
		for (var p in defaults) p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
	};
};
var _merge = function _merge(base, toMerge) {
	for (var p in toMerge) base[p] = toMerge[p];
	return base;
};
var _mergeDeep = function _mergeDeep(base, toMerge) {
	for (var p in toMerge) p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject$1(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
	return base;
};
var _copyExcluding = function _copyExcluding(obj, excluding) {
	var copy = {}, p;
	for (p in obj) p in excluding || (copy[p] = obj[p]);
	return copy;
};
var _inheritDefaults = function _inheritDefaults(vars) {
	var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults$1;
	if (_isNotFalse(vars.inherit)) while (parent) {
		func(vars, parent.vars.defaults);
		parent = parent.parent || parent._dp;
	}
	return vars;
};
var _arraysMatch = function _arraysMatch(a1, a2) {
	var i = a1.length, match = i === a2.length;
	while (match && i-- && a1[i] === a2[i]);
	return i < 0;
};
var _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
	if (firstProp === void 0) firstProp = "_first";
	if (lastProp === void 0) lastProp = "_last";
	var prev = parent[lastProp], t;
	if (sortBy) {
		t = child[sortBy];
		while (prev && prev[sortBy] > t) prev = prev._prev;
	}
	if (prev) {
		child._next = prev._next;
		prev._next = child;
	} else {
		child._next = parent[firstProp];
		parent[firstProp] = child;
	}
	if (child._next) child._next._prev = child;
	else parent[lastProp] = child;
	child._prev = prev;
	child.parent = child._dp = parent;
	return child;
};
var _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
	if (firstProp === void 0) firstProp = "_first";
	if (lastProp === void 0) lastProp = "_last";
	var prev = child._prev, next = child._next;
	if (prev) prev._next = next;
	else if (parent[firstProp] === child) parent[firstProp] = next;
	if (next) next._prev = prev;
	else if (parent[lastProp] === child) parent[lastProp] = prev;
	child._next = child._prev = child.parent = null;
};
var _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
	child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
	child._act = 0;
};
var _uncache = function _uncache(animation, child) {
	if (animation && (!child || child._end > animation._dur || child._start < 0)) {
		var a = animation;
		while (a) {
			a._dirty = 1;
			a = a.parent;
		}
	}
	return animation;
};
var _recacheAncestors = function _recacheAncestors(animation) {
	var parent = animation.parent;
	while (parent && parent.parent) {
		parent._dirty = 1;
		parent.totalDuration();
		parent = parent.parent;
	}
	return animation;
};
var _rewindStartAt = function _rewindStartAt(tween, totalTime, suppressEvents, force) {
	return tween._startAt && (_reverting$1 ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
};
var _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
	return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
};
var _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
	return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
};
var _animationCycle = function _animationCycle(tTime, cycleDuration) {
	var whole = Math.floor(tTime = _roundPrecise(tTime / cycleDuration));
	return tTime && whole === tTime ? whole - 1 : whole;
};
var _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
	return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
};
var _setEnd = function _setEnd(animation) {
	return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
};
var _alignPlayhead = function _alignPlayhead(animation, totalTime) {
	var parent = animation._dp;
	if (parent && parent.smoothChildTiming && animation._ts) {
		animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
		_setEnd(animation);
		parent._dirty || _uncache(parent, animation);
	}
	return animation;
};
var _postAddChecks = function _postAddChecks(timeline, child) {
	var t;
	if (child._time || !child._dur && child._initted || child._start < timeline._time && (child._dur || !child.add)) {
		t = _parentToChildTotalTime(timeline.rawTime(), child);
		if (!child._dur || _clamp$1(0, child.totalDuration(), t) - child._tTime > _tinyNum) child.render(t, true);
	}
	if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
		if (timeline._dur < timeline.duration()) {
			t = timeline;
			while (t._dp) {
				t.rawTime() >= 0 && t.totalTime(t._tTime);
				t = t._dp;
			}
		}
		timeline._zTime = -_tinyNum;
	}
};
var _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
	child.parent && _removeFromParent(child);
	child._start = _roundPrecise((_isNumber$1(position) ? position : position || timeline !== _globalTimeline ? _parsePosition$1(timeline, position, child) : timeline._time) + child._delay);
	child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
	_addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
	_isFromOrFromStart(child) || (timeline._recent = child);
	skipChecks || _postAddChecks(timeline, child);
	timeline._ts < 0 && _alignPlayhead(timeline, timeline._tTime);
	return timeline;
};
var _scrollTrigger = function _scrollTrigger(animation, trigger) {
	return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
};
var _attemptInitTween = function _attemptInitTween(tween, time, force, suppressEvents, tTime) {
	_initTween(tween, time, tTime);
	if (!tween._initted) return 1;
	if (!force && tween._pt && !_reverting$1 && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
		_lazyTweens.push(tween);
		tween._lazy = [tTime, suppressEvents];
		return 1;
	}
};
var _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
	var parent = _ref.parent;
	return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
};
var _isFromOrFromStart = function _isFromOrFromStart(_ref2) {
	var data = _ref2.data;
	return data === "isFromStart" || data === "isStart";
};
var _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
	var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
	if (repeatDelay && tween._repeat) {
		tTime = _clamp$1(0, tween._tDur, totalTime);
		iteration = _animationCycle(tTime, repeatDelay);
		tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
		if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
			prevRatio = 1 - ratio;
			tween.vars.repeatRefresh && tween._initted && tween.invalidate();
		}
	}
	if (ratio !== prevRatio || _reverting$1 || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
		if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) return;
		prevIteration = tween._zTime;
		tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
		suppressEvents || (suppressEvents = totalTime && !prevIteration);
		tween.ratio = ratio;
		tween._from && (ratio = 1 - ratio);
		tween._time = 0;
		tween._tTime = tTime;
		pt = tween._pt;
		while (pt) {
			pt.r(ratio, pt.d);
			pt = pt._next;
		}
		totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
		tween._onUpdate && !suppressEvents && _callback$1(tween, "onUpdate");
		tTime && tween._repeat && !suppressEvents && tween.parent && _callback$1(tween, "onRepeat");
		if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
			ratio && _removeFromParent(tween, 1);
			if (!suppressEvents && !_reverting$1) {
				_callback$1(tween, ratio ? "onComplete" : "onReverseComplete", true);
				tween._prom && tween._prom();
			}
		}
	} else if (!tween._zTime) tween._zTime = totalTime;
};
var _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
	var child;
	if (time > prevTime) {
		child = animation._first;
		while (child && child._start <= time) {
			if (child.data === "isPause" && child._start > prevTime) return child;
			child = child._next;
		}
	} else {
		child = animation._last;
		while (child && child._start >= time) {
			if (child.data === "isPause" && child._start < prevTime) return child;
			child = child._prev;
		}
	}
};
var _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
	var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
	totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
	animation._dur = dur;
	animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
	totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
	animation.parent && _setEnd(animation);
	skipUncache || _uncache(animation.parent, animation);
	return animation;
};
var _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
	return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
};
var _zeroPosition = {
	_start: 0,
	endTime: _emptyFunc,
	totalDuration: _emptyFunc
};
var _parsePosition$1 = function _parsePosition(animation, position, percentAnimation) {
	var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum$1 ? recent.endTime(false) : animation._dur, i, offset, isPercent;
	if (_isString$1(position) && (isNaN(position) || position in labels)) {
		offset = position.charAt(0);
		isPercent = position.substr(-1) === "%";
		i = position.indexOf("=");
		if (offset === "<" || offset === ">") {
			i >= 0 && (position = position.replace(/=/, ""));
			return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
		}
		if (i < 0) {
			position in labels || (labels[position] = clippedDuration);
			return labels[position];
		}
		offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
		if (isPercent && percentAnimation) offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
		return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
	}
	return position == null ? clippedDuration : +position;
};
var _createTweenType = function _createTweenType(type, params, timeline) {
	var isLegacy = _isNumber$1(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
	isLegacy && (vars.duration = params[1]);
	vars.parent = timeline;
	if (type) {
		irVars = vars;
		parent = timeline;
		while (parent && !("immediateRender" in irVars)) {
			irVars = parent.vars.defaults || {};
			parent = _isNotFalse(parent.vars.inherit) && parent.parent;
		}
		vars.immediateRender = _isNotFalse(irVars.immediateRender);
		type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
	}
	return new Tween(params[0], vars, params[varsIndex + 1]);
};
var _conditionalReturn = function _conditionalReturn(value, func) {
	return value || value === 0 ? func(value) : func;
};
var _clamp$1 = function _clamp(min, max, value) {
	return value < min ? min : value > max ? max : value;
};
var getUnit = function getUnit(value, v) {
	return !_isString$1(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
};
var clamp$1 = function clamp(min, max, value) {
	return _conditionalReturn(value, function(v) {
		return _clamp$1(min, max, v);
	});
};
var _slice = [].slice;
var _isArrayLike = function _isArrayLike(value, nonEmpty) {
	return value && _isObject$1(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject$1(value[0])) && !value.nodeType && value !== _win$3;
};
var _flatten = function _flatten(ar, leaveStrings, accumulator) {
	if (accumulator === void 0) accumulator = [];
	return ar.forEach(function(value) {
		var _accumulator;
		return _isString$1(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
	}) || accumulator;
};
var toArray = function toArray(value, scope, leaveStrings) {
	return _context$2 && !scope && _context$2.selector ? _context$2.selector(value) : _isString$1(value) && !leaveStrings && (_coreInitted$2 || !_wake()) ? _slice.call((scope || _doc$3).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
};
var selector = function selector(value) {
	value = toArray(value)[0] || _warn("Invalid scope") || {};
	return function(v) {
		var el = value.current || value.nativeElement || value;
		return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc$3.createElement("div") : value);
	};
};
var shuffle = function shuffle(a) {
	return a.sort(function() {
		return .5 - Math.random();
	});
};
var distribute = function distribute(v) {
	if (_isFunction$1(v)) return v;
	var vars = _isObject$1(v) ? v : { each: v }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
	if (_isString$1(from)) ratioX = ratioY = {
		center: .5,
		edges: .5,
		end: 1
	}[from] || 0;
	else if (!isDecimal && ratios) {
		ratioX = from[0];
		ratioY = from[1];
	}
	return function(i, target, a) {
		var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
		if (!distances) {
			wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum$1])[1];
			if (!wrapAt) {
				max = -_bigNum$1;
				while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l);
				wrapAt < l && wrapAt--;
			}
			distances = cache[l] = [];
			originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
			originY = wrapAt === _bigNum$1 ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
			max = 0;
			min = _bigNum$1;
			for (j = 0; j < l; j++) {
				x = j % wrapAt - originX;
				y = originY - (j / wrapAt | 0);
				distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
				d > max && (max = d);
				d < min && (min = d);
			}
			from === "random" && shuffle(distances);
			distances.max = max - min;
			distances.min = min;
			distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
			distances.b = l < 0 ? base - l : base;
			distances.u = getUnit(vars.amount || vars.each) || 0;
			ease = ease && l < 0 ? _invertEase(ease) : ease;
		}
		l = (distances[i] - distances.min) / distances.max || 0;
		return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
	};
};
var _roundModifier = function _roundModifier(v) {
	var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
	return function(raw) {
		var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
		return (n - n % 1) / p + (_isNumber$1(raw) ? 0 : getUnit(raw));
	};
};
var snap = function snap(snapTo, value) {
	var isArray = _isArray(snapTo), radius, is2D;
	if (!isArray && _isObject$1(snapTo)) {
		radius = isArray = snapTo.radius || _bigNum$1;
		if (snapTo.values) {
			snapTo = toArray(snapTo.values);
			if (is2D = !_isNumber$1(snapTo[0])) radius *= radius;
		} else snapTo = _roundModifier(snapTo.increment);
	}
	return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction$1(snapTo) ? function(raw) {
		is2D = snapTo(raw);
		return Math.abs(is2D - raw) <= radius ? is2D : raw;
	} : function(raw) {
		var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum$1, closest = 0, i = snapTo.length, dx, dy;
		while (i--) {
			if (is2D) {
				dx = snapTo[i].x - x;
				dy = snapTo[i].y - y;
				dx = dx * dx + dy * dy;
			} else dx = Math.abs(snapTo[i] - x);
			if (dx < min) {
				min = dx;
				closest = i;
			}
		}
		closest = !radius || min <= radius ? snapTo[closest] : raw;
		return is2D || closest === raw || _isNumber$1(raw) ? closest : closest + getUnit(raw);
	});
};
var random = function random(min, max, roundingIncrement, returnFunction) {
	return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
		return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
	});
};
var pipe = function pipe() {
	for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) functions[_key] = arguments[_key];
	return function(value) {
		return functions.reduce(function(v, f) {
			return f(v);
		}, value);
	};
};
var unitize = function unitize(func, unit) {
	return function(value) {
		return func(parseFloat(value)) + (unit || getUnit(value));
	};
};
var normalize = function normalize(min, max, value) {
	return mapRange(min, max, 0, 1, value);
};
var _wrapArray = function _wrapArray(a, wrapper, value) {
	return _conditionalReturn(value, function(index) {
		return a[~~wrapper(index)];
	});
};
var wrap = function wrap(min, max, value) {
	var range = max - min;
	return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function(value) {
		return (range + (value - min) % range) % range + min;
	});
};
var wrapYoyo = function wrapYoyo(min, max, value) {
	var range = max - min, total = range * 2;
	return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function(value) {
		value = (total + (value - min) % total) % total || 0;
		return min + (value > range ? total - value : value);
	});
};
var _replaceRandom = function _replaceRandom(s) {
	return s.replace(_randomExp, function(match) {
		var arIndex = match.indexOf("[") + 1, values = match.substring(arIndex || 7, arIndex ? match.indexOf("]") : match.length - 1).split(_commaDelimExp);
		return random(arIndex ? values : +values[0], arIndex ? 0 : +values[1], +values[2] || 1e-5);
	});
};
var mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
	var inRange = inMax - inMin, outRange = outMax - outMin;
	return _conditionalReturn(value, function(value) {
		return outMin + ((value - inMin) / inRange * outRange || 0);
	});
};
var interpolate = function interpolate(start, end, progress, mutate) {
	var func = isNaN(start + end) ? 0 : function(p) {
		return (1 - p) * start + p * end;
	};
	if (!func) {
		var isString = _isString$1(start), master = {}, p, i, interpolators, l, il;
		progress === true && (mutate = 1) && (progress = null);
		if (isString) {
			start = { p: start };
			end = { p: end };
		} else if (_isArray(start) && !_isArray(end)) {
			interpolators = [];
			l = start.length;
			il = l - 2;
			for (i = 1; i < l; i++) interpolators.push(interpolate(start[i - 1], start[i]));
			l--;
			func = function func(p) {
				p *= l;
				var i = Math.min(il, ~~p);
				return interpolators[i](p - i);
			};
			progress = end;
		} else if (!mutate) start = _merge(_isArray(start) ? [] : {}, start);
		if (!interpolators) {
			for (p in end) _addPropTween.call(master, start, p, "get", end[p]);
			func = function func(p) {
				return _renderPropTweens(p, master) || (isString ? start.p : start);
			};
		}
	}
	return _conditionalReturn(progress, func);
};
var _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
	var labels = timeline.labels, min = _bigNum$1, p, distance, label;
	for (p in labels) {
		distance = labels[p] - fromTime;
		if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
			label = p;
			min = distance;
		}
	}
	return label;
};
var _callback$1 = function _callback(animation, type, executeLazyFirst) {
	var v = animation.vars, callback = v[type], prevContext = _context$2, context = animation._ctx, params, scope, result;
	if (!callback) return;
	params = v[type + "Params"];
	scope = v.callbackScope || animation;
	executeLazyFirst && _lazyTweens.length && _lazyRender();
	context && (_context$2 = context);
	result = params ? callback.apply(scope, params) : callback.call(scope);
	_context$2 = prevContext;
	return result;
};
var _interrupt = function _interrupt(animation) {
	_removeFromParent(animation);
	animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting$1);
	animation.progress() < 1 && _callback$1(animation, "onInterrupt");
	return animation;
};
var _quickTween;
var _registerPluginQueue = [];
var _createPlugin = function _createPlugin(config) {
	if (!config) return;
	config = !config.name && config["default"] || config;
	if (_windowExists$2() || config.headless) {
		var name = config.name, isFunc = _isFunction$1(config), Plugin = name && !isFunc && config.init ? function() {
			this._props = [];
		} : config, instanceDefaults = {
			init: _emptyFunc,
			render: _renderPropTweens,
			add: _addPropTween,
			kill: _killPropTweensOf,
			modifier: _addPluginModifier,
			rawVars: 0
		}, statics = {
			targetTest: 0,
			get: 0,
			getSetter: _getSetter,
			aliases: {},
			register: 0
		};
		_wake();
		if (config !== Plugin) {
			if (_plugins[name]) return;
			_setDefaults$1(Plugin, _setDefaults$1(_copyExcluding(config, instanceDefaults), statics));
			_merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics)));
			_plugins[Plugin.prop = name] = Plugin;
			if (config.targetTest) {
				_harnessPlugins.push(Plugin);
				_reservedProps[name] = 1;
			}
			name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
		}
		_addGlobal(name, Plugin);
		config.register && config.register(gsap$2, Plugin, PropTween);
	} else _registerPluginQueue.push(config);
};
var _255 = 255;
var _colorLookup = {
	aqua: [
		0,
		_255,
		_255
	],
	lime: [
		0,
		_255,
		0
	],
	silver: [
		192,
		192,
		192
	],
	black: [
		0,
		0,
		0
	],
	maroon: [
		128,
		0,
		0
	],
	teal: [
		0,
		128,
		128
	],
	blue: [
		0,
		0,
		_255
	],
	navy: [
		0,
		0,
		128
	],
	white: [
		_255,
		_255,
		_255
	],
	olive: [
		128,
		128,
		0
	],
	yellow: [
		_255,
		_255,
		0
	],
	orange: [
		_255,
		165,
		0
	],
	gray: [
		128,
		128,
		128
	],
	purple: [
		128,
		0,
		128
	],
	green: [
		0,
		128,
		0
	],
	red: [
		_255,
		0,
		0
	],
	pink: [
		_255,
		192,
		203
	],
	cyan: [
		0,
		_255,
		_255
	],
	transparent: [
		_255,
		_255,
		_255,
		0
	]
};
var _hue = function _hue(h, m1, m2) {
	h += h < 0 ? 1 : h > 1 ? -1 : 0;
	return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
};
var splitColor = function splitColor(v, toHSL, forceAlpha) {
	var a = !v ? _colorLookup.black : _isNumber$1(v) ? [
		v >> 16,
		v >> 8 & _255,
		v & _255
	] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
	if (!a) {
		if (v.substr(-1) === ",") v = v.substr(0, v.length - 1);
		if (_colorLookup[v]) a = _colorLookup[v];
		else if (v.charAt(0) === "#") {
			if (v.length < 6) {
				r = v.charAt(1);
				g = v.charAt(2);
				b = v.charAt(3);
				v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
			}
			if (v.length === 9) {
				a = parseInt(v.substr(1, 6), 16);
				return [
					a >> 16,
					a >> 8 & _255,
					a & _255,
					parseInt(v.substr(7), 16) / 255
				];
			}
			v = parseInt(v.substr(1), 16);
			a = [
				v >> 16,
				v >> 8 & _255,
				v & _255
			];
		} else if (v.substr(0, 3) === "hsl") {
			a = wasHSL = v.match(_strictNumExp);
			if (!toHSL) {
				h = +a[0] % 360 / 360;
				s = +a[1] / 100;
				l = +a[2] / 100;
				g = l <= .5 ? l * (s + 1) : l + s - l * s;
				r = l * 2 - g;
				a.length > 3 && (a[3] *= 1);
				a[0] = _hue(h + 1 / 3, r, g);
				a[1] = _hue(h, r, g);
				a[2] = _hue(h - 1 / 3, r, g);
			} else if (~v.indexOf("=")) {
				a = v.match(_numExp);
				forceAlpha && a.length < 4 && (a[3] = 1);
				return a;
			}
		} else a = v.match(_strictNumExp) || _colorLookup.transparent;
		a = a.map(Number);
	}
	if (toHSL && !wasHSL) {
		r = a[0] / _255;
		g = a[1] / _255;
		b = a[2] / _255;
		max = Math.max(r, g, b);
		min = Math.min(r, g, b);
		l = (max + min) / 2;
		if (max === min) h = s = 0;
		else {
			d = max - min;
			s = l > .5 ? d / (2 - max - min) : d / (max + min);
			h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
			h *= 60;
		}
		a[0] = ~~(h + .5);
		a[1] = ~~(s * 100 + .5);
		a[2] = ~~(l * 100 + .5);
	}
	forceAlpha && a.length < 4 && (a[3] = 1);
	return a;
};
var _colorOrderData = function _colorOrderData(v) {
	var values = [], c = [], i = -1;
	v.split(_colorExp).forEach(function(v) {
		var a = v.match(_numWithUnitExp) || [];
		values.push.apply(values, a);
		c.push(i += a.length + 1);
	});
	values.c = c;
	return values;
};
var _formatColors = function _formatColors(s, toHSL, orderMatchData) {
	var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
	if (!colors) return s;
	colors = colors.map(function(color) {
		return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
	});
	if (orderMatchData) {
		d = _colorOrderData(s);
		c = orderMatchData.c;
		if (c.join(result) !== d.c.join(result)) {
			shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
			l = shell.length - 1;
			for (; i < l; i++) result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
		}
	}
	if (!shell) {
		shell = s.split(_colorExp);
		l = shell.length - 1;
		for (; i < l; i++) result += shell[i] + colors[i];
	}
	return result + shell[l];
};
var _colorExp = function() {
	var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
	for (p in _colorLookup) s += "|" + p + "\\b";
	return new RegExp(s + ")", "gi");
}();
var _hslExp = /hsl[a]?\(/;
var _colorStringFilter = function _colorStringFilter(a) {
	var combined = a.join(" "), toHSL;
	_colorExp.lastIndex = 0;
	if (_colorExp.test(combined)) {
		toHSL = _hslExp.test(combined);
		a[1] = _formatColors(a[1], toHSL);
		a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
		return true;
	}
};
var _tickerActive;
var _ticker = function() {
	var _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners = [], _id, _req, _raf, _self, _delta, _i, _tick = function _tick(v) {
		var elapsed = _getTime() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
		(elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
		_lastUpdate += elapsed;
		time = _lastUpdate - _startTime;
		overlap = time - _nextTime;
		if (overlap > 0 || manual) {
			frame = ++_self.frame;
			_delta = time - _self.time * 1e3;
			_self.time = time = time / 1e3;
			_nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
			dispatch = 1;
		}
		manual || (_id = _req(_tick));
		if (dispatch) for (_i = 0; _i < _listeners.length; _i++) _listeners[_i](time, _delta, frame, v);
	};
	_self = {
		time: 0,
		frame: 0,
		tick: function tick() {
			_tick(true);
		},
		deltaRatio: function deltaRatio(fps) {
			return _delta / (1e3 / (fps || 60));
		},
		wake: function wake() {
			if (_coreReady) {
				if (!_coreInitted$2 && _windowExists$2()) {
					_win$3 = _coreInitted$2 = window;
					_doc$3 = _win$3.document || {};
					_globals.gsap = gsap$2;
					(_win$3.gsapVersions || (_win$3.gsapVersions = [])).push(gsap$2.version);
					_install(_installScope || _win$3.GreenSockGlobals || !_win$3.gsap && _win$3 || {});
					_registerPluginQueue.forEach(_createPlugin);
				}
				_raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
				_id && _self.sleep();
				_req = _raf || function(f) {
					return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
				};
				_tickerActive = 1;
				_tick(2);
			}
		},
		sleep: function sleep() {
			(_raf ? cancelAnimationFrame : clearTimeout)(_id);
			_tickerActive = 0;
			_req = _emptyFunc;
		},
		lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
			_lagThreshold = threshold || Infinity;
			_adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
		},
		fps: function fps(_fps) {
			_gap = 1e3 / (_fps || 240);
			_nextTime = _self.time * 1e3 + _gap;
		},
		add: function add(callback, once, prioritize) {
			var func = once ? function(t, d, f, v) {
				callback(t, d, f, v);
				_self.remove(func);
			} : callback;
			_self.remove(callback);
			_listeners[prioritize ? "unshift" : "push"](func);
			_wake();
			return func;
		},
		remove: function remove(callback, i) {
			~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
		},
		_listeners
	};
	return _self;
}();
var _wake = function _wake() {
	return !_tickerActive && _ticker.wake();
};
var _easeMap = {};
var _customEaseExp = /^[\d.\-M][\d.\-,\s]/;
var _quotesExp = /["']/g;
var _parseObjectInString = function _parseObjectInString(value) {
	var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
	for (; i < l; i++) {
		val = split[i];
		index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
		parsedVal = val.substr(0, index);
		obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
		key = val.substr(index + 1).trim();
	}
	return obj;
};
var _valueInParentheses = function _valueInParentheses(value) {
	var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
	return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
};
var _configEaseFromString = function _configEaseFromString(name) {
	var split = (name + "").split("("), ease = _easeMap[split[0]];
	return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
};
var _invertEase = function _invertEase(ease) {
	return function(p) {
		return 1 - ease(1 - p);
	};
};
var _parseEase = function _parseEase(ease, defaultEase) {
	return !ease ? defaultEase : (_isFunction$1(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
};
var _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
	if (easeOut === void 0) easeOut = function easeOut(p) {
		return 1 - easeIn(1 - p);
	};
	if (easeInOut === void 0) easeInOut = function easeInOut(p) {
		return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
	};
	var ease = {
		easeIn,
		easeOut,
		easeInOut
	}, lowercaseName;
	_forEachName(names, function(name) {
		_easeMap[name] = _globals[name] = ease;
		_easeMap[lowercaseName = name.toLowerCase()] = easeOut;
		for (var p in ease) _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
	});
	return ease;
};
var _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
	return function(p) {
		return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
	};
};
var _configElastic = function _configElastic(type, amplitude, period) {
	var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut(p) {
		return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
	}, ease = type === "out" ? easeOut : type === "in" ? function(p) {
		return 1 - easeOut(1 - p);
	} : _easeInOutFromOut(easeOut);
	p2 = _2PI / p2;
	ease.config = function(amplitude, period) {
		return _configElastic(type, amplitude, period);
	};
	return ease;
};
var _configBack = function _configBack(type, overshoot) {
	if (overshoot === void 0) overshoot = 1.70158;
	var easeOut = function easeOut(p) {
		return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
	}, ease = type === "out" ? easeOut : type === "in" ? function(p) {
		return 1 - easeOut(1 - p);
	} : _easeInOutFromOut(easeOut);
	ease.config = function(overshoot) {
		return _configBack(type, overshoot);
	};
	return ease;
};
_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
	var power = i < 5 ? i + 1 : i;
	_insertEase(name + ",Power" + (power - 1), i ? function(p) {
		return Math.pow(p, power);
	} : function(p) {
		return p;
	}, function(p) {
		return 1 - Math.pow(1 - p, power);
	}, function(p) {
		return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
	});
});
_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
(function(n, c) {
	var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut(p) {
		return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
	};
	_insertEase("Bounce", function(p) {
		return 1 - easeOut(1 - p);
	}, easeOut);
})(7.5625, 2.75);
_insertEase("Expo", function(p) {
	return Math.pow(2, 10 * (p - 1)) * p + p * p * p * p * p * p * (1 - p);
});
_insertEase("Circ", function(p) {
	return -(_sqrt(1 - p * p) - 1);
});
_insertEase("Sine", function(p) {
	return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});
_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = { config: function config(steps, immediateStart) {
	if (steps === void 0) steps = 1;
	var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
	return function(p) {
		return ((p2 * _clamp$1(0, max, p) | 0) + p3) * p1;
	};
} };
_defaults$1.ease = _easeMap["quad.out"];
_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
	return _callbackNames += name + "," + name + "Params,";
});
var GSCache = function GSCache(target, harness) {
	this.id = _gsID++;
	target._gsap = this;
	this.target = target;
	this.harness = harness;
	this.get = harness ? harness.get : _getProperty;
	this.set = harness ? harness.getSetter : _getSetter;
};
var Animation = /*#__PURE__*/ function() {
	function Animation(vars) {
		this.vars = vars;
		this._delay = +vars.delay || 0;
		if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
			this._rDelay = vars.repeatDelay || 0;
			this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
		}
		this._ts = 1;
		_setDuration(this, +vars.duration, 1, 1);
		this.data = vars.data;
		if (_context$2) {
			this._ctx = _context$2;
			_context$2.data.push(this);
		}
		_tickerActive || _ticker.wake();
	}
	var _proto = Animation.prototype;
	_proto.delay = function delay(value) {
		if (value || value === 0) {
			this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
			this._delay = value;
			return this;
		}
		return this._delay;
	};
	_proto.duration = function duration(value) {
		return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
	};
	_proto.totalDuration = function totalDuration(value) {
		if (!arguments.length) return this._tDur;
		this._dirty = 0;
		return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
	};
	_proto.totalTime = function totalTime(_totalTime, suppressEvents) {
		_wake();
		if (!arguments.length) return this._tTime;
		var parent = this._dp;
		if (parent && parent.smoothChildTiming && this._ts) {
			_alignPlayhead(this, _totalTime);
			!parent._dp || parent.parent || _postAddChecks(parent, this);
			while (parent && parent.parent) {
				if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) parent.totalTime(parent._tTime, true);
				parent = parent.parent;
			}
			if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) _addToTimeline(this._dp, this, this._start - this._delay);
		}
		if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !this._initted && this._dur && _totalTime || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
			this._ts || (this._pTime = _totalTime);
			_lazySafeRender(this, _totalTime, suppressEvents);
		}
		return this;
	};
	_proto.time = function time(value, suppressEvents) {
		return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
	};
	_proto.totalProgress = function totalProgress(value, suppressEvents) {
		return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
	};
	_proto.progress = function progress(value, suppressEvents) {
		return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
	};
	_proto.iteration = function iteration(value, suppressEvents) {
		var cycleDuration = this.duration() + this._rDelay;
		return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
	};
	_proto.timeScale = function timeScale(value, suppressEvents) {
		if (!arguments.length) return this._rts === -_tinyNum ? 0 : this._rts;
		if (this._rts === value) return this;
		var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
		this._rts = +value || 0;
		this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
		this.totalTime(_clamp$1(-Math.abs(this._delay), this.totalDuration(), tTime), suppressEvents !== false);
		_setEnd(this);
		return _recacheAncestors(this);
	};
	_proto.paused = function paused(value) {
		if (!arguments.length) return this._ps;
		if (this._ps !== value) {
			this._ps = value;
			if (value) {
				this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
				this._ts = this._act = 0;
			} else {
				_wake();
				this._ts = this._rts;
				this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
			}
		}
		return this;
	};
	_proto.startTime = function startTime(value) {
		if (arguments.length) {
			this._start = _roundPrecise(value);
			var parent = this.parent || this._dp;
			parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, this._start - this._delay);
			return this;
		}
		return this._start;
	};
	_proto.endTime = function endTime(includeRepeats) {
		return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
	};
	_proto.rawTime = function rawTime(wrapRepeats) {
		var parent = this.parent || this._dp;
		return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
	};
	_proto.revert = function revert(config) {
		if (config === void 0) config = _revertConfig;
		var prevIsReverting = _reverting$1;
		_reverting$1 = config;
		if (_isRevertWorthy(this)) {
			this.timeline && this.timeline.revert(config);
			this.totalTime(-.01, config.suppressEvents);
		}
		this.data !== "nested" && config.kill !== false && this.kill();
		_reverting$1 = prevIsReverting;
		return this;
	};
	_proto.globalTime = function globalTime(rawTime) {
		var animation = this, time = arguments.length ? rawTime : animation.rawTime();
		while (animation) {
			time = animation._start + time / (Math.abs(animation._ts) || 1);
			animation = animation._dp;
		}
		return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time;
	};
	_proto.repeat = function repeat(value) {
		if (arguments.length) {
			this._repeat = value === Infinity ? -2 : value;
			return _onUpdateTotalDuration(this);
		}
		return this._repeat === -2 ? Infinity : this._repeat;
	};
	_proto.repeatDelay = function repeatDelay(value) {
		if (arguments.length) {
			var time = this._time;
			this._rDelay = value;
			_onUpdateTotalDuration(this);
			return time ? this.time(time) : this;
		}
		return this._rDelay;
	};
	_proto.yoyo = function yoyo(value) {
		if (arguments.length) {
			this._yoyo = value;
			return this;
		}
		return this._yoyo;
	};
	_proto.seek = function seek(position, suppressEvents) {
		return this.totalTime(_parsePosition$1(this, position), _isNotFalse(suppressEvents));
	};
	_proto.restart = function restart(includeDelay, suppressEvents) {
		this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
		this._dur || (this._zTime = -_tinyNum);
		return this;
	};
	_proto.play = function play(from, suppressEvents) {
		from != null && this.seek(from, suppressEvents);
		return this.reversed(false).paused(false);
	};
	_proto.reverse = function reverse(from, suppressEvents) {
		from != null && this.seek(from || this.totalDuration(), suppressEvents);
		return this.reversed(true).paused(false);
	};
	_proto.pause = function pause(atTime, suppressEvents) {
		atTime != null && this.seek(atTime, suppressEvents);
		return this.paused(true);
	};
	_proto.resume = function resume() {
		return this.paused(false);
	};
	_proto.reversed = function reversed(value) {
		if (arguments.length) {
			!!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
			return this;
		}
		return this._rts < 0;
	};
	_proto.invalidate = function invalidate() {
		this._initted = this._act = 0;
		this._zTime = -_tinyNum;
		return this;
	};
	_proto.isActive = function isActive() {
		var parent = this.parent || this._dp, start = this._start, rawTime;
		return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
	};
	_proto.eventCallback = function eventCallback(type, callback, params) {
		var vars = this.vars;
		if (arguments.length > 1) {
			if (!callback) delete vars[type];
			else {
				vars[type] = callback;
				params && (vars[type + "Params"] = params);
				type === "onUpdate" && (this._onUpdate = callback);
			}
			return this;
		}
		return vars[type];
	};
	_proto.then = function then(onFulfilled) {
		var self = this, prevProm = self._prom;
		return new Promise(function(resolve) {
			var f = _isFunction$1(onFulfilled) ? onFulfilled : _passThrough$1, _resolve = function _resolve() {
				var _then = self.then;
				self.then = null;
				prevProm && prevProm();
				_isFunction$1(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
				resolve(f);
				self.then = _then;
			};
			if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) _resolve();
			else self._prom = _resolve;
		});
	};
	_proto.kill = function kill() {
		_interrupt(this);
	};
	return Animation;
}();
_setDefaults$1(Animation.prototype, {
	_time: 0,
	_start: 0,
	_end: 0,
	_tTime: 0,
	_tDur: 0,
	_dirty: 0,
	_repeat: 0,
	_yoyo: false,
	parent: null,
	_initted: false,
	_rDelay: 0,
	_ts: 1,
	_dp: 0,
	ratio: 0,
	_zTime: -_tinyNum,
	_prom: 0,
	_ps: false,
	_rts: 1
});
var Timeline = /*#__PURE__*/ function(_Animation) {
	_inheritsLoose(Timeline, _Animation);
	function Timeline(vars, position) {
		var _this;
		if (vars === void 0) vars = {};
		_this = _Animation.call(this, vars) || this;
		_this.labels = {};
		_this.smoothChildTiming = !!vars.smoothChildTiming;
		_this.autoRemoveChildren = !!vars.autoRemoveChildren;
		_this._sort = _isNotFalse(vars.sortChildren);
		_globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
		vars.reversed && _this.reverse();
		vars.paused && _this.paused(true);
		vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
		return _this;
	}
	var _proto2 = Timeline.prototype;
	_proto2.to = function to(targets, vars, position) {
		_createTweenType(0, arguments, this);
		return this;
	};
	_proto2.from = function from(targets, vars, position) {
		_createTweenType(1, arguments, this);
		return this;
	};
	_proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
		_createTweenType(2, arguments, this);
		return this;
	};
	_proto2.set = function set(targets, vars, position) {
		vars.duration = 0;
		vars.parent = this;
		_inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
		vars.immediateRender = !!vars.immediateRender;
		new Tween(targets, vars, _parsePosition$1(this, position), 1);
		return this;
	};
	_proto2.call = function call(callback, params, position) {
		return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
	};
	_proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
		vars.duration = duration;
		vars.stagger = vars.stagger || stagger;
		vars.onComplete = onCompleteAll;
		vars.onCompleteParams = onCompleteAllParams;
		vars.parent = this;
		new Tween(targets, vars, _parsePosition$1(this, position));
		return this;
	};
	_proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
		vars.runBackwards = 1;
		_inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
		return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
	};
	_proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
		toVars.startAt = fromVars;
		_inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
		return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
	};
	_proto2.render = function render(totalTime, suppressEvents, force) {
		var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
		this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
		if (tTime !== this._tTime || force || crossingStart) {
			if (prevTime !== this._time && dur) {
				tTime += this._time - prevTime;
				totalTime += this._time - prevTime;
			}
			time = tTime;
			prevStart = this._start;
			timeScale = this._ts;
			prevPaused = !timeScale;
			if (crossingStart) {
				dur || (prevTime = this._zTime);
				(totalTime || !suppressEvents) && (this._zTime = totalTime);
			}
			if (this._repeat) {
				yoyo = this._yoyo;
				cycleDuration = dur + this._rDelay;
				if (this._repeat < -1 && totalTime < 0) return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
				time = _roundPrecise(tTime % cycleDuration);
				if (tTime === tDur) {
					iteration = this._repeat;
					time = dur;
				} else {
					prevIteration = _roundPrecise(tTime / cycleDuration);
					iteration = ~~prevIteration;
					if (iteration && iteration === prevIteration) {
						time = dur;
						iteration--;
					}
					time > dur && (time = dur);
				}
				prevIteration = _animationCycle(this._tTime, cycleDuration);
				!prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration);
				if (yoyo && iteration & 1) {
					time = dur - time;
					isYoyo = 1;
				}
				if (iteration !== prevIteration && !this._lock) {
					var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
					iteration < prevIteration && (rewinding = !rewinding);
					prevTime = rewinding ? 0 : tTime % dur ? dur : tTime;
					this._lock = 1;
					this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
					this._tTime = tTime;
					!suppressEvents && this.parent && _callback$1(this, "onRepeat");
					if (this.vars.repeatRefresh && !isYoyo) {
						this.invalidate()._lock = 1;
						prevIteration = iteration;
					}
					if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
					dur = this._dur;
					tDur = this._tDur;
					if (doesWrap) {
						this._lock = 2;
						prevTime = rewinding ? dur : -1e-4;
						this.render(prevTime, true);
						this.vars.repeatRefresh && !isYoyo && this.invalidate();
					}
					this._lock = 0;
					if (!this._ts && !prevPaused) return this;
				}
			}
			if (this._hasPause && !this._forcing && this._lock < 2) {
				pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
				if (pauseTween) tTime -= time - (time = pauseTween._start);
			}
			this._tTime = tTime;
			this._time = time;
			this._act = !!timeScale;
			if (!this._initted) {
				this._onUpdate = this.vars.onUpdate;
				this._initted = 1;
				this._zTime = totalTime;
				prevTime = 0;
			}
			if (!prevTime && tTime && dur && !suppressEvents && !prevIteration) {
				_callback$1(this, "onStart");
				if (this._tTime !== tTime) return this;
			}
			if (time >= prevTime && totalTime >= 0) {
				child = this._first;
				while (child) {
					next = child._next;
					if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
						if (child.parent !== this) return this.render(totalTime, suppressEvents, force);
						child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
						if (time !== this._time || !this._ts && !prevPaused) {
							pauseTween = 0;
							next && (tTime += this._zTime = -_tinyNum);
							break;
						}
					}
					child = next;
				}
			} else {
				child = this._last;
				var adjustedTime = totalTime < 0 ? totalTime : time;
				while (child) {
					next = child._prev;
					if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
						if (child.parent !== this) return this.render(totalTime, suppressEvents, force);
						child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting$1 && _isRevertWorthy(child));
						if (time !== this._time || !this._ts && !prevPaused) {
							pauseTween = 0;
							next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
							break;
						}
					}
					child = next;
				}
			}
			if (pauseTween && !suppressEvents) {
				this.pause();
				pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
				if (this._ts) {
					this._start = prevStart;
					_setEnd(this);
					return this.render(totalTime, suppressEvents, force);
				}
			}
			this._onUpdate && !suppressEvents && _callback$1(this, "onUpdate", true);
			if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
				if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
					if (!this._lock) {
						(totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
						if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
							_callback$1(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
							this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
						}
					}
				}
			}
		}
		return this;
	};
	_proto2.add = function add(child, position) {
		var _this2 = this;
		_isNumber$1(position) || (position = _parsePosition$1(this, position, child));
		if (!(child instanceof Animation)) {
			if (_isArray(child)) {
				child.forEach(function(obj) {
					return _this2.add(obj, position);
				});
				return this;
			}
			if (_isString$1(child)) return this.addLabel(child, position);
			if (_isFunction$1(child)) child = Tween.delayedCall(0, child);
			else return this;
		}
		return this !== child ? _addToTimeline(this, child, position) : this;
	};
	_proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
		if (nested === void 0) nested = true;
		if (tweens === void 0) tweens = true;
		if (timelines === void 0) timelines = true;
		if (ignoreBeforeTime === void 0) ignoreBeforeTime = -_bigNum$1;
		var a = [], child = this._first;
		while (child) {
			if (child._start >= ignoreBeforeTime) {
				if (child instanceof Tween) tweens && a.push(child);
				else {
					timelines && a.push(child);
					nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
				}
			}
			child = child._next;
		}
		return a;
	};
	_proto2.getById = function getById(id) {
		var animations = this.getChildren(1, 1, 1), i = animations.length;
		while (i--) if (animations[i].vars.id === id) return animations[i];
	};
	_proto2.remove = function remove(child) {
		if (_isString$1(child)) return this.removeLabel(child);
		if (_isFunction$1(child)) return this.killTweensOf(child);
		child.parent === this && _removeLinkedListItem(this, child);
		if (child === this._recent) this._recent = this._last;
		return _uncache(this);
	};
	_proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
		if (!arguments.length) return this._tTime;
		this._forcing = 1;
		if (!this._dp && this._ts) this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
		_Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
		this._forcing = 0;
		return this;
	};
	_proto2.addLabel = function addLabel(label, position) {
		this.labels[label] = _parsePosition$1(this, position);
		return this;
	};
	_proto2.removeLabel = function removeLabel(label) {
		delete this.labels[label];
		return this;
	};
	_proto2.addPause = function addPause(position, callback, params) {
		var t = Tween.delayedCall(0, callback || _emptyFunc, params);
		t.data = "isPause";
		this._hasPause = 1;
		return _addToTimeline(this, t, _parsePosition$1(this, position));
	};
	_proto2.removePause = function removePause(position) {
		var child = this._first;
		position = _parsePosition$1(this, position);
		while (child) {
			if (child._start === position && child.data === "isPause") _removeFromParent(child);
			child = child._next;
		}
	};
	_proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
		var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
		while (i--) _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
		return this;
	};
	_proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
		var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber$1(onlyActive), children;
		while (child) {
			if (child instanceof Tween) {
				if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) a.push(child);
			} else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) a.push.apply(a, children);
			child = child._next;
		}
		return a;
	};
	_proto2.tweenTo = function tweenTo(position, vars) {
		vars = vars || {};
		var tl = this, endTime = _parsePosition$1(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults$1({
			ease: vars.ease || "none",
			lazy: false,
			immediateRender: false,
			time: endTime,
			overwrite: "auto",
			duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
			onStart: function onStart() {
				tl.pause();
				if (!initted) {
					var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
					tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
					initted = 1;
				}
				_onStart && _onStart.apply(tween, onStartParams || []);
			}
		}, vars));
		return immediateRender ? tween.render(0) : tween;
	};
	_proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
		return this.tweenTo(toPosition, _setDefaults$1({ startAt: { time: _parsePosition$1(this, fromPosition) } }, vars));
	};
	_proto2.recent = function recent() {
		return this._recent;
	};
	_proto2.nextLabel = function nextLabel(afterTime) {
		if (afterTime === void 0) afterTime = this._time;
		return _getLabelInDirection(this, _parsePosition$1(this, afterTime));
	};
	_proto2.previousLabel = function previousLabel(beforeTime) {
		if (beforeTime === void 0) beforeTime = this._time;
		return _getLabelInDirection(this, _parsePosition$1(this, beforeTime), 1);
	};
	_proto2.currentLabel = function currentLabel(value) {
		return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
	};
	_proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
		if (ignoreBeforeTime === void 0) ignoreBeforeTime = 0;
		var child = this._first, labels = this.labels, p;
		amount = _roundPrecise(amount);
		while (child) {
			if (child._start >= ignoreBeforeTime) {
				child._start += amount;
				child._end += amount;
			}
			child = child._next;
		}
		if (adjustLabels) {
			for (p in labels) if (labels[p] >= ignoreBeforeTime) labels[p] += amount;
		}
		return _uncache(this);
	};
	_proto2.invalidate = function invalidate(soft) {
		var child = this._first;
		this._lock = 0;
		while (child) {
			child.invalidate(soft);
			child = child._next;
		}
		return _Animation.prototype.invalidate.call(this, soft);
	};
	_proto2.clear = function clear(includeLabels) {
		if (includeLabels === void 0) includeLabels = true;
		var child = this._first, next;
		while (child) {
			next = child._next;
			this.remove(child);
			child = next;
		}
		this._dp && (this._time = this._tTime = this._pTime = 0);
		includeLabels && (this.labels = {});
		return _uncache(this);
	};
	_proto2.totalDuration = function totalDuration(value) {
		var max = 0, self = this, child = self._last, prevStart = _bigNum$1, prev, start, parent;
		if (arguments.length) return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
		if (self._dirty) {
			parent = self.parent;
			while (child) {
				prev = child._prev;
				child._dirty && child.totalDuration();
				start = child._start;
				if (start > prevStart && self._sort && child._ts && !self._lock) {
					self._lock = 1;
					_addToTimeline(self, child, start - child._delay, 1)._lock = 0;
				} else prevStart = start;
				if (start < 0 && child._ts) {
					max -= start;
					if (!parent && !self._dp || parent && parent.smoothChildTiming) {
						self._start += _roundPrecise(start / self._ts);
						self._time -= start;
						self._tTime -= start;
					}
					self.shiftChildren(-start, false, -Infinity);
					prevStart = 0;
				}
				child._end > max && child._ts && (max = child._end);
				child = prev;
			}
			_setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
			self._dirty = 0;
		}
		return self._tDur;
	};
	Timeline.updateRoot = function updateRoot(time) {
		if (_globalTimeline._ts) {
			_lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
			_lastRenderedFrame = _ticker.frame;
		}
		if (_ticker.frame >= _nextGCFrame) {
			_nextGCFrame += _config.autoSleep || 120;
			var child = _globalTimeline._first;
			if (!child || !child._ts) {
				if (_config.autoSleep && _ticker._listeners.length < 2) {
					while (child && !child._ts) child = child._next;
					child || _ticker.sleep();
				}
			}
		}
	};
	return Timeline;
}(Animation);
_setDefaults$1(Timeline.prototype, {
	_lock: 0,
	_hasPause: 0,
	_forcing: 0
});
var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
	var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
	pt.b = start;
	pt.e = end;
	start += "";
	end += "";
	if (hasRandom = ~end.indexOf("random(")) end = _replaceRandom(end);
	if (stringFilter) {
		a = [start, end];
		stringFilter(a, target, prop);
		start = a[0];
		end = a[1];
	}
	startNums = start.match(_complexStringNumExp) || [];
	while (result = _complexStringNumExp.exec(end)) {
		endNum = result[0];
		chunk = end.substring(index, result.index);
		if (color) color = (color + 1) % 5;
		else if (chunk.substr(-5) === "rgba(") color = 1;
		if (endNum !== startNums[matchIndex++]) {
			startNum = parseFloat(startNums[matchIndex - 1]) || 0;
			pt._pt = {
				_next: pt._pt,
				p: chunk || matchIndex === 1 ? chunk : ",",
				s: startNum,
				c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
				m: color && color < 4 ? Math.round : 0
			};
			index = _complexStringNumExp.lastIndex;
		}
	}
	pt.c = index < end.length ? end.substring(index, end.length) : "";
	pt.fp = funcParam;
	if (_relExp.test(end) || hasRandom) pt.e = 0;
	this._pt = pt;
	return pt;
};
var _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
	_isFunction$1(end) && (end = end(index || 0, target, targets));
	var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction$1(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction$1(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction$1(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
	if (_isString$1(end)) {
		if (~end.indexOf("random(")) end = _replaceRandom(end);
		if (end.charAt(1) === "=") {
			pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
			if (pt || pt === 0) end = pt;
		}
	}
	if (!optional || parsedStart !== end || _forceAllPropTweens) {
		if (!isNaN(parsedStart * end) && end !== "") {
			pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
			funcParam && (pt.fp = funcParam);
			modifier && pt.modifier(modifier, this, target);
			return this._pt = pt;
		}
		!currentValue && !(prop in target) && _missingPlugin(prop, end);
		return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
	}
};
var _processVars = function _processVars(vars, index, target, targets, tween) {
	_isFunction$1(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
	if (!_isObject$1(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) return _isString$1(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
	var copy = {}, p;
	for (p in vars) copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
	return copy;
};
var _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
	var plugin, pt, ptLookup, i;
	if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
		tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
		if (tween !== _quickTween) {
			ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
			i = plugin._props.length;
			while (i--) ptLookup[plugin._props[i]] = pt;
		}
	}
	return plugin;
};
var _overwritingTween;
var _forceAllPropTweens;
var _initTween = function _initTween(tween, time, tTime) {
	var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites$1, tl = tween.timeline, reverseEase = vars.easeReverse || yoyoEase, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
	tl && (!keyframes || !ease) && (ease = "none");
	tween._ease = _parseEase(ease, _defaults$1.ease);
	tween._rEase = reverseEase && (_parseEase(reverseEase) || tween._ease);
	tween._from = !tl && !!vars.runBackwards;
	if (tween._from) tween.ratio = 1;
	if (!tl || keyframes && !vars.stagger) {
		harness = targets[0] ? _getCache(targets[0]).harness : 0;
		harnessVars = harness && vars[harness.prop];
		cleanVars = _copyExcluding(vars, _reservedProps);
		if (prevStartAt) {
			prevStartAt._zTime < 0 && prevStartAt.progress(1);
			time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
			prevStartAt._lazy = 0;
		}
		if (startAt) {
			_removeFromParent(tween._startAt = Tween.set(targets, _setDefaults$1({
				data: "isStart",
				overwrite: false,
				parent,
				immediateRender: true,
				lazy: !prevStartAt && _isNotFalse(lazy),
				startAt: null,
				delay: 0,
				onUpdate: onUpdate && function() {
					return _callback$1(tween, "onUpdate");
				},
				stagger: 0
			}, startAt)));
			tween._startAt._dp = 0;
			tween._startAt._sat = tween;
			time < 0 && (_reverting$1 || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);
			if (immediateRender) {
				if (dur && time <= 0 && tTime <= 0) {
					time && (tween._zTime = time);
					return;
				}
			}
		} else if (runBackwards && dur) {
			if (!prevStartAt) {
				time && (immediateRender = false);
				p = _setDefaults$1({
					overwrite: false,
					data: "isFromStart",
					lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
					immediateRender,
					stagger: 0,
					parent
				}, cleanVars);
				harnessVars && (p[harness.prop] = harnessVars);
				_removeFromParent(tween._startAt = Tween.set(targets, p));
				tween._startAt._dp = 0;
				tween._startAt._sat = tween;
				time < 0 && (_reverting$1 ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
				tween._zTime = time;
				if (!immediateRender) _initTween(tween._startAt, _tinyNum, _tinyNum);
				else if (!time) return;
			}
		}
		tween._pt = tween._ptCache = 0;
		lazy = dur && _isNotFalse(lazy) || lazy && !dur;
		for (i = 0; i < targets.length; i++) {
			target = targets[i];
			gsData = target._gsap || _harness(targets)[i]._gsap;
			tween._ptLookup[i] = ptLookup = {};
			_lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
			index = fullTargets === targets ? i : fullTargets.indexOf(target);
			if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
				tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
				plugin._props.forEach(function(name) {
					ptLookup[name] = pt;
				});
				plugin.priority && (hasPriority = 1);
			}
			if (!harness || harnessVars) for (p in cleanVars) if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) plugin.priority && (hasPriority = 1);
			else ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
			tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
			if (autoOverwrite && tween._pt) {
				_overwritingTween = tween;
				_globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));
				overwritten = !tween.parent;
				_overwritingTween = 0;
			}
			tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
		}
		hasPriority && _sortPropTweensByPriority(tween);
		tween._onInit && tween._onInit(tween);
	}
	tween._onUpdate = onUpdate;
	tween._initted = (!tween._op || tween._pt) && !overwritten;
	keyframes && time <= 0 && tl.render(_bigNum$1, true, true);
};
var _updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time, skipRecursion) {
	var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i;
	if (!ptCache) {
		ptCache = tween._ptCache[property] = [];
		lookup = tween._ptLookup;
		i = tween._targets.length;
		while (i--) {
			pt = lookup[i][property];
			if (pt && pt.d && pt.d._pt) {
				pt = pt.d._pt;
				while (pt && pt.p !== property && pt.fp !== property) pt = pt._next;
			}
			if (!pt) {
				_forceAllPropTweens = 1;
				tween.vars[property] = "+=0";
				_initTween(tween, time);
				_forceAllPropTweens = 0;
				return skipRecursion ? _warn(property + " not eligible for reset. Try splitting into individual properties") : 1;
			}
			ptCache.push(pt);
		}
	}
	i = ptCache.length;
	while (i--) {
		rootPT = ptCache[i];
		pt = rootPT._pt || rootPT;
		pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
		pt.c = value - pt.s;
		rootPT.e && (rootPT.e = _round$1(value) + getUnit(rootPT.e));
		rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
	}
};
var _addAliasesToVars = function _addAliasesToVars(targets, vars) {
	var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
	if (!propertyAliases) return vars;
	copy = _merge({}, vars);
	for (p in propertyAliases) if (p in copy) {
		aliases = propertyAliases[p].split(",");
		i = aliases.length;
		while (i--) copy[aliases[i]] = copy[p];
	}
	return copy;
};
var _parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
	var ease = obj.ease || easeEach || "power1.inOut", p, a;
	if (_isArray(obj)) {
		a = allProps[prop] || (allProps[prop] = []);
		obj.forEach(function(value, i) {
			return a.push({
				t: i / (obj.length - 1) * 100,
				v: value,
				e: ease
			});
		});
	} else for (p in obj) {
		a = allProps[p] || (allProps[p] = []);
		p === "ease" || a.push({
			t: parseFloat(prop),
			v: obj[p],
			e: ease
		});
	}
};
var _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
	return _isFunction$1(value) ? value.call(tween, i, target, targets) : _isString$1(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
};
var _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert";
var _staggerPropsToSkip = {};
_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
	return _staggerPropsToSkip[name] = 1;
});
var Tween = /*#__PURE__*/ function(_Animation2) {
	_inheritsLoose(Tween, _Animation2);
	function Tween(targets, vars, position, skipInherit) {
		var _this3;
		if (typeof vars === "number") {
			position.duration = vars;
			vars = position;
			position = null;
		}
		_this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
		var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber$1(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
		_this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
		_this3._ptLookup = [];
		_this3._overwrite = overwrite;
		if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
			vars = _this3.vars;
			var easeReverse = vars.easeReverse || vars.yoyoEase;
			tl = _this3.timeline = new Timeline({
				data: "nested",
				defaults: defaults || {},
				targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
			});
			tl.kill();
			tl.parent = tl._dp = _assertThisInitialized(_this3);
			tl._start = 0;
			if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
				l = parsedTargets.length;
				staggerFunc = stagger && distribute(stagger);
				if (_isObject$1(stagger)) {
					for (p in stagger) if (~_staggerTweenProps.indexOf(p)) {
						staggerVarsToMerge || (staggerVarsToMerge = {});
						staggerVarsToMerge[p] = stagger[p];
					}
				}
				for (i = 0; i < l; i++) {
					copy = _copyExcluding(vars, _staggerPropsToSkip);
					copy.stagger = 0;
					easeReverse && (copy.easeReverse = easeReverse);
					staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
					curTarget = parsedTargets[i];
					copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
					copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
					if (!stagger && l === 1 && copy.delay) {
						_this3._delay = delay = copy.delay;
						_this3._start += delay;
						copy.delay = 0;
					}
					tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
					tl._ease = _easeMap.none;
				}
				tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
			} else if (keyframes) {
				_inheritDefaults(_setDefaults$1(tl.vars.defaults, { ease: "none" }));
				tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
				var time = 0, a, kf, v;
				if (_isArray(keyframes)) {
					keyframes.forEach(function(frame) {
						return tl.to(parsedTargets, frame, ">");
					});
					tl.duration();
				} else {
					copy = {};
					for (p in keyframes) p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
					for (p in copy) {
						a = copy[p].sort(function(a, b) {
							return a.t - b.t;
						});
						time = 0;
						for (i = 0; i < a.length; i++) {
							kf = a[i];
							v = {
								ease: kf.e,
								duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
							};
							v[p] = kf.v;
							tl.to(parsedTargets, v, time);
							time += v.duration;
						}
					}
					tl.duration() < duration && tl.to({}, { duration: duration - tl.duration() });
				}
			}
			duration || _this3.duration(duration = tl.duration());
		} else _this3.timeline = 0;
		if (overwrite === true && !_suppressOverwrites$1) {
			_overwritingTween = _assertThisInitialized(_this3);
			_globalTimeline.killTweensOf(parsedTargets);
			_overwritingTween = 0;
		}
		_addToTimeline(parent, _assertThisInitialized(_this3), position);
		vars.reversed && _this3.reverse();
		vars.paused && _this3.paused(true);
		if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
			_this3._tTime = -_tinyNum;
			_this3.render(Math.max(0, -delay) || 0);
		}
		scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
		return _this3;
	}
	var _proto3 = Tween.prototype;
	_proto3.render = function render(totalTime, suppressEvents, force) {
		var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline;
		if (!dur) _renderZeroDurationTween(this, totalTime, suppressEvents, force);
		else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative || this._lazy) {
			time = tTime;
			timeline = this.timeline;
			if (this._repeat) {
				cycleDuration = dur + this._rDelay;
				if (this._repeat < -1 && isNegative) return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
				time = _roundPrecise(tTime % cycleDuration);
				if (tTime === tDur) {
					iteration = this._repeat;
					time = dur;
				} else {
					prevIteration = _roundPrecise(tTime / cycleDuration);
					iteration = ~~prevIteration;
					if (iteration && iteration === prevIteration) {
						time = dur;
						iteration--;
					} else if (time > dur) time = dur;
				}
				isYoyo = this._yoyo && iteration & 1;
				if (isYoyo) time = dur - time;
				prevIteration = _animationCycle(this._tTime, cycleDuration);
				if (time === prevTime && !force && this._initted && iteration === prevIteration) {
					this._tTime = tTime;
					return this;
				}
				if (iteration !== prevIteration) {
					if (this.vars.repeatRefresh && !isYoyo && !this._lock && time !== cycleDuration && this._initted) {
						this._lock = force = 1;
						this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
					}
				}
			}
			if (!this._initted) {
				if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
					this._tTime = 0;
					return this;
				}
				if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) return this;
				if (dur !== this._dur) return this.render(totalTime, suppressEvents, force);
			}
			if (this._rEase) {
				var inv = time < prevTime;
				if (inv !== this._inv) {
					var segDur = inv ? prevTime : dur - prevTime;
					this._inv = inv;
					if (this._from) this.ratio = 1 - this.ratio;
					this._invRatio = this.ratio;
					this._invTime = prevTime;
					this._invRecip = segDur ? (inv ? -1 : 1) / segDur : 0;
					this._invScale = inv ? -this.ratio : 1 - this.ratio;
					this._invEase = inv ? this._rEase : this._ease;
				}
				this.ratio = ratio = this._invRatio + this._invScale * this._invEase((time - this._invTime) * this._invRecip);
			} else this.ratio = ratio = this._ease(time / dur);
			if (this._from) this.ratio = ratio = 1 - ratio;
			this._tTime = tTime;
			this._time = time;
			if (!this._act && this._ts) {
				this._act = 1;
				this._lazy = 0;
			}
			if (!prevTime && tTime && !suppressEvents && !prevIteration) {
				_callback$1(this, "onStart");
				if (this._tTime !== tTime) return this;
			}
			pt = this._pt;
			while (pt) {
				pt.r(ratio, pt.d);
				pt = pt._next;
			}
			timeline && timeline.render(totalTime < 0 ? totalTime : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
			if (this._onUpdate && !suppressEvents) {
				isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);
				_callback$1(this, "onUpdate");
			}
			this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback$1(this, "onRepeat");
			if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
				isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
				(totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
				if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
					_callback$1(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
					this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
				}
			}
		}
		return this;
	};
	_proto3.targets = function targets() {
		return this._targets;
	};
	_proto3.invalidate = function invalidate(soft) {
		(!soft || !this.vars.runBackwards) && (this._startAt = 0);
		this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
		this._ptLookup = [];
		this.timeline && this.timeline.invalidate(soft);
		return _Animation2.prototype.invalidate.call(this, soft);
	};
	_proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
		_tickerActive || _ticker.wake();
		this._ts || this.play();
		var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
		this._initted || _initTween(this, time);
		ratio = this._ease(time / this._dur);
		if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time, skipRecursion)) return this.resetTo(property, value, start, startIsRelative, 1);
		_alignPlayhead(this, 0);
		this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
		return this.render(0);
	};
	_proto3.kill = function kill(targets, vars) {
		if (vars === void 0) vars = "all";
		if (!targets && (!vars || vars === "all")) {
			this._lazy = this._pt = 0;
			this.parent ? _interrupt(this) : this.scrollTrigger && this.scrollTrigger.kill(!!_reverting$1);
			return this;
		}
		if (this.timeline) {
			var tDur = this.timeline.totalDuration();
			this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
			this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
			return this;
		}
		var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
		if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
			vars === "all" && (this._pt = 0);
			return _interrupt(this);
		}
		overwrittenProps = this._op = this._op || [];
		if (vars !== "all") {
			if (_isString$1(vars)) {
				p = {};
				_forEachName(vars, function(name) {
					return p[name] = 1;
				});
				vars = p;
			}
			vars = _addAliasesToVars(parsedTargets, vars);
		}
		i = parsedTargets.length;
		while (i--) if (~killingTargets.indexOf(parsedTargets[i])) {
			curLookup = propTweenLookup[i];
			if (vars === "all") {
				overwrittenProps[i] = vars;
				props = curLookup;
				curOverwriteProps = {};
			} else {
				curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
				props = vars;
			}
			for (p in props) {
				pt = curLookup && curLookup[p];
				if (pt) {
					if (!("kill" in pt.d) || pt.d.kill(p) === true) _removeLinkedListItem(this, pt, "_pt");
					delete curLookup[p];
				}
				if (curOverwriteProps !== "all") curOverwriteProps[p] = 1;
			}
		}
		this._initted && !this._pt && firstPT && _interrupt(this);
		return this;
	};
	Tween.to = function to(targets, vars) {
		return new Tween(targets, vars, arguments[2]);
	};
	Tween.from = function from(targets, vars) {
		return _createTweenType(1, arguments);
	};
	Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
		return new Tween(callback, 0, {
			immediateRender: false,
			lazy: false,
			overwrite: false,
			delay,
			onComplete: callback,
			onReverseComplete: callback,
			onCompleteParams: params,
			onReverseCompleteParams: params,
			callbackScope: scope
		});
	};
	Tween.fromTo = function fromTo(targets, fromVars, toVars) {
		return _createTweenType(2, arguments);
	};
	Tween.set = function set(targets, vars) {
		vars.duration = 0;
		vars.repeatDelay || (vars.repeat = 0);
		return new Tween(targets, vars);
	};
	Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
		return _globalTimeline.killTweensOf(targets, props, onlyActive);
	};
	return Tween;
}(Animation);
_setDefaults$1(Tween.prototype, {
	_targets: [],
	_lazy: 0,
	_startAt: 0,
	_op: 0,
	_onInit: 0
});
_forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
	Tween[name] = function() {
		var tl = new Timeline(), params = _slice.call(arguments, 0);
		params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
		return tl[name].apply(tl, params);
	};
});
var _setterPlain = function _setterPlain(target, property, value) {
	return target[property] = value;
};
var _setterFunc = function _setterFunc(target, property, value) {
	return target[property](value);
};
var _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
	return target[property](data.fp, value);
};
var _setterAttribute = function _setterAttribute(target, property, value) {
	return target.setAttribute(property, value);
};
var _getSetter = function _getSetter(target, property) {
	return _isFunction$1(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
};
var _renderPlain = function _renderPlain(ratio, data) {
	return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
};
var _renderBoolean = function _renderBoolean(ratio, data) {
	return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
};
var _renderComplexString = function _renderComplexString(ratio, data) {
	var pt = data._pt, s = "";
	if (!ratio && data.b) s = data.b;
	else if (ratio === 1 && data.e) s = data.e;
	else {
		while (pt) {
			s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s;
			pt = pt._next;
		}
		s += data.c;
	}
	data.set(data.t, data.p, s, data);
};
var _renderPropTweens = function _renderPropTweens(ratio, data) {
	var pt = data._pt;
	while (pt) {
		pt.r(ratio, pt.d);
		pt = pt._next;
	}
};
var _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
	var pt = this._pt, next;
	while (pt) {
		next = pt._next;
		pt.p === property && pt.modifier(modifier, tween, target);
		pt = next;
	}
};
var _killPropTweensOf = function _killPropTweensOf(property) {
	var pt = this._pt, hasNonDependentRemaining, next;
	while (pt) {
		next = pt._next;
		if (pt.p === property && !pt.op || pt.op === property) _removeLinkedListItem(this, pt, "_pt");
		else if (!pt.dep) hasNonDependentRemaining = 1;
		pt = next;
	}
	return !hasNonDependentRemaining;
};
var _setterWithModifier = function _setterWithModifier(target, property, value, data) {
	data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
};
var _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
	var pt = parent._pt, next, pt2, first, last;
	while (pt) {
		next = pt._next;
		pt2 = first;
		while (pt2 && pt2.pr > pt.pr) pt2 = pt2._next;
		if (pt._prev = pt2 ? pt2._prev : last) pt._prev._next = pt;
		else first = pt;
		if (pt._next = pt2) pt2._prev = pt;
		else last = pt;
		pt = next;
	}
	parent._pt = first;
};
var PropTween = /*#__PURE__*/ function() {
	function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
		this.t = target;
		this.s = start;
		this.c = change;
		this.p = prop;
		this.r = renderer || _renderPlain;
		this.d = data || this;
		this.set = setter || _setterPlain;
		this.pr = priority || 0;
		this._next = next;
		if (next) next._prev = this;
	}
	var _proto4 = PropTween.prototype;
	_proto4.modifier = function modifier(func, tween, target) {
		this.mSet = this.mSet || this.set;
		this.set = _setterWithModifier;
		this.m = func;
		this.mt = target;
		this.tween = tween;
	};
	return PropTween;
}();
_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(name) {
	return _reservedProps[name] = 1;
});
_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
	sortChildren: false,
	defaults: _defaults$1,
	autoRemoveChildren: true,
	id: "root",
	smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;
var _media = [];
var _listeners$1 = {};
var _emptyArray$1 = [];
var _lastMediaTime = 0;
var _contextID = 0;
var _dispatch$1 = function _dispatch(type) {
	return (_listeners$1[type] || _emptyArray$1).map(function(f) {
		return f();
	});
};
var _onMediaChange = function _onMediaChange() {
	var time = Date.now(), matches = [];
	if (time - _lastMediaTime > 2) {
		_dispatch$1("matchMediaInit");
		_media.forEach(function(c) {
			var queries = c.queries, conditions = c.conditions, match, p, anyMatch, toggled;
			for (p in queries) {
				match = _win$3.matchMedia(queries[p]).matches;
				match && (anyMatch = 1);
				if (match !== conditions[p]) {
					conditions[p] = match;
					toggled = 1;
				}
			}
			if (toggled) {
				c.revert();
				anyMatch && matches.push(c);
			}
		});
		_dispatch$1("matchMediaRevert");
		matches.forEach(function(c) {
			return c.onMatch(c, function(func) {
				return c.add(null, func);
			});
		});
		_lastMediaTime = time;
		_dispatch$1("matchMedia");
	}
};
var Context = /*#__PURE__*/ function() {
	function Context(func, scope) {
		this.selector = scope && selector(scope);
		this.data = [];
		this._r = [];
		this.isReverted = false;
		this.id = _contextID++;
		func && this.add(func);
	}
	var _proto5 = Context.prototype;
	_proto5.add = function add(name, func, scope) {
		if (_isFunction$1(name)) {
			scope = func;
			func = name;
			name = _isFunction$1;
		}
		var self = this, f = function f() {
			var prev = _context$2, prevSelector = self.selector, result;
			prev && prev !== self && prev.data.push(self);
			scope && (self.selector = selector(scope));
			_context$2 = self;
			result = func.apply(self, arguments);
			_isFunction$1(result) && self._r.push(result);
			_context$2 = prev;
			self.selector = prevSelector;
			self.isReverted = false;
			return result;
		};
		self.last = f;
		return name === _isFunction$1 ? f(self, function(func) {
			return self.add(null, func);
		}) : name ? self[name] = f : f;
	};
	_proto5.ignore = function ignore(func) {
		var prev = _context$2;
		_context$2 = null;
		func(this);
		_context$2 = prev;
	};
	_proto5.getTweens = function getTweens() {
		var a = [];
		this.data.forEach(function(e) {
			return e instanceof Context ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
		});
		return a;
	};
	_proto5.clear = function clear() {
		this._r.length = this.data.length = 0;
	};
	_proto5.kill = function kill(revert, matchMedia) {
		var _this4 = this;
		if (revert) (function() {
			var tweens = _this4.getTweens(), i = _this4.data.length, t;
			while (i--) {
				t = _this4.data[i];
				if (t.data === "isFlip") {
					t.revert();
					t.getChildren(true, true, false).forEach(function(tween) {
						return tweens.splice(tweens.indexOf(tween), 1);
					});
				}
			}
			tweens.map(function(t) {
				return {
					g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -Infinity,
					t
				};
			}).sort(function(a, b) {
				return b.g - a.g || -Infinity;
			}).forEach(function(o) {
				return o.t.revert(revert);
			});
			i = _this4.data.length;
			while (i--) {
				t = _this4.data[i];
				if (t instanceof Timeline) {
					if (t.data !== "nested") {
						t.scrollTrigger && t.scrollTrigger.revert();
						t.kill();
					}
				} else !(t instanceof Tween) && t.revert && t.revert(revert);
			}
			_this4._r.forEach(function(f) {
				return f(revert, _this4);
			});
			_this4.isReverted = true;
		})();
		else this.data.forEach(function(e) {
			return e.kill && e.kill();
		});
		this.clear();
		if (matchMedia) {
			var i = _media.length;
			while (i--) _media[i].id === this.id && _media.splice(i, 1);
		}
	};
	_proto5.revert = function revert(config) {
		this.kill(config || {});
	};
	return Context;
}();
var MatchMedia = /*#__PURE__*/ function() {
	function MatchMedia(scope) {
		this.contexts = [];
		this.scope = scope;
		_context$2 && _context$2.data.push(this);
	}
	var _proto6 = MatchMedia.prototype;
	_proto6.add = function add(conditions, func, scope) {
		_isObject$1(conditions) || (conditions = { matches: conditions });
		var context = new Context(0, scope || this.scope), cond = context.conditions = {}, mq, p, active;
		_context$2 && !context.selector && (context.selector = _context$2.selector);
		this.contexts.push(context);
		func = context.add("onMatch", func);
		context.queries = conditions;
		for (p in conditions) if (p === "all") active = 1;
		else {
			mq = _win$3.matchMedia(conditions[p]);
			if (mq) {
				_media.indexOf(context) < 0 && _media.push(context);
				(cond[p] = mq.matches) && (active = 1);
				mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
			}
		}
		active && func(context, function(f) {
			return context.add(null, f);
		});
		return this;
	};
	_proto6.revert = function revert(config) {
		this.kill(config || {});
	};
	_proto6.kill = function kill(revert) {
		this.contexts.forEach(function(c) {
			return c.kill(revert, true);
		});
	};
	return MatchMedia;
}();
var _gsap = {
	registerPlugin: function registerPlugin() {
		for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
		args.forEach(function(config) {
			return _createPlugin(config);
		});
	},
	timeline: function timeline(vars) {
		return new Timeline(vars);
	},
	getTweensOf: function getTweensOf(targets, onlyActive) {
		return _globalTimeline.getTweensOf(targets, onlyActive);
	},
	getProperty: function getProperty(target, property, unit, uncache) {
		_isString$1(target) && (target = toArray(target)[0]);
		var getter = _getCache(target || {}).get, format = unit ? _passThrough$1 : _numericIfPossible;
		unit === "native" && (unit = "");
		return !target ? target : !property ? function(property, unit, uncache) {
			return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
		} : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
	},
	quickSetter: function quickSetter(target, property, unit) {
		target = toArray(target);
		if (target.length > 1) {
			var setters = target.map(function(t) {
				return gsap$2.quickSetter(t, property, unit);
			}), l = setters.length;
			return function(value) {
				var i = l;
				while (i--) setters[i](value);
			};
		}
		target = target[0] || {};
		var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
			var p = new Plugin();
			_quickTween._pt = 0;
			p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
			p.render(1, p);
			_quickTween._pt && _renderPropTweens(1, _quickTween);
		} : cache.set(target, p);
		return Plugin ? setter : function(value) {
			return setter(target, p, unit ? value + unit : value, cache, 1);
		};
	},
	quickTo: function quickTo(target, property, vars) {
		var _setDefaults2;
		var tween = gsap$2.to(target, _setDefaults$1((_setDefaults2 = {}, _setDefaults2[property] = "+=0.1", _setDefaults2.paused = true, _setDefaults2.stagger = 0, _setDefaults2), vars || {})), func = function func(value, start, startIsRelative) {
			return tween.resetTo(property, value, start, startIsRelative);
		};
		func.tween = tween;
		return func;
	},
	isTweening: function isTweening(targets) {
		return _globalTimeline.getTweensOf(targets, true).length > 0;
	},
	defaults: function defaults(value) {
		value && value.ease && (value.ease = _parseEase(value.ease, _defaults$1.ease));
		return _mergeDeep(_defaults$1, value || {});
	},
	config: function config(value) {
		return _mergeDeep(_config, value || {});
	},
	registerEffect: function registerEffect(_ref3) {
		var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
		(plugins || "").split(",").forEach(function(pluginName) {
			return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
		});
		_effects[name] = function(targets, vars, tl) {
			return effect(toArray(targets), _setDefaults$1(vars || {}, defaults), tl);
		};
		if (extendTimeline) Timeline.prototype[name] = function(targets, vars, position) {
			return this.add(_effects[name](targets, _isObject$1(vars) ? vars : (position = vars) && {}, this), position);
		};
	},
	registerEase: function registerEase(name, ease) {
		_easeMap[name] = _parseEase(ease);
	},
	parseEase: function parseEase(ease, defaultEase) {
		return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
	},
	getById: function getById(id) {
		return _globalTimeline.getById(id);
	},
	exportRoot: function exportRoot(vars, includeDelayedCalls) {
		if (vars === void 0) vars = {};
		var tl = new Timeline(vars), child, next;
		tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
		_globalTimeline.remove(tl);
		tl._dp = 0;
		tl._time = tl._tTime = _globalTimeline._time;
		child = _globalTimeline._first;
		while (child) {
			next = child._next;
			if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) _addToTimeline(tl, child, child._start - child._delay);
			child = next;
		}
		_addToTimeline(_globalTimeline, tl, 0);
		return tl;
	},
	context: function context(func, scope) {
		return func ? new Context(func, scope) : _context$2;
	},
	matchMedia: function matchMedia(scope) {
		return new MatchMedia(scope);
	},
	matchMediaRefresh: function matchMediaRefresh() {
		return _media.forEach(function(c) {
			var cond = c.conditions, found, p;
			for (p in cond) if (cond[p]) {
				cond[p] = false;
				found = 1;
			}
			found && c.revert();
		}) || _onMediaChange();
	},
	addEventListener: function addEventListener(type, callback) {
		var a = _listeners$1[type] || (_listeners$1[type] = []);
		~a.indexOf(callback) || a.push(callback);
	},
	removeEventListener: function removeEventListener(type, callback) {
		var a = _listeners$1[type], i = a && a.indexOf(callback);
		i >= 0 && a.splice(i, 1);
	},
	utils: {
		wrap,
		wrapYoyo,
		distribute,
		random,
		snap,
		normalize,
		getUnit,
		clamp: clamp$1,
		splitColor,
		toArray,
		selector,
		mapRange,
		pipe,
		unitize,
		interpolate,
		shuffle
	},
	install: _install,
	effects: _effects,
	ticker: _ticker,
	updateRoot: Timeline.updateRoot,
	plugins: _plugins,
	globalTimeline: _globalTimeline,
	core: {
		PropTween,
		globals: _addGlobal,
		Tween,
		Timeline,
		Animation,
		getCache: _getCache,
		_removeLinkedListItem,
		reverting: function reverting() {
			return _reverting$1;
		},
		context: function context(toAdd) {
			if (toAdd && _context$2) {
				_context$2.data.push(toAdd);
				toAdd._ctx = _context$2;
			}
			return _context$2;
		},
		suppressOverwrites: function suppressOverwrites(value) {
			return _suppressOverwrites$1 = value;
		}
	}
};
_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
	return _gsap[name] = Tween[name];
});
_ticker.add(Timeline.updateRoot);
_quickTween = _gsap.to({}, { duration: 0 });
var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
	var pt = plugin._pt;
	while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) pt = pt._next;
	return pt;
};
var _addModifiers = function _addModifiers(tween, modifiers) {
	var targets = tween._targets, p, i, pt;
	for (p in modifiers) {
		i = targets.length;
		while (i--) {
			pt = tween._ptLookup[i][p];
			if (pt && (pt = pt.d)) {
				if (pt._pt) pt = _getPluginPropTween(pt, p);
				pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
			}
		}
	}
};
var _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
	return {
		name,
		headless: 1,
		rawVars: 1,
		init: function init(target, vars, tween) {
			tween._onInit = function(tween) {
				var temp, p;
				if (_isString$1(vars)) {
					temp = {};
					_forEachName(vars, function(name) {
						return temp[name] = 1;
					});
					vars = temp;
				}
				if (modifier) {
					temp = {};
					for (p in vars) temp[p] = modifier(vars[p]);
					vars = temp;
				}
				_addModifiers(tween, vars);
			};
		}
	};
};
var gsap$2 = _gsap.registerPlugin({
	name: "attr",
	init: function init(target, vars, tween, index, targets) {
		var p, pt, v;
		this.tween = tween;
		for (p in vars) {
			v = target.getAttribute(p) || "";
			pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
			pt.op = p;
			pt.b = v;
			this._props.push(p);
		}
	},
	render: function render(ratio, data) {
		var pt = data._pt;
		while (pt) {
			_reverting$1 ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
			pt = pt._next;
		}
	}
}, {
	name: "endArray",
	headless: 1,
	init: function init(target, value) {
		var i = value.length;
		while (i--) this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
	}
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
Tween.version = Timeline.version = gsap$2.version = "3.15.0";
_coreReady = 1;
_windowExists$2() && _wake();
_easeMap.Power0;
_easeMap.Power1;
_easeMap.Power2;
_easeMap.Power3;
_easeMap.Power4;
_easeMap.Linear;
_easeMap.Quad;
_easeMap.Cubic;
_easeMap.Quart;
_easeMap.Quint;
_easeMap.Strong;
_easeMap.Elastic;
_easeMap.Back;
_easeMap.SteppedEase;
_easeMap.Bounce;
_easeMap.Sine;
_easeMap.Expo;
_easeMap.Circ;
// node_modules/gsap/CSSPlugin.js
/*!
* CSSPlugin 3.15.0
* https://gsap.com
*
* Copyright 2008-2026, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license
* @author: Jack Doyle, jack@greensock.com
*/
var _win$2;
var _doc$2;
var _docElement;
var _pluginInitted;
var _tempDiv;
var _recentSetterPlugin;
var _reverting;
var _windowExists$1 = function _windowExists() {
	return typeof window !== "undefined";
};
var _transformProps = {};
var _RAD2DEG = 180 / Math.PI;
var _DEG2RAD = Math.PI / 180;
var _atan2 = Math.atan2;
var _bigNum = 1e8;
var _capsExp$1 = /([A-Z])/g;
var _horizontalExp = /(left|right|width|margin|padding|x)/i;
var _complexExp = /[\s,\(]\S/;
var _propertyAliases = {
	autoAlpha: "opacity,visibility",
	scale: "scaleX,scaleY",
	alpha: "opacity"
};
var _renderCSSProp = function _renderCSSProp(ratio, data) {
	return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
};
var _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
	return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
};
var _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
	return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
};
var _renderCSSPropWithBeginningAndEnd = function _renderCSSPropWithBeginningAndEnd(ratio, data) {
	return data.set(data.t, data.p, ratio === 1 ? data.e : ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
};
var _renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
	var value = data.s + data.c * ratio;
	data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
};
var _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
	return data.set(data.t, data.p, ratio ? data.e : data.b, data);
};
var _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
	return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
};
var _setterCSSStyle = function _setterCSSStyle(target, property, value) {
	return target.style[property] = value;
};
var _setterCSSProp = function _setterCSSProp(target, property, value) {
	return target.style.setProperty(property, value);
};
var _setterTransform = function _setterTransform(target, property, value) {
	return target._gsap[property] = value;
};
var _setterScale = function _setterScale(target, property, value) {
	return target._gsap.scaleX = target._gsap.scaleY = value;
};
var _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
	var cache = target._gsap;
	cache.scaleX = cache.scaleY = value;
	cache.renderTransform(ratio, cache);
};
var _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
	var cache = target._gsap;
	cache[property] = value;
	cache.renderTransform(ratio, cache);
};
var _transformProp$1 = "transform";
var _transformOriginProp = _transformProp$1 + "Origin";
var _saveStyle = function _saveStyle(property, isNotCSS) {
	var _this = this;
	var target = this.target, style = target.style, cache = target._gsap;
	if (property in _transformProps && style) {
		this.tfm = this.tfm || {};
		if (property !== "transform") {
			property = _propertyAliases[property] || property;
			~property.indexOf(",") ? property.split(",").forEach(function(a) {
				return _this.tfm[a] = _get(target, a);
			}) : this.tfm[property] = cache.x ? cache[property] : _get(target, property);
			property === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
		} else return _propertyAliases.transform.split(",").forEach(function(p) {
			return _saveStyle.call(_this, p, isNotCSS);
		});
		if (this.props.indexOf(_transformProp$1) >= 0) return;
		if (cache.svg) {
			this.svgo = target.getAttribute("data-svg-origin");
			this.props.push(_transformOriginProp, isNotCSS, "");
		}
		property = _transformProp$1;
	}
	(style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
};
var _removeIndependentTransforms = function _removeIndependentTransforms(style) {
	if (style.translate) {
		style.removeProperty("translate");
		style.removeProperty("scale");
		style.removeProperty("rotate");
	}
};
var _revertStyle = function _revertStyle() {
	var props = this.props, target = this.target, style = target.style, cache = target._gsap, i = 0, p;
	for (; i < props.length; i += 3) if (!props[i + 1]) props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp$1, "-$1").toLowerCase());
	else if (props[i + 1] === 2) target[props[i]](props[i + 2]);
	else target[props[i]] = props[i + 2];
	if (this.tfm) {
		for (p in this.tfm) cache[p] = this.tfm[p];
		if (cache.svg) {
			cache.renderTransform();
			target.setAttribute("data-svg-origin", this.svgo || "");
		}
		i = _reverting();
		if ((!i || !i.isStart) && !style[_transformProp$1]) {
			_removeIndependentTransforms(style);
			if (cache.zOrigin && style[_transformOriginProp]) {
				style[_transformOriginProp] += " " + cache.zOrigin + "px";
				cache.zOrigin = 0;
				cache.renderTransform();
			}
			cache.uncache = 1;
		}
	}
};
var _getStyleSaver = function _getStyleSaver(target, properties) {
	var saver = {
		target,
		props: [],
		revert: _revertStyle,
		save: _saveStyle
	};
	target._gsap || gsap$2.core.getCache(target);
	properties && target.style && target.nodeType && properties.split(",").forEach(function(p) {
		return saver.save(p);
	});
	return saver;
};
var _supports3D;
var _createElement = function _createElement(type, ns) {
	var e = _doc$2.createElementNS ? _doc$2.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc$2.createElement(type);
	return e && e.style ? e : _doc$2.createElement(type);
};
var _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
	var cs = getComputedStyle(target);
	return cs[property] || cs.getPropertyValue(property.replace(_capsExp$1, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || "";
};
var _prefixes = "O,Moz,ms,Ms,Webkit".split(",");
var _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
	var s = (element || _tempDiv).style, i = 5;
	if (property in s && !preferPrefix) return property;
	property = property.charAt(0).toUpperCase() + property.substr(1);
	while (i-- && !(_prefixes[i] + property in s));
	return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
};
var _initCore$1 = function _initCore() {
	if (_windowExists$1() && window.document) {
		_win$2 = window;
		_doc$2 = _win$2.document;
		_docElement = _doc$2.documentElement;
		_tempDiv = _createElement("div") || { style: {} };
		_createElement("div");
		_transformProp$1 = _checkPropPrefix(_transformProp$1);
		_transformOriginProp = _transformProp$1 + "Origin";
		_tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
		_supports3D = !!_checkPropPrefix("perspective");
		_reverting = gsap$2.core.reverting;
		_pluginInitted = 1;
	}
};
var _getReparentedCloneBBox = function _getReparentedCloneBBox(target) {
	var owner = target.ownerSVGElement, svg = _createElement("svg", owner && owner.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), clone = target.cloneNode(true), bbox;
	clone.style.display = "block";
	svg.appendChild(clone);
	_docElement.appendChild(svg);
	try {
		bbox = clone.getBBox();
	} catch (e) {}
	svg.removeChild(clone);
	_docElement.removeChild(svg);
	return bbox;
};
var _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
	var i = attributesArray.length;
	while (i--) if (target.hasAttribute(attributesArray[i])) return target.getAttribute(attributesArray[i]);
};
var _getBBox = function _getBBox(target) {
	var bounds, cloned;
	try {
		bounds = target.getBBox();
	} catch (error) {
		bounds = _getReparentedCloneBBox(target);
		cloned = 1;
	}
	bounds && (bounds.width || bounds.height) || cloned || (bounds = _getReparentedCloneBBox(target));
	return bounds && !bounds.width && !bounds.x && !bounds.y ? {
		x: +_getAttributeFallbacks(target, [
			"x",
			"cx",
			"x1"
		]) || 0,
		y: +_getAttributeFallbacks(target, [
			"y",
			"cy",
			"y1"
		]) || 0,
		width: 0,
		height: 0
	} : bounds;
};
var _isSVG = function _isSVG(e) {
	return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
};
var _removeProperty = function _removeProperty(target, property) {
	if (property) {
		var style = target.style, first2Chars;
		if (property in _transformProps && property !== _transformOriginProp) property = _transformProp$1;
		if (style.removeProperty) {
			first2Chars = property.substr(0, 2);
			if (first2Chars === "ms" || property.substr(0, 6) === "webkit") property = "-" + property;
			style.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp$1, "-$1").toLowerCase());
		} else style.removeAttribute(property);
	}
};
var _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
	var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
	plugin._pt = pt;
	pt.b = beginning;
	pt.e = end;
	plugin._props.push(property);
	return pt;
};
var _nonConvertibleUnits = {
	deg: 1,
	rad: 1,
	turn: 1
};
var _nonStandardLayouts = {
	grid: 1,
	flex: 1
};
var _convertToUnit = function _convertToUnit(target, property, value, unit) {
	var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
	if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) return curValue;
	curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
	isSVG = target.getCTM && _isSVG(target);
	if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
		px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
		return _round$1(toPercent ? curValue / px * amount : curValue / 100 * px);
	}
	style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
	parent = unit !== "rem" && ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
	if (isSVG) parent = (target.ownerSVGElement || {}).parentNode;
	if (!parent || parent === _doc$2 || !parent.appendChild) parent = _doc$2.body;
	cache = parent._gsap;
	if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) return _round$1(curValue / cache.width * amount);
	else {
		if (toPercent && (property === "height" || property === "width")) {
			var v = target.style[property];
			target.style[property] = amount + unit;
			px = target[measureProperty];
			v ? target.style[property] = v : _removeProperty(target, property);
		} else {
			(toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
			parent === target && (style.position = "static");
			parent.appendChild(_tempDiv);
			px = _tempDiv[measureProperty];
			parent.removeChild(_tempDiv);
			style.position = "absolute";
		}
		if (horizontal && toPercent) {
			cache = _getCache(parent);
			cache.time = _ticker.time;
			cache.width = parent[measureProperty];
		}
	}
	return _round$1(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
};
var _get = function _get(target, property, unit, uncache) {
	var value;
	_pluginInitted || _initCore$1();
	if (property in _propertyAliases && property !== "transform") {
		property = _propertyAliases[property];
		if (~property.indexOf(",")) property = property.split(",")[0];
	}
	if (_transformProps[property] && property !== "transform") {
		value = _parseTransform(target, uncache);
		value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
	} else {
		value = target.style[property];
		if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
	}
	return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
};
var _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
	if (!start || start === "none") {
		var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
		if (s && s !== start) {
			prop = p;
			start = s;
		} else if (prop === "borderColor") start = _getComputedProperty(target, "borderTopColor");
	}
	var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
	pt.b = start;
	pt.e = end;
	start += "";
	end += "";
	if (end.substring(0, 6) === "var(--") end = _getComputedProperty(target, end.substring(4, end.indexOf(")")));
	if (end === "auto") {
		startValue = target.style[prop];
		target.style[prop] = end;
		end = _getComputedProperty(target, prop) || end;
		startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
	}
	a = [start, end];
	_colorStringFilter(a);
	start = a[0];
	end = a[1];
	startValues = start.match(_numWithUnitExp) || [];
	endValues = end.match(_numWithUnitExp) || [];
	if (endValues.length) {
		while (result = _numWithUnitExp.exec(end)) {
			endValue = result[0];
			chunk = end.substring(index, result.index);
			if (color) color = (color + 1) % 5;
			else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") color = 1;
			if (endValue !== (startValue = startValues[matchIndex++] || "")) {
				startNum = parseFloat(startValue) || 0;
				startUnit = startValue.substr((startNum + "").length);
				endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
				endNum = parseFloat(endValue);
				endUnit = endValue.substr((endNum + "").length);
				index = _numWithUnitExp.lastIndex - endUnit.length;
				if (!endUnit) {
					endUnit = endUnit || _config.units[prop] || startUnit;
					if (index === end.length) {
						end += endUnit;
						pt.e += endUnit;
					}
				}
				if (startUnit !== endUnit) startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
				pt._pt = {
					_next: pt._pt,
					p: chunk || matchIndex === 1 ? chunk : ",",
					s: startNum,
					c: endNum - startNum,
					m: color && color < 4 || prop === "zIndex" ? Math.round : 0
				};
			}
		}
		pt.c = index < end.length ? end.substring(index, end.length) : "";
	} else pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
	_relExp.test(end) && (pt.e = 0);
	this._pt = pt;
	return pt;
};
var _keywordToPercent = {
	top: "0%",
	bottom: "100%",
	left: "0%",
	right: "100%",
	center: "50%"
};
var _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
	var split = value.split(" "), x = split[0], y = split[1] || "50%";
	if (x === "top" || x === "bottom" || y === "left" || y === "right") {
		value = x;
		x = y;
		y = value;
	}
	split[0] = _keywordToPercent[x] || x;
	split[1] = _keywordToPercent[y] || y;
	return split.join(" ");
};
var _renderClearProps = function _renderClearProps(ratio, data) {
	if (data.tween && data.tween._time === data.tween._dur) {
		var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
		if (props === "all" || props === true) {
			style.cssText = "";
			clearTransforms = 1;
		} else {
			props = props.split(",");
			i = props.length;
			while (--i > -1) {
				prop = props[i];
				if (_transformProps[prop]) {
					clearTransforms = 1;
					prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp$1;
				}
				_removeProperty(target, prop);
			}
		}
		if (clearTransforms) {
			_removeProperty(target, _transformProp$1);
			if (cache) {
				cache.svg && target.removeAttribute("transform");
				style.scale = style.rotate = style.translate = "none";
				_parseTransform(target, 1);
				cache.uncache = 1;
				_removeIndependentTransforms(style);
			}
		}
	}
};
var _specialProps = { clearProps: function clearProps(plugin, target, property, endValue, tween) {
	if (tween.data !== "isFromStart") {
		var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
		pt.u = endValue;
		pt.pr = -10;
		pt.tween = tween;
		plugin._props.push(property);
		return 1;
	}
} };
var _identity2DMatrix = [
	1,
	0,
	0,
	1,
	0,
	0
];
var _rotationalProperties = {};
var _isNullTransform = function _isNullTransform(value) {
	return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
};
var _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
	var matrixString = _getComputedProperty(target, _transformProp$1);
	return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round$1);
};
var _getMatrix = function _getMatrix(target, force2D) {
	var cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
	if (cache.svg && target.getAttribute("transform")) {
		temp = target.transform.baseVal.consolidate().matrix;
		matrix = [
			temp.a,
			temp.b,
			temp.c,
			temp.d,
			temp.e,
			temp.f
		];
		return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
	} else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
		temp = style.display;
		style.display = "block";
		parent = target.parentNode;
		if (!parent || !target.offsetParent && !target.getBoundingClientRect().width) {
			addedToDOM = 1;
			nextSibling = target.nextElementSibling;
			_docElement.appendChild(target);
		}
		matrix = _getComputedTransformMatrixAsArray(target);
		temp ? style.display = temp : _removeProperty(target, "display");
		if (addedToDOM) nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
	}
	return force2D && matrix.length > 6 ? [
		matrix[0],
		matrix[1],
		matrix[4],
		matrix[5],
		matrix[12],
		matrix[13]
	] : matrix;
};
var _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
	var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
	if (!originIsAbsolute) {
		bounds = _getBBox(target);
		xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
		yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
	} else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
		x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
		y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
		xOrigin = x;
		yOrigin = y;
	}
	if (smooth || smooth !== false && cache.smooth) {
		tx = xOrigin - xOriginOld;
		ty = yOrigin - yOriginOld;
		cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
		cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
	} else cache.xOffset = cache.yOffset = 0;
	cache.xOrigin = xOrigin;
	cache.yOrigin = yOrigin;
	cache.smooth = !!smooth;
	cache.origin = origin;
	cache.originIsAbsolute = !!originIsAbsolute;
	target.style[_transformOriginProp] = "0px 0px";
	if (pluginToAddPropTweensTo) {
		_addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
		_addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
		_addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
		_addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
	}
	target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
};
var _parseTransform = function _parseTransform(target, uncache) {
	var cache = target._gsap || new GSCache(target);
	if ("x" in cache && !uncache && !cache.uncache) return cache;
	var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0, y, z, scaleX = scaleY = 1, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
	cache.svg = !!(target.getCTM && _isSVG(target));
	if (cs.translate) {
		if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") style[_transformProp$1] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp$1] !== "none" ? cs[_transformProp$1] : "");
		style.scale = style.rotate = style.translate = "none";
	}
	matrix = _getMatrix(target, cache.svg);
	if (cache.svg) {
		if (cache.uncache) {
			t2 = target.getBBox();
			origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
			t1 = "";
		} else t1 = !uncache && target.getAttribute("data-svg-origin");
		_applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
	}
	xOrigin = cache.xOrigin || 0;
	yOrigin = cache.yOrigin || 0;
	if (matrix !== _identity2DMatrix) {
		a = matrix[0];
		b = matrix[1];
		c = matrix[2];
		d = matrix[3];
		x = a12 = matrix[4];
		y = a22 = matrix[5];
		if (matrix.length === 6) {
			scaleX = Math.sqrt(a * a + b * b);
			scaleY = Math.sqrt(d * d + c * c);
			rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
			skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
			skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
			if (cache.svg) {
				x -= xOrigin - (xOrigin * a + yOrigin * c);
				y -= yOrigin - (xOrigin * b + yOrigin * d);
			}
		} else {
			a32 = matrix[6];
			a42 = matrix[7];
			a13 = matrix[8];
			a23 = matrix[9];
			a33 = matrix[10];
			a43 = matrix[11];
			x = matrix[12];
			y = matrix[13];
			z = matrix[14];
			angle = _atan2(a32, a33);
			rotationX = angle * _RAD2DEG;
			if (angle) {
				cos = Math.cos(-angle);
				sin = Math.sin(-angle);
				t1 = a12 * cos + a13 * sin;
				t2 = a22 * cos + a23 * sin;
				t3 = a32 * cos + a33 * sin;
				a13 = a12 * -sin + a13 * cos;
				a23 = a22 * -sin + a23 * cos;
				a33 = a32 * -sin + a33 * cos;
				a43 = a42 * -sin + a43 * cos;
				a12 = t1;
				a22 = t2;
				a32 = t3;
			}
			angle = _atan2(-c, a33);
			rotationY = angle * _RAD2DEG;
			if (angle) {
				cos = Math.cos(-angle);
				sin = Math.sin(-angle);
				t1 = a * cos - a13 * sin;
				t2 = b * cos - a23 * sin;
				t3 = c * cos - a33 * sin;
				a43 = d * sin + a43 * cos;
				a = t1;
				b = t2;
				c = t3;
			}
			angle = _atan2(b, a);
			rotation = angle * _RAD2DEG;
			if (angle) {
				cos = Math.cos(angle);
				sin = Math.sin(angle);
				t1 = a * cos + b * sin;
				t2 = a12 * cos + a22 * sin;
				b = b * cos - a * sin;
				a22 = a22 * cos - a12 * sin;
				a = t1;
				a12 = t2;
			}
			if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
				rotationX = rotation = 0;
				rotationY = 180 - rotationY;
			}
			scaleX = _round$1(Math.sqrt(a * a + b * b + c * c));
			scaleY = _round$1(Math.sqrt(a22 * a22 + a32 * a32));
			angle = _atan2(a12, a22);
			skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
			perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
		}
		if (cache.svg) {
			t1 = target.getAttribute("transform");
			cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp$1));
			t1 && target.setAttribute("transform", t1);
		}
	}
	if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
		if (invertedScaleX) {
			scaleX *= -1;
			skewX += rotation <= 0 ? 180 : -180;
			rotation += rotation <= 0 ? 180 : -180;
		} else {
			scaleY *= -1;
			skewX += skewX <= 0 ? 180 : -180;
		}
	}
	uncache = uncache || cache.uncache;
	cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
	cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
	cache.z = z + px;
	cache.scaleX = _round$1(scaleX);
	cache.scaleY = _round$1(scaleY);
	cache.rotation = _round$1(rotation) + deg;
	cache.rotationX = _round$1(rotationX) + deg;
	cache.rotationY = _round$1(rotationY) + deg;
	cache.skewX = skewX + deg;
	cache.skewY = skewY + deg;
	cache.transformPerspective = perspective + px;
	if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) style[_transformOriginProp] = _firstTwoOnly(origin);
	cache.xOffset = cache.yOffset = 0;
	cache.force3D = _config.force3D;
	cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
	cache.uncache = 0;
	return cache;
};
var _firstTwoOnly = function _firstTwoOnly(value) {
	return (value = value.split(" "))[0] + " " + value[1];
};
var _addPxTranslate = function _addPxTranslate(target, start, value) {
	var unit = getUnit(start);
	return _round$1(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
};
var _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
	cache.z = "0px";
	cache.rotationY = cache.rotationX = "0deg";
	cache.force3D = 0;
	_renderCSSTransforms(ratio, cache);
};
var _zeroDeg = "0deg";
var _zeroPx = "0px";
var _endParenthesis = ") ";
var _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
	var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
	if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
		var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
		angle = parseFloat(rotationX) * _DEG2RAD;
		cos = Math.cos(angle);
		x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
		y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
		z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
	}
	if (transformPerspective !== _zeroPx) transforms += "perspective(" + transformPerspective + _endParenthesis;
	if (xPercent || yPercent) transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
	if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
	if (rotation !== _zeroDeg) transforms += "rotate(" + rotation + _endParenthesis;
	if (rotationY !== _zeroDeg) transforms += "rotateY(" + rotationY + _endParenthesis;
	if (rotationX !== _zeroDeg) transforms += "rotateX(" + rotationX + _endParenthesis;
	if (skewX !== _zeroDeg || skewY !== _zeroDeg) transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
	if (scaleX !== 1 || scaleY !== 1) transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
	target.style[_transformProp$1] = transforms || "translate(0, 0)";
};
var _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
	var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
	rotation = parseFloat(rotation);
	skewX = parseFloat(skewX);
	skewY = parseFloat(skewY);
	if (skewY) {
		skewY = parseFloat(skewY);
		skewX += skewY;
		rotation += skewY;
	}
	if (rotation || skewX) {
		rotation *= _DEG2RAD;
		skewX *= _DEG2RAD;
		a11 = Math.cos(rotation) * scaleX;
		a21 = Math.sin(rotation) * scaleX;
		a12 = Math.sin(rotation - skewX) * -scaleY;
		a22 = Math.cos(rotation - skewX) * scaleY;
		if (skewX) {
			skewY *= _DEG2RAD;
			temp = Math.tan(skewX - skewY);
			temp = Math.sqrt(1 + temp * temp);
			a12 *= temp;
			a22 *= temp;
			if (skewY) {
				temp = Math.tan(skewY);
				temp = Math.sqrt(1 + temp * temp);
				a11 *= temp;
				a21 *= temp;
			}
		}
		a11 = _round$1(a11);
		a21 = _round$1(a21);
		a12 = _round$1(a12);
		a22 = _round$1(a22);
	} else {
		a11 = scaleX;
		a22 = scaleY;
		a21 = a12 = 0;
	}
	if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
		tx = _convertToUnit(target, "x", x, "px");
		ty = _convertToUnit(target, "y", y, "px");
	}
	if (xOrigin || yOrigin || xOffset || yOffset) {
		tx = _round$1(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
		ty = _round$1(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
	}
	if (xPercent || yPercent) {
		temp = target.getBBox();
		tx = _round$1(tx + xPercent / 100 * temp.width);
		ty = _round$1(ty + yPercent / 100 * temp.height);
	}
	temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
	target.setAttribute("transform", temp);
	forceCSS && (target.style[_transformProp$1] = temp);
};
var _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
	var cap = 360, isString = _isString$1(endValue), change = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1) - startNum, finalValue = startNum + change + "deg", direction, pt;
	if (isString) {
		direction = endValue.split("_")[1];
		if (direction === "short") {
			change %= cap;
			if (change !== change % (cap / 2)) change += change < 0 ? cap : -cap;
		}
		if (direction === "cw" && change < 0) change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
		else if (direction === "ccw" && change > 0) change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
	}
	plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
	pt.e = finalValue;
	pt.u = "deg";
	plugin._props.push(property);
	return pt;
};
var _assign = function _assign(target, source) {
	for (var p in source) target[p] = source[p];
	return target;
};
var _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
	var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
	if (startCache.svg) {
		startValue = target.getAttribute("transform");
		target.setAttribute("transform", "");
		style[_transformProp$1] = transforms;
		endCache = _parseTransform(target, 1);
		_removeProperty(target, _transformProp$1);
		target.setAttribute("transform", startValue);
	} else {
		startValue = getComputedStyle(target)[_transformProp$1];
		style[_transformProp$1] = transforms;
		endCache = _parseTransform(target, 1);
		style[_transformProp$1] = startValue;
	}
	for (p in _transformProps) {
		startValue = startCache[p];
		endValue = endCache[p];
		if (startValue !== endValue && exclude.indexOf(p) < 0) {
			startUnit = getUnit(startValue);
			endUnit = getUnit(endValue);
			startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
			endNum = parseFloat(endValue);
			plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
			plugin._pt.u = endUnit || 0;
			plugin._props.push(p);
		}
	}
	_assign(endCache, startCache);
};
_forEachName("padding,margin,Width,Radius", function(name, index) {
	var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [
		t,
		r,
		b,
		l
	] : [
		t + l,
		t + r,
		b + r,
		b + l
	]).map(function(side) {
		return index < 2 ? name + side : "border" + side + name;
	});
	_specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
		var a, vars;
		if (arguments.length < 4) {
			a = props.map(function(prop) {
				return _get(plugin, prop, property);
			});
			vars = a.join(" ");
			return vars.split(a[0]).length === 5 ? a[0] : vars;
		}
		a = (endValue + "").split(" ");
		vars = {};
		props.forEach(function(prop, i) {
			return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
		});
		plugin.init(target, vars, tween);
	};
});
var CSSPlugin = {
	name: "css",
	register: _initCore$1,
	targetTest: function targetTest(target) {
		return target.style && target.nodeType;
	},
	init: function init(target, vars, tween, index, targets) {
		var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps, finalTransformValue;
		_pluginInitted || _initCore$1();
		this.styles = this.styles || _getStyleSaver(target);
		inlineProps = this.styles.props;
		this.tween = tween;
		for (p in vars) {
			if (p === "autoRound") continue;
			endValue = vars[p];
			if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) continue;
			type = typeof endValue;
			specialProp = _specialProps[p];
			if (type === "function") {
				endValue = endValue.call(tween, index, target, targets);
				type = typeof endValue;
			}
			if (type === "string" && ~endValue.indexOf("random(")) endValue = _replaceRandom(endValue);
			if (specialProp) specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
			else if (p.substr(0, 2) === "--") {
				startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
				endValue += "";
				_colorExp.lastIndex = 0;
				if (!_colorExp.test(startValue)) {
					startUnit = getUnit(startValue);
					endUnit = getUnit(endValue);
					endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
				}
				this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
				props.push(p);
				inlineProps.push(p, 0, style[p]);
			} else if (type !== "undefined") {
				if (startAt && p in startAt) {
					startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
					_isString$1(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
					getUnit(startValue + "") || startValue === "auto" || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
					(startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
				} else startValue = _get(target, p);
				startNum = parseFloat(startValue);
				relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
				relative && (endValue = endValue.substr(2));
				endNum = parseFloat(endValue);
				if (p in _propertyAliases) {
					if (p === "autoAlpha") {
						if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) startNum = 0;
						inlineProps.push("visibility", 0, style.visibility);
						_addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
					}
					if (p !== "scale" && p !== "transform") {
						p = _propertyAliases[p];
						~p.indexOf(",") && (p = p.split(",")[0]);
					}
				}
				isTransformRelated = p in _transformProps;
				if (isTransformRelated) {
					this.styles.save(p);
					finalTransformValue = endValue;
					if (type === "string" && endValue.substring(0, 6) === "var(--") {
						endValue = _getComputedProperty(target, endValue.substring(4, endValue.indexOf(")")));
						if (endValue.substring(0, 5) === "calc(") {
							var origPerspective = target.style.perspective;
							target.style.perspective = endValue;
							endValue = _getComputedProperty(target, "perspective");
							origPerspective ? target.style.perspective = origPerspective : _removeProperty(target, "perspective");
						}
						endNum = parseFloat(endValue);
					}
					if (!transformPropTween) {
						cache = target._gsap;
						cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
						smooth = vars.smoothOrigin !== false && cache.smooth;
						transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp$1, 0, 1, cache.renderTransform, cache, 0, -1);
						transformPropTween.dep = 1;
					}
					if (p === "scale") {
						this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
						this._pt.u = 0;
						props.push("scaleY", p);
						p += "X";
					} else if (p === "transformOrigin") {
						inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
						endValue = _convertKeywordsToPercentages(endValue);
						if (cache.svg) _applySVGOrigin(target, endValue, 0, smooth, 0, this);
						else {
							endUnit = parseFloat(endValue.split(" ")[2]) || 0;
							endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
							_addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
						}
						continue;
					} else if (p === "svgOrigin") {
						_applySVGOrigin(target, endValue, 1, smooth, 0, this);
						continue;
					} else if (p in _rotationalProperties) {
						_addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
						continue;
					} else if (p === "smoothOrigin") {
						_addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
						continue;
					} else if (p === "force3D") {
						cache[p] = endValue;
						continue;
					} else if (p === "transform") {
						_addRawTransformPTs(this, endValue, target);
						continue;
					}
				} else if (!(p in style)) p = _checkPropPrefix(p) || p;
				if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
					startUnit = (startValue + "").substr((startNum + "").length);
					endNum || (endNum = 0);
					endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
					startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
					this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
					this._pt.u = endUnit || 0;
					if (isTransformRelated && finalTransformValue !== endValue) {
						this._pt.b = startValue;
						this._pt.e = finalTransformValue;
						this._pt.r = _renderCSSPropWithBeginningAndEnd;
					} else if (startUnit !== endUnit && endUnit !== "%") {
						this._pt.b = startValue;
						this._pt.r = _renderCSSPropWithBeginning;
					}
				} else if (!(p in style)) {
					if (p in target) this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
					else if (p !== "parseTransform") {
						_missingPlugin(p, endValue);
						continue;
					}
				} else _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
				isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : typeof target[p] === "function" ? inlineProps.push(p, 2, target[p]()) : inlineProps.push(p, 1, startValue || target[p]));
				props.push(p);
			}
		}
		hasPriority && _sortPropTweensByPriority(this);
	},
	render: function render(ratio, data) {
		if (data.tween._time || !_reverting()) {
			var pt = data._pt;
			while (pt) {
				pt.r(ratio, pt.d);
				pt = pt._next;
			}
		} else data.styles.revert();
	},
	get: _get,
	aliases: _propertyAliases,
	getSetter: function getSetter(target, property, plugin) {
		var p = _propertyAliases[property];
		p && p.indexOf(",") < 0 && (property = p);
		return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
	},
	core: {
		_removeProperty,
		_getMatrix
	}
};
gsap$2.utils.checkPrefix = _checkPropPrefix;
gsap$2.core.getStyleSaver = _getStyleSaver;
(function(positionAndScale, rotation, others, aliases) {
	var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
		_transformProps[name] = 1;
	});
	_forEachName(rotation, function(name) {
		_config.units[name] = "deg";
		_rotationalProperties[name] = 1;
	});
	_propertyAliases[all[13]] = positionAndScale + "," + rotation;
	_forEachName(aliases, function(name) {
		var split = name.split(":");
		_propertyAliases[split[1]] = all[split[0]];
	});
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
_forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
	_config.units[name] = "px";
});
gsap$2.registerPlugin(CSSPlugin);
// node_modules/gsap/index.js
var gsapWithCSS = gsap$2.registerPlugin(CSSPlugin) || gsap$2;
gsapWithCSS.core.Tween;
// node_modules/gsap/Observer.js
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
/*!
* Observer 3.15.0
* https://gsap.com
*
* @license Copyright 2008-2026, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license
* @author: Jack Doyle, jack@greensock.com
*/
var gsap$1;
var _coreInitted$1;
var _win$1;
var _doc$1;
var _docEl$1;
var _body$1;
var _isTouch;
var _pointerType;
var ScrollTrigger$1;
var _root$1;
var _normalizer$1;
var _eventTypes;
var _context$1;
var _getGSAP$1 = function _getGSAP() {
	return gsap$1 || typeof window !== "undefined" && (gsap$1 = window.gsap) && gsap$1.registerPlugin && gsap$1;
};
var _startup$1 = 1;
var _observers = [];
var _scrollers = [];
var _proxies = [];
var _getTime$1 = Date.now;
var _bridge = function _bridge(name, value) {
	return value;
};
var _integrate = function _integrate() {
	var core = ScrollTrigger$1.core, data = core.bridge || {}, scrollers = core._scrollers, proxies = core._proxies;
	scrollers.push.apply(scrollers, _scrollers);
	proxies.push.apply(proxies, _proxies);
	_scrollers = scrollers;
	_proxies = proxies;
	_bridge = function _bridge(name, value) {
		return data[name](value);
	};
};
var _getProxyProp = function _getProxyProp(element, property) {
	return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
};
var _isViewport$1 = function _isViewport(el) {
	return !!~_root$1.indexOf(el);
};
var _addListener$1 = function _addListener(element, type, func, passive, capture) {
	return element.addEventListener(type, func, {
		passive: passive !== false,
		capture: !!capture
	});
};
var _removeListener$1 = function _removeListener(element, type, func, capture) {
	return element.removeEventListener(type, func, !!capture);
};
var _scrollLeft = "scrollLeft";
var _scrollTop = "scrollTop";
var _onScroll$1 = function _onScroll() {
	return _normalizer$1 && _normalizer$1.isPressed || _scrollers.cache++;
};
var _scrollCacheFunc = function _scrollCacheFunc(f, doNotCache) {
	var cachingFunc = function cachingFunc(value) {
		if (value || value === 0) {
			_startup$1 && (_win$1.history.scrollRestoration = "manual");
			var isNormalizing = _normalizer$1 && _normalizer$1.isPressed;
			value = cachingFunc.v = Math.round(value) || (_normalizer$1 && _normalizer$1.iOS ? 1 : 0);
			f(value);
			cachingFunc.cacheID = _scrollers.cache;
			isNormalizing && _bridge("ss", value);
		} else if (doNotCache || _scrollers.cache !== cachingFunc.cacheID || _bridge("ref")) {
			cachingFunc.cacheID = _scrollers.cache;
			cachingFunc.v = f();
		}
		return cachingFunc.v + cachingFunc.offset;
	};
	cachingFunc.offset = 0;
	return f && cachingFunc;
};
var _horizontal = {
	s: _scrollLeft,
	p: "left",
	p2: "Left",
	os: "right",
	os2: "Right",
	d: "width",
	d2: "Width",
	a: "x",
	sc: _scrollCacheFunc(function(value) {
		return arguments.length ? _win$1.scrollTo(value, _vertical.sc()) : _win$1.pageXOffset || _doc$1[_scrollLeft] || _docEl$1[_scrollLeft] || _body$1[_scrollLeft] || 0;
	})
};
var _vertical = {
	s: _scrollTop,
	p: "top",
	p2: "Top",
	os: "bottom",
	os2: "Bottom",
	d: "height",
	d2: "Height",
	a: "y",
	op: _horizontal,
	sc: _scrollCacheFunc(function(value) {
		return arguments.length ? _win$1.scrollTo(_horizontal.sc(), value) : _win$1.pageYOffset || _doc$1[_scrollTop] || _docEl$1[_scrollTop] || _body$1[_scrollTop] || 0;
	})
};
var _getTarget = function _getTarget(t, self) {
	return (self && self._ctx && self._ctx.selector || gsap$1.utils.toArray)(t)[0] || (typeof t === "string" && gsap$1.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
};
var _isWithin = function _isWithin(element, list) {
	var i = list.length;
	while (i--) if (list[i] === element || list[i].contains(element)) return true;
	return false;
};
var _getScrollFunc = function _getScrollFunc(element, _ref) {
	var s = _ref.s, sc = _ref.sc;
	_isViewport$1(element) && (element = _doc$1.scrollingElement || _docEl$1);
	var i = _scrollers.indexOf(element), offset = sc === _vertical.sc ? 1 : 2;
	!~i && (i = _scrollers.push(element) - 1);
	_scrollers[i + offset] || _addListener$1(element, "scroll", _onScroll$1);
	var prev = _scrollers[i + offset], func = prev || (_scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport$1(element) ? sc : _scrollCacheFunc(function(value) {
		return arguments.length ? element[s] = value : element[s];
	})));
	func.target = element;
	prev || (func.smooth = gsap$1.getProperty(element, "scrollBehavior") === "smooth");
	return func;
};
var _getVelocityProp = function _getVelocityProp(value, minTimeRefresh, useDelta) {
	var v1 = value, v2 = value, t1 = _getTime$1(), t2 = t1, min = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min * 3), update = function update(value, force) {
		var t = _getTime$1();
		if (force || t - t1 > min) {
			v2 = v1;
			v1 = value;
			t2 = t1;
			t1 = t;
		} else if (useDelta) v1 += value;
		else v1 = v2 + (value - v2) / (t - t2) * (t1 - t2);
	};
	return {
		update,
		reset: function reset() {
			v2 = v1 = useDelta ? 0 : v1;
			t2 = t1 = 0;
		},
		getVelocity: function getVelocity(latestValue) {
			var tOld = t2, vOld = v2, t = _getTime$1();
			(latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
			return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1e3;
		}
	};
};
var _getEvent = function _getEvent(e, preventDefault) {
	preventDefault && !e._gsapAllow && e.cancelable !== false && e.preventDefault();
	return e.changedTouches ? e.changedTouches[0] : e;
};
var _getAbsoluteMax = function _getAbsoluteMax(a) {
	var max = Math.max.apply(Math, a), min = Math.min.apply(Math, a);
	return Math.abs(max) >= Math.abs(min) ? max : min;
};
var _setScrollTrigger = function _setScrollTrigger() {
	ScrollTrigger$1 = gsap$1.core.globals().ScrollTrigger;
	ScrollTrigger$1 && ScrollTrigger$1.core && _integrate();
};
var _initCore = function _initCore(core) {
	gsap$1 = core || _getGSAP$1();
	if (!_coreInitted$1 && gsap$1 && typeof document !== "undefined" && document.body) {
		_win$1 = window;
		_doc$1 = document;
		_docEl$1 = _doc$1.documentElement;
		_body$1 = _doc$1.body;
		_root$1 = [
			_win$1,
			_doc$1,
			_docEl$1,
			_body$1
		];
		gsap$1.utils.clamp;
		_context$1 = gsap$1.core.context || function() {};
		_pointerType = "onpointerenter" in _body$1 ? "pointer" : "mouse";
		_isTouch = Observer.isTouch = _win$1.matchMedia && _win$1.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win$1 || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
		_eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl$1 ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl$1) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
		setTimeout(function() {
			return _startup$1 = 0;
		}, 500);
		_coreInitted$1 = 1;
	}
	ScrollTrigger$1 || _setScrollTrigger();
	return _coreInitted$1;
};
_horizontal.op = _vertical;
_scrollers.cache = 0;
var Observer = /*#__PURE__*/ function() {
	function Observer(vars) {
		this.init(vars);
	}
	var _proto = Observer.prototype;
	_proto.init = function init(vars) {
		_coreInitted$1 || _initCore(gsap$1) || console.warn("Please gsap.registerPlugin(Observer)");
		ScrollTrigger$1 || _setScrollTrigger();
		var tolerance = vars.tolerance, dragMinimum = vars.dragMinimum, type = vars.type, target = vars.target, lineHeight = vars.lineHeight, debounce = vars.debounce, preventDefault = vars.preventDefault, onStop = vars.onStop, onStopDelay = vars.onStopDelay, ignore = vars.ignore, wheelSpeed = vars.wheelSpeed, event = vars.event, onDragStart = vars.onDragStart, onDragEnd = vars.onDragEnd, onDrag = vars.onDrag, onPress = vars.onPress, onRelease = vars.onRelease, onRight = vars.onRight, onLeft = vars.onLeft, onUp = vars.onUp, onDown = vars.onDown, onChangeX = vars.onChangeX, onChangeY = vars.onChangeY, onChange = vars.onChange, onToggleX = vars.onToggleX, onToggleY = vars.onToggleY, onHover = vars.onHover, onHoverEnd = vars.onHoverEnd, onMove = vars.onMove, ignoreCheck = vars.ignoreCheck, isNormalizer = vars.isNormalizer, onGestureStart = vars.onGestureStart, onGestureEnd = vars.onGestureEnd, onWheel = vars.onWheel, onEnable = vars.onEnable, onDisable = vars.onDisable, onClick = vars.onClick, scrollSpeed = vars.scrollSpeed, capture = vars.capture, allowClicks = vars.allowClicks, lockAxis = vars.lockAxis, onLockAxis = vars.onLockAxis;
		this.target = target = _getTarget(target) || _docEl$1;
		this.vars = vars;
		ignore && (ignore = gsap$1.utils.toArray(ignore));
		tolerance = tolerance || 1e-9;
		dragMinimum = dragMinimum || 0;
		wheelSpeed = wheelSpeed || 1;
		scrollSpeed = scrollSpeed || 1;
		type = type || "wheel,touch,pointer";
		debounce = debounce !== false;
		lineHeight || (lineHeight = parseFloat(_win$1.getComputedStyle(_body$1).lineHeight) || 22);
		var id, onStopDelayedCall, dragged, moved, wheeled, locked, axis, self = this, prevDeltaX = 0, prevDeltaY = 0, passive = vars.passive || !preventDefault && vars.passive !== false, scrollFuncX = _getScrollFunc(target, _horizontal), scrollFuncY = _getScrollFunc(target, _vertical), scrollX = scrollFuncX(), scrollY = scrollFuncY(), limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown", isViewport = _isViewport$1(target), ownerDoc = target.ownerDocument || _doc$1, deltaX = [
			0,
			0,
			0
		], deltaY = [
			0,
			0,
			0
		], onClickTime = 0, clickCapture = function clickCapture() {
			return onClickTime = _getTime$1();
		}, _ignoreCheck = function _ignoreCheck(e, isPointerOrTouch) {
			return (self.event = e) && ignore && _isWithin(e.target, ignore) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
		}, onStopFunc = function onStopFunc() {
			self._vx.reset();
			self._vy.reset();
			onStopDelayedCall.pause();
			onStop && onStop(self);
		}, update = function update() {
			var dx = self.deltaX = _getAbsoluteMax(deltaX), dy = self.deltaY = _getAbsoluteMax(deltaY), changedX = Math.abs(dx) >= tolerance, changedY = Math.abs(dy) >= tolerance;
			onChange && (changedX || changedY) && onChange(self, dx, dy, deltaX, deltaY);
			if (changedX) {
				onRight && self.deltaX > 0 && onRight(self);
				onLeft && self.deltaX < 0 && onLeft(self);
				onChangeX && onChangeX(self);
				onToggleX && self.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self);
				prevDeltaX = self.deltaX;
				deltaX[0] = deltaX[1] = deltaX[2] = 0;
			}
			if (changedY) {
				onDown && self.deltaY > 0 && onDown(self);
				onUp && self.deltaY < 0 && onUp(self);
				onChangeY && onChangeY(self);
				onToggleY && self.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self);
				prevDeltaY = self.deltaY;
				deltaY[0] = deltaY[1] = deltaY[2] = 0;
			}
			if (moved || dragged) {
				onMove && onMove(self);
				if (dragged) {
					onDragStart && dragged === 1 && onDragStart(self);
					onDrag && onDrag(self);
					dragged = 0;
				}
				moved = false;
			}
			locked && !(locked = false) && onLockAxis && onLockAxis(self);
			if (wheeled) {
				onWheel(self);
				wheeled = false;
			}
			id = 0;
		}, onDelta = function onDelta(x, y, index) {
			deltaX[index] += x;
			deltaY[index] += y;
			self._vx.update(x);
			self._vy.update(y);
			debounce ? id || (id = requestAnimationFrame(update)) : update();
		}, onTouchOrPointerDelta = function onTouchOrPointerDelta(x, y) {
			if (lockAxis && !axis) {
				self.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
				locked = true;
			}
			if (axis !== "y") {
				deltaX[2] += x;
				self._vx.update(x, true);
			}
			if (axis !== "x") {
				deltaY[2] += y;
				self._vy.update(y, true);
			}
			debounce ? id || (id = requestAnimationFrame(update)) : update();
		}, _onDrag = function _onDrag(e) {
			if (_ignoreCheck(e, 1)) return;
			e = _getEvent(e, preventDefault);
			var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y, isDragging = self.isDragging;
			self.x = x;
			self.y = y;
			if (isDragging || (dx || dy) && (Math.abs(self.startX - x) >= dragMinimum || Math.abs(self.startY - y) >= dragMinimum)) {
				dragged || (dragged = isDragging ? 2 : 1);
				isDragging || (self.isDragging = true);
				onTouchOrPointerDelta(dx, dy);
			}
		}, _onPress = self.onPress = function(e) {
			if (_ignoreCheck(e, 1) || e && e.button) return;
			self.axis = axis = null;
			onStopDelayedCall.pause();
			self.isPressed = true;
			e = _getEvent(e);
			prevDeltaX = prevDeltaY = 0;
			self.startX = self.x = e.clientX;
			self.startY = self.y = e.clientY;
			self._vx.reset();
			self._vy.reset();
			_addListener$1(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, passive, true);
			self.deltaX = self.deltaY = 0;
			onPress && onPress(self);
		}, _onRelease = self.onRelease = function(e) {
			if (_ignoreCheck(e, 1)) return;
			_removeListener$1(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
			var isTrackingDrag = !isNaN(self.y - self.startY), wasDragging = self.isDragging, isDragNotClick = wasDragging && (Math.abs(self.x - self.startX) > 3 || Math.abs(self.y - self.startY) > 3), eventData = _getEvent(e);
			if (!isDragNotClick && isTrackingDrag) {
				self._vx.reset();
				self._vy.reset();
				if (preventDefault && allowClicks) gsap$1.delayedCall(.08, function() {
					if (_getTime$1() - onClickTime > 300 && !e.defaultPrevented) {
						if (e.target.click) e.target.click();
						else if (ownerDoc.createEvent) {
							var syntheticEvent = ownerDoc.createEvent("MouseEvents");
							syntheticEvent.initMouseEvent("click", true, true, _win$1, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
							e.target.dispatchEvent(syntheticEvent);
						}
					}
				});
			}
			self.isDragging = self.isGesturing = self.isPressed = false;
			onStop && wasDragging && !isNormalizer && onStopDelayedCall.restart(true);
			dragged && update();
			onDragEnd && wasDragging && onDragEnd(self);
			onRelease && onRelease(self, isDragNotClick);
		}, _onGestureStart = function _onGestureStart(e) {
			return e.touches && e.touches.length > 1 && (self.isGesturing = true) && onGestureStart(e, self.isDragging);
		}, _onGestureEnd = function _onGestureEnd() {
			return (self.isGesturing = false) || onGestureEnd(self);
		}, onScroll = function onScroll(e) {
			if (_ignoreCheck(e)) return;
			var x = scrollFuncX(), y = scrollFuncY();
			onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
			scrollX = x;
			scrollY = y;
			onStop && onStopDelayedCall.restart(true);
		}, _onWheel = function _onWheel(e) {
			if (_ignoreCheck(e)) return;
			e = _getEvent(e, preventDefault);
			onWheel && (wheeled = true);
			var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? _win$1.innerHeight : 1) * wheelSpeed;
			onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
			onStop && !isNormalizer && onStopDelayedCall.restart(true);
		}, _onMove = function _onMove(e) {
			if (_ignoreCheck(e)) return;
			var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y;
			self.x = x;
			self.y = y;
			moved = true;
			onStop && onStopDelayedCall.restart(true);
			(dx || dy) && onTouchOrPointerDelta(dx, dy);
		}, _onHover = function _onHover(e) {
			self.event = e;
			onHover(self);
		}, _onHoverEnd = function _onHoverEnd(e) {
			self.event = e;
			onHoverEnd(self);
		}, _onClick = function _onClick(e) {
			return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self);
		};
		onStopDelayedCall = self._dc = gsap$1.delayedCall(onStopDelay || .25, onStopFunc).pause();
		self.deltaX = self.deltaY = 0;
		self._vx = _getVelocityProp(0, 50, true);
		self._vy = _getVelocityProp(0, 50, true);
		self.scrollX = scrollFuncX;
		self.scrollY = scrollFuncY;
		self.isDragging = self.isGesturing = self.isPressed = false;
		_context$1(this);
		self.enable = function(e) {
			if (!self.isEnabled) {
				_addListener$1(isViewport ? ownerDoc : target, "scroll", _onScroll$1);
				type.indexOf("scroll") >= 0 && _addListener$1(isViewport ? ownerDoc : target, "scroll", onScroll, passive, capture);
				type.indexOf("wheel") >= 0 && _addListener$1(target, "wheel", _onWheel, passive, capture);
				if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
					_addListener$1(target, _eventTypes[0], _onPress, passive, capture);
					_addListener$1(ownerDoc, _eventTypes[2], _onRelease);
					_addListener$1(ownerDoc, _eventTypes[3], _onRelease);
					allowClicks && _addListener$1(target, "click", clickCapture, true, true);
					onClick && _addListener$1(target, "click", _onClick);
					onGestureStart && _addListener$1(ownerDoc, "gesturestart", _onGestureStart);
					onGestureEnd && _addListener$1(ownerDoc, "gestureend", _onGestureEnd);
					onHover && _addListener$1(target, _pointerType + "enter", _onHover);
					onHoverEnd && _addListener$1(target, _pointerType + "leave", _onHoverEnd);
					onMove && _addListener$1(target, _pointerType + "move", _onMove);
				}
				self.isEnabled = true;
				self.isDragging = self.isGesturing = self.isPressed = moved = dragged = false;
				self._vx.reset();
				self._vy.reset();
				scrollX = scrollFuncX();
				scrollY = scrollFuncY();
				e && e.type && _onPress(e);
				onEnable && onEnable(self);
			}
			return self;
		};
		self.disable = function() {
			if (self.isEnabled) {
				_observers.filter(function(o) {
					return o !== self && _isViewport$1(o.target);
				}).length || _removeListener$1(isViewport ? ownerDoc : target, "scroll", _onScroll$1);
				if (self.isPressed) {
					self._vx.reset();
					self._vy.reset();
					_removeListener$1(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
				}
				_removeListener$1(isViewport ? ownerDoc : target, "scroll", onScroll, capture);
				_removeListener$1(target, "wheel", _onWheel, capture);
				_removeListener$1(target, _eventTypes[0], _onPress, capture);
				_removeListener$1(ownerDoc, _eventTypes[2], _onRelease);
				_removeListener$1(ownerDoc, _eventTypes[3], _onRelease);
				_removeListener$1(target, "click", clickCapture, true);
				_removeListener$1(target, "click", _onClick);
				_removeListener$1(ownerDoc, "gesturestart", _onGestureStart);
				_removeListener$1(ownerDoc, "gestureend", _onGestureEnd);
				_removeListener$1(target, _pointerType + "enter", _onHover);
				_removeListener$1(target, _pointerType + "leave", _onHoverEnd);
				_removeListener$1(target, _pointerType + "move", _onMove);
				self.isEnabled = self.isPressed = self.isDragging = false;
				onDisable && onDisable(self);
			}
		};
		self.kill = self.revert = function() {
			self.disable();
			var i = _observers.indexOf(self);
			i >= 0 && _observers.splice(i, 1);
			_normalizer$1 === self && (_normalizer$1 = 0);
		};
		_observers.push(self);
		isNormalizer && _isViewport$1(target) && (_normalizer$1 = self);
		self.enable(event);
	};
	_createClass(Observer, [{
		key: "velocityX",
		get: function get() {
			return this._vx.getVelocity();
		}
	}, {
		key: "velocityY",
		get: function get() {
			return this._vy.getVelocity();
		}
	}]);
	return Observer;
}();
Observer.version = "3.15.0";
Observer.create = function(vars) {
	return new Observer(vars);
};
Observer.register = _initCore;
Observer.getAll = function() {
	return _observers.slice();
};
Observer.getById = function(id) {
	return _observers.filter(function(o) {
		return o.vars.id === id;
	})[0];
};
_getGSAP$1() && gsap$1.registerPlugin(Observer);
// node_modules/gsap/ScrollTrigger.js
/*!
* ScrollTrigger 3.15.0
* https://gsap.com
*
* @license Copyright 2008-2026, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license
* @author: Jack Doyle, jack@greensock.com
*/
var gsap;
var _coreInitted;
var _win;
var _doc;
var _docEl;
var _body;
var _root;
var _resizeDelay;
var _toArray;
var _clamp;
var _time2;
var _syncInterval;
var _refreshing;
var _pointerIsDown;
var _transformProp;
var _i;
var _prevWidth;
var _prevHeight;
var _autoRefresh;
var _sort;
var _suppressOverwrites;
var _ignoreResize;
var _normalizer;
var _ignoreMobileResize;
var _baseScreenHeight;
var _baseScreenWidth;
var _fixIOSBug;
var _context;
var _scrollRestoration;
var _div100vh;
var _100vh;
var _isReverted;
var _clampingMax;
var _limitCallbacks;
var _startup = 1;
var _getTime = Date.now;
var _time1 = _getTime();
var _lastScrollTime = 0;
var _enabled = 0;
var _parseClamp = function _parseClamp(value, type, self) {
	var clamp = _isString(value) && (value.substr(0, 6) === "clamp(" || value.indexOf("max") > -1);
	self["_" + type + "Clamp"] = clamp;
	return clamp ? value.substr(6, value.length - 7) : value;
};
var _keepClamp = function _keepClamp(value, clamp) {
	return clamp && (!_isString(value) || value.substr(0, 6) !== "clamp(") ? "clamp(" + value + ")" : value;
};
var _rafBugFix = function _rafBugFix() {
	return _enabled && requestAnimationFrame(_rafBugFix);
};
var _pointerDownHandler = function _pointerDownHandler() {
	return _pointerIsDown = 1;
};
var _pointerUpHandler = function _pointerUpHandler() {
	return _pointerIsDown = 0;
};
var _passThrough = function _passThrough(v) {
	return v;
};
var _round = function _round(value) {
	return Math.round(value * 1e5) / 1e5 || 0;
};
var _windowExists = function _windowExists() {
	return typeof window !== "undefined";
};
var _getGSAP = function _getGSAP() {
	return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
};
var _isViewport = function _isViewport(e) {
	return !!~_root.indexOf(e);
};
var _getViewportDimension = function _getViewportDimension(dimensionProperty) {
	return (dimensionProperty === "Height" ? _100vh : _win["inner" + dimensionProperty]) || _docEl["client" + dimensionProperty] || _body["client" + dimensionProperty];
};
var _getBoundsFunc = function _getBoundsFunc(element) {
	return _getProxyProp(element, "getBoundingClientRect") || (_isViewport(element) ? function() {
		_winOffsets.width = _win.innerWidth;
		_winOffsets.height = _100vh;
		return _winOffsets;
	} : function() {
		return _getBounds(element);
	});
};
var _getSizeFunc = function _getSizeFunc(scroller, isViewport, _ref) {
	var d = _ref.d, d2 = _ref.d2, a = _ref.a;
	return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function() {
		return a()[d];
	} : function() {
		return (isViewport ? _getViewportDimension(d2) : scroller["client" + d2]) || 0;
	};
};
var _getOffsetsFunc = function _getOffsetsFunc(element, isViewport) {
	return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function() {
		return _winOffsets;
	};
};
var _maxScroll = function _maxScroll(element, _ref2) {
	var s = _ref2.s, d2 = _ref2.d2, d = _ref2.d, a = _ref2.a;
	return Math.max(0, (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport(element) ? (_docEl[s] || _body[s]) - _getViewportDimension(d2) : element[s] - element["offset" + d2]);
};
var _iterateAutoRefresh = function _iterateAutoRefresh(func, events) {
	for (var i = 0; i < _autoRefresh.length; i += 3) (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
};
var _isString = function _isString(value) {
	return typeof value === "string";
};
var _isFunction = function _isFunction(value) {
	return typeof value === "function";
};
var _isNumber = function _isNumber(value) {
	return typeof value === "number";
};
var _isObject = function _isObject(value) {
	return typeof value === "object";
};
var _endAnimation = function _endAnimation(animation, reversed, pause) {
	return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
};
var _callback = function _callback(self, func, extraParam) {
	if (self.enabled) {
		var result = self._ctx ? self._ctx.add(function() {
			return func(self, extraParam);
		}) : func(self, extraParam);
		result && result.totalTime && (self.callbackAnimation = result);
	}
};
var _abs = Math.abs;
var _left = "left";
var _top = "top";
var _right = "right";
var _bottom = "bottom";
var _width = "width";
var _height = "height";
var _Right = "Right";
var _Left = "Left";
var _Top = "Top";
var _Bottom = "Bottom";
var _padding = "padding";
var _margin = "margin";
var _Width = "Width";
var _Height = "Height";
var _px = "px";
var _getComputedStyle = function _getComputedStyle(element) {
	return _win.getComputedStyle(element.nodeType === Node.DOCUMENT_NODE ? element.scrollingElement : element);
};
var _makePositionable = function _makePositionable(element) {
	var position = _getComputedStyle(element).position;
	element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
};
var _setDefaults = function _setDefaults(obj, defaults) {
	for (var p in defaults) p in obj || (obj[p] = defaults[p]);
	return obj;
};
var _getBounds = function _getBounds(element, withoutTransforms) {
	var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap.to(element, {
		x: 0,
		y: 0,
		xPercent: 0,
		yPercent: 0,
		rotation: 0,
		rotationX: 0,
		rotationY: 0,
		scale: 1,
		skewX: 0,
		skewY: 0
	}).progress(1), bounds = element.getBoundingClientRect ? element.getBoundingClientRect() : element.scrollingElement.getBoundingClientRect();
	tween && tween.progress(0).kill();
	return bounds;
};
var _getSize = function _getSize(element, _ref3) {
	var d2 = _ref3.d2;
	return element["offset" + d2] || element["client" + d2] || 0;
};
var _getLabelRatioArray = function _getLabelRatioArray(timeline) {
	var a = [], labels = timeline.labels, duration = timeline.duration(), p;
	for (p in labels) a.push(labels[p] / duration);
	return a;
};
var _getClosestLabel = function _getClosestLabel(animation) {
	return function(value) {
		return gsap.utils.snap(_getLabelRatioArray(animation), value);
	};
};
var _snapDirectional = function _snapDirectional(snapIncrementOrArray) {
	var snap = gsap.utils.snap(snapIncrementOrArray), a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function(a, b) {
		return a - b;
	});
	return a ? function(value, direction, threshold) {
		if (threshold === void 0) threshold = .001;
		var i;
		if (!direction) return snap(value);
		if (direction > 0) {
			value -= threshold;
			for (i = 0; i < a.length; i++) if (a[i] >= value) return a[i];
			return a[i - 1];
		} else {
			i = a.length;
			value += threshold;
			while (i--) if (a[i] <= value) return a[i];
		}
		return a[0];
	} : function(value, direction, threshold) {
		if (threshold === void 0) threshold = .001;
		var snapped = snap(value);
		return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
	};
};
var _getLabelAtDirection = function _getLabelAtDirection(timeline) {
	return function(value, st) {
		return _snapDirectional(_getLabelRatioArray(timeline))(value, st.direction);
	};
};
var _multiListener = function _multiListener(func, element, types, callback) {
	return types.split(",").forEach(function(type) {
		return func(element, type, callback);
	});
};
var _addListener = function _addListener(element, type, func, nonPassive, capture) {
	return element.addEventListener(type, func, {
		passive: !nonPassive,
		capture: !!capture
	});
};
var _removeListener = function _removeListener(element, type, func, capture) {
	return element.removeEventListener(type, func, !!capture);
};
var _wheelListener = function _wheelListener(func, el, scrollFunc) {
	scrollFunc = scrollFunc && scrollFunc.wheelHandler;
	if (scrollFunc) {
		func(el, "wheel", scrollFunc);
		func(el, "touchmove", scrollFunc);
	}
};
var _markerDefaults = {
	startColor: "green",
	endColor: "red",
	indent: 0,
	fontSize: "16px",
	fontWeight: "normal"
};
var _defaults = {
	toggleActions: "play",
	anticipatePin: 0
};
var _keywords = {
	top: 0,
	left: 0,
	center: .5,
	bottom: 1,
	right: 1
};
var _offsetToPx = function _offsetToPx(value, size) {
	if (_isString(value)) {
		var eqIndex = value.indexOf("="), relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
		if (~eqIndex) {
			value.indexOf("%") > eqIndex && (relative *= size / 100);
			value = value.substr(0, eqIndex - 1);
		}
		value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
	}
	return value;
};
var _createMarker = function _createMarker(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
	var startColor = _ref4.startColor, endColor = _ref4.endColor, fontSize = _ref4.fontSize, indent = _ref4.indent, fontWeight = _ref4.fontWeight;
	var e = _doc.createElement("div"), useFixedPosition = _isViewport(container) || _getProxyProp(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? _body : container.tagName === "IFRAME" ? container.contentDocument.body : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
	css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
	(isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
	matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
	e._isStart = isStart;
	e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
	e.style.cssText = css;
	e.innerText = name || name === 0 ? type + "-" + name : type;
	parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
	e._offset = e["offset" + direction.op.d2];
	_positionMarker(e, 0, direction, isStart);
	return e;
};
var _positionMarker = function _positionMarker(marker, start, direction, flipped) {
	var vars = { display: "block" }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
	marker._isFlipped = flipped;
	vars[direction.a + "Percent"] = flipped ? -100 : 0;
	vars[direction.a] = flipped ? "1px" : 0;
	vars["border" + side + _Width] = 1;
	vars["border" + oppositeSide + _Width] = 0;
	vars[direction.p] = start + "px";
	gsap.set(marker, vars);
};
var _triggers = [];
var _ids = {};
var _rafID;
var _sync = function _sync() {
	return _getTime() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
};
var _onScroll = function _onScroll() {
	if (!_normalizer || !_normalizer.isPressed || _normalizer.startX > _body.clientWidth) {
		_scrollers.cache++;
		if (_normalizer) _rafID || (_rafID = requestAnimationFrame(_updateAll));
		else _updateAll();
		_lastScrollTime || _dispatch("scrollStart");
		_lastScrollTime = _getTime();
	}
};
var _setBaseDimensions = function _setBaseDimensions() {
	_baseScreenWidth = _win.innerWidth;
	_baseScreenHeight = _win.innerHeight;
};
var _onResize = function _onResize(force) {
	_scrollers.cache++;
	(force === true || !_refreshing && !_ignoreResize && !_doc.fullscreenElement && !_doc.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win.innerWidth || Math.abs(_win.innerHeight - _baseScreenHeight) > _win.innerHeight * .25)) && _resizeDelay.restart(true);
};
var _listeners = {};
var _emptyArray = [];
var _softRefresh = function _softRefresh() {
	return _removeListener(ScrollTrigger, "scrollEnd", _softRefresh) || _refreshAll(true);
};
var _dispatch = function _dispatch(type) {
	return _listeners[type] && _listeners[type].map(function(f) {
		return f();
	}) || _emptyArray;
};
var _savedStyles = [];
var _revertRecorded = function _revertRecorded(media) {
	for (var i = 0; i < _savedStyles.length; i += 5) if (!media || _savedStyles[i + 4] && _savedStyles[i + 4].query === media) {
		_savedStyles[i].style.cssText = _savedStyles[i + 1];
		_savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
		_savedStyles[i + 3].uncache = 1;
	}
};
var _recordScrollPositions = function _recordScrollPositions() {
	return _scrollers.forEach(function(obj) {
		return _isFunction(obj) && ++obj.cacheID && (obj.rec = obj());
	});
};
var _revertAll = function _revertAll(kill, media) {
	var trigger;
	for (_i = 0; _i < _triggers.length; _i++) {
		trigger = _triggers[_i];
		if (trigger && (!media || trigger._ctx === media)) {
			if (kill) trigger.kill(1);
			else trigger.revert(true, true);
		}
	}
	_isReverted = true;
	media && _revertRecorded(media);
	media || _dispatch("revert");
};
var _clearScrollMemory = function _clearScrollMemory(scrollRestoration, force) {
	_scrollers.cache++;
	(force || !_refreshingAll) && _scrollers.forEach(function(obj) {
		return _isFunction(obj) && obj.cacheID++ && (obj.rec = 0);
	});
	_isString(scrollRestoration) && (_win.history.scrollRestoration = _scrollRestoration = scrollRestoration);
};
var _refreshingAll;
var _refreshID = 0;
var _queueRefreshID;
var _queueRefreshAll = function _queueRefreshAll() {
	if (_queueRefreshID !== _refreshID) {
		var id = _queueRefreshID = _refreshID;
		requestAnimationFrame(function() {
			return id === _refreshID && _refreshAll(true);
		});
	}
};
var _refresh100vh = function _refresh100vh() {
	_body.appendChild(_div100vh);
	_100vh = !_normalizer && _div100vh.offsetHeight || _win.innerHeight;
	_body.removeChild(_div100vh);
};
var _hideAllMarkers = function _hideAllMarkers(hide) {
	return _toArray(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(el) {
		return el.style.display = hide ? "none" : "block";
	});
};
var _refreshAll = function _refreshAll(force, skipRevert) {
	_docEl = _doc.documentElement;
	_body = _doc.body;
	_root = [
		_win,
		_doc,
		_docEl,
		_body
	];
	if (_lastScrollTime && !force && !_isReverted) {
		_addListener(ScrollTrigger, "scrollEnd", _softRefresh);
		return;
	}
	_refresh100vh();
	_refreshingAll = ScrollTrigger.isRefreshing = true;
	_isReverted || _recordScrollPositions();
	var refreshInits = _dispatch("refreshInit");
	_sort && ScrollTrigger.sort();
	skipRevert || _revertAll();
	_scrollers.forEach(function(obj) {
		if (_isFunction(obj)) {
			obj.smooth && (obj.target.style.scrollBehavior = "auto");
			obj(0);
		}
	});
	_triggers.slice(0).forEach(function(t) {
		return t.refresh();
	});
	_isReverted = false;
	_triggers.forEach(function(t) {
		if (t._subPinOffset && t.pin) {
			var prop = t.vars.horizontal ? "offsetWidth" : "offsetHeight", original = t.pin[prop];
			t.revert(true, 1);
			t.adjustPinSpacing(t.pin[prop] - original);
			t.refresh();
		}
	});
	_clampingMax = 1;
	_hideAllMarkers(true);
	_triggers.forEach(function(t) {
		var max = _maxScroll(t.scroller, t._dir), endClamp = t.vars.end === "max" || t._endClamp && t.end > max, startClamp = t._startClamp && t.start >= max;
		(endClamp || startClamp) && t.setPositions(startClamp ? max - 1 : t.start, endClamp ? Math.max(startClamp ? max : t.start + 1, max) : t.end, true);
	});
	_hideAllMarkers(false);
	_clampingMax = 0;
	refreshInits.forEach(function(result) {
		return result && result.render && result.render(-1);
	});
	_scrollers.forEach(function(obj) {
		if (_isFunction(obj)) {
			obj.smooth && requestAnimationFrame(function() {
				return obj.target.style.scrollBehavior = "smooth";
			});
			obj.rec && obj(obj.rec);
		}
	});
	_clearScrollMemory(_scrollRestoration, 1);
	_resizeDelay.pause();
	_refreshID++;
	_refreshingAll = 2;
	_updateAll(2);
	_triggers.forEach(function(t) {
		return _isFunction(t.vars.onRefresh) && t.vars.onRefresh(t);
	});
	_refreshingAll = ScrollTrigger.isRefreshing = false;
	_dispatch("refresh");
};
var _lastScroll = 0;
var _direction = 1;
var _primary;
var _updateAll = function _updateAll(force) {
	if (force === 2 || !_refreshingAll && !_isReverted) {
		ScrollTrigger.isUpdating = true;
		_primary && _primary.update(0);
		var l = _triggers.length, time = _getTime(), recordVelocity = time - _time1 >= 50, scroll = l && _triggers[0].scroll();
		_direction = _lastScroll > scroll ? -1 : 1;
		_refreshingAll || (_lastScroll = scroll);
		if (recordVelocity) {
			if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
				_lastScrollTime = 0;
				_dispatch("scrollEnd");
			}
			_time2 = _time1;
			_time1 = time;
		}
		if (_direction < 0) {
			_i = l;
			while (_i-- > 0) _triggers[_i] && _triggers[_i].update(0, recordVelocity);
			_direction = 1;
		} else for (_i = 0; _i < l; _i++) _triggers[_i] && _triggers[_i].update(0, recordVelocity);
		ScrollTrigger.isUpdating = false;
	}
	_rafID = 0;
};
var _propNamesToCopy = [
	_left,
	_top,
	_bottom,
	_right,
	_margin + _Bottom,
	_margin + _Right,
	_margin + _Top,
	_margin + _Left,
	"display",
	"flexShrink",
	"float",
	"zIndex",
	"gridColumnStart",
	"gridColumnEnd",
	"gridRowStart",
	"gridRowEnd",
	"gridArea",
	"justifySelf",
	"alignSelf",
	"placeSelf",
	"order"
];
var _stateProps = _propNamesToCopy.concat([
	_width,
	_height,
	"boxSizing",
	"max" + _Width,
	"max" + _Height,
	"position",
	_margin,
	_padding,
	_padding + _Top,
	_padding + _Right,
	_padding + _Bottom,
	_padding + _Left
]);
var _swapPinOut = function _swapPinOut(pin, spacer, state) {
	_setState(state);
	var cache = pin._gsap;
	if (cache.spacerIsNative) _setState(cache.spacerState);
	else if (pin._gsap.swappedIn) {
		var parent = spacer.parentNode;
		if (parent) {
			parent.insertBefore(pin, spacer);
			parent.removeChild(spacer);
		}
	}
	pin._gsap.swappedIn = false;
};
var _swapPinIn = function _swapPinIn(pin, spacer, cs, spacerState) {
	if (!pin._gsap.swappedIn) {
		var i = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p;
		while (i--) {
			p = _propNamesToCopy[i];
			spacerStyle[p] = cs[p];
		}
		spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
		cs.display === "inline" && (spacerStyle.display = "inline-block");
		pinStyle[_bottom] = pinStyle[_right] = "auto";
		spacerStyle.flexBasis = cs.flexBasis || "auto";
		spacerStyle.overflow = "visible";
		spacerStyle.boxSizing = "border-box";
		spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
		spacerStyle[_height] = _getSize(pin, _vertical) + _px;
		spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
		_setState(spacerState);
		pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
		pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
		pinStyle[_padding] = cs[_padding];
		if (pin.parentNode !== spacer) {
			pin.parentNode.insertBefore(spacer, pin);
			spacer.appendChild(pin);
		}
		pin._gsap.swappedIn = true;
	}
};
var _capsExp = /([A-Z])/g;
var _setState = function _setState(state) {
	if (state) {
		var style = state.t.style, l = state.length, i = 0, p, value;
		(state.t._gsap || gsap.core.getCache(state.t)).uncache = 1;
		for (; i < l; i += 2) {
			value = state[i + 1];
			p = state[i];
			if (value) style[p] = value;
			else if (style[p]) style.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
		}
	}
};
var _getState = function _getState(element) {
	var l = _stateProps.length, style = element.style, state = [], i = 0;
	for (; i < l; i++) state.push(_stateProps[i], style[_stateProps[i]]);
	state.t = element;
	return state;
};
var _copyState = function _copyState(state, override, omitOffsets) {
	var result = [], l = state.length, i = omitOffsets ? 8 : 0, p;
	for (; i < l; i += 2) {
		p = state[i];
		result.push(p, p in override ? override[p] : state[i + 1]);
	}
	result.t = state.t;
	return result;
};
var _winOffsets = {
	left: 0,
	top: 0
};
var _parsePosition = function _parsePosition(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation, clampZeroProp) {
	_isFunction(value) && (value = value(self));
	if (_isString(value) && value.substr(0, 3) === "max") value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
	var time = containerAnimation ? containerAnimation.time() : 0, p1, p2, element;
	containerAnimation && containerAnimation.seek(0);
	isNaN(value) || (value = +value);
	if (!_isNumber(value)) {
		_isFunction(trigger) && (trigger = trigger(self));
		var offsets = (value || "0").split(" "), bounds, localOffset, globalOffset, display;
		element = _getTarget(trigger, self) || _body;
		bounds = _getBounds(element) || {};
		if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
			display = element.style.display;
			element.style.display = "block";
			bounds = _getBounds(element);
			display ? element.style.display = display : element.style.removeProperty("display");
		}
		localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
		globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
		value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
		markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
		scrollerSize -= scrollerSize - globalOffset;
	} else {
		containerAnimation && (value = gsap.utils.mapRange(containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, 0, scrollerMax, value));
		markerScroller && _positionMarker(markerScroller, scrollerSize, direction, true);
	}
	if (clampZeroProp) {
		self[clampZeroProp] = value || -.001;
		value < 0 && (value = 0);
	}
	if (marker) {
		var position = value + scrollerSize, isStart = marker._isStart;
		p1 = "scroll" + direction.d2;
		_positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body[p1], _docEl[p1]) : marker.parentNode[p1]) <= position + 1);
		if (useFixedPosition) {
			scrollerBounds = _getBounds(markerScroller);
			useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
		}
	}
	if (containerAnimation && element) {
		p1 = _getBounds(element);
		containerAnimation.seek(scrollerMax);
		p2 = _getBounds(element);
		containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
		value = value / containerAnimation._caScrollDist * scrollerMax;
	}
	containerAnimation && containerAnimation.seek(time);
	return containerAnimation ? value : Math.round(value);
};
var _prefixExp = /(webkit|moz|length|cssText|inset)/i;
var _reparent = function _reparent(element, parent, top, left) {
	if (element.parentNode !== parent) {
		var style = element.style, p, cs;
		if (parent === _body) {
			element._stOrig = style.cssText;
			cs = _getComputedStyle(element);
			for (p in cs) if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") style[p] = cs[p];
			style.top = top;
			style.left = left;
		} else style.cssText = element._stOrig;
		gsap.core.getCache(element).uncache = 1;
		parent.appendChild(element);
	}
};
var _interruptionTracker = function _interruptionTracker(getValueFunc, initialValue, onInterrupt) {
	var last1 = initialValue, last2 = last1;
	return function(value) {
		var current = Math.round(getValueFunc());
		if (current !== last1 && current !== last2 && Math.abs(current - last1) > 3 && Math.abs(current - last2) > 3) {
			value = current;
			onInterrupt && onInterrupt();
		}
		last2 = last1;
		last1 = Math.round(value);
		return last1;
	};
};
var _shiftMarker = function _shiftMarker(marker, direction, value) {
	var vars = {};
	vars[direction.p] = "+=" + value;
	gsap.set(marker, vars);
};
var _getTweenCreator = function _getTweenCreator(scroller, direction) {
	var getScroll = _getScrollFunc(scroller, direction), prop = "_scroll" + direction.p2, getTween = function getTween(scrollTo, vars, initialValue, change1, change2) {
		var tween = getTween.tween, onComplete = vars.onComplete, modifiers = {};
		initialValue = initialValue || getScroll();
		var checkForInterruption = _interruptionTracker(getScroll, initialValue, function() {
			tween.kill();
			getTween.tween = 0;
		});
		change2 = change1 && change2 || 0;
		change1 = change1 || scrollTo - initialValue;
		tween && tween.kill();
		vars[prop] = scrollTo;
		vars.inherit = false;
		vars.modifiers = modifiers;
		modifiers[prop] = function() {
			return checkForInterruption(initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio);
		};
		vars.onUpdate = function() {
			_scrollers.cache++;
			getTween.tween && _updateAll();
		};
		vars.onComplete = function() {
			getTween.tween = 0;
			onComplete && onComplete.call(tween);
		};
		tween = getTween.tween = gsap.to(scroller, vars);
		return tween;
	};
	scroller[prop] = getScroll;
	getScroll.wheelHandler = function() {
		return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
	};
	_addListener(scroller, "wheel", getScroll.wheelHandler);
	ScrollTrigger.isTouch && _addListener(scroller, "touchmove", getScroll.wheelHandler);
	return getTween;
};
var ScrollTrigger = /*#__PURE__*/ function() {
	function ScrollTrigger(vars, animation) {
		_coreInitted || ScrollTrigger.register(gsap) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
		_context(this);
		this.init(vars, animation);
	}
	var _proto = ScrollTrigger.prototype;
	_proto.init = function init(vars, animation) {
		this.progress = this.start = 0;
		this.vars && this.kill(true, true);
		if (!_enabled) {
			this.update = this.refresh = this.kill = _passThrough;
			return;
		}
		vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? { trigger: vars } : vars, _defaults);
		var _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap = _vars.snap, pinReparent = _vars.pinReparent, pinSpacer = _vars.pinSpacer, containerAnimation = _vars.containerAnimation, fastScrollEnd = _vars.fastScrollEnd, preventOverlaps = _vars.preventOverlaps, direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical, isToggle = !scrub && scrub !== 0, scroller = _getTarget(vars.scroller || _win), scrollerCache = gsap.core.getCache(scroller), isViewport = _isViewport(scroller), useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed", callbacks = [
			vars.onEnter,
			vars.onLeave,
			vars.onEnterBack,
			vars.onLeaveBack
		], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : _defaults.markers, borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, self = this, onRefreshInit = vars.onRefreshInit && function() {
			return vars.onRefreshInit(self);
		}, getScrollerSize = _getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), lastSnap = 0, lastRefresh = 0, prevProgress = 0, scrollFunc = _getScrollFunc(scroller, direction), tweenTo, pinCache, snapFunc, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, executingOnRefresh, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, pinMoves, markerEndSetter, cs, snap1, snap2, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevScroll, prevAnimProgress, caMarkerSetter, customRevertReturn;
		self._startClamp = self._endClamp = false;
		self._dir = direction;
		anticipatePin *= 45;
		self.scroller = scroller;
		self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
		scroll1 = scrollFunc();
		self.vars = vars;
		animation = animation || vars.animation;
		if ("refreshPriority" in vars) {
			_sort = 1;
			vars.refreshPriority === -9999 && (_primary = self);
		}
		scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
			top: _getTweenCreator(scroller, _vertical),
			left: _getTweenCreator(scroller, _horizontal)
		};
		self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
		self.scrubDuration = function(value) {
			scrubSmooth = _isNumber(value) && value;
			if (!scrubSmooth) {
				scrubTween && scrubTween.progress(1).kill();
				scrubTween = 0;
			} else scrubTween ? scrubTween.duration(value) : scrubTween = gsap.to(animation, {
				ease: "expo",
				totalProgress: "+=0",
				inherit: false,
				duration: scrubSmooth,
				paused: true,
				onComplete: function onComplete() {
					return onScrubComplete && onScrubComplete(self);
				}
			});
		};
		if (animation) {
			animation.vars.lazy = false;
			animation._initted && !self.isReverted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true);
			self.animation = animation.pause();
			animation.scrollTrigger = self;
			self.scrubDuration(scrub);
			snap1 = 0;
			id || (id = animation.vars.id);
		}
		if (snap) {
			if (!_isObject(snap) || snap.push) snap = { snapTo: snap };
			"scrollBehavior" in _body.style && gsap.set(isViewport ? [_body, _docEl] : scroller, { scrollBehavior: "auto" });
			_scrollers.forEach(function(o) {
				return _isFunction(o) && o.target === (isViewport ? _doc.scrollingElement || _docEl : scroller) && (o.smooth = false);
			});
			snapFunc = _isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap.directional !== false ? function(value, st) {
				return _snapDirectional(snap.snapTo)(value, _getTime() - lastRefresh < 500 ? 0 : st.direction);
			} : gsap.utils.snap(snap.snapTo);
			snapDurClamp = snap.duration || {
				min: .1,
				max: 2
			};
			snapDurClamp = _isObject(snapDurClamp) ? _clamp(snapDurClamp.min, snapDurClamp.max) : _clamp(snapDurClamp, snapDurClamp);
			snapDelayedCall = gsap.delayedCall(snap.delay || scrubSmooth / 2 || .1, function() {
				var scroll = scrollFunc(), refreshedRecently = _getTime() - lastRefresh < 500, tween = tweenTo.tween;
				if ((refreshedRecently || Math.abs(self.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
					var progress = (scroll - start) / change, totalProgress = animation && !isToggle ? animation.totalProgress() : progress, velocity = refreshedRecently ? 0 : (totalProgress - snap2) / (_getTime() - _time2) * 1e3 || 0, change1 = gsap.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / .185), naturalEnd = progress + (snap.inertia === false ? 0 : change1), endValue, endScroll, _snap = snap, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete;
					endValue = snapFunc(naturalEnd, self);
					_isNumber(endValue) || (endValue = naturalEnd);
					endScroll = Math.max(0, Math.round(start + endValue * change));
					if (scroll <= end && scroll >= start && endScroll !== scroll) {
						if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) return;
						if (snap.inertia === false) change1 = endValue - progress;
						tweenTo(endScroll, {
							duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * .185 / velocity / .05 || 0)),
							ease: snap.ease || "power3",
							data: _abs(endScroll - scroll),
							onInterrupt: function onInterrupt() {
								return snapDelayedCall.restart(true) && _onInterrupt && _callback(self, _onInterrupt);
							},
							onComplete: function onComplete() {
								self.update();
								lastSnap = scrollFunc();
								if (animation && !isToggle) scrubTween ? scrubTween.resetTo("totalProgress", endValue, animation._tTime / animation._tDur) : animation.progress(endValue);
								snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
								onSnapComplete && onSnapComplete(self);
								_onComplete && _callback(self, _onComplete);
							}
						}, scroll, change1 * change, endScroll - scroll - change1 * change);
						onStart && _callback(self, onStart, tweenTo.tween);
					}
				} else if (self.isActive && lastSnap !== scroll) snapDelayedCall.restart(true);
			}).pause();
		}
		id && (_ids[id] = self);
		trigger = self.trigger = _getTarget(trigger || pin !== true && pin);
		customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
		customRevertReturn && (customRevertReturn = customRevertReturn(self));
		pin = pin === true ? trigger : _getTarget(pin);
		_isString(toggleClass) && (toggleClass = {
			targets: trigger,
			className: toggleClass
		});
		if (pin) {
			pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding);
			self.pin = pin;
			pinCache = gsap.core.getCache(pin);
			if (!pinCache.spacer) {
				if (pinSpacer) {
					pinSpacer = _getTarget(pinSpacer);
					pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement);
					pinCache.spacerIsNative = !!pinSpacer;
					pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
				}
				pinCache.spacer = spacer = pinSpacer || _doc.createElement("div");
				spacer.classList.add("pin-spacer");
				id && spacer.classList.add("pin-spacer-" + id);
				pinCache.pinState = pinOriginalState = _getState(pin);
			} else pinOriginalState = pinCache.pinState;
			vars.force3D !== false && gsap.set(pin, { force3D: true });
			self.spacer = spacer = pinCache.spacer;
			cs = _getComputedStyle(pin);
			spacingStart = cs[pinSpacing + direction.os2];
			pinGetter = gsap.getProperty(pin);
			pinSetter = gsap.quickSetter(pin, direction.a, _px);
			_swapPinIn(pin, spacer, cs);
			pinState = _getState(pin);
		}
		if (markers) {
			markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
			markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
			markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
			offset = markerStartTrigger["offset" + direction.op.d2];
			var content = _getTarget(_getProxyProp(scroller, "content") || scroller);
			markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
			markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
			containerAnimation && (caMarkerSetter = gsap.quickSetter([markerStart, markerEnd], direction.a, _px));
			if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
				_makePositionable(isViewport ? _body : scroller);
				gsap.set([markerStartTrigger, markerEndTrigger], { force3D: true });
				markerStartSetter = gsap.quickSetter(markerStartTrigger, direction.a, _px);
				markerEndSetter = gsap.quickSetter(markerEndTrigger, direction.a, _px);
			}
		}
		if (containerAnimation) {
			var oldOnUpdate = containerAnimation.vars.onUpdate, oldParams = containerAnimation.vars.onUpdateParams;
			containerAnimation.eventCallback("onUpdate", function() {
				self.update(0, 0, 1);
				oldOnUpdate && oldOnUpdate.apply(containerAnimation, oldParams || []);
			});
		}
		self.previous = function() {
			return _triggers[_triggers.indexOf(self) - 1];
		};
		self.next = function() {
			return _triggers[_triggers.indexOf(self) + 1];
		};
		self.revert = function(revert, temp) {
			if (!temp) return self.kill(true);
			var r = revert !== false || !self.enabled, prevRefreshing = _refreshing;
			if (r !== self.isReverted) {
				if (r) {
					prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0);
					prevProgress = self.progress;
					prevAnimProgress = animation && animation.progress();
				}
				markerStart && [
					markerStart,
					markerEnd,
					markerStartTrigger,
					markerEndTrigger
				].forEach(function(m) {
					return m.style.display = r ? "none" : "block";
				});
				if (r) {
					_refreshing = self;
					self.update(r);
				}
				if (pin && (!pinReparent || !self.isActive)) {
					if (r) _swapPinOut(pin, spacer, pinOriginalState);
					else _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState);
				}
				r || self.update(r);
				_refreshing = prevRefreshing;
				self.isReverted = r;
			}
		};
		self.refresh = function(soft, force, position, pinOffset) {
			if ((_refreshing || !self.enabled) && !force) return;
			if (pin && soft && _lastScrollTime) {
				_addListener(ScrollTrigger, "scrollEnd", _softRefresh);
				return;
			}
			!_refreshingAll && onRefreshInit && onRefreshInit(self);
			_refreshing = self;
			if (tweenTo.tween && !position) {
				tweenTo.tween.kill();
				tweenTo.tween = 0;
			}
			scrubTween && scrubTween.pause();
			if (invalidateOnRefresh && animation) {
				animation.revert({ kill: false }).invalidate();
				animation.getChildren ? animation.getChildren(true, true, false).forEach(function(t) {
					return t.vars.immediateRender && t.render(0, true, true);
				}) : animation.vars.immediateRender && animation.render(0, true, true);
			}
			self.isReverted || self.revert(true, true);
			self._subPinOffset = false;
			var size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction), isFirstRefresh = change <= .01 || !change, offset = 0, otherPinOffset = pinOffset || 0, parsedEnd = _isObject(position) ? position.end : vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = _isObject(position) ? position.start : vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = self.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer, self), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0, i = triggerIndex, cs, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins, forcedOverflow, markerStartOffset, markerEndOffset;
			if (markers && _isObject(position)) {
				markerStartOffset = gsap.getProperty(markerStartTrigger, direction.p);
				markerEndOffset = gsap.getProperty(markerEndTrigger, direction.p);
			}
			while (i-- > 0) {
				curTrigger = _triggers[i];
				curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self);
				curPin = curTrigger.pin;
				if (curPin && (curPin === trigger || curPin === pin || curPin === pinnedContainer) && !curTrigger.isReverted) {
					revertedPins || (revertedPins = []);
					revertedPins.unshift(curTrigger);
					curTrigger.revert(true, true);
				}
				if (curTrigger !== _triggers[i]) {
					triggerIndex--;
					i--;
				}
			}
			_isFunction(parsedStart) && (parsedStart = parsedStart(self));
			parsedStart = _parseClamp(parsedStart, "start", self);
			start = _parsePosition(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._startClamp && "_startClamp") || (pin ? -.001 : 0);
			_isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));
			if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
				if (~parsedEnd.indexOf(" ")) parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
				else {
					offset = _offsetToPx(parsedEnd.substr(2), size);
					parsedEnd = _isString(parsedStart) ? parsedStart : (containerAnimation ? gsap.utils.mapRange(0, containerAnimation.duration(), containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, start) : start) + offset;
					parsedEndTrigger = trigger;
				}
			}
			parsedEnd = _parseClamp(parsedEnd, "end", self);
			end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._endClamp && "_endClamp")) || -.001;
			offset = 0;
			i = triggerIndex;
			while (i--) {
				curTrigger = _triggers[i] || {};
				curPin = curTrigger.pin;
				if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
					cs = curTrigger.end - (self._startClamp ? Math.max(0, curTrigger.start) : curTrigger.start);
					if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && isNaN(parsedStart)) offset += cs * (1 - curTrigger.progress);
					curPin === pin && (otherPinOffset += cs);
				}
			}
			start += offset;
			end += offset;
			self._startClamp && (self._startClamp += offset);
			if (self._endClamp && !_refreshingAll) {
				self._endClamp = end || -.001;
				end = Math.min(end, _maxScroll(scroller, direction));
			}
			change = end - start || (start -= .01) && .001;
			if (isFirstRefresh) prevProgress = gsap.utils.clamp(0, 1, gsap.utils.normalize(start, end, prevScroll));
			self._pinPush = otherPinOffset;
			if (markerStart && offset) {
				cs = {};
				cs[direction.a] = "+=" + offset;
				pinnedContainer && (cs[direction.p] = "-=" + scrollFunc());
				gsap.set([markerStart, markerEnd], cs);
			}
			if (pin && !(_clampingMax && self.end >= _maxScroll(scroller, direction))) {
				cs = _getComputedStyle(pin);
				isVertical = direction === _vertical;
				scroll = scrollFunc();
				pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
				if (!max && end > 1) {
					forcedOverflow = (isViewport ? _doc.scrollingElement || _docEl : scroller).style;
					forcedOverflow = {
						style: forcedOverflow,
						value: forcedOverflow["overflow" + direction.a.toUpperCase()]
					};
					if (isViewport && _getComputedStyle(_body)["overflow" + direction.a.toUpperCase()] !== "scroll") forcedOverflow.style["overflow" + direction.a.toUpperCase()] = "scroll";
				}
				_swapPinIn(pin, spacer, cs);
				pinState = _getState(pin);
				bounds = _getBounds(pin, true);
				oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();
				if (pinSpacing) {
					spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
					spacerState.t = spacer;
					i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
					if (i) {
						spacerState.push(direction.d, i + _px);
						spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px);
					}
					_setState(spacerState);
					if (pinnedContainer) _triggers.forEach(function(t) {
						if (t.pin === pinnedContainer && t.vars.pinSpacing !== false) t._subPinOffset = true;
					});
					useFixedPosition && scrollFunc(prevScroll);
				} else {
					i = _getSize(pin, direction);
					i && spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px);
				}
				if (useFixedPosition) {
					override = {
						top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
						left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
						boxSizing: "border-box",
						position: "fixed"
					};
					override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
					override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
					override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
					override[_padding] = cs[_padding];
					override[_padding + _Top] = cs[_padding + _Top];
					override[_padding + _Right] = cs[_padding + _Right];
					override[_padding + _Bottom] = cs[_padding + _Bottom];
					override[_padding + _Left] = cs[_padding + _Left];
					pinActiveState = _copyState(pinOriginalState, override, pinReparent);
					_refreshingAll && scrollFunc(0);
				}
				if (animation) {
					initted = animation._initted;
					_suppressOverwrites(1);
					animation.render(animation.duration(), true, true);
					pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
					pinMoves = Math.abs(change - pinChange) > 1;
					useFixedPosition && pinMoves && pinActiveState.splice(pinActiveState.length - 2, 2);
					animation.render(0, true, true);
					initted || animation.invalidate(true);
					animation.parent || animation.totalTime(animation.totalTime());
					_suppressOverwrites(0);
				} else pinChange = change;
				forcedOverflow && (forcedOverflow.value ? forcedOverflow.style["overflow" + direction.a.toUpperCase()] = forcedOverflow.value : forcedOverflow.style.removeProperty("overflow-" + direction.a));
			} else if (trigger && scrollFunc() && !containerAnimation) {
				bounds = trigger.parentNode;
				while (bounds && bounds !== _body) {
					if (bounds._pinOffset) {
						start -= bounds._pinOffset;
						end -= bounds._pinOffset;
					}
					bounds = bounds.parentNode;
				}
			}
			revertedPins && revertedPins.forEach(function(t) {
				return t.revert(false, true);
			});
			self.start = start;
			self.end = end;
			scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc();
			if (!containerAnimation && !_refreshingAll) {
				scroll1 < prevScroll && scrollFunc(prevScroll);
				self.scroll.rec = 0;
			}
			self.revert(false, true);
			lastRefresh = _getTime();
			if (snapDelayedCall) {
				lastSnap = -1;
				snapDelayedCall.restart(true);
			}
			_refreshing = 0;
			animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress || 0, true).render(animation.time(), true, true);
			if (isFirstRefresh || prevProgress !== self.progress || containerAnimation || invalidateOnRefresh || animation && !animation._initted) {
				animation && !isToggle && (animation._initted || prevProgress || animation.vars.immediateRender !== false) && animation.totalProgress(containerAnimation && start < -.001 && !prevProgress ? gsap.utils.normalize(start, end, 0) : prevProgress, true);
				self.progress = isFirstRefresh || (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
			}
			pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
			scrubTween && scrubTween.invalidate();
			if (!isNaN(markerStartOffset)) {
				markerStartOffset -= gsap.getProperty(markerStartTrigger, direction.p);
				markerEndOffset -= gsap.getProperty(markerEndTrigger, direction.p);
				_shiftMarker(markerStartTrigger, direction, markerStartOffset);
				_shiftMarker(markerStart, direction, markerStartOffset - (pinOffset || 0));
				_shiftMarker(markerEndTrigger, direction, markerEndOffset);
				_shiftMarker(markerEnd, direction, markerEndOffset - (pinOffset || 0));
			}
			isFirstRefresh && !_refreshingAll && self.update();
			if (onRefresh && !_refreshingAll && !executingOnRefresh) {
				executingOnRefresh = true;
				onRefresh(self);
				executingOnRefresh = false;
			}
		};
		self.getVelocity = function() {
			return (scrollFunc() - scroll2) / (_getTime() - _time2) * 1e3 || 0;
		};
		self.endAnimation = function() {
			_endAnimation(self.callbackAnimation);
			if (animation) scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self.direction < 0, 1);
		};
		self.labelToScroll = function(label) {
			return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
		};
		self.getTrailing = function(name) {
			var i = _triggers.indexOf(self), a = self.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);
			return (_isString(name) ? a.filter(function(t) {
				return t.vars.preventOverlaps === name;
			}) : a).filter(function(t) {
				return self.direction > 0 ? t.end <= start : t.start >= end;
			});
		};
		self.update = function(reset, recordVelocity, forceFake) {
			if (containerAnimation && !forceFake && !reset) return;
			var scroll = _refreshingAll === true ? prevScroll : self.scroll(), p = reset ? 0 : (scroll - start) / change, clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0, prevProgress = self.progress, isActive, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction;
			if (recordVelocity) {
				scroll2 = scroll1;
				scroll1 = containerAnimation ? scrollFunc() : scroll;
				if (snap) {
					snap2 = snap1;
					snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
				}
			}
			if (anticipatePin && pin && !_refreshing && !_startup && _lastScrollTime) {
				if (!clipped && start < scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin) clipped = 1e-4;
				else if (clipped === 1 && end > scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin) clipped = .9999;
			}
			if (clipped !== prevProgress && self.enabled) {
				isActive = self.isActive = !!clipped && clipped < 1;
				wasActive = !!prevProgress && prevProgress < 1;
				toggled = isActive !== wasActive;
				stateChanged = toggled || !!clipped !== !!prevProgress;
				self.direction = clipped > prevProgress ? 1 : -1;
				self.progress = clipped;
				if (stateChanged && !_refreshing) {
					toggleState = clipped && !prevProgress ? 0 : clipped === 1 ? 1 : prevProgress === 1 ? 2 : 3;
					if (isToggle) {
						action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];
						isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
					}
				}
				preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function(t) {
					return t.endAnimation();
				}));
				if (!isToggle) {
					if (scrubTween && !_refreshing && !_startup) {
						scrubTween._dp._time - scrubTween._start !== scrubTween._time && scrubTween.render(scrubTween._dp._time - scrubTween._start);
						if (scrubTween.resetTo) scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
						else {
							scrubTween.vars.totalProgress = clipped;
							scrubTween.invalidate().restart();
						}
					} else if (animation) animation.totalProgress(clipped, !!(_refreshing && (lastRefresh || reset)));
				}
				if (pin) {
					reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
					if (!useFixedPosition) pinSetter(_round(pinStart + pinChange * clipped));
					else if (stateChanged) {
						isAtMax = !reset && clipped > prevProgress && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);
						if (pinReparent) {
							if (!reset && (isActive || isAtMax)) {
								var bounds = _getBounds(pin, true), _offset = scroll - start;
								_reparent(pin, _body, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
							} else _reparent(pin, spacer);
						}
						_setState(isActive || isAtMax ? pinActiveState : pinState);
						pinMoves && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
					}
				}
				snap && !tweenTo.tween && !_refreshing && !_startup && snapDelayedCall.restart(true);
				toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function(el) {
					return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
				});
				onUpdate && !isToggle && !reset && onUpdate(self);
				if (stateChanged && !_refreshing) {
					if (isToggle) {
						if (isTakingAction) {
							if (action === "complete") animation.pause().totalProgress(1);
							else if (action === "reset") animation.restart(true).pause();
							else if (action === "restart") animation.restart(true);
							else animation[action]();
						}
						onUpdate && onUpdate(self);
					}
					if (toggled || !_limitCallbacks) {
						onToggle && toggled && _callback(self, onToggle);
						callbacks[toggleState] && _callback(self, callbacks[toggleState]);
						once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0);
						if (!toggled) {
							toggleState = clipped === 1 ? 1 : 3;
							callbacks[toggleState] && _callback(self, callbacks[toggleState]);
						}
					}
					if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > (_isNumber(fastScrollEnd) ? fastScrollEnd : 2500)) {
						_endAnimation(self.callbackAnimation);
						scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
					}
				} else if (isToggle && onUpdate && !_refreshing) onUpdate(self);
			}
			if (markerEndSetter) {
				var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
				markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
				markerEndSetter(n);
			}
			caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
		};
		self.enable = function(reset, refresh) {
			if (!self.enabled) {
				self.enabled = true;
				_addListener(scroller, "resize", _onResize);
				isViewport || _addListener(scroller, "scroll", _onScroll);
				onRefreshInit && _addListener(ScrollTrigger, "refreshInit", onRefreshInit);
				if (reset !== false) {
					self.progress = prevProgress = 0;
					scroll1 = scroll2 = lastSnap = scrollFunc();
				}
				refresh !== false && self.refresh();
			}
		};
		self.getTween = function(snap) {
			return snap && tweenTo ? tweenTo.tween : scrubTween;
		};
		self.setPositions = function(newStart, newEnd, keepClamp, pinOffset) {
			if (containerAnimation) {
				var st = containerAnimation.scrollTrigger, duration = containerAnimation.duration(), _change = st.end - st.start;
				newStart = st.start + _change * newStart / duration;
				newEnd = st.start + _change * newEnd / duration;
			}
			self.refresh(false, false, {
				start: _keepClamp(newStart, keepClamp && !!self._startClamp),
				end: _keepClamp(newEnd, keepClamp && !!self._endClamp)
			}, pinOffset);
			self.update();
		};
		self.adjustPinSpacing = function(amount) {
			if (spacerState && amount) {
				var i = spacerState.indexOf(direction.d) + 1;
				spacerState[i] = parseFloat(spacerState[i]) + amount + _px;
				spacerState[1] = parseFloat(spacerState[1]) + amount + _px;
				_setState(spacerState);
			}
		};
		self.disable = function(reset, allowAnimation) {
			reset !== false && self.revert(true, true);
			if (self.enabled) {
				self.enabled = self.isActive = false;
				allowAnimation || scrubTween && scrubTween.pause();
				prevScroll = 0;
				pinCache && (pinCache.uncache = 1);
				onRefreshInit && _removeListener(ScrollTrigger, "refreshInit", onRefreshInit);
				if (snapDelayedCall) {
					snapDelayedCall.pause();
					tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
				}
				if (!isViewport) {
					var i = _triggers.length;
					while (i--) if (_triggers[i].scroller === scroller && _triggers[i] !== self) return;
					_removeListener(scroller, "resize", _onResize);
					isViewport || _removeListener(scroller, "scroll", _onScroll);
				}
			}
		};
		self.kill = function(revert, allowAnimation) {
			self.disable(revert, allowAnimation);
			scrubTween && !allowAnimation && scrubTween.kill();
			id && delete _ids[id];
			var i = _triggers.indexOf(self);
			i >= 0 && _triggers.splice(i, 1);
			i === _i && _direction > 0 && _i--;
			i = 0;
			_triggers.forEach(function(t) {
				return t.scroller === self.scroller && (i = 1);
			});
			i || _refreshingAll || (self.scroll.rec = 0);
			if (animation) {
				animation.scrollTrigger = null;
				revert && animation.revert({ kill: false });
				allowAnimation || animation.kill();
			}
			markerStart && [
				markerStart,
				markerEnd,
				markerStartTrigger,
				markerEndTrigger
			].forEach(function(m) {
				return m.parentNode && m.parentNode.removeChild(m);
			});
			_primary === self && (_primary = 0);
			if (pin) {
				pinCache && (pinCache.uncache = 1);
				i = 0;
				_triggers.forEach(function(t) {
					return t.pin === pin && i++;
				});
				i || (pinCache.spacer = 0);
			}
			vars.onKill && vars.onKill(self);
		};
		_triggers.push(self);
		self.enable(false, false);
		customRevertReturn && customRevertReturn(self);
		if (animation && animation.add && !change) {
			var updateFunc = self.update;
			self.update = function() {
				self.update = updateFunc;
				_scrollers.cache++;
				start || end || self.refresh();
			};
			gsap.delayedCall(.01, self.update);
			change = .01;
			start = end = 0;
		} else self.refresh();
		pin && _queueRefreshAll();
	};
	ScrollTrigger.register = function register(core) {
		if (!_coreInitted) {
			gsap = core || _getGSAP();
			_windowExists() && window.document && ScrollTrigger.enable();
			_coreInitted = _enabled;
		}
		return _coreInitted;
	};
	ScrollTrigger.defaults = function defaults(config) {
		if (config) for (var p in config) _defaults[p] = config[p];
		return _defaults;
	};
	ScrollTrigger.disable = function disable(reset, kill) {
		_enabled = 0;
		_triggers.forEach(function(trigger) {
			return trigger[kill ? "kill" : "disable"](reset);
		});
		_removeListener(_win, "wheel", _onScroll);
		_removeListener(_doc, "scroll", _onScroll);
		clearInterval(_syncInterval);
		_removeListener(_doc, "touchcancel", _passThrough);
		_removeListener(_body, "touchstart", _passThrough);
		_multiListener(_removeListener, _doc, "pointerdown,touchstart,mousedown", _pointerDownHandler);
		_multiListener(_removeListener, _doc, "pointerup,touchend,mouseup", _pointerUpHandler);
		_resizeDelay.kill();
		_iterateAutoRefresh(_removeListener);
		for (var i = 0; i < _scrollers.length; i += 3) {
			_wheelListener(_removeListener, _scrollers[i], _scrollers[i + 1]);
			_wheelListener(_removeListener, _scrollers[i], _scrollers[i + 2]);
		}
	};
	ScrollTrigger.enable = function enable() {
		_win = window;
		_doc = document;
		_docEl = _doc.documentElement;
		_body = _doc.body;
		if (gsap) {
			_toArray = gsap.utils.toArray;
			_clamp = gsap.utils.clamp;
			_context = gsap.core.context || _passThrough;
			_suppressOverwrites = gsap.core.suppressOverwrites || _passThrough;
			_scrollRestoration = _win.history.scrollRestoration || "auto";
			_lastScroll = _win.pageYOffset || 0;
			gsap.core.globals("ScrollTrigger", ScrollTrigger);
			if (_body) {
				_enabled = 1;
				_div100vh = document.createElement("div");
				_div100vh.style.height = "100vh";
				_div100vh.style.position = "absolute";
				_refresh100vh();
				_rafBugFix();
				Observer.register(gsap);
				ScrollTrigger.isTouch = Observer.isTouch;
				_fixIOSBug = Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);
				_ignoreMobileResize = Observer.isTouch === 1;
				_addListener(_win, "wheel", _onScroll);
				_root = [
					_win,
					_doc,
					_docEl,
					_body
				];
				if (gsap.matchMedia) {
					ScrollTrigger.matchMedia = function(vars) {
						var mm = gsap.matchMedia(), p;
						for (p in vars) mm.add(p, vars[p]);
						return mm;
					};
					gsap.addEventListener("matchMediaInit", function() {
						_recordScrollPositions();
						_revertAll();
					});
					gsap.addEventListener("matchMediaRevert", function() {
						return _revertRecorded();
					});
					gsap.addEventListener("matchMedia", function() {
						_refreshAll(0, 1);
						_dispatch("matchMedia");
					});
					gsap.matchMedia().add("(orientation: portrait)", function() {
						_setBaseDimensions();
						return _setBaseDimensions;
					});
				} else console.warn("Requires GSAP 3.11.0 or later");
				_setBaseDimensions();
				_addListener(_doc, "scroll", _onScroll);
				var bodyHasStyle = _body.hasAttribute("style"), bodyStyle = _body.style, border = bodyStyle.borderTopStyle, AnimationProto = gsap.core.Animation.prototype, bounds, i;
				AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", { value: function value() {
					return this.time(-.01, true);
				} });
				bodyStyle.borderTopStyle = "solid";
				bounds = _getBounds(_body);
				_vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
				_horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
				border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");
				if (!bodyHasStyle) {
					_body.setAttribute("style", "");
					_body.removeAttribute("style");
				}
				_syncInterval = setInterval(_sync, 250);
				gsap.delayedCall(.5, function() {
					return _startup = 0;
				});
				_addListener(_doc, "touchcancel", _passThrough);
				_addListener(_body, "touchstart", _passThrough);
				_multiListener(_addListener, _doc, "pointerdown,touchstart,mousedown", _pointerDownHandler);
				_multiListener(_addListener, _doc, "pointerup,touchend,mouseup", _pointerUpHandler);
				_transformProp = gsap.utils.checkPrefix("transform");
				_stateProps.push(_transformProp);
				_coreInitted = _getTime();
				_resizeDelay = gsap.delayedCall(.2, _refreshAll).pause();
				_autoRefresh = [
					_doc,
					"visibilitychange",
					function() {
						var w = _win.innerWidth, h = _win.innerHeight;
						if (_doc.hidden) {
							_prevWidth = w;
							_prevHeight = h;
						} else if (_prevWidth !== w || _prevHeight !== h) _onResize();
					},
					_doc,
					"DOMContentLoaded",
					_refreshAll,
					_win,
					"load",
					_refreshAll,
					_win,
					"resize",
					_onResize
				];
				_iterateAutoRefresh(_addListener);
				_triggers.forEach(function(trigger) {
					return trigger.enable(0, 1);
				});
				for (i = 0; i < _scrollers.length; i += 3) {
					_wheelListener(_removeListener, _scrollers[i], _scrollers[i + 1]);
					_wheelListener(_removeListener, _scrollers[i], _scrollers[i + 2]);
				}
			} else if (_doc) _doc.addEventListener("DOMContentLoaded", function onLoad() {
				ScrollTrigger.enable();
				_doc.removeEventListener("DOMContentLoaded", onLoad);
			});
		}
	};
	ScrollTrigger.config = function config(vars) {
		"limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
		var ms = vars.syncInterval;
		ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
		"ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger.isTouch === 1 && vars.ignoreMobileResize);
		if ("autoRefreshEvents" in vars) {
			_iterateAutoRefresh(_removeListener) || _iterateAutoRefresh(_addListener, vars.autoRefreshEvents || "none");
			_ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
		}
	};
	ScrollTrigger.scrollerProxy = function scrollerProxy(target, vars) {
		var t = _getTarget(target), i = _scrollers.indexOf(t), isViewport = _isViewport(t);
		if (~i) _scrollers.splice(i, isViewport ? 6 : 2);
		if (vars) isViewport ? _proxies.unshift(_win, vars, _body, vars, _docEl, vars) : _proxies.unshift(t, vars);
	};
	ScrollTrigger.clearMatchMedia = function clearMatchMedia(query) {
		_triggers.forEach(function(t) {
			return t._ctx && t._ctx.query === query && t._ctx.kill(true, true);
		});
	};
	ScrollTrigger.isInViewport = function isInViewport(element, ratio, horizontal) {
		var bounds = (_isString(element) ? _getTarget(element) : element).getBoundingClientRect(), offset = bounds[horizontal ? _width : _height] * ratio || 0;
		return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win.innerHeight;
	};
	ScrollTrigger.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
		_isString(element) && (element = _getTarget(element));
		var bounds = element.getBoundingClientRect(), size = bounds[horizontal ? _width : _height], offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
		return horizontal ? (bounds.left + offset) / _win.innerWidth : (bounds.top + offset) / _win.innerHeight;
	};
	ScrollTrigger.killAll = function killAll(allowListeners) {
		_triggers.slice(0).forEach(function(t) {
			return t.vars.id !== "ScrollSmoother" && t.kill();
		});
		if (allowListeners !== true) {
			var listeners = _listeners.killAll || [];
			_listeners = {};
			listeners.forEach(function(f) {
				return f();
			});
		}
	};
	return ScrollTrigger;
}();
ScrollTrigger.version = "3.15.0";
ScrollTrigger.saveStyles = function(targets) {
	return targets ? _toArray(targets).forEach(function(target) {
		if (target && target.style) {
			var i = _savedStyles.indexOf(target);
			i >= 0 && _savedStyles.splice(i, 5);
			_savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap.core.getCache(target), _context());
		}
	}) : _savedStyles;
};
ScrollTrigger.revert = function(soft, media) {
	return _revertAll(!soft, media);
};
ScrollTrigger.create = function(vars, animation) {
	return new ScrollTrigger(vars, animation);
};
ScrollTrigger.refresh = function(safe) {
	return safe ? _onResize(true) : (_coreInitted || ScrollTrigger.register()) && _refreshAll(true);
};
ScrollTrigger.update = function(force) {
	return ++_scrollers.cache && _updateAll(force === true ? 2 : 0);
};
ScrollTrigger.clearScrollMemory = _clearScrollMemory;
ScrollTrigger.maxScroll = function(element, horizontal) {
	return _maxScroll(element, horizontal ? _horizontal : _vertical);
};
ScrollTrigger.getScrollFunc = function(element, horizontal) {
	return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
};
ScrollTrigger.getById = function(id) {
	return _ids[id];
};
ScrollTrigger.getAll = function() {
	return _triggers.filter(function(t) {
		return t.vars.id !== "ScrollSmoother";
	});
};
ScrollTrigger.isScrolling = function() {
	return !!_lastScrollTime;
};
ScrollTrigger.snapDirectional = _snapDirectional;
ScrollTrigger.addEventListener = function(type, callback) {
	var a = _listeners[type] || (_listeners[type] = []);
	~a.indexOf(callback) || a.push(callback);
};
ScrollTrigger.removeEventListener = function(type, callback) {
	var a = _listeners[type], i = a && a.indexOf(callback);
	i >= 0 && a.splice(i, 1);
};
ScrollTrigger.batch = function(targets, vars) {
	var result = [], varsCopy = {}, interval = vars.interval || .016, batchMax = vars.batchMax || 1e9, proxyCallback = function proxyCallback(type, callback) {
		var elements = [], triggers = [], delay = gsap.delayedCall(interval, function() {
			callback(elements, triggers);
			elements = [];
			triggers = [];
		}).pause();
		return function(self) {
			elements.length || delay.restart(true);
			elements.push(self.trigger);
			triggers.push(self);
			batchMax <= elements.length && delay.progress(1);
		};
	}, p;
	for (p in vars) varsCopy[p] = p.substr(0, 2) === "on" && _isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
	if (_isFunction(batchMax)) {
		batchMax = batchMax();
		_addListener(ScrollTrigger, "refresh", function() {
			return batchMax = vars.batchMax();
		});
	}
	_toArray(targets).forEach(function(target) {
		var config = {};
		for (p in varsCopy) config[p] = varsCopy[p];
		config.trigger = target;
		result.push(ScrollTrigger.create(config));
	});
	return result;
};
var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier(scrollFunc, current, end, max) {
	current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
	return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
};
var _allowNativePanning = function _allowNativePanning(target, direction) {
	if (direction === true) target.style.removeProperty("touch-action");
	else target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (Observer.isTouch ? " pinch-zoom" : "") : "none";
	target === _docEl && _allowNativePanning(_body, direction);
};
var _overflow = {
	auto: 1,
	scroll: 1
};
var _nestedScroll = function _nestedScroll(_ref5) {
	var event = _ref5.event, target = _ref5.target, axis = _ref5.axis;
	var node = (event.changedTouches ? event.changedTouches[0] : event).target, cache = node._gsap || gsap.core.getCache(node), time = _getTime(), cs;
	if (!cache._isScrollT || time - cache._isScrollT > 2e3) {
		while (node && node !== _body && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]))) node = node.parentNode;
		cache._isScroll = node && node !== target && !_isViewport(node) && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
		cache._isScrollT = time;
	}
	if (cache._isScroll || axis === "x") {
		event.stopPropagation();
		event._gsapAllow = true;
	}
};
var _inputObserver = function _inputObserver(target, type, inputs, nested) {
	return Observer.create({
		target,
		capture: true,
		debounce: false,
		lockAxis: true,
		type,
		onWheel: nested = nested && _nestedScroll,
		onPress: nested,
		onDrag: nested,
		onScroll: nested,
		onEnable: function onEnable() {
			return inputs && _addListener(_doc, Observer.eventTypes[0], _captureInputs, false, true);
		},
		onDisable: function onDisable() {
			return _removeListener(_doc, Observer.eventTypes[0], _captureInputs, true);
		}
	});
};
var _inputExp = /(input|label|select|textarea)/i;
var _inputIsFocused;
var _captureInputs = function _captureInputs(e) {
	var isInput = _inputExp.test(e.target.tagName);
	if (isInput || _inputIsFocused) {
		e._gsapAllow = true;
		_inputIsFocused = isInput;
	}
};
var _getScrollNormalizer = function _getScrollNormalizer(vars) {
	_isObject(vars) || (vars = {});
	vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
	vars.type || (vars.type = "wheel,touch");
	vars.debounce = !!vars.debounce;
	vars.id = vars.id || "normalizer";
	var _vars2 = vars, normalizeScrollX = _vars2.normalizeScrollX, momentum = _vars2.momentum, allowNestedScroll = _vars2.allowNestedScroll, onRelease = _vars2.onRelease, self, maxY, target = _getTarget(vars.target) || _docEl, smoother = gsap.core.globals().ScrollSmoother, smootherInstance = smoother && smoother.get(), content = _fixIOSBug && (vars.content && _getTarget(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()), scrollFuncY = _getScrollFunc(target, _vertical), scrollFuncX = _getScrollFunc(target, _horizontal), scale = 1, initialScale = (Observer.isTouch && _win.visualViewport ? _win.visualViewport.scale * _win.visualViewport.width : _win.outerWidth) / _win.innerWidth, wheelRefresh = 0, resolveMomentumDuration = _isFunction(momentum) ? function() {
		return momentum(self);
	} : function() {
		return momentum || 2.8;
	}, lastRefreshID, skipTouchMove, inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll), resumeTouchMove = function resumeTouchMove() {
		return skipTouchMove = false;
	}, scrollClampX = _passThrough, scrollClampY = _passThrough, updateClamps = function updateClamps() {
		maxY = _maxScroll(target, _vertical);
		scrollClampY = _clamp(_fixIOSBug ? 1 : 0, maxY);
		normalizeScrollX && (scrollClampX = _clamp(0, _maxScroll(target, _horizontal)));
		lastRefreshID = _refreshID;
	}, removeContentOffset = function removeContentOffset() {
		content._gsap.y = _round(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
		content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
		scrollFuncY.offset = scrollFuncY.cacheID = 0;
	}, ignoreDrag = function ignoreDrag() {
		if (skipTouchMove) {
			requestAnimationFrame(resumeTouchMove);
			var offset = _round(self.deltaY / 2), scroll = scrollClampY(scrollFuncY.v - offset);
			if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
				scrollFuncY.offset = scroll - scrollFuncY.v;
				var y = _round((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);
				content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
				content._gsap.y = y + "px";
				scrollFuncY.cacheID = _scrollers.cache;
				_updateAll();
			}
			return true;
		}
		scrollFuncY.offset && removeContentOffset();
		skipTouchMove = true;
	}, tween, startScrollX, startScrollY, onStopDelayedCall, onResize = function onResize() {
		updateClamps();
		if (tween.isActive() && tween.vars.scrollY > maxY) scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
	};
	content && gsap.set(content, { y: "+=0" });
	vars.ignoreCheck = function(e) {
		return _fixIOSBug && e.type === "touchmove" && ignoreDrag(e) || scale > 1.05 && e.type !== "touchstart" || self.isGesturing || e.touches && e.touches.length > 1;
	};
	vars.onPress = function() {
		skipTouchMove = false;
		var prevScale = scale;
		scale = _round((_win.visualViewport && _win.visualViewport.scale || 1) / initialScale);
		tween.pause();
		prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
		startScrollX = scrollFuncX();
		startScrollY = scrollFuncY();
		updateClamps();
		lastRefreshID = _refreshID;
	};
	vars.onRelease = vars.onGestureStart = function(self, wasDragging) {
		scrollFuncY.offset && removeContentOffset();
		if (!wasDragging) onStopDelayedCall.restart(true);
		else {
			_scrollers.cache++;
			var dur = resolveMomentumDuration(), currentScroll, endScroll;
			if (normalizeScrollX) {
				currentScroll = scrollFuncX();
				endScroll = currentScroll + dur * .05 * -self.velocityX / .227;
				dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _horizontal));
				tween.vars.scrollX = scrollClampX(endScroll);
			}
			currentScroll = scrollFuncY();
			endScroll = currentScroll + dur * .05 * -self.velocityY / .227;
			dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _vertical));
			tween.vars.scrollY = scrollClampY(endScroll);
			tween.invalidate().duration(dur).play(.01);
			if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) gsap.to({}, {
				onUpdate: onResize,
				duration: dur
			});
		}
		onRelease && onRelease(self);
	};
	vars.onWheel = function() {
		tween._ts && tween.pause();
		if (_getTime() - wheelRefresh > 1e3) {
			lastRefreshID = 0;
			wheelRefresh = _getTime();
		}
	};
	vars.onChange = function(self, dx, dy, xArray, yArray) {
		_refreshID !== lastRefreshID && updateClamps();
		dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self.startX - self.x) : scrollFuncX() + dx - xArray[1]));
		if (dy) {
			scrollFuncY.offset && removeContentOffset();
			var isTouch = yArray[2] === dy, y = isTouch ? startScrollY + self.startY - self.y : scrollFuncY() + dy - yArray[1], yClamped = scrollClampY(y);
			isTouch && y !== yClamped && (startScrollY += yClamped - y);
			scrollFuncY(yClamped);
		}
		(dy || dx) && _updateAll();
	};
	vars.onEnable = function() {
		_allowNativePanning(target, normalizeScrollX ? false : "x");
		ScrollTrigger.addEventListener("refresh", onResize);
		_addListener(_win, "resize", onResize);
		if (scrollFuncY.smooth) {
			scrollFuncY.target.style.scrollBehavior = "auto";
			scrollFuncY.smooth = scrollFuncX.smooth = false;
		}
		inputObserver.enable();
	};
	vars.onDisable = function() {
		_allowNativePanning(target, true);
		_removeListener(_win, "resize", onResize);
		ScrollTrigger.removeEventListener("refresh", onResize);
		inputObserver.kill();
	};
	vars.lockAxis = vars.lockAxis !== false;
	self = new Observer(vars);
	self.iOS = _fixIOSBug;
	_fixIOSBug && !scrollFuncY() && scrollFuncY(1);
	_fixIOSBug && gsap.ticker.add(_passThrough);
	onStopDelayedCall = self._dc;
	tween = gsap.to(self, {
		ease: "power4",
		paused: true,
		inherit: false,
		scrollX: normalizeScrollX ? "+=0.1" : "+=0",
		scrollY: "+=0.1",
		modifiers: { scrollY: _interruptionTracker(scrollFuncY, scrollFuncY(), function() {
			return tween.pause();
		}) },
		onUpdate: _updateAll,
		onComplete: onStopDelayedCall.vars.onComplete
	});
	return self;
};
ScrollTrigger.sort = function(func) {
	if (_isFunction(func)) return _triggers.sort(func);
	var scroll = _win.pageYOffset || 0;
	ScrollTrigger.getAll().forEach(function(t) {
		return t._sortY = t.trigger ? scroll + t.trigger.getBoundingClientRect().top : t.start + _win.innerHeight;
	});
	return _triggers.sort(func || function(a, b) {
		return (a.vars.refreshPriority || 0) * -1e6 + (a.vars.containerAnimation ? 1e6 : a._sortY) - ((b.vars.containerAnimation ? 1e6 : b._sortY) + (b.vars.refreshPriority || 0) * -1e6);
	});
};
ScrollTrigger.observe = function(vars) {
	return new Observer(vars);
};
ScrollTrigger.normalizeScroll = function(vars) {
	if (typeof vars === "undefined") return _normalizer;
	if (vars === true && _normalizer) return _normalizer.enable();
	if (vars === false) {
		_normalizer && _normalizer.kill();
		_normalizer = vars;
		return;
	}
	var normalizer = vars instanceof Observer ? vars : _getScrollNormalizer(vars);
	_normalizer && _normalizer.target === normalizer.target && _normalizer.kill();
	_isViewport(normalizer.target) && (_normalizer = normalizer);
	return normalizer;
};
ScrollTrigger.core = {
	_getVelocityProp,
	_inputObserver,
	_scrollers,
	_proxies,
	bridge: {
		ss: function ss() {
			_lastScrollTime || _dispatch("scrollStart");
			_lastScrollTime = _getTime();
		},
		ref: function ref() {
			return _refreshing;
		}
	}
};
_getGSAP() && gsap.registerPlugin(ScrollTrigger);
// src/scroll-motion.ts
/** Public-page motion. GSAP context owns every tween and trigger for route cleanup. */
function setupPageScrollMotion(signal) {
	const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
	if (reduced.matches) return;
	const mobile = window.matchMedia("(max-width:700px)").matches;
	const root = document.getElementById("main-content");
	if (!root) return;
	const selector = [
		".reveal",
		".fisheries-layout>div",
		".person-card",
		".contact-form",
		".section-heading",
		".heading-row",
		".detail-intro>div",
		".capability-list>div",
		".deliverables-grid>div",
		".service-capabilities>div",
		".service-delivery-grid>div",
		".service-process-grid>article",
		".service-related-grid>a",
		".approved-capabilities>article",
		".approved-service-list>a",
		".approved-applications",
		".process-grid>article",
		".industry-card",
		".project-card",
		".portfolio-card",
		".depth-brief-card",
		".planning-decisions>div",
		".faq-item",
		".about-purpose-grid>article",
		".about-capability-line>div",
		".home-trust-bar .container>div"
	].join(",");
	const candidates = [...root.querySelectorAll(selector)].filter((el) => !el.closest("dialog,[hidden],[inert]") && el.getBoundingClientRect().height > 0);
	const eligible = new Set(candidates.filter((el) => el.getBoundingClientRect().height < window.innerHeight * 1.6));
	const targets = [...eligible].filter((el) => {
		let p = el.parentElement;
		while (p && p !== root) {
			if (eligible.has(p)) return false;
			p = p.parentElement;
		}
		return true;
	});
	for (const [index, el] of targets.entries()) {
		const distance = mobile ? 16 : 30;
		const tween = gsapWithCSS.fromTo(el, {
			y: distance,
			autoAlpha: 0
		}, {
			y: 0,
			autoAlpha: 1,
			duration: mobile ? .42 : .72,
			ease: "power3.out",
			paused: true
		});
		const show = () => {
			tween.invalidate();
			tween.restart();
		};
		const reset = () => {
			if (el.contains(document.activeElement)) return;
			tween.pause(0);
		};
		ScrollTrigger.create({
			trigger: el,
			start: "top 97%",
			end: "bottom -3%",
			onEnter: show,
			onEnterBack: show,
			onLeave: reset,
			onLeaveBack: reset
		});
		el.addEventListener("focusin", () => tween.progress(1), { signal });
	}
	if (!mobile) for (const image of root.querySelectorAll(".industry-image img,.about-image img,.about-people-mosaic img")) gsapWithCSS.fromTo(image, { yPercent: -3 }, {
		yPercent: 3,
		ease: "none",
		scrollTrigger: {
			trigger: image.parentElement,
			start: "top bottom",
			end: "bottom top",
			scrub: 1
		}
	});
	for (const divider of root.querySelectorAll(".label-line")) gsapWithCSS.fromTo(divider, {
		scaleX: 0,
		transformOrigin: "left center"
	}, {
		scaleX: 1,
		duration: .65,
		ease: "power2.out",
		scrollTrigger: {
			trigger: divider,
			start: "top 96%",
			toggleActions: "restart none restart reset"
		}
	});
	const footer = document.querySelector(".footer-top");
	if (footer) gsapWithCSS.fromTo(footer.children, {
		y: mobile ? 12 : 22,
		opacity: 0
	}, {
		y: 0,
		opacity: 1,
		duration: .6,
		stagger: .07,
		ease: "power2.out",
		scrollTrigger: {
			trigger: footer,
			start: "top 96%",
			toggleActions: "restart none restart reset"
		}
	});
	const refresh = () => ScrollTrigger.refresh();
	for (const image of root.querySelectorAll("img")) if (!image.complete) image.addEventListener("load", refresh, {
		once: true,
		signal
	});
	reduced.addEventListener("change", () => {
		if (reduced.matches) {
			for (const el of targets) gsapWithCSS.set(el, { clearProps: "transform,opacity,visibility" });
			ScrollTrigger.getAll().forEach((trigger) => trigger.disable(false));
		}
	}, { signal });
}
// src/cms/runtime.ts
var defaultMenus = [
	{
		"label": "Home",
		"href": "/",
		"visible": true
	},
	{
		"label": "IoT Solutions",
		"href": "/iot-solutions",
		"visible": true
	},
	{
		"label": "Zoho Services",
		"href": "/zoho-consultation",
		"visible": true
	},
	{
		"label": "Our Products",
		"href": "/#products",
		"visible": true
	},
	{
		"label": "About Us",
		"href": "/about",
		"visible": true
	},
	{
		"label": "Contact",
		"href": "/contact",
		"visible": true
	}
];
var homeSections = [
	"hero",
	"trust",
	"metrics",
	"fisheries360",
	"manifesto",
	"solutions",
	"system",
	"industries",
	"projects",
	"approach",
	"people",
	"details",
	"contact"
];
var snapshot = null;
var listeners = /* @__PURE__ */ new Set();
var collect = false;
var route = "/";
var texts = /* @__PURE__ */ new Map();
var images = /* @__PURE__ */ new Map();
var links = /* @__PURE__ */ new Map();
function contentKey(value) {
	let a = 2166136261, b = 5381;
	for (let i = 0; i < value.length; i++) {
		a = Math.imul(a ^ value.charCodeAt(i), 16777619);
		b = Math.imul(b, 33) ^ value.charCodeAt(i);
	}
	return `t_${(a >>> 0).toString(36)}_${(b >>> 0).toString(36)}`;
}
function cmsText(value, source = "Shared") {
	if (Array.isArray(value)) return value.map((item) => cmsText(item, source));
	if (typeof value !== "string" || !value.trim()) return value;
	const original = value.trim();
	if (original.length < 2 || !/[A-Za-z\u00c0-\uffff]/.test(original)) return value;
	const legacyKey = contentKey(original);
	const key = contentKey((/^(SiteHeader:|App:Footer|ContactForm:)/.test(source) ? "/shared" : route) + "|" + source + "|" + original);
	if (collect) {
		let field = texts.get(key);
		if (!field) {
			field = {
				key,
				legacyKey,
				original,
				routes: /* @__PURE__ */ new Set(),
				sources: /* @__PURE__ */ new Set(),
				placements: []
			};
			texts.set(key, field);
		}
		field.routes.add(route);
		field.sources.add(source);
		if (!field.placements.some((p) => p.route === route && p.section === source)) field.placements.push({
			route,
			section: source
		});
	}
	const replacement = snapshot?.text[key] ?? snapshot?.text[legacyKey];
	return replacement === void 0 ? value : value.replace(original, replacement);
}
function cmsAsset(value) {
	if (typeof value !== "string") return value;
	if (collect) {
		if (!images.has(value)) images.set(value, /* @__PURE__ */ new Set());
		images.get(value).add(route);
	}
	return snapshot?.images[value] ?? value;
}
function cmsSrcSet(value) {
	return value.split(",").map((part) => {
		const [src, ...sizes] = part.trim().split(/\s+/);
		return [cmsAsset(src), ...sizes].join(" ");
	}).join(", ");
}
function cmsLink(value) {
	if (typeof value !== "string") return value;
	if (collect) {
		if (!links.has(value)) links.set(value, /* @__PURE__ */ new Set());
		links.get(value).add(route);
	}
	return snapshot?.links[value] ?? value;
}
var getSiteContent = () => snapshot;
function setSiteContent(content) {
	snapshot = content;
	listeners.forEach((listener) => listener());
}
function useSiteContent() {
	return useSyncExternalStore((listener) => {
		listeners.add(listener);
		return () => {
			listeners.delete(listener);
		};
	}, getSiteContent, getSiteContent);
}
function setCmsRoute(path) {
	route = path;
}
function setContentCollection(nextRoute, enabled) {
	route = nextRoute;
	collect = enabled;
}
function getContentManifest() {
	return {
		text: [...texts.values()].map((field) => ({
			...field,
			routes: [...field.routes],
			sources: [...field.sources]
		})),
		images: [...images].map(([original, routes]) => ({
			original,
			routes: [...routes]
		})),
		links: [...links].map(([original, routes]) => ({
			original,
			routes: [...routes]
		}))
	};
}
function seedExtraText(value, source, nextRoute = "/shared", key = "") {
	if (typeof value === "string") {
		if (!/^(id|slug|kind|icon|image|alt|group|category|tone|initials|tel|url)$/.test(key) && value.length > 3 && !/^(https?:|\/|#|mailto:|tel:)/.test(value)) {
			const previous = route;
			route = nextRoute;
			cmsText(value, source);
			route = previous;
		}
		return;
	}
	if (Array.isArray(value)) value.forEach((item) => seedExtraText(item, source, nextRoute, key));
	else if (value && typeof value === "object") Object.entries(value).forEach(([name, item]) => seedExtraText(item, source, nextRoute, name));
}
async function loadSiteContent() {
	try {
		const preview = new URLSearchParams(location.search).get("cms-preview") === "1";
		const response = await fetch(preview ? "/api/admin/content/preview" : "/api/public/site", {
			credentials: "same-origin",
			cache: "no-store"
		});
		if (!response.ok) return;
		const result = await response.json();
		if (result.content?.schemaVersion === 1) setSiteContent(result.content);
	} catch {}
}
// src/ClassMentorFeature.tsx
var source$1 = "ClassMentorFeature:School ERP";
function ClassMentorFeature() {
	return /* @__PURE__ */ jsx("section", {
		className: "fisheries-feature classmentor-feature",
		id: "classmentor360",
		children: /* @__PURE__ */ jsx("div", {
			className: "container",
			children: /* @__PURE__ */ jsxs("div", {
				className: "fisheries-layout",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "reveal",
					children: [
						/* @__PURE__ */ jsxs("span", {
							className: "eyebrow",
							children: [/* @__PURE__ */ jsx("span", { className: "label-line" }), cmsText("OUR PRODUCTS / CLASSMENTOR360", source$1)]
						}),
						/* @__PURE__ */ jsxs("h2", { children: [
							cmsText("One connected school.", source$1),
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", { children: cmsText("A clearer day for everyone.", source$1) })
						] }),
						/* @__PURE__ */ jsx("p", { children: cmsText("ClassMentor360 is an AI-powered school ERP for schools, colleges and coaching institutes, bringing administration, learning management and communication into one platform.", source$1) }),
						/* @__PURE__ */ jsx("p", { children: cmsText("Connect admissions, student records, attendance, fees, examinations and reporting, with dedicated experiences for administrators, teachers and parents.", source$1) }),
						/* @__PURE__ */ jsxs("div", {
							className: "classmentor-actions",
							children: [/* @__PURE__ */ jsxs("a", {
								className: "button",
								href: cmsLink("https://classmentor360.com/"),
								target: "_blank",
								rel: "noopener noreferrer",
								children: [cmsText("Explore ClassMentor360", source$1), /* @__PURE__ */ jsx(ArrowUpRight, { size: 16 })]
							}), /* @__PURE__ */ jsxs(Link, {
								className: "explore-link",
								to: cmsLink("/contact?service=ClassMentor360%20demo"),
								children: [cmsText("Discuss a demo", source$1), /* @__PURE__ */ jsx(ArrowUpRight, { size: 15 })]
							})]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "fisheries-product classmentor-product reveal",
					children: [
						/* @__PURE__ */ jsxs("header", { children: [
							/* @__PURE__ */ jsx(GraduationCap, { size: 30 }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: cmsText("ClassMentor360", source$1) }), /* @__PURE__ */ jsx("span", { children: cmsText("School operations. Connected.", source$1) })] }),
							/* @__PURE__ */ jsx(BookOpen, { size: 20 })
						] }),
						/* @__PURE__ */ jsx("span", {
							className: "mono",
							children: cmsText("SCHOOL ERP · LEARNING · COMMUNICATION", source$1)
						}),
						/* @__PURE__ */ jsx("div", {
							className: "fisheries-modules",
							children: [
								"Admissions & student records",
								"Attendance management",
								"Fees & payment workflows",
								"Exams & report cards",
								"Parent mobile app",
								"Teacher portal",
								"HR & payroll",
								"Analytics & multi-branch management"
							].map((label) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Check, { size: 14 }), cmsText(label, source$1)] }, label))
						}),
						/* @__PURE__ */ jsxs("footer", { children: [
							cmsText("Built for school teams and the families they support.", source$1),
							/* @__PURE__ */ jsx("br", {}),
							cmsText("Explore the product website for features and a tailored demonstration.", source$1)
						] })
					]
				})]
			})
		})
	});
}
// src/ApprovedCompany.tsx
var source = "ApprovedCompany:IoT capabilities";
var capabilities = [
	{
		icon: Radio,
		title: "IoT Device Integration",
		text: "Integrating commercially available sensors, controllers, and connected hardware."
	},
	{
		icon: Activity,
		title: "Smart Monitoring",
		text: "Connected platforms for monitoring equipment and environmental conditions."
	},
	{
		icon: Cloud,
		title: "IoT Cloud Platforms",
		text: "Collecting, managing, and presenting information from connected devices."
	},
	{
		icon: Cpu,
		title: "AI & Analytics",
		text: "Turning connected data into insights, trends, and predictive capabilities."
	},
	{
		icon: Workflow,
		title: "Intelligent Automation",
		text: "Supporting operational workflows through connected technology."
	}
];
function ApprovedIoT() {
	return /* @__PURE__ */ jsx("section", {
		className: "section approved-iot",
		id: "iot-capabilities",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "approved-heading reveal",
					children: [
						/* @__PURE__ */ jsxs("span", {
							className: "eyebrow",
							children: [/* @__PURE__ */ jsx("span", { className: "label-line" }), cmsText("IOT-LED TECHNOLOGY & DIGITAL SOLUTIONS", source)]
						}),
						/* @__PURE__ */ jsxs("h2", { children: [
							cmsText("Connecting the Physical", source),
							/* @__PURE__ */ jsx("br", {}),
							cmsText("and Digital Worlds", source)
						] }),
						/* @__PURE__ */ jsx("p", { children: cmsText("The future of technology extends beyond software. It connects physical operations, devices, machines, and environments with intelligent digital platforms.", source) }),
						/* @__PURE__ */ jsx("p", { children: cmsText("Neksoft brings together IoT device integration, cloud connectivity, monitoring solutions, analytics, and automation to make connected technology accessible to businesses.", source) })
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "approved-capabilities",
					children: capabilities.map(({ icon: Icon, title, text }, index) => /* @__PURE__ */ jsxs("article", {
						className: "reveal",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "mono",
								children: ["0", index + 1]
							}),
							/* @__PURE__ */ jsx(Icon, {
								size: 23,
								strokeWidth: 1.3
							}),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: cmsText(title, source) }), /* @__PURE__ */ jsx("p", { children: cmsText(text, source) })] })
						]
					}, title))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "approved-applications reveal",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "mono",
							children: cmsText("CONNECTED APPLICATIONS", source)
						}),
						/* @__PURE__ */ jsx("div", { children: [
							"Smart Aquaculture",
							"Smart Agriculture",
							"Remote Monitoring",
							"Device Integration",
							"IoT Analytics"
						].map((label) => /* @__PURE__ */ jsx("span", { children: cmsText(label, source) }, label)) }),
						/* @__PURE__ */ jsx("p", { children: cmsText("Applications are scoped around available devices, connectivity, operational requirements and integration feasibility.", source) })
					]
				})
			]
		})
	});
}
var services = [
	["Custom Software Development", "/custom-software"],
	["Website Design & Development", "/website-solutions"],
	["Mobile Application Development", "/mobile-development"],
	["SaaS & Cloud Solutions", "/saas-solutions"],
	["Digital Marketing & SEO", "/digital-marketing"],
	["Zoho Implementation & Integration", "/zoho-consultation"],
	["Enterprise Automation", "/ai-automation"],
	["Technology Consulting & Support", "/contact"]
];
function ApprovedDigital() {
	const s = "ApprovedCompany:Digital services";
	return /* @__PURE__ */ jsx("section", {
		className: "section approved-digital",
		id: "digital-services",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "approved-heading reveal",
					children: [
						/* @__PURE__ */ jsxs("span", {
							className: "eyebrow",
							children: [/* @__PURE__ */ jsx("span", { className: "label-line" }), cmsText("BEYOND IOT", s)]
						}),
						/* @__PURE__ */ jsxs("h2", { children: [
							cmsText("Complete Digital", s),
							/* @__PURE__ */ jsx("br", {}),
							cmsText("Technology Services", s)
						] }),
						/* @__PURE__ */ jsx("p", { children: cmsText("Neksoft continues to support businesses across their wider digital transformation journey.", s) })
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "approved-service-list",
					children: services.map(([label, to], i) => /* @__PURE__ */ jsxs(Link, {
						className: "reveal",
						to: cmsLink(to),
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "mono",
								children: ["0", i + 1]
							}),
							/* @__PURE__ */ jsx("h3", { children: cmsText(label, s) }),
							/* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })
						]
					}, label))
				}),
				/* @__PURE__ */ jsx("p", {
					className: "approved-closing",
					children: cmsText("Whether you are implementing IoT, modernizing software, automating business processes, or strengthening your online presence, Neksoft can support your technology journey.", s)
				})
			]
		})
	});
}
function ApprovedDelivery() {
	const s = "ApprovedCompany:Global delivery";
	return /* @__PURE__ */ jsx("section", {
		className: "section approved-delivery dark",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container reveal",
			children: [
				/* @__PURE__ */ jsxs("span", {
					className: "eyebrow",
					children: [/* @__PURE__ */ jsx("span", { className: "label-line" }), cmsText("INTERNATIONAL PERSPECTIVE. PRACTICAL DELIVERY.", s)]
				}),
				/* @__PURE__ */ jsxs("h2", { children: [
					cmsText("Technology Expertise.", s),
					/* @__PURE__ */ jsx("br", {}),
					cmsText("Global Delivery.", s)
				] }),
				/* @__PURE__ */ jsx("p", { children: cmsText("Headquartered in the Netherlands and supported by a dedicated team of 35 professionals in India, Neksoft combines international business understanding with scalable technology delivery.", s) }),
				/* @__PURE__ */ jsx("p", { children: cmsText("Our focus on structured processes, quality, information security, and IT service management is supported by our ISO 9001, ISO 27001, and ISO/IEC 20000-1 certifications.", s) }),
				/* @__PURE__ */ jsx("p", { children: cmsText("We are also an Authorized Zoho Partner.", s) }),
				/* @__PURE__ */ jsxs(Link, {
					className: "explore-link",
					to: cmsLink("/contact"),
					children: [cmsText("Let’s Connect Your Next Big Idea", s), /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })]
				})
			]
		})
	});
}
// node_modules/lenis/dist/lenis.mjs
var version = "1.3.27";
/**
* Clamp a value between a minimum and maximum value
*
* @param min Minimum value
* @param input Value to clamp
* @param max Maximum value
* @returns Clamped value
*/
function clamp(min, input, max) {
	return Math.max(min, Math.min(input, max));
}
/**
*  Linearly interpolate between two values using an amount (0 <= t <= 1)
*
* @param x First value
* @param y Second value
* @param t Amount to interpolate (0 <= t <= 1)
* @returns Interpolated value
*/
function lerp(x, y, t) {
	return (1 - t) * x + t * y;
}
/**
* Damp a value over time using a damping factor
* {@link http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/}
*
* @param x Initial value
* @param y Target value
* @param lambda Damping factor
* @param dt Time elapsed since the last update
* @returns Damped value
*/
function damp(x, y, lambda, deltaTime) {
	return lerp(x, y, 1 - Math.exp(-lambda * deltaTime));
}
/**
* Calculate the modulo of the dividend and divisor while keeping the result within the same sign as the divisor
* {@link https://anguscroll.com/just/just-modulo}
*
* @param n Dividend
* @param d Divisor
* @returns Modulo
*/
function modulo(n, d) {
	return (n % d + d) % d;
}
/**
* Animate class to handle value animations with lerping or easing
*
* @example
* const animate = new Animate()
* animate.fromTo(0, 100, { duration: 1, easing: (t) => t })
* animate.advance(0.5) // 50
*/
var Animate = class {
	isRunning = false;
	value = 0;
	from = 0;
	to = 0;
	currentTime = 0;
	lerp;
	duration;
	easing;
	onUpdate;
	/**
	* Advance the animation by the given delta time
	*
	* @param deltaTime - The time in seconds to advance the animation
	*/
	advance(deltaTime) {
		if (!this.isRunning) return;
		let completed = false;
		if (this.duration && this.easing) {
			this.currentTime += deltaTime;
			const linearProgress = clamp(0, this.currentTime / this.duration, 1);
			completed = linearProgress >= 1;
			const easedProgress = completed ? 1 : this.easing(linearProgress);
			this.value = this.from + (this.to - this.from) * easedProgress;
		} else if (this.lerp) {
			this.value = damp(this.value, this.to, this.lerp * 60, deltaTime);
			if (Math.round(this.value) === Math.round(this.to)) {
				this.value = this.to;
				completed = true;
			}
		} else {
			this.value = this.to;
			completed = true;
		}
		if (completed) this.stop();
		this.onUpdate?.(this.value, completed);
	}
	/** Stop the animation */
	stop() {
		this.isRunning = false;
	}
	/**
	* Set up the animation from a starting value to an ending value
	* with optional parameters for lerping, duration, easing, and onUpdate callback
	*
	* @param from - The starting value
	* @param to - The ending value
	* @param options - Options for the animation
	*/
	fromTo(from, to, { lerp, duration, easing, onStart, onUpdate }) {
		this.from = this.value = from;
		this.to = to;
		this.lerp = lerp;
		this.duration = duration;
		this.easing = easing;
		this.currentTime = 0;
		this.isRunning = true;
		onStart?.();
		this.onUpdate = onUpdate;
	}
};
function debounce(callback, delay) {
	let timer;
	return function(...args) {
		clearTimeout(timer);
		timer = setTimeout(() => {
			timer = void 0;
			callback.apply(this, args);
		}, delay);
	};
}
/**
* Dimensions class to handle the size of the content and wrapper
*
* @example
* const dimensions = new Dimensions(wrapper, content)
* dimensions.on('resize', (e) => {
*   console.log(e.width, e.height)
* })
*/
var Dimensions = class {
	width = 0;
	height = 0;
	scrollHeight = 0;
	scrollWidth = 0;
	debouncedResize;
	wrapperResizeObserver;
	contentResizeObserver;
	constructor(wrapper, content, { autoResize = true, debounce: debounceValue = 250 } = {}) {
		this.wrapper = wrapper;
		this.content = content;
		if (autoResize) {
			this.debouncedResize = debounce(this.resize, debounceValue);
			if (this.wrapper instanceof Window) window.addEventListener("resize", this.debouncedResize);
			else {
				this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize);
				this.wrapperResizeObserver.observe(this.wrapper);
			}
			this.contentResizeObserver = new ResizeObserver(this.debouncedResize);
			this.contentResizeObserver.observe(this.content);
		}
		this.resize();
	}
	destroy() {
		this.wrapperResizeObserver?.disconnect();
		this.contentResizeObserver?.disconnect();
		if (this.wrapper === window && this.debouncedResize) window.removeEventListener("resize", this.debouncedResize);
	}
	resize = () => {
		this.onWrapperResize();
		this.onContentResize();
	};
	onWrapperResize = () => {
		if (this.wrapper instanceof Window) {
			this.width = window.innerWidth;
			this.height = window.innerHeight;
		} else {
			this.width = this.wrapper.clientWidth;
			this.height = this.wrapper.clientHeight;
		}
	};
	onContentResize = () => {
		if (this.wrapper instanceof Window) {
			this.scrollHeight = this.content.scrollHeight;
			this.scrollWidth = this.content.scrollWidth;
		} else {
			this.scrollHeight = this.wrapper.scrollHeight;
			this.scrollWidth = this.wrapper.scrollWidth;
		}
	};
	get limit() {
		return {
			x: this.scrollWidth - this.width,
			y: this.scrollHeight - this.height
		};
	}
};
/**
* Emitter class to handle events
* @example
* const emitter = new Emitter()
* emitter.on('event', (data) => {
*   console.log(data)
* })
* emitter.emit('event', 'data')
*/
var Emitter = class {
	events = {};
	/**
	* Emit an event with the given data
	* @param event Event name
	* @param args Data to pass to the event handlers
	*/
	emit(event, ...args) {
		const callbacks = this.events[event] || [];
		for (let i = 0, length = callbacks.length; i < length; i++) callbacks[i]?.(...args);
	}
	/**
	* Add a callback to the event
	* @param event Event name
	* @param cb Callback function
	* @returns Unsubscribe function
	*/
	on(event, cb) {
		if (this.events[event]) this.events[event].push(cb);
		else this.events[event] = [cb];
		return () => {
			this.events[event] = this.events[event]?.filter((i) => cb !== i);
		};
	}
	/**
	* Remove a callback from the event
	* @param event Event name
	* @param callback Callback function
	*/
	off(event, callback) {
		this.events[event] = this.events[event]?.filter((i) => callback !== i);
	}
	/**
	* Remove all event listeners and clean up
	*/
	destroy() {
		this.events = {};
	}
};
var LINE_HEIGHT = 100 / 6;
var listenerOptions = { passive: false };
function getDeltaMultiplier(deltaMode, size) {
	if (deltaMode === 1) return LINE_HEIGHT;
	if (deltaMode === 2) return size;
	return 1;
}
var VirtualScroll = class {
	touchStart = {
		x: 0,
		y: 0
	};
	lastDelta = {
		x: 0,
		y: 0
	};
	window = {
		width: 0,
		height: 0
	};
	emitter = new Emitter();
	constructor(element, options = {
		wheelMultiplier: 1,
		touchMultiplier: 1
	}) {
		this.element = element;
		this.options = options;
		window.addEventListener("resize", this.onWindowResize);
		this.onWindowResize();
		this.element.addEventListener("wheel", this.onWheel, listenerOptions);
		this.element.addEventListener("touchstart", this.onTouchStart, listenerOptions);
		this.element.addEventListener("touchmove", this.onTouchMove, listenerOptions);
		this.element.addEventListener("touchend", this.onTouchEnd, listenerOptions);
	}
	/**
	* Add an event listener for the given event and callback
	*
	* @param event Event name
	* @param callback Callback function
	*/
	on(event, callback) {
		return this.emitter.on(event, callback);
	}
	/** Remove all event listeners and clean up */
	destroy() {
		this.emitter.destroy();
		window.removeEventListener("resize", this.onWindowResize);
		this.element.removeEventListener("wheel", this.onWheel, listenerOptions);
		this.element.removeEventListener("touchstart", this.onTouchStart, listenerOptions);
		this.element.removeEventListener("touchmove", this.onTouchMove, listenerOptions);
		this.element.removeEventListener("touchend", this.onTouchEnd, listenerOptions);
	}
	/**
	* Event handler for 'touchstart' event
	*
	* @param event Touch event
	*/
	onTouchStart = (event) => {
		const { clientX, clientY } = event.targetTouches ? event.targetTouches[0] : event;
		this.touchStart.x = clientX;
		this.touchStart.y = clientY;
		this.lastDelta = {
			x: 0,
			y: 0
		};
		this.emitter.emit("scroll", {
			deltaX: 0,
			deltaY: 0,
			event
		});
	};
	/** Event handler for 'touchmove' event */
	onTouchMove = (event) => {
		const { clientX, clientY } = event.targetTouches ? event.targetTouches[0] : event;
		const deltaX = -(clientX - this.touchStart.x) * this.options.touchMultiplier;
		const deltaY = -(clientY - this.touchStart.y) * this.options.touchMultiplier;
		this.touchStart.x = clientX;
		this.touchStart.y = clientY;
		this.lastDelta = {
			x: deltaX,
			y: deltaY
		};
		this.emitter.emit("scroll", {
			deltaX,
			deltaY,
			event
		});
	};
	onTouchEnd = (event) => {
		this.emitter.emit("scroll", {
			deltaX: this.lastDelta.x,
			deltaY: this.lastDelta.y,
			event
		});
	};
	/** Event handler for 'wheel' event */
	onWheel = (event) => {
		let { deltaX, deltaY, deltaMode } = event;
		const multiplierX = getDeltaMultiplier(deltaMode, this.window.width);
		const multiplierY = getDeltaMultiplier(deltaMode, this.window.height);
		deltaX *= multiplierX;
		deltaY *= multiplierY;
		deltaX *= this.options.wheelMultiplier;
		deltaY *= this.options.wheelMultiplier;
		this.emitter.emit("scroll", {
			deltaX,
			deltaY,
			event
		});
	};
	onWindowResize = () => {
		this.window = {
			width: window.innerWidth,
			height: window.innerHeight
		};
	};
};
var defaultEasing = (t) => Math.min(1, 1.001 - 2 ** (-10 * t));
var Lenis = class {
	_isScrolling = false;
	_isStopped = false;
	_isLocked = false;
	_preventNextNativeScrollEvent = false;
	_resetVelocityTimeout = null;
	_rafId = null;
	_isDraggingSelection = false;
	reducedMotionMediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
	/**
	* Whether or not the user is touching the screen
	*/
	isTouching;
	/**
	* Whether or not the device is running iOS
	*/
	isIos;
	/**
	* The time in ms since the lenis instance was created
	*/
	time = 0;
	/**
	* User data that will be forwarded through the scroll event
	*
	* @example
	* lenis.scrollTo(100, {
	*   userData: {
	*     foo: 'bar'
	*   }
	* })
	*/
	userData = {};
	/**
	* The last velocity of the scroll
	*/
	lastVelocity = 0;
	/**
	* The current velocity of the scroll
	*/
	velocity = 0;
	/**
	* The direction of the scroll
	*/
	direction = 0;
	/**
	* The options passed to the lenis instance
	*/
	options;
	/**
	* The target scroll value
	*/
	targetScroll;
	/**
	* The animated scroll value
	*/
	animatedScroll;
	animate = new Animate();
	emitter = new Emitter();
	dimensions;
	virtualScroll;
	constructor({ wrapper = window, content = document.documentElement, eventsTarget = wrapper, smoothWheel = true, syncTouch = false, syncTouchLerp = .075, touchInertiaExponent = 1.7, duration, easing, lerp = .1, infinite = false, orientation = "vertical", gestureOrientation = orientation === "horizontal" ? "both" : "vertical", touchMultiplier = 1, wheelMultiplier = 1, autoResize = true, prevent, virtualScroll, overscroll = true, autoRaf = false, anchors = false, autoToggle = false, allowNestedScroll = false, __experimental__naiveDimensions = false, naiveDimensions = __experimental__naiveDimensions, stopInertiaOnNavigate = false, respectReducedMotion = true } = {}) {
		window.lenisVersion = version;
		if (!window.lenis) window.lenis = {};
		window.lenis.version = version;
		if (orientation === "horizontal") window.lenis.horizontal = true;
		if (syncTouch === true) window.lenis.touch = true;
		this.isIos = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
		if (!wrapper || wrapper === document.documentElement) wrapper = window;
		if (typeof duration === "number" && typeof easing !== "function") easing = defaultEasing;
		else if (typeof easing === "function" && typeof duration !== "number") duration = 1;
		this.options = {
			wrapper,
			content,
			eventsTarget,
			smoothWheel,
			syncTouch,
			syncTouchLerp,
			touchInertiaExponent,
			duration,
			easing,
			lerp,
			infinite,
			gestureOrientation,
			orientation,
			touchMultiplier,
			wheelMultiplier,
			autoResize,
			prevent,
			virtualScroll,
			overscroll,
			autoRaf,
			anchors,
			autoToggle,
			allowNestedScroll,
			naiveDimensions,
			stopInertiaOnNavigate,
			respectReducedMotion
		};
		this.dimensions = new Dimensions(wrapper, content, { autoResize });
		this.updateClassName();
		this.targetScroll = this.animatedScroll = this.actualScroll;
		this.options.wrapper.addEventListener("scroll", this.onNativeScroll);
		this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, { capture: true });
		if (this.options.anchors || this.options.stopInertiaOnNavigate) this.options.wrapper.addEventListener("click", this.onClick);
		this.options.wrapper.addEventListener("pointerdown", this.onPointerDown);
		this.virtualScroll = new VirtualScroll(eventsTarget, {
			touchMultiplier,
			wheelMultiplier
		});
		this.virtualScroll.on("scroll", this.onVirtualScroll);
		if (this.options.autoToggle) {
			this.checkOverflow();
			this.rootElement.addEventListener("transitionend", this.onTransitionEnd);
		}
		if (this.options.autoRaf) this._rafId = requestAnimationFrame(this.raf);
	}
	/**
	* Destroy the lenis instance, remove all event listeners and clean up the class name
	*/
	destroy() {
		this.emitter.destroy();
		if (this._resetVelocityTimeout !== null) {
			clearTimeout(this._resetVelocityTimeout);
			this._resetVelocityTimeout = null;
		}
		this.options.wrapper.removeEventListener("scroll", this.onNativeScroll);
		this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, { capture: true });
		this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown);
		if (this.options.anchors || this.options.stopInertiaOnNavigate) this.options.wrapper.removeEventListener("click", this.onClick);
		this.virtualScroll.destroy();
		this.dimensions.destroy();
		this.cleanUpClassName();
		if (this._rafId) cancelAnimationFrame(this._rafId);
	}
	on(event, callback) {
		return this.emitter.on(event, callback);
	}
	off(event, callback) {
		return this.emitter.off(event, callback);
	}
	onScrollEnd = (e) => {
		if (!(e instanceof CustomEvent)) {
			if (this.isScrolling === "smooth" || this.isScrolling === false) e.stopPropagation();
		}
	};
	dispatchScrollendEvent = () => {
		this.options.wrapper.dispatchEvent(new CustomEvent("scrollend", {
			bubbles: this.options.wrapper === window,
			detail: { lenisScrollEnd: true }
		}));
	};
	get overflow() {
		const property = this.isHorizontal ? "overflow-x" : "overflow-y";
		return getComputedStyle(this.rootElement)[property];
	}
	checkOverflow() {
		if (["hidden", "clip"].includes(this.overflow)) this.internalStop();
		else this.internalStart();
	}
	onTransitionEnd = (event) => {
		if (event.propertyName?.includes("overflow") && event.target === this.rootElement) this.checkOverflow();
	};
	setScroll(scroll) {
		if (this.isHorizontal) this.options.wrapper.scrollTo({
			left: scroll,
			behavior: "instant"
		});
		else this.options.wrapper.scrollTo({
			top: scroll,
			behavior: "instant"
		});
	}
	onClick = (event) => {
		const linkElementsUrls = event.composedPath().filter((node) => node instanceof HTMLAnchorElement && node.href).map((element) => new URL(element.href));
		const currentUrl = new URL(window.location.href);
		if (this.options.anchors) {
			const anchorElementUrl = linkElementsUrls.find((targetUrl) => currentUrl.host === targetUrl.host && currentUrl.pathname === targetUrl.pathname && targetUrl.hash);
			if (anchorElementUrl) {
				const options = typeof this.options.anchors === "object" && this.options.anchors ? this.options.anchors : void 0;
				const target = decodeURIComponent(anchorElementUrl.hash);
				this.scrollTo(target, options);
				return;
			}
		}
		if (this.options.stopInertiaOnNavigate) {
			if (linkElementsUrls.some((targetUrl) => currentUrl.host === targetUrl.host && currentUrl.pathname !== targetUrl.pathname)) {
				this.reset();
				return;
			}
		}
	};
	onPointerDown = (event) => {
		if (event.button === 1) this.reset();
	};
	isTouchOnSelectionHandle(event) {
		const selection = window.getSelection();
		if (!selection || selection.isCollapsed || selection.rangeCount === 0) return false;
		const touch = event.targetTouches[0] ?? event.changedTouches[0];
		if (!touch) return false;
		const rects = selection.getRangeAt(0).getClientRects();
		if (rects.length === 0) return false;
		const first = rects[0];
		const last = rects[rects.length - 1];
		const HANDLE_RADIUS = 40;
		const nearStart = Math.hypot(touch.clientX - first.left, touch.clientY - first.top) <= HANDLE_RADIUS;
		const nearEnd = Math.hypot(touch.clientX - last.right, touch.clientY - last.bottom) <= HANDLE_RADIUS;
		return nearStart || nearEnd;
	}
	onVirtualScroll = (data) => {
		if (typeof this.options.virtualScroll === "function" && this.options.virtualScroll(data) === false) return;
		const { deltaX, deltaY, event } = data;
		this.emitter.emit("virtual-scroll", {
			deltaX,
			deltaY,
			event
		});
		if (event.ctrlKey) return;
		if (event.lenisStopPropagation) return;
		const isTouch = event.type.includes("touch");
		const isWheel = event.type.includes("wheel");
		if (isTouch && this.isIos) {
			if (event.type === "touchstart") this._isDraggingSelection = this.isTouchOnSelectionHandle(event);
			if (this._isDraggingSelection) {
				if (event.type === "touchend") this._isDraggingSelection = false;
				return;
			}
		}
		this.isTouching = event.type === "touchstart" || event.type === "touchmove";
		const isClickOrTap = deltaX === 0 && deltaY === 0;
		if (this.options.syncTouch && isTouch && event.type === "touchstart" && isClickOrTap && !this.isStopped && !this.isLocked) {
			this.reset();
			return;
		}
		const isUnknownGesture = this.options.gestureOrientation === "vertical" && deltaY === 0 || this.options.gestureOrientation === "horizontal" && deltaX === 0;
		if (isClickOrTap || isUnknownGesture) return;
		let composedPath = event.composedPath();
		composedPath = composedPath.slice(0, composedPath.indexOf(this.rootElement));
		const prevent = this.options.prevent;
		const gestureOrientation = Math.abs(deltaX) >= Math.abs(deltaY) ? "horizontal" : "vertical";
		if (composedPath.find((node) => node instanceof HTMLElement && (typeof prevent === "function" && prevent?.(node) || node.hasAttribute?.("data-lenis-prevent") || gestureOrientation === "vertical" && node.hasAttribute?.("data-lenis-prevent-vertical") || gestureOrientation === "horizontal" && node.hasAttribute?.("data-lenis-prevent-horizontal") || isTouch && node.hasAttribute?.("data-lenis-prevent-touch") || isWheel && node.hasAttribute?.("data-lenis-prevent-wheel") || this.options.allowNestedScroll && this.hasNestedScroll(node, {
			deltaX,
			deltaY
		})))) return;
		if (this.isStopped || this.isLocked) {
			if (event.cancelable) event.preventDefault();
			return;
		}
		if (!(this.options.syncTouch && isTouch || this.options.smoothWheel && isWheel)) {
			this.isScrolling = "native";
			this.animate.stop();
			event.lenisStopPropagation = true;
			return;
		}
		let delta = deltaY;
		if (this.options.gestureOrientation === "both") delta = Math.abs(deltaY) > Math.abs(deltaX) ? deltaY : deltaX;
		else if (this.options.gestureOrientation === "horizontal") delta = deltaX;
		if (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && deltaY > 0 || this.animatedScroll === this.limit && deltaY < 0)) event.lenisStopPropagation = true;
		if (event.cancelable) event.preventDefault();
		const isSyncTouch = isTouch && this.options.syncTouch;
		const hasTouchInertia = isTouch && event.type === "touchend";
		if (hasTouchInertia) delta = Math.sign(delta) * Math.abs(this.velocity) ** this.options.touchInertiaExponent;
		this.scrollTo(this.targetScroll + delta, {
			programmatic: false,
			...isSyncTouch ? { lerp: hasTouchInertia ? this.options.syncTouchLerp : 1 } : {
				lerp: this.options.lerp,
				duration: this.options.duration,
				easing: this.options.easing
			}
		});
	};
	/**
	* Force lenis to recalculate the dimensions
	*/
	resize() {
		this.dimensions.resize();
		this.animatedScroll = this.targetScroll = this.actualScroll;
		this.emit();
	}
	emit() {
		this.emitter.emit("scroll", this);
	}
	onNativeScroll = () => {
		if (this._resetVelocityTimeout !== null) {
			clearTimeout(this._resetVelocityTimeout);
			this._resetVelocityTimeout = null;
		}
		if (this._preventNextNativeScrollEvent) {
			this._preventNextNativeScrollEvent = false;
			return;
		}
		if (this.isScrolling === false || this.isScrolling === "native") {
			const lastScroll = this.animatedScroll;
			this.animatedScroll = this.targetScroll = this.actualScroll;
			this.lastVelocity = this.velocity;
			this.velocity = this.animatedScroll - lastScroll;
			this.direction = Math.sign(this.animatedScroll - lastScroll);
			if (!this.isStopped) this.isScrolling = "native";
			this.emit();
			if (this.velocity !== 0) this._resetVelocityTimeout = setTimeout(() => {
				this.lastVelocity = this.velocity;
				this.velocity = 0;
				this.isScrolling = false;
				this.emit();
			}, 400);
		}
	};
	reset() {
		this.isLocked = false;
		this.isScrolling = false;
		this.animatedScroll = this.targetScroll = this.actualScroll;
		this.lastVelocity = this.velocity = 0;
		this.animate.stop();
	}
	/**
	* Start lenis scroll after it has been stopped
	*/
	start() {
		if (!this.isStopped) return;
		if (this.options.autoToggle) {
			this.rootElement.style.removeProperty("overflow");
			return;
		}
		this.internalStart();
	}
	internalStart() {
		if (!this.isStopped) return;
		this.reset();
		this.isStopped = false;
		this.emit();
	}
	/**
	* Stop lenis scroll
	*/
	stop() {
		if (this.isStopped) return;
		if (this.options.autoToggle) {
			this.rootElement.style.setProperty("overflow", "clip");
			return;
		}
		this.internalStop();
	}
	internalStop() {
		if (this.isStopped) return;
		this.reset();
		this.isStopped = true;
		this.emit();
	}
	/**
	* RequestAnimationFrame for lenis
	*
	* @param time The time in ms from an external clock like `requestAnimationFrame` or Tempus
	*/
	raf = (time) => {
		const deltaTime = time - (this.time || time);
		this.time = time;
		this.animate.advance(deltaTime * .001);
		if (this.options.autoRaf) this._rafId = requestAnimationFrame(this.raf);
	};
	/**
	* Scroll to a target value
	*
	* @param target The target value to scroll to
	* @param options The options for the scroll
	*
	* @example
	* lenis.scrollTo(100, {
	*   offset: 100,
	*   duration: 1,
	*   easing: (t) => 1 - Math.cos((t * Math.PI) / 2),
	*   lerp: 0.1,
	*   onStart: () => {
	*     console.log('onStart')
	*   },
	*   onComplete: () => {
	*     console.log('onComplete')
	*   },
	* })
	*/
	scrollTo(_target, { offset = 0, immediate = false, lock = false, programmatic = true, lerp = programmatic ? this.options.lerp : void 0, duration = programmatic ? this.options.duration : void 0, easing = programmatic ? this.options.easing : void 0, onStart, onComplete, force = false, userData } = {}) {
		if (this.prefersReducedMotion) if (programmatic) immediate = true;
		else {
			lerp = 1;
			duration = void 0;
			easing = void 0;
		}
		if ((this.isStopped || this.isLocked) && !force) return;
		let target = _target;
		let adjustedOffset = offset;
		if (typeof target === "string" && [
			"top",
			"left",
			"start",
			"#"
		].includes(target)) target = 0;
		else if (typeof target === "string" && [
			"bottom",
			"right",
			"end"
		].includes(target)) target = this.limit;
		else {
			let node = null;
			if (typeof target === "string") {
				node = target.startsWith("#") ? document.getElementById(target.slice(1)) : document.querySelector(target);
				if (!node) if (target === "#top") target = 0;
				else console.warn("Lenis: Target not found", target);
			} else if (target instanceof Element) node = target;
			if (node) {
				if (this.options.wrapper !== window) {
					const wrapperRect = this.rootElement.getBoundingClientRect();
					adjustedOffset -= this.isHorizontal ? wrapperRect.left : wrapperRect.top;
				}
				const rect = node.getBoundingClientRect();
				const targetStyle = getComputedStyle(node);
				const scrollMargin = this.isHorizontal ? Number.parseFloat(targetStyle.scrollMarginLeft) : Number.parseFloat(targetStyle.scrollMarginTop);
				const containerStyle = getComputedStyle(this.rootElement);
				const scrollPadding = this.isHorizontal ? Number.parseFloat(containerStyle.scrollPaddingLeft) : Number.parseFloat(containerStyle.scrollPaddingTop);
				target = (this.isHorizontal ? rect.left : rect.top) + this.animatedScroll - (Number.isNaN(scrollMargin) ? 0 : scrollMargin) - (Number.isNaN(scrollPadding) ? 0 : scrollPadding);
			}
		}
		if (typeof target !== "number") return;
		target += adjustedOffset;
		if (this.options.infinite) {
			if (programmatic) {
				this.targetScroll = this.animatedScroll = this.scroll;
				const distance = target - this.animatedScroll;
				if (distance > this.limit / 2) target -= this.limit;
				else if (distance < -this.limit / 2) target += this.limit;
			}
		} else target = clamp(0, target, this.limit);
		if (target === this.targetScroll) {
			onStart?.(this);
			onComplete?.(this);
			return;
		}
		this.userData = userData ?? {};
		if (immediate) {
			this.animatedScroll = this.targetScroll = target;
			this.setScroll(this.scroll);
			this.reset();
			this.preventNextNativeScrollEvent();
			this.emit();
			onComplete?.(this);
			this.userData = {};
			requestAnimationFrame(() => {
				this.dispatchScrollendEvent();
			});
			return;
		}
		if (!programmatic) this.targetScroll = target;
		if (typeof duration === "number" && typeof easing !== "function") easing = defaultEasing;
		else if (typeof easing === "function" && typeof duration !== "number") duration = 1;
		this.animate.fromTo(this.animatedScroll, target, {
			duration,
			easing,
			lerp,
			onStart: () => {
				if (lock) this.isLocked = true;
				this.isScrolling = "smooth";
				onStart?.(this);
			},
			onUpdate: (value, completed) => {
				this.isScrolling = "smooth";
				this.lastVelocity = this.velocity;
				this.velocity = value - this.animatedScroll;
				this.direction = Math.sign(this.velocity);
				this.animatedScroll = value;
				this.setScroll(this.scroll);
				if (programmatic) this.targetScroll = value;
				if (!completed) this.emit();
				if (completed) {
					this.reset();
					this.emit();
					onComplete?.(this);
					this.userData = {};
					requestAnimationFrame(() => {
						this.dispatchScrollendEvent();
					});
					this.preventNextNativeScrollEvent();
				}
			}
		});
	}
	preventNextNativeScrollEvent() {
		this._preventNextNativeScrollEvent = true;
		requestAnimationFrame(() => {
			this._preventNextNativeScrollEvent = false;
		});
	}
	hasNestedScroll(node, { deltaX, deltaY }) {
		const time = Date.now();
		if (!node._lenis) node._lenis = {};
		const cache = node._lenis;
		let hasOverflowX;
		let hasOverflowY;
		let isScrollableX;
		let isScrollableY;
		let hasOverscrollBehaviorX;
		let hasOverscrollBehaviorY;
		let scrollWidth;
		let scrollHeight;
		let clientWidth;
		let clientHeight;
		if (time - (cache.time ?? 0) > 2e3) {
			cache.time = Date.now();
			const computedStyle = window.getComputedStyle(node);
			cache.computedStyle = computedStyle;
			hasOverflowX = [
				"auto",
				"overlay",
				"scroll"
			].includes(computedStyle.overflowX);
			hasOverflowY = [
				"auto",
				"overlay",
				"scroll"
			].includes(computedStyle.overflowY);
			hasOverscrollBehaviorX = ["auto"].includes(computedStyle.overscrollBehaviorX);
			hasOverscrollBehaviorY = ["auto"].includes(computedStyle.overscrollBehaviorY);
			cache.hasOverflowX = hasOverflowX;
			cache.hasOverflowY = hasOverflowY;
			if (!(hasOverflowX || hasOverflowY)) return false;
			scrollWidth = node.scrollWidth;
			scrollHeight = node.scrollHeight;
			clientWidth = node.clientWidth;
			clientHeight = node.clientHeight;
			isScrollableX = scrollWidth > clientWidth;
			isScrollableY = scrollHeight > clientHeight;
			cache.isScrollableX = isScrollableX;
			cache.isScrollableY = isScrollableY;
			cache.scrollWidth = scrollWidth;
			cache.scrollHeight = scrollHeight;
			cache.clientWidth = clientWidth;
			cache.clientHeight = clientHeight;
			cache.hasOverscrollBehaviorX = hasOverscrollBehaviorX;
			cache.hasOverscrollBehaviorY = hasOverscrollBehaviorY;
		} else {
			isScrollableX = cache.isScrollableX;
			isScrollableY = cache.isScrollableY;
			hasOverflowX = cache.hasOverflowX;
			hasOverflowY = cache.hasOverflowY;
			scrollWidth = cache.scrollWidth;
			scrollHeight = cache.scrollHeight;
			clientWidth = cache.clientWidth;
			clientHeight = cache.clientHeight;
			hasOverscrollBehaviorX = cache.hasOverscrollBehaviorX;
			hasOverscrollBehaviorY = cache.hasOverscrollBehaviorY;
		}
		if (!(hasOverflowX && isScrollableX || hasOverflowY && isScrollableY)) return false;
		const orientation = Math.abs(deltaX) >= Math.abs(deltaY) ? "horizontal" : "vertical";
		let scroll;
		let maxScroll;
		let delta;
		let hasOverflow;
		let isScrollable;
		let hasOverscrollBehavior;
		if (orientation === "horizontal") {
			scroll = Math.round(node.scrollLeft);
			maxScroll = scrollWidth - clientWidth;
			delta = deltaX;
			hasOverflow = hasOverflowX;
			isScrollable = isScrollableX;
			hasOverscrollBehavior = hasOverscrollBehaviorX;
		} else if (orientation === "vertical") {
			scroll = Math.round(node.scrollTop);
			maxScroll = scrollHeight - clientHeight;
			delta = deltaY;
			hasOverflow = hasOverflowY;
			isScrollable = isScrollableY;
			hasOverscrollBehavior = hasOverscrollBehaviorY;
		} else return false;
		if (!hasOverscrollBehavior && (scroll >= maxScroll || scroll <= 0)) return true;
		return (delta > 0 ? scroll < maxScroll : scroll > 0) && hasOverflow && isScrollable;
	}
	/**
	* The root element on which lenis is instanced
	*/
	get rootElement() {
		return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
	}
	/**
	* The limit which is the maximum scroll value
	*/
	get limit() {
		if (this.options.naiveDimensions) {
			if (this.isHorizontal) return this.rootElement.scrollWidth - this.rootElement.clientWidth;
			return this.rootElement.scrollHeight - this.rootElement.clientHeight;
		}
		return this.dimensions.limit[this.isHorizontal ? "x" : "y"];
	}
	/**
	* Whether or not the scroll is horizontal
	*/
	get isHorizontal() {
		return this.options.orientation === "horizontal";
	}
	/**
	* The actual scroll value
	*/
	get actualScroll() {
		const wrapper = this.options.wrapper;
		return this.isHorizontal ? wrapper.scrollX ?? wrapper.scrollLeft : wrapper.scrollY ?? wrapper.scrollTop;
	}
	/**
	* The current scroll value
	*/
	get scroll() {
		return this.options.infinite ? modulo(this.animatedScroll, this.limit) : this.animatedScroll;
	}
	/**
	* The progress of the scroll relative to the limit
	*/
	get progress() {
		return this.limit === 0 ? 1 : this.scroll / this.limit;
	}
	/**
	* Current scroll state
	*/
	get isScrolling() {
		return this._isScrolling;
	}
	set isScrolling(value) {
		if (this._isScrolling !== value) {
			this._isScrolling = value;
			this.updateClassName();
		}
	}
	/**
	* Check if lenis is stopped
	*/
	get isStopped() {
		return this._isStopped;
	}
	set isStopped(value) {
		if (this._isStopped !== value) {
			this._isStopped = value;
			this.updateClassName();
		}
	}
	/**
	* Check if lenis is locked
	*/
	get isLocked() {
		return this._isLocked;
	}
	set isLocked(value) {
		if (this._isLocked !== value) {
			this._isLocked = value;
			this.updateClassName();
		}
	}
	/**
	* Check if lenis is smooth scrolling
	*/
	get isSmooth() {
		return this.isScrolling === "smooth";
	}
	/**
	* Whether the user prefers reduced motion and lenis is honoring it (see `respectReducedMotion` option)
	*/
	get prefersReducedMotion() {
		return this.options.respectReducedMotion && this.reducedMotionMediaQuery.matches;
	}
	/**
	* The class name applied to the wrapper element
	*/
	get className() {
		let className = "lenis";
		if (this.options.autoToggle) className += " lenis-autoToggle";
		if (this.isStopped) className += " lenis-stopped";
		if (this.isLocked) className += " lenis-locked";
		if (this.isScrolling) className += " lenis-scrolling";
		if (this.isScrolling === "smooth") className += " lenis-smooth";
		return className;
	}
	updateClassName() {
		this.cleanUpClassName();
		this.className.split(" ").forEach((className) => {
			this.rootElement.classList.add(className);
		});
	}
	cleanUpClassName() {
		for (const className of Array.from(this.rootElement.classList)) if (className === "lenis" || className.startsWith("lenis-")) this.rootElement.classList.remove(className);
	}
};
// src/visuals.tsx
function FactoryVisual({ compact = false }) {
	const id = useId().replace(/:/g, "");
	return /* @__PURE__ */ jsxs("div", {
		onPointerMove: (e) => {
			e.currentTarget.style.setProperty("--pointer-x", `${e.clientX - e.currentTarget.getBoundingClientRect().left}px`);
			e.currentTarget.style.setProperty("--pointer-y", `${e.clientY - e.currentTarget.getBoundingClientRect().top}px`);
		},
		className: `factory-visual ${compact ? "compact" : ""}`,
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "visual-cursor",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "visual-coordinate mono",
				children: ["NEK / SYSTEM ARCHITECTURE ", /* @__PURE__ */ jsx("span", { children: "01.04" })]
			}),
			/* @__PURE__ */ jsxs("svg", {
				className: "factory-svg",
				viewBox: "0 0 700 570",
				role: "img",
				"aria-label": "Illustrative connected factory with sensors, a central platform and animated data connections",
				children: [
					/* @__PURE__ */ jsxs("defs", { children: [
						/* @__PURE__ */ jsxs("linearGradient", {
							id: `${id}ground`,
							x1: "0",
							y1: "0",
							x2: "1",
							y2: "1",
							children: [/* @__PURE__ */ jsx("stop", { stopColor: "#20345a" }), /* @__PURE__ */ jsx("stop", {
								offset: "1",
								stopColor: "#0c1628"
							})]
						}),
						/* @__PURE__ */ jsxs("linearGradient", {
							id: `${id}top`,
							children: [/* @__PURE__ */ jsx("stop", { stopColor: "#536c96" }), /* @__PURE__ */ jsx("stop", {
								offset: "1",
								stopColor: "#263d64"
							})]
						}),
						/* @__PURE__ */ jsxs("linearGradient", {
							id: `${id}side`,
							children: [/* @__PURE__ */ jsx("stop", { stopColor: "#182c4a" }), /* @__PURE__ */ jsx("stop", {
								offset: "1",
								stopColor: "#101e35"
							})]
						}),
						/* @__PURE__ */ jsxs("linearGradient", {
							id: `${id}blue`,
							x1: "0",
							y1: "0",
							x2: "0",
							y2: "1",
							children: [/* @__PURE__ */ jsx("stop", {
								stopColor: "#5b8cff",
								stopOpacity: ".5"
							}), /* @__PURE__ */ jsx("stop", {
								offset: "1",
								stopColor: "#356bff",
								stopOpacity: "0"
							})]
						}),
						/* @__PURE__ */ jsx("filter", {
							id: `${id}glow`,
							children: /* @__PURE__ */ jsx("feGaussianBlur", { stdDeviation: "4" })
						})
					] }),
					/* @__PURE__ */ jsx("ellipse", {
						cx: "350",
						cy: "375",
						rx: "275",
						ry: "115",
						fill: "#356bff",
						opacity: ".06"
					}),
					/* @__PURE__ */ jsxs("g", {
						className: "factory-platform",
						children: [
							/* @__PURE__ */ jsx("path", {
								d: "M60 320 345 155 645 328 360 493Z",
								fill: `url(#${id}ground)`,
								stroke: "#40557b"
							}),
							/* @__PURE__ */ jsx("path", {
								d: "M60 320v20l300 173v-20z",
								fill: "#0b172a",
								stroke: "#243753"
							}),
							/* @__PURE__ */ jsx("path", {
								d: "m360 493 285-165v20L360 513Z",
								fill: "#11223d",
								stroke: "#2d456e"
							}),
							Array.from({ length: 9 }, (_, i) => /* @__PURE__ */ jsxs("g", {
								stroke: "#6d8eb9",
								opacity: ".1",
								children: [/* @__PURE__ */ jsx("path", { d: `M${90 + i * 30} ${303 - i * 17.3}l300 173` }), /* @__PURE__ */ jsx("path", { d: `M${90 + i * 30} ${337 + i * 17.3}l285-165` })]
							}, i)),
							/* @__PURE__ */ jsxs("g", {
								className: "data-paths",
								fill: "none",
								stroke: "#4a7fff",
								strokeWidth: "2",
								children: [
									/* @__PURE__ */ jsx("path", { d: "m174 330 105 61 80-46 93 54 101-58" }),
									/* @__PURE__ */ jsx("path", { d: "m270 259 87 50 0 36" }),
									/* @__PURE__ */ jsx("path", { d: "m445 238 89 51-79 46" }),
									/* @__PURE__ */ jsx("path", { d: "m206 344 0 44 62 36" })
								]
							}),
							/* @__PURE__ */ jsxs("g", {
								className: "data-dashes",
								fill: "none",
								stroke: "#b6caff",
								strokeWidth: "3",
								strokeDasharray: "5 100",
								children: [
									/* @__PURE__ */ jsx("path", { d: "m174 330 105 61 80-46 93 54 101-58" }),
									/* @__PURE__ */ jsx("path", { d: "m270 259 87 50 0 36" }),
									/* @__PURE__ */ jsx("path", { d: "m445 238 89 51-79 46" })
								]
							}),
							/* @__PURE__ */ jsxs("g", {
								className: "factory-building",
								children: [
									/* @__PURE__ */ jsx("path", {
										d: "m137 259 112-65 138 80-112 65Z",
										fill: `url(#${id}top)`,
										stroke: "#6b82a5"
									}),
									/* @__PURE__ */ jsx("path", {
										d: "m137 259 138 80v66l-138-80Z",
										fill: `url(#${id}side)`,
										stroke: "#3c557b"
									}),
									/* @__PURE__ */ jsx("path", {
										d: "m275 339 112-65v66l-112 65Z",
										fill: "#223a5f",
										stroke: "#4b6790"
									}),
									[
										0,
										1,
										2,
										3,
										4,
										5
									].map((i) => /* @__PURE__ */ jsx("path", {
										d: `m${151 + i * 18} ${277 + i * 10.4}v20l12 7v-20Z`,
										fill: "#7a9ac2",
										opacity: ".65"
									}, i)),
									[
										0,
										1,
										2,
										3,
										4
									].map((i) => /* @__PURE__ */ jsx("path", {
										d: `m${285 + i * 19} ${345 - i * 11}v36l11-6v-36Z`,
										fill: "#0b182c",
										stroke: "#486b9c"
									}, i)),
									/* @__PURE__ */ jsx("path", {
										d: "m155 249 93-54 120 70-92 53Z",
										fill: "none",
										stroke: "#7690b4",
										opacity: ".4"
									}),
									/* @__PURE__ */ jsx("path", {
										d: "m210 235 34-19 57 33-34 20Z",
										fill: "#6882a5",
										stroke: "#8ba1c1"
									}),
									/* @__PURE__ */ jsx("path", {
										d: "m210 235v10l57 33v-9z",
										fill: "#2b4366"
									}),
									/* @__PURE__ */ jsx("path", {
										d: "m267 269 34-20v10l-34 19Z",
										fill: "#38557d"
									})
								]
							}),
							/* @__PURE__ */ jsxs("g", {
								className: "factory-building",
								children: [
									/* @__PURE__ */ jsx("path", {
										d: "m418 219 56-32 81 47-56 32Z",
										fill: `url(#${id}top)`,
										stroke: "#7088ae"
									}),
									/* @__PURE__ */ jsx("path", {
										d: "m418 219 81 47v74l-81-47Z",
										fill: `url(#${id}side)`,
										stroke: "#3e597e"
									}),
									/* @__PURE__ */ jsx("path", {
										d: "m499 266 56-32v74l-56 32Z",
										fill: "#233b61",
										stroke: "#4a6793"
									}),
									[
										0,
										1,
										2,
										3
									].map((i) => /* @__PURE__ */ jsx("path", {
										d: `m${428 + i * 17} ${239 + i * 10}v24l10 6v-24Z`,
										fill: "#a4bffe",
										opacity: ".7"
									}, i)),
									[
										0,
										1,
										2
									].map((i) => /* @__PURE__ */ jsx("path", {
										d: `m508 ${279 + i * 16} 36-21v6l-36 21Z`,
										fill: "#5c81bc"
									}, i))
								]
							}),
							/* @__PURE__ */ jsxs("g", { children: [
								/* @__PURE__ */ jsx("path", {
									d: "m440 387 56-32 45 26-56 32Z",
									fill: "#5575a2",
									stroke: "#8aa6cf"
								}),
								/* @__PURE__ */ jsx("path", {
									d: "m440 387v27l45 26v-27Z",
									fill: "#233959"
								}),
								/* @__PURE__ */ jsx("path", {
									d: "m485 413 56-32v27l-56 32Z",
									fill: "#304c76"
								}),
								/* @__PURE__ */ jsx("path", {
									d: "m454 384 39-23 28 17-39 22Z",
									fill: "#1b2c4a"
								}),
								/* @__PURE__ */ jsx("path", {
									d: "m463 381 29-17 19 11-30 17Z",
									fill: "#356bff"
								})
							] }),
							/* @__PURE__ */ jsxs("g", {
								className: "sensor-unit",
								children: [
									/* @__PURE__ */ jsx("path", {
										d: "m315 186 29-17 29 17-29 17Z",
										fill: "#6c8db8"
									}),
									/* @__PURE__ */ jsx("path", {
										d: "m315 186v48l29 17v-48Z",
										fill: "#233959"
									}),
									/* @__PURE__ */ jsx("path", {
										d: "m344 203 29-17v48l-29 17Z",
										fill: "#395b89"
									}),
									/* @__PURE__ */ jsx("circle", {
										cx: "344",
										cy: "186",
										r: "5",
										fill: "#83abff"
									}),
									/* @__PURE__ */ jsx("path", {
										d: "M344 184v-30",
										stroke: "#9db5da",
										strokeWidth: "3"
									}),
									/* @__PURE__ */ jsx("circle", {
										cx: "344",
										cy: "154",
										r: "4",
										fill: "#c0d5ff"
									})
								]
							}),
							/* @__PURE__ */ jsxs("g", {
								stroke: "#7ca6ff",
								fill: "none",
								className: "sensor-waves",
								children: [
									/* @__PURE__ */ jsx("ellipse", {
										cx: "344",
										cy: "154",
										rx: "14",
										ry: "8"
									}),
									/* @__PURE__ */ jsx("ellipse", {
										cx: "344",
										cy: "154",
										rx: "25",
										ry: "14",
										opacity: ".5"
									}),
									/* @__PURE__ */ jsx("ellipse", {
										cx: "344",
										cy: "154",
										rx: "37",
										ry: "21",
										opacity: ".2"
									})
								]
							}),
							[
								[174, 330],
								[357, 345],
								[455, 335],
								[553, 341],
								[270, 259]
							].map(([x, y], i) => /* @__PURE__ */ jsxs("g", { children: [
								/* @__PURE__ */ jsx("circle", {
									cx: x,
									cy: y,
									r: "13",
									fill: "#356bff",
									opacity: ".3",
									filter: `url(#${id}glow)`
								}),
								/* @__PURE__ */ jsx("circle", {
									cx: x,
									cy: y,
									r: "5",
									fill: "#a8c4ff"
								}),
								/* @__PURE__ */ jsx("circle", {
									className: "node-pulse",
									cx: x,
									cy: y,
									r: "11",
									fill: "none",
									stroke: "#5c8dff",
									style: { animationDelay: `${i * .5}s` }
								})
							] }, i)),
							/* @__PURE__ */ jsx("path", {
								d: "m137 259 112-65 138 80v-88l-138-80-112 65Z",
								fill: `url(#${id}blue)`,
								opacity: ".25",
								className: "scan-field"
							}),
							/* @__PURE__ */ jsx("text", {
								x: "108",
								y: "357",
								fill: "#90a3c2",
								fontSize: "9",
								transform: "rotate(30 108 357)",
								fontFamily: "monospace",
								children: "CONNECTED OPERATIONS / 01"
							})
						]
					}),
					/* @__PURE__ */ jsxs("g", {
						fill: "none",
						stroke: "#648bff",
						opacity: ".25",
						children: [
							/* @__PURE__ */ jsx("path", { d: "M344 125V95h103" }),
							/* @__PURE__ */ jsx("path", { d: "m563 295 67-39v-55" }),
							/* @__PURE__ */ jsx("path", { d: "m180 230-65-38V165" })
						]
					}),
					/* @__PURE__ */ jsxs("g", {
						fill: "#7990b0",
						fontSize: "9",
						fontFamily: "monospace",
						children: [/* @__PURE__ */ jsx("text", {
							x: "454",
							y: "99",
							children: "EDGE GATEWAY"
						}), /* @__PURE__ */ jsx("text", {
							x: "80",
							y: "153",
							children: "SENSOR ARRAY"
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "telemetry-card",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "telemetry-top",
						children: [/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("i", { className: "status-dot" }), " SYSTEM CONNECTIVITY"] }), /* @__PURE__ */ jsx(ArrowUpRight, { size: 13 })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "telemetry-value",
						children: ["Connected", /* @__PURE__ */ jsx("span", { children: "Edge network" })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "telemetry-devices",
						children: [
							/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx(Radio, { size: 12 }), " Sensors"] }),
							/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx(Cpu, { size: 12 }), " Gateway"] }),
							/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx(Workflow, { size: 12 }), " Platform"] })
						]
					}),
					/* @__PURE__ */ jsx("span", {
						className: "demo-label",
						children: "Illustrative data"
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "event-card",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "event-icon",
						children: /* @__PURE__ */ jsx(Check, { size: 15 })
					}),
					/* @__PURE__ */ jsxs("div", { children: ["Automation triggered", /* @__PURE__ */ jsx("small", { children: "Condition detected → team notified" })] }),
					/* @__PURE__ */ jsx(Zap, { size: 13 })
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "visual-bottom mono",
				children: [/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("i", { className: "status-dot" }), " CONNECTED BY DESIGN"] }), /* @__PURE__ */ jsx("span", { children: "PHYSICAL → DIGITAL" })]
			})
		]
	});
}
function AnalyticsVisual({ light = false }) {
	return /* @__PURE__ */ jsxs("div", {
		className: `analytics-visual ${light ? "light" : ""}`,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "chart-top",
				children: [/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx(Activity, { size: 16 }), " Operational intelligence"] }), /* @__PURE__ */ jsx("span", {
					className: "mono",
					children: "ILLUSTRATIVE DATA"
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "chart-metric",
				children: [/* @__PURE__ */ jsx("span", { children: "Equipment condition" }), /* @__PURE__ */ jsxs("strong", { children: ["Within range ", /* @__PURE__ */ jsx("i", { className: "status-dot" })] })]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "chart-area",
				children: [
					/* @__PURE__ */ jsx("div", { className: "chart-grid" }),
					/* @__PURE__ */ jsxs("svg", {
						viewBox: "0 0 500 160",
						role: "img",
						"aria-label": "Illustrative condition trend with anomaly highlighted",
						children: [
							/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
								id: "area",
								x1: "0",
								y1: "0",
								x2: "0",
								y2: "1",
								children: [/* @__PURE__ */ jsx("stop", {
									stopColor: "#356bff",
									stopOpacity: ".3"
								}), /* @__PURE__ */ jsx("stop", {
									offset: "1",
									stopColor: "#356bff",
									stopOpacity: "0"
								})]
							}) }),
							/* @__PURE__ */ jsx("path", {
								d: "M0 120 20 110 40 115 60 87 80 94 100 75 120 95 140 70 160 77 180 59 200 64 220 45 240 62 260 51 280 5 300 70 320 52 340 65 360 39 380 44 400 24 420 38 440 20 460 31 480 10 500 19V160H0Z",
								fill: "url(#area)"
							}),
							/* @__PURE__ */ jsx("path", {
								className: "chart-line",
								d: "M0 120 20 110 40 115 60 87 80 94 100 75 120 95 140 70 160 77 180 59 200 64 220 45 240 62 260 51 280 5 300 70 320 52 340 65 360 39 380 44 400 24 420 38 440 20 460 31 480 10 500 19",
								fill: "none",
								stroke: "#648bff",
								strokeWidth: "2.5"
							}),
							/* @__PURE__ */ jsx("circle", {
								cx: "280",
								cy: "5",
								r: "5",
								fill: "#83abff"
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "chart-tooltip",
						children: ["Anomaly identified", /* @__PURE__ */ jsx("small", { children: "Review recommended" })]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "chart-axis mono",
				children: [
					/* @__PURE__ */ jsx("span", { children: "08:00" }),
					/* @__PURE__ */ jsx("span", { children: "10:00" }),
					/* @__PURE__ */ jsx("span", { children: "12:00" }),
					/* @__PURE__ */ jsx("span", { children: "14:00" })
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "chart-bottom",
				children: [/* @__PURE__ */ jsx("span", { children: "Sensor input" }), /* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("i", { className: "status-dot" }), " Analysis active"] })]
			})
		]
	});
}
function WorkflowVisual() {
	return /* @__PURE__ */ jsxs("div", {
		className: "workflow-visual",
		children: [
			/* @__PURE__ */ jsx("div", { className: "workflow-grid" }),
			/* @__PURE__ */ jsxs("div", {
				className: "workflow-node start",
				children: [
					/* @__PURE__ */ jsx(Radio, {}),
					/* @__PURE__ */ jsx("span", { children: "Sensor event" }),
					/* @__PURE__ */ jsx("small", { children: "Condition received" })
				]
			}),
			/* @__PURE__ */ jsx("div", { className: "workflow-connector one" }),
			/* @__PURE__ */ jsxs("div", {
				className: "workflow-node center",
				children: [
					/* @__PURE__ */ jsx(Cpu, {}),
					/* @__PURE__ */ jsx("span", { children: "Evaluate condition" }),
					/* @__PURE__ */ jsx("small", { children: "Rules + intelligence" })
				]
			}),
			/* @__PURE__ */ jsx("div", { className: "workflow-connector two" }),
			/* @__PURE__ */ jsxs("div", {
				className: "workflow-node end",
				children: [
					/* @__PURE__ */ jsx(Zap, {}),
					/* @__PURE__ */ jsx("span", { children: "Take action" }),
					/* @__PURE__ */ jsx("small", { children: "Notify · log · update" })
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "workflow-caption mono",
				children: [/* @__PURE__ */ jsx("i", { className: "status-dot" }), " CONNECTED WORKFLOW · ILLUSTRATIVE"]
			})
		]
	});
}
function AppVisual() {
	return /* @__PURE__ */ jsxs("div", {
		className: "app-visual",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "app-toolbar",
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "mini-mark",
					children: "N"
				}),
				/* @__PURE__ */ jsx("span", { children: "Operations / Overview" }),
				/* @__PURE__ */ jsx("span", {
					className: "mono",
					children: "DEMO"
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "app-body",
			children: [/* @__PURE__ */ jsxs("aside", { children: [
				/* @__PURE__ */ jsx("span", { className: "app-nav active" }),
				/* @__PURE__ */ jsx("span", { className: "app-nav" }),
				/* @__PURE__ */ jsx("span", { className: "app-nav" }),
				/* @__PURE__ */ jsx("span", { className: "app-nav" })
			] }), /* @__PURE__ */ jsxs("div", {
				className: "app-content",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "mono",
						children: "YOUR OPERATIONS. ONE VIEW."
					}),
					/* @__PURE__ */ jsx("h4", { children: "Good morning, team." }),
					/* @__PURE__ */ jsxs("div", {
						className: "app-stat",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "Devices" }), /* @__PURE__ */ jsx("strong", { children: "Connected" })] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "Workflows" }), /* @__PURE__ */ jsx("strong", { children: "In sync" })] })]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "app-bars",
						children: [
							45,
							65,
							38,
							80,
							58,
							90,
							72,
							96,
							65,
							82,
							70,
							91
						].map((n, i) => /* @__PURE__ */ jsx("i", { style: {
							height: `${n}%`,
							animationDelay: `${i * .1}s`
						} }, i))
					}),
					/* @__PURE__ */ jsx("span", {
						className: "mono app-demo",
						children: "ILLUSTRATIVE INTERFACE"
					})
				]
			})]
		})]
	});
}
// src/content.ts
var solutions = [
	{
		slug: "iot-solutions",
		number: "01",
		short: "IoT & connectivity",
		title: "IoT Platforms & Device Connectivity",
		heading: "Make the physical world visible.",
		summary: "Connect equipment, capture the signals that matter, and bring your operations into a single, clear view.",
		problem: "Disconnected equipment. Fragmented information. Limited visibility.",
		capabilities: [
			"Remote equipment monitoring",
			"Sensor & gateway integration",
			"Device management",
			"Real-time dashboards",
			"Data collection & communication"
		],
		deliverables: [
			"Device and connectivity architecture",
			"Sensor-to-platform integration",
			"Operational monitoring dashboard",
			"Alert rules and access controls",
			"Technical documentation and handover"
		],
		example: "A facility team monitors equipment conditions in one dashboard and receives an alert when a sensor crosses an agreed threshold.",
		integration: "We assess your devices, network conditions, communication protocols, and existing software before defining the right edge-to-cloud architecture.",
		faqs: [
			["Can you work with existing equipment?", "We begin with a device and infrastructure assessment. Connectivity depends on the interfaces, protocols, network access, and data available from your equipment."],
			["What happens if connectivity drops?", "We define buffering, recovery, and alert requirements during architecture design, based on the hardware and operational conditions."],
			["How do you approach device security?", "Device identity, access permissions, encrypted communication, and update processes are considered as part of the agreed architecture."]
		]
	},
	{
		slug: "ai-automation",
		number: "02",
		short: "AI & automation",
		title: "AI & Intelligent Automation",
		heading: "Less noise. More intelligence.",
		summary: "Turn operational data into useful signals, then connect those insights to workflows your team can act on.",
		problem: "More data to review. More manual follow-up. Less time to act.",
		capabilities: [
			"AI-assisted monitoring",
			"Anomaly detection",
			"Predictive insights",
			"Workflow & process automation",
			"System integrations & notifications"
		],
		deliverables: [
			"Use-case and data readiness assessment",
			"Validated proof of concept",
			"Analytics or automation workflow",
			"Integration with your business systems",
			"Evaluation criteria and operating guidance"
		],
		example: "An operational team reviews an unusual equipment trend, confirms the condition, and triggers a documented maintenance workflow.",
		integration: "We evaluate data quality and workflow ownership first. Rules, statistical methods, and AI are selected according to the use case, with human review where appropriate.",
		faqs: [
			["Do we need a large dataset to start?", "It depends on the use case. A discovery assessment determines whether rules, existing models, or a custom model are appropriate for the data you have."],
			["Can a person approve automated actions?", "Yes. Approval steps, exception handling, and audit records can be designed around your team’s operating requirements."],
			["How is success evaluated?", "We agree on measurable acceptance criteria before implementation and validate the solution against representative operational scenarios."]
		]
	},
	{
		slug: "custom-software",
		number: "03",
		short: "Software & applications",
		title: "Custom Software & Applications",
		heading: "Software that fits your operation.",
		summary: "Purpose-built dashboards, web and mobile applications that connect people, processes, and the systems they use.",
		problem: "Workarounds and disconnected tools are slowing the team down.",
		capabilities: [
			"Custom business applications",
			"Web & mobile development",
			"Operational dashboards",
			"API & platform integrations",
			"Zoho implementation & automation"
		],
		deliverables: [
			"Product requirements and UI designs",
			"Application and integration architecture",
			"Responsive application or mobile experience",
			"Role-based access and reporting",
			"Deployment documentation and support plan"
		],
		example: "Warehouse, finance, and operations teams use a shared application to review inventory exceptions and coordinate follow-up.",
		integration: "We map systems of record, APIs, user roles, and data flows before building. Your existing business platforms become part of a connected product experience.",
		faqs: [
			["Can you integrate our current software?", "We review the available APIs, access permissions, and integration constraints of each platform before confirming scope."],
			["Do you build both websites and mobile apps?", "Yes. NekSoft provides website, web application, and mobile development, with the approach selected around the users and the product requirements."],
			["Is ongoing support available?", "Maintenance, monitoring, improvements, and support responsibilities are defined in the agreed engagement."]
		]
	}
];
var industries = [
	{
		name: "Manufacturing",
		image: "manufacturing.jpg",
		alt: "Industrial production environment with automated equipment",
		challenge: "Equipment conditions are difficult to see across disconnected production systems.",
		solution: "Bring sensor signals, equipment monitoring, and intelligent alerts into a connected operational view.",
		example: "Monitor a production asset and notify the responsible team when a condition needs review.",
		tags: [
			"Equipment monitoring",
			"Condition alerts",
			"Operational visibility"
		]
	},
	{
		name: "Logistics",
		image: "logistics.jpg",
		alt: "Warehouse logistics and distribution operation",
		challenge: "Operational updates live across separate tools, teams, and locations.",
		solution: "Connect tracking information, exception notifications, and the systems that coordinate daily operations.",
		example: "Route a shipment exception into a shared workflow so teams can track ownership and resolution.",
		tags: [
			"Connected tracking",
			"Exception workflows",
			"System integration"
		]
	},
	{
		name: "Smart Facilities",
		image: "facilities.jpg",
		alt: "Modern commercial buildings viewed from below",
		challenge: "Independent building systems make it difficult to understand the complete picture.",
		solution: "Centralize selected sensor readings, facility dashboards, and automated operational workflows.",
		example: "Notify a facilities team when an environmental sensor moves outside a configured range.",
		tags: [
			"Sensor integration",
			"Facility dashboards",
			"Automated alerts"
		]
	},
	{
		name: "Retail",
		image: "retail.jpg",
		alt: "Modern retail store interior",
		challenge: "Inventory and business processes are spread across disconnected platforms.",
		solution: "Connect inventory information, operational reporting, and the workflows that keep teams aligned.",
		example: "Flag a stock exception and create a replenishment task in an existing business platform.",
		tags: [
			"Inventory workflows",
			"Connected reporting",
			"Business automation"
		]
	}
];
var stages = [
	{
		title: "Sensors & devices",
		label: "01 / CAPTURE",
		description: "Collect useful signals from the physical world.",
		example: "A sensor captures a change in equipment temperature.",
		detail: "Device interfaces, sampling needs, and operating conditions shape the data collection layer."
	},
	{
		title: "Connected platform",
		label: "02 / CONNECT",
		description: "Bring device information into a shared, usable platform.",
		example: "A gateway delivers the reading to a monitoring application.",
		detail: "Connectivity, data ingestion, device identity, and storage are designed as one system."
	},
	{
		title: "AI intelligence",
		label: "03 / UNDERSTAND",
		description: "Apply rules and intelligence to identify what needs attention.",
		example: "An agreed rule or model flags an unusual temperature trend.",
		detail: "Models and thresholds are evaluated against the available data and the operational use case."
	},
	{
		title: "Automated actions",
		label: "04 / ACT",
		description: "Connect insights to a clear operational response.",
		example: "The responsible team receives an alert and a review task.",
		detail: "Notifications, human approvals, and system updates follow a defined, auditable workflow."
	}
];
var process = [
	[
		"Discover",
		"Understand the operation.",
		"We map your business requirements, existing infrastructure, and the challenge you want to solve.",
		"Requirements brief · System assessment"
	],
	[
		"Prototype",
		"Validate before scaling.",
		"We define the architecture and test the proposed solution with a focused proof of concept.",
		"Architecture · Working prototype"
	],
	[
		"Engineer",
		"Build with intention.",
		"We develop the platform, software, device connections, and automation around the agreed requirements.",
		"Connected platform · Application"
	],
	[
		"Integrate",
		"Bring the system together.",
		"We connect devices, APIs, and business platforms, then validate the complete operational flow.",
		"System integration · Acceptance review"
	],
	[
		"Support",
		"Keep moving forward.",
		"We provide maintenance, technical support, and improvements according to the agreed engagement.",
		"Documentation · Support plan"
	]
];
var offices = [
	{
		name: "Netherlands",
		role: "Headquarters",
		city: "Almere",
		address: "NEKSOFT CONSULTANCY SERVICES B.V\nPoëziestraat 45, 1321HH, Almere",
		phone: "+31 6 48217892",
		tel: "+31648217892"
	},
	{
		name: "India",
		role: "Delivery team",
		city: "Sitamarhi & Noida",
		address: "Kailashpuri, Ward No-45, Dumra, Sitamarhi, Bihar 843301\n1009, Tower A, I-Thum Tower, Sector 62, Noida, UP 201301",
		phone: "+91 96080 79939",
		tel: "+919608079939"
	},
	{
		name: "Germany",
		role: "Presence",
		city: "Munich area",
		address: "Theodor-Heuss-Straße 33, 85764",
		phone: "+49 089 20928505",
		tel: "+498920928505"
	}
];
// src/world-map-data.ts
var worldLand = "M1000,334.6L1000,336.2L998.2,337L996.5,337.7L996.1,336.5L997.5,335.8L998.4,335.6L1000,334.6ZM994.8,339.3L995.5,338.8L996.4,339.7L996,341.5L994.3,341.9L992.7,341.5L992.5,340.1L993.5,338.9L994.8,339.3ZM0.6,334.4L0.2,336L0,334.6L0.6,334.4ZM594.2,284.5L594.6,284.9L604.7,291.6L604.9,293.6L608.9,296.9L607.6,300.9L607.8,302.8L609.6,304L609.6,304.9L608.9,306.9L609,307.9L608.9,309.5L609.8,311.5L611,314.8L612,315.5L609.8,317.5L606.7,318.7L605.1,318.7L604.1,319.7L602.2,319.8L601.4,320.2L598.1,319.2L596,319.5L595.2,315L594.3,313.5L593.7,312.6L591,311.9L589.4,310.9L587.7,310.4L586.5,309.8L585.4,309L583.9,304.8L582.3,303L581.7,301L582,299.3L581.5,296.3L582.6,296.1L583.7,294.9L584.7,293.2L585.4,292.5L585.4,291.4L584.8,290.7L584.6,289.4L585.4,289L585.6,287L584.5,285.1L585.5,284.7L588.5,284.8L594.2,284.5ZM475.9,189.8L475.9,190.7L475.9,195.7L466.8,195.5L466.8,204L464.2,204.3L463.6,206L464.1,210.8L453.2,210.8L452.6,211.9L452.7,210.5L459,210.2L459.4,209L460.5,207.5L461.4,203L465.3,199.4L466.6,195.2L467.4,195L468.4,192.4L470.7,192L471.7,192.5L473,192.5L473.9,191.7L475.6,191.6L475.5,189.8L475.9,189.8ZM158.8,119.2L153,115.9L151,114.5L146,113.1L144.5,110.2L144.9,108.2L141.3,106.7L140.8,104.1L137.5,101.7L137.4,100L138.9,98.4L138.9,96.3L134.1,94.2L131.3,90.4L129.6,88L127,86.5L125.2,85.2L123.7,83.5L120.9,84.5L118.2,86.4L115.7,84.2L113.8,82.8L111.1,81.8L108.3,81.7L108.4,62.9L108.4,50.6L113.6,51.4L117.9,53L120.8,53.3L123.3,51.9L126.6,50.9L130.8,51.3L134.9,49.8L139.5,49L141.4,50.4L143.4,49.6L144.1,48.1L146,48.4L150.7,51.4L154.4,49.1L154.8,51.6L158.2,51.1L159.2,50.1L162.6,50.3L166.8,51.7L173.3,52.9L177.1,53.5L179.9,53.3L183.6,55L179.7,56.6L184.7,57.3L192.2,56.9L194.6,56.3L197.6,58.3L200.6,56.6L197.7,55.2L199.5,54.1L202.9,54L205.1,53.6L207.4,54.4L210.2,56.2L213.3,56L218.2,57.4L222.5,56.9L226.5,57L226.2,54.9L228.7,54.4L233,55.5L233,58.6L234.8,56L237,56.1L238.2,52.7L235.3,50.7L232,49.4L232.2,45.7L235.5,43.3L239.2,43.8L242,45.3L245.8,49L243.3,50.6L248.5,51.3L248.5,54.7L252.2,52.1L255.5,54.2L254.7,56.7L257.4,58.9L260.3,56.5L262.3,53.7L262.4,50L266.4,50.3L270.5,50.8L274.2,52.4L274.4,54.1L272.3,55.8L274.3,57.6L273.9,59.2L268.5,61.5L264.6,62L261.8,61L260.9,62.7L258.2,65.5L257.4,66.9L254.2,69.2L250.2,69.4L248,70.8L247.9,73L244.6,73.4L241.2,76.1L238.2,79.8L237.1,82.4L237,86.2L241.1,86.8L242.3,89.9L243.6,92.4L247.5,91.7L252.7,93.2L255.4,94.4L257.4,96L260.9,96.9L263.9,98.3L268.4,98.5L271.5,98.8L271,101.7L271.9,105L273.9,108.7L278,111.9L280.2,110.8L281.7,107.4L280.2,102.2L278.3,100.4L282.7,98.9L285.8,96.5L287.4,94.2L287.2,92L285.3,89.2L281.9,86.7L285.2,83.2L284,80.2L283,75.1L285,74.3L289.7,75.2L292.6,75.5L294.9,74.7L297.5,75.8L300.9,77.7L301.7,79L306.7,79.2L306.6,82L307.5,86.2L310.1,86.7L312.1,88.7L316.1,86.8L318.8,83.2L320.6,81.6L322.8,84.6L326.4,88.8L329.5,92.8L328.3,94.9L332,96.7L334.5,98.6L339,99.5L340.7,100.5L341.8,103.3L344,103.8L345.1,105L345.3,108.8L343.3,110L341.3,111.2L336.7,112.3L333.2,115.1L328.5,115.6L322.6,114.9L318.4,114.9L315.6,115.1L313.2,117.5L309.7,118.9L305.7,123.3L302.5,126.4L304.8,125.8L309.3,121.5L315.1,118.7L319.3,118.4L321.7,120L319.1,122.2L320,125.8L320.9,128.3L324.5,130L329.1,129.5L331.9,125.8L332.1,128.2L333.9,129.4L330.4,131.5L324.3,133.5L321.5,134.8L318.4,137.2L316.3,137L316.2,134.2L321,131.4L316.6,131.6L313.5,132L311.7,130.1L311.7,125.6L310.5,124.6L308.6,125.2L307.7,124.3L305.6,126.8L304.7,129.4L303.7,130.9L302.5,131.4L301.7,131.6L301.4,132.4L296.3,132.4L292,132.4L290.8,133L287.8,135.4L286.6,137L284.1,137L281.3,137L280.1,137.5L280.5,138.1L280.8,139.2L277.1,141.1L274.2,141.7L271,143.4L270.3,143.4L269.4,142.9L269.1,142.4L269.7,140.9L271,139.1L271.8,137.1L271.3,134.3L270.7,131.3L267.8,129.7L268.1,129.1L267.7,128.7L267,128.7L266.4,128.2L266.3,127.4L265.7,127.8L265,127.6L264.5,127L264.2,126.1L262.1,125.1L259.8,124L257.1,122.7L254.5,121.5L252,122.4L251.1,122.4L247.7,121.6L245.4,122L242.8,121L239.9,120.5L238,120.3L237.1,119.7L236.6,117.9L235.7,117.9L235.7,119.2L229.9,119.2L220.4,119.2L211,119.2L202.6,119.2L194.3,119.2L186.1,119.2L177.6,119.2L174.9,119.2L166.7,119.2L158.8,119.2ZM266.7,74.6L268.7,73.1L272.6,73.1L272.5,73.8L269.3,75.6L267.3,75.5L266.7,74.6ZM278.4,40.4L275.3,38.6L275.5,37.4L276.8,37.2L283.2,37.6L287.9,39.4L288.2,40.3L285.2,40.2L282.2,40.1L279.2,40.6L278.4,40.4ZM276.9,75.9L278,74.9L279.1,74.9L279.8,75.6L278.7,77.4L277.5,77.1L276.8,76.1L276.9,75.9ZM240,33.2L238.5,34.5L234.4,34.2L231.1,33.3L232.5,31.9L236.5,31L239,32.1L240,33.2ZM239.3,24.8L238.1,24.9L232.9,24.6L232.1,23.7L237.7,23.8L239.7,24.4L239.3,24.8ZM231.2,20.6L234.6,21.8L233.8,23L229.7,23.7L227.4,22.9L226.2,21.7L226,20.3L229.6,20.4L231.2,20.6ZM255.1,35.1L250.7,34.7L243.3,33.6L242.3,31.8L242,30.2L239.2,28.7L233.4,28.3L230.2,27.3L231.3,25.9L237,26.2L240.1,27.2L245.5,27.2L247.9,28.3L247.3,29.5L250.5,30.3L252.3,31.1L256,31.2L260.1,31.5L264.5,30.8L270.1,30.5L274.6,30.7L277.6,32L278.2,33.4L276.5,34.2L272.4,34.9L268.8,34.5L260.8,35.1L255.1,35.1ZM190.9,22.7L194.8,23.2L193.9,24.2L188.7,25.1L184.6,24.1L186.9,23L190.9,22.7ZM191.8,20.5L195.4,21.2L192,21.8L187.4,21.8L190.3,20.4L191.8,20.5ZM345.6,111.5L344.1,113.6L342.2,116.5L344,115.4L345.9,116.1L344.9,117.2L347.4,118.1L348.7,117.3L351.5,118.3L350.6,120.8L352.5,120.2L352.9,122L353.8,124L352.6,126.9L351.3,127.1L349.5,126.4L350.1,123.7L349.3,123.3L346.1,126.2L344.5,126.1L346.4,124.5L343.7,123.7L340.8,123.9L335.4,123.8L334.9,122.8L336.7,121.7L335.5,120.8L337.8,118.8L340.7,113.5L342.4,111.6L344.8,110.5L346.1,110.6L345.6,111.5ZM267,65.8L270,67L273.2,68L273.5,69.6L275.5,69.3L277.5,70.4L275,71.5L270.7,70.7L269.1,69.2L266.4,70.9L262.4,72.7L261.5,70.7L257.7,71L260.1,69.4L260.5,66.8L261.4,63.8L263.4,64L264,65.5L265.4,65L267,65.8ZM281.2,41.9L283.8,40.6L290,42.2L293.8,43.8L294.2,45.2L299.3,44.5L302.2,46.6L308.9,47.9L311.3,49.3L314,52.3L308.9,53.9L315.4,56.1L319.8,56.8L323.8,59.8L328.2,60L327.3,62.4L322.4,66.2L319,64.8L314.7,61.6L311.1,62L310.7,63.9L313.6,65.8L317.4,67.4L318.6,68.3L320.4,71.5L319.4,73.9L315.9,73L308.9,70.4L312.9,73.2L315.8,75.2L316.2,76.4L308.7,75L302.7,73.1L299.3,71.5L300.3,70.6L296.2,68.9L292.1,67.3L292.2,68.2L284.1,68.8L281.8,67.6L283.6,65.2L288.8,65.1L294.6,64.7L293.6,63.5L294.6,61.9L298.2,58.6L297.4,57.2L296.4,56L292.1,54.4L286.5,53.3L288.3,52.5L285.3,50.4L282.9,50.2L280.7,49.1L279.2,50.1L274.2,50.5L264,49.8L258.2,48.8L253.7,48.3L251.4,47.1L254.3,45.6L250.3,45.6L249.4,42.3L251.6,39.3L254.4,37.9L261.6,37.1L259.5,39.2L261.7,41.3L264.3,38.6L271.3,37.2L276.1,40.7L275.7,42.8L281.2,41.9ZM237.5,36L243.3,36.1L248.6,36.9L244.4,39.8L241.1,40.5L238.1,43L235,42.8L233.2,39.9L233.3,38.3L234.7,36.9L237.5,36ZM158.7,29.4L163.5,26.9L169.2,24.8L173.4,24.8L177.2,24.3L176.8,26.9L174.7,28L172.1,28.2L166.9,29.6L162.5,30.1L158.7,29.4ZM131.4,102.5L134,102.2L133.2,106L135.6,108.6L134.5,108.6L132.8,107.1L131.8,105.6L130.4,104.6L129.9,103.1L130.1,102.1L131.4,102.5ZM207,18.9L212.4,19.3L219.9,20.5L222.1,22.1L223.1,23.5L218.6,23.1L214,22L207.8,21.9L210.5,20.9L207.2,20.1L207,18.9ZM156.9,120.8L155.5,121.3L151,119.8L150.1,118.6L147.6,117.4L147.1,116.5L144.3,115.9L143.2,114.1L143.4,113.3L146.4,114L148.1,114.5L150.7,114.9L151.6,116L153,117.6L155.8,119L156.9,120.8ZM162.4,34.9L166.4,35.6L173.5,35.8L176.2,36.8L179.1,38.2L175.6,39L168.8,41.3L165.4,43.6L165.4,45.1L158.1,46.7L156.6,45.2L150.2,43.5L151.4,42.1L153.3,39.6L155.7,37.5L153,35.4L162.4,34.9ZM200.5,30.3L203,29.8L205.9,29.9L206.4,31.5L204.7,33.1L195.3,33.6L188.3,35L184,35.1L183.7,34L189.5,32.6L176.9,33L173,32.4L176.8,29.1L179.4,28.2L187.2,29.3L192.2,31.3L197,31.5L193.1,28.4L195.6,27.2L198.5,27.5L199.4,29.1L200.5,30.3ZM204.1,39.5L207.2,40.8L209,44L209.8,46.4L214.5,48L219.5,49.6L219.2,51L214.6,51.3L216.4,52.6L215.5,53.8L210.4,53.3L205.7,52.4L202.4,52.6L197.2,53.7L190.2,54.2L185.2,54.5L183.7,52.9L179.9,52L177.5,52.4L174.1,49.8L175.9,49.4L180.2,48.9L184.1,49L187.7,48.4L182.4,47.7L176.4,47.9L172.5,47.9L171,46.6L177.5,45.3L173.2,45.4L168.3,44.5L170.7,42L172.6,40.7L180,38.7L182.9,39.3L181.5,40.9L187.7,39.9L191.5,41.5L194.7,39.9L197.2,40.9L199.5,44.2L200.9,42.8L198.9,39.4L201.3,38.9L204.1,39.5ZM221,40.7L217.9,38.5L221.2,36.9L224.5,37.6L229.5,37.2L230.2,38.2L227.6,39.8L231.8,41.2L231.3,44.2L226.8,45.4L224.1,45.2L222.2,43.9L215.3,41.3L215.3,40.3L221,40.7ZM203.9,37.7L207.6,37.6L209.7,38.3L207.3,40.5L202.9,38.2L203.9,37.7ZM226.4,27.4L228.5,28.9L228.6,30.6L227.3,33.1L222.8,33.4L219.8,32.9L219.8,31L215.3,31.2L215.1,28.7L218.1,28.8L222.3,27.7L226.2,27.8L226.4,27.4ZM233.3,14.6L235.2,13.5L238.1,13.3L236.8,12.6L243.3,12.4L246.9,14.2L251.5,14.9L256.1,15.5L258.3,17.7L261.6,18.7L257.8,19.7L252.7,22.2L247.8,22.5L242,22L239,20.7L239.1,19.5L241.3,18.6L236.2,18.6L233.1,17.5L231.4,16L233.3,14.6ZM245.6,10.3L249.7,9.6L253,9.5L258.4,9L262.5,7.8L265.9,7.9L268.9,8.9L271.1,7.1L274.7,6.6L279.7,6.2L288.2,6.1L289.7,6.4L297.7,5.8L303.7,6.1L309.7,6.3L317.1,6.5L323.1,7L328.2,7.9L328.1,8.7L321.3,10.2L314.6,10.8L312.1,11.6L318.1,11.6L311.6,13.6L307,14.5L302.3,17.2L296.5,17.8L294.8,18.4L286.4,18.8L290.2,19.2L288.3,19.8L290.6,21.4L287.9,22.6L283.6,23.5L282.3,24.8L278.4,25.8L278.8,26.5L283.6,26.4L283.6,27.2L276.2,29.2L269,28.3L260.8,28.8L256.7,28.4L251.4,28.2L251.1,26.6L256.2,25.9L254.8,23.5L256.5,23.3L264,24.7L260.2,22.6L255.7,21.9L257.9,20.7L262.8,19.9L263.6,18.7L259.7,17.4L258.5,15.7L266.1,15.9L268.3,16.2L272.6,15L266.4,14.6L256.7,14.8L251.8,13.7L249.4,12.4L246.2,11.4L245.6,10.3ZM291.1,58.1L289.3,59.1L286.1,59.3L285.5,57.6L286.6,55.8L289.2,55.3L291.3,56.2L291.4,57.7L291.1,58.1ZM232.6,51.3L234.3,52.6L232.6,53.8L228.8,52.8L226.6,53.1L222.8,51.6L225.2,50.6L227.2,49.2L230.1,50.1L231.8,50.7L232.6,51.3ZM320.8,116.3L321.7,116L325.4,116.8L328.2,118.2L328.3,118.8L327,118.9L323.4,117.8L320.8,116.3ZM322.2,125.7L323.2,127.3L325.2,127.7L327.7,127.6L326.4,129L325.3,129.2L321.8,127.8L321.1,126.7L322.2,125.7ZM158.8,119.2L166.7,119.2L174.9,119.2L177.6,119.2L186.1,119.2L194.3,119.2L202.6,119.2L211,119.2L220.4,119.2L229.9,119.2L235.7,119.2L235.7,117.9L236.6,117.9L237.1,119.7L238,120.3L239.9,120.5L242.8,121L245.4,122L247.7,121.6L251.1,122.4L252,122.4L254.5,121.5L257.1,122.7L259.8,124L262.1,125.1L264.2,126.1L264.5,127L265.2,127.3L265.7,127.8L266.3,127.4L266.4,128.2L267,128.7L267.7,128.7L268.1,129.1L267.8,129.7L270.7,131.3L271.3,134.3L271.8,137.1L271,139.1L269.7,140.9L269.1,142.1L269.4,142.9L270.3,143.4L271,143.4L274.2,141.7L277.1,141.1L280.7,139.5L280.5,138.1L280.1,137.5L281.3,137L284.1,137L286.6,137L287.5,135.7L290.8,133L292,132.4L296.3,132.4L301.4,132.4L301.7,131.6L302.5,131.4L303.7,130.9L304.7,129.4L305.6,126.8L307.7,124.3L308.6,125.2L310.5,124.6L311.7,125.6L311.7,130.1L313.5,132L314,133L311,134.6L308.2,135.8L305.2,136.8L303.8,138.7L303.3,139.5L303.3,141.2L304.2,143L305.3,143.1L305,141.9L305.9,142.6L305.7,143.5L303.8,144.1L302.4,144L300.4,144.6L299.2,144.8L297.6,144.9L295.3,145.9L299.3,145.3L300.2,145.9L296.3,146.9L294.5,146.9L293.7,147.4L294.5,147.5L293.9,149.9L291.9,152.5L291.7,151.6L291.1,151.5L290.2,150.6L290.8,152.4L291.5,153L291.5,154.2L290.6,155.5L289.1,158.2L289.7,155.8L288.2,154.5L287.9,151.8L287.4,153.2L288,155.3L286.1,154.8L288.1,155.9L288.2,159L289,159.2L289.3,160.4L289.6,163.7L287.9,166.2L285,167.1L283.2,169.1L281.8,169.3L280.4,170.5L280,171.6L276.9,173.8L275.4,175.3L274.1,177.3L273.6,179.7L274.1,182L275.1,184.8L276.3,187.1L276.3,188.6L277.6,192.4L277.5,194.6L277.4,195.9L276.7,197.9L275.9,198.4L274.5,198L274.1,196.5L273,195.7L271.6,192.9L270.3,190.4L269.8,189.1L270.4,186.9L269.6,185L267.5,182.3L266.4,181.8L263.6,183.3L263.1,183.1L261.7,181.6L260,180.7L256.9,181.2L254.4,180.8L252.3,181L251.1,181.5L251.6,182.4L251.6,183.8L252.2,184.4L251.6,184.9L250.6,184.4L249.6,185L247.6,184.9L245.5,183.1L243.1,183.6L241,182.8L239.3,183L237,183.8L234.4,186.2L231.7,187.7L230.2,189.3L229.5,190.7L229.5,193L229.6,194.6L230.2,195.7L229.1,195.8L227.1,195.1L224.9,194.1L224.2,192.5L223.6,190.2L221.9,188.3L221,186.4L219.6,184.1L217.6,182.8L215.3,182.9L213.6,185.5L211.3,184.5L209.8,183.5L209.2,181.7L208.2,179.9L206.6,178.5L205.2,177.4L204.1,176.3L199.3,176.3L199.3,177.6L197.1,177.6L191.6,177.7L185.3,175.3L181.1,173.7L181.3,173.1L177.8,173.4L174.6,173.7L174.2,172L172.4,170.1L171.1,169.7L170.8,168.7L169.2,168.6L168.2,167.7L165.6,167.3L164.9,166.8L164.6,165L161.9,161.7L159.6,157.1L159.7,156.3L158.5,155.2L156.3,152.4L155.9,149.7L154.4,147.9L155.1,145.2L155,142.3L154.1,139.8L155.2,136.7L155.5,133.7L155.8,130.7L155.3,126.2L154.5,123.4L153.6,121.9L154,121.2L158,122.4L159.5,125.5L160.2,124.6L159.7,121.9L158.8,119.2ZM68.3,214.9L68.8,215.2L69.3,215.6L70,216.8L68.8,217.7L67.9,218.2L67.5,218.8L66.8,218.3L66.9,217.4L66.5,216.2L67.1,215.2L66.9,214.6L68.3,214.9ZM66.7,212.6L65.5,213.3L65,212.6L66,212.1L66.7,212.6ZM64.6,211.3L63,211.5L64.6,211.3ZM61,209.5L62.1,210.8L60.8,210.8L60.4,210.1L61,209.5ZM57.3,207.8L57.4,208.6L56.1,208.3L56.7,207.8L57.3,207.8ZM37.6,81.5L39.8,81.8L40.1,83.1L38.4,83.6L36.5,83L34.8,82.1L37.6,81.5ZM74.4,89.5L76.2,89.7L77.4,90.7L75,92.3L72.2,93.6L70.8,92.7L70.4,91.2L72.9,90L74.4,89.5ZM108.4,50.6L108.4,62.9L108.3,81.7L111.1,81.8L113.8,82.8L115.7,84.2L118.2,86.4L120.9,84.5L123.7,83.5L125.2,85.2L127,86.5L129.6,88L131.3,90.4L134.1,94.2L138.9,96.3L138.9,98.4L137.4,100L135.9,98.7L133.4,97.7L132.6,94.8L129.1,92.1L127.6,89L124.9,88.8L120.5,88.7L117.2,87.7L111.5,84.3L108.8,83.7L104,82.5L100.1,82.8L94.7,81.2L91.3,79.8L88.3,80.5L88.8,82.8L87.3,83L84.1,83.7L81.6,84.9L78.6,85.6L78.2,83.6L79.4,80.4L82.4,79.3L81.6,78.5L78.1,80.4L76.2,82.6L72.2,84.9L74.2,86.5L71.6,88.9L68.6,90.3L65.8,91.3L65.1,92.8L60.8,94.5L59.9,96L56.7,97.4L54.8,97.2L52.2,98.1L49.3,99.2L47,100.3L42.3,101.3L41.8,100.7L44.9,99.2L47.6,98.2L50.5,96.3L54,96L55.4,94.6L59.2,92.6L59.8,92L61.9,90.8L62.4,88.3L63.8,86.3L60.6,87.3L59.7,86.8L58.2,88L56.4,86.3L55.6,87.5L54.6,85.8L51.8,87.2L50.1,87.2L49.8,85.2L50.3,84L48.6,82.8L44.9,83.4L42.6,81.9L40.7,81.1L40.7,79.2L38.6,77.8L39.6,75.9L41.9,74L42.9,72.3L45.1,72.1L47,72.6L49.3,71L51.3,71.3L53.4,70.3L52.9,68.8L51.3,68.2L53.4,66.9L51.7,66.9L48.7,67.7L47.9,68.4L45.7,67.7L41.8,68L37.7,67.2L36.5,65.9L33,64L36.9,62.6L43.1,61L45.4,61L45,62.6L50.9,62.5L48.6,60.5L45.2,59.2L43.2,57.5L40.6,56.1L36.8,55.1L38.3,53.4L43.2,53.2L46.8,51.7L47.4,50.1L50.3,48.6L53,48.2L58.2,46.7L60.8,46.9L65.1,45.2L69.3,45.9L71.3,47.3L72.5,46.7L77.2,46.9L77,47.7L81.3,48.2L84.1,47.9L90,48.9L95.3,49.3L97.4,49.7L101.1,49.2L105.4,50.1L108.4,50.6L108.4,50.6ZM23,70.2L24.7,70.9L26.4,70.5L28.7,71.4L31.4,71.8L29.1,72.9L27,72.2L25.9,71.6L23.5,71.8L22.8,71.5L23,70.2ZM742.7,118.5L740.6,120.7L738.2,121L738.1,124.3L736.6,125.8L731.1,124.7L729.1,130.6L727.6,131.4L722.1,132.7L724.6,138.4L722.7,139.3L722.9,141.2L721.2,140.7L719.8,139.5L715.7,139.2L711.1,139.1L710.1,139.4L706.1,138L704.6,138.7L704.1,140.7L699.6,139.5L697.7,140L697.1,141.5L695.5,142.1L691.9,144.4L690.6,146.8L689.6,146.8L688.8,145.2L685.3,145.1L684.8,142.4L683.4,142.4L683.6,139L680.3,136.6L675.5,136.9L672.3,137.4L669.6,134.4L667.3,133.1L663,130.8L662.5,130.5L655.4,132.4L655.5,144.6L654,144.8L652.1,142.2L650.2,141.3L647.1,142L645.8,143.1L645.7,142.3L646.4,140.9L645.8,139.7L642.6,138.6L641.4,135.6L639.8,134.8L639.7,133.7L642.4,134L642.5,131.6L644.9,131.1L647.3,131.6L647.8,128.3L647.3,126.3L644.6,126.4L642.2,125.6L639,127.1L636.4,127.8L635,127.2L635.3,125.5L633.5,123.3L631.4,123.4L629.1,121.2L630.7,118.7L629.9,118L632.1,114.4L634.9,116.3L635.3,113.9L641,110.3L645.4,110.2L651.5,112.5L654.8,113.8L657.7,112.4L662.1,112.3L665.7,114.1L666.5,113.1L670.4,113.2L671.1,111.6L666.6,109.4L669.2,107.8L668.7,106.9L671.4,106L669.4,103.7L670.7,102.6L681.1,101.4L682.4,100.6L689.4,99.4L691.9,98L696.8,98.7L697.7,102.2L700.6,101.4L704.2,102.5L704,104.3L706.6,104.1L713.6,101L712.6,102L716.1,104.6L722.3,113L723.8,111.3L727.6,113.2L731.6,112.3L733.2,112.9L734.5,114.8L736.4,115.5L737.6,116.9L741.2,116.4L742.7,118.5ZM655.5,144.6L655.4,132.4L662.5,130.5L663,130.8L667.3,133.1L669.6,134.4L672.3,137.4L675.5,136.9L680.3,136.6L683.6,139L683.4,142.4L684.8,142.4L685.3,145.1L688.8,145.2L689.6,146.8L690.6,146.8L691.9,144.4L695.5,142.1L697.1,141.5L697.9,141.8L695.6,143.9L697.7,145.2L699.6,144.4L702.9,146.1L699.4,148.5L697.3,148.2L696.1,148.2L695.7,147.3L696.3,145.8L692.6,146.6L691.7,148.7L690.4,150.5L688.1,150.4L687.3,151.8L689.4,152.6L690,155.1L688.4,158.4L686.3,157.7L684.8,157.7L684.9,155.7L681.2,154.3L678.3,152.6L676.4,151.1L673.3,148.8L671.9,145.4L671,144.8L668,144.9L666.9,144.2L666.6,141.6L662.9,139.9L660.5,141.8L658.1,142.9L658.6,144.6L655.5,144.6ZM891.7,290L896.5,292.3L901.6,294.2L903.5,295.9L905.1,297.5L905.5,299.5L910.1,301.5L910.8,303.3L908.3,303.6L908.9,305.8L911.3,308L913.2,311.5L914.7,311.4L914.6,312.9L916.8,313.4L915.9,314.1L918.9,315.5L918.6,316.4L916.7,316.6L916.1,315.8L913.7,315.4L910.9,314.9L908.7,312.8L907.1,311L905.7,308.1L902.1,306.6L899.7,307.6L898,308.7L898.4,311.1L896.2,312.3L894.6,311.7L891.8,311.6L891.7,300.8L891.7,290ZM924,293.5L925.1,294.6L925.4,296.3L924.5,297.2L924,295.2L923.4,293.9L922.1,292.8L920.5,291.4L918.5,290.5L919.3,289.7L920.8,290.6L921.7,291.3L922.9,292.1L924,293.5ZM920.3,300.7L918.8,301.5L917.3,302.3L915.9,302.3L913.6,301.3L912,300.4L912.2,299.4L914.7,299.9L916.2,299.6L916.7,298L917.3,299.7L918.9,299.4L919.7,298.3L921.2,297.1L920.9,295.2L922.6,295.1L923.2,295.7L923.1,297.5L922.2,299.5L920.7,299.8L920.3,300.7ZM929.9,299.1L930.7,299.8L932.1,301.9L933.4,303L933,304L932.2,304.3L931,303L929.8,300.9L929.2,298.4L929.6,298.1L929.9,299.1ZM891.7,290L891.7,300.8L891.8,311.6L889.3,308.8L886.5,308.2L885.8,309.1L882.3,309.2L883.4,306.5L885.2,305.6L884.5,302L883.1,299.2L877.7,296.4L875.5,296.2L871.3,293.1L870.5,294.7L869.4,295L868.8,293.8L868.8,292.3L866.6,290.7L869.6,289.5L871.6,289.6L871.4,288.7L867.3,288.7L866.2,286.7L863.7,286.1L862.6,284.5L866.3,283.7L867.7,282.6L872.2,284L872.6,285.2L873.4,290.5L876.3,292.5L878.6,289L881.8,287L884.2,287L886.6,288.2L888.7,289.4L891.7,290ZM847.1,310.8L847.4,311.5L847.5,312.5L845.7,314.9L843.3,315.7L842.9,315.3L843.2,314.2L844.4,312.1L847.1,310.8ZM872.8,304.2L872.5,301.7L873,300.5L873.6,299.4L874.2,300.4L874.2,302L872.8,304.2ZM827.5,267.7L825.9,270.7L827.9,273.8L827.4,275.3L830.5,278.4L827.3,278.8L826.3,281L826.4,284L823.8,286.3L823.7,289.6L822.6,294.7L822.2,293.5L819.1,295L818,293L816,292.8L814.6,291.7L811.3,292.9L810.3,291.3L808.5,291.5L806.2,291.1L805.8,286.7L804.4,285.7L803,282.9L802.6,280L803,276.9L804.6,274.7L805.1,276.9L807,278.8L808.8,278.1L810.5,278.4L812.2,276.7L813.5,276.4L816.1,277.3L818.4,276.6L819.8,272L820.9,270.9L821.8,267.1L825,267.1L827.5,267.7ZM859.4,290.7L862.4,291.6L863.4,294.2L861.1,292.8L858.8,292.5L857.2,292.7L855.3,292.6L855.9,290.8L859.4,290.7ZM852.4,293.9L850.5,293.3L850,291.9L852.8,291.7L853.5,292.8L852.4,293.9ZM855.4,274.2L855.6,276L857.2,276.3L857.5,277.6L857.3,280.5L855.9,280.2L855.5,282.2L856.6,284L855.8,284.4L854.7,282.3L853.9,278L854.4,275.4L855.4,274.2ZM841.5,278.5L844.7,278.3L847.4,275.9L847.9,276.7L845.7,280L843.6,280.6L840.9,280L836.3,280.1L833.8,280.6L833.4,283.1L835.9,286L837.4,284.5L842.6,283.4L842.4,284.9L841.2,284.5L840,286.4L837.5,287.7L840.2,291.9L839.6,293.1L842.1,296.9L842.1,299.1L840.6,300L839.5,298.9L840.9,296.2L838.2,297.4L837.5,296.5L837.8,295.2L835.8,293.3L836,290.1L834.2,291.1L834.4,294.9L834.5,299.7L832.8,300.2L831.6,299.2L832.4,296.1L831.9,292.9L830.8,292.9L829.9,290.7L831.1,288.5L831.5,285.9L832.8,280.9L833.4,279.5L835.8,277L838,278L841.5,278.5ZM834.2,315.3L830.5,313L833.1,312.4L834.5,313.4L835.5,314.4L835.3,315.3L834.2,315.3ZM837.1,309.6L838.9,309.4L841.4,308.2L841,310L836.8,311L833.1,310.5L833.1,309.3L835.3,308.6L837.1,309.6ZM828.5,309.1L830.2,308.8L830.9,310.2L827.7,310.9L825.8,311.3L824.3,311.3L825.2,309.4L826.8,309.3L827.5,308.2L828.5,309.1ZM801.4,302.6L801.7,303.8L807.1,304.1L807.7,302.8L812.8,304.4L813.8,306.5L818,307.1L821.4,309.1L818.2,310.4L815.2,309L812.7,309.1L809.8,308.9L807.2,308.3L804,307L801.9,306.7L800.8,307.1L795.7,305.7L795.2,304.3L792.7,304.1L794.6,300.9L798,301.1L800.2,302.4L801.4,302.6ZM789.9,285L790.4,287.3L791.4,289.1L793.4,289.4L794.7,291.5L794,295.6L793.9,300.8L790.9,300.8L788.5,298.1L785,295.3L783.8,293.3L781.7,290.6L780.3,288.2L778.2,283.5L775.7,280.8L774.9,277.9L773.9,275.3L771.4,273.3L769.9,270.4L767.8,268.6L764.9,264.9L764.7,263.2L766.5,263.4L770.8,264L773.2,267.2L775.4,269.5L776.9,270.9L779.6,274.4L782.4,274.5L784.7,276.7L786.3,279.5L788.4,281L787.3,283.7L788.9,284.9L789.9,285ZM309.3,455.6L310.4,457.2L311.8,459.6L315.4,461.6L319.3,462.5L318.1,464.1L315.4,464.3L314,463.1L312.3,463L309.4,463L309.3,455.6ZM339.9,381.4L339.2,384.1L338.5,387.5L338.5,390.8L337.9,391.5L337.7,393.6L337.5,395.4L341,398.2L340.7,400.5L342.4,401.9L342.3,403.5L339.6,407.8L335.5,409.6L329.9,410.2L326.8,409.9L327.4,411.9L326.9,414.4L327.4,416L325.7,417.2L322.9,417.7L320.2,416.5L319.1,417.3L319.5,420.6L321.4,421.6L322.9,420.6L323.7,422.3L321.2,423.3L318.9,425.4L318.5,428.7L317.9,430.5L315.3,430.5L313.1,432.2L312.3,434.7L315,437.1L317.7,437.7L316.7,440.7L313.4,442.6L311.6,446.5L309.1,447.8L307.9,449.3L308.8,452.8L310.7,454.7L309.5,454.5L306.9,454L300.2,453.5L299.1,451.6L299.1,449.1L297.3,449.4L296.3,448.2L296.1,444.6L298.2,443.2L299.1,441.1L298.8,439.4L300.2,436.6L301.2,432.2L300.9,430.3L302.2,429.6L301.9,428.4L300.6,427.7L301.5,426.3L300.2,425.1L299.6,421.3L300.7,420.6L300.2,416.5L300.9,413.2L301.6,410.2L303.3,409L302.4,405.8L302.4,402.7L304.5,400.6L304.5,397.8L306.1,394.6L306.1,391.5L305.3,390.9L304.1,385.2L305.8,381.8L305.5,378.6L306.5,375.6L308.3,372.5L310.3,370.4L309.5,369.1L310,368.1L310,362.5L313,360.9L313.9,357.5L313.6,356.6L315.9,353.7L319.5,354.5L321.2,356.8L322.3,354.2L325.4,354.3L325.9,355L331,360.4L333.3,360.9L336.6,363.4L339.5,364.7L339.9,366.1L337.2,371.2L340,372.1L343.1,372.6L345.3,372L347.8,369.5L348.3,366.6L349.6,366L351,367.9L351,370.5L348.6,372.3L346.8,373.7L343.6,376.9L339.9,381.4ZM309.3,455.6L309.4,463L312.3,463L314,463.1L313.1,464.4L310.7,465.5L309.3,465.4L307.7,465.1L305.7,464.1L302.8,463.6L299.3,461.8L296.4,460L292.6,456.3L294.9,457L298.8,459.2L302.5,460.4L303.9,458.9L304.8,456.6L307.4,455.2L309.3,455.6ZM306.7,339.6L308.1,341.8L308.4,344.2L309.9,345.6L309,348.8L310.5,352.5L311.6,357.1L313.6,356.6L313.9,357.5L313,360.9L310,362.5L310,368.1L309.5,369.1L310.3,370.4L308.3,372.5L306.5,375.6L305.5,378.6L305.8,381.8L304.1,385.2L305.3,390.9L306.1,391.5L306.1,394.6L304.5,397.8L304.5,400.6L302.4,402.7L302.4,405.8L303.3,409L301.6,410.2L300.9,413.2L300.2,416.5L300.7,420.6L299.6,421.3L300.2,425.1L301.5,426.3L300.6,427.7L301.9,428.4L302.2,429.6L300.9,430.3L301.2,432.2L300.2,436.6L298.8,439.4L299.1,441.1L298.2,443.2L296.1,444.6L296.3,448.2L297.3,449.4L299.1,449.1L299.1,451.6L300.2,453.5L306.9,454L309.5,454.5L307.1,454.5L305.7,455.3L303.2,456.5L302.8,459.6L301.6,459.7L298.5,458.6L295.3,456.3L291.8,454.4L290.9,452.3L291.7,450.4L290.3,448.1L290,442.5L291.2,439.3L294.1,436.8L289.9,435.8L292.5,432.9L293.5,427.4L296.6,428.5L298,421.7L296.1,420.8L295.3,424.9L293.5,424.5L294.4,419.7L295.3,413.6L296.6,411.3L295.8,408.1L295.6,404.4L296.8,404.3L298.5,398.9L300.4,393.6L301.6,388.7L300.9,383.7L301.7,381L301.4,376.9L303,372.9L303.5,366.5L304.4,359.6L305.3,352.2L305.1,346.8L304.5,342.1L305.9,341.3L306.7,339.6ZM581.5,296.3L582,299.3L581.7,301L582.3,303L583.9,304.8L585.4,309L584.3,308.7L580.6,309.2L579.8,309.6L579,311.7L579.6,313.2L579.2,317.1L578.8,320.4L579.6,321L581.5,322.3L582.3,321.7L582.5,325.3L580.4,325.2L579.2,323.4L578.2,322L576.1,321.5L575.5,319.8L573.8,320.9L571.5,320.4L570.6,318.9L568.8,318.6L567.5,318.7L567.4,317.6L566.4,317.6L565.2,317.4L563.4,317.9L562.2,317.8L561.5,318.1L561.7,314.1L560.8,312.9L560.6,310.9L561,308.9L560.4,307.6L560.4,305.5L557,305.5L557.2,304.4L555.8,304.4L555.7,304.9L553.9,305.1L553.2,307L552.8,307.8L551.3,307.4L550.4,307.8L548.5,308.1L547.5,306.4L546.8,305.3L546,303.3L545.4,300.8L537.2,300.8L536.2,301.2L535.4,301.1L534.2,301.6L533.8,300.5L534.5,300.2L534.6,298.8L535.1,297.9L536.1,297.2L536.8,297.5L537.8,296.3L539.3,296.3L539.5,297.2L540.5,297.8L542.1,295.8L543.8,294.1L544.5,293.1L544.4,290.4L545.6,287.1L546.8,285.4L548.7,283.8L549,282.8L549.1,281.6L549.5,280.4L549.4,278.5L549.7,275.6L550.3,273.5L551.1,271.8L551.3,269.8L551.5,267.5L552.6,265.8L554.1,264.7L556.4,265.8L558.1,267.1L560.2,267.4L562.2,268L563.1,266L564.7,266.1L567.8,264.5L568.9,265.2L569.8,265.1L570.2,264.3L571.3,264L573.3,264.3L575.1,264.4L576,264.1L577.7,266.8L579,267.2L579.7,266.6L581,266.8L582.5,266.1L583.2,267.6L585.6,269.8L585.5,273.6L586.6,274.1L585.7,275.3L584.6,276.1L583.6,277.9L583,279.4L582.8,282.1L582.2,283.3L582.2,285.8L581.4,286.7L581.3,288.7L580.6,290.8L581.3,292.3L581.5,296.3ZM615.5,287L613.9,284.2L613.8,272.2L616.3,268.4L617,267.4L618.8,267.3L621.3,265L624.9,264.8L632.7,254.9L634.7,252.1L635.9,250.1L635.9,248.4L635.9,245L636,243.7L636.9,243.5L638.1,243L639.6,242.7L640.9,241.6L642,241.6L642,242.5L641.8,244.4L641.8,246.2L641.2,247.3L640.4,250.9L639.1,254.6L637.4,258.9L635,263.7L632.6,267.4L629.3,271.9L626.6,274.6L622.4,277.9L619.8,280.4L616.8,284.4L616.1,286.2L615.5,287ZM608.9,296.9L604.9,293.6L604.7,291.6L594.6,284.9L594.2,284.5L594.1,281L594.9,279.7L596.3,277.5L597.3,275.1L596.1,271.3L595.8,269.6L594.5,267.3L596.2,265.3L598.1,263.2L599.5,263.7L599.5,265.6L600.4,266.7L602.4,266.7L605.9,269.5L606.8,269.5L607.4,269.4L608,269.8L609.9,270.1L610.7,268.7L613.2,267.3L614.4,268.4L616.3,268.4L613.8,272.2L613.9,284.2L615.5,287L613.6,288.3L612.9,289.7L611.8,289.9L611.4,292.2L610.6,293.6L610,295.8L608.9,296.9ZM568.2,254.1L566.1,252.7L565.2,251.7L565,250.7L565.4,249.3L565.4,248L563.8,245.9L563.5,244.5L563.5,243.7L562.5,242.7L562.5,240.8L561.9,239.5L560.9,239.7L561.2,238.5L561.9,237.1L561.6,235.7L562.5,234.7L562,234L562.7,231.9L564,229.5L566.4,229.7L566.2,216.6L566.3,215.2L569.4,215.2L569.4,208.6L580.6,208.6L591.4,208.6L602.4,208.6L603.3,211.8L602.7,212.4L603.1,215.8L604.1,219.8L605.2,220.6L606.7,221.8L605.3,223.7L603.2,224.2L602.4,225.2L602.1,227.4L600.9,232.3L601.2,233.6L600.8,236.5L599.6,239.7L597.9,241.4L596.8,243.9L596.5,245.3L595.2,246.2L594.3,249.7L594.4,252.6L594.3,250L594,248.3L593.7,247.2L592.2,245.9L591.9,243.5L592.2,241.1L591,240.8L590.8,241.6L589.1,241.7L589.8,242.7L590,244.7L588.5,246.5L587.1,248.9L585.7,249.2L583.3,247.3L582.3,248L582,249L580.6,249.6L580.5,250.3L577.7,250.3L577.3,249.6L575.3,249.5L574.3,250L573.5,249.8L572.1,247.8L571.6,246.9L569.6,247.4L568.9,248.9L568.2,251.9L567.2,252.5L566.4,252.8L568.2,254.1ZM566.2,216.6L566.4,229.7L564,229.5L562.7,231.9L562,234L562.5,234.7L561.6,235.7L561.9,237.1L561.2,238.5L560.9,239.7L561.9,239.5L562.5,240.8L562.5,242.7L563.5,243.7L563.5,244.5L561.8,245.1L560.3,246.4L558.3,250L555.7,251.5L553,251.3L552.3,251.6L552.5,252.8L551.1,254L549.9,255.3L546.4,256.5L545.7,255.8L544.7,256.6L542.4,256.8L542.9,255.9L542,253.6L541.6,252.3L540.4,251.7L538.8,249.8L539.4,248.2L540.6,248.5L541.4,248.3L543,248.3L541.5,245.3L541.6,243.1L541.4,240.9L540.3,238.8L540.5,237.3L538.8,237.2L538.8,235L537.6,233.8L538.8,229.5L542.4,226.3L542.5,222L543.6,215.3L544.2,213.9L543,212.8L543,211.7L541.9,210.8L541.3,205.7L544.1,203.9L555.1,210.2L566.2,216.6ZM300.8,216.1L301,217.9L300.8,219.2L300.2,219.8L300.9,220.7L300.8,221.6L299,221.1L297.7,221.3L296,221.1L294.7,221.7L293.2,220.7L293.4,219.6L296,220.1L298.1,220.3L299.1,219.6L297.8,218.1L297.8,216.9L296.1,216.4L296.7,215.5L298.4,215.6L300.8,216.1ZM300.8,221.6L300.9,220.7L300.2,219.8L300.8,219.2L301,217.9L300.8,216.1L301.1,215.6L303.3,215.6L305,216.4L305.7,216.3L306.2,217.5L307.7,217.4L307.6,218.4L308.9,218.6L310.2,219.8L309.2,221.1L307.9,220.4L306.6,220.5L305.7,220.4L305.2,221L304.1,221.2L303.7,220.4L302.8,220.9L301.7,223.1L301,222.6L300.8,221.6ZM996.5,46L1000,44.6L1000,46.9L997,47.1L996.5,46ZM636.4,127.8L635.1,129.7L632.4,130.3L629.7,133.7L632.2,136.8L631.9,139.1L635,143L633.3,144.3L632.8,145.2L631.6,144.9L629.7,142.9L628.9,142.8L627.2,142L626.3,140.7L623.7,140L622,140.5L621.5,139.9L617.8,138.3L613.7,137.8L611.3,137.2L611,137.6L607.4,134.8L604.3,133.5L601.9,131.6L603.9,131.1L606.2,128.3L604.6,127L608.7,125.6L608.7,124.9L606.2,125.5L606.3,124L607.7,123.1L610.4,122.8L610.8,121.7L610.2,119.9L611.3,118.2L611.3,117.2L607.2,116.1L605.6,116.1L603.9,114.6L601.7,115.1L598.2,114L598.3,113.3L597.3,111.9L595.1,111.7L594.8,110.7L595.5,110L593.8,108.1L590.9,108.5L590,108.3L589.3,109L588.3,108.9L587.6,106.8L587,105.7L587.5,105.4L589.7,105.5L590.8,104.8L590,103.9L588.1,103.3L588.3,102.7L587.2,102.1L585.4,99.9L586,99L585.8,97.5L583,96.7L581.6,97.1L581.2,96.3L578.3,95.4L577.4,93.5L577.1,91.9L575.8,91.1L577,90.1L576.2,87L578.1,85.1L577.7,84.5L580.9,82.7L578,81.1L583.9,76.9L586.5,75L587.5,73.3L583.4,71L584.6,68.8L582.1,66.4L583.9,63.5L580.7,59.8L583.3,57.3L579,55.1L579.4,52.8L581.7,52.4L586.4,51.1L589.3,50L593.8,52L601.4,52.8L611.9,56.5L614.1,58.1L614.2,60.3L611.2,62L606.6,62.9L594.2,60.4L592.2,60.8L596.7,63.2L596.9,64.8L597.1,68.1L600.6,69.2L602.8,70L603.2,68.4L601.5,67L603.3,65.7L610,67.8L612.3,67L610.5,64.6L616.9,61.3L619.5,61.5L622.1,62.7L623.7,60.4L621.4,58.4L622.7,56.4L620.7,54.4L628.5,55.4L630.1,57.3L626.5,57.7L626.6,59.6L628.7,60.7L633,60L633.7,57.9L639.5,56.3L649.2,53.4L651.3,53.6L648.6,55.6L652,56L654,54.8L659.2,54.7L663.3,53.4L666.5,55.4L669.7,53.2L666.8,51.2L668.2,50.2L676.4,51.2L680.2,52.2L690.3,56L692.2,54.2L689.3,52.5L689.3,51.8L685.9,51.5L686.8,49.9L685.3,47.3L685.3,46.2L690.4,43.3L692.2,40.2L694.3,39.6L701.6,40.5L702.2,42.3L699.6,45L701.3,46L702.2,48.4L701.6,52.9L704.6,54.9L703.4,57.1L698,61.8L701.2,62.3L702.3,61.1L705.3,60.3L706.1,58.6L708.5,57.1L706.9,55.2L708.2,53L705.1,52.7L704.4,50.9L706.7,47.6L703.1,44.9L708,42.6L707.4,40.3L708.8,40.2L710.2,42L709.1,45.2L712.1,45.8L710.8,43.5L715.5,42.2L721.3,42L726.4,43.9L723.9,41.1L723.6,37.6L728.5,36.9L735.2,37.1L741.2,36.6L738.9,34.9L742.1,32.7L745.3,32.6L750.7,31L758.1,30.5L759,29.6L766.3,29.3L768.6,30.1L774.8,28.3L779.9,28.4L780.7,26.9L783.3,25.5L789.9,24.2L794.6,25.2L790.8,26.1L797.1,26.6L797.9,28.2L800.4,27.4L808.5,27.4L814.8,29.1L817,30.3L816.3,32L813.3,33L806,34.8L803.9,35.8L807.3,36.3L811.4,37.1L813.9,36.5L815.4,38.6L816.6,37.8L821,37.2L829.9,37.8L830.6,39.3L842.2,39.8L842.4,37.3L848.3,37.9L852.7,37.9L857.2,39.6L858.5,41.7L856.8,43.1L860.3,45.7L864.7,47L867.4,43.6L871.8,45.1L876.6,44.2L881.9,45.2L884,44.3L888.5,44.7L886.5,41.7L890.2,40.2L915.3,42.4L917.6,44.3L924.9,46.9L936.1,46.2L941.7,46.8L944,48.2L943.6,50.6L947.1,51.5L950.8,50.8L955.7,50.8L960.9,51.4L966.2,51L971,54L974.5,52.9L972.2,50.8L973.5,49.3L982.3,50.3L988.1,50.1L996.1,51.6L1000,53.1L1000,66.3L996.4,67.7L992.8,67.5L995.3,69.3L997,72L998.3,72.9L998.6,74.3L997.9,75.1L992.7,74.4L984.9,76.9L982.4,77.3L978.2,79.6L974.2,81.6L973.1,83.2L969.2,80.9L961.9,83.5L960.7,82.2L958,83.6L954.3,83.2L953.4,85.4L950,88.6L950.1,89.9L953.3,90.7L952.9,95.5L950.4,95.6L949.2,98.4L950.3,99.8L945.5,101.5L944.5,105.3L940.4,106.1L939.5,109.4L935.5,112.5L934.5,110.2L933.3,105.4L931.8,98L933.1,93.5L935.4,91.5L935.6,89.9L939.9,89.2L944.9,85L949.6,81.6L954.6,79L956.9,74.3L953.5,74.6L951.8,77.3L944.8,81L942.5,76.9L935.3,78L928.4,83.6L930.7,85.6L924.5,86.5L920.2,86.8L920.4,84.4L916.1,83.9L912.6,85.5L904.1,85L895,85.9L886,92.4L875.4,100.2L879.7,100.6L881.1,102.7L883.8,103.4L885.6,101.8L888.6,102L892.6,105.6L892.7,108.5L890.5,111.8L890.3,115.7L889.1,121L884.9,125.8L883.9,128.1L880.2,131.9L876.4,135.8L874.6,137.7L870.9,139.7L869.2,139.7L867.4,138.1L863.7,140.5L863.3,141.6L862.9,141L862.9,139.4L864.3,139.3L864.7,135.4L864,132.5L866.3,131.4L869.7,131.9L871.6,128.7L872.5,125.1L873.6,123.9L875.1,120.9L870.5,121.9L868.1,123.2L863.9,123.2L862.7,120.1L859.4,117.7L854.6,116.7L853.6,113.4L852.6,111.4L851.6,110L849.9,106.6L847.4,105.4L843.3,104.4L839.6,104.5L836.1,105.1L833.8,106.7L835.3,107.5L835.4,109.4L833.8,110.4L831.3,113.9L831.4,115.4L827.4,117.5L824.1,116.2L820.8,116.5L819.3,115.4L817.7,115L813.6,117.4L809.9,117.9L807.4,118.7L803.9,118.2L801.3,118.2L799.6,116.5L796.9,115L794.1,114.5L790.6,115L788,115.6L784,114.2L783.5,111.7L780.2,110.8L777.7,110.5L774.6,109.1L771.7,112.5L772.9,114.5L770.2,116.8L766.2,115.9L763.4,115.8L761.5,114.3L758.6,114.2L756.2,113.2L752,114.8L746.7,117.6L743.8,118.2L742.7,118.5L741.2,116.4L737.6,116.9L736.4,115.5L734.5,114.8L733.2,112.9L731.6,112.3L727.6,113.2L723.8,111.3L722.3,113L716.1,104.6L712.6,102L713.6,101L706.6,104.1L704,104.3L704.2,102.5L700.6,101.4L697.7,102.2L696.8,98.7L691.9,98L689.4,99.4L682.4,100.6L681.1,101.4L670.7,102.6L669.4,103.7L671.4,106L668.7,106.9L669.2,107.8L666.6,109.4L671.1,111.6L670.4,113.2L666.5,113.1L665.7,114.1L662.1,112.3L657.7,112.4L654.8,113.8L651.5,112.5L645.4,110.2L641,110.3L635.3,113.9L634.9,116.3L632.1,114.4L629.9,118L630.7,118.7L629.1,121.2L631.4,123.4L633.5,123.3L635.3,125.5L635,127.2L636.4,127.8ZM760.5,13.2L766.5,12.4L771.9,14.1L778.3,17.3L777.6,20.3L771.5,20.7L763.8,19.7L759.2,18.5L757.1,16.1L753.3,15.4L760.5,13.2ZM785.7,18.9L792.7,20.8L791.9,22.2L776.2,23.4L781.3,19.1L783.6,18.7L785.7,18.9ZM885.6,29.3L893,29.5L903,31.2L900.8,33.7L890.6,33.6L886,34.4L880.5,32.2L882,30L885.6,29.3ZM911.7,32L918.7,32.8L915.5,34.1L911,33.8L905.9,32.5L906.6,31.5L911.7,32ZM888.5,38.5L891.1,37.2L894.6,36.9L898.6,38.2L898.9,39L894.7,39L889,38.7L888.5,38.5ZM624.6,14.6L630,14L634.2,14L634.8,14.8L636.4,14.1L639,13.5L643.1,14.2L642,14.7L638.3,15.2L635.8,15.4L635.4,16L632.2,16.5L629.2,15.7L630.8,14.7L624.6,14.6ZM563.1,101.5L558,101.6L554.6,101.2L555.2,99.8L559.1,98.7L562,99.3L563.2,99.8L562.9,100.7L563.1,101.5ZM648.6,37.2L655.3,34.3L654.5,32.8L660.7,31.1L669.9,29L679.2,28.3L683.9,27.1L689.3,26.7L691.3,28L689.4,29L679.5,30.7L671.1,32.2L662.4,35.4L658.3,38.6L653.9,41.8L654.5,44.6L659.8,47.3L658.2,47.6L649.1,47.1L648.4,45.7L643.3,44.8L642.9,43L645.8,42.3L645.7,40.5L651.2,37.6L648.6,37.2ZM897,103.6L897.9,106.8L897.9,110L899,113.4L901.8,119.3L897.7,118.2L896,122.9L898.7,126.3L898.6,128.6L896.5,126.7L894.7,129.2L894.2,126.4L894.5,123.2L894.2,119.6L894.8,117.1L894.9,112.7L893.3,109.5L893.6,104.9L896.1,103.4L895,101.9L896.3,101.4L897,103.6ZM14.1,58.9L13.8,61L15.7,61.8L15.1,59.4L22.6,59.9L28.1,63L25.3,64.4L20.7,64.8L20.7,68L19.6,68.7L17,68.6L14.9,67.4L11.2,66.5L10.5,65L7.7,64.5L4.6,64.9L3,63.8L3.6,62.5L0.3,63.3L1.6,64.9L0,66.3L0,53.1L6.8,55.6L14.1,58.9ZM3.6,46.7L0,46.9L0,44.6L2.7,44.5L6.7,45.5L6.5,45.9L3.6,46.7ZM592.9,129.2L593.6,128.4L595.6,129.1L596.5,129.2L596.8,129.9L598.6,131.1L601.5,130.9L600.9,132L597.9,132.6L594.1,134.5L592.6,133.9L593.2,132.3L590.2,131.3L590.6,130.7L593.3,129.6L592.9,129.2ZM280.6,192.7L281.9,192.4L283.8,192.5L283.8,193.4L280.8,193.9L280.6,192.7ZM283.9,191.9L286.1,193.4L285.6,195.7L285.1,195.3L285.2,193.6L283.9,192.2L283.9,191.9ZM282.8,197.9L283.6,198.1L284.6,200.8L284.6,202.7L283.9,202.9L283.2,201L282.2,200L282.8,197.9ZM330,453L333.3,451L335.7,451.9L337.4,450.5L339.6,452L338.8,453.2L335,454.2L333.8,453L331.4,454.5L330,453ZM542.1,17.6L543.1,16.5L547.2,16.4L550.7,17.5L559.8,20L552.9,21.3L551.3,23.7L548.9,24.4L547.6,27.1L544.2,27.2L538.2,25.2L540.7,24L536.6,23.1L531.2,20.3L529,17.7L536.6,16.5L538.1,17.7L542.1,17.6ZM586.4,51.1L581.7,52.4L579.4,52.8L580.6,50.4L577,49.1L572.7,50.2L571.4,52.7L568.7,54.1L565.7,53.3L562.1,53.5L559,51.7L557.3,52.6L555.6,52.7L555.2,54.9L550,54.4L549.2,56.2L546.6,56.2L544.7,58.6L542,62.3L537.7,66.9L538.7,68L537.7,69.4L534.9,69.3L533.1,72.4L533.3,76.8L535.1,78.5L534.2,82.4L531.9,84.6L530.6,86.5L528.8,84.5L523.3,88.3L519.6,89.1L515.7,87.4L514.7,83.9L513.9,76.2L516.4,74.1L523.8,71.3L529.2,67.9L534.3,63.3L541,56.9L545.7,54.4L553.3,50.3L559.4,48.8L564,49L568.2,46.2L573.3,46.4L578.2,45.7L586.9,48.2L583.3,49L586.4,51.1ZM576.1,16.4L572,18.1L564,18.5L555.8,18L555.3,17.1L551.3,17L548.2,15.5L556.8,14.6L560.9,15.4L563.7,14.4L570.7,15.2L576.1,16.4ZM568.7,23.7L562.5,25L557.6,24.2L559.5,23.4L557.8,22.3L563.6,21.7L564.7,22.9L568.7,23.7ZM370.1,7.9L379.4,5.9L389.2,6L392.7,4.8L402.5,4.5L424.7,4.9L442.1,7.5L437,8.8L426.3,8.9L411.4,9.3L412.8,9.9L422.6,9.5L431,10.6L436.4,9.6L438.7,10.8L435.6,12.7L442.7,11.5L456.2,10.2L464.5,10.9L466.1,12.3L454.8,14.6L453.2,15.4L444.3,16L450.7,16.1L447.5,18.5L445.3,20.7L445.4,24.4L448.7,26.5L444.3,26.7L439.8,27.7L444.9,29.5L445.6,32.3L442.6,32.6L446.2,35.4L440,35.7L443.2,37L442.3,38.2L438.4,38.7L434.5,38.7L438,41L438.1,42.4L432.6,41.1L431.1,41.9L434.9,42.8L438.5,44.8L439.6,47.5L434.6,48.1L432.5,46.8L429,44.9L430,47.2L426.8,48.9L434.1,49L437.9,49.2L430.5,52.1L422.9,54.7L414.8,55.9L411.7,55.9L408.9,57.2L405,60.6L399,63L397.1,63.1L393.4,63.9L389.4,64.7L387,66.7L387,69.1L385.6,71.2L381.1,73.9L382.2,76.5L380.9,79.2L379.5,82.4L375.6,82.6L371.5,79.9L365.9,79.9L363.2,78.1L361.4,74.9L356.6,70.8L355.2,68.6L354.8,65.6L350.9,62.6L351.9,60.1L350.1,59L352.8,55.1L357,53.9L358.1,52.5L358.7,49.9L355.5,51.1L354,51.6L351.5,52L348.1,50.9L347.9,48.7L349,46.9L351.6,46.9L357.2,47.8L352.5,45.7L350,44.5L347.2,45L344.9,44.2L348,41.1L346.3,39.9L344.1,37.6L340.8,34.1L337.2,32.8L337.3,31.4L329.8,29.5L323.9,29.2L316.5,29.3L309.7,29.6L306.5,28.5L301.7,26.5L309,25.4L314.5,25.2L302.7,24.4L296.4,23L296.8,21.7L307.3,20.1L317.5,18.6L318.5,17.4L311,16.2L313.5,14.8L323.1,12.5L327.1,12.2L326,10.7L332.5,9.8L341.1,9.3L349.6,9.3L352.7,10.3L360,8.5L366.7,9.7L370.6,10L376.3,11.1L369.7,9.3L370.1,7.9ZM691.5,442.3L693.3,443.4L695.9,443.8L696,444.4L695.2,445.9L691,446.2L690.9,444.4L691.3,443L691.5,442.3ZM847.1,310.8L847.5,310L849.9,309.3L851.8,309.2L852.7,308.8L853.7,309.2L852.7,310.1L849.8,311.5L847.5,312.5L847.4,311.5L847.1,310.8ZM545.4,376L546.7,374.3L547.8,375.2L548.3,376.7L549.5,376.9L551.3,377.5L552.8,377.3L555.3,375.6L555.3,363.4L556,363.9L557.7,367L557.4,369L558,370.2L560,369.9L561.4,368.4L562.7,367.4L563.4,365.8L564.8,365L565.9,365.4L567.3,366.4L569.5,366.5L571.3,365.7L571.6,364.7L572.1,363.1L573.6,362.9L574.4,361.6L575.3,359.4L577.8,356.9L581.8,354.5L582.9,354.5L584.2,355.1L585.2,354.7L586.6,355L588,359.7L588.7,362.1L588.2,365.7L588.4,366.9L587,366.3L586.2,366.6L586,367.5L585.2,368.8L585.2,369.9L586.9,371.7L588.5,371.3L589.1,369.9L591.2,369.9L590.5,372.3L590.2,375.1L589.5,376.6L587.6,378.2L587,378.7L585.8,380.4L585.1,382.1L583.5,384.5L580.3,387.9L578.4,389.9L576.3,391.4L573.4,392.7L572,392.8L571.6,393.7L569.9,393.3L568.5,393.9L565.5,393.3L563.9,393.7L562.7,393.5L559.8,394.8L557.5,395.3L555.8,396.6L554.5,396.6L553.3,395.5L552.4,395.4L551.2,393.9L550.7,393.5L550.7,391.6L549.8,389.3L550.7,388.7L550.6,386.2L548.8,383.1L547.4,380.3L545.4,376ZM580.5,377.2L579.3,376.2L578,376.9L576.5,378.2L575,380.3L577.1,382.8L578.1,382.5L578.6,381.4L580.1,380.9L580.6,379.8L581.5,378.2L580.5,377.2ZM580.5,377.2L581.5,378.2L580.6,379.8L580.1,380.9L578.6,381.4L578.1,382.5L577.1,382.8L575,380.3L576.5,378.2L578,376.9L579.3,376.2L580.5,377.2ZM174.6,173.7L177.8,173.4L181.3,173.1L181.1,173.7L185.3,175.3L191.6,177.7L197.1,177.6L199.3,177.6L199.3,176.3L204.1,176.3L205.2,177.4L206.6,178.5L208.2,179.9L209.2,181.7L209.8,183.5L211.3,184.5L213.6,185.5L215.3,182.9L217.6,182.8L219.6,184.1L221,186.4L221.9,188.3L223.6,190.2L224.2,192.5L224.9,194.1L227.1,195.1L229.1,195.8L230.2,195.7L229.1,198.6L228.6,201L228.4,205.5L228.1,207.1L228.6,208.9L229.5,210.5L230,213.1L231.9,215.5L232.5,217.4L233.6,219.1L236.6,219.9L237.7,221.3L240.1,220.4L242.3,220.1L244.3,219.5L246.1,218.9L247.9,217.5L248.5,215.6L248.7,212.8L249.2,211.9L251.1,211L254,210.2L256.5,210.3L258.2,210.1L258.9,210.8L258.8,212.4L257.3,214.3L256.6,216.3L257.1,216.9L256.7,218.3L256,220.9L255.3,220.1L254.7,220.1L254.2,220.2L253.2,222.2L252.7,221.8L249.8,222.4L247.2,222.4L247.2,224.3L246,224.3L247,225.4L248,226.1L248.3,226.9L248.7,228.2L245.1,228.2L243.8,230.9L244.2,231.5L243.9,232.3L243.8,233.3L240.7,229.7L239.2,228.6L237,227.7L235.4,228L233.2,229.2L231.8,229.6L229.8,228.7L227.7,228.1L225.1,226.5L223.1,226.1L219.9,224.5L217.6,223L216.9,222.1L215.3,221.9L212.5,220.8L211.3,219.3L208.4,217.4L207,215.3L206.3,213.7L207.2,213.4L206.9,212.5L207.6,211.6L207.6,210.5L206.7,209L206.4,207.7L205.5,206L203,202.7L200.2,200.1L198.9,198.1L196.5,196.7L196,195.9L196.4,193.8L195,193.1L193.4,191.5L192.7,189.2L191.2,188.9L189.6,187.1L188.3,185.5L188.1,184.5L186.6,182L185.7,179.5L185.7,178.2L183.7,176.9L182.8,177L181.2,176.1L180.7,177.5L181.2,179L181.5,181.5L182.4,182.9L184.5,185.2L184.9,186L185.7,187.3L186.8,189.4L187.6,190.3L188.2,191.4L190,193.1L190.9,196.2L191.7,197.6L192.5,199.2L192.6,200.9L194,201.1L195.1,202.6L196.1,204L196,204.6L194.8,205.8L193.6,203.8L191.8,201.9L189.8,200.3L188.4,199.5L188.5,197.1L188.1,195.3L186.7,194.2L184.8,192.8L184.5,193.2L183.8,192.3L182,191.5L180.4,189.6L181.7,189.5L182.8,188.3L182.9,186.8L180.7,184.5L179.1,183.5L178.1,181.5L177.1,179.3L175.8,176.7L174.6,173.7ZM339.9,381.4L341.7,381.1L344.5,383.6L345.6,383.5L348.4,385.6L350.6,387.5L352.2,389.7L351,391.3L351.7,393.2L350.5,395.2L347.4,397.1L345.3,396.4L343.8,396.8L341.3,395.4L339.4,395.5L337.7,393.6L337.9,391.5L338.5,390.8L338.5,387.5L339.2,384.1L339.9,381.4ZM351.7,393.2L351,391.3L352.2,389.7L350.6,387.5L348.4,385.6L345.6,383.5L344.5,383.6L341.7,381.1L339.9,381.4L343.6,376.9L346.8,373.7L348.6,372.3L351,370.5L351,367.9L349.6,366L348.3,366.6L348.8,364.7L349.2,362.7L349.2,360.9L348.2,360.3L347.1,360.8L346.1,360.7L345.8,359.4L345.5,356.4L345,355.4L343.1,354.5L342,355.1L339.1,354.5L339.2,350L338.4,348.2L339.3,347.5L339,345.6L339.8,344.1L340.3,341.5L339.6,339.5L338.1,338.6L337.8,337.2L338.2,335.3L332.9,335.2L331.8,331.3L332.6,331.3L332.6,329.9L332.1,328.9L331.9,327L330.3,326L328.6,326L327.4,325.1L325.5,324.4L324.5,323.2L321.3,322.6L318.3,319.7L318.6,317.4L318.2,316.2L318.5,313.7L314.9,314.3L313.4,315.5L311,316.8L310.4,317.8L308.9,317.9L306.9,317.6L305.3,318.2L304,317.8L304.2,312.8L301.9,314.7L299.5,314.7L298.4,312.9L296.6,312.7L297.2,311.3L295.6,309.3L294.5,306.3L295.2,305.7L295.2,304.3L296.9,303.3L296.6,301.5L297.3,300.4L297.5,298.8L300.7,296.6L303,296L303.3,295.5L305.9,295.6L307.1,286.5L307.2,285.1L306.7,283.2L305.5,282L305.5,279.6L307.1,279L307.6,279.4L307.7,278.1L306.1,277.8L306.1,275.7L311.5,275.8L312.4,274.6L313.2,275.7L313.7,277.6L314.2,277.2L315.8,279L317.9,278.8L318.5,277.8L320.5,277L321.7,276.4L322,275L324,274.1L323.8,273.4L321.5,273.1L321.1,271L321.2,268.8L320,268L320.5,267.6L322.5,268.1L324.7,268.9L325.5,268.1L327.5,267.6L330.6,266.4L331.7,265.1L331.3,264.2L332.7,264L333.4,264.8L333,266.2L334,266.7L334.6,268.3L333.8,269.4L333.4,272.3L334.1,273.9L334.3,275.5L336,277L337.4,277.2L337.7,276.5L338.6,276.4L339.8,275.8L340.7,274.9L342.3,275.2L342.9,275.1L344.5,275.4L344.7,274.7L344.2,274L344.5,273.1L345.6,273.4L347,273L348.5,273.7L349.8,274.4L350.6,273.5L351.2,273.6L351.6,274.6L352.9,274.3L354,273.1L354.9,270.7L356.5,267.6L357.5,267.5L358.1,269.3L359.7,275.1L361.2,275.6L361.3,277.9L359.2,280.6L360,281.6L364.9,282.2L365,285.5L367.2,283.3L370.6,284.5L375.3,286.5L376.6,288.5L376.2,290.3L379.4,289.3L384.8,291L388.9,290.9L393.1,293.6L396.6,297.3L398.7,298.3L401.1,298.4L402.1,299.5L403.1,303.7L403.5,305.7L402.4,311.2L401,313.3L397.1,317.9L395.3,321.7L393.3,324.5L392.6,324.6L391.8,327L392,333.2L391.2,338.3L390.9,340.5L390,341.8L389.6,346.3L386.7,350.6L386.3,354L384,355.4L383.4,357.4L380.3,357.4L376,358.7L374,360.2L370.9,361.1L367.6,363.8L365.3,367L364.9,369.5L365.3,371.3L364.8,374.7L364.2,376.3L362.3,378.1L359.2,383.9L356.7,386.6L354.8,388.1L353.6,391.3L351.7,393.2ZM306.9,317.6L308.9,317.9L310.4,317.8L311,316.8L313.4,315.5L314.9,314.3L318.5,313.7L318.2,316.2L318.6,317.4L318.3,319.7L321.3,322.6L324.5,323.2L325.5,324.4L327.4,325.1L328.6,326L330.3,326L331.9,327L332.1,328.9L332.6,329.9L332.6,331.3L331.8,331.3L332.9,335.2L338.2,335.3L337.8,337.2L338.1,338.6L339.6,339.5L340.3,341.5L339.8,344.1L339,345.6L339.3,347.5L338.4,348.2L338.4,347.2L335.8,345.5L333.2,345.4L328.4,346.4L327,349.3L327,351.1L325.9,355L325.4,354.3L322.3,354.2L321.2,356.8L319.5,354.5L315.9,353.7L313.6,356.6L311.6,357.1L310.5,352.5L309,348.8L309.9,345.6L308.4,344.2L308.1,341.8L306.7,339.6L308.4,336L307.3,333.2L307.9,332.1L307.4,330.9L308.5,329.2L308.5,326.4L308.7,324.1L309.3,323L306.9,317.6ZM305.9,295.6L303.3,295.5L303,296L300.7,296.6L297.5,298.8L297.3,300.4L296.6,301.5L296.9,303.3L295.2,304.3L295.2,305.7L294.5,306.3L295.6,309.3L297.2,311.3L296.6,312.7L298.4,312.9L299.5,314.7L301.9,314.7L304.2,312.8L304,317.8L305.3,318.2L306.9,317.6L309.3,323L308.7,324.1L308.5,326.4L308.5,329.2L307.4,330.9L307.9,332.1L307.3,333.2L308.4,336L306.7,339.6L305.9,341.3L304.5,342.1L301.7,340.2L301.5,338.9L296,335.5L291,331.9L288.9,329.9L287.7,327.1L288.2,326.2L285.8,321.8L283.1,315.7L280.5,309.1L279.3,307.6L278.4,305.2L276.3,303L274.3,301.7L275.2,300.2L273.9,297.1L274.7,294.7L276.9,292.7L277.3,294L276.5,294.8L276.5,296L277.7,295.8L278.8,296.1L280,297.8L281.6,296.4L282.1,294.2L283.8,291.3L287.1,290L290.2,286.5L291,284.4L290.6,281.9L291.4,281.6L293.2,283.1L294.1,284.7L295.4,285.6L297,289L299.1,289.4L300.6,288.6L301.6,289.1L303.3,288.9L305.4,290.4L303.6,293.8L304.5,293.8L305.9,295.6ZM314.2,277.2L313.7,277.6L313.2,275.7L312.4,274.6L311.5,275.8L306.1,275.7L306.1,277.8L307.7,278.1L307.6,279.4L307.1,279L305.5,279.6L305.5,282L306.7,283.2L307.2,285.1L307.1,286.5L305.9,295.6L304.5,293.8L303.6,293.8L305.4,290.4L303.3,288.9L301.6,289.1L300.6,288.6L299.1,289.4L297,289L295.4,285.6L294.1,284.7L293.2,283.1L291.4,281.6L290.6,281.9L289.4,281.1L288.1,280L287.3,280.5L284.9,280.1L284.3,278.6L283.7,278.7L281,276.8L280.6,275.8L281.6,275.5L281.5,273.9L282.1,272.7L283.5,272.5L284.7,270.4L285.8,268.6L284.7,267.8L285.3,265.9L284.6,262.9L285.2,262L284.8,259.2L283.7,257.5L284,255.9L284.9,256.1L285.4,255.1L284.8,253.2L285.1,252.7L286.6,252.8L288.6,250.5L289.8,250.1L289.8,249L290.3,246.2L291.9,244.7L293.7,244.6L293.9,243.9L296.1,244.2L298.3,242.5L299.3,241.8L300.7,240.2L301.7,240.4L302.4,241.3L301.9,242.4L300.1,243L299.4,244.6L298.3,245.6L297.5,246.8L297.1,249.1L296.4,251.1L297.8,251.3L298.2,252.8L298.8,253.6L299,254.9L298.7,256.1L298.8,256.8L299.4,257.1L300.1,258.2L303.7,257.9L305.3,258.3L307.3,261.2L308.4,260.8L310.4,261L312,260.6L312.9,261.2L312.4,263L311.8,264.1L311.6,266.5L312.2,268.7L313,269.7L313,270.4L311.6,272L312.6,272.8L313.4,273.9L314.2,277.2ZM285.1,252.7L284.8,253.2L285.4,255.1L284.9,256.1L284,255.9L283.7,257.5L282.7,256.5L282.1,254.7L282.8,253.8L282.1,253.6L281.6,252.5L280.2,251.6L279,251.8L278.4,253L277.3,253.8L276.7,253.9L276.4,254.6L277.8,256.4L277,256.8L276.6,257.3L275.3,257.5L274.8,255.5L274.5,256.1L273.6,255.9L273,254.5L271.9,254.3L271.1,253.9L269.9,253.9L269.9,254.7L269.5,254.2L269.7,253.5L269.9,252.8L269.8,252.2L270.2,251.8L269.6,251.3L269.6,250L270.7,249.7L271.7,250.9L271.6,251.6L272.8,251.7L273.8,252.3L275.1,252.1L276.3,251.2L278,250.6L279,249.6L280.5,249.8L281.9,250.2L283.2,250.8L284.1,251.8L285.1,252.7ZM270.7,249.7L269.6,250L269.6,251.3L270.2,251.8L269.8,252.2L269.9,252.8L269.7,253.5L269.5,254.2L268,253.4L267.5,252.7L267.8,252.1L267.7,251.4L266.9,250.6L265.8,250L264.9,249.5L264.7,248.6L264,248L264.1,249L263.6,249.7L262.9,248.8L262.1,248.5L261.7,247.8L261.7,246.8L262.1,245.8L261.3,245.3L261.9,244.7L262.3,244.2L264.2,245.1L264.8,244.7L265.7,245L266.1,245.6L267,245.9L267.6,245.2L268.3,247L269.4,248.3L270.7,249.7ZM267.6,245.2L267,245.9L266.1,245.6L265.7,245L264.8,244.7L264.2,245.1L262.3,244.2L261.9,244.7L260.9,243.6L259.7,242.3L259,241.2L257.9,240.1L256.5,238.6L256.8,238.1L257.2,238.6L258.3,238.3L258.7,237.5L259,235.8L259.7,235.8L260.2,235.8L260.8,234.9L261.7,235.6L262.5,234.8L263.4,233.9L263.5,233.2L264.1,232.4L264.9,232.8L265.4,233L266,232.6L266.7,232.6L267.7,232.1L268.1,231.7L269,231.7L268.7,232.8L268.9,234L268.3,235.1L268,236.5L267.9,237.9L268.1,238.8L268.1,240.3L267.7,240.6L267.4,242L267.6,242.9L267.1,243.7L267.2,244.6L267.6,245.2ZM269,231.7L268.1,231.7L267.7,232.1L266.7,232.6L266,232.6L265.4,233L264.9,232.8L264.4,232.3L263.7,233.2L263.4,233.9L262.5,234.8L261.9,235.2L260.8,234.9L260.2,235.8L259.7,235.8L259,235.8L259.1,237.5L258.3,238.3L257.5,238.4L257,237.4L256.1,237.1L256.3,235.7L255.9,235.4L255.4,235.2L254.2,235.5L253.2,234.6L252.6,233.9L251.8,233.6L252.4,232.8L252.2,232.1L252.3,231.5L253.7,230.6L254.9,229.3L255.8,228.9L256.6,228.8L258.6,229.2L259.9,229.1L260.8,228.8L262,228.6L262.7,228.8L263.4,228.7L263.9,228.4L265.2,228.9L266.5,229.6L267.3,230.3L268.3,230.8L269,231.7ZM251.8,233.6L252.6,233.9L253.2,234.6L254.1,235.1L255.4,235.2L255.9,235.4L256.3,235.7L256.1,237.1L255.8,237.9L254.2,237.8L253.2,237.5L252.1,236.8L250.5,236.6L249.7,235.9L250.8,234.6L251.3,234.2L251.8,233.6ZM243.8,233.3L243.9,232.3L244.2,231.5L243.8,230.9L245.1,228.2L248.7,228.2L248.8,227.1L248,226.1L247,225.4L246,224.3L247.2,224.3L247.2,222.4L249.8,222.4L252.4,222.4L252.4,225.1L252.1,228.8L253,228.8L253.9,229.4L254.1,228.9L254.9,229.3L253.7,230.6L252.3,231.5L252.2,232.1L252.4,232.8L251.8,233.6L251.1,233.8L250.8,234.6L249.8,235.4L248.3,235.3L246.6,235.3L245.3,234.6L243.8,233.3ZM252.4,222.4L253.2,222.2L254.2,220.2L254.7,220.1L255.3,220.6L255.2,221.5L254.8,223L255,223.5L254.7,224.7L254.6,226.7L254,227.5L253.5,227.6L253,228.8L252.1,228.8L252.4,225.1L252.4,222.4ZM331.3,264.2L331.7,265.1L330.6,266.4L327.5,267.6L325.5,268.1L324.7,268.9L322.5,268.1L320.5,267.6L320,268L321.2,268.8L321.1,271L321.5,273.1L323.8,273.4L324,274.1L322,275L321.7,276.4L320.5,277L318.5,277.8L317.9,278.8L315.8,279L314.2,277.2L313.4,273.9L312.6,272.8L311.6,272L313,270.4L313,269.7L312.2,268.7L311.6,266.5L311.8,264.1L312.4,263L312.9,261.2L312,260.6L310.4,261L308.4,260.8L307.3,261.2L305.3,258.3L303.7,257.9L300.1,258.2L299.4,257.1L298.8,256.8L298.7,256.1L299,254.9L298.8,253.6L298.2,252.8L297.8,251.3L296.4,251.1L297.1,249.1L297.5,246.8L298.3,245.6L299.4,244.6L300.1,243L301.9,242.4L301.8,243.2L300.1,243.6L301.1,245.1L301,246.8L299.8,248.7L300.8,251.3L302,251.1L302.7,248.7L301.8,247.6L301.7,245.1L305.1,243.7L304.7,242.2L305.7,241.1L306.7,243.4L308.7,243.5L310.5,245.3L310.6,246.4L313.1,246.5L316,246.1L317.6,247.6L319.7,248L321.3,247L321.3,246.2L324.8,246L328.1,245.9L325.7,246.9L326.7,248.4L328.9,248.7L331,250.3L331.5,253L332.9,252.9L334,253.7L331.8,255.6L331.6,256.8L332.5,258.1L331.8,258.7L330.1,259.2L330.2,260.7L329.4,261.7L331.3,264.2ZM342.9,275.1L342.3,275.2L340.7,274.9L339.8,275.8L338.6,276.4L337.7,276.5L337.4,277.2L336,277L334.3,275.5L334.1,273.9L333.4,272.3L333.8,269.4L334.6,268.3L334,266.7L333,266.2L333.4,264.8L332.7,264L331.3,264.2L329.4,261.7L330.2,260.7L330.1,259.2L331.8,258.7L332.5,258.1L331.6,256.8L331.8,255.6L334,253.7L335.8,254.9L337.5,257.1L337.6,258.8L338.7,258.8L340.2,260.5L341.3,261.6L340.8,264.6L339.1,265.4L339.3,266.2L338.8,267.9L340,270.3L340.9,270.3L341.2,272.2L342.9,275.1ZM348.5,273.7L347,273L345.6,273.4L344.5,273.1L344.2,274L344.7,274.7L344.5,275.4L342.9,275.1L341.2,272.2L340.9,270.3L340,270.3L338.8,267.9L339.3,266.2L339.1,265.4L340.8,264.6L341.3,261.6L344.6,262.3L344.9,261.7L347.1,261.4L350.1,262.3L348.7,265.2L348.9,267.4L350,269.4L349.5,270.8L349.3,272.3L348.5,273.7ZM356.5,267.6L354.9,270.7L354,273.1L352.9,274.3L351.6,274.6L351.2,273.6L350.6,273.5L349.8,274.4L348.5,273.7L349.3,272.3L349.5,270.8L350,269.4L348.9,267.4L348.7,265.2L350.1,262.3L351.1,262.7L353.1,263.5L356,266.3L356.5,267.6ZM517.2,117.6L518.5,118.5L522.5,119.1L521.1,121.4L520.7,123.7L520,124.3L518.7,124L518.8,124.8L516.8,126.7L516.7,128.2L518.1,127.7L519,129.1L518.9,130.1L519.7,131.3L518.7,132.3L519.5,134.9L521,135.3L520.7,136.7L518.1,138.6L512.7,137.7L508.6,138.8L508.3,140.8L505.1,141.2L501.9,139.7L500.9,140.4L495.8,138.9L494.7,137.6L496.2,135.6L496.7,129.1L493.8,125.6L491.8,123.9L487.5,122.6L487.2,120.2L490.8,119.5L495.5,120.3L494.6,116.6L497.3,118L503.7,115.4L504.6,112.7L507,112.1L507.4,113.2L508.7,113.3L510,114.6L511.9,116.2L513.3,115.9L515.8,117.4L516.4,117.7L517.2,117.6ZM524.3,140.3L526.1,139L526.6,141.8L525.6,144.4L524.4,143.7L523.7,141.5L524.3,140.3ZM290.6,281.9L291,284.4L290.2,286.5L287.1,290L283.8,291.3L282.1,294.2L281.6,296.4L280,297.8L278.8,296.1L277.7,295.8L276.5,296L276.5,294.8L277.3,294L276.9,292.7L278.4,290.2L277.8,288.7L276.8,290.3L275.1,288.8L275.7,287.9L275.2,284.9L276.2,284.4L276.7,282.3L277.7,280.2L277.5,278.8L279,278.1L281,276.8L283.7,278.7L284.3,278.6L284.9,280.1L287.3,280.5L288.1,280L289.4,281.1L290.6,281.9ZM315.9,220.1L317.3,220.4L317.8,221L317.1,221.9L315,221.9L313.4,222L313.2,220.6L313.6,220.1L315.9,220.1ZM284.5,220.2L286.4,220.5L287.9,221.3L288.3,222.2L286.4,222.2L285.5,222.8L284,222.3L282.4,221L282.7,220.3L283.9,220.1L284.5,220.2ZM271.5,204.6L273.9,204.9L276.1,204.9L278.7,206L279.8,207.2L282.4,206.9L283.4,207.6L285.7,209.7L287.4,211.2L288.3,211.1L290,211.8L289.8,212.7L291.9,212.9L293.9,214.2L293.6,215L291.8,215.4L289.9,215.6L288,215.3L284,215.7L285.9,213.8L284.7,212.9L283,212.7L282,211.8L281.3,209.9L279.8,210L277.2,209.1L276.3,208.4L272.7,207.9L271.8,207.3L272.8,206.4L270.1,206.3L268.1,208L266.9,208L266.5,208.8L265.1,209.2L264,208.9L265.4,207.9L266,206.7L267.3,205.9L268.7,205.3L270.8,205L271.5,204.6ZM586.6,355L585.2,354.7L584.2,355.1L582.9,354.5L581.8,354.5L580,353L577.8,352.5L577,350.4L577,349.2L575.8,348.9L572.7,345.2L571.8,343.3L571.2,342.7L570.2,340.1L573.3,340.5L574.2,340.8L575.1,340.8L576.7,338.6L579.1,335.9L580.1,335.6L580.4,334.5L582,333.2L584.1,332.7L584.3,334L586.6,333.9L587.9,334.6L588.5,335.4L589.8,335.6L591.2,336.7L591.2,340.9L590.7,343.2L590.6,345.7L591,346.6L590.7,348.6L590.3,348.9L589.6,351.3L586.6,355ZM581.8,354.5L577.8,356.9L575.3,359.4L574.4,361.6L573.6,362.9L572.1,363.1L571.6,364.7L571.3,365.7L569.5,366.5L567.3,366.4L565.9,365.4L564.8,365L563.4,365.8L562.7,367.4L561.4,368.4L560,369.9L558,370.2L557.4,369L557.7,367L556,363.9L555.3,363.4L555.3,353.7L558,353.6L558.1,341.8L560.2,341.7L564.4,340.5L565.5,341.9L567.3,340.6L568.1,340.6L569.7,339.8L570.2,340.1L571.2,342.7L571.8,343.3L572.7,345.2L575.8,348.9L577,349.2L577,350.4L577.8,352.5L580,353L581.8,354.5ZM555.3,363.4L555.3,375.6L552.8,377.3L551.3,377.5L549.5,376.9L548.3,376.7L547.8,375.2L546.7,374.3L545.4,376L543.3,373.5L542.3,371.1L541.6,367.8L541,365.4L540,360.3L540,356.4L539.6,354.6L538.5,353.2L537.1,350.5L535.6,346.5L535,344.4L532.8,341.2L532.6,338.7L533.9,338L535.6,337.5L537.4,337.6L539.1,339.1L550.7,338.7L552.7,340.3L559.4,340.7L564.5,339.4L566.8,338.6L568.6,338.8L569.7,339.6L568.1,340.6L567.3,340.6L565.5,341.9L564.4,340.5L560.2,341.7L558.1,341.8L558,353.6L555.3,353.7L555.3,363.4ZM453.6,236.4L452.4,233.8L451,232.6L452.3,232L453.6,229.7L454.3,228L455.2,226.9L456.6,227.2L458,226.5L459.5,226.4L460.8,227.4L462.7,228.3L464.4,230.7L466.2,233L466.3,235.1L466.9,236.9L467.9,237.9L468.1,239.2L468,240.2L466.1,240.1L465.3,240.6L463.3,239.7L461.9,239.7L456.8,239.6L456.1,239.9L455.1,239.8L453.7,240.4L453.2,237.8L455.7,237.9L456.4,237.4L457.9,236.7L459.1,237.4L460.3,237.4L461.5,236.7L461,235.7L460.1,236.3L459.2,236.3L458.1,235.4L457.2,235.5L456.6,236.3L453.6,236.4ZM468,240.2L468.1,239.2L467.9,237.9L466.9,236.9L466.3,235.1L466.2,233L467.1,232.4L467.6,230.4L468.5,230.4L470.4,231.3L472,230.6L473.1,230.8L473.5,230.1L484.6,230.1L485.2,227.7L484.8,227.3L483.4,213.1L482.1,198.8L486.3,198.7L495.7,205.9L505.1,213.2L505.7,214.7L507.5,215.6L508.7,216.2L508.8,218.3L511.9,218L511.9,225.6L510.3,227.8L510.1,229.8L507.6,230.4L503.8,230.7L502.8,231.8L501,232L499.3,232L498.6,231.3L497,231.8L494.4,233.2L493.9,234.2L491.8,235.7L491.4,236.6L490.2,237.2L488.9,236.8L488.1,237.6L487.7,239.9L485.5,242.6L485.6,243.7L484.8,245.1L485,247L483.8,247.5L483.2,248L482.8,246.5L482,246.9L481,247.8L478.8,247.8L478.1,247.3L476.8,246.6L477,245.7L476.6,245.3L476.1,245.6L476.2,244.5L476.7,243.7L475.6,242.3L475.3,241.4L474.6,240.6L474.1,240.5L473.4,241L472.5,241.5L471.8,242.2L470.6,241.9L469.8,241.1L468.6,241.4L468,240.2ZM452.6,211.9L453.2,210.8L464.1,210.8L463.6,206L464.2,204.3L466.8,204L466.8,195.5L475.9,195.7L475.9,190.7L486.3,198.7L482.1,198.8L483.4,213.1L484.8,227.3L485.2,227.7L484.6,230.1L473.5,230.1L473.1,230.8L472,230.6L470.4,231.3L468.5,230.4L467.6,230.4L467.1,232.4L466.2,233L464.4,230.7L462.7,228.3L460.8,227.4L459.5,226.4L458,226.5L456.6,227.2L455.2,226.9L454.3,228L454,226.2L454.8,224.6L455.1,221.4L454.8,218.2L454.5,216.5L454.8,214.9L454.1,213.3L452.6,211.9ZM507.5,260.7L505.2,261L504.5,258.8L504.6,251.2L504.1,250.5L504,248.9L503,247.7L502.1,246.7L502.5,245L503.5,244.6L504,243.2L505.4,242.8L506,241.9L506.9,240.9L507.9,240.9L510,242.8L509.9,243.9L510.5,245.8L510,247.2L510.3,248.1L508.9,250.1L508.1,251.1L507.6,253.2L507.6,255.3L507.5,260.7ZM541.3,205.7L541.9,210.8L543,211.7L543,212.8L544.2,213.9L543.6,215.3L542.5,222L542.4,226.3L538.8,229.5L537.6,233.8L538.8,235L538.8,237.2L540.5,237.3L540.3,238.8L539.5,239L539.4,240.1L538.9,240.1L537,236.5L536.3,236.4L534.2,238.2L532,237.3L530.5,237.1L529.7,237.5L528.1,237.4L526.5,238.8L525,238.9L521.7,237.2L520.4,238L518.9,238L517.9,236.7L515.1,235.5L512.1,235.9L511.4,236.6L511,238.5L510.2,239.8L510,242.8L507.9,240.9L506.9,240.9L506,241.9L506,239.6L502.8,238.8L502.8,237.2L501.2,235.1L500.8,233.6L501,232L502.8,231.8L503.8,230.7L507.6,230.4L510.1,229.8L510.3,227.8L511.9,225.6L511.9,218L515.8,216.5L523.8,210L533.3,203.7L537.7,205.1L539.3,206.9L541.3,205.7ZM507.5,260.7L507.6,255.3L507.6,253.2L508.1,251.1L508.9,250.1L510.3,248.1L510,247.2L510.5,245.8L509.9,243.9L510,242.8L510.2,239.8L511,238.5L511.4,236.6L512.1,235.9L515.1,235.5L517.9,236.7L518.9,238L520.4,238L521.7,237.2L525,238.9L526.5,238.8L528.1,237.4L529.7,237.5L530.5,237.1L532,237.3L534.2,238.2L536.3,236.4L537,236.5L538.9,240.1L539.4,240.1L540.5,241.4L540.2,242L540,243.1L537.7,245.6L537,247.7L536.6,249.5L536,250.2L535.4,252.5L533.9,253.9L533.5,255.6L532.9,256.9L532.6,258.3L530.7,259.4L529.2,258L528.1,258.1L526.5,260L525.6,260L524.3,263.2L523.6,265.6L520.7,266.8L519.7,266.6L518.6,267.3L516.4,267.3L514.9,265.2L514,262.8L512,260.6L509.9,260.7L507.5,260.7ZM540.3,238.8L541.4,240.9L541.6,243.1L541.5,245.3L543,248.3L541.4,248.3L540.6,248.5L539.4,248.2L538.8,249.8L540.4,251.7L541.6,252.3L542,253.6L542.9,255.9L542.4,256.8L541,260.2L540.4,260.8L540.2,263.3L540.4,264.7L540.2,265.7L541.5,267.4L541.8,268.6L542.8,270.3L544.1,271.4L544.2,272.9L544.5,273.9L544.3,275.7L542.1,274.9L539.8,274L536.3,273.9L534.3,274.1L532.6,273.7L531.3,273.9L526.8,273.8L527.2,271.2L526.1,269L524.9,268.5L524.3,267L523.6,266.5L523.6,265.6L524.3,263.2L525.6,260L526.5,260L528.1,258.1L529.2,258L530.7,259.4L532.6,258.3L532.9,256.9L533.5,255.6L533.9,253.9L535.4,252.5L536,250.2L536.6,249.5L537,247.7L537.7,245.6L540,243.1L540.2,242L540.5,241.4L539.4,240.1L539.5,239L540.3,238.8ZM502.5,245L502.1,246.7L503,247.7L504,248.9L504.1,250.5L504.6,251.2L504.5,258.8L505.2,261L502.9,261.8L502.3,260.6L501.6,258.5L501.4,256.8L502,253.9L501.3,252.7L501,250L501,247.6L499.9,245.9L500.1,244.9L502.5,245ZM500.1,244.9L499.9,245.9L501,247.6L501,250L501.3,252.7L502,253.9L501.4,256.8L501.6,258.5L502.3,260.6L502.9,261.8L498.6,263.7L497,264.8L494.5,265.8L492.1,264.8L492.2,263.5L491,260.7L491.7,256.9L492.9,254.2L492.1,249.5L491.8,247L491.8,245.1L496.7,244.9L497.9,245.2L498.8,244.6L500.1,244.9ZM477.7,247.6L478.8,247.8L481,247.8L481.5,246.8L482.8,246.5L483.2,248L483.8,247.5L485,247L486.2,247.8L486.7,248.9L488,249.6L488.9,248.7L490.2,248.6L492.1,249.5L492.9,254.2L491.7,256.9L491,260.7L492.2,263.5L492.1,264.8L490.8,264.9L488.9,264.2L487.1,264.3L483.8,264.8L481.9,265.8L479.1,267L478.6,266.9L478.8,264.2L479,262.5L477.8,261.1L476.9,260.9L476.1,260L476.7,258.5L476.4,256.9L476.6,255.9L477.2,254.5L476.9,253.8L477.2,253.4L478.2,253L477.6,250.3L476.9,249L477.1,247.8L477.7,247.6ZM461.9,239.7L463.3,239.7L465.3,240.6L465.9,240.5L467.6,240.4L468.2,241.4L469.3,241L470.6,241.9L471.8,242.2L472.5,241.5L473.4,241L474.1,240.5L474.6,240.6L475.3,241.4L475.6,242.3L476.7,243.7L476.2,244.5L476.1,245.6L476.6,245.3L477,245.7L476.8,246.6L477.7,247.6L477.1,247.8L476.9,249L477.6,250.3L478.2,253L477.2,253.4L476.9,253.8L477.2,254.5L477,255.9L475.8,255.9L475.2,257.2L474.4,257.2L473.9,256.5L474.1,255.1L472.9,253.1L472.2,253.5L471.6,253.6L470.8,253.7L470.8,252.5L470.4,251.7L470.5,250.7L469.9,249.3L469.1,248.1L466.9,248.1L466.2,248.7L465.5,248.8L465,249.5L464.7,250.5L463.2,251.9L462,249.9L460.9,248.7L460.2,248.2L459.5,247.6L459.2,246.1L458.8,245.4L458,244.8L459.2,243.2L460,243.3L460.8,242.7L461.4,242.7L461.8,242.3L461.6,241.2L461.9,239.7ZM453.7,240.4L455.1,239.8L456.1,239.9L456.8,239.6L461.9,239.7L461.9,240.8L461.8,242.3L461.4,242.7L460.8,242.7L460,243.3L459.2,243.2L458,244.8L456.5,243.4L455.3,243.2L454.7,242.3L454.7,241.8L453.9,241.1L453.7,240.4ZM476.6,255.9L476.4,256.9L476.7,258.5L476.1,260L476.9,260.9L477.8,261.1L479,262.5L479.1,263.8L478.6,266.9L477.8,267L475,265.4L472.5,262.9L470.1,261.1L468.2,258.9L468.9,257.9L469,256.9L470.3,255.1L471.6,253.6L472.2,253.5L472.9,253.1L474.1,255.1L473.9,256.5L474.4,257.2L475.2,257.2L475.8,255.9L476.6,255.9ZM463.2,251.9L464.7,250.5L465,249.5L465.5,248.8L466.2,248.7L466.9,248.1L469.1,248.1L469.9,249.3L470.5,250.7L470.4,251.7L470.8,252.5L470.8,253.7L471.6,253.6L470.3,255.1L469,256.9L468.9,257.9L468.2,258.9L467.5,258.7L465.5,257.3L464,255.6L463.5,254.4L463.2,251.9ZM485,247L484.8,245.1L485.6,243.7L485.5,242.6L487.7,239.9L488.1,237.6L488.9,236.8L490.2,237.2L491.4,236.6L491.8,235.7L493.9,234.2L494.4,233.2L497,231.8L498.6,231.3L499.3,232L501,232L500.8,233.6L501.2,235.1L502.8,237.2L502.8,238.8L506,239.6L506,241.9L505.4,242.8L504,243.2L503.5,244.6L502.5,245L500.1,244.9L498.8,244.6L497.9,245.2L496.7,244.9L491.8,245.1L491.8,247L492.1,249.5L490.2,248.6L488.9,248.7L488,249.6L486.7,248.9L486.2,247.8L485,247ZM576,264.1L575.1,264.4L573.3,264.3L571.3,264L570.2,264.3L569.8,265.1L568.9,265.2L567.8,264.5L564.7,266.1L563.4,265.8L562.2,268L560.2,267.4L558.1,267.1L556.4,265.8L554.1,264.7L552.6,265.8L551.5,267.5L551.3,269.8L549.5,269.6L547.6,269L545.9,270.8L544.5,273.9L544.2,272.9L544.1,271.4L542.8,270.3L541.8,268.6L541.5,267.4L540.2,265.7L540.4,264.7L540.2,263.3L540.4,260.8L541,260.2L542.4,256.8L544.7,256.6L545.3,255.7L546.4,256.5L549.9,255.3L551.1,254L552.5,252.8L552.3,251.6L553,251.3L555.7,251.5L558.3,250L560.3,246.4L561.8,245.1L563.5,244.5L563.8,245.9L565.4,248L565.4,249.3L565,250.7L565.2,251.7L566.1,252.7L568.2,254.1L569.8,255.5L569.8,256.6L571.7,258.3L572.8,259.7L573.5,261.7L575.6,263L576,264.1ZM551.3,269.8L551.1,271.8L550.3,273.5L549.7,275.6L549.4,278.5L549.5,280.4L549.1,281.6L549,282.8L548.7,283.8L546.8,285.4L545.6,287.1L544.4,290.4L544.5,293.1L543.8,294.1L542.1,295.8L540.5,297.8L539.5,297.2L539.3,296.3L537.8,296.3L536.8,297.5L536.1,297.2L535.1,296.1L534.2,296.6L533.1,298.1L530.8,294.6L532.9,292.7L531.9,290.5L532.8,289.7L534.7,289.3L534.9,287.8L536.4,289.4L538.9,289.6L539.7,288L540.1,285.8L539.8,283.2L538.5,281.3L539.7,277.4L539,276.8L536.9,277L536.1,275.3L536.3,273.9L539.8,274L542.1,274.9L544.3,275.7L544.5,273.9L545.9,270.8L547.6,269L549.5,269.6L551.3,269.8ZM531.3,273.9L532.6,273.7L534.3,274.1L536,273.7L536.1,275.3L536.9,277L539,276.8L539.7,277.4L538.5,281.3L539.8,283.2L540.1,285.8L539.7,288L538.9,289.6L536.4,289.4L534.9,287.8L534.7,289.3L532.8,289.7L531.9,290.5L532.9,292.7L530.8,294.6L528,291.2L526.1,288.5L524.4,285.1L524.5,284L525.1,282.9L525.8,280.5L526.4,278L527.3,277.8L531.3,277.9L531.3,273.9ZM526.8,273.8L531.3,273.9L531.3,277.9L527.3,277.8L526.4,278L525.8,277.5L526.8,273.8ZM585.4,309L586.5,309.8L587.7,310.4L589.4,310.9L591,311.9L592.3,313.4L593,316.2L592.5,317.1L592,319.8L592.5,322.5L591.6,323.7L590.8,326.8L592.3,327.6L583.8,330.4L584.1,332.7L582,333.2L580.4,334.5L580.1,335.6L579.1,335.9L576.7,338.6L575.1,340.8L574.2,340.8L573.3,340.5L570.2,340.1L569.7,339.8L568.6,338.8L566.8,338.6L564.5,339.4L562.7,337.3L560.8,334.6L560.9,324.1L566.7,324.1L566.5,323L566.9,321.7L566.4,320.2L566.7,318.6L566.4,317.6L567.4,317.6L567.5,318.7L568.8,318.6L570.6,318.9L571.5,320.4L573.8,320.9L575.5,319.8L576.1,321.5L578.2,322L579.2,323.4L580.4,325.2L582.5,325.3L582.3,321.7L581.5,322.3L579.6,321L578.8,320.4L579.2,317.1L579.6,313.2L579,311.7L579.8,309.6L580.6,309.2L584.3,308.7L585.4,309ZM591,311.9L593.7,312.6L594.3,313.5L595.2,315L596,319.5L595.2,322L596,326.3L597,326.3L598,327.4L599.1,329.7L599.4,334L598.2,334.7L597.3,337L595.5,335L595.3,332.6L595.9,331.1L595.7,329.8L594.6,328.9L593.9,329.2L592.3,327.6L590.8,326.8L591.6,323.7L592.5,322.5L592,319.8L592.5,317.1L593,316.2L592.3,313.4L591,311.9ZM596,319.5L598.1,319.2L601.4,320.2L602.2,319.8L604.1,319.7L605.1,318.7L606.7,318.7L609.8,317.5L612,315.5L612.4,317L612.3,320.3L612.7,323.2L612.8,328.4L613.3,330L612.4,332.4L611.4,334.7L609.6,336.7L607.1,338L603.9,339.6L600.8,343.1L599.7,343.8L597.8,346.1L596.6,346.9L596.4,349.2L597.7,351.7L598.3,353.7L598.3,354.7L598.8,354.5L598.7,357.8L598.3,359.3L598.9,359.9L598.5,361.2L597.3,362.4L595,363.5L591.7,365.3L590.5,366.5L590.7,367.9L591.4,368.2L591.2,369.9L589.1,369.9L588.8,368.4L588.4,366.9L588.2,365.7L588.7,362.1L588,359.7L586.6,355L589.6,351.3L590.3,348.9L590.7,348.6L591,346.6L590.6,345.7L590.7,343.2L591.2,340.9L591.2,336.7L589.8,335.6L588.5,335.4L587.9,334.6L586.6,333.9L584.3,334L584.1,332.7L583.8,330.4L592.3,327.6L593.9,329.2L594.6,328.9L595.7,329.8L595.9,331.1L595.3,332.6L595.5,335L597.3,337L598.2,334.7L599.4,334L599.1,329.7L598,327.4L597,326.3L596,326.3L595.2,322L596,319.5ZM589.1,369.9L588.5,371.3L586.9,371.7L585.2,369.9L585.2,368.8L586,367.5L586.2,366.6L587,366.3L588.4,366.9L588.8,368.4L589.1,369.9ZM536.1,297.2L535.1,297.9L534.6,298.8L534.5,300.2L533.8,300.5L533.1,298.1L534.2,296.6L535.1,296.1L536.1,297.2ZM534.2,301.6L535.4,301.1L536.2,301.2L537.2,300.8L545.4,300.8L546,303.3L546.8,305.3L547.5,306.4L548.5,308.1L550.4,307.8L551.3,307.4L552.8,307.8L553.2,307L553.9,305.1L555.7,304.9L555.8,304.4L557.2,304.4L557,305.5L560.4,305.5L560.4,307.6L561,308.9L560.6,310.9L560.8,312.9L561.7,314.1L561.5,318.1L562.2,317.8L563.4,317.9L565.2,317.4L566.4,317.6L566.7,318.6L566.4,320.2L566.9,321.7L566.5,323L566.7,324.1L560.9,324.1L560.8,334.6L562.7,337.3L564.5,339.4L559.4,340.7L552.7,340.3L550.7,338.7L539.5,338.8L537.4,337.6L535.6,337.5L533.9,338L532.6,338.7L532.3,336.6L532.7,333.7L533.7,330.6L533.8,329.2L534.7,326.2L535.4,324.9L537,322.7L537.9,321.2L538.2,318.8L538,316.9L537.2,315.7L536.4,313.7L535.8,311.7L535.9,311L536.8,309.7L535.9,306.5L535.4,304.3L534,302.2L534.2,301.6ZM584.6,289.4L584.8,290.7L585.4,291.4L585.4,292.5L584.7,293.2L583.7,294.9L582.6,296.1L581.5,296.3L581.3,292.3L580.6,290.8L582.3,291L583.2,289.2L584.6,289.4ZM599.2,173.1L598.7,174.1L597.7,173.7L597.2,175.9L597.8,176.3L597.1,176.7L597,177.6L598.3,177.1L598.4,178.4L597,183.7L596.7,182.9L595.2,178L596,176.9L596.5,175.2L597.1,172.7L597.5,171.9L598.5,171.8L598.8,171.3L599.5,171.2L599.5,172.6L599.2,173.1L599.2,173.1ZM599.5,171.2L598.8,171.3L598.5,171.8L597.6,171.8L598.6,169.1L599.9,166.8L601.2,166.9L601.7,168.2L600.2,169.4L599.5,171.2ZM637.6,322.7L638.4,324.1L639,326.3L639.5,330.2L640.2,331.8L639.9,333.4L639.4,334.3L638.5,332.4L638,333.4L638.5,335.8L638.3,337.2L637.5,338L637.3,340.8L636.2,344.7L634.9,349.2L633.1,355.5L632.1,360.1L630.8,363.9L628.6,364.7L626.1,366.1L624.5,365.3L622.3,364.1L621.6,362.4L621.4,359.4L620.4,356.8L620.2,354.4L620.6,352L621.9,351.4L621.9,350.3L623.3,347.8L623.5,345.7L622.9,344.2L622.3,342.1L622.1,339L623.1,337.2L623.5,335.1L624.8,334.9L626.4,334.3L627.4,333.7L628.6,333.6L630.2,331.7L632.5,329.7L633.3,328L633,326.6L634.1,327L635.7,324.7L635.7,322.7L636.7,321.2L637.6,322.7ZM598.3,177.1L597,177.6L597.1,176.7L597.8,176.3L597.2,175.9L597.7,173.7L598.7,174.1L598.7,176.2L598.3,177.1ZM453.6,236.4L456.6,236.3L457.2,235.5L458.1,235.4L459.2,236.3L460.1,236.3L461,235.7L461.5,236.7L460.3,237.4L459.1,237.4L457.9,236.7L456.9,237.4L455.7,237.9L453.2,237.8L453.6,236.4ZM526.3,181.1L525.2,175.1L523.4,173.8L523.4,173L521.1,171L520.9,168.5L522.6,166.7L523.3,163.9L522.8,160.8L523.4,159.1L526.4,157.7L528.4,158.1L528.3,159.8L530.6,158.6L530.8,159.2L529.4,160.8L529.4,162.4L530.4,163.2L530,166.1L528.2,167.7L528.7,169.5L530.2,169.6L530.9,171.2L531.9,171.7L531.8,174.2L530.4,175.2L529.5,176.2L527.6,177.5L527.9,178.9L527.7,180.3L526.3,181.1ZM475.9,190.7L475.9,190L475.9,185.9L480.4,183.5L483.2,183L485.4,182.1L486.5,180.4L489.7,179.1L489.9,176.6L491.5,176.4L492.7,175.1L496.4,174.6L496.9,173.3L496.1,172.6L495.2,169.1L495,167.1L494,165L496.6,163.2L499.6,162.6L501.4,161.2L504.1,160.2L508.8,159.6L513.4,159.3L514.8,159.8L517.4,158.5L520.4,158.5L521.5,159.3L523.4,159.1L522.8,160.8L523.3,163.9L522.6,166.7L520.9,168.5L521.1,171L523.4,173L523.4,173.8L525.2,175.1L526.3,181.1L527.2,184L527.4,185.5L526.9,188.2L527.1,189.7L526.7,191.5L527,193.6L525.9,195L527.5,197.4L527.6,198.8L528.6,200.7L529.9,200.1L532.1,201.6L533.3,203.7L523.8,210L515.8,216.5L511.9,218L508.8,218.3L508.7,216.2L507.5,215.6L505.7,214.7L505.1,213.2L495.7,205.9L486.3,198.7L475.9,190.7ZM598.7,174.1L599.2,173.1L602.3,174.4L607.8,170.9L608.9,174.9L608.3,175.4L602.8,177.1L605.6,180.4L604.6,180.9L604.2,182.1L602.1,182.5L601.4,183.7L600.2,184.7L597.1,184.2L598.4,178.4L598.3,177.1L598.7,176.2L598.7,174.1ZM643.3,201.1L643.8,201L643.9,201.9L646,201.3L648.3,201.4L650,201.5L651.9,199.3L654,197.2L655.8,195.1L656.3,196.3L656.7,198.9L655.2,198.9L655,201L655.5,201.5L654.2,202.2L654.2,203.5L653.4,204.9L653.4,206.2L652.8,206.9L644.4,205.2L643.4,201.9L643.3,201.1ZM641.1,199.4L641,197L641.7,195.3L642.5,194.9L643.3,196L643.4,197.9L642.7,199.9L642,200.1L641.1,199.4ZM633.3,182.1L633.8,183.6L633.6,184.4L634.5,186.9L632.5,186.9L631.8,185.4L629.4,185.1L631.4,181.9L633.3,182.1ZM608.9,174.9L607.8,170.9L613.9,167.4L615,163.4L614.7,161L616.2,160.2L617.6,158.1L618.8,157.6L622.1,158L623,158.9L624.4,158.3L626.2,162.3L628,163.3L628.2,165.2L626.8,166.4L626.2,168.9L628.1,172.1L631.5,173.9L632.9,176.4L632.5,178.8L633.3,178.8L633.4,180.6L634.9,182.3L633.3,182.1L631.4,181.9L629.4,185.1L624.2,184.8L616.4,178.1L612.2,175.8L608.9,174.9ZM653.4,206.2L653.4,204.9L654.2,203.5L654.2,202.2L655.5,201.5L655,201L655.2,198.9L656.7,198.9L657.9,201.1L659.5,202.3L661.5,202.8L663.1,203.4L664.4,205.3L665.1,206.4L666.1,206.8L666.1,207.5L665.1,209.5L664.7,210.4L663.5,211.5L662.5,213.8L661.2,213.6L660.6,214.4L660.2,216L660.5,218.3L659,218.7L657.2,219.9L657,221.5L656.3,222.2L654.6,222.2L653.5,223L653.5,224.3L652.2,225.3L650.7,225L648.8,226.1L647.5,226.3L646.6,223.9L644.4,218.5L652.8,215.2L654.6,208.6L653.4,206.2ZM656.3,196.3L655.8,195.1L656.6,194L656.6,195.7L656.3,196.3ZM964.5,334L966.2,335.9L965.3,336.3L964.4,334.9L964.5,334ZM963.3,333.2L962.9,332.3L962.9,329.8L964.2,330.8L964.6,333.5L963.9,333.1L963.3,333.2ZM785,241L784.3,237L786.1,234.3L789.7,233.7L792.3,234.1L794.6,235.4L795.8,233.1L798.3,234.4L798.9,236.6L798.6,240.5L793.9,243.1L795.1,245.1L792.2,245.3L789.8,246.7L787.5,246.2L786.4,244.5L785,241ZM792.3,234.1L789.7,233.7L786.1,234.3L784.3,237L785,241L782.5,239.5L780.1,239.6L780.5,237L778,237L777.8,240.6L776.3,245.5L775.4,248.4L775.6,250.8L777.4,250.9L778.6,253.9L779.1,256.8L780.6,258.7L782.3,259.1L783.7,260.8L782.8,262.1L781,262.5L780.8,260.8L778.5,259.4L778,260L776.9,258.7L776.4,257.1L775,255.2L773.6,253.6L773.2,255.6L772.6,253.7L772.9,251.7L773.8,248.5L775.1,245.1L776.6,242L775.5,239L775.6,237.5L775.3,235.6L773.4,233L772.8,231.3L773.7,230.7L774.7,227.8L773.6,225.6L771.8,223.2L770.5,220.3L771.7,219.7L772.9,216.1L774.9,216L776.5,214.6L778.1,213.8L779.3,214.8L779.5,216.8L781.3,217L780.7,220.4L780.7,223.4L783.6,221.4L784.5,222L786.1,221.9L786.7,220.8L788.8,221L790.9,223.7L791.1,227L793.3,229.8L793.2,232.6L792.3,234.1ZM798.3,234.4L795.8,233.1L794.6,235.4L792.3,234.1L793.2,232.6L793.3,229.8L791.1,227L790.9,223.7L788.8,221L786.7,220.8L786.1,221.9L784.5,222L783.6,221.4L780.7,223.4L780.7,220.4L781.3,217L779.5,216.8L779.3,214.8L778.1,213.8L778.7,212.6L781.1,210.4L781.3,211.2L782.8,211.3L782.4,207.5L783.8,207L785.4,209.6L786.7,212.6L790.1,212.7L791.2,215.5L789.4,216.4L788.6,217.6L791.9,219.6L794.2,223.5L796,226.4L798.1,228.7L798.8,231.1L798.3,234.4ZM778.1,213.8L776.5,214.6L774.9,216L772.9,216.1L771.7,219.7L770.5,220.3L771.8,223.2L773.6,225.6L774.7,227.8L773.7,230.7L772.8,231.3L773.4,233L775.3,235.6L775.6,237.5L775.5,239L776.6,242L775.1,245.1L773.8,248.5L773.5,246L774.3,243.5L773.4,241.5L773.6,237.9L772.5,236.2L771.6,232.3L771.1,228.1L769.9,225.3L768.1,227L764.9,229.4L763.4,229.1L761.6,228.3L762.6,224.2L762,221.1L759.8,217.3L760.2,216.1L758.6,215.7L756.6,213L756.4,210.3L757.4,210.8L757.4,208.4L758.8,207.6L758.5,206.2L759.1,205.1L759.2,201.7L761.4,202.4L762.6,199.7L762.8,198.1L764.3,195.3L764.2,193.4L767.8,191.1L769.8,191.7L769.6,189.7L770.6,189.1L770.4,187.8L772,187.6L772.9,189.5L774.1,190.3L774.2,192.8L774.1,195.6L771.5,198.3L771.1,202.3L774.1,201.7L774.7,204.8L776.5,205.4L775.7,208.2L777.7,209.4L778.9,210L781,209L781.1,210.4L778.7,212.6L778.1,213.8ZM789.8,246.7L792.2,245.3L795.1,245.1L793.9,243.1L798.6,240.5L798.9,236.6L798.3,234.4L798.8,231.1L798.1,228.7L796,226.4L794.2,223.5L791.9,219.6L788.6,217.6L789.4,216.4L791.2,215.5L790.1,212.7L786.7,212.6L785.4,209.6L783.8,207L785.3,206.2L787.5,206.2L790.2,205.8L792.6,204.1L793.9,205.3L796.5,205.9L796,207.8L797.3,209.2L800.1,210L796.4,212.9L794.1,216L793.5,218.3L795.6,221.8L798.2,226.1L800.7,228.1L802.4,230.8L803.7,236.9L803.3,242.8L801,244.9L797.8,247.1L795.6,249.8L792.1,252.9L791.1,250.8L791.9,248.5L789.8,246.7ZM862.9,141L863.3,141.6L862.2,141.4L861,142.5L860.2,143.7L860.3,146L858.9,146.8L858.4,147.4L857.3,148.3L855.5,148.9L854.3,149.8L854.2,151.2L855,152.1L856.5,153.6L856.1,154.4L854.9,154.6L853,154.7L851.9,156.2L850.7,156.1L849.1,155.8L848.8,156.4L848,156.7L847.9,156.1L847.2,155.8L846.4,155.2L847.2,153.8L847.8,153.4L847.6,152.8L848.3,151L848.1,150.5L846.5,150.1L845.2,149.2L847.4,147.1L850.5,145.3L852.4,143L853.7,144L856.1,144.1L855.7,142.4L860,140.9L861.1,139.1L862.9,141ZM850.5,156.4L851.9,156.2L853,154.7L854.9,154.6L856.1,154.4L856.5,153.6L858.9,157.5L859.6,159.6L859.6,163.4L858.6,165.2L856.1,165.9L853.9,167.3L851.3,167.5L851,165.7L851.6,163.3L850.3,159.8L852.4,159.2L850.5,156.4ZM743.8,118.2L746.7,117.6L752,114.8L756.2,113.2L758.6,114.2L761.5,114.3L763.4,115.8L766.2,115.9L770.2,116.8L772.9,114.5L771.7,112.5L774.6,109.1L777.7,110.5L780.2,110.8L783.5,111.7L784,114.2L788,115.6L790.6,115L794.1,114.5L796.9,115L799.6,116.5L801.3,118.2L803.9,118.2L807.4,118.7L809.9,117.9L813.6,117.4L817.7,115L819.3,115.4L820.8,116.5L824.1,116.2L822.8,118.7L820.8,122L821.5,123.4L823.1,123L825.8,123.5L828,122.3L830.2,123.3L832.7,125.6L832.4,126.8L830.2,126.4L826.2,126.9L824.2,127.8L822.2,130L817.9,131.3L815.2,133L812.3,132.4L810.8,132.1L809.3,134.2L810.2,135.5L810.6,136.6L808.7,137.7L806.7,139.5L803.5,140.6L799.3,140.8L794.8,141.9L791.6,143.7L790.3,142.6L787,142.7L782.9,140.6L780.1,140.1L776.4,140.6L770.7,139.9L767.6,139.9L766,138L764.7,134.9L763,134.6L759.7,132.5L755.9,132L752.6,131.5L751.6,130L752.7,126.2L750.8,123.5L746.8,122.3L744.5,120.5L743.8,118.2ZM770.4,187.8L770.6,189.1L769.6,189.7L769.8,191.7L767.8,191.1L764.2,193.4L764.3,195.3L762.8,198.1L762.6,199.7L761.4,202.4L759.2,201.7L759.1,205.1L758.5,206.2L758.8,207.6L757.4,208.4L756,203.2L755.2,203.2L754.7,205.3L753.2,203.6L754.1,201.7L755.3,201.5L756.6,198.7L755,198.1L752.4,198.2L749.8,197.7L749.5,195.4L748.2,195.3L746,193.8L745,196.1L747,197.8L745.3,199.1L744.7,200.3L746.4,201.2L745.9,203.2L746.9,205.6L747.3,208.4L746.9,209.6L745,209.5L741.6,210.2L741.8,212.7L740.3,214.7L736.3,216.9L733.2,220.8L731.1,222.9L728.3,225L728.3,226.6L726.9,227.4L724.4,228.6L723.1,228.7L722.3,231.3L722.9,235.6L723,238.3L721.8,241.5L721.8,247.1L720.4,247.3L719.1,249.8L720,250.9L717.4,251.8L716.5,254.1L715.4,255L712.8,251.9L711.5,247.3L710.4,243.9L709.4,242.4L708,239.2L707.3,235.1L706.8,233L704.3,228.4L703.1,222L702.3,217.8L702.3,213.8L701.8,210.7L697.7,212.7L695.8,212.3L692.1,208.3L693.5,207.1L692.6,205.8L689.4,203L691.2,200.7L697.3,200.8L696.8,197.9L695.2,196.2L694.9,193.7L693.1,192.2L696.2,188.7L699.4,189L702.3,185.5L704,182.1L706.7,178.8L706.7,176.5L709.1,174.6L706.8,172.9L705.8,170.7L704.9,167.8L706.2,166.3L710.4,167.2L713.5,166.7L716.2,163.9L719.2,167.8L718.9,170.5L720,172.2L719.9,173.8L717.9,173.4L718.7,177.1L721.4,179.1L725.3,181.5L723.5,183L722.5,186.1L725.2,187.3L727.8,188.9L731.4,190.8L735.2,191.2L736.8,192.9L739,193.2L742.3,194L744.6,193.9L744.9,192.6L744.6,190.5L744.8,189.1L746.5,188.4L746.7,191L746.8,191.7L749.3,192.9L751,192.4L753.4,192.6L755.6,192.5L755.8,190.5L754.7,189.4L757,189L759.5,186.6L762.7,184.5L765,185.3L767,183.9L768.3,185.9L767.4,187.3L770.4,187.8ZM757.4,208.4L757.4,210.8L756.4,210.3L756.6,213L755.8,211.2L755.6,209.5L755.1,207.9L753.9,206L751.4,205.9L751.6,207.3L750.8,209.1L749.6,208.4L749.2,209L748.4,208.7L747.3,208.4L746.9,205.6L745.9,203.2L746.4,201.2L744.7,200.3L745.3,199.1L747,197.8L745,196.1L746,193.8L748.2,195.3L749.5,195.4L749.8,197.7L752.4,198.2L755,198.1L756.6,198.7L755.3,201.5L754.1,201.7L753.2,203.6L754.7,205.3L755.2,203.2L756,203.2L757.4,208.4ZM754.7,189.4L755.8,190.5L755.6,192.5L753.4,192.6L751,192.4L749.3,192.9L746.8,191.7L746.7,191L748.5,188.5L750,187.7L752,188.5L753.5,188.6L754.7,189.4ZM744.8,189.1L744.6,190.5L744.9,192.6L744.6,193.9L742.3,194L739,193.2L736.8,192.9L735.2,191.2L731.4,190.8L727.8,188.9L725.2,187.3L722.5,186.1L723.5,183L725.3,181.5L726.5,180.7L728.7,181.7L731.5,183.8L733.1,184.3L734,185.9L736.1,186.6L738.4,188L741.5,188.8L744.8,189.1ZM716.2,163.9L713.5,166.7L710.4,167.2L706.2,166.3L704.9,167.8L705.8,170.7L706.8,172.9L709.1,174.6L706.7,176.5L706.7,178.8L704,182.1L702.3,185.5L699.4,189L696.2,188.7L693.1,192.2L694.9,193.7L695.2,196.2L696.8,197.9L697.3,200.8L691.2,200.7L689.4,203L687.3,202.1L686.5,199.7L684.4,197.2L679.3,197.8L674.7,197.9L670.8,198.4L671.9,194.5L675.9,192.8L675.6,191.3L674.3,190.7L674.2,187.8L671.6,186.4L670.5,184.4L669.1,182.6L673.7,184.3L676.5,183.8L678.2,184.3L678.8,183.5L680.7,183.8L684.3,182.4L684.4,179.6L685.9,177.7L688,177.8L688.3,176.8L690.4,176.4L691.5,176.7L692.5,175.8L692.4,173.8L693.6,171.8L695.3,171L694.3,168.8L696.9,168.9L697.7,167.7L697.5,166.4L698.9,165L698.6,163.4L698,162L699.6,160.5L702.6,159.8L705.7,159.4L707.2,158.8L708.8,158.5L710.8,160L711.6,162.5L716.2,163.9ZM684.8,157.7L686.3,157.7L688.4,158.4L689.3,158.8L691.3,157.8L692.2,158.4L693.1,156.9L694.8,156.9L695.2,156.5L695.5,155.1L696.7,154L698.2,154.7L697.9,155.7L698.7,155.9L698.5,158.7L699.6,159.8L700.5,159.1L701.8,158.7L703.5,157.3L705.4,157.5L708.3,157.5L708.8,158.5L707.2,158.8L705.7,159.4L702.6,159.8L699.6,160.5L698,162L698.6,163.4L698.9,165L697.5,166.4L697.7,167.7L696.9,168.9L694.3,168.8L695.3,171L693.6,171.8L692.4,173.8L692.5,175.8L691.5,176.7L690.4,176.4L688.3,176.8L688,177.8L685.9,177.7L684.4,179.6L684.3,182.4L680.7,183.8L678.8,183.5L678.2,184.3L676.5,183.8L673.7,184.3L669.1,182.6L671.6,179.6L671.4,177.5L669.3,176.9L669.1,174.8L668.2,172.2L669.3,170.4L668.1,169.9L668.9,167.5L670,163.4L672.9,164.6L675,164.2L675.5,162.7L677.7,162.2L679.3,161.2L679.9,158.5L682.2,157.9L682.6,156.7L683.9,157.6L684.8,157.7ZM688.4,158.4L690,155.1L689.4,152.6L687.3,151.8L688.1,150.4L690.4,150.5L691.7,148.7L692.6,146.6L696.3,145.8L695.7,147.3L696.1,148.2L697.3,148.2L696.2,149.2L693.2,148.6L693,150.5L696,150.3L699.4,151.4L704.7,150.8L705.4,153.9L706.3,153.6L708,154.3L707.9,155.6L708.3,157.5L705.4,157.5L703.5,157.3L701.8,158.7L700.5,159.1L699.6,159.8L698.5,158.7L698.7,155.9L697.9,155.7L698.2,154.7L696.7,154L695.5,155.1L695.2,156.5L694.8,156.9L693.1,156.9L692.2,158.4L691.3,157.8L689.3,158.8L688.4,158.4ZM697.1,141.5L697.7,140L699.6,139.5L704.1,140.7L704.6,138.7L706.1,138L710.1,139.4L711.1,139.1L715.7,139.2L719.8,139.5L721.2,140.7L722.9,141.2L722.6,141.9L718.2,143.7L717.2,145L713.6,145.4L712.6,147.5L709.6,147.1L707.7,147.8L705.1,149.3L705.4,150.1L704.7,150.8L699.4,151.4L696,150.3L693,150.5L693.2,148.6L696.2,149.2L697.3,148.2L699.4,148.5L702.9,146.1L699.6,144.4L697.7,145.2L695.6,143.9L697.9,141.8L697.1,141.5ZM645.8,143.1L647.1,142L650.2,141.3L652.1,142.2L654,144.8L655.5,144.6L658.6,144.6L658.1,142.9L660.5,141.8L662.9,139.9L666.6,141.6L666.9,144.2L668,144.9L671,144.8L671.9,145.4L673.3,148.8L676.4,151.1L678.3,152.6L681.2,154.3L684.9,155.7L684.8,157.7L683.9,157.6L682.6,156.7L682.2,157.9L679.9,158.5L679.3,161.2L677.7,162.2L675.5,162.7L675,164.2L672.9,164.6L670,163.4L669.8,160.6L667.7,160.5L664.5,157.5L662.3,157.2L659.3,155.5L657.3,155.2L656.1,155.8L654.2,155.7L652.2,157.6L649.8,158.2L649.3,155.9L649.7,152.4L647.5,151.3L648.2,149L646.4,148.9L647,146.1L649.6,146.9L652,145.8L650,143.8L649.2,141.9L647,142.8L646.7,145.2L645.8,143.1ZM634.9,182.3L633.4,180.6L633.3,178.8L632.5,178.8L632.9,176.4L631.5,173.9L628.1,172.1L626.2,168.9L626.8,166.4L628.2,165.2L628,163.3L626.2,162.3L624.4,158.3L622.8,155.7L623.4,154.7L622.5,150.9L624.4,149.9L624.9,151.2L626.3,152.7L628.2,153.1L629.2,153L632.5,150.6L633.5,150.3L634.3,151.3L633.4,153L635.1,154.7L635.8,154.5L636.7,157L639.3,157.7L641.2,159.3L645.2,159.9L649.5,159L649.8,158.2L652.2,157.6L654.2,155.7L656.1,155.8L657.3,155.2L659.3,155.5L662.3,157.2L664.5,157.5L667.7,160.5L669.8,160.6L670,163.4L668.9,167.5L668.1,169.9L669.3,170.4L668.2,172.2L669.1,174.8L669.3,176.9L671.4,177.5L671.6,179.6L669.1,182.6L670.5,184.4L671.6,186.4L674.2,187.8L674.3,190.7L675.6,191.3L675.9,192.8L671.9,194.5L670.8,198.4L665.6,197.4L662.6,196.6L659.4,196.2L658.3,192.1L656.9,191.5L654.8,192.1L652,193.7L648.6,192.6L645.8,190.1L643.1,189.1L641.3,186L639.2,181.6L637.7,182.1L635.9,181L634.9,182.3ZM599.2,173.1L599.5,172.6L599.5,171.2L600.2,169.4L601.7,168.2L601.2,166.9L600,166.7L599.7,164.2L600.4,162.8L601.2,162.1L601.9,161.3L602.1,159.5L603,160.1L606,159.2L607.5,159.8L609.8,159.8L613,158.6L614.5,158.7L617.6,158.1L616.2,160.2L614.7,161L615,163.4L613.9,167.4L607.8,170.9L602.3,174.4L599.2,173.1ZM629.2,153L628.2,153.1L627,151.2L627.1,150.7L625.8,150.7L625,149.8L624.4,149.9L623.3,148.9L621.3,148.1L621.5,146.5L621.1,145.4L624.9,144.8L625.5,145.7L626.6,146.3L626,147.1L627.5,148.2L626.7,149.3L627.9,150.2L629.1,150.7L629.2,153ZM530.6,86.5L531.9,84.6L534.2,82.4L535.1,78.5L533.3,76.8L533.1,72.4L534.9,69.3L537.7,69.4L538.7,68L537.7,66.9L542,62.3L544.7,58.6L546.6,56.2L549.2,56.2L550,54.4L555.2,54.9L555.6,52.7L557.3,52.6L561.1,54.2L565.4,56.5L565.5,61.6L566.4,62.9L561.6,63.8L558.9,66.1L559.4,68.1L554.9,70.8L549.6,73.7L547.6,78.3L549.5,80.7L552.2,82.5L549.6,86.2L546.7,87L545.7,92.6L544.1,95.7L540.7,95.3L539.2,98L536,98.1L535.1,95L532.7,91.2L530.6,86.5ZM578.3,95.4L581.2,96.3L581.6,97.1L583,96.7L585.8,97.5L586,99L585.4,99.9L587.2,102.1L588.3,102.7L588.1,103.3L590,103.9L590.8,104.8L589.7,105.5L587.5,105.4L587,105.7L587.6,106.8L588.3,108.9L585.9,109.1L585.1,109.8L584.9,111.5L583.8,111.2L581.3,111.3L580.5,110.6L579.5,111.1L578.4,110.7L576.3,110.6L573.2,109.8L570.4,109.5L568.2,109.6L566.7,110.5L565.4,110.6L565.3,109.2L564.4,107.6L566.1,107L566.1,105.6L565.4,104.4L565.2,102.9L567.9,102.9L570.9,101.7L571.6,99.8L573.9,98.8L573.6,97.3L575.3,96.7L578.3,95.4ZM588.3,108.9L589.3,109L590,108.3L590.9,108.5L593.8,108.1L595.5,110L594.8,110.7L595.1,111.7L597.3,111.9L598.3,113.3L598.2,114L601.7,115.1L603.9,114.6L605.6,116.1L607.2,116.1L611.3,117.2L611.3,118.2L610.2,119.9L610.8,121.7L610.4,122.8L607.7,123.1L606.3,124L606.2,125.5L604,125.7L602.1,126.8L599.5,127L597.1,128.2L597.3,130L596.5,129.2L595.6,129.1L593.6,128.4L592.9,129.2L592.5,128.8L588.2,128L588,126.8L585.4,127.2L584.4,129L582.2,131.4L581,130.9L579.7,131.4L578.4,130.8L579.1,130.4L579.6,129.3L580.4,128.2L580.2,127.7L580.8,127.4L581,127.8L582.7,127.9L583.4,127.7L582.9,127.4L583.1,126.9L582.1,126L581.7,124.6L580.7,124.1L580.9,123L579.6,122.1L578.5,122L576.5,120.9L574.6,121.3L573.9,121.8L572.8,121.8L572.1,122.5L570,122.8L569.1,123.4L567.8,122.5L566,122.5L564.3,122.2L563.1,122.9L562.9,122L561.3,121.1L561.9,119.8L562.7,118.9L563.3,119.1L562.6,117.6L565.1,114.8L566.5,114.5L566.7,113.5L565.4,110.6L566.7,110.5L568.2,109.6L570.4,109.5L573.2,109.8L576.3,110.6L578.4,110.7L579.5,111.1L580.5,110.6L581.3,111.3L583.8,111.2L584.9,111.5L585.1,109.8L585.9,109.1L588.3,108.9ZM565.2,102.9L565.4,104.4L566.1,105.6L566.1,107L564.4,107.6L565.3,109.2L565.4,110.6L566.7,113.5L566.5,114.5L565.1,114.8L562.6,117.6L563.3,119.1L562.7,118.9L560,117.6L558,118.1L556.7,117.7L555.1,118.5L553.7,117.3L552.5,117.7L551.1,115.9L549,115.7L548.8,114.7L546.9,114.3L546.4,115.1L544.9,114.5L545.1,113.6L543,113.3L541.7,112.2L540.6,110.1L540.8,108.9L540.1,107.2L539.1,106L539.9,105.1L539.2,103.4L541.1,102.5L545.5,100.9L549,99.8L551.7,100.4L551.9,101.2L554.6,101.2L558,101.6L563.1,101.5L564.6,101.9L565.2,102.9ZM547.2,122.1L547,123.4L545.4,123.4L545.9,124.2L545,126.3L544.5,126.8L542,126.9L540.6,127.7L538.4,127.4L534.4,126.6L533.8,125.4L531,126L530.7,126.6L529,126.1L527.6,126.1L526.3,125.5L526.8,124.6L526.7,124.1L527.5,123.9L528.9,124.8L529.3,123.9L531.7,124.1L533.7,123.5L535.1,123.6L535.9,124.2L536.2,123.7L535.8,121.5L536.8,121.1L537.8,119.6L539.8,120.6L541.4,119.3L542.4,119L544.5,120.1L545.8,119.9L547.1,120.5L547.2,122.1ZM561.3,121.1L562.9,122L563.1,122.9L561.4,123.6L560.1,125.8L558.4,128.1L556.2,128.7L554.4,128.5L552.3,129.4L551.3,129.9L549,129.3L546.9,127.8L546,127.4L545.5,126.3L545.9,124.2L545.4,123.4L547,123.4L547.2,122.1L548.6,122.9L549.6,123.3L551.9,122.9L552.2,122.2L553.3,122.1L554.6,121.6L556.2,121.4L556.9,120.6L557.8,120.4L560.8,121.4L561.3,121.1ZM573.9,121.8L574.6,121.3L576.5,120.9L578.5,122L579.6,122.1L580.9,123L580.7,124.1L581.7,124.6L582.1,126L583.1,126.9L582.9,127.4L583.4,127.7L582.7,127.9L581,127.8L580.8,127.4L580.2,127.7L580.4,128.2L579.6,129.3L579.1,130.4L578.4,130.8L577.9,129.3L578.2,127.9L578.1,126.4L576.5,124.5L575.6,123.1L574.8,122.1L573.9,121.8ZM578.4,130.8L579.7,131.4L581,130.9L582.2,131.4L582.3,132.3L580.9,133L580.1,132.7L579.3,136.7L577.7,136.3L575.7,135.1L572.4,135.9L571,136.8L566.9,136.6L564.8,136.1L563.7,136.3L562.9,134.9L562.4,134.4L563.1,133.8L562.4,133.4L561.5,134.1L559.9,133.2L559.7,131.8L558,131L557.7,130L556.2,128.7L558.4,128.1L560.1,125.8L561.4,123.6L563.1,122.9L564.3,122.2L566,122.5L567.8,122.5L569.1,123.4L570,122.8L572.1,122.5L572.8,121.8L573.9,121.8L574.8,122.1L575.6,123.1L576.5,124.5L578.1,126.4L578.2,127.9L577.9,129.3L578.4,130.8ZM573.6,97.3L573.9,98.8L571.6,99.8L570.9,101.7L567.9,102.9L565.2,102.9L564.6,101.9L563.1,101.5L562.9,100.7L563.2,99.8L562,99.3L559.1,98.7L558.5,95.9L561.7,94.9L566.3,95.1L569.1,94.8L569.4,95.5L570.9,95.7L573.6,97.3ZM575.8,91.1L577.1,91.9L577.4,93.5L578.3,95.4L575.3,96.7L573.6,97.3L570.9,95.7L569.4,95.5L569.1,94.8L566.3,95.1L561.7,94.9L558.5,95.9L558.6,93.4L559.9,91.3L562.6,90.2L564.8,92.7L567,92.6L567.5,90.1L569.9,89.5L571.1,89.9L573.5,91.1L575.8,91.1ZM577.7,84.5L578.1,85.1L576.2,87L577,90.1L575.8,91.1L573.5,91.1L571.1,89.9L569.9,89.5L567.5,90.1L567.9,88.1L566.8,88.5L565.1,87.4L564.8,85.4L568.3,84.5L571.8,84L574.9,84.6L577.7,84.5L577.7,84.5ZM539.2,103.4L539.9,105.1L539.1,106L540.1,107.2L540.8,108.9L540.6,110.1L541.7,112.2L540.5,112.5L539.7,112.2L539,112.8L537.1,113.4L536,114.3L534,115L534.5,116L534.8,117.4L536.2,118.2L537.8,119.6L536.8,121.1L535.8,121.5L536.2,123.7L535.9,124.2L535.1,123.6L533.7,123.5L531.7,124.1L529.3,123.9L528.9,124.8L527.5,123.9L526.7,124.1L523.7,123L523.1,123.8L520.7,123.7L521.1,121.4L522.5,119.1L518.5,118.5L517.2,117.6L517.3,116.2L516.8,115.4L517.1,113.2L516.6,109.7L518.3,109.7L519,108.5L519.7,105.5L519.2,104.3L519.7,103.6L522,103.5L522.6,104.2L524.4,102.6L523.8,101.3L523.7,99.4L525.8,99.9L527.6,99.4L527.6,100.6L530.4,101.4L530.4,102.6L533.2,102L534.8,101.1L537.9,102.4L539.2,103.4ZM562.9,134.9L563.7,136.3L564.8,136.1L566.9,136.6L571,136.8L572.4,135.9L575.7,135.1L577.7,136.3L579.3,136.7L577.9,138.1L576.9,140.4L577.8,142.3L575.4,141.9L572.5,142.9L572.5,144.6L570,144.9L568,143.7L565.8,144.6L563.8,144.5L563.6,142.3L562.2,141.3L562.6,140.8L562.8,139.4L563.9,138.3L562.5,136.9L562.3,135.7L562.9,134.9ZM573,164.5L572.7,165.5L568.7,165.8L568.7,165.2L565.3,164.6L565.8,163.2L567.4,164.3L569.5,164.1L571.6,164.3L571.5,164.9L573,164.5ZM563.8,144.5L565.8,144.6L568,143.7L570,144.9L572.5,144.6L572.5,142.9L573.9,143.8L573,145.9L572.4,146.2L570.7,146.1L569.2,145.8L565.9,146.7L567.8,148.6L566.4,149.1L564.8,149.1L563.4,147.4L562.9,148.1L563.5,150.1L564.9,151.6L563.8,152.4L565.4,153.9L566.7,154.9L566.8,156.7L564.2,155.9L565,157.5L563.3,157.9L564.3,160.8L562.5,160.8L560.2,159.4L559.2,156.8L558.7,154.6L557.6,153L556.2,151.1L556,150.2L557.3,148.6L557.4,147.5L558.3,147L558.4,146.2L560.2,145.9L561.3,145.2L562.8,145.2L563.2,144.6L563.8,144.5ZM624.4,158.3L623,158.9L622.1,158L618.8,157.6L617.6,158.1L614.5,158.7L613,158.6L609.8,159.8L607.5,159.8L606,159.2L603,160.1L602.1,159.5L601.9,161.3L601.2,162.1L600.4,162.8L599.4,161.3L600.4,160.1L598.8,160.3L596.4,159.6L594.5,161.5L590.3,161.9L588.1,160.1L585.1,160L584.4,161.3L582.5,161.7L579.8,160L576.8,160L575.1,156.7L573.1,154.9L574.5,152.3L572.7,150.7L575.8,147.6L580.1,147.4L581.2,144.9L586.5,145.4L589.9,143.2L593.1,142.3L597.7,142.2L602.5,144.5L606.5,145.8L609.8,145.3L612.1,145.6L615.4,143.9L618.4,143.7L621.1,145.4L621.5,146.5L621.3,148.1L623.3,148.9L624.4,149.9L622.5,150.9L623.4,154.7L622.8,155.7L624.4,158.3L624.4,158.3ZM572.5,142.9L575.4,141.9L577.8,142.3L578.1,143.6L580.5,144.7L580,145.5L576.7,145.7L575.5,146.7L573.2,148.5L572.3,146.9L572.4,146.2L573,145.9L573.9,143.8L572.5,142.9ZM558.4,146.2L558.3,147L557.4,147.5L557.3,148.6L556,150.2L555.5,150L555.4,149.2L553.9,148.1L553.7,146.6L553.9,144.3L554.3,143.3L553.8,142.8L553.6,141.7L554.8,140.1L555,140.7L555.8,140.4L556.3,141.3L557,141.6L557.2,142.8L556.8,144L557.2,145.4L558.4,146.2ZM546,127.4L546.9,127.8L549,129.3L551.3,129.9L552.3,129.4L553,130.7L553.9,131.6L552.8,132.9L551.5,132.1L549.6,132.2L547.2,131.6L545.9,131.7L545.3,132.4L544.3,131.6L543.8,133L545.1,134.6L545.7,135.6L547,136.8L548,137.6L549.1,138.9L551.6,140.2L551.3,140.8L548.6,139.5L547,138.3L544.5,137.4L542.2,134.9L542.7,134.7L541.4,133.3L541.4,132.2L539.6,131.6L538.8,133.1L537.9,132L538,130.8L540,130.9L540.5,130.3L541.5,130.9L542.6,130.9L542.6,130L543.5,129.7L543.8,128.3L546,127.4ZM526.7,124.1L526.8,124.6L526.3,125.5L527.6,126.1L529,126.1L528.8,127.5L527.6,128.1L525.5,127.6L524.9,129L523.6,129.1L523.1,128.6L521.5,129.7L520.2,129.8L519,129.1L518.1,127.7L516.7,128.2L516.8,126.7L518.8,124.8L518.7,124L520,124.3L520.7,123.7L523.1,123.8L523.7,123L526.7,124.1ZM516.8,115.4L517.3,116.2L517.2,117.6L516.4,117.7L515.8,117.4L516.1,115.6L516.8,115.4ZM517.1,113.2L516.8,115.4L516.1,115.6L515.8,117.4L513.3,115.9L511.9,116.2L510,114.6L508.7,113.3L507.4,113.2L507,112.1L509.2,111.4L511.2,111.7L513.8,111L515.6,112.4L517.1,113.2ZM519.2,104.3L519.7,105.5L519,108.5L518.3,109.7L516.6,109.7L517.1,113.2L515.6,112.4L513.8,111L511.2,111.7L509.2,111.4L510.6,110.5L513.1,105.6L516.9,104.2L519.2,104.3ZM474.9,142.7L475.9,141.9L477,141.4L477.7,143L479.4,143L479.9,142.6L481.5,142.7L482.3,144.4L481,145.3L480.9,147.9L480.5,148.4L480.4,149.9L479.2,150.2L480.3,152.2L479.5,154.4L480.5,155.3L480.1,156.2L479.1,157.5L479.3,158.6L478.2,159.4L476.7,159L475.3,159.3L475.7,156.7L475.4,154.7L474.2,154.4L473.5,153.1L473.8,151L474.9,149.8L475.1,148.4L475.6,146.4L475.6,145L475,143.9L474.9,142.7ZM479.3,158.6L479.1,157.5L480.1,156.2L480.5,155.3L479.5,154.4L480.3,152.2L479.2,150.2L480.4,149.9L480.5,148.4L480.9,147.9L481,145.3L482.3,144.4L481.5,142.7L479.9,142.6L479.4,143L477.7,143L477,141.4L475.9,141.9L474.9,142.7L475,140.4L473.9,138.9L477.8,136.6L481.2,137.2L485,137.1L487.9,137.7L490.2,137.5L494.7,137.6L495.8,138.9L500.9,140.4L501.9,139.7L505.1,141.2L508.3,140.8L508.4,142.7L505.8,144.9L502.3,145.6L502,146.7L500.3,148.6L499.2,151.2L500.3,153.1L498.7,154.6L498.1,156.8L496,157.4L494,160L490.5,160L487.9,160L486.1,161.1L485.1,162.4L483.7,162.1L482.7,161L481.9,159.1L479.3,158.6ZM482.8,103.1L483.2,105.4L481.1,108.4L476.2,110.3L472.3,109.8L474.5,106.4L473.1,103L476.9,100.4L479,98.9L479.5,100.6L479,102.4L480.7,102.4L482.8,103.1ZM960.5,351.2L962.8,353.2L964.2,354.7L963.2,355.5L961.6,354.6L959.7,353.1L957.9,351.4L956,349.1L955.6,347.9L956.8,348L958.4,349.1L959.6,350.2L960.5,351.2ZM950.3,316.1L951.1,317.2L949.2,317.2L948.1,315.2L949.8,316L950.3,316.1ZM949.1,313.2L948.7,313.8L946.6,310.9L946.1,308.9L947,308.9L948,311.6L949.1,313.2ZM946.8,314.1L945.7,314.1L944,313.8L943.4,313.3L943.6,312L945.5,312.5L946.4,313.2L946.8,314.1ZM943.4,307.9L944.1,309L944.2,309.6L942,308.2L940.5,307.1L939.5,305.9L939.9,305.6L941.2,306.4L943.4,307.9ZM936.5,304.6L937.6,305.7L937.1,305.9L935.8,305.1L934.7,303.8L934.8,303.2L936.5,304.6ZM991.3,414L990.3,415.8L988.9,418.1L986.8,419.4L986.3,418.5L985.1,418L986.7,415.3L985.8,413.5L982.8,412.2L982.9,411L984.9,409.8L985.4,407.3L985.3,405.1L984.1,402.9L984.2,402.3L982.9,401L980.7,398L979.5,395.7L980.6,395.4L982.1,397.3L984.2,398.1L985,401.1L987,404.6L987.1,402.3L988.4,403.2L988.8,405.7L991,406.8L992.9,407L994.5,405.8L995.9,406.2L995.2,409.1L994.4,411L992.2,411L991.5,412L991.8,413.4L991.3,414ZM971.3,425.6L973.7,423.8L975.3,422.1L976.6,419.6L977.6,418.8L978,417L980,415.4L980.6,416.8L981.2,418.2L983.2,416.9L984,418.3L984,419.7L983,421.2L981.2,423.6L979.8,425L980.8,426.5L978.6,426.6L976.3,427.8L975.5,430L973.9,433.4L971.8,434.8L970.4,435.8L967.8,435.7L966,434.6L963,434.4L962.5,433.2L964,430.7L967.5,427.4L969.3,426.8L971.3,425.6ZM910.2,416.5L911.9,416.7L912.1,420.6L911.2,421.8L910.9,424.4L909.9,423.5L908,425.8L907.4,425.6L905.7,425.5L904,422.7L903.6,420.5L902,417.6L902.1,416.1L903.9,416.4L906.6,417.6L908.1,417.1L910.2,416.5ZM850.4,388L847.5,389.7L845.1,390.5L844.5,392.2L843.5,393.6L841.1,393.6L839.4,393.9L836.9,393.3L834.9,393.7L833,393.9L831.4,395.6L830.6,395.5L829.2,396.4L827.8,397.5L825.8,397.3L824,397.3L821,395.2L819.5,394.6L819.6,392.7L821,392.2L821.4,391.5L821.3,390.3L821.7,388L821.4,386L819.9,382.7L819.4,380.8L819.6,378.9L818.4,376.8L818.4,375.8L817.1,374.5L816.8,371.9L815.2,369.2L814.8,367.8L816.1,369.3L815.1,366.2L816.5,367.2L817.3,368.4L817.3,366.7L815.9,364.1L815.6,363.1L815,362.1L815.3,360.2L815.9,359.4L816.2,357.7L815.9,355.8L817.1,353.4L817.3,355.9L818.5,353.6L820.7,352.5L822.1,351.1L824.2,349.9L825.5,349.7L826.2,350.1L828.4,348.8L830.1,348.5L830.5,347.7L831.3,347.4L832.8,347.5L835.7,346.5L837.2,345.1L837.9,343.3L839.6,341.6L839.7,340.3L839.8,338.5L841.7,335.7L842.9,338.5L844.1,337.9L843.1,336.3L843.9,334.7L845.2,335.4L845.5,332.9L847,331.3L847.7,330L849.1,329.4L849.1,328.5L850.3,328.9L850.4,328L851.6,327.6L853,327.1L855,328.6L856.6,330.6L858.3,330.6L860.1,330.9L859.5,329.1L860.8,326.5L862.1,325.6L861.6,324.8L862.8,322.9L864.5,321.7L865.9,322.1L868.3,321.5L868.2,319.8L866.2,318.7L867.7,318.2L869.5,319L871,320.4L873.3,321.2L874.1,320.9L875.8,321.9L877.5,321L878.5,321.3L879.1,320.6L880.4,322.3L879.7,324L878.6,325.4L877.7,325.5L878,326.8L877.2,328.5L876.2,330.1L876.4,331L878.6,332.9L880.7,333.9L882.2,335.1L884.2,337L885,337L886.4,337.9L886.8,338.9L889.5,340L891.3,338.9L891.9,337.1L892.4,335.6L892.8,333.8L893.6,331.2L893.2,329.6L893.4,328.6L893.1,326.7L893.5,324.2L894,323.6L893.6,322.5L894.2,320.7L894.8,318.9L894.8,317.9L895.9,316.7L896.7,318.3L896.9,320.4L897.5,320.8L897.7,322.2L898.7,323.9L898.9,325.7L898.8,326.9L899.8,329.5L901.6,328.3L902.5,329.7L903.8,331L903.5,332.5L904.1,335.3L904.5,336.9L905.2,337.3L906,340.2L905.7,341.9L906.6,344.1L909.6,345.9L911.6,347.4L913.5,348.9L913.1,349.7L914.7,351.8L915.8,355.3L916.9,354.6L918,356L918.7,355.5L919.2,359L921.1,361.1L922.4,362.3L924.6,365L925.4,367.7L925.4,369.6L925.3,371.6L926.6,374.4L926.4,377.4L925.9,378.9L925.2,381.8L925.2,383.7L924.7,386.1L923.5,389.1L921.4,390.8L920.4,393.3L919.5,395L918.7,397.8L917.6,399.5L916.9,401.9L916.5,404.2L916.7,405.3L915.1,406.4L912,406.5L909.4,407.9L908.1,409.2L906.4,410.6L904.1,409.1L902.4,408.6L902.9,406.8L901.3,407.5L898.9,409.9L896.5,409L894.9,408.4L893.4,408.2L890.7,407.2L888.9,405.2L888.4,402.7L887.7,401L886.3,399.7L883.7,399.3L884.6,397.7L883.9,395.2L882.6,397.5L880.1,398.1L881.5,396.3L882,394.4L883,392.7L882.8,390.3L880.5,393.1L878.8,394.2L877.7,396.9L875.6,395.5L875.7,393.8L873.9,391.4L872.5,390.1L873,389.4L869.4,387.3L867.5,387.3L864.8,385.6L859.8,386L856.2,387.1L853.1,388.2L850.4,388ZM727.2,256.5L726.8,259.9L725.6,260.9L723.2,261.6L721.9,259L721.4,254.2L722.6,248.9L724.6,250.7L725.8,253L727.2,256.5ZM804.1,221.1L801.8,220.1L801.7,217.3L803.1,215.8L806.1,214.8L807.7,214.9L808.4,216.2L807.1,217.6L806.5,219.5L804.1,221.1ZM722.9,141.2L722.7,139.3L724.6,138.4L722.1,132.7L727.6,131.4L729.1,130.6L731.1,124.7L736.6,125.8L738.1,124.3L738.2,121L740.6,120.7L742.7,118.5L743.8,118.2L744.5,120.5L746.8,122.3L750.8,123.5L752.7,126.2L751.6,130L752.6,131.5L755.9,132L759.7,132.5L763,134.6L764.7,134.9L766,138L767.6,139.9L770.7,139.9L776.4,140.6L780.1,140.1L782.9,140.6L787,142.7L790.3,142.6L791.6,143.7L794.8,141.9L799.3,140.8L803.5,140.6L806.7,139.5L808.7,137.7L810.6,136.6L810.2,135.5L809.3,134.2L810.8,132.1L812.3,132.4L815.2,133L817.9,131.3L822.2,130L824.2,127.8L826.2,126.9L830.2,126.4L832.4,126.8L832.7,125.6L830.2,123.3L828,122.3L825.8,123.5L823.1,123L821.5,123.4L820.8,122L822.8,118.7L824.1,116.2L827.4,117.5L831.4,115.4L831.3,113.9L833.8,110.4L835.4,109.4L835.3,107.5L833.8,106.7L836.1,105.1L839.6,104.5L843.3,104.4L847.4,105.4L849.9,106.6L851.6,110L852.6,111.4L853.6,113.4L854.6,116.7L859.4,117.7L862.7,120.1L863.9,123.2L868.1,123.2L870.5,121.9L875.1,120.9L873.6,123.9L872.5,125.1L871.6,128.7L869.7,131.9L866.3,131.4L864,132.5L864.7,135.4L864.3,139.3L862.9,139.4L862.9,141L861.1,139.1L860,140.9L855.7,142.4L856.1,144.1L853.7,144L852.4,143L850.5,145.3L847.4,147.1L845.2,149.2L841.3,150.2L839.3,151.7L836.3,152.6L837.7,151.1L837.2,149.8L839.4,147.6L837.9,145.8L835.5,147L832.3,149.3L830.6,151.4L827.9,151.6L826.5,153.1L827.9,155.4L830.2,155.9L830.3,157.4L832.5,158.4L835.6,156L838.1,157.3L839.9,157.4L840.3,159.1L836.4,160.1L835.1,161.8L832.4,163.5L831,165.8L834,167.6L835.1,170.9L836.7,173.9L838.6,176.5L838.6,178.9L836.8,179.8L837.5,181.6L839.1,182.6L838.7,185.3L838,187.9L836.5,188.2L834.4,191.8L832.2,196.2L829.6,200.1L825.8,203.2L821.9,206L818.8,206.3L817.1,207.8L816.1,206.7L814.6,208.4L810.7,210L807.7,210.5L806.8,214L805.2,214.2L804.5,211.8L805.2,210.6L801.5,209.5L800.1,210L797.3,209.2L796,207.8L796.5,205.9L793.9,205.3L792.6,204.1L790.2,205.8L787.5,206.2L785.3,206.2L783.8,207L782.4,207.5L782.8,211.3L781.3,211.2L781.1,210.4L781,209L778.9,210L777.7,209.4L775.7,208.2L776.5,205.4L774.7,204.8L774.1,201.7L771.1,202.3L771.5,198.3L774.1,195.6L774.2,192.8L774.1,190.3L772.9,189.5L772,187.6L770.4,187.8L767.4,187.3L768.3,185.9L767,183.9L765,185.3L762.7,184.5L759.5,186.6L757,189L754.7,189.4L753.5,188.6L752,188.5L750,187.7L748.5,188.5L746.7,191L746.5,188.4L744.8,189.1L741.5,188.8L738.4,188L736.1,186.6L734,185.9L733.1,184.3L731.5,183.8L728.7,181.7L726.5,180.7L725.3,181.5L721.4,179.1L718.7,177.1L717.9,173.4L719.9,173.8L720,172.2L718.9,170.5L719.2,167.8L716.2,163.9L711.6,162.5L710.8,160L708.8,158.5L708.3,157.5L707.9,155.6L708,154.3L706.3,153.6L705.4,153.9L704.7,150.8L705.4,150.1L705.1,149.3L707.7,147.8L709.6,147.1L712.6,147.5L713.6,145.4L717.2,145L718.2,143.7L722.6,141.9L722.9,141.2ZM838.3,200.6L836.6,205.9L835.4,208.6L833.9,205.9L833.6,203.4L835.3,200.1L837.5,197.6L838.8,198.6L838.3,200.6ZM529,126.1L530.7,126.6L531,126L533.8,125.4L534.4,126.6L538.4,127.4L538.1,129L538.7,130.5L536.5,130L534.2,131.1L534.4,132.8L534.1,133.7L535,135.4L537.6,137.1L539,139.8L542.1,142.5L544.2,142.5L544.9,143.2L544.1,143.9L546.6,145.1L548.7,146.1L551,147.8L551.3,148.4L550.8,149.6L549.3,148L546.9,147.5L545.7,149.6L547.7,150.9L547.4,152.6L546.2,152.8L544.7,155.6L543.6,155.9L543.6,154.9L544.1,153.1L544.7,152.4L543.7,150.5L542.8,148.8L541.7,148.4L540.8,147L539.1,146.4L537.9,145L535.8,144.8L533.6,143.3L531.1,141.2L529.2,139.3L528.3,136L527,135.6L524.7,134.5L523.4,135L521.8,136.5L520.7,136.7L521,135.3L519.5,134.9L518.7,132.3L519.7,131.3L518.9,130.1L519,129.1L520.2,129.8L521.5,129.7L523.1,128.6L523.6,129.1L524.9,129L525.5,127.6L527.6,128.1L528.8,127.5L529,126.1ZM541,155.1L543.1,154.8L542.1,157.4L542.5,158.5L541.9,160.2L539.8,158.9L538.4,158.6L534.5,156.9L534.9,155.2L538.2,155.5L541,155.1ZM524.2,146L525.6,145L527.2,147.3L526.9,151.7L525.6,151.5L524.5,152.6L523.4,151.7L523.3,147.7L522.7,145.8L524.2,146ZM527.6,99.4L525.8,99.9L523.7,99.4L522.6,97.6L522.5,94.2L522.9,93.3L523.7,92.3L526.2,92.1L527.2,91.2L529.4,90.3L529.3,92L528.5,93.1L528.8,94L530.3,94.5L529.6,95.7L528.8,95.4L526.8,97.8L527.6,99.4ZM534.4,95.6L535.3,97.3L533.6,100L530.7,98.1L530.3,96.7L534.4,95.6ZM482.8,103.1L480.7,102.4L479,102.4L479.5,100.6L479,98.9L481.3,98.7L484.3,100.8L482.8,103.1ZM491.4,104.6L491.8,102.7L490,100.6L486.5,100L485.9,99.1L486.9,97.6L486,96.7L484.5,98.3L484.3,95.1L482.9,93.4L483.9,90L486.1,87.3L488.3,87.6L491.7,87.3L488.7,90.9L491.5,90.4L494.6,90.4L493.8,93.1L491.3,96.1L494.2,96.3L496.9,100.6L498.8,101.1L500.5,104.9L501.3,106.2L504.7,106.8L504.3,108.9L502.9,109.9L504,111.6L501.5,113.3L497.8,113.3L493.1,114.2L491.8,113.6L490,115.1L487.4,114.7L485.4,116L484,115.3L488,111.9L490.5,111.1L486.2,110.6L485.4,109.3L488.3,108.2L486.7,106.5L487.3,104.3L491.4,104.6ZM459.7,61.4L459.1,63.5L462.2,65.8L458.6,68.3L450.6,70.6L448.2,71.2L444.5,70.7L436.8,69.6L439.5,68.2L433.5,66.6L438.4,65.9L438.3,65L432.4,64.2L434.3,62L438.5,61.5L442.8,63.8L447.1,62L450.6,62.9L455.1,61.2L459.7,61.4ZM628.9,142.8L629.7,142.9L631.6,144.9L632.8,145.2L633.3,144.3L635,143L636.4,144.7L637.8,147.1L639.1,147.2L640,148.1L637.7,148.4L637.2,151L636.7,152.1L635.7,152.9L635.8,154.5L635.1,154.7L633.4,153L634.3,151.3L633.5,150.3L632.5,150.6L629.2,153L629.1,150.7L627.9,150.2L626.7,149.3L627.5,148.2L626,147.1L626.6,146.3L625.5,145.7L624.9,144.8L625.6,144.3L627.7,145.2L629.2,145.4L629.5,145.1L628.2,143.3L628.9,142.8ZM628.2,153.1L626.3,152.7L624.9,151.2L624.4,149.9L625,149.8L625.8,150.7L627.1,150.7L627,151.2L628.2,153.1ZM611,137.6L611.3,137.2L613.7,137.8L617.8,138.3L621.5,139.9L622,140.5L623.7,140L626.3,140.7L627.2,142L628.9,142.8L628.2,143.3L629.5,145.1L629.2,145.4L627.7,145.2L625.6,144.3L624.9,144.8L621.1,145.4L618.4,143.7L615.4,143.9L615.8,142.5L615.1,140.2L613.5,139L612,138.6L611,137.6ZM835.6,239.3L834.2,236.8L836.6,236.9L837.6,238.1L836.8,241L835.6,239.3ZM840.5,248.3L841.2,247.4L841.5,245.4L843.1,245.2L842.6,247.4L844.7,244.2L844.4,247.4L843.4,248.4L842.5,250.5L841.7,251.5L839.9,249.2L840.5,248.3ZM851,253.5L851.3,255.7L851.5,257.6L850.5,260.6L849.5,257.2L848.2,258.9L849.1,261.4L848.3,262.9L845.1,261L844.3,258.6L845.1,257L843.4,255.4L842.5,256.8L841.2,256.7L839.1,258.5L838.7,257.6L839.8,254.8L841.5,253.8L843,252.6L844,254.1L846.1,253.2L846.6,251.7L848.5,251.6L848.4,249.1L850.6,250.6L850.9,252.3L851,253.5ZM829.2,250.5L825.5,253.7L826.8,251.4L828.9,249.3L830.5,247L832,243.7L832.5,246.4L830.6,248.3L829.2,250.5ZM839.8,221L839.4,222.4L840.3,224.8L839.6,227.5L838,228.6L837.5,231.3L838.1,233.9L839.6,234.3L840.8,233.9L844.3,235.8L844,237.6L844.9,238.4L844.7,239.9L842.5,238.3L841.5,236.5L840.8,237.7L839,235.7L836.5,236.2L835.1,235.5L835.2,234.1L836.1,233.3L835.3,232.5L834.9,233.7L833.5,231.8L833.1,230.4L833,227.2L834.1,228.3L834.4,223.1L835.3,220.1L837,220.1L838.7,221.1L839.6,220.2L839.8,221ZM839,243.6L838.6,242L840.2,243L842,243L841.9,244.4L840.7,245.8L838.9,246.8L838.8,245.3L839,243.6ZM848.6,241.1L849.4,244.8L847.3,243.9L847.3,245L848,247.1L846.7,247.8L846.6,245.5L845.7,245.3L845.3,243.3L846.9,243.6L846.9,242.3L845.2,239.8L847.9,239.9L848.6,241.1ZM778,260L778.5,259.4L780.8,260.8L781,262.5L782.8,262.1L783.7,260.8L784.4,261.1L786,263.1L787.2,265.3L787.3,267.5L787,269L787.3,270.2L787.5,272.1L788.5,273.1L789.6,276L789.5,277.1L787.6,277.3L784.9,274.9L781.6,272.2L781.3,270.6L779.7,268.3L779.3,265.6L778.3,263.8L778.6,261.4L778,260ZM827.5,267.7L825,267.1L821.8,267.1L820.9,270.9L819.8,272L818.4,276.6L816.1,277.3L813.5,276.4L812.2,276.7L810.5,278.4L808.8,278.1L807,278.8L805.1,276.9L804.6,274.7L806.7,275.9L808.8,275.3L809.4,272.5L810.5,271.8L813.9,271.1L815.9,268.5L817.2,266.4L818.5,268.1L819.1,267L820.4,267.1L820.6,265L820.7,263.3L822.8,261L824.2,258.5L825.4,258.4L826.8,260.1L826.9,261.6L828.7,262.5L831.1,263.5L830.9,264.8L829,264.9L829.5,266.6L827.5,267.7ZM820.7,263.3L820.6,265L820.4,267.1L819.1,267L818.5,268.1L817.2,266.4L818.3,265.2L820.7,263.3ZM538.4,127.4L540.6,127.7L542,126.9L544.5,126.8L545,126.3L546,127.4L543.8,128.3L543.5,129.7L542.6,130L542.6,130.9L541.5,130.9L540.5,130.3L540,130.9L538.1,130.8L538.7,130.5L538.1,129L538.4,127.4ZM579.4,52.8L579,55.1L583.3,57.3L580.7,59.8L583.9,63.5L582.1,66.4L584.6,68.8L583.4,71L587.5,73.3L586.5,75L583.9,76.9L578,81.1L572.9,81.4L568,82.6L563.5,83.3L561.9,81.5L559.2,80.4L559.8,77.1L558.5,74.1L559.8,72.2L562.3,70.1L568.7,66.5L570.6,65.8L570.3,64.4L566.4,62.9L565.5,61.6L565.4,56.5L561.1,54.2L557.3,52.6L559,51.7L562.1,53.5L565.7,53.3L568.7,54.1L571.4,52.7L572.7,50.2L577,49.1L580.6,50.4L579.4,52.8ZM562.7,118.9L561.9,119.8L561.3,121.1L560.8,121.4L557.8,120.4L556.9,120.6L556.2,121.4L554.9,121.8L553.3,122.1L552.2,122.2L551.9,122.9L549.6,123.3L548.6,122.9L547.2,122.1L546.9,120.9L547.5,119.8L548.7,119.8L549.7,119.5L550.3,119L550.5,118.3L551.1,118.1L551.5,117.5L552.4,117.5L553.7,117.3L555.1,118.5L556.7,117.7L558,118.1L560,117.6L562.7,118.9ZM541.7,112.2L543,113.3L545.1,113.6L544.9,114.5L546.4,115.1L546.9,114.3L548.8,114.7L549,115.7L551.1,115.9L552.4,117.5L551.5,117.5L551.1,118.1L550.5,118.3L550.3,119L549.8,119.2L548.7,119.8L547.5,119.8L547.1,120.5L545.8,119.9L544.5,120.1L542.4,119L541.4,119.3L539.8,120.6L537.8,119.6L536.2,118.2L534.8,117.4L534.5,116L534,115L536,114.3L537.1,113.4L539,112.8L539.7,112.2L540.5,112.5L541.7,112.2ZM601.2,233.6L600.9,232.3L602.1,227.4L602.4,225.2L603.2,224.2L605.3,223.7L606.7,221.8L608.3,225.6L609.1,228.7L610.6,230.3L614.4,233.4L615.9,235.3L617.4,237.2L618.3,238.3L619.7,239.3L618.8,240.1L617.6,239.9L616.7,238.8L615.6,236.8L614.3,235.8L613.6,234.6L611.2,233.3L609.3,233.3L608.6,232.6L607,233.4L605.3,231.9L604.4,234.3L601.2,233.6ZM894.1,151.7L891.6,155L891.6,158.4L890.6,161.1L891,162.7L889.6,165.1L886,166.6L881.2,166.8L877.2,170.6L875.3,169.3L875.2,166.9L870.4,167.6L867.1,169.1L863.9,169.2L866.7,171.6L864.8,177.3L863,178.7L861.7,177.4L862.4,174.4L860.6,173.4L859.5,171.2L862.1,170.1L863.6,168.1L866.3,166.3L868.4,164.1L873.9,163.1L876.9,163.8L879.8,157.9L881.6,159.5L885.7,156.2L887.3,154.9L889,150.8L888.6,147.1L889.7,145L892.7,144.4L894.2,149L894.1,151.7ZM901.7,135.9L903.7,134.5L904.3,138.2L900.2,139.1L897.7,142.4L893.4,140.1L891.9,143.7L888.8,143.8L888.4,140.5L889.8,137.9L892.7,137.7L893.5,133.2L894.4,130.6L897.6,134L899.8,135.1L901.7,135.9ZM867.7,170.6L869.2,168.6L870.8,169L872,167.6L874,168.3L874.4,169.5L872.8,171.5L871.6,170.4L870.2,171.2L869.5,173.1L867.7,172.2L867.7,170.6ZM338.4,348.2L339.2,350L339.1,354.5L342,355.1L343.1,354.5L345,355.4L345.5,356.4L345.8,359.4L346.1,360.7L347.1,360.8L348.2,360.3L349.2,360.9L349.2,362.7L348.8,364.7L348.3,366.6L347.8,369.5L345.3,372L343.1,372.6L340,372.1L337.2,371.2L339.9,366.1L339.5,364.7L336.6,363.4L333.3,360.9L331,360.4L325.9,355L327,351.1L327,349.3L328.4,346.4L333.2,345.4L335.8,345.5L338.4,347.2L338.4,348.2ZM644.4,218.5L646.6,223.9L647.5,226.3L645.5,227.1L645,228.6L644.9,229.7L642.1,231.1L637.7,232.7L635.2,235L634,235.2L633.2,235L631.5,236.4L629.8,237L627.4,237.2L626.7,237.4L626.1,238.3L625.4,238.5L625,239.3L623.6,239.3L622.7,239.7L620.8,239.5L620.1,237.6L620.1,235.8L619.7,234.8L619.1,232.4L618.3,231L618.9,230.9L618.6,229.3L619,228.7L618.8,227.3L620.1,226.2L619.8,224.8L620.5,223.2L621.6,224L622.4,223.7L625.6,223.7L626.1,224L628.8,224.3L629.9,224.2L630.6,225.3L631.9,224.7L633.8,221.2L636.4,219.8L644.4,218.5ZM597.1,184.2L600.2,184.7L601.4,183.7L602.1,182.5L604.2,182.1L604.6,180.9L605.6,180.4L602.8,177.1L608.3,175.4L608.9,174.9L612.2,175.8L616.4,178.1L624.2,184.8L629.4,185.1L631.8,185.4L632.5,186.9L634.5,186.9L635.6,189.7L636.9,190.5L637.4,191.6L639.3,193L639.5,194.4L639.2,195.5L639.6,196.6L640.4,197.5L640.7,198.6L641.1,199.4L642,200.1L642.7,199.9L643.3,201.1L643.4,201.9L644.4,205.2L652.8,206.9L653.4,206.2L654.6,208.6L652.8,215.2L644.4,218.5L636.4,219.8L633.8,221.2L631.9,224.7L630.6,225.3L629.9,224.2L628.8,224.3L626.1,224L625.6,223.7L622.4,223.7L621.6,224L620.5,223.2L619.8,224.8L620.1,226.2L618.8,227.3L618.5,225.8L617.6,224.9L617.4,223.5L616,222.3L614.5,219.6L613.7,216.9L611.8,214.6L610.6,214.1L608.7,210.9L608.4,208.6L608.5,206.6L606.9,203L605.6,201.7L604.1,201L603.2,199.1L603.4,198.3L602.6,196.6L601.8,195.9L600.7,193.4L599,190.8L597.6,188.5L596.2,188.5L596.6,186.7L596.8,185.5L597.1,184.2ZM590.9,165.1L591.5,164.2L593.5,164.3L596,163.3L594.2,164.7L594.4,165.3L593.5,165.5L592.2,164.9L591.4,165.2L590.9,165.1ZM590.9,165.1L591.4,165.2L592.2,164.9L592.7,165L594.1,165.2L591.6,166.9L590.3,166.5L589.6,165.2L590.9,165.1ZM494,165L495,167.1L495.2,169.1L496.1,172.6L496.9,173.3L496.4,174.6L492.7,175.1L491.5,176.4L489.9,176.6L489.7,179.1L486.5,180.4L485.4,182.1L483.2,183L480.4,183.5L475.9,185.9L475.9,189.8L475.6,191.6L473.9,191.7L473,192.5L471.7,192.5L470.7,192L468.4,192.4L467.4,195L466.6,195.2L465.3,199.4L461.4,203L460.5,207.5L459.4,209L459,210.2L452.8,210.5L452.9,208.9L453.9,208L454.8,206.3L454.6,205.2L455.6,202.8L457.1,200.7L458.1,200.2L458.8,198.3L458.9,196.5L459.9,194.5L461.7,193.3L463.5,189.9L464.9,188.6L467.5,188.2L469.7,185.9L471.1,185.1L473.4,182.3L472.7,178.2L473.8,175.3L474.2,173.6L476,171.3L478.7,169.8L480.8,168.5L482.7,165L483.5,163L485.6,163L487.2,164.4L489.9,164.2L492.8,164.9L494,165ZM602.4,208.6L591.4,208.6L580.6,208.6L569.4,208.6L569.4,196.4L569.4,184.6L568.6,181.9L569.3,179.9L568.9,178.5L569.9,176.9L573.6,176.8L576.3,177.7L579,178.7L580.3,179.2L582.5,178.1L583.6,177.2L586,176.9L588,177.3L588.8,179L589.4,177.9L591.6,178.7L593.8,178.9L595.2,178L596.7,182.9L597,183.7L596.2,185.1L595.6,187.6L594.9,189.3L594.2,189.9L593.3,188.8L592,187.3L590.1,182.6L590.9,186.4L592.6,189.7L594.7,194.8L595.8,196.6L596.7,198.5L599.1,202.2L598.6,202.8L598.7,204.9L601.9,207.9L602.4,208.6ZM569.4,208.6L569.4,215.2L566.3,215.2L566.2,216.6L555.1,210.2L544.1,203.9L541.3,205.7L539.3,206.9L537.7,205.1L533.3,203.7L532.1,201.6L529.9,200.1L528.6,200.7L527.6,198.8L527.5,197.4L525.9,195L527,193.6L526.7,191.5L527.1,189.7L526.9,188.2L527.4,185.5L527.2,184L526.3,181.1L527.7,180.3L527.9,178.9L527.6,177.5L529.5,176.2L530.4,175.2L531.8,174.2L531.9,171.7L535.2,172.8L536.3,172.5L538.7,173.1L542.3,174.6L543.6,177.5L546.1,178.2L550.1,179.5L553,181.2L554.4,180.3L555.7,178.8L555.1,176.3L555.9,174.7L557.9,173.1L559.8,172.7L563.6,173.3L564.5,174.8L565.6,174.8L566.5,175.4L569.2,175.8L569.9,176.9L568.9,178.5L569.3,179.9L568.6,181.9L569.4,184.6L569.4,196.4L569.4,208.6ZM632.7,254.9L624.9,264.8L621.3,265L618.8,267.3L617,267.4L616.3,268.4L614.4,268.4L613.2,267.3L610.7,268.7L609.9,270.1L608,269.8L607.4,269.4L606.8,269.5L605.9,269.5L602.4,266.7L600.4,266.7L599.5,265.6L599.5,263.7L598.1,263.2L596.4,259.6L595.1,258.8L594.7,257.5L593.2,255.8L591.5,255.6L592.5,253.7L594,253.6L594.4,252.6L594.3,249.7L595.2,246.2L596.5,245.3L596.8,243.9L597.9,241.4L599.6,239.7L600.8,236.5L601.2,233.6L604.4,234.3L605.3,231.9L607,233.4L608.6,232.6L609.3,233.3L611.2,233.3L613.6,234.6L614.3,235.8L615.6,236.8L616.7,238.8L617.6,239.9L616.7,241.3L615.7,242.9L615.9,243.8L616,244.8L617.5,244.9L618.2,244.6L618.8,245.2L618.2,246.4L619.2,248.2L620.3,249.8L621.3,251L630.4,254.9L632.7,254.9ZM617.6,239.9L618.8,240.1L619.7,239.3L620.3,240.4L620.2,241.7L618.7,242.5L619.8,243.4L618.8,245.2L618.2,244.6L617.5,244.9L616,244.8L615.9,243.8L615.7,242.9L616.7,241.3L617.6,239.9ZM636,243.6L635.9,245L635.9,248.4L635.9,250.1L634.7,252.1L632.7,254.9L630.4,254.9L621.3,251L620.3,249.8L619.2,248.2L618.2,246.4L618.8,245.2L619.8,243.4L620.8,244L621.3,245.4L622.5,246.8L623.9,246.8L626.5,246L629.6,245.6L632,244.5L633.4,244.3L634.4,243.7L636,243.6L636,243.6ZM594.2,284.5L588.5,284.8L585.5,284.7L584.5,285.1L582.8,286.2L582.2,285.8L582.2,283.3L582.8,282.1L583,279.4L583.6,277.9L584.6,276.1L585.7,275.3L586.6,274.1L585.5,273.6L585.6,269.8L586.8,268.9L588.6,269.6L590.8,268.8L592.8,268.8L594.5,267.3L595.8,269.6L596.1,271.3L597.3,275.1L596.3,277.5L594.9,279.7L594.1,281L594.2,284.5ZM584.5,285.1L585.6,287L585.4,289L584.6,289.4L583.2,289.2L582.3,291L580.6,290.8L580.9,289L581.4,286.7L582.2,285.8L582.8,286.2L584.5,285.1ZM551.6,140.2L549.1,138.9L548,137.6L547,136.8L545.7,135.6L545.1,134.6L543.8,133L544.3,131.6L545.3,132.4L545.9,131.7L547.2,131.6L549.6,132.2L551.5,132.1L552.8,132.9L553.8,132.9L553.1,134.3L554.4,135.6L554,137.2L553.4,137.3L552.9,137.6L552,138.4L551.6,140.2ZM562.2,141.3L563.6,142.3L563.8,144.5L563.2,144.6L562.8,145.2L561.3,145.2L560.2,145.9L558.4,146.2L557.2,145.4L556.8,144L557.2,142.8L557.7,142.2L559.3,141.7L559.9,141.5L560.9,141.3L562.2,141.3ZM552.3,129.4L554.4,128.5L556.2,128.7L557.7,130L558,131L559.7,131.8L559.9,133.2L561.5,134.1L562.4,133.4L563.1,133.8L562.4,134.4L562.9,134.9L562.3,135.7L562.5,136.9L563.9,138.3L562.8,139.4L562.3,140.4L562.2,141.3L560.9,141.3L559.9,141.5L560.2,140.9L560.5,140.1L559.6,139.5L558.7,138.8L558.2,138.6L557.8,138.1L557.3,138.3L556.9,139.4L556.3,139.7L555.4,138.7L554.5,138.3L554.1,137.9L553.4,137.3L554,137.2L554.4,135.6L553.1,134.3L553.8,132.9L552.8,132.9L553.9,131.6L553,130.7L552.3,129.4ZM555.8,140.4L555,140.7L554.8,140.1L553.6,141.7L553.8,142.8L553.2,142.5L552.5,141.4L551.3,140.8L551.6,140.2L552,138.4L552.9,137.6L553.4,137.3L554.1,137.9L554.5,138.3L555.4,138.7L556.5,139.4L555.8,140.4ZM557.2,142.8L557,141.6L556.3,141.3L555.8,140.4L556.3,139.7L556.9,139.4L557.3,138.3L557.8,138.1L558.2,138.6L558.7,138.8L559.1,139.3L560.1,140.1L560.2,140.9L559.8,141.3L559.3,141.7L557.7,142.2L557.5,142.9L557.2,142.8ZM328.7,245.8L330.3,245.3L330.8,245.4L330.7,247.9L328.4,248.3L327.9,248L328.7,247.1L328.7,245.8ZM585.6,269.8L583.2,267.6L582.5,266.1L581,266.8L579.7,266.6L579,267.2L577.7,266.8L576,264.1L575.6,263L573.5,261.7L572.8,259.7L571.7,258.3L569.8,256.6L569.8,255.5L568.2,254.1L566.4,252.8L567.2,252.5L568.2,251.9L568.9,248.9L569.6,247.4L571.6,246.9L572.1,247.8L573.5,249.8L574.3,250L575.3,249.5L577.3,249.6L577.7,250.3L580.5,250.3L580.6,249.6L582,249L582.3,248L583.3,247.3L585.7,249.2L587.1,248.9L588.5,246.5L590,244.7L589.8,242.7L589.1,241.7L590.8,241.6L591,240.8L592.2,241.1L591.9,243.5L592.2,245.9L593.7,247.2L594,248.3L594,250L594.4,252.6L594,253.6L592.5,253.7L591.5,255.6L593.2,255.8L594.7,257.5L595.1,258.8L596.4,259.6L598.1,263.2L596.2,265.3L594.5,267.3L592.8,268.8L590.8,268.8L588.6,269.6L586.8,268.9L585.6,269.8Z";
var countryOutlines = {
	"NLD": "M519.2,104.3L519.7,105.5L519,108.5L518.3,109.7L516.6,109.7L517.1,113.2L515.6,112.4L513.8,111L511.2,111.7L509.2,111.4L510.6,110.5L513.1,105.6L516.9,104.2L519.2,104.3Z",
	"DEU": "M539.2,103.4L539.9,105.1L539.1,106L540.1,107.2L540.8,108.9L540.6,110.1L541.7,112.2L540.5,112.5L539.7,112.2L539,112.8L537.1,113.4L536,114.3L534,115L534.5,116L534.8,117.4L536.2,118.2L537.8,119.6L536.8,121.1L535.8,121.5L536.2,123.7L535.9,124.2L535.1,123.6L533.7,123.5L531.7,124.1L529.3,123.9L528.9,124.8L527.5,123.9L526.7,124.1L523.7,123L523.1,123.8L520.7,123.7L521.1,121.4L522.5,119.1L518.5,118.5L517.2,117.6L517.3,116.2L516.8,115.4L517.1,113.2L516.6,109.7L518.3,109.7L519,108.5L519.7,105.5L519.2,104.3L519.7,103.6L522,103.5L522.6,104.2L524.4,102.6L523.8,101.3L523.7,99.4L525.8,99.9L527.6,99.4L527.6,100.6L530.4,101.4L530.4,102.6L533.2,102L534.8,101.1L537.9,102.4L539.2,103.4Z",
	"IND": "M770.4,187.8L770.6,189.1L769.6,189.7L769.8,191.7L767.8,191.1L764.2,193.4L764.3,195.3L762.8,198.1L762.6,199.7L761.4,202.4L759.2,201.7L759.1,205.1L758.5,206.2L758.8,207.6L757.4,208.4L756,203.2L755.2,203.2L754.7,205.3L753.2,203.6L754.1,201.7L755.3,201.5L756.6,198.7L755,198.1L752.4,198.2L749.8,197.7L749.5,195.4L748.2,195.3L746,193.8L745,196.1L747,197.8L745.3,199.1L744.7,200.3L746.4,201.2L745.9,203.2L746.9,205.6L747.3,208.4L746.9,209.6L745,209.5L741.6,210.2L741.8,212.7L740.3,214.7L736.3,216.9L733.2,220.8L731.1,222.9L728.3,225L728.3,226.6L726.9,227.4L724.4,228.6L723.1,228.7L722.3,231.3L722.9,235.6L723,238.3L721.8,241.5L721.8,247.1L720.4,247.3L719.1,249.8L720,250.9L717.4,251.8L716.5,254.1L715.4,255L712.8,251.9L711.5,247.3L710.4,243.9L709.4,242.4L708,239.2L707.3,235.1L706.8,233L704.3,228.4L703.1,222L702.3,217.8L702.3,213.8L701.8,210.7L697.7,212.7L695.8,212.3L692.1,208.3L693.5,207.1L692.6,205.8L689.4,203L691.2,200.7L697.3,200.8L696.8,197.9L695.2,196.2L694.9,193.7L693.1,192.2L696.2,188.7L699.4,189L702.3,185.5L704,182.1L706.7,178.8L706.7,176.5L709.1,174.6L706.8,172.9L705.8,170.7L704.9,167.8L706.2,166.3L710.4,167.2L713.5,166.7L716.2,163.9L719.2,167.8L718.9,170.5L720,172.2L719.9,173.8L717.9,173.4L718.7,177.1L721.4,179.1L725.3,181.5L723.5,183L722.5,186.1L725.2,187.3L727.8,188.9L731.4,190.8L735.2,191.2L736.8,192.9L739,193.2L742.3,194L744.6,193.9L744.9,192.6L744.6,190.5L744.8,189.1L746.5,188.4L746.7,191L746.8,191.7L749.3,192.9L751,192.4L753.4,192.6L755.6,192.5L755.8,190.5L754.7,189.4L757,189L759.5,186.6L762.7,184.5L765,185.3L767,183.9L768.3,185.9L767.4,187.3L770.4,187.8Z"
};
// src/GlobalNetworkMap.tsx
var locations = [
	{
		id: "nl",
		country: "Netherlands",
		code: "NLD",
		city: "Almere",
		role: "Headquarters",
		coordinates: "52.37° N / 5.22° E",
		description: "The home of NekSoft Consultancy Services B.V.",
		x: 514.5,
		y: 108,
		labelX: 32,
		labelY: 12,
		path: "M514.5 108 L477 64 L380 64"
	},
	{
		id: "de",
		country: "Germany",
		code: "DEU",
		city: "Munich area",
		role: "European presence",
		coordinates: "48.25° N / 11.65° E",
		description: "Our presence in Germany connects the European footprint.",
		x: 532.4,
		y: 121.7,
		labelX: 40,
		labelY: 46,
		path: "M532.4 121.7 L532.4 199 L465 226"
	},
	{
		id: "in",
		country: "India",
		code: "IND",
		city: "Sitamarhi & Noida",
		role: "Delivery team",
		coordinates: "26.59° N / 85.49° E",
		description: "Our delivery team brings software and connected systems together.",
		x: 737.5,
		y: 193.4,
		labelX: 76,
		labelY: 61,
		path: "M737.5 193.4 L777 238 L818 293"
	}
];
function GlobalNetworkMap() {
	const uid = useId().replace(/:/g, "");
	const root = useRef(null);
	const [active, setActive] = useState(0);
	const [inView, setInView] = useState(false);
	const [reduced, setReduced] = useState(false);
	const location = locations[active];
	useEffect(() => {
		const query = matchMedia("(prefers-reduced-motion: reduce)");
		const sync = () => setReduced(query.matches);
		sync();
		query.addEventListener("change", sync);
		const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: .15 });
		if (root.current) observer.observe(root.current);
		return () => {
			query.removeEventListener("change", sync);
			observer.disconnect();
		};
	}, []);
	const setTilt = (event) => {
		if (reduced || event.pointerType !== "mouse") return;
		const rect = event.currentTarget.getBoundingClientRect();
		event.currentTarget.style.setProperty("--map-rotate-x", `${-(event.clientY - rect.top - rect.height / 2) / rect.height * 4}deg`);
		event.currentTarget.style.setProperty("--map-rotate-y", `${(event.clientX - rect.left - rect.width / 2) / rect.width * 4}deg`);
		event.currentTarget.style.setProperty("--map-light-x", `${event.clientX - rect.left}px`);
		event.currentTarget.style.setProperty("--map-light-y", `${event.clientY - rect.top}px`);
	};
	const resetTilt = () => {
		root.current?.style.setProperty("--map-rotate-x", "0deg");
		root.current?.style.setProperty("--map-rotate-y", "0deg");
	};
	return /* @__PURE__ */ jsxs("div", {
		ref: root,
		className: `network-map ${inView && !reduced ? "map-running" : ""}`,
		onPointerMove: setTilt,
		onPointerLeave: resetTilt,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "network-map-header",
				children: [/* @__PURE__ */ jsxs("span", {
					className: "mono",
					children: [/* @__PURE__ */ jsx("i", {}), cmsText("OUR GLOBAL FOOTPRINT", "GlobalNetworkMap:GlobalNetworkMap")]
				}), /* @__PURE__ */ jsx("span", {
					className: "mono",
					children: cmsText("03 / LOCATIONS", "GlobalNetworkMap:GlobalNetworkMap")
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "network-map-surface",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "network-map-atmosphere",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ jsxs("svg", {
						className: "network-map-svg",
						viewBox: "0 0 1000 480",
						"aria-hidden": "true",
						children: [
							/* @__PURE__ */ jsxs("defs", { children: [
								/* @__PURE__ */ jsxs("linearGradient", {
									id: `${uid}-land`,
									x1: "0",
									y1: "0",
									x2: "0",
									y2: "1",
									children: [/* @__PURE__ */ jsx("stop", { stopColor: "#35547c" }), /* @__PURE__ */ jsx("stop", {
										offset: "1",
										stopColor: "#172c4b"
									})]
								}),
								/* @__PURE__ */ jsxs("linearGradient", {
									id: `${uid}-route`,
									children: [/* @__PURE__ */ jsx("stop", { stopColor: "#89b3ff" }), /* @__PURE__ */ jsx("stop", {
										offset: "1",
										stopColor: "#356bff"
									})]
								}),
								/* @__PURE__ */ jsx("pattern", {
									id: `${uid}-dots`,
									width: "7",
									height: "7",
									patternUnits: "userSpaceOnUse",
									children: /* @__PURE__ */ jsx("circle", {
										cx: "1",
										cy: "1",
										r: ".7",
										fill: "#91b4e9",
										opacity: ".38"
									})
								}),
								/* @__PURE__ */ jsx("path", {
									id: `${uid}-land-shape`,
									d: worldLand
								}),
								/* @__PURE__ */ jsx("filter", {
									id: `${uid}-glow`,
									x: "-100%",
									y: "-100%",
									width: "300%",
									height: "300%",
									children: /* @__PURE__ */ jsx("feGaussianBlur", { stdDeviation: "3" })
								})
							] }),
							/* @__PURE__ */ jsxs("g", {
								className: "map-graticule",
								fill: "none",
								stroke: "#7b9dce",
								children: [cmsText([
									90,
									180,
									270,
									360,
									450
								].map((y) => /* @__PURE__ */ jsx("path", { d: `M20 ${y}H980` }, y)), "GlobalNetworkMap:GlobalNetworkMap"), cmsText([
									100,
									200,
									300,
									400,
									500,
									600,
									700,
									800,
									900
								].map((x) => /* @__PURE__ */ jsx("path", { d: `M${x} 15V460` }, x)), "GlobalNetworkMap:GlobalNetworkMap")]
							}),
							/* @__PURE__ */ jsxs("g", {
								className: "map-land-mass",
								children: [
									/* @__PURE__ */ jsx("use", {
										href: cmsLink(`#${uid}-land-shape`),
										fill: `url(#${uid}-land)`
									}),
									/* @__PURE__ */ jsx("use", {
										href: cmsLink(`#${uid}-land-shape`),
										fill: `url(#${uid}-dots)`
									}),
									/* @__PURE__ */ jsx("use", {
										href: cmsLink(`#${uid}-land-shape`),
										fill: "none",
										stroke: "#6e8fbb",
										strokeWidth: ".65",
										strokeOpacity: ".35"
									})
								]
							}),
							cmsText(locations.map((point, i) => /* @__PURE__ */ jsx("path", {
								className: `map-country ${active === i ? "is-active" : ""}`,
								d: countryOutlines[point.code]
							}, point.id)), "GlobalNetworkMap:GlobalNetworkMap"),
							/* @__PURE__ */ jsxs("g", {
								className: "map-routes",
								fill: "none",
								children: [
									/* @__PURE__ */ jsx("path", {
										className: "map-route-halo",
										d: "M514.5 108 Q643 -17 737.5 193.4",
										stroke: "#648bff",
										filter: `url(#${uid}-glow)`
									}),
									/* @__PURE__ */ jsx("path", {
										className: "map-route-base",
										d: "M514.5 108 Q643 -17 737.5 193.4",
										stroke: `url(#${uid}-route)`
									}),
									/* @__PURE__ */ jsx("path", {
										className: "map-route-stream",
										d: "M514.5 108 Q643 -17 737.5 193.4"
									}),
									/* @__PURE__ */ jsx("path", {
										className: "map-route-base secondary-route",
										d: "M532.4 121.7 Q661 52 737.5 193.4"
									}),
									/* @__PURE__ */ jsx("path", {
										className: "map-route-stream secondary-route",
										d: "M532.4 121.7 Q661 52 737.5 193.4"
									})
								]
							}),
							cmsText(locations.map((point, i) => /* @__PURE__ */ jsxs("g", {
								className: `map-marker-group ${active === i ? "is-active" : ""}`,
								children: [
									/* @__PURE__ */ jsx("path", {
										d: point.path,
										className: "map-label-line",
										fill: "none"
									}),
									/* @__PURE__ */ jsx("circle", {
										cx: point.x,
										cy: point.y,
										r: "21",
										className: "map-pin-halo"
									}),
									/* @__PURE__ */ jsx("circle", {
										cx: point.x,
										cy: point.y,
										r: "12",
										className: "map-pin-pulse",
										style: { animationDelay: `${i * .8}s` }
									}),
									/* @__PURE__ */ jsx("circle", {
										cx: point.x,
										cy: point.y,
										r: "7",
										className: "map-pin-ring"
									}),
									/* @__PURE__ */ jsx("circle", {
										cx: point.x,
										cy: point.y,
										r: "3",
										className: "map-pin-dot"
									})
								]
							}, point.id)), "GlobalNetworkMap:GlobalNetworkMap"),
							/* @__PURE__ */ jsxs("g", {
								className: "map-region-labels",
								children: [
									/* @__PURE__ */ jsx("text", {
										x: "195",
										y: "187",
										children: cmsText("NORTH AMERICA", "GlobalNetworkMap:GlobalNetworkMap")
									}),
									/* @__PURE__ */ jsx("text", {
										x: "339",
										y: "355",
										children: cmsText("SOUTH AMERICA", "GlobalNetworkMap:GlobalNetworkMap")
									}),
									/* @__PURE__ */ jsx("text", {
										x: "520",
										y: "262",
										children: cmsText("AFRICA", "GlobalNetworkMap:GlobalNetworkMap")
									}),
									/* @__PURE__ */ jsx("text", {
										x: "710",
										y: "110",
										children: cmsText("ASIA", "GlobalNetworkMap:GlobalNetworkMap")
									}),
									/* @__PURE__ */ jsx("text", {
										x: "843",
										y: "394",
										children: cmsText("OCEANIA", "GlobalNetworkMap:GlobalNetworkMap")
									})
								]
							})
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "network-map-location-buttons",
						role: "group",
						"aria-label": cmsText("Explore NekSoft locations", "GlobalNetworkMap:GlobalNetworkMap"),
						children: cmsText(locations.map((point, i) => /* @__PURE__ */ jsxs("button", {
							className: `map-location-button ${active === i ? "is-active" : ""}`,
							style: {
								"--label-x": `${point.labelX}%`,
								"--label-y": `${point.labelY}%`
							},
							"aria-pressed": active === i,
							"aria-controls": "network-location-details",
							onPointerEnter: () => setActive(i),
							onFocus: () => setActive(i),
							onClick: () => setActive(i),
							children: [
								/* @__PURE__ */ jsx("span", {
									className: `country-flag flag-${point.id}`,
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ jsxs("span", { children: [cmsText(point.country, "GlobalNetworkMap:GlobalNetworkMap"), /* @__PURE__ */ jsx("small", { children: cmsText(point.role, "GlobalNetworkMap:GlobalNetworkMap") })] }),
								/* @__PURE__ */ jsx(ArrowUpRight, { size: 12 })
							]
						}, point.id)), "GlobalNetworkMap:GlobalNetworkMap")
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "network-map-coordinates mono",
						children: [/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx(Navigation, { size: 10 }), cmsText(" CONNECTED ACROSS BORDERS", "GlobalNetworkMap:GlobalNetworkMap")] }), /* @__PURE__ */ jsx("span", { children: cmsText("SELECT A LOCATION", "GlobalNetworkMap:GlobalNetworkMap") })]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "network-location-details",
				id: "network-location-details",
				role: "region",
				"aria-label": cmsText("Selected office location", "GlobalNetworkMap:GlobalNetworkMap"),
				"aria-live": "polite",
				"aria-atomic": "true",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "map-detail-icon",
						children: /* @__PURE__ */ jsx(MapPin, {
							size: 20,
							strokeWidth: 1.4
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "map-detail-copy",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "mono",
								children: [cmsText(location.role.toUpperCase(), "GlobalNetworkMap:GlobalNetworkMap"), /* @__PURE__ */ jsx("span", {
									className: "map-detail-coordinates",
									children: cmsText(location.coordinates, "GlobalNetworkMap:GlobalNetworkMap")
								})]
							}),
							/* @__PURE__ */ jsxs("h3", { children: [cmsText(location.city, "GlobalNetworkMap:GlobalNetworkMap"), /* @__PURE__ */ jsxs("span", { children: [cmsText(" / ", "GlobalNetworkMap:GlobalNetworkMap"), cmsText(location.country, "GlobalNetworkMap:GlobalNetworkMap")] })] }),
							/* @__PURE__ */ jsx("p", { children: cmsText(location.description, "GlobalNetworkMap:GlobalNetworkMap") })
						]
					}, location.id),
					/* @__PURE__ */ jsx(Link, {
						className: "map-office-link",
						to: cmsLink(`/contact?service=${encodeURIComponent("Connect with " + location.country)}`),
						"aria-label": cmsText(`Contact NekSoft in ${location.country}`, "GlobalNetworkMap:GlobalNetworkMap"),
						children: /* @__PURE__ */ jsx(ArrowUpRight, { size: 19 })
					})
				]
			})
		]
	});
}
// src/CompanyMetrics.tsx
var metrics = [
	{
		value: "500",
		suffix: "+",
		label: "Projects delivered",
		icon: CircleCheck,
		accent: "#356bff",
		wash: "#edf3ff"
	},
	{
		value: "98",
		suffix: "%",
		label: "Client retention",
		icon: UsersRound,
		accent: "#168267",
		wash: "#eaf7f1"
	},
	{
		value: "35",
		suffix: "",
		label: "India delivery professionals",
		icon: Code2,
		accent: "#7755c6",
		wash: "#f2eefb"
	},
	{
		value: "5",
		suffix: "+",
		label: "Years of experience",
		icon: TrendingUp,
		accent: "#b3662b",
		wash: "#fbf1e8"
	}
];
function CompanyMetrics() {
	const publishedMetrics = getSiteContent()?.metrics;
	const headingId = useId();
	const sectionRef = useRef(null);
	useEffect(() => {
		const section = sectionRef.current;
		if (!section || matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
		section.classList.add("metrics-motion-ready");
		const observer = new IntersectionObserver((entries) => {
			if (!entries.some((entry) => entry.isIntersecting)) return;
			section.classList.add("metrics-entered");
			observer.disconnect();
		}, { threshold: .15 });
		observer.observe(section);
		return () => {
			observer.disconnect();
			section.classList.remove("metrics-motion-ready", "metrics-entered");
		};
	}, []);
	return /* @__PURE__ */ jsx("section", {
		ref: sectionRef,
		className: "company-metrics",
		id: "company-metrics",
		"aria-labelledby": headingId,
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "company-metrics-heading reveal",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("span", {
					className: "eyebrow",
					children: [/* @__PURE__ */ jsx("span", { className: "label-line" }), cmsText("NEKSOFT / AT A GLANCE", "CompanyMetrics:CompanyMetrics:company-metrics")]
				}), /* @__PURE__ */ jsx("h2", {
					id: headingId,
					children: cmsText("Experience, in perspective.", "CompanyMetrics:CompanyMetrics:company-metrics")
				})] }), /* @__PURE__ */ jsx("p", { children: cmsText("Delivery. People. Lasting partnerships.", "CompanyMetrics:CompanyMetrics:company-metrics") })]
			}), /* @__PURE__ */ jsx("dl", {
				className: "company-metrics-grid",
				children: cmsText(metrics.map((original, index) => {
					const { value, suffix, label, icon: Icon, accent, wash } = {
						...original,
						...publishedMetrics?.[index]
					};
					return /* @__PURE__ */ jsxs("div", {
						className: "company-metric",
						style: {
							"--metric-accent": accent,
							"--metric-wash": wash,
							"--metric-order": index
						},
						children: [/* @__PURE__ */ jsx("dt", { children: cmsText(label, "CompanyMetrics:CompanyMetrics:company-metrics") }), /* @__PURE__ */ jsxs("dd", { children: [/* @__PURE__ */ jsx("span", {
							className: "company-metric-icon",
							"aria-hidden": "true",
							children: /* @__PURE__ */ jsx(Icon, {
								size: 19,
								strokeWidth: 1.6
							})
						}), /* @__PURE__ */ jsxs("span", {
							className: "company-metric-value",
							children: [cmsText(value, "CompanyMetrics:CompanyMetrics:company-metrics"), /* @__PURE__ */ jsx("span", { children: cmsText(suffix, "CompanyMetrics:CompanyMetrics:company-metrics") })]
						})] })]
					}, label);
				}), "CompanyMetrics:CompanyMetrics:company-metrics")
			})]
		})
	});
}
// src/team.ts
var team = [
	{
		id: "sweta",
		name: "Sweta Verma",
		role: "Head of HR Department",
		group: "business",
		description: "Supports a positive, inclusive workplace and the people behind NekSoft.",
		width: 600,
		height: 648
	},
	{
		id: "kripa",
		name: "Kripa Shankar Sharan",
		role: "Director of Sales & Marketing",
		group: "business",
		description: "Guides sales and marketing strategy with a focus on business growth.",
		width: 600,
		height: 629
	},
	{
		id: "rudra",
		name: "Rudra Ck",
		role: "Head of IT Department",
		group: "engineering",
		description: "Leads IT, technology direction and infrastructure management.",
		width: 600,
		height: 600
	},
	{
		id: "alok",
		name: "Alok Verma",
		role: "Director of Support & Operations",
		group: "business",
		description: "Oversees operational delivery and customer support.",
		width: 600,
		height: 629
	},
	{
		id: "mugdha",
		name: "Mugdha",
		role: "Website Department Lead",
		group: "engineering",
		description: "Leads the creation of engaging website experiences.",
		width: 600,
		height: 629
	},
	{
		id: "vishal",
		name: "Vishal Sinha",
		role: "Digital Marketing Manager",
		group: "business",
		description: "Plans digital campaigns that strengthen online presence and reach.",
		width: 600,
		height: 768
	},
	{
		id: "rashi",
		name: "Rashi Agarwal",
		role: "Graphic Designer",
		group: "engineering",
		description: "Translates ideas into clear, compelling visual design.",
		width: 600,
		height: 610
	},
	{
		id: "sonu",
		name: "Sonu Kumar",
		role: "Lead Software Developer",
		group: "engineering",
		description: "Designs scalable software and mentors the development team.",
		width: 600,
		height: 610
	},
	{
		id: "atul",
		name: "Atul Adarsh",
		role: "Web Designer",
		group: "engineering",
		description: "Creates user-friendly web interfaces and visual experiences.",
		width: 600,
		height: 768
	},
	{
		id: "sumit",
		name: "Sumit Saurabh",
		role: "Account Head",
		group: "business",
		description: "Manages client accounts and supports financial accuracy.",
		width: 600,
		height: 768
	}
];
var getTeam = () => getSiteContent()?.team.filter((member) => member.visible !== false) || team;
var teamImage = (member) => member.image || `/images/team/${member.id}.webp`;
// src/AboutExperience.tsx
var filters = [
	["all", "All people"],
	["engineering", "Engineering & design"],
	["business", "Business & operations"]
];
var principles = [
	{
		title: "Accountability & transparency",
		label: "01 / OWN THE WORK",
		heading: "Clarity at every step.",
		text: "Clear communication and defined responsibilities help keep decisions, delivery, and expectations connected."
	},
	{
		title: "Customer focus",
		label: "02 / UNDERSTAND THE NEED",
		heading: "Start with the operation.",
		text: "Understand the people, processes, and business requirements before deciding what to build."
	},
	{
		title: "Continuous improvement",
		label: "03 / KEEP GETTING BETTER",
		heading: "Build for what comes next.",
		text: "Thoughtful maintenance, feedback, and improvements help the software evolve alongside changing needs."
	}
];
function AboutLabel({ children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "eyebrow",
		children: [/* @__PURE__ */ jsx("span", { className: "label-line" }), cmsText(children, "AboutExperience:AboutLabel")]
	});
}
function TeamDirectory() {
	const team = getTeam();
	const [filter, setFilter] = useState("all");
	const [selected, setSelected] = useState(null);
	const dialog = useRef(null);
	const trigger = useRef(null);
	const members = team.filter((member) => filter === "all" || member.group === filter);
	const openProfile = (member, button) => {
		trigger.current = button;
		setSelected(member);
	};
	const closeProfile = () => {
		dialog.current?.close();
		setSelected(null);
		trigger.current?.focus();
	};
	useEffect(() => {
		if (!selected) return;
		const el = dialog.current;
		if (el && !el.open) el.showModal();
		document.body.classList.add("profile-open");
		return () => {
			el?.close();
			document.body.classList.remove("profile-open");
		};
	}, [selected]);
	return /* @__PURE__ */ jsxs("section", {
		className: "section about-team-section",
		id: "our-people",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "team-heading reveal",
					children: [/* @__PURE__ */ jsx(AboutLabel, { children: cmsText("THE PEOPLE BEHIND NEKSOFT", "AboutExperience:TeamDirectory:our-people") }), /* @__PURE__ */ jsxs("div", {
						className: "heading-row",
						children: [/* @__PURE__ */ jsxs("h2", { children: [
							cmsText("Different expertise.", "AboutExperience:TeamDirectory:our-people"),
							/* @__PURE__ */ jsx("br", {}),
							cmsText("One shared purpose.", "AboutExperience:TeamDirectory:our-people")
						] }), /* @__PURE__ */ jsx("p", { children: cmsText("Meet the people connecting engineering, design, business, and operations at NekSoft.", "AboutExperience:TeamDirectory:our-people") })]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "team-filter-bar",
					children: [/* @__PURE__ */ jsx("div", {
						className: "team-filters",
						role: "group",
						"aria-label": cmsText("Filter team by department", "AboutExperience:TeamDirectory:our-people"),
						children: cmsText(filters.map(([id, label]) => /* @__PURE__ */ jsxs("button", {
							type: "button",
							"aria-pressed": filter === id,
							onClick: () => setFilter(id),
							className: filter === id ? "is-selected" : "",
							children: [cmsText(label, "AboutExperience:TeamDirectory:our-people"), /* @__PURE__ */ jsx("span", { children: cmsText(id === "all" ? team.length : team.filter((m) => m.group === id).length, "AboutExperience:TeamDirectory:our-people") })]
						}, id)), "AboutExperience:TeamDirectory:our-people")
					}), /* @__PURE__ */ jsx("span", {
						className: "mono team-directory-label",
						children: cmsText("PEOPLE / DIRECTORY", "AboutExperience:TeamDirectory:our-people")
					})]
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "sr-only",
					role: "status",
					"aria-live": "polite",
					children: [
						cmsText("Showing ", "AboutExperience:TeamDirectory:our-people"),
						cmsText(members.length, "AboutExperience:TeamDirectory:our-people"),
						cmsText(" profiles.", "AboutExperience:TeamDirectory:our-people")
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "team-directory",
					children: cmsText(members.map((member) => /* @__PURE__ */ jsxs("article", {
						className: "person-card",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "person-photo",
							children: [
								/* @__PURE__ */ jsx("img", {
									src: cmsAsset(teamImage(member)),
									alt: cmsText(member.name, "AboutExperience:TeamDirectory:our-people"),
									width: member.width,
									height: member.height,
									loading: "lazy",
									decoding: "async"
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "portrait-index mono",
									children: [cmsText(String(team.indexOf(member) + 1).padStart(2, "0"), "AboutExperience:TeamDirectory:our-people"), cmsText(" / NEKSOFT", "AboutExperience:TeamDirectory:our-people")]
								}),
								/* @__PURE__ */ jsx("span", {
									className: "portrait-corner",
									"aria-hidden": "true"
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "person-info",
							children: [
								/* @__PURE__ */ jsx("h3", { children: cmsText(member.name, "AboutExperience:TeamDirectory:our-people") }),
								/* @__PURE__ */ jsx("p", {
									className: "person-role",
									children: cmsText(member.role, "AboutExperience:TeamDirectory:our-people")
								}),
								/* @__PURE__ */ jsx("button", {
									className: "person-card-trigger",
									"aria-haspopup": "dialog",
									type: "button",
									"aria-label": cmsText(`View ${member.name}'s profile`, "AboutExperience:TeamDirectory:our-people"),
									onClick: (event) => openProfile(member, event.currentTarget)
								})
							]
						})]
					}, member.id)), "AboutExperience:TeamDirectory:our-people")
				}, filter)
			]
		}), cmsText(selected && /* @__PURE__ */ jsx("dialog", {
			ref: dialog,
			className: "person-dialog",
			"aria-labelledby": "person-dialog-title",
			onCancel: (event) => {
				event.preventDefault();
				closeProfile();
			},
			onClick: (event) => {
				if (event.target === event.currentTarget) closeProfile();
			},
			children: /* @__PURE__ */ jsxs("div", {
				className: "person-dialog-inner",
				children: [
					/* @__PURE__ */ jsx("button", {
						className: "person-dialog-close",
						type: "button",
						"aria-label": cmsText("Close team profile", "AboutExperience:TeamDirectory:our-people"),
						onClick: closeProfile,
						children: /* @__PURE__ */ jsx(X, { size: 20 })
					}),
					/* @__PURE__ */ jsx("div", {
						className: "person-dialog-photo",
						children: /* @__PURE__ */ jsx("img", {
							src: cmsAsset(teamImage(selected)),
							alt: cmsText(selected.name, "AboutExperience:TeamDirectory:our-people"),
							width: selected.width,
							height: selected.height
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "person-dialog-copy",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "mono",
								children: cmsText("THE PEOPLE BEHIND NEKSOFT", "AboutExperience:TeamDirectory:our-people")
							}),
							/* @__PURE__ */ jsx("h2", {
								id: "person-dialog-title",
								children: cmsText(selected.name, "AboutExperience:TeamDirectory:our-people")
							}),
							/* @__PURE__ */ jsx("span", {
								className: "dialog-role",
								children: cmsText(selected.role, "AboutExperience:TeamDirectory:our-people")
							}),
							/* @__PURE__ */ jsx("span", { className: "profile-divider" }),
							/* @__PURE__ */ jsx("p", { children: cmsText(selected.description, "AboutExperience:TeamDirectory:our-people") }),
							/* @__PURE__ */ jsxs("div", {
								className: "profile-department",
								children: [/* @__PURE__ */ jsx("span", {
									className: "mono",
									children: cmsText("TEAM", "AboutExperience:TeamDirectory:our-people")
								}), /* @__PURE__ */ jsx("span", { children: cmsText(selected.group === "engineering" ? "Engineering & design" : "Business & operations", "AboutExperience:TeamDirectory:our-people") })]
							}),
							/* @__PURE__ */ jsxs(Link, {
								className: "button",
								to: cmsLink("/contact"),
								onClick: () => setSelected(null),
								children: [cmsText("Connect with NekSoft ", "AboutExperience:TeamDirectory:our-people"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })]
							})
						]
					})
				]
			})
		}), "AboutExperience:TeamDirectory:our-people")]
	});
}
function Principles() {
	const [active, setActive] = useState(0);
	return /* @__PURE__ */ jsx("section", {
		className: "section about-principles",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [/* @__PURE__ */ jsx(AboutLabel, { children: cmsText("WHAT GUIDES US", "AboutExperience:Principles:section about-principles") }), /* @__PURE__ */ jsxs("div", {
				className: "principle-layout",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("h2", { children: [
					cmsText("The way we work", "AboutExperience:Principles:section about-principles"),
					/* @__PURE__ */ jsx("br", {}),
					cmsText("matters.", "AboutExperience:Principles:section about-principles")
				] }), /* @__PURE__ */ jsx("div", {
					className: "principle-tabs",
					role: "tablist",
					"aria-label": cmsText("NekSoft values", "AboutExperience:Principles:section about-principles"),
					children: cmsText(principles.map((p, i) => /* @__PURE__ */ jsxs("button", {
						id: `principle-${i}`,
						role: "tab",
						"aria-selected": i === active,
						tabIndex: i === active ? 0 : -1,
						"aria-controls": "principle-panel",
						onClick: () => setActive(i),
						onKeyDown: (event) => {
							let next = active;
							if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (active + 1) % 3;
							else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (active + 2) % 3;
							else if (event.key === "Home") next = 0;
							else if (event.key === "End") next = 2;
							else return;
							event.preventDefault();
							setActive(next);
							document.getElementById(`principle-${next}`)?.focus();
						},
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "mono",
								children: [cmsText("0", "AboutExperience:Principles:section about-principles"), cmsText(i + 1, "AboutExperience:Principles:section about-principles")]
							}),
							cmsText(p.title, "AboutExperience:Principles:section about-principles"),
							/* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })
						]
					}, p.title)), "AboutExperience:Principles:section about-principles")
				})] }), /* @__PURE__ */ jsxs("div", {
					className: "principle-feature",
					id: "principle-panel",
					role: "tabpanel",
					"aria-labelledby": `principle-${active}`,
					tabIndex: 0,
					children: [/* @__PURE__ */ jsxs("div", {
						className: "principle-orbits",
						"aria-hidden": "true",
						children: [
							/* @__PURE__ */ jsx("i", {}),
							/* @__PURE__ */ jsx("i", {}),
							/* @__PURE__ */ jsx("i", {}),
							/* @__PURE__ */ jsx("span", { children: cmsText(String(active + 1).padStart(2, "0"), "AboutExperience:Principles:section about-principles") })
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "principle-feature-copy",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "mono",
								children: cmsText(principles[active].label, "AboutExperience:Principles:section about-principles")
							}),
							/* @__PURE__ */ jsx("h3", { children: cmsText(principles[active].heading, "AboutExperience:Principles:section about-principles") }),
							/* @__PURE__ */ jsx("p", { children: cmsText(principles[active].text, "AboutExperience:Principles:section about-principles") })
						]
					}, active)]
				})]
			})]
		})
	});
}
function AboutExperience() {
	return /* @__PURE__ */ jsxs("div", {
		className: "about-experience",
		children: [
			/* @__PURE__ */ jsxs("section", {
				className: "about-premium-hero dark",
				children: [
					/* @__PURE__ */ jsx("div", { className: "hero-grid" }),
					/* @__PURE__ */ jsxs("div", {
						className: "container about-hero-layout",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "about-hero-copy",
							children: [
								/* @__PURE__ */ jsx(AboutLabel, { children: cmsText("ABOUT NEKSOFT", "AboutExperience:AboutExperience:about-premium-hero dark") }),
								/* @__PURE__ */ jsxs("h1", {
									className: "page-title",
									children: [
										cmsText("Built on expertise.", "AboutExperience:AboutExperience:about-premium-hero dark"),
										/* @__PURE__ */ jsx("br", {}),
										/* @__PURE__ */ jsx("span", { children: cmsText("Driven by people.", "AboutExperience:AboutExperience:about-premium-hero dark") })
									]
								}),
								/* @__PURE__ */ jsx("p", { children: cmsText("We connect the physical world with intelligent software. Behind every connection is a team that understands the challenge and cares about what comes next.", "AboutExperience:AboutExperience:about-premium-hero dark") }),
								/* @__PURE__ */ jsxs("div", {
									className: "about-hero-actions",
									children: [/* @__PURE__ */ jsxs(Link, {
										className: "button magnetic",
										to: cmsLink("/about#our-people"),
										children: [cmsText("Meet Our People ", "AboutExperience:AboutExperience:about-premium-hero dark"), /* @__PURE__ */ jsx(ArrowDown, { size: 16 })]
									}), /* @__PURE__ */ jsxs(Link, {
										className: "text-link",
										to: cmsLink("/contact"),
										children: [cmsText("Let’s build together ", "AboutExperience:AboutExperience:about-premium-hero dark"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 16 })]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "about-hero-signature",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: "mono",
											children: cmsText("EST. 2021", "AboutExperience:AboutExperience:about-premium-hero dark")
										}),
										/* @__PURE__ */ jsx("span", {}),
										/* @__PURE__ */ jsx("span", { children: cmsText("People. Purpose. Engineering.", "AboutExperience:AboutExperience:about-premium-hero dark") })
									]
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "about-people-mosaic",
							"aria-label": cmsText("Some of the people behind NekSoft", "AboutExperience:AboutExperience:about-premium-hero dark"),
							children: [/* @__PURE__ */ jsxs("div", {
								className: "mosaic-grid",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "mosaic-portrait mosaic-one",
										children: [/* @__PURE__ */ jsx("img", {
											src: cmsAsset("/images/team/sweta.webp"),
											alt: cmsText("Sweta Verma, Head of HR Department", "AboutExperience:AboutExperience:about-premium-hero dark"),
											width: "600",
											height: "648",
											fetchPriority: "high"
										}), /* @__PURE__ */ jsxs("span", { children: [cmsText("Sweta Verma", "AboutExperience:AboutExperience:about-premium-hero dark"), /* @__PURE__ */ jsx("small", { children: cmsText("PEOPLE & CULTURE", "AboutExperience:AboutExperience:about-premium-hero dark") })] })]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "mosaic-portrait mosaic-two",
										children: [/* @__PURE__ */ jsx("img", {
											src: cmsAsset("/images/team/rudra.webp"),
											alt: cmsText("Rudra Ck, Head of IT Department", "AboutExperience:AboutExperience:about-premium-hero dark"),
											width: "600",
											height: "600"
										}), /* @__PURE__ */ jsxs("span", { children: [cmsText("Rudra Ck", "AboutExperience:AboutExperience:about-premium-hero dark"), /* @__PURE__ */ jsx("small", { children: cmsText("TECHNOLOGY", "AboutExperience:AboutExperience:about-premium-hero dark") })] })]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "mosaic-portrait mosaic-three",
										children: [/* @__PURE__ */ jsx("img", {
											src: cmsAsset("/images/team/kripa.webp"),
											alt: cmsText("Kripa Shankar Sharan, Director of Sales & Marketing", "AboutExperience:AboutExperience:about-premium-hero dark"),
											width: "600",
											height: "629"
										}), /* @__PURE__ */ jsxs("span", { children: [cmsText("Kripa Shankar Sharan", "AboutExperience:AboutExperience:about-premium-hero dark"), /* @__PURE__ */ jsx("small", { children: cmsText("SALES & MARKETING", "AboutExperience:AboutExperience:about-premium-hero dark") })] })]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "mosaic-portrait mosaic-four",
										children: [/* @__PURE__ */ jsx("img", {
											src: cmsAsset("/images/team/alok.webp"),
											alt: cmsText("Alok Verma, Director of Support & Operations", "AboutExperience:AboutExperience:about-premium-hero dark"),
											width: "600",
											height: "629"
										}), /* @__PURE__ */ jsxs("span", { children: [cmsText("Alok Verma", "AboutExperience:AboutExperience:about-premium-hero dark"), /* @__PURE__ */ jsx("small", { children: cmsText("SUPPORT & OPERATIONS", "AboutExperience:AboutExperience:about-premium-hero dark") })] })]
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "mosaic-caption mono",
								children: [/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("i", {}), cmsText("CONNECTED BY A SHARED PURPOSE", "AboutExperience:AboutExperience:about-premium-hero dark")] }), /* @__PURE__ */ jsx("span", { children: cmsText("NEK / PEOPLE", "AboutExperience:AboutExperience:about-premium-hero dark") })]
							})]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "container about-footprint-strip",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "mono",
								children: cmsText("AN INTERNATIONAL PERSPECTIVE", "AboutExperience:AboutExperience:about-premium-hero dark")
							}),
							/* @__PURE__ */ jsxs("span", { children: [
								/* @__PURE__ */ jsx("i", { className: "country-flag flag-nl" }),
								cmsText("Netherlands ", "AboutExperience:AboutExperience:about-premium-hero dark"),
								/* @__PURE__ */ jsx("small", { children: cmsText("Headquarters", "AboutExperience:AboutExperience:about-premium-hero dark") })
							] }),
							/* @__PURE__ */ jsxs("span", { children: [
								/* @__PURE__ */ jsx("i", { className: "country-flag flag-in" }),
								cmsText("India ", "AboutExperience:AboutExperience:about-premium-hero dark"),
								/* @__PURE__ */ jsx("small", { children: cmsText("Delivery team", "AboutExperience:AboutExperience:about-premium-hero dark") })
							] }),
							/* @__PURE__ */ jsxs("span", { children: [
								/* @__PURE__ */ jsx("i", { className: "country-flag flag-de" }),
								cmsText("Germany ", "AboutExperience:AboutExperience:about-premium-hero dark"),
								/* @__PURE__ */ jsx("small", { children: cmsText("Presence", "AboutExperience:AboutExperience:about-premium-hero dark") })
							] })
						]
					})
				]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "section about-new-story",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "about-story-layout reveal",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(AboutLabel, { children: cmsText("WHO WE ARE", "AboutExperience:AboutExperience:section about-new-story") }), /* @__PURE__ */ jsxs("h2", { children: [
							cmsText("Connected thinking.", "AboutExperience:AboutExperience:section about-new-story"),
							/* @__PURE__ */ jsx("br", {}),
							cmsText("Considered engineering.", "AboutExperience:AboutExperience:section about-new-story")
						] })] }), /* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("p", {
								className: "about-story-lead",
								children: cmsText("Neksoft Consultancy Services B.V. is a Netherlands-based technology company delivering innovative IoT solutions, intelligent software, digital transformation, and business technology services.", "AboutExperience:AboutExperience:section about-new-story")
							}),
							/* @__PURE__ */ jsx("p", { children: cmsText("With a dedicated delivery team of 35 professionals in India, Neksoft combines global technology expertise with practical, cost-effective implementation capabilities.", "AboutExperience:AboutExperience:section about-new-story") }),
							/* @__PURE__ */ jsx("p", { children: cmsText("Our strategic focus is on IoT-enabled solutions that connect physical environments with digital intelligence. Through our flagship product, Fisheries360, we are expanding our capabilities in smart aquaculture, connected monitoring, and data-driven operations.", "AboutExperience:AboutExperience:section about-new-story") }),
							/* @__PURE__ */ jsxs(Link, {
								className: "explore-link",
								to: cmsLink("/solutions"),
								children: [cmsText("Explore Our Capabilities ", "AboutExperience:AboutExperience:section about-new-story"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })]
							})
						] })]
					}), /* @__PURE__ */ jsx("div", {
						className: "about-capability-line reveal",
						children: cmsText([
							[Radio, "Connected devices"],
							[Code2, "Purpose-built software"],
							[Cpu, "Applied intelligence"],
							[Workflow, "Practical automation"]
						].map(([I, t], i) => {
							const Icon = I;
							return /* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsxs("span", {
									className: "mono",
									children: [cmsText("0", "AboutExperience:AboutExperience:section about-new-story"), cmsText(i + 1, "AboutExperience:AboutExperience:section about-new-story")]
								}),
								/* @__PURE__ */ jsx(Icon, {
									size: 23,
									strokeWidth: 1.2
								}),
								/* @__PURE__ */ jsx("span", { children: cmsText(String(t), "AboutExperience:AboutExperience:section about-new-story") })
							] }, String(t));
						}), "AboutExperience:AboutExperience:section about-new-story")
					})]
				})
			}),
			/* @__PURE__ */ jsx(CompanyMetrics, {}),
			/* @__PURE__ */ jsx(TeamDirectory, {}),
			/* @__PURE__ */ jsx("section", {
				className: "section about-purpose",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [
						/* @__PURE__ */ jsx(AboutLabel, { children: cmsText("THE REASON BEHIND THE WORK", "AboutExperience:AboutExperience:section about-purpose") }),
						/* @__PURE__ */ jsxs("h2", { children: [
							cmsText("Purpose sets the direction.", "AboutExperience:AboutExperience:section about-purpose"),
							/* @__PURE__ */ jsx("br", {}),
							cmsText("People make it possible.", "AboutExperience:AboutExperience:section about-purpose")
						] }),
						/* @__PURE__ */ jsxs("div", {
							className: "purpose-panels",
							children: [/* @__PURE__ */ jsxs("article", {
								className: "reveal",
								children: [
									/* @__PURE__ */ jsx(Target, {
										size: 31,
										strokeWidth: 1.1
									}),
									/* @__PURE__ */ jsx("span", {
										className: "mono",
										children: cmsText("OUR MISSION", "AboutExperience:AboutExperience:section about-purpose")
									}),
									/* @__PURE__ */ jsxs("h3", { children: [
										cmsText("Useful technology.", "AboutExperience:AboutExperience:section about-purpose"),
										/* @__PURE__ */ jsx("br", {}),
										cmsText("Lasting progress.", "AboutExperience:AboutExperience:section about-purpose")
									] }),
									/* @__PURE__ */ jsx("p", { children: cmsText("Build and improve software around customer needs, with thoughtful delivery and continued development.", "AboutExperience:AboutExperience:section about-purpose") })
								]
							}), /* @__PURE__ */ jsxs("article", {
								className: "reveal",
								children: [
									/* @__PURE__ */ jsx(Compass, {
										size: 31,
										strokeWidth: 1.1
									}),
									/* @__PURE__ */ jsx("span", {
										className: "mono",
										children: cmsText("OUR VISION", "AboutExperience:AboutExperience:section about-purpose")
									}),
									/* @__PURE__ */ jsxs("h3", { children: [
										cmsText("Move forward,", "AboutExperience:AboutExperience:section about-purpose"),
										/* @__PURE__ */ jsx("br", {}),
										cmsText("together.", "AboutExperience:AboutExperience:section about-purpose")
									] }),
									/* @__PURE__ */ jsx("p", { children: cmsText("Our Vision: To connect the physical and digital worlds through innovative technology, intelligent solutions, and meaningful business transformation.", "AboutExperience:AboutExperience:section about-purpose") })
								]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx(Principles, {}),
			/* @__PURE__ */ jsx("section", {
				className: "section about-global-section dark",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container about-global-layout",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "reveal",
						children: [
							/* @__PURE__ */ jsx(AboutLabel, { children: cmsText("CONNECTED ACROSS BORDERS", "AboutExperience:AboutExperience:section about-global-section dark") }),
							/* @__PURE__ */ jsxs("h2", { children: [
								cmsText("International presence.", "AboutExperience:AboutExperience:section about-global-section dark"),
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", { children: cmsText("Shared purpose.", "AboutExperience:AboutExperience:section about-global-section dark") })
							] }),
							/* @__PURE__ */ jsx("p", { children: cmsText("Headquartered in Almere, with a delivery team in India and a presence in Germany. Explore the locations behind our connected approach.", "AboutExperience:AboutExperience:section about-global-section dark") }),
							/* @__PURE__ */ jsxs(Link, {
								className: "explore-link",
								to: cmsLink("/about#office-locations"),
								children: [cmsText("View Office Details ", "AboutExperience:AboutExperience:section about-global-section dark"), /* @__PURE__ */ jsx(ArrowDown, { size: 17 })]
							})
						]
					}), /* @__PURE__ */ jsx(GlobalNetworkMap, {})]
				})
			})
		]
	});
}
// src/ContactForm.tsx
function ManagedContactForm() {
	const location = useLocation(), form = useRef(null);
	const [service, setService] = useState(""), [status, setStatus] = useState("idle"), [message, setMessage] = useState("");
	useEffect(() => {
		setService(new URLSearchParams(location.search).get("service") || "");
	}, [location.search]);
	const contactEmail = getSiteContent()?.settings.contactEmail || "info@neksoftconsultancy.com";
	async function submit(event) {
		event.preventDefault();
		if (status === "sending") return;
		const data = new FormData(event.currentTarget);
		setStatus("sending");
		setMessage("");
		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: data.get("name"),
					email: data.get("email"),
					company: data.get("company"),
					message: data.get("message"),
					website: data.get("website"),
					service
				})
			});
			let result;
			try {
				result = await response.json();
			} catch {
				throw Error("The enquiry service is unavailable. Please email us or try again.");
			}
			if (!response.ok) throw Error(result.error || "Your enquiry could not be saved.");
			setStatus("sent");
			setMessage(result.message);
			form.current?.reset();
		} catch (error) {
			setStatus("error");
			setMessage(error instanceof Error ? error.message : "Your enquiry could not be saved. Please try again or email us.");
		}
	}
	return /* @__PURE__ */ jsxs("form", {
		ref: form,
		className: "contact-form",
		onSubmit: submit,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "form-top mono",
				children: [/* @__PURE__ */ jsx("span", { children: cmsText("LET’S BUILD WHAT’S NEXT.", "ContactForm:ManagedContactForm") }), /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })]
			}),
			service && /* @__PURE__ */ jsxs("div", {
				className: "service-interest",
				children: [cmsText("Interested in: ", "ContactForm:ManagedContactForm"), service]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "form-row",
				children: [/* @__PURE__ */ jsxs("label", { children: [cmsText("Full Name", "ContactForm:ManagedContactForm"), /* @__PURE__ */ jsx("input", {
					name: "name",
					autoComplete: "name",
					required: true,
					maxLength: 120,
					placeholder: cmsText("Your name", "ContactForm:ManagedContactForm")
				})] }), /* @__PURE__ */ jsxs("label", { children: [cmsText("Work Email", "ContactForm:ManagedContactForm"), /* @__PURE__ */ jsx("input", {
					name: "email",
					type: "email",
					autoComplete: "email",
					required: true,
					maxLength: 254,
					placeholder: cmsText("you@company.com", "ContactForm:ManagedContactForm")
				})] })]
			}),
			/* @__PURE__ */ jsxs("label", { children: [cmsText("Company", "ContactForm:ManagedContactForm"), /* @__PURE__ */ jsx("input", {
				name: "company",
				autoComplete: "organization",
				required: true,
				maxLength: 200,
				placeholder: cmsText("Company name", "ContactForm:ManagedContactForm")
			})] }),
			/* @__PURE__ */ jsxs("label", { children: [cmsText("Project Description", "ContactForm:ManagedContactForm"), /* @__PURE__ */ jsx("textarea", {
				name: "message",
				rows: 3,
				required: true,
				minLength: 10,
				maxLength: 12e3,
				placeholder: cmsText("What would you like to connect, understand, or automate?", "ContactForm:ManagedContactForm")
			})] }),
			/* @__PURE__ */ jsxs("label", {
				style: {
					position: "absolute",
					left: "-10000px",
					height: 1,
					overflow: "hidden"
				},
				"aria-hidden": "true",
				children: ["Website", /* @__PURE__ */ jsx("input", {
					name: "website",
					tabIndex: -1,
					autoComplete: "off"
				})]
			}),
			/* @__PURE__ */ jsx("button", {
				className: "button",
				type: "submit",
				disabled: status === "sending",
				children: status === "sending" ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(LoaderCircle, { size: 17 }), cmsText("Sending enquiry…", "ContactForm:ManagedContactForm")] }) : status === "sent" ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Check, { size: 17 }), cmsText("Send another enquiry", "ContactForm:ManagedContactForm")] }) : /* @__PURE__ */ jsxs(Fragment, { children: [cmsText("Start a Conversation", "ContactForm:ManagedContactForm"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })] })
			}),
			/* @__PURE__ */ jsx("div", {
				className: "form-status",
				role: status === "error" ? "alert" : "status",
				"aria-live": "polite",
				children: message
			}),
			/* @__PURE__ */ jsxs("p", {
				className: "form-disclosure",
				children: [
					cmsText("Prefer email?", "ContactForm:ManagedContactForm"),
					" ",
					/* @__PURE__ */ jsx("a", {
						href: `mailto:${contactEmail}`,
						children: contactEmail
					})
				]
			})
		]
	});
}
// src/FisheriesFeature.tsx
function FisheriesFeature() {
	return /* @__PURE__ */ jsx("section", {
		className: "fisheries-feature",
		id: "fisheries360",
		children: /* @__PURE__ */ jsx("div", {
			className: "container",
			children: /* @__PURE__ */ jsxs("div", {
				className: "fisheries-layout",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsxs("span", {
						className: "eyebrow",
						children: [/* @__PURE__ */ jsx("span", { className: "label-line" }), cmsText("OUR PRODUCTS / FISHERIES360", "FisheriesFeature:FisheriesFeature:fisheries360")]
					}),
					/* @__PURE__ */ jsxs("h2", { children: [
						cmsText("Connected aquaculture.", "FisheriesFeature:FisheriesFeature:fisheries360"),
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("span", { children: cmsText("A clearer view of your business.", "FisheriesFeature:FisheriesFeature:fisheries360") })
					] }),
					/* @__PURE__ */ jsx("p", { children: cmsText("Fisheries360 brings pond leasing, fish stock, feed, farm activities, harvest, sales and payments into one business management platform.", "FisheriesFeature:FisheriesFeature:fisheries360") }),
					/* @__PURE__ */ jsx("p", { children: cmsText("Fisheries360 is our flagship IoT solution for aquaculture monitoring. By combining integrated IoT hardware with connected software, Fisheries360 supports monitoring of important fish-farming conditions and provides digital visibility into aquaculture operations. Device availability and integration scope are defined for each engagement.", "FisheriesFeature:FisheriesFeature:fisheries360") }),
					/* @__PURE__ */ jsxs("a", {
						className: "button",
						href: cmsLink("https://www.fisheries360.com/"),
						target: "_blank",
						rel: "noopener noreferrer",
						children: [cmsText("Explore Fisheries360", "FisheriesFeature:FisheriesFeature:fisheries360"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 16 })]
					})
				] }), /* @__PURE__ */ jsxs("div", {
					className: "fisheries-product",
					children: [
						/* @__PURE__ */ jsxs("header", { children: [
							/* @__PURE__ */ jsx(Fish, { size: 28 }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: cmsText("Fisheries360", "FisheriesFeature:FisheriesFeature:header") }), /* @__PURE__ */ jsx("span", { children: cmsText("Pond se Profit tak", "FisheriesFeature:FisheriesFeature:header") })] }),
							/* @__PURE__ */ jsx(Radio, { size: 19 })
						] }),
						/* @__PURE__ */ jsx("span", {
							className: "mono",
							children: cmsText("BUSINESS MANAGEMENT FOR FISHERIES ENTREPRENEURS", "FisheriesFeature:FisheriesFeature:fisheries360")
						}),
						/* @__PURE__ */ jsx("div", {
							className: "fisheries-modules",
							children: cmsText([
								"Pond & lease management",
								"Fish stock & production",
								"Feed & expense control",
								"Daily activity & fish health",
								"Harvest planning",
								"Sales & payment records",
								"Mobile dashboard & alerts",
								"Profitability reporting"
							].map((label) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Check, { size: 14 }), cmsText(label, "FisheriesFeature:FisheriesFeature:fisheries360")] }, label)), "FisheriesFeature:FisheriesFeature:fisheries360")
						}),
						/* @__PURE__ */ jsxs("footer", { children: [
							cmsText("From a single pond to multi-location operations.", "FisheriesFeature:FisheriesFeature:footer"),
							/* @__PURE__ */ jsx("br", {}),
							cmsText("Request a walkthrough tailored to your business.", "FisheriesFeature:FisheriesFeature:footer")
						] })
					]
				})]
			})
		})
	});
}
// src/projects-data.ts
var projects = [
	{
		id: "swaralaya",
		name: "Swaralaya School of Music",
		url: "https://www.swaralayaschoolofmusic.nl/",
		category: "education",
		label: "Music & education",
		description: "A music-school website connecting courses, performances and student enquiries.",
		tone: "#f3e8df",
		initials: "SW"
	},
	{
		id: "vicky-fashion",
		name: "Vicky Fashion",
		url: "https://vickyfashionams.nl/",
		category: "commerce",
		label: "Fashion & retail",
		description: "A fashion storefront with shopping and customer account experiences.",
		tone: "#f3e7ee",
		initials: "VF",
		note: "The website currently opens on its customer account page."
	},
	{
		id: "spice-bazaar",
		name: "SpiceBazaar",
		url: "https://spicebazaar.online/",
		category: "commerce",
		label: "Grocery & commerce",
		description: "An online grocery catalogue with product categories and shopping features.",
		tone: "#e9efe4",
		initials: "SB"
	},
	{
		id: "joy-travel",
		name: "Joy Travel Tours",
		url: "https://www.joytraveltours.nl/",
		category: "travel",
		label: "Travel & experiences",
		description: "European destinations, tour itineraries and travel enquiries in one experience.",
		tone: "#e6eef7",
		initials: "JT"
	},
	{
		id: "ligen-power",
		name: "Ligen Power",
		url: "https://ligenpower.com/",
		category: "business",
		label: "Energy & technology",
		description: "An energy-products website for inverters, battery management and solar solutions.",
		tone: "#e5eeed",
		initials: "LP"
	},
	{
		id: "holi-grill",
		name: "Holi Grill Almere",
		url: "https://holigrillalmere.nl/",
		category: "hospitality",
		label: "Food & hospitality",
		description: "A restaurant experience with a browsable grill menu and an ordering journey.",
		tone: "#f4e9de",
		initials: "HG"
	},
	{
		id: "tapasya",
		name: "Tapasya Reizen",
		url: "https://www.tapasyareizen.nl/",
		category: "travel",
		label: "Travel & experiences",
		description: "Curated journeys, destination discovery and personalised travel enquiries.",
		tone: "#e9e8df",
		initials: "TR"
	},
	{
		id: "savemax",
		name: "Save Max",
		url: "https://www.savemax.ro/",
		category: "business",
		label: "Property & real estate",
		description: "A property platform for browsing, saving and enquiring about real estate listings.",
		tone: "#e5eaf4",
		initials: "SM"
	},
	{
		id: "springdales",
		name: "Springdale’s International Girls School",
		url: "https://sigssitamarhi.in/",
		category: "education",
		label: "School & education",
		description: "School information, facilities and admissions brought into one digital destination.",
		tone: "#eee7f0",
		initials: "SI"
	},
	{
		id: "bihar-foundation",
		name: "Bihar Foundation Netherlands",
		url: "https://www.biharfoundationnl.org/",
		category: "education",
		label: "Community & culture",
		description: "Community news, cultural events and registration for the Netherlands chapter.",
		tone: "#f2e7df",
		initials: "BF"
	},
	{
		id: "malbis-kitchen",
		name: "Malbi’s Kitchen",
		url: "https://malbiskitchen.nl/",
		category: "hospitality",
		label: "Food & hospitality",
		description: "Surinamese cuisine, a detailed menu and a clear route to online ordering.",
		tone: "#ede8db",
		initials: "MK"
	}
];
var getProjects = () => getSiteContent()?.projects.filter((project) => project.visible !== false) || projects;
var getFeaturedProjectIds = () => getSiteContent()?.projects.filter((project) => project.featured && project.visible !== false).map((project) => project.id) || featuredProjectIds;
var projectDesktopImage = (project) => project.desktopImage || `/images/projects/${project.id}-desktop.jpg`;
var projectMobileImage = (project) => project.mobileImage || `/images/projects/${project.id}-mobile.jpg`;
var projectFilters = [
	["all", "All projects"],
	["commerce", "Commerce"],
	["education", "Education & culture"],
	["travel", "Travel"],
	["hospitality", "Hospitality"],
	["business", "Business & technology"]
];
var featuredProjectIds = [
	"ligen-power",
	"tapasya",
	"spice-bazaar",
	"swaralaya"
];
// src/page-details-content.ts
var serviceDepth = {
	"iot-solutions": {
		name: "IoT platforms & connectivity",
		lead: "A useful IoT platform connects more than devices. It connects the signal, the person responsible, and the action that should follow.",
		scenarios: [{
			title: "Equipment condition monitoring",
			context: "An operations team needs to understand changing equipment conditions across a facility without checking every asset manually.",
			flow: [
				"Capture a selected sensor reading",
				"Normalize the device and timestamp",
				"Review trends in an operational dashboard",
				"Route a threshold exception to the responsible team"
			],
			outcome: "An agreed view of asset conditions, an exception history, and a clear follow-up process. The pilot validates connectivity and useful signals before a wider rollout."
		}, {
			title: "Connected facility oversight",
			context: "Environmental readings and equipment states sit in separate building systems, making a shared operational view difficult.",
			flow: [
				"Identify available sensors and gateways",
				"Connect readings to a shared platform",
				"Group information by location and asset",
				"Create agreed notifications and review actions"
			],
			outcome: "A common monitoring workspace for the selected systems. Device support, network coverage, installation responsibilities, and alert behavior are confirmed during discovery."
		}],
		planning: [
			["Devices & protocols", "Review the existing hardware, available interfaces, gateway needs, and communication methods. Device compatibility is established before the platform architecture is committed."],
			["Data & connectivity", "Agree sampling frequency, time handling, retention, buffering, and behavior during interrupted connections. Capture the information the operation needs at a sustainable cost."],
			["Access & operations", "Define device identity, user roles, monitoring, update ownership, and alert escalation. The operating model is considered alongside the dashboard."]
		],
		brief: [
			"Equipment or asset list",
			"Available sensor/interface information",
			"Network and site constraints",
			"A practical pilot location"
		],
		faqs: [
			["Can you connect equipment we already own?", "We start by reviewing the available interfaces, protocols, permissions, and network conditions. Some assets may need a gateway or additional sensing; the assessment establishes what can be connected."],
			["Do we need to replace every sensor?", "A replacement is not assumed. We assess the existing devices and identify where reuse, adapters, or additional hardware make sense for the agreed monitoring objective."],
			["What happens when a connection is lost?", "Buffering, retry behavior, recovery, and connectivity alerts are defined around the selected devices and operational needs. The pilot should test the relevant interruption scenarios."],
			["Does a dashboard automatically control the equipment?", "Monitoring and control are different scopes. Any equipment-control functionality requires an explicit design, permitted interfaces, operating boundaries, and appropriate validation."],
			["Can we start with one machine or one site?", "Yes. A focused pilot can validate device connectivity, data quality, dashboard usefulness, and the follow-up workflow before deciding how to expand."],
			["What does the handover include?", "The agreed handover can include architecture, device mappings, platform access, alert rules, operational guidance, and support responsibilities. Hardware installation and maintenance ownership are defined in the engagement."]
		]
	},
	"ai-automation": {
		name: "AI & intelligent automation",
		lead: "Start with a decision or a repetitive process, then select the right combination of rules, data, models, and human review.",
		scenarios: [{
			title: "Review an unusual operating trend",
			context: "A team has operational history but needs a consistent way to surface changes that deserve a closer look.",
			flow: [
				"Prepare representative operating data",
				"Establish a baseline and evaluation criteria",
				"Flag a relevant deviation for review",
				"Record the decision and agreed follow-up"
			],
			outcome: "A validated decision-support workflow. Alerts are evaluated against representative scenarios, and the responsible person retains the context needed to decide what happens next."
		}, {
			title: "Connect a repetitive business handoff",
			context: "People repeatedly copy a request between systems, send a notification, and check whether someone has taken ownership.",
			flow: [
				"Receive an event from the source system",
				"Validate the required information",
				"Apply a rule or an approval step",
				"Update the destination and record the outcome"
			],
			outcome: "A traceable workflow with a defined owner, exception handling, and a manual fallback. AI is included only where it adds value to the specific decision."
		}],
		planning: [
			["Data readiness", "Check access, completeness, representative examples, and the meaning of each field. A useful model or workflow depends on information that reflects the real operating environment."],
			["Evaluation & review", "Agree what a useful result looks like, how errors are reviewed, and when a person must approve an action. Compare the solution with a practical baseline."],
			["Integration & monitoring", "Define triggers, downstream APIs, exception queues, monitoring, and change ownership. An automation needs an operating process after its first successful run."]
		],
		brief: [
			"A decision or repeated task",
			"Representative sample data",
			"Current tools and process owners",
			"Examples of exceptions or errors"
		],
		faqs: [
			["Does every automation need an AI model?", "No. Deterministic rules are often the clearest option for well-defined processes. We select rules, statistical methods, existing models, or custom development around the problem and available data."],
			["Can we explore AI before committing to a full platform?", "A defined proof of concept can test the use case, data readiness, and acceptance criteria. It should answer a specific feasibility question and inform the next investment decision."],
			["Can staff approve automated actions?", "Yes. Approval steps, review queues, permissions, and audit records can be included where the process needs human judgment or explicit authorization."],
			["How will we know whether it works?", "We agree evaluation criteria, relevant test scenarios, and a baseline before implementation. Results are reviewed in the context of the task, including incorrect or uncertain outputs."],
			["Can you use our existing applications?", "We review the available APIs, authentication, data access, and event mechanisms. Integration feasibility and third-party costs are confirmed before the delivery scope is agreed."],
			["What happens when a workflow fails?", "The design should cover retries, notifications, duplicate handling, exception ownership, and a recovery path. Those behaviors are validated against the scenarios agreed for the engagement."]
		]
	},
	"custom-software": {
		name: "Custom software & applications",
		lead: "A custom system should make a specific operation easier to run, with clear roles, dependable information, and a maintainable path forward.",
		scenarios: [{
			title: "An operations workspace",
			context: "Requests, inventory exceptions, and approvals are spread across spreadsheets and messages, leaving the next action unclear.",
			flow: [
				"Bring relevant records into one workspace",
				"Present work according to the user role",
				"Assign ownership and record decisions",
				"Connect approved updates to existing systems"
			],
			outcome: "A focused application with an agreed workflow, visibility into status, and a clear record of operational handoffs. Requirements determine the reports and integrations included."
		}, {
			title: "A customer or partner portal",
			context: "A business wants customers or partners to submit information and follow progress without relying on separate email conversations.",
			flow: [
				"Authenticate the user and confirm access",
				"Present the relevant forms and records",
				"Route submissions to the responsible team",
				"Share permitted status updates and documents"
			],
			outcome: "A defined self-service experience with role boundaries and a connected internal workflow. Content access, document handling, and notification rules are specified before implementation."
		}],
		planning: [
			["Product boundaries", "Define the users, critical tasks, permissions, and first release. Separate essential functionality from later improvements so the application solves a clear operational problem."],
			["System ownership", "Identify authoritative records, API responsibilities, data migration, identity, and hosting. Existing business platforms should have a clear place in the architecture."],
			["Release & support", "Agree acceptance scenarios, environments, backups, release ownership, documentation, and ongoing support scope. The application needs a practical handover as well as a launch."]
		],
		brief: [
			"Current workflow or screen examples",
			"Required user roles",
			"Systems that must connect",
			"First-release priorities"
		],
		faqs: [
			["When is custom software a sensible choice?", "It is useful when a specific workflow, integration, or user experience cannot be supported well by existing tools. Discovery should also consider configuration or integration of a suitable existing platform."],
			["Can an existing application be improved?", "We can assess the codebase, dependencies, hosting, data model, and integration constraints. That review informs whether focused improvement, modernization, or a replacement is appropriate."],
			["Do you build web and mobile applications?", "NekSoft provides website, web application, and mobile development. The delivery approach is selected around the intended users, required device features, and operating conditions."],
			["Can the system connect with Zoho or other platforms?", "We assess API availability, authentication, permissions, and synchronization needs. Supported integrations are documented in the agreed scope. Dedicated Zoho consultation is also available."],
			["How are changes handled during development?", "New requirements are reviewed for impact on the release, architecture, cost, and timeline. The team agrees priorities and any scope adjustment before the change becomes part of delivery."],
			["Who maintains the application after launch?", "Maintenance, monitoring, updates, and support can be included through an agreed engagement. Access, ownership, handover material, and operating responsibilities are clarified before delivery."]
		]
	},
	"zoho-consultation": {
		name: "Zoho consultation",
		lead: "Make the applications support the business process: define the records, decisions, and handoffs before deciding what to configure.",
		scenarios: [{
			title: "From enquiry to delivery handover",
			context: "A business needs a consistent route from an incoming enquiry to an accepted opportunity and a clear delivery handoff.",
			flow: [
				"Capture the enquiry with agreed fields",
				"Assign ownership and follow-up stages",
				"Review the required approval or decision",
				"Pass the agreed information to delivery"
			],
			outcome: "A documented customer workflow with clear record ownership and less repeated data entry between the selected applications."
		}, {
			title: "Connect an existing business platform",
			context: "Customer information, finance activity, and operational tasks sit in different tools and are difficult to reconcile.",
			flow: [
				"Map authoritative records and identifiers",
				"Agree the direction of each data exchange",
				"Configure supported workflows or APIs",
				"Validate reconciliation and exceptions"
			],
			outcome: "An integration plan that makes the selected systems work together while keeping data ownership, application boundaries, and exception handling clear."
		}],
		planning: [
			["Application selection", "Select applications around the actual process and user roles. Subscription levels, add-ons, and platform limits are reviewed before implementation."],
			["Migration & consistency", "Assess source data, duplicates, required fields, and historical records. Agree a migration approach and a validation process before importing business information."],
			["Adoption & handover", "Define permissions, user guidance, workflow ownership, and support. Configuration is reviewed with the people who will use the platform each day."]
		],
		brief: [
			"Applications currently in use",
			"An example business workflow",
			"User groups and access needs",
			"Data sources for possible migration"
		],
		faqs: [
			["Do we need Zoho subscriptions before starting?", "An initial discussion can establish the requirements first. Required subscriptions, editions, trial environments, and any third-party costs are confirmed before implementation."],
			["Can you work with an existing Zoho setup?", "Yes. The review can cover configuration, workflows, permissions, data quality, and integrations. We agree which improvements are practical within the current application setup."],
			["Is data migration included?", "Migration is scoped explicitly. The team agrees source formats, record volumes, cleansing responsibilities, historical data needs, and checks before any transfer."],
			["Can our website send enquiries into Zoho?", "Where supported interfaces and permissions are available, an enquiry workflow can connect the website and relevant Zoho application. Field mapping and duplicate handling are agreed first."],
			["Will our team receive guidance?", "User guidance, administrator handover, training needs, and post-implementation support are defined as part of the engagement rather than assumed."]
		]
	},
	"website-solutions": {
		name: "Website solutions",
		lead: "A business website needs a clear story, useful detail, and a next step that makes sense on every screen.",
		scenarios: [{
			title: "A service-led business website",
			context: "A company offers several services, but visitors struggle to understand which one addresses their specific need.",
			flow: [
				"Organize content around visitor questions",
				"Create clear service and industry pages",
				"Connect evidence and relevant enquiries",
				"Give the team an agreed content workflow"
			],
			outcome: "An easier-to-navigate website with a consistent message and clear routes from information to conversation."
		}, {
			title: "A catalogue or commerce experience",
			context: "A business needs customers to explore a product range and understand the path to an enquiry or purchase.",
			flow: [
				"Structure categories and product information",
				"Design search and product-detail journeys",
				"Connect the agreed cart or enquiry flow",
				"Validate content and mobile interactions"
			],
			outcome: "A considered product-discovery experience. Payment, order, stock, and fulfilment integrations depend on the platform and agreed requirements."
		}],
		planning: [
			["Content & ownership", "Confirm copy, imagery, translations, approvals, and the content-management setup. Design and development depend on a clear content structure."],
			["Discoverability & measurement", "Plan semantic pages, useful metadata, navigation, and agreed analytics. Search visibility is supported by good foundations and ongoing content work."],
			["Launch & continuity", "Review domain access, redirects, forms, hosting, and the content handover. A redesign should account for important existing URLs and business workflows."]
		],
		brief: [
			"Current website and references",
			"Priority audiences and pages",
			"Available brand and content assets",
			"Forms, CMS, and integration needs"
		],
		faqs: [
			["Can you redesign our existing website?", "Yes. A review can identify content, navigation, design, technical, and integration needs. Important existing URLs and the migration approach are included in planning."],
			["Will we be able to update content?", "The content workflow is chosen around your team. A CMS or another agreed editing approach can be included, with the required page types and access roles defined during discovery."],
			["Are mobile layouts included?", "Responsive behavior is part of the website brief. Navigation, typography, imagery, forms, and interactions are considered for the agreed screen sizes."],
			["Can you support multiple languages?", "Multilingual structure can be scoped where needed. We agree language ownership, translated content, navigation, metadata, and the process for keeping versions consistent."],
			["Does a new website guarantee search rankings?", "No specific ranking is promised. Technical foundations, useful content, and measurement can be part of the work; search performance also depends on competition, content, and continued activity."]
		]
	},
	"application-solutions": {
		name: "Application solutions",
		lead: "Give each person the information and actions they need, then connect the application to the systems that already run the business.",
		scenarios: [{
			title: "A request and approval workspace",
			context: "A team follows the same approval process through disconnected forms, email threads, and manually updated spreadsheets.",
			flow: [
				"Submit a structured request",
				"Apply role-based review and ownership",
				"Record the decision and any exceptions",
				"Update the connected business record"
			],
			outcome: "A clear application workflow with visible ownership, a review history, and defined handling for incomplete or rejected requests."
		}, {
			title: "An operational management dashboard",
			context: "Managers need relevant information from several tools without asking colleagues to prepare the same reports repeatedly.",
			flow: [
				"Identify the authoritative sources",
				"Agree the meaning of each measure",
				"Present role-relevant views and records",
				"Connect exceptions to useful actions"
			],
			outcome: "A shared operational view built around agreed definitions. Data refresh, quality, permissions, and reporting scope are established during discovery."
		}],
		planning: [
			["Roles & permissions", "Identify who can view, create, approve, and change records. Permission boundaries should reflect the real operating process."],
			["Data & integrations", "Define authoritative systems, APIs, identifiers, migration needs, and synchronization behavior before building dependent workflows."],
			["Acceptance & adoption", "Use representative tasks, user reviews, and documented acceptance scenarios. Training and handover should fit the people operating the application."]
		],
		brief: [
			"A workflow with real examples",
			"User roles and approval stages",
			"Required reports and integrations",
			"Current data and access constraints"
		],
		faqs: [
			["Can the application use our existing login system?", "We review the identity provider, supported protocols, user roles, and access requirements. The authentication approach is confirmed during architecture planning."],
			["Can different teams have different views?", "Yes. Role-based workspaces, permissions, and reporting can be designed around the agreed responsibilities and information boundaries."],
			["Do we need to migrate all historical data?", "Not necessarily. The team agrees which records must be available, what can remain archived, and how migration completeness will be checked."],
			["Can we release the application in stages?", "A staged release can focus on the most important workflow first. Dependencies, migration, user onboarding, and compatibility between releases are planned together."],
			["What is included in testing?", "The agreed checks can cover user journeys, permissions, integrations, validation, and relevant failure scenarios. Acceptance criteria are defined before the release is approved."]
		]
	},
	"design-solutions": {
		name: "Design solutions",
		lead: "Create a usable visual system by connecting content, interaction, and the practical constraints of the product.",
		scenarios: [{
			title: "A clearer product experience",
			context: "A product has accumulated screens and features, but users struggle to understand the most important tasks.",
			flow: [
				"Map the priority tasks and friction points",
				"Explore structure through wireframes",
				"Prototype key interactions and states",
				"Document the agreed design for engineering"
			],
			outcome: "A reviewable experience direction and a practical set of screens, components, and interaction states for the agreed product scope."
		}, {
			title: "A consistent brand across touchpoints",
			context: "A business needs its website, application, and marketing materials to feel connected while serving different audiences.",
			flow: [
				"Review the existing identity and content",
				"Define typography, color, and layout principles",
				"Apply the system to representative touchpoints",
				"Prepare reusable assets and guidance"
			],
			outcome: "A consistent visual foundation that supports the selected channels without forcing every experience into the same layout."
		}],
		planning: [
			["Audience & tasks", "Agree who the experience serves and which decisions or tasks matter most. These priorities guide the content hierarchy and interaction design."],
			["States & accessibility", "Design focus, error, empty, loading, and responsive states alongside the main screens. Contrast and readable content are part of the visual system."],
			["Handover & scope", "Clarify the screens, components, prototype depth, feedback rounds, and implementation support included in the engagement."]
		],
		brief: [
			"Existing brand or interface assets",
			"Priority user tasks",
			"Screen or page requirements",
			"Product and engineering constraints"
		],
		faqs: [
			["Can design be a standalone engagement?", "Yes. Research framing, wireframes, interface design, prototypes, or a design system can be scoped separately, with the required handover outputs agreed upfront."],
			["Will you work with our existing brand?", "Existing brand rules, assets, and product constraints can guide the work. Any proposed change to the identity is discussed rather than assumed."],
			["Are developer-ready files included?", "The handover can include layouts, components, interaction states, responsive guidance, and assets. The level of detail is agreed with the implementation team."],
			["How do feedback and revisions work?", "We agree decision-makers, review stages, and the scope of feedback. Changes that affect the approved direction or deliverables are reviewed for their impact on the engagement."],
			["Can you improve an existing application interface?", "Yes. A focused review can identify navigation, consistency, content, and task-flow issues before defining the screens or components to redesign."]
		]
	},
	"saas-solutions": {
		name: "SaaS solutions",
		lead: "Define a useful first release and an operating model that can support the product after its first users arrive.",
		scenarios: [{
			title: "Launch a focused product release",
			context: "A business has a product concept and needs to establish the smallest release that delivers a complete, useful workflow.",
			flow: [
				"Define target users and the core task",
				"Agree first-release boundaries",
				"Build onboarding and the essential workspace",
				"Validate use and prioritize the next release"
			],
			outcome: "A scoped product release with acceptance criteria, an agreed architecture, and a clearer basis for future product decisions."
		}, {
			title: "Build a shared platform for customer accounts",
			context: "A service needs separate customer workspaces, role-based access, and central operating visibility.",
			flow: [
				"Define accounts and tenant boundaries",
				"Create permissions and data access rules",
				"Connect required platform services",
				"Prepare administration and support workflows"
			],
			outcome: "A platform structure designed around account separation and operational ownership. Billing, provisioning, and compliance requirements are scoped explicitly."
		}],
		planning: [
			["Tenant & account model", "Agree account creation, membership, role boundaries, data separation, and administrator access. The model should match the product and commercial workflow."],
			["Platform services", "Review authentication, billing needs, notifications, APIs, storage, and external service limits. Avoid assuming that every product needs the same infrastructure."],
			["Operating readiness", "Plan environments, monitoring, release and recovery processes, support ownership, and change management alongside the feature roadmap."]
		],
		brief: [
			"The user problem and first workflow",
			"Account or subscription model",
			"Essential third-party integrations",
			"Initial operating and release needs"
		],
		faqs: [
			["Can you help define an MVP?", "Yes. Product discovery can define the target user, core workflow, assumptions, acceptance criteria, and a focused first release before development begins."],
			["Can the product support separate customer accounts?", "Account models, tenant boundaries, permissions, and data access can be designed around the proposed product. The isolation requirements are confirmed during architecture."],
			["Is subscription billing included?", "Billing is a specific integration scope. Pricing models, payment providers, tax handling, account states, and cancellation behavior need to be agreed before implementation."],
			["Can the platform grow after launch?", "The architecture and roadmap should account for the expected operating needs. Capacity assumptions, dependencies, and constraints are reviewed as the product evolves."],
			["Who operates the product?", "Hosting, monitoring, support, release access, and recovery responsibilities are agreed with the product owner. Ongoing support can be scoped separately from the first release."]
		]
	},
	"mobile-development": {
		name: "Mobile development",
		lead: "Design for real use: short tasks, touch interaction, changing connectivity, and a clear connection to the wider operation.",
		scenarios: [{
			title: "A field-service companion",
			context: "Colleagues need to review assigned work and record updates while moving between locations.",
			flow: [
				"Authenticate and load permitted tasks",
				"Present the next useful field action",
				"Capture an agreed update or attachment",
				"Synchronize and notify the office team"
			],
			outcome: "A focused field workflow with clear handling for permissions, connection requirements, and the selected device capabilities."
		}, {
			title: "A customer-facing mobile experience",
			context: "A business needs customers to interact with a service through a dedicated mobile journey.",
			flow: [
				"Create a clear onboarding path",
				"Present relevant content or account information",
				"Connect the agreed service interaction",
				"Explain confirmation and follow-up states"
			],
			outcome: "A mobile product aligned with the selected platforms and customer tasks. Notifications, payments, and store release requirements are confirmed during planning."
		}],
		planning: [
			["Platforms & devices", "Confirm iOS, Android, supported devices, required native features, and accessibility expectations before selecting a development approach."],
			["Connectivity & data", "Define which tasks require a connection, how pending updates behave, and how conflicts or failures are presented to the user."],
			["Release & maintenance", "Agree store-account ownership, review responsibilities, distribution, supported versions, and the process for future operating-system updates."]
		],
		brief: [
			"Target users and mobile tasks",
			"Required platforms and device features",
			"Backend or API information",
			"Offline and notification requirements"
		],
		faqs: [
			["Can the app support both iOS and Android?", "Both platforms can be considered. The choice of shared or platform-specific implementation depends on the features, user experience, device needs, and maintenance requirements."],
			["Can the application work offline?", "Offline behavior can be scoped for selected tasks. Local storage, synchronization, conflict handling, and data access require explicit design and validation."],
			["Can the app connect to our existing backend?", "We review the available APIs, authentication, data contracts, and performance expectations. Any required backend changes are identified during planning."],
			["Do you handle app-store release?", "Release guidance or submission support can be included in the agreed scope. Store accounts, required information, approvals, and ongoing ownership remain clearly assigned."],
			["What happens after a mobile OS update?", "Compatibility checks and ongoing maintenance can be covered by a support engagement. Supported versions and update responsibilities are agreed before release."]
		]
	},
	"digital-marketing": {
		name: "Digital marketing",
		lead: "Connect the message, the channel, and the destination. A useful campaign gives the audience a relevant next step.",
		scenarios: [{
			title: "A service enquiry campaign",
			context: "A business wants a clear message and landing experience for one service and a defined audience.",
			flow: [
				"Agree the audience and campaign objective",
				"Create consistent content and landing pages",
				"Connect the approved distribution channels",
				"Review enquiries and relevant website actions"
			],
			outcome: "A coordinated campaign foundation with agreed measurement and a clear route from the message to a business conversation."
		}, {
			title: "Improve a website content journey",
			context: "A company needs its pages to answer audience questions more clearly and support relevant discovery.",
			flow: [
				"Review content and site structure",
				"Prioritize useful audience questions",
				"Improve the agreed pages and metadata",
				"Review discovery and engagement signals"
			],
			outcome: "A focused content action plan and a stronger connection between what visitors search for, what they read, and the next action available."
		}],
		planning: [
			["Objectives & audience", "Agree the intended audience, offer, geography, channels, and the actions that matter. A clear brief makes campaign decisions easier to review."],
			["Content & permissions", "Confirm available assets, approval ownership, account access, brand rules, and publishing responsibilities before activation."],
			["Measurement & budgets", "Define meaningful events, consent requirements, reporting, campaign budget, and platform costs. Results are reviewed against the agreed objective and market context."]
		],
		brief: [
			"Priority services and audiences",
			"Current website and channel links",
			"Available content and brand assets",
			"Campaign objectives and budget range"
		],
		faqs: [
			["Can you support an existing marketing setup?", "Yes. The engagement can begin with a review of the current website, channels, content, measurement, and account access before agreeing specific improvements."],
			["Are advertising costs included?", "Campaign management, creative work, platform spend, and other third-party costs are scoped separately so the budget and responsibilities are clear."],
			["Can you improve search visibility?", "Technical foundations, content structure, page information, and relevant search work can be included. Specific rankings or traffic results are not guaranteed."],
			["What reporting will we receive?", "The team agrees the measures, reporting frequency, and decision context. Useful reporting connects relevant activity and enquiries to the purpose of the campaign."],
			["Can you create the landing page as well?", "Website, design, and marketing work can be connected within one scoped engagement. Content approvals, integrations, and the enquiry journey are agreed before publication."]
		]
	},
	"recruitment-skills": {
		name: "Recruitment & skills",
		lead: "Make the role and its relevant capabilities clear before building the recruitment or skills-development process around them.",
		scenarios: [{
			title: "Structure a technical role brief",
			context: "A business has a hiring need but needs clearer responsibilities, capability expectations, and review stages.",
			flow: [
				"Define the work and operating context",
				"Agree relevant skills and experience",
				"Prepare a consistent review framework",
				"Assign ownership across the recruitment stages"
			],
			outcome: "A clearer role brief and a coordinated process for role-relevant discussion. Selection decisions remain with the employer."
		}, {
			title: "Identify a practical skills-development need",
			context: "A team wants to connect a capability discussion with the work people need to perform.",
			flow: [
				"Identify the task or capability gap",
				"Agree relevant learning objectives",
				"Structure an appropriate development plan",
				"Review progress against the agreed objectives"
			],
			outcome: "A focused framework for development and review. Training format, prerequisites, availability, and any assessment outputs are agreed for the engagement."
		}],
		planning: [
			["Role context", "Clarify responsibilities, working arrangements, relevant capabilities, and the people involved in the decision. Separate essential requirements from preferences."],
			["Consistent review", "Use role-relevant topics and a clear process for discussion, documentation, and ownership. Candidate information needs appropriate access and handling."],
			["Development scope", "Agree the intended skills, starting knowledge, learning format, and review approach. Hiring, certification, or placement outcomes are not assumed."]
		],
		brief: [
			"Role or capability requirements",
			"Relevant working context",
			"Recruitment or development stages",
			"Decision-makers and coordination needs"
		],
		faqs: [
			["Is this only a recruitment service?", "The discussion can cover role definition, recruitment coordination, or a skills-development need. The exact activities and deliverables are confirmed for each engagement."],
			["Can you help improve a role brief?", "Yes. Responsibilities, relevant capabilities, working context, and review stages can be structured into a clearer brief."],
			["Who makes the hiring decision?", "The employer owns selection and hiring decisions. Responsibilities, criteria, communication, and candidate-data handling should be agreed before the process begins."],
			["Is a job placement or certification guaranteed?", "No placement, certification, or hiring outcome is assumed. Any training or assessment offering must state its actual scope, prerequisites, and outputs clearly."],
			["How do we discuss training needs?", "Start with the tasks people need to perform and their current knowledge. Learning objectives, format, availability, and the review approach can then be discussed."]
		]
	}
};
var industryDepth = {
	Manufacturing: [
		["Connect", "Selected machine signals, sensors, gateways, and available production-system interfaces."],
		["Make visible", "Asset condition, operational events, and the exceptions that require a person to review them."],
		["Coordinate action", "Assign alerts, create an agreed maintenance handoff, and record the resolution."],
		["Validate first", "Check signal quality, equipment compatibility, network coverage, and the usefulness of alerts at a pilot asset."]
	],
	Logistics: [
		["Connect", "Available shipment, tracking, warehouse, and business-platform data sources."],
		["Make visible", "Shipment status, milestones, ownership, and relevant operational exceptions."],
		["Coordinate action", "Route a delay or missing update to the responsible team and communicate agreed status changes."],
		["Validate first", "Confirm source-data freshness, tracking availability, identifiers, and integration permissions."]
	],
	"Smart Facilities": [
		["Connect", "Selected environmental sensors, equipment states, gateways, and permitted building-system interfaces."],
		["Make visible", "Relevant conditions across locations and the context needed to review an exception."],
		["Coordinate action", "Create a facility task or notification with an owner and a clear escalation route."],
		["Validate first", "Assess installation access, network coverage, sensor placement, and any boundary between monitoring and control."]
	],
	Retail: [
		["Connect", "Agreed product, inventory, sales, and business-management information."],
		["Make visible", "Stock exceptions, replenishment needs, and operational reports with consistent definitions."],
		["Coordinate action", "Route a low-stock review, update a connected record, or notify the relevant store or operations team."],
		["Validate first", "Identify authoritative inventory records, synchronization behavior, and the platform APIs available."]
	]
};
var pageFAQs = {
	"/": [
		["What kind of projects can we discuss with NekSoft?", "Connected devices, operational monitoring, AI-assisted workflows, automation, and custom software are central to the current focus. Website, mobile, Zoho, design, and related digital services are also available to discuss."],
		["Can we begin with a small pilot?", "A defined assessment or pilot can establish feasibility before a larger build. The first step should test a useful business question, with agreed boundaries and acceptance criteria."],
		["Do we need to know the technology we want?", "No. Start with the process, users, or operational problem. Existing systems, constraints, and desired outcomes help shape the technical discussion."],
		["How are budget and timing established?", "Scope, integrations, data readiness, content, hardware, and review requirements affect the estimate. A proposal follows an appropriate understanding of those dependencies."]
	],
	"/solutions": [
		["Which service is the right starting point?", "Start with the business need: visibility may point to IoT; repeated handoffs to automation; a specific user workflow to an application; and a business-platform requirement to Zoho consultation. The services can be combined where needed."],
		["Can multiple services be part of one project?", "Yes. A connected project may include devices, software, design, integrations, and automation. Scope, dependencies, and ownership are defined together rather than treating each component independently."],
		["Can you assess an existing platform before recommending a rebuild?", "An assessment can review the current workflow, code or platform configuration, integrations, and operating constraints. Configuration or focused improvement may be a suitable option."],
		["What should an initial discussion produce?", "A useful starting discussion clarifies the problem, relevant users, existing systems, assumptions, and the next information needed. Any paid discovery or delivery scope is agreed separately."]
	],
	"/industries": [
		["Do these examples describe completed customer projects?", "They are potential applications for discussion. They illustrate how connected systems could support a specific operation; they are not presented as customer results or delivery claims."],
		["Can a solution be adapted to our operating environment?", "The discovery work considers equipment, users, network conditions, systems, access, and operational responsibilities. The implementation depends on that environment."],
		["Can we start at one location?", "A focused asset, workflow, or site can be a sensible pilot. Acceptance criteria should establish what must be learned before expansion is considered."],
		["How do you decide what data to collect?", "The operating question comes first. We identify the signals and records needed to support that question, then agree quality, access, retention, and review needs."]
	],
	"/approach": [
		["Does every project need all five stages?", "The activities are scaled to the engagement. A consultation or assessment may be focused on discovery; a connected implementation may need prototyping, engineering, integration, and ongoing support."],
		["How are approvals handled?", "The engagement should identify decision-makers, review checkpoints, and acceptance criteria. A stage can be reviewed against its agreed outputs before dependent work continues."],
		["What if requirements change?", "A change is reviewed for its effect on scope, architecture, cost, dependencies, and timing. Priorities and any adjustment are agreed before the change becomes part of delivery."],
		["What happens after launch?", "Operating guidance, access, known limitations, and support responsibilities are handed over as agreed. Maintenance and future improvements can be covered through a defined support engagement."],
		["Can our internal team stay involved?", "Yes. Product ownership, engineering reviews, integrations, and handover can involve your team. Clear responsibilities and access help the collaboration work smoothly."]
	],
	"/about": [
		["Where is NekSoft based?", "NekSoft Consultancy Services is headquartered in Almere, Netherlands, with a delivery team in India and a presence in Germany. The office section lists the published contact details."],
		["What is the current technology focus?", "The focus brings IoT, artificial intelligence, and automation together with software engineering. Website, mobile, Zoho, design, marketing, and people-related services remain part of the wider capabilities."],
		["Can we meet the people behind the company?", "The team directory introduces the ten people listed on the original company website, with their published names, roles, and portraits. Select a profile to learn about their area of responsibility."],
		["How do we start working together?", "Share the process or product you want to improve and the systems involved. A project discussion can establish the relevant capability, information needs, and next step."]
	],
	"/contact": [
		["What should I include in my enquiry?", "Explain the problem, who experiences it, the systems involved, and what a useful outcome would look like. A high-level budget or timing context is helpful if it is available."],
		["Do I need a complete specification?", "No. An initial conversation can begin with a process, a set of examples, or a product idea. The next step depends on how much is known and what needs to be validated."],
		["Does this form send my enquiry automatically?", "The form prepares an email in your email application. Review the draft and send it there. If the application does not open, use the direct email link or copy the prepared enquiry."],
		["Can I contact a regional office directly?", "The published Netherlands, India, and Germany telephone details are shown on this page. Email is also available at info@neksoftconsultancy.com."],
		["Can we discuss an existing system?", "Yes. Share a high-level description of the workflow, platform, and issue. The team can agree what documentation or access is appropriate for an assessment."]
	],
	"/projects": [
		["Are these live website previews?", "The gallery uses actual desktop and mobile website snapshots. Open live website takes you to the current external website, which may have changed since capture."],
		["Can I explore the mobile version?", "Open a project preview and choose Mobile. Use the live website link to explore its current interactive behavior."],
		["Do the previews show the full project scope?", "No. The collection shows visible website experiences and public features. It does not claim delivery dates, technology stacks, business results, or a commercial scope that has not been supplied."],
		["Can we use a project as a reference for a new website?", "Yes. Share the experiences you find useful, together with your own audience, content, and business requirements. The new website should have a design and structure appropriate to your brand."]
	]
};
var projectHighlights = {
	swaralaya: ["Music learning information", "Performances and school enquiries"],
	"vicky-fashion": ["Customer account access", "Fashion brand website"],
	"spice-bazaar": ["Grocery product catalogue", "Product categories and shopping"],
	"joy-travel": ["Destinations and tour information", "Travel planning enquiries"],
	"ligen-power": ["Energy-product information", "Solar and battery-related solutions"],
	"holi-grill": ["Restaurant menu discovery", "Online ordering entry point"],
	tapasya: ["Curated destination information", "Personalised travel enquiries"],
	savemax: ["Property listing discovery", "Property enquiries and saved listings"],
	springdales: ["School and facility information", "Admissions information"],
	"bihar-foundation": ["Community news and cultural events", "Event registration information"],
	"malbis-kitchen": ["Surinamese food and menu", "Online ordering journey"]
};
// src/project-mobile-captures.ts
var mobileCaptures = {
	"bihar-foundation": {
		"width": 382,
		"height": 826,
		"trimRight": 15,
		"trimBottom": 0
	},
	"holi-grill": {
		"width": 375,
		"height": 811,
		"trimRight": 15,
		"trimBottom": 0
	},
	"joy-travel": {
		"width": 381,
		"height": 824,
		"trimRight": 15,
		"trimBottom": 0
	},
	"ligen-power": {
		"width": 375,
		"height": 811,
		"trimRight": 15,
		"trimBottom": 15
	},
	"malbis-kitchen": {
		"width": 380,
		"height": 822,
		"trimRight": 15,
		"trimBottom": 0
	},
	"savemax": {
		"width": 385,
		"height": 832,
		"trimRight": 15,
		"trimBottom": 0
	},
	"spice-bazaar": {
		"width": 375,
		"height": 804,
		"trimRight": 0,
		"trimBottom": 0
	},
	"springdales": {
		"width": 378,
		"height": 817,
		"trimRight": 15,
		"trimBottom": 0
	},
	"swaralaya": {
		"width": 380,
		"height": 822,
		"trimRight": 15,
		"trimBottom": 0
	},
	"tapasya": {
		"width": 375,
		"height": 811,
		"trimRight": 15,
		"trimBottom": 0
	},
	"vicky-fashion": {
		"width": 375,
		"height": 811,
		"trimRight": 15,
		"trimBottom": 0
	}
};
// src/ProjectMobilePreview.tsx
function ProjectMobilePreview({ project, compact = false }) {
	const captionId = useId();
	const [failed, setFailed] = useState(false);
	const capture = project.mobileImage && project.mobileImage !== `/images/projects/${project.id}-mobile.jpg` ? {
		width: project.mobileWidth || 390,
		height: project.mobileHeight || 844,
		trimRight: 0,
		trimBottom: 0
	} : mobileCaptures[project.id] || {
		width: 390,
		height: 844,
		trimRight: 0,
		trimBottom: 0
	};
	const width = capture.width - capture.trimRight;
	const height = capture.height - capture.trimBottom;
	return /* @__PURE__ */ jsxs("figure", {
		className: `project-mobile-preview ${compact ? "compact-device" : ""}`,
		"aria-describedby": captionId,
		style: {
			"--capture-ratio": `${width} / ${height}`,
			"--capture-image-width": `${capture.width / width * 100}%`,
			"--device-max-width": `${width + 12}px`
		},
		children: [/* @__PURE__ */ jsxs("div", {
			className: "project-phone-frame",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "project-phone-chrome",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "project-phone-speaker",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ jsxs("span", {
							className: "project-phone-address",
							children: [/* @__PURE__ */ jsx(Globe2, {
								size: 10,
								"aria-hidden": "true"
							}), cmsText(new URL(project.url).hostname.replace(/^www\./, ""), "ProjectMobilePreview:ProjectMobilePreview")]
						}),
						/* @__PURE__ */ jsx("span", {
							className: "project-phone-dot",
							"aria-hidden": "true"
						})
					]
				}),
				cmsText(failed ? /* @__PURE__ */ jsxs("div", {
					className: "project-mobile-error",
					role: "status",
					children: [
						/* @__PURE__ */ jsx("span", { children: cmsText("Preview unavailable", "ProjectMobilePreview:ProjectMobilePreview") }),
						/* @__PURE__ */ jsx("p", { children: cmsText("Open the live website to explore this project.", "ProjectMobilePreview:ProjectMobilePreview") }),
						/* @__PURE__ */ jsx("a", {
							href: cmsLink(project.url),
							target: "_blank",
							rel: "noopener noreferrer",
							children: cmsText("Open live website", "ProjectMobilePreview:ProjectMobilePreview")
						})
					]
				}) : /* @__PURE__ */ jsx("div", {
					className: "mobile-capture-window",
					children: /* @__PURE__ */ jsx("img", {
						className: "mobile-capture-image",
						src: cmsAsset(projectMobileImage(project)),
						alt: cmsText(`Mobile screenshot of ${project.name}`, "ProjectMobilePreview:ProjectMobilePreview"),
						width: capture.width,
						height: capture.height,
						decoding: "async",
						draggable: false,
						onError: () => setFailed(true)
					})
				}), "ProjectMobilePreview:ProjectMobilePreview"),
				/* @__PURE__ */ jsx("span", {
					className: "project-phone-home",
					"aria-hidden": "true",
					children: /* @__PURE__ */ jsx("i", {})
				})
			]
		}), /* @__PURE__ */ jsxs("figcaption", {
			id: captionId,
			children: [/* @__PURE__ */ jsx(MoveVertical, {
				size: 12,
				"aria-hidden": "true"
			}), /* @__PURE__ */ jsx("span", { children: cmsText("Scroll to explore the captured view.", "ProjectMobilePreview:ProjectMobilePreview") })]
		})]
	});
}
// src/project-embed-support.ts
var projectEmbedSupport = {
	"swaralaya": "blocked",
	"vicky-fashion": "blocked",
	"spice-bazaar": "blocked",
	"joy-travel": "candidate",
	"ligen-power": "candidate",
	"holi-grill": "candidate",
	"tapasya": "blocked",
	"savemax": "blocked",
	"springdales": "blocked",
	"bihar-foundation": "blocked",
	"malbis-kitchen": "candidate"
};
var candidateDomains = {
	"joy-travel": "joytraveltours.nl",
	"ligen-power": "ligenpower.com",
	"holi-grill": "holigrillalmere.nl",
	"malbis-kitchen": "malbiskitchen.nl"
};
var canAttemptProjectEmbed = (id, address) => {
	if (projectEmbedSupport[id] !== "candidate") return false;
	if (!address) return true;
	try {
		return new URL(address).hostname.replace(/^www\./, "") === candidateDomains[id];
	} catch {
		return false;
	}
};
// src/ProjectLivePreview.tsx
function ProjectLivePreview({ project, device, onSnapshots }) {
	const embeddable = canAttemptProjectEmbed(project.id, project.url);
	const [reload, setReload] = useState(0);
	const [status, setStatus] = useState("loading");
	const helpId = useId();
	const hostname = new URL(project.url).hostname.replace(/^www\./, "");
	useEffect(() => {
		if (!embeddable || status !== "loading") return;
		const timer = window.setTimeout(() => setStatus("slow"), 12e3);
		return () => window.clearTimeout(timer);
	}, [
		embeddable,
		status,
		reload
	]);
	if (!embeddable) return /* @__PURE__ */ jsxs("section", {
		className: "live-project-unavailable",
		"aria-label": cmsText("Open this client website", "ProjectLivePreview:ProjectLivePreview:live-project-unavailable"),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "live-project-invitation",
			children: [
				/* @__PURE__ */ jsxs("span", {
					className: "mono",
					children: [/* @__PURE__ */ jsx(ExternalLink, { size: 13 }), cmsText("THE COMPLETE WEBSITE", "ProjectLivePreview:ProjectLivePreview:live-project-unavailable")]
				}),
				/* @__PURE__ */ jsxs("h3", { children: [
					cmsText("Explore ", "ProjectLivePreview:ProjectLivePreview:live-project-unavailable"),
					cmsText(project.name, "ProjectLivePreview:ProjectLivePreview:live-project-unavailable"),
					/* @__PURE__ */ jsx("br", {}),
					cmsText("in full.", "ProjectLivePreview:ProjectLivePreview:live-project-unavailable")
				] }),
				/* @__PURE__ */ jsx("p", { children: cmsText("This website restricts embedded viewing. Open it in its own tab to browse the complete experience.", "ProjectLivePreview:ProjectLivePreview:live-project-unavailable") }),
				/* @__PURE__ */ jsxs("a", {
					className: "button",
					href: cmsLink(project.url),
					target: "_blank",
					rel: "noopener noreferrer",
					children: [
						cmsText("Open full website", "ProjectLivePreview:ProjectLivePreview:live-project-unavailable"),
						/* @__PURE__ */ jsx(ArrowUpRight, { size: 16 }),
						/* @__PURE__ */ jsx("span", {
							className: "sr-only",
							children: cmsText(" (opens in a new tab)", "ProjectLivePreview:ProjectLivePreview:live-project-unavailable")
						})
					]
				}),
				/* @__PURE__ */ jsxs("button", {
					className: "live-snapshots-link",
					type: "button",
					onClick: onSnapshots,
					children: [/* @__PURE__ */ jsx(Image, { size: 14 }), cmsText("View captured previews here", "ProjectLivePreview:ProjectLivePreview:live-project-unavailable")]
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "live-project-cover",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "live-cover-address",
					children: [/* @__PURE__ */ jsx(Globe2, { size: 12 }), cmsText(hostname, "ProjectLivePreview:ProjectLivePreview:live-project-unavailable")]
				}),
				/* @__PURE__ */ jsx("img", {
					src: cmsAsset(projectDesktopImage(project)),
					width: "1440",
					height: "1000",
					alt: cmsText("", "ProjectLivePreview:ProjectLivePreview:live-project-unavailable")
				}),
				/* @__PURE__ */ jsx("span", { children: cmsText("Captured website preview", "ProjectLivePreview:ProjectLivePreview:live-project-unavailable") })
			]
		})]
	});
	return /* @__PURE__ */ jsx("section", {
		className: `live-project-stage ${device}`,
		"aria-label": cmsText(`${device === "mobile" ? "Mobile" : "Desktop"} interactive website`, "ProjectLivePreview:ProjectLivePreview:section"),
		children: /* @__PURE__ */ jsxs("div", {
			className: "live-project-browser",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "live-project-address",
					children: [/* @__PURE__ */ jsxs("span", { children: [
						/* @__PURE__ */ jsx("i", { "aria-hidden": "true" }),
						/* @__PURE__ */ jsx(Globe2, { size: 12 }),
						cmsText(hostname, "ProjectLivePreview:ProjectLivePreview:section")
					] }), /* @__PURE__ */ jsx("button", {
						type: "button",
						"aria-label": cmsText("Reload client website", "ProjectLivePreview:ProjectLivePreview:section"),
						onClick: () => {
							setStatus("loading");
							setReload((value) => value + 1);
						},
						children: /* @__PURE__ */ jsx(RotateCw, { size: 14 })
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "live-project-viewport",
					children: [/* @__PURE__ */ jsx("iframe", {
						className: "live-project-iframe",
						src: cmsAsset(project.url),
						title: cmsText(`Live ${device} website: ${project.name}`, "ProjectLivePreview:ProjectLivePreview:section"),
						"aria-describedby": helpId,
						referrerPolicy: "strict-origin-when-cross-origin",
						sandbox: "allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-downloads allow-modals allow-top-navigation-by-user-activation",
						onLoad: () => setStatus("settled")
					}, reload), cmsText(status === "loading" && /* @__PURE__ */ jsxs("div", {
						className: "live-project-loading",
						role: "status",
						children: [/* @__PURE__ */ jsx(LoaderCircle, { size: 23 }), /* @__PURE__ */ jsx("span", { children: cmsText("Opening the live website…", "ProjectLivePreview:ProjectLivePreview:section") })]
					}), "ProjectLivePreview:ProjectLivePreview:section")]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "live-project-help",
					id: helpId,
					children: [/* @__PURE__ */ jsx("p", { children: cmsText(status === "slow" ? "Website not appearing? Open it directly or view the captured previews." : "Browse and scroll the live website. For sign-in or checkout, open it in its own tab.", "ProjectLivePreview:ProjectLivePreview:section") }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("a", {
						href: cmsLink(project.url),
						target: "_blank",
						rel: "noopener noreferrer",
						children: [
							cmsText("Open website", "ProjectLivePreview:ProjectLivePreview:section"),
							/* @__PURE__ */ jsx(ExternalLink, { size: 12 }),
							/* @__PURE__ */ jsx("span", {
								className: "sr-only",
								children: cmsText(" (opens in a new tab)", "ProjectLivePreview:ProjectLivePreview:section")
							})
						]
					}), /* @__PURE__ */ jsxs("button", {
						type: "button",
						onClick: onSnapshots,
						children: [cmsText("View snapshots", "ProjectLivePreview:ProjectLivePreview:section"), /* @__PURE__ */ jsx(Image, { size: 12 })]
					})] })]
				})
			]
		})
	});
}
// src/PortfolioExperience.tsx
function domain(url) {
	return new URL(url).hostname.replace(/^www\./, "");
}
function searchable(value) {
	return value.normalize("NFD").replace(/\p{Diacritic}/gu, "").replace(/[’']/g, "").toLowerCase().trim();
}
function BrowserBar({ url }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "project-browser-bar",
		children: [
			/* @__PURE__ */ jsxs("span", {
				className: "browser-dots",
				"aria-hidden": "true",
				children: [
					/* @__PURE__ */ jsx("i", {}),
					/* @__PURE__ */ jsx("i", {}),
					/* @__PURE__ */ jsx("i", {})
				]
			}),
			/* @__PURE__ */ jsxs("span", {
				className: "project-domain",
				children: [/* @__PURE__ */ jsx(Globe2, { size: 9 }), cmsText(domain(url), "PortfolioExperience:BrowserBar")]
			}),
			/* @__PURE__ */ jsx(ArrowUpRight, {
				size: 10,
				"aria-hidden": "true"
			})
		]
	});
}
function useProjectPreview() {
	const [selected, setSelected] = useState(null);
	const [device, setDevice] = useState("desktop");
	const [mode, setMode] = useState("live");
	const dialog = useRef(null);
	const opener = useRef(null);
	const isOpen = selected !== null;
	const open = (project, trigger, startDevice) => {
		opener.current = trigger;
		setMode(canAttemptProjectEmbed(project.id, project.url) ? "live" : "snapshot");
		setDevice(startDevice ?? (matchMedia("(max-width: 700px)").matches ? "mobile" : "desktop"));
		setSelected(project);
	};
	const navigate = (project) => {
		if (!canAttemptProjectEmbed(project.id, project.url)) setMode("snapshot");
		setSelected(project);
	};
	const close = () => {
		dialog.current?.close();
		setSelected(null);
		opener.current?.focus();
	};
	useEffect(() => {
		if (!isOpen) return;
		const element = dialog.current;
		element?.showModal();
		document.body.classList.add("project-preview-open");
		return () => {
			element?.close();
			document.body.classList.remove("project-preview-open");
		};
	}, [isOpen]);
	return {
		selected,
		device,
		setDevice,
		mode,
		setMode,
		dialog,
		open,
		close,
		navigate
	};
}
function ProjectCard({ project, onPreview }) {
	const live = canAttemptProjectEmbed(project.id, project.url);
	return /* @__PURE__ */ jsxs("article", {
		className: "project-card",
		"data-project-id": project.id,
		style: { "--project-tone": project.tone },
		children: [/* @__PURE__ */ jsxs("button", {
			type: "button",
			className: "project-thumbnail",
			onClick: (e) => onPreview(project, e.currentTarget),
			"aria-label": cmsText(`Preview ${project.name}`, "PortfolioExperience:ProjectCard"),
			children: [/* @__PURE__ */ jsxs("div", {
				className: "project-browser-frame",
				children: [/* @__PURE__ */ jsx(BrowserBar, { url: project.url }), /* @__PURE__ */ jsx("div", {
					className: "project-screen",
					children: /* @__PURE__ */ jsx("img", {
						src: cmsAsset(projectDesktopImage(project)),
						alt: cmsText(`${project.name} website preview`, "PortfolioExperience:ProjectCard"),
						width: "1440",
						height: "1000",
						loading: "lazy",
						decoding: "async"
					})
				})]
			}), /* @__PURE__ */ jsxs("span", {
				className: "project-preview-pill",
				children: [
					cmsText(live ? /* @__PURE__ */ jsx(Globe2, { size: 13 }) : /* @__PURE__ */ jsx(Eye, { size: 13 }), "PortfolioExperience:ProjectCard"),
					" ",
					cmsText(live ? "Live preview" : "Explore preview", "PortfolioExperience:ProjectCard"),
					/* @__PURE__ */ jsx(ArrowUpRight, { size: 13 })
				]
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "project-card-content",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "project-card-meta",
					children: [/* @__PURE__ */ jsx("span", {
						className: "mono",
						children: cmsText(project.label.toUpperCase(), "PortfolioExperience:ProjectCard")
					}), /* @__PURE__ */ jsx("span", {
						className: "project-site-mark",
						"aria-hidden": "true",
						children: cmsText(project.initials, "PortfolioExperience:ProjectCard")
					})]
				}),
				/* @__PURE__ */ jsx("h3", { children: cmsText(project.name, "PortfolioExperience:ProjectCard") }),
				/* @__PURE__ */ jsx("p", { children: cmsText(project.description, "PortfolioExperience:ProjectCard") }),
				/* @__PURE__ */ jsxs("div", {
					className: "project-card-actions",
					children: [/* @__PURE__ */ jsxs("button", {
						type: "button",
						className: live ? "project-interactive-cta" : void 0,
						"aria-label": cmsText(`${live ? "Live preview of" : "Preview"} ${project.name}`, "PortfolioExperience:ProjectCard"),
						onClick: (e) => onPreview(project, e.currentTarget),
						children: [cmsText(live ? "Live preview" : "Preview", "PortfolioExperience:ProjectCard"), cmsText(live ? /* @__PURE__ */ jsx(Globe2, { size: 14 }) : /* @__PURE__ */ jsx(Eye, { size: 14 }), "PortfolioExperience:ProjectCard")]
					}), /* @__PURE__ */ jsxs("a", {
						href: cmsLink(project.url),
						target: "_blank",
						rel: "noopener noreferrer",
						"aria-label": cmsText(`Visit ${project.name} website (opens in new tab)`, "PortfolioExperience:ProjectCard"),
						children: [cmsText("Visit website", "PortfolioExperience:ProjectCard"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 15 })]
					})]
				})
			]
		})]
	});
}
function PreviewDialog({ preview, collection }) {
	const project = preview.selected;
	const index = Math.max(0, collection.findIndex((p) => p.id === project.id));
	const body = useRef(null);
	const live = preview.mode === "live";
	const directOnly = live && !canAttemptProjectEmbed(project.id, project.url);
	useEffect(() => {
		if (body.current) body.current.scrollTop = 0;
	}, [
		project.id,
		preview.device,
		preview.mode
	]);
	return /* @__PURE__ */ jsxs("dialog", {
		ref: preview.dialog,
		className: `project-preview-dialog has-live-toolbar ${live ? "live-preview-dialog" : ""} ${preview.device === "mobile" ? "mobile-preview-dialog" : ""}`,
		"aria-labelledby": "project-preview-title",
		onCancel: (e) => {
			e.preventDefault();
			preview.close();
		},
		onClick: (e) => {
			if (e.target === e.currentTarget) preview.close();
		},
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "project-modal-header",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
					className: "mono",
					children: cmsText("CLIENT WEBSITE / PREVIEW", "PortfolioExperience:PreviewDialog")
				}), /* @__PURE__ */ jsx("h2", {
					id: "project-preview-title",
					"aria-live": "polite",
					children: cmsText(project.name, "PortfolioExperience:PreviewDialog")
				})] }), /* @__PURE__ */ jsx("button", {
					className: "project-modal-close",
					type: "button",
					"aria-label": cmsText("Close project preview", "PortfolioExperience:PreviewDialog"),
					onClick: preview.close,
					children: /* @__PURE__ */ jsx(X, { size: 20 })
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "project-modal-toolbar",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "preview-device-switch",
						role: "group",
						"aria-label": cmsText("Preview device", "PortfolioExperience:PreviewDialog"),
						title: cmsText(directOnly ? "Choose Snapshots to view device layouts" : void 0, "PortfolioExperience:PreviewDialog"),
						children: [/* @__PURE__ */ jsxs("button", {
							type: "button",
							disabled: directOnly,
							"aria-pressed": preview.device === "desktop",
							onClick: () => preview.setDevice("desktop"),
							children: [/* @__PURE__ */ jsx(Monitor, { size: 15 }), cmsText("Desktop", "PortfolioExperience:PreviewDialog")]
						}), /* @__PURE__ */ jsxs("button", {
							type: "button",
							disabled: directOnly,
							"aria-pressed": preview.device === "mobile",
							onClick: () => preview.setDevice("mobile"),
							children: [/* @__PURE__ */ jsx(Smartphone, { size: 15 }), cmsText("Mobile", "PortfolioExperience:PreviewDialog")]
						})]
					}),
					cmsText(collection.length > 1 && /* @__PURE__ */ jsxs("div", {
						className: "project-modal-pagination",
						role: "group",
						"aria-label": cmsText("Browse this project selection", "PortfolioExperience:PreviewDialog"),
						children: [
							/* @__PURE__ */ jsx("button", {
								type: "button",
								"aria-label": cmsText("Previous project", "PortfolioExperience:PreviewDialog"),
								onClick: () => preview.navigate(collection[(index - 1 + collection.length) % collection.length]),
								children: /* @__PURE__ */ jsx(ChevronLeft, { size: 17 })
							}),
							/* @__PURE__ */ jsxs("span", {
								className: "mono",
								"aria-label": cmsText(`Project ${index + 1} of ${collection.length} in this selection`, "PortfolioExperience:PreviewDialog"),
								children: [
									cmsText(String(index + 1).padStart(2, "0"), "PortfolioExperience:PreviewDialog"),
									/* @__PURE__ */ jsx("i", {}),
									" ",
									cmsText(String(collection.length).padStart(2, "0"), "PortfolioExperience:PreviewDialog")
								]
							}),
							/* @__PURE__ */ jsx("button", {
								type: "button",
								"aria-label": cmsText("Next project", "PortfolioExperience:PreviewDialog"),
								onClick: () => preview.navigate(collection[(index + 1) % collection.length]),
								children: /* @__PURE__ */ jsx(ChevronRight, { size: 17 })
							})
						]
					}), "PortfolioExperience:PreviewDialog"),
					/* @__PURE__ */ jsxs("a", {
						href: cmsLink(project.url),
						target: "_blank",
						rel: "noopener noreferrer",
						children: [cmsText("Open live website", "PortfolioExperience:PreviewDialog"), /* @__PURE__ */ jsx(ExternalLink, { size: 13 })]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "project-preview-modebar",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "project-preview-modes",
					role: "group",
					"aria-label": cmsText("Preview type", "PortfolioExperience:PreviewDialog"),
					children: [cmsText(canAttemptProjectEmbed(project.id, project.url) ? /* @__PURE__ */ jsxs("button", {
						type: "button",
						"aria-pressed": live,
						onClick: () => preview.setMode("live"),
						children: [/* @__PURE__ */ jsx(Globe2, { size: 14 }), cmsText("Live website", "PortfolioExperience:PreviewDialog")]
					}) : /* @__PURE__ */ jsxs("a", {
						href: cmsLink(project.url),
						target: "_blank",
						rel: "noopener noreferrer",
						children: [
							cmsText("Visit website", "PortfolioExperience:PreviewDialog"),
							/* @__PURE__ */ jsx(ExternalLink, { size: 13 }),
							/* @__PURE__ */ jsx("span", {
								className: "sr-only",
								children: cmsText(" (opens in a new tab)", "PortfolioExperience:PreviewDialog")
							})
						]
					}), "PortfolioExperience:PreviewDialog"), /* @__PURE__ */ jsxs("button", {
						type: "button",
						"aria-pressed": !live,
						onClick: () => preview.setMode("snapshot"),
						children: [/* @__PURE__ */ jsx(Eye, { size: 14 }), cmsText("Snapshots", "PortfolioExperience:PreviewDialog")]
					})]
				}), /* @__PURE__ */ jsx("span", { children: cmsText(live ? directOnly ? "Complete experience in a new tab" : "Interactive · Scroll, click and explore" : "Captured views · Desktop and mobile", "PortfolioExperience:PreviewDialog") })]
			}),
			/* @__PURE__ */ jsxs("div", {
				ref: body,
				className: "project-preview-body",
				tabIndex: 0,
				role: "region",
				"aria-label": cmsText("Scrollable website preview and project details", "PortfolioExperience:PreviewDialog"),
				children: [cmsText(live ? /* @__PURE__ */ jsx(ProjectLivePreview, {
					project,
					device: preview.device,
					onSnapshots: () => preview.setMode("snapshot")
				}, project.id) : /* @__PURE__ */ jsx("div", {
					className: `project-preview-stage ${preview.device}`,
					style: { "--project-tone": project.tone },
					children: cmsText(preview.device === "mobile" ? /* @__PURE__ */ jsx(ProjectMobilePreview, { project }, project.id) : /* @__PURE__ */ jsxs("div", {
						className: "preview-device-frame",
						children: [/* @__PURE__ */ jsx("div", {
							className: "preview-device-top",
							"aria-hidden": "true",
							children: /* @__PURE__ */ jsx(BrowserBar, { url: project.url })
						}), /* @__PURE__ */ jsx("img", {
							src: cmsAsset(projectDesktopImage(project)),
							alt: cmsText(`Desktop screenshot of ${project.name}`, "PortfolioExperience:PreviewDialog"),
							width: "1440",
							height: "1000"
						}, project.id)]
					}), "PortfolioExperience:PreviewDialog")
				}), "PortfolioExperience:PreviewDialog"), /* @__PURE__ */ jsxs("section", {
					className: "project-content-overview",
					"aria-label": cmsText("About this website", "PortfolioExperience:PreviewDialog:project-content-overview"),
					children: [/* @__PURE__ */ jsxs("div", {
						className: "project-description-block",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "mono",
								children: [cmsText("WEBSITE EXPERIENCE / ", "PortfolioExperience:PreviewDialog:project-content-overview"), cmsText(project.label.toUpperCase(), "PortfolioExperience:PreviewDialog:project-content-overview")]
							}),
							/* @__PURE__ */ jsx("h3", { children: cmsText(project.name, "PortfolioExperience:PreviewDialog:project-content-overview") }),
							/* @__PURE__ */ jsx("p", { children: cmsText(project.description, "PortfolioExperience:PreviewDialog:project-content-overview") })
						]
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("ul", {
						className: "project-visible-features",
						children: cmsText((projectHighlights[project.id] || []).map((feature) => /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx(Check, { size: 15 }), cmsText(feature, "PortfolioExperience:PreviewDialog:project-content-overview")] }, feature)), "PortfolioExperience:PreviewDialog:project-content-overview")
					}), /* @__PURE__ */ jsxs(Link, {
						className: "explore-link",
						to: cmsLink(`/contact?service=${encodeURIComponent("Website inspired by " + project.name)}`),
						onClick: preview.close,
						children: [cmsText("Discuss a similar project", "PortfolioExperience:PreviewDialog:project-content-overview"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 16 })]
					})] })]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "project-modal-footer",
				children: [
					/* @__PURE__ */ jsx("span", { children: cmsText(live ? "External client website · Direct opening is always available." : "Captured website view · Switch to Live website to explore.", "PortfolioExperience:PreviewDialog") }),
					cmsText("note" in project && /* @__PURE__ */ jsx("span", { children: cmsText(project.note, "PortfolioExperience:PreviewDialog") }), "PortfolioExperience:PreviewDialog"),
					/* @__PURE__ */ jsx("span", {
						className: "mono",
						children: cmsText(project.label.toUpperCase(), "PortfolioExperience:PreviewDialog")
					})
				]
			})
		]
	});
}
function ProjectGallery({ featured = false }) {
	const projects = getProjects();
	const featuredProjectIds = getFeaturedProjectIds();
	const [category, setCategory] = useState("all");
	const [query, setQuery] = useState("");
	const searchInput = useRef(null);
	const preview = useProjectPreview();
	const term = searchable(query);
	const matching = projects.filter((p) => searchable([
		p.name,
		p.label,
		p.category,
		projectFilters.find(([id]) => id === p.category)?.[1] || "",
		p.description,
		domain(p.url)
	].join(" ")).includes(term));
	const list = featured ? featuredProjectIds.map((id) => projects.find((p) => p.id === id)) : matching.filter((p) => category === "all" || p.category === category);
	const reset = () => {
		setCategory("all");
		setQuery("");
		searchInput.current?.focus();
	};
	return /* @__PURE__ */ jsxs("section", {
		className: `section project-gallery-section compact-projects ${featured ? "featured-projects" : "portfolio-collection"}`,
		id: featured ? "projects" : "project-gallery",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [
				cmsText(featured ? /* @__PURE__ */ jsxs("div", {
					className: "section-heading reveal",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "eyebrow",
						children: [/* @__PURE__ */ jsx("span", { className: "label-line" }), cmsText("05 / SELECTED PROJECTS", "PortfolioExperience:ProjectGallery:section")]
					}), /* @__PURE__ */ jsxs("div", {
						className: "heading-row",
						children: [/* @__PURE__ */ jsxs("h2", { children: [
							cmsText("Real businesses.", "PortfolioExperience:ProjectGallery:section"),
							/* @__PURE__ */ jsx("br", {}),
							cmsText("Distinct digital experiences.", "PortfolioExperience:ProjectGallery:section")
						] }), /* @__PURE__ */ jsxs("div", {
							className: "featured-project-intro",
							children: [/* @__PURE__ */ jsx("p", { children: cmsText("A selection of client websites across technology, travel, commerce, and education.", "PortfolioExperience:ProjectGallery:section") }), /* @__PURE__ */ jsxs(Link, {
								className: "explore-link",
								to: cmsLink("/projects"),
								children: [
									cmsText("View all ", "PortfolioExperience:ProjectGallery:section"),
									cmsText(projects.length, "PortfolioExperience:ProjectGallery:section"),
									cmsText(" projects", "PortfolioExperience:ProjectGallery:section"),
									/* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })
								]
							})]
						})]
					})]
				}) : /* @__PURE__ */ jsxs("div", {
					className: "portfolio-collection-heading",
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsxs("span", {
							className: "eyebrow",
							children: [/* @__PURE__ */ jsx("span", { className: "label-line" }), cmsText("THE WEBSITE COLLECTION", "PortfolioExperience:ProjectGallery:section")]
						}),
						/* @__PURE__ */ jsx("h2", { children: cmsText("Find your next reference.", "PortfolioExperience:ProjectGallery:section") }),
						/* @__PURE__ */ jsx("p", { children: cmsText("Explore by industry, search a business, or open a preview to see the experience in detail.", "PortfolioExperience:ProjectGallery:section") })
					] }), /* @__PURE__ */ jsxs("div", {
						className: "portfolio-search-field",
						children: [
							/* @__PURE__ */ jsx("label", {
								className: "sr-only",
								htmlFor: "project-search",
								children: cmsText("Search project collection", "PortfolioExperience:ProjectGallery:section")
							}),
							/* @__PURE__ */ jsx(Search, {
								size: 17,
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ jsx("input", {
								ref: searchInput,
								id: "project-search",
								type: "search",
								value: query,
								placeholder: cmsText("Search name, website, or industry", "PortfolioExperience:ProjectGallery:section"),
								"aria-describedby": "project-results-summary",
								onChange: (e) => setQuery(e.target.value),
								onKeyDown: (e) => {
									if (e.key === "Escape" && query) {
										e.preventDefault();
										setQuery("");
									}
								}
							}),
							cmsText(query && /* @__PURE__ */ jsx("button", {
								type: "button",
								"aria-label": cmsText("Clear project search", "PortfolioExperience:ProjectGallery:section"),
								onClick: () => {
									setQuery("");
									searchInput.current?.focus();
								},
								children: /* @__PURE__ */ jsx(X, { size: 15 })
							}), "PortfolioExperience:ProjectGallery:section")
						]
					})]
				}), "PortfolioExperience:ProjectGallery:section"),
				cmsText(!featured && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
					className: "portfolio-filter-row",
					children: /* @__PURE__ */ jsx("div", {
						className: "project-filters",
						role: "group",
						"aria-label": cmsText("Filter projects by industry", "PortfolioExperience:ProjectGallery:section"),
						children: cmsText(projectFilters.map(([id, label]) => /* @__PURE__ */ jsxs("button", {
							type: "button",
							"aria-pressed": id === category,
							onClick: () => setCategory(id),
							children: [cmsText(label, "PortfolioExperience:ProjectGallery:section"), /* @__PURE__ */ jsx("span", { children: cmsText(id === "all" ? matching.length : matching.filter((p) => p.category === id).length, "PortfolioExperience:ProjectGallery:section") })]
						}, id)), "PortfolioExperience:ProjectGallery:section")
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "portfolio-results-bar",
					children: [/* @__PURE__ */ jsxs("p", {
						id: "project-results-summary",
						role: "status",
						"aria-live": "polite",
						children: [
							cmsText("Showing ", "PortfolioExperience:ProjectGallery:section"),
							/* @__PURE__ */ jsx("strong", { children: cmsText(list.length, "PortfolioExperience:ProjectGallery:section") }),
							cmsText(" of ", "PortfolioExperience:ProjectGallery:section"),
							cmsText(projects.length, "PortfolioExperience:ProjectGallery:section"),
							cmsText(" projects", "PortfolioExperience:ProjectGallery:section")
						]
					}), cmsText(query || category !== "all" ? /* @__PURE__ */ jsxs("button", {
						type: "button",
						onClick: reset,
						children: [cmsText("Reset filters", "PortfolioExperience:ProjectGallery:section"), /* @__PURE__ */ jsx(X, { size: 12 })]
					}) : /* @__PURE__ */ jsxs("span", {
						className: "mono",
						children: [
							/* @__PURE__ */ jsx(Monitor, { size: 12 }),
							/* @__PURE__ */ jsx(Smartphone, { size: 11 }),
							cmsText("DESKTOP + MOBILE PREVIEWS", "PortfolioExperience:ProjectGallery:section")
						]
					}), "PortfolioExperience:ProjectGallery:section")]
				})] }), "PortfolioExperience:ProjectGallery:section"),
				cmsText(list.length ? /* @__PURE__ */ jsx("div", {
					className: "project-grid",
					children: cmsText(list.map((project) => /* @__PURE__ */ jsx(ProjectCard, {
						project,
						onPreview: preview.open
					}, project.id)), "PortfolioExperience:ProjectGallery:section")
				}, category) : /* @__PURE__ */ jsxs("div", {
					className: "portfolio-empty",
					children: [
						/* @__PURE__ */ jsx(Search, {
							size: 29,
							strokeWidth: 1.2
						}),
						/* @__PURE__ */ jsx("h3", { children: cmsText("No projects found.", "PortfolioExperience:ProjectGallery:section") }),
						/* @__PURE__ */ jsx("p", { children: cmsText("Try another website, business name, or industry.", "PortfolioExperience:ProjectGallery:section") }),
						/* @__PURE__ */ jsxs("button", {
							type: "button",
							className: "button",
							onClick: reset,
							children: [cmsText("Reset filters", "PortfolioExperience:ProjectGallery:section"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 15 })]
						})
					]
				}), "PortfolioExperience:ProjectGallery:section"),
				cmsText(featured && /* @__PURE__ */ jsxs("div", {
					className: "project-collection-cta",
					children: [/* @__PURE__ */ jsxs("span", { children: [
						cmsText("Four perspectives. A wider collection.", "PortfolioExperience:ProjectGallery:section"),
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsxs("strong", { children: [
							cmsText("Explore all ", "PortfolioExperience:ProjectGallery:section"),
							cmsText(projects.length, "PortfolioExperience:ProjectGallery:section"),
							cmsText(" client websites.", "PortfolioExperience:ProjectGallery:section")
						] })
					] }), /* @__PURE__ */ jsxs(Link, {
						className: "button secondary",
						to: cmsLink("/projects"),
						children: [cmsText("View the full collection", "PortfolioExperience:ProjectGallery:section"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })]
					})]
				}), "PortfolioExperience:ProjectGallery:section")
			]
		}), cmsText(preview.selected && /* @__PURE__ */ jsx(PreviewDialog, {
			preview,
			collection: list
		}), "PortfolioExperience:ProjectGallery:section")]
	});
}
function ProjectsHero() {
	const projects = getProjects();
	const featuredProjectIds = getFeaturedProjectIds();
	const selections = (featuredProjectIds.length ? featuredProjectIds.map((id) => projects.find((p) => p.id === id)).filter((project) => Boolean(project)) : projects).slice(0, 3);
	const [active, setActive] = useState(0);
	const [device, setDevice] = useState("desktop");
	const tabs = useRef([]);
	const preview = useProjectPreview();
	const project = selections[Math.min(active, selections.length - 1)];
	const mobileStage = useRef(null);
	useEffect(() => {
		const media = matchMedia("(max-width: 700px)");
		const sync = () => setDevice(media.matches ? "mobile" : "desktop");
		sync();
		media.addEventListener("change", sync);
		return () => media.removeEventListener("change", sync);
	}, []);
	useEffect(() => {
		if (mobileStage.current) mobileStage.current.scrollTop = 0;
	}, [active, device]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("section", {
		className: "portfolio-hero dark",
		children: [
			/* @__PURE__ */ jsx("div", { className: "hero-grid" }),
			/* @__PURE__ */ jsxs("div", {
				className: "container portfolio-hero-layout",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "portfolio-hero-copy",
					children: [
						/* @__PURE__ */ jsxs("span", {
							className: "eyebrow on-dark",
							children: [/* @__PURE__ */ jsx("span", { className: "label-line" }), cmsText("PROJECTS / CLIENT WEBSITES", "PortfolioExperience:ProjectsHero:portfolio-hero dark")]
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "page-title",
							children: [
								cmsText("Real businesses.", "PortfolioExperience:ProjectsHero:portfolio-hero dark"),
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", { children: cmsText("Distinct digital work.", "PortfolioExperience:ProjectsHero:portfolio-hero dark") })
							]
						}),
						/* @__PURE__ */ jsx("p", { children: cmsText("Different audiences, industries, and ambitions. Explore how client websites bring a business story into a useful digital experience.", "PortfolioExperience:ProjectsHero:portfolio-hero dark") }),
						/* @__PURE__ */ jsxs("div", {
							className: "portfolio-hero-actions",
							children: [/* @__PURE__ */ jsxs(Link, {
								className: "button magnetic",
								to: cmsLink("/projects#project-gallery"),
								children: [cmsText("Explore the collection", "PortfolioExperience:ProjectsHero:portfolio-hero dark"), /* @__PURE__ */ jsx(ArrowDown, { size: 16 })]
							}), /* @__PURE__ */ jsxs(Link, {
								className: "text-link",
								to: cmsLink("/contact?service=Website%20project%20discussion"),
								children: [cmsText("Discuss your website", "PortfolioExperience:ProjectsHero:portfolio-hero dark"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 15 })]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "portfolio-hero-footnote",
							children: [
								/* @__PURE__ */ jsxs("span", {
									className: "mono",
									children: [cmsText(String(projects.length).padStart(2, "0"), "PortfolioExperience:ProjectsHero:portfolio-hero dark"), cmsText(" CLIENT WEBSITES", "PortfolioExperience:ProjectsHero:portfolio-hero dark")]
								}),
								/* @__PURE__ */ jsx("i", {}),
								/* @__PURE__ */ jsxs("span", { children: [
									cmsText("Real snapshots.", "PortfolioExperience:ProjectsHero:portfolio-hero dark"),
									/* @__PURE__ */ jsx("br", {}),
									cmsText("Desktop and mobile perspectives.", "PortfolioExperience:ProjectsHero:portfolio-hero dark")
								] })
							]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "portfolio-feature",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "portfolio-feature-topline",
							children: [/* @__PURE__ */ jsx("span", {
								className: "mono",
								children: cmsText("IN FOCUS / THE COLLECTION", "PortfolioExperience:ProjectsHero:portfolio-hero dark")
							}), /* @__PURE__ */ jsxs("span", {
								className: "mono",
								children: [
									cmsText("0", "PortfolioExperience:ProjectsHero:portfolio-hero dark"),
									cmsText(active + 1, "PortfolioExperience:ProjectsHero:portfolio-hero dark"),
									cmsText(" — 0", "PortfolioExperience:ProjectsHero:portfolio-hero dark"),
									cmsText(selections.length, "PortfolioExperience:ProjectsHero:portfolio-hero dark")
								]
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "portfolio-feature-tabs",
							role: "tablist",
							"aria-label": cmsText("Featured client websites", "PortfolioExperience:ProjectsHero:portfolio-hero dark"),
							children: cmsText(selections.map((p, i) => /* @__PURE__ */ jsx("button", {
								ref: (el) => {
									tabs.current[i] = el;
								},
								type: "button",
								id: `portfolio-focus-${i}`,
								role: "tab",
								"aria-selected": active === i,
								"aria-controls": "portfolio-feature-panel",
								tabIndex: active === i ? 0 : -1,
								onClick: () => setActive(i),
								onKeyDown: (e) => {
									if (![
										"ArrowLeft",
										"ArrowRight",
										"Home",
										"End"
									].includes(e.key)) return;
									e.preventDefault();
									const next = e.key === "Home" ? 0 : e.key === "End" ? selections.length - 1 : (active + (e.key === "ArrowRight" ? 1 : -1) + selections.length) % selections.length;
									setActive(next);
									tabs.current[next]?.focus();
								},
								children: cmsText(p.name, "PortfolioExperience:ProjectsHero:portfolio-hero dark")
							}, p.id)), "PortfolioExperience:ProjectsHero:portfolio-hero dark")
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "portfolio-feature-panel",
							id: "portfolio-feature-panel",
							role: "tabpanel",
							"aria-labelledby": `portfolio-focus-${active}`,
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "portfolio-feature-title",
									children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", { children: cmsText(project.name, "PortfolioExperience:ProjectsHero:portfolio-hero dark") }), /* @__PURE__ */ jsx("span", { children: cmsText(project.label, "PortfolioExperience:ProjectsHero:portfolio-hero dark") })] }), /* @__PURE__ */ jsx("a", {
										href: cmsLink(project.url),
										target: "_blank",
										rel: "noopener noreferrer",
										"aria-label": cmsText(`Visit ${project.name} (opens in new tab)`, "PortfolioExperience:ProjectsHero:portfolio-hero dark"),
										children: /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "portfolio-feature-views",
									role: "group",
									"aria-label": cmsText("Featured preview device", "PortfolioExperience:ProjectsHero:portfolio-hero dark"),
									children: [
										/* @__PURE__ */ jsxs("button", {
											type: "button",
											"aria-pressed": device === "desktop",
											onClick: () => setDevice("desktop"),
											children: [/* @__PURE__ */ jsx(Monitor, { size: 13 }), cmsText("Desktop", "PortfolioExperience:ProjectsHero:portfolio-hero dark")]
										}),
										/* @__PURE__ */ jsxs("button", {
											type: "button",
											"aria-pressed": device === "mobile",
											onClick: () => setDevice("mobile"),
											children: [/* @__PURE__ */ jsx(Smartphone, { size: 13 }), cmsText("Mobile", "PortfolioExperience:ProjectsHero:portfolio-hero dark")]
										}),
										/* @__PURE__ */ jsxs("button", {
											type: "button",
											className: "portfolio-expand",
											onClick: (e) => preview.open(project, e.currentTarget, device),
											children: [cmsText(canAttemptProjectEmbed(project.id, project.url) ? "Live preview" : "Full preview", "PortfolioExperience:ProjectsHero:portfolio-hero dark"), /* @__PURE__ */ jsx(Eye, { size: 13 })]
										})
									]
								}),
								cmsText(device === "mobile" ? /* @__PURE__ */ jsx("div", {
									ref: mobileStage,
									className: "portfolio-feature-screen mobile portfolio-mobile-stage",
									role: "region",
									tabIndex: 0,
									"aria-label": cmsText(`Scrollable mobile screenshot of ${project.name}`, "PortfolioExperience:ProjectsHero:portfolio-hero dark"),
									style: { "--project-tone": project.tone },
									children: /* @__PURE__ */ jsx(ProjectMobilePreview, {
										project,
										compact: true
									}, project.id)
								}) : /* @__PURE__ */ jsxs("button", {
									type: "button",
									className: "portfolio-feature-screen desktop",
									onClick: (e) => preview.open(project, e.currentTarget, device),
									"aria-label": cmsText(`Open desktop preview of ${project.name}`, "PortfolioExperience:ProjectsHero:portfolio-hero dark"),
									style: { "--project-tone": project.tone },
									children: [/* @__PURE__ */ jsxs("div", {
										className: "portfolio-screen-frame",
										children: [/* @__PURE__ */ jsx(BrowserBar, { url: project.url }), /* @__PURE__ */ jsx("img", {
											src: cmsAsset(projectDesktopImage(project)),
											width: "1440",
											height: "1000",
											alt: cmsText(`Desktop website snapshot of ${project.name}`, "PortfolioExperience:ProjectsHero:portfolio-hero dark"),
											fetchPriority: "high",
											decoding: "async"
										}, project.id)]
									}), /* @__PURE__ */ jsxs("span", {
										className: "portfolio-screen-hint",
										children: [/* @__PURE__ */ jsx(Eye, { size: 13 }), cmsText("Open preview", "PortfolioExperience:ProjectsHero:portfolio-hero dark")]
									})]
								}), "PortfolioExperience:ProjectsHero:portfolio-hero dark"),
								/* @__PURE__ */ jsxs("div", {
									className: "portfolio-snapshot-note",
									children: [/* @__PURE__ */ jsx("span", {
										className: "mono",
										children: cmsText("CAPTURED WEBSITE PREVIEW", "PortfolioExperience:ProjectsHero:portfolio-hero dark")
									}), /* @__PURE__ */ jsx("span", { children: cmsText("Open preview for live browsing, where available.", "PortfolioExperience:ProjectsHero:portfolio-hero dark") })]
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "container portfolio-hero-bottom",
				children: [/* @__PURE__ */ jsx("span", { children: cmsText("Different brands. Considered experiences.", "PortfolioExperience:ProjectsHero:portfolio-hero dark") }), /* @__PURE__ */ jsxs(Link, {
					to: cmsLink("/website-solutions"),
					children: [cmsText("Explore our website capability", "PortfolioExperience:ProjectsHero:portfolio-hero dark"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 15 })]
				})]
			})
		]
	}), cmsText(preview.selected && /* @__PURE__ */ jsx(PreviewDialog, {
		preview,
		collection: selections
	}), "PortfolioExperience:ProjectsHero")] });
}
// src/ZohoPartner.tsx
function PartnerImage({ large = false }) {
	return /* @__PURE__ */ jsx("img", {
		src: cmsAsset("/images/partners/zoho-authorized-partner-hd.webp"),
		srcSet: cmsSrcSet("/images/partners/zoho-authorized-partner-hd-small.webp 660w, /images/partners/zoho-authorized-partner-hd-medium.webp 1102w, /images/partners/zoho-authorized-partner-hd.webp 2204w"),
		sizes: large ? "(max-width: 700px) 80vw, 370px" : "212px",
		width: "2204",
		height: "713",
		alt: cmsText("Zoho Authorized Partner", "ZohoPartner:PartnerImage"),
		loading: "lazy",
		decoding: "async",
		className: large ? "zoho-badge-image large" : "zoho-badge-image"
	});
}
function ZohoPartnerBadge() {
	return /* @__PURE__ */ jsxs("div", {
		className: "footer-partner",
		children: [/* @__PURE__ */ jsx("span", {
			className: "mono",
			children: cmsText("BUSINESS PLATFORM PARTNER", "ZohoPartner:ZohoPartnerBadge")
		}), /* @__PURE__ */ jsx(Link, {
			to: cmsLink("/zoho-consultation"),
			className: "footer-partner-link",
			"aria-label": cmsText("Zoho Authorized Partner — explore our Zoho services", "ZohoPartner:ZohoPartnerBadge"),
			children: /* @__PURE__ */ jsx(PartnerImage, {})
		})]
	});
}
function ZohoSolutions() {
	return /* @__PURE__ */ jsx("section", {
		className: "zoho-section section",
		id: "zoho",
		"aria-labelledby": "zoho-heading",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container zoho-partner-panel",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "zoho-partner-copy reveal",
				children: [
					/* @__PURE__ */ jsxs("span", {
						className: "eyebrow",
						children: [/* @__PURE__ */ jsx("span", { className: "label-line" }), cmsText("CONNECTED BUSINESS · ZOHO", "ZohoPartner:ZohoSolutions:zoho")]
					}),
					/* @__PURE__ */ jsxs("h2", {
						id: "zoho-heading",
						children: [
							cmsText("Your business tools.", "ZohoPartner:ZohoSolutions:zoho"),
							/* @__PURE__ */ jsx("br", {}),
							cmsText("Working as one.", "ZohoPartner:ZohoSolutions:zoho")
						]
					}),
					/* @__PURE__ */ jsx("p", { children: cmsText("Bring your customer, finance, and operational workflows together. As a Zoho Authorized Partner, NekSoft helps implement, customize, and connect Zoho around the way your business works.", "ZohoPartner:ZohoSolutions:zoho") }),
					/* @__PURE__ */ jsxs(Link, {
						className: "explore-link",
						to: cmsLink("/contact?service=Zoho%20implementation%20%26%20automation"),
						children: [cmsText("Discuss your Zoho project ", "ZohoPartner:ZohoSolutions:zoho"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })]
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "zoho-partner-card reveal",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "zoho-card-heading",
						children: [/* @__PURE__ */ jsx("span", {
							className: "mono",
							children: cmsText("NEKSOFT × ZOHO", "ZohoPartner:ZohoSolutions:zoho")
						}), /* @__PURE__ */ jsxs("span", {
							className: "zoho-card-mark",
							"aria-hidden": "true",
							children: [
								/* @__PURE__ */ jsx("i", {}),
								/* @__PURE__ */ jsx("i", {}),
								/* @__PURE__ */ jsx("i", {}),
								/* @__PURE__ */ jsx("i", {})
							]
						})]
					}),
					/* @__PURE__ */ jsx(PartnerImage, { large: true }),
					/* @__PURE__ */ jsx("div", { className: "zoho-card-divider" }),
					/* @__PURE__ */ jsx("ul", { children: cmsText([
						"Implementation & configuration",
						"Custom workflows & automation",
						"Application & API integrations"
					].map((item) => /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx(Check, {
						size: 15,
						"aria-hidden": "true"
					}), cmsText(item, "ZohoPartner:ZohoSolutions:zoho")] }, item)), "ZohoPartner:ZohoSolutions:zoho") }),
					/* @__PURE__ */ jsx("span", {
						className: "zoho-card-note",
						children: cmsText("Connected platforms. Clearer everyday operations.", "ZohoPartner:ZohoSolutions:zoho")
					})
				]
			})]
		})
	});
}
// src/service-content.ts
var serviceNavigation = [
	{
		label: "Zoho Consultation",
		slug: "zoho-consultation",
		group: "Consultation",
		description: "Connected tools. Clearer business.",
		icon: "Handshake"
	},
	{
		label: "AI Integrated",
		slug: "ai-automation",
		group: "Consultation",
		description: "Intelligence built into your operations.",
		icon: "Bot"
	},
	{
		label: "Website Solutions",
		slug: "website-solutions",
		group: "Solutions",
		description: "Distinctive websites, thoughtfully built.",
		icon: "Globe"
	},
	{
		label: "Application Solutions",
		slug: "application-solutions",
		group: "Solutions",
		description: "Software designed around your team.",
		icon: "PanelsTopLeft"
	},
	{
		label: "Design Solutions",
		slug: "design-solutions",
		group: "Solutions",
		description: "Clear interfaces. Confident identities.",
		icon: "Palette"
	},
	{
		label: "SaaS Solutions",
		slug: "saas-solutions",
		group: "Solutions",
		description: "From product idea to connected platform.",
		icon: "Cloud"
	},
	{
		label: "Mobile Development",
		slug: "mobile-development",
		group: "Growth",
		description: "Useful experiences, wherever work happens.",
		icon: "Smartphone"
	},
	{
		label: "Digital Marketing",
		slug: "digital-marketing",
		group: "Growth",
		description: "Connect your message with the right people.",
		icon: "Megaphone"
	},
	{
		label: "Recruitment Skills",
		slug: "recruitment-skills",
		group: "Growth",
		description: "Bring people, roles, and skills together.",
		icon: "Users"
	}
];
var serviceGroups = [
	"Consultation",
	"Solutions",
	"Growth"
].map((name) => ({
	name,
	items: serviceNavigation.filter((s) => s.group === name)
}));
var servicePages = [
	{
		slug: "zoho-consultation",
		name: "Zoho Consultation",
		kind: "zoho",
		category: "CONNECTED BUSINESS",
		hero: ["Your business,", "better connected."],
		intro: "Shape Zoho around the way your team works. Connect customer information, everyday processes, and business applications in one considered implementation.",
		seo: "Zoho consultation, implementation, customization and workflow integration from NekSoft, a Zoho Authorized Partner.",
		challenge: "Too many tools. Too little shared context.",
		perspective: "A business platform should help the team move work forward. We start with your processes, then map the configuration, integrations, and responsibilities that support them.",
		capabilities: [
			{
				title: "Implement with a clear plan",
				text: "Review requirements, select the relevant Zoho applications, and configure fields, permissions, and workflows around agreed business needs.",
				example: "A sales team follows a shared enquiry-to-handover process with clear ownership at each stage."
			},
			{
				title: "Automate the handoffs",
				text: "Connect business events to practical actions, notifications, and approval steps. Keep exceptions visible and people in control of important decisions.",
				example: "An approved customer record triggers a follow-up task and a notification to the delivery team."
			},
			{
				title: "Connect the wider business",
				text: "Assess available APIs and data flows to connect Zoho with websites, applications, and existing systems, with migration and access controls considered early.",
				example: "A website enquiry is reviewed in the customer platform without manually copying the same information between tools."
			}
		],
		deliverables: [
			"Requirements & application roadmap",
			"Configured workflows and access roles",
			"Agreed integrations and data mapping",
			"User guidance, handover & support plan"
		],
		integration: "We review your current tools, data quality, access requirements, and available Zoho APIs before confirming the implementation scope. Subscriptions, migration boundaries, and ongoing responsibilities are agreed separately.",
		steps: [
			["Map", "Understand the people, records, and decisions behind your workflow."],
			["Configure", "Implement the agreed applications, automations, and integrations."],
			["Enable", "Validate with your team and hand over the operating guidance."]
		]
	},
	{
		slug: "website-solutions",
		name: "Website Solutions",
		kind: "website",
		category: "DIGITAL EXPERIENCES",
		hero: ["A stronger presence.", "A clearer next step."],
		intro: "Distinctive websites that explain your business clearly and make it easy to take action. Strategy, design, and engineering work together from the first page.",
		seo: "Professional business websites, responsive web design, content architecture and website development from NekSoft.",
		challenge: "Your website should do more than introduce you.",
		perspective: "Visitors need to understand what you do, why it matters, and what to do next. We connect those decisions through clear content, responsive design, and dependable implementation.",
		capabilities: [
			{
				title: "Make the story clear",
				text: "Define audiences, information architecture, page structure, and enquiry journeys before the interface takes shape.",
				example: "A service business guides visitors from a specific problem to a relevant capability and a project enquiry."
			},
			{
				title: "Design for every screen",
				text: "Create a visual system that feels consistent across desktop, tablet, and mobile, with thoughtful typography and purposeful interactions.",
				example: "A product page adapts its navigation, imagery, and enquiry controls to a smaller screen."
			},
			{
				title: "Build for everyday use",
				text: "Engineer semantic pages, accessible controls, useful integrations, and a content workflow that fits your team.",
				example: "A team updates service information through an agreed content-management setup without rebuilding every page."
			}
		],
		deliverables: [
			"Sitemap & page-level content plan",
			"Responsive interface designs",
			"Developed website & agreed integrations",
			"Launch checks and content handover"
		],
		integration: "We confirm hosting, domain access, content ownership, forms, analytics preferences, and any existing APIs or CMS requirements before development. Accessibility and loading behavior are reviewed as part of delivery.",
		steps: [
			["Structure", "Plan the pages around your audience and their next decisions."],
			["Create", "Design and build the visual experience across screen sizes."],
			["Launch", "Review content, routes, forms, and the deployment setup."]
		]
	},
	{
		slug: "application-solutions",
		name: "Application Solutions",
		kind: "application",
		category: "BUSINESS SOFTWARE",
		hero: ["Built around work.", "Designed for people."],
		intro: "Purpose-built applications that give your team a shared place to work. Bring the right information, decisions, and operational workflows together.",
		seo: "Custom business applications, operational dashboards, workflow software and enterprise integrations from NekSoft.",
		challenge: "The process has outgrown the spreadsheet.",
		perspective: "When information is scattered, even a simple handoff takes effort. We design applications around real user roles, operational exceptions, and the systems your business already relies on.",
		capabilities: [
			{
				title: "Put the workflow first",
				text: "Map daily tasks, decisions, and exceptions into a product structure that makes responsibilities and next actions clear.",
				example: "An operations team reviews incoming requests, assigns an owner, and follows each item through resolution."
			},
			{
				title: "Make information useful",
				text: "Create role-based dashboards and focused workspaces that present relevant records without overwhelming the user.",
				example: "A manager reviews open exceptions while a delivery team sees the tasks assigned to them."
			},
			{
				title: "Connect existing systems",
				text: "Define API boundaries, permissions, synchronization rules, and error handling so the application fits your wider infrastructure.",
				example: "An approved inventory change is shared with the connected business platform through an agreed integration."
			}
		],
		deliverables: [
			"Product requirements & user journeys",
			"Application architecture & interface system",
			"Role-based application and integrations",
			"Acceptance checks, documentation & handover"
		],
		integration: "We identify systems of record, authentication requirements, data ownership, and integration constraints before engineering. Release environments, acceptance criteria, and support responsibilities are defined with your team.",
		steps: [
			["Understand", "Observe the work and define the users, roles, and requirements."],
			["Engineer", "Build the application in reviewable, validated increments."],
			["Integrate", "Connect systems, test real scenarios, and prepare the handover."]
		]
	},
	{
		slug: "design-solutions",
		name: "Design Solutions",
		kind: "design",
		category: "DESIGN WITH PURPOSE",
		hero: ["Clarity you can see.", "Quality you can feel."],
		intro: "Bring a consistent point of view to your brand and digital products. We turn complex requirements into considered identities, interfaces, and usable experiences.",
		seo: "UI/UX design, responsive interfaces, design systems and brand-focused digital design from NekSoft.",
		challenge: "A good interface makes the next step obvious.",
		perspective: "Design works when it connects a clear business purpose with the needs of the person using it. We explore the structure, interactions, and visual details together.",
		capabilities: [
			{
				title: "Find the right structure",
				text: "Translate requirements into information architecture, task flows, and wireframes before committing to visual detail.",
				example: "A dashboard brings the most important operational decisions into a clear, repeatable review flow."
			},
			{
				title: "Create a visual language",
				text: "Develop typography, color, layout, and component patterns that give the experience a recognizable and consistent identity.",
				example: "Website, mobile, and application screens share the same design principles while adapting to their context."
			},
			{
				title: "Prototype the experience",
				text: "Make interactions reviewable through connected prototypes, with responsive states and implementation guidance.",
				example: "A team reviews an onboarding journey and resolves unclear steps before engineering starts."
			}
		],
		deliverables: [
			"User flows & interface wireframes",
			"Visual direction and key screen designs",
			"Reusable components & interaction states",
			"Interactive prototype and design handover"
		],
		integration: "We align design work with your existing brand, platform constraints, content, and engineering process. Accessibility considerations and responsive behavior are documented alongside the interface.",
		steps: [
			["Explore", "Understand the audience, tasks, and visual context."],
			["Design", "Build the information structure and visual system together."],
			["Refine", "Review the prototype and prepare the implementation details."]
		]
	},
	{
		slug: "saas-solutions",
		name: "SaaS Solutions",
		kind: "saas",
		category: "PRODUCT ENGINEERING",
		hero: ["From an idea.", "To a working product."],
		intro: "Turn a useful product concept into a maintainable software platform. Define the essential experience, validate the architecture, and build for the next stage.",
		seo: "SaaS product design and development, platform architecture, multi-tenant workflows and software integrations from NekSoft.",
		challenge: "Start with the right product, not every feature.",
		perspective: "A focused release creates a clearer path to learning. We help define what the first version needs to do and how the platform should support its users, data, and operations.",
		capabilities: [
			{
				title: "Define the first useful release",
				text: "Connect target users, core workflows, and acceptance criteria into an achievable product scope.",
				example: "A service platform starts with onboarding, a focused workspace, and the essential account-management flow."
			},
			{
				title: "Design the platform boundaries",
				text: "Consider account structures, roles, tenant boundaries, data access, and integration responsibilities during architecture.",
				example: "Separate customer workspaces access only the records and functions appropriate to their account."
			},
			{
				title: "Prepare to operate",
				text: "Plan environments, monitoring, release processes, and support workflows alongside product development.",
				example: "An operating team can review application issues and follow an agreed release and recovery process."
			}
		],
		deliverables: [
			"Product scope & release roadmap",
			"Platform and data architecture",
			"Core SaaS application and integrations",
			"Deployment workflow & operating documentation"
		],
		integration: "Authentication, account models, billing needs, APIs, hosting, and operational ownership are assessed against the proposed product. Security boundaries and scaling assumptions are validated for the agreed scope.",
		steps: [
			["Focus", "Define the user problem and a practical first release."],
			["Build", "Engineer the core product and validate its architecture."],
			["Evolve", "Review real usage and plan the next set of improvements."]
		]
	},
	{
		slug: "mobile-development",
		name: "Mobile Development",
		kind: "mobile",
		category: "CONNECTED ON THE MOVE",
		hero: ["Useful in the field.", "Effortless in the hand."],
		intro: "Mobile applications built around the moments that matter. Give customers and operational teams a clear, focused experience wherever they need to work.",
		seo: "Mobile application design and development, connected field applications and business platform integrations from NekSoft.",
		challenge: "Work does not always happen at a desk.",
		perspective: "A mobile experience has different constraints: smaller screens, interruptions, network changes, and real-world tasks. We design around those conditions from the beginning.",
		capabilities: [
			{
				title: "Design for the moment",
				text: "Prioritize the tasks people need to complete on the move, with touch-friendly controls and clear navigation.",
				example: "A field colleague checks an assigned task, records an update, and sees the next required action."
			},
			{
				title: "Connect the operation",
				text: "Link the application to agreed business APIs, notifications, device capabilities, and user access requirements.",
				example: "An approved service update becomes visible to an office team through the connected platform."
			},
			{
				title: "Plan for real conditions",
				text: "Define connectivity assumptions, synchronization behavior, permissions, and release requirements around the intended use.",
				example: "A field workflow explains which actions require a connection and how pending updates are handled."
			}
		],
		deliverables: [
			"Mobile user journeys & interface designs",
			"Application architecture and API plan",
			"Mobile app for agreed platforms",
			"Device checks, release guidance & handover"
		],
		integration: "We confirm the required platforms, device features, identity provider, APIs, and connectivity conditions before selecting an implementation approach. Store accounts and publication responsibilities are agreed during planning.",
		steps: [
			["Observe", "Understand where and how the application will be used."],
			["Create", "Design and build a focused mobile experience."],
			["Validate", "Check the agreed devices, connected workflows, and release process."]
		]
	},
	{
		slug: "digital-marketing",
		name: "Digital Marketing",
		kind: "marketing",
		category: "PURPOSEFUL GROWTH",
		hero: ["A clearer message.", "A stronger connection."],
		intro: "Connect your business story with the people it is meant for. Align content, search visibility, campaigns, and the website experience around a clear purpose.",
		seo: "Digital marketing planning, website content, search visibility and campaign coordination from NekSoft.",
		challenge: "Attention matters when it leads somewhere useful.",
		perspective: "A campaign, a search result, and a landing page should tell a consistent story. We bring those touchpoints together so your audience can understand the offer and take a relevant next step.",
		capabilities: [
			{
				title: "Clarify the audience and message",
				text: "Define the audience, positioning, content priorities, and campaign objectives before choosing channels.",
				example: "A business shapes a focused message and landing page around a specific service enquiry."
			},
			{
				title: "Connect content and discovery",
				text: "Review site structure, page content, search fundamentals, and relevant distribution channels as one connected experience.",
				example: "A service page answers the practical questions an audience is likely to have before getting in touch."
			},
			{
				title: "Review the right signals",
				text: "Agree on measurement, consent requirements, and reporting so campaign decisions can be reviewed with useful context.",
				example: "A team compares enquiries and relevant website actions with the objectives agreed for a campaign."
			}
		],
		deliverables: [
			"Audience and messaging brief",
			"Channel & content action plan",
			"Agreed campaign or landing-page assets",
			"Measurement setup and review framework"
		],
		integration: "We review your website, existing channels, account access, analytics preferences, and available content. Campaign budgets, platform costs, and outcome measures are agreed before execution; results depend on the market and scope.",
		steps: [
			["Align", "Agree on the audience, message, and intended next action."],
			["Activate", "Prepare the content, channels, and website touchpoints."],
			["Review", "Use agreed measurements to guide the next improvements."]
		]
	},
	{
		slug: "recruitment-skills",
		name: "Recruitment Skills",
		kind: "people",
		category: "PEOPLE & CAPABILITY",
		hero: ["The right skills.", "A clearer way forward."],
		intro: "Bring clarity to the capabilities your team needs. Structure role requirements, skill discussions, and recruitment workflows around practical business responsibilities.",
		seo: "Role requirements, skills mapping and recruitment workflow support from NekSoft Consultancy Services.",
		challenge: "Start with the work a role needs to do.",
		perspective: "Clear expectations help teams make better-informed decisions. We help structure the responsibilities, relevant skills, and coordination steps around an agreed recruitment or capability need.",
		capabilities: [
			{
				title: "Define the requirement",
				text: "Clarify role responsibilities, working context, relevant experience, and the skills needed to carry out the work.",
				example: "A technical team turns a broad hiring request into a focused role brief with clear responsibilities."
			},
			{
				title: "Structure the skills discussion",
				text: "Create a consistent framework for reviewing role-relevant capabilities and identifying where further discussion or development is needed.",
				example: "Interviewers use an agreed set of role-related topics rather than separate, unstructured checklists."
			},
			{
				title: "Coordinate the workflow",
				text: "Organize agreed recruitment stages, ownership, communication, and handoffs so progress is easier for the team to follow.",
				example: "A hiring team knows who owns each next step and where an application is in the agreed process."
			}
		],
		deliverables: [
			"Role and capability brief",
			"Role-relevant skills framework",
			"Agreed recruitment process and ownership",
			"Coordination templates & handover guidance"
		],
		integration: "We agree the engagement scope, candidate-data handling, access permissions, and decision ownership with your team. Hiring decisions remain with the employer, and the process should be reviewed against applicable employment requirements.",
		steps: [
			["Clarify", "Define the work, responsibilities, and relevant capabilities."],
			["Structure", "Agree the review stages, criteria, and ownership."],
			["Coordinate", "Support the agreed workflow and keep handoffs clear."]
		]
	}
];
var serviceMetadata = Object.fromEntries(servicePages.map((s) => ["/" + s.slug, [s.name, s.seo]]));
// src/SiteHeader.tsx
var serviceIcons = {
	Handshake,
	Bot,
	Globe,
	PanelsTopLeft,
	Palette,
	Cloud,
	Smartphone,
	Megaphone,
	Users
};
function Icon({ name }) {
	const Component = serviceIcons[name];
	return /* @__PURE__ */ jsx(Component, {
		size: 20,
		strokeWidth: 1.55,
		"aria-hidden": "true"
	});
}
function SiteHeader() {
	const location = useLocation();
	const menuItems = useSiteContent()?.menus ?? defaultMenus;
	const navigation = (menuItems.some((item) => item.href === "/") ? menuItems : [{
		label: "Home",
		href: "/",
		visible: true
	}, ...menuItems]).filter((item) => item.visible).map((item) => [item.label, item.href]);
	const navActive = (to) => {
		const target = new URL(cmsLink(to), "https://neksoft.local");
		if (target.hash) return location.pathname === target.pathname && location.hash === target.hash;
		return location.pathname === target.pathname && (target.pathname !== "/" || ![
			"#products",
			"#fisheries360",
			"#classmentor360"
		].includes(location.hash));
	};
	const path = location.pathname.replace(/\/+$/, "") || "/";
	const [mobileOpen, setMobileOpen] = useState(false);
	const [solutionsOpen, setSolutionsOpen] = useState(false);
	const [mobileSolutions, setMobileSolutions] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const menuButton = useRef(null);
	const solutionsButton = useRef(null);
	const solutionsRoot = useRef(null);
	const panel = useRef(null);
	const header = useRef(null);
	const closeTimer = useRef(null);
	const focusOnOpen = useRef(false);
	const solutionsActive = [
		"/solutions",
		"/iot-solutions",
		"/custom-software",
		...serviceNavigation.map((s) => "/" + s.slug)
	].includes(path);
	const cancelClose = () => {
		if (closeTimer.current) clearTimeout(closeTimer.current);
		closeTimer.current = null;
	};
	const closeAll = () => {
		cancelClose();
		focusOnOpen.current = false;
		setSolutionsOpen(false);
		setMobileOpen(false);
		setMobileSolutions(false);
	};
	useEffect(() => {
		closeAll();
	}, [
		location.pathname,
		location.hash,
		location.search
	]);
	useEffect(() => {
		const scroll = () => setScrolled(window.scrollY > 32);
		scroll();
		window.addEventListener("scroll", scroll, { passive: true });
		return () => window.removeEventListener("scroll", scroll);
	}, []);
	useEffect(() => () => cancelClose(), []);
	useEffect(() => {
		if (solutionsOpen && focusOnOpen.current) {
			panel.current?.querySelector(".mega-link")?.focus();
			focusOnOpen.current = false;
		}
	}, [solutionsOpen]);
	useEffect(() => {
		const media = matchMedia("(min-width: 701px)");
		const resize = () => {
			if (media.matches) {
				setMobileOpen(false);
				setMobileSolutions(false);
			} else setSolutionsOpen(false);
		};
		media.addEventListener("change", resize);
		return () => media.removeEventListener("change", resize);
	}, []);
	useEffect(() => {
		document.body.classList.toggle("menu-open", mobileOpen);
		return () => document.body.classList.remove("menu-open");
	}, [mobileOpen]);
	useEffect(() => {
		if (!mobileOpen && !solutionsOpen) return;
		const outside = (e) => {
			if (!solutionsRoot.current?.contains(e.target)) setSolutionsOpen(false);
		};
		const keys = (e) => {
			if (e.key === "Escape") {
				e.preventDefault();
				cancelClose();
				setSolutionsOpen(false);
				if (mobileOpen) {
					setMobileOpen(false);
					menuButton.current?.focus();
				} else solutionsButton.current?.focus();
			}
			if (e.key === "Tab" && mobileOpen) {
				const focusable = Array.from(header.current?.querySelectorAll("a[href],button:not([disabled])") || []).filter((el) => el.getClientRects().length > 0 && !el.closest("[inert]"));
				const first = focusable[0], last = focusable[focusable.length - 1];
				if (e.shiftKey && document.activeElement === first) {
					e.preventDefault();
					last?.focus();
				} else if (!e.shiftKey && document.activeElement === last) {
					e.preventDefault();
					first?.focus();
				}
			}
		};
		document.addEventListener("pointerdown", outside);
		document.addEventListener("keydown", keys);
		return () => {
			document.removeEventListener("pointerdown", outside);
			document.removeEventListener("keydown", keys);
		};
	}, [solutionsOpen, mobileOpen]);
	return /* @__PURE__ */ jsxs("header", {
		ref: header,
		className: `site-header ${scrolled ? "scrolled" : ""} ${mobileOpen ? "menu-visible" : ""} ${solutionsOpen ? "solutions-visible" : ""}`,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "header-inner",
			children: [
				/* @__PURE__ */ jsx(Link, {
					className: "brand",
					to: cmsLink("/"),
					"aria-label": cmsText("NekSoft home", "SiteHeader:SiteHeader:header"),
					onClick: closeAll,
					children: /* @__PURE__ */ jsx("img", {
						src: cmsAsset("/images/logo.webp"),
						width: "300",
						height: "59",
						alt: cmsText("NekSoft — Accelerating Your Growth", "SiteHeader:SiteHeader:header")
					})
				}),
				/* @__PURE__ */ jsxs("nav", {
					className: "desktop-nav",
					"aria-label": cmsText("Main navigation", "SiteHeader:SiteHeader:header"),
					children: [/* @__PURE__ */ jsxs("div", {
						ref: solutionsRoot,
						className: "solutions-navigation",
						onPointerEnter: (e) => {
							if (e.pointerType !== "touch") {
								cancelClose();
								setSolutionsOpen(true);
							}
						},
						onPointerLeave: () => {
							cancelClose();
							if (!panel.current?.contains(document.activeElement)) closeTimer.current = setTimeout(() => setSolutionsOpen(false), 160);
						},
						onBlur: (e) => {
							if (!e.currentTarget.contains(e.relatedTarget)) {
								cancelClose();
								setSolutionsOpen(false);
							}
						},
						children: [/* @__PURE__ */ jsxs("button", {
							ref: solutionsButton,
							className: `solutions-trigger ${solutionsActive ? "active" : ""}`,
							"aria-expanded": solutionsOpen,
							"aria-controls": "solutions-mega-menu",
							onClick: (e) => {
								cancelClose();
								setSolutionsOpen(e.detail > 0 && matchMedia("(hover: hover)").matches ? true : !solutionsOpen);
							},
							onKeyDown: (e) => {
								if (e.key === "ArrowDown") {
									e.preventDefault();
									if (solutionsOpen) {
										focusOnOpen.current = false;
										panel.current?.querySelector(".mega-link")?.focus();
									} else {
										focusOnOpen.current = true;
										setSolutionsOpen(true);
									}
								}
							},
							children: [cmsText("Digital Solutions ", "SiteHeader:SiteHeader:header"), /* @__PURE__ */ jsx(ChevronDown, {
								size: 12,
								"aria-hidden": "true"
							})]
						}), /* @__PURE__ */ jsxs("div", {
							ref: panel,
							className: `solutions-panel ${solutionsOpen ? "is-open" : ""}`,
							id: "solutions-mega-menu",
							inert: !solutionsOpen,
							"aria-hidden": !solutionsOpen,
							onKeyDown: (e) => {
								if (![
									"ArrowDown",
									"ArrowUp",
									"Home",
									"End"
								].includes(e.key)) return;
								const links = Array.from(panel.current?.querySelectorAll("a") || []);
								const i = links.indexOf(document.activeElement);
								if (i < 0) return;
								e.preventDefault();
								links[e.key === "Home" ? 0 : e.key === "End" ? links.length - 1 : (i + (e.key === "ArrowDown" ? 1 : -1) + links.length) % links.length]?.focus();
							},
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "mega-topline",
									children: [/* @__PURE__ */ jsx("span", {
										className: "mono",
										children: cmsText("SOLUTIONS / BUILT AROUND YOUR BUSINESS", "SiteHeader:SiteHeader:header")
									}), /* @__PURE__ */ jsxs(Link, {
										to: cmsLink("/solutions"),
										onClick: closeAll,
										children: [cmsText("Explore all solutions ", "SiteHeader:SiteHeader:header"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 14 })]
									})]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "mega-columns",
									children: cmsText(serviceGroups.map((group) => /* @__PURE__ */ jsxs("section", {
										className: "mega-column",
										"aria-label": cmsText(group.name, "SiteHeader:SiteHeader:mega-column"),
										children: [/* @__PURE__ */ jsx("h2", {
											className: "mono",
											children: cmsText(group.name, "SiteHeader:SiteHeader:mega-column")
										}), /* @__PURE__ */ jsx("div", { children: cmsText(group.items.map((item) => /* @__PURE__ */ jsxs(NavLink, {
											to: cmsLink("/" + item.slug),
											onClick: closeAll,
											className: ({ isActive }) => `mega-link ${isActive ? "selected" : ""}`,
											children: [
												/* @__PURE__ */ jsx("span", {
													className: "mega-icon",
													children: /* @__PURE__ */ jsx(Icon, { name: item.icon })
												}),
												/* @__PURE__ */ jsxs("span", {
													className: "mega-link-copy",
													children: [/* @__PURE__ */ jsx("strong", { children: cmsText(item.label, "SiteHeader:SiteHeader:mega-column") }), /* @__PURE__ */ jsx("small", { children: cmsText(item.description, "SiteHeader:SiteHeader:mega-column") })]
												}),
												/* @__PURE__ */ jsx(ArrowUpRight, {
													size: 15,
													className: "mega-link-arrow",
													"aria-hidden": "true"
												})
											]
										}, item.slug)), "SiteHeader:SiteHeader:mega-column") })]
									}, group.name)), "SiteHeader:SiteHeader:header")
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mega-bottom",
									children: [/* @__PURE__ */ jsxs(Link, {
										to: cmsLink("/iot-solutions"),
										onClick: closeAll,
										className: "mega-connected",
										children: [
											/* @__PURE__ */ jsxs("span", {
												className: "mega-network-icon",
												children: [
													/* @__PURE__ */ jsx(Radio, {
														size: 19,
														"aria-hidden": "true"
													}),
													/* @__PURE__ */ jsx("i", {}),
													/* @__PURE__ */ jsx("i", {})
												]
											}),
											/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("strong", { children: cmsText("Connected intelligence", "SiteHeader:SiteHeader:header") }), /* @__PURE__ */ jsx("small", { children: cmsText("Explore IoT, device connectivity & intelligent operations", "SiteHeader:SiteHeader:header") })] }),
											/* @__PURE__ */ jsx(ArrowRight, { size: 18 })
										]
									}), /* @__PURE__ */ jsxs("span", {
										className: "mega-signature mono",
										children: [
											cmsText("PHYSICAL WORLD.", "SiteHeader:SiteHeader:header"),
											/* @__PURE__ */ jsx("br", {}),
											cmsText("INTELLIGENT SOFTWARE.", "SiteHeader:SiteHeader:header")
										]
									})]
								})
							]
						})]
					}), cmsText(navigation.map(([name, to]) => /* @__PURE__ */ jsx(Link, {
						to: cmsLink(to),
						className: navActive(to) ? "active" : "",
						"aria-current": navActive(to) ? "page" : void 0,
						children: cmsText(name, "SiteHeader:SiteHeader:header")
					}, to)), "SiteHeader:SiteHeader:header")]
				}),
				/* @__PURE__ */ jsxs(Link, {
					to: cmsLink("/contact"),
					className: "header-cta",
					children: [cmsText("Discuss Your Project ", "SiteHeader:SiteHeader:header"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 16 })]
				}),
				/* @__PURE__ */ jsx("button", {
					ref: menuButton,
					className: "menu-toggle",
					"aria-label": cmsText(mobileOpen ? "Close navigation" : "Open navigation", "SiteHeader:SiteHeader:header"),
					"aria-expanded": mobileOpen,
					"aria-controls": "mobile-navigation",
					onClick: () => setMobileOpen(!mobileOpen),
					children: cmsText(mobileOpen ? /* @__PURE__ */ jsx(X, {}) : /* @__PURE__ */ jsx(Menu, {}), "SiteHeader:SiteHeader:header")
				})
			]
		}), /* @__PURE__ */ jsxs("nav", {
			id: "mobile-navigation",
			className: "mobile-nav premium-mobile-nav",
			"aria-label": cmsText("Mobile navigation", "SiteHeader:SiteHeader:header"),
			inert: !mobileOpen,
			"aria-hidden": !mobileOpen,
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "mobile-nav-label mono",
					children: cmsText("EXPLORE NEKSOFT", "SiteHeader:SiteHeader:header")
				}),
				/* @__PURE__ */ jsxs("button", {
					className: `mobile-solutions-trigger ${solutionsActive ? "active" : ""}`,
					"aria-expanded": mobileSolutions,
					"aria-controls": "mobile-solutions-list",
					onClick: () => setMobileSolutions(!mobileSolutions),
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "mono",
							children: cmsText("01", "SiteHeader:SiteHeader:header")
						}),
						cmsText("Digital Solutions", "SiteHeader:SiteHeader:header"),
						/* @__PURE__ */ jsx(ChevronDown, { size: 21 })
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: `mobile-solutions-list ${mobileSolutions ? "expanded" : ""}`,
					id: "mobile-solutions-list",
					inert: !mobileSolutions,
					"aria-hidden": !mobileSolutions,
					children: /* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsxs(Link, {
							className: "mobile-all-solutions",
							to: cmsLink("/solutions"),
							onClick: closeAll,
							children: [cmsText("All solutions ", "SiteHeader:SiteHeader:header"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 15 })]
						}),
						cmsText(serviceGroups.map((group) => /* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
							className: "mono",
							children: cmsText(group.name, "SiteHeader:SiteHeader:section")
						}), cmsText(group.items.map((item) => /* @__PURE__ */ jsxs(NavLink, {
							to: cmsLink("/" + item.slug),
							onClick: closeAll,
							className: ({ isActive }) => isActive ? "active" : "",
							children: [
								/* @__PURE__ */ jsx(Icon, { name: item.icon }),
								/* @__PURE__ */ jsx("span", { children: cmsText(item.label, "SiteHeader:SiteHeader:section") }),
								/* @__PURE__ */ jsx(ArrowUpRight, { size: 14 })
							]
						}, item.slug)), "SiteHeader:SiteHeader:section")] }, group.name)), "SiteHeader:SiteHeader:header"),
						/* @__PURE__ */ jsxs(NavLink, {
							className: "mobile-iot-link",
							to: cmsLink("/iot-solutions"),
							onClick: closeAll,
							children: [
								/* @__PURE__ */ jsx(Radio, { size: 18 }),
								cmsText("IoT & connectivity", "SiteHeader:SiteHeader:header"),
								/* @__PURE__ */ jsx(ArrowUpRight, { size: 14 })
							]
						})
					] })
				}),
				cmsText(navigation.map(([name, to], i) => /* @__PURE__ */ jsxs(Link, {
					to: cmsLink(to),
					onClick: closeAll,
					className: navActive(to) ? "active" : "",
					"aria-current": navActive(to) ? "page" : void 0,
					children: [
						/* @__PURE__ */ jsxs("span", {
							className: "mono",
							children: [cmsText("0", "SiteHeader:SiteHeader:header"), cmsText(i + 2, "SiteHeader:SiteHeader:header")]
						}),
						cmsText(name, "SiteHeader:SiteHeader:header"),
						/* @__PURE__ */ jsx(ArrowUpRight, {})
					]
				}, to)), "SiteHeader:SiteHeader:header"),
				/* @__PURE__ */ jsxs(Link, {
					to: cmsLink("/contact"),
					onClick: closeAll,
					children: [cmsText("Discuss Your Project", "SiteHeader:SiteHeader:header"), /* @__PURE__ */ jsx(ArrowUpRight, {})]
				}),
				/* @__PURE__ */ jsx("span", {
					className: "mono mobile-nav-signature",
					children: cmsText("CONNECTED SYSTEMS. INTELLIGENT OPERATIONS.", "SiteHeader:SiteHeader:header")
				})
			]
		})]
	});
}
// src/DetailedExperiences.tsx
function Chapter({ children }) {
	return /* @__PURE__ */ jsxs("span", {
		className: "eyebrow",
		children: [/* @__PURE__ */ jsx("span", { className: "label-line" }), cmsText(children, "DetailedExperiences:Chapter")]
	});
}
function DetailedFAQ({ items, id, title = "A few details worth discussing." }) {
	const [opened, setOpened] = useState(0);
	return /* @__PURE__ */ jsx("section", {
		className: "section depth-faq-section",
		"data-content-section": "questions",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container depth-faq-layout",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "depth-faq-intro reveal",
				children: [
					/* @__PURE__ */ jsx(Chapter, { children: cmsText("QUESTIONS & ANSWERS", "DetailedExperiences:DetailedFAQ:section depth-faq-section") }),
					/* @__PURE__ */ jsx("h2", { children: cmsText(title, "DetailedExperiences:DetailedFAQ:section depth-faq-section") }),
					/* @__PURE__ */ jsx("p", { children: cmsText("Clear answers help define the right next step. Your project scope and responsibilities are agreed before delivery.", "DetailedExperiences:DetailedFAQ:section depth-faq-section") }),
					/* @__PURE__ */ jsxs(Link, {
						className: "explore-link",
						to: cmsLink("/contact"),
						children: [cmsText("Ask the team ", "DetailedExperiences:DetailedFAQ:section depth-faq-section"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 16 })]
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "depth-faq-list reveal",
				children: cmsText(items.map(([question, answer], i) => /* @__PURE__ */ jsxs("article", {
					className: `depth-faq-item ${opened === i ? "expanded" : ""}`,
					children: [/* @__PURE__ */ jsx("h3", { children: /* @__PURE__ */ jsxs("button", {
						type: "button",
						id: `${id}-question-${i}`,
						"aria-expanded": opened === i,
						"aria-controls": `${id}-answer-${i}`,
						onClick: () => setOpened(opened === i ? null : i),
						children: [/* @__PURE__ */ jsx("span", { children: cmsText(question, "DetailedExperiences:DetailedFAQ:section depth-faq-section") }), cmsText(opened === i ? /* @__PURE__ */ jsx(Minus, {
							size: 18,
							"aria-hidden": "true"
						}) : /* @__PURE__ */ jsx(Plus, {
							size: 18,
							"aria-hidden": "true"
						}), "DetailedExperiences:DetailedFAQ:section depth-faq-section")]
					}) }), /* @__PURE__ */ jsx("div", {
						className: "depth-faq-answer",
						id: `${id}-answer-${i}`,
						"aria-labelledby": `${id}-question-${i}`,
						"aria-hidden": opened !== i,
						inert: opened !== i,
						children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: cmsText(answer, "DetailedExperiences:DetailedFAQ:section depth-faq-section") }) })
					})]
				}, question)), "DetailedExperiences:DetailedFAQ:section depth-faq-section")
			})]
		})
	});
}
function ServiceDetailExpansion({ slug }) {
	const data = serviceDepth[slug];
	const [active, setActive] = useState(0);
	const tabs = useRef([]);
	if (!data) return null;
	const scenario = data.scenarios[active];
	return /* @__PURE__ */ jsxs("div", {
		className: "service-depth",
		"data-service-details": slug,
		children: [
			/* @__PURE__ */ jsx("section", {
				className: "section depth-scenarios",
				id: `${slug}-applications`,
				"data-content-section": "applications",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "section-heading reveal",
						children: [/* @__PURE__ */ jsxs(Chapter, { children: [cmsText("IN PRACTICE / ", "DetailedExperiences:ServiceDetailExpansion:section depth-scenarios"), cmsText(data.name.toUpperCase(), "DetailedExperiences:ServiceDetailExpansion:section depth-scenarios")] }), /* @__PURE__ */ jsxs("div", {
							className: "heading-row",
							children: [/* @__PURE__ */ jsxs("h2", { children: [
								cmsText("From a business need", "DetailedExperiences:ServiceDetailExpansion:section depth-scenarios"),
								/* @__PURE__ */ jsx("br", {}),
								cmsText("to a working flow.", "DetailedExperiences:ServiceDetailExpansion:section depth-scenarios")
							] }), /* @__PURE__ */ jsx("p", { children: cmsText(data.lead, "DetailedExperiences:ServiceDetailExpansion:section depth-scenarios") })]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "scenario-workbench reveal",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "scenario-tabs",
								role: "tablist",
								"aria-label": cmsText(`${data.name} use cases`, "DetailedExperiences:ServiceDetailExpansion:section depth-scenarios"),
								children: cmsText(data.scenarios.map((s, i) => /* @__PURE__ */ jsxs("button", {
									ref: (el) => {
										tabs.current[i] = el;
									},
									type: "button",
									role: "tab",
									id: `${slug}-scenario-tab-${i}`,
									"aria-controls": `${slug}-scenario-panel`,
									"aria-selected": active === i,
									tabIndex: active === i ? 0 : -1,
									onClick: () => setActive(i),
									onKeyDown: (e) => {
										if (![
											"ArrowLeft",
											"ArrowRight",
											"Home",
											"End"
										].includes(e.key)) return;
										e.preventDefault();
										const next = e.key === "Home" ? 0 : e.key === "End" ? data.scenarios.length - 1 : (active + (e.key === "ArrowRight" ? 1 : -1) + data.scenarios.length) % data.scenarios.length;
										setActive(next);
										tabs.current[next]?.focus();
									},
									children: [
										/* @__PURE__ */ jsxs("span", {
											className: "mono",
											children: [cmsText("0", "DetailedExperiences:ServiceDetailExpansion:section depth-scenarios"), cmsText(i + 1, "DetailedExperiences:ServiceDetailExpansion:section depth-scenarios")]
										}),
										cmsText(s.title, "DetailedExperiences:ServiceDetailExpansion:section depth-scenarios"),
										/* @__PURE__ */ jsx(ArrowUpRight, { size: 16 })
									]
								}, s.title)), "DetailedExperiences:ServiceDetailExpansion:section depth-scenarios")
							}),
							/* @__PURE__ */ jsx("div", {
								className: "scenario-panel",
								role: "tabpanel",
								id: `${slug}-scenario-panel`,
								"aria-labelledby": `${slug}-scenario-tab-${active}`,
								tabIndex: 0,
								children: /* @__PURE__ */ jsxs("div", {
									className: "scenario-panel-content",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "scenario-context",
											children: [
												/* @__PURE__ */ jsx("span", {
													className: "mono",
													children: cmsText("THE OPERATING CONTEXT", "DetailedExperiences:ServiceDetailExpansion:section depth-scenarios")
												}),
												/* @__PURE__ */ jsx("h3", { children: cmsText(scenario.title, "DetailedExperiences:ServiceDetailExpansion:section depth-scenarios") }),
												/* @__PURE__ */ jsx("p", { children: cmsText(scenario.context, "DetailedExperiences:ServiceDetailExpansion:section depth-scenarios") })
											]
										}),
										/* @__PURE__ */ jsx("ol", {
											className: "scenario-flow",
											children: cmsText(scenario.flow.map((step, i) => /* @__PURE__ */ jsxs("li", { children: [
												/* @__PURE__ */ jsxs("span", {
													className: "scenario-step-marker mono",
													children: [cmsText("0", "DetailedExperiences:ServiceDetailExpansion:section depth-scenarios"), cmsText(i + 1, "DetailedExperiences:ServiceDetailExpansion:section depth-scenarios")]
												}),
												/* @__PURE__ */ jsx("span", { children: cmsText(step, "DetailedExperiences:ServiceDetailExpansion:section depth-scenarios") }),
												cmsText(i < scenario.flow.length - 1 && /* @__PURE__ */ jsx(ArrowRight, {
													size: 15,
													"aria-hidden": "true"
												}), "DetailedExperiences:ServiceDetailExpansion:section depth-scenarios")
											] }, step)), "DetailedExperiences:ServiceDetailExpansion:section depth-scenarios")
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "scenario-outcome",
											children: [/* @__PURE__ */ jsx(CheckCheck, {
												size: 23,
												strokeWidth: 1.3
											}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
												className: "mono",
												children: cmsText("DESIGNED OUTCOME", "DetailedExperiences:ServiceDetailExpansion:section depth-scenarios")
											}), /* @__PURE__ */ jsx("p", { children: cmsText(scenario.outcome, "DetailedExperiences:ServiceDetailExpansion:section depth-scenarios") })] })]
										})
									]
								}, active)
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "scenario-footnote",
								children: [/* @__PURE__ */ jsx("span", {
									className: "mono",
									children: cmsText("ILLUSTRATIVE APPLICATION", "DetailedExperiences:ServiceDetailExpansion:section depth-scenarios")
								}), /* @__PURE__ */ jsx("span", { children: cmsText("Examples describe potential solutions. They are not customer project results.", "DetailedExperiences:ServiceDetailExpansion:section depth-scenarios") })]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "section depth-planning",
				id: `${slug}-planning`,
				"data-content-section": "planning",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container depth-planning-layout",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
						className: "reveal",
						children: [/* @__PURE__ */ jsx(Chapter, { children: cmsText("IMPLEMENTATION CONSIDERATIONS", "DetailedExperiences:ServiceDetailExpansion:section depth-planning") }), /* @__PURE__ */ jsxs("h2", { children: [
							cmsText("Decisions that", "DetailedExperiences:ServiceDetailExpansion:section depth-planning"),
							/* @__PURE__ */ jsx("br", {}),
							cmsText("shape delivery.", "DetailedExperiences:ServiceDetailExpansion:section depth-planning")
						] })]
					}), /* @__PURE__ */ jsx("dl", {
						className: "planning-decisions",
						children: cmsText(data.planning.map(([title, text], i) => /* @__PURE__ */ jsxs("div", {
							className: "reveal",
							children: [/* @__PURE__ */ jsxs("dt", { children: [/* @__PURE__ */ jsxs("span", {
								className: "mono",
								children: [cmsText("0", "DetailedExperiences:ServiceDetailExpansion:section depth-planning"), cmsText(i + 1, "DetailedExperiences:ServiceDetailExpansion:section depth-planning")]
							}), cmsText(title, "DetailedExperiences:ServiceDetailExpansion:section depth-planning")] }), /* @__PURE__ */ jsx("dd", { children: cmsText(text, "DetailedExperiences:ServiceDetailExpansion:section depth-planning") })]
						}, title)), "DetailedExperiences:ServiceDetailExpansion:section depth-planning")
					})] }), /* @__PURE__ */ jsxs("aside", {
						className: "depth-brief-card dark reveal",
						children: [
							/* @__PURE__ */ jsx(ClipboardList, {
								size: 33,
								strokeWidth: 1.1
							}),
							/* @__PURE__ */ jsx("span", {
								className: "mono",
								children: cmsText("A USEFUL STARTING BRIEF", "DetailedExperiences:ServiceDetailExpansion:section depth-planning")
							}),
							/* @__PURE__ */ jsxs("h3", { children: [
								cmsText("Bring the context.", "DetailedExperiences:ServiceDetailExpansion:section depth-planning"),
								/* @__PURE__ */ jsx("br", {}),
								cmsText("We’ll shape the next step.", "DetailedExperiences:ServiceDetailExpansion:section depth-planning")
							] }),
							/* @__PURE__ */ jsx("p", { children: cmsText("You do not need every answer before getting in touch. These details help focus the discussion.", "DetailedExperiences:ServiceDetailExpansion:section depth-planning") }),
							/* @__PURE__ */ jsx("ul", { children: cmsText(data.brief.map((item) => /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx(Check, { size: 15 }), cmsText(item, "DetailedExperiences:ServiceDetailExpansion:section depth-planning")] }, item)), "DetailedExperiences:ServiceDetailExpansion:section depth-planning") }),
							/* @__PURE__ */ jsxs(Link, {
								className: "button",
								to: cmsLink(`/contact?service=${encodeURIComponent(data.name)}`),
								children: [cmsText("Discuss this requirement ", "DetailedExperiences:ServiceDetailExpansion:section depth-planning"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 16 })]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx(DetailedFAQ, {
				items: data.faqs,
				id: `${slug}-details`,
				title: cmsText(`Before your ${data.name.toLowerCase()} project.`, "DetailedExperiences:ServiceDetailExpansion")
			})
		]
	});
}
var startingPoints = [
	{
		id: "visibility",
		label: "See the operation",
		heading: "Start with connected visibility.",
		text: "When information comes from physical assets, identify the signals and operational questions first. A device and connectivity assessment can establish what is possible.",
		inputs: "Equipment, sensors, network conditions, and a pilot location.",
		outcome: "An initial connectivity approach and the information needed for a monitoring pilot.",
		links: [["IoT & connectivity", "/iot-solutions"], ["Industry applications", "/industries"]]
	},
	{
		id: "workflow",
		label: "Remove repeated work",
		heading: "Start with the handoff.",
		text: "Map a repeated task, the source event, and the person responsible for exceptions. Then decide whether rules, integration, AI, or a combination is the right fit.",
		inputs: "A process example, current systems, approval rules, and common exceptions.",
		outcome: "A workflow outline with the trigger, decisions, actions, and recovery path.",
		links: [["AI & automation", "/ai-automation"], ["Zoho consultation", "/zoho-consultation"]]
	},
	{
		id: "product",
		label: "Build a digital product",
		heading: "Start with the first useful experience.",
		text: "Define the audience and the core task before expanding the feature list. Product, interface, and architecture decisions should support the same focused release.",
		inputs: "Target users, the key workflow, platform needs, and first-release priorities.",
		outcome: "A product direction and a practical set of requirements to validate next.",
		links: [["Application solutions", "/application-solutions"], ["SaaS solutions", "/saas-solutions"]]
	},
	{
		id: "presence",
		label: "Strengthen your presence",
		heading: "Start with the audience’s next decision.",
		text: "Connect a clear business message with useful content and a relevant route to an enquiry. Website, design, and channel work can support one consistent experience.",
		inputs: "Your audience, current website, brand assets, and content priorities.",
		outcome: "A clearer page, content, and experience brief for the digital touchpoints.",
		links: [["Website solutions", "/website-solutions"], ["Design solutions", "/design-solutions"]]
	}
];
function SolutionStartingPoint() {
	const [selected, setSelected] = useState(0);
	const point = startingPoints[selected];
	return /* @__PURE__ */ jsx("section", {
		className: "section starting-point-section",
		"data-content-section": "starting-point",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "section-heading reveal",
					children: [/* @__PURE__ */ jsx(Chapter, { children: cmsText("FIND YOUR STARTING POINT", "DetailedExperiences:SolutionStartingPoint:section starting-point-section") }), /* @__PURE__ */ jsxs("div", {
						className: "heading-row",
						children: [/* @__PURE__ */ jsxs("h2", { children: [
							cmsText("Begin with the need.", "DetailedExperiences:SolutionStartingPoint:section starting-point-section"),
							/* @__PURE__ */ jsx("br", {}),
							cmsText("Build the right connection.", "DetailedExperiences:SolutionStartingPoint:section starting-point-section")
						] }), /* @__PURE__ */ jsx("p", { children: cmsText("You do not need to choose a technology before describing the problem. Select the goal closest to yours.", "DetailedExperiences:SolutionStartingPoint:section starting-point-section") })]
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "starting-point-selector reveal",
					role: "group",
					"aria-label": cmsText("Choose a business goal", "DetailedExperiences:SolutionStartingPoint:section starting-point-section"),
					children: cmsText(startingPoints.map((p, i) => /* @__PURE__ */ jsxs("button", {
						type: "button",
						"aria-pressed": selected === i,
						onClick: () => setSelected(i),
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "mono",
								children: [cmsText("0", "DetailedExperiences:SolutionStartingPoint:section starting-point-section"), cmsText(i + 1, "DetailedExperiences:SolutionStartingPoint:section starting-point-section")]
							}),
							cmsText(p.label, "DetailedExperiences:SolutionStartingPoint:section starting-point-section"),
							/* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })
						]
					}, p.id)), "DetailedExperiences:SolutionStartingPoint:section starting-point-section")
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "starting-point-result reveal",
					"aria-live": "polite",
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("span", {
							className: "mono",
							children: cmsText("SUGGESTED STARTING POINT", "DetailedExperiences:SolutionStartingPoint:section starting-point-section")
						}),
						/* @__PURE__ */ jsx("h3", { children: cmsText(point.heading, "DetailedExperiences:SolutionStartingPoint:section starting-point-section") }),
						/* @__PURE__ */ jsx("p", { children: cmsText(point.text, "DetailedExperiences:SolutionStartingPoint:section starting-point-section") }),
						/* @__PURE__ */ jsx("div", {
							className: "starting-point-links",
							children: cmsText(point.links.map(([label, to]) => /* @__PURE__ */ jsxs(Link, {
								className: "explore-link",
								to: cmsLink(to),
								children: [cmsText(label, "DetailedExperiences:SolutionStartingPoint:section starting-point-section"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 15 })]
							}, to)), "DetailedExperiences:SolutionStartingPoint:section starting-point-section")
						})
					] }, point.id), /* @__PURE__ */ jsxs("dl", { children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", { children: cmsText("What to bring", "DetailedExperiences:SolutionStartingPoint:section starting-point-section") }), /* @__PURE__ */ jsx("dd", { children: cmsText(point.inputs, "DetailedExperiences:SolutionStartingPoint:section starting-point-section") })] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", { children: cmsText("What to clarify next", "DetailedExperiences:SolutionStartingPoint:section starting-point-section") }), /* @__PURE__ */ jsx("dd", { children: cmsText(point.outcome, "DetailedExperiences:SolutionStartingPoint:section starting-point-section") })] })] })]
				})
			]
		})
	});
}
function IndustryContext({ name }) {
	return /* @__PURE__ */ jsx("dl", {
		className: "industry-operating-detail",
		children: cmsText(industryDepth[name]?.map(([label, text]) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", { children: cmsText(label, "DetailedExperiences:IndustryContext") }), /* @__PURE__ */ jsx("dd", { children: cmsText(text, "DetailedExperiences:IndustryContext") })] }, label)), "DetailedExperiences:IndustryContext")
	});
}
function HomeDepth() {
	return /* @__PURE__ */ jsx("section", {
		className: "section home-engineering-depth",
		"data-content-section": "delivery-confidence",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container home-engineering-layout",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "reveal",
				children: [
					/* @__PURE__ */ jsx(Chapter, { children: cmsText("ENGINEERED FOR THE EVERYDAY", "DetailedExperiences:HomeDepth:section home-engineering-depth") }),
					/* @__PURE__ */ jsxs("h2", { children: [
						cmsText("The connection", "DetailedExperiences:HomeDepth:section home-engineering-depth"),
						/* @__PURE__ */ jsx("br", {}),
						cmsText("is only the beginning.", "DetailedExperiences:HomeDepth:section home-engineering-depth")
					] }),
					/* @__PURE__ */ jsx("p", { children: cmsText("A working system also needs clear ownership, useful information, and a practical way to operate it. Those decisions belong in the project from the start.", "DetailedExperiences:HomeDepth:section home-engineering-depth") }),
					/* @__PURE__ */ jsxs(Link, {
						className: "explore-link",
						to: cmsLink("/approach"),
						children: [cmsText("Explore our delivery approach ", "DetailedExperiences:HomeDepth:section home-engineering-depth"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })]
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "engineering-agreements",
				children: cmsText([
					["Clear scope", "Define the problem, users, first release, and acceptance criteria so the work has a shared direction."],
					["Connected architecture", "Consider devices, software, data, and existing platforms together, with clear integration boundaries."],
					["Practical validation", "Use representative scenarios and a focused pilot or review to test the assumptions that matter."],
					["Operational handover", "Agree documentation, access, support, and improvement responsibilities so the system can be run after launch."]
				].map(([title, text], i) => /* @__PURE__ */ jsxs("article", {
					className: "reveal",
					children: [
						/* @__PURE__ */ jsxs("span", {
							className: "mono",
							children: [cmsText("0", "DetailedExperiences:HomeDepth:section home-engineering-depth"), cmsText(i + 1, "DetailedExperiences:HomeDepth:section home-engineering-depth")]
						}),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: cmsText(title, "DetailedExperiences:HomeDepth:section home-engineering-depth") }), /* @__PURE__ */ jsx("p", { children: cmsText(text, "DetailedExperiences:HomeDepth:section home-engineering-depth") })] }),
						/* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })
					]
				}, title)), "DetailedExperiences:HomeDepth:section home-engineering-depth")
			})]
		})
	});
}
var deliveryGates = [
	[
		"Discover",
		"Requirements brief, user roles, current-system map, priorities, and open questions.",
		"The problem, intended outcome, assumptions, and next validation step are understood."
	],
	[
		"Prototype",
		"A reviewable concept, architecture direction, or focused proof of concept.",
		"The key feasibility questions and acceptance criteria have a clear answer or an agreed next test."
	],
	[
		"Engineer",
		"Working increments of the agreed platform, application, integrations, or workflows.",
		"The implemented behavior can be reviewed against requirements and representative scenarios."
	],
	[
		"Integrate",
		"Connected data flows, access boundaries, exception handling, and end-to-end checks.",
		"The complete workflow works within the agreed environment and operating constraints."
	],
	[
		"Support",
		"Handover guidance, access information, support boundaries, and improvement priorities.",
		"The operating team understands responsibilities, known limitations, and how changes will be managed."
	]
];
function ApproachDepth() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("section", {
		className: "section delivery-gates-section",
		"data-content-section": "delivery-gates",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "section-heading reveal",
				children: [/* @__PURE__ */ jsx(Chapter, { children: cmsText("REVIEWABLE PROGRESS", "DetailedExperiences:ApproachDepth:section delivery-gates-section") }), /* @__PURE__ */ jsxs("div", {
					className: "heading-row",
					children: [/* @__PURE__ */ jsxs("h2", { children: [
						cmsText("Each stage needs", "DetailedExperiences:ApproachDepth:section delivery-gates-section"),
						/* @__PURE__ */ jsx("br", {}),
						cmsText("a clear decision.", "DetailedExperiences:ApproachDepth:section delivery-gates-section")
					] }), /* @__PURE__ */ jsx("p", { children: cmsText("The outputs and review points are adapted to the engagement. A short consultation and a connected platform build need different levels of detail.", "DetailedExperiences:ApproachDepth:section delivery-gates-section") })]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "delivery-gates",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "delivery-gates-header mono",
					children: [
						/* @__PURE__ */ jsx("span", { children: cmsText("STAGE", "DetailedExperiences:ApproachDepth:section delivery-gates-section") }),
						/* @__PURE__ */ jsx("span", { children: cmsText("WHAT IS PREPARED", "DetailedExperiences:ApproachDepth:section delivery-gates-section") }),
						/* @__PURE__ */ jsx("span", { children: cmsText("WHAT THE REVIEW ESTABLISHES", "DetailedExperiences:ApproachDepth:section delivery-gates-section") })
					]
				}), cmsText(deliveryGates.map(([stage, output, decision], i) => /* @__PURE__ */ jsxs("article", {
					className: "reveal",
					children: [
						/* @__PURE__ */ jsxs("h3", { children: [/* @__PURE__ */ jsxs("span", {
							className: "mono",
							children: [cmsText("0", "DetailedExperiences:ApproachDepth:section delivery-gates-section"), cmsText(i + 1, "DetailedExperiences:ApproachDepth:section delivery-gates-section")]
						}), cmsText(stage, "DetailedExperiences:ApproachDepth:section delivery-gates-section")] }),
						/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("span", {
							className: "gate-mobile-label mono",
							children: cmsText("OUTPUT", "DetailedExperiences:ApproachDepth:section delivery-gates-section")
						}), cmsText(output, "DetailedExperiences:ApproachDepth:section delivery-gates-section")] }),
						/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("span", {
							className: "gate-mobile-label mono",
							children: cmsText("REVIEW", "DetailedExperiences:ApproachDepth:section delivery-gates-section")
						}), cmsText(decision, "DetailedExperiences:ApproachDepth:section delivery-gates-section")] })
					]
				}, stage)), "DetailedExperiences:ApproachDepth:section delivery-gates-section")]
			})]
		})
	}), /* @__PURE__ */ jsx("section", {
		className: "section engagement-formats",
		"data-content-section": "engagements",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "section-heading reveal",
					children: [/* @__PURE__ */ jsx(Chapter, { children: cmsText("WAYS TO BEGIN", "DetailedExperiences:ApproachDepth:section engagement-formats") }), /* @__PURE__ */ jsxs("h2", { children: [
						cmsText("The right engagement", "DetailedExperiences:ApproachDepth:section engagement-formats"),
						/* @__PURE__ */ jsx("br", {}),
						cmsText("for the next decision.", "DetailedExperiences:ApproachDepth:section engagement-formats")
					] })]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "engagement-format-grid",
					children: cmsText([
						[
							"Assessment & consultation",
							"Understand an existing system, clarify requirements, or identify the information needed for a technical decision.",
							"Useful when the challenge is clear but the delivery scope is not."
						],
						[
							"Prototype & pilot",
							"Test a defined workflow, device connection, interface, or model against agreed criteria.",
							"Useful when feasibility or operating value needs validation."
						],
						[
							"Implementation & integration",
							"Deliver the agreed application, platform, connected system, or business workflow.",
							"Useful when requirements and dependencies support a defined build."
						],
						[
							"Support & improvement",
							"Maintain the agreed solution and prioritize changes as operational needs evolve.",
							"Useful when a live system needs defined technical ownership."
						]
					].map(([title, text, fit], i) => /* @__PURE__ */ jsxs("article", {
						className: "reveal",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "mono",
								children: [
									cmsText("0", "DetailedExperiences:ApproachDepth:section engagement-formats"),
									cmsText(i + 1, "DetailedExperiences:ApproachDepth:section engagement-formats"),
									cmsText(" / ENGAGEMENT", "DetailedExperiences:ApproachDepth:section engagement-formats")
								]
							}),
							/* @__PURE__ */ jsx("h3", { children: cmsText(title, "DetailedExperiences:ApproachDepth:section engagement-formats") }),
							/* @__PURE__ */ jsx("p", { children: cmsText(text, "DetailedExperiences:ApproachDepth:section engagement-formats") }),
							/* @__PURE__ */ jsx("span", {
								className: "engagement-fit",
								children: cmsText(fit, "DetailedExperiences:ApproachDepth:section engagement-formats")
							})
						]
					}, title)), "DetailedExperiences:ApproachDepth:section engagement-formats")
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "shared-responsibility reveal",
					children: [/* @__PURE__ */ jsx(ShieldCheck, {
						size: 25,
						strokeWidth: 1.2
					}), /* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("strong", { children: cmsText("Shared clarity makes delivery work.", "DetailedExperiences:ApproachDepth:section engagement-formats") }), cmsText(" NekSoft and your team agree decision-makers, access, content and data ownership, review responsibilities, third-party dependencies, and any change in scope before the relevant work proceeds.", "DetailedExperiences:ApproachDepth:section engagement-formats")] })]
				})
			]
		})
	})] });
}
function AboutDepth() {
	return /* @__PURE__ */ jsx("section", {
		className: "section company-foundation-section",
		"data-content-section": "company-foundation",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container company-foundation-layout",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "reveal",
				children: [
					/* @__PURE__ */ jsx(Chapter, { children: cmsText("OUR FOUNDATION & DIRECTION", "DetailedExperiences:AboutDepth:section company-foundation-section") }),
					/* @__PURE__ */ jsxs("h2", { children: [
						cmsText("A clear foundation.", "DetailedExperiences:AboutDepth:section company-foundation-section"),
						/* @__PURE__ */ jsx("br", {}),
						cmsText("A connected direction.", "DetailedExperiences:AboutDepth:section company-foundation-section")
					] }),
					/* @__PURE__ */ jsx("p", { children: cmsText("Founded in 2021, NekSoft Consultancy Services brings software and digital capabilities together through a team spanning business, design, engineering, and operations.", "DetailedExperiences:AboutDepth:section company-foundation-section") }),
					/* @__PURE__ */ jsxs("div", {
						className: "company-foundation-record",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "mono",
								children: cmsText("NETHERLANDS HEADQUARTERS", "DetailedExperiences:AboutDepth:section company-foundation-section")
							}),
							/* @__PURE__ */ jsx("strong", { children: cmsText("NEKSOFT CONSULTANCY SERVICES B.V", "DetailedExperiences:AboutDepth:section company-foundation-section") }),
							/* @__PURE__ */ jsx("span", { children: cmsText("Almere, Netherlands", "DetailedExperiences:AboutDepth:section company-foundation-section") })
						]
					}),
					/* @__PURE__ */ jsxs(Link, {
						className: "explore-link",
						to: cmsLink("/about#our-people"),
						children: [cmsText("Meet the team ", "DetailedExperiences:AboutDepth:section company-foundation-section"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 16 })]
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "company-direction reveal",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "mono",
						children: cmsText("THE CONNECTED PERSPECTIVE", "DetailedExperiences:AboutDepth:section company-foundation-section")
					}),
					/* @__PURE__ */ jsxs("h3", { children: [
						cmsText("Business understanding.", "DetailedExperiences:AboutDepth:section company-foundation-section"),
						/* @__PURE__ */ jsx("br", {}),
						cmsText("Engineering with purpose.", "DetailedExperiences:AboutDepth:section company-foundation-section")
					] }),
					/* @__PURE__ */ jsx("p", { children: cmsText("The current focus connects IoT, artificial intelligence, and automation with the wider software capability. The starting point remains a practical question: what should this technology make easier to understand or operate?", "DetailedExperiences:AboutDepth:section company-foundation-section") }),
					/* @__PURE__ */ jsx("ol", { children: cmsText([
						["Understand", "The business requirement and the people involved."],
						["Shape", "The experience, architecture, and delivery scope."],
						["Connect", "The software, devices, data, and operational workflow."],
						["Improve", "The system through agreed feedback and support."]
					].map(([label, text], i) => /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsxs("span", {
						className: "mono",
						children: [cmsText("0", "DetailedExperiences:AboutDepth:section company-foundation-section"), cmsText(i + 1, "DetailedExperiences:AboutDepth:section company-foundation-section")]
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: cmsText(label, "DetailedExperiences:AboutDepth:section company-foundation-section") }), /* @__PURE__ */ jsx("p", { children: cmsText(text, "DetailedExperiences:AboutDepth:section company-foundation-section") })] })] }, label)), "DetailedExperiences:AboutDepth:section company-foundation-section") })
				]
			})]
		})
	});
}
function IndustryDepthSection() {
	return /* @__PURE__ */ jsx("section", {
		className: "section industry-pilot-section dark",
		"data-content-section": "industry-pilot",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container industry-pilot-layout",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "reveal",
				children: [
					/* @__PURE__ */ jsx(Chapter, { children: cmsText("START WITH A REPRESENTATIVE PILOT", "DetailedExperiences:IndustryDepthSection:section industry-pilot-section dark") }),
					/* @__PURE__ */ jsxs("h2", { children: [
						cmsText("Real conditions.", "DetailedExperiences:IndustryDepthSection:section industry-pilot-section dark"),
						/* @__PURE__ */ jsx("br", {}),
						cmsText("A useful first test.", "DetailedExperiences:IndustryDepthSection:section industry-pilot-section dark")
					] }),
					/* @__PURE__ */ jsx("p", { children: cmsText("A connected solution needs to fit the environment it serves. A pilot should represent the devices, people, data, and exceptions the wider operation will face.", "DetailedExperiences:IndustryDepthSection:section industry-pilot-section dark") }),
					/* @__PURE__ */ jsxs(Link, {
						className: "button",
						to: cmsLink("/contact?service=Industry%20pilot%20discussion"),
						children: [cmsText("Discuss your operation ", "DetailedExperiences:IndustryDepthSection:section industry-pilot-section dark"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 16 })]
					})
				]
			}), /* @__PURE__ */ jsx("dl", {
				className: "industry-pilot-checks",
				children: cmsText([
					["Operating environment", "Sites, equipment, network access, installation constraints, and the interfaces available."],
					["Useful information", "The signals or records needed, their quality and freshness, and who is allowed to use them."],
					["A decision that matters", "The alert, action, approval, or review that should follow the information."],
					["A meaningful review", "Acceptance criteria, responsibilities, and the evidence needed before expanding the solution."]
				].map(([title, text], i) => /* @__PURE__ */ jsxs("div", {
					className: "reveal",
					children: [/* @__PURE__ */ jsxs("dt", { children: [/* @__PURE__ */ jsxs("span", {
						className: "mono",
						children: [cmsText("0", "DetailedExperiences:IndustryDepthSection:section industry-pilot-section dark"), cmsText(i + 1, "DetailedExperiences:IndustryDepthSection:section industry-pilot-section dark")]
					}), cmsText(title, "DetailedExperiences:IndustryDepthSection:section industry-pilot-section dark")] }), /* @__PURE__ */ jsx("dd", { children: cmsText(text, "DetailedExperiences:IndustryDepthSection:section industry-pilot-section dark") })]
				}, title)), "DetailedExperiences:IndustryDepthSection:section industry-pilot-section dark")
			})]
		})
	});
}
function ProjectsDepth() {
	return /* @__PURE__ */ jsx("section", {
		className: "section portfolio-reading-section",
		"data-content-section": "portfolio-context",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container portfolio-reading-layout",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "reveal",
				children: [
					/* @__PURE__ */ jsx(Chapter, { children: cmsText("LOOK BEYOND THE FIRST SCREEN", "DetailedExperiences:ProjectsDepth:section portfolio-reading-section") }),
					/* @__PURE__ */ jsxs("h2", { children: [
						cmsText("A website is", "DetailedExperiences:ProjectsDepth:section portfolio-reading-section"),
						/* @__PURE__ */ jsx("br", {}),
						cmsText("a connected experience.", "DetailedExperiences:ProjectsDepth:section portfolio-reading-section")
					] }),
					/* @__PURE__ */ jsx("p", { children: cmsText("Use the collection to explore how different businesses present information and guide a visitor. Desktop and mobile snapshots provide a visual reference; the live link opens the current website.", "DetailedExperiences:ProjectsDepth:section portfolio-reading-section") }),
					/* @__PURE__ */ jsxs(Link, {
						className: "explore-link",
						to: cmsLink("/website-solutions"),
						children: [cmsText("Explore website solutions ", "DetailedExperiences:ProjectsDepth:section portfolio-reading-section"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })]
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "portfolio-reading-notes",
				children: cmsText([
					["Brand & navigation", "Look at how the visual identity, page hierarchy, and navigation help explain the business."],
					["Content & discovery", "Notice how services, products, destinations, menus, or other information are organized for the audience."],
					["A clear next action", "Consider how the experience leads toward an enquiry, registration, account, order, or another relevant action."],
					["Your own requirements", "A reference can start the conversation. Your audience, content, integrations, and brand should shape the final solution."]
				].map(([title, text], i) => /* @__PURE__ */ jsxs("article", {
					className: "reveal",
					children: [/* @__PURE__ */ jsxs("span", {
						className: "mono",
						children: [cmsText("0", "DetailedExperiences:ProjectsDepth:section portfolio-reading-section"), cmsText(i + 1, "DetailedExperiences:ProjectsDepth:section portfolio-reading-section")]
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: cmsText(title, "DetailedExperiences:ProjectsDepth:section portfolio-reading-section") }), /* @__PURE__ */ jsx("p", { children: cmsText(text, "DetailedExperiences:ProjectsDepth:section portfolio-reading-section") })] })]
				}, title)), "DetailedExperiences:ProjectsDepth:section portfolio-reading-section")
			})]
		})
	});
}
function ContactDepth() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("section", {
		className: "section enquiry-guide-section",
		"data-content-section": "enquiry-guide",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container enquiry-guide-layout",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "reveal",
				children: [
					/* @__PURE__ */ jsx(Chapter, { children: cmsText("MAKE THE FIRST CONVERSATION USEFUL", "DetailedExperiences:ContactDepth:section enquiry-guide-section") }),
					/* @__PURE__ */ jsxs("h2", { children: [
						cmsText("Bring the challenge.", "DetailedExperiences:ContactDepth:section enquiry-guide-section"),
						/* @__PURE__ */ jsx("br", {}),
						cmsText("Start with the context.", "DetailedExperiences:ContactDepth:section enquiry-guide-section")
					] }),
					/* @__PURE__ */ jsx("p", { children: cmsText("An early discussion does not need a finished specification. A few practical details help the team understand the requirement and the most useful next step.", "DetailedExperiences:ContactDepth:section enquiry-guide-section") }),
					/* @__PURE__ */ jsxs("a", {
						className: "explore-link",
						href: cmsLink("mailto:info@neksoftconsultancy.com"),
						children: [cmsText("Email the team directly ", "DetailedExperiences:ContactDepth:section enquiry-guide-section"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 16 })]
					})
				]
			}), /* @__PURE__ */ jsx("dl", {
				className: "enquiry-context-list",
				children: cmsText([
					["The problem", "What happens today, who experiences the difficulty, and what should work better?"],
					["The environment", "Which devices, applications, websites, business platforms, or data sources are involved?"],
					["The intended outcome", "What would a useful first version or a successful pilot allow the team to do?"],
					["The delivery context", "Are there existing deadlines, a budget range, decision-makers, or dependencies to consider?"]
				].map(([title, text], i) => /* @__PURE__ */ jsxs("div", {
					className: "reveal",
					children: [/* @__PURE__ */ jsxs("dt", { children: [/* @__PURE__ */ jsxs("span", {
						className: "mono",
						children: [cmsText("0", "DetailedExperiences:ContactDepth:section enquiry-guide-section"), cmsText(i + 1, "DetailedExperiences:ContactDepth:section enquiry-guide-section")]
					}), cmsText(title, "DetailedExperiences:ContactDepth:section enquiry-guide-section")] }), /* @__PURE__ */ jsx("dd", { children: cmsText(text, "DetailedExperiences:ContactDepth:section enquiry-guide-section") })]
				}, title)), "DetailedExperiences:ContactDepth:section enquiry-guide-section")
			})]
		})
	}), /* @__PURE__ */ jsx("section", {
		className: "section enquiry-next-section",
		"data-content-section": "enquiry-next",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "section-heading reveal",
					children: [/* @__PURE__ */ jsx(Chapter, { children: cmsText("AFTER YOU SEND THE ENQUIRY", "DetailedExperiences:ContactDepth:section enquiry-next-section") }), /* @__PURE__ */ jsxs("h2", { children: [
						cmsText("A clear route", "DetailedExperiences:ContactDepth:section enquiry-next-section"),
						/* @__PURE__ */ jsx("br", {}),
						cmsText("to the next decision.", "DetailedExperiences:ContactDepth:section enquiry-next-section")
					] })]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "enquiry-next-steps",
					children: cmsText([
						["Review the context", "The enquiry gives the team a starting view of the challenge, users, and systems involved."],
						["Clarify the requirement", "The discussion can identify missing information, relevant constraints, and the appropriate capability."],
						["Agree the next step", "The next step may be a scoped assessment, proposal, pilot, or a further technical discussion."]
					].map(([title, text], i) => /* @__PURE__ */ jsxs("article", {
						className: "reveal",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "mono",
								children: [cmsText("0", "DetailedExperiences:ContactDepth:section enquiry-next-section"), cmsText(i + 1, "DetailedExperiences:ContactDepth:section enquiry-next-section")]
							}),
							/* @__PURE__ */ jsx("h3", { children: cmsText(title, "DetailedExperiences:ContactDepth:section enquiry-next-section") }),
							/* @__PURE__ */ jsx("p", { children: cmsText(text, "DetailedExperiences:ContactDepth:section enquiry-next-section") })
						]
					}, title)), "DetailedExperiences:ContactDepth:section enquiry-next-section")
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "enquiry-submission-note",
					children: [/* @__PURE__ */ jsx(Check, { size: 16 }), cmsText("The form prepares an email draft. Your enquiry reaches the team after you send that email.", "DetailedExperiences:ContactDepth:section enquiry-next-section")]
				})
			]
		})
	})] });
}
function PageDetailContent({ page }) {
	const path = page === "home" ? "/" : "/" + page;
	const content = page === "home" ? /* @__PURE__ */ jsx(HomeDepth, {}) : page === "solutions" ? /* @__PURE__ */ jsx(SolutionStartingPoint, {}) : page === "industries" ? /* @__PURE__ */ jsx(IndustryDepthSection, {}) : page === "approach" ? /* @__PURE__ */ jsx(ApproachDepth, {}) : page === "about" ? /* @__PURE__ */ jsx(AboutDepth, {}) : page === "projects" ? /* @__PURE__ */ jsx(ProjectsDepth, {}) : page === "contact" ? /* @__PURE__ */ jsx(ContactDepth, {}) : null;
	return /* @__PURE__ */ jsxs("div", {
		className: `page-content-depth depth-for-${page}`,
		"data-page-details": page,
		children: [cmsText(content, "DetailedExperiences:PageDetailContent"), cmsText(pageFAQs[path] && /* @__PURE__ */ jsx(DetailedFAQ, {
			items: pageFAQs[path],
			id: `${page}-questions`,
			title: cmsText(page === "contact" ? "Before you get in touch." : page === "projects" ? "About the project collection." : page === "about" ? "More about NekSoft." : page === "approach" ? "Clarity before the first step." : "From interest to a clear next step.", "DetailedExperiences:PageDetailContent")
		}), "DetailedExperiences:PageDetailContent")]
	});
}
// src/ServicePages.tsx
function ServiceArt({ kind }) {
	return /* @__PURE__ */ jsxs("div", {
		className: `service-art service-art-${kind}`,
		role: "img",
		"aria-label": cmsText(`Illustrative ${kind === "people" ? "skills and recruitment" : kind} concept interface`, "ServicePages:ServiceArt"),
		children: [
			/* @__PURE__ */ jsx("div", { className: "service-art-grid" }),
			/* @__PURE__ */ jsxs("span", {
				className: "service-art-coordinate mono",
				children: [
					cmsText("NEK / ", "ServicePages:ServiceArt"),
					cmsText(kind.toUpperCase(), "ServicePages:ServiceArt"),
					cmsText(" EXPERIENCE", "ServicePages:ServiceArt")
				]
			}),
			cmsText(kind === "application" ? /* @__PURE__ */ jsx(AppVisual, {}) : kind === "zoho" ? /* @__PURE__ */ jsxs("div", {
				className: "service-zoho-system",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "service-zoho-badge",
						children: [/* @__PURE__ */ jsx("span", {
							className: "mono",
							children: cmsText("CONNECTED BUSINESS PLATFORM", "ServicePages:ServiceArt")
						}), /* @__PURE__ */ jsx("img", {
							src: cmsAsset("/images/partners/zoho-authorized-partner-hd-medium.webp"),
							width: "1102",
							height: "357",
							alt: cmsText("", "ServicePages:ServiceArt"),
							decoding: "async"
						})]
					}),
					/* @__PURE__ */ jsx("div", { className: "service-zoho-connections" }),
					/* @__PURE__ */ jsx("div", {
						className: "service-zoho-nodes",
						children: cmsText([
							["Customer", "CRM"],
							["Finance", "WORKFLOWS"],
							["Operations", "INTEGRATIONS"]
						].map(([label, sub]) => /* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx(Layers, { size: 21 }),
							/* @__PURE__ */ jsx("strong", { children: cmsText(label, "ServicePages:ServiceArt") }),
							/* @__PURE__ */ jsx("small", {
								className: "mono",
								children: cmsText(sub, "ServicePages:ServiceArt")
							})
						] }, label)), "ServicePages:ServiceArt")
					})
				]
			}) : kind === "website" ? /* @__PURE__ */ jsxs("div", {
				className: "service-browser",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "service-browser-bar",
						children: [
							/* @__PURE__ */ jsxs("span", { children: [
								/* @__PURE__ */ jsx("i", {}),
								/* @__PURE__ */ jsx("i", {}),
								/* @__PURE__ */ jsx("i", {})
							] }),
							/* @__PURE__ */ jsx("small", { children: cmsText("Business website / concept", "ServicePages:ServiceArt") }),
							/* @__PURE__ */ jsx(LockKeyhole, { size: 10 })
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "service-web-nav",
						children: [
							/* @__PURE__ */ jsxs("strong", { children: [cmsText("YOUR BRAND", "ServicePages:ServiceArt"), /* @__PURE__ */ jsx("span", { children: cmsText("®", "ServicePages:ServiceArt") })] }),
							/* @__PURE__ */ jsx("i", {}),
							/* @__PURE__ */ jsx("i", {}),
							/* @__PURE__ */ jsx("span", { children: cmsText("Let’s talk ↗", "ServicePages:ServiceArt") })
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "service-web-content",
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("span", {
								className: "mono",
								children: cmsText("A CLEARER POINT OF VIEW", "ServicePages:ServiceArt")
							}),
							/* @__PURE__ */ jsxs("strong", { children: [
								cmsText("Make your", "ServicePages:ServiceArt"),
								/* @__PURE__ */ jsx("br", {}),
								cmsText("next move", "ServicePages:ServiceArt"),
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("em", { children: cmsText("count.", "ServicePages:ServiceArt") })
							] }),
							/* @__PURE__ */ jsxs("span", {
								className: "service-web-cta",
								children: [cmsText("Explore the possibilities ", "ServicePages:ServiceArt"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 12 })]
							})
						] }), /* @__PURE__ */ jsxs("div", {
							className: "service-web-sculpture",
							children: [
								/* @__PURE__ */ jsx("i", {}),
								/* @__PURE__ */ jsx("i", {}),
								/* @__PURE__ */ jsx("i", {}),
								/* @__PURE__ */ jsx("i", {}),
								/* @__PURE__ */ jsx("i", {})
							]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "service-web-bottom",
						children: [/* @__PURE__ */ jsx("span", { children: cmsText("Strategy → Experience → Action", "ServicePages:ServiceArt") }), /* @__PURE__ */ jsx(Globe, { size: 14 })]
					})
				]
			}) : kind === "mobile" ? /* @__PURE__ */ jsxs("div", {
				className: "service-mobile-system",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "service-phone",
					children: [
						/* @__PURE__ */ jsx("div", { className: "service-phone-camera" }),
						/* @__PURE__ */ jsxs("div", {
							className: "service-phone-heading",
							children: [/* @__PURE__ */ jsx("span", {
								className: "mono",
								children: cmsText("FIELD WORKSPACE", "ServicePages:ServiceArt")
							}), /* @__PURE__ */ jsx(LayoutGrid, { size: 15 })]
						}),
						/* @__PURE__ */ jsxs("strong", { children: [
							cmsText("Ready for", "ServicePages:ServiceArt"),
							/* @__PURE__ */ jsx("br", {}),
							cmsText("the next task.", "ServicePages:ServiceArt")
						] }),
						/* @__PURE__ */ jsx("div", {
							className: "service-mobile-date",
							children: cmsText("YOUR CONNECTED WORKDAY", "ServicePages:ServiceArt")
						}),
						cmsText([
							"Review assigned work",
							"Record an update",
							"Connect with the team"
						].map((text, i) => /* @__PURE__ */ jsxs("div", {
							className: "service-phone-task",
							children: [
								/* @__PURE__ */ jsxs("span", { children: [cmsText("0", "ServicePages:ServiceArt"), cmsText(i + 1, "ServicePages:ServiceArt")] }),
								/* @__PURE__ */ jsx("strong", { children: cmsText(text, "ServicePages:ServiceArt") }),
								/* @__PURE__ */ jsx(ArrowUpRight, { size: 13 })
							]
						}, text)), "ServicePages:ServiceArt"),
						/* @__PURE__ */ jsxs("div", {
							className: "service-phone-bottom",
							children: [
								/* @__PURE__ */ jsx(LayoutGrid, { size: 15 }),
								/* @__PURE__ */ jsx(Radio, { size: 15 }),
								/* @__PURE__ */ jsx(Users, { size: 15 })
							]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "service-mobile-event",
					children: [/* @__PURE__ */ jsx(CheckCheck, { size: 21 }), /* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("strong", { children: cmsText("Shared with the team", "ServicePages:ServiceArt") }), /* @__PURE__ */ jsx("small", { children: cmsText("One connected workflow", "ServicePages:ServiceArt") })] })]
				})]
			}) : kind === "design" ? /* @__PURE__ */ jsxs("div", {
				className: "service-design-system",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "design-type",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "mono",
								children: cmsText("01 / TYPOGRAPHY", "ServicePages:ServiceArt")
							}),
							/* @__PURE__ */ jsxs("strong", { children: [cmsText("Aa", "ServicePages:ServiceArt"), /* @__PURE__ */ jsx("span", { children: cmsText(".", "ServicePages:ServiceArt") })] }),
							/* @__PURE__ */ jsx("small", { children: cmsText("Clear. Considered. Consistent.", "ServicePages:ServiceArt") })
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "design-colors",
						children: [/* @__PURE__ */ jsx("span", {
							className: "mono",
							children: cmsText("02 / VISUAL LANGUAGE", "ServicePages:ServiceArt")
						}), /* @__PURE__ */ jsx("div", { children: cmsText([
							"#356BFF",
							"#0B1220",
							"#F7F8FA",
							"#7CE2BE"
						].map((c) => /* @__PURE__ */ jsx("i", { style: { background: c } }, c)), "ServicePages:ServiceArt") })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "design-components",
						children: [/* @__PURE__ */ jsx("span", {
							className: "mono",
							children: cmsText("03 / INTERACTION SYSTEM", "ServicePages:ServiceArt")
						}), /* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsxs("span", { children: [cmsText("Continue ", "ServicePages:ServiceArt"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 14 })] }),
							/* @__PURE__ */ jsx("i", {}),
							/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx(Check, { size: 14 }), cmsText(" Clear next step", "ServicePages:ServiceArt")] })
						] })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "design-cursor",
						children: [/* @__PURE__ */ jsx("svg", {
							viewBox: "0 0 18 22",
							children: /* @__PURE__ */ jsx("path", {
								d: "M1 1L16 13L9 14L6 20Z",
								fill: "#7ce2be",
								stroke: "#111c30"
							})
						}), /* @__PURE__ */ jsx("span", { children: cmsText("Designed with purpose", "ServicePages:ServiceArt") })]
					})
				]
			}) : kind === "saas" ? /* @__PURE__ */ jsxs("div", {
				className: "service-saas-system",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "saas-cloud",
						children: [/* @__PURE__ */ jsx(Cloud, {
							size: 40,
							strokeWidth: 1
						}), /* @__PURE__ */ jsx("span", {
							className: "mono",
							children: cmsText("ONE CONNECTED PLATFORM", "ServicePages:ServiceArt")
						})]
					}),
					/* @__PURE__ */ jsx("div", { className: "saas-connector" }),
					/* @__PURE__ */ jsx("div", {
						className: "saas-tenants",
						children: cmsText([
							"Workspace A",
							"Workspace B",
							"Workspace C"
						].map((w, i) => /* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("span", {
								className: "saas-workspace-icon",
								children: /* @__PURE__ */ jsx(LayoutGrid, { size: 21 })
							}),
							/* @__PURE__ */ jsx("strong", { children: cmsText(w, "ServicePages:ServiceArt") }),
							/* @__PURE__ */ jsxs("span", {
								className: "saas-rows",
								children: [
									/* @__PURE__ */ jsx("i", {}),
									/* @__PURE__ */ jsx("i", {}),
									/* @__PURE__ */ jsx("i", {})
								]
							}),
							/* @__PURE__ */ jsxs("small", { children: [/* @__PURE__ */ jsx(LockKeyhole, { size: 10 }), cmsText(" Role-based access", "ServicePages:ServiceArt")] }),
							/* @__PURE__ */ jsxs("span", {
								className: "mono",
								children: [cmsText("ACCOUNT / 0", "ServicePages:ServiceArt"), cmsText(i + 1, "ServicePages:ServiceArt")]
							})
						] }, w)), "ServicePages:ServiceArt")
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "saas-foundation",
						children: [
							/* @__PURE__ */ jsx(ShieldCheck, { size: 16 }),
							cmsText("Defined boundaries", "ServicePages:ServiceArt"),
							/* @__PURE__ */ jsx("span", {}),
							/* @__PURE__ */ jsx(Code2, { size: 16 }),
							cmsText("Connected APIs", "ServicePages:ServiceArt")
						]
					})
				]
			}) : kind === "marketing" ? /* @__PURE__ */ jsxs("div", {
				className: "service-marketing-system",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "marketing-header",
						children: [/* @__PURE__ */ jsx("span", {
							className: "mono",
							children: cmsText("CONNECTED CAMPAIGN VIEW", "ServicePages:ServiceArt")
						}), /* @__PURE__ */ jsx(Globe, { size: 18 })]
					}),
					/* @__PURE__ */ jsxs("strong", { children: [
						cmsText("A story.", "ServicePages:ServiceArt"),
						/* @__PURE__ */ jsx("br", {}),
						cmsText("With a clear next step.", "ServicePages:ServiceArt")
					] }),
					/* @__PURE__ */ jsx("div", {
						className: "marketing-journey",
						children: cmsText([
							"Discover",
							"Understand",
							"Enquire"
						].map((s, i) => /* @__PURE__ */ jsxs("span", { children: [
							/* @__PURE__ */ jsxs("i", { children: [cmsText("0", "ServicePages:ServiceArt"), cmsText(i + 1, "ServicePages:ServiceArt")] }),
							cmsText(s, "ServicePages:ServiceArt"),
							cmsText(i < 2 && /* @__PURE__ */ jsx(ArrowRight, { size: 12 }), "ServicePages:ServiceArt")
						] }, s)), "ServicePages:ServiceArt")
					}),
					/* @__PURE__ */ jsx("div", {
						className: "marketing-chart",
						children: /* @__PURE__ */ jsxs("svg", {
							viewBox: "0 0 400 85",
							children: [
								/* @__PURE__ */ jsx("path", {
									d: "M0 68H400M0 38H400M0 8H400",
									stroke: "#ffffff0c"
								}),
								/* @__PURE__ */ jsx("path", {
									d: "M0 73C40 72 35 58 76 61S130 30 175 42S236 16 278 26S345 7 400 9",
									fill: "none",
									stroke: "#648bff",
									strokeWidth: "2"
								}),
								/* @__PURE__ */ jsx("path", {
									d: "M0 73C40 72 35 58 76 61S130 30 175 42S236 16 278 26S345 7 400 9V85H0Z",
									fill: "#356bff14"
								})
							]
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "marketing-channels",
						children: [
							/* @__PURE__ */ jsx("span", { children: cmsText("Search", "ServicePages:ServiceArt") }),
							/* @__PURE__ */ jsx("span", { children: cmsText("Content", "ServicePages:ServiceArt") }),
							/* @__PURE__ */ jsx("span", { children: cmsText("Campaigns", "ServicePages:ServiceArt") })
						]
					})
				]
			}) : /* @__PURE__ */ jsxs("div", {
				className: "service-people-system",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "mono",
						children: cmsText("ROLE & CAPABILITY FRAMEWORK", "ServicePages:ServiceArt")
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "people-role",
						children: [/* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(Users, {
							size: 31,
							strokeWidth: 1
						}) }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: cmsText("Start with the work.", "ServicePages:ServiceArt") }), /* @__PURE__ */ jsx("small", { children: cmsText("Build clarity around the role.", "ServicePages:ServiceArt") })] })]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "people-skills",
						children: cmsText([
							"Responsibilities",
							"Relevant skills",
							"Working context"
						].map((s, i) => /* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsxs("span", {
								className: "mono",
								children: [cmsText("0", "ServicePages:ServiceArt"), cmsText(i + 1, "ServicePages:ServiceArt")]
							}),
							/* @__PURE__ */ jsx("strong", { children: cmsText(s, "ServicePages:ServiceArt") }),
							/* @__PURE__ */ jsx(Check, { size: 15 })
						] }, s)), "ServicePages:ServiceArt")
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "people-flow",
						children: [
							/* @__PURE__ */ jsx("span", { children: cmsText("Clarify", "ServicePages:ServiceArt") }),
							/* @__PURE__ */ jsx(ArrowRight, { size: 13 }),
							/* @__PURE__ */ jsx("span", { children: cmsText("Structure", "ServicePages:ServiceArt") }),
							/* @__PURE__ */ jsx(ArrowRight, { size: 13 }),
							/* @__PURE__ */ jsx("span", { children: cmsText("Coordinate", "ServicePages:ServiceArt") })
						]
					})
				]
			}), "ServicePages:ServiceArt"),
			/* @__PURE__ */ jsx("span", {
				className: "service-art-note mono",
				children: cmsText("CONCEPT INTERFACE · ILLUSTRATIVE", "ServicePages:ServiceArt")
			})
		]
	});
}
function ServiceDirectory() {
	return /* @__PURE__ */ jsx("section", {
		className: "section solutions-directory",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "section-heading reveal",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "eyebrow",
					children: [/* @__PURE__ */ jsx("span", { className: "label-line" }), cmsText("EXPLORE OUR SERVICES", "ServicePages:ServiceDirectory:section solutions-directory")]
				}), /* @__PURE__ */ jsxs("div", {
					className: "heading-row",
					children: [/* @__PURE__ */ jsxs("h2", { children: [
						cmsText("Specialist capabilities.", "ServicePages:ServiceDirectory:section solutions-directory"),
						/* @__PURE__ */ jsx("br", {}),
						cmsText("One connected team.", "ServicePages:ServiceDirectory:section solutions-directory")
					] }), /* @__PURE__ */ jsx("p", { children: cmsText("Explore the services behind a connected business, from consultation and design to software and growth.", "ServicePages:ServiceDirectory:section solutions-directory") })]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "service-directory-grid",
				children: cmsText(serviceGroups.map((group) => /* @__PURE__ */ jsxs("div", {
					className: "service-directory-group reveal",
					children: [/* @__PURE__ */ jsx("h3", { children: cmsText(group.name, "ServicePages:ServiceDirectory:section solutions-directory") }), cmsText(group.items.map((item) => /* @__PURE__ */ jsxs(Link, {
						to: cmsLink("/" + item.slug),
						children: [/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("strong", { children: cmsText(item.label, "ServicePages:ServiceDirectory:section solutions-directory") }), /* @__PURE__ */ jsx("small", { children: cmsText(item.description, "ServicePages:ServiceDirectory:section solutions-directory") })] }), /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })]
					}, item.slug)), "ServicePages:ServiceDirectory:section solutions-directory")]
				}, group.name)), "ServicePages:ServiceDirectory:section solutions-directory")
			})]
		})
	});
}
function ServicePage({ service: s }) {
	const [selected, setSelected] = useState(0);
	const tabs = useRef([]);
	const capability = s.capabilities[selected];
	const related = serviceNavigation.filter((item) => item.slug !== s.slug).slice(0, 3);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: `service-page-hero dark service-hero-${s.kind}`,
			children: [
				/* @__PURE__ */ jsx("div", { className: "hero-grid" }),
				/* @__PURE__ */ jsxs("div", {
					className: "container service-hero-layout",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "service-hero-copy",
						children: [
							/* @__PURE__ */ jsxs(Link, {
								className: "service-breadcrumb mono",
								to: cmsLink("/solutions"),
								children: [
									cmsText("SOLUTIONS ", "ServicePages:ServicePage:section"),
									/* @__PURE__ */ jsx(ArrowRight, { size: 11 }),
									cmsText(s.name.toUpperCase(), "ServicePages:ServicePage:section")
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "eyebrow on-dark",
								children: [/* @__PURE__ */ jsx("span", { className: "label-line" }), cmsText(s.category, "ServicePages:ServicePage:section")]
							}),
							/* @__PURE__ */ jsxs("h1", {
								className: "page-title",
								children: [
									cmsText(s.hero[0], "ServicePages:ServicePage:section"),
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsx("span", {
										className: "blue-text",
										children: cmsText(s.hero[1], "ServicePages:ServicePage:section")
									})
								]
							}),
							/* @__PURE__ */ jsx("p", { children: cmsText(s.intro, "ServicePages:ServicePage:section") }),
							/* @__PURE__ */ jsxs(Link, {
								className: "button magnetic",
								to: cmsLink(`/contact?service=${encodeURIComponent(s.name)}`),
								children: [cmsText("Discuss your project ", "ServicePages:ServicePage:section"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })]
							})
						]
					}), /* @__PURE__ */ jsx(ServiceArt, { kind: s.kind })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "container service-hero-foot",
					children: [/* @__PURE__ */ jsx("span", {
						className: "mono",
						children: cmsText("STRATEGY → EXPERIENCE → ENGINEERING", "ServicePages:ServicePage:section")
					}), /* @__PURE__ */ jsxs("a", {
						href: cmsLink("#service-capabilities"),
						className: "text-link",
						children: [cmsText("Explore the capability ", "ServicePages:ServicePage:section"), /* @__PURE__ */ jsx(ArrowRight, { size: 14 })]
					})]
				})
			]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section service-perspective",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "reveal",
					children: [/* @__PURE__ */ jsxs("span", {
						className: "eyebrow",
						children: [/* @__PURE__ */ jsx("span", { className: "label-line" }), cmsText("THE STARTING POINT", "ServicePages:ServicePage:section service-perspective")]
					}), /* @__PURE__ */ jsx("h2", { children: cmsText(s.challenge, "ServicePages:ServicePage:section service-perspective") })]
				}), /* @__PURE__ */ jsx("p", {
					className: "reveal",
					children: cmsText(s.perspective, "ServicePages:ServicePage:section service-perspective")
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section service-capabilities",
			id: "service-capabilities",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "section-heading reveal",
					children: [/* @__PURE__ */ jsxs("span", {
						className: "eyebrow",
						children: [/* @__PURE__ */ jsx("span", { className: "label-line" }), cmsText("HOW WE CAN HELP", "ServicePages:ServicePage:service-capabilities")]
					}), /* @__PURE__ */ jsxs("h2", { children: [
						cmsText("A considered approach.", "ServicePages:ServicePage:service-capabilities"),
						/* @__PURE__ */ jsx("br", {}),
						cmsText("A practical application.", "ServicePages:ServicePage:service-capabilities")
					] })]
				}), /* @__PURE__ */ jsxs("div", {
					className: "capability-explorer reveal",
					children: [/* @__PURE__ */ jsx("div", {
						className: "capability-tabs",
						role: "tablist",
						"aria-label": cmsText(`${s.name} capabilities`, "ServicePages:ServicePage:service-capabilities"),
						"aria-orientation": "vertical",
						children: cmsText(s.capabilities.map((c, i) => /* @__PURE__ */ jsxs("button", {
							ref: (el) => {
								tabs.current[i] = el;
							},
							type: "button",
							role: "tab",
							id: `${s.slug}-tab-${i}`,
							"aria-selected": selected === i,
							"aria-controls": `${s.slug}-panel`,
							tabIndex: selected === i ? 0 : -1,
							onClick: () => setSelected(i),
							onKeyDown: (e) => {
								if (![
									"ArrowDown",
									"ArrowUp",
									"ArrowLeft",
									"ArrowRight",
									"Home",
									"End"
								].includes(e.key)) return;
								e.preventDefault();
								const next = e.key === "Home" ? 0 : e.key === "End" ? s.capabilities.length - 1 : (selected + (["ArrowDown", "ArrowRight"].includes(e.key) ? 1 : -1) + s.capabilities.length) % s.capabilities.length;
								setSelected(next);
								tabs.current[next]?.focus();
							},
							children: [
								/* @__PURE__ */ jsxs("span", {
									className: "mono",
									children: [cmsText("0", "ServicePages:ServicePage:service-capabilities"), cmsText(i + 1, "ServicePages:ServicePage:service-capabilities")]
								}),
								/* @__PURE__ */ jsx("strong", { children: cmsText(c.title, "ServicePages:ServicePage:service-capabilities") }),
								/* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })
							]
						}, c.title)), "ServicePages:ServicePage:service-capabilities")
					}), /* @__PURE__ */ jsx("div", {
						className: "capability-detail",
						id: `${s.slug}-panel`,
						role: "tabpanel",
						"aria-labelledby": `${s.slug}-tab-${selected}`,
						tabIndex: 0,
						children: /* @__PURE__ */ jsxs("div", {
							className: "capability-detail-inner",
							children: [
								/* @__PURE__ */ jsxs("span", {
									className: "mono",
									children: [
										cmsText("0", "ServicePages:ServicePage:service-capabilities"),
										cmsText(selected + 1, "ServicePages:ServicePage:service-capabilities"),
										cmsText(" / ", "ServicePages:ServicePage:service-capabilities"),
										cmsText(s.name.toUpperCase(), "ServicePages:ServicePage:service-capabilities")
									]
								}),
								/* @__PURE__ */ jsx("h3", { children: cmsText(capability.title, "ServicePages:ServicePage:service-capabilities") }),
								/* @__PURE__ */ jsx("p", { children: cmsText(capability.text, "ServicePages:ServicePage:service-capabilities") }),
								/* @__PURE__ */ jsxs("div", {
									className: "service-use-case",
									children: [/* @__PURE__ */ jsx("span", {
										className: "mono",
										children: cmsText("POTENTIAL APPLICATION", "ServicePages:ServicePage:service-capabilities")
									}), /* @__PURE__ */ jsx("p", { children: cmsText(capability.example, "ServicePages:ServicePage:service-capabilities") })]
								}),
								/* @__PURE__ */ jsx("span", {
									className: "service-scope-note",
									children: cmsText("Illustrative use case. Feasibility and scope are agreed during discovery.", "ServicePages:ServicePage:service-capabilities")
								})
							]
						}, selected)
					})]
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section service-delivery",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container service-delivery-grid",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "reveal",
					children: [
						/* @__PURE__ */ jsxs("span", {
							className: "eyebrow",
							children: [/* @__PURE__ */ jsx("span", { className: "label-line" }), cmsText("A CLEAR HANDOVER", "ServicePages:ServicePage:section service-delivery")]
						}),
						/* @__PURE__ */ jsxs("h2", { children: [
							cmsText("What we build.", "ServicePages:ServicePage:section service-delivery"),
							/* @__PURE__ */ jsx("br", {}),
							cmsText("What you receive.", "ServicePages:ServicePage:section service-delivery")
						] }),
						/* @__PURE__ */ jsx("ul", { children: cmsText(s.deliverables.map((d) => /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx(Check, { size: 17 }), cmsText(d, "ServicePages:ServicePage:section service-delivery")] }, d)), "ServicePages:ServicePage:section service-delivery") })
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "service-integration-note reveal",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "service-integration-icon",
							children: /* @__PURE__ */ jsx(Layers, {
								size: 32,
								strokeWidth: 1
							})
						}),
						/* @__PURE__ */ jsx("span", {
							className: "mono",
							children: cmsText("INTEGRATION & ENGAGEMENT", "ServicePages:ServicePage:section service-delivery")
						}),
						/* @__PURE__ */ jsxs("h3", { children: [
							cmsText("Designed to fit", "ServicePages:ServicePage:section service-delivery"),
							/* @__PURE__ */ jsx("br", {}),
							cmsText("the bigger picture.", "ServicePages:ServicePage:section service-delivery")
						] }),
						/* @__PURE__ */ jsx("p", { children: cmsText(s.integration, "ServicePages:ServicePage:section service-delivery") })
					]
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section service-process-section dark",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container",
				children: [
					/* @__PURE__ */ jsxs("span", {
						className: "eyebrow on-dark reveal",
						children: [/* @__PURE__ */ jsx("span", { className: "label-line" }), cmsText("FROM DISCUSSION TO DELIVERY", "ServicePages:ServicePage:section service-process-section dark")]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "heading-row reveal",
						children: [/* @__PURE__ */ jsx("h2", { children: cmsText("Progress with purpose.", "ServicePages:ServicePage:section service-process-section dark") }), /* @__PURE__ */ jsxs(Link, {
							to: cmsLink("/approach"),
							className: "explore-link",
							children: [cmsText("Our engineering approach ", "ServicePages:ServicePage:section service-process-section dark"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 16 })]
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "service-process",
						children: cmsText(s.steps.map(([title, text], i) => /* @__PURE__ */ jsxs("article", {
							className: "reveal",
							children: [
								/* @__PURE__ */ jsxs("span", {
									className: "mono",
									children: [cmsText("0", "ServicePages:ServicePage:section service-process-section dark"), cmsText(i + 1, "ServicePages:ServicePage:section service-process-section dark")]
								}),
								/* @__PURE__ */ jsx("h3", { children: cmsText(title, "ServicePages:ServicePage:section service-process-section dark") }),
								/* @__PURE__ */ jsx("p", { children: cmsText(text, "ServicePages:ServicePage:section service-process-section dark") })
							]
						}, title)), "ServicePages:ServicePage:section service-process-section dark")
					})
				]
			})
		}),
		/* @__PURE__ */ jsx(ServiceDetailExpansion, { slug: s.slug }),
		/* @__PURE__ */ jsx("section", {
			className: "section service-related",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container",
				children: [
					/* @__PURE__ */ jsxs("span", {
						className: "eyebrow",
						children: [/* @__PURE__ */ jsx("span", { className: "label-line" }), cmsText("CONNECTED CAPABILITIES", "ServicePages:ServicePage:section service-related")]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "heading-row",
						children: [/* @__PURE__ */ jsx("h2", { children: cmsText("Keep exploring.", "ServicePages:ServicePage:section service-related") }), /* @__PURE__ */ jsxs(Link, {
							className: "explore-link",
							to: cmsLink("/solutions"),
							children: [cmsText("All solutions ", "ServicePages:ServicePage:section service-related"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 16 })]
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "service-related-links",
						children: cmsText(related.map((item) => /* @__PURE__ */ jsxs(Link, {
							to: cmsLink("/" + item.slug),
							children: [/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("strong", { children: cmsText(item.label, "ServicePages:ServicePage:section service-related") }), /* @__PURE__ */ jsx("small", { children: cmsText(item.description, "ServicePages:ServicePage:section service-related") })] }), /* @__PURE__ */ jsx(ArrowUpRight, { size: 20 })]
						}, item.slug)), "ServicePages:ServicePage:section service-related")
					})
				]
			})
		})
	] });
}
// src/SoftwareShowcaseCard.tsx
function WorkspacePreview() {
	const chartId = `software-signal-${useId().replace(/:/g, "")}`;
	return /* @__PURE__ */ jsxs("div", {
		className: "software-preview-stage",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "software-workspace",
			role: "img",
			"aria-label": cmsText("Illustrative operations dashboard with connected devices, coordinated workflows, a signal trend and review events", "SoftwareShowcaseCard:WorkspacePreview"),
			children: [/* @__PURE__ */ jsxs("div", {
				className: "software-workspace-toolbar",
				children: [/* @__PURE__ */ jsxs("span", {
					className: "software-workspace-brand",
					children: [/* @__PURE__ */ jsx("span", {
						className: "software-brand-mark",
						children: cmsText("N", "SoftwareShowcaseCard:WorkspacePreview")
					}), /* @__PURE__ */ jsx("span", {
						className: "software-brand-name",
						children: cmsText("NEK / OPERATIONS", "SoftwareShowcaseCard:WorkspacePreview")
					})]
				}), /* @__PURE__ */ jsxs("span", {
					className: "software-demo-label",
					children: [/* @__PURE__ */ jsx("i", {}), cmsText("DEMO WORKSPACE", "SoftwareShowcaseCard:WorkspacePreview")]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "software-workspace-body",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "software-workspace-nav",
					"aria-hidden": "true",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "selected",
							children: /* @__PURE__ */ jsx(LayoutDashboard, { size: 16 })
						}),
						/* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(Workflow, { size: 16 }) }),
						/* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(Layers, { size: 16 }) }),
						/* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(SlidersHorizontal, { size: 16 }) }),
						/* @__PURE__ */ jsx("span", {
							className: "workspace-nav-bottom",
							children: cmsText("N", "SoftwareShowcaseCard:WorkspacePreview")
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "software-workspace-main",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "software-workspace-heading",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
								className: "software-interface-label",
								children: cmsText("YOUR BUSINESS. ONE CONNECTED VIEW.", "SoftwareShowcaseCard:WorkspacePreview")
							}), /* @__PURE__ */ jsx("h4", { children: cmsText("Operations workspace", "SoftwareShowcaseCard:WorkspacePreview") })] }), /* @__PURE__ */ jsxs("span", {
								className: "software-workspace-status",
								children: [/* @__PURE__ */ jsx(Check, { size: 11 }), cmsText("Connected", "SoftwareShowcaseCard:WorkspacePreview")]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "software-workspace-summary",
							children: [
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: cmsText("Devices", "SoftwareShowcaseCard:WorkspacePreview") }), /* @__PURE__ */ jsx("strong", { children: cmsText("Connected", "SoftwareShowcaseCard:WorkspacePreview") })] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: cmsText("Workflows", "SoftwareShowcaseCard:WorkspacePreview") }), /* @__PURE__ */ jsx("strong", { children: cmsText("Coordinated", "SoftwareShowcaseCard:WorkspacePreview") })] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: cmsText("Information", "SoftwareShowcaseCard:WorkspacePreview") }), /* @__PURE__ */ jsx("strong", { children: cmsText("Unified", "SoftwareShowcaseCard:WorkspacePreview") })] })
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "software-workspace-chart",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: cmsText("Operational signals", "SoftwareShowcaseCard:WorkspacePreview") }), /* @__PURE__ */ jsx("span", { children: cmsText("Illustrative trend", "SoftwareShowcaseCard:WorkspacePreview") })] }), /* @__PURE__ */ jsxs("svg", {
								viewBox: "0 0 400 92",
								"aria-hidden": "true",
								children: [
									/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
										id: chartId,
										x1: "0",
										y1: "0",
										x2: "0",
										y2: "1",
										children: [/* @__PURE__ */ jsx("stop", {
											stopColor: "#356bff",
											stopOpacity: ".16"
										}), /* @__PURE__ */ jsx("stop", {
											offset: "1",
											stopColor: "#356bff",
											stopOpacity: "0"
										})]
									}) }),
									/* @__PURE__ */ jsx("path", {
										className: "software-chart-grid",
										d: "M0 20H400M0 48H400M0 76H400"
									}),
									/* @__PURE__ */ jsx("path", {
										d: "M0 69C19 70 23 53 45 58S74 40 95 45S122 29 145 35S172 55 196 45S218 20 240 28S264 44 286 31S315 16 340 23S373 9 400 14V92H0Z",
										fill: `url(#${chartId})`
									}),
									/* @__PURE__ */ jsx("path", {
										className: "software-chart-line",
										d: "M0 69C19 70 23 53 45 58S74 40 95 45S122 29 145 35S172 55 196 45S218 20 240 28S264 44 286 31S315 16 340 23S373 9 400 14"
									}),
									/* @__PURE__ */ jsx("circle", {
										cx: "340",
										cy: "23",
										r: "4",
										fill: "#fff",
										stroke: "#356bff",
										strokeWidth: "2"
									})
								]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "software-workspace-events",
							children: [/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(Radio, { size: 13 }) }),
								/* @__PURE__ */ jsx("strong", { children: cmsText("Device signal captured", "SoftwareShowcaseCard:WorkspacePreview") }),
								/* @__PURE__ */ jsx("small", { children: cmsText("Input", "SoftwareShowcaseCard:WorkspacePreview") })
							] }), /* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(Workflow, { size: 13 }) }),
								/* @__PURE__ */ jsx("strong", { children: cmsText("Workflow ready for review", "SoftwareShowcaseCard:WorkspacePreview") }),
								/* @__PURE__ */ jsx("small", { children: cmsText("Review", "SoftwareShowcaseCard:WorkspacePreview") })
							] })]
						})
					]
				})]
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "software-preview-caption",
			children: [/* @__PURE__ */ jsx("span", {
				className: "mono",
				children: cmsText("ILLUSTRATIVE APPLICATION INTERFACE", "SoftwareShowcaseCard:WorkspacePreview")
			}), /* @__PURE__ */ jsx("span", { children: cmsText("Built around your operation.", "SoftwareShowcaseCard:WorkspacePreview") })]
		})]
	});
}
function SoftwareShowcaseCard() {
	return /* @__PURE__ */ jsxs(Link, {
		to: cmsLink("/custom-software"),
		className: "home-solution-tile software-showcase-card reveal",
		"aria-labelledby": "home-software-title",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "software-showcase-copy",
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "software-showcase-eyebrow mono",
					children: cmsText("04 / CUSTOM SOFTWARE & APPLICATIONS", "SoftwareShowcaseCard:SoftwareShowcaseCard")
				}),
				/* @__PURE__ */ jsxs("h3", {
					id: "home-software-title",
					children: [
						cmsText("Software built around", "SoftwareShowcaseCard:SoftwareShowcaseCard"),
						/* @__PURE__ */ jsx("br", {}),
						cmsText("your business.", "SoftwareShowcaseCard:SoftwareShowcaseCard")
					]
				}),
				/* @__PURE__ */ jsx("p", { children: cmsText("Purpose-built applications that bring your team, data, and everyday workflows into one considered experience.", "SoftwareShowcaseCard:SoftwareShowcaseCard") }),
				/* @__PURE__ */ jsxs("ul", {
					className: "software-showcase-features",
					children: [
						/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx(Code2, {
							size: 16,
							strokeWidth: 1.5
						}), cmsText("Web & mobile applications", "SoftwareShowcaseCard:SoftwareShowcaseCard")] }),
						/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx(LayoutDashboard, {
							size: 16,
							strokeWidth: 1.5
						}), cmsText("Operational dashboards", "SoftwareShowcaseCard:SoftwareShowcaseCard")] }),
						/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx(PlugZap, {
							size: 16,
							strokeWidth: 1.5
						}), cmsText("Business platform integrations", "SoftwareShowcaseCard:SoftwareShowcaseCard")] })
					]
				}),
				/* @__PURE__ */ jsxs("span", {
					className: "software-showcase-cta",
					children: [cmsText("Explore custom software ", "SoftwareShowcaseCard:SoftwareShowcaseCard"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })]
				})
			]
		}), /* @__PURE__ */ jsx(WorkspacePreview, {})]
	});
}
// src/PremiumHome.tsx
function HomeLabel({ children }) {
	return /* @__PURE__ */ jsxs("span", {
		className: "eyebrow",
		children: [/* @__PURE__ */ jsx("span", { className: "label-line" }), cmsText(children, "PremiumHome:HomeLabel")]
	});
}
function PremiumHomeHero() {
	return /* @__PURE__ */ jsxs("section", {
		className: "consulting-hero dark",
		"aria-labelledby": "home-hero-title",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "consulting-hero-background",
				children: [/* @__PURE__ */ jsx("img", {
					src: cmsAsset("/images/home/consulting-hero.webp"),
					alt: cmsText("Illustrative technology consultants collaborating in a contemporary office", "PremiumHome:PremiumHomeHero"),
					width: "1536",
					height: "1024",
					fetchPriority: "high"
				}), /* @__PURE__ */ jsx("div", {})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "container consulting-hero-content",
				children: [
					/* @__PURE__ */ jsxs("span", {
						className: "consulting-eyebrow",
						children: [/* @__PURE__ */ jsx("i", {}), cmsText("TECHNOLOGY. TRANSFORMATION. TOGETHER.", "PremiumHome:PremiumHomeHero")]
					}),
					/* @__PURE__ */ jsxs("h1", {
						id: "home-hero-title",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-mask",
							children: /* @__PURE__ */ jsx("span", { children: cmsText("Connecting Things.", "PremiumHome:PremiumHomeHero") })
						}), /* @__PURE__ */ jsx("span", {
							className: "text-mask",
							children: /* @__PURE__ */ jsx("span", { children: cmsText("Creating Intelligence.", "PremiumHome:PremiumHomeHero") })
						})]
					}),
					/* @__PURE__ */ jsx("p", { children: cmsText("Bring new possibilities to your business. We unite IoT, AI and digital engineering to connect your operations, empower your people and move your ideas forward.", "PremiumHome:PremiumHomeHero") }),
					/* @__PURE__ */ jsxs("div", {
						className: "consulting-hero-actions",
						children: [/* @__PURE__ */ jsxs(Link, {
							to: cmsLink("/solutions"),
							className: "button",
							children: [cmsText("Explore our expertise", "PremiumHome:PremiumHomeHero"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })]
						}), /* @__PURE__ */ jsxs(Link, {
							to: cmsLink("/contact"),
							className: "consulting-hero-contact",
							children: [cmsText("Let’s talk", "PremiumHome:PremiumHomeHero"), /* @__PURE__ */ jsx(ArrowRight, { size: 17 })]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "consulting-signature",
						children: [/* @__PURE__ */ jsx("span", { children: cmsText("GLOBAL PERSPECTIVE. PRACTICAL IMPACT.", "PremiumHome:PremiumHomeHero") }), /* @__PURE__ */ jsxs(Link, {
							to: cmsLink("/about"),
							children: [cmsText("Discover NekSoft", "PremiumHome:PremiumHomeHero"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 14 })]
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "consulting-hero-foot",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [
						/* @__PURE__ */ jsxs(Link, {
							to: cmsLink("/iot-solutions"),
							children: [
								/* @__PURE__ */ jsx("span", { children: "01 / CONNECT" }),
								/* @__PURE__ */ jsx("strong", { children: cmsText("IoT & connected solutions", "PremiumHome:PremiumHomeHero") }),
								/* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })
							]
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: cmsLink("/ai-automation"),
							children: [
								/* @__PURE__ */ jsx("span", { children: "02 / TRANSFORM" }),
								/* @__PURE__ */ jsx("strong", { children: cmsText("AI & intelligent automation", "PremiumHome:PremiumHomeHero") }),
								/* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })
							]
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: cmsLink("/custom-software"),
							children: [
								/* @__PURE__ */ jsx("span", { children: "03 / BUILD" }),
								/* @__PURE__ */ jsx("strong", { children: cmsText("Digital engineering", "PremiumHome:PremiumHomeHero") }),
								/* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })
							]
						})
					]
				})
			})
		]
	});
}
function HomeTrustBar() {
	return /* @__PURE__ */ jsx("section", {
		className: "home-trust-bar",
		"aria-label": cmsText("NekSoft presence, partner and selected work", "PremiumHome:HomeTrustBar:home-trust-bar"),
		children: /* @__PURE__ */ jsxs("div", {
			className: "container home-trust-layout",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "home-trust-presence",
					children: [/* @__PURE__ */ jsx(Globe2, {
						size: 21,
						strokeWidth: 1.2
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
						className: "mono",
						children: cmsText("AN INTERNATIONAL PERSPECTIVE", "PremiumHome:HomeTrustBar:home-trust-bar")
					}), /* @__PURE__ */ jsxs("p", { children: [
						cmsText("Netherlands ", "PremiumHome:HomeTrustBar:home-trust-bar"),
						/* @__PURE__ */ jsx("i", {}),
						cmsText(" India ", "PremiumHome:HomeTrustBar:home-trust-bar"),
						/* @__PURE__ */ jsx("i", {}),
						cmsText(" Germany", "PremiumHome:HomeTrustBar:home-trust-bar")
					] })] })]
				}),
				/* @__PURE__ */ jsxs(Link, {
					className: "home-trust-work",
					to: cmsLink("/projects"),
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "mono",
							children: cmsText("SEE THE WORK", "PremiumHome:HomeTrustBar:home-trust-bar")
						}),
						/* @__PURE__ */ jsx("strong", { children: cmsText("Real businesses. Distinct experiences.", "PremiumHome:HomeTrustBar:home-trust-bar") }),
						/* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })
					]
				}),
				/* @__PURE__ */ jsx(Link, {
					to: cmsLink("/zoho-consultation"),
					className: "home-trust-partner",
					"aria-label": cmsText("Explore Zoho consultation from NekSoft, a Zoho Authorized Partner", "PremiumHome:HomeTrustBar:home-trust-bar"),
					children: /* @__PURE__ */ jsx("img", {
						src: cmsAsset("/images/partners/zoho-authorized-partner-hd-small.webp"),
						width: "660",
						height: "214",
						alt: cmsText("Zoho Authorized Partner", "PremiumHome:HomeTrustBar:home-trust-bar"),
						loading: "lazy",
						decoding: "async"
					})
				})
			]
		})
	});
}
function HomeManifesto() {
	const rows = [
		{
			name: "See.",
			text: "Bring equipment, devices, and operational information into a clearer view.",
			link: "/iot-solutions",
			label: "Connected visibility",
			icon: Radio
		},
		{
			name: "Understand.",
			text: "Turn the right data into useful context, patterns, and decision support.",
			link: "/ai-automation",
			label: "Applied intelligence",
			icon: Cpu
		},
		{
			name: "Act.",
			text: "Connect systems, coordinate the next step, and reduce repetitive handoffs.",
			link: "/ai-automation?focus=automation",
			label: "Practical automation",
			icon: Workflow
		}
	];
	return /* @__PURE__ */ jsx("section", {
		className: "section home-manifesto",
		id: "what-we-do",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container home-manifesto-layout",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "reveal",
				children: [
					/* @__PURE__ */ jsx(HomeLabel, { children: cmsText("01 / CONNECTED THINKING", "PremiumHome:HomeManifesto:what-we-do") }),
					/* @__PURE__ */ jsxs("h2", { children: [
						cmsText("A clearer view.", "PremiumHome:HomeManifesto:what-we-do"),
						/* @__PURE__ */ jsx("br", {}),
						cmsText("A more connected", "PremiumHome:HomeManifesto:what-we-do"),
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("span", { children: cmsText("operation.", "PremiumHome:HomeManifesto:what-we-do") })
					] }),
					/* @__PURE__ */ jsx("p", { children: cmsText("Modern operations depend on more than individual tools. We engineer the connections between the physical world, the information it creates, and the people who use it.", "PremiumHome:HomeManifesto:what-we-do") }),
					/* @__PURE__ */ jsxs(Link, {
						className: "explore-link",
						to: cmsLink("/solutions"),
						children: [cmsText("Explore the connected approach ", "PremiumHome:HomeManifesto:what-we-do"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })]
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "home-manifesto-rows",
				children: cmsText(rows.map((row, i) => /* @__PURE__ */ jsxs(Link, {
					className: "home-manifesto-row reveal",
					to: cmsLink(row.link),
					children: [
						/* @__PURE__ */ jsxs("span", {
							className: "home-manifesto-index mono",
							children: [cmsText("0", "PremiumHome:HomeManifesto:what-we-do"), cmsText(i + 1, "PremiumHome:HomeManifesto:what-we-do")]
						}),
						/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsxs("div", {
								className: "home-manifesto-row-heading",
								children: [/* @__PURE__ */ jsx(row.icon, {
									size: 21,
									strokeWidth: 1.2
								}), /* @__PURE__ */ jsx("span", {
									className: "mono",
									children: cmsText(row.label.toUpperCase(), "PremiumHome:HomeManifesto:what-we-do")
								})]
							}),
							/* @__PURE__ */ jsx("h3", { children: cmsText(row.name, "PremiumHome:HomeManifesto:what-we-do") }),
							/* @__PURE__ */ jsx("p", { children: cmsText(row.text, "PremiumHome:HomeManifesto:what-we-do") })
						] }),
						/* @__PURE__ */ jsx(ArrowUpRight, {
							className: "home-manifesto-arrow",
							size: 21
						})
					]
				}, row.name)), "PremiumHome:HomeManifesto:what-we-do")
			})]
		})
	});
}
function PremiumHomeSolutions() {
	return /* @__PURE__ */ jsx("section", {
		className: "section home-solutions",
		id: "solutions",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "section-heading reveal",
					children: [/* @__PURE__ */ jsx(HomeLabel, { children: cmsText("02 / ENGINEERING CAPABILITIES", "PremiumHome:PremiumHomeSolutions:solutions") }), /* @__PURE__ */ jsxs("div", {
						className: "heading-row",
						children: [/* @__PURE__ */ jsxs("h2", { children: [
							cmsText("Built for the way", "PremiumHome:PremiumHomeSolutions:solutions"),
							/* @__PURE__ */ jsx("br", {}),
							cmsText("your world works.", "PremiumHome:PremiumHomeSolutions:solutions")
						] }), /* @__PURE__ */ jsx("p", { children: cmsText("From a signal at the edge to the application in your team’s hands. Explore the systems that bring it together.", "PremiumHome:PremiumHomeSolutions:solutions") })]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "home-solutions-grid",
					children: [
						/* @__PURE__ */ jsxs(Link, {
							to: cmsLink("/iot-solutions"),
							className: "home-solution-tile home-tile-iot reveal",
							"aria-labelledby": "home-iot-title",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "home-tile-label mono",
									children: cmsText("01 / CONNECT THE PHYSICAL", "PremiumHome:PremiumHomeSolutions:solutions")
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "home-tile-copy",
									children: [/* @__PURE__ */ jsxs("h3", {
										id: "home-iot-title",
										children: [
											cmsText("IoT platforms &", "PremiumHome:PremiumHomeSolutions:solutions"),
											/* @__PURE__ */ jsx("br", {}),
											cmsText("device connectivity.", "PremiumHome:PremiumHomeSolutions:solutions")
										]
									}), /* @__PURE__ */ jsx("p", { children: cmsText("Make equipment and sensor information useful, visible, and connected to the wider operation.", "PremiumHome:PremiumHomeSolutions:solutions") })]
								}),
								/* @__PURE__ */ jsx("img", {
									src: cmsAsset("/images/home/connected-engineering.webp"),
									width: "1536",
									height: "1024",
									alt: cmsText("Industrial connectivity concept with sensors and connected equipment", "PremiumHome:PremiumHomeSolutions:solutions"),
									loading: "lazy",
									decoding: "async"
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "home-tile-footer",
									children: [/* @__PURE__ */ jsx("span", { children: cmsText("Remote monitoring · Sensors · Platforms", "PremiumHome:PremiumHomeSolutions:solutions") }), /* @__PURE__ */ jsx("span", {
										className: "home-tile-arrow",
										children: /* @__PURE__ */ jsx(ArrowUpRight, { size: 21 })
									})]
								}),
								/* @__PURE__ */ jsx("span", {
									className: "home-tile-demo mono",
									children: cmsText("ILLUSTRATIVE CONCEPT", "PremiumHome:PremiumHomeSolutions:solutions")
								})
							]
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: cmsLink("/ai-automation"),
							className: "home-solution-tile home-tile-ai reveal",
							"aria-labelledby": "home-ai-title",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "home-tile-label mono",
									children: cmsText("02 / UNDERSTAND THE SIGNAL", "PremiumHome:PremiumHomeSolutions:solutions")
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "home-tile-copy",
									children: [/* @__PURE__ */ jsxs("h3", {
										id: "home-ai-title",
										children: [
											cmsText("AI & predictive", "PremiumHome:PremiumHomeSolutions:solutions"),
											/* @__PURE__ */ jsx("br", {}),
											cmsText("intelligence.", "PremiumHome:PremiumHomeSolutions:solutions")
										]
									}), /* @__PURE__ */ jsx("p", { children: cmsText("Find meaningful patterns and support the decisions that matter.", "PremiumHome:PremiumHomeSolutions:solutions") })]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "home-tile-ai-art",
									children: /* @__PURE__ */ jsx(AnalyticsVisual, {})
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "home-tile-footer",
									children: [/* @__PURE__ */ jsx("span", { children: cmsText("From information to useful insight", "PremiumHome:PremiumHomeSolutions:solutions") }), /* @__PURE__ */ jsx("span", {
										className: "home-tile-arrow",
										children: /* @__PURE__ */ jsx(ArrowUpRight, { size: 20 })
									})]
								})
							]
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: cmsLink("/ai-automation?focus=automation"),
							className: "home-solution-tile home-tile-automation reveal",
							"aria-labelledby": "home-automation-title",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "home-tile-label mono",
									children: cmsText("03 / CONNECT THE NEXT STEP", "PremiumHome:PremiumHomeSolutions:solutions")
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "home-tile-copy",
									children: [/* @__PURE__ */ jsxs("h3", {
										id: "home-automation-title",
										children: [
											cmsText("Workflows,", "PremiumHome:PremiumHomeSolutions:solutions"),
											/* @__PURE__ */ jsx("br", {}),
											cmsText("working together.", "PremiumHome:PremiumHomeSolutions:solutions")
										]
									}), /* @__PURE__ */ jsx("p", { children: cmsText("Turn repetitive handoffs into clear, coordinated actions.", "PremiumHome:PremiumHomeSolutions:solutions") })]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "home-tile-workflow-art",
									children: /* @__PURE__ */ jsx(WorkflowVisual, {})
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "home-tile-footer",
									children: [/* @__PURE__ */ jsx("span", { children: cmsText("Alerts · Integrations · Automation", "PremiumHome:PremiumHomeSolutions:solutions") }), /* @__PURE__ */ jsx("span", {
										className: "home-tile-arrow",
										children: /* @__PURE__ */ jsx(ArrowUpRight, { size: 20 })
									})]
								})
							]
						}),
						/* @__PURE__ */ jsx(SoftwareShowcaseCard, {})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "home-solutions-bottom reveal",
					children: [/* @__PURE__ */ jsx("span", {
						className: "mono",
						children: cmsText("CONSULTATION · DESIGN · DEVELOPMENT · INTEGRATION", "PremiumHome:PremiumHomeSolutions:solutions")
					}), /* @__PURE__ */ jsxs(Link, {
						className: "explore-link",
						to: cmsLink("/solutions"),
						children: [cmsText("Explore every capability ", "PremiumHome:PremiumHomeSolutions:solutions"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })]
					})]
				})
			]
		})
	});
}
function HomeApproach() {
	const [opened, setOpened] = useState(0);
	return /* @__PURE__ */ jsx("section", {
		className: "section home-delivery",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container home-delivery-layout",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "home-delivery-copy reveal",
				children: [
					/* @__PURE__ */ jsx(HomeLabel, { children: cmsText("06 / OUR ENGINEERING APPROACH", "PremiumHome:HomeApproach:section home-delivery") }),
					/* @__PURE__ */ jsxs("h2", { children: [
						cmsText("Complex challenges.", "PremiumHome:HomeApproach:section home-delivery"),
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("span", { children: cmsText("Considered delivery.", "PremiumHome:HomeApproach:section home-delivery") })
					] }),
					/* @__PURE__ */ jsx("p", { children: cmsText("Start with the operation, validate the important assumptions, and build with a clear handover in mind.", "PremiumHome:HomeApproach:section home-delivery") }),
					/* @__PURE__ */ jsxs(Link, {
						className: "explore-link",
						to: cmsLink("/approach"),
						children: [cmsText("Inside our approach ", "PremiumHome:HomeApproach:section home-delivery"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })]
					}),
					/* @__PURE__ */ jsxs("span", {
						className: "home-delivery-signature mono",
						children: [/* @__PURE__ */ jsx(Check, { size: 14 }), cmsText(" CLARITY AT EVERY STAGE.", "PremiumHome:HomeApproach:section home-delivery")]
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "home-delivery-stages",
				children: cmsText(process.map(([title, heading, text, output], i) => /* @__PURE__ */ jsxs("article", {
					className: `home-delivery-stage reveal ${opened === i ? "opened" : ""}`,
					children: [/* @__PURE__ */ jsx("h3", { children: /* @__PURE__ */ jsxs("button", {
						type: "button",
						"aria-expanded": opened === i,
						"aria-controls": `home-delivery-panel-${i}`,
						onClick: () => setOpened(opened === i ? null : i),
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "mono",
								children: [cmsText("0", "PremiumHome:HomeApproach:section home-delivery"), cmsText(i + 1, "PremiumHome:HomeApproach:section home-delivery")]
							}),
							cmsText(title, "PremiumHome:HomeApproach:section home-delivery"),
							cmsText(opened === i ? /* @__PURE__ */ jsx(Minus, { size: 18 }) : /* @__PURE__ */ jsx(Plus, { size: 18 }), "PremiumHome:HomeApproach:section home-delivery")
						]
					}) }), /* @__PURE__ */ jsx("div", {
						className: "home-delivery-panel",
						id: `home-delivery-panel-${i}`,
						"aria-hidden": opened !== i,
						inert: opened !== i,
						children: /* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("h4", { children: cmsText(heading, "PremiumHome:HomeApproach:section home-delivery") }),
							/* @__PURE__ */ jsx("p", { children: cmsText(text, "PremiumHome:HomeApproach:section home-delivery") }),
							/* @__PURE__ */ jsx("span", {
								className: "mono",
								children: cmsText(output, "PremiumHome:HomeApproach:section home-delivery")
							})
						] })
					})]
				}, title)), "PremiumHome:HomeApproach:section home-delivery")
			})]
		})
	});
}
function HomePeople() {
	return /* @__PURE__ */ jsx("section", {
		className: "section home-people dark",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "home-people-intro",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "reveal",
					children: [
						/* @__PURE__ */ jsx(HomeLabel, { children: cmsText("07 / THE PEOPLE BEHIND THE SYSTEMS", "PremiumHome:HomePeople:section home-people dark") }),
						/* @__PURE__ */ jsxs("h2", { children: [
							cmsText("Engineering is still", "PremiumHome:HomePeople:section home-people dark"),
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", { children: cmsText("a people business.", "PremiumHome:HomePeople:section home-people dark") })
						] }),
						/* @__PURE__ */ jsx("p", { children: cmsText("Software, connected systems, and practical business understanding. Meet the people bringing those disciplines together at NekSoft.", "PremiumHome:HomePeople:section home-people dark") }),
						/* @__PURE__ */ jsxs(Link, {
							className: "explore-link",
							to: cmsLink("/about#our-people"),
							children: [cmsText("Meet our people ", "PremiumHome:HomePeople:section home-people dark"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })]
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "home-people-portraits reveal",
					children: cmsText([
						{
							id: "sweta",
							name: "Sweta Verma",
							role: "People & culture",
							width: 600,
							height: 648
						},
						{
							id: "rudra",
							name: "Rudra Ck",
							role: "Technology",
							width: 600,
							height: 600
						},
						{
							id: "alok",
							name: "Alok Verma",
							role: "Support & operations",
							width: 600,
							height: 629
						}
					].map((person) => /* @__PURE__ */ jsxs(Link, {
						to: cmsLink("/about#our-people"),
						className: "home-portrait",
						"aria-label": cmsText(`Meet ${person.name} and the NekSoft team`, "PremiumHome:HomePeople:section home-people dark"),
						children: [
							/* @__PURE__ */ jsx("img", {
								src: cmsAsset(`/images/team/${person.id}.webp`),
								width: person.width,
								height: person.height,
								alt: cmsText(person.name, "PremiumHome:HomePeople:section home-people dark"),
								loading: "lazy",
								decoding: "async"
							}),
							/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("strong", { children: cmsText(person.name, "PremiumHome:HomePeople:section home-people dark") }), /* @__PURE__ */ jsx("small", { children: cmsText(person.role, "PremiumHome:HomePeople:section home-people dark") })] }),
							/* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })
						]
					}, person.id)), "PremiumHome:HomePeople:section home-people dark")
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "home-global-presence",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "home-global-copy reveal",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "mono",
							children: cmsText("CONNECTED ACROSS BORDERS", "PremiumHome:HomePeople:section home-people dark")
						}),
						/* @__PURE__ */ jsxs("h3", { children: [
							cmsText("One shared perspective.", "PremiumHome:HomePeople:section home-people dark"),
							/* @__PURE__ */ jsx("br", {}),
							cmsText("An international presence.", "PremiumHome:HomePeople:section home-people dark")
						] }),
						/* @__PURE__ */ jsx("p", { children: cmsText("Headquartered in Almere, Netherlands, with a delivery team in India and a presence in Germany.", "PremiumHome:HomePeople:section home-people dark") }),
						/* @__PURE__ */ jsxs("div", {
							className: "home-location-list",
							children: [
								/* @__PURE__ */ jsxs("span", { children: [
									/* @__PURE__ */ jsx("i", { className: "country-flag flag-nl" }),
									cmsText("Netherlands", "PremiumHome:HomePeople:section home-people dark"),
									/* @__PURE__ */ jsx("small", { children: cmsText("Headquarters", "PremiumHome:HomePeople:section home-people dark") })
								] }),
								/* @__PURE__ */ jsxs("span", { children: [
									/* @__PURE__ */ jsx("i", { className: "country-flag flag-in" }),
									cmsText("India", "PremiumHome:HomePeople:section home-people dark"),
									/* @__PURE__ */ jsx("small", { children: cmsText("Delivery team", "PremiumHome:HomePeople:section home-people dark") })
								] }),
								/* @__PURE__ */ jsxs("span", { children: [
									/* @__PURE__ */ jsx("i", { className: "country-flag flag-de" }),
									cmsText("Germany", "PremiumHome:HomePeople:section home-people dark"),
									/* @__PURE__ */ jsx("small", { children: cmsText("Presence", "PremiumHome:HomePeople:section home-people dark") })
								] })
							]
						}),
						/* @__PURE__ */ jsxs(Link, {
							className: "text-link",
							to: cmsLink("/about#office-locations"),
							children: [cmsText("Explore our locations ", "PremiumHome:HomePeople:section home-people dark"), /* @__PURE__ */ jsx(ArrowRight, { size: 15 })]
						})
					]
				}), /* @__PURE__ */ jsx(GlobalNetworkMap, {})]
			})]
		})
	});
}
// src/App.tsx
if (typeof window !== "undefined") gsapWithCSS.registerPlugin(ScrollTrigger);
var icons = [
	Radio,
	Cpu,
	Code2
];
function Label({ children, light = false }) {
	return /* @__PURE__ */ jsxs("div", {
		className: `eyebrow ${light ? "on-dark" : ""}`,
		children: [/* @__PURE__ */ jsx("span", { className: "label-line" }), cmsText(children, "App:Label")]
	});
}
function Button({ to, children, secondary = false, className = "" }) {
	return /* @__PURE__ */ jsxs(Link, {
		className: `button magnetic ${secondary ? "secondary" : ""} ${className}`,
		to: cmsLink(to),
		children: [cmsText(children, "App:Button"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })]
	});
}
function Visual({ kind }) {
	return kind === 0 ? /* @__PURE__ */ jsx(FactoryVisual, { compact: true }) : kind === 1 ? /* @__PURE__ */ jsx(AnalyticsVisual, {}) : kind === 2 ? /* @__PURE__ */ jsx(WorkflowVisual, {}) : /* @__PURE__ */ jsx(AppVisual, {});
}
function SolutionsShowcase({ standalone = false }) {
	const rows = [
		{
			kind: 0,
			title: "IoT Platforms &\nDevice Connectivity",
			summary: solutions[0].summary,
			tags: [
				"Remote monitoring",
				"Sensor integration",
				"Device management"
			],
			path: "/iot-solutions"
		},
		{
			kind: 1,
			title: "AI & Predictive\nIntelligence",
			summary: "Find meaningful patterns in operational data, identify unusual conditions, and support better decisions.",
			tags: [
				"Anomaly detection",
				"Intelligent analytics",
				"Decision support"
			],
			path: "/ai-automation"
		},
		{
			kind: 2,
			title: "Workflow & Process\nAutomation",
			summary: "Connect the systems you already use. Replace repetitive follow-up with clear, coordinated workflows.",
			tags: [
				"Automated alerts",
				"Platform integrations",
				"Business workflows"
			],
			path: "/ai-automation?focus=automation"
		},
		{
			kind: 3,
			title: "Custom Software\n& Applications",
			summary: solutions[2].summary,
			tags: [
				"Web & mobile apps",
				"Custom dashboards",
				"Enterprise integrations"
			],
			path: "/custom-software"
		}
	];
	return /* @__PURE__ */ jsx("section", {
		id: "solutions",
		className: "section solutions-section",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "section-heading reveal",
				children: [/* @__PURE__ */ jsx(Label, { children: cmsText("OUR SOLUTIONS", "App:SolutionsShowcase:solutions") }), /* @__PURE__ */ jsxs("div", {
					className: "heading-row",
					children: [/* @__PURE__ */ jsxs("h2", { children: [
						cmsText(standalone ? "Connected by design." : "Engineered around the way", "App:SolutionsShowcase:solutions"),
						/* @__PURE__ */ jsx("br", {}),
						cmsText(standalone ? "Built around you." : "your business works.", "App:SolutionsShowcase:solutions")
					] }), /* @__PURE__ */ jsxs("span", {
						className: "section-note mono",
						children: [
							cmsText("HARDWARE. SOFTWARE.", "App:SolutionsShowcase:solutions"),
							/* @__PURE__ */ jsx("br", {}),
							cmsText("INTELLIGENCE. TOGETHER.", "App:SolutionsShowcase:solutions")
						]
					})]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "solution-list",
				children: cmsText(rows.map((s, i) => /* @__PURE__ */ jsxs("article", {
					className: `solution-row reveal solution-${i}`,
					children: [/* @__PURE__ */ jsxs("div", {
						className: "solution-copy",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "solution-number mono",
								children: [
									cmsText("0", "App:SolutionsShowcase:solutions"),
									cmsText(i + 1, "App:SolutionsShowcase:solutions"),
									cmsText(" /", "App:SolutionsShowcase:solutions")
								]
							}),
							/* @__PURE__ */ jsx("h3", { children: cmsText(s.title.split("\n").map((line, n) => /* @__PURE__ */ jsxs(React.Fragment, { children: [cmsText(n > 0 && /* @__PURE__ */ jsx("br", {}), "App:SolutionsShowcase:solutions"), cmsText(line, "App:SolutionsShowcase:solutions")] }, line)), "App:SolutionsShowcase:solutions") }),
							/* @__PURE__ */ jsx("p", { children: cmsText(s.summary, "App:SolutionsShowcase:solutions") }),
							/* @__PURE__ */ jsx("div", {
								className: "tags",
								children: cmsText(s.tags.map((t) => /* @__PURE__ */ jsx("span", { children: cmsText(t, "App:SolutionsShowcase:solutions") }, t)), "App:SolutionsShowcase:solutions")
							}),
							/* @__PURE__ */ jsxs(Link, {
								className: "explore-link",
								to: cmsLink(s.path),
								children: [cmsText("Explore Solution ", "App:SolutionsShowcase:solutions"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })]
							})
						]
					}), /* @__PURE__ */ jsx(Link, {
						to: cmsLink(s.path),
						className: "solution-art",
						"aria-label": cmsText(`Explore ${s.title.replace("\n", " ")}`, "App:SolutionsShowcase:solutions"),
						children: /* @__PURE__ */ jsx(Visual, { kind: s.kind })
					})]
				}, s.title)), "App:SolutionsShowcase:solutions")
			})]
		})
	});
}
function SystemExperience({ home = false } = {}) {
	const [active, setActive] = useState(0);
	const Icon = [
		Radio,
		Layers,
		Cpu,
		Zap
	][active];
	return /* @__PURE__ */ jsx("section", {
		className: "section system-section dark",
		id: "system",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "section-heading reveal",
				children: [/* @__PURE__ */ jsx(Label, {
					light: true,
					children: cmsText(home ? "03 / THE CONNECTED ADVANTAGE" : "THE CONNECTED ADVANTAGE", "App:SystemExperience:system")
				}), /* @__PURE__ */ jsxs("div", {
					className: "heading-row",
					children: [/* @__PURE__ */ jsxs("h2", { children: [
						cmsText("From physical signals", "App:SystemExperience:system"),
						/* @__PURE__ */ jsx("br", {}),
						cmsText("to intelligent action.", "App:SystemExperience:system")
					] }), /* @__PURE__ */ jsxs("p", { children: [
						cmsText("One connected architecture.", "App:SystemExperience:system"),
						/* @__PURE__ */ jsx("br", {}),
						cmsText("A clear path from insight to impact.", "App:SystemExperience:system")
					] })]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "system-experience reveal",
				children: [/* @__PURE__ */ jsx("div", {
					className: "system-stages",
					role: "tablist",
					"aria-label": cmsText("Connected system stages", "App:SystemExperience:system"),
					children: cmsText(stages.map((s, i) => {
						const I = [
							Radio,
							Layers,
							Cpu,
							Zap
						][i];
						return /* @__PURE__ */ jsxs("button", {
							id: `stage-${i}`,
							role: "tab",
							"aria-selected": active === i,
							"aria-controls": "stage-panel",
							tabIndex: active === i ? 0 : -1,
							onClick: () => setActive(i),
							onKeyDown: (e) => {
								let next = active;
								if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (active + 1) % 4;
								else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (active + 3) % 4;
								else if (e.key === "Home") next = 0;
								else if (e.key === "End") next = 3;
								else return;
								e.preventDefault();
								setActive(next);
								document.getElementById(`stage-${next}`)?.focus();
							},
							className: `stage ${active === i ? "selected" : ""}`,
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "stage-icon",
									children: /* @__PURE__ */ jsx(I, { size: 25 })
								}),
								/* @__PURE__ */ jsx("span", {
									className: "mono",
									children: cmsText(s.label, "App:SystemExperience:system")
								}),
								/* @__PURE__ */ jsx("strong", { children: cmsText(s.title, "App:SystemExperience:system") }),
								cmsText(i < 3 && /* @__PURE__ */ jsx(ArrowRight, {
									className: "stage-arrow",
									size: 19
								}), "App:SystemExperience:system")
							]
						}, s.title);
					}), "App:SystemExperience:system")
				}), /* @__PURE__ */ jsxs("div", {
					id: "stage-panel",
					className: "stage-panel",
					role: "tabpanel",
					"aria-labelledby": `stage-${active}`,
					tabIndex: 0,
					children: [/* @__PURE__ */ jsxs("div", {
						className: "stage-panel-copy",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "mono",
								children: cmsText(stages[active].label, "App:SystemExperience:system")
							}),
							/* @__PURE__ */ jsx("h3", { children: cmsText(stages[active].description, "App:SystemExperience:system") }),
							/* @__PURE__ */ jsx("p", { children: cmsText(stages[active].detail, "App:SystemExperience:system") })
						]
					}, active), /* @__PURE__ */ jsxs("div", {
						className: "stage-example",
						children: [
							/* @__PURE__ */ jsx(Icon, {
								size: 30,
								strokeWidth: 1
							}),
							/* @__PURE__ */ jsx("span", {
								className: "mono",
								children: cmsText("EXAMPLE IN PRACTICE", "App:SystemExperience:system")
							}),
							/* @__PURE__ */ jsx("p", { children: cmsText(stages[active].example, "App:SystemExperience:system") }),
							/* @__PURE__ */ jsx("span", {
								className: "demo-label",
								children: cmsText("Illustrative workflow", "App:SystemExperience:system")
							})
						]
					})]
				})]
			})]
		})
	});
}
function IndustryShowcase() {
	const [active, setActive] = useState(0);
	const item = industries[active];
	return /* @__PURE__ */ jsx("section", {
		className: "section industry-section",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "section-heading reveal",
				children: [/* @__PURE__ */ jsx(Label, { children: cmsText("04 / REAL-WORLD APPLICATIONS", "App:IndustryShowcase:section industry-section") }), /* @__PURE__ */ jsxs("div", {
					className: "heading-row",
					children: [/* @__PURE__ */ jsxs("h2", { children: [
						cmsText("Built for the complexity", "App:IndustryShowcase:section industry-section"),
						/* @__PURE__ */ jsx("br", {}),
						cmsText("of real operations.", "App:IndustryShowcase:section industry-section")
					] }), /* @__PURE__ */ jsxs(Link, {
						className: "explore-link",
						to: cmsLink("/industries"),
						children: [cmsText("Explore Industries ", "App:IndustryShowcase:section industry-section"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })]
					})]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "industry-showcase reveal",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "industry-image",
					children: [/* @__PURE__ */ jsx("img", {
						src: cmsAsset(`/images/${item.image}`),
						alt: cmsText(item.alt, "App:IndustryShowcase:section industry-section"),
						loading: "lazy",
						width: "1400",
						height: "933"
					}, item.image), /* @__PURE__ */ jsxs("div", {
						className: "image-caption mono",
						children: [/* @__PURE__ */ jsx("span", { children: cmsText("CONNECTED OPERATIONS", "App:IndustryShowcase:section industry-section") }), /* @__PURE__ */ jsxs("span", { children: [
							cmsText("0", "App:IndustryShowcase:section industry-section"),
							cmsText(active + 1, "App:IndustryShowcase:section industry-section"),
							cmsText(" / 04", "App:IndustryShowcase:section industry-section")
						] })]
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "industry-selection",
					children: cmsText(industries.map((v, i) => /* @__PURE__ */ jsxs("div", {
						className: `industry-item ${active === i ? "selected" : ""}`,
						children: [/* @__PURE__ */ jsxs("button", {
							"aria-expanded": active === i,
							"aria-controls": `industry-${i}`,
							onClick: () => setActive(i),
							children: [
								/* @__PURE__ */ jsxs("span", {
									className: "mono",
									children: [cmsText("0", "App:IndustryShowcase:section industry-section"), cmsText(i + 1, "App:IndustryShowcase:section industry-section")]
								}),
								/* @__PURE__ */ jsx("h3", { children: cmsText(v.name, "App:IndustryShowcase:section industry-section") }),
								cmsText(active === i ? /* @__PURE__ */ jsx(Minus, { size: 20 }) : /* @__PURE__ */ jsx(Plus, { size: 20 }), "App:IndustryShowcase:section industry-section")
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "industry-description",
							id: `industry-${i}`,
							hidden: active !== i,
							children: [/* @__PURE__ */ jsx("p", { children: cmsText(v.solution, "App:IndustryShowcase:section industry-section") }), /* @__PURE__ */ jsxs(Link, {
								to: cmsLink(`/industries#${v.name.toLowerCase().replace(/ /g, "-")}`),
								className: "text-link",
								children: [cmsText("Explore application ", "App:IndustryShowcase:section industry-section"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 15 })]
							})]
						})]
					}, v.name)), "App:IndustryShowcase:section industry-section")
				})]
			})]
		})
	});
}
function ApproachSection({ full = false }) {
	return /* @__PURE__ */ jsx("section", {
		className: "section approach-section",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "section-heading reveal",
					children: [/* @__PURE__ */ jsx(Label, { children: cmsText("OUR ENGINEERING APPROACH", "App:ApproachSection:section approach-section") }), /* @__PURE__ */ jsxs("div", {
						className: "heading-row",
						children: [/* @__PURE__ */ jsxs("h2", { children: [
							cmsText("From complex challenges", "App:ApproachSection:section approach-section"),
							/* @__PURE__ */ jsx("br", {}),
							cmsText("to working systems.", "App:ApproachSection:section approach-section")
						] }), /* @__PURE__ */ jsxs("p", { children: [
							cmsText("Considered at every stage.", "App:ApproachSection:section approach-section"),
							/* @__PURE__ */ jsx("br", {}),
							cmsText("Connected from the beginning.", "App:ApproachSection:section approach-section")
						] })]
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: `process-grid ${full ? "full" : ""}`,
					children: cmsText(process.map(([title, heading, text, output], i) => /* @__PURE__ */ jsxs("article", {
						className: "process-step reveal",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "process-index mono",
								children: [
									cmsText("0", "App:ApproachSection:section approach-section"),
									cmsText(i + 1, "App:ApproachSection:section approach-section"),
									/* @__PURE__ */ jsx("span", {})
								]
							}),
							/* @__PURE__ */ jsx("h3", { children: cmsText(title, "App:ApproachSection:section approach-section") }),
							cmsText(full && /* @__PURE__ */ jsx("h4", { children: cmsText(heading, "App:ApproachSection:section approach-section") }), "App:ApproachSection:section approach-section"),
							/* @__PURE__ */ jsx("p", { children: cmsText(text, "App:ApproachSection:section approach-section") }),
							cmsText(full && /* @__PURE__ */ jsx("span", {
								className: "process-output mono",
								children: cmsText(output, "App:ApproachSection:section approach-section")
							}), "App:ApproachSection:section approach-section")
						]
					}, title)), "App:ApproachSection:section approach-section")
				}),
				cmsText(!full && /* @__PURE__ */ jsxs(Link, {
					to: cmsLink("/approach"),
					className: "explore-link approach-link",
					children: [cmsText("How We Work ", "App:ApproachSection:section approach-section"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })]
				}), "App:ApproachSection:section approach-section")
			]
		})
	});
}
function ContactSection({ standalone = false }) {
	const Heading = standalone ? "h1" : "h2";
	return /* @__PURE__ */ jsx("section", {
		className: "section contact-section dark",
		id: "contact",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container contact-grid",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "contact-copy reveal",
				children: [
					/* @__PURE__ */ jsx(Label, {
						light: true,
						children: cmsText("LET’S CONNECT", "App:ContactSection:contact")
					}),
					/* @__PURE__ */ jsxs(Heading, { children: [
						cmsText("Have a process", "App:ContactSection:contact"),
						/* @__PURE__ */ jsx("br", {}),
						cmsText("that should work", "App:ContactSection:contact"),
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("span", {
							className: "blue-text",
							children: cmsText("smarter?", "App:ContactSection:contact")
						})
					] }),
					/* @__PURE__ */ jsx("p", { children: cmsText("Tell us what you want to connect, understand, or automate. Let’s engineer the right solution.", "App:ContactSection:contact") }),
					/* @__PURE__ */ jsxs("a", {
						href: cmsLink("mailto:info@neksoftconsultancy.com"),
						className: "email-link",
						children: [cmsText("info@neksoftconsultancy.com ", "App:ContactSection:contact"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })]
					}),
					/* @__PURE__ */ jsxs("span", {
						className: "mono contact-location",
						children: [/* @__PURE__ */ jsx(Globe2, { size: 14 }), cmsText(" NETHERLANDS · INDIA · GERMANY", "App:ContactSection:contact")]
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "reveal",
				children: /* @__PURE__ */ jsx(ManagedContactForm, {})
			})]
		})
	});
}
function Footer() {
	const location = useLocation();
	return /* @__PURE__ */ jsx("footer", {
		className: "site-footer dark",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "footer-top",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "footer-brand",
							children: [
								/* @__PURE__ */ jsx(Link, {
									to: cmsLink("/"),
									className: "brand",
									children: /* @__PURE__ */ jsx("img", {
										src: cmsAsset("/images/logo.webp"),
										width: "300",
										height: "59",
										alt: cmsText("NekSoft — Accelerating Your Growth", "App:Footer:site-footer dark")
									})
								}),
								/* @__PURE__ */ jsxs("p", { children: [
									cmsText("Connecting Things.", "App:Footer:site-footer dark"),
									/* @__PURE__ */ jsx("br", {}),
									cmsText("Creating Intelligence.", "App:Footer:site-footer dark")
								] }),
								/* @__PURE__ */ jsx(ZohoPartnerBadge, {})
							]
						}),
						/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("span", {
								className: "mono",
								children: cmsText("SOLUTIONS", "App:Footer:site-footer dark")
							}),
							cmsText(solutions.map((s) => /* @__PURE__ */ jsx(Link, {
								to: cmsLink(`/${s.slug}`),
								children: cmsText(s.short, "App:Footer:site-footer dark")
							}, s.slug)), "App:Footer:site-footer dark"),
							/* @__PURE__ */ jsxs(Link, {
								to: cmsLink("/solutions"),
								children: [cmsText("All services ", "App:Footer:site-footer dark"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 11 })]
							})
						] }),
						/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("span", {
								className: "mono",
								children: cmsText("COMPANY", "App:Footer:site-footer dark")
							}),
							/* @__PURE__ */ jsx(Link, {
								to: cmsLink("/industries"),
								children: cmsText("Industries", "App:Footer:site-footer dark")
							}),
							/* @__PURE__ */ jsx(Link, {
								to: cmsLink("/projects"),
								children: cmsText("Projects", "App:Footer:site-footer dark")
							}),
							/* @__PURE__ */ jsx(Link, {
								to: cmsLink("/approach"),
								children: cmsText("Our approach", "App:Footer:site-footer dark")
							}),
							/* @__PURE__ */ jsx(Link, {
								to: cmsLink("/about"),
								children: cmsText("About NekSoft", "App:Footer:site-footer dark")
							}),
							/* @__PURE__ */ jsx(Link, {
								to: cmsLink("/contact"),
								children: cmsText("Contact", "App:Footer:site-footer dark")
							})
						] }),
						/* @__PURE__ */ jsxs("div", {
							className: "footer-contact",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "mono",
									children: cmsText("START A CONVERSATION", "App:Footer:site-footer dark")
								}),
								/* @__PURE__ */ jsxs("a", {
									href: cmsLink("mailto:info@neksoftconsultancy.com"),
									children: [cmsText("info@neksoftconsultancy.com ", "App:Footer:site-footer dark"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 13 })]
								}),
								/* @__PURE__ */ jsx("a", {
									href: cmsLink("tel:+31648217892"),
									children: cmsText("+31 6 48217892", "App:Footer:site-footer dark")
								}),
								/* @__PURE__ */ jsx("span", { children: cmsText("Almere, Netherlands", "App:Footer:site-footer dark") })
							]
						})
					]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "footer-assurance",
					"aria-label": "Quality certifications and delivery presence",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "footer-assurance-heading",
							children: [/* @__PURE__ */ jsx(ShieldCheck, {
								size: 23,
								strokeWidth: 1.4
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
								className: "mono",
								children: cmsText("QUALITY · SECURITY · SERVICE MANAGEMENT", "App:Footer:footer-assurance")
							}), /* @__PURE__ */ jsx("p", { children: cmsText("Structured delivery. Lasting confidence.", "App:Footer:footer-assurance") })] })]
						}),
						/* @__PURE__ */ jsx("ul", {
							"aria-label": "Company certifications",
							children: [
								"ISO 9001",
								"ISO 27001",
								"ISO/IEC 20000-1"
							].map((label) => /* @__PURE__ */ jsx("li", { children: cmsText(label, "App:Footer:footer-assurance") }, label))
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "footer-assurance-presence",
							children: [
								cmsText("Netherlands headquarters", "App:Footer:footer-assurance"),
								/* @__PURE__ */ jsx("br", {}),
								cmsText("35 delivery professionals in India", "App:Footer:footer-assurance")
							]
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "footer-bottom",
					children: [
						/* @__PURE__ */ jsxs("span", { children: [
							cmsText("© ", "App:Footer:site-footer dark"),
							cmsText((/* @__PURE__ */ new Date()).getFullYear(), "App:Footer:site-footer dark"),
							cmsText(" NekSoft Consultancy Services.", "App:Footer:site-footer dark")
						] }),
						/* @__PURE__ */ jsx("span", {
							className: "mono",
							children: cmsText("CONNECTED BY DESIGN.", "App:Footer:site-footer dark")
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: cmsLink(location.pathname + "#top"),
							children: [cmsText("Back to top ", "App:Footer:site-footer dark"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 13 })]
						})
					]
				})
			]
		})
	});
}
function Home() {
	const content = useSiteContent();
	const sections = {
		hero: /* @__PURE__ */ jsx(PremiumHomeHero, {}),
		trust: /* @__PURE__ */ jsx(HomeTrustBar, {}),
		fisheries360: /* @__PURE__ */ jsxs("div", {
			id: "products",
			children: [/* @__PURE__ */ jsx(FisheriesFeature, {}), /* @__PURE__ */ jsx(ClassMentorFeature, {})]
		}),
		metrics: /* @__PURE__ */ jsx(CompanyMetrics, {}),
		manifesto: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(HomeManifesto, {}), /* @__PURE__ */ jsx(ApprovedIoT, {})] }),
		solutions: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(PremiumHomeSolutions, {}), /* @__PURE__ */ jsx(ApprovedDigital, {})] }),
		system: /* @__PURE__ */ jsx(SystemExperience, { home: true }),
		industries: /* @__PURE__ */ jsx(IndustryShowcase, {}),
		projects: /* @__PURE__ */ jsx(ProjectGallery, { featured: true }),
		approach: /* @__PURE__ */ jsx(HomeApproach, {}),
		people: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(HomePeople, {}), /* @__PURE__ */ jsx(ApprovedDelivery, {})] }),
		details: /* @__PURE__ */ jsx(PageDetailContent, { page: "home" }),
		contact: /* @__PURE__ */ jsx(ContactSection, {})
	};
	return /* @__PURE__ */ jsx("div", {
		className: "home-premium",
		children: (content?.homeLayout ?? homeSections.map((id) => ({
			id,
			visible: true
		}))).filter((item) => item.visible).map((item) => /* @__PURE__ */ jsx(React.Fragment, { children: sections[item.id] }, item.id))
	});
}
function PageHero({ label, title, description, visual, bottom }) {
	return /* @__PURE__ */ jsxs("section", {
		className: `page-hero dark ${visual ? "has-art" : ""}`,
		children: [/* @__PURE__ */ jsx("div", { className: "hero-grid" }), /* @__PURE__ */ jsxs("div", {
			className: "container page-hero-inner",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "page-hero-copy",
				children: [
					/* @__PURE__ */ jsx(Label, {
						light: true,
						children: cmsText(label, "App:PageHero:section")
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "page-title",
						children: cmsText(title, "App:PageHero:section")
					}),
					/* @__PURE__ */ jsx("p", { children: cmsText(description, "App:PageHero:section") }),
					/* @__PURE__ */ jsx(Button, {
						to: cmsLink(`/contact${bottom ? "?service=" + encodeURIComponent(bottom) : ""}`),
						children: cmsText("Discuss Your Project", "App:PageHero:section")
					})
				]
			}), cmsText(visual && /* @__PURE__ */ jsx("div", {
				className: "page-hero-art",
				children: cmsText(visual, "App:PageHero:section")
			}), "App:PageHero:section")]
		})]
	});
}
function SolutionPage({ index }) {
	const s = solutions[index];
	const I = icons[index];
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			label: s.title.toUpperCase(),
			title: cmsText(/* @__PURE__ */ jsxs(Fragment, { children: [cmsText(s.heading.split(". ")[0], "App:SolutionPage"), cmsText(s.heading.includes(". ") && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("span", {
				className: "blue-text",
				children: cmsText(s.heading.split(". ")[1], "App:SolutionPage")
			})] }), "App:SolutionPage")] }), "App:SolutionPage"),
			description: s.summary,
			visual: /* @__PURE__ */ jsx(Visual, { kind: index === 2 ? 3 : index }),
			bottom: s.title
		}),
		index === 0 && /* @__PURE__ */ jsx(ApprovedIoT, {}),
		/* @__PURE__ */ jsx("section", {
			className: "section",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container detail-intro reveal",
				children: [
					/* @__PURE__ */ jsx(Label, { children: cmsText("THE CHALLENGE", "App:SolutionPage:section") }),
					/* @__PURE__ */ jsx("h2", { children: cmsText(s.problem, "App:SolutionPage:section") }),
					/* @__PURE__ */ jsx("p", { children: cmsText("We start with the operational challenge and build the system around it. The right solution connects your infrastructure, information, and team.", "App:SolutionPage:section") })
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section detail-capabilities",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container capability-grid",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "reveal",
					children: [
						/* @__PURE__ */ jsx(Label, { children: cmsText("WHAT WE ENGINEER", "App:SolutionPage:section detail-capabilities") }),
						/* @__PURE__ */ jsxs("h2", { children: [
							cmsText("Purpose-built.", "App:SolutionPage:section detail-capabilities"),
							/* @__PURE__ */ jsx("br", {}),
							cmsText("Connected throughout.", "App:SolutionPage:section detail-capabilities")
						] }),
						/* @__PURE__ */ jsx("p", { children: cmsText(s.integration, "App:SolutionPage:section detail-capabilities") }),
						/* @__PURE__ */ jsx("div", {
							className: "capability-symbol",
							children: /* @__PURE__ */ jsx(I, {
								size: 120,
								strokeWidth: .5
							})
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "capability-list reveal",
					children: cmsText(s.capabilities.map((v, i) => /* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsxs("span", {
							className: "mono",
							children: [cmsText("0", "App:SolutionPage:section detail-capabilities"), cmsText(i + 1, "App:SolutionPage:section detail-capabilities")]
						}),
						/* @__PURE__ */ jsx("h3", { children: cmsText(v, "App:SolutionPage:section detail-capabilities") }),
						/* @__PURE__ */ jsx(ArrowUpRight, { size: 19 })
					] }, v)), "App:SolutionPage:section detail-capabilities")
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container deliverables-grid",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "reveal",
					children: [
						/* @__PURE__ */ jsx(Label, { children: cmsText("WHAT YOU RECEIVE", "App:SolutionPage:section") }),
						/* @__PURE__ */ jsxs("h2", { children: [
							cmsText("A complete system.", "App:SolutionPage:section"),
							/* @__PURE__ */ jsx("br", {}),
							cmsText("A clear handover.", "App:SolutionPage:section")
						] }),
						/* @__PURE__ */ jsx("ul", {
							className: "deliverables",
							children: cmsText(s.deliverables.map((d) => /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx(Check, { size: 17 }), cmsText(d, "App:SolutionPage:section")] }, d)), "App:SolutionPage:section")
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "example-block reveal",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "mono",
							children: cmsText("POTENTIAL APPLICATION", "App:SolutionPage:section")
						}),
						/* @__PURE__ */ jsx(I, {
							size: 46,
							strokeWidth: 1
						}),
						/* @__PURE__ */ jsx("h3", { children: cmsText(s.example, "App:SolutionPage:section") }),
						/* @__PURE__ */ jsx("p", { children: cmsText("This is an illustrative use case. Scope, feasibility, and acceptance criteria are agreed during discovery.", "App:SolutionPage:section") })
					]
				})]
			})
		}),
		cmsText(index === 1 && /* @__PURE__ */ jsx("section", {
			id: "automation",
			className: "section automation-detail dark",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container heading-row",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx(Label, {
						light: true,
						children: cmsText("INTELLIGENCE INTO ACTION", "App:SolutionPage:automation")
					}),
					/* @__PURE__ */ jsxs("h2", { children: [
						cmsText("Close the loop.", "App:SolutionPage:automation"),
						/* @__PURE__ */ jsx("br", {}),
						cmsText("Connect the workflow.", "App:SolutionPage:automation")
					] }),
					/* @__PURE__ */ jsx("p", { children: cmsText("Define the trigger, route the decision, and record the outcome. Automations can include a human approval whenever the operation requires it.", "App:SolutionPage:automation") })
				] }), /* @__PURE__ */ jsx(WorkflowVisual, {})]
			})
		}), "App:SolutionPage"),
		cmsText(index === 2 && /* @__PURE__ */ jsx(ZohoSolutions, {}), "App:SolutionPage"),
		/* @__PURE__ */ jsx(ServiceDetailExpansion, { slug: s.slug }),
		/* @__PURE__ */ jsx(ContactSection, {})
	] });
}
function SolutionsPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			label: "CONNECTED ENGINEERING",
			title: cmsText(/* @__PURE__ */ jsxs(Fragment, { children: [
				cmsText("The right systems.", "App:SolutionsPage"),
				/* @__PURE__ */ jsx("br", {}),
				/* @__PURE__ */ jsx(ApprovedDigital, {}),
				/* @__PURE__ */ jsx("span", {
					className: "blue-text",
					children: cmsText("Working together.", "App:SolutionsPage")
				})
			] }), "App:SolutionsPage"),
			description: "From a sensor in the field to an application in your team’s hands. Explore the capabilities that connect your operation."
		}),
		/* @__PURE__ */ jsx(SolutionsShowcase, { standalone: true }),
		/* @__PURE__ */ jsx(ServiceDirectory, {}),
		/* @__PURE__ */ jsx(SystemExperience, {}),
		/* @__PURE__ */ jsx(PageDetailContent, { page: "solutions" }),
		/* @__PURE__ */ jsx(ContactSection, {})
	] });
}
function IndustriesPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			label: "INDUSTRIES",
			title: cmsText(/* @__PURE__ */ jsxs(Fragment, { children: [
				cmsText("Built for the", "App:IndustriesPage"),
				/* @__PURE__ */ jsx("br", {}),
				/* @__PURE__ */ jsx("span", {
					className: "blue-text",
					children: cmsText("real world.", "App:IndustriesPage")
				})
			] }), "App:IndustriesPage"),
			description: "Connected technology begins with an understanding of the environment it serves. Explore practical applications across complex operations."
		}),
		cmsText(industries.map((s, i) => /* @__PURE__ */ jsx("section", {
			id: s.name.toLowerCase().replace(/ /g, "-"),
			className: `section industry-detail ${i % 2 ? "alternate" : ""}`,
			children: /* @__PURE__ */ jsxs("div", {
				className: "container industry-detail-grid",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "industry-detail-image reveal",
					children: [/* @__PURE__ */ jsx("img", {
						src: cmsAsset(`/images/${s.image}`),
						alt: cmsText(s.alt, "App:IndustriesPage:section"),
						width: "1400",
						height: "933",
						loading: "lazy"
					}), /* @__PURE__ */ jsxs("span", {
						className: "mono",
						children: [
							cmsText("0", "App:IndustriesPage:section"),
							cmsText(i + 1, "App:IndustriesPage:section"),
							cmsText(" / INDUSTRY APPLICATION", "App:IndustriesPage:section")
						]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "reveal",
					children: [
						/* @__PURE__ */ jsx(Label, { children: cmsText(s.name.toUpperCase(), "App:IndustriesPage:section") }),
						/* @__PURE__ */ jsx("h2", { children: cmsText(s.name === "Smart Facilities" ? "Buildings that work together." : s.name === "Manufacturing" ? "A clearer view of the production floor." : s.name === "Logistics" ? "Keep the operation connected." : "Connect the moving parts of retail.", "App:IndustriesPage:section") }),
						/* @__PURE__ */ jsx("p", {
							className: "industry-challenge",
							children: cmsText(s.challenge, "App:IndustriesPage:section")
						}),
						/* @__PURE__ */ jsx("p", { children: cmsText(s.solution, "App:IndustriesPage:section") }),
						/* @__PURE__ */ jsx("div", {
							className: "tags",
							children: cmsText(s.tags.map((t) => /* @__PURE__ */ jsx("span", { children: cmsText(t, "App:IndustriesPage:section") }, t)), "App:IndustriesPage:section")
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "industry-example",
							children: [/* @__PURE__ */ jsx("strong", { children: cmsText("Potential application", "App:IndustriesPage:section") }), cmsText(s.example, "App:IndustriesPage:section")]
						}),
						/* @__PURE__ */ jsx(IndustryContext, { name: s.name }),
						/* @__PURE__ */ jsx(Button, {
							to: cmsLink(`/contact?service=${encodeURIComponent(s.name)}`),
							children: cmsText("Discuss Your Operation", "App:IndustriesPage:section")
						})
					]
				})]
			})
		}, s.name)), "App:IndustriesPage"),
		/* @__PURE__ */ jsx(PageDetailContent, { page: "industries" }),
		/* @__PURE__ */ jsx(ContactSection, {})
	] });
}
function ApproachPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			label: "OUR APPROACH",
			title: cmsText(/* @__PURE__ */ jsxs(Fragment, { children: [
				cmsText("Complexity, considered.", "App:ApproachPage"),
				/* @__PURE__ */ jsx("br", {}),
				/* @__PURE__ */ jsx("span", {
					className: "blue-text",
					children: cmsText("Systems, connected.", "App:ApproachPage")
				})
			] }), "App:ApproachPage"),
			description: "A clear engineering process keeps the business challenge, technical decisions, and operational outcome connected from day one."
		}),
		/* @__PURE__ */ jsx(ApproachSection, { full: true }),
		/* @__PURE__ */ jsx("section", {
			className: "section dark principles-section",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container",
				children: [
					/* @__PURE__ */ jsx(Label, {
						light: true,
						children: cmsText("ENGINEERING PRINCIPLES", "App:ApproachPage:section dark principles-section")
					}),
					/* @__PURE__ */ jsxs("h2", { children: [
						cmsText("Built thoughtfully.", "App:ApproachPage:section dark principles-section"),
						/* @__PURE__ */ jsx("br", {}),
						cmsText("Designed to be operated.", "App:ApproachPage:section dark principles-section")
					] }),
					/* @__PURE__ */ jsx("div", {
						className: "principles",
						children: cmsText([
							[
								ShieldCheck,
								"Security by design",
								"We consider access, data handling, and system boundaries during architecture, alongside operational requirements."
							],
							[
								Layers,
								"Integration from the start",
								"Devices, applications, and existing business platforms are considered together to reduce disconnected workflows."
							],
							[
								Activity,
								"Clarity in delivery",
								"We agree on scope, acceptance criteria, handover, and support responsibilities so each stage has a clear purpose."
							]
						].map(([I, t, d]) => {
							return /* @__PURE__ */ jsxs("article", {
								className: "reveal",
								children: [
									/* @__PURE__ */ jsx(I, { strokeWidth: 1 }),
									/* @__PURE__ */ jsx("h3", { children: cmsText(String(t), "App:ApproachPage:section dark principles-section") }),
									/* @__PURE__ */ jsx("p", { children: cmsText(String(d), "App:ApproachPage:section dark principles-section") })
								]
							}, String(t));
						}), "App:ApproachPage:section dark principles-section")
					})
				]
			})
		}),
		/* @__PURE__ */ jsx(PageDetailContent, { page: "approach" }),
		/* @__PURE__ */ jsx(ContactSection, {})
	] });
}
function AboutPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(AboutExperience, {}),
		/* @__PURE__ */ jsx(ApprovedDelivery, {}),
		/* @__PURE__ */ jsx(PageDetailContent, { page: "about" }),
		/* @__PURE__ */ jsx(Offices, {}),
		/* @__PURE__ */ jsx(ContactSection, {})
	] });
}
function Offices() {
	return /* @__PURE__ */ jsx("section", {
		className: "section offices-section",
		id: "office-locations",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "section-heading reveal",
				children: [/* @__PURE__ */ jsx(Label, { children: cmsText("OUR LOCATIONS", "App:Offices:office-locations") }), /* @__PURE__ */ jsx("h2", { children: cmsText("Connected across borders.", "App:Offices:office-locations") })]
			}), /* @__PURE__ */ jsx("div", {
				className: "office-grid",
				children: cmsText(offices.map((o) => /* @__PURE__ */ jsxs("article", {
					className: "office reveal",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "mono",
							children: cmsText(o.role.toUpperCase(), "App:Offices:office-locations")
						}),
						/* @__PURE__ */ jsxs("h3", { children: [cmsText(o.name, "App:Offices:office-locations"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 20 })] }),
						/* @__PURE__ */ jsx("span", {
							className: "office-city",
							children: cmsText(o.city, "App:Offices:office-locations")
						}),
						/* @__PURE__ */ jsx("p", { children: cmsText(o.address, "App:Offices:office-locations") }),
						/* @__PURE__ */ jsx("a", {
							href: cmsLink(`tel:${o.tel}`),
							children: cmsText(o.phone, "App:Offices:office-locations")
						})
					]
				}, o.name)), "App:Offices:office-locations")
			})]
		})
	});
}
function ContactPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("div", { className: "contact-page-spacer dark" }),
		/* @__PURE__ */ jsx(ContactSection, { standalone: true }),
		/* @__PURE__ */ jsx(Offices, {}),
		/* @__PURE__ */ jsx(PageDetailContent, { page: "contact" }),
		/* @__PURE__ */ jsx("section", {
			className: "contact-alternative",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container",
				children: [/* @__PURE__ */ jsx(Mail, { size: 24 }), /* @__PURE__ */ jsxs("p", { children: [
					cmsText("Prefer a direct conversation?", "App:ContactPage:contact-alternative"),
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsxs("a", {
						href: cmsLink("mailto:info@neksoftconsultancy.com"),
						children: [cmsText("Email the NekSoft team ", "App:ContactPage:contact-alternative"), /* @__PURE__ */ jsx(ArrowUpRight, { size: 16 })]
					})
				] })]
			})
		})
	] });
}
function NotFound() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(PageHero, {
		label: "404 / PAGE NOT FOUND",
		title: cmsText(/* @__PURE__ */ jsx(Fragment, { children: cmsText("Let’s reconnect.", "App:NotFound") }), "App:NotFound"),
		description: "This page could not be found. Explore our solutions or contact the team to find what you need."
	}), /* @__PURE__ */ jsx("div", {
		className: "container section",
		children: /* @__PURE__ */ jsx(Button, {
			to: cmsLink("/"),
			children: cmsText("Return Home", "App:NotFound")
		})
	})] });
}
var metadata = {
	...serviceMetadata,
	"/": ["Connected Systems. Intelligent Operations.", "IoT platforms, AI-powered applications and automation systems. NekSoft connects the physical world with intelligent software."],
	"/solutions": ["IoT, AI & Software Solutions", "Explore connected device platforms, AI analytics, workflow automation and custom software engineering from NekSoft."],
	"/projects": ["Projects & Client Websites", "Explore eleven client websites with desktop and mobile previews across commerce, travel, education, hospitality and technology."],
	"/iot-solutions": ["IoT Platforms & Device Connectivity", "Connect equipment, integrate sensors and build operational monitoring platforms with NekSoft’s IoT engineering services."],
	"/ai-automation": ["AI & Intelligent Automation", "Turn operational data into practical insights and connected workflows with NekSoft’s AI and automation solutions."],
	"/custom-software": ["Custom Software & Applications", "Purpose-built web applications, mobile apps, dashboards and integrations for your operation."],
	"/industries": ["Connected Solutions for Real Operations", "Explore potential IoT and automation applications for manufacturing, logistics, smart facilities and retail."],
	"/approach": ["Our Engineering Approach", "Discover NekSoft’s process: discover, prototype, engineer, integrate and support."],
	"/about": ["About NekSoft Consultancy", "Meet the people behind NekSoft. Explore our team, purpose, IoT and software engineering capabilities, and international presence."],
	"/contact": ["Discuss Your Project", "Contact NekSoft to discuss IoT platforms, AI, automation and custom software engineering."]
};
function App() {
	const siteContent = useSiteContent();
	useEffect(() => {
		loadSiteContent();
	}, []);
	const rawLoc = useLocation();
	const loc = {
		...rawLoc,
		pathname: rawLoc.pathname.replace(/\/+$/, "") || "/"
	};
	setCmsRoute(loc.pathname);
	const [rootReady, setRootReady] = useState(false);
	useEffect(() => {
		setRootReady(true);
	}, []);
	useEffect(() => {
		if (matchMedia("(prefers-reduced-motion: reduce)").matches || !matchMedia("(pointer:fine)").matches) return;
		const lenis = new Lenis({
			duration: .9,
			smoothWheel: true,
			anchors: true
		});
		const onScroll = () => ScrollTrigger.update();
		lenis.on("scroll", onScroll);
		const tick = (time) => lenis.raf(time * 1e3);
		gsapWithCSS.ticker.add(tick);
		return () => {
			lenis.destroy();
			gsapWithCSS.ticker.remove(tick);
		};
	}, []);
	useLayoutEffect(() => {
		const managedPage = getSiteContent()?.pages[loc.pathname];
		const m = managedPage ? [managedPage.title, managedPage.description] : metadata[loc.pathname] || ["Page Not Found", "Explore NekSoft Consultancy Services."];
		document.title = `${m[0]} | NEKSOFT`;
		const setMeta = (attribute, key, value) => {
			let el = document.head.querySelector(`meta[${attribute}="${key}"]`);
			if (!el) {
				el = document.createElement("meta");
				el.setAttribute(attribute, key);
				document.head.append(el);
			}
			el.setAttribute("content", value);
		};
		setMeta("name", "description", m[1]);
		setMeta("property", "og:title", document.title);
		setMeta("property", "og:description", m[1]);
		setMeta("property", "og:url", window.location.origin + loc.pathname);
		let canonical = document.querySelector("link[rel=\"canonical\"]");
		if (!canonical) {
			canonical = document.createElement("link");
			canonical.setAttribute("rel", "canonical");
			document.head.append(canonical);
		}
		canonical.setAttribute("href", window.location.origin + loc.pathname);
		if (rootReady) document.getElementById("main-content")?.focus({ preventScroll: true });
		window.scrollTo({
			top: 0,
			behavior: "instant"
		});
		const timer = window.setTimeout(() => {
			if (loc.hash) document.getElementById(decodeURIComponent(loc.hash.slice(1)))?.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
			else if (loc.search.includes("focus=automation")) document.getElementById("automation")?.scrollIntoView({ behavior: "smooth" });
		}, 120);
		const motionAbort = new AbortController();
		const ctx = gsapWithCSS.context(() => {
			if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
				if (document.querySelector(".text-mask > span")) gsapWithCSS.from(".text-mask > span", {
					yPercent: 110,
					duration: 1.05,
					stagger: .12,
					ease: "power3.out",
					delay: rootReady ? .05 : .8
				});
				if (document.querySelector(".page-title")) gsapWithCSS.from(".page-title", {
					y: 35,
					opacity: 0,
					duration: .8,
					ease: "power3.out"
				});
				setupPageScrollMotion(motionAbort.signal);
			}
		});
		ScrollTrigger.refresh();
		return () => {
			clearTimeout(timer);
			motionAbort.abort();
			ctx.revert();
		};
	}, [
		loc.pathname,
		loc.hash,
		loc.search,
		siteContent
	]);
	useEffect(() => {
		const fine = matchMedia("(pointer:fine)").matches;
		const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (!fine || reduced) return;
		const move = (e) => {
			const el = e.target.closest(".magnetic");
			if (!el) return;
			const r = el.getBoundingClientRect();
			el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .09}px,${(e.clientY - r.top - r.height / 2) * .12}px)`;
		};
		const out = (e) => {
			const el = e.target.closest(".magnetic");
			if (el) el.style.transform = "";
		};
		document.addEventListener("mousemove", move);
		document.addEventListener("mouseout", out);
		return () => {
			document.removeEventListener("mousemove", move);
			document.removeEventListener("mouseout", out);
		};
	}, []);
	let content;
	const idx = solutions.findIndex((s) => "/" + s.slug === loc.pathname);
	const service = servicePages.find((s) => "/" + s.slug === loc.pathname);
	if (service) content = /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(ServicePage, { service }), /* @__PURE__ */ jsx(ContactSection, {})] });
	else if (idx >= 0) content = /* @__PURE__ */ jsx(SolutionPage, { index: idx });
	else switch (loc.pathname) {
		case "/":
			content = /* @__PURE__ */ jsx(Home, {});
			break;
		case "/solutions":
			content = /* @__PURE__ */ jsx(SolutionsPage, {});
			break;
		case "/projects":
			content = /* @__PURE__ */ jsxs(Fragment, { children: [
				/* @__PURE__ */ jsx(ProjectsHero, {}),
				/* @__PURE__ */ jsx(ProjectGallery, {}),
				/* @__PURE__ */ jsx(PageDetailContent, { page: "projects" }),
				/* @__PURE__ */ jsx(ContactSection, {})
			] });
			break;
		case "/industries":
			content = /* @__PURE__ */ jsx(IndustriesPage, {});
			break;
		case "/approach":
			content = /* @__PURE__ */ jsx(ApproachPage, {});
			break;
		case "/about":
			content = /* @__PURE__ */ jsx(AboutPage, {});
			break;
		case "/contact":
			content = /* @__PURE__ */ jsx(ContactPage, {});
			break;
		default: content = /* @__PURE__ */ jsx(NotFound, {});
	}
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("div", {
			className: "brand-loader",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ jsxs("span", { children: [cmsText("NEKSOFT", "App:App"), /* @__PURE__ */ jsx("span", {
				className: "blue-text",
				children: cmsText(".", "App:App")
			})] }), /* @__PURE__ */ jsx("i", {})]
		}),
		/* @__PURE__ */ jsx("a", {
			className: "skip-link",
			href: cmsLink("#main-content"),
			children: cmsText("Skip to content", "App:App")
		}),
		/* @__PURE__ */ jsx("div", { id: "top" }),
		/* @__PURE__ */ jsx(SiteHeader, {}),
		/* @__PURE__ */ jsx("main", {
			id: "main-content",
			tabIndex: -1,
			children: cmsText(content, "App:App")
		}, loc.pathname),
		/* @__PURE__ */ jsx(Footer, {}),
		/* @__PURE__ */ jsx("div", {
			className: "scroll-progress",
			"aria-hidden": "true"
		})
	] });
}
// src/entry-server.tsx
function render(path, content = null, collecting = false) {
	const previous = getSiteContent();
	setSiteContent(content);
	setContentCollection(path, collecting);
	try {
		return renderToString(/* @__PURE__ */ jsx(StaticRouter, {
			location: path,
			children: /* @__PURE__ */ jsx(App, {})
		}));
	} finally {
		setContentCollection(path, false);
		setSiteContent(previous);
	}
}
function getCmsSeed() {
	setContentCollection("/shared", true);
	for (const [slug, value] of Object.entries(serviceDepth)) {
		seedExtraText(value.scenarios, "DetailedExperiences:ServiceDetailExpansion:section depth-scenarios", "/" + slug);
		seedExtraText(value.planning, "DetailedExperiences:ServiceDetailExpansion:section depth-planning", "/" + slug);
		seedExtraText(value.brief, "DetailedExperiences:ServiceDetailExpansion:section depth-planning", "/" + slug);
		seedExtraText(value.faqs, "DetailedExperiences:DetailedFAQ:section depth-faq-section", "/" + slug);
	}
	for (const [route, value] of Object.entries(pageFAQs)) seedExtraText(value, "DetailedExperiences:DetailedFAQ:section depth-faq-section", route);
	for (const [source, value] of Object.entries({
		solutions,
		industries,
		stages,
		process,
		offices,
		servicePages,
		industryDepth,
		projectHighlights
	})) seedExtraText(value, source);
	setContentCollection("/shared", false);
	return {
		content: {
			schemaVersion: 1,
			text: {},
			images: {},
			links: {},
			pages: Object.fromEntries(Object.entries(metadata).map(([route, [title, description]]) => [route, {
				title,
				description
			}])),
			projects: projects.map((project) => ({
				...project,
				featured: featuredProjectIds.includes(project.id),
				visible: true,
				desktopImage: `/images/projects/${project.id}-desktop.jpg`,
				mobileImage: `/images/projects/${project.id}-mobile.jpg`,
				mobileWidth: 390,
				mobileHeight: 844
			})),
			team: team.map((member) => ({
				...member,
				image: `/images/team/${member.id}.webp`,
				visible: true
			})),
			metrics: [
				{
					value: "500",
					suffix: "+",
					label: "Projects delivered"
				},
				{
					value: "98",
					suffix: "%",
					label: "Client retention"
				},
				{
					value: "35",
					suffix: "",
					label: "India delivery professionals"
				},
				{
					value: "5",
					suffix: "+",
					label: "Years of experience"
				}
			],
			settings: {
				companyName: "NEKSOFT Consultancy Services",
				contactEmail: "info@neksoftconsultancy.com",
				phone: "+31 6 48217892",
				currency: "EUR"
			}
		},
		manifest: getContentManifest()
	};
}
export { getCmsSeed, render, serviceMetadata };
