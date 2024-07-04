import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
} from "../contacts/operations";
import { logOutThunk } from "../auth/operations";

const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,

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
      .addCase(logOutThunk.fulfilled, (state) => {
        state.contacts.items = [];
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

export const contactsReducer = contactsSlice.reducer;
