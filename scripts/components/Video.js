import React, { Component } from 'react';

export default class Video extends Component {

    render() {
      return (
        <div className="col-md-12">
          <iframe id="ytplayer" type="text/html" width="640" height="360"
            src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
            frameborder="0"/>
        </div>
      );
    }
  }
