import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { PortfolioColors } from '@/constants/PortfolioColors';
import { MaterialIcons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const openLink = (url: string) => Linking.openURL(url).catch(err => console.error(err));

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>

      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/fotoperfil.jpeg')}
          style={styles.profileImage}
        />
      </View>

      <Text style={styles.name}>João Vitor</Text>
      <Text style={styles.title}>Programador FullStack</Text>

      <View style={styles.divider} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SOBRE MIM</Text>
        <Text style={styles.aboutText}>
          Sou um profissional dedicado e apaixonado por tecnologia, atualmente cursando Ciência da Computação.
          Busco constantemente aprimorar minhas habilidades e enfrentar novos desafios.
        </Text>
      </View>

      <View style={styles.dividerSmall} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>CONTATO</Text>

        <TouchableOpacity onPress={() => openLink('geo:0,0?q=Itapissuma')} style={styles.contactRow}>
          <MaterialIcons name="location-on" size={20} color={PortfolioColors.primary} />
          <Text style={styles.contactText}>Itapissuma - PE</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openLink('tel:81985464487')} style={styles.contactRow}>
          <MaterialIcons name="phone" size={20} color={PortfolioColors.primary} />
          <Text style={styles.contactText}>(81) 98546-4487</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openLink('mailto:joaovcarneirog@gmail.com')} style={styles.contactRow}>
          <MaterialIcons name="email" size={20} color={PortfolioColors.primary} />
          <Text style={styles.contactText}>joaovcarneirog@gmail.com</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: PortfolioColors.sidebarBg },
  content: { padding: 30, alignItems: 'center', paddingBottom: 100 },

  imageContainer: {
    marginTop: 20,
    marginBottom: 20,
    elevation: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  profileImage: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 4,
    borderColor: PortfolioColors.primary,
  },

  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: PortfolioColors.textLight,
    marginBottom: 5,
    textAlign: 'center'
  },
  title: {
    fontSize: 18,
    color: '#c7c7c7',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: '300'
  },

  divider: { width: '60%', height: 2, backgroundColor: PortfolioColors.primary, marginBottom: 30, opacity: 0.8 },
  dividerSmall: { width: '30%', height: 1, backgroundColor: '#555', marginBottom: 30 },

  section: { width: '100%', marginBottom: 10 },
  sectionTitle: {
    color: PortfolioColors.white,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 15,
    letterSpacing: 2,
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  aboutText: {
    color: '#dcdcdc',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    gap: 10,
    backgroundColor: 'rgba(255,255,255,0.05)',
    padding: 10,
    borderRadius: 8,
    width: '100%'
  },
  contactText: {
    color: PortfolioColors.textLight,
    fontSize: 16
  },
});