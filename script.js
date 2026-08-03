let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartCount = document.getElementById("cart-count");

// Menampilkan jumlah barang saat halaman dibuka
cartCount.textContent = cart.length;

document.querySelectorAll(".cart-btn").forEach(button => {

    button.onclick = function () {

        cart.push({
            name: this.dataset.name,
            price: this.dataset.price
        });

        localStorage.setItem("cart", JSON.stringify(cart));

        // Perbarui jumlah di navbar
        cartCount.textContent = cart.length;

        alert("Produk berhasil dimasukkan ke keranjang.");

    };

});

document.querySelectorAll(".buy-btn").forEach(button=>{

    button.onclick=function(){

        alert(
            "Anda membeli "
            + this.dataset.name +
            "\nHarga : Rp"
            + Number(this.dataset.price).toLocaleString("id-ID")
        );

    }

});
// ==================== SLIDER ====================

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

if (slides.length > 0) {

    let index = 0;

    function showSlide(i) {

        slides.forEach(slide => {
            slide.classList.remove("active");
        });

        slides[i].classList.add("active");
    }

    function nextSlide() {

        index++;

        if (index >= slides.length) {
            index = 0;
        }

        showSlide(index);
    }

    function prevSlide() {

        index--;

        if (index < 0) {
            index = slides.length - 1;
        }

        showSlide(index);
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", nextSlide);
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", prevSlide);
    }

    showSlide(index);

    setInterval(nextSlide, 4000);

}