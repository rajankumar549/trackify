import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';

export default class Countries extends React.Component{
    
    populateCountry(){
        let countriesList = [];
        let result = countriesList.map(country => (<MenuItem key={country.code} value={country.name} > {country.name} </MenuItem>));
        return result;
    }
      render(){
        return(this.populateCountry());
    }
}