/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-shadow */
import React, {useEffect, useState, useCallback, useMemo} from 'react';
import {I18nManager, StatusBar} from 'react-native';
import {useTranslation} from 'react-i18next';
import RNRestart from 'react-native-restart';

/* check Internet */
import NetInfo from '@react-native-community/netinfo';

/* State Redux */
import {useSelector, useDispatch} from 'react-redux';
import {languageSelector} from '~/store/language/selectors';
import {fetchSetting} from '~/store/common/actions';

/* FlashMessage */
import FlashMessage from 'react-native-flash-message';

/* Theme */
import {
  configureFonts,
  DarkTheme,
  DefaultTheme,
  Provider as PaperProvider,
  Provider as ThemeProvider,
} from 'react-native-paper';
import {useColorScheme} from 'react-native-appearance';
import {PreferencesContext} from '~/router/context/preferencesContext';
import {colors, fonts, spacing, dimension, shadow} from '~/theme/configs';
import {fontConfig} from '~/configs/fonts';

/* Router @react-navigation v5 */
import RootNavigator from '~/router';

export default () => {
  /* Localization */
  const {i18n} = useTranslation();

  /*Declare redux and sagas*/
  const dispatch = useDispatch();
  const language = useSelector((state) => languageSelector(state));

  /* Change language */
  if (i18n.language !== language) {
    i18n.changeLanguage(language);
  }

  /* Theme Setup */
  const colorScheme = useColorScheme();
  const [theme, switchTheme] = React.useState<'light' | 'dark'>(
    colorScheme === 'dark' ? 'dark' : 'light',
  );
  const barStyle = theme === 'light' ? 'dark-content' : 'light-content';
  const [rtl] = React.useState<boolean>(I18nManager.isRTL);

  const toggleTheme = () => {
    switchTheme((theme: string) => (theme === 'light' ? 'dark' : 'light'));
  };

  const toggleRTL = useCallback(() => {
    I18nManager.forceRTL(!rtl);
    RNRestart.Restart();
  }, [rtl]);

  const [stateCurrent, setState] = useState({isUpdate: false, loaded: false});

  const [isConnected, setConnected] = useState(true);

  const preferences = useMemo(
    () => ({
      toggleTheme,
      toggleRTL,
      theme,
      rtl: (rtl ? 'right' : 'left') as 'right' | 'left',
    }),
    [rtl, theme, toggleRTL],
  );

  const setupResource = async () => {
    let stateNew = {
      isUpdate: false,
      loaded: false,
    };
    try {
      /*Fetch setting*/
      dispatch(fetchSetting());

      /*Check code push update OTA*/

      /*Set loading success*/
      stateNew.loaded = true;
      setState(stateNew);
    } catch (error) {
      console.error(`Setup error : ${error}`);
    }
  };

  /*Check internet*/
  NetInfo.fetch().then((state: any) => {
    if (isConnected !== state.isConnected) {
      setConnected(state.isConnected);
    }
  });

  useEffect(() => {
    setupResource();
  }, []);

  //Set config theme
  let themeConfig: any =
    theme === 'light'
      ? {
          ...DefaultTheme,
          colors: {...DefaultTheme.colors, ...colors.light.colors},
        }
      : {
          ...DarkTheme,
          colors: {...DarkTheme.colors, ...colors.dark.colors},
        };
  themeConfig.fontFamily = stateCurrent.loaded ? fonts : DefaultTheme.fonts;
  themeConfig.spacing = {...spacing};
  themeConfig.dimension = {...dimension};
  themeConfig.shadow = {...shadow};
  /*Config font*/
  themeConfig.fonts = configureFonts(fontConfig);

  if (stateCurrent.loaded) {
    // SplashScreen.hideAsync()
  } else {
    return null;
  }

  return (
    <ThemeProvider>
      <StatusBar
        translucent
        barStyle={barStyle}
        backgroundColor="transparent"
      />
      <PreferencesContext.Provider value={preferences}>
        <PaperProvider theme={themeConfig}>
          <RootNavigator />
        </PaperProvider>
      </PreferencesContext.Provider>
      <FlashMessage position="top" />
    </ThemeProvider>
  );
};
