// @flow

import React, { Component } from 'react';
import './styles.css';
import logo from './logo.png';
import {connect} from 'react-redux';
import {InputForm} from '../../components/inputForm';
import {Tag} from '../../components/tag';
import {SetData} from '../../actions/getData';
import {Api} from '../../services/api';
import {ListItem} from '../../components/list';


type Props = {
  dispatch: Object,
  reddits: Object
}

type State = {
  value: string,
  tag: string,
  tags: Array<string>
}

class HomePageProxy extends Component<Props, State>{
  constructor(props: Props){
    super(props);
    this.state = {
      value : '',
      tag: 'alternativeart',
      tags:  ['alternativeart', 'pics', 'gifs', 'adviceanimals', 'cats',
        'images', 'photoshopbattles', 'hmmm', 'all', 'aww'],
    }
  }

  componentDidMount(): void {
    this.fetchInitialData();
  }


  fetchInitialData = async () => {
    const keys = Object.keys(this.props.reddits).sort();
    const tags = this.state.tags.sort() ;

    if(JSON.stringify(keys) === JSON.stringify(tags)) {
      return null;
    }
    const data = {
      ...this.props.reddits
    };
    for(let i=0; i< this.state.tags.length; i++) {
      const resp = await this.dialApi(this.state.tags[i]);
      data[this.state.tags[i]]= resp.children
    }
    this.props.dispatch(new SetData(data).plainAction());
  }


  dialApi = async (tag: string) => {
    const api = new Api();
    const resp = await api.get(tag);
    return resp.data.data;
  }

  handleOnChange = (e: any) => {
    if(e.target.value === '') {
      // debugger;
      this.setState({
        value: '',
        tag: 'adviceanimals'
      });
    }else{
      this.setState({
        value: e.target.value
      });
    }
  }

  handleSubmit = async (e: any) => {
    e.preventDefault();
    const keys = Object.keys(this.props.reddits);
    this.setState({
      tag: this.state.value
    });
    const data = {
      ...this.props.reddits
    };
    if(keys.indexOf(this.state.value) > -1) {
      return null;
    }else{
      const resp = await this.dialApi(this.state.value);
      data[this.state.tag]= resp.children
      this.props.dispatch(new SetData(data).plainAction());
    }
  }

  handleTagClick = (item: string) => {
    this.setState({
      tag: item
    })
  }

  render() {
    const tags = this.state.tags;
    const listItems = this.props.reddits[this.state.tag] || []
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
            <div className="searchBarWrapper">
              <div className="row ">
                <div className="col-md-12">
                  <InputForm value={this.state.value}
                   onChange={this.handleOnChange} onSubmit={this.handleSubmit}
                  />
                </div>
                <div className="col-md-12">
                  <div className='d-flex mt-2 align-items-center'>
                    <p className='tagsTitle'>Quick view for reddit : </p>
                    <div className='tagWrapper'>
                      {
                        tags.map(item => (
                          <Tag onClick={() => this.handleTagClick(item)}
                               title={item} isActive={this.state.tag === item}
                               key={item}
                          />
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="listWrapper">
                <p className='tagsTitle'>Showing reddits for : <b>{this.state.tag}</b></p>
                <ListItem items={listItems}/>
            </div>
          </div>

    </div>
    )
  }
};

const mapStateToProps = state => ({
  reddits: state.reddits
});

export const HomePage = connect(mapStateToProps)(HomePageProxy);