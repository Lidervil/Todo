export function header(){
    const header = document.createElement('header');
    header.classList.add('header');
    const p = document.createElement('p');
    p.innerHTML = 'To do list!';
    header.appendChild(p);

    return header;
}

export function section(){
    const section = document.createElement('section');
    section.classList.add('container');

    section.appendChild(navbar());
    section.appendChild(main());

    return section;
}

export function navbar(){
    const nav = document.createElement('nav');
    nav.classList.add('navbar');

    const div = document.createElement('div');
    div.classList.add('home');
    const p = document.createElement('p');
    p.innerHTML = 'Home';
    const separation = document.createElement('div');
    separation.classList.add('separation');
    
    div.appendChild(separation);
    div.appendChild(p);
    nav.appendChild(div);
    
    return nav;
}

export function main(){
    const main = createElement('main')

    const div = createElement('div', 'home');
}

export function div(){
    const div = createElement('div', 'container');

    div.appendChild(header());
    div.appendChild(section());

    return div;
}


function createElement(name, cName = name, textCont = ''){
    const element = document.creteElement(name);
    element.classList.add(cName);
    element.innerHTML = textCont;

    return element;
}