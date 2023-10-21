import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import ButtonBoss from '../components/ButtonBoss';
import { ScrollView } from 'react-native-gesture-handler';

const image = { uri: 'https://i.ibb.co/bWpPQnP/backgroundd.jpg' };

const data = [
  { title: 'Electivire', imageSource: require('../../assets/images/electivire.png') },
  { title: 'Dusknoir', imageSource: require('../../assets/images/dusk.png') },
  { title: 'Greninja', imageSource: require('../../assets/images/greninja.png') },
  { title: 'Magmortar', imageSource: require('../../assets/images/magmortar.png') },
  { title: 'Metagross', imageSource: require('../../assets/images/meta.png') },
  { title: 'Milotic', imageSource: require('../../assets/images/milotic.png') },
  { title: 'Rypherior', imageSource: require('../../assets/images/rypherior.png') },
  { title: 'Salamence', imageSource: require('../../assets/images/mence.png') },
  { title: 'Scizor', imageSource: require('../../assets/images/scizor.png') },
  { title: 'Slaking', imageSource: require('../../assets/images/slaking.png') },
  { title: 'Tangrowth', imageSource: require('../../assets/images/tang.png') },
  { title: 'Togekiss', imageSource: require('../../assets/images/kiss.png') },
  // Adicione mais botões aqui, se necessário
];

const buttonsPerRow = 2; // Número de botões por linha

const Boss = (props) => {
  const navigateToScreen = (screen) => {
    props.navigation.navigate(screen);
  }

  // Função para dividir os botões em linhas
  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const buttonRows = chunkArray(data, buttonsPerRow);

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.buttonContainer}>
          <ScrollView>
            {buttonRows.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.row}>
                {row.map((item) => (
                  <ButtonBoss
                    key={item.title}
                    title={item.title}
                    imageSource={item.imageSource}
                    onPress={() => navigateToScreen(item.title)}
                  />
                ))}
              </View>
            ))}
          </ScrollView>
        </View>
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
    justifyContent: 'flex-start', // Alinha os botões na parte superior
  },
  buttonContainer: {
    alignItems: 'center',
    paddingTop: 20, // Ajusta o espaçamento superior conforme necessário
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Boss;