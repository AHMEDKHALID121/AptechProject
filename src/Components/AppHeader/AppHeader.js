import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppHeader = (props) => {
    const { options, route } = props || {}
    const { params } = route || {}
    const { pageTitle } = params || {}
    const {title} = options || {}
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{pageTitle ? pageTitle : title}</Text>
    </View>
  )
}

export default AppHeader

const styles = StyleSheet.create({
  wrapper:{
    backgroundColor: 'transparent',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000'
  }
})