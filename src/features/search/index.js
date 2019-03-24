// @flow
import * as React from 'react';
import styles from './styles.css';

type Props = {
}

/* features  > SearchBar */
class SearchBarProxy extends React.Component<Props> {

  constructor(props: Props){
    super(props);

  }

  handleSubmit = (e: any) => {
    e.preventDefault();
   console.log('form')
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} className="form-inline">
        <input className="form-control mr-sm-2" type="search"
               placeholder="Search" aria-label="Search" name="search"/>
          <button className="btn btn-outline-primary my-2 my-sm-0"
                  type="submit">Search
          </button>
      </form>
    );
  }
}

export const SearchBar = SearchBarProxy;