import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  ScreenA: undefined;
  ScreenB: undefined;
};

type ScreenANavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'ScreenA'
>;

type ScreenAProps = {
  navigation: ScreenANavigationProps;
};
function ScreenA({navigation}: ScreenAProps) {
  const onPressHandler = () => {
    navigation.navigate('ScreenB');
  };
  return (
    <View style={styles.body}>
      <Text>Screen A</Text>
      <Pressable onPress={onPressHandler}>
        <Text style={styles.text}>Go To Screen B</Text>
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
    // fontWeight: 'bold',
    fontFamily: 'Open Sans Condensed ExtraBold',
  },
});

export default ScreenA;
