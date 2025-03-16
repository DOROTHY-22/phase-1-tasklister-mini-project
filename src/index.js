document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit',(e) =>{
    e.preventDefault();
    const task = e.target.elements["new-task-description"].value;
    const priority = e.target.elements["priority"].value; 

    taskDescription(task, priority); // Pass priority

    form.reset();
  });
});  // your code here
function taskDescription(task,priority){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click',deleteTask)
  p.textContent = `${task} ` ;
  btn.textContent = 'x'
  p.appendChild(btn)
  if (priority === 'high') {
    p.style.color = 'red';
  } else if (priority === 'medium') {
    p.style.color = 'yellow';
  } else {
    p.style.color = 'green';
  }

  console.log(p);
  document.querySelector('#tasks').appendChild(p);
}




function deleteTask(e){
  e.target.parentNode.remove();

}
