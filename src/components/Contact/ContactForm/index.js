import React from 'react';

export default function ContactForm() {
  const handelSubmit = event => {
    event.preventDefault();
  };
  return (
    <form className="form" onSubmit={handelSubmit}>
      <div className="u-d-flex-start">
        <div className="form__group">
          <label htmlFor="name">Name</label>
          <input
            className="form__input"
            type="text"
            name="name"
            id="name"
            autoComplete="off"
          />
        </div>
        <div className="form__group">
          <label htmlFor="email">Email</label>
          <input
            className="form__input"
            type="email"
            name="email"
            id="email"
            autoComplete="off"
          />
        </div>
      </div>
      <div className="form__group">
        <label htmlFor="subject">Subject</label>
        <input
          className="form__input"
          type="text"
          name="subject"
          id="subject"
          autoComplete="off"
        />
      </div>
      <div className="form__group">
        <label htmlFor="desc">Description</label>
        <textarea
          className="form__textarea"
          name="desc"
          id="desc"
          cols={30}
          rows={10}
          autoComplete="off"
          defaultValue=""
        />
      </div>
      <button type="submit" className="btn btn--secondary btn--round">
        Get A Query
      </button>
    </form>
  );
}
