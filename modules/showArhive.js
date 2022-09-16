
import createArhivTable from './createArhivTable.js'
import addEvent from './addEvent.js'



function showArhive(){
  table3.innerHTML=createArhivTable()
  addEvent()
  btnArhive.style.display="none"
  btnArhiveClose.style.display="block"
}


export default showArhive
