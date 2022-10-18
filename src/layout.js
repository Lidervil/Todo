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

}