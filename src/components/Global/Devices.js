import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';

export default class Devices extends React.Component{
    
    populateDevice(){
        let deviceList = [
            {id:'1',name:'Android'},
            {id:'2',name:'iPhone'},
            {id:'3',name:'iPad'},
            {id:'4',name:'Desktop'},
            {id:'5',name:'Windows Phone'},
            {id:'6',name:'Blackberry'},
            ];
        let result = deviceList.map(country => (<MenuItem key={country.id} value={country.name} > {country.name} </MenuItem>));
        return result;
    }
      render(){
        return(this.populateDevice());
    }
}