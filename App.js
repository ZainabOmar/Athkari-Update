/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import AppHeader from './src/components/AppHeader';
import Logo from './src/components/Logo';
import Sabah from './src/components/AllAthkar/Sabah';
import Masaa from './src/components/AllAthkar/Masaa';
import Other from './src/components/AllAthkar/Other';


const App: () => React$Node = () => {
  console.log("hi");
  return (
    <>
     <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Logo />
      <AppHeader />
      <TouchableOpacity
      onPress={() => this.props.navigation.navigate('Sabah')}
      style={styles.button}>
      <Text style={styles.buttonText}> أذكار الصباح </Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={() => this.props.navigation.navigate('Masaa')}
      style={styles.button}>
      <Text style={styles.buttonText}> أذكار المساء </Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={() => this.props.navigation.navigate('Other')}
      style={styles.button}>
      <Text style={styles.buttonText}> أخرى </Text>
      </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
