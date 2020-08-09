import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class Heading extends Component {
  render(){
    return(
      <View style={{marginTop: 0, marginLeft: 620, marginRight: 620}}>
      <Text>Dj Audio Mixer App</Text>
      </View>
    );
  }
}

class ColorButton1 extends Component {
  displayAlert= ()=>{
    alert("Playing Sound 1!!!");
  }
  render(){
    return(
      <View style={{marginTop: 50, marginLeft: 580, width: 200}}>
        <Button title="Sound 1" color={this.props.color} onPress={this.displayAlert}/>
      </View>
    );
  }
}

class ColorButton2 extends Component {
  displayAlert= ()=>{
    alert("Playing Sound 2!!!");
  }
  render(){
    return(
      <View style={{marginTop: 10, marginLeft: 580, width: 200}}>
        <Button title="Sound 2" color={this.props.color} onPress={this.displayAlert}/>
      </View>
    );
  }
}

class ColorButton3 extends Component {
  displayAlert= ()=>{
    alert("Playing Sound 3!!!");
  }
  render(){
    return(
      <View style={{marginTop: 10, marginLeft: 580, width: 200}}>
        <Button title="Sound 3" color={this.props.color} onPress={this.displayAlert}/>
      </View>
    );
  }
}

class ColorButton4 extends Component {
  displayAlert= ()=>{
    alert("Playing Sound 4!!!");
  }
  render(){
    return(
      <View style={{marginTop: 10, marginLeft: 580, width: 200}}>
        <Button title="Sound 4" color={this.props.color} onPress={this.displayAlert}/>
      </View>
    );
  }
}

class ColorButton5 extends Component {
  displayAlert= ()=>{
    alert("Playing Sound 5!!!");
  }
  render(){
    return(
      <View style={{marginTop: 10, marginLeft: 580, width: 200}}>
        <Button title="Sound 5" color={this.props.color} onPress={this.displayAlert}/>
      </View>
    );
  }
}

class ColorButton6 extends Component {
  displayAlert= ()=>{
    alert("Stopping the Music!!!");
  }
  render(){
    return(
      <View style={{marginTop: 220, marginLeft: 580, width: 200}}>
        <Button title="Stop Music" color={this.props.color} onPress={this.displayAlert}/>
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{marginTop: 0}}>
        <Heading/>
        <ColorButton1 color="purple"/>
        <ColorButton2 color="blue"/>
        <ColorButton3 color="red"/>
        <ColorButton4 color="green"/>
        <ColorButton5 color="brown"/>
        <ColorButton6 color="orange"/>
      </View>
    );
  }
}