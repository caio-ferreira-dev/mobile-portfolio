import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Profile from '../components/Profile/Profile';
import { MaterialIcons } from '@expo/vector-icons';

type skill = {
  name: string,
  stars: number
}

const skills: skill[] = [
  {
    name: 'HTML',
    stars: 4
  },
  {
    name: 'CSS',
    stars: 4
  },
  {
    name: 'JavaScript',
    stars: 4
  },
  {
    name: 'TypeScript',
    stars: 5
  },
  {
    name: 'NodeJS',
    stars: 5
  },
  {
    name: 'NestJS',
    stars: 5
  },
  {
    name: 'NextJS',
    stars: 4
  },
  {
    name: 'Git',
    stars: 4
  },
  {
    name: 'Docker',
    stars: 4
  }
]

export default function Skills() {

  function renderList(list: skill[]) {
    return list.map((skill, index) => {
      const stars = []
      for(let i = 0; i < skill.stars; i++) {
        stars.push(<MaterialIcons name="star" size={24} color="yellow" />)
      }
      return <View key={index} style={styles.skill}>
        <Text style={styles.text}>{skill.name}:</Text>
        <View style={{flexDirection: 'row'}}>
          {stars}
        </View>
      </View>
    })
  }

  return (
    <View style={styles.container}>
      <Profile isHome={false} />
      <View style={styles.skillsList}>
        {renderList(skills)}
      </View>
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
  skillsList: {
    width: 300,
    gap: 5
  },
  skill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15
  },
  text: {
    width: 120,
    color: 'white',
    fontSize: 24
  }
});