import React, { FC } from 'react';
import {
  ColorValue,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableHighlight,
  ViewStyle,
} from 'react-native';
import AppLoadingIndicator from './AppLoadingIndicator';
import AppText from './AppText';
import { tokens } from './tokens';

type AppButtonVariant = 'primary' | 'secondary';
type AppButtonColorContent = 'dark-content' | 'light-content';
type AppButtonState = 'default' | 'disabled';

type AppButtonBaseStyle = {
  style: StyleProp<ViewStyle>;
  textColor: ColorValue;
};

type AppButtonStateStyles = Record<AppButtonState, AppButtonBaseStyle> & {
  underlayColor: ColorValue;
};

type AppButtonStyle = Record<AppButtonColorContent, AppButtonStateStyles>;

const variants: Record<AppButtonVariant, AppButtonStyle> = {
  primary: {
    'dark-content': {
      default: {
        style: { backgroundColor: tokens.colors.brand.primary.blue2 },
        textColor: tokens.colors.neutral.white,
      },
      disabled: {
        style: { backgroundColor: tokens.colors.neutral.grayMedium },
        textColor: tokens.colors.neutral.grayDarkest,
      },
      underlayColor: tokens.colors.brand.primary.blue3,
    },
    'light-content': {
      default: {
        style: { backgroundColor: tokens.colors.neutral.white },
        textColor: tokens.colors.brand.primary.blue2,
      },
      disabled: {
        style: { backgroundColor: tokens.colors.neutral.grayMedium },
        textColor: tokens.colors.neutral.grayDarkest,
      },
      underlayColor: tokens.colors.neutral.grayLightest,
    },
  },
  secondary: {
    'dark-content': {
      default: {
        style: {
          borderColor: tokens.colors.brand.primary.blue2,
          borderWidth: tokens.borders.thick,
        },
        textColor: tokens.colors.brand.primary.blue2,
      },
      disabled: {
        style: {
          borderColor: tokens.colors.neutral.grayDark,
          borderWidth: tokens.borders.thick,
        },
        textColor: tokens.colors.neutral.grayDark,
      },
      underlayColor: tokens.colors.neutral.whiteSemiTransparent,
    },
    'light-content': {
      default: {
        style: {
          borderColor: tokens.colors.neutral.white,
          borderWidth: tokens.borders.thick,
        },
        textColor: tokens.colors.neutral.white,
      },
      disabled: {
        style: {
          borderColor: tokens.colors.neutral.grayMedium,
          borderWidth: tokens.borders.thick,
        },
        textColor: tokens.colors.neutral.grayMedium,
      },
      underlayColor: tokens.colors.neutral.blackSemiTransparent,
    },
  },
};

type AppButtonProps = {
  variant?: AppButtonVariant;
  colorContent?: AppButtonColorContent;
  text: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const AppButton: FC<AppButtonProps> = ({
  variant = 'primary',
  colorContent = 'dark-content',
  text,
  onPress,
  loading = false,
  disabled = false,
  style,
  textStyle,
}) => {
  const state: AppButtonState = disabled ? 'disabled' : 'default';

  return (
    <TouchableHighlight
      style={[
        styles.container,
        variants[variant][colorContent][state].style,
        style,
      ]}
      underlayColor={variants[variant][colorContent].underlayColor}
      onPress={disabled ? undefined : onPress}
    >
      {loading ? (
        <AppLoadingIndicator
          color={variants[variant][colorContent][state].textColor}
        />
      ) : (
        <AppText
          variant="body2Semibold"
          color={variants[variant][colorContent][state].textColor}
          style={textStyle}
        >
          {text}
        </AppText>
      )}
    </TouchableHighlight>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: tokens.radii.md,
  },
});
