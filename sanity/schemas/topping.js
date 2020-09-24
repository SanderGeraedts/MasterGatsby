import { FaPepperHot as icon } from 'react-icons/fa';

export default {
  name: 'topping',
  title: 'Toppings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Topping Name',
      type: 'string',
      description: 'Name of the topping.',
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian?',
      type: 'boolean',
      description:
        'Does this topping require the slaughter of innocent animals.',
    },
  ],
  initialValue: {
    vegetarian: true,
  },
  preview: {
    select: {
      name: 'name',
      vegetarian: 'vegetarian',
    },
    prepare: ({ name, vegetarian }) => ({
      title: `${name} ${vegetarian ? '🌱' : '🖕'}`,
    }),
  },
};
