import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import { tokens } from './tokens';

const DOTS = 3;

const colors = [
  tokens.colors.brand.primary.blue2,
  tokens.colors.brand.primary.blue3,
  tokens.colors.brand.primary.green1,
] as const;

type LoaderDotsProps = { colorContent?: 'light-content' | 'dark-content' };

export const LoaderDots = ({
  colorContent = 'light-content',
}: LoaderDotsProps) => {
  const animations = useRef(
    [...Array(DOTS)].map(() => ({
      translateY: new Animated.Value(0),
      scale: new Animated.Value(1),
    })),
  ).current;

  useEffect(() => {
    const createAnimation = (anim: {
      translateY: Animated.Value;
      scale: Animated.Value;
    }) =>
      Animated.sequence([
        Animated.parallel([
          Animated.timing(anim.translateY, {
            toValue: -8,
            duration: 300,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true,
          }),
          Animated.timing(anim.scale, {
            toValue: 1.2,
            duration: 300,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(anim.translateY, {
            toValue: 0,
            duration: 300,
            easing: Easing.in(Easing.quad),
            useNativeDriver: true,
          }),
          Animated.timing(anim.scale, {
            toValue: 1,
            duration: 300,
            easing: Easing.in(Easing.quad),
            useNativeDriver: true,
          }),
        ]),
      ]);

    const loop = Animated.loop(
      Animated.stagger(200, animations.map(createAnimation)),
    );

    loop.start();
  }, [animations]);

  return (
    <View style={styles.container}>
      {animations.map((anim, index) => (
        <Animated.View
          key={index}
          style={[
            styles.dot,
            {
              backgroundColor: colors[index % colors.length],
              transform: [
                { translateY: anim.translateY },
                { scale: anim.scale },
              ],
            },
            colorContent === 'light-content' && styles.whiteDot,
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: tokens.spacing.sm,
  },
  dot: {
    width: 11,
    height: 11,
    borderRadius: tokens.radii.md,
    backgroundColor: tokens.colors.brand.primary.blue2,
  },
  whiteDot: { backgroundColor: tokens.colors.neutral.white },
});
