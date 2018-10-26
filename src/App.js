import React, { Component } from 'react';
import Gallery from './Components/Gallery'
import Form from './Components/Form'


const apiEndpoints = {
  shibes: 'shibes',
  cats: 'cats',
  birds: 'birds',
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      urls: [],
    }
  }

  setUrls = (urls) => {
    this.setState({urls: urls})
  }

  render() {
    const {urls} = this.state
    return (
      <>
        <Form endpointNames= {apiEndpoints} setUrls = {this.setUrls}/>
        <Gallery imageUrls = {urls}/>
      </>
    );
  }
}

export default App;
