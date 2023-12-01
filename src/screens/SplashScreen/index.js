import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../utils/Colors';
import SplashLogo from '../../assets/images/ToDoSplash.svg';
const SplashScreen = () => {
  return (
    <View style={style.parent}>
      <SplashLogo />
    </View>
  );
};
const style = StyleSheet.create({
  parent: {
    backgroundColor: colors.color_121212,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SplashScreen;
