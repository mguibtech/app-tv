export interface EpisodeModel {
    id: number;
    url: string;
    name: string;
    season: number;
    number: number;
    type: string;
    airdate: string;
    airtime: string;
    airstamp: string;
    runtime: number;
    rating: Rating;
    image: Image;
    summary: string;
    _links: Links;
  }
  
  export interface Links {
    self: Self;
    show: Self;
  }
  
  export interface Self {
    href: string;
  }
  
  export interface Image {
    medium: string;
    original: string;
  }
  
  export interface Rating {
    average: number;
  }