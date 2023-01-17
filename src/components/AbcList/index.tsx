import React, { useRef, useState, useEffect, useCallback } from 'react';
import { View, Text, SectionList, ViewToken } from 'react-native';
import { AbcListProps, AbcListDataSection, AbcListDataItem } from './interfaces';
import { LetterIndex } from '../LetterIndex/index';
import { styles } from './styles';

export const AbcList: React.FC<AbcListProps> = props => {
  const sectionListRef = useRef(null);
  const [sectionData, setSectionData] = useState<Array<AbcListDataSection>>([]);
  const [letters, setLetters] = useState<Array<string>>([]);
  const [activeLetters, setActiveLetters] = useState<Array<string>>([]);

  const createListSections = useCallback((): Array<AbcListDataSection> => {
    const sortedData = props.data
      .sort((a, b) => {
        if (!a[props.sortBy]) {
          throw new Error(`Provided sortBy property '${props.sortBy}' does not exist in data`);
        }
        return a[props.sortBy].localeCompare(b[props.sortBy]);
      })
      .reduce((acc, cur) => {
        const sectionLetter = cur[props.sortBy][0];
        if (!acc[sectionLetter]) {
          acc[sectionLetter] = { title: sectionLetter, data: [cur] };
        } else {
          acc[sectionLetter].data.push(cur);
        }
        return acc;
      }, {});
    return Object.values(sortedData);
  }, [props.data, props.sortBy]);

  useEffect(() => {
    const sections = createListSections();
    setSectionData(sections);
    setLetters(sections.map(x => x.title));
  }, [props.data, createListSections]);

  const handleScrollToSection = (index: number): void => {
    if (!sectionListRef.current) {
      return;
    }
    const sectionList: SectionList = sectionListRef.current;
    sectionList.scrollToLocation({
      sectionIndex: index,
      itemIndex: 0,
    });
  };

  const handleViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: Array<ViewToken>;
  }): void => {
    setActiveLetters(viewableItems.map(x => x.section.title));
  };

  const renderSectionHeader = ({ section }: { section: any }): JSX.Element => {
    if (props.renderCustomSectionHeader) {
      return props.renderCustomSectionHeader(section);
    }
    return (
      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionHeaderLabel} testID="sectionHeader__text">
          {section.title}
        </Text>
      </View>
    );
  };

  const renderListItem = ({ item }: { item: AbcListDataItem }): JSX.Element => {
    if (props.renderCustomItem) {
      return props.renderCustomItem(item);
    }
    return (
      <View style={styles.listItemContainer}>
        <Text testID="listItem__text">{item.key}</Text>
      </View>
    );
  };

  return (
    <View>
      <SectionList
        {...props}
        ref={sectionListRef}
        sections={sectionData}
        keyExtractor={(item: AbcListDataItem) => String(item.key)}
        renderItem={renderListItem}
        renderSectionHeader={renderSectionHeader}
        onViewableItemsChanged={handleViewableItemsChanged}
        testID="abcSectionList"
      />
      <LetterIndex
        letters={letters}
        activeLetters={activeLetters}
        letterColor={props.letterIndexTextColor}
        onPressLetter={handleScrollToSection}
      />
    </View>
  );
};
