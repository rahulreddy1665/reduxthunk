import {Linking, Alert, Platform} from 'react-native';

export const EmailValidation = email => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

export const callNumber = phone => {
  let phoneNumber = phone;
  if (Platform.OS === 'ios') {
    phoneNumber = `tel:${phone}`;
    // phoneNumber = `tel://${phone}`;
  } else {
    phoneNumber = `tel:${phone}`;
  }

  Linking.openURL(phoneNumber);
  // Linking.canOpenURL(phoneNumber)
  //   .then(supported => {
  //     if (!supported) {
  //       Alert.alert('Phone number is not available');
  //     } else {
  //       return Linking.openURL(phoneNumber);
  //     }
  //   })
  //   .catch(err => console.log(err));
};
