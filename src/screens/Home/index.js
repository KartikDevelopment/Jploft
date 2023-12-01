import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  LayoutAnimation,
  UIManager,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
import CheckListImg from '../../assets/images/Checklist.svg';
import {CommonStyles} from '../../utils/CommonStyles';
import Header from '../components/Header';
import ActionButton from 'react-native-action-button';
import {colors} from '../../utils/Colors';
import {SwipeListView} from 'react-native-swipe-list-view';
import AddItem from '../components/AddItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ItemDesc from '../components/ItemDesc';
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
const Home = () => {
  const [Addtask, setAddTask] = useState(false);
  const [arr, setArr] = useState([]);
  const [viewdesc, setViewDesc] = useState({
    visible: false,
    title: '',
    description: '',
  });
  useEffect(() => {
    AsyncStorage.getItem('tasks').then(data => {
      console.log(data);
      if (data) setArr(JSON.parse(data));
    });
  }, []);
  const EmptyListUi = () => {
    return (
      <View style={styles.emptyList}>
        <CheckListImg />
        <Text style={CommonStyles.TXT_16_BOLD_WHITE}>
          What do you want to do today?
        </Text>
        <Text style={CommonStyles.TXT_12_Regular_WHITE}>
          Tap + to add your tasks
        </Text>
      </View>
    );
  };
  const AddItem_ = (title, description) => {
    let item = {
      title: title,
      description: description,
      status: 'open',
    };
    let newArr = [...arr];
    newArr.push(item);
    AsyncStorage.setItem('tasks', JSON.stringify(newArr));
    setArr(newArr);
    setAddTask(false);
  };
  return (
    <View style={styles.parent}>
      <Header title="UpToDo" />
      {!arr.length ? (
        <EmptyListUi />
      ) : (
        <SwipeListView
          data={arr}
          keyExtractor={() => Math.random() * 10000}
          renderItem={(data, rowMap) => (
            <View style={styles.rowFront}>
              <View>
                <Text
                  style={[
                    CommonStyles.TXT_12_Regular_BOLD,
                    {textAlign: 'left'},
                  ]}>
                  {data.item.title}
                </Text>
                <Text
                  onPress={() => {
                    setViewDesc({
                      visible: true,
                      description: data.item.description,
                      title: data.item.title,
                    });
                  }}
                  style={CommonStyles.TXT_12_Regular_WHITE}>
                  {data.item.description.slice(0, 30)}
                </Text>
              </View>
              <View
                style={{
                  borderRadius: 20,
                  width: 10,
                  height: 10,
                  right: 10,
                  alignSelf: 'center',
                  backgroundColor:
                    data.item.status === 'completed' ? 'green' : 'red',
                }}
              />
            </View>
          )}
          renderHiddenItem={(data, rowMap) => (
            <View style={styles.rowBack}>
              <Text
                onPress={() => {
                  let newState = [...arr];
                  newState[data.index].status = 'completed';
                  AsyncStorage.setItem('tasks', JSON.stringify(newState));
                  setArr(newState);
                }}
                style={{
                  ...CommonStyles.TXT_12_Regular_WHITE,
                  backgroundColor: colors.color_363636,
                  color: 'green',
                }}>
                Complete
              </Text>
              <Text
                onPress={() => {
                  let newState = [...arr];
                  //   LayoutAnimation.configureNext({
                  //     ...LayoutAnimation.Presets.spring,
                  //   });
                  newState.splice(data.index, 1);
                  AsyncStorage.setItem('tasks', JSON.stringify(newState));
                  setArr(newState);
                }}
                style={{
                  ...CommonStyles.TXT_12_Regular_WHITE,
                  backgroundColor: colors.color_363636,
                  color: 'red',
                }}>
                Delete
              </Text>
            </View>
          )}
          leftOpenValue={75}
          rightOpenValue={-75}
        />
      )}
      <ActionButton
        buttonColor={colors.color_8687E7}
        onPress={() => {
          setAddTask(true);
        }}
      />
      <ItemDesc
        visible={viewdesc.visible}
        title={viewdesc.title}
        description={viewdesc.description}
        onClose={() => {
          setViewDesc({
            visible: false,
            description: '',
            title: '',
          });
        }}
      />
      <AddItem
        visible={Addtask}
        onClose={() => setAddTask(false)}
        onAdd={AddItem_}
      />
    </View>
  );
};
export default Home;
