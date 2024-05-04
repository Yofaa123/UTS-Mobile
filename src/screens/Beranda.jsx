import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Data = [
  {id: 1, label: 'Sembako', icon: require('../assets/sembako.jpeg')},
  {id: 2, label: 'Bumbu Dapur', icon: require('../assets/Bumbu.jpeg')},
  {id: 3, label: 'Obat & Herbal', icon: require('../assets/obat.jpeg')},
  {id: 4, label: 'Alat Tulis', icon: require('../assets/alat.jpeg')},
  {id: 5, label: 'Snack-Snack', icon: require('../assets/snack.jpeg')},
];

const Barang = [
  {
    id: 1,
    label: 'Gula',
    icon: require('../assets/gula.jpeg'),
    harga: 'Rp 15000',
  },
  {
    id: 2,
    label: 'Beras',
    icon: require('../assets/beras.jpeg'),
    harga: 'Rp 50000',
  },
  {
    id: 3,
    label: 'Odol',
    icon: require('../assets/odol.jpeg'),
    harga: 'Rp 5000',
  },
  {
    id: 4,
    label: 'Sabun Giv',
    icon: require('../assets/giv.jpeg'),
    harga: 'Rp 2000',
  },
  {
    id: 5,
    label: 'Kecap',
    icon: require('../assets/kecap.jpeg'),
    harga: 'Rp 2000',
  },
  {
    id: 6,
    label: 'Masako',
    icon: require('../assets/masako.jpeg'),
    harga: 'Rp 1000',
  },
  {
    id: 7,
    label: 'Micin',
    icon: require('../assets/micin.jpeg'),
    harga: 'Rp 5000',
  },
  {
    id: 8,
    label: 'Bodrex',
    icon: require('../assets/bodrex.jpeg'),
    harga: 'Rp 5000',
  },
  {
    id: 9,
    label: 'Tolak Angin',
    icon: require('../assets/tolak.jpeg'),
    harga: 'Rp 5000',
  },
  {
    id: 10,
    label: 'Bulpen',
    icon: require('../assets/bulpen.jpeg'),
    harga: 'Rp 3000',
  },
  {
    id: 11,
    label: 'Penggaris',
    icon: require('../assets/garis.jpeg'),
    harga: 'Rp 8000',
  },
  {
    id: 12,
    label: 'Pensil',
    icon: require('../assets/pensil.jpeg'),
    harga: 'Rp 1000',
  },
  {
    id: 13,
    label: 'Krayon',
    icon: require('../assets/krayon.jpeg'),
    harga: 'Rp 20000',
  },
  {
    id: 14,
    label: 'TicTac',
    icon: require('../assets/tic.jpeg'),
    harga: 'Rp 500',
  },
  {
    id: 15,
    label: 'Beng-Beng',
    icon: require('../assets/beng.jpeg'),
    harga: 'Rp 2000',
  },
  {
    id: 16,
    label: 'Chocolatos',
    icon: require('../assets/cho.jpeg'),
    harga: 'Rp 500',
  },
  {
    id: 17,
    label: 'Permen',
    icon: require('../assets/permen.jpeg'),
    harga: 'Rp 250',
  },
  {
    id: 18,
    label: 'Basreng',
    icon: require('../assets/basreng.jpeg'),
    harga: 'Rp 500',
  },
  {
    id: 19,
    label: 'Nabati',
    icon: require('../assets/nabati.jpeg'),
    harga: 'Rp 500',
  },
  {
    id: 20,
    label: 'Tango',
    icon: require('../assets/tango.jpeg'),
    harga: 'Rp 500',
  },
];

const Beranda = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.searchIcon}>
          <Icon name="search" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchBar} />
      </View>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Selamat Datang di Toko Kami</Text>
        </View>
        <Text style={styles.categoryTitle}>Kategori</Text>
        <FlatList
          data={Data}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.categoryContainer}>
              <Image source={item.icon} style={styles.iconImage} />
              <Text style={styles.categoryLabel}>{item.label}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
        />
        <Text style={styles.productTitle}>Semua Barang</Text>
        <FlatList
          data={Barang}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.itemContainer}>
              <Image source={item.icon} style={styles.iconImage} />
              <Text>{item.label}</Text>
              <Text>{item.harga}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
          numColumns={5}
          contentContainerStyle={styles.flatlistContent}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Profil')}
          style={styles.profileButton}>
          <Text style={styles.profileButtonText}>Ke Profil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: 360,
    height: 70,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    left: 10,
    top: '40%',
    marginTop: 10,
  },
  searchBar: {
    width: 250,
    height: 10,
    margin: 20,
    padding: 15,
    borderRadius: 8,
    marginLeft: -17,
    backgroundColor: 'white',
    position: 'relative',
    top: 15,
  },
  content: {
    flex: 1,
  },
  titleContainer: {
    margin: 10,
    height: 70,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontFamily: 'times',
    fontWeight: 'bold',
    color: 'black',
  },
  categoryTitle: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'times',
    fontWeight: 'bold',
    marginHorizontal: 5,
    padding: 10,
  },
  productTitle: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'times',
    fontWeight: 'bold',
    marginHorizontal: 5,
    padding: 10,
  },
  categoryContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 50,
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  iconImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  flatlistContent: {
    alignItems: 'center',
  },
  categoryLabel: {
    textAlign: 'center',
  },
  profileButton: {
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'green',
  },
  profileButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
