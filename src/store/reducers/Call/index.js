const INITIAL_STATE = {
  newCall: {
    title: "",
    description: "",
    priority: 1,
    attachs: [],
  },
};

export default function call(store = INITIAL_STATE, action) {
  switch (action.type) {

    case "SET_NEWCALL_DATA":
      return {
        ...store,
        newCall: {
          ...store.newCall,
          ...action.payload,
        },
      };

    case "SET_NEWCALL_PRIORITY":
      return {
        ...store,
        newCall: {
          ...store.newCall,
          priority: action.payload,
        },
      };

    case "SET_NEWCALL_ATTACHS":
      return {
        ...store,
        newCall: {
          ...store.newCall,
          attachs: [...store.newCall.attachs, ...action.payload],
        },
      };

    default:
      return store;
  }
}
