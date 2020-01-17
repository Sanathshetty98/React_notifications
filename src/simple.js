import React, { Component } from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import 'bootstrap/dist/css/bootstrap.css';

class simple extends Component{
    notification(){
        NotificationManager.info('Info message');
        NotificationManager.success('Success message', 'Title here')
        NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
        NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback')
        });
    }

    render(){
        return(
            <div>
                <hr />
                <button className="btn btn-outline-warning btn-lg" onClick={this.notification}> click me!</button>
                <NotificationContainer />
            </div>
        )
    }    
}
export default simple;