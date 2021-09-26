import {StyleSheet, PixelRatio, Platform} from 'react-native';
import {Colors} from '../../../theme/Colors';
import StaticVariables from '../../../preference/StaticVariables';

const styles = (screenContext, width, height) =>
  StyleSheet.create({
    modelContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    alertContainer: {
      backgroundColor: Colors.theme.backgroundPrimary,
      shadowOpacity: 0.6,
      shadowRadius: 3,
      shadowColor: Colors.theme.backgroundSecondary,
      shadowOffset: {height: 3, width: 3},
      borderRadius: width / 30,
      width: width / 1.1,
      elevation: 3,
      padding: height * 0.02,
    },
    headerContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: height * 0.01,
    },
    imageContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    infoContainer: {
      paddingTop: height * 0.02,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: height * 0.02,
    },
    selectButton: {
      flex: 1,
      alignItems: 'center',
    },
    headerText: {
      fontSize:
        (screenContext.isTypeTablet ? 25 : 19) / screenContext.windowFontScale,
      fontWeight: 'bold',
      fontFamily:
        Platform.OS === StaticVariables.PLATFORM_ANDROID ? 'Roboto' : null,
    },
    imageCover: {
      width: screenContext.isTypeTablet
        ? PixelRatio.getPixelSizeForLayoutSize(15)
        : PixelRatio.getPixelSizeForLayoutSize(10),
      height: screenContext.isTypeTablet
        ? PixelRatio.getPixelSizeForLayoutSize(15)
        : PixelRatio.getPixelSizeForLayoutSize(10),
    },
    infoText: {
      fontSize:
        (screenContext.isTypeTablet ? 21 : 15) / screenContext.windowFontScale,
      fontFamily:
        Platform.OS === StaticVariables.PLATFORM_ANDROID ? 'Roboto' : null,
    },
    buttonText: {
      fontSize:
        (screenContext.isTypeTablet ? 20 : 14) / screenContext.windowFontScale,
      color: Colors.theme.appPrimary,
      fontFamily:
        Platform.OS === StaticVariables.PLATFORM_ANDROID ? 'Roboto' : null,
    },
  });

export default styles;
