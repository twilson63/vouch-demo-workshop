# Vouch Service Demo

This is a demo repo of a vouch service implementation.

The purpose of this repo is to showcase the core functionality you will need to implement your vouch service.

## Endpoints

POST /

This endpoint needs to be implemented to capture the client that wants to be vouched, then you verify the signature and run your specific service validation process, then you need to post the vouch transaction and update the vouch dao contract.

Example

```js
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

```


See the `src` directory.

Questions

[Chat on Discord](https://discord.gg/kNS7nmPHKH)
