import {
  FAIL_CONTACT,
  LOAD_CONTACT,
  ONE_CONTACT,
  SUCC_CONTACT,
} from "../ActionType/contact";
import axios from "axios";

export const getContacts = () => async (disptach) => {
  disptach({ type: LOAD_CONTACT });
  try {
    let result = await axios.get("/api/contact/all");
    disptach({ type: SUCC_CONTACT, payload: result.data });
  } catch (error) {
    disptach({ type: FAIL_CONTACT, payload: error.response });
  }
};

export const addContact = (newContact) => async (disptach) => {
  try {
    await axios.post("/api/contact/add", newContact);
    disptach(getContacts());
  } catch (error) {
    disptach({ type: FAIL_CONTACT, payload: error.response });
  }
};

export const deleteContact = (id) => async (disptach) => {
  try {
    await axios.delete(`/api/contact/${id}`);
    disptach(getContacts());
  } catch (error) {
    disptach({ type: FAIL_CONTACT, payload: error.response });
  }
};

export const editContact = (id, newContact) => async (disptach) => {
  try {
    await axios.put(`/api/contact/${id}`, newContact);
    disptach(getContacts());
  } catch (error) {
    disptach({ type: FAIL_CONTACT, payload: error.response });
  }
};

export const getContact = (id) => async (disptach) => {
  disptach({ type: LOAD_CONTACT });
  try {
    let result = await axios.get(`/api/contact/${id}`);
    disptach({ type: ONE_CONTACT, payload: result.data });
  } catch (error) {
    disptach({ type: FAIL_CONTACT, payload: error.response });
  }
};
