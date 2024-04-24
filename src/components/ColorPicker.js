import React from 'react';


const colors = [
  { id: 1, color: 'red', title: '#FF0000' },
  { id: 2, color: 'blue', title: '#0000FF' },
  { id: 3, color: 'green', title: '#008000' },
  { id: 3, color: 'IndianRed', title: '#CD5C5C' },
  { id: 3, color: 'DeepPink', title: '#FF1493' },
  { id: 3, color: 'OrangeRed', title: '#FF4500' },
  { id: 3, color: 'Plum', title: '#DDA0DD' },
  { id: 3, color: 'MediumPurple', title: '#9370DB' },
  { id: 3, color: 'Teal', title: '#008080' },
  { id: 3, color: 'RosyBrown', title: '#BC8F8F' },
  { id: 3, color: 'Maroon', title: '#A52A2A' },
  { id: 3, color: 'Gray', title: '#808080' },
  { id: 3, color: 'MistyRose', title: '#FFE4E1' },
  { id: 3, color: 'LightSlateGray', title: '#000000' },
  
];

const ColorCard = ({ id, color, title }) => (
  <div style={{ backgroundColor: color, padding: '10px', margin: '10px', width: '200px' }}>
    <h2>{title}</h2>
    <p>ID: {id}</p>
    <p>Color: {color}</p>
  </div>
);


const ColorPicker = () => (
  <div>
    <h1>Color Picker</h1>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {colors.map((color) => (
        <ColorCard key={color.id} {...color} />
      ))}
    </div>
  </div>
);

export default ColorPicker;
