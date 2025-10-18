import React from 'react';
import Categories from '../Categories';
import { Suspense } from 'react';

const LeftAside = () => {
  return (
    <div>
      <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
        <Categories></Categories>
      </Suspense>
    </div>
  );
};

export default LeftAside;