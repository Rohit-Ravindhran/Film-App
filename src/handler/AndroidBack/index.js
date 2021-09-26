import {Platform, BackHandler, Alert} from 'react-native';
import StaticVariables from '../../preference/StaticVariables';
// import NavigationService from '../../services/Navigation/NavigationService';

// Android back button handler
class AndroidBackHandler {
  static backHandler;

  // Watch android back button
  static watchBackHandler(page) {
    if (Platform.OS === StaticVariables.PLATFORM_ANDROID) {
      AndroidBackHandler.backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          AndroidBackHandler.goBack(page); // works best when the goBack is async
          return true;
        },
      );
    }
  }

  // Go to previous page
  static goBack(page) {
    if (
      page === StaticVariables.PAGE_LOGIN ||
      page === StaticVariables.PAGE_DASHBOARD
    ) {
      Alert.alert(
        'Exit',
        'Do you want to exit SafeTapp',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => AndroidBackHandler.exitApp()},
        ],
        {cancelable: false},
      );
    } else {
      // NavigationService.goBack();
    }
  }

  // Exit app
  static exitApp() {
    BackHandler.exitApp();
  }

  // Unwatch back button
  static endBackHandler() {
    if (Platform.OS === StaticVariables.PLATFORM_ANDROID) {
      AndroidBackHandler.backHandler.remove();
    }
  }
}

export default AndroidBackHandler;
