import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import * as actions from '../app/actions/actions';
import {connect} from 'react-redux';
import {PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';
import {useState} from 'react';

const ReduxAsyncApp = props => {
  const [Contatcs, setContacts] = useState([]);
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
            <View style={{justifyContent: 'center'}}>
              <Text style={{fontSize: 18}}>
                {' '}
                {`${item.givenName} ${item.familyName}`}{' '}
              </Text>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const mapStateToProps = state => {
  return {
    quote: state.quote,
    isLoading: state.isLoading,
    error: state.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadQuote: () => dispatch(actions.loadQuote()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxAsyncApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
