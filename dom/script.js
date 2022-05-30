const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const red = document.createElement('p');
red.classList.add('red');
red.textContent = "Hey I'm red!";
red.style.color = 'red';
container.appendChild(red);

const h3 = document.createElement('h3');
h3.classList.add('h3');
h3.textContent = "I'm a blue h3!"
h3.style.color = 'blue';
container.appendChild(h3);

const div = document.createElement('div');
const h1 = document.createElement('h1');
const stuff = document.createElement('p');
div.appendChild(h1);
div.appendChild(stuff);
div.classList.add('div');
h1.textContent = "I'm in a div";
stuff.textContent = "Me too";
div.style.border = 'solid';
div.style.backgroundColor = 'pink';
container.appendChild(div);

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});

btn.addEventListener('click', function (e) {
    console.log(e.target);
  });