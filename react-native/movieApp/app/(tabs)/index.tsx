import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { ActivityIndicator, Image, ScrollView, Text, View, FlatList } from "react-native";
// import '../globals.css';
import { fetchMovies } from "@/api";
import useFetch from "@/services/useFetch";
import { router } from "expo-router";
import SearchBar from "../../components/SearchBar";
import React from 'react';
export default function App() {
  const {data: movies,
    loading: moviesLoading,
    error: moviesError }= useFetch(() => fetchMovies({
    query:''
  }))
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className ="absolute min-w-full w-full z-0"
      resizeMode="cover"
      />
      <ScrollView className="flex-1 px-5"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        minHeight: '100%',
        paddingBottom: 10
      }}>
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto"/>
        {moviesLoading ? (
          <ActivityIndicator
          size="large"
          color="#000ff"
          className="mt-10 self-center"
          />
        ): moviesError ? (
          <Text>Error: {moviesError?.message}</Text>
        ) : <View className="flex-1 mt-5">
              <SearchBar
              onFocus={() => router.push("/search")}
              placeholder="Search for a movie"
            />
            <>
            <Text className="text-lg text-white font-bold mt-5 mb-3">
            Latest Movies
            </Text>
            <FlatList
            data={movies}
            renderItem={({item}) => (
              <Text className="text-white text-sm">{item.title}</Text>
            )}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            columnWrapperStyle={{
              justifyContent: 'flex-start',
              gap: 20,
              paddingRight: 5,
              marginBottom: 10
            }}
            className="mt-2 pb-32"
            scrollEnabled={false}
            />
            </>

        </View>}
        
      </ScrollView>
    </View>
  );
}