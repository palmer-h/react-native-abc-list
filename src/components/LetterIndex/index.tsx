import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { LetterIndexProps } from './interfaces';
import { styles } from './styles';

export const LetterIndex: React.FC<LetterIndexProps> = props => {
  return (
    <View style={styles.container}>
      {props.letters.map(letter => (
        <Pressable key={letter} onPress={() => props.onPressLetter(props.letters.indexOf(letter))}>
          <Text
            testID="indexLetter__text"
            style={[
              { color: props.letterColor || '#195dae' },
              styles.letterText,
              props.activeLetters.includes(letter) ? styles.activeLetterText : null,
            ]}>
            {letter}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};
