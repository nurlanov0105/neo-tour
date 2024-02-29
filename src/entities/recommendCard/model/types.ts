import { CardType } from '@/shared/types';

export type GetRecommendsArgs = {
   pageSize: number;
   currentPage: number;
};

export type GetFetchData = {
   items: CardType[];
   meta: any;
};

export type StateTypes = {
   recommendedPlaces: CardType[];
   pageSize: number;
   currentPage: number;
   totalPages: number;
};
