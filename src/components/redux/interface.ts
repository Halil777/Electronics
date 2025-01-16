export interface Product {
    id: number;
    brand: {
      title_en:string
      };
    brand_id: number;
    category: string;
    category_id: number;
    color: string;
    created_at: string;
    depth: number;
    desc_en?: string;
    desc_ru?: string;
    desc_tm?: string;
    discount_percentage: number;
    discounted_price: number;
    height: number;
    images: string[];
    is_active: boolean;
    old_price: number;
    price: number;
    properties: Record<string, string | number>;
    rating: number;
    segment: string;
    segment_id: number;
    size: string;
    stock: number;
    tags: string[];
    title_en?: string;
    title_ru?: string;
    title_tm?: string;
    updated_at: string;
    views: number;
    weight: number;
    width: number;
    product_code: string;
  }
  export interface Product2 {
    id: string;
    imageUrl: string;
    title_tm: string;
    title_ru: string;
    title_en: string;
    desc_tm?: string;
    desc_ru?: string;
    desc_en?: string;
  }
  

  
  