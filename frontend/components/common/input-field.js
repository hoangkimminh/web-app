/**
 * @reactProps {string} id - Id of the field
 * @reactProps {string} label - Name of the field
 * @reactProps {string} iconName - Set icon by name
 * @reactProps {string} iconSource - Set icon by URL
 * @reactProps {string} type - Input type
 * @reactProps {string} placeholder - Placeholder
 * @reactProps {string|number} value - Value
 * @reactProps {boolean} readOnly - The input is read only or not?
 * @reactProps {string} helpText - Help text
 * @reactProps {function} onChange - Handle on change event
 * @reactProps {boolean} required - Required
 * @reactProps {number} min - minimum number if type is number
 * @reactProps {number} max - maximum number if type is number
 * @reactProps {number} step - step if type is number
 */
const InputField = (props) => {
  const {
    id,
    label,
    iconName,
    iconSource,
    type,
    placeholder,
    value,
    readOnly,
    helpText,
    onChange,
    required,
    min,
    max,
    step,
  } = props

  return (
    <div className='field is-horizontal'>
      <div className='field-label is-normal'>
        <label className='label'>{label}</label>
      </div>
      <div className='field-body'>
        <div className='field'>
          <div className={iconName || iconSource ? 'control has-icons-left' : 'control'}>
            <input
              id={id}
              className='input'
              type={type}
              placeholder={placeholder}
              defaultValue={value}
              readOnly={readOnly}
              onChange={onChange}
              required={required}
              min={min}
              max={max}
              step={step}
            />
            {(iconName || iconSource) && (
              <span className='icon is-left'>
                {iconName && <ion-icon name={iconName} />}
                {!iconName && <ion-icon src={iconSource} />}
              </span>
            )}
          </div>
          <p className='help'>{helpText}</p>
        </div>
      </div>
    </div>
  )
}

export default InputField
