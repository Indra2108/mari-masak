import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import screen
import Splash from './src/Splash';
import Home from './src/Home';
import Content from './src/Content';
import Search from './src/Search';
import Wishlist from './src/Wishlist';
import Article from './src/Article';
import ContentArticle from './src/Article/ContentArticle';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default App = () => {
  const HomeTab = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
        <Stack.Screen name="Content" component={Content} options={{ headerShown: false }} />
      </Stack.Navigator>
    )
  }

  const WishlistTab = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Wishlist" component={Wishlist} options={{ headerShown: false }} />
      </Stack.Navigator>
    )
  }

  const ArticleTab = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Article" component={Article} options={{ headerShown: false }} />
        <Stack.Screen name="ContentArticle" component={ContentArticle} options={{ headerShown: false }} />
      </Stack.Navigator>
    )
  }


  const BottomTabs = () => {
    return (
      <Tab.Navigator initialRouteName='HomeTab'>
        <Tab.Screen name='HomeTab' component={HomeTab} options={{ headerShown: false, title: 'Home' }} />
        <Tab.Screen name='ArticleTab' component={ArticleTab} options={{ headerShown: false, title: 'Article' }} />
        <Tab.Screen name='WishlistTab' component={WishlistTab} options={{ headerShown: false, title: 'Wishlist' }} />
      </Tab.Navigator>
    )
  }

  const SplashBruh = () => {
    return (
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="HomeBottomTab" component={BottomTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <SplashBruh />
    </NavigationContainer>
  );
}