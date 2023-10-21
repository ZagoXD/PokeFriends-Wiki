import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import React, { useState } from 'react';
//import MyImage from '../../assets/images/backgroundd';

//import Home from './src/screens/Home';

const image = {uri: 'https://i.ibb.co/bWpPQnP/backgroundd.jpg'}
//const image = {uri: MyImage}

const Electivire = () => {
    
    const [mostrarNormal, setMostrarNormal] = useState(false);

    const normal = () => {
        setMostrarNormal(!mostrarNormal);
    }

    const [mostrarShiny, setMostrarShiny] = useState(false);

    const shiny = () => {
        setMostrarShiny(!mostrarShiny);
    }

    const [mostrarMapa, setMostrarMapa] = useState(false);

    const mapa = () => {
        setMostrarMapa(!mostrarMapa);
    }


  return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <View style={styles.View2}>
                <TouchableOpacity onPress={normal}><Text style={styles.text}>Normal</Text></TouchableOpacity>
                {mostrarNormal && <View style={styles.View3}>
                                    <View style={{flex: 1, justifyContent: 'space-around'}}>
                                      <View style= {{flexDirection: 'row'}}>
                                        <Image source = { require ('../../assets/images/elec.png') }/>
                                        <Text style={styles.textInside}>x10</Text>
                                      </View>
                                      <View style= {{flexDirection: 'row'}}>
                                        <Image source = { require ('../../assets/images/kk.png') }/>
                                        <Text style={styles.textInside}>x10</Text>
                                      </View>
                                      <View style= {{flexDirection: 'row'}}>
                                        <Image source = { require ('../../assets/images/boost.png') }/>
                                        <Text style={styles.textInside}>+20</Text>
                                      </View>
                                    </View>
                                  </View>}
                <TouchableOpacity onPress={shiny}><Text style={styles.text}>Shiny</Text></TouchableOpacity>
                {mostrarShiny && <View style={styles.View3}>
                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                      <View style={{flex: 1, justifyContent: 'space-around'}}>
                                        <View style= {{flexDirection: 'row'}}>
                                          <Image source = { require ('../../assets/images/elec.png') }/>
                                          <Text style={styles.textInside}>x30</Text>
                                        </View>
                                        <View style= {{flexDirection: 'row'}}>
                                          <Image source = { require ('../../assets/images/kk.png') }/>
                                          <Text style={styles.textInside}>x15</Text>
                                        </View>
                                        <View style= {{flexDirection: 'row'}}>
                                          <Image source = { require ('../../assets/images/shstone.png') }/>
                                          <Text style={styles.textInside}>x30</Text>
                                        </View>
                                        <View style= {{flexDirection: 'row'}}>
                                          <Image source = { require ('../../assets/images/boost.png') }/>
                                          <Text style={styles.textInside}>+60</Text>
                                      </View>
                                      </View>
                                        <View style= {{alignItems: 'flex-end', justifyContent: 'center'}}>
                                          <Image tyle= {{width: 10, height: 10}} source = { require ('../../assets/images/shspawn1.png') }/>
                                          <Text style={styles.textInside3}>NPC AT: X: 3327 | Y: 2894 | Z: 8</Text>
                                        </View>
                                    </View>
                                  </View>}
                <TouchableOpacity onPress={mapa}><Text style={styles.text}>Spawn</Text></TouchableOpacity>
                {mostrarMapa && <View style={styles.View4}>
                                    <View style={{alignItems: 'center'}}>
                                      <Image style={{margin: 7}} source = { require ('../../assets/images/elecspawn.png') }/>
                                      <Text style={styles.textInside2}> X: 3275 | Y: 2947 | Z: 8 </Text>
                                    </View>
                                  </View>}
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
    justifyContent: 'center',
  },
  View2: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  View3: {
    width: '100%',
    height: 300,
    justifyContent: 'flex-start',
    backgroundColor: '#000000c0',
  },
  View4: {
    width: '100%',
    height: 'auto',
    justifyContent: 'flex-start',
    backgroundColor: '#000000c0',
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
  text2: {
    color: 'white',
    fontSize: 30,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
    margin: 10,
  },
  textInside: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
  },
  textInside3: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
  },
  textInside2: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
  }
});

export default Electivire;