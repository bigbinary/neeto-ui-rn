var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.ParentView=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _propTypes=_interopRequireDefault(require("prop-types"));var _native=require("styled-components/native");var _reactNativeKeyboardAwareScrollView=require("react-native-keyboard-aware-scroll-view");var _=require("./");var _excluded=["barStyle","children"];var _this=this,_jsxFileName="/Users/runner/work/neeto-ui-rn/neeto-ui-rn/src/components/ParentView.js";function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}var ParentView=function ParentView(_ref){var _ref$barStyle=_ref.barStyle,barStyle=_ref$barStyle===void 0?"light-content":_ref$barStyle,children=_ref.children,rest=(0,_objectWithoutProperties2.default)(_ref,_excluded);var theme=(0,_react.useContext)(_native.ThemeContext);var statusBarColors={default:theme.colors.background.white,"dark-content":theme.colors.background.white,"light-content":theme.colors.background.base};var statusBarColor=statusBarColors[barStyle]||statusBarColors["default"];return _react.default.createElement(_reactNativeKeyboardAwareScrollView.KeyboardAwareScrollView,{contentContainerStyle:styles.scrollView,showsVerticalScrollIndicator:false,style:{backgroundColor:statusBarColor},__self:_this,__source:{fileName:_jsxFileName,lineNumber:25,columnNumber:5}},_react.default.createElement(_.Container,{backgroundColor:statusBarColor,__self:_this,__source:{fileName:_jsxFileName,lineNumber:30,columnNumber:7}},_react.default.createElement(_reactNative.SafeAreaView,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:31,columnNumber:9}},_react.default.createElement(_reactNative.StatusBar,{barStyle:barStyle,__self:_this,__source:{fileName:_jsxFileName,lineNumber:32,columnNumber:11}}))),_react.default.createElement(_.Container,(0,_extends2.default)({flex:1},rest,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:35,columnNumber:7}}),children));};exports.ParentView=ParentView;ParentView.propTypes={barStyle:_propTypes.default.string,children:_propTypes.default.string};var styles=_reactNative.StyleSheet.create({scrollView:{flexGrow:1}});