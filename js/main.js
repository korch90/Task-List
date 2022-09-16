import TasksArray from '../modules/getTask.js'
import createtable from '../modules/createtable.js'
import createtable2 from '../modules/createtable2.js'
 import editChanges from '../modules/editChange.js'
import addEvent from "../modules/addEvent.js"
import changeTask from "../modules/changeTask.js"
import showArhive from "../modules/showArhive.js"
import hiddenArhive from "../modules/hiddenArhive.js"


const document=window.document
const table=document.getElementById("table")
const table2=document.getElementById("table2")
const btn=document.getElementById("btn")
const btnSave=document.getElementById("btnSave")
const newTaskWindow=document.getElementById("newTaskWindow")
const table3=document.getElementById("table3")
const btnArhiveClose=document.getElementById("btnArhiveClose")
btnArhiveClose.addEventListener("click", hiddenArhive)
const btnArhive =document.getElementById("btnArhive")
btnArhive.addEventListener("click", showArhive)


table.innerHTML=createtable()
table2.innerHTML=createtable2()


try {
    addEvent()
  } catch {
  console.log("error")
  } finally {
    addEvent()
  }



btn.addEventListener("click" ,createNewNote)
function createNewNote(){
    newTaskWindow.style.display="flex"
}





export default changeTask

