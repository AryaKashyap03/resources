import React, { useState, useEffect } from 'react';

const AnimatedText = () => {
  const [text, setText] = useState('');
  const fullText = "Your Mental Health Is Important!"; // The full text to type
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150;
    const timeout = setTimeout(() => {
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);
      setText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Wait before deleting
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setIndex(0);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

  return <h2 className="animated-text">{text}</h2>;
};

export default AnimatedText;