import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Listing from './Listing';

class App extends Component {

    state = {
        cosmeticList: this.props.cosmeticList
    };

    componentDidMount(){
        this.getData();
    }

    getData() {
        var oReq = new XMLHttpRequest();
        oReq.open("get", "/dummy/data.json", true);
        oReq.send();
        oReq.onload = function(){
            this.setState({cosmeticList: JSON.parse(oReq.responseText)})
        }.bind(this);
    };

    render() {
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2></h2>
            </div>
            <Listing list={this.state.cosmeticList}/>
      </div>
    );
  }
}

export default App;
