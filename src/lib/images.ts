/**
 * Curated, license-free destination photography (Unsplash).
 * Each URL was validated to resolve before being added here. Swap any entry
 * for the agency's own licensed photography (e.g. Vercel Blob) before launch —
 * just keep the { id, alt } shape.
 */

const BASE = "https://images.unsplash.com/photo-";

/** Build a sized, auto-formatted Unsplash URL from a photo id. */
export function unsplash(id: string, w = 1600): string {
  return `${BASE}${id}?auto=format&fit=crop&w=${w}&q=70`;
}

export type Photo = { id: string; alt: string };

export const photos = {
  heroBeach: {
    id: "1507525428034-b723cf961d3e",
    alt: "Turquoise water meeting a powder-white tropical beach",
  },
  cruise: {
    id: "1548574505-5e239809ee19",
    alt: "Cruise ship gliding past a coastline at golden hour",
  },
  themePark: {
    id: "1567617849031-8655483b300b",
    alt: "Theme-park roller coaster soaring against a clear blue sky",
  },
  overwater: {
    id: "1601999705946-fbf42c3c6c66",
    alt: "Overwater villas above a calm turquoise lagoon",
  },
  romance: {
    id: "1617376431454-8195cf1fd668",
    alt: "Couple sharing a sunset on a romantic getaway",
  },
  santorini: {
    id: "1570077188670-e3a8d69ac5ff",
    alt: "Whitewashed clifftop village above the Mediterranean Sea",
  },
  family: {
    id: "1576696058573-12b47c49559e",
    alt: "Family enjoying a sunny day together on the beach",
  },
  flatlay: {
    id: "1488646953014-85cb44e25828",
    alt: "Map, compass and camera laid out for trip planning",
  },
} satisfies Record<string, Photo>;

/** Maps an experience category to its hero photo. */
export const categoryPhoto: Record<string, Photo> = {
  "theme-parks": photos.themePark,
  cruises: photos.cruise,
  "all-inclusive": photos.overwater,
  family: photos.family,
  international: photos.santorini,
};
