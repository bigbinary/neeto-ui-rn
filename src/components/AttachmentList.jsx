import React, { useContext } from "react";
import { ScrollView } from "react-native";

import PropTypes from "prop-types";
import Icon from "react-native-remix-icon";
import { moderateScale } from "react-native-size-matters";
import styled, { ThemeContext } from "styled-components/native";
import { border, color, layout, space } from "styled-system";

import { Container, Touchable, Divider, Loader } from "@components";

import CloseButton from "../../assets/icons/close-button.svg";

export const StyledImage = styled.Image`
  ${border}
  ${color}
  ${space}
  ${layout}
`;

export const AttachmentList = ({ attachments, onDelete }) => {
  const theme = useContext(ThemeContext);

  return (
    <Container
      bg="background.menubackground"
      borderColor="background.grey200"
      borderTopLeftRadius={moderateScale(10)}
      borderTopRightRadius={moderateScale(10)}
    >
      <Container
        flexDirection="row"
        mx={moderateScale(1)}
        py={moderateScale(10)}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {attachments?.map((data, i) => (
            <Container
              alignItems="center"
              flexDirection="row"
              key={i}
              mx={moderateScale(1)}
              pl={moderateScale(10)}
            >
              <Container
                alignItems="center"
                bg="background.grey200"
                borderRadius={moderateScale(10)}
                height={moderateScale(60)}
                justifyContent="center"
                width={moderateScale(60)}
              >
                <Icon
                  color={theme.colors.font.grey800}
                  name="ri-attachment-line"
                  size={moderateScale(30)}
                />
                <StyledImage
                  borderRadius={moderateScale(10)}
                  height={moderateScale(60)}
                  opacity={moderateScale(1)}
                  position="absolute"
                  source={{ uri: data.uri }}
                  width={moderateScale(60)}
                />
              </Container>
              <Touchable
                position="absolute"
                right={moderateScale(8)}
                top={moderateScale(8)}
                onPress={() => onDelete(i)}
              >
                <CloseButton />
              </Touchable>
              {data.isUploading && (
                <Container
                  bg="background.grey200"
                  borderRadius={moderateScale(10)}
                  p={moderateScale(2)}
                  position="absolute"
                  right={moderateScale(5)}
                  top={moderateScale(35)}
                >
                  <Loader color={theme.colors.background.grey800} />
                </Container>
              )}
            </Container>
          ))}
        </ScrollView>
      </Container>
      <Divider
        bg="background.grey400"
        orientation="horizontal"
        thickness={moderateScale(1)}
        width="100%"
      />
    </Container>
  );
};

AttachmentList.propTypes = {
  attachments: PropTypes.array,
  onDelete: PropTypes.func,
};
