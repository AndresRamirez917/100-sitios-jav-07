async function getDataList() {
    const resulis = await fetch('https://rickandmortyapi.com/api/character');
    const names = await resulis.json()
    names.results.forEach(element => {
        if(element.id <= 4){
            const lista = document.createRange().createContextualFragment(`
                
               <ul>
              <li><a id="li1" href="#mainheader">${element.name}</a></li>
                </ul>
                
                `)
                const container = document.querySelector('.container')
                container.append(lista)
        }
    })
}

async function getData() {
    const result = await fetch('https://fakestoreapi.com/products/');
    const products = await result.json();
    console.log(products)
    products.forEach(element => {
        if(element.id <= 3){
            const card = document.createRange().createContextualFragment(`
                
                 <div class="card">
                    <img src="${element.image}" alt="">
                    <h4>${element.title}</h4>
                    <p>${element.description}</p>
                </div>
                
                `)
                const services_row = document.querySelector('.services-row')
                services_row.append(card)
        }
    });
} 
const btn_submit = document.getElementById('btn-submit')

const validar = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');

    if(nombre.value == ""){
        alert("El campo nombre no puede estar vacío")
        return false
    }

    if(email.value == ""){
        alert("El campo email no puede estar vacío")
        return false
    }

    if(mensaje.value == ""){
        alert("El campo mensaje no puede estar vacío")
        return false
    }

    if(!email_valido(email.value)){
        alert("El formato de correo no es correcto")
        return false
    }
    nombre.value="";
    email.value="";
    mensaje.value="";
    return true
}

const email_valido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

getDataList()
getData()
btn_submit.addEventListener("click", validar);