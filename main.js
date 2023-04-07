const shopcontent = document.getElementById("shopcontent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

verCarrito.addEventListener("click", () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito de compras.</h1>
  `;
  modalContainer.append(modalHeader);

  const modalbutton = document.createElement("h1");
  modalbutton.innerText = "X";
  modalbutton.className = "modal-header-button";

  modalbutton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });

  modalHeader.append(modalbutton);

  carrito.forEach((product) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "model-content";
    carritoContent.innerHTML = `
      <img src="${product.img}">
      <h3>${product.nombre}</h3>
      <p>${product.categoria}</p>
      <p>${product.precio}</p>
    `;
    modalContainer.append(carritoContent);
  });

  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  const totalBuying = document.createElement("div");
  totalBuying.className = "total-content";
  totalBuying.innerHTML = `Total a pagar: ${total} $`;
  modalContainer.append(totalBuying);

  const vaciarCarrito = document.createElement("button");
  vaciarCarrito.innerText = "Vaciar carrito";
  vaciarCarrito.className = "vaciar-carrito";

  vaciarCarrito.addEventListener("click", () => {
    carrito = [];
    localStorage.removeItem("carrito");
    modalContainer.style.display = "none";
  });

  modalContainer.append(vaciarCarrito);
});


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
    <img src="${product.imagen}">   
    <h3>${product.nombre}</h3>
    <p>${product.categoria}</p>
    <br>
    <p class="price">${product.precio} $</p>
  `;
  shopcontent.append(content);

  let comprar = document.createElement("button");
  comprar.innerText = "comprar";
  comprar.className = "comprar";

  content.append(comprar);

  comprar.addEventListener("click", () => {
    carrito.push({
      nombre: product.nombre,
      img: product.imagen,
      categoria: product.categoria,
      precio: product.precio,
    });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    console.log(carrito);
  });
});

verCarrito.addEventListener("click", () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
      <h1 class="modal-header-title">Carrito de compras.</h1>
    `;
    modalContainer.append(modalHeader);
  
    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "X";
    modalbutton.className = "modal-header-button";
  
    modalbutton.addEventListener("click", () => {
      modalContainer.style.display = "none";
    });
  
    modalHeader.append(modalbutton);
  
    carrito.forEach((product) => {
      let carritoContent = document.createElement("div");
      carritoContent.className = "model-content";
      carritoContent.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.categoria}</p>
        <p>${product.precio}</p>
      `;
      modalContainer.append(carritoContent);
    });
  
    const total = carrito.reduce((acc, item) => acc + item.precio, 0);
  
    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `Total a pagar: ${total} $`;
    modalContainer.append(totalBuying);
  
    const vaciarCarrito = document.createElement("button");
    vaciarCarrito.innerText = "Vaciar carrito";
    vaciarCarrito.className = "vaciar-carrito";
  
    vaciarCarrito.addEventListener("click", () => {
      carrito = [];
      localStorage.removeItem("carrito");
      modalContainer.style.display = "none";
    });
  
    modalContainer.append(vaciarCarrito);
  });
  