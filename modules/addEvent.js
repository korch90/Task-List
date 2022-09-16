
import changeTask from './changeTask.js'
import sortItems1 from './sortItems1.js'
import saveChanges from './saveChanges.js'


const tableTr=document.getElementsByClassName("tableTr")
const sortTopics=document.getElementsByClassName("sortTopics")


function addEvent(){
  for(let i=0;i<tableTr.length;i++){
      tableTr[i].addEventListener("click", changeTask)
  
  }

  for(let i=0;i<sortTopics.length;i++){
      sortTopics[i].addEventListener("click", sortItems1)
  
  }


}


export default addEvent
