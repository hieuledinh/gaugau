import * as React from 'react'
import { View, Text } from 'react-native'
import { Header } from 'react-native-elements'

const GirlScreen: React.FC = () => {
  return (
    <View>
      <Header centerComponent={{ text: "Cho ban nu 😀", style: { color: '#fff'}}}></Header>
      <Text>Cho gau cai</Text>
    </View>
  )
}

export default GirlScreen
