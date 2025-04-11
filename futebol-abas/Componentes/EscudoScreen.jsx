import { StyleSheet, View, ScrollView } from 'react-native'
import { Text, Card, Title, Paragraph } from 'react-native-paper'
import React from 'react'

export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>

        <Text variant='headlineSmall' style={{ fontWeight: 'bold' }}></Text>

        <Card style={{ margin:10 }}>
            <Card.Content>
                <Title>ESCUDO FLAMENGO </Title>
                <Paragraph>
Ano do escudo 1981                    
                </Paragraph>
            </Card.Content>
            <Card.Cover style={{width: 300, height: 300}} source={{ uri: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",}} />
        </Card>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'fff',
        flex: 1,
        alignItems: 'center',
    }
})