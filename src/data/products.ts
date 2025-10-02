// Course types and interfaces
export interface CourseSpecifications {
  [key: string]: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  images: string[];
  video?: string; // Optional video preview
  videos?: string[]; // Multiple course videos for premium courses
  description: string;
  detailedDescription: string;
  category: string;
  features: string[];
  specifications: CourseSpecifications;
  inStock: boolean;
}

// Helper function to get course image with fallback
export const getProductImage = (productId: number, imageIndex: number = 1): string => {
  // Используем единое изображение для всех курсов
  return `/images/pic_post_5.jpg`;
};

// Helper function to get all available images for a course
export const getProductImages = (productId: number): string[] => {
  // Для всех курсов используем автогенерацию из видео
  return [getProductImage(productId)];
};

// Helper function to get course video preview
export const getProductVideo = (productId: number): string | undefined => {
  if (productId === 1) {
    return "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (1).mp4";
  }
  if (productId === 2) {
    return "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (2).mp4";
  }
  if (productId === 3) {
    return "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (3).mp4";
  }
  if (productId === 4) {
    return "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (4).mp4";
  }
  if (productId === 5) {
    return "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (5).mp4";
  }
  if (productId === 6) {
    return "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (6).mp4";
  }
  if (productId === 7) {
    return "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (7).mp4";
  }
  if (productId === 8) {
    return "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (8).mp4";
  }
  if (productId === 9) {
    return "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (9).mp4";
  }
  if (productId === 10) {
    return "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (10).mp4";
  }
  if (productId === 11) {
    return "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (11).mp4";
  }
  return undefined;
};

