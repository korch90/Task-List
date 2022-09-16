import TasksArray from "./getTask.js"
function createtable() {

  let res2=TasksArray.filter((el) => {
    return el.isArhivate == false
  })


    let res = res2.map(el =>
         `<tr class="tableTr">
<th class="tableTh" >${el.Name}</hd>
<td class="tableTd">${el.Created}</td>
<td class="tableTd">${el.Category}</td>
<td class="tableTd">${el.Content}</td>
<td class="tableTd">${el.Dates}</td>
<th > <img src="/img/tresh.png"  alt="tresh" class="imgIcon" >
  <img src="/img/pen (1).png" class="imgIcon" alt="pen" > 
  <img src="/img/inbox.png" class="imgIcon" alt="inbox" ></th>
</tr>`)

    return `<thead class="tableHead" >
    <tr id="sortItem" >
      <th class="sortTopics" >Name</th>
      <th class="sortTopics" data-type="string">Created</th>
      <th class="sortTopics" >Category</th>
      <th class="sortTopics" >Content</th>
      <th class="sortTopics" >Dates</th>
      <th > <img src="/img/tresh.png"  alt="#" class="imgIcon"  id="trashIcon">
         <img src="/img/pen (1).png" class="imgIcon" alt="#"  id="penIcon"> 
         <img src="/img/inbox.png" class="imgIcon" alt="#"  id="inboxIcon"></th>
    </tr>
  </thead>
  <tbody class="tableBody">
  ${res.join("")}
  </tbody>
  `
 
}
export default createtable
