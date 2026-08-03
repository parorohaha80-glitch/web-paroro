const loginUser = JSON.parse(localStorage.getItem("loginUser"));

if (!loginUser) {

    alert("Silakan login terlebih dahulu.");

    window.location.href = "login.html";

}
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const tbody = document.getElementById("cart-items");
const total = document.getElementById("total");

function tampilkanKeranjang(){

    tbody.innerHTML="";

    let totalHarga=0;

    if(cart.length===0){

        tbody.innerHTML=`
            <tr>
                <td colspan="4">
                    Keranjang masih kosong.
                </td>
            </tr>
        `;

        total.innerHTML="Total : Rp0";

        return;

    }

    cart.forEach((item,index)=>{

        totalHarga+=Number(item.price);

        tbody.innerHTML+=`

        <tr>

            <td>${index+1}</td>

            <td>${item.name}</td>

            <td>Rp${Number(item.price).toLocaleString("id-ID")}</td>

            <td>

                <button onclick="hapusProduk(${index})">

                    Hapus

                </button>

            </td>

        </tr>

        `;

    });

    total.innerHTML="Total : Rp"+totalHarga.toLocaleString("id-ID");

}

function hapusProduk(index){

    cart.splice(index,1);

    localStorage.setItem(

        "cart",

        JSON.stringify(cart)

    );

    tampilkanKeranjang();

}

document.getElementById("checkout-btn").onclick = function(){

    const loginUser = JSON.parse(localStorage.getItem("loginUser"));

    if(!loginUser){

        alert("Silakan login terlebih dahulu.");

        window.location.href = "login.html";

        return;

    }

    // kode WhatsApp di bawahnya...
}


tampilkanKeranjang();
document.getElementById("checkout-btn").onclick=function(){

    if(cart.length===0){

        alert("Keranjang masih kosong.");

        return;

    }

    let pesan="Halo, saya ingin memesan:%0A%0A";

    let total=0;

    cart.forEach((item,index)=>{

        pesan +=
        (index+1)+". "+
        item.name+
        " - Rp"+
        Number(item.price).toLocaleString("id-ID")+
        "%0A";

        total += Number(item.price);

    });

    pesan +=
    "%0A--------------------%0A";

    pesan +=
    "Total : Rp"+
    total.toLocaleString("id-ID");

    const nomor="6282142096261";

    window.open(
        "https://wa.me/"+nomor+"?text="+pesan,
        "_blank"
    );

}