import React, { Component } from 'react';

class Listing extends Component {
    render (){
        const items = this.props.list.map( item => {
            return (
                <li key={item.name}>{item.name}</li>
            )
        });
        return (
            <div className="listItem">
                <ul>
                    {items}
                </ul>
            </div>
        )
    }
}

export default Listing;