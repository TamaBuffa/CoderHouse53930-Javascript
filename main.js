let productos = [];

async function cargarProductosDesdeJSON() {
    try {
        const response = await fetch("/js/productos.json");
        const data = await response.json();
        
        productos = data.filter(producto => ["cafe-01", "cafe-02", "cafe-03", "cafe-04"].includes(producto.id));
        cargarProductos(productos);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

cargarProductosDesdeJSON();

const contenedorProductos = document.querySelector(".pro-container");

function cargarProductos(productosElegidos) {
    
    contenedorProductos.innerHTML="";
    
    productosElegidos.forEach(producto => {
    
        const div = document.createElement("div");
        div.classList.add("pro");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles des">
                 <h5 class="producto-titulo">${producto.titulo}</h5>
                 <h4 class="producto-precio">${producto.precio}</h4>
                 <a class="producto-agregar" href="/pages/tienda.html">Ir a la tienda</a>
            </div>`;
            contenedorProductos.append(div);
        });
    }
