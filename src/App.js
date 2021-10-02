import Header from './components/ui/Header';
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';

const App = () => {
const [items, setItems] = useState([])//Starts as empty array,going to fill array with data from api once request is made 

const [isLoading, setIsLoading] = useState(true)//Once fetched set to false
const [query, setQuery]= useState('')

useEffect(() => {//useEffect takes in a arrow function
     const fetchItems = async () => {
       const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)                //Represents what we get back from axios
       
       console.log(result.data);
       setItems(result.data)
       setIsLoading(false)//Got the data, et loading to false
     }
     fetchItems();
}, [query])//Adding query as dependency, when that value is changed useEffect will fire again

  return (
    <div className="container">
      <Header/>
      <Search getQuery = {(q) => setQuery(q)}/>   {/* */}
       <CharacterGrid isLoading={isLoading} items={items}/> {/*From line 9 and 11 passing state as props */}
    </div>
  );
}

export default App;
