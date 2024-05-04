import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMenu from '../component/IconMenu';

const Data = [
  {id: 1, label: 'Sembako'},
  {id: 2, label: 'Bumbu Dapur'},
  {id: 3, label: 'Obat & Herbal'},
  {id: 4, label: 'Alat Tulis'},
  {id: 5, label: 'Snack-Snack'},
];

const Beranda = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.txt}>
        <TouchableOpacity style={styles.ic}>
          <Icon name="search" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.pencarian} />
      </View>
      <View style={styles.tbl}>
        <Text style={styles.jdl}> Selamat Datang di Toko Kami</Text>
      </View>
      <Text style={styles.ktgr}>Kategori</Text>
      <View>
        <FlatList
          data={Data}
          renderItem={({item}) => <IconMenu label={item.label} />}
          horizontal={true}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Profil')}
          style={styles.btn}>
          <Text style={styles.ab}>Ke Profil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  txt: {
    //borderWidth: 1,
    width: 360,
    height: 70,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relaive',
  },
  pencarian: {
    //borderWidth: 1,
    width: 200,
    height: 10,
    margin: 20,
    padding: 15,
    borderRadius: 8,
    width: 250,
    marginLeft: -17,
    backgroundColor: 'white',
    position: 'relative',
    top: 15,
  },
  tbl: {
    margin: 10,
    //borderWidth: 1,
    height: 70,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  jdl: {
    fontSize: 20,
    fontFamily: 'times',
    fontWeight: 'bold',
    color: 'black',
  },
  ic: {
    position: 'absolute',
    left: 10,
    top: '40%',
    marginTop: 10,
  },
  ktgr: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'times',
    fontWeight: 'bold',
  },
  btn: {
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'green',
  },
  ab: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
