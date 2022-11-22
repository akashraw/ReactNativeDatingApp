import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OnBoardScreen from './src/Screens/OnBoardScreen'
import LoginScreen from './src/Screens/LoginScreen'
import MobileScreen from './src/Screens/MobileScreen'
import EmailSignUp from './src/Screens/EmailSignUp'
import Routes from './src/Navigations/Routes'

export default function App() {
  return (
    // <LoginScreen/>
    // <OnBoardScreen/>
    // <MobileScreen/>
    // <EmailSignUp/>
    <Routes/>
  )
}

const styles = StyleSheet.create({})