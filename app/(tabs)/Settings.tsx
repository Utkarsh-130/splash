import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

export default function Settings() {
  return (
    <View>
      <Text>This is( the settings page which is needed</Text>
      <Link href="/acc">
        <View style={styles.bbx}>
          <Text style={styles.linkText}>Account Info</Text>
        </View>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  bbx: {
    width: '30%',
    borderRadius: 38,
    backgroundColor: 'purple',
    padding: 10,
    alignItems: 'center', },
  linkText: {
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: 'white', 
  },
});
