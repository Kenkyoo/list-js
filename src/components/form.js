export default function renderForm () {

document.getElementById('form').innerHTML = `
<div style="border-radius: .75rem; background-color: #eff1f2;">  
  <form class="d-flex justify-content-center align-items-center">  
    <td class="task_name">
        <input type="hidden" id="id-field" />
        <input  class="form-control" type="text" id="task-field" placeholder="Task" />
      </td>
      <td class="assigned_to">
        <input class="form-control" type="text" id="assigned-field" placeholder="Assigned to" />
      </td>
      <td class="priority">
        <input class="form-control" type="text" id="priority-field" placeholder="Priority" />
      </td>
      <td class="add">
        <button type="button" class="btn btn-info ms-2" id="add-btn">Add</button>
        <button type="button" class="btn btn-primary" id="edit-btn">Edit</button>
    </td>
  </form> 
</div>`;
}    