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
console.log(document.getElementById('header-title'));

const main = document.getElementById('main');
console.log(main);

let headerTitle = document.getElementById('header-title');
headerTitle.textContent = 'Item List'; //Disregard the styling
// headerTitle.innerText = 'Item Listed';//Pays attention to styling

// headerTitle.innerHTML = '<h3>Hello</h3>'


headerTitle.style.borderBottom = 'solid 2px #000'
headerTitle.style.marginBottom = '3px';

//GETELEMENTSBYCLASSNAME// -> notice the plural 'elements'

let itemsList = document.getElementsByClassName('list-group-item');
console.log(itemsList);
console.log(itemsList[2]); //accessing individual elements
itemsList[2].textContent = 'Hello 2'; //Modifying
itemsList[2].style.backgroundColor = 'yellow';


for(i=0; i < itemsList.length; i++){
    itemsList[i].style.backgroundColor = 'green';
}

//GETELEMENTBYTAGNAME//
let li = document.getElementsByClassName('list-group-item');
console.log(li)
li[2].textContent = 'Hello kjh';


for(i=0; i < li.length; i++){
    li[i].style.backgroundColor = 'blue';
}

//QUERYSELECTOR// -> Picks only one selector

let header = document.querySelector('#main-header');
console.log(header);
header.style.borderBottom = 'solid 4px blue';

const input = document.querySelector('input');
console.log(input);
input.value = 'Hello World';


const submit = document.querySelector('input[type="submit"]');
submit.value = 'Send';

const item = document.querySelector('.list-group-item');
item.style.color = 'red'; //get the first one


const lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'green'; //get the last one


const secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'yellow'; //get the second one


//QUERY SELECTOR ALL// -> WORK SIMILAR TO GETELEMENTBYTAGNAME

const titles = document.querySelectorAll('.title');
console.log(titles);

titles[0].textContent = 'Yooh';

const odd = document.querySelectorAll('li:nth-child(odd)');
const even = document.querySelectorAll('li:nth-child(even)');

for(let  i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = 'indigo';
    even[i].style.backgroundColor = 'orange';
}



