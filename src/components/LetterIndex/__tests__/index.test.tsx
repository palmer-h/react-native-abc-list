import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { LetterIndex } from '../index';
import { LetterIndexProps } from '../interfaces';

describe('ListLetterIndex', () => {
  const letters: LetterIndexProps['letters'] = ['A', 'C', 'D', 'E', 'F', 'I', 'L', 'M', 'Z'];
  const activeLetters: LetterIndexProps['activeLetters'] = [];

  beforeEach(() => {
    render(
      <LetterIndex letters={letters} activeLetters={activeLetters} onPressLetter={jest.fn()} />
    );
  });

  it('renders all letters', () => {
    const letterElements = screen.getAllByTestId('indexLetter__text');
    expect(letterElements.length).toBe(letters.length);
    screen.getByText('A');
    screen.getByText('C');
    screen.getByText('D');
    screen.getByText('E');
  });
});
