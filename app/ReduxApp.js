import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, ActivityIndicator} from 'react-native';
import * as actions from '../app/actions/actions';
import {connect} from 'react-redux';

const ReduxAsyncApp = props => {
  return (
    <View style={styles.container}>
      {props.isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <Text style={{fontSize: 24, textAlign: 'center'}}>{props.quote}</Text>
          <Button title="Load Quote" onPress={() => props.loadQuote()} />
        </View>
      )}
    </View>
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
