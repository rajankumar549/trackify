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
import Countries from '../components/Global/Countries';
import Devices from '../components/Global/Devices';
import NavigationIcon from '@material-ui/icons/Navigation';
import Button from '@material-ui/core/Button';

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
  },
});

class TrackLinkSection extends React.Component {
  state = {
    value: 0,
    country:'',
    device:''
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  selectHandleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  populateDevice(){
    let deviceList = require('../data/devices.json');
    let result = deviceList.map(country => (<MenuItem key={country.id} value={country.name} > {country.name} </MenuItem>));
    return result;
    }
    populateCountry(){
        var countriesList = require('../data/countryList.json');
        let result = countriesList.map(country => (<MenuItem key={country.id} value={country.name} > {country.name} </MenuItem>));
        return result;
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
                <Tab label="Tracking Link" />
                <Tab label="HTML Tag" disabled >
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
                        <div className='width-50-percent margin-l-10'>
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
                        <div>
                        <Button variant="extendedFab" aria-label="Delete" className={classes.button}>
                            <NavigationIcon className={classes.extendedIcon} />
                            Submit
                        </Button>
                        </div>
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