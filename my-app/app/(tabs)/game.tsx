import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Modal, Platform } from 'react-native';
import { PortfolioColors } from '@/constants/PortfolioColors';

const wordList = [
    'CASA', 'CARRO', 'ESCOLA', 'COMPUTADOR', 'FUTEBOL', 'FAMILIA',
    'TRABALHO', 'BRASIL', 'CIDADE', 'PRAIA', 'VIAGEM', 'MUSICA',
    'LIVRO', 'AMIGO', 'CACHORRO', 'GATO', 'COMIDA', 'FELICIDADE'
];

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const HangmanDrawing = ({ errors }: { errors: number }) => (
    <View style={styles.drawingContainer}>
        <View style={styles.scaffoldBase} />
        <View style={styles.scaffoldPole} />
        <View style={styles.scaffoldTop} />
        <View style={styles.scaffoldRope} />
        {errors >= 1 && <View style={styles.head} />}
        {errors >= 2 && <View style={styles.body} />}
        {errors >= 3 && <View style={styles.rightArm} />}
        {errors >= 4 && <View style={styles.leftArm} />}
        {errors >= 5 && <View style={styles.rightLeg} />}
        {errors >= 6 && <View style={styles.leftLeg} />}
    </View>
);

export default function GameScreen() {
    const [wordToGuess, setWordToGuess] = useState('');
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

    const incorrectLetters = guessedLetters.filter(l => !wordToGuess.includes(l));
    const isLoser = incorrectLetters.length >= 6;
    const isWinner = wordToGuess && wordToGuess.split('').every(l => guessedLetters.includes(l));

    const startGame = useCallback(() => {
        const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
        setWordToGuess(randomWord);
        setGuessedLetters([]);
    }, []);

    useEffect(() => { startGame(); }, []);

    const handleGuess = (letter: string) => {
        if (guessedLetters.includes(letter) || isWinner || isLoser) return;
        setGuessedLetters(prev => [...prev, letter]);
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <Text style={styles.title}>Jogo da Forca</Text>

            <View style={styles.centerStage}>
                <HangmanDrawing errors={incorrectLetters.length} />
            </View>

            <View style={styles.wordContainer}>
                {wordToGuess.split('').map((letter, index) => (
                    <View key={index} style={styles.letterBox}>
                        <Text style={[
                            styles.letterText,
                            {
                                opacity: guessedLetters.includes(letter) || isLoser ? 1 : 0,
                                color: !guessedLetters.includes(letter) && isLoser ? PortfolioColors.primary : PortfolioColors.textDark
                            }
                        ]}>
                            {letter}
                        </Text>
                    </View>
                ))}
            </View>

            <View style={styles.keyboard}>
                {ALPHABET.map((letter) => {
                    const isGuessed = guessedLetters.includes(letter);
                    const isCorrect = isGuessed && wordToGuess.includes(letter);
                    const isIncorrect = isGuessed && !wordToGuess.includes(letter);

                    let btnBg = PortfolioColors.white;
                    if (isCorrect) btnBg = PortfolioColors.success;
                    if (isIncorrect) btnBg = PortfolioColors.error;

                    return (
                        <TouchableOpacity
                            key={letter}
                            onPress={() => handleGuess(letter)}
                            disabled={isGuessed || isWinner || isLoser}
                            style={[styles.key, { backgroundColor: btnBg, opacity: isGuessed ? 0.6 : 1 }]}
                        >
                            <Text style={styles.keyText}>{letter}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>

            <TouchableOpacity onPress={startGame} style={styles.restartButton}>
                <Text style={styles.restartText}>Reiniciar</Text>
            </TouchableOpacity>

            <Modal visible={isWinner || isLoser} transparent animationType="fade">
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>{isWinner ? 'Você Venceu!' : 'Você Perdeu!'}</Text>
                        {!isWinner && <Text style={styles.modalText}>A palavra era: {wordToGuess}</Text>}
                        <TouchableOpacity onPress={startGame} style={styles.modalButton}>
                            <Text style={styles.restartText}>Jogar Novamente</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: PortfolioColors.background },
    content: { padding: 20, paddingBottom: 100, alignItems: 'center' },
    title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, marginTop: 40 },

    centerStage: { height: 260, width: 200, marginBottom: 20, position: 'relative' },
    drawingContainer: { position: 'relative', width: 200, height: 250 },
    scaffoldBase: { position: 'absolute', bottom: 0, left: 20, width: 120, height: 10, backgroundColor: 'black' },
    scaffoldPole: { position: 'absolute', bottom: 0, left: 60, width: 10, height: 250, backgroundColor: 'black' },
    scaffoldTop: { position: 'absolute', top: 0, left: 60, width: 100, height: 10, backgroundColor: 'black' },
    scaffoldRope: { position: 'absolute', top: 0, right: 40, width: 10, height: 40, backgroundColor: 'black' },
    head: { position: 'absolute', top: 40, right: 15, width: 60, height: 60, borderRadius: 30, borderWidth: 6, borderColor: 'black' },
    body: { position: 'absolute', top: 95, right: 41, width: 8, height: 80, backgroundColor: 'black' },
    rightArm: { position: 'absolute', top: 110, right: -10, width: 60, height: 8, backgroundColor: 'black', transform: [{ rotate: '-30deg' }] },
    leftArm: { position: 'absolute', top: 110, right: 35, width: 60, height: 8, backgroundColor: 'black', transform: [{ rotate: '30deg' }] },
    rightLeg: { position: 'absolute', top: 165, right: -5, width: 60, height: 8, backgroundColor: 'black', transform: [{ rotate: '60deg' }] },
    leftLeg: { position: 'absolute', top: 165, right: 30, width: 60, height: 8, backgroundColor: 'black', transform: [{ rotate: '-60deg' }] },

    wordContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 10, marginBottom: 30 },
    letterBox: { borderBottomWidth: 4, minWidth: 30, alignItems: 'center' },
    letterText: { fontSize: 28, fontWeight: 'bold', textTransform: 'uppercase' },

    keyboard: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, justifyContent: 'center' },
    key: { width: 38, height: 48, justifyContent: 'center', alignItems: 'center', borderRadius: 6, borderWidth: 1, borderColor: '#ccc' },
    keyText: { fontSize: 18, fontWeight: 'bold' },

    restartButton: { marginTop: 30, backgroundColor: PortfolioColors.primary, paddingVertical: 12, paddingHorizontal: 30, borderRadius: 8 },
    restartText: { color: 'white', fontSize: 16, fontWeight: 'bold' },

    modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'center', alignItems: 'center' },
    modalContent: { backgroundColor: 'white', padding: 30, borderRadius: 16, alignItems: 'center', width: '80%' },
    modalTitle: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
    modalText: { fontSize: 18, marginBottom: 20 },
    modalButton: { backgroundColor: PortfolioColors.primary, padding: 12, borderRadius: 8, width: '100%', alignItems: 'center' },
});