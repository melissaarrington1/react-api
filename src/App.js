import React, { Component } from "react";

class HomePage extends Component {
  state = {
    itemCurrentlyOnSale: "A Hammer",
    saleYesOrNo: true
  };

  toggleSaleYesOrNo = () => {
    const saleYesOrNo = !this.state.saleYesOrNo;
    this.setState({ saleYesOrNo });
  };
  render() {
    return (
      <div>
        <h1>My Hardware Store</h1>
        <div>
          <span>Currently On Sale: {this.state.itemCurrentlyOnSale}!</span>
          <span>
            <button onClick={this.toggleSaleYesOrNo}>
              {this.state.saleYesOrNo ? "Hide" : "Edit Sale Item"}
            </button>
          </span>
          {this.state.saleYesOrNo ? (
            <div>
              <input type="text" />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
export default HomePage;
