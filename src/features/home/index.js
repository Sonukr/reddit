// @flow

import React, { Component } from 'react';
import {SearchBar} from '../search'
import './styles.css';
import logo from './logo.png';

type Props = {

}

export class HomePage extends Component<Props>{
  render() {
    return (
        <div className="App">
          <div  className='menu'>
            <ul>
                <li>
                  <a  href="/">
                    <img src={logo} alt=""/>
                  </a>
                </li>
            </ul>
          </div>
          <div className="container">
            <SearchBar/>
          </div>

    </div>
    )
  }
};