// Helper function to get course videos (for premium courses with multiple videos)
export const getProductVideos = (productId: number): string[] | undefined => {
  // Courses 5-7: 2 videos each
  if (productId === 5) {
    return [
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (12).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (13).mp4"
    ];
  }
  if (productId === 6) {
    return [
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (14).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (15).mp4"
    ];
  }
  if (productId === 7) {
    return [
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (13).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (17).mp4"
    ];
  }
  
  // Courses 8-10: 3 videos each
  if (productId === 8) {
    return [
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (18).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (19).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (20).mp4"
    ];
  }
  if (productId === 9) {
    return [
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (1).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (2).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (3).mp4"
    ];
  }
  if (productId === 10) {
    return [
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (4).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (5).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (6).mp4"
    ];
  }
  
  // Course 11: 4 videos
  if (productId === 11) {
    return [
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (7).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (8).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (9).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (10).mp4"
    ];
  }
  
  return undefined;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Introduction to Digital Illustration",
    price: 6.99,
    image: getProductImage(1),
    images: getProductImages(1),
    video: getProductVideo(1),
    description: "Learn digital illustration basics: color meaning, symbolism, and visual communication fundamentals.",
    detailedDescription: "Master the foundations of digital illustration with essential topics including color theory, color meaning and symbolism, visual communication principles, and basic illustration techniques. Perfect starting point for aspiring digital artists.",
    category: "Illustration Basics",
    features: [
      "18 minutes of foundational content",
      "Color theory fundamentals",
      "Visual communication principles",
      "Digital art introduction",
      "Illustration basics and techniques"
    ],
    specifications: {
      "Duration": "18 minutes",
      "Level": "Complete Beginner",
      "Language": "English",
      "Topics": "Color theory, visual communication",
      "Access": "6 months",
      "Certificate": "Basic completion badge"
    },
    inStock: true
  },
  {
    id: 2,
    name: "Color Theory & Color Schemes Mastery",
    price: 9.99,
    image: getProductImage(2),
    images: getProductImages(2),
    video: getProductVideo(2),
    description: "Master color schemes, saturation, and color relationships for stunning digital illustrations.",
    detailedDescription: "Deep dive into professional color theory including color schemes, saturation techniques, and color relationships. Learn to create harmonious color palettes and understand how colors work together in digital illustration.",
    category: "Color Theory",
    features: [
      "25 minutes of color theory training",
      "Color scheme creation",
      "Saturation mastery",
      "Color harmony techniques",
      "Professional palette creation"
    ],
    specifications: {
      "Duration": "25 minutes",
      "Level": "Beginner",
      "Topics": "Color schemes, saturation, harmony",
      "Skills": "Palette creation, color mixing",
      "Access": "8 months",
      "Support": "Community forum access"
    },
    inStock: true
  },
  {
    id: 3,
    name: "Visual Communication in Art",
    price: 19.99,
    image: getProductImage(3),
    images: getProductImages(3),
    video: getProductVideo(3),
    description: "Learn visual storytelling, communication principles, and how to convey messages through illustration.",
    detailedDescription: "Master visual communication in art with comprehensive training on storytelling through illustration, visual narrative techniques, and effective communication principles. Learn to create illustrations that speak to your audience.",
    category: "Visual Communication",
    features: [
      "32 minutes of communication training",
      "Visual storytelling techniques",
      "Narrative illustration methods",
      "Message conveyance strategies",
      "Practical communication exercises"
    ],
    specifications: {
      "Duration": "32 minutes",
      "Level": "Beginner",
      "Topics": "Visual storytelling, communication",
      "Practice": "Multiple illustration exercises",
      "Access": "10 months",
      "Bonus": "Visual communication guide"
    },
    inStock: true
  },
  {
    id: 4,
    name: "Color and Emotions in Illustration",
    price: 29.99,
    image: getProductImage(4),
    images: getProductImages(4),
    video: getProductVideo(4),
    description: "Master the emotional impact of color in art, learn color psychology and storytelling through color.",
    detailedDescription: "Explore the deep connection between color and emotions in illustration. Learn color psychology, emotional color palettes, and how to use color to tell compelling stories and evoke specific feelings in your artwork.",
    category: "Color Psychology",
    features: [
      "42 minutes of emotional color training",
      "Color psychology principles",
      "Emotional palette creation",
      "Storytelling through color",
      "Practical emotion projects"
    ],
    specifications: {
      "Duration": "42 minutes",
      "Level": "Intermediate",
      "Topics": "Color psychology, emotions, storytelling",
      "Projects": "Multiple emotional illustration projects",
      "Access": "8 months",
      "Bonus": "Color emotion reference guide"
    },
    inStock: true
  },
  {
    id: 5,
    name: "Light Sources & Lighting Techniques",
    price: 39.99,
    image: getProductImage(5),
    images: getProductImages(5),
    video: getProductVideo(5),
    videos: getProductVideos(5),
    description: "Master different light sources and professional lighting techniques for realistic illustrations.",
    detailedDescription: "Advance your illustration skills with comprehensive lighting training. This course includes 2 detailed video modules covering various light sources, neutral diffused light, and professional lighting techniques used by illustration masters.",
    category: "Lighting Techniques",
    features: [
      "2 comprehensive video modules",
      "48 minutes of lighting training",
      "Multiple light source techniques",
      "Neutral diffused light mastery",
      "Professional lighting patterns",
      "Real-world lighting applications"
    ],
    specifications: {
      "Duration": "48 minutes",
      "Videos": "2 comprehensive modules",
      "Level": "Advanced",
      "Topics": "Light sources, diffused lighting, techniques",
      "Projects": "Multiple lighting illustration projects",
      "Access": "10 months",
      "Bonus": "Professional lighting guide"
    },
    inStock: true
  },
  {
    id: 6,
    name: "Direct Sunlight & Natural Light in Art",
    price: 49.99,
    image: getProductImage(6),
    images: getProductImages(6),
    video: getProductVideo(6),
    videos: getProductVideos(6),
    description: "Learn to capture and render direct sunlight and natural lighting effects in your illustrations.",
    detailedDescription: "Master natural lighting with comprehensive training on direct sunlight effects and natural light rendering. This course includes 2 detailed video modules covering sunlight techniques and natural lighting applications in professional illustration.",
    category: "Natural Lighting",
    features: [
      "2 detailed video modules",
      "54 minutes of sunlight training",
      "Direct sunlight mastery",
      "Natural light rendering",
      "Outdoor scene lighting",
      "Professional sunlight techniques"
    ],
    specifications: {
      "Duration": "54 minutes",
      "Videos": "2 detailed modules",
      "Level": "Intermediate",
      "Lighting": "Direct sunlight, natural effects",
      "Tools": "Digital illustration software",
      "Access": "12 months",
      "Support": "Lighting reference guide"
    },
    inStock: true
  },
  {
    id: 7,
    name: "Window Light & Interior Lighting Mastery",
    price: 59.99,
    image: getProductImage(7),
    images: getProductImages(7),
    video: getProductVideo(7),
    videos: getProductVideos(7),
    description: "Master window lighting and interior lighting effects for atmospheric illustration scenes.",
    detailedDescription: "Enter the world of interior lighting with comprehensive window light training. This course includes 2 comprehensive video modules covering window lighting techniques, interior atmosphere creation, and ambient lighting for dramatic illustration effects.",
    category: "Interior Lighting",
    features: [
      "2 comprehensive video modules",
      "38 minutes of interior lighting",
      "Window light mastery",
      "Atmospheric effects",
      "Interior scene lighting",
      "Ambient lighting techniques"
    ],
    specifications: {
      "Duration": "38 minutes",
      "Videos": "2 comprehensive modules",
      "Level": "Intermediate",
      "Lighting": "Window light, interior ambiance",
      "Projects": "Complete interior scene illustrations",
      "Access": "12 months",
      "Bonus": "Interior lighting guide"
    },
    inStock: true
  },
  {
    id: 8,
    name: "Reflected Light & Advanced Lighting Techniques",
    price: 69.99,
    image: getProductImage(8),
    images: getProductImages(8),
    video: getProductVideo(8),
    videos: getProductVideos(8),
    description: "Master reflected light principles and advanced lighting techniques for professional illustrations.",
    detailedDescription: "Advance your lighting skills with comprehensive reflected light training and advanced techniques. This course includes 3 detailed video modules covering reflected light principles, advanced lighting setups, and professional lighting demonstrations for masterful illustrations.",
    category: "Advanced Lighting",
    features: [
      "3 detailed video modules",
      "52 minutes of advanced lighting",
      "Reflected light mastery",
      "Professional demonstrations",
      "Advanced lighting setups",
      "Light reflection techniques"
    ],
    specifications: {
      "Duration": "52 minutes",
      "Videos": "3 detailed modules",
      "Level": "Advanced",
      "Topics": "Reflected light, advanced techniques, demos",
      "Techniques": "15+ lighting methods",
      "Access": "12 months",
      "Bonus": "Advanced lighting reference"
    },
    inStock: true
  },
  {
    id: 9,
    name: "Night Light & Atmospheric Illustration",
    price: 79.99,
    image: getProductImage(9),
    images: getProductImages(9),
    video: getProductVideo(9),
    videos: getProductVideos(9),
    description: "Learn night lighting effects, atmospheric illustration, and mood creation through darkness and light.",
    detailedDescription: "Master night lighting and atmospheric effects with comprehensive training. This premium course includes 3 comprehensive video modules covering night scene lighting, atmospheric mood creation, and dramatic lighting techniques for compelling nighttime illustrations.",
    category: "Night Lighting",
    features: [
      "3 comprehensive video modules",
      "45 minutes of night lighting training",
      "Atmospheric effect mastery",
      "Night scene composition",
      "Mood creation techniques",
      "Professional nighttime illustrations"
    ],
    specifications: {
      "Duration": "45 minutes",
      "Videos": "3 comprehensive modules",
      "Level": "Advanced",
      "Lighting": "Night effects, atmospheric mood",
      "Projects": "3 complete nighttime illustration projects",
      "Access": "15 months",
      "Bonus": "Night lighting reference collection"
    },
    inStock: true
  },
  {
    id: 10,
    name: "Candle Light & Warm Lighting Mastery",
    price: 89.99,
    image: getProductImage(10),
    images: getProductImages(10),
    video: getProductVideo(10),
    videos: getProductVideos(10),
    description: "Master candle lighting effects and warm lighting techniques for intimate and cozy illustrations.",
    detailedDescription: "Master intimate lighting with comprehensive candle light training. This premium course includes 3 detailed video modules covering candle lighting effects, warm lighting techniques, and creating intimate atmospheric scenes for professional-quality illustrations.",
    category: "Warm Lighting",
    features: [
      "3 detailed video modules",
      "28 minutes of warm lighting training",
      "Candle light effect mastery",
      "Intimate scene creation",
      "Warm color temperature techniques",
      "Cozy atmosphere illustration"
    ],
    specifications: {
      "Duration": "28 minutes",
      "Videos": "3 detailed modules",
      "Level": "Advanced",
      "Lighting": "Candle effects, warm atmosphere",
      "Features": "Intimate scenes, cozy illustrations",
      "Access": "15 months",
      "Bonus": "Warm lighting temperature guide"
    },
    inStock: true
  },
  {
    id: 11,
    name: "Complete Color & Light Illustration Mastery",
    price: 99.99,
    image: getProductImage(11),
    images: getProductImages(11),
    video: getProductVideo(11),
    videos: getProductVideos(11),
    description: "Master all aspects of color and light in illustration with comprehensive training covering every lighting scenario and color technique.",
    detailedDescription: "Reach illustration mastery with complete color and light training. This premium course includes 4 comprehensive video modules covering every aspect of color theory, all lighting scenarios, and professional illustration techniques used by industry masters.",
    category: "Complete Mastery",
    features: [
      "4 comprehensive video modules",
      "1 hour of expert instruction",
      "Complete color & light mastery",
      "All lighting scenarios covered",
      "Professional illustration techniques",
      "Industry-standard workflows"
    ],
    specifications: {
      "Duration": "1 hour",
      "Videos": "4 comprehensive modules",
      "Level": "Expert",
      "Concepts": "All color theory, all lighting types",
      "Practices": "Professional workflows, industry standards",
      "Access": "18 months",
      "Bonus": "Complete illustration mastery toolkit"
    },
    inStock: true
  }
];
