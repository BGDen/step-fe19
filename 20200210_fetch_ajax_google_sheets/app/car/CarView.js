export class CarView{
    constructor(searchFunc){
        this.carContainer = document.querySelector('.main-cars');
        this.inputSearch = document.querySelector('.inp-search');
        this.btnSearch = document.querySelector('.btn-search');
        this.btnSearch.addEventListener('click', searchFunc);
    }
    renderCars(data){
        this.carContainer.innerHTML = data.map(car => this.getCar(car)).join(' ');
    }

    getCar(car){
        return `<div class="card" style="width: 18rem;">
        <img src="${car.image}" class="card-img-top" alt="car">
        <div class="card-body">
          <h5 class="card-title">${car.name}</h5>
          <p class="card-text">2006</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">$${car.price}</li>
          <li class="list-group-item">${car.km} тыс. км</li>
          <li class="list-group-item">${car.author}</li>
        </ul>
        <div class="card-body">
          <a href="${car.link}" class="card-link" target="_blank">Car link</a>
        </div>
      </div>`;
    }

    get searchValue(){
      return this.inputSearch.value;
    }
}