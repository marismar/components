import React, { FC, useEffect, useRef } from 'react';
import { Animated, ColorValue, Easing, StyleSheet, View } from 'react-native';
import { tokens } from './tokens';

type AppLoadingIndicatorSize = 'small' | 'large';
type AppLoadingIndicatorSizeStyle = {
  height: number;
  width: number;
};

const sizes = StyleSheet.create<
  Record<AppLoadingIndicatorSize, AppLoadingIndicatorSizeStyle>
>({
  small: { height: 20, width: 20 },
  large: { height: 36, width: 36 },
});

type AppLoadingIndicatorProps = {
  size?: AppLoadingIndicatorSize;
  color?: ColorValue;
};

const AppLoadingIndicator: FC<AppLoadingIndicatorProps> = ({
  size = 'small',
  color = tokens.colors.brand.primary.blue2,
}) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [rotateAnim]);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View style={{ transform: [{ rotate: spin }] }}>
      <View
        style={[
          styles.circle,
          {
            borderColor: color,
            width: sizes[size].width,
            height: sizes[size].height,
            borderRadius: sizes[size].width / 2,
          },
        ]}
      />
    </Animated.View>
  );
};

export default AppLoadingIndicator;

const styles = StyleSheet.create({
  circle: {
    borderWidth: tokens.borders.thick,
    borderTopColor: tokens.colors.neutral.transparent,
  },
});
