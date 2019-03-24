// @flow
import * as React from 'react';
import classnames from 'classnames'
import './styles.css';

type Props = {
}

/* features  > SearchBar */
class SearchBarProxy extends React.Component<Props> {

  constructor(props: Props){
    super(props);
    this.state = {
      value : '',
      tag: ''
    }
  }

  handleOnChange = (e) => {
    this.setState({
      value: e.target.value,
      tag: ''
    });
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
   console.log('form', this.state)
  }

  handleTagClick = (item) => {
    console.log(item);
    this.setState({
      tag: item
    })
  }


  render () {
    const tags = ['alternativeart', 'pics', 'gifs', 'adviceanimals', 'cats',
      'images', 'photoshopbattles', 'hmmm', 'all', 'aww'];
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

export const SearchBar = SearchBarProxy;