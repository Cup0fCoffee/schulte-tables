import { useState } from 'react';
import SchulteTable from './SchulteTable';
import Settings from './Settings';
import './App.css';

function App() {
  const updateSettings = (settings) => {
    localStorage.setItem('schulte-tables/settings', JSON.stringify(settings));
    setSettings(settings);
  };

  const [settings, setSettings] = useState(
    () => JSON.parse(localStorage.getItem('schulte-tables/settings')) || {}
  );

  const onSizeChange = (newSize) =>
    updateSettings({...settings, size: newSize});

  const onGridWidthChange = (newWidth) =>
    updateSettings({...settings, width: newWidth});

  return (
    <div className="app">
      <Settings
        size={settings.size}
        onSizeChange={onSizeChange}
        gridWidth={settings.width}
        onGridWidthChange={onGridWidthChange} />
      <SchulteTable
        size={settings.size}
        width={settings.width} />
    </div>
  );
}

export default App;
