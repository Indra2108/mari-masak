import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import screen
import Home from './src/Home';
import Content from './src/Content';
import Search from './src/Search';
import Wishlist from './src/Wishlist';
import Article from './src/Article';
import ContentArticle from './src/Article/ContentArticle';

const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Content" component={Content} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Wishlist" component={Wishlist} />
        <Stack.Screen name="Article" component={Article} />
        <Stack.Screen name="ContentArticle" component={ContentArticle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}