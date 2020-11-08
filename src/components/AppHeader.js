import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class AppHeader extends Component<> {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.textStyle}>Athkari</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  textStyle: {
    fontSize: 30,
    color: '#032734',
    fontFamily: '',
  },
});
