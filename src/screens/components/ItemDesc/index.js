import React, {useEffect} from 'react';
import {useState} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {CommonStyles} from '../../../utils/CommonStyles';
const ItemDesc = ({
  visible = true,
  onClose = () => {},
  title = '',
  description = '',
}) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}>
      <TouchableOpacity style={{flex: 1}} onPress={onClose} />
      <View style={styles.parent}>
        <Text style={[CommonStyles.TXT_16_BOLD_WHITE, {marginBottom: 10}]}>
          {title}
        </Text>
        <Text style={CommonStyles.TXT_12_Regular_WHITE}>{description}</Text>
      </View>
      <TouchableOpacity style={{flex: 1}} onPress={onClose} />
    </Modal>
  );
};
export default ItemDesc;
