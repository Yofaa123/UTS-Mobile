import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const Tentang = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('Profil')}>
          <Icon name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Tentang</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.description}>
          Aplikasi ini adalah sebuah platform untuk memudahkan pengguna dalam
          berbelanja kebutuhan sehari-hari secara online. Kami berkomitmen untuk
          menyediakan layanan yang cepat, mudah, dan aman bagi semua pengguna.
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Beranda')}
        style={styles.btn}>
        <Text style={styles.ab}>Ke Beranda</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tentang;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
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
