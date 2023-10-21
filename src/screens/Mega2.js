import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
//import MyImage from '../../assets/images/backgroundd';

//import Home from './src/screens/Home';

const image = {uri: 'https://i.ibb.co/bWpPQnP/backgroundd.jpg'}
//const image = {uri: MyImage}

const Mega = (props) => {

    const goGeot = () => {
        props.navigation.navigate('Pidgeot');
      }

    return(
        <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <View style={styles.list}>
                <TouchableOpacity style={styles.Button} onPress={goGeot}>
                    <Image source = { require ('../../assets/images/geot.png') }/>
                    <Text style={styles.Text}>Pidgeot</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
      </View> 


)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  Text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  Button: {
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    margin: 10,
    marginLeft: 25,
  }
});

export default Mega;