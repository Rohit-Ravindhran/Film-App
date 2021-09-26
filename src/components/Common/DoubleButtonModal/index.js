import React from 'react';
import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import WarningRed from '../../../assets/icons/warning_red.png';
import {Colors} from '../../../theme/Colors';
import styles from './style';
import {useScreenContext} from '../../../services/Context';

const DoubleButtonModal = React.memo(props => {
  const screenContext = useScreenContext();
  const screenStyles = styles(
    screenContext,
    screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
    screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
  );
  const {isVisible, data, icon, onConfirm, onCancel, hideModal} = props;

  return (
    <Modal
      isVisible={isVisible}
      backdropColor={Colors.theme.backgroundSecondary}
      backdropOpacity={0.3}
      animationIn="zoomInDown"
      animationOut="zoomOutUp"
      animationInTiming={600}
      animationOutTiming={600}
      onBackdropPress={hideModal ? () => hideModal() : null}
      backdropTransitionInTiming={600}
      backdropTransitionOutTiming={600}
      deviceWidth={screenContext.windowWidth}
      deviceHeight={screenContext.windowHeight + StatusBar.currentHeight}>
      <View style={screenStyles.modelContainer}>
        <View style={screenStyles.alertContainer}>
          <View style={screenStyles.headerContainer}>
            <Text style={screenStyles.headerText}>{data.hederText}</Text>
          </View>
          <View style={screenStyles.imageContainer}>
            <Image
              source={icon ? icon : WarningRed}
              style={screenStyles.imageCover}
            />
          </View>
          <View style={screenStyles.infoContainer}>
            <Text style={screenStyles.infoText}>{data.infoText}</Text>
          </View>
          <View style={screenStyles.buttonContainer}>
            <TouchableOpacity
              style={screenStyles.selectButton}
              onPress={() => onCancel()}>
              <Text style={screenStyles.buttonText}>{data.cancelText}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={screenStyles.selectButton}
              onPress={() => onConfirm()}>
              <Text style={screenStyles.buttonText}>{data.confirmText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
});

// Prop type validation
DoubleButtonModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
  icon: PropTypes.any,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default DoubleButtonModal;
