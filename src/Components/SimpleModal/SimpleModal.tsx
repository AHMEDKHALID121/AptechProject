import React, {useState} from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity,Platform, Text} from 'react-native';
import ReactNativeModal from 'react-native-modal';

interface ICustomModal {
  data?: any;
  cbValue?: any;
  changeModalVisible: Function;
  setisLanguageModalVisible: Function;
  isLanguageModalVisible: boolean;
  item?: any;
  title?: String;
  selectedLangValue?: any;
  setSelectedLanguageValue?: any;
  handleSelectedLanguage?: any;
  setData?: any;
}

interface IRenderItem {
  item?: any;
  index?: number;
}

const SimpleModal = ({
  changeModalVisible,
  setisLanguageModalVisible,
  isLanguageModalVisible,
  data,
  cbValue,
  selectedLangValue,
  title = 'SelectLanguage',
  setSelectedLanguageValue,
  handleSelectedLanguage,
  setData
}: ICustomModal) => {
  const closeModal = (bool: boolean) => {
    changeModalVisible(bool);
  };

  const handleBackDrop = (bool: boolean) => {
    setisLanguageModalVisible(bool);
  };
  const handlePressSelection = (itemId) => {
    const updatedData = data.map((item) => {
      if (item.PK_ID === itemId) {
        if (item.isSelected === undefined) {
          // If 'isSelected' key doesn't exist, add it
          console.log("ok")
          return { ...item, isSelected: true };
        }
        console.log("not ok")
        return { ...item, isSelected: !item.isSelected };
      }
      return item;
    });
    setData(updatedData);
  };

  const handleDonePress = () => {
    const selectedValues = data.filter((item) => item.isSelected);
    closeModal(false);
    cbValue && cbValue(selectedValues);
  };
  const renderItem = ({item, index}: IRenderItem) => {
    return (
      <View style={styles.main}>
        <TouchableOpacity onPress={() => handlePressSelection(item?.PK_ID)}>
          <View style={styles.radioWrapper}>
            <View
              style={[
                styles.radio,
                item.isSelected
                  ? {borderColor: "blue"}
                  : {borderColor: "gray"},
              ]}>
              {item.isSelected? (
                <View style={styles.radioBg} />
              ) : null}
            </View>
            <Text style={styles.textStyle}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ReactNativeModal
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      backdropOpacity={0.4}
      onBackdropPress={() => handleBackDrop(false)}
      animationInTiming={50}
      animationOutTiming={200}
      isVisible={isLanguageModalVisible}
      backdropTransitionOutTiming={0}>
      <View style={styles.modal}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          style={[
            {flex: 1, paddingBottom: 16},
            Platform.OS === 'ios'
              ? {marginBottom: 25}
              : {marginBottom: 20},
          ]}
          keyExtractor={item => item?.id}
        />
        <View style={styles.buttonView}>
        <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => handleDonePress()}>
            <Text style={styles.text}>Done</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => closeModal(false)}>
            <Text style={styles.text}>cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ReactNativeModal>
  );
};

const styles = StyleSheet.create({
  modal: {
    height: 270,
    width: '100%',
    paddingTop: 10,
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  buttonView: {
    width: '100%',
    flexDirection: 'row',
  },
  text: {
    color: "blue",
    alignSelf: 'flex-end',
    marginRight: 16,
    margin: 10,
  },
  touchableOpacity: {
    paddingVertical: 10,
    alignItems: 'center',
    marginLeft: 'auto',
  },
  title: {
    margin: 12,
    marginHorizontal: 20,
  },
  main: {
    marginHorizontal: 15,
    flex: 1,
    justifyContent: 'center',
  },
  radio: {
    height: 22,
    width: 22,
    borderWidth: 1,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  radioBg: {
    backgroundColor: "blue",
    height: 13,
    width: 13,
    borderRadius: 13,
  },
  textStyle: {marginHorizontal: 10},
});

export default SimpleModal;
