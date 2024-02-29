export type CardType = {
   id: number;
   name: string;
   image: string;
   category: string;
   isLoading: boolean;
};

export interface ReviewInterface {
   authorName: string;
   authorImage: string;
   review: string;
}

export type DetailsPlaceType = {
   id: number;
   parentId?: number;
   name: string;
   image: string;
   category: string;
   description: string;
   reviews: ReviewInterface[];
   onBtnBook: () => void;
};

export type BookedCardType = DetailsPlaceType & {
   parentId: number;
   comment: string;
   tel: string;
   peopleCount: number;
};
