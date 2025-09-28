import React, { FC } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { tokens } from './tokens';

type AppDividerColor = 'gradient' | 'blue' | 'gray';
type AppDividerSize = 'default' | 'thin';

const colors = [
  tokens.colors.brand.primary.blue2,
  tokens.colors.brand.primary.green1,
];

type AppDividerProps = {
  color?: AppDividerColor;
  size?: AppDividerSize;
  style?: StyleProp<ViewStyle>;
};

const AppDivider: FC<AppDividerProps> = ({
  color = 'gradient',
  size = 'default',
  style,
}) => {
  if (color === 'gradient') {
    return (
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.container, { height: tokens.borders.thick }, style]}
      />
    );
  }
  return (
    <View
      style={[
        styles.container,
        {
          height: size === 'thin' ? tokens.borders.thin : tokens.borders.thick,
        },
        styles[color],
        style,
      ]}
    />
  );
};

export default AppDivider;

const styles = StyleSheet.create<
  Record<AppDividerColor | 'container', ViewStyle>
>({
  container: { flex: 1 },
  gradient: { backgroundColor: tokens.colors.brand.primary.green1 },
  blue: { backgroundColor: tokens.colors.brand.primary.blue1 },
  gray: { backgroundColor: tokens.colors.neutral.grayLight },
});
