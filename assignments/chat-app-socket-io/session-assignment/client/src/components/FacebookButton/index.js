import './facebook.css';

import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';

import config from '../../conf/dev';
import connection from '../../socket';

import _ from 'lodash';

export default class FacebookButton extends Component {
  constructor() {
    super();

    this.state = {
      authenticated: false
    };

    this.facebookCallback = this.facebookCallback.bind(this);

  }

  facebookCallback(response) {
    let authenticated = !_.isNil(response.id);
    this.props.updateUser(response);
    connection.emit('init', response)
    this.setState({authenticated});
  }

  render() {
    if(!this.state.authenticated) {
      return (
        <div id="facebook-button-wrapper">
          <FacebookLogin
            appId={config.FB_APP_ID}
            autoLoad={true}
            fields="name,email,picture"
            callback={this.facebookCallback} />
        </div>
      );
    }

    return null;
  }

}
