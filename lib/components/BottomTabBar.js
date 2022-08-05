var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.BottomTabBar=void 0;var _react=_interopRequireWildcard(require("react"));var _reactNativeRemixIcon=_interopRequireDefault(require("react-native-remix-icon"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _reactNativeReanimated=_interopRequireWildcard(require("react-native-reanimated"));var _=require("./");var _native=require("styled-components/native");var _jsxFileName="/home/runner/work/neeto-ui-rn/neeto-ui-rn/src/components/BottomTabBar.js",_this=this;function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}function TabElement(_ref){var isFocused=_ref.isFocused,onPress=_ref.onPress,name=_ref.name,tabBarActiveTintColor=_ref.tabBarActiveTintColor,tabBarInactiveTintColor=_ref.tabBarInactiveTintColor,icon=_ref.icon,size=_ref.size;var theme=(0,_react.useContext)(_native.ThemeContext);var offset=(0,_reactNativeReanimated.useSharedValue)(isFocused?1:0);(0,_react.useEffect)(function(){if(isFocused){offset.value=(0,_reactNativeReanimated.withTiming)(1,{duration:500});}else{offset.value=(0,_reactNativeReanimated.withTiming)(0,{duration:0});}},[isFocused]);var animatedStyles=(0,_reactNativeReanimated.useAnimatedStyle)(function(){var _f=function _f(){return{opacity:(0,_reactNativeReanimated.interpolate)(offset.value,[0,1],[1,0],{extrapolateRight:_reactNativeReanimated.Extrapolation.CLAMP})};};_f._closure={interpolate:_reactNativeReanimated.interpolate,offset:offset,Extrapolation:{CLAMP:_reactNativeReanimated.Extrapolation.CLAMP}};_f.asString="function _f(){const{interpolate,offset,Extrapolation}=jsThis._closure;{return{opacity:interpolate(offset.value,[0,1],[1,0],{extrapolateRight:Extrapolation.CLAMP})};}}";_f.__workletHash=10271988492931;_f.__location="/home/runner/work/neeto-ui-rn/neeto-ui-rn/src/components/BottomTabBar.js (92:42)";_f.__optimalization=3;return _f;}());var animatedStyles2=(0,_reactNativeReanimated.useAnimatedStyle)(function(){var _f=function _f(){return{opacity:(0,_reactNativeReanimated.interpolate)(offset.value,[0,0.9,1],[0,0.5,1],{extrapolateRight:_reactNativeReanimated.Extrapolation.CLAMP}),transform:[{scale:(0,_reactNativeReanimated.interpolate)(offset.value,[0,0.8,1],[1,1.2,1],{extrapolateRight:_reactNativeReanimated.Extrapolation.CLAMP})}]};};_f._closure={interpolate:_reactNativeReanimated.interpolate,offset:offset,Extrapolation:{CLAMP:_reactNativeReanimated.Extrapolation.CLAMP}};_f.asString="function _f(){const{interpolate,offset,Extrapolation}=jsThis._closure;{return{opacity:interpolate(offset.value,[0,0.9,1],[0,0.5,1],{extrapolateRight:Extrapolation.CLAMP}),transform:[{scale:interpolate(offset.value,[0,0.8,1],[1,1.2,1],{extrapolateRight:Extrapolation.CLAMP})}]};}}";_f.__workletHash=9420491443699;_f.__location="/home/runner/work/neeto-ui-rn/neeto-ui-rn/src/components/BottomTabBar.js (100:43)";_f.__optimalization=3;return _f;}());return _react.default.createElement(_.Container,{flex:1,onTouchStart:onPress,alignItems:"center",borderTopWidth:1,borderColor:"background.grey200",__self:this,__source:{fileName:_jsxFileName,lineNumber:116,columnNumber:5}},_react.default.createElement(_.Container,{height:35,width:48,alignItems:"center",mb:1,__self:this,__source:{fileName:_jsxFileName,lineNumber:123,columnNumber:7}},_react.default.createElement(_reactNativeReanimated.default.View,{style:[styles.iconContainer,animatedStyles],__self:this,__source:{fileName:_jsxFileName,lineNumber:124,columnNumber:9}},_react.default.createElement(_reactNativeRemixIcon.default,{size:size,color:theme.colors.background.grey200,name:icon,__self:this,__source:{fileName:_jsxFileName,lineNumber:125,columnNumber:11}})),_react.default.createElement(_reactNativeReanimated.default.View,{style:[styles.iconContainer,animatedStyles2],__self:this,__source:{fileName:_jsxFileName,lineNumber:131,columnNumber:9}},_react.default.createElement(_reactNativeRemixIcon.default,{size:size,color:theme.colors.background.base,name:icon,__self:this,__source:{fileName:_jsxFileName,lineNumber:132,columnNumber:11}}))),_react.default.createElement(_.Typography,{color:isFocused?tabBarActiveTintColor:tabBarInactiveTintColor,fontFamily:"sf500",__self:this,__source:{fileName:_jsxFileName,lineNumber:136,columnNumber:7}},name));}var styles=_reactNative.StyleSheet.create({iconContainer:{position:"absolute",margin:10}});var BottomTabBar=function BottomTabBar(_ref2){var state=_ref2.state,descriptors=_ref2.descriptors,navigation=_ref2.navigation;return _react.default.createElement(_.Container,{flexDirection:"row",height:82,bg:"background.white",__self:_this,__source:{fileName:_jsxFileName,lineNumber:155,columnNumber:5}},state.routes.map(function(_ref3,index){var key=_ref3.key,name=_ref3.name;var options=descriptors[key].options;var isFocused=state.index===index;var _options$customTabBar=options==null?void 0:options.customTabBarProps,icon=_options$customTabBar.icon,size=_options$customTabBar.size;var tabBarActiveTintColor=options.tabBarActiveTintColor,tabBarInactiveTintColor=options.tabBarInactiveTintColor;var onPress=function onPress(){var event=navigation.emit({type:"tabPress",target:key,canPreventDefault:true});if(!isFocused&&!event.defaultPrevented){navigation.navigate({name:name,merge:true});}};return _react.default.createElement(TabElement,{key:index,onPress:onPress,isFocused:isFocused,name:name,tabBarActiveTintColor:tabBarActiveTintColor,tabBarInactiveTintColor:tabBarInactiveTintColor,icon:icon,size:size,__self:_this,__source:{fileName:_jsxFileName,lineNumber:174,columnNumber:11}});}));};exports.BottomTabBar=BottomTabBar;TabElement.propTypes={isFocused:_propTypes.default.boolean,onPress:_propTypes.default.func,name:_propTypes.default.string,tabBarActiveTintColor:_propTypes.default.string,tabBarInactiveTintColor:_propTypes.default.string,icon:_propTypes.default.string,size:_propTypes.default.number};BottomTabBar.propTypes={state:_propTypes.default.object,descriptors:_propTypes.default.object,navigation:_propTypes.default.object};