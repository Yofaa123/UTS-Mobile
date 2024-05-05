import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const Profil = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Profil</Text>
      </View>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.profileIconContainer}>
            <Icon name="user" size={100} color="green" />
          </View>
          <Text style={styles.name}>Mohammad Yofa Arifin</Text>
          <Text style={styles.email}>mohammadyofaarifin@gmail.com</Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editText}>Edit Profil</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Pengaturan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Privasi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Pengaturan Akun</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Bantuan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Keluar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Tentang')}
          style={styles.btn}>
          <Text style={styles.ab}>Ke Tentang</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Profil;

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
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileIconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  email: {
    fontSize: 18,
    marginBottom: 20,
    color: 'black',
  },
  editButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  editText: {
    color: 'white',
    fontSize: 16,
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
  menu: {
    paddingHorizontal: 20,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuText: {
    fontSize: 18,
    color: 'black',
  },
});
