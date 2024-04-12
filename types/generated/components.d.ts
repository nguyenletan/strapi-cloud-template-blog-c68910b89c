import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedArchitectureList extends Schema.Component {
  collectionName: 'components_shared_architecture_lists';
  info: {
    displayName: 'TwoColumns';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    column1Content: Attribute.Blocks;
    column2Content: Attribute.Blocks;
    column1Title: Attribute.String;
    column2Title: Attribute.String;
  };
}

export interface SharedHero2 extends Schema.Component {
  collectionName: 'components_shared_hero_2s';
  info: {
    displayName: 'hero-2';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    description: Attribute.String;
    photo: Attribute.Media;
  };
}

export interface SharedHeroComponent extends Schema.Component {
  collectionName: 'components_shared_hero_components';
  info: {
    displayName: 'HeroComponent';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    photo: Attribute.Media;
    buttonText: Attribute.Text;
    buttonLink: Attribute.String;
  };
}

export interface SharedLeftImageRightText extends Schema.Component {
  collectionName: 'components_shared_left_image_right_texts';
  info: {
    displayName: 'LeftImageRightText';
  };
  attributes: {
    image: Attribute.Media;
    text: Attribute.Blocks;
  };
}

export interface SharedLeftTextInsideImage extends Schema.Component {
  collectionName: 'components_shared_left_text_inside_images';
  info: {
    displayName: 'LeftTextInsideImage';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    text: Attribute.Blocks;
  };
}

export interface SharedLeftTextRightImage extends Schema.Component {
  collectionName: 'components_shared_left_text_right_images';
  info: {
    displayName: 'LeftTextRightImage';
  };
  attributes: {
    text: Attribute.Blocks;
    image: Attribute.Media;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

export interface SharedTextIconComponent extends Schema.Component {
  collectionName: 'components_shared_text_icon_components';
  info: {
    displayName: 'TextIconComponent';
  };
  attributes: {
    title: Attribute.String;
    Description: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.architecture-list': SharedArchitectureList;
      'shared.hero-2': SharedHero2;
      'shared.hero-component': SharedHeroComponent;
      'shared.left-image-right-text': SharedLeftImageRightText;
      'shared.left-text-inside-image': SharedLeftTextInsideImage;
      'shared.left-text-right-image': SharedLeftTextRightImage;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.text-icon-component': SharedTextIconComponent;
    }
  }
}
