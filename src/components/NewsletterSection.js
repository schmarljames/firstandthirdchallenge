import React, { useEffect, useState } from 'react';
import FormMessage from './FormMessage';
import Loading from './Loading';
import NotificationList from './NotificationList';
import NotificationForm from './NotificationForm';

export default function NewsletterSection({ data }) {
  const [selectedNotes, setSelectedNotes] = useState([]);
  const [email, setEmail] = useState(null);
  const [unSubscribe, setUnsubscribe] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formMessageState, setFormMessageState] = useState({ show: false, successful: false, message: '' });

  const changeSelectNotifs = (e) => {
    const target = e.currentTarget;
    const isChecked = e.currentTarget.checked;
    const value = e.currentTarget.value;
    const currentSelectedNotes = [...selectedNotes];

    if(!isChecked && selectedNotes.indexOf(value) > -1) {
      currentSelectedNotes.splice(selectedNotes.indexOf(value), 1);
      setSelectedNotes(currentSelectedNotes);
    } else if (isChecked) {
      currentSelectedNotes.push(value);
      setSelectedNotes(currentSelectedNotes);
    }
  };

  const setEmailAddress = (e) => setEmail(e.currentTarget.value);
  const toggleUnsubscribe = (e) => setUnsubscribe(e.currentTarget.checked);

  const submitForm = () => {
    setFormMessageState({ show: false });

    if(!selectedNotes.length && !unSubscribe) {
      setFormMessageState({ show: true, successful: false, message: 'Must select one of the notifications or unsubscribe option.'});
      return;
    }

    if(!validateEmail(email)) {
      setFormMessageState({ show: true, successful: false, message: 'Must have a valid email.'});
      return;
    }

    if((selectedNotes.length || unSubscribe) && email) {
      setFormLoading(true);
      const payload = { email, selectedNotes, unSubscribe };

      setTimeout(() => {
        setFormLoading(false);
        setFormMessageState({ show: true, successful: true, message: 'Your form has been submitted!'})
      },2000);
    }
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <div className="notification-form-wrap">
      <NotificationList data={data} changeSelectNotifs={changeSelectNotifs} />
      <NotificationForm
        formMessageState={formMessageState}
        setEmailAddress={setEmailAddress}
        formLoading={formLoading}
        submitForm={submitForm}
        toggleUnsubscribe={toggleUnsubscribe}
      />
    </div>
  );
}
