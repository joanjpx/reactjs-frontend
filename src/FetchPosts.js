import React,{Component} from 'react';
import { getPosts } from './getPosts';
import PhotoPost from './PhotoPost';

class Posts extends Component {
    constructor(props) {
      super(props);
      this.state = {
        posts: [],
        loading: true,
      };
    }
  componentDidMount() {
      getPosts()
        .then((res) => {
          this.setState({
            posts: res.data,
            loading: false,
          });
        })
        .catch((err) => console.log(err));
    }
  renderPosts = () => {
      const { posts } = this.state;
      return posts.map(post => {
        const {title, url, thumbnailUrl} = post;
        return (
          <PhotoPost
            name={url}
            message={title}
            url={thumbnailUrl}
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
  export default Posts;
