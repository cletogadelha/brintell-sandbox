import React, { Component } from 'react';

class SampleComponent extends Component {

  _baseClass = "sample-component";

  render() {
    return (
      <section className={this._baseClass}>
        <h3>Sample Component</h3>
        {
          this.props.data.map((value, key) => {
            return (
              <div>
                {value.id} - {value.name} 
              </div>
            )
          })
        }
      </section>
    );
  }
}

export default SampleComponent;