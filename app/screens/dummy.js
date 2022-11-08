import {
  View,
  Image,
  ScrollView,
  ImageBackground,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LeftIcon from '../../images/icons/LeftIcon';
import PlayIcon from '../../images/icons/PlayIcon';
import HeartIcon from '../../images/icons/HeartIcon';
import PlayIcon2 from '../../images/icons/PlayIcon2';
import {GlobalStyles} from '../Styles/Globalstyles';
import QueueIcon from '../../images/icons/QueueIcon';

const Dummy = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#091A2B'}}>
      {/* Image background  */}
      <ImageBackground
        source={require('../../images/bg1.jpg')}
        resizeMode="cover"
        style={{
          width: Dimensions.get('screen').width / 1,
          height: Dimensions.get('screen').height / 2.4,
        }}
        imageStyle={{opacity: 0.5}}>
        {/* Header */}
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <LeftIcon stroke={'#FFFFFF'} style={{marginLeft: 25}} />
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <PlayIcon stroke={'#FFFFFF'} style={{marginRight: 10}} />
            <HeartIcon style={{marginRight: 25}} />
          </View>
        </View>
        {/* Image */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            marginTop: 10,
          }}>
          <Image
            source={require('../../images/stranger.webp')}
            style={{width: 180, height: 240}}
          />
        </View>
      </ImageBackground>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={GlobalStyles.button}>
            <PlayIcon2 stroke={'#FFFFFF'} style={{marginTop: 8}} />
            <Text style={GlobalStyles.buttonText}>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity style={GlobalStyles.button2}>
            <QueueIcon stroke={'#000000'} style={{marginTop: 8}} />
            <Text style={GlobalStyles.buttonText2}>Episodes</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Description */}
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Text style={GlobalStyles.heading}>Stranger Things</Text>
        <Text style={GlobalStyles.subHeading}>
          {' '}
          8.7 IMDB {'\u2022'} 50m {'\u2022'} 2016
        </Text>
      </View>
      <View style={{marginLeft: 30}}>
        <Text style={GlobalStyles.TitleHeading1}>
          <Text style={{color: 'red'}}>Latest:</Text> Episode 8(Season3)
        </Text>
        <Text style={GlobalStyles.description1}>
          When a young boy vanishes, a small town uncovers a mystery involving
          secret experimensts, verifiying supernatural forces, & one strange
          girl{' '}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={GlobalStyles.subHeading2}>Genres:</Text>
          <Text style={GlobalStyles.description2}>
            Drama,Mystery,Sci-FI & Fantasy
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={GlobalStyles.description2}>
            <Text style={GlobalStyles.subHeading2}>Stars:</Text>
            Millie Bobby Brown,Winana Ryder,David Harbour Finn Wolfhard,Caleb
            McLaughlin,Natalia Dyer....
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={GlobalStyles.subHeading2}>Companies:</Text>
          <Text style={GlobalStyles.description2}>21 laps entertainment</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Dummy;
