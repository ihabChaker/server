const socket = io()
socket.on("etat", (data) => {

    console.log(data)
})
socket.on("mike", data => {
    console.log(data)
})
const test1 = () => {
    socket.emit("message-admin", { vehiculeId: document.getElementById("rec_id").value, content: document.getElementById("message").value })
}
socket.on("message-admin", message => {
    let obj = JSON.parse(message)
    console.log((obj['content']))

})
const test2 = () => {
    const val = document.getElementById("room_id").value
    const val2 = document.getElementById("rec_id").value
    // console.log(val)w
    socket.emit("register-admin", { adminId: val, vehiculeId: val2 })
}
