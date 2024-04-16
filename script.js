const button = document.getElementById('addbutton');
const ol = document.getElementById('theList');
const input = document.getElementById('input');
const createTask = () => 
{
    
    const li = document.createElement("li");
    ol.appendChild(li);
    li.appendChild(document.createTextNode(input.value));
    input.value = "";
    const del = createDeleteButton();
    del.addEventListener('click', deleteTask);
    li.appendChild(del);
    li.classList.add('contained')
   
}

const addTaskAfterClick = () => 
{
    if (input.value.length > 0) 
    {
        createTask();
    }
}

const addlistAfterKeyPress = (event) => 
{
    if (input.value.length > 0 && event.key === "Enter")
    {
        createTask();
    }
}

const taskDone = (event) =>
 {
    if (event.target.tagName === 'LI')
    {
        event.target.classList.toggle("done");
    }
}

const createDeleteButton = () => 
{
    const deleteBtn = document.createElement("button");
    deleteBtn.id="delete-button"
    deleteBtn.textContent = "delete";
    deleteBtn.classList.add('contained')
    return deleteBtn;
}

const deleteTask = (event) => 
{
    let taskItem = event.target.parentElement;
    let tasklist = taskItem.parentElement;
    tasklist.removeChild(taskItem);
}

ol.addEventListener('click', taskDone);
button.addEventListener('click', addTaskAfterClick);
input.addEventListener('keydown', addlistAfterKeyPress);