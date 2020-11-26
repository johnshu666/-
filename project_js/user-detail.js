import * as common from './Common.js'

console.log(backToAllPeople)

let backButton = document.getElementById('backToAllPeople');
backButton.onclick = function() {
    common.targetNavigate('allPeople.html')
}