// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from '../screens/Home';
// import MovieDetail from '../screens/MovieDetail';

// const Stack = createNativeStackNavigator();

// const HomeStackNavigation = (): JSX.Element => (
//   <Stack.Navigator>
//     <Stack.Screen 
//       name="HomeScreen" 
//       component={Home} 
//       options={{ headerShown: false }} 
//     />
//     <Stack.Screen 
//       name="MovieDetail" 
//       component={MovieDetail} 
//       options={{ headerShown: true, title: 'Movie Detail' }} 
//     />
//   </Stack.Navigator>
// );

// export default HomeStackNavigation;


// src/navigations/HomeStackNavigation.tsx
// src/navigations/HomeStackNavigation.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import MovieDetail from '../screens/MovieDetail';

type RootStackParamList = {
  Home: undefined;
  MovieDetail: { movieId: number } | undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MovieDetail" component={MovieDetail} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigation;
