import './App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import React, { useState } from 'react';
import { Galleria } from 'primereact/galleria';
import { Card } from 'primereact/card';
import image1 from './1.jpeg'; 
import image2 from './2.jpeg'; 
import image3 from './3.jpeg'; 
import image4 from './4.jpeg'; 
import image5 from './5.jpeg'; 

const images = [
  {
    alt: 'Image 1',
    itemImageSrc: image1,
  },
  {
    alt: 'Image 2',
    itemImageSrc: image2,
  },
  {
    alt: 'Image 3',
    itemImageSrc: image3,
  },
  {
    alt: 'Image 4',
    itemImageSrc: image4,
  },
  {
    alt: 'Image 5',
    itemImageSrc: image5,
  },
];

function Galerie() {
  const [activeIndex, setActiveIndex] = useState(0);

  const itemTemplate = (item) => {
    return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
  };

  return (
    <div className="App">
      <NavBar />
      <Card title="OUATIL ANAS GALLERY" style={{marginTop: '40px',color:"#3d005f"}}>
   
</Card>
      <div className="galleria-container">
      <Galleria 
        value={images}
        activeIndex={activeIndex}
        onValueChange={(e) => setActiveIndex(e.index)}
        numVisible={5}
        circular
        style={{ maxWidth: '640px' }}
        showThumbnails={false}
        showItemNavigators
        item={itemTemplate}
      />
      </div>
      <div style={{marginTop: '70px'}}></div> 
      <Footer />
    </div>
  );
}

export default Galerie;
