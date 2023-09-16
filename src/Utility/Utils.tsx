// import { GET_RECEIPT } from '@Constants/constants';
// import {Colors} from '@Theme/index';
import debounce from 'lodash.debounce';
import get from 'lodash.get';
import {Linking, Platform, Alert} from 'react-native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
// import RNFetchBlob from 'rn-fetch-blob';
class utility {
  isPlatformAndroid = () => Platform.OS === 'android';
  isPlatformIOS = () => Platform.OS === 'ios';
  logoutAction: Function | null | undefined = null;

  async openURLCall(url: string) {
    return Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          console.log('Cant handle url' + url);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch(err => console.error('An error occurred', err));
  }

  getValue(...param: any[]) {
    return get(...param);
  }

  debounce(...param: any[]) {
    return debounce(...param);
  }

  isEmpty(value: string | number | boolean | Array<any> | object): boolean {
    return (
      value === undefined ||
      value === null ||
      value === NaN ||
      value === false ||
      value === 0 ||
      (typeof value === 'object' && Object.keys(value).length === 0) ||
      (typeof value === 'string' && value.trim().length === 0)
    );
  }

  createDynamicUrl(dynamicUrl: string, object: any) {
    for (const key in object) {
      dynamicUrl = dynamicUrl.replace(`{${key}}`, object[key]);
    }
    return dynamicUrl;
  }
  setLogoutAction(cb: Function) {
    if (cb && typeof cb === 'function') {
      this.logoutAction = cb;
    }
  }
  getLogoutAction() {
    return this.logoutAction;
  }
  // checking value logic condition if value is == condition (This Function return Boolean )
  conditionRendering = (item, logic, condition) => {
    switch (logic) {
      case '==':
        return item == condition;
      case '>':
        return item > condition;
      case '<':
        return item < condition;
      case '>=':
        return item >= condition;
      case '<=':
        return item <= condition;
      default:
        throw new Error('Invalid logic operator');
    }
  };

  // Create form data object from selected image
  createFormData = photo => {
    let formObject = {};
    for (let key in photo) {
      if (!photo[key][0].fileName) {
        photo[key][0].fileName =
          photo[key][0].path.split('/')[
            photo[key][0].path.split('/').length - 1
          ];
      }
      if (!photo[key][0].type) {
        photo[key][0].type = photo[key][0].mime;
      }
      if (!photo[key][0].uri) {
        photo[key][0].uri = photo[key][0].path;
      }
      formObject = {
        name: photo[key][0].fileName,
        type: photo[key][0].type,
        uri: photo[key][0].uri,
      };
    }
    return formObject;
  };

  // addColorKey = payload => {
  //   const updatedQualityReport = payload?.map(item => {
  //     const value = parseFloat(item.value.slice(0, -1)); // Remove the percentage sign and convert to float

  //     if (isNaN(value)) {
  //       return {
  //         ...item,
  //         color: Colors.Colors.DARK_BLACK,
  //       };
  //     } else if (value > 70) {
  //       return {
  //         ...item,
  //         color: Colors.Colors.DARK_GREEN,
  //       };
  //     } else if (value > 40) {
  //       return {
  //         ...item,
  //         color: 'orange',
  //       };
  //     } else {
  //       return {
  //         ...item,
  //         color: Colors.Colors.RED,
  //       };
  //     }
  //     // }
  //     return item; // Value is not a number, no color key added
  //   });

  //   return {
  //     qualityReport: updatedQualityReport,
  //   };
  // };
  showAlert(title = 'Title', desc = 'Description', cbOnAccept = () => {}) {
    Alert.alert(title, desc, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Accept', onPress: cbOnAccept},
    ]);
  }
}

export default new utility();


 // For Downloading PDF in Api Response
//  export const downloadPdf = (pdfUrl: any) => {
//   const downloadDest = `${RNFetchBlob.fs.dirs.DownloadDir}${GET_RECEIPT.DOWNLOADING_PATH}`;
//   RNFetchBlob.config({
//     fileCache: true,
//     addAndroidDownloads: {
//       useDownloadManager: true,
//       notification: true,
//       title: GET_RECEIPT.STATUS_BAR_TITLE,
//       description: GET_RECEIPT.STATUS_BAR_DESC,
//       mime: 'application/pdf',
//       path: downloadDest,
//     },
//   })
//     .fetch('GET', pdfUrl)
//     .then(res => {
//       Toast.show({
//         type: 'success',
//         text1: GET_RECEIPT.SUCCESS_TITLE,
//         text2: GET_RECEIPT.SUCCESS_DESC,
//       });
//     })
//     .catch(error => {
//       console.error('Error downloading PDF:', error);
//       Toast.show({
//         type: 'error',
//         text1: GET_RECEIPT.ERROR_TITLE,
//         text2: GET_RECEIPT.ERROR_DESC,
//       });
//     });
// };

export const openExternalLink = (openLink: any) => {
  Linking.openURL(openLink).catch(err => console.error('An error occurred', err))
}


export const openPhoneDialer = (phoneNumber:any) => {
  Linking.openURL(`tel:${phoneNumber}`).catch(err => console.error('An error occurred', err))
};

export const BUS_EVENTS = {
  HANDLE_LOGOUT_EVENT: 'HANDLE_LOGOUT_EVENT',
};