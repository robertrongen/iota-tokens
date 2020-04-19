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

