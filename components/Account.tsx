import { Box, HStack, SimpleGrid, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useEnsLookup, useProvider } from 'wagmi';
// @ts-expect-error no type defs for react-blockies
import Blockies from 'react-blockies';
import { Address } from '@web3-ui/components';
import { Web3Provider } from '@ethersproject/providers';

const getTruncatedAddress = (address: string) => {
  return address.slice(0, 5) + '..' + address.slice(-4);
};

interface AccountProps {
  address: string;
}

export const Account: FC<AccountProps> = ({ address }) => {
  const provider = useProvider();

  return (
    <SimpleGrid
      columns={2}
      w='100%'
      templateColumns={'10% 90%'}
      spacingX='8'
      alignItems='flex-start'
    >
      <Box>
        <Blockies seed={address} />
      </Box>

      <Address
        value={address}
        copiable
        shortened
        ens
        provider={provider as Web3Provider}
      />
    </SimpleGrid>
  );
};
