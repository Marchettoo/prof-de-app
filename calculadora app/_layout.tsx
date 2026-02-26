import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

function HomeScreen() {
  const insets = useSafeAreaInsets();

  const [display, setDisplay] = useState('');

  function pressionarBotao(valor) {
    if (valor === '=') {
      try {
        const resultado = eval(display);
        setDisplay(resultado.toString());
      } catch {
        setDisplay('Erro');
      }
    } else if (valor === 'C') {
      setDisplay('');
    } else {
      setDisplay(display + valor);
    }
  }

  function BotaoCalculadora(valor, ehIgual = false) {
    return (
      <TouchableOpacity
        style={[
          styles.botao,
          ehIgual && styles.botaoIgual
        ]}
        onPress={() => pressionarBotao(valor)}
      >
        <Text style={styles.textoBotao}>{valor}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>

      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>
          {display === '' ? '0' : display}
        </Text>
      </View>

      <View style={styles.row}>
        {BotaoCalculadora('7')}
        {BotaoCalculadora('8')}
        {BotaoCalculadora('9')}
        {BotaoCalculadora('/')}
      </View>

      <View style={styles.row}>
        {BotaoCalculadora('4')}
        {BotaoCalculadora('5')}
        {BotaoCalculadora('6')}
        {BotaoCalculadora('*')}
      </View>

      <View style={styles.row}>
        {BotaoCalculadora('1')}
        {BotaoCalculadora('2')}
        {BotaoCalculadora('3')}
        {BotaoCalculadora('-')}
      </View>

      <View style={styles.row}>
        {BotaoCalculadora('0')}
        {BotaoCalculadora('C')}
        {BotaoCalculadora('=', true)}
        {BotaoCalculadora('+')}
      </View>

    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#666',
    justifyContent: 'center',
    padding: 10,
    borderWidth: 10,
    borderColor: 'black'
  },

  displayContainer: {
    backgroundColor: '#013220',
    padding: 25,
    marginBottom: 20,
    borderWidth: 6,
    borderColor: 'black',
    borderRadius: 15
  },

  displayText: {
    fontSize: 42,
    color: '#00FF00',
    textAlign: 'right',
    fontFamily: 'Comic Sans MS'
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },

  botao: {
    flex: 1,
    margin: 5,
    backgroundColor: '#d9d9d9',
    padding: 25,
    alignItems: 'center',
    borderWidth: 6,
    borderColor: 'black',
    borderRadius: 20
  },

  botaoIgual: {
    backgroundColor: 'red'
  },

  textoBotao: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Comic Sans MS'
  }

});
