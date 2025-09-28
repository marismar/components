import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { tokens } from './tokens';

const colors = [
  tokens.colors.brand.primary.blue2,
  tokens.colors.brand.primary.green1,
];

type AppProgressBarProps = { progress: number };

export const AppProgressBar = ({ progress }: AppProgressBarProps) => {
  const progressWidth = useMemo(
    () => Math.min(Math.max(progress * 100, 0), 100),
    [progress],
  );

  return (
    <View style={[styles.container]}>
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.progress, { width: `${progressWidth}%` }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: tokens.colors.neutral.grayLightest,
    overflow: 'hidden',
    height: 8,
  },
  progress: { height: '100%' },
});
