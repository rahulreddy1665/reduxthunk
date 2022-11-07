import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Platform,
} from 'react-native';
import Draggable from './component/Draggable';

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 40 : StatusBar.currentHeight;

function StatusBarPlaceHolder() {
  return (
    <View
      style={{
        width: '100%',
        height: STATUS_BAR_HEIGHT + 50,
        backgroundColor: '#264078',
      }}>
      <StatusBar barStyle="light-content" />
      <View style={{padding: 10, marginTop: 40}}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold',
            paddingLeft: 10,
          }}>
          Workouts
        </Text>
      </View>
    </View>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScoll: true,
    };
  }

  setScrollable = isScroll => {
    this.setState({
      isScoll: isScroll,
    });
  };

  render() {
    const {isScoll} = this.state;

    return (
      <>
        <StatusBarPlaceHolder />
        <ScrollView
          contentContainerStyle={styles.mainContainer}
          scrollEnabled={isScoll}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}>
            <Draggable setScrollable={this.setScrollable} index={1} />
            <Draggable setScrollable={this.setScrollable} index={2} />
            <Draggable setScrollable={this.setScrollable} index={3} />
            <Draggable setScrollable={this.setScrollable} index={4} />
            <Draggable setScrollable={this.setScrollable} index={5} />
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    backgroundColor: '#aba00',
    padding: 10,
  },
});

export default App;
