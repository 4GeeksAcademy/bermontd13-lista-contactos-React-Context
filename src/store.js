export const initialStore = () => ({
  contacts: [],
});

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "load_contacts":
      return {
        ...store,
        contacts: action.payload,
      };

    case "update_contact":
      return {
        ...store,
        contacts: store.contacts.map(c =>
          c.id === action.payload.id ? action.payload : c
        ),
      };

    case "delete_contact":
      return {
        ...store,
        contacts: store.contacts.filter(c => c.id !== action.payload),
      };

    default:
      throw new Error("Unknown action type: " + action.type);
  }
}
