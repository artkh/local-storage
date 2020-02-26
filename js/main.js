window.addEventListener('DOMContentLoaded', function () {

    let checkbox = document.getElementById('rememberMe'),
        reset = document.getElementById('reset'),
        name = document.getElementById('name'),
        pass = document.getElementById('password');

    if (localStorage.getItem('isChecked') === 'true') {
        checkbox.checked = true;
        name.value = localStorage.getItem('name');
        pass.value = localStorage.getItem('password');
    } else {
        localStorage.removeItem('name');
        localStorage.removeItem('password');
        localStorage.removeItem('isChecked');
    }

    checkbox.addEventListener('click', function () {
        localStorage.setItem('isChecked', true);
        if (checkbox.checked == false) {
            localStorage.setItem('isChecked', false);
        }
    });

    name.oninput = function () {
        localStorage.setItem('name', this.value);
    };

    pass.oninput = function () {
        localStorage.setItem('password', this.value);
    };

    let person = {
        name: localStorage.getItem('name'),
        password: localStorage.getItem('password')
    };

    let serializedPerson = JSON.stringify(person); // in JSON
    localStorage.setItem(localStorage.getItem('name'), serializedPerson);
    console.log(JSON.parse(localStorage.getItem(localStorage.getItem('name'))));

    reset.addEventListener('click', function () {
        localStorage.clear();
    });

});