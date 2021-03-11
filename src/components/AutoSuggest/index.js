import Autocomplete from 'react-native-autocomplete-input';
import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const API = 'https://github.com/mrlaessig/react-native-autocomplete-input.git';
const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];

class AutoSuggest extends Component {
  static renderFilm(data) {
    const {label} = data;
    return (
      <View>
        <Text style={styles.labelText}>{label}</Text>
      </View>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      dataArrayList: [],
      query: '',
    };
  }

  componentDidMount() {
    console.log('aaa', this.props);
    this.setState({
      dataArrayList: this.props.options,
    });
  }

  //   componentDidUpdate(nextProps) {
  //     this.setState({
  //       dataArrayList: nebxtProps.options,
  //     });
  //   }

  findData(query) {
    if (query === '') {
      return [];
    }

    const {dataArrayList} = this.state;
    const regex = new RegExp(`${query.trim()}`, 'i');
    return dataArrayList.filter(
      (dataArrayList) => dataArrayList.label.search(regex) >= 0,
    );
  }

  render() {
    const {query} = this.state;
    const dataArrayList = this.findData(query);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

    return (
      <Autocomplete
        autoCapitalize="none"
        autoCorrect={false}
        containerStyle={{margin : 0, padding:0}}
        data={
          dataArrayList.length === 1 && comp(query, dataArrayList[0].label)
            ? []
            : dataArrayList
        }
        defaultValue={query}
        onChangeText={(text) => this.setState({query: text})}
        placeholder="Enter Keyword"
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => this.setState({query: item.label})}>
            <Text style={styles.itemText}>{item.label}</Text>
          </TouchableOpacity>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#F5FCFF',
    // flex: 1,
    //paddingTop: 25,
  },
  autocompleteContainer: {
    // flex: 1,
    // left: 0,
    // position: 'absolute',
    // right: 0,
    // top: 0,
    // zIndex: 1,
  },
  itemText: {
    // fontSize: 15,
    // margin: 2,
  },
  descriptionContainer: {
    // `backgroundColor` needs to be set otherwise the
    // autocomplete input will disappear on text input.
    backgroundColor: '#F5FCFF',
    //marginTop: 25,
  },
  infoText: {
    //textAlign: 'center',
  },
  labelText: {
    // fontSize: 18,
    // fontWeight: '500',
    // marginBottom: 10,
    // marginTop: 10,
    // textAlign: 'center',
  },
  directorText: {
    // color: 'grey',
    // fontSize: 12,
    // marginBottom: 10,
    // textAlign: 'center',
  },
  openingText: {
    //textAlign: 'center',
  },
});

export default AutoSuggest;
