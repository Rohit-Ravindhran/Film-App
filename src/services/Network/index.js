import NetInfo from '@react-native-community/netinfo';

// Network provider services
class NetworkProvider {
  static connected = false;
  static unSubscribeNetwork = null;

  // Check for network
  static checkNetwork() {
    NetInfo.fetch().then(state => {
      NetworkProvider.connected = state.isConnected;
    });
  }

  // Subscribe to network change
  static subscribeNetwork() {
    NetworkProvider.unSubscribeNetwork = NetInfo.addEventListener(state => {
      console.log('Connection state', state);
      NetworkProvider.connected = state.isConnected;
    });
  }

  // Unsubscribe to network change
  static unSubscribeNetwork() {
    NetworkProvider.unSubscribeNetwork();
  }
}

export default NetworkProvider;
