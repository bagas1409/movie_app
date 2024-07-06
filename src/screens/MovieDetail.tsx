import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, Image, StyleSheet } from 'react-native';
import { API_ACCESS_TOKEN } from '@env';
import MovieList from '../components/movies/MovieList';

// const MovieDetail = ({ route }: any): JSX.Element => {
//   const { id } = route.params;
//   const [movie, setMovie] = useState<any>(null);

//   useEffect(() => {
//     fetchMovieDetail();
//   }, []);

//   const fetchMovieDetail = async () => {
//     const url = `https://api.themoviedb.org/3/movie/${id}`;
//     const options = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         Authorization: `Bearer ${API_ACCESS_TOKEN}`,
//       },
//     };

//     try {
//       const response = await fetch(url, options);
//       const data = await response.json();
//       setMovie(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   if (!movie) {
//     return (
//       <View style={styles.loadingContainer}>
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView style={styles.container}>
//       <Image
//         source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
//         style={styles.posterImage}
//       />
//       <Text style={styles.title}>{movie.title}</Text>
//       <Text style={styles.overview}>{movie.overview}</Text>
//       <Text style={styles.subtitle}>Recommendations</Text>
//       <MovieList
//         title="Recommendations"
//         path={`movie/${id}/recommendations`}
//         coverType="poster"
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   posterImage: {
//     width: '100%',
//     height: 500,
//     borderRadius: 8,
//     marginBottom: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   overview: {
//     fontSize: 16,
//     marginBottom: 16,
//   },
//   subtitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
// });

// export default MovieDetail;

const MovieDetail = ({ route }: any): JSX.Element => {
  const { id } = route.params

  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        marginTop: 32,
      }}
    >
      <Text style={{ fontSize: 30 }}>Movie ID: {id}</Text>
    </View>
  )
}

export default MovieDetail