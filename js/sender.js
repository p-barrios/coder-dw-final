//Se declaran las variables de entrada del formulario

let name_f = document.getElementById('name_f')
let phone = document.getElementById('phone')
let email = document.getElementById('email')
let message = document.getElementById('message')

//Se Guarda el form en una constante

const form  = document.getElementById('formulario')

//Creamos un evento de escucha del formulario

form.addEventListener('submit', (e) => {

    //Se detiende el evento de recarga del navegador
    e.preventDefault()

    //Se invoca la funcion sender que se declara abajo
    sender(name_f.value,phone.value,email.value,message.value)

    //Se Blanquea el formulario
    form.reset()
})

//Se declara la funcion para enviar correos

function sender(name, phone, email, message) {
    Email.send({
        SecureToken: 'xxxxx', //Para configurar los permisos de seguridad SSL
        To: email, //Donde va a llegar el mail
        From: 'prueba.smtpjs@gmail.com', //Desde donde se va a enviar. Tiene que ser el mismo que genero el token de seguridad
        Subject: `${name} envio un message`,
        Body: `
                <p>Nombre: <b>${name}</b></p>
                <p>Teléfono: <b>${phone}</b></p>
                <p>Email: <b>${email}</b></p>
                <p>Mensaje: <b>${message}</b></p>
                `
    }).then(
        message => swal("Correo enviado exitosamente", "en breve nos pondremos en contacto", "success")
        //Se utiliza la libreria sweetAlert para generar ventanas emergentes tipo popup, se cargo el cdn en el index para mostrar funcionamiento
        //mas info en https://sweetalert.js.org/
    )
    .catch(error => swal("Error al enviar el mensaje", "disculpa las molestias", "error"))
    //en caso de error sale otro popup informando esto
}