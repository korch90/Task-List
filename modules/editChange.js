import addEvent from "../modules/addEvent.js"
import TasksArray from "./getTask.js"
import createtable from './createtable.js'
import createtable2 from './createtable2.js'
let arrIndex
btnEdit.addEventListener("click", editChanges)


function editChanges() {


  editTaskWindow.style.display = "none"
  arrIndex = localStorage.getItem('arrIndex')
  TasksArray.splice(arrIndex, 1, {
    Name: editTaskWindow.children[0].value,
    Created: TasksArray[arrIndex].Created,

    Category: editTaskWindow.children[1].value,
    Content: editTaskWindow.children[2].value.replace(/[0-9]/ig, ""),
    Dates: new Date().toDateString(),
    isArhivate: false
  })

  table.innerHTML = createtable()
  addEvent()
  editTaskWindow.children[0].value = ''
  editTaskWindow.children[1].value = ''
  editTaskWindow.children[2].value = ''
  table2.innerHTML = createtable2()

}





export default editChanges