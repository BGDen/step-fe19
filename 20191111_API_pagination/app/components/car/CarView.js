export class CarView{
    constructor(car, link){
        this.dom = link;
        this.car = car;
    }

    renderCar(car){
        this.dom.innerHTML += `<div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${this.car.BRAND}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${this.car.VEHICLENUMBER}</h6>
        <p class="card-text"><strong>${this.car.COLOR}</strong></p>
        <p class="card-text">BODYNUMBER <u>${this.car.BODYNUMBER}</u></p>
        <p class="card-text">ENGINENUMBER <u>${this.car.ENGINENUMBER}</u></p>
        <p class="card-text"><em>${this.car.THEFT_DATA}</em></p>
        <p class="card-text">${this.car.OVD}</p>
    </div>
</div>`;
    }
}