import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';

import config from '../../conf/dev';

export default class FacebookButton extends Component {
  constructor() {
    super();

    this.state = {
    };

  }

  facebookCallback(response) {
    console.log(response);
  }

  render() {
    return (
      <FacebookLogin
        appId={config.FB_APP_ID}
        autoLoad={true}
        fields="name,email,picture"
        callback={this.facebookCallback} />
    );
  }

}
