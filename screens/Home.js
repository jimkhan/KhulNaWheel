import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  StatusBar
} from 'react-native';


var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

function Home({ navigation }) {


  return (
    <>
      <ImageBackground
        source={require('../img/jim.jpg')}
        style={styles.backimage}>
        <View style={styles.container}>
          <View style={styles.main}>
          <StatusBar translucent backgroundColor="transparent" />

            <View style={styles.body}>
              <Image
                source={require('../img/MainLogo.png')}
                style={styles.mainlogo}
              />
              <View>
                {/* <Text style={styles.mainText}> Select your vhicals </Text> */}
                {/* <Text style={styles.mainText}> WHEELS </Text> */}
              </View>
            </View>

            <View style={styles.footerlogo}>
              <View style={styles.logoArea}>

                <TouchableOpacity onPress={() => navigation.navigate('Details',{id: 1,name: 'Bus'})}>
                  <Image
                    source={require('../img/BusColor.png')}
                    style={styles.logoSize}
                  />
                  <Text style={styles.logoText}>Bus</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Details',{ id: 2,name: 'Train'  })}>
                  <Image
                    source={require('../img/TrainColor.png')}
                    style={styles.logoSize}
                  />
                  <Text style={styles.logoText}>Train</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Details',{id: 3,name: 'Launch'})}>
                  <Image
                    source={require('../img/BoatColor.png')}
                    style={styles.logoSize}
                  />
                  <Text style={styles.logoText}>Launch</Text>
                </TouchableOpacity>

              </View>
                            
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  main: {

    flex: 1,

  },
  container: {
    flex: 1,
    width: deviceWidth,
    height: deviceHeight,
    //backgroundColor: 'rgba(0,0,0,.7)',

  },
  head: {
    flex: 0.6,
    //backgroundColor: '#b57c',
  },

  body: {
    flex: 3,
    //backgroundColor: 'green',
    //alignContent: 'center',
    alignItems: 'center',
    //alignSelf: 'center',
    justifyContent: 'center',
    //paddingTop: 30,
  },
  backimage: {
    flex: 1,
    // width: (deviceWidth * 100) / 100,
    // height: (deviceHeight * 100) / 100,
    width: null,
    height: null,
  },
  mainlogo: {

    width: 170,
    height: 160,
    backgroundColor: 'rgba(0,0,0,.1)',
    borderRadius: 83,

  },
  mainText: {

    fontSize: 20,
    fontFamily: 'MontserratAlternates-ExtraBold',
    color: '#ffff',
    textAlign: 'center',
  },
  footerlogo: {
    flex: 1.3,
    backgroundColor: 'rgba(0,0,0,.2)',
    alignItems: 'center',
    paddingTop: 10,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,

  },
  logoArea: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  logoSize: {
    width: 110,
    height: 110,
  },
  logoText: {
    padding: 5,
    alignSelf: 'center',
    fontSize: 22,
    fontFamily: 'RussoOne-Regular',
    fontWeight: 'bold',
    color: '#00FEEF',
  },
  humburger: {
    width: 45,
    marginTop: 10,
    marginLeft: 10,
    height: 33,
  },
});

export default Home;
