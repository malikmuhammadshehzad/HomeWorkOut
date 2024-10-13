/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import './src/i18n';
import React, {useEffect} from 'react';
import {I18nManager, Text, TextInput} from 'react-native';
import {ErrorBoundary} from './src/screens/ErrorBoundaryScreen/ErrorBoundary';
import AppNavigator from './src/routes';
import Config from './src/config';
import {getLocales} from 'react-native-localize';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
// .......................... for local storage I did this ...................
import { useAppStore } from './src/store'; // for local storage I did this

/**
 * declearing interface to avoid typescript error for text
 */
interface TextWithDefaultProps extends Text {
  defaultProps?: {allowFontScaling?: boolean};
}
/**
 * declearing interface to avoid typescript error for textInput
 */
interface TextInputWithDefaultProps extends Text {
  defaultProps?: {allowFontScaling?: boolean};
}

// Forcefully content start from Left to Right - Phone setting does not effect here
I18nManager.forceRTL(false);

export const queryClient = new QueryClient();

function App(): React.JSX.Element {
  /**
   * - disabling font scalling as a text
   */
  (Text as unknown as TextWithDefaultProps).defaultProps = (Text as unknown as TextWithDefaultProps).defaultProps || {};
  (Text as unknown as TextWithDefaultProps).defaultProps!.allowFontScaling = false;
  /**
   * - disabling font scalling as a TextInput
   */
  (TextInput as unknown as TextInputWithDefaultProps).defaultProps =
    (TextInput as unknown as TextInputWithDefaultProps).defaultProps || {};
  (TextInput as unknown as TextInputWithDefaultProps).defaultProps!.allowFontScaling = false;
  /*
   ** States
   */
  const [_, setRecoveredFromError] = React.useState(false);

  //.........................  for local storage I did this ......................
  // Load stored data from MMKV using Zustand
  const loadStoredData = useAppStore(state => state.loadStoredData);
  // .......................... for local storage I did this ...................

  useEffect(() => {
    /**
     * - All your app third part module initialization like @notifee
     *
     */
    console.log('get locales', getLocales());

    // .......................... for local storage I did this ...................
    // Load any stored data on app startup
    loadStoredData();// also this 
  }, [loadStoredData]); // also include in the empty dependency

  /**
   * Your main componenet
   */
  return (
    <ErrorBoundary catchErrors={Config.catchErrors} onReset={() => setRecoveredFromError(true)}>
      <QueryClientProvider client={queryClient}>
        <AppNavigator />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
