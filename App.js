import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
        <View style={styles.searchBox}>
          <Icon name="search" size={20} color="#999" />
          <TextInput placeholder="Search here ..." style={styles.searchInput} />
        </View>
        <View style={styles.profile}>
          <Image source={{ uri: 'https://placekitten.com/50/50' }} style={styles.avatar} />
          <View>
            <Text style={styles.welcome}>Welcome!</Text>
            <Text style={styles.name}>Donna Stroupe</Text>
          </View>
          <Icon name="notifications-none" size={24} style={styles.bellIcon} />
        </View>
      </View>


      <Text style={styles.sectionTitle}>Category</Text>
      <View style={styles.categoryContainer}>
        {[
          'Resort', 'Homestay', 'Hotel', 'Lodge',
          'Villa', 'Apartment', 'Hostel', 'See all'
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.categoryItem}>
            <Icon name="home" size={30} color="#fff" />
            <Text style={styles.categoryText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

    
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Destination</Text>
        <Icon name="menu" size={20} />
      </View>
      <ScrollView horizontal style={styles.imageScroll}>
        {['https://placekitten.com/200/150', 'https://placekitten.com/201/150', 'https://placekitten.com/202/150'].map((img, index) => (
          <Image key={index} source={{ uri: img }} style={styles.imageCard} />
        ))}
      </ScrollView>

      
      <Text style={styles.sectionTitle}>Recommended</Text>
      <View style={styles.recommendContainer}>
        {['https://placekitten.com/300/150', 'https://placekitten.com/301/150'].map((img, index) => (
          <Image key={index} source={{ uri: img }} style={styles.recommendImage} />
        ))}
      </View>
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => <Icon name="home" size={24} color={color} />,
          }}
        />
        <Tab.Screen
          name="Explore"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => <Icon name="explore" size={24} color={color} />,
          }}
        />
        <Tab.Screen
          name="Search"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => <Icon name="search" size={24} color={color} />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => <Icon name="person" size={24} color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 16,
    backgroundColor: 'lightblue',
    borderRadius:25,
    display:'flex',
    
  },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: '#EFEFEF',
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 8,
  },
  welcome: {
    fontWeight: 'bold',
  },
  name: {
    color: '#777',
  },
  bellIcon: {
    marginLeft: 'auto',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',

  },
  categoryItem: {
    backgroundColor: '#5E50A1',
    borderRadius: 50,
    width: '22%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 6,
  },
  categoryText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageScroll: {
    marginVertical: 10,
  },
  imageCard: {
    width: 120,
    height: 90,
    borderRadius: 8,
    marginRight: 12,
  },
  recommendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recommendImage: {
    width: '48%',
    height: 100,
    borderRadius: 8,
  },
});
