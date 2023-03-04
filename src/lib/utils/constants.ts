import { IStyle } from "@/src/types";

// Primary Vibes
export const imageVibes = [
  {
    StyleKey: "image_style",
    Style: "Image Style",
  },
  {
    StyleKey: "artist_style",
    Style: "Artist Style",
  },
  {
    StyleKey: "image_modifer",
    Style: "Image Modifer",
  },
];

type DHeader = {
  path: string;
  alt: string;
  Label: string;
};

export const DDHEADER: Array<DHeader> = [
  {
    path: "/2-black.png",
    alt: "Icon 2",
    Label: "Select your vibe",
  },
  {
    path: "/1-black.png",
    alt: "Icon 1",
    Label: "Choose Your Size",
  },
];

// Image Size
export const imageSize = [
  {
    name: "Small Size",
    label: "Small",
    Size: "256x256",
  },
  {
    name: "Medium Size",
    label: "Medium",
    Size: "512x512",
  },
  {
    name: "Large Size",
    label: "Large",
    Size: "1024x1024",
  },
];

// Image Modifers
export const imageModifiers = [
  "painterly",
  "watercolor",
  "pop art",
  "cartoon",
  "sketch",
  "oil painting",
  "grayscale",
  "sepia",
];

// Image Styles
export const colorSchemes = [
  "monochromatic",
  "analogous",
  "complementary",
  "triadic",
  "warm",
  "cool",
];

export const visualElements = [
  "texture",
  "pattern",
  "line",
  "shape",
  "contrast",
  "depth",
  "symmetry",
  "balance",
];

export const moods = [
  "moody",
  "whimsical",
  "dreamy",
  "playful",
  "dramatic",
  "mysterious",
  "romantic",
  "peaceful",
  "energetic",
];

export const ArtistStylePhrases = [
  "Create an artwork with the style of an artist in which",
  "Design an image inspired by the work of an artist in which",
  "Produce a painting with a similar style to the works of an artist in which",
];

export const ImageStylePhrases = [
  "Create a stunning realistic image in the style of",
  "Design a realistic picture with the aesthetic of",
  "Produce a realistic graphic with the vibe of",
];

export const ImageModifierPhrases = [
  "Transform a photo into a",
  "Edit an image to have a",
  "Manipulate a picture to feature a",
];

// Frontend Constants
export const IMAGE_STYLE: IStyle = {
  Painting: [
    "Digital Art",
    "Oil Painting",
    "Water Color",
    "Arcylic",
    "Airbrushed",
    "Comic Book",
    "Blueprint",
    "Ink Dot",
  ],

  Drawing: [
    "Illustration",
    "Cybersonic",
    "Pencil",
    "Pen",
    "Ink",
    "Calligraphy",
    "Charcoal",
    "Cartoon",
    "Comic Book",
    "Blue Screen",
    "Technical Sketch",
    "Ink Dot",
    "Line Art",
    "Crayon",
    "Pastel",
    "Chalkboard",
  ],

  Animation: [
    "Vintage Display",
    "Disney Animation",
    "Simpsons",
    "Anime",
    "Pixar",
  ],

  Screen: [
    "Video Game HD",
    "Nintendo",
    "3D Render",
    "8bit",
    "Emoji",
    "Low Poly",
    "Pixel Art",
    "ASCII",
  ],

  Photography: [
    "Realistic",
    "Portrait",
    "Polaroid",
    "War",
    "Wildlife",
    "Photojournalism",
    "Macro",
    "Long Exposure",
    "Fish Eye",
  ],

  Statue: ["Marble", "stone", "Wax"],

  RealLifeMaterials: [
    "Origami",
    "Paper Mache",
    "Paper Cutout",
    "Graffiti",
    "Halftone",
    "Cross Stitch",
    "Stained Glass",
    "Crystal",
    "Flowery",
  ],
};

// Artist Styles
export const ARTISTS_STYLE = [
  "Albert Bierstadt",
  "Andy Warhol",
  "Asaf Hanuka",
  "Aubrey Beardsley",
  "Claude Monet",
  "Diego Rivera",
  "Frida Kahlo",
  "Greg Rutkowski",
  "Hayao Miyazaki",
  "Hieronymus Bosch",
  "Jackson Pollock",
  "Leonardo da Vinci",
  "Michelangelo",
  "Pablo Picasso",
  "Salvador Dali",
  "Stanley Artgerm",
  "Thomas Kinkade",
  "Vincent van Gogh",
];

export const MODIFIERS_STYLE = [
  "Steampunk",
  "Synthwave",
  "Cyberpunk",
  "Detailed & Intricate",
  "Symbolic & Meaningful",
  "Cinematic Lighting",
  "Contre-Jour",
  "Futuristic",
  "Black & White",
  "Technicolor",
  "Warm",
  "Neon",
  "Colorful",
];
