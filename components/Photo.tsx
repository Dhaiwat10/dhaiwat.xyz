import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { VStack } from '@chakra-ui/react';

interface PhotoProps {
  src: string;
  alt: string;
}

export const Photo: FC<PhotoProps> = ({ src, alt }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <VStack textAlign='center'>
      <motion.img
        style={{
          border: '3px solid white',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        }}
        src={src}
        alt={alt}
        width='300px'
        whileHover={{
          width: '400px',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      {/* {hovered && (
        <motion.span
          key={`img-${src}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {alt}
        </motion.span>
      )} */}
    </VStack>
  );
};
