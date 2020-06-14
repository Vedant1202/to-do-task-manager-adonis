function getTasks(handler, data = { id: getData('user').user.userId }) {
    const tokenString = `Bearer ${getData('user').access_token.token}`;

    $.ajax({
        type: 'GET',
        url: `${apiUrl}tasks/fetch`,
        beforeSend(xhr) {
            xhr.setRequestHeader('Authorization', tokenString);
            xhr.setRequestHeader('Access-Control-Allow-Headers', '*');
        },
        data,
        success(data) {
            if (data) {
                // console.log(data);
                handler(data);
            }
        },
        error(error) {
            console.log(error);
            handler([]);
        },
        dataType: 'json',
    });
}

function createTask(data) {
    const tokenString = `Bearer ${getData('user').access_token.token}`;

    $.ajax({
        type: 'POST',
        url: `${apiUrl}tasks/add`,
        beforeSend(xhr) {
            xhr.setRequestHeader('Authorization', tokenString);
            xhr.setRequestHeader('Access-Control-Allow-Headers', '*');
        },
        data,
        success(data) {
            alert('Task created successfully');
            window.location.reload();
        },
        error(error) {
            alert('Error! Task was not created.');
            console.log(error);
        },
        dataType: 'json',
    });
}

function updateTask(data) {
    const tokenString = `Bearer ${getData('user').access_token.token}`;

    $.ajax({
        type: 'PUT',
        url: `${apiUrl}tasks/update`,
        beforeSend(xhr) {
            xhr.setRequestHeader('Authorization', tokenString);
            xhr.setRequestHeader('Access-Control-Allow-Headers', '*');
        },
        data,
        success(data) {
            alert('Task updated successfully');
            window.location.reload();
        },
        error(error) {
            alert('Error! Task was not updated.');
            console.log(error);
        },
        dataType: 'json',
    });
}

function deleteTask(data) {
    const tokenString = `Bearer ${getData('user').access_token.token}`;

    $.ajax({
        type: 'DELETE',
        url: `${apiUrl}tasks/delete`,
        beforeSend(xhr) {
            xhr.setRequestHeader('Authorization', tokenString);
            xhr.setRequestHeader('Access-Control-Allow-Headers', '*');
        },
        data,
        success(data) {
            alert('Task deleted successfully');
            window.location.reload();
        },
        error(error) {
            alert('Error! Task was not deleted.');
            console.log(error);
        },
        dataType: 'json',
    });
}
