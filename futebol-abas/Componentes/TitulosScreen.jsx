import { StyleSheet, View, ScrollView } from 'react-native'
import { Text, Card, Title, Paragraph } from 'react-native-paper'
import React from 'react'
export default function tituloScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>

        <Text variant='headlineSmall' style={{ fontWeight: 'bold' }}></Text>

        <Card style={{ margin:10 }}>
            <Card.Content>
                <Title>Brasileirão</Title>
                <Paragraph>
                    1980, 1982, 1983, 1992, 2009, 2019, 2020                   
                </Paragraph>
            </Card.Content>
            <Card.Cover style={{width: 350, height: 400}} source={{ uri: "https://i.pinimg.com/736x/65/1d/ce/651dce7c5a8e7a08738cff7e986ccd28.jpg",}} />
        </Card>

        <Text variant='headlineSmall' style={{ fontWeight: 'bold' }}></Text>

<Card style={{ margin:10 }}>
    <Card.Content>
        <Title>Copa Libertadores da América</Title>
        <Paragraph>
        1981, 2019, 2022              
        </Paragraph>
    </Card.Content>
    <Card.Cover style={{width: 350, height: 400}} source={{ uri: "https://i.pinimg.com/736x/40/a2/9b/40a29b600497737cce7010d0af0d8289.jpg",}} />
</Card>

<Card style={{ margin:10 }}>
    <Card.Content>
        <Title>Copa do Brasil</Title>
        <Paragraph>
        1990, 2006, 2013, 2022, 2024         
        </Paragraph>
    </Card.Content>
    <Card.Cover style={{width: 350, height: 400}} source={{ uri: "https://i.pinimg.com/736x/f5/b1/49/f5b1495d974924e84683846c887715d4.jpg ",}} />
</Card>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})