import './Settings.css';

function Settings({
  size=3,
  onSizeChange=()=>{},
  gridWidth=100,
  onGridWidthChange=()=>{}
}) {
  return (
    <div className="settings">
      <label>
        Grid Size
        <input
          value={size}
          onChange={(event) => onSizeChange(parseInt(event.target.value))}
          min="2"
          max="10"
          type="range" />
      </label>
      <label>
        Grid Width
        <input
          value={gridWidth}
          onChange={(event) => onGridWidthChange(parseInt(event.target.value))}
          type="range" />
      </label>
    </div>
  );
}

export default Settings;
