export default function listReducer(list, action) {
  switch (action.type) {
    case "add task": {
      return [...list, action.payload.newTask];
    }
    case "toggle": {
      return list.map((item) => {
        if (item.id == action.payload.toggleId) {
          return { ...item, completed: !item.completed };
        } else return item;
      });
    }
    case "remove": {
      return list.filter((item) => item.id !== action.payload.removeId);
    }
  }
}
