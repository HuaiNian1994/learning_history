/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  ActivityIndicator,
  View,
} from 'react-native';


const MyStyle = StyleSheet.create({
  wrapper: {
    //横向居中包含的所有元素


    //二者联合使用可使元素纵向居中
    flex: 1
  },
  myInput: {
    width: 200,
    borderWidth: 2,
    borderRadius: 10
  },
  myImg: {
    width: 300,
    height: 300,
    borderWidth: 2,
    borderColor: "lightblue"
  },
  text2: {
    width: 300,
    height: 300,
    backgroundColor: "lightgreen", 
    justifyContent:"center"
  }
})
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { inpval: "xixi", speak: "" }
  }
  myClick = () => {
    console.warn("哥哥你点到我了")
    this.setState({ inpval: "hiahiahia" })
  }
  txtchange = (e) => {
    console.warn("文本改变");
    this.setState({ inpval: e.target.value, speak: this.state.speak + "~" })
  }
  render() {
    const imageURL = "https://pic4.zhimg.com/80/v2-01e5492a5f70df0a8d4f65fc4f75f979_hd.jpg"
    const testContent="TouchableNativeFeedback触控测试区触控测试区触控测试区触控测试区触控测试区触控测试区触控测试区触控测试区触控测试区触控测试区"
    
    return (

      <ScrollView style={MyStyle.wrapper} contentContainerStyle={{ alignItems: "center" }}>
        <Text>hi,HuaiNian{this.state.speak}</Text>
        <TextInput style={MyStyle.myInput} onChange={(e) => { this.txtchange(e) }} value={this.state.inpval}></TextInput>
        <Image source={require("./src/images/03.png")} style={MyStyle.myImg} ></Image>
        <Button title="哥哥点我!" onPress={this.myClick}> </Button>
        <TouchableOpacity >
          <Image source={{ uri: imageURL }} style={{ width: 300, height: 300 }}></Image>
        </TouchableOpacity>
        <ActivityIndicator></ActivityIndicator>
        <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={MyStyle.text2}>
            <Text >{testContent}</Text>
          </View>
        </TouchableNativeFeedback>
        
      </ScrollView>
      

    )
  }
}




const styles = StyleSheet.create({

});

export default App;
