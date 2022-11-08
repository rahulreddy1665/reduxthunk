import {View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from './constants/Constants';
import {GlobalStyles} from './Styles/Globalstyles';
import logo from '../images/logo.png';

const Splashscreen = () => {
  const navigation = useNavigation();
  //   Timeout function for splashscreen
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(ScreenNames.MAIN);
    }, 500);
  }, []);

  <View style={GlobalStyles.container}>
    <Image source={logo} style={GlobalStyles.Splashscreen} />
  </View>;
};

export default Splashscreen;
