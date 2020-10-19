import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import DropDownItem from "react-native-drop-down-item";
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { SceneMap } from 'react-native-tab-view';


const itm = require('./data/data.json');

const items = [];

items.push(itm);


class InfoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {

    const AccordianArray = [];
    //console.log(AccordianArray);
    const { id, Name, SelectType, arr } = this.props.route.params;

    //console.log(SelectType);

    items.map(element => {


      if (SelectType === "bus") {

        //console.log(element.bus);

        element.bus.map(busName => {
          //console.log(busName+ );


          //console.log(busName + "in side");

          busName.Vechiles.map(data => {
            //console.log(busName.name);
            if (busName.name == Name) {
              AccordianArray.push({
                title: data.name + "    Time: " + data.Time,
                body: data.Des
              }
              )
            }
          })


        })

      }
      if (SelectType == "train") {

        element.launch.map(busName => {
          busName.Vechiles.map(data => {

            if (busName.name == Name) {
              AccordianArray.push({
                title: data.name + "    Time: " + data.Time,
                body: data.Des
              })
            }
          })

        })



      }
      if (SelectType == "launch") {

        element.train.map(busName => {
          busName.Vechiles.map(data => {

            if (busName.name == Name) {
              AccordianArray.push({
                title: data.name + "    Time: " + data.Time,
                body: data.Des
              })
            }
          })

        })
      }

    });

    //console.log(AccordianArray);



    return (

      <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} colors={['#3E7FF5', '#56BEDA', '#6BF4C2']} style={styles.linearGradient}>

        <View style={styles.container}>
          <ScrollView style={{ alignSelf: 'stretch', }}>
            {
              AccordianArray
                ? AccordianArray.map((param, i) => {
                  return (
                    <DropDownItem
                      key={i}
                      style={styles.dropDownItem}
                      contentVisible={false}
                      invisibleImage={require('../img/down-arrow.png')}
                      visibleImage={require('../img/up-arrow.png')}

                      header={
                        <View style={styles.head}>
                          <Text style={{
                            fontSize: 22,

                          }}>{param.title} </Text>
                        </View>
                      }
                    >
                      <Text style={[
                        styles.txt,
                        {
                          fontSize: 20,
                        }
                      ]} selectable>
                        {param.body}
                      </Text>
                    </DropDownItem>
                  );
                })
                : null
            }
            <View style={{ height: 96 }} />


            {/* <Text>{id}</Text>
          <Text>{name}</Text>
          <Text>{SelectType}</Text>        */}

          </ScrollView>

        </View>

      </LinearGradient>
    );

  }

}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {

    height: 45,
    padding: 0,


  },
  dropDownItem: {
    flex: 1,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderColor: '#000',
    color: '#ff98',
    marginBottom: 10,


  }

});

export default InfoScreen;
