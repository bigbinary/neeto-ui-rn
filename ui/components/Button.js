import React from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';
import {color} from 'styled-system';

const StyledButton = styled.TouchableHighlight`
  ${color}
`;

const Button = ({onPress = () => {}, text, ...otherProps}) => {
  return (
    <StyledButton {...otherProps}>
      <Text style={{color: 'white', fontSize: 24}}>{text}</Text>
    </StyledButton>
  );
};

export default Button;
