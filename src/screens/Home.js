import React from 'react';
import { View, StyleSheet, ImageBackground, FlatList } from 'react-native';
//import MyImage from '../../assets/images/backgroundd';
import Button from '../components/Button';

const image = {uri: 'https://i.ibb.co/bWpPQnP/backgroundd.jpg'}

const data = [
  { title: 'Boss', screen: 'Boss' },
  { title: 'Megas', screen: 'Mega' },
  { title: 'Quests', screen: 'Quests' },
  // Adicione mais botões aqui, se necessário
];

const Home = (props) => {
  const navigateToScreen = (screen) => {
    props.navigation.navigate(screen);
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.screen}
          contentContainerStyle={styles.flatListContainer} // Adicione este estilo
          renderItem={({ item }) => (
            <Button title={item.title} onPress={() => navigateToScreen(item.screen)} />
          )}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  flatListContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Home;