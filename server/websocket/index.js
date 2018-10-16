module.exports = function(server) {
  const io = require("socket.io")(server);

  io.on("connection", function(socket) {
    socket.on("message", function(data) {
      console.log(data);
      socket.emit("message", "reply_from_server");
    });
  });
};
