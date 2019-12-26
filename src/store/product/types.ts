export interface ProductState {
  products: Array<Product>;
  selectedPage: number;
  wishlist: Array<Product>;
  cart: Array<Product>;
  totalPrice: Number;
}

export interface Country {
  id: number;
  name: string;
  iso_code: string;
}

export interface City {
  id: number;
  name: string;
  country: Country;
  cover_image_url: string;
  url: string;
  time_zone: string;
}

export interface DurationRange {
  max: string;
  min: string;
}

export interface Language {
  code: string;
  name: string;
}

export interface GroupSize {
  code: string;
  name: string;
}

export interface Service {
  code: string;
  name: string;
}

export interface Feature {
  code: string;
  name: string;
}

export interface ServiceFee {
  currency: string;
  value: number;
  formatted_value: string;
  formatted_iso_value: string;
}

export interface RetailPrice {
  currency: string;
  value: number;
  formatted_value: string;
  formatted_iso_value: string;
}

export interface RetailPriceWithoutServiceFee {
  currency: string;
  value: number;
  formatted_value: string;
  formatted_iso_value: string;
}

export interface OriginalRetailPriceWithoutServiceFee {
  currency: string;
  value: number;
  formatted_value: string;
  formatted_iso_value: string;
}

export interface OriginalRetailPrice {
  currency: string;
  value: number;
  formatted_value: string;
  formatted_iso_value: string;
}

export interface Category {
  id: number;
  name: string;
  level: string;
  code: string;
  event_image_url: string;
  cover_image_url: string;
  url: string;
}

export interface ReviewsAggregatedInfo {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
}

export interface Flavour {
  id: number;
  name: string;
  active: boolean;
  slug: string;
}

export interface Vertical {
  id: number;
  name: string;
  active: boolean;
  code: string;
  slug: string;
  url: string;
  meta_title: string;
  meta_description: string;
  cover_image_url: string;
  relevance: number;
}

export interface Product {
  operational_days: string;
  max_confirmation_time: string;
  cutoff_time: string;
  booking_type: string;
  uuid: string;
  city: City;
  saves: number;
  title: string;
  relevance: number;
  relevance_venue: number;
  must_see: boolean;
  last_chance: boolean;
  top_seller: boolean;
  voucher_access_usage: string;
  temporary: boolean;
  description: string;
  about: string;
  meeting_point: string;
  duration: string;
  duration_range: DurationRange;
  validity: string;
  has_price_info_on_date: boolean;
  open: boolean;
  ticket_not_included: boolean;
  likely_to_sell_out: boolean;
  special_offer: boolean;
  exclusive: boolean;
  best_price: boolean;
  daily: boolean;
  languages: Language[];
  group_size: GroupSize[];
  food: any[];
  services: Service[];
  features: Feature[];
  highlights: string[];
  included: string[];
  not_included: string[];
  is_available_today: boolean;
  is_available_tomorrow: boolean;
  cover_image_url: string;
  service_fee: ServiceFee;
  retail_price: RetailPrice;
  retail_price_without_service_fee: RetailPriceWithoutServiceFee;
  original_retail_price_without_service_fee: OriginalRetailPriceWithoutServiceFee;
  original_retail_price: OriginalRetailPrice;
  discount: number;
  categories: Category[];
  reviews_number: number;
  reviews_avg: number;
  reviews_aggregated_info: ReviewsAggregatedInfo;
  latitude: number;
  longitude: number;
  url: string;
  flavours: Flavour[];
  verticals: Vertical[];
  giftable: boolean;
  has_passenger_info: boolean;
  has_extra_customer_data: boolean;
  buy_multiplier: number;
  quantity: number;
}
