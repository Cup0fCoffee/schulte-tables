function Settings({size=3, onSizeChange=()=>{}}) {
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
    </div>
  );
}

export default Settings;
