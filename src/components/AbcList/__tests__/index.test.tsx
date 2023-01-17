import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { AbcList } from '../index';
import { AbcListProps } from '../interfaces';

describe('AbcList', () => {
  const data: AbcListProps['data'] = [
    {
      key: 'key-1',
      firstName: 'Billie',
      surname: 'Holiday',
    },
    {
      key: 'key-2',
      firstName: 'Chet',
      surname: 'Baker',
    },
    {
      key: 'key-3',
      firstName: 'John',
      surname: 'Coltrane',
    }
  ];

  beforeEach(() => {
    render(<AbcList data={data} sortBy="surname" />);
  });

  it('renders all section headers', () => {
    const headerLabels = screen.getAllByTestId('sectionHeader__text');
    expect(headerLabels.length).toBe(3);
    expect(headerLabels[0].props.children).toBe('B');
    expect(headerLabels[1].props.children).toBe('C');
    expect(headerLabels[2].props.children).toBe('H');
  });

  it('renders list items in alphabetical order', () => {
    const listItemLabels = screen.getAllByTestId('listItem__text');
    expect(listItemLabels.length).toBe(3);
    expect(listItemLabels[0].props.children).toBe('key-2');
    expect(listItemLabels[1].props.children).toBe('key-3');
    expect(listItemLabels[2].props.children).toBe('key-1');
  });
});
