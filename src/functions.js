export function initializeApp(hackerList) {
  const idField = $('#id-field'),
        taskField = $('#task-field'),
        priorityField = $('#priority-field'),
        assignedField = $('#assigned-field'),
        addBtn = $('#add-btn'),
        editBtn = $('#edit-btn').hide();

  function refreshCallbacks() {
    const removeBtns = $('.remove-item-btn');
    const editBtns = $('.edit-item-btn');

    removeBtns.off().click(function() {
      const itemId = $(this).closest('tr').find('.id').text();
      hackerList.remove('id', itemId);
    });

    editBtns.off().click(function() {
      const itemId = $(this).closest('tr').find('.id').text();
      const itemValues = hackerList.get('id', itemId)[0].values();
      idField.val(itemValues.id);
      taskField.val(itemValues.task);
      assignedField.val(itemValues.assigned);
      priorityField.val(itemValues.priority);

      editBtn.show();
      addBtn.hide();
    });
  }

  function clearFields() {
    taskField.val('');
    assignedField.val('');
    priorityField.val('');
  }

  addBtn.click(() => {
    hackerList.add({
      id: Math.floor(Math.random() * 110000),
      task_name: taskField.val(),
      assigned_to: assignedField.val(),
      priority: priorityField.val()
    });
    clearFields();
    refreshCallbacks();
  });

  editBtn.click(() => {
    const item = hackerList.get('id', idField.val())[0];
    item.values({
      id: idField.val(),
      task: taskField.val(),
      assigned: assignedField.val(),
      priority: priorityField.val()
    });
    clearFields();
    editBtn.hide();
    addBtn.show();
  });

  refreshCallbacks(); // Llama inicialmente para configurar los botones
}
