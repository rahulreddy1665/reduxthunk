import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

const MyStatusBar = ({backgroundColor, themeColors, ...props}) => (
  <View style={[styles.statusBar, {backgroundColor: '#0077b6'}]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={'#0077b6'} {...props} />
    </SafeAreaView>
  </View>
);

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});

// const mapStateToProps = state => ({
//   themeColors: state.common.themeColors,
//   language: state.common.defaultLanguage,
//   indicatorStatus: state.common.indicator?.status,
// });

export default connect(null, null)(MyStatusBar);

// export default MyStatusBar;
