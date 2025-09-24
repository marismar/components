import React, { FC, PropsWithChildren } from 'react';
import {
  ColorValue,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
} from 'react-native';
import { tokens } from './tokens';

type AppTextVariant =
  | 'header1Light'
  | 'header1'
  | 'header2'
  | 'header3'
  | 'header4'
  | 'header5'
  | 'header6'
  | 'subHeader1'
  | 'subHeader2'
  | 'eyebrow1'
  | 'eyebrow2'
  | 'body1'
  | 'body1Semibold'
  | 'body2'
  | 'body2Semibold'
  | 'body3'
  | 'body3Bold'
  | 'body4'
  | 'body4Bold';

const variants = StyleSheet.create<Record<AppTextVariant, TextStyle>>({
  header1Light: {
    fontFamily: tokens.typography.family.circular.regular,
    fontSize: 32,
    lineHeight: 48,
  },
  header1: {
    fontFamily: tokens.typography.family.circular.medium,
    fontSize: 32,
    lineHeight: 48,
  },
  header2: {
    fontFamily: tokens.typography.family.circular.medium,
    fontSize: 30,
    lineHeight: 45,
  },
  header3: {
    fontFamily: tokens.typography.family.circular.medium,
    fontSize: 26,
    lineHeight: 39,
  },
  header4: {
    fontFamily: tokens.typography.family.circular.medium,
    fontSize: 22,
    lineHeight: 33,
  },
  header5: {
    fontFamily: tokens.typography.family.circular.medium,
    fontSize: 20,
    lineHeight: 30,
  },
  header6: {
    fontFamily: tokens.typography.family.circular.medium,
    fontSize: 18,
    lineHeight: 27,
  },
  subHeader1: {
    fontFamily: tokens.typography.family.circular.regular,
    fontSize: 24,
    lineHeight: 36,
  },
  subHeader2: {
    fontFamily: tokens.typography.family.circular.regular,
    fontSize: 20,
    lineHeight: 30,
  },
  eyebrow1: {
    fontFamily: tokens.typography.family.circular.medium,
    fontSize: 14,
    lineHeight: 0,
    letterSpacing: 2,
  },
  eyebrow2: {
    fontFamily: tokens.typography.family.circular.medium,
    fontSize: 12,
    lineHeight: 0,
    letterSpacing: 2,
  },
  body1: {
    fontFamily: tokens.typography.family.noto.regular,
    fontSize: 18,
    lineHeight: 27,
  },
  body1Semibold: {
    fontFamily: tokens.typography.family.noto.semibold,
    fontSize: 18,
    lineHeight: 27,
  },
  body2: {
    fontFamily: tokens.typography.family.noto.regular,
    fontSize: 16,
    lineHeight: 24,
  },
  body2Semibold: {
    fontFamily: tokens.typography.family.noto.semibold,
    fontSize: 16,
    lineHeight: 24,
  },
  body3: {
    fontFamily: tokens.typography.family.noto.regular,
    fontSize: 14,
    lineHeight: 21,
  },
  body3Bold: {
    fontFamily: tokens.typography.family.noto.bold,
    fontSize: 14,
    lineHeight: 21,
  },
  body4: {
    fontFamily: tokens.typography.family.noto.regular,
    fontSize: 12,
    lineHeight: 18,
  },
  body4Bold: {
    fontFamily: tokens.typography.family.noto.bold,
    fontSize: 12,
    lineHeight: 18,
  },
});

type AppTextProps = {
  variant?: AppTextVariant;
  color?: ColorValue;
  style?: StyleProp<TextStyle>;
};

const AppText: FC<PropsWithChildren<AppTextProps>> = ({
  variant = 'body2',
  color = tokens.colors.neutral.grayDarkest,
  style,
  children,
}) => {
  return (
    <View>
      <Text style={[variants[variant], { color }, style]}>{children}</Text>
    </View>
  );
};

export default AppText;
