const Iota = require('@iota/core')
const Converter = require('@iota/converter')

const iota = Iota.composeAPI({
   provider: 'https://nodes.devnet.iota.org:443'
})

const listenAddress = 'IXOGDENZIWASTKQSNPMQUDCFQXRMYTWNBVLOFMKFWEZNNBPYHSFGPVIMCRNIUBQQLVBQEEZIQ9XUADGHCHNTBISOV9'
const tag = 'IOTACADEMY9TUTORIAL9MESSAGE';
const query = {
   addresses: [listenAddress],
   tags: [tag]
}
const delay = 3000

const messages = {}
const findMessages = () => {
   iota.findTransactionObjects(query)
      .then(transactions => {
          transactions.map(transaction => {
              if (typeof messages[transaction.hash] == 'undefined') {
                   const msg = Converter.trytesToAscii(transaction.signatureMessageFragment.replace(/9*$/, ''))
                   messages[transaction.hash] = msg
                   console.log(msg)
               }
          })
      })
      .catch(err => {
          console.log(err)
      })
}
setInterval(() => findMessages(), delay)