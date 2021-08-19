export interface Pests {
  name: string;
  description: string;
  image_url: string;
  gender: Gender[];
}

export interface Gender {
  name: string;
  description: string;
  about_url: string;
  image_url: string;
}
