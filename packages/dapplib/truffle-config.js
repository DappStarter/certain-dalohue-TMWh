require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom clog other security notice birth muscle collect hunt dry flock gather'; 
let testAccounts = [
"0x902a106feaabce64ba997c9229c4dd72f53f0e75e7ff68a56cea92c8f6e22028",
"0x8763fb58d8caf5e520932d8d33c08086b893ddcc088cf19a80195f8d4e24f6bc",
"0x5d619e993eca45c0cdaa28580fe927e76da2120011435fdf45e726c98e9c9dea",
"0x7d0f27584c0e362f8afb666a34af756213a7e5189aad96faf0302529a759dc27",
"0x2c34828e6a8f3719d72111575447b1cb66b4969e0af89aa77bf99dc812451e53",
"0x4d341a3376fee5daf69d1692e66d902424b39458ea28747215570f25f80fee2b",
"0x149227b4428a4b83f6bd51778d9ad29698994035dbafe8f60b5dd24f5a6f42aa",
"0xd6181b9131358e10f99137e44168b033f40476db4e2ba348c547c7436cf3ed21",
"0xc558e725a76dbd4dfd334546ff5f4fbd385062cca18f82da445283c3c1710bf9",
"0x8f5f1791996cb1751205fc320df81cf9a186e51359918404704091e0af8d1339"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

