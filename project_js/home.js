import { middle, dispalyHomeInput } from './formHandler.js';
import * as common from './Common.js'



let readMore = document.getElementById('readMore')
readMore.onclick = function() {
    targetNavigate('allPeople.html');
}

function targetNavigate(target) {
    let replacedItem = window.location.href.split('/')[4];
    let urlNavigateTo = window.location.href.replace(replacedItem, target);
    window.location.replace(urlNavigateTo);
}



common.addEvent(common.highLightNav);
common.addEvent(middle);
common.addEvent(dispalyHomeInput);