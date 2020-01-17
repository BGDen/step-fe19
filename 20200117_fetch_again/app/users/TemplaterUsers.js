export class TemplaterUsers{
    getHtml(user){
        return `
        <div class="card column is-one-quarter">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">${user.name}</p>
                  <p class="subtitle is-5">@${user.username}</p>
                  <p class="subtitle is-6">${user.email}</p>
                  <p><button class="button btn-posts" data-id="${user.id}">Show Posts</button></p>
                </div>
              </div>
            </div>
         </div>`;
    }
}