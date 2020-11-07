function get(selector){
    return document.querySelector(selector)
}

const magician = {
    _hat: './assets/images/hat.png',
    _getPortrait(){
        if (this._portrait) return this._portrait;
        else return'./assets/images/magician.png';
    },
    'do magic'(){
        console.log(`ABRACADABRA
        The prototype of ${this.name} is `);
        console.log(Object.getPrototypeOf(this));}
};


function Creature(name, age, species, port){
    this.name = name;
    this.age = age;
    this.species = species;
    this._portrait = port
}

Creature.prototype['say Hello'] = function(){
    console.log(`Hello my name is ${this.name}!`);
}


function Human(name, age, species, port, job){
    Creature.call(this, name, age, species, port, 'say Hello')
    this.job = job;
}

function Dog(name, age, species, port, color){
    Creature.call(this, name, age, species, port)
    this.color = color
}

function Vampire(name, age, species, port, job, title){
    Human.call(this, name, age, species, port, job)
    this.title = title;
}
Object.setPrototypeOf(Human.prototype, Creature.prototype);
Object.setPrototypeOf(Dog.prototype, Creature.prototype);
Object.setPrototypeOf(Vampire.prototype, Human.prototype);

let human = new Human('Linda', 18, 'human', './assets/images/human.png', 'doctor');
let dog = new Dog('Steve', 4, 'dog', './assets/images/dog.png', 'brown');
let vampire = new Vampire('Stasik', 32, 'papaJS', './assets/images/vampire.png', 'unemploed', 'count');


const btns = document.querySelectorAll('button')
const person = document.querySelector('#head')


function changeStatus(e){
    btns.forEach(elem => {elem.classList.remove('active')})
    e.classList.toggle('active')
    Object.setPrototypeOf(magician, null);
    let btnValue = e.innerHTML.split(" ").splice(0, 1).join()
    if(btnValue == 'human'){
        Object.setPrototypeOf(magician, human);
        person.src = magician._getPortrait()
        draw(human)
    }else if(btnValue == 'vampire'){
        Object.setPrototypeOf(magician, vampire);
        person.src = magician._getPortrait()
        draw(vampire)
    }else if(btnValue == 'dog'){
        Object.setPrototypeOf(magician, dog);
        person.src = magician._getPortrait()
        draw(dog)
    }else{
        Object.setPrototypeOf(magician, null);
        person.src = magician._getPortrait()
        draw()
    }

}


//DRAW DESCRIPTION
const description = document.querySelector('#properties')

draw()

function draw(elem){
    description.innerHTML = ''

    if(elem == human){
        description.insertAdjacentHTML('afterbegin', `
            <button class='make_magic' onclick="makeMagic(this)">do magic</button>
            <button class='make_magic' onclick="makeMagic(this)">say hello</button>
            <p class='prop'>name: <span class='propValue'>${elem.name}</span></p>
            <p class='prop'>age: <span class='propValue'>${elem.age}</span></p> 
            <p class='prop'>species: <span class='propValue'>${elem.species}</span></p>
            <p class='prop'>job: <span class='propValue'>${elem.job}</span></p>
        `)
    }else if(elem == vampire){
        description.insertAdjacentHTML('afterbegin', `
            <button class='make_magic' onclick="makeMagic(this)">do magic</button>
            <button class='make_magic' onclick="makeMagic(this)">say hello</button>
            <p class='prop'>name: <span class='propValue'>${elem.name}</span></p>
            <p class='prop'>age: <span class='propValue'>${elem.age}</span></p> 
            <p class='prop'>species: <span class='propValue'>${elem.species}</span></p>
            <p class='prop'>job: <span class='propValue'>${elem.job}</span></p>
            <p class='prop'>title: <span class='propValue'>${elem.title}</span></p>
        `)
    }else if(elem == dog){
        description.insertAdjacentHTML('afterbegin', `
            <button class='make_magic' onclick="makeMagic(this)">do magic</button>
            <button class='make_magic' onclick="makeMagic(this)">say hello</button>
            <p class='prop'>name: <span class='propValue'>${elem.name}</span></p>
            <p class='prop'>age: <span class='propValue'>${elem.age}</span></p> 
            <p class='prop'>species: <span class='propValue'>${elem.species}</span></p>
            <p class='prop'>color: <span class='propValue'>${elem.color}</span></p>
        `)
    }else{
        description.insertAdjacentHTML('afterbegin', `
            <button class='make_magic' onclick="makeMagic(this)">do magic</button>
        `)
    }
}

function makeMagic(btn){
    if(btn.innerHTML == 'do magic'){
        magician['do magic']()
    }else if(btn.innerHTML == 'say hello'){
        magician['say Hello']()
    }
}


