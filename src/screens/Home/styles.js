const {StyleSheet} = require('react-native');
import {colors} from '../../utils/Colors';
import {WIDTH, setValueBasedOnHeight} from '../../utils/deviceDimensions';
export const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: colors.color_121212,
  },
  emptyList: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  rowBack: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: colors.color_363636,
    margin: setValueBasedOnHeight(10),
    height: setValueBasedOnHeight(40),
    padding: setValueBasedOnHeight(5),
    borderRadius: 10,
    alignItems: 'center',
  },
  rowFront: {
    margin: setValueBasedOnHeight(10),
    padding: setValueBasedOnHeight(5),
    height: setValueBasedOnHeight(40),
    backgroundColor: colors.color_363636,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
