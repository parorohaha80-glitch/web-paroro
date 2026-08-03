// =========================
// STATUS LOGIN
// =========================

const loginUser = JSON.parse(localStorage.getItem("loginUser"));

const userMenu = document.getElementById("user-menu");

if (userMenu) {

    if (loginUser) {

        userMenu.innerHTML = `
            <a href="#" id="logoutBtn">
                👤 ${loginUser.nama} | Logout
            </a>
        `;

        document
            .getElementById("logoutBtn")
            .onclick = function () {

                if(confirm("Yakin ingin logout?")){

                    localStorage.removeItem("loginUser");

                    window.location.href = "login.html";

                }

            };

    }

}
const welcome = document.getElementById("welcome-user");

if(welcome && loginUser){

    welcome.innerHTML = "Selamat Datang, " + loginUser.nama + " 👋";

}