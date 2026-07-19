// src/lib/templeData.js
// Editorial data for the five sacred temples of Nepal

export const temples = [
  {
    id: 'pashupatinath',
    image: '/images/pashupatinath.webp',
    name: 'Pashupatinath',
    subtitle: 'Lord of All Living Beings',
    era: 'Est. 400 CE',
    location: 'Kathmandu, Bagmati River',
    coordinates: '27.7109° N, 85.3488° E',
    elevation: '1,400m',
    chapterNumber: 1,
    layoutVariant: 'twoColumn',
    headline: 'Where the living tend the dying, and the river carries both toward the sea.',
    description:
      "On the banks of the Bagmati, cremation fires burn without pause and pilgrims arrive by the thousand. Pashupatinath has stood as Nepal's most sacred Hindu shrine for over sixteen centuries, its gilded pagoda roofs rising above ghats where the boundary between this world and the next grows thin.",
    quote: 'Here, the river does not end a life — it carries it onward.',
    color: '#C95724',
    glowColor: 'rgba(201, 87, 36, 0.35)',
    accentColor: '#E0834A',
    templeType: 'pagoda',
    tier: 5,
    details: [
      'UNESCO World Heritage Site',
      'Over 1,600 years of worship',
      'Sacred to a billion Hindus worldwide',
      'Pashu — "all living beings"',
    ],
  },
  {
    id: 'swayambhunath',
    image: '/images/swayambhunath.webp',
    name: 'Swayambhunath',
    subtitle: 'The Self-Existent One',
    era: 'Est. 5th Century BCE',
    location: 'Kathmandu, Monkey Hill',
    coordinates: '27.7149° N, 85.2903° E',
    elevation: '1,336m',
    chapterNumber: 2,
    layoutVariant: 'cinematicHorizontal',
    headline: 'The eyes of the Buddha watch the valley from every direction at once.',
    description:
      "Above Kathmandu's rooftops, the whitewashed dome of the Monkey Temple has watched the valley for twenty-five centuries. Three hundred sixty-five steps climb through prayer flags and temple monkeys to a stupa where the Buddha's painted eyes gaze toward the four cardinal points — and toward everyone who climbs.",
    quote: 'To reach the summit is to be seen as much as to see.',
    color: '#C49A56',
    glowColor: 'rgba(196, 154, 86, 0.4)',
    accentColor: '#DDBB7E',
    templeType: 'stupa',
    tier: 3,
    details: [
      'Over 2,500 years of history',
      "The Buddha's all-seeing eyes",
      'Sacred to both Buddhists & Hindus',
      'Home to the temple\'s namesake monkeys',
    ],
  },
  {
    id: 'boudhanath',
    image: '/images/boudhanath-2.webp',
    galleryImage: '/images/boudhanath-2.webp',
    name: 'Boudhanath Stupa',
    subtitle: 'The Great Sphere of Compassion',
    era: 'Est. 7th Century CE',
    location: 'Kathmandu, Boudha',
    coordinates: '27.7215° N, 85.3620° E',
    elevation: '1,400m',
    chapterNumber: 3,
    layoutVariant: 'stickyParallax',
    headline: 'Ten thousand butter lamps, and one continuous circle of devotion.',
    description:
      'One of the largest stupas on earth rose here after Tibetan refugees rebuilt their spiritual home in exile. At dawn, monks and pilgrims still circle its base clockwise, spinning prayer wheels beneath a dome that has watched over the Kathmandu Valley since the seventh century.',
    quote: 'In the circle of the dharma, there is no beginning and no end.',
    color: '#75361F',
    glowColor: 'rgba(117, 54, 31, 0.4)',
    accentColor: '#9C4F2E',
    templeType: 'stupa',
    tier: 3,
    details: [
      'UNESCO World Heritage Site',
      '36-metre towering dome',
      'Centre of Tibetan Buddhism in exile',
      'One of the largest stupas in the world',
    ],
  },
  {
    id: 'muktinath',
    image: '/images/muktinath.webp',
    name: 'Muktinath Temple',
    subtitle: 'The Place of Liberation',
    era: 'Ancient — Pre-History',
    location: 'Mustang District, Annapurna',
    coordinates: '28.8175° N, 83.8722° E',
    elevation: '3,800m',
    chapterNumber: 4,
    layoutVariant: 'darkFullBleed',
    headline: 'Where fire burns from water, and liberation waits at the roof of the world.',
    description:
      'At 3,800 metres in the high Mustang desert, Muktinath is sacred to Hindus and Buddhists alike — a place where natural gas vents keep an eternal flame burning beside a spring of holy water. One hundred and eight stone spouts release the glacial melt pilgrims believe can wash away a lifetime.',
    quote: 'At the roof of the world, liberation breathes through ancient stone.',
    color: '#5B6572',
    glowColor: 'rgba(91, 101, 114, 0.4)',
    accentColor: '#8A94A0',
    templeType: 'pagoda',
    tier: 3,
    details: [
      'Sacred to Hindus & Buddhists',
      'Highest temple on this journey',
      '108 sacred water spouts',
      'The eternal flame of Jwala Mai',
    ],
  },
  {
    id: 'nyatapola',
    image: '/images/nyatapola.jpg',
    name: 'Nyatapola Temple',
    subtitle: 'Five-Tiered Masterpiece',
    era: 'Built 1702 CE',
    location: 'Bhaktapur, Taumadhi Square',
    coordinates: '27.6727° N, 85.4298° E',
    elevation: '1,410m',
    chapterNumber: 5,
    layoutVariant: 'tallVertical',
    headline: 'Five tiers, five pairs of guardians, thirty metres of devotion built without a single nail.',
    description:
      "Rising above Bhaktapur's Taumadhi Square since 1702, Nyatapola is the tallest temple in Nepal — a pagoda of five terraced roofs guarded by stone wrestlers, elephants, lions, griffins, and goddesses, each said to be ten times stronger than the guardian below.",
    quote: 'Five tiers rise to heaven, each stone a prayer held in place by faith alone.',
    color: '#8C5A2E',
    glowColor: 'rgba(140, 90, 46, 0.4)',
    accentColor: '#B98A4A',
    templeType: 'pagoda',
    tier: 5,
    details: [
      'Tallest temple in Nepal at 30m',
      'Built without nails or mortar',
      'UNESCO World Heritage Site',
      'Dedicated to Goddess Siddhi Lakshmi',
    ],
  },
];

// Navigation items for the site
export const navItems = [
  { label: 'Journey',  href: '#journey'   },
  { label: 'Tradition', href: '#tradition' },
  { label: 'Visions',  href: '#visions'   },
  { label: 'Himalaya', href: '#himalaya'  },
];

// Restrained editorial palette, exported for reuse outside Tailwind (inline styles, SVG fills)
export const palette = {
  parchment:  '#F5EBDD',
  sand:       '#E9D9C1',
  ink:        '#201C18',
  inkMuted:   '#665D54',
  saffron:    '#C95724',
  terracotta: '#75361F',
  charcoal:   '#171613',
  gold:       '#C49A56',
};

// Editorial statistics — commonly-cited approximate figures.
// Verify exact numbers before publishing.
export const stats = [
  { value: 3000, suffix: '+', label: 'Temples & Shrines' },
  { value: 2500, suffix: '+', label: 'Years of Living Heritage' },
  { value: 7,    suffix: '',  label: 'Monument Zones, Kathmandu Valley UNESCO Site' },
];
