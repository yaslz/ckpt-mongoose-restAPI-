import {
  FAIL_CONTACT,
  LOAD_CONTACT,
  ONE_CONTACT,
  SUCC_CONTACT,
} from "../ActionType/contact";

const initialState = {
  listContacts: [],
  errors: null,
  load: false,
  contactToGet: {},
};

const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_CONTACT:
      return { ...state, load: true };
    case SUCC_CONTACT:
      return { ...state, load: false, listContacts: payload.listContacts };
    case FAIL_CONTACT:
      return { ...state, load: false, errors: payload };
    case ONE_CONTACT:
      return { ...state, load: false, contactToGet: payload.contactToGet };
    default:
      return state;
  }
};

export default contactReducer;
