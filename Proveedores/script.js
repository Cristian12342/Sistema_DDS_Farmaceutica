document.addEventListener("DOMContentLoaded", () => {
    
    const modal = document.getElementById("modal-registro");
    const btnAbrir = document.getElementById("btn-abrir-modal");
    const btnCerrar = document.getElementById("btn-cerrar-modal");
    const btnCancelar = document.getElementById("btn-cancelar");
    const formulario = document.getElementById("form-proveedor");
    const btnGuardar = document.getElementById("btn-guardar");
    
    const inputNombre = document.getElementById("nombre_proveedor");
    const inputContacto = document.getElementById("contacto");
    const inputLeadTime = document.getElementById("lead_time_dias");

    function abrirModal() {
        modal.classList.remove("oculto"); 
    }

    function cerrarModal() {
        modal.classList.add("oculto"); 
        formulario.reset(); 
        btnGuardar.disabled = true; 
    }

    btnAbrir.addEventListener("click", abrirModal);
    btnCerrar.addEventListener("click", cerrarModal);
    btnCancelar.addEventListener("click", cerrarModal);

    function validarCampos() {
        if (inputNombre.value !== "" && inputContacto.value !== "" && inputLeadTime.value !== "") {
            btnGuardar.disabled = false; 
        } else {
            btnGuardar.disabled = true; 
        }
    }

    inputNombre.addEventListener("input", validarCampos);
    inputContacto.addEventListener("input", validarCampos);
    inputLeadTime.addEventListener("input", validarCampos);

    formulario.addEventListener("submit", (e) => {
        e.preventDefault(); 
        alert("¡Formulario listo! (Aquí luego conectaremos la base de datos)");
        cerrarModal();
    });

});