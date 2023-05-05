/**
 * This file will hold the Main content that lives in the main body of the site
 *
 */
import React from "react";

class Home extends React.Component {
  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof Home
   */

  render() {
    return (
      <section id="home">
        <div className="content">
          {this.props.searchResult
            ? this.props.searchResult.map((item) => (
                <div className="product" key={item._id}>
                  <div className="card">
                    <img src={item.picture} />
                    <h3 className="name">{item.name}</h3>
                    <p className="price">${item.price}</p>
                    <button>View Details</button>
                  </div>
                </div>
              ))
            : null}
        </div>
      </section>
    );
  }
}

// Export out the React Component
module.exports = Home;
