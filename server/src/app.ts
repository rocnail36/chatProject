import { envs } from "./config/Env"
import { User } from "./database/models/User"
import { MoongoseDb } from "./database/Moongose"
import { Server } from "./presentation/Server"
import { SocketServer } from "./presentation/Socket"


(async() => {
    main()
})()


async  function main() {

    const {PORT,URI} = envs

    const server = new Server(PORT)
    const socket = new SocketServer(server.httpServer)

    MoongoseDb.connect(URI)

    socket.start()
    server.start()


}