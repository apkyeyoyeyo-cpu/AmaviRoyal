
export enum ProductCategory {
  JEWELLERY = 'Jewellery',
  FAMILY_CREST = 'Family Crest (20x20cm)',
  COINS = 'Commemorative Coins'
}

export interface DesignState {
  category: ProductCategory;
  prompt: string;
  heritage: string;
  style: string;
  isGenerating: boolean;
  result?: DesignResult;
}

export interface DesignResult {
  imageUrl: string;
  analysis: string;
  specs: {
    material: string;
    precision: string;
    weight: string;
  };
}

export interface LabComponent {
  title: string;
  description: string;
  value: string;
  icon: string;
}
