import { SimpleGrid } from '@chakra-ui/react';
import type { FC } from 'react';
import { useMemo } from 'react';
import Tweet from 'react-tweet-embed';

interface IWallOfLoveProps {
  showFull?: boolean;
  colCount?: number;
}

const tweetIds = [
  '1521520057561485314',
  '1521472184690036739',
  '1521617100619530245',
  '1521513623864156161',
  '1521513413243023361',
  '1521469208843927552',
  '1522363462235660289',
  '1522115848479166465',
  '1521847490944933888',
  '1521814694863986688',
  '1521607055387373570',
  '1521508709138116620',
  '1521476728874430464',
  '1521468502980321281',
  '1521468385288237060',
  '1521157221702283264',
  '1521151684411641856',
  '1520756287939690501',
  '1513769420895698947',
  '1513691520569733120',
  '1513666088168534027',
  '1513665867279523840',
  '1513762339325022212',
];

export const WallOfLove: FC<IWallOfLoveProps> = ({
  showFull = true,
  colCount,
}) => {
  const shuffledTweetIds = useMemo(
    () => [...tweetIds].sort(() => Math.random() - 0.5),
    []
  );

  const slicedTweetIds = useMemo(
    () => (showFull ? shuffledTweetIds : shuffledTweetIds.slice(0, 2)),
    [shuffledTweetIds, showFull]
  );

  return (
    <SimpleGrid
      columns={
        colCount || {
          sm: 1,
          md: 1,
          lg: 2,
          xl: 3,
        }
      }
    >
      {slicedTweetIds.map((tweetId) => (
        <Tweet tweetId={tweetId} key={tweetId} />
      ))}
    </SimpleGrid>
  );
};
