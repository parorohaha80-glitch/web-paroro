// =======================
// REGISTER
// =======================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const nama = document.getElementById("registerNama").value.trim();
        const email = document.getElementById("registerEmail").value.trim();
        const password = document.getElementById("registerPassword").value;

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const cek = users.find(user => user.email === email);

        if (cek) {
            alert("Email sudah terdaftar!");
            return;
        }

        users.push({
            nama,
            email,
            password
        });

        localStorage.setItem("users", JSON.stringify(users));

        alert("Registrasi berhasil.");

        window.location.href = "login.html";

    });

}

// =======================
// LOGIN
// =======================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(u =>
            u.email === email &&
            u.password === password
        );

        if (!user) {

            alert("Email atau Password salah!");

            return;

        }

        localStorage.setItem("loginUser", JSON.stringify(user));

        alert("Login berhasil.");

        window.location.href = "index.html";

    });

}