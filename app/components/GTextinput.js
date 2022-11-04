import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTS, ICONSIZES, SIZES} from '../constants';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const GTextInput = props => {
  const {
    onChange,
    value,
    placeholder,
    placeholderTextColor,
    keyBoardType,
    leftIcon,
    leftIconSize,
    leftIconStyle,
    rightIcon,
    rightIconStyle,
    rightIconOnPress,
    leftIconOnPress,
    secureText,
    error,
    errorMessage,
    onEndEditing,
    multiline,
    numberOfLines,
    innerStyle,
    outerStyle,
    leftImageUri,
    editable,
    rightIconSize,
    rightIconColor,
    leftIconColor,
    autoFocus,
    rightIconLongPress,
  } = props;
  return (
    <>
      <View
        style={[
          {
            ...outerStyle,
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: error ? 1 : 0,
            borderColor: error ? COLORS.red : null,
          },
          styles.input,
        ]}>
        {Boolean(leftIcon) && (
          <MaterialIcon
            name={leftIcon}
            size={leftIconSize ? leftIconSize : ICONSIZES.normal}
            style={{
              marginRight: SIZES.base,
              ...leftIconStyle,
            }}
            color={leftIconColor ? leftIconColor : COLORS.black}
            onPress={leftIconOnPress}
          />
        )}
        {Boolean(leftImageUri) && (
          <Image
            source={{uri: leftImageUri}}
            style={{
              ...leftIconStyle,
              width: 30,
              height: 30,
              padding: SIZES.medium,
              marginLeft: SIZES.base * 3,
            }}
          />
        )}
        <TextInput
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor || COLORS.boldGray}
          keyboardType={keyBoardType}
          style={{flex: 1, color: COLORS.black, ...innerStyle}}
          secureTextEntry={secureText}
          onEndEditing={onEndEditing}
          multiline={multiline}
          numberOfLines={numberOfLines}
          editable={editable}
          autoFocus={autoFocus}
        />
        {Boolean(rightIcon) && (
          <TouchableOpacity style={{...rightIconStyle}}>
            <MaterialIcon
              name={rightIcon}
              size={Boolean(rightIconSize) ? rightIconSize : ICONSIZES.normal}
              // style={{marginRight: SIZES.base}}
              onPress={rightIconOnPress}
              onLongPress={rightIconLongPress}
              color={rightIconColor ? rightIconColor : COLORS.black}
            />
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <View style={{marginLeft: SIZES.medium, marginTop: -SIZES.base * 2}}>
          <Text style={{...FONTS.extraSmall, color: COLORS.red}}>
            {errorMessage}
          </Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    // height: 50,
    margin: 12,
    padding: Platform.OS === 'ios' ? 10 : 0,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.base * 2,
    paddingVertical: Platform.OS === 'ios' ? SIZES.medium : 0,
  },
});

export default GTextInput;
