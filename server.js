const jsonServer = requrie("json-server")
const server = jsonServer.create()
const router = jsonServer.router("db.json")
const middlewares = jsonServer.default()
const port = process.env.PORT || 3000

server.use(middlewares)
server.use(router)

server.use(port)
