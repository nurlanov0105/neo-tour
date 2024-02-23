import { CardType } from '@/shared/types';

export type GetToursArgs = {
   category: string;
};

export type StateTypes = {
   places: CardType[];
   category: string;
};
