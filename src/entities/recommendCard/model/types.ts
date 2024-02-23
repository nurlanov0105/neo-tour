import { CardType } from '@/shared/types';

export type GetRecommendsArgs = {
   pageSize: number;
   currentPage: number;
};

export type GetFetchData = {
   tripResponseList: CardType[];
   pageSize: number;
   currentPage: number;
};

export type StateTypes = {
   recommendedPlaces: CardType[];
   pageSize: number;
   currentPage: number;
   totalPages: number;
};
