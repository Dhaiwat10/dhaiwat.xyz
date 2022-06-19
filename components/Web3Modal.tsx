import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  Link,
  Image,
  Heading,
  Spinner,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useAccount, useConnect } from 'wagmi';
import { useSignMessage } from 'wagmi';
import Confetti from 'react-confetti';
import { getOpenseaUrl, NFT_IMG_URL } from '../utils';
import { motion } from 'framer-motion';

const message = 'gm';

interface Web3ModalProps {
  isOpen: boolean;
  onClose: () => void;
  fetchEntries: () => Promise<void>;
}

export const Web3Modal: React.FC<Web3ModalProps> = ({
  isOpen,
  onClose,
  fetchEntries,
}) => {
  const [{ data, error: connectError }, connect] = useConnect();
  const [_, disconnect] = useAccount();
  const [__, signMessage] = useSignMessage({ message });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tokenId, setTokenId] = useState('');
  const [error, setError] = useState<any>();
  const [showErrors, setShowErrors] = useState(false);

  const handleSign = async () => {
    setLoading(true);
    try {
      const response = await signMessage();
      if (!response.error) {
        const res = await fetch(`/api/verify?message=${response.data}`);
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();
        const { tokenId } = data;
        console.log({ data });
        setTokenId(tokenId);
        setSuccess(true);
        setShowErrors(false);
      }
    } catch (err: any) {
      setError(err);
      setSuccess(false);
    } finally {
      setShowErrors(true);
      fetchEntries();
      setLoading(false);
    }
  };

  const resetState = () => {
    setTokenId('');
    setSuccess(false);
    setShowErrors(false);
    setError(undefined);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
        resetState();
      }}
    >
      {success && <Confetti style={{ zIndex: 2000 }} />}
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Connect your wallet</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {data.connected ? (
            <VStack>
              {success ? (
                <VStack>
                  <Text>
                    As a thank you, I minted you an NFT ^_^ You can view it on
                    Opensea{` `}
                    <Link
                      isExternal
                      href={getOpenseaUrl(tokenId)}
                      textDecoration='underline'
                    >
                      here
                    </Link>
                    {` <3`}
                  </Text>
                  <Image
                    as={motion.img}
                    onClick={() =>
                      window.open(getOpenseaUrl(tokenId), '_blank')
                    }
                    cursor='pointer'
                    src={NFT_IMG_URL}
                    width={350}
                    rounded='lg'
                    dropShadow='lg'
                    alt='A thank you message for you'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </VStack>
              ) : (
                <>
                  {' '}
                  {loading && (
                    <VStack>
                      <Text>
                        Sign the message and wait just a second... preparing
                        something for you. It will be worth the wait! {`:)`}
                      </Text>
                      <Spinner />
                    </VStack>
                  )}
                  <Button onClick={handleSign} disabled={loading}>
                    Sign message
                  </Button>
                  <Button variant='outline' onClick={disconnect || loading}>
                    Disconnect
                  </Button>
                </>
              )}
            </VStack>
          ) : (
            <VStack>
              {data.connectors.map((x) => (
                <Button
                  className='bg-slate-200 p-2 rounded'
                  key={x.id}
                  onClick={async () => {
                    try {
                      if (!data.connected) {
                        await connect(x);
                      }
                    } catch (e) {
                      console.log(e);
                    }
                  }}
                >
                  {x.name}
                  {!x.ready && ' (unsupported)'}
                </Button>
              ))}
            </VStack>
          )}
        </ModalBody>
        {showErrors && (
          <ModalFooter textColor='red.700'>
            <VStack>
              {connectError && <Text>{connectError.message}</Text>}
              {error ? (
                error.message === 'Bad Request' ? (
                  <Text>You already signed it ser</Text>
                ) : (
                  <Text>{error.message}</Text>
                )
              ) : null}
            </VStack>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
};
