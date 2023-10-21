import { View, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';
//import MyImage from '../../assets/images/backgroundd';
//import Home from './src/screens/Home';

const image = {uri: 'https://i.ibb.co/bWpPQnP/backgroundd.jpg'}
//const image = {uri: MyImage}

const Home = (props) => {

  const goBoss = () => {
    props.navigation.navigate('Boss');
  }
  const goMega = () => {
    props.navigation.navigate('Mega');
  }
  const goQuests = () => {
    props.navigation.navigate('Quests');
  }

  return (
    <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <TouchableOpacity>
        <Text style={styles.text} onPress={goBoss}>Boss</Text>
    </TouchableOpacity >
    <TouchableOpacity>
        <Text style={styles.text} onPress={goMega}>Megas</Text>
    </TouchableOpacity >
    <TouchableOpacity>
        <Text style={styles.text} onPress={goQuests}>Quests</Text>
    </TouchableOpacity >
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
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
    margin: 10,
  },
});

export default Home;