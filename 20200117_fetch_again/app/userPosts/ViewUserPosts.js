import { TemplaterUserPosts } from "./TemplaterUserPosts.js";

export class ViewUserPosts{
    constructor(listenerFunc){
        this.template = new TemplaterUserPosts();
        document.body.insertAdjacentHTML('beforeend', this.template.getHtml());
        this.domPosts = document.querySelector('.modal-content');
        this.domModal = document.querySelector('.main-modal');
        this.classname = 'is-active';

        
        document.querySelector('.modal-close').addEventListener('click', listenerFunc);
    }

    renderPostModal(posts){
        this.domModal.classList.toggle(this.classname, true);
        console.log(posts);
        console.log(this.domPosts);
        this.domPosts.innerHTML = posts.map(post => `<p>${post}</p>`).join('');
        
    }

    closeModal(){
        this.domModal.classList.toggle(this.classname, false);
    }
}