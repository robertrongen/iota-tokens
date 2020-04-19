const Iota = require('@iota/core')
const Converter = require('@iota/converter')

const iota = Iota.composeAPI({
    provider: 'https://nodes.devnet.iota.org:443'
    
})

const seed = 'LKCZPHLLDIYRRJGKLM99ZOP9UICYDPMXROFZQXFHNSLR9JM9ZEUEGZSDMDJ9VJTFKIHIIGFJDNMFQOWPN'
const inputAddress = 'IXOGDENZIWASTKQSNPMQUDCFQXRMYTWNBVLOFMKFWEZNNBPYHSFGPVIMCRNIUBQQLVBQEEZIQ9XUADGHCHNTBISOV9'
const outputAddress = '9NJTSJIFGWRXMAHFQRSJLKNMPLPEOY9DSTREPWBTBJCYRVYWYOTDHWNCQKG99JTLKRZKWJDZEFCTCCNPXBHBPDLGVD'
const tag = 'IOTACADEMY9TUTORIAL9TOKEN99';

const depth = 3
const minWeightMagnitude = 9
// Define the transaction

const transfers = [
    {
        value: 1,
        address: outputAddress,
        tag: tag
    }
]

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

// Create the transaction
iota.prepareTransfers(seed, transfers, options)
    .then(trytes => iota.sendTrytes(trytes, depth, minWeightMagnitude))
    .then(bundle => {
        console.log(bundle)
    })
    .catch(err => {
        console.log(err)
    })

