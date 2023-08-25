// server.js
import jsonServer from 'json-server'
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(jsonServer.bodyParser)

server.use(middlewares)

server.put('/batch-plugins', (req, res) => {
  const { active } = req.body

  // if (!plugins || !Array.isArray(plugins)) {
  //   return res.status(400).json({ message: 'Invalid request body' })
  // }

  // plugins.forEach(({ id, active }) => {
  //   router.db.get('plugins').find({ id }).assign({ active }).write()
  // })

  console.log(router.db.get('plugins'))

  router.db.get('plugins').each((plugin) => plugin.assign({ active }).write())

  res.json({ plugins: router.db.get('plugins') })
})

server.get('/batch', (req, res) => {
  res.json({ message: 'Batch' })
})

server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})

// "dev": "json-server --watch db.json & vite",
