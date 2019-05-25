import React,{Fragment} from 'react';
import NavBar from './NavBar';
import PhotoPost from './PhotoPost';
import Posts from './FetchPosts';
import TweetView from './TweetView';
import Tweets from './FetchTweets';
var posts = [
  {id:1,name:'Julia',message:'¿Que tal?',url:''},
  {id:1,name:'Julia',message:'Hello World',url:''},
  {id:2,name:'John',message:'¿Que tal?',url:''},
  {id:3,name:'Alex',message:'¿Que tal?',url:''},
  {id:4,name:'Manuel',message:'¿Que tal?',url:''},
  {id:5,name:'Daniel',message:'¿Que tal?',url:''}
];
function App() {
  return (
    <Fragment>
    <NavBar></NavBar>
    <Tweets/>
    <TweetView name="r00t" message="First tweet on my dev test app!"/>
    <Posts/>
    {posts.map(post => <PhotoPost name={post.name} message={post.message} url={post.url} />)}
    <PhotoPost name="Joan" user="joan.perez" message="Hola Mundo desde React" url="https://www.fmdos.cl/wp-content/uploads/2018/06/instagram-stories-670x335.jpg"></PhotoPost>
    </Fragment>
  );
}

export default App;
