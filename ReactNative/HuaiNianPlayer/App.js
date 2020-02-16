import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class AlignItemsBasics extends Component {
  render() {
    return (
      // 尝试把`alignItems`改为`flex-start`看看
      // 尝试把`justifyContent`改为`flex-end`看看
      // 尝试把`flexDirection`改为`row`看看
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
      }}>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ width: 50, height: 100, backgroundColor: 'steelblue' }} />
        <Mytext haha="hhh"></Mytext>
      </View>
    );
  }
};
class Mytext extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <Text >xixi{this.props.haha}</Text>
  }
}
const MyStyle = StyleSheet.create({
  class1: {
    textAlign: "center"
  },
  class2: {
    color: "red",
    borderWidth: 1
  }
})