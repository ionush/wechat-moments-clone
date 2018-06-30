interface BasePost {
  avatar: string;
  user: string;
  date: Date;
}

interface PhotoPost extends BasePost {
  photos: string[];
}

interface LinkPost extends BasePost {
  link: { image: string; description: string };
}

export default [
  {
    avatar: 'https://placeimg.com/140/140/any',
    user: 'Neil Joseph',
    description: 'hello world.',
    photos: [
      'https://placeimg.com/280/280/any',
      'https://placeimg.com/280/280/any',
      'https://placeimg.com/280/280/any',
      'https://placeimg.com/280/280/any',
      'https://placeimg.com/280/280/any',
      'https://placeimg.com/280/280/any',
      'https://placeimg.com/280/280/any',
      'https://placeimg.com/280/280/any',
      'https://placeimg.com/280/280/any'
    ],
    link: { image: '', description: '' },
    location: 'London, England',
    date: '',
    comments: ''
  },
  {
    avatar: 'https://placeimg.com/140/140/any',
    user: 'Bill Gates',
    description: 'Look at the new car I bought!',
    photos: [
      'https://placeimg.com/280/280/any',
      'https://placeimg.com/280/280/any',
      'https://placeimg.com/280/280/any',
      'https://placeimg.com/280/280/any',
      'https://placeimg.com/280/280/any',
      'https://placeimg.com/280/280/any'
    ],
    link: { image: '', description: '' },
    location: 'Washington DC, USA',
    date: '',
    comments: ''
  },
  {
    avatar: 'https://placeimg.com/140/140/any',
    user: 'Best Developer in the world',
    description: 'Look at the new car I bought!',
    photos: ['https://placeimg.com/280/280/any'],
    link: { image: '', description: '' },
    location: 'Washington DC, USA',
    date: '',
    comments: ''
  },
  {
    avatar: 'https://placeimg.com/140/140/any',
    user: 'Grace<3<3<3',
    description: '呼叫起飞台，是否可以起飞',
    photos: [
      'https://placeimg.com/280/280/any',
      'https://placeimg.com/280/280/any',
      'https://placeimg.com/280/280/any',
      'https://placeimg.com/280/280/any'
    ],
    link: { image: '', description: '' },
    location: 'Washington DC, USA',
    date: '',
    comments: ''
  },
  {
    avatar: 'https://placeimg.com/140/140/any',
    user: '王学文42曹bb',
    description:
      '【写给正在打拼的你】看到同学或熟人干得风生水起，就有些惊慌失措了。如果总是被外界环境或别人的话左右，这辈子只能活得疲于奔命。想好了你想要的，就要心定。不要担心你此时此刻的付出得不到回报，用心做人，用爱做事，你想要的，岁月统统会给你。',
    photos: [],
    link: { image: 'https://placeimg.com/280/280/any', description: '' },
    location: 'Washington DC, USA',
    date: '',
    comments: ''
  },
  {
    avatar: 'https://placeimg.com/140/140/any',
    user: '***小耳朵***',
    description: 'Look at the new car I bought!',
    photos: [
      'https://placeimg.com/280/280/any',
      'https://placeimg.com/280/280/any',
      'https://placeimg.com/280/280/any',
      'https://placeimg.com/280/280/any'
    ],
    link: { image: '', description: '' },
    location: 'Washington DC, USA',
    date: '',
    comments: ''
  },
  {
    avatar: 'https://placeimg.com/140/140/any',
    user: "Mario'S",
    description:
      '分享Pressure Traxx厂牌中4首曲目\n今晚，Monohouse\nEinzelkind ( Cocoon/ Pressure Traxx )\nThomas Futoso （micro/wave)\nJennY \n舞池见',
    photos: [],
    link: {
      image: '',
      description: 'coming to you soon, new ways to party hard'
    },
    location: 'Washington DC, USA',
    date: '',
    comments: ''
  },
  {
    avatar: 'https://placeimg.com/140/140/any',
    user: '落雨',
    description:
      '我想问一下啊。南京市发生了什么关于外国人的大事吗？为什么我约顺风车。一说是外国人。立马司机就取消了！！',
    photos: [],
    link: { image: '', description: '' },
    location: 'Washington DC, USA',
    date: '',
    comments: ''
  },
  {
    avatar: 'https://placeimg.com/140/140/any',
    user: 'archer',
    description: '稍后为你呈现 COME.CORRECT.CREW!🤘🤘🕺🏻',
    photos: [
      'https://placeimg.com/280/280/any',
      'https://placeimg.com/280/280/any',
      'https://placeimg.com/280/280/any',
      'https://placeimg.com/280/280/any'
    ],
    link: { image: '', description: '' },
    location: 'Washington DC, USA',
    date: '',
    comments: ''
  },
  {
    avatar: 'https://placeimg.com/140/140/any',
    user: 'helloabby',
    description: 'yeah yeah yeah yeah yeah yeah yeah yeahhhhhhhh',
    photos: [],
    link: { image: '', description: '' },
    location: 'Washington DC, USA',
    date: '',
    comments: ''
  },
  {
    avatar: 'https://placeimg.com/140/140/any',
    user: '莫默默默默默默',
    description:
      'motoboy夏季新款手套，透气舒适，自然弯曲，多处防护可调节，适合春夏秋3季，款式做工等各方面都非常好。 378',
    photos: [
      'https://placeimg.com/280/280/any',
      'https://placeimg.com/280/280/any',
      'https://placeimg.com/280/280/any',
      'https://placeimg.com/280/280/any'
    ],
    link: { image: '', description: '' },
    location: 'Washington DC, USA',
    date: '',
    comments: ''
  }
];
