import addEvent from "./addEvent.js"
import createtable from "./createtable.js"
import TasksArray from "./getTask.js"
import createtable2 from "./createtable2.js"
import createArhivTable from "./createArhivTable.js"
let arrIndex


function changeTask(e){
  if(e.target.alt=='tresh'){
   
      let res=e.target.closest("tr").innerHTML
      let newRes=res.slice(21,res.indexOf("</")-1)
  
    for(let i=0;i<TasksArray.length;i++){
    if(TasksArray[i].Name==newRes){
   
      TasksArray.splice(i,1)
      table.innerHTML=createtable()
      addEvent()
      break
    }
    }
    table2.innerHTML=createtable2()
  }  
  if(e.target.alt=='pen'){
      editTaskWindow.style.display="flex"
      let res=e.target.closest("tr").innerHTML
      let newRes=res.slice(21,res.indexOf("</")-1)
  
    for(let i=0;i<TasksArray.length;i++){
    if(TasksArray[i].Name==newRes){
      arrIndex=i
      localStorage.setItem('arrIndex', arrIndex);
    
      editTaskWindow.children[0].value=TasksArray[i].Name
    editTaskWindow.children[1].value=TasksArray[i].Category
    editTaskWindow.children[2].value=TasksArray[i].Content
    table.innerHTML=createtable()
      break
    }
  
    }
   
  }
  if(e.target.alt=='inbox'){

      let res=e.target.closest("tr").innerHTML
      let newRes=res.slice(21,res.indexOf("</")-1)
      
      for(let i=0;i<TasksArray.length;i++){
        if(TasksArray[i].Name==newRes){
          TasksArray[i].isArhivate=true
          table.innerHTML=createtable()
          addEvent()
          break
        }
        }
        table2.innerHTML=createtable2()
        
  }
  if(e.target.alt=='outBox'){
  
    let res=e.target.closest("tr").innerHTML
    let newRes=res.slice(21,res.indexOf("</")-1)

    for(let i=0;i<TasksArray.length;i++){
      if(TasksArray[i].Name==newRes){
        TasksArray[i].isArhivate=false
        table3.innerHTML=createArhivTable()
        break
      }
      }
      table2.innerHTML=createtable2()
      table.innerHTML=createtable()
      addEvent()
}

  }
export default changeTask
