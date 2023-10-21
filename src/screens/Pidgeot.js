import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
//import MyImage from '../../assets/images/backgroundd';

//import Home from './src/screens/Home';

const image = {uri: 'https://i.ibb.co/bWpPQnP/backgroundd.jpg'}
//const image = {uri: MyImage}

const Pidgeot = () => {
    
    const [mostrarNormal, setMostrarNormal] = useState(false);

    const normal = () => {
        setMostrarNormal(!mostrarNormal);
    }

    const [mostrarMapa, setMostrarMapa] = useState(false);

    const mapa = () => {
        setMostrarMapa(!mostrarMapa);
    }


  return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <View style={styles.View2}>
                <TouchableOpacity onPress={normal}><Text style={styles.text}>Item</Text></TouchableOpacity>
                {mostrarNormal && <View style={styles.View3}>
                                    <View style={{flex: 1, justifyContent: 'center'}}>
                                      <View style= {{flexDirection: 'row'}}>
                                        <Image source = { require ('../../assets/images/fragGeot.png') }/>
                                        <Text style={styles.textInside}>x100</Text>
                                      </View>
                                      <View style= {{flexDirection: 'row'}}>
                                        <Text style={styles.textInside}>Item ID: 19228</Text>
                                      </View>
                                    </View>
                                  </View>}
                <TouchableOpacity onPress={mapa}><Text style={styles.text}>Spawn</Text></TouchableOpacity>
                <ScrollView>
                {mostrarMapa && <View style={styles.View4}>
                                    <View style={{alignItems: 'center'}}>
                                      <Image style={{margin: 7}} source = { require ('../../assets/images/geotspawn1.png') }/>
                                      <Text style={styles.textInside2}> X: 3329 | Y: 2929 | Z: 5 </Text>
                                      <Image style={{margin: 7}} source = { require ('../../assets/images/geotspawn2.png') }/>
                                      <Text style={styles.textInside2}> X: 1378 | Y: 176 | Z: 12 </Text>
                                    </View>
                                  </View>}
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
    justifyContent: 'center',
  },
  View2: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  View3: {
    width: '100%',
    height: 100,
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

export default Pidgeot;