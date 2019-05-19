import React from 'react';
import NavBar from './NavBar';
import PhotoPost from './PhotoPost';

function App() {
  return (
    <div>
    <NavBar></NavBar>
    <PhotoPost name="Joan" user="joan.perez" message="Hola Mundo desde React" url="https://www.fmdos.cl/wp-content/uploads/2018/06/instagram-stories-670x335.jpg"></PhotoPost>
    <PhotoPost name="Alex" user="pinilla.alx" message="Hi!!" url="http://www.anarbailey.com/wp-content/uploads/2017/01/mens-portrait-london-shoot-big-ben-westminster-photographer-male-model-outdoor-lifestyle-1.jpg"></PhotoPost>
    </div>
  );
}

export default App;
