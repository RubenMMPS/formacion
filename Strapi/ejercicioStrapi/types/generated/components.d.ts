import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksGallery extends Struct.ComponentSchema {
  collectionName: 'components_blocks_galleries';
  info: {
    displayName: 'gallery';
  };
  attributes: {
    media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface BlocksLinks extends Struct.ComponentSchema {
  collectionName: 'components_blocks_links';
  info: {
    displayName: 'links';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface BlocksRichText extends Struct.ComponentSchema {
  collectionName: 'components_blocks_rich_texts';
  info: {
    displayName: 'rich_text';
  };
  attributes: {
    content: Schema.Attribute.RichText;
  };
}

export interface ClassAdditionalDetails extends Struct.ComponentSchema {
  collectionName: 'components_class_additional_details';
  info: {
    displayName: 'additional_details';
  };
  attributes: {
    classroom: Schema.Attribute.String;
    schedule: Schema.Attribute.Time;
  };
}

export interface EventAdditionalDetails extends Struct.ComponentSchema {
  collectionName: 'components_event_additional_details';
  info: {
    displayName: 'additional_details';
  };
  attributes: {
    date: Schema.Attribute.Date;
    place: Schema.Attribute.String;
    time: Schema.Attribute.Time;
  };
}

export interface EventMaterial extends Struct.ComponentSchema {
  collectionName: 'components_event_materials';
  info: {
    displayName: 'material';
  };
  attributes: {
    name: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['video', 'document', 'link', 'presentation']
    >;
  };
}

export interface EventSubtheme extends Struct.ComponentSchema {
  collectionName: 'components_event_subthemes';
  info: {
    displayName: 'subtheme';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    name: Schema.Attribute.String;
  };
}

export interface EventTheme extends Struct.ComponentSchema {
  collectionName: 'components_event_themes';
  info: {
    displayName: 'theme';
  };
  attributes: {
    name: Schema.Attribute.String;
    subthemes: Schema.Attribute.Component<'event.subtheme', true>;
  };
}

export interface TeacherAdditionalDetails extends Struct.ComponentSchema {
  collectionName: 'components_teacher_additional_details';
  info: {
    displayName: 'additional_details';
  };
  attributes: {
    experience: Schema.Attribute.Integer;
    specialty: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.gallery': BlocksGallery;
      'blocks.links': BlocksLinks;
      'blocks.rich-text': BlocksRichText;
      'class.additional-details': ClassAdditionalDetails;
      'event.additional-details': EventAdditionalDetails;
      'event.material': EventMaterial;
      'event.subtheme': EventSubtheme;
      'event.theme': EventTheme;
      'teacher.additional-details': TeacherAdditionalDetails;
    }
  }
}
