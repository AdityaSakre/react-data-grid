const ReactDataGrid = require('react-data-grid-sk');
const exampleWrapper = require('../components/exampleWrapper');
const React = require('react');

const Example = React.createClass({
  getInitialState() {
    this.createRows();
    this._columns = [
      { key: 'id', name: 'ID' },
      { key: 'task', name: 'Title' },
      { key: 'priority', name: 'Priority' },
      { key: 'issueType', name: 'Issue Type' },
      { key: 'complete', name: '% Complete' }
    ];

    return null;
  },

  createRows() {
    let rows = [];
    for (let i = 1; i < 1000000; i++) {
      rows.push({
        id: i,
        task: 'Task ' + i,
        complete: 'a',
        priority: 'b',
        issueType: 'c'
      });
    }

    this._rows = rows;
  },

  rowGetter(i) {
    return this._rows[i];
  },

  render() {
    return  (
      <ReactDataGrid
        columns={this._columns}
        rowGetter={this.rowGetter}
        rowsCount={this._rows.length}
        minHeight={500} />);
  }
});

module.exports = exampleWrapper({
  WrappedComponent: Example,
  exampleName: 'One Million Rows Example',
  exampleDescription: 'A grid with 1 Million rows.',
  examplePath: './scripts/example10-one-million-rows.js',
  examplePlaygroundLink: 'https://jsfiddle.net/k7tfnw1n/9/'
});
