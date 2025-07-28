import { View, Text, Button } from 'react-native'
import React from 'react'
import {router} from 'expo-router';

const SignUp = () => {
  return (
    <View>
      <Text>Sign Up</Text>
      <input placeholder="Email" />
        <input placeholder="Password" />
        <input placeholder="Confirm Password" />

      <Button title="Sign up" onPress={() => router.push("/")} />
      <Button title="Already have an Account?" onPress={() => router.push("/sign-in")} />
    </View>
  )
}

export default SignUp