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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 112);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHROME_WEBSTORE_EXTENSION_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return INTERNAL_EXTENSION_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LOCAL_EXTENSION_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __DEBUG__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __PERFORMANCE_PROFILE__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return TREE_OPERATION_ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return TREE_OPERATION_REMOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return TREE_OPERATION_REORDER_CHILDREN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return TREE_OPERATION_UPDATE_TREE_BASE_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return TREE_OPERATION_UPDATE_ERRORS_OR_WARNINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return TREE_OPERATION_REMOVE_ROOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LOCAL_STORAGE_DEFAULT_TAB_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOCAL_STORAGE_FILTER_PREFERENCES_KEY; });
/* unused harmony export SESSION_STORAGE_LAST_SELECTION_KEY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LOCAL_STORAGE_PARSE_HOOK_NAMES_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return SESSION_STORAGE_RECORD_CHANGE_DESCRIPTIONS_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return SESSION_STORAGE_RELOAD_AND_PROFILE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOCAL_STORAGE_SHOULD_BREAK_ON_CONSOLE_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LOCAL_STORAGE_SHOULD_PATCH_CONSOLE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOCAL_STORAGE_SHOW_INLINE_WARNINGS_AND_ERRORS_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOCAL_STORAGE_TRACE_UPDATES_ENABLED_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LOCAL_STORAGE_HIDE_CONSOLE_LOGS_IN_STRICT_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return PROFILER_EXPORT_VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHANGE_LOG_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return UNSUPPORTED_VERSION_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return REACT_DEVTOOLS_WORKPLACE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return THEME_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return COMFORTABLE_LINE_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return COMPACT_LINE_HEIGHT; });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
const CHROME_WEBSTORE_EXTENSION_ID = 'fmkadmapgofadopljbjfkapdkoienihi';
const INTERNAL_EXTENSION_ID = 'dnjnjgbfilfphmojnmhliehogmojhclc';
const LOCAL_EXTENSION_ID = 'ikiahnapldjmdmpkmfhjdjilojjhgcbf'; // Flip this flag to true to enable verbose console debug logging.

const __DEBUG__ = false; // Flip this flag to true to enable performance.mark() and performance.measure() timings.

const __PERFORMANCE_PROFILE__ = false;
const TREE_OPERATION_ADD = 1;
const TREE_OPERATION_REMOVE = 2;
const TREE_OPERATION_REORDER_CHILDREN = 3;
const TREE_OPERATION_UPDATE_TREE_BASE_DURATION = 4;
const TREE_OPERATION_UPDATE_ERRORS_OR_WARNINGS = 5;
const TREE_OPERATION_REMOVE_ROOT = 6;
const LOCAL_STORAGE_DEFAULT_TAB_KEY = 'React::DevTools::defaultTab';
const LOCAL_STORAGE_FILTER_PREFERENCES_KEY = 'React::DevTools::componentFilters';
const SESSION_STORAGE_LAST_SELECTION_KEY = 'React::DevTools::lastSelection';
const LOCAL_STORAGE_PARSE_HOOK_NAMES_KEY = 'React::DevTools::parseHookNames';
const SESSION_STORAGE_RECORD_CHANGE_DESCRIPTIONS_KEY = 'React::DevTools::recordChangeDescriptions';
const SESSION_STORAGE_RELOAD_AND_PROFILE_KEY = 'React::DevTools::reloadAndProfile';
const LOCAL_STORAGE_SHOULD_BREAK_ON_CONSOLE_ERRORS = 'React::DevTools::breakOnConsoleErrors';
const LOCAL_STORAGE_SHOULD_PATCH_CONSOLE_KEY = 'React::DevTools::appendComponentStack';
const LOCAL_STORAGE_SHOW_INLINE_WARNINGS_AND_ERRORS_KEY = 'React::DevTools::showInlineWarningsAndErrors';
const LOCAL_STORAGE_TRACE_UPDATES_ENABLED_KEY = 'React::DevTools::traceUpdatesEnabled';
const LOCAL_STORAGE_HIDE_CONSOLE_LOGS_IN_STRICT_MODE = 'React::DevTools::hideConsoleLogsInStrictMode';
const PROFILER_EXPORT_VERSION = 5;
const CHANGE_LOG_URL = 'https://github.com/facebook/react/blob/main/packages/react-devtools/CHANGELOG.md';
const UNSUPPORTED_VERSION_URL = 'https://reactjs.org/blog/2019/08/15/new-react-devtools.html#how-do-i-get-the-old-version-back';
const REACT_DEVTOOLS_WORKPLACE_URL = 'https://fburl.com/react-devtools-workplace-group';
const THEME_STYLES = {
  light: {
    '--color-attribute-name': '#ef6632',
    '--color-attribute-name-not-editable': '#23272f',
    '--color-attribute-name-inverted': 'rgba(255, 255, 255, 0.7)',
    '--color-attribute-value': '#1a1aa6',
    '--color-attribute-value-inverted': '#ffffff',
    '--color-attribute-editable-value': '#1a1aa6',
    '--color-background': '#ffffff',
    '--color-background-hover': 'rgba(0, 136, 250, 0.1)',
    '--color-background-inactive': '#e5e5e5',
    '--color-background-invalid': '#fff0f0',
    '--color-background-selected': '#0088fa',
    '--color-button-background': '#ffffff',
    '--color-button-background-focus': '#ededed',
    '--color-button': '#5f6673',
    '--color-button-disabled': '#cfd1d5',
    '--color-button-active': '#0088fa',
    '--color-button-focus': '#23272f',
    '--color-button-hover': '#23272f',
    '--color-border': '#eeeeee',
    '--color-commit-did-not-render-fill': '#cfd1d5',
    '--color-commit-did-not-render-fill-text': '#000000',
    '--color-commit-did-not-render-pattern': '#cfd1d5',
    '--color-commit-did-not-render-pattern-text': '#333333',
    '--color-commit-gradient-0': '#37afa9',
    '--color-commit-gradient-1': '#63b19e',
    '--color-commit-gradient-2': '#80b393',
    '--color-commit-gradient-3': '#97b488',
    '--color-commit-gradient-4': '#abb67d',
    '--color-commit-gradient-5': '#beb771',
    '--color-commit-gradient-6': '#cfb965',
    '--color-commit-gradient-7': '#dfba57',
    '--color-commit-gradient-8': '#efbb49',
    '--color-commit-gradient-9': '#febc38',
    '--color-commit-gradient-text': '#000000',
    '--color-component-name': '#6a51b2',
    '--color-component-name-inverted': '#ffffff',
    '--color-component-badge-background': 'rgba(0, 0, 0, 0.1)',
    '--color-component-badge-background-inverted': 'rgba(255, 255, 255, 0.25)',
    '--color-component-badge-count': '#777d88',
    '--color-component-badge-count-inverted': 'rgba(255, 255, 255, 0.7)',
    '--color-console-error-badge-text': '#ffffff',
    '--color-console-error-background': '#fff0f0',
    '--color-console-error-border': '#ffd6d6',
    '--color-console-error-icon': '#eb3941',
    '--color-console-error-text': '#fe2e31',
    '--color-console-warning-badge-text': '#000000',
    '--color-console-warning-background': '#fffbe5',
    '--color-console-warning-border': '#fff5c1',
    '--color-console-warning-icon': '#f4bd00',
    '--color-console-warning-text': '#64460c',
    '--color-context-background': 'rgba(0,0,0,.9)',
    '--color-context-background-hover': 'rgba(255, 255, 255, 0.1)',
    '--color-context-background-selected': '#178fb9',
    '--color-context-border': '#3d424a',
    '--color-context-text': '#ffffff',
    '--color-context-text-selected': '#ffffff',
    '--color-dim': '#777d88',
    '--color-dimmer': '#cfd1d5',
    '--color-dimmest': '#eff0f1',
    '--color-error-background': 'hsl(0, 100%, 97%)',
    '--color-error-border': 'hsl(0, 100%, 92%)',
    '--color-error-text': '#ff0000',
    '--color-expand-collapse-toggle': '#777d88',
    '--color-link': '#0000ff',
    '--color-modal-background': 'rgba(255, 255, 255, 0.75)',
    '--color-bridge-version-npm-background': '#eff0f1',
    '--color-bridge-version-npm-text': '#000000',
    '--color-bridge-version-number': '#0088fa',
    '--color-primitive-hook-badge-background': '#e5e5e5',
    '--color-primitive-hook-badge-text': '#5f6673',
    '--color-record-active': '#fc3a4b',
    '--color-record-hover': '#3578e5',
    '--color-record-inactive': '#0088fa',
    '--color-resize-bar': '#eeeeee',
    '--color-resize-bar-active': '#dcdcdc',
    '--color-resize-bar-border': '#d1d1d1',
    '--color-resize-bar-dot': '#333333',
    '--color-scheduling-profiler-internal-module': '#d1d1d1',
    '--color-scheduling-profiler-internal-module-hover': '#c9c9c9',
    '--color-scheduling-profiler-internal-module-text': '#444',
    '--color-scheduling-profiler-native-event': '#ccc',
    '--color-scheduling-profiler-native-event-hover': '#aaa',
    '--color-scheduling-profiler-network-primary': '#fcf3dc',
    '--color-scheduling-profiler-network-primary-hover': '#f0e7d1',
    '--color-scheduling-profiler-network-secondary': '#efc457',
    '--color-scheduling-profiler-network-secondary-hover': '#e3ba52',
    '--color-scheduling-profiler-priority-background': '#f6f6f6',
    '--color-scheduling-profiler-priority-border': '#eeeeee',
    '--color-scheduling-profiler-user-timing': '#c9cacd',
    '--color-scheduling-profiler-user-timing-hover': '#93959a',
    '--color-scheduling-profiler-react-idle': '#d3e5f6',
    '--color-scheduling-profiler-react-idle-hover': '#c3d9ef',
    '--color-scheduling-profiler-react-render': '#9fc3f3',
    '--color-scheduling-profiler-react-render-hover': '#83afe9',
    '--color-scheduling-profiler-react-render-text': '#11365e',
    '--color-scheduling-profiler-react-commit': '#c88ff0',
    '--color-scheduling-profiler-react-commit-hover': '#b281d6',
    '--color-scheduling-profiler-react-commit-text': '#3e2c4a',
    '--color-scheduling-profiler-react-layout-effects': '#b281d6',
    '--color-scheduling-profiler-react-layout-effects-hover': '#9d71bd',
    '--color-scheduling-profiler-react-layout-effects-text': '#3e2c4a',
    '--color-scheduling-profiler-react-passive-effects': '#b281d6',
    '--color-scheduling-profiler-react-passive-effects-hover': '#9d71bd',
    '--color-scheduling-profiler-react-passive-effects-text': '#3e2c4a',
    '--color-scheduling-profiler-react-schedule': '#9fc3f3',
    '--color-scheduling-profiler-react-schedule-hover': '#2683E2',
    '--color-scheduling-profiler-react-suspense-rejected': '#f1cc14',
    '--color-scheduling-profiler-react-suspense-rejected-hover': '#ffdf37',
    '--color-scheduling-profiler-react-suspense-resolved': '#a6e59f',
    '--color-scheduling-profiler-react-suspense-resolved-hover': '#89d281',
    '--color-scheduling-profiler-react-suspense-unresolved': '#c9cacd',
    '--color-scheduling-profiler-react-suspense-unresolved-hover': '#93959a',
    '--color-scheduling-profiler-thrown-error': '#ee1638',
    '--color-scheduling-profiler-thrown-error-hover': '#da1030',
    '--color-scheduling-profiler-text-color': '#000000',
    '--color-scheduling-profiler-text-dim-color': '#ccc',
    '--color-scheduling-profiler-react-work-border': '#eeeeee',
    '--color-search-match': 'yellow',
    '--color-search-match-current': '#f7923b',
    '--color-selected-tree-highlight-active': 'rgba(0, 136, 250, 0.1)',
    '--color-selected-tree-highlight-inactive': 'rgba(0, 0, 0, 0.05)',
    '--color-scroll-caret': 'rgba(150, 150, 150, 0.5)',
    '--color-tab-selected-border': '#0088fa',
    '--color-text': '#000000',
    '--color-text-invalid': '#ff0000',
    '--color-text-selected': '#ffffff',
    '--color-toggle-background-invalid': '#fc3a4b',
    '--color-toggle-background-on': '#0088fa',
    '--color-toggle-background-off': '#cfd1d5',
    '--color-toggle-text': '#ffffff',
    '--color-warning-background': '#fb3655',
    '--color-warning-background-hover': '#f82042',
    '--color-warning-text-color': '#ffffff',
    '--color-warning-text-color-inverted': '#fd4d69',
    // The styles below should be kept in sync with 'root.css'
    // They are repeated there because they're used by e.g. tooltips or context menus
    // which get rendered outside of the DOM subtree (where normal theme/styles are written).
    '--color-scroll-thumb': '#c2c2c2',
    '--color-scroll-track': '#fafafa',
    '--color-tooltip-background': 'rgba(0, 0, 0, 0.9)',
    '--color-tooltip-text': '#ffffff'
  },
  dark: {
    '--color-attribute-name': '#9d87d2',
    '--color-attribute-name-not-editable': '#ededed',
    '--color-attribute-name-inverted': '#282828',
    '--color-attribute-value': '#cedae0',
    '--color-attribute-value-inverted': '#ffffff',
    '--color-attribute-editable-value': 'yellow',
    '--color-background': '#282c34',
    '--color-background-hover': 'rgba(255, 255, 255, 0.1)',
    '--color-background-inactive': '#3d424a',
    '--color-background-invalid': '#5c0000',
    '--color-background-selected': '#178fb9',
    '--color-button-background': '#282c34',
    '--color-button-background-focus': '#3d424a',
    '--color-button': '#afb3b9',
    '--color-button-active': '#61dafb',
    '--color-button-disabled': '#4f5766',
    '--color-button-focus': '#a2e9fc',
    '--color-button-hover': '#ededed',
    '--color-border': '#3d424a',
    '--color-commit-did-not-render-fill': '#777d88',
    '--color-commit-did-not-render-fill-text': '#000000',
    '--color-commit-did-not-render-pattern': '#666c77',
    '--color-commit-did-not-render-pattern-text': '#ffffff',
    '--color-commit-gradient-0': '#37afa9',
    '--color-commit-gradient-1': '#63b19e',
    '--color-commit-gradient-2': '#80b393',
    '--color-commit-gradient-3': '#97b488',
    '--color-commit-gradient-4': '#abb67d',
    '--color-commit-gradient-5': '#beb771',
    '--color-commit-gradient-6': '#cfb965',
    '--color-commit-gradient-7': '#dfba57',
    '--color-commit-gradient-8': '#efbb49',
    '--color-commit-gradient-9': '#febc38',
    '--color-commit-gradient-text': '#000000',
    '--color-component-name': '#61dafb',
    '--color-component-name-inverted': '#282828',
    '--color-component-badge-background': 'rgba(255, 255, 255, 0.25)',
    '--color-component-badge-background-inverted': 'rgba(0, 0, 0, 0.25)',
    '--color-component-badge-count': '#8f949d',
    '--color-component-badge-count-inverted': 'rgba(255, 255, 255, 0.7)',
    '--color-console-error-badge-text': '#000000',
    '--color-console-error-background': '#290000',
    '--color-console-error-border': '#5c0000',
    '--color-console-error-icon': '#eb3941',
    '--color-console-error-text': '#fc7f7f',
    '--color-console-warning-badge-text': '#000000',
    '--color-console-warning-background': '#332b00',
    '--color-console-warning-border': '#665500',
    '--color-console-warning-icon': '#f4bd00',
    '--color-console-warning-text': '#f5f2ed',
    '--color-context-background': 'rgba(255,255,255,.95)',
    '--color-context-background-hover': 'rgba(0, 136, 250, 0.1)',
    '--color-context-background-selected': '#0088fa',
    '--color-context-border': '#eeeeee',
    '--color-context-text': '#000000',
    '--color-context-text-selected': '#ffffff',
    '--color-dim': '#8f949d',
    '--color-dimmer': '#777d88',
    '--color-dimmest': '#4f5766',
    '--color-error-background': '#200',
    '--color-error-border': '#900',
    '--color-error-text': '#f55',
    '--color-expand-collapse-toggle': '#8f949d',
    '--color-link': '#61dafb',
    '--color-modal-background': 'rgba(0, 0, 0, 0.75)',
    '--color-bridge-version-npm-background': 'rgba(0, 0, 0, 0.25)',
    '--color-bridge-version-npm-text': '#ffffff',
    '--color-bridge-version-number': 'yellow',
    '--color-primitive-hook-badge-background': 'rgba(0, 0, 0, 0.25)',
    '--color-primitive-hook-badge-text': 'rgba(255, 255, 255, 0.7)',
    '--color-record-active': '#fc3a4b',
    '--color-record-hover': '#a2e9fc',
    '--color-record-inactive': '#61dafb',
    '--color-resize-bar': '#282c34',
    '--color-resize-bar-active': '#31363f',
    '--color-resize-bar-border': '#3d424a',
    '--color-resize-bar-dot': '#cfd1d5',
    '--color-scheduling-profiler-internal-module': '#303542',
    '--color-scheduling-profiler-internal-module-hover': '#363b4a',
    '--color-scheduling-profiler-internal-module-text': '#7f8899',
    '--color-scheduling-profiler-native-event': '#b2b2b2',
    '--color-scheduling-profiler-native-event-hover': '#949494',
    '--color-scheduling-profiler-network-primary': '#fcf3dc',
    '--color-scheduling-profiler-network-primary-hover': '#e3dbc5',
    '--color-scheduling-profiler-network-secondary': '#efc457',
    '--color-scheduling-profiler-network-secondary-hover': '#d6af4d',
    '--color-scheduling-profiler-priority-background': '#1d2129',
    '--color-scheduling-profiler-priority-border': '#282c34',
    '--color-scheduling-profiler-user-timing': '#c9cacd',
    '--color-scheduling-profiler-user-timing-hover': '#93959a',
    '--color-scheduling-profiler-react-idle': '#3d485b',
    '--color-scheduling-profiler-react-idle-hover': '#465269',
    '--color-scheduling-profiler-react-render': '#2683E2',
    '--color-scheduling-profiler-react-render-hover': '#1a76d4',
    '--color-scheduling-profiler-react-render-text': '#11365e',
    '--color-scheduling-profiler-react-commit': '#731fad',
    '--color-scheduling-profiler-react-commit-hover': '#611b94',
    '--color-scheduling-profiler-react-commit-text': '#e5c1ff',
    '--color-scheduling-profiler-react-layout-effects': '#611b94',
    '--color-scheduling-profiler-react-layout-effects-hover': '#51167a',
    '--color-scheduling-profiler-react-layout-effects-text': '#e5c1ff',
    '--color-scheduling-profiler-react-passive-effects': '#611b94',
    '--color-scheduling-profiler-react-passive-effects-hover': '#51167a',
    '--color-scheduling-profiler-react-passive-effects-text': '#e5c1ff',
    '--color-scheduling-profiler-react-schedule': '#2683E2',
    '--color-scheduling-profiler-react-schedule-hover': '#1a76d4',
    '--color-scheduling-profiler-react-suspense-rejected': '#f1cc14',
    '--color-scheduling-profiler-react-suspense-rejected-hover': '#e4c00f',
    '--color-scheduling-profiler-react-suspense-resolved': '#a6e59f',
    '--color-scheduling-profiler-react-suspense-resolved-hover': '#89d281',
    '--color-scheduling-profiler-react-suspense-unresolved': '#c9cacd',
    '--color-scheduling-profiler-react-suspense-unresolved-hover': '#93959a',
    '--color-scheduling-profiler-thrown-error': '#fb3655',
    '--color-scheduling-profiler-thrown-error-hover': '#f82042',
    '--color-scheduling-profiler-text-color': '#282c34',
    '--color-scheduling-profiler-text-dim-color': '#555b66',
    '--color-scheduling-profiler-react-work-border': '#3d424a',
    '--color-search-match': 'yellow',
    '--color-search-match-current': '#f7923b',
    '--color-selected-tree-highlight-active': 'rgba(23, 143, 185, 0.15)',
    '--color-selected-tree-highlight-inactive': 'rgba(255, 255, 255, 0.05)',
    '--color-scroll-caret': '#4f5766',
    '--color-shadow': 'rgba(0, 0, 0, 0.5)',
    '--color-tab-selected-border': '#178fb9',
    '--color-text': '#ffffff',
    '--color-text-invalid': '#ff8080',
    '--color-text-selected': '#ffffff',
    '--color-toggle-background-invalid': '#fc3a4b',
    '--color-toggle-background-on': '#178fb9',
    '--color-toggle-background-off': '#777d88',
    '--color-toggle-text': '#ffffff',
    '--color-warning-background': '#ee1638',
    '--color-warning-background-hover': '#da1030',
    '--color-warning-text-color': '#ffffff',
    '--color-warning-text-color-inverted': '#ee1638',
    // The styles below should be kept in sync with 'root.css'
    // They are repeated there because they're used by e.g. tooltips or context menus
    // which get rendered outside of the DOM subtree (where normal theme/styles are written).
    '--color-scroll-thumb': '#afb3b9',
    '--color-scroll-track': '#313640',
    '--color-tooltip-background': 'rgba(255, 255, 255, 0.95)',
    '--color-tooltip-text': '#000000'
  },
  compact: {
    '--font-size-monospace-small': '9px',
    '--font-size-monospace-normal': '11px',
    '--font-size-monospace-large': '15px',
    '--font-size-sans-small': '10px',
    '--font-size-sans-normal': '12px',
    '--font-size-sans-large': '14px',
    '--line-height-data': '18px'
  },
  comfortable: {
    '--font-size-monospace-small': '10px',
    '--font-size-monospace-normal': '13px',
    '--font-size-monospace-large': '17px',
    '--font-size-sans-small': '12px',
    '--font-size-sans-normal': '14px',
    '--font-size-sans-large': '16px',
    '--line-height-data': '22px'
  }
}; // HACK
//
// Sometimes the inline target is rendered before root styles are applied,
// which would result in e.g. NaN itemSize being passed to react-window list.

const COMFORTABLE_LINE_HEIGHT = parseInt(THEME_STYLES.comfortable['--line-height-data'], 10);
const COMPACT_LINE_HEIGHT = parseInt(THEME_STYLES.compact['--line-height-data'], 10);


/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);


const ports = {};
const IS_FIREFOX = navigator.userAgent.indexOf('Firefox') >= 0;

chrome.runtime.onConnect.addListener(function (port) {
  let tab = null;
  let name = null;

  if (isNumeric(port.name)) {
    tab = port.name;
    name = 'devtools';
    installContentScript(+port.name);
  } else {
    tab = port.sender.tab.id;
    name = 'content-script';
  }

  if (!ports[tab]) {
    ports[tab] = {
      devtools: null,
      'content-script': null
    };
  }

  ports[tab][name] = port;

  if (ports[tab].devtools && ports[tab]['content-script']) {
    doublePipe(ports[tab].devtools, ports[tab]['content-script']);
  }
});

function isNumeric(str) {
  return +str + '' === str;
}

function installContentScript(tabId) {
  chrome.tabs.executeScript(tabId, {
    file: '/build/contentScript.js'
  }, function () {});
}

function doublePipe(one, two) {
  one.onMessage.addListener(lOne);

  function lOne(message) {
    two.postMessage(message);
  }

  two.onMessage.addListener(lTwo);

  function lTwo(message) {
    one.postMessage(message);
  }

  function shutdown() {
    one.onMessage.removeListener(lOne);
    two.onMessage.removeListener(lTwo);
    one.disconnect();
    two.disconnect();
  }

  one.onDisconnect.addListener(shutdown);
  two.onDisconnect.addListener(shutdown);
}

function setIconAndPopup(reactBuildType, tabId) {
  chrome.browserAction.setIcon({
    tabId: tabId,
    path: {
      '16': 'icons/16-' + reactBuildType + '.png',
      '32': 'icons/32-' + reactBuildType + '.png',
      '48': 'icons/48-' + reactBuildType + '.png',
      '128': 'icons/128-' + reactBuildType + '.png'
    }
  });
  chrome.browserAction.setPopup({
    tabId: tabId,
    popup: 'popups/' + reactBuildType + '.html'
  });
}

function isRestrictedBrowserPage(url) {
  return !url || new URL(url).protocol === 'chrome:';
}

function checkAndHandleRestrictedPageIfSo(tab) {
  if (tab && isRestrictedBrowserPage(tab.url)) {
    setIconAndPopup('restricted', tab.id);
  }
} // update popup page of any existing open tabs, if they are restricted browser pages.
// we can't update for any other types (prod,dev,outdated etc)
// as the content script needs to be injected at document_start itself for those kinds of detection
// TODO: Show a different popup page(to reload current page probably) for old tabs, opened before the extension is installed


if (!IS_FIREFOX) {
  chrome.tabs.query({}, tabs => tabs.forEach(checkAndHandleRestrictedPageIfSo));
  chrome.tabs.onCreated.addListener((tabId, changeInfo, tab) => checkAndHandleRestrictedPageIfSo(tab));
} // Listen to URL changes on the active tab and update the DevTools icon.


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (IS_FIREFOX) {
    // We don't properly detect protected URLs in Firefox at the moment.
    // However we can reset the DevTools icon to its loading state when the URL changes.
    // It will be updated to the correct icon by the onMessage callback below.
    if (tab.active && changeInfo.status === 'loading') {
      setIconAndPopup('disabled', tabId);
    }
  } else {
    // Don't reset the icon to the loading state for Chrome or Edge.
    // The onUpdated callback fires more frequently for these browsers,
    // often after onMessage has been called.
    checkAndHandleRestrictedPageIfSo(tab);
  }
});
chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
  if (request === _constants__WEBPACK_IMPORTED_MODULE_0__[/* EXTENSION_INSTALL_CHECK */ "c"]) {
    sendResponse(true);
    chrome.runtime.sendMessage(_constants__WEBPACK_IMPORTED_MODULE_0__[/* SHOW_DUPLICATE_EXTENSION_WARNING */ "d"]);
  }
});
chrome.runtime.onMessage.addListener((request, sender) => {
  var _request$payload, _ports$id;

  const tab = sender.tab;

  if (tab) {
    const id = tab.id; // This is sent from the hook content script.
    // It tells us a renderer has attached.

    if (request.hasDetectedReact) {
      // We use browserAction instead of pageAction because this lets us
      // display a custom default popup when React is *not* detected.
      // It is specified in the manifest.
      setIconAndPopup(request.reactBuildType, id);
    } else {
      switch ((_request$payload = request.payload) === null || _request$payload === void 0 ? void 0 : _request$payload.type) {
        case 'fetch-file-with-cache-complete':
        case 'fetch-file-with-cache-error':
          // Forward the result of fetch-in-page requests back to the extension.
          const devtools = (_ports$id = ports[id]) === null || _ports$id === void 0 ? void 0 : _ports$id.devtools;

          if (devtools) {
            devtools.postMessage(request);
          }

          break;
      }
    }
  }
});

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CURRENT_EXTENSION_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EXTENSION_INSTALL_CHECK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SHOW_DUPLICATE_EXTENSION_WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EXTENSION_INSTALLATION_TYPE; });
/* harmony import */ var react_devtools_shared_src_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

const CURRENT_EXTENSION_ID = chrome.runtime.id;
const EXTENSION_INSTALL_CHECK = 'extension-install-check';
const SHOW_DUPLICATE_EXTENSION_WARNING = 'show-duplicate-extension-warning';
const EXTENSION_INSTALLATION_TYPE = CURRENT_EXTENSION_ID === react_devtools_shared_src_constants__WEBPACK_IMPORTED_MODULE_0__[/* CHROME_WEBSTORE_EXTENSION_ID */ "b"] ? 'public' : CURRENT_EXTENSION_ID === react_devtools_shared_src_constants__WEBPACK_IMPORTED_MODULE_0__[/* INTERNAL_EXTENSION_ID */ "e"] ? 'internal' : CURRENT_EXTENSION_ID === react_devtools_shared_src_constants__WEBPACK_IMPORTED_MODULE_0__[/* LOCAL_EXTENSION_ID */ "f"] ? 'local' : 'unknown';

/***/ })

/******/ });