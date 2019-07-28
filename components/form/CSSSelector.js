import { Component } from 'react'

class CSSSelector extends Component {
  constructor(props) {
    super(props)
    this.state = { cssSelectors: {}, numOfAddedSelector: 0 }
    this.onAddCSSSelector = this.onAddCSSSelector.bind(this)
    this.onUpdateCSSSelectors = this.onUpdateCSSSelectors.bind(this)
  }

  async updateState() {
    //get list of css input's value
    const listCssInput = document.getElementsByName('cssSelector')

    //get list of type selection's value
    const listCssType = document.getElementsByName('type')
    let currentCSSSelectorState = this.state.cssSelectors
    currentCSSSelectorState = {}
    await listCssInput.forEach((element, index) => {
      const cssSelector = element.value
      const type = listCssType[index].options[listCssType[index].selectedIndex].value
      if (cssSelector.trim() != '') {
        currentCSSSelectorState[cssSelector] = type
      }
    })
    this.setState({ cssSelectors: currentCSSSelectorState })
  }

  onAddCSSSelector(event) {
    event.preventDefault()
    this.setState({ numOfAddedSelector: this.state.numOfAddedSelector + 1 })
  }

  async onUpdateCSSSelectors() {
    await this.updateState()
    this.props.onUpdateCSSSelectors(this.state.cssSelectors)
  }

  render() {
    return (
      <div className='field'>
        <label className='label'>CSS Selector</label>
        <div className='control'>
          <div className='columns'>
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
            <div className='columns'>
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
          <button id='add-css-button' className='button is-fullwidth' onClick={this.onAddCSSSelector}>
            Add more CSS Selector
          </button>
        </div>
      </div>
    )
  }
}

export default CSSSelector
