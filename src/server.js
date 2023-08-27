// server.js
import jsonServer from 'json-server'
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(jsonServer.bodyParser)

server.use(middlewares)

server.put('/batch-plugins', (req, res) => {
  const { active } = req.body

  const todos = router.db.get('plugins').value()

  const updatedTodos = todos.map((todo) => {
    return { ...todo, active: false }
  })

  router.db.set('plugins', updatedTodos).write()

  // router.db.get('plugins').each((plugin) => plugin.assign({ active }).write())

  res.json({ plugins: router.db.get('plugins').value() })
})

server.get('/batch', (req, res) => {
  res.json({ message: 'Batch' })
})

server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})

// "dev": "json-server --watch db.json & vite",
