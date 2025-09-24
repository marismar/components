import React, { FC, useState } from 'react';
import {
  ColorValue,
  Pressable,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import AppText from './AppText';
import { tokens } from './tokens';

type AppTextColorContent = 'dark-content' | 'light-content';
type AppTextBaseStyle = { textColor: ColorValue };
type AppTextStyles = AppTextBaseStyle;

const variants: Record<AppTextColorContent, AppTextStyles> = {
  'dark-content': { textColor: tokens.colors.brand.primary.blue2 },
  'light-content': { textColor: tokens.colors.neutral.white },
};

type AppTextLinkProps = {
  colorContent?: AppTextColorContent;
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const AppTextLink: FC<AppTextLinkProps> = ({
  colorContent = 'dark-content',
  text,
  onPress,
  style,
  textStyle,
}) => {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      style={[styles.container, style]}
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <AppText
        variant="body2Semibold"
        color={variants[colorContent].textColor}
        style={[styles.text, pressed && styles.textPressed, textStyle]}
      >
        {text}
      </AppText>
    </Pressable>
  );
};

export default AppTextLink;

const styles = StyleSheet.create({
  container: { alignSelf: 'flex-start' },
  text: { lineHeight: 22 },
  textPressed: { textDecorationLine: 'underline' },
});
