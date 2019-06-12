import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
  
  function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={event => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }
  
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));
  const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref}  {...props} />);

const NavBar = props => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    function handleChange(event, newValue) {
      setValue(newValue);
    }

    return (
    <nav>
        <AppBar position="static">
            <Tabs variant="fullWidth" onChange={handleChange} value={value} >
                <Tab label="Home" component={AdapterLink} to="/" />
                <Tab label="Add a Friend" component={AdapterLink} to={{pathname: "/newFriend", title: 'Add a Friend' }} />
            </Tabs>
        </AppBar>
    </nav>  
    )

}

export default NavBar