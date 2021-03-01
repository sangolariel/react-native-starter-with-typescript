import AsyncStorage from '@react-native-community/async-storage';

export const setTheme = async (theme: string) => {
  await AsyncStorage.setItem('theme', theme);
};

export const setAppToken = async (appToken: any) => {
  await AsyncStorage.setItem('app-token', appToken);
};
