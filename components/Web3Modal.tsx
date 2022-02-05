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
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useAccount, useConnect } from 'wagmi';
import { useSignMessage } from 'wagmi';
import Confetti from 'react-confetti';

const message = 'gm';

interface Web3ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Web3Modal: React.FC<Web3ModalProps> = ({ isOpen, onClose }) => {
  const [{ data, error: connectError, loading }, connect] = useConnect();
  const [_, disconnect] = useAccount();
  const [
    { data: signData, error: signError, loading: signLoading },
    signMessage,
  ] = useSignMessage({ message });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<any>();
  const [showErrors, setShowErrors] = useState(false);

  const handleSign = async () => {
    try {
      const response = await signMessage();
      if (!response.error) {
        const res = await fetch(`/api/verify?message=${signData}`);
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        setSuccess(true);
        setShowErrors(false);
      }
    } catch (err: any) {
      setError(err);
      setSuccess(false);
    } finally {
      setShowErrors(true);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
        setError(null);
        setShowErrors(false);
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
              <Button onClick={handleSign} disabled={signLoading}>
                Sign message
              </Button>
              <Button variant='outline' onClick={disconnect}>
                Disconnect
              </Button>
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
              {signError && <Text>{signError.message}</Text>}
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
