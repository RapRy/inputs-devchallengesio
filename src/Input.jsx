import React from "react";

const Input = ({
  error,
  disabled,
  textHelper,
  startIcon,
  endIcon,
  value,
  size,
  fullWidth,
  multiline,
  rows,
  color,
}) => {
  return (
    <div
      className="field-container"
      data-error={error}
      data-size={size}
      data-full={fullWidth}
      data-disabled={disabled}
      style={{ "--color": color ? color : "#828282" }}
    >
      <label htmlFor="input">Label</label>
      <div className="input-container">
        {multiline ? (
          <textarea placeholder="Placeholder" rows={rows} />
        ) : (
          <>
            {startIcon && (
              <span className="material-icons icons">{startIcon}</span>
            )}
            <input
              type="text"
              id="input"
              placeholder="Placeholder"
              disabled={disabled ? "disabled" : ""}
              defaultValue={value ? value : ""}
            />
            {endIcon && <span className="material-icons icons">{endIcon}</span>}
          </>
        )}
      </div>
      {textHelper && <span className="text-helper">{textHelper}</span>}
    </div>
  );
};

export default Input;
