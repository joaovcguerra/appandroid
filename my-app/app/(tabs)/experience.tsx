import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { PortfolioColors } from '@/constants/PortfolioColors';
import { MaterialIcons } from '@expo/vector-icons';

export default function ExperienceScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>EXPERIÊNCIA PROFISSIONAL</Text>

      <View style={styles.emptyState}>
        <MaterialIcons name="work-off" size={50} color={PortfolioColors.textMuted} />
        <Text style={styles.bodyText}>Nenhuma experiência profissional registrada no momento.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: PortfolioColors.white },
  content: { padding: 30, paddingBottom: 100, paddingTop: 60 },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: PortfolioColors.primary,
    marginBottom: 30,
    borderBottomWidth: 2,
    borderBottomColor: '#e9ecef',
    paddingBottom: 5,
    letterSpacing: 1,
    textTransform: 'uppercase'
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    opacity: 0.7
  },
  bodyText: { 
    fontSize: 16, 
    color: PortfolioColors.textDark, 
    marginTop: 15, 
    textAlign: 'center' 
  },
});