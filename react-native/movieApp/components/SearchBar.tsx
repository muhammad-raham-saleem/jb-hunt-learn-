import { icons } from '@/constants/icons';
import React from 'react';
import { Image, TextInput, View } from 'react-native';

interface Props {
    placeholder?: string;
    onFocus?: () => void;
}
const SearchBar = ({placeholder, onFocus }: Props) => {
    return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'> 
    <Image source={icons.search} className="w-5 h-5"
        resizeMode="contain" tintColor="#ab8bff" />
    <TextInput
        onFocus={onFocus}
        placeholder={placeholder}
        value=""
        onChangeText={() => {}}
        className="flex-1 ml-2 text-white"
        placeholderTextColor="#a8b5db"
    />
    </View>
    )
}

export default SearchBar