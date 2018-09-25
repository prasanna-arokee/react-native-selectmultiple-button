/*
 * @Author: Young
 * DSHARP
 * @flow 
 * @Date: 2018-02-06 13:54:25 
 * @Last Modified by: Young
 * @Last Modified time: 2018-08-31 14:03:36
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Alert,
  StyleSheet,
} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
const ios_blue = '#007AFF'

export default class SelectMultipleButton extends Component {

  static propTypes = {
    selected: PropTypes.bool,

    value: PropTypes.oneOfType(
      [
        PropTypes.string,
        PropTypes.number
      ]
    ).isRequired,
    displayValue: PropTypes.oneOfType(
      [
        PropTypes.string,
        PropTypes.number
      ]
    ),

    highLightStyle: PropTypes.shape({
      borderColor: PropTypes.string,
      backgroundColor: PropTypes.string.isRequired,
      textColor: PropTypes.string.isRequired,
      borderTintColor: PropTypes.string.isRequired,
      backgroundTintColor: PropTypes.string.isRequired,
      textTintColor: PropTypes.string.isRequired,
      shadowColor: PropTypes.string,
      shadowOffset: PropTypes.object,
      shadowOpacity: PropTypes.number,
      shadowRadius: PropTypes.number,
      elevation: PropTypes.number,
      padding: PropTypes.number,
      borderRadius: PropTypes.number,
    }),

    buttonViewStyle: PropTypes.object,
    textStyle: PropTypes.object,
    singleTap: PropTypes.func,

  }

  static defaultProps = {
    selected: false,
    highLightStyle: {
      borderColor: 'gray',
      backgroundColor: 'transparent',
      textColor: 'gray',
      borderTintColor: ios_blue,
      backgroundTintColor: 'transparent',
      textTintColor: ios_blue,
    },

    singleTap: (valueTap) => { },
  }

  constructor(props) {
    super(props)
    this.state = {
      selected: false,
    }
  }

  componentDidMount() {
    this.setState({
      selected: this.props.selected,
    })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.selected !== nextProps.selected) {
      this.setState({
        selected: nextProps.selected
      })
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.props.singleTap(this.props.value)
        }
        }>

        <View
          style={
            [
              styles.button,
              this.props.buttonViewStyle,
              {
                flexDirection:'row',
                borderColor: this.state.selected ? '#5fcdf2' : 'transparent',
                backgroundColor: this.state.selected ? '#fff' : 'white',
              }
              
            ]
          }>
          <View>
          <Text style={
            [
              styles.text,
              this.props.textStyle,
              { color: this.state.selected ? '#5fcdf2': '#444444' },
            ]
          }>
            {this.props.displayValue === undefined ? this.props.value : this.props.displayValue}
            
          </Text>
          </View>
          <View>
          <Icon
              name="ios-checkmark-circle"
              onPress={this._navigateBack}
              style={[{
                display: this.state.selected ? 'flex' : "none",
                marginRight:5,
                marginLeft:-5,
              }]}
              // style={[styles.blue, styles.goBackStyle2]}
              size={20}
              color="#5fcdf2"
            />
          </View>
         
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 5,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    padding:10,
    borderRadius:8,

  },
  text: {
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
    // marginLeft: 10,
    marginRight: 10,
    fontWeight:'500',
    fontSize:15,
    
    
  }
})
