import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../Login/SignIn";
import SignUp from "../Login/SignUp";
import A from './A';
import {Nav,Navbar,Form,FormControl,Button} from 'react-bootstrap';
import Avatar from './Avatar';
import About from '../Profile/About';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Sidebar from './Sidebar';



import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';



/* const useStyles = makeStyles({
    root: {
      width: 500,
    },
  });
 */
  const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });


const App=()=> {
    
  

    
    const [value, setValue] = React.useState('recents');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
  
    };

    





    const classes = useStyles();
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );









  return (
    <div>
  
  <Router>
    <div className="App" id='abc'>
    
    


    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Nali</Navbar.Brand>
    <Nav className="mr-auto">
   
    <Link className="nav-link" to={"/"}>a</Link>
            
   
    <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
            
    <Link className="nav-link" to={"/sign-up"}>Sign up</Link>

  
    </Nav>




    <Form inline>
      
    </Form>




    <Link className="nav-link" to={"/About-me"}><Avatar/></Link>




<div>
      {[ 'right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} value='A'>Nalinda Deshapriya</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
    </Navbar>
      </div>
    </Router>
    </div>
  );
}

export default App;