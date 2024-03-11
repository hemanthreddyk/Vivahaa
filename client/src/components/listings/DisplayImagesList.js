import { Avatar, Box } from '@mui/material'
import React, { useState } from 'react'

const DisplayImagesList = ({ images = [] }) => {

  const gridItems = images.map((p, idx) => {
    return {
      src: p,
      alt: `mehendiArtistsImage${idx}`
    }
  }) || []

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  return (
    <Box className='testty' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: 'column', height: '100%' }}>
      <Avatar
        src={hoveredIndex !== null ? gridItems[hoveredIndex].src : gridItems[0]?.src}
        alt="vendor-pic"
        sx={{ width: '100%', height: 200, borderRadius: '0px 12px 12px 12px' }}
      />
      <Box sx={{ display: 'flex', marginTop: 1 }}>
        {gridItems.map((item, index) => (
          <Avatar
            key={index}
            variant="rounded"
            src={item.src}
            alt={item.alt}
            onMouseEnter={() => handleMouseEnter(index)}
            sx={{ width: 40, height: 40, marginRight: 1, ml: 1 }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default DisplayImagesList;
