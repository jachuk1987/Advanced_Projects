import React, { Component } from "react";
import Table from "./Table";

class StudentData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUsers: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      this.setState({ listUsers: data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  render() {
    return (
      <div>
        <Table listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default StudentData;
