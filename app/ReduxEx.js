import React from 'react';
import {useState} from 'react';
import {
  ActivityIndicator,
  Button,
  PermissionsAndroid,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Contacts from 'react-native-contacts';
import {connect} from 'react-redux';
import * as actions from '../app/actions/actions';
import GTextInput from './components/GTextinput';
import {lastNameErrMsg, userNameErrMsg} from './utils/Strings';

const ReduxAsyncApp = props => {
  const [userName, setUserName] = useState(null);
  const [Contatcs, setContacts] = useState([]);
  const [userNameError, setUserNameError] = useState(false);
  const [lastName, setlastName] = useState(null);
  const [lastNameError, setLastNameError] = useState(false);
  const LoadContatcs = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    }).then(
      Contacts.getAll()
        .then(contacts => {
          // work with contacts
          console.log('Totoal Contatcs' + JSON.stringify(contacts));
          setContacts(contacts);
        })
        .catch(e => {
          console.log(e);
        }),
    );
  };
  return (
    <ScrollView>
      {props.isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <Text style={{fontSize: 24, textAlign: 'center'}}>{props.quote}</Text>
          <Button title="Load Quote" onPress={() => props.loadQuote()} />
          <Button
            title="Load contacts"
            style={{marginTop: 20}}
            onPress={LoadContatcs}></Button>
          {Contatcs.map(item => (
            <View key={item.recordID} style={{justifyContent: 'center'}}>
              <Text style={{fontSize: 18}}>
                {' '}
                {`${item.givenName} ${item.familyName}`}{' '}
              </Text>
            </View>
          ))}
          <View>
            <GTextInput
              onChange={txt => {
                setUserName(txt);
                setUserNameError(false);
              }}
              value={userName}
              placeholder={'Enter your first name'}
              error={userNameError}
              errorMessage={userNameErrMsg}
            />
          </View>
          <View>
            <GTextInput
              onChange={txt => {
                setlastName(txt);
              }}
              value={lastName}
              placeholder={'Enter your last name'}
              error={lastNameError}
              errorMessage={lastNameErrMsg}
            />
          </View>
        </View>
      )}
    </ScrollView>
  );
};

// For mapping the redux state to the page
const mapStateToProps = state => {
  return {
    quote: state.common.quote,
    isLoading: state.common.isLoading,
    error: state.common.error,
  };
};

// For mapping the function to the page(i.e the function which we called in reducers)
const mapDispatchToProps = dispatch => {
  return {
    loadQuote: () => dispatch(actions.loadQuote()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxAsyncApp);
