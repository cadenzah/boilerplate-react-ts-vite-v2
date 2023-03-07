import React from 'react';
import CodingCatImage from '@/assets/images/coding_cat.jpg';

function Page(): JSX.Element {
  return (
    <div className="profile-container">
      <img src={CodingCatImage} width="300px" />
      <p>profile</p>
    </div>
  );
}

export default Page;
