import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "../ContactList/ContactList.module.scss";
import { selectFilteredContacts } from "../../redux/contactsSlice";

export const ContactList = () => {
  const filteredData = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={s.list}>
        {filteredData.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};
export default ContactList;
