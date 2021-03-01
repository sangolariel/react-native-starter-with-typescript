import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from 'react-native-paper';

export interface Props {
  colorSecondary?: string;
  isFullView?: boolean;
  style?: any;
}

const ThemeView: React.FC<Props> = ({
  colorSecondary,
  isFullView,
  style,
  ...restProps
}) => {
  const theme: any = useTheme();
  return (
    <View
      {...restProps}
      style={StyleSheet.flatten([
        {
          backgroundColor: colorSecondary
            ? theme.colors.bgColorSecondary
            : theme.colors.bgColor,
        },
        isFullView && {flex: 1},
        style && style,
      ])}
    />
  );
};

export default ThemeView;
