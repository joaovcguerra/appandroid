import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { PortfolioColors } from '@/constants/PortfolioColors';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function AppInfoScreen() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <Text style={styles.mainTitle}>Sobre este App</Text>
            <Text style={styles.intro}>
                Este aplicativo foi desenvolvido para demonstrar habilidades em desenvolvimento mobile multiplataforma.
            </Text>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Tecnologias Utilizadas</Text>

                <View style={styles.techRow}>
                    <FontAwesome5 name="react" size={24} color="#61DAFB" />
                    <Text style={styles.techText}>React Native (Expo)</Text>
                </View>

                <View style={styles.techRow}>
                    <MaterialIcons name="router" size={24} color={PortfolioColors.textDark} />
                    <Text style={styles.techText}>Expo Router (Navegação)</Text>
                </View>

                <View style={styles.techRow}>
                    <FontAwesome5 name="css3-alt" size={24} color="#264de4" />
                    <Text style={styles.techText}>CSS 3 (CSS-in-JS)</Text>
                </View>

                <View style={styles.techRow}>
                    <MaterialIcons name="insert-emoticon" size={24} color={PortfolioColors.primary} />
                    <Text style={styles.techText}>Lucide / Vector Icons</Text>
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>Versão 1.0.0</Text>
                <Text style={styles.footerText}>Desenvolvido por João Vitor</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: PortfolioColors.background },
    content: { padding: 30, paddingTop: 60 },
    mainTitle: { fontSize: 28, fontWeight: 'bold', color: PortfolioColors.textDark, marginBottom: 15, textAlign: 'center' },
    intro: { fontSize: 16, color: PortfolioColors.textMuted, textAlign: 'center', marginBottom: 30, lineHeight: 22 },
    card: { backgroundColor: PortfolioColors.white, borderRadius: 15, padding: 20, elevation: 3 },
    cardTitle: { fontSize: 18, fontWeight: 'bold', color: PortfolioColors.primary, marginBottom: 20, borderBottomWidth: 1, borderBottomColor: '#eee', paddingBottom: 10 },
    techRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 15, gap: 15 },
    techText: { fontSize: 16, color: PortfolioColors.textDark, fontWeight: '500' },
    footer: { marginTop: 40, alignItems: 'center' },
    footerText: { color: PortfolioColors.textMuted, fontSize: 14 }
});