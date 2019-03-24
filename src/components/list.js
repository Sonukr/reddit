// @flow
import * as React from 'react';
import styles from './styles.css';

type Props = {
  items: any
}

/* ListItem */
export class ListItem extends React.Component<Props> {
  render () {
    const items = this.props.items;
    return (
      <div>
        {items.length === 0 ?
          <div className='listWrapper'>
            <h4>No results for your query...!</h4>
          </div>:
          <div>
            {this.props.items.map((item,i) => (
              <div className='listWrapper' key={i}>
                <div className='listItem'>
                  {/*{JSON.stringify(item.data)}*/}
                  <div className='imageWrapper'>
                    <a href={item.data.url} target='_blank'>
                      <img src={item.data.thumbnail || item.data.url} alt=""/>
                    </a>
                  </div>
                  <div className='detailsWrapper'>
                    <h4>{item.data.title}
                      <a href={`https://www.reddit.com/${item.data.permalink}`} target='_blank'> /r/permalink</a>
                    </h4>
                    <div className='d-flex'>
                      <p><i className="far fa-user"></i>
                        <a href={`https://www.reddit.com/user/${item.data.author}`} target='_blank'> {item.data.author}</a>
                      </p>
                      <p><i className="far fa-comments"></i> {item.data.num_comments}</p>
                      <p><i className="far fa-thumbs-up"></i> {item.data.ups}</p>
                      <p><i className="far fa-thumbs-down"></i> {item.data.downs}</p>
                      <p>
                        <a href={`https://www.reddit.com/${item.data.subreddit_name_prefixed}`} target='_blank'>
                          {item.data.subreddit_name_prefixed}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        }

      </div>
    );
  }
}

