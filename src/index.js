import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const data = [
    {name: 'krem1', price: '10 PLN', expirationDate: ''},
    {name: 'krem2', price: '20 PLN', expirationDate: ''},
    {name: 'krem3', price: '30 PLN', expirationDate: ''}
];

var data2;

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "/dummy/data.json", true);
oReq.send();

oReq.onreadystatechange = function(){
    console.log(oReq.readyState);
};

function reqListener() {
    //console.log('test 34: ',this.responseText);
    data2 = JSON.parse(this.responseText);
}




ReactDOM.render(
  <App cosmeticList={data} />,
  document.getElementById('root')
);
