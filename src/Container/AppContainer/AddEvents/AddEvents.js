import React, {useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useMutation, useQuery} from '@tanstack/react-query';
import {createEvent, getAllUsers, updateEvent} from '../../../APIServices/App';
import NavigationStrings from '../../../constants/NavigationStrings';
import {useNavigation} from '@react-navigation/native';
import {queryClient} from '../../../constants/common';
import {STORAGE_KEYS} from '../../../constants/queryKeys';
import SimpleModal from '../../../Components/SimpleModal/SimpleModal';

const AddEvents = props => {
  const {route} = props || {};
  const {params} = route || {};
  const {EventData, userData} = params || {};
  console.log(EventData, 'Edit Event Data', userData);



  // Get the navigation object using the useNavigation hook
  const navigation = useNavigation();


  const {data: getAllUsersData, isLoading: getAllUsersLoading} = useQuery(
    [STORAGE_KEYS.GET_ALL_EVENTS],
    getAllUsers,
    {
      onSuccess(data) {
        // console.log(data, "On Success Data")
      },
      enabled: EventData ? false : true,
      cacheTime: 0,
    },
  );
   

  const [data, setData] = React.useState();

  useEffect(() => {
     // Add the isSelected key with an initial value of false to each object
     const updatedData = getAllUsersData?.data?.map((item) => ({
      ...item,
      isSelected: false,
     }));
    setData(updatedData)
  },[getAllUsersData])

  const [selectedLanguageValue, setSelectedLanguageValue] = React.useState();
  const [isLanguageModalVisible, setisLanguageModalVisible] =
    React.useState(false);
  const changeLanguageModalVisible = (bool: boolean) => {
    setisLanguageModalVisible(bool);
  };
  const handleCallbackValue = (dataa: any) => {

    const names = dataa.map(item => {
     return item.name
    });
    const concatenatedNames = names.join(" , ");
    let payload = {
      id: 1,
      name: concatenatedNames,
    }
    setSelectedLanguageValue(payload);
    setValue('participants', concatenatedNames);
  };

  const {mutate: updateEventEventMutation} = useMutation(updateEvent, {
    onSuccess: data => {
      queryClient.invalidateQueries([STORAGE_KEYS.GET_ALL_EVENTS]);
      navigation.navigate(NavigationStrings.HOME);
    },
    onError: data => {
      console.log(data.message.validationErrors, 'errrrrrrrrrr ');
    },
  });

  const {mutate: createEventMutation} = useMutation(updateEvent, {
    onSuccess: data => {
      queryClient.invalidateQueries([STORAGE_KEYS.GET_ALL_EVENTS]);
      navigation.navigate(NavigationStrings.HOME);
    },
    onError: data => {
      console.log(data.message.validationErrors, 'errrrrrrrrrr ');
    },
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
  } = useForm({
    defaultValues: {
      name: EventData?.name || '',
      startDate: EventData?.startDate || '',
      endDate: EventData?.endDate || '',
      participants: selectedLanguageValue?.name || '',
    },
  });

  const onSubmit = async data => {
    const {name, startDate, endDate, participants} = data;
    console.log(data, "datadatadata")
    let formdata = new FormData();
    formdata.append('name', name);
    formdata.append('startDate', startDate);
    formdata.append('endDate', endDate);
    formdata.append('participants', participants);
    if (EventData) {
      formdata.append('Edit', 'true');
      formdata.append('userId', EventData?.userId);
      formdata.append('id', EventData?.PK_ID);
    } else {
      formdata.append('Create', 'true');
    }
    formdata.append('token', userData?.data?.PK_ID ? userData?.data?.PK_ID : EventData?.userId);
    console.log(formdata, 'Final Form Data');
    if (EventData == null || EventData == undefined) {
      createEventMutation(formdata);
    } else {
      updateEventEventMutation(formdata);
    }
  };



  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.inputStyle}
            placeholder="First name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="name"
      />
      {errors.name && <Text style={styles.errorText}>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.inputStyle}
            placeholder="2023-11-11"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="startDate"
      />
      {errors.startDate && (
        <Text style={styles.errorText}>This is required.</Text>
      )}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.inputStyle}
            placeholder="2023-12-12"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="endDate"
      />
      {errors.endDate && (
        <Text style={styles.errorText}>This is required.</Text>
      )}


     {!EventData && (
      <>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
           <>
            <TouchableOpacity onPress={() => changeLanguageModalVisible(true)}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Participants"
              onBlur={onBlur}
              onChangeText={onChange}
              value={selectedLanguageValue?.name}
              editable={false}
              pointerEvents="none"
              isDisabled={true}
              
            />
        </TouchableOpacity>
           </>
          )}
          name="participants"
        />
      {errors.participants && (
        <Text style={styles.errorText}>This is required.</Text>
      )}
      </>
     )}
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={styles.btnWrapper}>
        <Text style={styles.btnText}>
          {EventData ? 'Update Event' : 'Create Event'}
        </Text>
      </TouchableOpacity>
      {/* modal for other  */}
      <SimpleModal
        changeModalVisible={changeLanguageModalVisible}
        setisLanguageModalVisible={setisLanguageModalVisible}
        isLanguageModalVisible={isLanguageModalVisible}
        data={data}
        setData={setData}
        selectedLangValue={selectedLanguageValue}
        cbValue={handleCallbackValue}
        title={'Participants'}
      />
    </View>
  );
};

export default AddEvents;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 15,
    borderRadius: 100,
    paddingHorizontal: 25,
    color: "#000"
  },
  btnWrapper: {
    backgroundColor: '#ccc',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 100,
  },
  btnText: {
    color: '#000',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    marginTop: -10,
  },
});
