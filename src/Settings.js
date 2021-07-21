import { useState, useEffect } from 'react';

function Settings({onChange=() => {}}) {
  const [settings, setSettings] = useState({ gridSize: 3 });

  useEffect(
    () => onChange(settings),
    [settings, onChange]
  );

  const onGridSizeChange = (event) =>
    setSettings((settings) => ({
      ...settings,
      gridSize: parseInt(event.target.value)
    }));

  return (
    <div className="settings">
      <label>
        Grid Size
        <input
          value={settings.gridSize}
          onChange={onGridSizeChange}
          min="2"
          max="10"
          type="range" />
      </label>
    </div>
  );
}

export default Settings;
