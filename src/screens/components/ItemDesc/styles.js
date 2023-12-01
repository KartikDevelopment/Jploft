import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/Colors';
import {setValueBasedOnHeight} from '../../../utils/deviceDimensions';
export const styles = StyleSheet.create({
  parent: {
    width: '80%',
    height: setValueBasedOnHeight(300),
    borderRadius: 10,
    backgroundColor: colors.color_363636,
    alignSelf: 'center',
    padding: 10,
  },
});
