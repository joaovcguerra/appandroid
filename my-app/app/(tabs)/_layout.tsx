import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { HapticTab } from '@/components/haptic-tab';
import { PortfolioColors } from '@/constants/PortfolioColors';
import { MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: PortfolioColors.primary,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: { position: 'absolute' },
          default: { backgroundColor: '#1a1a1a', borderTopWidth: 0, height: 60, paddingBottom: 8, paddingTop: 8 },
        }),
        tabBarLabelStyle: { fontSize: 12 },
      }}>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <MaterialIcons name="person" size={28} color={color} />,
        }}
      />

      <Tabs.Screen
        name="skills"
        options={{
          title: 'Habilidades',
          tabBarIcon: ({ color }) => <MaterialIcons name="list-alt" size={28} color={color} />,
        }}
      />

      <Tabs.Screen
        name="game"
        options={{
          title: 'Forca',
          tabBarIcon: ({ color }) => <MaterialIcons name="videogame-asset" size={28} color={color} />,
        }}
      />

      <Tabs.Screen
        name="sobre"
        options={{
          title: 'Sobre App',
          tabBarIcon: ({ color }) => <MaterialIcons name="info" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}