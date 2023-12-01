import {Dimensions} from 'react-native';
export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

const REFRENCE_WIDTH = 360;
const REFRENCE_HEIGHT = 640;

export const setValueBasedOnWidth = dp => {
  if (dp) {
    return (WIDTH * dp) / REFRENCE_WIDTH;
  }
  return dp;
};

export const setValueBasedOnHeight = dp => {
  if (dp) {
    return (HEIGHT * dp) / REFRENCE_HEIGHT;
  }
  return dp;
};

export const setFontSize = size => setValueBasedOnHeight(size);
