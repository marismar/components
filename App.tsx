/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import AppButton from './src/theme/AppButton';
import AppButtonIcon from './src/theme/AppButtonIcon';
import AppDivider from './src/theme/AppDivider';
import { LoaderDots } from './src/theme/AppLoaderDots';
import { AppProgressBar } from './src/theme/AppProgressBar';
import AppText from './src/theme/AppText';
import { FloatingInput } from './src/theme/AppTextInput';
import AppTextLink from './src/theme/AppTextLink';
import { tokens } from './src/theme/tokens';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <AppText>Hello, World!</AppText>

        <AppProgressBar progress={0.25} />
        <AppProgressBar progress={0.5} />
        <AppProgressBar progress={0.9} />

        <AppProgressBar progress={1} />

        <View
          style={{
            marginVertical: tokens.spacing.lg,
            padding: tokens.spacing.lg,
            gap: tokens.spacing.sm,
          }}
        >
          <LoaderDots />
          <AppButton
            colorContent="dark-content"
            variant="primary"
            text="Press Me"
            onPress={() => console.log('Button Pressed')}
          />
          <AppButton
            loading
            colorContent="dark-content"
            variant="primary"
            text="Press Me"
            onPress={() => console.log('Button Pressed')}
          />
          <AppButton
            disabled
            colorContent="dark-content"
            variant="primary"
            text="Press Me"
            onPress={() => console.log('Button Pressed')}
          />
          <AppButton
            colorContent="dark-content"
            variant="secondary"
            text="Press Me"
            onPress={() => console.log('Button Pressed')}
          />
          <AppButton
            disabled
            colorContent="dark-content"
            variant="secondary"
            text="Press Me"
            onPress={() => console.log('Button Pressed')}
          />
          <AppTextLink
            colorContent="dark-content"
            text="Press Me"
            onPress={() => {}}
          />
          <AppButtonIcon
            colorContent="dark-content"
            text={'Press Me'}
            onPress={function (): void {}}
          />
          <AppButtonIcon
            size="large"
            colorContent="dark-content"
            text={'Press Me'}
            onPress={function (): void {}}
          />
          <AppButtonIcon
            colorContent="dark-content"
            onPress={function (): void {}}
          />
          <AppButtonIcon
            size="large"
            colorContent="dark-content"
            onPress={function (): void {}}
          />

          <AppDivider />
          <AppDivider color="blue" />
          <AppDivider color="gray" />
          <AppDivider color="gray" size="thin" />

          <FloatingInput label="Email" />
          <FloatingInput
            label="Password"
            secureTextEntry
            helperText="Must be at least 8 characters"
          />
          <FloatingInput label="Username" error="Required field" />
        </View>
        <View
          style={{
            marginVertical: tokens.spacing.lg,
            padding: tokens.spacing.lg,
            backgroundColor: tokens.colors.brand.primary.blue3,
            gap: tokens.spacing.sm,
          }}
        >
          <AppButton
            colorContent="light-content"
            variant="primary"
            text="Press Me"
            onPress={() => console.log('Button Pressed')}
          />
          <AppButton
            disabled
            colorContent="light-content"
            variant="primary"
            text="Press Me"
            onPress={() => console.log('Button Pressed')}
          />
          <AppButton
            colorContent="light-content"
            variant="secondary"
            text="Press Me"
            onPress={() => console.log('Button Pressed')}
          />
          <AppButton
            disabled
            colorContent="light-content"
            variant="secondary"
            text="Press Me"
            onPress={() => console.log('Button Pressed')}
          />
          <AppTextLink
            colorContent="light-content"
            text="Press Me"
            onPress={() => {}}
          />
          <AppButtonIcon
            colorContent="light-content"
            text={'Press Me'}
            onPress={function (): void {}}
          />
          <AppButtonIcon
            size="large"
            colorContent="light-content"
            text={'Press Me'}
            onPress={function (): void {}}
          />
          <AppButtonIcon
            colorContent="light-content"
            onPress={function (): void {}}
          />
          <AppButtonIcon
            size="large"
            colorContent="light-content"
            onPress={function (): void {}}
          />

          <AppDivider />
          <AppDivider color="blue" />
          <AppDivider color="gray" />
          <AppDivider color="gray" size="thin" />
        </View>
      </SafeAreaView>

      <NewAppScreen
        templateFileName="App.tsx"
        safeAreaInsets={safeAreaInsets}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colors.neutral.white,
  },
});

export default App;
