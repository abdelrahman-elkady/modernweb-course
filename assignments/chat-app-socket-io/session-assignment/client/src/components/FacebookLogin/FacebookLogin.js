import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';

import config from '../../conf/dev';

export default class FacebookButton extends Component {
  constructor() {
    super();

    this.state = {
    };

    this.handleClick = this.handleClick.bind(this);
  }

  responseFacebook(response) {
    console.log(response);
  }

  handleClick() {

  }

  render() {
    return (
      <FacebookLogin
        appId={config.FB_APP_ID}
        autoLoad={true}
        fields="name,email,picture"
        onClick={this.handleClick}
        callback={this.responseFacebook} />
    );
  }

}
