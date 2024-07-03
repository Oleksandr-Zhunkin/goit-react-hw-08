import { useEffect } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Container from "./components/Container/Container";
import SearchBox from "./components/SearchBox/SearchBox";
import Section from "./components/Section/Section";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import { selectError, selectLoading } from "./redux/contactsSlice";
import Loader from "./components/Loader/Loader";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";

function App() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section>
        <Container>
          <h1 className="title">Phonebook</h1>
          <div className="input_wraps">
            <ContactForm />
            <SearchBox />
          </div>
          {loading && <Loader />}
          {error && <ErrorMessage />}
          <ContactList />
        </Container>
      </Section>
    </>
  );
}

export default App;
