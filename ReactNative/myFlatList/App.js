/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  Text,
  View,
  FlatList
} from 'react-native';




export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  reached=()=>{
    console.warn("要到底咯")
  }
  render() {
    var mylist = []
    for(let i=0;i<20;i++){
      mylist.push({name:"随机"+i,age:i})
    }
    return (

      <FlatList
        onEndReachedThreshold={0.5} 
        onEndReached={this.reached}
        data={mylist}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) =>
          <Text style={{ lineHeight: 166, borderBottomWidth: 1, borderColor: "black" }}>
            {item.name}---age:{item.age}
          </Text>}
      >
      </FlatList>
    )
  }
}