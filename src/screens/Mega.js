import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import ButtonMega from '../components/ButtonMega';

const image = { uri: 'https://i.ibb.co/bWpPQnP/backgroundd.jpg' };

const data = [
  { title: 'Pidgeot', imageSource: require('../../assets/images/geot.png') },
  // Adicione mais botões aqui, se necessário
];

const buttonsPerRow = 2; // Número de botões por linha

const Mega = (props) => {
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
          {buttonRows.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((item) => (
                <ButtonMega
                  key={item.title}
                  title={item.title}
                  imageSource={item.imageSource}
                  onPress={() => navigateToScreen(item.title)}
                />
              ))}
            </View>
          ))}
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

export default Mega;