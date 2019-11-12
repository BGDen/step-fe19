export class CarsListView{
    constructor(handleClickPaginator){
        this.link = document.querySelector('.carsList');
        this.pagination = document.querySelector('.pagination');
        this.handleClickPaginator = handleClickPaginator;
        
    }

    getLink(){
        return this.link;
    }

    renderPagination(len, num){
        this.pagination.removeEventListener('click', this.handleClickPaginator);
        
        this.pagination.innerHTML = `
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">${num - 1}</a></li>
        <li class="page-item active"><a class="page-link" href="#">${num}</a></li>
        <li class="page-item"><a class="page-link" href="#">${num + 1}</a></li>
        <li class="page-item"><a class="page-link" href="#">${Math.ceil(len / 10)}</a></li>`;

        this.pagination.addEventListener('click', this.handleClickPaginator);
    }

    clearList(){
        this.link.innerHTML = '';
    }
}