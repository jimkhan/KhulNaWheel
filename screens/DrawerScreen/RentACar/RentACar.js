import React from 'react';
import { View, Text, StyleSheet,ScrollView} from 'react-native';
import Carinfo from './Carinfo';




function RentACar() {

  
  return (
    <ScrollView 
      horizontal={true}
      pagingEnabled={true}
    >
  

      <Carinfo
        Name = "Rana rent A car A"
        Contact = "01911458691"
        Infromation = "This is rental car"
      />
      <Carinfo
        Name = "Rana rent A car B"
        Contact = "01911458691"
        Infromation = "This is rental car"
      />
      <Carinfo
        Name = "Rana rent A car C"
        Contact = "01911458691"
        Infromation = "This is rental car"
      />
      <Carinfo
        Name = "Rana rent A car D"
        Contact = "01911458691"
        Infromation = "This is rental car"
      />

    </ScrollView>

  );

}



const styles = StyleSheet.create({
  main:{
    flex: 1,
    justifyContent: 'center'
  }

});


export default RentACar;
