import { IoLogoMarkdown as icon } from 'react-icons/io';

export default {
    name: 'logos',
    title: 'Logo Carousel',
    type: 'document',
    icon,
    fields: [
        {
            name: 'image', 
            title: 'Background Image', 
            type: 'image',
            options: {
                hotspot: true
            } 
        },
        {
          name: 'alt',
          title: 'Alternative Text for Image',
          type: 'string',
        },
        {
          name: 'source',
          title: 'Credit to the Creator or Owner of the Image',
          type: 'string',
        },
    ],
    preview: {
        select: {
          title: 'alt',
        },
      },
  }