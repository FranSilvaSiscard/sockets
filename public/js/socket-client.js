//Ref html
const labelOnline  = document.querySelector('#labelOnline');
const labelOffline =  document.querySelector('#labelOffline');
const message      = document.querySelector('#txtMensaje');
const send         = document.querySelector('#btnEnviar');


const socket = io();

socket.on('connect', () => {
    labelOffline.style.display = 'none';
    labelOnline.style.display = '';
})
socket.on('disconnect', () => {
    labelOffline.style.display = '';
    labelOnline.style.display = 'none';
    console.log("Nuevo user")
})
socket.on('enviar-mensaje', (payload)=> {
    console.log(payload.mensaje)
    alert(payload.mensaje)
    const id = 123456
})

send.addEventListener('click', () => {
    const mensaje = txtMensaje.value;

    const payload = {
        mensaje,
        id: '123ABC',
        fecha: new Date().getTime()
    }
    console.log(mensaje)

    socket.emit('enviar-mensaje', payload, ( id )=>{
        console.log('desde el server', id);
    });
})