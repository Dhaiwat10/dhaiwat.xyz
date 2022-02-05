import { Box, HStack, Link, SimpleGrid, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useEnsLookup } from 'wagmi';
// @ts-expect-error no type defs for react-blockies
import Blockies from 'react-blockies';

const getTruncatedAddress = (address: string) => {
  return address.slice(0, 5) + '..' + address.slice(-4);
};

interface AccountProps {
  address: string;
}

export const Account: FC<AccountProps> = ({ address }) => {
  const [{ data: ens }] = useEnsLookup({
    address,
  });

  return (
    <SimpleGrid
      columns={2}
      w='100%'
      templateColumns={'10% 90%'}
      spacingX='8'
      alignItems='flex-start'
    >
      <Box borderRadius='7px'>
        <Blockies seed={address} />
      </Box>

      <Link href={`https://etherscan.io/address/${address}`} target='_blank'>
        {ens || getTruncatedAddress(address)}
      </Link>
    </SimpleGrid>
  );
};
