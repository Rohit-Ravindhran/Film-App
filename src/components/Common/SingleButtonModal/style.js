import {StyleSheet, PixelRatio, Platform} from 'react-native';
import {Colors} from '../../../theme/Colors';
import StaticVariables from '../../../preference/StaticVariables';

const styles = (screenContext, width, height) =>
  StyleSheet.create({
    modelContainer: {
      flex: 1,
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
      marginTop: height * 0.01,
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
      alignItems: 'flex-end',
      justifyContent: 'center',
      marginRight: height * 0.02,
      paddingTop: height * 0.02,
    },
    headerText: {
      fontSize:
        (screenContext.isTypeTablet ? 25 : 19) / screenContext.windowFontScale,
      fontWeight: 'bold',
      fontFamily:
        Platform.OS === StaticVariables.PLATFORM_ANDROID ? 'Roboto' : null,
    },
    imageCover: {
      marginTop: height * 0.01,
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
      fontFamily:
        Platform.OS === StaticVariables.PLATFORM_ANDROID ? 'Roboto' : null,
      color: Colors.theme.appPrimary,
    },
  });

export default styles;
