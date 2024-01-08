const form = document.getElementById('addForm');

const itemList = document.getElementById('items');

const filter = document.getElementById('filter');

//form submit event

form.addEventListener('submit', addItem);

//Delete event
itemList.addEventListener('click', removeItem);

//filter event
filter.addEventListener('keyup', filterItem);

//add item
function addItem(e){
    e.preventDefault();

    //get input value

    const newItem = document.getElementById('item').value;

    //create new li element

    const li = document.createElement('li');
    //add class
    li.className = 'list-group';
    // console.log(li);

    //add text node with input value

    li.appendChild(document.createTextNode(newItem));
    
    //create the delete button element

    const deleteBtn = document.createElement('button');
    //add class
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    deleteBtn.style.marginLeft = '4px';
    //append button to li
    li.appendChild(deleteBtn)


    //append li to list
    itemList.appendChild(li);
}

//remove item
function removeItem(e){
    // console.log(3);
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }

}


function filterItem(e){
   //convert to lowercase
   const text = e.target.value.toLowerCase();
   //console.log(text);

   //get list
   const items = itemList.getElementsByTagName('li');
   //console.log(items)

   //Convert HTML Collection to array
   Array.from(items).forEach((item)=>{
    const itemName = item.firstChild.textContent;
    //console.log(itemName);
    if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
    }
    else{
        item.style.display = 'none';
    }
   })




   
}