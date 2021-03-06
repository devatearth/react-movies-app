import React, { Component } from "react";
import "./Header.css";
import Button from "@material-ui/core/Button";
import Logo from "../../assets/logo.svg";
import Modal from "react-modal";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import propTypes from "prop-types";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const TabContainer = function (props) {
  return (
    <Typography component="div" style={{ padding: 10, textAlign: "center" }}>
      {props.children}
    </Typography>
  )
};


TabContainer.propTypes = {
  children: propTypes.node.isRequired
};
class Header extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      value: 0,
    };
  }

  openModalHandler = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModalHandler = () => {
    this.setState({ modalIsOpen: false });
  };
  tabChangeHandler = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <div>
        <header className="app-header">
          <img src={Logo} className="app-logo" alt="Logo" />
          <div className="login-button">
            <Button
              variant="contained"
              color="default"
              onClick={this.openModalHandler}
            >
              Login
            </Button>
          </div>
        </header>
        <Modal
          ariaHideApp={false}
          isOpen={this.state.modalIsOpen}
          contentLabel="Login"
          onRequestClose={this.closeModalHandler}
          style={customStyles}
        >
          <Tabs
            className="tabs"
            value={this.state.value}
            onChange={this.tabChangeHandler}
          >
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>
          {this.state.value === 0 && (
            <TabContainer>
              <FormControl required>
                <InputLabel htmlFor="UserName">Username</InputLabel>
                <Input id="UserName" type="text"></Input>
              </FormControl>
              <br />
              <br />
              <FormControl required>
                <InputLabel htmlFor="Password">Password</InputLabel>
                <Input id="Password" type="password"></Input>
              </FormControl>
              <br />
              <br />
              <Button variant="contained" color="primary">
                LOGIN
              </Button>
            </TabContainer>
          )}
        </Modal>
      </div>
    );
  }
}

export default Header;
