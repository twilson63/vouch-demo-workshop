import Arweave from 'arweave'

const arweave = Arweave.init({ host: 'arweave.net', port: 443, protocol: 'https' })

export default async function (body: Record<string, any>) {
  const tx = arweave.transactions.fromRaw(body)
  if (await arweave.transactions.verify(tx)) {
    const address = arweave.utils.bufferTob64Url(
      await arweave.crypto.hash(arweave.utils.b64UrlToBuffer(tx.owner))
    )
    return { address }
  } else {
    return Promise.reject({ message: 'Could not verify tx!' })
  }
}