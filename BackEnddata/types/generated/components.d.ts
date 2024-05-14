import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentFeature extends Schema.Component {
  collectionName: 'components_component_features';
  info: {
    displayName: 'feature';
  };
  attributes: {
    heading: Attribute.String;
    subheading: Attribute.String;
    icon: Attribute.Enumeration<['CLOCK_ICON', 'CHECK_ICON', 'CLOUD_ICON']>;
  };
}

export interface ComponentLink extends Schema.Component {
  collectionName: 'components_component_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    Url: Attribute.String;
    Name: Attribute.String;
  };
}

export interface LayoutFeaturesSection extends Schema.Component {
  collectionName: 'components_layout_features_sections';
  info: {
    displayName: 'Features Section';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    feature: Attribute.Component<'component.feature', true>;
  };
}

export interface LayoutHero extends Schema.Component {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'hero';
    description: '';
  };
  attributes: {
    detail: Attribute.String;
    media: Attribute.Media;
    link: Attribute.Component<'component.link'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'component.feature': ComponentFeature;
      'component.link': ComponentLink;
      'layout.features-section': LayoutFeaturesSection;
      'layout.hero': LayoutHero;
    }
  }
}
