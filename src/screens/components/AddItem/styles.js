import {colors} from '../../../utils/Colors';
import {CommonStyles} from '../../../utils/CommonStyles';
const {StyleSheet} = require('react-native');
const {setValueBasedOnHeight} = require('../../../utils/deviceDimensions');

export const styles = StyleSheet.create({
  parent: {
    height: setValueBasedOnHeight(300),
    backgroundColor: colors.color_363636,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  Input: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    ...CommonStyles.TXT_12_Regular_WHITE,
    margin: 10,
    paddingLeft: 10,
  },
  Input_desc: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    minHeight: setValueBasedOnHeight(150),
    paddingLeft: 10,
  },
  Send: {
    alignSelf: 'flex-end',
    marginRight: '5%',
    marginTop: setValueBasedOnHeight(10),
  },
});
