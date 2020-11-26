import { targetNavigate } from "./Common.js";

export { middle, submitForm, dispalyHomeInput };

function middle() {
    if (!document.getElementById('buttonSet')) return;
    let submitButton = document.getElementById('buttonSet');
    submitButton.onclick = function() {
        submitForm()
    }
}

function submitForm() {
    new Promise((res, rej) => {
        res(ValidateForm())
    }).then(userData => (userData) ? formSend(userData) : '');

}

function ValidateForm() {
    let userData = [];
    if (document.getElementsByClassName('form') !== 0) {
        let data = document.getElementsByTagName('fieldset')[0].getElementsByClassName('user-info');
        for (let i = 0; i < data.length; i += 1) {
            if (!data[i].value) return alertMessage('请完善表格信息');
            userData.push(data[i].value);
        }
        // 代码需优化！！！。
        if (userData.length === 3) {
            if (valiadPhoneNumber(userData[1])) return userData;

        } else {
            if (valiadPhoneNumber(userData[0])) return userData;
        }
    }
}

function valiadPhoneNumber(phoneNumber) {
    let valiadPhoneNumber = new RegExp("^1[3456789]\\d{9}");
    if (!valiadPhoneNumber.test(phoneNumber)) {
        alertMessage('请输入正确格式的号码');

    } else {
        resetFormValue()
        return true
    }
}

function dispalyHomeInput() {
    if (window.location.pathname.indexOf('home') !== -1) {
        if (document.getElementsByClassName("main-filedset")) {
            let mid = document.getElementsByClassName("main-filedset")[0];

            mid.onmouseover = function() {
                let displayInput = document.getElementsByTagName('input');
                for (let i = 0; i < 3; i += 1) {
                    displayInput[i].style.border = '1px solid black'
                }
            }
            mid.onmouseleave = function() {
                let displayInput = document.getElementsByTagName('input');
                for (let i = 0; i < 3; i += 1) {
                    displayInput[i].style.border = 'none'
                }
            }
        }
    }
}

// 清除value里的内容 
function resetFormValue() {
    let Forms = document.forms[0];
    for (let i = 0; i < Forms.elements.length; i += 1) {
        let element = Forms.elements[i];
        element.value = ''
    }

    //后端 先传到数据库看有没有这个号码， 有的话提示已被暂用
    //没有的话提示成功。
    // 验证不成功，展示错误信息提示。
}

async function alertMessage(textContent, styleChange) {
    let div = document.createElement('div');
    div.setAttribute('id', 'Message');
    div.textContent = textContent;
    (!styleChange) ? div.style.backgroundColor = '#DC3545': div.style.backgroundColor = '#28A745'
    let parentDiv = document.getElementsByClassName('main-register')[0]
    let target = document.getElementsByClassName('user-info-form')[0];
    parentDiv.insertBefore(div, target);

    await new Promise((res, rej) => {
        setTimeout(function() {
            res(parentDiv.removeChild(div))
        }, 1500)
    })
}


// //对低版本ie进行兼容处理 提交表单给后端.

async function formSend(userData) {
    await alertMessage('提交成功', true);
    localStorage.setItem('flag', true);
    localStorage.setItem('userName', userData[1])
    location.pathname.indexOf('home.html') !== -1 ? location.reload() : targetNavigate('home.html');
}

//formhandler在其他地方我没有调用， 下面的部分是怎么会execute的呢？？？？
console.log('????')
localStorage.getItem('flag') ? document.getElementsByClassName('main-hello-container')[0].style.display = 'none' : '';

// let xhr;
// if (window.XMLHttpRequest) {
//     xhr = new XMLHttpRequest();
// } else {
//     xhr = new ActiveXObject('Microsoft.XMLHTTP');
// }
// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         // 获取从后端来的信息。
//         console.log(xhr.response)
//     }
// }
// xhr.open('POST', 'http://localhost:3001', true);
// xhr.send(JSON.stringify(userData))