// بيانات المنتجات والعوامل المساعدة للفلترة (محاكاة استجابة API)

export const sampleProducts = [
  {
    id: 1,
    name: "نبتة الصبار",
    name_latin: "Aloe Vera",
    description: "نبتة صبار منزلية سهلة العناية.",
    price: 35,
    images: [
      { url: "/assets/images/product_1.png", medium_image_url: "/assets/images/product_1.png" }
    ],
    category_id: 1,
    color_ids: [1],
    size_ids: [1, 2],
    is_saved: false,
    stock: 10,
    colors: [
      { id: 1, label: "أخضر", hex_code: "#4CAF50" }
    ],
    sizes: [
      { id: 1, label: "صغير" },
      { id: 2, label: "متوسط" }
    ]
  },
  {
    id: 2,
    name: "نبتة اللافندر",
    name_latin: "Lavandula",
    description: "نبتة عطرية جميلة.",
    price: 50,
    images: [
      { url: "/assets/images/landForm.png", medium_image_url: "/assets/images/landForm.png" }
    ],
    category_id: 2,
    color_ids: [2],
    size_ids: [2, 3],
    is_saved: true,
    stock: 5,
    colors: [
      { id: 2, label: "بنفسجي", hex_code: "#9C27B0" }
    ],
    sizes: [
      { id: 2, label: "متوسط" },
      { id: 3, label: "كبير" }
    ]
  },
  {
    id: 3,
    name: "نبتة النعناع",
    name_latin: "Mentha",
    description: "نبتة منعشة للاستخدام المنزلي.",
    price: 20,
    images: [
      { url: "/assets/images/cat_1.svg", medium_image_url: "/assets/images/cat_1.svg" }
    ],
    category_id: 1,
    color_ids: [1],
    size_ids: [1],
    is_saved: false,
    stock: 15,
    colors: [
      { id: 1, label: "أخضر", hex_code: "#4CAF50" }
    ],
    sizes: [
      { id: 1, label: "صغير" }
    ]
  },
  {
    id: 4,
    name: "نبتة الريحان",
    name_latin: "Ocimum basilicum",
    description: "نبتة عطرية للطهي.",
    price: 25,
    images: [
      { url: "/assets/images/cat_2.svg", medium_image_url: "/assets/images/cat_2.svg" }
    ],
    category_id: 2,
    color_ids: [1],
    size_ids: [2],
    is_saved: false,
    stock: 8,
    colors: [
      { id: 1, label: "أخضر", hex_code: "#4CAF50" }
    ],
    sizes: [
      { id: 2, label: "متوسط" }
    ]
  }
];

export const sampleCategories = [
  { value: 1, label: "نباتات منزلية" },
  { value: 2, label: "نباتات عطرية" },
  { value: 3, label: "نباتات زينة" }
];

export const sampleColors = [
  { id: 1, label: "أخضر", hex_code: "#4CAF50" },
  { id: 2, label: "بنفسجي", hex_code: "#9C27B0" },
  { id: 3, label: "أصفر", hex_code: "#FFEB3B" }
];

export const sampleSizes = [
  { value: 1, label: "صغير" },
  { value: 2, label: "متوسط" },
  { value: 3, label: "كبير" }
];

export const samplePriceLimits = { min: 10, max: 100 };

// مثال على استجابة الفلاتر (للاستخدام في Sidebar)
export const sampleFilterOptions = {
  categories: sampleCategories,
  colors: sampleColors,
  sizes: sampleSizes,
  priceLimits: samplePriceLimits
};

// يمكن استيراد هذه البيانات في AllProducts.jsx أو أي صفحة أخرى للاختبار
// مثال:
// import { sampleProducts, sampleFilterOptions } from "./ProductData";
