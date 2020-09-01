import React from 'react';

export default function FormMessage({ message, successful }) {
  const status = successful ? 'success' : 'error';

  return (
    <div className={`form-message-box fade-in ${status}`}>
      <p>{message}</p>
    </div>
  );
}
