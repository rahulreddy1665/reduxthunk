import {
  View,
  Dimensions,
  ImageBackground,
  Image,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../Styles/Globalstyles';
import InfoIcon from '../../images/icons/InfoIcon';
import {dummyArray} from '../components/dummyData';
import * as Progress from 'react-native-progress';

const Dashboard = () => {
  return (
    <ScrollView style={{backgroundColor: '#091A2B', flex: 1}}>
      {/* Image background  */}
      <ImageBackground
        source={require('../../images/bg.jpg')}
        resizeMode="center"
        style={{
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height / 1.8,
        }}>
        {/* N Logo */}
        <View>
          <Image
            source={require('../../images/N.webp')}
            style={{
              width: 50,
              height: 50,
              marginLeft: 10,
              marginTop: 10,
            }}></Image>
        </View>
        {/* Info */}
        <View style={GlobalStyles.bottomView}>
          <InfoIcon stroke={'#FFFFFF'} />
        </View>
      </ImageBackground>
      {/* Movie Info */}
      <View style={GlobalStyles.subHeadingView}>
        <Text style={GlobalStyles.heading}>Sabrina</Text>
        <Text style={GlobalStyles.subHeading}>
          {' '}
          7.5 IMDB {'\u2022'} 60m {'\u2022'} 2018
        </Text>
        <Text style={GlobalStyles.description}>
          As her 16th birthday nears, Sabrina must choose between witch world of
          her family and humans...
        </Text>
      </View>
      {/* Continue Watching */}
      <View style={{marginLeft: 25}}>
        <Text style={GlobalStyles.TitleHeading}>
          {' '}
          <Text style={{color: 'red'}}>C</Text>ontinue{' '}
          <Text style={{color: 'red'}}>W</Text>atching
        </Text>
      </View>
      {/* Flatlist Horizantal */}
      <View style={{marginLeft: 25}}>
        <FlatList
          horizontal
          bounces={false}
          initialScrollIndex={0}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          data={dummyArray}
          renderItem={({item}) => (
            <View key={item.id} style={GlobalStyles.card}>
              <Image
                source={item.image}
                style={{width: 100, height: 140, borderRadius: 20}}
              />
              <Progress.Bar
                progress={item.progress}
                width={90}
                color={'red'}
                unfilledColor={'#5E666C'}
                style={{marginTop: 8, marginLeft: 5, borderColor: '#000000'}}
              />
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default Dashboard;
