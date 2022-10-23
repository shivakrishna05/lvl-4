/* eslint-disable no-undef */
const todoList = () => {
  all = [];
  const add = (tI) => {
    all.push(tI);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  let today = new Date().toLocaleDateString("en-CA");
  // let today = new Date().toISOString().split("T")[0];

  const overdue = () => {
    return all.filter((td) => {
      return td.dueDate < today;
    });
  };

  const dueToday = () => {
    return all.filter((td) => {
      return td.dueDate === today;
    });
  };

  const dueLater = () => {
    return all.filter((td) => {
      return td.dueDate > today;
    });
  };

  const toDisplayableList = (list) => {
    return list
      .map((td) => {
        display_status = td.completed ? "[x]" : "[ ]";
        display_date = td.dueDate == today ? "" : td.dueDate;

        return `${display_status} ${td.title} ${display_date}`;
      })
      .join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;

