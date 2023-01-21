import { Network, Alchemy } from 'alchemy-sdk';
const settings = {
    apiKey: "phZ7U_FKOQH8ml_HZWFiSFi2_P1BSFIT",
    network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(settings);
export default alchemy;