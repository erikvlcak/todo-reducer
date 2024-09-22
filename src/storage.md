function handleRemove(removeId) {
  setList(list.filter((f) => f.id != removeId));
}

function handleAddNewUser() {
  setList([...list, { id: list.length + 1, name: newUser.name, age: newUser.age }]);
}

function handleChange(changeId) {
  setList(
    list.map((item) => {
      if (item.id == changeId) {
        return { ...list, id: item.id, name: newUser.addName, age: newUser.addAge };
      } else {
        return item;
      }
    })
  );
}
