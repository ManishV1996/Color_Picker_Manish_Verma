import React, { useState } from 'react';
import '../ColorPicker/ColorPicker.css';
import colorData from '../../color-names.json';
import Header from '../Header/Header';

function ColorPicker() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [showColorNames, setShowColorNames] = useState(false);
  const [selectedColorData, setSelectedColorData] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [filteredColorData, setFilteredColorData] = useState([]);

  const handleInputChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredColors = Object.entries(colorData[0]).filter(
      ([colorCode, colorName]) => {
        return (
          colorName.toLowerCase().includes(query) ||
          colorCode.toLowerCase().includes(query)
        );
      }
    );

    setShowColorNames(filteredColors.length > 0);
    setFilteredColorData(filteredColors);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setSelectedColorData({ colorCode: color, colorName: colorData[0][color] });
    setShowColorNames(false);

    // Set the background color to the selected color
    setBackgroundColor(color);
  };

  const backgroundStyle = {
    backgroundColor,
    minHeight: '100vh', // Make the background cover the full viewport height
    transition: 'background-color 0.3s ease', // Add a transition for smooth color change
  };

  return (
    <div className="App" style={backgroundStyle}>
      <Header/>
      <div className="color-picker">
        <input
          type="text"
          placeholder="Enter color name or code"
          value={searchQuery}
          onChange={handleInputChange}
        />
        {showColorNames && (
          <div className="color-list">
            {filteredColorData.map(([colorCode, colorName]) => (
              <div
                key={colorCode}
                className="color-item"
                style={{ backgroundColor: colorCode }}
                onClick={() => handleColorSelect(colorCode)}
              >
                {colorName}
                <br />
                {colorCode}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="selected-color">
        {selectedColorData && (
          <div>
            <p style={{ backgroundColor: selectedColor }}>
              {selectedColorData.colorName}<br/>{selectedColorData.colorCode}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ColorPicker;
