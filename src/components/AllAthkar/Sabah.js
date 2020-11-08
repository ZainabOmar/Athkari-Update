import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  ScrollView,
} from 'react-native';
import Card from '../Card';

const data = require('../../../data/Sabah.json');

type Props = {};
export default class Sabah extends Component<Props> {
  static navigationOptions = {
    title: 'عودة',
    headerStyle: {
      backgroundColor: '#968e8c',
    },
    headerTintColor: 'black',
  }
  state = { myData: [] };

  componentWillMount() {
    this.setState({ myData: data });
  }

  renderAthkar() {
    console.log(this.state.myData);
    return this.state.myData.map(
      thikr =>
      <Card>
      <Text style={styles.text}>
      {thikr.title}
      {'\n'}{'\n'}
      ({thikr.times})
      </Text>
      </Card>
      );
  }

  render() {
    return (
      <ScrollView>
      <StatusBar
      backgroundColor='#032734'
      barStyle='light-content'
      />
      <Text style={styles.header}>أذكار الصباح</Text>
      {this.renderAthkar()}
      </ScrollView>
      );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: '500',
    backgroundColor: '#968e8c',
    padding: 15,
    color: 'black',
    textAlign: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black'
  }
});
