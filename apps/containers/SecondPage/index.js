
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';

export default class SecondPage extends Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    let { params } = this.props.navigation.state;
    return (
      <View style={[styles.wrapper, styles.center]}>
        <Text style={{ fontSize: 13, color: '#ed604d', }}>{params.text}</Text>
        <TouchableWithoutFeedback onPress={() => this.navToThreePage()}>
          <View style={[styles.txtWrapper, styles.center, { marginTop: 20, }]}>
            <Text style={styles.btnTxt}>去第三个页面</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.goBack()}>
          <View style={[styles.btnWrapper, styles.center, { marginTop: 20, }]}>
            <Text style={styles.btnTxt}>返回上一页</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }

  navToThreePage = () => {
    console.log('22222',this.props.navigation.state.key);
    this.props.navigation.navigate('ThreePageScreen')
  }

  goBack = () => {
    this.props.navigation.goBack();
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fefefe'
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtWrapper: {
    width: 150,
    height: 50,
    backgroundColor: '#ed604d',
  },
  btnWrapper: {
    width: 120,
    height: 50,
    backgroundColor: '#ed604d',
  },
  btnTxt: {
    fontSize: 20,
    color: 'white',
  }
})