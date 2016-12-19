import React, { Component } from 'react';
import './App.css';

var ObjectDataListStore = require('./ObjectDataListStore');
var FixedDataTable = require('fixed-data-table');
var myData2 = require('./ads_metrics/ads-metrics-data.json');


const {Table, Column, Cell} = FixedDataTable;


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


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataList: new ObjectDataListStore(1000000),
    };
  }
  render() {
    var {dataList} = this.state;
    return (
      <Table
        rowHeight={50}
        headerHeight={50}
        rowsCount={dataList.getSize()}
        width={500}
        height={500}
        {...this.props}>
        <Column
          header={<Cell>Name</Cell>}
          cell={<LinkCell data={dataList} col="name" />}
          fixed={true}
          width={100}/>
        <Column
          header={<Cell>Impressions</Cell>}
          cell={<TextCell data={dataList} col="impressions" />}
          width={100}/>
        <Column
          header={<Cell>Reach</Cell>}
          cell={<TextCell data={dataList} col="reach" />}
          width={100}/>
        <Column
          header={<Cell>Frequency</Cell>}
          cell={<TextCell data={dataList} col="frequency" />}
          width={200}/>
        <Column
          header={<Cell>Ctr</Cell>}
          cell={<TextCell data={dataList} col="ctr" />}
          width={200}/>
        <Column
          header={<Cell>cost_per_inline_link_click</Cell>}
          cell={<LinkCell data={dataList} col="cost_per_inline_link_click" />}
          width={200}/>
        <Column
          header={<Cell>actions_goal</Cell>}
          cell={<TextCell data={dataList} col="actions_goal" />}
          width={200}/>
        <Column
          header={<Cell>cost_per_action_type_cost_per_goal</Cell>}
          cell={<TextCell data={dataList} col="cost_per_action_type_cost_per_goal" />}
          width={200}/>
        <Column
          header={<Cell>actions_offsite_conversion</Cell>}
          cell={<TextCell data={dataList} col="actions_offsite_conversion" />}
          width={200}/>
      </Table>
    );
  }
}

export default App;
