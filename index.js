const btnInicio = document.querySelector(".btn-inicio");
btnInicio.addEventListener("click", () => {
  renderizar("/htmlCategory.html");
});

const renderizar = (ruta) => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.querySelector("main").innerHTML = this.response;
      console.log(this);
    }
  };
  xhttp.open("GET", `${ruta}`, true);
  setTimeout(() => xhttp.send(), 3000);
};

// GALLERY
const galleryImgs = document.querySelectorAll(".gallery-img");
const mainGallery = document.querySelector(".main-gallery-img");
galleryImgs.forEach((e) => {
  e.addEventListener("click", (e) => {
    const src = e.target.src;
    mainGallery.src = src;
  });
});
// SUM Y MINS PRODUCT
const btnSum = document.querySelector(".btnSum");
const btnMin = document.querySelector(".btnMin");
const cantidad = document.querySelector(".cantidad");

btnSum.addEventListener("click", () => {
  cantidad.value++;
  calcularPrecio();
});

btnMin.addEventListener("click", () => {
  if (cantidad.value == 1) {
    calcularPrecio();
  }
  if (cantidad.value != 1) {
    cantidad.value--;
    calcularPrecio();
  }
});
// CALCULAR TOTALES
const price = document.querySelector(".price");
const calcularPrecio = () => {
  const precioBase = Number(price.dataset.price);
  let cantidadProduct = Number(cantidad.value);
  const total = precioBase * cantidadProduct;
  price.innerHTML = `$${total}`;
};
