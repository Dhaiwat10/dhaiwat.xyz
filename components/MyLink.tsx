import { Link } from '@chakra-ui/react';

export const MyLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link href={href} target='_blank' color='green.300'>
    {children}
  </Link>
);
