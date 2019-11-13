import React, { Component } from 'react';
import { View, Text, TextInput, Alert, Button, StyleSheet, Dimensions, Image } from 'react-native';
import styles from './Styles';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default class BMI extends Component {
  constructor() {
    super();
    this.state = {
      weight: 0,
      height: 0,
      bmi: 0,
    };
  }
  calculateBMI = () => {
    this.setState(
      {
        bmi: Number((this.state.weight / Math.pow(this.state.height, 2)) * 10000).toFixed(1),
      }, () => {
        if (this.state.bmi < 18.5) {
          Alert.alert('You are underweight!');
        } else if (this.state.bmi >= 18.5 && this.state.bmi <= 24.9) {
          Alert.alert('You are having a normal  weight. Well done!');
        } else if (this.state.bmi >= 25 && this.state.bmi <= 29.9) {
          Alert.alert('You are overweight!');
        } else if (this.state.bmi >= 30) {
          Alert.alert('You are obese. Please watch your diet!');
        }
      },
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text></Text>
        <Text></Text>
        <Text styles={styles.myHeader}>BMI Calculator</Text>
        <Text></Text>
        <Text></Text>
        <Image style={styles.image} source={require('./man_19-512.png')} />
        <Text></Text>
        <Text></Text>
        <TextInput style={styles.textInput}
          onChangeText={weight => this.setState({ weight })}
          placeholder="Weight (KG)"
        />
        <TextInput style={styles.textInput}
          onChangeText={height => this.setState({ height })}
          placeholder="Height (CM)"
        />
        <Button color="#841584" size="50" onPress={this.calculateBMI} title="Calculate" />
        <Text></Text>
        <Text>BMI: {this.state.bmi}</Text>
      </View>
    );
  }
}

//for style kita buat seperate folder namanya style.

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     backgroundColor: '#00FF00',

//   },
//   header: {
//     fontSize: 20,
//     textAlign: 'left',
//     margin: 10,
//   },
//   contents: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });