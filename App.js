/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Game from './Game';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View styles={styles.sectionContainer}>
          <Text style={styles.sectionDescription}>
            Tick Tac Toe Hiver Assignment
          </Text>
          <View style={{ alignItems: 'center' }}>
            <Game />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 50,
    // paddingHorizontal: 24,
    // flex: 1,
    width: '100%',
    // justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    width: '100%',
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
    marginBottom: 50,
    backgroundColor: 'black',
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
