import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import { images } from '@/constants'
import { Slot } from 'expo-router'
import React from 'react'
import { Dimensions, Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native'

const _Layout = () => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView className='bg-white h-full' keyboardShouldPersistTaps='handled'>
        <View className='w-full relative' style={{height: Dimensions.get('screen').height/2.25}}>
        <ImageBackground source={images.loginGraphic} className= "size-full rounded-b-lg" resizeMode='stretch' style={{width: 430, height: '100%'}} />
        <Image source ={images.logo} className="self-center size-48 absolute -bottom-8 z-10" style={{width: '20%', height: '30%'}}/>
        </View>
        <CustomInput
          placeholder="Enter your email"
          value=""
          onChangeText={(text: string) => {}}
          label="Email"
          secureTextEntry={false}
          keyboardType="email-address"
        />
        <CustomButton/>
      </ScrollView>
      <Slot/>
    </KeyboardAvoidingView>
  )
}
export default _Layout  