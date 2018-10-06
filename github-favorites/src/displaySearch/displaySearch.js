import React, {Component} from "react";
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class DisplaySearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [
                {
                    headerName: "Name",
                    field: "name"
                }, {
                    headerName: "Language",
                    field: "language"
                }, {
                    headerName: "Latest tag",
                    field: "tag"
                }, {
                    headerName: "ok",
                    field: "add"
                }
            ],
            rowData: []
        }
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }

    componentDidUpdate() {
        var rowData = [];
        this
            .props
            .searchedItems
            .map((element) => element.map((element, index) => {
                var repo = {
                    name: element.name,
                    language: element.language,
                    tag: element.tag
                };
                rowData = [...rowData, repo];
                return this.gridApi.setRowData(rowData);
            }));
    }

    add(element) {
        this
            .props
            .add(element);
    }

    render() {
        // on search, render new searchedItems and maps them into the list
        return (
            <div>
                {/* <ul>{listItems}</ul> */}
                <div
                    className="ag-theme-balham"
                    style={{
                    height: '500px',
                    width: '600px'
                }}>
                    <AgGridReact
                        onGridReady={this
                        .onGridReady
                        .bind(this)}
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}></AgGridReact>
                </div>
            </div>
        );
    }
}

export default DisplaySearch;