
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cadastro from './src/pages/Cadastro'


export default function App() {
  return (
    <Cadastro> </Cadastro>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
