import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";

const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
  filters: {
    name: "",
  },
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  selectors: {
    selectContacts: (state) => state.contacts.items,
    selectLoading: (state) => state.contacts.loading,
    selectError: (state) => state.contacts.error,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.contacts.items.findIndex(
          (item) => item.id === action.payload
        );
        state.contacts.items.splice(index, 1);
      })
      .addMatcher(
        (action) => action.type.endsWith("pending"),
        (state) => {
          state.contacts.loading = true;
          state.contacts.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("fulfilled"),
        (state) => {
          state.contacts.loading = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("rejected"),
        (state, action) => {
          state.contacts.loading = false;
          state.contacts.error = action.payload;
        }
      );
  },
});

export const selectFilteredContacts = createSelector(
  [contactsSlice.selectors.selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const contactsReducer = contactsSlice.reducer;
export const { selectContacts, selectLoading, selectError } =
  contactsSlice.selectors;
export const { deleteContactById } = contactsSlice.actions;
