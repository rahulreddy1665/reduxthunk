import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Animated,
  PanResponder,
  ScrollView,
  Image,
} from 'react-native';

class Draggable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pan: new Animated.ValueXY(),
      showDraggable: true,
      dropAreaValues: null,
      opacity: new Animated.Value(1),
    };

    this._val = {x: 0, y: 0};
    this.state.pan.addListener(value => (this._val = value));
    // Initialize PanResponder with move handling
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderMove: Animated.event([
        null,
        {dx: this.state.pan.x, dy: this.state.pan.y},
      ]),
      onPanResponderGrant: (e, gesture) => {
        this.state.pan.setOffset({
          x: this._val.x,
          y: this._val.y,
        });
        this.state.pan.setValue({x: 0, y: 0});
        this.props.setScrollable(false);
      },

      onPanResponderRelease: (e, gesture) => {
        this.props.setScrollable(true);
      },
    });
  }

  isDropArea(gesture) {
    return gesture.moveY < 200;
  }

  renderCard = () => {
    const {index} = this.props;
    let source = null;

    switch (index) {
      case 1:
        source = require('../../assets/images/image_1.png');
        break;
      case 2:
        source = require('../../assets/images/image_2.png');
        break;
      case 3:
        source = require('../../assets/images/image_3.png');
        break;

      default:
        source = require('../../assets/images/image_1.png');
        break;
    }

    return (
      <View style={styles.card}>
        <Image
          style={{width: 150, height: 200}}
          resizeMode="contain"
          source={source}
        />
      </View>
    );
  };

  render() {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform(),
    };
    return (
      <Animated.View
        {...this.panResponder.panHandlers}
        style={[panStyle, {...styles.cardContainer}]}>
        {this.renderCard()}
      </Animated.View>
    );
  }
}

let styles = StyleSheet.create({
  card: {
    // height: '50%',
    // width: '80%',
    // backgroundColor: 'green',
  },
  cardContainer: {
    width: 150,
    height: 200,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#ababab',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
  },
});

export default Draggable;
