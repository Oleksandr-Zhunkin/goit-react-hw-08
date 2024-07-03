import { useDispatch } from "react-redux";
import s from "../Contact/Contact.module.scss";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.item}>
      <div>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <button
        className={s.btn}
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
