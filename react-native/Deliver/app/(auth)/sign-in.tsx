import { View, Text, Button } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const SignIn = () => {
  return (
    <View>
      <Text>Sign In</Text> 
        <Button title="Sign in" onPress={() => router.push("/(tabs)/cart")} />
      <Button title="Already have an Account?" onPress={() => router.push("/sign-up")} />
    </View>
  )
}

export default SignIn