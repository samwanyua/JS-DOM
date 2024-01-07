/**
 * Document Object Model - structured rep of html elements
 * It is a tree of nodes/elements created by the browser
 * Object oriented representation
 * 
 * 
 */
//Examine Document Object
// console.dir(document)//all properties and objects attached to document obeject

// console.log(document.domain)//to access domain name

// console.log(document.URL)

// console.log(document.title)

// //document.title = Youtube;

// console.log(document.head)

// console.log(document.all)

// console.log(document.all[12]);

// //document.all[12].textContent = 'Hello';

// console.log(document.forms) //to get all the forms

// console.log(document.links)// to get all links

// console.log(document.images)// to get all images

/*Selectors*/
//GETELEMENTBYID//
// console.log(document.getElementById('header-title'));

// const main = document.getElementById('main');
// console.log(main);

// let headerTitle = document.getElementById('header-title');
// headerTitle.textContent = 'Item List'; //Disregard the styling
// // headerTitle.innerText = 'Item Listed';//Pays attention to styling

// // headerTitle.innerHTML = '<h3>Hello</h3>'


// headerTitle.style.borderBottom = 'solid 2px #000'
// headerTitle.style.marginBottom = '3px';

// //GETELEMENTSBYCLASSNAME// -> notice the plural 'elements'

// let itemsList = document.getElementsByClassName('list-group-item');
// console.log(itemsList);
// console.log(itemsList[2]); //accessing individual elements
// itemsList[2].textContent = 'Hello 2'; //Modifying
// itemsList[2].style.backgroundColor = 'yellow';


// for(i=0; i < itemsList.length; i++){
//     itemsList[i].style.backgroundColor = 'green';
// }

// //GETELEMENTBYTAGNAME//
// let li = document.getElementsByClassName('list-group-item');
// console.log(li)
// li[2].textContent = 'Hello kjh';


// for(i=0; i < li.length; i++){
//     li[i].style.backgroundColor = 'blue';
// }

// //QUERYSELECTOR// -> Picks only one selector

// let header = document.querySelector('#main-header');
// console.log(header);
// header.style.borderBottom = 'solid 4px blue';

// const input = document.querySelector('input');
// console.log(input);
// input.value = 'Hello World';


// const submit = document.querySelector('input[type="submit"]');
// submit.value = 'Send';

// const item = document.querySelector('.list-group-item');
// item.style.color = 'red'; //get the first one


// const lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'green'; //get the last one


// const secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'yellow'; //get the second one


// //QUERY SELECTOR ALL// -> WORK SIMILAR TO GETELEMENTBYTAGNAME

// const titles = document.querySelectorAll('.title');
// console.log(titles);

// titles[0].textContent = 'Yooh';

// const odd = document.querySelectorAll('li:nth-child(odd)');
// const even = document.querySelectorAll('li:nth-child(even)');

// for(let  i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = 'indigo';
//     even[i].style.backgroundColor = 'orange';
// }



//TRANSVERSING THE DOM

const listItems = document.querySelector('#items');

//parentNode property
console.log(listItems.parentNode);

listItems.parentNode.style.backgroundColor = 'grey';


console.log(listItems.parentNode.parentNode);

//parentElement -> works the same as parentNode

console.log(listItems.parentElement);


//childNode

console.log(listItems.childNodes); //provide a node list


//children

console.log(listItems.children); // not a node list -> array

console.log(listItems.children[2]);
listItems.children[2].style.backgroundColor = 'blue';

//firstChild

console.log(listItems.firstChild);

//firstElementChild
console.log(listItems.firstElementChild);
listItems.firstElementChild.textContent = 'Hello - 1';

//lastChild
console.log(listItems.lastChild); //Includes the white spaces just like childNode and firstChild

//lastElementChild
console.log(listItems.lastElementChild);
listItems.lastElementChild.textContent = 'Hello - last';


//nextSibling
console.log(listItems.nextSibling); //gives a text node

//nextElementSibling
console.log(listItems.nextElementSibling);

//previousSibling
console.log(listItems.previousSibling);

//previousElementSibling
console.log(listItems.previousElementSibling);
listItems.previousElementSibling.style.backgroundColor = 'pink'

 // createElement

 //create a div

 const newDiv = document.createElement('div');
newDiv.className = 'hello'; //Adding a class to the new created div

newDiv.id = 'Hellooo'; //to add an id

newDiv.setAttribute('title', 'hello div'); //to add attributes

//create a text node

const newDivText = document.createTextNode('Hello world, Sam')

//to add text to div
newDiv.appendChild(newDivText);

//to add it to DOM

const cont = document.querySelector('header .container');
const h1 = document.querySelector('header h1');

newDiv.style.fontSize = '32px';
newDiv.style.fontWeight = 'bold';

 console.log(newDiv);

 cont.insertBefore(newDiv, h1);