import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeViewArea, Text, View, Platform } from 'react-native';

export default function App() {
  return (
    <>
      <SafeViewArea style={{ flex: 1 }} />
      <View style={{ flex: 1, padding: 16, backgroundColor: "green" }}>
        <Text>Search</Text>
      </View>
      <View style={{ flex: 1, padding: 16, backgroundColor: "blue" }}>
        <Text>list</Text>
      </View>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
