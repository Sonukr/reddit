// @flow
import * as React from 'react';
import classnames from 'classnames'
import './styles.css';
import {Api} from '../../services/api';
import {SetData} from '../../actions/getData';
import { connect } from 'react-redux';

type Props = {
  dispatch: Object,
  reddits: Object
}

type State = {
  value: string,
  tag: string,
  tags: Array<string>
}

/* features  > SearchBar */
class SearchBarProxy extends React.Component<Props, State> {

  constructor(props: Props){
    super(props);
    this.state = {
      value : '',
      tag: '',
      tags:  ['alternativeart', 'pics', 'gifs', 'adviceanimals', 'cats',
        'images', 'photoshopbattles', 'hmmm', 'all', 'aww']
    }
  }

  componentDidMount(): void {
    this.fetchInitialData();
  }


  fetchInitialData = async () => {
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
    this.setState({
      value: e.target.value,
      tag: ''
    });
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
   console.log('form', this.state)
  }

  handleTagClick = (item: string) => {
    console.log(item);
    this.setState({
      tag: item
    })
  }


  render () {
    const tags = this.state.tags;
    return (
      <div className="searchBarWrapper">
          <div className="row ">
            <div className="col-md-12">
              <form onSubmit={this.handleSubmit} className="form-inline">
                <input className="form-control mr-sm-2" type="search"
                       placeholder="Search" aria-label="Search" name="search"
                       onChange={this.handleOnChange}
                />
                <button className="btn btn-outline-primary my-2 my-sm-0"
                        type="submit">Search
                </button>
              </form>
            </div>
            <div className="col-md-12">
              <div className='d-flex mt-2 align-items-center'>
                <p className='tagsTitle'>Quick view for reddit : </p>
                <div className='tagWrapper'>
                  {
                    tags.map(item => (
                      <span className={classnames(this.state.tag === item ?
                        'tagItem tagItemActive' :'tagItem')}
                         onClick={() => this.handleTagClick(item)} key={item}
                      >
                        {item}
                      </span>
                    ))
                  }
                </div>
              </div>
            </div>
        </div>

      </div>

    );
  }
}

const mapStateToProps = state => ({
  reddits: state.reddits
});

export const SearchBar = connect(mapStateToProps)(SearchBarProxy);