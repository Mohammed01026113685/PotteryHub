import React, { useState, useEffect } from 'react';

const WelcomeMessage = () => {
  const messages = [
    'تعلم مهارات جديدة',
    'استدامة بيئية',
    'تسويق منتجاتك',
    'دعم الحرفيين'
  ];

  const [currentMessage, setCurrentMessage] = useState(messages[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage(messages[index]);
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [index, messages]);

  return <b>{currentMessage}</b>;
};

export default WelcomeMessage;
