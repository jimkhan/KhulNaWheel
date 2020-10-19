import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, Dimensions, KeyboardAvoidingView, StatusBar } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import LinearGradient from 'react-native-linear-gradient';


import { Button } from 'react-native-elements';
import { useState } from 'react';

const itm = require('./data/data.json');

var items = ""; 


function DetailsScreen({ route, navigation }) {

  
  const [ itemName, setitemName ] = React.useState('')

  const { id } = route.params;

  var ID = JSON.stringify(id);
  //var Vname = JSON.stringify(name);

  var Logoname = "";
  var abc = "";

  if (ID == 1) {
    items = itm.bus;
   // Logoname = require('../img/bus2.jpg');
    abc = "bus"; 
    
  }

  else if (ID ==2) {
    items = itm.train;
   // Logoname = require('../img/back2.jpg');
    abc = "train"; 
  }

  else {
    items = itm.launch;
    //Logoname = require('../img/boatbac.jpg');
    abc = "launch"; 
  } 

  function selectItemConformation (){
    if(itemName){
     // console.log(itemName)   
      navigation.navigate('Information', {id: ID, Name: itemName, SelectType: abc,})
    }
    else{
 
       alert(("Invalid selection!"))
    }
  }

  return (

    <>
      {/* <ImageBackground source={Logoname}

        style={styles.backimg}
      > */}

      <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} colors={['#3E7FF5', '#56BEDA', '#6BF4C2']} style={styles.linearGradient}>
      
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
        <KeyboardAvoidingView behavior='height' style={styles.kavoid} >
        <View style={styles.home}> 
            
        
            <View style={styles.conatiner} >
            
            <Text style={styles.cardText}>FROM KHULNA TO</Text>

              
              <SearchableDropdown
                onTextChange={text => console.log('')}
               //onItemSelect={item => alert((item.name + " is selected"))}
                onItemSelect={item => setitemName((item.name))}

                containerStyle={{ padding: 0, marginBottom: 20, }}
                textInputStyle={{
                  padding: 8,
                  borderWidth: 2,
                  // backgroundColor: '#14FFFF',

                  borderColor: '#14FFFF',
                  borderRadius: 50,
                  fontSize: 22,
                  paddingLeft: 20,
                }}
                itemStyle={{
                  padding: 10,
                  //backgroundColor: '#fff',
                  borderBottomColor: 'red',
                  borderBottomWidth: 1,
                  borderBottomColor: '#000',
                  borderRadius: 5,
                  marginLeft: 5,
                  marginRight: 5,
                }}
                itemTextStyle={{ color: '#222', fontSize: 20, fontWeight: '400', }}
                itemsContainerStyle={{ maxHeight: 140 }}
                items={items}
                defaultIndex={null}
                placeholder="Search & select"
                placeholderTextColor="#3B7081"
                resetValue={false}

                underlineColorAndroid="transparent"
              />
              

              <View style={styles.btn}>
                <Button
                  //type="outline"
                  title='SUBMIT'
                  buttonStyle={{ backgroundColor: '#14FFFF', borderRadius: 50,  }}
                  titleStyle={{ color: '#065555', fontSize: 20 }}
                  onPress={() =>  selectItemConformation()} />
              </View> 
      

            </View>

          </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>


      </LinearGradient>


    </>
  );

}



const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  kavoid:{
    flex: 1,
  },
  home: {
    flex: 1,
    //backgroundColor: 'rgba(0,0,0,.2)',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderColor: '#000',
  },

  btn: {
    width: '99%',
    alignSelf: 'center',
    //marginBottom: 80,


  },

  cardText: {
    color: '#fff',
    fontSize: 25,
    alignSelf: 'center',
    marginBottom: 22,
    fontFamily: 'Roboto-Bold',
    fontWeight: '200',
    
  },
  conatiner: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    width: '70%',

  },


});


export default DetailsScreen;

