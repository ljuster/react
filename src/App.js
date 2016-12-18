import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './FakeObjectDataListStore.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

var FixedDataTable = require('fixed-data-table');

const {Table, Column, Cell} = FixedDataTable;

const DateCell = ({rowIndex, data, col, ...props}) => (
    <Cell {...props}>
        {data.getObjectAt(rowIndex)[col].toLocaleString()}
    </Cell>
);


const LinkCell = ({rowIndex, data, col, ...props}) => (
    <Cell {...props}>
        <a href="#">{data.getObjectAt(rowIndex)[col]}</a>
    </Cell>
);

const TextCell = ({rowIndex, data, col, ...props}) => (
    <Cell {...props}>
        {data.getObjectAt(rowIndex)[col]}
    </Cell>
);

class ObjectDataExample extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        var {dataList} = this.state;
        return (
            <Table
                rowHeight={50}
                headerHeight={50}
                rowsCount={dataList.getSize()}
                width={1000}
                height={500}
                {...this.props}>
                <Column
                    header={<Cell>First Name</Cell>}
                    cell={<LinkCell data={dataList} col="firstName" />}
                    fixed={true}
                    width={100}/>
                <Column
                    header={<Cell>Last Name</Cell>}
                    cell={<TextCell data={dataList} col="lastName" />}
                    fixed={true}
                    width={100}/>
                <Column
                    header={<Cell>City</Cell>}
                    cell={<TextCell data={dataList} col="city" />}
                    width={100}/>
                <Column
                    header={<Cell>Street</Cell>}
                    cell={<TextCell data={dataList} col="street" />}
                    width={200}/>
                <Column
                    header={<Cell>Zip Code</Cell>}
                    cell={<TextCell data={dataList} col="zipCode" />}
                    width={200}/>
                <Column
                    header={<Cell>Email</Cell>}
                    cell={<LinkCell data={dataList} col="email" />}
                    width={200}/>
                <Column
                    header={<Cell>DOB</Cell>}
                    cell={<DateCell data={dataList} col="date" />}
                    width={200}/>
            </Table>
        );
    }
}

module.exports = ObjectDataExample;