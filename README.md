# Challenge - Sr. Front-end Developer

## Live Demo

Visit at [https://dataguard.vercel.app/](https://dataguard.vercel.app/)

- Create User Interface as per the Design on next slides

- Create a mock JSON API server for handling GET and POST requests

- Retrieve data from that mock server, use it in your components.
- Make sure the Toggle Switches are working with the API.

- Ensure the overall Power Switch disables all the plugins in all the tabs as per the Design.
- Switching between Tabs, should change the URL.

## Batch Update

I optimize my approach by batching requests to update the active status of all plugins with just one request.

```js
server.put('/batch-plugins', (req, res) => {
  const { active } = req.body

  const plugins = router.db.get('plugins').value()

  const updatePlugins = plugins.map((plugin) => ({ ...plugin, active }))

  router.db.set('plugins', updatePlugins).write()

  res.json({ plugins: router.db.get('plugins').value() })
})
```
