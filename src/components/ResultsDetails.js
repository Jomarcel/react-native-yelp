// import React from 'react'
import {View, Image, Text, StyleSheet, FlatList} from 'react-native'


import React from 'react'

const ResultsDetails = ({results}) => {
    return <View style = {styles.container}>
  
    <Image style = {styles.imageStyle} source = {{url: results.image_url}} />
    <Text style  = {styles.name}>{results.name}</Text>
    <Text>
        {results.rating} Stars, {results.review_count} Reviews
    </Text>


    </View>
}


const styles = StyleSheet.create({
    container:{
        marginLeft: 15
    },

    imageStyle:{
        width: 250,
        height: 120,
        borderRadius: 4
        
    },
    name:{
        fontWeight: 'bold',
        
    }
})


export default ResultsDetails