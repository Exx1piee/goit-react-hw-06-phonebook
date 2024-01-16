import React from "react";
import { ContactForm } from "./ContactForm/contactform";
import { ContactList } from "./ContactList/contactlist";
import { Filter } from "./Filter/filter";
import css from './Styles.module.css';

export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        fontSize: 20,
        color: '#010101',
        margin: 20
      }}
    >
      <div>
  <h1 className={css.phonebook}>Phonebook</h1>
  <ContactForm />

  <h2 className={css.contacts}>Contacts</h2>
  <Filter />
  <ContactList />
</div>
    </div>
  )
};