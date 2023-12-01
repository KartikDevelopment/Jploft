import React from 'react';
import {Text, View} from 'react-native';
import {CommonStyles} from '../../../utils/CommonStyles';
import {styles} from './styles';
import Logo from '../../../assets/images/Logo.svg';
import {setValueBasedOnHeight} from '../../../utils/deviceDimensions';
const Header = ({title = 'Title'}) => {
  return (
    <View style={styles.parent}>
      <Logo width={setValueBasedOnHeight(20)} />
      <Text style={CommonStyles.TXT_16_BOLD_WHITE}>{title}</Text>
    </View>
  );
};
export default Header;
