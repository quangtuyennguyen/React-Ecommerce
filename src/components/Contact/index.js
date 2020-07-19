import React, { useEffect } from 'react';
import ContactForm from './ContactForm';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact - Shopping';
  }, []);

  return (
    <section id="section-contact">
      <div className="row">
        <div className="box-form">
          <div className="form__heading u-center-text">
            <h3 className="heading-title--main">Get in touch</h3>
            <p className="form__desc">
              Fundpress site thoughtfully designed for real humans which means
              the best user experience for your entire community of donors,
              fundraisers, customers, and staff.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
