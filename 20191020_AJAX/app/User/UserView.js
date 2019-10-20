export class UserView{
    constructor(clickButtonFunction){
        this.users = document.querySelector('.users');
        this.userList = document.querySelector('.userList');
        this.createButton(clickButtonFunction);
    }

    createButton(func){
        const btn = document.createElement('button');
        btn.innerText = 'CREATE';
        btn.addEventListener('click', func);
        this.users.insertBefore(btn, this.userList);
    }

    renderUser(data){
        console.log(data);
        this.userList.innerHTML += `
<div class="user">
    <div class="img"><img src="${data.picture.large}" alt="userphoto"></div>
    <h4 class="name">${data.name.first}</h4>
    <h5>${data.dob.age}</h5>
</div>`;
    }
}