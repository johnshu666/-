import * as common from './Common.js'

common.addEvent(common.highLightNav);
common.addEvent(getAllPeople)
common.addEvent(getReadMeButton);

let backButton = document.getElementById('backToHome');
backButton.onclick = function() {
    common.targetNavigate('home.html');
}

function getReadMeButton() {
    let readMore = document.querySelectorAll('#readMore');
    for (let i = 0; i < readMore.length; i++)
        readMore[i].onclick = function() {
            common.targetNavigate('user-detail.html')
        }
}



function getAllPeople() {
    if (window.location.pathname.indexOf('allPeople.html') === -1)
        return;
    let middle = "../image/home-main-gril/main-girl-"
    let array = [{
            img: middle + "one.jpg",
            address: "NYC"
        },
        {
            img: middle + "two.jpg",
            address: "Washington"
        },
        {
            img: middle + "three.jpg",
            address: "Chicago"
        },
        {
            img: middle + "four.jpg",
            address: "Pennsylvania"
        },
        {
            img: middle + "five.jpg",
            address: "Texas"
        },
        {
            img: middle + "six.jpg",
            address: "IOWA"
        },

    ]
    for (let i = 0; i < array.length; ++i) {
        let grandParents = document.getElementsByClassName('main-client')[0];
        let parents = document.createElement('div');
        parents.setAttribute('class', "main-client-info")

        let child1 = document.createElement('img');
        let child2 = document.createElement('p');
        let child3 = document.createElement('button');
        child3.textContent = "Read Me";
        child3.setAttribute('id', 'readMore');

        child1.setAttribute('src', array[i]['img']);
        child2.textContent = array[i]['address'];

        parents.append(child1, child2, child3);

        grandParents.appendChild(parents);
    }
}
