import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from 'react';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        setMonsters(users)
      );
    },[]); 
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }
  useEffect(() => {
  const newfilteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });
  setFilteredMonsters(newfilteredMonsters);
},[monsters,searchField]);
  return (
    <div className="App">
      <h1>My Restart React</h1>
      <SearchBox onChangeHandler={onSearchChange} placeHolder="Search monsters" className='search-box'/> 
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [], 
//       searchField: '',
//     };
//   }
//   componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((users) =>
    //     this.setState(() => {
    //       return { monsters: users };
    //     })
    //   );
  // }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState({searchField});
//   }
//   render() {
//     const {searchField,monsters} = this.state;
//     const {onSearchChange} = this;
//     const filteredMonsters = monsters.filter((monster) => { 
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <SearchBox onChangeHandler={onSearchChange} placeHolder="Search monsters" className='search-box'/> 
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
