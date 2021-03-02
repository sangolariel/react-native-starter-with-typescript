export const bottomTabs = {
  home: 'Home',
  discovery: 'Discovery',
  plans: 'Plans',
  bibleReading: 'BibleReading',
  more: 'More',
};

export const tabsSetting = {
  configs: {
    initialRouteName: bottomTabs.home,
    color: {
      light: {
        tabBarColor: 'white',
        activeColor: '#368C8B',
        inactiveColor: '#200E32',
      },
      dark: { 
        tabBarColor: '#252D42',
        activeColor: '#F7F7F7',
        inactiveColor: '#a1a4b2',
      },
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
