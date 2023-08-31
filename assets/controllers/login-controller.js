// Crear función para login 
// Usuarios en base de datos
// migrar de glitch? 
const formularioLog = document.querySelector("[data-formlog]");

console.log(formularioLog);


const Login = () => {
    const userLogin = document.querySelector("[data-user]").value;
    const passwLogin = document.querySelector("[data-passw]").value;
    
    if((userLogin == "usuario123@gmail.com") && (passwLogin == "usuario123")){
        window.location.href="../screens/all-products.html";
    }else{
        console.log("Usuario Incorrecto");
        alert("Usuario o Contraseña Incorrectos")
    }
}

formularioLog.addEventListener("submit", (evento) => {
    evento.preventDefault();
    Login();
    console.log("Usuario xd");
});
