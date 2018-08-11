import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import '../styles/HomePage.css';
import Countries from './Global/Countries';
import Devices from './Global/Devices';
import NavigationIcon from '@material-ui/icons/Navigation';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import green from '@material-ui/core/colors/green';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import $ from "jquery";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    colorSwitchBase: {
        color: green[300],
        '&$colorChecked': {
          color: green[500],
          '& + $colorBar': {
            backgroundColor: green[500],
          },
        },
      },
      colorBar: {},
      colorChecked: {},
  },
});

class TrackLinkSection extends React.Component {
    constructor(){
        super();
        this.state = {
            value: 0,
            link:'',
            country:'India',
            device:'',
            city:'',
            advancedChecked:false,
            connection_type:'Wifi Connection',
            connection_sub_type : '',
            os_version:''
          };
          this.handleAdvancedChanged = this.handleAdvancedChanged.bind(this);
          this.populateAdvancedOptions = this.populateAdvancedOptions.bind(this);
          this.populateCity = this.populateCity.bind(this);
          this.selectHandleChange = this.selectHandleChange.bind(this);
          this.populateConectionSubType = this.populateConectionSubType.bind(this);
    }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleAdvancedChanged(){
    this.setState({ advancedChecked : !this.state.advancedChecked });
  }

  selectHandleChange=(e)=>{
    this.setState({ [e.target.name]: e.target.value });
  };

  populateDevice(){
    let deviceList = require('../data/devices.json');
    let result = deviceList.map(device => (<MenuItem key={device.id} value={device.name} > {device.name} </MenuItem>));
    return result;
    }

    populateCountry(){
        var countriesList = require('../data/countryList.json');
        let result = countriesList.map(country => (<MenuItem key={country.code} value={country.name} > {country.name} </MenuItem>));
        return result;
    }
    populateCity(){
        $("#loder-trackify").removeClass('none');
        var countriesList = require('../data/city.json');
        let result;
        if(countriesList[this.state.country]){
             result = countriesList[this.state.country].map((city,index) => (<MenuItem key={index} value={city} > {city} </MenuItem>));
        }
        else{
            result=[<MenuItem value="Not specified" >
             Not specified
            </MenuItem>]
        }
        $("#loder-trackify").addClass('none');
        return result;
    }

