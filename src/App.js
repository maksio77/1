import { Component } from "react";

import Filter from './components/filter';
import List from './components/list';
import AddItem from './components/add-item';

import './index.css';
import ListItem from "./components/list-item";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { header: 'Помити машину', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus reprehenderit suscipit.', id: 1 },
        { header: 'Курси', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus reprehenderit suscipit.', id: 2 },
        { header: 'Футбол', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus reprehenderit suscipit.', id: 3 },
      ],
      new: ''
    }
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    });
  }

  addItem = (header, text) => {
    
    const thing = {
      header,
      text,
      id: this.maxId++
    }

    this.setState(({data}) => {
      const newArray = [...data, thing];

      return{
        data: newArray
      }
    })
  }

  changeItem = (id) => {
    this.setState(({data}) => {
      return{
        new: data.find((elem) => {
          return elem.id === id;
        })
      }
    })
    console.log(this.state.new);
  }

    render() {
      const { data } = this.state;
      return (
        <div className="App">
          
          <Filter />
          
          <List data={data}
            onDelete={this.deleteItem}
            onChange={this.changeItem}
          />

          <AddItem 
          data={data}
          onAdd={this.addItem}
          />
        
        </div>
      );
    }
  }


export default App;