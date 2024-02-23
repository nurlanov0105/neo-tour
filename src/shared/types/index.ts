export type CardType = {
   tripId: number;
   name: string;
   tripImage: string;
   category: string;
   isLoading: boolean;
};

export interface ReviewInterface {
   fullName: string;
   userImage: string;
   comment: string;
}

export type DetailsPlaceType = {
   tripId: number;
   name: string;
   tripImage: string;
   place: string;
   description: string;
   commentResponse: ReviewInterface[];
   onBtnBook: () => void;

   continent?: boolean;
   popular?: boolean;
   mostVisited?: boolean;
};
