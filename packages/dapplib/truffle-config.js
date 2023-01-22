require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty success system normal note spider undo guess entire obscure transfer'; 
let testAccounts = [
"0x8ace3dab331e3ab9dd32b6233e08073dbc07265cbceed083df52bff51fb87dab",
"0xaf76271684c0e1b7fc80f15a7676dcac2fd4147ee3a4103a98871a8618e9e376",
"0xd9e4cd74ba3b2c7e9488248d1c18d9f48c334bcb3be5f1908d67943068d39658",
"0x04a03a373f7a7794f105a7bf197e596eb0c1cfe22816633749c05783b28c53f0",
"0xce4e30ec97526fec81579c5b63e7541d2b141d76792a4a130fbdad1fabcabc46",
"0x97cedd432d632d19beb4399c120e418c676462ca0855bbce8681668f7ae7b32b",
"0x98a88e5c3e1ad78c4b7f73d550aa0750701e516bcf95069ed1cf306123ba42e7",
"0xd776edefb5455b56893b3e1cfd1030d49bf2a5bf55d925cfd3db434e5f63cb6f",
"0x898e272ef3019f7290a1fad78f982e508c7ac810ba62c73cbb7ed44c9f24aa92",
"0xb4c81f712fa1d0e5f283f88525fdc7e4efc41e3698d20bbde4a3f42675a031e1"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


