import React, { useState, useEffect } from 'react';

export default function DateTime() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const dayName = dateTime.toLocaleDateString('en-US', { weekday: 'short' });
  const dateSlash = dateTime.toLocaleDateString('en-US');
  const formattedDate = `${dayName} ${dateSlash}`;

  const formattedTime = dateTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  return (
    <div>
      <span>{formattedDate}</span>
      <span>{'\u00A0\u00A0\u00A0\u00A0\u00A0'}</span>
      <span>{formattedTime}</span>
    </div>
  );
}