import React, { useEffect, useState } from 'react';

export default function NotificationList({ data, changeSelectNotifs }) {

  return (
    <ul className="notification-list">
      {
        data.map(notification => (
          <li className="entry" key={notification.id}>
            <div className="notif-section image"></div>
            <div className="detail-wrap">
              <div className="notif-section details">
                <h3>{notification.title}</h3>
                <p>{notification.description}</p>
              </div>
              <div className="notif-section checkbox-section">
                <div className="checkbox-wrap">
                  <input
                    id={`notif-select-${notification.id}`}
                    type="checkbox"
                    name="notifications[]"
                    onChange={changeSelectNotifs}
                    value={notification.id}
                  />
                  <label htmlFor={`notif-select-${notification.id}`}></label>
                </div>
              </div>
            </div>
          </li>
        ))
      }
    </ul>
  );
}
