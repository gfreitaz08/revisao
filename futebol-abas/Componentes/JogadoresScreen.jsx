import { StyleSheet, View, ScrollView } from 'react-native'
import { Text, Card, Title, Paragraph } from 'react-native-paper'
import React from 'react'
export default function JogadoresScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>

        <Text variant='headlineSmall' style={{ fontWeight: 'bold' }}></Text>

        <Card style={{ margin:10 }}>
            <Card.Content>
                <Title>Pedro</Title>
                <Paragraph>
9                   
                </Paragraph>
            </Card.Content>
            <Card.Cover style={{width: 350, height: 400}} source={{ uri: "https://i.pinimg.com/474x/79/e6/18/79e6185649fa3667b3ed3beef3e1ae94.jpg",}} />
        </Card>
        
        <Text variant='headlineSmall' style={{ fontWeight: 'bold' }}></Text>

        <Card style={{ margin:10 }}>
            <Card.Content>
                <Title>Arrascaeta</Title>
                <Paragraph>
                  10
                </Paragraph>
            </Card.Content>
            <Card.Cover style={{width: 350, height: 400}} source={{ uri: "https://i.pinimg.com/474x/cf/ad/d9/cfadd92de5e581ac5505e3d325f8b9b2.jpg",}} />
        </Card>
        
        <Text variant='headlineSmall' style={{ fontWeight: 'bold' }}></Text>

        <Card style={{ margin:10 }}>
            <Card.Content>
                <Title>MIRANHA</Title>
                <Paragraph>
69                 
                </Paragraph>
            </Card.Content>
            <Card.Cover style={{width:300 , height: 400}} source={{ uri: "https://i.pinimg.com/736x/6f/d3/b2/6fd3b20a502ee7d46df48dd821242f38.jpg",}} />
        </Card>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})