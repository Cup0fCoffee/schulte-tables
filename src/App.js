import { useState } from 'react';
import ShulteTable from './ShulteTable';
import Settings from './Settings';
import './App.css';

function App() {
  const [settings, setSettings] = useState({});

  const onSizeChange = (newSize) =>
    setSettings((settings) => ({...settings, size: newSize}));

  return (
    <>
      <ShulteTable
        size={settings.size} />
      <Settings
        size={settings.size}
        onSizeChange={onSizeChange}/>
    </>
  );
}

export default App;
