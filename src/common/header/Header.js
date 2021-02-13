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
import FormHelperText from "@material-ui/core/FormHelperText";

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
  );
};

TabContainer.propTypes = {
  children: propTypes.node.isRequired,
};
class Header extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      value: 0,
      usernameRequired: "dispNone",
      passwordRequired: "dispNone",
      username: "",
      Password: "",
    };
  }

  openModalHandler = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModalHandler = () => {
    this.setState({
      modalIsOpen: false,
      usernameRequired: "dispNone",
      passwordRequired: "dispNone",
      value: 0,
    });
  };
  tabChangeHandler = (event, value) => {
    this.setState({ value });
  };
  loginClickHandler = () => {
    this.state.username === ""
      ? this.setState({ usernameRequired: "dispBlock" })
      : this.setState({ usernameRequired: "dispNone" });
    this.state.Password === ""
      ? this.setState({ passwordRequired: "displayBlock" })
      : this.setState({ passwordRequired: "displayNone" });
  };

  inputUsernameChangeHandler = (e) => {
    this.setState({ username: e.target.value });
  };
  inputPasswordChangeHandler = (e) => {
    this.setState({ Password: e.target.value });
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
                <Input
                  id="username"
                  type="text"
                  username={this.state.username}
                  onChange={this.inputUsernameChangeHandler}
                />
                <FormHelperText className={this.state.usernameRequired}>
                  <span className="red">required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <FormControl required>
                <InputLabel htmlFor="Password">Password</InputLabel>
                <Input
                  id="Password"
                  type="password"
                  Password={this.state.Password}
                  onChange={this.inputPasswordChangeHandler}
                />
                <FormHelperText className={this.state.passwordRequired}>
                  <span className="red">required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <Button
                variant="contained"
                color="primary"
                onClick={this.loginClickHandler}
              >
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
