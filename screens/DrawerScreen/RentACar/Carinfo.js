import React from 'react'
import { View, Text,StyleSheet,Dimensions, TouchableWithoutFeedback } from 'react-native'

 function Carinfo(props) {
    return (
        
        <View style={styles.Content}>
            
            <Text style={[styles.textStyle,styles.textColor]}> {props.Name} </Text>
            <Text style={ styles.textStyle} selectable > {props.Contact} </Text>
            <Text style={ styles.textStyle}>{props.Infromation}</Text>
        </View>
    ) 
}

const styles = StyleSheet.create({
    Content:{
        //flex: 1,
        backgroundColor: '#2ecc71',
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    textColor:{
        color: '#fff',
        fontSize: 25,
        fontFamily: 'RussoOne-Regular',
    },
    textStyle:{
        fontSize: 18,
        color: '#21252B',
        fontFamily: 'Roboto-Medium',
    }
})

export default Carinfo;