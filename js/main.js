window.addEventListener('DOMContentLoaded', function() {

    let checkbox = document.getElementById('rememberMe'),
        reset = document.getElementById('reset'),
        name = document.getElementById('name'),
        pass = document.getElementById('password');

    if (localStorage.getItem('isChecked') === 'true') {
        checkbox.checked = true;
    }

    checkbox.addEventListener('click', function() {
        localStorage.setItem('isChecked', true);
        if (checkbox.checked == false) {
            localStorage.removeItem('isChecked');
        }
    });

    name.onchange = function() {
        localStorage.setItem('name', this.value);
    };

    pass.onchange = function() {
        localStorage.setItem('password', this.value);
    };

    if (localStorage.getItem('name').length > 0 ||
        localStorage.getItem('password').length > 0) {
        name.value = localStorage.getItem('name');
        pass.value = localStorage.getItem('password');
    }

    reset.addEventListener('click', function() {
        localStorage.clear();
    });

});