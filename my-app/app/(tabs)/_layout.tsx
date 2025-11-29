import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { HapticTab } from '@/components/haptic-tab';
import { PortfolioColors } from '@/constants/PortfolioColors';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: PortfolioColors.primary,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: { position: 'absolute', backgroundColor: '#1a1a1a' },
          default: { 
            backgroundColor: '#1a1a1a', 
            borderTopWidth: 0, 
            height: 60 + insets.bottom, 
            paddingBottom: insets.bottom + 5, 
            paddingTop: 5 
          },
        }),
        tabBarLabelStyle: { fontSize: 10, marginBottom: 5 }, 
        tabBarItemStyle: { width: 75 }
      }}>
      
      <Tabs.Screen
        name="index"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <MaterialIcons name="person" size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name="skills"
        options={{
          title: 'Skills',
          tabBarIcon: ({ color }) => <MaterialIcons name="bolt" size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name="education"
        options={{
          title: 'Educação',
          tabBarIcon: ({ color }) => <MaterialIcons name="school" size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name="experience"
        options={{
          title: 'Exp.',
          tabBarIcon: ({ color }) => <MaterialIcons name="work" size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name="projects"
        options={{
          title: 'Projetos',
          tabBarIcon: ({ color }) => <MaterialIcons name="folder-open" size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name="game"
        options={{
          title: 'Forca',
          tabBarIcon: ({ color }) => <MaterialIcons name="videogame-asset" size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name="sobre"
        options={{
          title: 'Sobre App',
          tabBarIcon: ({ color }) => <MaterialIcons name="info" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}