export class App extends React.Component{
    render(){
        return ( <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="https://img.icons8.com/material/4ac144/256/user-male.png" class="card-img" alt="author icon">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Nobody</h5>
              <p class="card-text">test message</p>
              <p class="card-text"><small class="text-muted">23.03.2020 </small></p>
            </div>
          </div>
        </div>
      </div>);
    }
}