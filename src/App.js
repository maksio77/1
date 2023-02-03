import { Component } from "react";

import Filter from './components/filter';
import List from './components/list';
import AddItem from './components/add-item';

import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { header: 'Помити машину', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus reprehenderit suscipit.', id: 1 },
        { header: 'Курси', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus reprehenderit suscipit.', id: 2 },
        { header: 'Футбол', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus reprehenderit suscipit.', id: 3 },
      ]
    }
  }

  deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        });
  }

    render() {
      const { data } = this.state;
      return (
        <div className="App">
          <Filter />
          <List data={data}
            onDelete={this.deleteItem} />
          <AddItem />
        </div>
      );
    }
  }


export default App;