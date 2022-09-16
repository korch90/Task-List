import TasksArray from "./getTask.js"
import createtable from './createtable.js'
import addEvent from "./addEvent.js";

function sortItems1(e) {
  let result = []
  if (e.target.innerHTML == "Name") {

    result = TasksArray.sort((a, b) => {
      let ta = 0,
        tb = 0;

      const test = (a, b) => {
        if (a === b) return 0;
        if (typeof a == 'string') return (a < b) ? -1 : 1
        return Math.sign(a - b);
      }

      ta += test(a.Name, b.Name)
      tb += test(b.Name, a.Name)


      return (ta >= tb ? 1 : -1)
    });

  } else if (e.target.innerHTML == "Created") {

    result = TasksArray.sort((a, b) => {
      let ta = 0,
        tb = 0;

      const test = (a, b) => {
        if (a === b) return 0;
        if (typeof a == 'string') return (a < b) ? -1 : 1
        return Math.sign(a - b);
      }

      ta += test(a.Created, b.Created)
      tb += test(b.Created, a.Created)


      return (ta >= tb ? 1 : -1)
    });

  } else if (e.target.innerHTML == "Category") {

    result = TasksArray.sort((a, b) => {
      let ta = 0,
        tb = 0;

      const test = (a, b) => {
        if (a === b) return 0;
        if (typeof a == 'string') return (a < b) ? -1 : 1
        return Math.sign(a - b);
      }

      ta += test(a.Category, b.Category)
      tb += test(b.Category, a.Category)


      return (ta >= tb ? 1 : -1)
    });

  } else if (e.target.innerHTML == "Content") {

    result = TasksArray.sort((a, b) => {
      let ta = 0,
        tb = 0;

      const test = (a, b) => {
        if (a === b) return 0;
        if (typeof a == 'string') return (a < b) ? -1 : 1
        return Math.sign(a - b);
      }

      ta += test(a.Content, b.Content)
      tb += test(b.Content, a.Content)


      return (ta >= tb ? 1 : -1)
    });

  } else if (e.target.innerHTML == "Dates") {

    result = TasksArray.sort((a, b) => {
      let ta = 0,
        tb = 0;

      const test = (a, b) => {
        if (a === b) return 0;
        if (typeof a == 'string') return (a < b) ? -1 : 1
        return Math.sign(a - b);
      }

      ta += test(a.Dates, b.Dates)
      tb += test(b.Dates, a.Dates)


      return (ta >= tb ? 1 : -1)
    });

  }
  table.innerHTML = createtable()
  addEvent()
}
export default sortItems1