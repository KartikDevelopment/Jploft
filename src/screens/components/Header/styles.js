import {StyleSheet} from 'react-native';
import {setValueBasedOnHeight} from '../../../utils/deviceDimensions';

export const styles = StyleSheet.create({
  parent: {
    width: '100%',
    height: setValueBasedOnHeight(40),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
