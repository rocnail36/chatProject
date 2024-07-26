import { envs } from "./config/Env"
import { User } from "./database/models/User"
import { MoongoseDb } from "./database/Moongose"
import { Server } from "./presentation/Server"








(async() => {
    main()
})()




async  function main() {

    const {PORT,URI} = envs

    const server = new Server(PORT)


    MoongoseDb.connect(URI)



    server.start()


}