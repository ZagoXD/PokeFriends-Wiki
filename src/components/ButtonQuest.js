import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ButtonQuest = ({ title, imageSource, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{title}</Text>
        <Image style={styles.image} source={imageSource} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 84,
    backgroundColor: '#000000c0',
    margin: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ButtonQuest;