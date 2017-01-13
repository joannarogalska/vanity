import React, { Component } from 'react';

class Listing extends Component {
    constructor() {
        super();
        this.state = {
            today: {}
        };
    }

    componentWillReceiveProps(nextProps){
        //console.log(nextProps);
        this.setState({today : new Date()});
    }

    render (){
        const items = this.props.list.map( item => {

            const expirationDate = new Date(item.expirationDate);

            if(this.state.today > expirationDate){
                var setRedClass = 'red';
            }
            return (
                <li key={item.name} className={setRedClass}>
                    <div>{item.name}</div>
                    <div>{item.price}</div>
                    <div>{item.expirationDate}</div>
                </li>
            )
        });
        return (
            <div className="listItem">
                <ul>
                    <li className="head">
                        <div>Nazwa</div>
                        <div>Cena</div>
                        <div>Data ważności</div>
                    </li>
                    {items}
                </ul>
            </div>
        )
    }
}

export default Listing;