    populateAdvancedOptions(){

        if(this.state.advancedChecked){
            return(<div id='advaced-option-section' className="width-100-percent">
                    <div className='mdl-cell mdl-cell--12-col flex-row'>
                        <div className='width-50-percent margin-r-10'>
                            <FormControl key='os_version' className='form-control'>
                                <Select
                                    onChange={this.selectHandleChange}
                                    value={this.state.device}
                                    name="os_version"
                                    displayEmpty
                                    className='select-empty'>
                                    <MenuItem key ='os_ver_1' value="" disabled>Android</MenuItem>
                                    <MenuItem key ='os_ver_2' value="android">8 Oreo (Latest)</MenuItem>
                                    <MenuItem key ='os_ver_3' value="android7">7.1.1 Nougat</MenuItem>
                                    <MenuItem key ='os_ver_4' key ='os_ver_1'value="android6">6.0 Marshmallow</MenuItem>
                                    <MenuItem key ='os_ver_5' value="android5">5.0 Lollipop</MenuItem>
                                    <MenuItem key ='os_ver_6' value="android44">4.4 KitKat</MenuItem>
                                    <MenuItem key ='os_ver_7' value="android4">4.1 Jellybean</MenuItem>
                                    <MenuItem key ='os_ver_8' value="" disabled>iOS</MenuItem>
                                    <MenuItem key ='os_ver_9' value="iphone">iOS 11 (Latest)</MenuItem>
                                    <MenuItem key ='os_ver_10' value="iphone10">iOS 10.1</MenuItem>
                                    <MenuItem key ='os_ver_11' value="iphone9">iOS 9.0</MenuItem>
                                    <MenuItem key ='os_ver_12' value="iphone8">iOS 8.0</MenuItem>
                                    <MenuItem key ='os_ver_13' value="iphone7">iOS 7.0</MenuItem>
                                </Select>
                                <FormHelperText>OS Version</FormHelperText>
                            </FormControl>
                        </div>
                        <div className='margin-l-10 width-50-percent'>
                            <FormControl key='city' className='form-control'>
                                <Select
                                    onChange={this.selectHandleChange}
                                    value={this.state.city}
                                    name="city"
                                    displayEmpty
                                    className='select-empty'>  
                                    <MenuItem value="" disabled>
                                     City
                                    </MenuItem>
                                    {this.populateCity()}
                                </Select>
                                <FormHelperText>City</FormHelperText>
                            </FormControl>
                        </div>
                    </div>
                    <div className='mdl-cell mdl-cell--12-col flex-row'>
                        <div className='width-50-percent margin-r-10'>
                            <FormControl key='connection_type' className='form-control'>
                                <Select
                                    onChange={this.selectHandleChange}
                                    value={this.state.connection_type}
                                    name="connection_type"
                                    displayEmpty
                                    className='select-empty'>
                                    <MenuItem value="" disabled>
                                        Network Type
                                    </MenuItem>
                                    <MenuItem key='nw-type1' value='Wifi Connection'>Wifi Connection</MenuItem>
                                    <MenuItem key='nw-type1' value='3G/4G Connections'>3G/4G Connections</MenuItem>
                                </Select>
                                <FormHelperText>Device</FormHelperText>
                            </FormControl>
                        </div>
                        <div className='margin-l-10 width-50-percent'>
                            <FormControl key='connection_sub_type' className='form-control'>
                                <Select
                                    onChange={this.selectHandleChange}
                                    value={this.state.connection_sub_type}
                                    name="connection_sub_type"
                                    displayEmpty
                                    className='select-empty'>  
                                    <MenuItem value="" disabled>
                                    Service Provider
                                    </MenuItem>
                                    {this.populateConectionSubType()}
                                </Select>
                                <FormHelperText>Service Provider</FormHelperText>
                            </FormControl>
                        </div>
                    </div>
                </div>);
        }
        else{
            return(<div id='no-advanced-option'></div>);
        }
    }
    populateConectionSubType(){
        if(this.state.connection_type=='Wifi Connection'){
            return(<MenuItem value='Not specified' selected={true}>Not specified</MenuItem>);
        }else{
            return([
            <MenuItem key="55836" value='Reliance Jio Infocomm Limited'>Reliance Jio Infocomm Limited</MenuItem>,
            <MenuItem key="4755" value='TATA COMM MAINTAINER'>TATA COMM MAINTAINER</MenuItem>,
            <MenuItem key="17813" value='Mahanagar Telephone Nigam Limited'>Mahanagar Telephone Nigam Limited</MenuItem>,
            <MenuItem key="55831" value='Aircel Ltd.'>Aircel Ltd.</MenuItem>,
            <MenuItem key="38266" value='Vodafone Essar Ltd., Telecommunication - Value Added Services,'>Vodafone Essar Ltd., Telecommunication - Value Added Services,</MenuItem>,
            <MenuItem key="17908" value='TATA COMM MAINTAINER'>TATA COMM MAINTAINER</MenuItem>,
            <MenuItem key="18101" value='Reliance Communication Ltd 20060606'>Reliance Communication Ltd 20060606</MenuItem>,
            <MenuItem key="55740" value='TATA TELESERVICES LTD -- CDMA'>TATA TELESERVICES LTD -- CDMA</MenuItem>,
            <MenuItem key="10199" value='TATA COMM MAINTAINER'>TATA COMM MAINTAINER</MenuItem>
        ]);
    }

    }
  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className='link-tab-section'>
        <Paper>
            <Tabs
            value={this.state.value}
            indicatorColor="primary"
            textColor="primary"
            onChange={this.handleChange}
            >
                <Tab key="Trackink-Link" label="Tracking Link" />
                <Tab key='HTML-Tag' label="HTML Tag" disabled >
                </Tab>
            </Tabs>
      </Paper>
        {value === 0 && <div className='tab-form'>
            <TabContainer>
                <div className='mdl-grid'>
                    <div className='mdl-cell mdl-cell--12-col'>
                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label width-100-percent">
                            <input className="mdl-textfield__input" type="text" pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)" id="sample4" placeholder='http://vantive.com'/>
                            <label className="mdl-textfield__label" htmlFor="sample4">Link</label>
                            <span className="mdl-textfield__error">Please Enter a valid Link!!</span>
                        </div>
                    </div>
                    <div className='mdl-cell mdl-cell--12-col flex-row'>
                            <div className='width-50-percent margin-r-10'>
                                <FormControl key='device' className='form-control'>
                                    <Select
                                        onChange={this.selectHandleChange}
                                        value={this.state.device}
                                        name="device"
                                        displayEmpty
                                        className='select-empty'>
                                        <MenuItem value="" disabled>
                                            Device
                                        </MenuItem>
                                        {this.populateDevice()}
                                    </Select>
                                    <FormHelperText>Device</FormHelperText>
                                </FormControl>
                            </div>
                            <div className='margin-l-10 width-50-percent'>
                                <FormControl key='country' className='form-control'>
                                    <Select
                                        onChange={this.selectHandleChange}
                                        value={this.state.country}
                                        name="country"
                                        displayEmpty
                                        className='select-empty'>  
                                        <MenuItem value="" disabled>
                                        Country
                                        </MenuItem>
                                        {this.populateCountry()}
                                    </Select>
                                    <FormHelperText>Country</FormHelperText>
                                </FormControl>
                            </div>
                      </div>
                      <div>
                        <FormControlLabel
                                control={
                                    <Switch key='advancedChecked'
                                    checked={this.state.advancedChecked}
                                    onChange={this.handleAdvancedChanged}
                                    name="advancedChecked"
                                    classes={{
                                        switchBase: classes.colorSwitchBase,
                                        checked: classes.colorChecked,
                                        bar: classes.colorBar,
                                    }}
                                    />
                                }
                                label="Advanced Options"
                                />
                      </div>
                      {this.populateAdvancedOptions()}
                        <div className="wrapper mdl-cell mdl-cell--12-col">
                            <a className="cta" href="#">
                                <span>NEXT >></span>
                            </a>
                         </div>
                        </div>
        </TabContainer>
        </div>}
        {value === 1 && <TabContainer></TabContainer>}
      </div>
    );
  }
}

TrackLinkSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TrackLinkSection);