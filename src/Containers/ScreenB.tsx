import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type ScreenBNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'ScreenB'
>;

type ScreenBProps = {
  navigation: ScreenBNavigationProps;
};
function ScreenB({navigation}: ScreenBProps) {
  const onPressHandler = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.body}>
      <Text>Screen B</Text>
      <Pressable onPress={onPressHandler}>
        <Text style={styles.text}>Go Back to Screen A</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default ScreenB;
