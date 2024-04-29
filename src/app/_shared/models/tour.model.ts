export interface TourPackages {
    img: string;
    title: string;
    price: string;
    places: Array<string>;
}

export interface AllInOneTourPackages {
    img: string;
    title: string;
    price: string;
    tourItinerary: Array<TourItinerary>;
    inclusion: Array<string>;
    exclusion: Array<string>
}

export interface TourItinerary {
    tourImg: string;
    day: string;
    tourTitle: string;
    places: Array<string>;
}