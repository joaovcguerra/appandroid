import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { PortfolioColors } from '@/constants/PortfolioColors';
import { MaterialIcons } from '@expo/vector-icons';

export default function EducationScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>EDUCAÇÃO</Text>

      <View style={styles.card}>
        <MaterialIcons name="school" size={24} color={PortfolioColors.primary} style={styles.icon} />
        <View>
          <Text style={styles.subHeading}>Bacharelado em Ciência da Computação</Text>
          <Text style={styles.mutedText}>Universidade Católica de Pernambuco</Text>
          <Text style={styles.dateText}>2022 - Presente</Text>
        </View>
      </View>

      <View style={styles.card}>
        <MaterialIcons name="computer" size={24} color={PortfolioColors.primary} style={styles.icon} />
        <View>
          <Text style={styles.subHeading}>Desenvolvimento Web</Text>
          <Text style={styles.mutedText}>Udemy</Text>
          <Text style={styles.dateText}>Concluído em 2025</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: PortfolioColors.white },
  content: { padding: 30, paddingBottom: 100, paddingTop: 60 },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: PortfolioColors.primary,
    marginBottom: 25,
    borderBottomWidth: 2,
    borderBottomColor: '#e9ecef',
    paddingBottom: 5,
    letterSpacing: 1,
    textTransform: 'uppercase'
  },
  card: {
    flexDirection: 'row',
    marginBottom: 25,
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    alignItems: 'flex-start',
  },
  icon: { marginRight: 15, marginTop: 2 },
  subHeading: { fontSize: 16, fontWeight: 'bold', color: PortfolioColors.textDark, marginBottom: 4, flexWrap: 'wrap', maxWidth: '90%' },
  mutedText: { fontSize: 15, color: PortfolioColors.textMuted },
  dateText: { fontSize: 14, color: PortfolioColors.textMuted, fontStyle: 'italic', marginTop: 2 },
});