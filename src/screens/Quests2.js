import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
//import MyImage from '../../assets/images/backgroundd';
//import Home from './src/screens/Home';

const image = {uri: 'https://i.ibb.co/bWpPQnP/backgroundd.jpg'}
//const image = {uri: MyImage}

const Quests = (props) => {

  const goMoltres = () => {
    props.navigation.navigate('Moltres');
  }

  return (
    <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <TouchableOpacity onPress={goMoltres}>
        <View style={styles.View2}>
            <Text style={styles.text}>Moltres</Text>
            <Image style={{margin: 7}} source = { require ('../../assets/images/moltres.png') }/>
        </View>
    </TouchableOpacity >
    </ImageBackground>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',

  },
  View2:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 84,
    backgroundColor: '#000000c0',
    margin: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  text: {
    color: 'white',
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Quests;