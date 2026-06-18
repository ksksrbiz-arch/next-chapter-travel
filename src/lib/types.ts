/** Which co-owner's expertise an item is attributed to. The public site stays
 *  agency-branded; this only drives the small "Curated by" attribution. */
export type Expert = "wendy" | "jessica" | "both";

export type ExperienceCategory =
  | "theme-parks"
  | "cruises"
  | "all-inclusive"
  | "family"
  | "international";

export interface Experience {
  slug: string;
  title: string;
  location: string;
  blurb: string;
  category: ExperienceCategory;
  expert: Expert;
  priceFrom?: string;
  duration?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location?: string;
  quote: string;
  tripType: string;
  expert: Expert;
  rating: number;
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  specialties: string[];
  bio: string;
  expert: Exclude<Expert, "both">;
}

/** Shape of the row written to the `leads` table. */
export interface LeadInput {
  full_name: string;
  email: string;
  phone?: string;
  interest: "theme-parks" | "cruises" | "both" | "not-sure";
  travel_dates?: string;
  party_size?: string;
  budget?: string;
  message?: string;
}
