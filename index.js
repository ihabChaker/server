const express = require('express')
const http = require('http')
const socketio = require("socket.io")
const app = express()
const path = require("path")
const server = http.createServer(app)

const io = socketio(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})
const users = []
app.use(express.static(path.join(__dirname, "test")))
const joinUser = (id, room, userName) => {
    const user = { id, room, userName }
    users.push(user)
    return user
}
const getCurrentUser = (id) => users.find(user => user.id === id)
io.on("connection", socket => {
    console.log("new connection")
    socket.emit('event', "hello")

    //io.emit("message", "welccome the new user")

    // socket.on("register-admin", ({ adminId, vehiculeId }) => {
    //     socket.join(adminId)
    //     io.to(vehiculeId).emit("admin-id", adminId)
    // })
    // socket.on('message-admin', (message) => {
    //     if (typeof message !== 'object') {
    //         socket.to(message.vehiculeId).broadcast.emit("message-admin", message)
    //     } else {
    //         socket.to(message.adminId).broadcast.emit("message-admin")
    //     }

    //     console.log(message)
    // })
    // socket.on("message-vehicule",)
    // // socket.on('join-room', room => {
    // //     joinUser(socket.id, room, "jake")
    // //     socket.join(room)
    // // })
    // // socket.on("message", data => {
    // //     io.to(getCurrentUser(socket.id).room).emit("message", "new message")
    // // })
    // socket.on("register-vehicule", vehiculeId => {
    //     socket.join(vehiculeId)
    // })
    // socket.on("etat-vehicule", message => {
    //     console.log(message)
    //     socket.to(message.adminId).broadcast.emit("message", message.data)
    // })

})

server.listen(5000, () => {
    console.log("listening on port 5000")
})