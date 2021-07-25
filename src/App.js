import { useState } from 'react';
import ShulteTable from './ShulteTable';
import Settings from './Settings';
import './App.css';

function App() {
  const [settings, setSettings] = useState({});

  const onSizeChange = (newSize) =>
    setSettings((settings) => ({...settings, size: newSize}));

  const onGridWidthChange = (newWidth) =>
    setSettings((settings) => ({...settings, width: newWidth}));

  return (
    <>
      <ShulteTable
        size={settings.size}
        width={settings.width} />
      <Settings
        size={settings.size}
        onSizeChange={onSizeChange}
        gridWidth={settings.width}
        onGridWidthChange={onGridWidthChange} />
    </>
  );
}

export default App;
