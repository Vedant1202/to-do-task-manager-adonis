function loginHandler(data, successCallback, errorCallback) {
    $.ajax({
        type: 'POST',
        url: `${apiUrl}auth/login`,
        beforeSend(xhr) {
            xhr.setRequestHeader('Access-Control-Allow-Headers', '*');
        },
        data,
        success(data) {
            successCallback(data);
        },
        error(error) {
            errorCallback(error);
        },
        dataType: 'json',
    });
}

function logoutHandler() {
    if (checkData('user')) {
        deleteData('user');
    }
    alert('You have been logged out.');
    Nav.assign('login');
}

function signupHandler(data, successCallback, errorCallback) {
    $.ajax({
        type: 'POST',
        url: `${apiUrl}auth/register`,
        beforeSend(xhr) {
            xhr.setRequestHeader('Access-Control-Allow-Headers', '*');
        },
        data,
        success(data) {
            successCallback(data);
        },
        error(error) {
            errorCallback(error);
        },
        dataType: 'json',
    });
}
