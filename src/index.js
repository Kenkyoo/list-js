import List from 'list.js';
import * as mdb from 'mdb-ui-kit/js/mdb.umd.min.js';
window.mdb = mdb;
import 'mdb-ui-kit/src/scss/mdb.free.scss';
import './style.css'
import { app } from './main.js';
import renderForm from './components/form.js';
import renderList from './components/list.js';
import renderFilters from './components/filters.js'
import { initializeApp } from './functions.js';
import Sortable from 'sortablejs';

document.getElementById('root').innerHTML = app;
renderForm();
renderFilters();
renderList();

document.addEventListener('DOMContentLoaded', () => {
  const hackerList = new List('hacker-list', {
    valueNames: ['id', 'task_name', 'assigned_to', 'priority']
  });
  initializeApp(hackerList);
  var el = document.getElementById('list');
  var sortable = Sortable.create(el); 
});
