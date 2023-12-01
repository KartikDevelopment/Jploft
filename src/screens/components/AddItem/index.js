import React, {useEffect} from 'react';
import {useState} from 'react';
import {
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ToastAndroid,
  Platform,
  AlertIO,
} from 'react-native';
import {styles} from './styles';
import {CommonStyles} from '../../../utils/CommonStyles';
import {setValueBasedOnHeight} from '../../../utils/deviceDimensions';
import {colors} from '../../../utils/Colors';
import Send from '../../../assets/images/send.svg';
const AddItem = ({visible = true, onClose = () => {}, onAdd = () => {}}) => {
  const [isFocused, setFocus] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setdesc] = useState('');
  function notifyMessage(msg) {
    if (Platform.OS === 'android') {
      ToastAndroid.show(msg, ToastAndroid.SHORT);
    } else {
      AlertIOS.alert(msg);
    }
  }
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}>
      <TouchableOpacity style={{flex: 1}} onPress={onClose} />
      <View style={styles.parent}>
        <Text
          style={[
            CommonStyles.TXT_16_BOLD_WHITE,
            {margin: setValueBasedOnHeight(10)},
          ]}>
          Add Task
        </Text>
        <TextInput
          onFocus={() => setFocus('title')}
          onBlur={() => console.log('focus lost')}
          placeholder="Add Title"
          maxLength={30}
          onChangeText={txt => setTitle(txt)}
          placeholderTextColor={colors.color_AFAFAF}
          style={[
            styles.Input,
            isFocused == 'title' && {borderWidth: 1, borderColor: colors.white},
          ]}
        />
        <View
          style={[
            styles.Input_desc,
            isFocused == 'description' && {
              borderWidth: 1,
              borderColor: colors.white,
            },
          ]}>
          <TextInput
            onFocus={() => setFocus('description')}
            placeholder="Add description"
            maxLength={250}
            onChangeText={txt => setdesc(txt)}
            placeholderTextColor={colors.color_AFAFAF}
            multiline={true}
            style={[styles.Input, {width: '100%', paddingLeft: 0}]}
          />
        </View>
        <TouchableOpacity
          style={styles.Send}
          onPress={() => {
            if (title && desc) {
              onAdd(title, desc);
              setTitle('');
              setdesc('');
            } else {
              notifyMessage('Title and Description are required');
            }
          }}>
          <Send />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
export default AddItem;
