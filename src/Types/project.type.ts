export interface astroid_Detail {
  absolute_magnitude_h?: number;
  close_approach_data?: [];
  designation?: string;
  estimated_diameter?: {};
  id?: string;
  is_potentially_hazardous_asteroid?: boolean | undefined;
  is_sentry_object?: boolean;
  links?: {
    self: string;
  };
  name?: string;
  name_limited?: string;
  nasa_jpl_url?: string;
  neo_reference_id?: string;
  orbital_data?: {};
}

export interface mainInitialType {
  randomAsteroidList: astroid_Detail[];
  searchtext: string | undefined;
  selectedAsteroid: astroid_Detail;
}

export interface allAstroidType {
  near_earth_objects: astroid_Detail[];
}

export interface TypographyInfoPropType {
  title: string;
  value?: string;
  link?: string;
}

export interface PageType {
  number: number;
  size: number;
  total_elements: number;
  total_pages: number;
}
