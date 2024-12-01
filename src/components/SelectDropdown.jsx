export default function Dropdown({
  label,
  dataName, 
  options,  
  defaultOption, 
  selectedValue, 
  onSelectValue,
  onValidateField,
  onToggleDropdown,
  openedDropdown
}) {
  const isOpened = openedDropdown === label;

  return (
    <div className="dropdown-container">
      <div className="dropdown-label">
        {label}
      </div>
      <div 
        className={`${isOpened ? 'dropdown is-opened' : 'dropdown'}`} /* [3] */
        onClick={() => onToggleDropdown(label)}
        onBlur={() => onValidateField(label, selectedValue)}
        tabIndex='0'
      >
        <div className="dropdown-selected-value">
          {selectedValue}
        </div>
        <img
          className={`${isOpened ? 'dropdown-arrow rotate-180' : 'dropdown-arrow'}` } /* [3] */
          src='src/assets/chevronDown.svg'
          alt="Arrow down"
        />
      </div>
      {isOpened && (
          <div className="dropdown-options">
            {options ? (
              options.map((option) =>
                <div 
                  key={option.name} 
                  className="dropdown-option"
                  onClick={() => {
                    onSelectValue(dataName, option.name)
                    onValidateField(label, option.name)
                  }}
                >
                  {option.name}
                </div>
              )
            ) : (
                <div 
                  key={defaultOption} 
                  className="dropdown-default-option"
                >
                  {defaultOption}
                </div>  
            )} {/* [2] [3] */}
          </div>
        )} {/* [2] [3] */}
    </div> 
  )
}

