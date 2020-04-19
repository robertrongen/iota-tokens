// require IOTA Modules
const Iota = require('@iota/core')
const Converter = require('@iota/converter')

// inititalize iota object
const iota = Iota.composeAPI({
    provider: 'https://nodes.devnet.iota.org:443'
    
})

// our seed
const seed = 'LKCZPHLLDIYRRJGKLM99ZOP9UICYDPMXROFZQXFHNSLR9JM9ZEUEGZSDMDJ9VJTFKIHIIGFJDNMFQOWPN'

// address to send the tokens from
const inputAddress = 'IXOGDENZIWASTKQSNPMQUDCFQXRMYTWNBVLOFMKFWEZNNBPYHSFGPVIMCRNIUBQQLVBQEEZIQ9XUADGHCHNTBISOV9'

// address to send the tokens to
const outputAddress = '9NJTSJIFGWRXMAHFQRSJLKNMPLPEOY9DSTREPWBTBJCYRVYWYOTDHWNCQKG99JTLKRZKWJDZEFCTCCNPXBHBPDLGVD'

// tag our transactions for later retrieval
const tag = 'IOTACADEMY9TUTORIAL9TOKEN99';

// set depth not too high but not too low
const depth = 3

// minWeightMagnitude is 9 for DevNet
const minWeightMagnitude = 9

// define outputs
const transfers = [
    {
        value: 1,
        address: outputAddress,
        tag: tag
    }
]

// define inputs
const options = {
    inputs: [
        {
            address: inputAddress,
            keyIndex: 0,
            security: 2,
            balance: 1
        }
      ],
      //In the field remainderAddress you have to store the address without checksum
      // iow only as 81 tryte long string (delete last 9 chars), otherwise an error will be ejected.
      remainderAddress: 'JOKTKOTYZGLFFFFNGDORBZB9YYFQ9QZFQGKHGILGZIZG9TZDE9LSPOOSXETZHCBCLGWQQAVKWCSDUNTRC'
    }

// prepare bundle and send token
iota.prepareTransfers(seed, transfers, options)
    .then(trytes => iota.sendTrytes(trytes, depth, minWeightMagnitude))
    .then(bundle => {
        console.log(bundle)
    })
    .catch(err => {
        console.log(err)
    })

