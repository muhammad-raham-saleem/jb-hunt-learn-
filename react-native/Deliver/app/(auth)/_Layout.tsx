import { Slot } from 'expo-router'
import React from 'react'
import { SafeAreaView, Text } from 'react-native'

const _Layout = () => {
  return (
    <SafeAreaView>
      <Text>Auth layout</Text>
      <Slot/>
    </SafeAreaView>
  )
}
export default _Layout  