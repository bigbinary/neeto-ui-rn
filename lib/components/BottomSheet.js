var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.TouchableOpacity=exports.BottomSheet=void 0;var _taggedTemplateLiteralLoose2=_interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));var React=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _styledSystem=require("styled-system");var _native=_interopRequireDefault(require("styled-components/native"));var _propTypes=_interopRequireDefault(require("prop-types"));var _=require("./");var _reactNativeModal=_interopRequireDefault(require("react-native-modal"));var _templateObject,_this=this,_jsxFileName="/Users/runner/work/neeto-ui-rn/neeto-ui-rn/src/components/BottomSheet.js";function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}var TouchableOpacity=_native.default.TouchableOpacity(_templateObject||(_templateObject=(0,_taggedTemplateLiteralLoose2.default)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),_styledSystem.buttonStyle,_styledSystem.flexbox,_styledSystem.space,_styledSystem.border,_styledSystem.layout,_styledSystem.color);exports.TouchableOpacity=TouchableOpacity;var Border=function Border(){return React.createElement(_.Container,{bg:"border.primary",height:"1px",width:"100%",__self:_this,__source:{fileName:_jsxFileName,lineNumber:26,columnNumber:10}});};var Title=function Title(_ref){var title=_ref.title,bg=_ref.bg,hide=_ref.hide;var touchY;return React.createElement(React.Fragment,null,React.createElement(_.Container,{bg:bg,onTouchStart:function onTouchStart(e){return touchY=e.nativeEvent.pageY;},onTouchEnd:function onTouchEnd(e){if(e.nativeEvent.pageY-touchY>20)hide();},alignItems:"center",py:20,borderRadius:20,style:{},__self:_this,__source:{fileName:_jsxFileName,lineNumber:33,columnNumber:7}},React.createElement(_.Typography,{color:"font.secondary",fontFamily:"inter700",textStyle:"subtext",__self:_this,__source:{fileName:_jsxFileName,lineNumber:45,columnNumber:9}},title)),React.createElement(Border,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:53,columnNumber:7}}));};Title.propTypes={title:_propTypes.default.string,hide:_propTypes.default.func,bg:_propTypes.default.string};var ContentRow=React.memo(function(_ref2){var label=_ref2.label,onPress=_ref2.onPress,bg=_ref2.bg,isSelected=_ref2.isSelected;return React.createElement(React.Fragment,null,React.createElement(TouchableOpacity,{alignItems:"center",bg:bg,py:12,borderRadius:20,onPress:onPress,__self:_this,__source:{fileName:_jsxFileName,lineNumber:67,columnNumber:7}},React.createElement(_.Typography,{textStyle:"body",fontFamily:isSelected?"inter700":"inter400",__self:_this,__source:{fileName:_jsxFileName,lineNumber:74,columnNumber:9}},label)),React.createElement(Border,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:81,columnNumber:7}}));});ContentRow.displayName="ContentRow";ContentRow.propTypes={label:_propTypes.default.string,onPress:_propTypes.default.func,bg:_propTypes.default.string,isSelected:_propTypes.default.bool};var BottomSheet=function BottomSheet(_ref3){var data=_ref3.data,title=_ref3.title,hide=_ref3.hide,isVisible=_ref3.isVisible,onItemPress=_ref3.onItemPress,selectedItemIndex=_ref3.selectedItemIndex,bg=_ref3.bg;return React.createElement(_reactNativeModal.default,{style:styles.modalStyle,isVisible:isVisible,onBackdropPress:hide,useNativeDriver:true,hideModalContentWhileAnimating:true,__self:_this,__source:{fileName:_jsxFileName,lineNumber:125,columnNumber:5}},React.createElement(_.Container,{bg:bg,flex:1,borderRadius:20,__self:_this,__source:{fileName:_jsxFileName,lineNumber:132,columnNumber:7}},React.createElement(_.Container,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:133,columnNumber:9}},React.createElement(Title,{bg:bg,title:title,hide:hide,__self:_this,__source:{fileName:_jsxFileName,lineNumber:134,columnNumber:11}}),React.createElement(_reactNative.FlatList,{contentContainerStyle:styles.flatListContentContainerStyle,initialNumToRender:data.length,data:data,renderItem:function renderItem(_ref4){var item=_ref4.item,index=_ref4.index;return React.createElement(ContentRow,{isSelected:index===selectedItemIndex,bg:bg,key:index,onPress:function onPress(){hide();onItemPress(index);},label:item,__self:_this,__source:{fileName:_jsxFileName,lineNumber:141,columnNumber:17}});},keyExtractor:function keyExtractor(item,index){return index;},__self:_this,__source:{fileName:_jsxFileName,lineNumber:135,columnNumber:11}}))));};exports.BottomSheet=BottomSheet;BottomSheet.defaultProps={bg:"background.primary"};BottomSheet.propTypes={data:_propTypes.default.array,title:_propTypes.default.string,isVisible:_propTypes.default.bool,hide:_propTypes.default.func,onItemPress:_propTypes.default.func,selectedItemIndex:_propTypes.default.number,bg:_propTypes.default.string};var styles=_reactNative.StyleSheet.create({flatListContentContainerStyle:{paddingBottom:40},modalStyle:{margin:0,alignItems:"flex-end",flexDirection:"row"}});