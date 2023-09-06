// server.js
import jsonServer from 'json-server'
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(jsonServer.bodyParser)

server.use(middlewares)

server.put('/batch-plugins', (req, res) => {
  const { active } = req.body

  const plugins = router.db.get('plugins').value()

  const updatePlugins = plugins.map((plugin) => ({ ...plugin, active }))

  router.db.set('plugins', updatePlugins).write()

  res.json({ plugins: router.db.get('plugins').value() })
})

server.use(router)

server.listen(3001, () => {
  console.log('JSON Server is running')
})

export default server
