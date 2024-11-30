export default function renderFilters() {
    document.getElementById('filters').innerHTML = `
    <div class="d-flex justify-content-center align-items-center gap-4 mb-4 pt-2 pb-3">
      <input class="search form-control form-control-lg" placeholder="Buscar..." />
      <select class="form-select" id="priorityFilter">
        <option value="">Filtrar por Prioridad</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>      
      <i class="fas fa-sort-amount-down-alt sort ms-2 icon1" data-sort="task_name" title="Ordenar por Tarea"></i>
      <i class="fas fa-sort-amount-down-alt sort ms-2 icon2" data-sort="assigned_to" title="Ordenar por Asignado a"></i>
      <i class="fas fa-sort-amount-down-alt sort me-2 icon3" data-sort="priority" title="Ordenar por Prioridad"></i>
    </div>  
    `;
  }
            