export const NFT_IMG_URL =
  'https://5err3orxw6exogclz2umnibertxwazbx3a2spo5grjqzmt2maa.arweave.net/6SMduje3iXcYS86oxqAkjO9gZDfYN_Se7pophlk9MAA';
export const NFT_CONTRACT_ADDRESS =
  '0x6614B752B8bab8ef7d82DEe6b9a3982d6b29a5f1';
export const getOpenseaUrl = (tokenId: string) => {
  return `https://opensea.io/assets/matic/${NFT_CONTRACT_ADDRESS}/${tokenId}`;
};
