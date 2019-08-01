import { Component } from 'react'

class CSSSelector extends Component {
  constructor(props) {
    super(props)
    this.state = { numOfAddedSelector: 0 }
    this.onAddCSSSelector = this.onAddCSSSelector.bind(this)
    this.onUpdateCSSSelectors = this.onUpdateCSSSelectors.bind(this)
    this.onResetForm = this.onResetForm.bind(this)
  }

  async onUpdateCSSSelectors() {
    //get list of css input's value
    const listCssInput = await document.getElementsByName('cssSelector')

    //get list of type selection's value
    const listCssType = await document.getElementsByName('type')
    let cssSelectors = {}
    await listCssInput.forEach((element, index) => {
      const cssSelector = element.value
      const type = listCssType[index].options[listCssType[index].selectedIndex].value
      if (cssSelector.trim() != '') {
        cssSelectors[cssSelector] = type
      }
    })
    this.props.onUpdateCSSSelectors(cssSelectors)
  }

  onAddCSSSelector(event) {
    event.preventDefault()
    this.setState({ numOfAddedSelector: this.state.numOfAddedSelector + 1 })
  }

  onResetForm() {
    this.setState({numOfAddedSelector: 1})
  }

  render() {
    return (
      <div className='field'>
        <label className='label'>CSS Selector</label>
        <div className='control'>
          <div className='columns is-mobile'>
            <div className='column is-8'>
              <input
                id='cssSelector0'
                className='input'
                name='cssSelector'
                type='text'
                required
                placeholder='Enter CSS Selector of the element'
                onChange={this.onUpdateCSSSelectors}
              />
            </div>
            <div className='column is-4'>
              <div className='select is-fullwidth'>
                <select name='type' id='type'>
                  <option>string</option>
                </select>
              </div>
            </div>
          </div>
          {Array(this.state.numOfAddedSelector).fill(
            <div className='columns is-mobile'>
              <div className='column is-8'>
                <input
                  id='cssSelector0'
                  className='input'
                  name='cssSelector'
                  type='text'
                  placeholder='Enter CSS Selector of the element'
                  onChange={this.onUpdateCSSSelectors}
                />
              </div>
              <div className='column is-4'>
                <div className='select is-fullwidth'>
                  <select name='type' id='type'>
                    <option>string</option>
                  </select>
                </div>
              </div>
            </div>
          )}
          <button
            id='add-css-button'
            className='button is-fullwidth'
            onClick={this.onAddCSSSelector}
          >
            Add more CSS Selector
          </button>
          <style jsx>
            {`
              button {
                background-color: hsl(0, 0%, 29%);
                color: hsl(0, 0%, 100%);
              }
            `}
          </style>
        </div>
      </div>
    )
  }
}

export default CSSSelector
