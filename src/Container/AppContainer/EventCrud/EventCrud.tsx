import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EventCrud = (props) => {
    const {route} = props || {};
  const {params} = route || {};
  const {EventData} = params || {};
  console.log(EventData, "Edit Event Data")
  const {
    name,
    participants,
    startDate,
    endDate
  } = EventData || {}
  return (
    <View>
      <Text>{name}</Text>
    </View>
  )
}

export default EventCrud

const styles = StyleSheet.create({})