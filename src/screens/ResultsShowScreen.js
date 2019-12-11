import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import yelp from '../api/yelp'
import { FlatList } from 'react-native-gesture-handler'

const   ResultsShowScreen = ({navigation}) =>{
    const [result, setResult] = useState(null)
    const id = navigation.getParam('id')

    const getResult = async (id) =>{
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(() =>{
        getResult(id)
    }, [])

    if (!result){
        return null
    }

    return <View>
      <FlatList data={result.photos} keyExtractor={(photo => photo)} renderItem={({item}) => {
          return <Image style={styles.imageStyle} source={{url: item}}></Image>
      }}></FlatList>
    </View>
}

const styles = StyleSheet.create({
    imageStyle: {
        height:200,
        width: 300
    }
})

export default ResultsShowScreen