import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useMutation, useQuery} from '@tanstack/react-query';
import {STORAGE_KEYS} from '../../../constants/queryKeys';
import {deleteEvent, getAllEvents} from '../../../APIServices/App';
import CustomModal from '../../../Components/CustomModal/CustomModal';
import {DeleteIcon, EditIcon, PopMenuIcon, ViewIcon} from '../../../assets/images';
import {innerContainer, queryClient, triggerStyles} from '../../../constants/common';

import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import NavigationStrings from '../../../constants/NavigationStrings';
import { useNavigation } from '@react-navigation/native';

const ViewEvents = props => {
  const {route} = props || {};
  const {params} = route || {};
  const {userData} = params || {};
  console.log(userData,'userDatauserDatauserDatauserDatauserData' );

  // Get the navigation object using the useNavigation hook
  const navigation = useNavigation();

  const {data: getAllEventsData, isLoading: getAllEventsDataLoading} = useQuery(
    [STORAGE_KEYS.GET_ALL_EVENTS, { token: userData?.data?.PK_ID }],
    getAllEvents,
    {
      onSuccess(data) {
        // console.log(data, "On Success Data")
      },
      enabled: true,
      cacheTime: 0,
    },
  );
  
  const {mutate: deleteEventMutation} = useMutation(deleteEvent, {
    onSuccess: (data) => {
      console.log(data, "EVENT DELETED")
      queryClient.invalidateQueries([STORAGE_KEYS.GET_ALL_EVENTS]);
      navigation.navigate(NavigationStrings.HOME);
    },
    onError: (data) => {
      console.log(data.message.validationErrors, 'errrrrrrrrrr ');
    },
  });


  const [modalData, setModalData] = React.useState({});
  const handlePressModal = item => {
    setisDeleteAccountVisible(true);
    setModalData(item);
  };

  const handlePressEdit = data => {
    console.log(data, "datadatadatadatadatadata2222222222222")
    navigation.navigate(NavigationStrings.ADD_EVENTS, {EventData: data, pageTitle: "Update Event"});
  };
  const handlePressDelete = ID => {
    console.log(ID, 'DELTE');
    let formdata = new FormData();
    formdata.append('Delete', true);
    formdata.append('id', ID);
    formdata.append('token', 1);
    deleteEventMutation(formdata)
  };

  const GetEventData = () => {
    return (
      <View style={styles.modalChildWrapper}>
        <Text style={styles.sameText}>Event: {modalData?.name}</Text>
        <Text style={styles.sameText}>Start Date: {modalData?.startDate}</Text>
        <Text style={styles.sameText}>End Date:{modalData?.endDate}</Text>
        <Text style={styles.sameText}>
          Participants :{modalData?.participants}
        </Text>
      </View>
    );
  };
  const renderItem = (val, index) => {
    const {item} = val || {};
    const {participants} = item || {};
    // Check if participants is a string containing an array-like format
    const participantsArray =
      typeof participants === 'string'
        ? participants.split(',').map(participant => participant.trim())
        : participants;

    // Check if participantsArray is an array
    const participantsString = Array.isArray(participantsArray)
      ? `participants: ${participantsArray.join(', ')}`
      : '';
    return (
      <TouchableOpacity style={styles.renderRowWrapper} key={index}>
        <Text style={styles.eventName}>Event Name: {item?.name}</Text>
        <View style={styles.actionBtnWrapper}>
          <TouchableOpacity onPress={() => handlePressModal(item)}>
            <ViewIcon />
          </TouchableOpacity>
          <View style={styles.cheronWrapper}>
            <Menu>
              <MenuTrigger customStyles={triggerStyles}>
                <PopMenuIcon />
              </MenuTrigger>
              <MenuOptions customStyles={innerContainer}>
                <MenuOption onSelect={() => handlePressEdit(item)}>
                  <View style={styles.menuInnerWrapper}>
                    <View style={styles.menuIconInnerWrapper}>
                      <EditIcon />
                    </View>
                    <Text>Edit</Text>
                  </View>
                </MenuOption>
                <MenuOption onSelect={() => handlePressDelete(item?.PK_ID)}>
                  <View style={styles.menuInnerWrapper}>
                    <View style={styles.menuIconInnerWrapper}>
                      <DeleteIcon />
                    </View>
                    <Text>DELTED</Text>
                  </View>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const [isDeleteAccountVisible, setisDeleteAccountVisible] =
    React.useState(false);

  const changeDeleteModalVisible = isLogout => {
    if (isLogout == true) {
      setisDeleteAccountVisible(!isDeleteAccountVisible);
    } else {
      setisDeleteAccountVisible(!isDeleteAccountVisible);
    }
  };

  console.log(getAllEventsData, "getAllEventsDatagetAllEventsDatagetAllEventsData")

  return (
    <View style={styles.container}>
      {getAllEventsDataLoading ? (
        <Text>Loading</Text>
      ) : (
        <FlatList data={getAllEventsData?.data} renderItem={renderItem} showsVerticalScrollIndicator={false}/>
      )}
      <CustomModal
        changeDeleteModalVisible={changeDeleteModalVisible}
        setisDeleteAccountVisible={setisDeleteAccountVisible}
        isDeleteAccountVisible={isDeleteAccountVisible}
        title={modalData?.name}>
        <GetEventData />
      </CustomModal>
    </View>
  );
};

export default ViewEvents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  renderRowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'grey',
  },
  eventName: {
    fontSize: 15,
    color: '#000',
  },
  modalChildWrapper: {
    // backgroundColor: 'green',
  },
  sameText: {
    marginBottom: 10,
    fontSize: 15,
    color: '#000',
  },
  menuInnerWrapper: {
    width: '100%',
    flexDirection: 'row',
    textAlign: 'left',
  },
  menuIconInnerWrapper: {width: 30},
  actionBtnWrapper:{
    flexDirection: 'row',
    alignItems: 'center'
  }
});
