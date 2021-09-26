import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {store} from '../../redux/store';
import ApiProvider from '../../services/Api';
import {AuthUrl} from '../../services/Api/model/ApiUrl';
import ConfigSettings from '../../preference/ConfigSettings';
import StaticVariables from '../../preference/StaticVariables';

store.subscribe(handleStore);

const backupState = StaticVariables.EMPTY_OBJECT;

function handleStore() {
  const newState = store.getState();
  if (newState.user.user === null) {
    backupState.userInfo = {};
  } else {
    const user = {
      companyName: newState.user.user.company.name,
      companyId: newState.user.user.company.id,
      userId: newState.user.user.id,
      userName: newState.user.user.userName,
    };
    backupState.userInfo = user;
  }
}

export const errorHandler = errorData => {
  const deviceInfo = {
    appVersion: ConfigSettings.appVersion,
    OS: Platform.OS,
    OSVersion: Platform.Version,
    deviceBrand: DeviceInfo.getBrand(),
    deviceModel:
      Platform.OS === StaticVariables.PLATFORM_IOS
        ? DeviceInfo.getDeviceId()
        : Platform.constants.Model,
  };
  const userInfo = backupState.userInfo;
  const errorInfo = {...errorData};
  const trackParams = new FormData();
  trackParams.append('deviceInfo', JSON.stringify(deviceInfo));
  trackParams.append('errorInfo', JSON.stringify(errorInfo));
  trackParams.append('userInfo', JSON.stringify(userInfo));
  console.log('trackParams', JSON.stringify(trackParams));
  ApiProvider.postAppInstance(AuthUrl.trackException, trackParams).then(
    response => {
      if (response === false) {
      } else {
        if (response.success === true) {
          // const newState = store.getState();
          // const currentApiList = [...newState.offline.apiList];
          // const modApiList = currentApiList.filter(
          //   (item) => item.id !== element.id,
          // );
          // store.dispatch(setOfflineApi(modApiList));
        }
      }
    },
  );
};
