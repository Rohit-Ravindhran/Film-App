import NetInfo from '@react-native-community/netinfo';
import {store} from '../../redux/store';
import {setOfflineApi} from '../../redux/actions/offline';
import ApiProvider from '../../services/Api';

let networkListener;

// Subscribe
export function subscribeToNetworkChanges() {
  networkListener = NetInfo.addEventListener(state => {
    if (state.isInternetReachable) {
      try {
        const currentState = store.getState();
        const apiList = [...currentState.offline.apiList];
        setTimeout(() => {
          apiList.forEach((element, index) => {
            const apiParams = new FormData();
            element.apiParams.forEach(val => {
              apiParams.append(val.key, val.value);
            });
            ApiProvider.postAppInstance(element.url, apiParams).then(
              response => {
                if (response === false) {
                } else {
                  if (response.success === true) {
                    const newState = store.getState();
                    const currentApiList = [...newState.offline.apiList];
                    const modApiList = currentApiList.filter(
                      item => item.id !== element.id,
                    );
                    store.dispatch(setOfflineApi(modApiList));
                  }
                }
              },
            );
          });
        }, 3000);
      } catch (error) {
        console.log(`Offline error${error}`);
      }
    }
  });
}

export function unSubscribeNetworkChanges() {
  networkListener();
}
