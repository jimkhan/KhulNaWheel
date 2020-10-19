import React from 'react';
import { View, Text, StyleSheet,ScrollView} from 'react-native';
import Ambulanceinfo from './AmbulanceInfo'




function Ambulance() {

  
  return (
    <ScrollView 
      horizontal={true}
      pagingEnabled={true}
    >
  

      <Ambulanceinfo
        Name = "Ambulance 1"
        DrivarName = "Khalid Hossain"
        Contact = "01911458691"
        Infromation = "This is a Ambulance info"
      />
      <Ambulanceinfo
        Name = "Ambulance 2"
        DrivarName = "Shakil Ahmed"
        Contact = "01911458691"
        Infromation = "This is a Ambulance info"
      />
      <Ambulanceinfo
        Name = "Ambulance 3"
        DrivarName = "Aanondo Arjun"
        Contact = "01911458691"
        Infromation = "This is a Ambulance info"
      />
      <Ambulanceinfo
        Name = "Ambulance 4"
        DrivarName = "Torikul Bablu"
        Contact = "01911458691"
        Infromation = "This is a Ambulance info"
      />
      <Ambulanceinfo
        Name = "Ambulance 5"
        DrivarName = "Khalid Hossain"
        Contact = "01911458691"
        Infromation = "This is a Ambulance info"
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


export default Ambulance;
