import React,{Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';


class Header extends Component{
    render(){
        return(
            <div><Button variant="contained" color="inherit">Login </Button>
            </div>
        );
    }
}

export default Header;