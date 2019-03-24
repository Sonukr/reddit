// @flow
import * as React from 'react';
import './styles.css';

type Props = {
  onSubmit: Function,
  onChange: Function
}


/* InputForm */
export class InputForm extends React.Component<Props> {

  render () {
    return (
      <form onSubmit={this.props.onSubmit} className="form-inline">
        <input className="form-control mr-sm-2" type="text"
               placeholder="Search subreddit here..." aria-label="Search" name="search"
               onChange={this.props.onChange}
               value={this.props.value || ''}
        />
        <button className="btn btn-outline-primary my-2 my-sm-0"
                type="submit">Search
        </button>
      </form>
    );
  }
}

