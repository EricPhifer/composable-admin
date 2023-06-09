import { AiFillQuestionCircle as icon } from 'react-icons/ai';

export default {
    name: 'faqaccordion',
    title: 'FAQ Accordion',
    type: 'document',
    icon,
    fields: [
        {
          name: 'question',
          title: 'Question',
          type: 'string',
        },
        { 
            name: 'answer', 
            title: 'Answer', 
            type: 'array',
            of: [{type: 'block'}]
        }
    ],
    preview: {
        select: {
          title: 'question',
          subtitle: 'answer',
        },
      },
  }