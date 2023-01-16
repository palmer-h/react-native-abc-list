/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View, Text } from 'react-native';
import { AbcList } from 'react-native-abc-list';
import { AbcListDataItem } from 'src/components/AbcList/interfaces';

export default function App() {
  const DATA: Array<AbcListDataItem> = [
    {
      key: 1,
      firstName: 'Billie',
      surname: 'Holiday',
    },
    {
      key: 2,
      firstName: 'Chet',
      surname: 'Baker',
    },
    {
      key: 3,
      firstName: 'John',
      surname: 'Coltrane',
    },
    {
      key: 4,
      firstName: 'Charlie',
      surname: 'Parker',
    },
    {
      key: 5,
      firstName: 'Stan',
      surname: 'Getz',
    },
    {
      key: 6,
      firstName: 'Miles',
      surname: 'Davis',
    },
    {
      key: 7,
      firstName: 'Louis',
      surname: 'Armstrong',
    },
    {
      key: 8,
      firstName: 'Charles',
      surname: 'Mingus',
    },
    {
      key: 9,
      firstName: 'Thelonious',
      surname: 'Monk',
    },
    {
      key: 10,
      firstName: 'Duke',
      surname: 'Ellington',
    },
    {
      key: 11,
      firstName: 'Dizzy',
      surname: 'Gillespie',
    },
    {
      key: 12,
      firstName: 'Ella',
      surname: 'Fitzgerald',
    },
    {
      key: 13,
      firstName: 'Count',
      surname: 'Basie',
    },
    {
      key: 14,
      firstName: 'Ornette',
      surname: 'Coleman',
    },
    {
      key: 15,
      firstName: 'Art',
      surname: 'Tatum',
    },
    {
      key: 16,
      firstName: 'Sonny',
      surname: 'Rollins',
    },
    {
      key: 17,
      firstName: 'Benny',
      surname: 'Goodman',
    },
  ];

  const renderItem = (item: { [key: string]: any }): JSX.Element => {
    return (
      <View style={{ paddingHorizontal: 8 }}>
        <Text style={{ fontSize: 18 }}>
          {item.surname}, {item.firstName}
        </Text>
      </View>
    );
  };

  const renderSectionHeader = (section: { title: string }): JSX.Element => {
    return (
      <View
        style={{
          borderBottomWidth: 2,
          paddingTop: 8,
          marginBottom: 4,
          paddingHorizontal: 8,
          borderColor: 'lightgrey',
        }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{section.title}</Text>
      </View>
    );
  };

  return (
    <View style={{ marginTop: 40 }}>
      <AbcList
        data={DATA}
        sortBy="surname"
        renderCustomItem={renderItem}
        renderCustomSectionHeader={renderSectionHeader}
      />
    </View>
  );
}
