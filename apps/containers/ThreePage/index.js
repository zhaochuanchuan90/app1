
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';

export default class ThreePage extends Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <View style={[styles.wrapper, styles.center]}>
        <Text style={styles.txt}>第三个页面</Text>
        <TouchableWithoutFeedback onPress={() => this.goBackFirstPage()}>
          <View style={[styles.txtWrapper, styles.center, { marginTop: 20, }]}>
            <Text style={styles.txt}>返回到第一页</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }

  // TODO:: 没办法直接隔页返回
  goBackFirstPage = () => {
    console.log('33333', this.props.navigation.state.key);
    this.props.navigation.goBack('id-1522842738132-0');
  };

}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fefefe',
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtWrapper: {
    width: 130,
    height: 50,
    backgroundColor: '#ed604d',
  },
  txt: {
    fontSize: 20,
    color: 'white',
  }
})