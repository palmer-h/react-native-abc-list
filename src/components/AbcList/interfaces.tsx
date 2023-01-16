import { SectionListProps } from 'react-native';

export interface AbcListProps extends Partial<SectionListProps<AbcListDataItem>> {
  data: Array<any>;
  sortBy: string;
  letterIndexTextColor?: string;
  renderCustomItem?: (item: { [key: string]: any }) => JSX.Element;
  renderCustomSectionHeader?: (section: AbcListDataSection) => JSX.Element;
}

export interface AbcListDataItem {
  key: string | number;
  [key: string]: any;
}

export interface AbcListDataSection {
  title: string;
  data: Array<AbcListDataItem>;
}
