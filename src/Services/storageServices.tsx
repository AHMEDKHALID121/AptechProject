// import {MMKV} from 'react-native-mmkv';

// const storage = new MMKV();

// export const getItem = (key: string) => {
//   try {
//     const value = storage.getString(key);
//     if (value) {
//       return JSON.parse(value);
//     }
//     throw Error();
//   } catch (e) {
//     return null;
//   }
// };

// export const setItem = (
//   key: string,
//   value: string | number | boolean | object,
// ) => {
//   const storeValue = JSON.stringify(value);
//   return storage.set(key, storeValue);
// };

// export const removeItem = (key: string) => storage.delete(key);

// export const clearAllData = () => storage.clearAll();
import AsyncStorage from '@react-native-async-storage/async-storage';

// Store data
export const setItem = async (key, value) => {
  try {
    const storeValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, storeValue);
    console.log('Data stored successfully.');
  } catch (error) {
    console.error('Error storing data:', error);
  }
};

// Retrieve data
export const getItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      const parsedValue = JSON.parse(value);
      console.log('Retrieved data:', parsedValue);
      return parsedValue;
    } else {
      console.log('No data found for key:', key);
      return null;
    }
  } catch (error) {
    console.error('Error retrieving data:', error);
    return null;
  }
};

// Remove item
export const removeItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log('Item removed successfully.',key);
  } catch (error) {
    console.error('Error removing item:', error);
  }
};


// Clear all data (if needed)
export const clearAllData = async () => {
  try {
    await AsyncStorage.clear();
    console.log('All data cleared successfully.');
  } catch (error) {
    console.error('Error clearing all data:', error);
  }
};
