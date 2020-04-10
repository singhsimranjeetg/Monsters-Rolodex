import React, {Component} from 'react';   //component is prop. on react.
import './App.css';
import {CardList} from "./components/card-list/card-list.component"
import {SearchBox} from "./components/search-box/search-box.component"
class App extends Component{  //used class,enabes use of state, a js object with props, we can access anytime in app
  constructor(){
    super();             //super calls the constructor method of component class and give us access to this.state
    this.state =  {      //this. state is a component obj 
     monster: [] ,
     searchField: ""
    }
    
  }
  //we want our initial state to be an empty array

  componentDidMount(){        //this life cycle method calls the block code when our component gets rendered on thr page.
    fetch("https://jsonplaceholder.typicode.com/users")  //this native method will return a promise
    .then(response => response.json()).then(users => this.setState({monster: users})) //setState is also method in Component which can change the content of the state
       
  } ///taking the response and converting it into the json format so our js can understand 
  //as soon as our state changes,via setState , the reneer method get callled again.
  render (){
    const {monster, searchField} = this.state  //object destructuring, this equals to const monsters = this.state.monster
    //includes method checks if the value we pass in it exists in the method before that or not
    const filteredMonsters = monster.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (   //we use key in react, bcz react will know which element or object has changed so it only needs to re render that.
      //since setState is a asyn method, we pass the second arguement to it to push it to run right after first
      //onChange is the synthesis method that call the fx inside every time we change our input, which then setState, if our setState run it re render the App component
      //we want our setState in app.js for searchbox bcz our other components need access to searchfield and need to sync, one way data flow
      //if we put setState in searchbox, our searchfiled will be inaccessible, this is called lifting state up
    <div className="App"> 
    <h1>Monster Rolodex</h1>
    <SearchBox 
      placeholder = "search monsters"
      handleChange = {e => this.setState({searchField: e.target.value})}
    />
    
    <CardList monsters = {filteredMonsters}  /> 
    {console.log(filteredMonsters)}
    
    </div>
    
  );
  }
}

export default App;
