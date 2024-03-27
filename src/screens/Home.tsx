import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Profile from '../components/Profile/Profile';
import Contact from '../components/Contact/Contact';
import { MaterialIcons } from '@expo/vector-icons';

export default function Home({ navigation }: any) {
  function navToSkills() {
    navigation.navigate('skills')
  }

  return (
    <View style={styles.container}>
        <Profile isHome={true} />
        <Contact />
        <Pressable style={styles.skillsButton} onPress={navToSkills}>
            <Text style={styles.text}>
                Skills
            </Text>
            <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
        </Pressable>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333333',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
  },
  text: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  skillsButton: {
    width: 200,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    gap: 5,
    backgroundColor: '#1a1a1a'
  }
});