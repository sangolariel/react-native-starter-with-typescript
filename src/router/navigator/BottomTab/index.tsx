import React from 'react';
import {useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import * as screens from '~/router/navigator/tab';

import {tabsSetting} from '~/configs/navigator';

import * as TabsIcon from '~/theme/svg/bottomTab';

import {IObject} from '~/interfaces/common';

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  const {i18n} = useTranslation();
  const theme = useTheme();

  const lang: string = i18n.language;
  const backBehavior = 'initialRoute';

  const {initialRouteName} = tabsSetting.configs;

  const tabbarColor = theme.dark
    ? tabsSetting.configs.dark
    : tabsSetting.configs.light;

  const {activeColor, inactiveColor, tabBarBackground} = tabbarColor;

  const {tabsNavigator} = tabsSetting;

  const listScreens: IObject<any> = screens;
  const tabbarIcons: IObject<any> = TabsIcon;

  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      backBehavior={backBehavior}
      tabBarOptions={{
        activeTintColor: activeColor,
        inactiveTintColor: inactiveColor,
        style: {
          backgroundColor: tabBarBackground,
        },
      }}>
      {tabsNavigator.map((tab: IObject<any>, _i: number) => {
        const TabBarIcon = tabbarIcons[tab.option.tabBarIcon];
        if (!Object.keys(screens).includes(tab.screen)) {
          return null;
        }
        return (
          <Tab.Screen
            key={'tabs' + tab.screen}
            name={tab.name[lang]}
            component={listScreens[tab.screen]}
            options={{
              tabBarIcon: ({color}) => {
                return <TabBarIcon color={color} />;
              },
              title: tab.name[lang],
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomTabs;
