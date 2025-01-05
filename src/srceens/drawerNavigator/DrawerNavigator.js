import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../home/Home';
import Payment from '../payment/Payment';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Payment" component={Payment} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
