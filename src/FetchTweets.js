import React,{Component} from 'react';
import { getTweets } from './getTweets';
import PhotoPost from './PhotoPost';

class Tweets extends Component {
    constructor(props) {
      super(props);
      this.state = {
        tweets: [],
        loading: true,
      };
    }
  componentWillMount() {
      getTweets()
        .then((res) => {
          this.setState({
            tweets: res.data,
            loading: false,
          });
        })
        .catch((err) => console.log(err));
    }
  renderPosts = () => {
      const { tweets } = this.state;
      return tweets.map(tweet => {
        const {id, url, message} = tweet;
        return (
          <PhotoPost
            key={id}
            name={url}
            message={message}
            url={url}
          />
        );
      });
    }
  render() {
      const { loading } = this.state;
      return (
        <div>
          {loading ? 'loading...' : this.renderPosts()}
        </div>
      );
    }
  }
  export default Tweets;
