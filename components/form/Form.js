import { Component } from 'react'
import axios from 'axios'

import URLInput from '../form/URLInput'
import CSSSelector from '../form/CSSSelector'
import IntervalSetter from '../form/IntervalSetter'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
      cssSelectors: {},
      interval: 300,
      keyForResetCSSSelector: Math.random()
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onUpdateCSSSelectors = this.onUpdateCSSSelectors.bind(this)
    this.onUpdateURL = this.onUpdateURL.bind(this)
    this.onUpdateInterval = this.onUpdateInterval.bind(this)
    this.onResetForm = this.onResetForm.bind(this)
  }

  /**
   * 
   * @param {string} url
   */
  onUpdateURL(url) {
    this.setState({ url: url })
  }

  /**
   * 
   * @param {string} cssSelectors 
   */
  onUpdateCSSSelectors(cssSelectors) {
    this.setState({ cssSelectors: cssSelectors })
  }

  /**
   * 
   * @param {integer} interval 
   */
  onUpdateInterval(interval) {
    this.setState({ interval: interval })
  }

  onResetForm() {
    this.setState({
      url: '',
      cssSelectors: {},
      interval: 300,
      keyForResetCSSSelector: Math.random()
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    axios
      .post('/watch', {
        url: this.state.url,
        cssSelectors: this.state.cssSelectors,
        interval: this.state.interval
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <section>
        <div className='columns is-centered'>
          <div className='column is-6-desktop is-8-tablet is-12-mobile rounded-border'>
            <div id='form-box' className='box'>
              <form id='form' onSubmit={this.handleSubmit}>
                <div className='is-size-2 has-text-centered has-text-dark'>
                  Night Watch
                </div>
                <URLInput onUpdateURL={this.onUpdateURL} />
                <CSSSelector
                  key={this.state.keyForResetCSSSelector}
                  onUpdateCSSSelectors={this.onUpdateCSSSelectors}
                />
                <IntervalSetter onUpdateInterval={this.onUpdateInterval} />
                <div className='control'>
                  <button
                    id='submit-button'
                    className='button'
                    onSubmit={this.handleSubmit}
                  >
                    Submit
                  </button>
                  <button
                    id='reset-button'
                    className='button'
                    type='reset'
                    onClick={this.onResetForm}
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <style jsx>{`
          #form-box {
            background-color: hsl(0, 0%, 71%);
            border-radius: 20px;
          }

          #submit-button {
            color: hsl(0, 0%, 100%);
            background-color: hsl(0, 0%, 4%);
          }

          #reset-button {
            margin-left: 1rem;
          }
        `}</style>
      </section>
    )
  }
}

export default Form
