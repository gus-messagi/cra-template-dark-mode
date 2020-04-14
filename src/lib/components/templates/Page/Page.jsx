import React from 'react';
import './Page.scss';

function Page({ children, header }) {
  
  const Header = header;

  return(
    <div className="page">
      
      {header !== undefined && (
        <Header/>
      )}
      
      <div className="page__content">
        {children}
      </div>
    </div>
  )
}

export default Page;