import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './components/header.jsx';
import Main from './components/main.jsx';
import Test from './components/test.jsx';
import Footer from './components/footer.jsx';
import Antd from './components/antd.jsx';
import RouterStudy from './components/routerstudy.jsx';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header></Header>
          <Main></Main>
          <Test></Test>
          <Antd></Antd>
          <RouterStudy></RouterStudy>
          <Footer></Footer>
        </header>
      </div>
    );
  }
}

export default App;
