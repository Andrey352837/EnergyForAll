async function TraerTodo() {

    var data = await fetch('https://andrey352837.github.io/ApiEnergyForAllProject/API.json');

    var categorias = await data.json();

    return categorias;

}

var categoria = document.querySelector('#Categoria');
var options = "";



async function CargarCategorias() {

    var categorias = await TraerTodo();
    options = "";
    categorias = categorias.categoria;

    categorias.map(categoria => {
        console.log(categoria.id)
        options += `<option value=${categoria.id}>${categoria.nombre}</option>`
    })

    categoria.innerHTML = options

}

var marca = document.querySelector('#marca');

async function CargarMarca() {

    var marcas = await TraerTodo();
    options = "";
    marcas = marcas.marca;


    marcas.map(marca => {

        options += `<option value=${marca.id}>${marca.nombre}</option>`
    })

    marca.innerHTML = options
}

var tamanno = document.querySelector('#tamanno');

async function CargarTamanno() {

    var tamannos = await TraerTodo();
    options = "";
    console.log(tamannos.categoria.id)
    tamannos = tamannos.Tamanno;

    tamannos.map(tamanno => {

        options += `<option value=${tamanno.id}>${tamanno.tamanno}</option>`
    })

    tamanno.innerHTML = options;

}

var Producto = "";
var producto = document.querySelector('#productos');

async function CargarProductos() {

    var productos = await TraerTodo();

    productos = productos.producto;

    var filtro = JSON.parse(localStorage.getItem('datosFiltrados'));

    if (filtro != null && filtro != undefined) {
        productos = productos.filter((producto) => producto.idCategoria == filtro.idCategoria && producto.idMarca == filtro.idMarca && producto.idTamanno == filtro.idTamanno)
    }

    productos.map(producto => {

        Producto += `<div class="col-md-6 m-2" style="width: 550px; height: 300px;">
        <div class="card-box-d">
          <div class="card-img-d">
            <img src="${producto.linkImagen}" alt="Error del api" class="img-d img-fluid">
          </div>
          <div class="card-overlay card-overlay-hover">
            <div class="card-header-d">
              <div class="card-title-d align-self-center">
                <h3 class="title-d">
                  <a href="#" class="link-two">${producto.nombre}</a>
                </h3>
              </div>
            </div>
            <div class="card-body-d">
              <p class="content-d color-text-a">
                ${producto.descripcion}
              </p>              
            </div>           
          </div>
        </div>
        </div>`;
    })

    producto.innerHTML = Producto;

}

async function Productos() {

    CargarCategorias();
    CargarMarca();
    CargarTamanno();
    CargarProductos();
}


function Filtro() {

    let idCategoria = document.getElementById("Categoria");
    let idTamanno = document.getElementById("tamanno");
    let idMarca = document.getElementById("marca");

    let filtro = { idCategoria: idCategoria.value, idTamanno: idTamanno.value, idMarca: idMarca.value };

    localStorage.setItem('datosFiltrados', JSON.stringify(filtro))


}

function removeFilter() {

    localStorage.removeItem('datosFiltrados');
}