import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ResultsDetails from './ResultsDetails'
import {withNavigation} from 'react-navigation'

const ResultsList = ({title,results, navigation}) =>{
    if(!results.length){
        return null;
    }
    return(
        <View>

        <Text style = {styles.title}>{title}</Text>
        <Text> Results: {results.length}</Text>
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator = {false}
            data = {results}
            keyExtractor = {(result) => result.id}
            renderItem = {({item}) =>{

            return (   <TouchableOpacity onPress = {() => navigation.navigate('Detail',{id: item.id})}>
                   < ResultsDetails results  = {item} />
            </TouchableOpacity>
            
             
            
           
            )
            }}
        />

        </View>
    )
}
const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15

    }
})



export default withNavigation(ResultsList)