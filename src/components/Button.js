import React from 'react'
// import styled from 'styled-components/native';
import {TouchableHighlight, Text} from 'react-native'

// const StyledButton = styled.TouchableHighlight`
//   background-color: red;
// `;

// const StyledText = styled.Text`
//   color: white;
// `;

const Button = ({
  onPress = () => {},
  text
}) => {
  return (
    <TouchableHighlight style={{backgroundColor: "red"}} onPress={onPress}>
      <Text style={{color: "white"}}>
        {text}
      </Text>
    </TouchableHighlight>
  )
}

export default Button
