import React from 'react';

const FAQ = () => {
  // Simulate some FAQ content
  const faqItems = [
    { title: 'What is anxiety?', text: 'Anxiety is a feeling of worry, nervousness, or unease.' },
    { title: 'How to manage stress?', text: 'Stress can be managed with relaxation techniques.' },
    { title: 'What is self-care?', text: 'Self-care is any activity that helps you maintain your mental health.' },
    { title: 'How can I help someone with depression?', text: 'Supporting someone with depression involves listening and being there.' },
    { title: 'What are the signs of burnout?', text: 'Burnout symptoms include exhaustion, detachment, and reduced performance.' },
  ];

  return (
    <div className="faq-cards">
      {faqItems.map((item, index) => (
        <div className="faq-card" key={index}>
          <div className="faq-card-content">
            <h5 className="faq-card-title">{item.title}</h5>
            <p className="faq-card-text">{item.text}</p>
            <p className="faq-card-updated">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
