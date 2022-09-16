
import TasksArray from './getTask.js'
 import createtable from './createtable.js'
 import createtable2 from './createtable2.js'
import addEvent from "./addEvent.js"


btnSave.addEventListener("click" ,saveChanges)

function saveChanges(){
    newTaskWindow.style.display="none" 
     TasksArray.push( {
        Name:newTaskWindow.children[0].value,
  Created:new Date().toDateString(),
  Category:newTaskWindow.children[1].value,
  Content:newTaskWindow.children[2].value,
  Dates:"",
  isArhivate:false
  } )

   table.innerHTML=createtable()
   addEvent()
   newTaskWindow.children[0].value=''
   newTaskWindow.children[1].value=''
   newTaskWindow.children[2].value=''
   table2.innerHTML=createtable2()
}

export default saveChanges
