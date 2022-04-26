var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.Select=void 0;var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _react=_interopRequireWildcard(require("react"));var _reactNativeRemixIcon=_interopRequireDefault(require("react-native-remix-icon"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _native=require("styled-components/native");var _=require("./");var _excluded=["options","label","value","placeholder","onSelect","isLoading","isSearchable","labelStyle","containerStyle","dropdownContainerStyle","itemContainerStyle","itemTextStyle","selectedItemContainerStyle","selectedItemTextStyle"];var _this=this,_jsxFileName="/Users/runner/work/neeto-ui-rn/neeto-ui-rn/src/components/Select.js";function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}var DropdownItem=function DropdownItem(_ref){var item=_ref.item,index=_ref.index,isSelectedItem=_ref.isSelectedItem,defaultDropdownItemHeight=_ref.defaultDropdownItemHeight,onPress=_ref.onPress,itemContainerStyle=_ref.itemContainerStyle,selectedItemContainerStyle=_ref.selectedItemContainerStyle,itemTextStyle=_ref.itemTextStyle,selectedItemTextStyle=_ref.selectedItemTextStyle;return _react.default.createElement(_.Touchable,{key:index,bg:isSelectedItem?"background.base":"background.white",onPress:onPress,__self:_this,__source:{fileName:_jsxFileName,lineNumber:20,columnNumber:3}},_react.default.createElement(_.Container,(0,_extends2.default)({height:defaultDropdownItemHeight,p:2},itemContainerStyle,isSelectedItem&&selectedItemContainerStyle,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:25,columnNumber:5}}),_react.default.createElement(_.Typography,(0,_extends2.default)({fontFamily:"inter400",fontSize:"s",color:isSelectedItem?"font.white":"font.grey"},itemTextStyle,isSelectedItem&&selectedItemTextStyle,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:31,columnNumber:7}}),item==null?void 0:item.label)));};DropdownItem.propTypes={item:_propTypes.default.object,index:_propTypes.default.number,isSelectedItem:_propTypes.default.bool,defaultDropdownItemHeight:_propTypes.default.number,onPress:_propTypes.default.func,itemContainerStyle:_propTypes.default.object,selectedItemContainerStyle:_propTypes.default.object,itemTextStyle:_propTypes.default.object,selectedItemTextStyle:_propTypes.default.object};var Select=function Select(_ref2){var _options$selectedItem;var options=_ref2.options,label=_ref2.label,value=_ref2.value,placeholder=_ref2.placeholder,onSelect=_ref2.onSelect,isLoading=_ref2.isLoading,isSearchable=_ref2.isSearchable,labelStyle=_ref2.labelStyle,containerStyle=_ref2.containerStyle,dropdownContainerStyle=_ref2.dropdownContainerStyle,itemContainerStyle=_ref2.itemContainerStyle,itemTextStyle=_ref2.itemTextStyle,selectedItemContainerStyle=_ref2.selectedItemContainerStyle,selectedItemTextStyle=_ref2.selectedItemTextStyle,rest=(0,_objectWithoutProperties2.default)(_ref2,_excluded);var _useState=(0,_react.useState)(false),_useState2=(0,_slicedToArray2.default)(_useState,2),showDropdown=_useState2[0],setShowDropdown=_useState2[1];var _useState3=(0,_react.useState)(""),_useState4=(0,_slicedToArray2.default)(_useState3,2),searchQuery=_useState4[0],setSearchQuery=_useState4[1];var theme=(0,_react.useContext)(_native.ThemeContext);var selectedItemIndex=options==null?void 0:options.findIndex(function(item){return(item==null?void 0:item.value)===value;});var defaultDropdownItemHeight=(itemContainerStyle==null?void 0:itemContainerStyle.height)||32;var formatStr=function formatStr(str){var _str$toLowerCase;return str==null?void 0:(_str$toLowerCase=str.toLowerCase())==null?void 0:_str$toLowerCase.trim();};var handleItemSelection=function handleItemSelection(item,index){setShowDropdown(false);onSelect(item,index);};return _react.default.createElement(_.Container,{elevation:0,__self:_this,__source:{fileName:_jsxFileName,lineNumber:130,columnNumber:5}},_react.default.createElement(_.Typography,(0,_extends2.default)({fontFamily:"inter400",mb:1,fontSize:"s",color:"font.base"},labelStyle,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:131,columnNumber:7}}),label),_react.default.createElement(_.Touchable,{disabled:isLoading,onPress:function onPress(){setShowDropdown(!showDropdown);setSearchQuery("");},__self:_this,__source:{fileName:_jsxFileName,lineNumber:140,columnNumber:7}},_react.default.createElement(_.Container,(0,_extends2.default)({borderWidth:1,borderColor:"border.grey400",p:2,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},containerStyle,rest,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:147,columnNumber:9}}),_react.default.createElement(_.Typography,{fontFamily:"inter400",fontSize:"s",color:"font.grey",__self:_this,__source:{fileName:_jsxFileName,lineNumber:157,columnNumber:11}},(options==null?void 0:(_options$selectedItem=options[selectedItemIndex])==null?void 0:_options$selectedItem.label)||placeholder),isLoading?_react.default.createElement(_reactNative.ActivityIndicator,{size:"small",color:theme.colors.background.base,__self:_this,__source:{fileName:_jsxFileName,lineNumber:161,columnNumber:13}}):_react.default.createElement(_reactNativeRemixIcon.default,{name:"arrow-"+(showDropdown?"up":"down")+"-s-line",size:"20",color:"grey",__self:_this,__source:{fileName:_jsxFileName,lineNumber:166,columnNumber:13}}))),showDropdown&&_react.default.createElement(_.Container,(0,_extends2.default)({bg:"background.white",borderWidth:1,borderColor:"border.grey400",position:"absolute",left:0,right:0,top:"100%",maxHeight:defaultDropdownItemHeight*6,shadowOpacity:0.25,shadowRadius:3.84,"shadow-color":"#000",shadowOffset:{width:0,height:2},elevation:5},dropdownContainerStyle,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:175,columnNumber:9}}),isSearchable&&_react.default.createElement(_.Container,{p:1,__self:_this,__source:{fileName:_jsxFileName,lineNumber:195,columnNumber:13}},_react.default.createElement(_.Input,{placeholder:"Search",onChangeText:setSearchQuery,fontSize:"s",__self:_this,__source:{fileName:_jsxFileName,lineNumber:196,columnNumber:15}})),_react.default.createElement(_reactNative.ScrollView,{nestedScrollEnabled:true,__self:_this,__source:{fileName:_jsxFileName,lineNumber:203,columnNumber:11}},options.filter(function(item){if((searchQuery==null?void 0:searchQuery.length)===0)return true;return formatStr(item.label).includes(formatStr(searchQuery));}).map(function(item,index){return _react.default.createElement(DropdownItem,{key:index,item:item,index:index,isSelectedItem:(item==null?void 0:item.value)===value,defaultDropdownItemHeight:defaultDropdownItemHeight,onPress:function onPress(){return handleItemSelection(item,index);},itemContainerStyle:itemContainerStyle,selectedItemContainerStyle:selectedItemContainerStyle,itemTextStyle:itemTextStyle,selectedItemTextStyle:selectedItemTextStyle,__self:_this,__source:{fileName:_jsxFileName,lineNumber:210,columnNumber:17}});}))));};exports.Select=Select;Select.propTypes={label:_propTypes.default.string,options:_propTypes.default.arrayOf(_propTypes.default.shape({label:_propTypes.default.string.isRequired,value:_propTypes.default.string.isRequired})).isRequired,placeholder:_propTypes.default.string,value:_propTypes.default.string,onSelect:_propTypes.default.func,isLoading:_propTypes.default.bool,isSearchable:_propTypes.default.bool,labelStyle:_propTypes.default.object,containerStyle:_propTypes.default.object,dropdownContainerStyle:_propTypes.default.object,itemContainerStyle:_propTypes.default.object,itemTextStyle:_propTypes.default.object,selectedItemContainerStyle:_propTypes.default.object,selectedItemTextStyle:_propTypes.default.object};Select.defaultProps={label:null,placeholder:"Select Option",value:null,onSelect:function onSelect(){},isLoading:false,isSearchable:false};