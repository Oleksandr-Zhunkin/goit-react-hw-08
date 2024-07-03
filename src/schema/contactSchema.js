import * as Yup from "yup";

const nameRegExp = /^[A-Za-zА-Яа-яІіЇїЄєҐґ' ]+$/;
const phoneRegExp = /^[\d\(\)\-+]+$/m;

export const contactSchema = (contacts) =>
  Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters!")
      .max(50, "Name must be less than 50 characters!")
      .matches(nameRegExp, "Name must consist only english of letters!")
      .required("Name is required!")
      .test("unique-name", "this name already exists!", function (value) {
        return !contacts.find(
          (contact) => contact.name.toLowerCase() === value.toLowerCase()
        );
      }),
    number: Yup.string()
      .min(7, "Name must be at least 7 characters!")
      .max(14, "Phone must be less than 14 characters!")
      .matches(phoneRegExp, "Phone number is not valid!")
      .required("Phone is required!")
      .test("unique-number", "this number already exists!", function (value) {
        return !contacts.find((contact) => contact.number === value);
      }),
  });
