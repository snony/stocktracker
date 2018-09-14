import React from "react";
import ReactDOM from "react-dom";
import CompanyInfo from "./components/company";
import SearchForm from "./components/search/form";
import "./index.css";

const initialState = {
  search: "",
  symbol: ""
};

class StockTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  onClick = () => {
    this.setState({ symbol: this.state.search });
  };

  render() {
    return (
      <div>
        <h1>The Amazing StockTracker App In React-Redux ;-)</h1>
        <SearchForm handleChange={this.handleChange} onClick={this.onClick} />
        <h2>Company Information</h2>
        <CompanyInfo {...this.state} />
      </div>
    );
  }
}

ReactDOM.render(<StockTracker />, document.getElementById("root"));
