export const app = `
<section class="min-vh-100 gradient-custom-2">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-12 col-xl-10">
  
          <div class="card mask-custom mb-4">
            <div id="hacker-list" class="card-body p-4 text-white">
  
              <div class="text-center pt-3 pb-2">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                  alt="Check" width="60">
                <h2 class="my-4">Task List</h2>
              </div>
              
              <div id="filters"> </div>

              <table class="table text-white mb-0">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Task Name</th>
                    <th scope="col">Assigned to</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Btns</th>
                  </tr>
                </thead>
               
                <tbody id="list" class="list"></tbody>
              </table>
              </div>
            </div>
          <table class="table text-white mb-0" id="form"></table>  
        </div>
      </div>
    </div>
  </section>`;