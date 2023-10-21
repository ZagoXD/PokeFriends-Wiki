import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
//import MyImage from '../../assets/images/backgroundd';
//import Home from './src/screens/Home';

const image = {uri: 'https://i.ibb.co/bWpPQnP/backgroundd.jpg'}
//const image = {uri: MyImage}

const Boss = (props) => {

    const goKiss = () => {
        props.navigation.navigate('Togekiss');
      }
      const goMence = () => {
        props.navigation.navigate('Salamence');
      }
      const goDusk = () => {
        props.navigation.navigate('Dusknoir');
      }

    return(
        <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <View style={styles.list}>
                <TouchableOpacity style={styles.Button} onPress={goKiss}>
                    <Image source = { require ('../../assets/images/kiss.png') }/>
                    <Text style={styles.Text}>Togekiss</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={goMence}>
                    <Image source = { require ('../../assets/images/mence.png') }/>
                    <Text style={styles.Text}>Salamence</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={goDusk}>
                    <Image source = { require ('../../assets/images/dusk.png') }/>
                    <Text style={styles.Text}>Dusknoir</Text>
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

export default Boss;