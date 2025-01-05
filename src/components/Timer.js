import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { FONT_SIZES } from '../constants/Font';

const Timer = ({ duration, onTimeUp, fontSize = 24, icon='timer' }) => {
  const [timeLeft, setTimeLeft] = useState(duration); // Time in seconds
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount or pause
  }, [timeLeft, isPaused]);

  useEffect(() => {
    if (timeLeft === 0 && onTimeUp) {
      onTimeUp();
    }
  }, [timeLeft, onTimeUp]);

  // Format time in MM:SS
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / (60*60));
    const minutes = Math.floor((seconds / 60) - (hours * 60));
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Icon name={icon} size={FONT_SIZES.LARGE} />
      <Text style={[styles.timerText, {fontSize: fontSize}]}>{formatTime(timeLeft)}</Text>
      {/* <TouchableOpacity
        style={styles.pauseButton}
        onPress={() => setIsPaused((prev) => !prev)}
      >
        <Text style={styles.pauseText}>{isPaused ? 'Resume' : 'Pause'}</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 10,
    flexDirection: 'row',
    gap: 6,
  },
  timerText: {
    fontWeight: 'bold',
    color: '#333',
  },
  pauseButton: {
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  pauseText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Timer;
