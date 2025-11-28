import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { PortfolioColors } from '@/constants/PortfolioColors';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function ProfileScreen() {
  const openLink = (url: string) => Linking.openURL(url);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://github.com/waverjoao.png' }}
          style={styles.profileImage}
        />
      </View>

      <Text style={styles.name}>João Vitor</Text>
      <Text style={styles.title}>Programador FullStack</Text>

      <View style={styles.divider} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>CONTATO</Text>

        <TouchableOpacity onPress={() => openLink('geo:0,0?q=Itapissuma')} style={styles.row}>
          <IconSymbol name="mappin.and.ellipse" size={18} color={PortfolioColors.textLight} />
          <Text style={styles.text}>Itapissuma - PE</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openLink('tel:81985464487')} style={styles.row}>
          <IconSymbol name="phone.fill" size={18} color={PortfolioColors.textLight} />
          <Text style={styles.text}>(81) 98546-4487</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openLink('mailto:email@exemplo.com')} style={styles.row}>
          <IconSymbol name="envelope.fill" size={18} color={PortfolioColors.textLight} />
          <Text style={styles.text}>email@exemplo.com</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: PortfolioColors.sidebarBg },
  content: { padding: 40, alignItems: 'center' },
  imageContainer: {
    marginBottom: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 5,
    borderColor: PortfolioColors.primary,
  },
  name: { fontSize: 32, fontWeight: 'bold', color: PortfolioColors.textLight, marginBottom: 5 },
  title: { fontSize: 18, color: '#c7c7c7', marginBottom: 20 },
  divider: { width: '100%', height: 2, backgroundColor: PortfolioColors.primary, marginBottom: 30 },
  section: { width: '100%', alignItems: 'flex-start' },
  sectionTitle: {
    color: PortfolioColors.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    letterSpacing: 2
  },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 15, gap: 12 },
  text: { color: '#dcdcdc', fontSize: 16 },
});