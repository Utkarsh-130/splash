import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function _layout() {
  return (
    <View style={styles.vw}>
      <Text style={styles.tx}>the account and lives here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  vw: {
    backgroundColor: 'violet',
    flex: 1,
  borderRadius:"23px",
    justifyContent: 'center',
    alignItems: 'center',
  },
  tx: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 100,
  },
});
