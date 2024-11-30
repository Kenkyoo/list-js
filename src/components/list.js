import List from 'list.js';
import values from '../../list.json';

var options = {
  valueNames: ['id', 'task_name', 'assigned_to', 'priority'],
  item: `
    <tr class="fw-normal">
      <td class="id"></td>
      <th class="task_name ms-2"></th>
      <td class="assigned_to align-middle"></td>
      <td class="priority align-middle"></td>
      <td class="align-middle">
        <a href="#!" data-mdb-tooltip-init title="Done"><i
            class="edit edit-item-btn fas fa-check fa-lg text-success me-3"></i></a>
        <a href="#!" data-mdb-tooltip-init title="Remove"><i
            class="remove remove-item-btn fas fa-trash-alt fa-lg text-warning"></i></a>
      </td>
    </tr>
  `
};

export default function renderList() {
  var hackerList = new List('hacker-list', options, values);
  
  // Filtro por prioridad
  document.getElementById('priorityFilter').addEventListener('change', function() {
    let selectedPriority = this.value;
    
    hackerList.filter(item => {
      if (selectedPriority === "") return true;  // Mostrar todos si no se selecciona ninguna prioridad
      return item.values().priority === selectedPriority;
    });
  });

  // Limpiar el filtro para mostrar todos los elementos si se cambia la prioridad
  document.getElementById('priorityFilter').addEventListener('change', function() {
    if (this.value === "") hackerList.filter();
  });

  document.querySelectorAll('.sort').forEach((button) => {
    button.addEventListener('click', () => {
      let sortBy = button.getAttribute('data-sort');
      hackerList.sort(sortBy, { order: "asc" });
    });
  });
  
}


