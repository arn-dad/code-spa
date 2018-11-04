import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { rowData } from './data';
import { getColumnDefs, getFullWidthCellRenderer } from './utils';

class CustomGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rowData,
      columnDefs: getColumnDefs(),
      isFullWidthCell(rowNode) {
        let rowIsNestedRow = rowNode.flower;
        return rowIsNestedRow;
      },
      fullWidthCellRenderer: getFullWidthCellRenderer(),
      getRowHeight(params) {
        let rowIsNestedRow = params.node.flower;
        return rowIsNestedRow ? 100 : 25;
      },
      onGridReady(params) {
        params.api.forEachLeafNode((rowNode) => {
          if (rowNode.data.name === 'Ireland' || rowNode.data.name === 'United Kingdom') {
            rowNode.expanded = true;
          }
        });
        params.api.onGroupExpandedOrCollapsed();
      },
      doesDataFlower(dataItem) {
        return dataItem.name !== 'Venezuela';
      }
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.onGroupExpandedOrCollapsed();
  }

  render() {
    const {
      rowData: rowsData,
      columnDefs,
      isFullWidthCell,
      fullWidthCellRenderer,
      getRowHeight,
      onGridReady: onGridReadyTo,
      doesDataFlower
    } = this.state;
    return (
      <div style={{padding: "0 15px 0 15px", width: '100%', height: '80vh' }}>
        <div
          id="myGrid"
          style={{
            boxSizing : 'border-box',
            height    : '100%',
            width     : '100%'
          }}
          className="ag-theme-balham"
        >
          <AgGridReact
            rowData={rowsData}
            columnDefs={columnDefs}
            isFullWidthCell={isFullWidthCell}
            fullWidthCellRenderer={fullWidthCellRenderer}
            getRowHeight={getRowHeight}
            onGridReady={onGridReadyTo}
            doesDataFlower={doesDataFlower}
            onGridReady={this.onGridReady.bind(this)}
          />
        </div>
      </div>
    );
  }
}


export default CustomGrid;
