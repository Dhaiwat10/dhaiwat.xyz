import { HStack, Text } from '@chakra-ui/react';
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
    <HStack>
      <Blockies seed={address} />
      <Text>{ens || getTruncatedAddress(address)}</Text>
    </HStack>
  );
};
