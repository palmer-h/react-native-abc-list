export interface LetterIndexProps {
  letters: Array<string>;
  activeLetters: Array<string>;
  letterColor?: string;
  onPressLetter: (index: number) => void;
}
