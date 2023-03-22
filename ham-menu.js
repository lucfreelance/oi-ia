// Ham-menu - Inicio
let emailMenu = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");
let iconMenuMobile = document.querySelector(".menu");
let mobileMenu = document.querySelector(".mobile-menu");
let iconShopping = document.querySelector(".navbar-shopping-cart");
let asideShopping = document.querySelector(".product-detail");
let divcardscontainer = document.querySelector(".cards-container");
let productDetailLeft = document.querySelector(".product-detail-left");
let productDetailClose = document.querySelector(".product-detail-close");
let myordercontentContainer = document.querySelector(".my-order-content");
let countCarrito = document.querySelector(".navbar-shopping-cart div");
let totalCarrito = document.querySelector(".total");
let modal = document.querySelector(".modal");
let cerrarModal = document.querySelector(".boton-modal");
let productImageInfor = document.querySelector(
	".product-detail-left > img:nth-child(2)"
);



let labelNameInfo = document.querySelector(".product-info-left p:nth-child(2)");
let labelInforInfo = document.querySelector(
	".product-info-left p:nth-child(3)"
);

let buttonInfo = document.querySelector(".add-to-cart-button");
let productosEnCarrito = [];
let productoACarrito = [];

emailMenu.addEventListener("click", toggleMenu);
iconMenuMobile.addEventListener("click", toggleMenuMobile);
iconShopping.addEventListener("click", toggleAsideShopping);
productDetailClose.addEventListener("click", closeProductDetail);
buttonInfo.addEventListener("click", butonClick);
cerrarModal.addEventListener("click", closeModal);

function toggleMenu() {
	productDetailLeft.classList.add("inactive");
	asideShopping.classList.add("inactive");
	desktopMenu.classList.toggle("inactive");
}

function toggleMenuMobile() {
	productDetailLeft.classList.add("inactive");
	asideShopping.classList.add("inactive");
	mobileMenu.classList.toggle("inactive");
}

function closeModal() {
	modal.style.display = "none";
}

function renderListProduct(productList) {
	for (const product of productList) {
		let divproductCard = document.createElement("div");
		let imgproductcard = document.createElement("img");
		let divproductinfo = document.createElement("div");
		let divdivproductinfo = document.createElement("div");
		let pprice = document.createElement("p");
		let pname = document.createElement("p");
		let figureproductinfo = document.createElement("figure");
		let imgproductinfo = document.createElement("img");
		divproductCard.classList.add("product-card");
		imgproductcard.setAttribute("src", product.image);
		divproductinfo.classList.add("product-info");
		pprice.innerText = "$" + product.price;
		pname.innerText = product.name;
		imgproductinfo.setAttribute("src", "./icons/bt_add_to_cart.svg");
	}
}
