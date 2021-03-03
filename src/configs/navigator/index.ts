export const rootSwitch = {
  mainStack: 'MainStack',
};

export const mainStack = {
  bottomTabs: 'BottomTabs',
};

export const authStack = {};

export const bottomTabs = {
  home: 'Home',
  discovery: 'Discovery',
  plans: 'Plans',
  bibleReading: 'BibleReading',
  more: 'More',
};

export const navigationSetting = {
  defaultNavigationOption: {
    headerStyle: {
      borderBottomWidth: 0,
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.1,
      elevation: 2,
    },
    headerTitleStyle: {
      flex: 1,
      fontSize: 16,
      lineHeight: 24,
      fontWeight: 'bold',
      justifyContent: 'space-between',
      textAlign: 'center',
    },
    cardStyle: {backgroundColor: '#fff'},
  },
  configs: {
    initialRouteName: rootSwitch.mainStack,
  },
  stacks: [
    {
      title: {
        vi: '',
        en: '',
      },
      router: rootSwitch.mainStack,
      screen: rootSwitch.mainStack,
      options: {
        headerShown: false,
        animationEnabled: true,
      },
    },
  ],
};

export const tabsSetting = {
  configs: {
    initialRouteName: bottomTabs.home,
    light: {
      tabBarBackground: 'white',
      activeColor: '#368C8B',
      inactiveColor: '#200E32',
    },
    dark: {
      tabBarBackground: '#252D42',
      activeColor: '#F7F7F7',
      inactiveColor: '#a1a4b2',
    },
  },
  tabsNavigator: [
    {
      title: {
        vi: '',
        en: '',
      },
      name: {
        vi: 'Trang chủ',
        en: 'Home',
      },
      screen: bottomTabs.home,
      option: {
        tabBarIcon: 'HomeTab',
      },
    },
    {
      title: {
        vi: '',
        en: '',
      },
      name: {
        vi: 'Khám phá',
        en: 'Discovery',
      },
      screen: bottomTabs.discovery,
      option: {
        tabBarIcon: 'DiscoveryTab',
      },
    },
    {
      title: {
        vi: '',
        en: '',
      },
      name: {
        vi: 'Kế hoạch',
        en: 'Plans',
      },
      screen: bottomTabs.plans,
      option: {
        tabBarIcon: 'PlansTab',
      },
    },
    {
      title: {
        vi: '',
        en: '',
      },
      name: {
        vi: 'Đọc kinh thánh',
        en: 'Bible Reading',
      },
      screen: bottomTabs.bibleReading,
      option: {
        tabBarIcon: 'BibleReadingTab',
      },
    },
    {
      title: {
        vi: '',
        en: '',
      },
      name: {
        vi: 'Thêm nữa',
        en: 'More',
      },
      screen: bottomTabs.more,
      option: {
        tabBarIcon: 'MoreTab',
      },
    },
  ],
};
