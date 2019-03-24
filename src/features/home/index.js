// @flow

import React, { Component } from 'react';
import {SearchBar} from '../search'
import './styles.css';

type Props = {

}

export class HomePage extends Component<Props>{
  render() {
    return (
        <div className="App">
          <div  className='menu'>
            <ul>
                <li><a  href="/">Home</a></li>
            </ul>
          </div>
          <SearchBar/>
          <div className='container'>
            <h2>Home</h2>
          </div>
    </div>
    )
  }
};
