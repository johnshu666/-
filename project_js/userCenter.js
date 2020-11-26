import * as common from './Common.js'
// import { targetNavigate } from './allPeople.js'

common.addEvent(common.highLightNav);

let logOut = document.getElementById('logOut')

if (localStorage.getItem('flag')) {
    logOut.onclick = function() {
        if (localStorage.getItem('flag')) {
            let r = confirm('确定注销登陆吗?')
            if (r === true) {
                localStorage.removeItem('flag');
                common.targetNavigate('home.html')
            } else {
                console.log('no');
            }
        }
    }
} else {
    logOut.style.display = "none"
}