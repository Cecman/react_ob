const navigation = [
  {
    label: 'Movies',
    subMenu: [
      {
        key: 1,
        label: 'Popular',
        url: '/movie',
      },
      {
        key: 2,
        label: 'Now playing',
        url: '/movie/now-playing',
      },
      {
        key: 3,
        label: 'Upcoming',
        url: '/movie/upcoming',
      },
      {
        key: 4,
        label: 'Top rated',
        url: '/movie/top-rated',
      },
    ],
  },
  {
    label: 'TV Shows',
    subMenu: [
      {
        key: 1,
        label: 'Popular',
        url: '/tv',
      },
      {
        key: 2,
        label: 'Airing Today',
        url: '/tv/now-airing',
      },
      {
        key: 3,
        label: 'On TV',
        url: '/tv/ontv',
      },
      {
        key: 4,
        label: 'Top rated',
        url: '/tv/top-rated',
      },
    ],
  },
  {
    label: 'People',
    subMenu: [
      {
        key: 1,
        label: 'Popular People',
        url: '/popular',
      },
    ],
  },
  {
    label: 'More',
    subMenu: [
      {
        key: 1,
        label: 'Discussion',
        url: '/forum',
      },
      {
        key: 2,
        label: 'Leaderboard',
        url: '/leaderboard',
      },
      {
        key: 3,
        label: 'Support',
        url: '/support',
      },
      {
        key: 4,
        label: 'API',
        url: '/dev',
      },
    ],
  },
];

export default navigation;
