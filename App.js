import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Login from './src/modules/auth/login/adapters/screens/login';
import Navigation from './src/config/navigation/Navigation';
import {app, auth, db} from './src/config/util/firebaseConnection'

export default function App() {
  return (
    <Navigation />
  )
}
