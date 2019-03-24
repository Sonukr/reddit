// @flow
import * as React from 'react';
import './styles.css';
import classnames from 'classnames';

type Props = {
  onClick: Function,
  title: string,
  isActive: boolean
}

/*Tags */
export class Tag extends React.Component<Props> {
  render () {
    return (
      <span className={classnames(this.props.isActive ?
        'tagItem tagItemActive' :'tagItem')}
        onClick={this.props.onClick}
        key={this.props.title}>
        {this.props.title}
      </span>
    );
  }
}

