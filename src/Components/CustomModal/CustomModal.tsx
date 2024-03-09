import {StyleSheet, Text,  View, TouchableOpacity } from 'react-native'
import React from 'react';
import ReactNativeModal from 'react-native-modal';

interface ICustomModal {
  title?: string;
  desc?: string;
  changeDeleteModalVisible: Function;
  setisDeleteAccountVisible: Function;
  isDeleteAccountVisible: boolean;
  isShowDesc?: boolean;
  isNetConnection?: boolean;
  primaryBtnTxt?: string;
  children?: any;
}

const CustomModal = ({
  changeDeleteModalVisible,
  setisDeleteAccountVisible,
  isDeleteAccountVisible,
  title = 'title',
  desc = 'desc',
  isShowDesc = true,
  isNetConnection = true,
  primaryBtnTxt = 'yes',
  children, 
}: ICustomModal) => {
  const closeModal = (bool: boolean) => {
    changeDeleteModalVisible(bool);
  };

  const handleBackDrop = (bool: boolean) => {
    setisDeleteAccountVisible(bool);
  };
  return (
    <ReactNativeModal
      animationIn={'fadeInUp'}
      animationOut={'fadeOutDownBig'}
      backdropOpacity={0.5}
      onBackdropPress={!isNetConnection ? null : () => handleBackDrop(false)}
      isVisible={isDeleteAccountVisible}
      backdropTransitionOutTiming={0}>
      <View style={styles.modal}>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          {/* {isShowDesc && 
           <Text style={styles.confirmText}>{desc}</Text>
           } */}
          {/* <View style={styles.buttonView}>
            <TouchableOpacity
              style={styles.btnWrapper}
              activeOpacity={isNetConnection ? 0.7 : 0.4}
              onPress={() => closeModal(true)}>
              <Text style={styles.text}>{primaryBtnTxt}</Text>
            </TouchableOpacity>
            {!isNetConnection ? (
              <></>
            ) : (
              <TouchableOpacity
                style={styles.btnWrapper}
                onPress={() => handleBackDrop(false)}>
                <Text style={styles.text}>no</Text>
              </TouchableOpacity>
            )}
          </View> */}
          {children}
        </View>
      </View>
    </ReactNativeModal>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    // alignItems: 'center',
  },
  modal: {
    paddingTop: 15,
    paddingBottom: 25,
    paddingHorizontal: 18,
    // backgroundColor: Colors.WHITE,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    borderRadius: 15,
    justifyContent: 'center',
  },
  buttonView: {
    flexDirection: 'row',
    width: '100%',
    // paddingHorizontal: Metrics.baseMargin,
    paddingHorizontal: 16,
    justifyContent: 'space-around',
    marginTop: 10,
  },
  text: {
    alignSelf: 'center',
    // ...Fonts.SemiBold(Fonts.Size.small, Colors.BLACK),
  },
  btnWrapper: {
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderRadius: 50,
    borderWidth: 1,
    // borderColor: Colors.GREY_BORDER,
    borderColor: "grey",
    justifyContent: 'center',
  },
  title: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    color: "#000",
    textTransform: 'uppercase'
  },
  confirmText: {
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default CustomModal;
