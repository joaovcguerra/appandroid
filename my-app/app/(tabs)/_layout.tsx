import { Tabs, useRouter, Href } from 'expo-router';
import React, { useState } from 'react';
import { Platform, View, Text, Modal, TouchableOpacity, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { HapticTab } from '@/components/haptic-tab';
import { PortfolioColors } from '@/constants/PortfolioColors';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);

  const navigateTo = (route: Href) => {
    setMenuVisible(false);
    router.push(route);
  };

  return (
    <>
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
        }}>
        
        <Tabs.Screen
          name="index"
          options={{
            title: 'Perfil',
            tabBarIcon: ({ color }) => <MaterialIcons name="person" size={24} color={color} />,
          }}
        />

        <Tabs.Screen
          name="menu" 
          options={{
            title: 'Experiências',
            tabBarIcon: ({ color }) => <MaterialIcons name="work" size={24} color={color} />,
          }}
          listeners={() => ({
            tabPress: (e) => {
              e.preventDefault();
              setMenuVisible(true);
            },
          })}
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

        <Tabs.Screen name="skills" options={{ href: null }} />
        <Tabs.Screen name="education" options={{ href: null }} />
        <Tabs.Screen name="experience" options={{ href: null }} />
        <Tabs.Screen name="projects" options={{ href: null }} />

      </Tabs>

      <Modal
        animationType="fade"
        transparent={true}
        visible={menuVisible}
        onRequestClose={() => setMenuVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setMenuVisible(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.menuContainer}>
                <Text style={styles.menuTitle}>Selecione uma área</Text>
                
                <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('/skills')}>
                  <MaterialIcons name="bolt" size={24} color={PortfolioColors.primary} />
                  <Text style={styles.menuText}>Habilidades</Text>
                  <MaterialIcons name="chevron-right" size={24} color="#ccc" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('/education')}>
                  <MaterialIcons name="school" size={24} color={PortfolioColors.primary} />
                  <Text style={styles.menuText}>Experiência Acadêmica</Text>
                  <MaterialIcons name="chevron-right" size={24} color="#ccc" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('/experience')}>
                  <MaterialIcons name="business-center" size={24} color={PortfolioColors.primary} />
                  <Text style={styles.menuText}>Experiência Profissional</Text>
                  <MaterialIcons name="chevron-right" size={24} color="#ccc" />
                </TouchableOpacity>

                <TouchableOpacity style={[styles.menuItem, { borderBottomWidth: 0 }]} onPress={() => navigateTo('/projects')}>
                  <MaterialIcons name="folder-open" size={24} color={PortfolioColors.primary} />
                  <Text style={styles.menuText}>Projetos</Text>
                  <MaterialIcons name="chevron-right" size={24} color="#ccc" />
                </TouchableOpacity>

              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 10
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
    fontWeight: '500',
  },
});