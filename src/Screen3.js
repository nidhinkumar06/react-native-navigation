import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native'
import {Navigation} from 'react-native-navigation';

export default class Screen3 extends Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Screen 3'
        },
      }
    };
  }
  render() {
    console.log('props is', this.props);
    return (
      <View style={styles.container}>
        <Text>Screen 3</Text>
        <Button
          onPress={() => {
            Navigation.popToRoot(this.props.componentId);
          }}
          title="Go Back"
        />
        <Button
          onPress={() => {
            Navigation.showModal({
              stack: {
                children: [{
                  component: {
                    name: 'Screen4Modal',
                    passProps: {
                      text: 'stack with one child'
                    },
                    options: {
                      topBar: {
                        title: {
                          text: 'Modal'
                        }
                      }
                    }
                  }
                }]
              }
            });
          }}
          title="Open Modal"
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
