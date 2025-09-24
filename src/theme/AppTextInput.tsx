import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';

type FloatingInputProps = {
  label: string;
  error?: string;
  helperText?: string;
} & TextInputProps;

export const FloatingInput = ({
  label,
  error,
  helperText,
  value,
  ...props
}: FloatingInputProps) => {
  const [focused, setFocused] = useState(false);
  const animatedLabel = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animatedLabel, {
      toValue: focused || !!value ? 1 : 0, // 👈 key fix: stays floated if value exists
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [focused, value, animatedLabel]);

  const labelStyle = {
    position: 'absolute' as const,
    left: 0,
    top: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [18, -6], // placeholder vs floating
    }),
    fontSize: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: ['#9CA3AF', focused ? '#1E90FF' : '#6B7280'],
    }),
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={labelStyle}>{label}</Animated.Text>

      <TextInput
        style={[
          styles.input,
          focused && styles.inputFocused,
          error && styles.inputError,
          props.editable === false && styles.inputDisabled,
        ]}
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...props}
      />

      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : helperText ? (
        <Text style={styles.helperText}>{helperText}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: 64,
    // backgroundColor: 'pink',
    // marginVertical: 16,
    position: 'relative',
    // paddingTop: 18,
  },
  input: {
    height: 64,
    borderBottomWidth: 1,
    borderBottomColor: '#D1D5DB',
    fontSize: 16,
    paddingVertical: 8,
    color: '#111827',
  },
  inputFocused: {
    borderBottomColor: '#1E90FF',
  },
  inputError: {
    borderBottomColor: '#DC2626',
  },
  inputDisabled: {
    borderBottomColor: '#E5E7EB',
    color: '#9CA3AF',
  },
  helperText: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
  errorText: {
    fontSize: 12,
    color: '#DC2626',
    marginTop: 4,
  },
});
