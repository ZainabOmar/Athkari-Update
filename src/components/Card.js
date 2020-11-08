import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

 const Card = (props) => {
    return (
      <View style={styles.container}>
        {props.children}
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#725b53',
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    padding: 15,
  }
});

export default Card;
