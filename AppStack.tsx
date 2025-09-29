import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';
import React, { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import App from './App';

enableScreens();

const Stack = createNativeStackNavigator();

type AppHeaderVariant = 'logo' | 'title';
type AppHeaderAlignment = 'left' | 'center';
type AppHeaderTheme = 'light' | 'dark';

interface AppHeaderProps extends NativeStackHeaderProps {
  variant?: AppHeaderVariant;
  alignment?: AppHeaderAlignment;
  theme?: AppHeaderTheme;
  showBackButton?: boolean;
  action?: 'close' | 'read-notification' | 'unread-notification';
  onAction?: () => void;
  customAction?: ReactNode;
}

const AppHeader = ({
  variant = 'title',
  alignment = 'center',
  theme = 'light',
  showBackButton = false,
  action,
  customAction,
  ...props
}: AppHeaderProps) => {
  const insets = useSafeAreaInsets();

  let leftPositionOfTitle = 0;
  if (!showBackButton && action) {
    leftPositionOfTitle = 6;
  } else if (showBackButton && !action) {
    leftPositionOfTitle = -6;
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {showBackButton && <View style={styles.icon} />}
      {variant === 'title' && (
        <Text
          style={[
            styles.text,
            alignment === 'center' && styles.title,
            alignment === 'center' && { left: leftPositionOfTitle },
          ]}
        >
          {props.options.title}
        </Text>
      )}

      {variant === 'logo' && (
        <Text style={[styles.title, { left: leftPositionOfTitle }]}>
          {props.options.title}
        </Text>
      )}
      {action && <View style={styles.icon} />}
      {customAction}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  text: {
    fontWeight: 600,
    fontSize: 16,
  },
  title: {
    position: 'relative',
    top: 0,
    bottom: 0,
    right: 0,
    margin: 'auto',
  },
  icon: {
    height: 12,
    width: 12,
    backgroundColor: 'black',
  },
});

export const AppStack = () => {
  return (
    <NavigationContainer>
      <_AppStack />
    </NavigationContainer>
  );
};

const _AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ header: AppHeader }}>
      <Stack.Screen
        name="Home"
        component={App}
        options={{
          title: 'Home',
          header: props => (
            <AppHeader
              theme="dark"
              showBackButton
              alignment="left"
              action="close"
              {...props}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default _AppStack;
