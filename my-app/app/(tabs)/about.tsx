import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { PortfolioColors } from '@/constants/PortfolioColors';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

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

const ProjectCard = ({ title, desc, url }: { title: string, desc: string, url: string }) => (
    <TouchableOpacity onPress={() => Linking.openURL(url)} style={styles.projectCard}>
        <View style={{ flex: 1 }}>
            <Text style={styles.projectTitle}>{title}</Text>
            <Text style={styles.projectDesc}>{desc}</Text>
        </View>
        <MaterialIcons name="open-in-new" size={20} color={PortfolioColors.primary} />
    </TouchableOpacity>
);

export default function AboutScreen() {
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

            <View style={styles.section}>
                <Text style={styles.heading}>EDUCAÇÃO</Text>
                <View style={styles.infoBlock}>
                    <Text style={styles.subHeading}>Bacharelado em Ciência da Computação</Text>
                    <Text style={styles.mutedText}>Universidade XYZ | 2022 - Presente</Text>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.heading}>EXPERIÊNCIA PROFISSIONAL</Text>
                <View style={styles.infoBlock}>
                    <Text style={styles.bodyText}>Nenhuma no momento.</Text>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.heading}>PROJETOS</Text>
                <Text style={styles.hintText}>Toque para ver no GitHub:</Text>

                <ProjectCard
                    title="Avaliador de Anime"
                    desc="Site web para avaliação de animes."
                    url="https://github.com/PWMHunters/ProjetoWEB01.git"
                />

                <ProjectCard
                    title="Adoção de Animais"
                    desc="App mobile (Expo) para adoção de pets."
                    url="https://github.com/PWMHunters/pwm-expo-project.git"
                />

                <ProjectCard
                    title="Portfólio Pessoal"
                    desc="Este portfólio desenvolvido em Next.js/React Native."
                    url="https://github.com/joaovcguerra/curriculo.git"
                />

                <ProjectCard
                    title="Bot Discord"
                    desc="Bot automatizado para servidores Discord."
                    url="https://github.com/joaovcguerra/bot-discord.git"
                />
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: PortfolioColors.white },
    content: { padding: 30, paddingBottom: 100 },
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

    infoBlock: { marginBottom: 10 },
    subHeading: { fontSize: 18, fontWeight: '600', marginBottom: 4, color: PortfolioColors.textDark },
    mutedText: { color: PortfolioColors.textMuted, fontStyle: 'italic' },
    bodyText: { fontSize: 16, color: PortfolioColors.textDark },
    hintText: { fontSize: 14, color: PortfolioColors.textMuted, marginBottom: 10, fontStyle: 'italic' },

    projectCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f8f9fa',
        padding: 15,
        borderRadius: 10,
        marginBottom: 12,
        borderLeftWidth: 4,
        borderLeftColor: PortfolioColors.primary,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    projectTitle: { fontSize: 16, fontWeight: 'bold', color: PortfolioColors.textDark },
    projectDesc: { fontSize: 14, color: PortfolioColors.textMuted, marginTop: 2 },
});