async function TraerTodo() {

    var data = await fetch('https://andrey352837.github.io/ApiEnergyForAllProject/API.json');

    var categorias = await data.json();

    return categorias;

}


var Producto = "";
var producto = document.querySelector('#productos');

async function CargarProductos(){

    var productos = await TraerTodo();
   
    productos = productos.producto;
    productos = productos[1];

    Producto = `<div class="col-sm-12">

    <div class="row justify-content-between s-1 ">
      <div class="col-md-5 col-lg-4">        
        <div class="property-summary">
          <div class="row">
            <div class="col-sm-12">
              <div class="title-box-d section-t4">
                <h3 class="title-d">${productos.nombre}</h3>
              </div>
            </div>
          </div>
          <div class="summary-list">
            <ul class="list">
              <li class="d-flex justify-content-between">
                <strong>Identificador del producto:</strong>
                <span>${productos.id}</span>
              </li>             
              <li class="d-flex justify-content-between">
                <strong>Precio:</strong>
                <span>350000</span>
              </li>
              <li class="d-flex justify-content-between">
                <strong>Status:</strong>
                <span>Disponible</span>
              </li>
              <li class="d-flex justify-content-between">
                <strong>Categoria:</strong>
                <span>Placas solares fotovoltaicas<sup>2</sup>
                </span>
              </li>
              <li class="d-flex justify-content-between">
                <strong>Tamaño:</strong>
                <span>120x240</span>
              </li>
              <li class="d-flex justify-content-between">
                <strong>Marca:</strong>
                <span>SunPower</span>
              </li>              
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-7 col-lg-7 section-md-t3">
        <div class="row">
          <div class="col-sm-12">
            <div class="title-box-d">
              <h3 class="title-d">Description</h3>
            </div>
          </div>
        </div>
        <div class="property-description">
          <p class="description color-text-a">
           ${productos.descripcion}
          </p>
          
        </div>
        
      </div>
    </div>
  </div>`
   
    

    producto.innerHTML = Producto;

}
