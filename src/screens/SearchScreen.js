import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View , ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = ({navigation}) =>{
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()
    console.log(results)
    const filterResultsByPrice = (price) => {
        return results.filter(
            result => {
                return result.price === price
            }
        )
    }
    return (
        <>
            <SearchBar onTermSubmit={() => searchApi({term})} term={term} onTermChange={newTerm => setTerm(newTerm)}/>
             {errorMessage ? <Text>{errorMessage}</Text> : null}
             {/* <Text>We have found {results.length} results</Text> */}
             <ScrollView>
                <ResultsList  results = {filterResultsByPrice('$')} title = "Cost Effective" navigation = {navigation}/>
                {/* navigation = {navigation */}
                <ResultsList  results = {filterResultsByPrice('$$')}title = "Pricier" navigation = {navigation}/>
                <ResultsList  results = {filterResultsByPrice('$$$') }title = "Spender" navigation = {navigation}/>
             </ScrollView>
         
        </>
    )
    
}

const styles = StyleSheet.create({})

export default SearchScreen