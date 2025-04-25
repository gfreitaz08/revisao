import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from './StackRoute';


export default function App() {
  return (
    <NavigationContainer>
<StackRoutes/>
    </NavigationContainer>
  );
}