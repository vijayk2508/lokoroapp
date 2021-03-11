// import Autocomplete from 'react-native-autocomplete-input';
// import React, {Component} from 'react';
// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// const API = 'https://github.com/mrlaessig/react-native-autocomplete-input.git';
// const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];

// class AutoSuggest extends Component {
//   static renderFilm(data) {
//     const {label} = data;
//     return (
//       <View>
//         <Text style={styles.labelText}>{label}</Text>
//       </View>
//     );
//   }

//   constructor(props) {
//     super(props);
//     this.state = {
//       dataArrayList: [],
//       query: '',
//     };
//   }

//   componentDidMount() {
//     console.log('aaa', this.props);
//     this.setState({
//       dataArrayList: this.props.options,
//     });
//   }

//   //   componentDidUpdate(nextProps) {
//   //     this.setState({
//   //       dataArrayList: nebxtProps.options,
//   //     });
//   //   }

//   findData(query) {
//     if (query === '') {
//       return [];
//     }

//     const {dataArrayList} = this.state;
//     const regex = new RegExp(`${query.trim()}`, 'i');
//     return dataArrayList.filter(
//       (dataArrayList) => dataArrayList.label.search(regex) >= 0,
//     );
//   }

//   render() {
//     const {query} = this.state;
//     const dataArrayList = this.findData(query);
//     const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

//     return (
//       <View style={styles.container}>
//         <Autocomplete
//           autoCapitalize="none"
//           autoCorrect={false}
//           containerStyle={styles.autocompleteContainer}
//           data={
//             dataArrayList.length === 1 && comp(query, dataArrayList[0].label)
//               ? []
//               : dataArrayList
//           }
//           defaultValue={query}
//           onChangeText={(text) => this.setState({query: text})}
//           placeholder="Enter Keyword"
//           renderItem={({item}) => (
//             <TouchableOpacity
//               onPress={() => this.setState({query: item.label})}>
//               <Text style={styles.itemText}>{item.label}</Text>
//             </TouchableOpacity>
//           )}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     // backgroundColor: '#F5FCFF',
//     // //marginBottom: 20,
//     // flexDirection: 'row',
//     // paddingTop: 0,
//     // height: 50,
//     // // justifyContent :"center"
//     // zIndex: 999,
   
//   },
//   autocompleteContainer: {
//     //flex: 1,
//    // left: 0,
//    // position: 'relative',
//    // right: 0,
//     //top: 0,
//     //zIndex: 999,
//     //marginBottom : 20
//   },
//   itemText: {
//     //fontSize: 15,
//    // margin: 2,
//   },
//   descriptionContainer: {
//     // `backgroundColor` needs to be set otherwise the
//     // autocomplete input will disappear on text input.
//     backgroundColor: '#F5FCFF',
//     marginTop: 25,
//   },
//   infoText: {
//     textAlign: 'center',
//   },
//   labelText: {
//     fontSize: 18,
//     fontWeight: '500',
//     marginBottom: 10,
//     marginTop: 10,
//     textAlign: 'center',
//   },
//   directorText: {
//     color: 'grey',
//     fontSize: 12,
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   openingText: {
//     textAlign: 'center',
//   },
// });

// export default AutoSuggest;
