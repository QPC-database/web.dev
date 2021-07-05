const slugify = require('slugify');

module.exports = {
  colors: [
    {
      group: 'Core',
      items: [
        {
          name: 'Primary',
          hex: '#3740ff',
          hsl: 'hsl(237 100% 61%)',
        },
        {
          name: 'Secondary',
          hex: '#e51661',
          hsl: 'hsl(338 82% 49%)',
        },
        {
          name: 'Tertiary',
          hex: '#6001ff',
          hsl: 'hsl(262 100% 50%)',
        },
        {
          name: 'Brand',
          hex: '#3fc4ff',
          hsl: 'hsl(198 100% 62%)',
        },
      ],
    },
    {
      group: 'State',
      items: [
        {
          name: 'Good',
          hex: '#018642',
          hsl: 'hsl(149 99% 26%)',
        },
        {
          name: 'Good Bright',
          hex: '#0CCE6B',
          hsl: 'hsl(149 89% 43%)',
        },
        {
          name: 'Good Glare',
          hex: '#e2faed',
          hsl: 'hsl(148 71% 93%)',
        },
        {
          name: 'Warn',
          hex: '#D04900',
          hsl: 'hsl(21 100% 41%)',
        },
        {
          name: 'Warn Bright',
          hex: '#FFA400',
          hsl: 'hsl(39 100% 50%)',
        },
        {
          name: 'Warn Glare',
          hex: '#fff5e0',
          hsl: 'hsl(41 100% 94%)',
        },
        {
          name: 'Bad',
          hex: '#EB0F00',
          hsl: 'hsl(4 100% 46%)',
        },
        {
          name: 'Bad Bright',
          hex: '#FF4E42',
          hsl: 'hsl(4 100% 63%)',
        },
        {
          name: 'Bad Glare',
          hex: '#ffe9e8',
          hsl: 'hsl(3 100% 95%)',
        },
      ],
    },
    {
      group: 'Shades',
      items: [
        {
          name: 'Dark',
          hex: '#191919',
          hsl: 'hsl(0 0% 10%)',
        },
        {
          name: 'Gray',
          hex: '#545454',
          hsl: 'hsl(0 0% 33%)',
        },
        {
          name: 'Gray Bright',
          hex: '#8d8d8d',
          hsl: 'hsl(0 0% 55%)',
        },
        {
          name: 'Gray Glare',
          hex: '#d9d9d9',
          hsl: 'hsl(0 0% 85%)',
        },
        {
          name: 'Light',
          hex: '#f3f3f3',
          hsl: 'hsl(0 0% 95%)',
        },
        {
          name: 'Light Bright',
          hex: '#ffffff',
          hsl: 'hsl(0 0% 100%)',
        },
      ],
    },
  ],
  textSizes: [
    {
      name: 'Base',
      min: 16,
      max: 16,
      unit: 'px',
    },
    {
      name: 'Size 1',
      min: 16,
      max: 18,
      unit: 'px',
    },

    {
      name: 'Size 2',
      min: 18,
      max: 20,
      unit: 'px',
    },
    {
      name: 'Size 3',
      min: 20,
      max: 28,
      unit: 'px',
    },
    {
      name: 'Size 4',
      min: 24,
      max: 36,
      unit: 'px',
    },
    {
      name: 'Size 5',
      min: 28,
      max: 48,
      unit: 'px',
    },
    {
      name: 'Size 6',
      min: 36,
      max: 60,
      unit: 'px',
    },
  ],
  spacing: [
    {
      name: 'Base',
      min: 16,
      max: 16,
      unit: 'px',
    },
    {
      name: 'Size 1',
      min: 22,
      max: 32,
      unit: 'px',
    },
    {
      name: 'Size 2',
      min: 38,
      max: 60,
      unit: 'px',
    },
    {
      name: 'Size 3',
      min: 60,
      max: 90,
      unit: 'px',
    },
    {
      name: 'Size 4',
      min: 100,
      max: 150,
      unit: 'px',
    },
  ],
  radius: [
    {
      name: 'Base',
      value: '3px',
    },
  ],
  font: [
    {
      name: 'Base',
      description: 'Roboto - main content.',
      values: ['Roboto', 'Arial', 'sans-serif'],
    },
    {
      name: 'Brand',
      description: 'Google Sans - headings.',
      values: ['Google Sans', 'Roboto', 'Arial', 'sans-serif'],
    },
    {
      name: 'Mono',
      description: 'Code samples etc.',
      values: [
        'SFMono-Regular',
        'Consolas',
        'Liberation Mono',
        'Menlo',
        'monospace',
      ],
    },
  ],
  get convertToSass() {
    let response = '';

    response += '$gorko-colors: (';

    this.colors.forEach((group) => {
      group.items.forEach((color) => {
        response += `'${slugify(group.group + '-' + color.name, {
          lower: true,
        })}': ${color.hsl},`;
      });
    });

    // Remove the trailing comma
    response = response.replace(/,\s*$/, '');
    response += ');';

    return response;
  },
};
