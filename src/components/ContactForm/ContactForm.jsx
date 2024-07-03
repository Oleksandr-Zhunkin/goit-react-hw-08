import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "../ContactForm/ContactForm.module.scss";
import { useId } from "react";
import { contactSchema } from "../../schema/contactSchema";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";

import { nanoid } from "nanoid";
import { addContact } from "../../redux/contactsOps";

export const ContactForm = () => {
  const nameId = useId();
  const emailId = useId();

  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleSubmit = (value, actions) => {
    const action = addContact({
      id: nanoid(),
      name: value.name,
      number: value.number,
      createdAt: Date.now(),
    });

    dispatch(action);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={contactSchema(contacts)}
    >
      <Form className={s.wrapper}>
        <label className={s.label} htmlFor={nameId}>
          Name
        </label>
        <Field type="text" name="name" className={s.input} />
        <ErrorMessage
          name="name"
          component="span"
          className={s.error}
          id={nameId}
        />
        <label className={s.label} htmlFor={emailId}>
          Number
        </label>
        <Field type="text" name="number" className={s.input} />
        <ErrorMessage
          name="number"
          component="span"
          className={s.error}
          id={emailId}
        />
        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
