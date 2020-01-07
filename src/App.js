import React from 'react';
import './App.css';

import Accordion from "./components/Accordion";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {
        1: {open: false},
        2: {open: false},
        3: {open: false, special: true},
        4: {open: false},
      }
    }
  }

  handleClick = (id, isOpen) => {
    this.setState({
      items: {
        ...this.state.items,
        [id]: { ...this.state.items[id], open: !isOpen }
      }
    })
  };

  handleAndCloseAll = (id, isOpen) => {
    const accordions = Object.assign({}, this.state.items);
    if (!isOpen) {
      Object.keys(accordions).forEach(key => {
        if (key !== id) {
          accordions[key].open = false;
        }
      })
    }
    this.handleClick(id, isOpen);
    this.setState(accordions);
  };

  render() {
    return (
        <div className="App">
          <p>The third option is special and will close all the others</p>
          <ul>
            {Object.entries(this.state.items).map(([key, value]) => (
                <li key={key}>
                  <Accordion id={key} open={value.open} onClick={value.special ? this.handleAndCloseAll : this.handleClick}/>
                </li>
            ))}
          </ul>
        </div>
    );
  }
}
