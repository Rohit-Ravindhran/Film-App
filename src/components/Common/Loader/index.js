import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {Modal, Portal, ActivityIndicator} from 'react-native-paper';
import {Colors} from '../../../theme/Colors';
import styles from './style';

// Loader component
const Loader = React.memo(props => {
  const {loading} = props;
  const user = useSelector(state => state.user.user);
  const appColor =
    user !== null ? user.brandingDetails.primarycolor : Colors.theme.appPrimary;

  return (
    <Portal>
      <Modal visible={loading} onDismiss={() => {}}>
        <View style={styles.modalBackground}>
          <ActivityIndicator
            animating={loading}
            size="large"
            color={appColor}
          />
        </View>
      </Modal>
    </Portal>
  );
});

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Loader;
