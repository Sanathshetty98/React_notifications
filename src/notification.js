import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import 'bootstrap/dist/css/bootstrap.css';

class notification extends React.Component {
  createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('Success message', 'Title here');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
    };
  };

  render() {
    return (
      <div>
        <hr />
        <button className='btn btn-outline-info btn-lg'
          onClick={this.createNotification('info')}>Info
        </button>
        <hr/>
        <button className='btn btn-outline-success btn-lg'
          onClick={this.createNotification('success')}>Success
        </button>
        <hr/>
        <button className='btn btn-outline-warning btn-lg'
          onClick={this.createNotification('warning')}>Warning
        </button>
        <hr/>
        <button className='btn btn-outline-danger btn-lg'
          onClick={this.createNotification('error')}>Error
        </button>
        <hr />
        <NotificationContainer/>
      </div>
    );
  }
}

export default notification;