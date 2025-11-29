import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { PortfolioColors } from '@/constants/PortfolioColors';

const SkillRating = ({ level }: { level: number }) => (
  <View style={styles.dots}>
    {[...Array(5)].map((_, i) => (
      <View 
        key={i} 
        style={[styles.dot, { backgroundColor: i < level ? PortfolioColors.primary : '#d1d1d1' }]} 
      />
    ))}
  </View>
);

export default function SkillsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.section}>
        <Text style={styles.heading}>HABILIDADES</Text>
        
        <View style={styles.skillRow}>
          <Text style={styles.skillName}>JavaScript / React</Text>
          <SkillRating level={4} />
        </View>
        <View style={styles.skillRow}>
          <Text style={styles.skillName}>Node.js</Text>
          <SkillRating level={3} />
        </View>
        <View style={styles.skillRow}>
          <Text style={styles.skillName}>CSS / Styling</Text>
          <SkillRating level={5} />
        </View>
        <View style={styles.skillRow}>
          <Text style={styles.skillName}>React Native</Text>
          <SkillRating level={4} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: PortfolioColors.white },
  content: { padding: 30, paddingBottom: 100, paddingTop: 60 },
  section: { marginBottom: 35 },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: PortfolioColors.primary,
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#e9ecef',
    paddingBottom: 5,
    letterSpacing: 1,
    textTransform: 'uppercase'
  },
  skillRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  skillName: { fontSize: 16, fontWeight: '500', color: PortfolioColors.textDark },
  dots: { flexDirection: 'row', gap: 6 },
  dot: { width: 14, height: 14, borderRadius: 7 },
});