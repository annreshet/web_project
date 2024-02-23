window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 1000);

    let comments = document.querySelector('.comments')
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => {
            data.forEach(comment => {
                // comments += `<div class="comment"><h3>${comment.name}</h3> <p class="commentEmail">${comment.email}</p> <p class="commentBody">${comment.body}</p></div>`
                // const listItem = document.createElement('li');
                // listItem.textContent = `Name: ${comment.name}, Email: ${comment.email}, Body: ${comment.body}`;
                // commentList.appendChild(listItem);
                const commentDiv = document.createElement('div');
                commentDiv.classList.add('comment');
                commentDiv.innerHTML = `
                    <div class="comment">
                    <h3>${comment.name}</h3>
                    <p class="commentEmail">${comment.email}</p>
                    <p class="commentBody">${comment.body}</p>
                    </div>`;
                comments.appendChild(commentDiv)
            });
        })
        .catch(error => {
            console.error('Ошибка получения данных:', error);
        });
}
