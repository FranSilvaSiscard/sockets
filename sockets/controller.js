

const socketController = (socket) => {
    console.log('Cliente conectado', socket.id );

    socket.on('disconnect', () => {
        console.log("cliente desconectado");
    })

    socket.on('enviar-mensaje', (payload, callback) => {
        const id = 123131
       socket.broadcast.emit('enviar-mensaje', payload)
       callback(id);
    })
}

module.exports = {
    socketController
}