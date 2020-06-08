import React, { Component } from "react"
import ReactJSON from "react-json-view"

const PrettyJSONViewPlugin = function(system) {
  return {
    wrapComponents: {
      highlightCode: (Original, system) => class WrappedHighlightCode extends Component {
        constructor(props) {
          super(props)

          this.activeTab = this.activeTab.bind(this)

          this.state = {
            activeTab: "pretty",
          }
        }

        activeTab(e) {
          let { target: { dataset: { name } } } = e

          this.setState({
            activeTab: name,
          })
        }

        render() {

          let { value } = this.props

          const style = {
            padding: "10px",
            borderRadius: "3px",
            margin: "10px 0px",
          }

          let content

          try {
            content = JSON.parse(value)
          } catch(err) {
            content = {
              error: "can't parse JSON.  Raw result:\n\n" + value,
            }
          }
          let prettyBody = <ReactJSON style={style} src={content} theme="monokai" name={false}/>

          return (
            <div>
              <div className="tabbed-content">
                {this.state.activeTab === "pretty" ? prettyBody : <Original {...this.props} />}
              </div>
              <ul className="tab">
                <li className={"tabitem" + (this.state.activeTab === "pretty" ? " active" : "")}>
                  <a className="tablinks" data-name="pretty" onClick={this.activeTab}>Pretty</a>
                </li>
                <li className={"tabitem" + (this.state.activeTab === "raw" ? " active" : "")}>
                  <a className="tablinks" data-name="raw" onClick={this.activeTab}>Raw</a>
                </li>
              </ul>
            </div>
          )
        }
      }
    }
  }
}


export default PrettyJSONViewPlugin
