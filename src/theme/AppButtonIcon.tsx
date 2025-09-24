import React, { FC, useState } from 'react';
import {
  ColorValue,
  Pressable,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableHighlight,
  View,
  ViewStyle,
} from 'react-native';
import AppText from './AppText';
import { tokens } from './tokens';

type AppButtonIconSize = 'small' | 'large';
type AppButtonIconColorContent = 'dark-content' | 'light-content';
type AppButtonSizeStyle = {
  buttonSize: number;
  iconSize: number;
};
type AppButtonIconContentStyle = {
  textColor: ColorValue;
  underlayColor: ColorValue;
};

const sizes: Record<AppButtonIconSize, AppButtonSizeStyle> = {
  small: { buttonSize: 40, iconSize: 20 },
  large: { buttonSize: 80, iconSize: 22 },
};
const variants: Record<AppButtonIconColorContent, AppButtonIconContentStyle> = {
  'dark-content': {
    textColor: tokens.colors.brand.primary.blue2,
    underlayColor: tokens.colors.neutral.grayLightest,
  },
  'light-content': {
    textColor: tokens.colors.neutral.white,
    underlayColor: tokens.colors.neutral.grayLightest,
  },
};

type AppButtonIconProps = {
  colorContent?: AppButtonIconColorContent;
  size?: AppButtonIconSize;
  text?: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const AppButtonIcon: FC<AppButtonIconProps> = ({
  colorContent = 'dark-content',
  size = 'small',
  text,
  onPress,
  style,
  textStyle,
}) => {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      style={styles.base}
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <TouchableHighlight
        style={[
          styles.container,
          {
            borderColor: variants[colorContent].textColor,
            borderRadius: sizes[size].buttonSize / 2,
            width: sizes[size].buttonSize,
            height: sizes[size].buttonSize,
          },
          style,
        ]}
        onPress={onPress}
        underlayColor={variants[colorContent].underlayColor}
      >
        <View
          style={{
            backgroundColor: variants[colorContent].textColor,
            height: sizes[size].iconSize,
            width: sizes[size].iconSize,
          }}
        />
      </TouchableHighlight>
      {text && (
        <AppText
          variant="body3"
          color={variants[colorContent].textColor}
          style={[styles.text, pressed && styles.textPressed, textStyle]}
        >
          {text}
        </AppText>
      )}
    </Pressable>
  );
};

export default AppButtonIcon;

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    borderWidth: tokens.borders.heavy,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    lineHeight: 19,
    marginTop: tokens.spacing.sm,
  },
  textPressed: { textDecorationLine: 'underline' },
});
