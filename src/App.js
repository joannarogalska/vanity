import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Listing from './Listing';

class App extends Component {

    constructor() {
        super();
        this.state = {
            cosmeticList: []
            //items: []
        };
    }

    componentWillMount() {
        return fetch('/dummy/data.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({cosmeticList: responseJson});
            })
            .catch((error) => {
                console.error(error);
            });
    }

    /*componentWillMount() {
        fetch( 'http://swapi.co/api/people/?format=json' )
            .then( response => response.json() )
            .then( ({result: items}) => this.setState({items}))
    }

    render(){
        let items = this.state.items;
        return (
            <div>
                {items.map(item =>
                    <h4>{item.name}</h4>)}
            </div>
        )
    }*/

    render() {
        return (
            <div className="App">
                <Listing list={this.state.cosmeticList}/>
          </div>
        );
    }
}

export default App;
