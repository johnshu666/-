export { addEvent, highLightNav, targetNavigate }


// header share
customElements.define('header-component', class extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let innerHTML1 = `<nav>
        <ul>
            <li><a href="home.html"><i class="fas fa-home"></i>&nbsp主页</a></li>
            <li><a href="userCenter.html"><i class="fas fa-user"></i>&nbsp${localStorage.getItem('userName')}</a></li>
            <li><a href="allPeople.html"><i class="fas fa-compass"></i>&nbsp单身汪</a></li>
            </ul>
            </nav>
            `
        let innerHTML2 = `<nav>
        <ul>
            <li><a href="home.html">主页</a></li>
            <li><a href="signin.html">登录</a></li>
            <li><a href="userCenter.html">用户中心</a></li>
            <li><a href="allPeople.html">单身汪</a></li>
            </ul>
            </nav>
            `
        this.innerHTML = localStorage.getItem('flag') ? innerHTML1 : innerHTML2;
    }
})

// queue event
function addEvent(func) {
    let formerLoad = window.onload;
    if (typeof formerLoad !== 'function') {
        window.onload = func;
    } else {
        formerLoad();
        func();
    }
}


function highLightNav() {
    let currentNav = window.location.pathname;
    let links = document.getElementsByTagName('li')
    let link;
    let middle = localStorage.getItem('flag') ? 3 : 4
    for (let i = 0; i < middle; i += 1) {
        link = links[i].getElementsByTagName('a')[0].getAttribute('href');

        if (currentNav.indexOf(link) !== -1) {
            links[i].style.backgroundColor = '#308EFF'
        }
    }
}

function targetNavigate(target) {
    let replacedItem = window.location.href.split('/')[4];
    let urlNavigateTo = window.location.href.replace(replacedItem, target);
    window.location.replace(urlNavigateTo);
}





//注意到一个问题， 当在两个地方同时使用addeventListener时, 同时监听click， 执行在前面的addeventlistener 
// 会干扰后面的功能执行。