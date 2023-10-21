import React from 'react';
import { View, StyleSheet, ImageBackground, FlatList } from 'react-native';
import ButtonQuest from '../components/ButtonQuest';

const image = { uri: 'https://i.ibb.co/bWpPQnP/backgroundd.jpg' };

const data = [
  { title: 'Moltres', imageSource: require('../../assets/images/moltres.png') },
  // Adicione mais botões aqui, se necessário
];

const Quests = (props) => {
  const navigateToScreen = (screen) => {
    props.navigation.navigate(screen);
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ButtonQuest
              title={item.title}
              imageSource={item.imageSource}
              onPress={() => navigateToScreen(item.title)}
            />
          )}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});

export default Quests;