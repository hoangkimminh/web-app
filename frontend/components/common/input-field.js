/**
 * @reactProps {string} name - Name of the field
 * @reactProps {string} iconName - Set icon by name
 * @reactProps {string} iconSrc - Set icon by source sgv
 * @reactProps {string} type - Input type
 * @reactProps {string} placeholder - Placeholder
 * @reactProps {string||number} value - Default value
 * @reactProps {boolean} isReadOnly - The input is read only or not?
 * @reactProps {string} helpText - Help text
 * @reactProps {function} onChange - Handle on change event
 * @reactProps {boolean} required - Required
 * @reactProps {number} min - minimum number if type is number
 * @reactProps {number} max - maximum number if type is number
 */

const InputField = (props) => {
  return (
    <div className='field is-horizontal'>
      <div className='field-label is-normal'>
        <label className='label'>{props.name}</label>
      </div>
      <div className='field-body'>
        <div className='field'>
          <div
            className={
              props.iconName || props.iconSrc ? 'control has-icons-left' : 'control'
            }
          >
            <input
              className='input'
              type={props.type}
              placeholder={props.placeholder}
              defaultValue={props.value}
              readOnly={props.isReadOnly}
              onChange={(e) => props.onChange(e.target.value)}
              required={props.required}
              min={props.min}
              max={props.max}
              step={props.step}
            />
            {(props.iconName || props.iconSource) && (
              <span className='icon is-left'>
                {props.iconName && <ion-icon name={props.iconName} />}
                {!props.iconName && <ion-icon src={props.iconSource} />}
              </span>
            )}
          </div>
          <p className='help'>{props.helpText}</p>
        </div>
      </div>
    </div>
  )
}

export default InputField
