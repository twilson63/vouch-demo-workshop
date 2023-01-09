import express from 'express'
import cors from 'cors'

import verify from './verify'
import vouch from './vouch'
import dao from './dao'

const app = express()

app.use(cors())

app.post('/', express.json(), (req, res) =>
  verify(req.body)
    .then(ctx => {
      // TODO: Human Check
      // Check and see if this address has stamps
      return ctx
    })
    .then(vouch) // write a vouch Transaction
    .then(dao) // update the VouchDAO Contract
    .then(res.json.bind(res))
    .catch(err => res.status(400).json(err))
)

app.get('/', (req, res) => res.json({ name: 'Vouch Service v1' }))

app.listen(8000)