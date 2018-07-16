import React , { Component } from 'react';
import { FeaturedPost  } from './FeaturedPost';
import { WatchKitPost } from './WatchKitPost';
import { SwiftPost } from './SwiftPost';


export class Content extends Component {
    render() {

        return (
    
          <div id="content">
            <FeaturedPost/>
            <WatchKitPost/>
            <SwiftPost/>
          </div>
    
        )
    }
}