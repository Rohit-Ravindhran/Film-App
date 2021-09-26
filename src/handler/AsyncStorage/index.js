import AsyncStorage from '@react-native-async-storage/async-storage';
import StaticVariables from '../../preference/StaticVariables';

// Async Storage handler
class AsyncStorageHandler {
  // Store data
  static storeData = async (asyncKey, asyncValue) => {
    try {
      await AsyncStorage.setItem(asyncKey, JSON.stringify(asyncValue));
    } catch (error) {
      // Error saving data
    }
  };

  // Get data
  static retrieveData = async AsyncName => {
    try {
      await AsyncStorage.getItem(AsyncName).then(res => {
        //do something else
        if (res) {
          return res;
        } else {
          return null;
        }
      });
    } catch (error) {
      // Error retrieving data
      // return error;
    }
  };

  // Delete data
  static deleteData = async () => {
    try {
      await AsyncStorage.removeItem(StaticVariables.ASYNC_KEY);
      AsyncStorageHandler.login = null;
    } catch (error) {
      // Error retrieving data
      return error;
    }
  };

  // Clear Async storage
  static clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      // clear error
    }
  };
}

export default AsyncStorageHandler;
