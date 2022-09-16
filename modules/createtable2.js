import TasksArray from "./getTask.js"

function createtable2() {
  
  let showrandomSearchAll
  let showTaskSearchAll
  let showRes

let res=TasksArray.filter((el) => {
  return el.isArhivate == true
})

let taskSearchAll=TasksArray.filter((el) => {
  return el.Category == "Task"
})
let randomSearchAll=TasksArray.filter((el) => {
  return el.Category == "Random"
})



let arrCategoryTask=res.filter((el)=>{
return el.Category=="Task"
})

let arrCategoryRandom=res.filter((el)=>{
  return el.Category=="Random"
  })

  // let CategoryesLenght=["Task",'Random']
if(randomSearchAll.length){
   showrandomSearchAll=`<tr class="tableTr">
  <th class="tableTh" >${randomSearchAll[0].Category}</hd>
  <td class="tableTd"> ${randomSearchAll.length}</td>
  <td class="tableTd">${arrCategoryRandom.length}</td>
  </tr> `
}
if(taskSearchAll.length){
   showTaskSearchAll=`<tr class="tableTr">
  <th class="tableTh" >${taskSearchAll[0].Category}</hd>
  <td class="tableTd"> ${taskSearchAll.length}</td>
  <td class="tableTd">${arrCategoryTask.length}</td>
  </tr> `
}

showRes=showrandomSearchAll+showTaskSearchAll

return `
    <thead class="tableHead" >
    <tr>
      <th >Note Category</th>
      <th data-type="string">Active</th>
      <th >Archived</th>
    </tr> 
    </thead>
    <tbody class="tableBody">
${showRes}
    </tbody>`

 
}
export default createtable2
