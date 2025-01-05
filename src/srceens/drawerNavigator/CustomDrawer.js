import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {UserContext} from '../../context/UserContext';
import Divider from '../../components/Divider';
import DrawerButton from '../../components/DrawerButton';

const CustomDrawer = ({navigation}) => {
  const {user} = useContext(UserContext);

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'SignIn'}],
    });
  };

  const handleClick = screen => {
    navigation.navigate(screen);
    navigation.closeDrawer();
  };

  return (
    <DrawerContentScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../../assets/user.jpg')} // Replace with user profile image
          style={styles.profileImage}
        />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email || '-'}</Text>
      </View>
      <Divider />
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <DrawerButton
            label={'Home'}
            iconLeft={'home'}
            backgroundColor={'#FFF'}
            textColor="#000"
            onPress={handleClick}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <DrawerButton
            label={'Payment'}
            iconLeft={'payment'}
            backgroundColor={'#FFF'}
            textColor="#000"
            onPress={handleClick}
          />
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.menuItem}>
          <DrawerButton
            label={'TestResult'}
            iconLeft={'assessment'}
            backgroundColor={'#FFF'}
            textColor="#000"
            onPress={handleClick}
          />
        </TouchableOpacity> */}

        <Divider />

        <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
          <DrawerButton
            label={'Logout'}
            iconLeft={'logout'}
            backgroundColor={'#FFF'}
            textColor="#000"
            onPress={handleLogout}
          />
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileContainer: {
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#777',
  },
  menuContainer: {},
  menuItem: {},
});

export default CustomDrawer;
