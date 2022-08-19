import React from 'react';
import MenuLinkList from './Molecules/MenuLinkList/MenuLinkList';

function App() {
  const linkArray = [
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
  ];
  return <MenuLinkList menuLinkArray={linkArray} />;
}

export default App;
