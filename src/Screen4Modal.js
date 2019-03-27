import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native'
import {Navigation} from 'react-native-navigation';

export default class Screen4Modal extends Component {
  render() {
    console.log('this.props', this.props);
    return (
      <View>
        <Text>{this.props.text}</Text>
        <Button
          onPress={() => {
            Navigation.dismissModal(this.props.componentId);
          }}
          title="Close Modal"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
