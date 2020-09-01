import React, { useEffect, useState } from 'react';
import FormMessage from './FormMessage';
import Loading from './Loading';
import NotificationList from './NotificationList';
import NotificationForm from './NotificationForm';

export default function NewsletterSection({
  formMessageState,
  setEmailAddress,
  formLoading,
  submitForm,
  toggleUnsubscribe }) {

  return (
    <div className="notification-form">
      { formMessageState.show &&
        <div className="form-group">
          <FormMessage
            successful={formMessageState.successful}
            message={formMessageState.message}
          />
        </div>
      }
      <div className="form-group">
        <input className="form-control" type="email" placeholder="Enter Email" onChange={setEmailAddress} />
      </div>
      <div className="form-group">
        <button
          className="submit btn btn-space btn-primary"
          disabled={formLoading}
          onClick={submitForm}>
            Subscribe
        </button>
      </div>
      <div className="form-group">
        <input className="unsubscribe" type="checkbox" onChange={toggleUnsubscribe} />
        <span>I do not want to receive information about future newsletters.</span>
      </div>
    </div>
  );
}
