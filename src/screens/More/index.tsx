import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  Avatar,
  Caption,
  Paragraph,
  Switch,
  Text,
  Title,
  TouchableRipple,
  useTheme,
  Drawer,
} from 'react-native-paper';

import {PreferencesContext} from '~/router/context/preferencesContext';

export default function DrawerContent(props: any) {
  const paperTheme = useTheme();
  const {rtl, theme, toggleRTL, toggleTheme} = React.useContext(
    PreferencesContext,
  );

  return (
    <View
      //@ts-ignore
      style={[
        styles.drawerContent,
        {
          backgroundColor: paperTheme.colors.surface,
        },
      ]}>
      <View style={styles.userInfoSection}>
        <TouchableOpacity
          style={{marginLeft: 10}}
          onPress={() => {
            props.navigation.toggleDrawer();
          }}>
          <Avatar.Image
            source={{
              uri:
                'https://haymora.com/upload/files/cong_nghe_thong_tin/2019/futurify/logo-cong-ty-futurify.jpg',
            }}
            size={50}
          />
        </TouchableOpacity>
        <Title style={styles.title}>Sang Nguyen</Title>
        <Caption style={styles.caption}>sangnh@futurify.vn</Caption>
        <View style={styles.row}>
          <View style={styles.section}>
            <Paragraph style={[styles.paragraph, styles.caption]}>
              Start 3/3/2020
            </Paragraph>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.section}>
            <Paragraph style={[styles.paragraph, styles.caption]}>
              https://github.com/sangolariel/react-native-starter-with-typescript
            </Paragraph>
          </View>
        </View>
      </View>
      <Drawer.Section>
        <TouchableRipple onPress={toggleTheme}>
          <View style={styles.preference}>
            <Text>Dark Theme</Text>
            <View pointerEvents="none">
              <Switch value={theme === 'dark'} />
            </View>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={toggleRTL}>
          <View style={styles.preference}>
            <Text>RTL</Text>
            <View pointerEvents="none">
              <Switch value={rtl === 'right'} />
            </View>
          </View>
        </TouchableRipple>
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    paddingTop: 60,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  sections: {
    paddingTop: 25,
  },
});
