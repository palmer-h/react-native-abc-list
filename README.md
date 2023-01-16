# **react-native-abc-list**

A React Native list component with an interactive A to Z sidebar

## **Installation**

```sh
npm install react-native-abc-list
```

## **Usage**

The component accepts an array of data and a sortBy string - this is the property that will be used to sort the list.

```jsx
import { AbcList } from 'react-native-abc-list';

const MyListComponent = () => {
  const DATA = [
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
      key: 7
      firstName: 'Miles',
      surname: 'Davis',
    },
  ];

  const renderItem = (item: { [key: string]: any }): JSX.Element => {
    return (
      <View>
        <Text>
          {item.surname}, {item.firstName}
        </Text>
      </View>
    );
  };

  const renderSectionHeader = (section: { title: string }): JSX.Element => {
    return (
      <View>
        <Text>{section.title}</Text>
      </View>
    );
  };

  return (
    <View>
      <AbcList
        data={DATA}
        sortBy="surname"
        renderCustomItem={renderItem}
        renderCustomSectionHeader={renderSectionHeader}
        // Any other react-native SectionList component props...
      />
    </View>
  );
}
```

## **API**

### **Props**

Extends React Native's [SectionList](https://reactnative.dev/docs/sectionlist#props)

| Prop | Description | Type |
| --- | --- | --- |
| `data` | Items to be sorted and rendered in the `SectionList`. Each item **must** have a unique `key` property. | `array` | | |
| `sortBy` | The string used to sort the rendered items, A-Z. Each data item **must have a property key that matches this string**. | `string` |
| `renderCustomItem` (optional) | Render a custom row element for each row. If not passed, the default row renders the item key. | `() => JSX.Element` |
| `renderCustomSectionHeader` (optional) | Render a custom element for each section header. If not passed, the default header renders the section letter in uppercase. | `() => JSX.Element` |
## **Contributing**

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## **License**

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
