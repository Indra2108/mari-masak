import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import screen
import Splash from './src/Splash';
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
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Content" component={Content} options={{ headerShown: false }} />
        <Stack.Screen name="Search" component={Search} options={{ title: 'Cari resep' }} />
        <Stack.Screen name="Wishlist" component={Wishlist} />
        <Stack.Screen name="Article" component={Article} />
        <Stack.Screen name="ContentArticle" component={ContentArticle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}