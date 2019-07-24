import React, { Component } from 'react';
import 'datatables.net-dt/css/jquery.dataTables.css'

import 'datatables-bulma/css/dataTables.bulma.css'
// import 'jquery/dist/jquery.min'
// import 'datatables.net-dt/js/dataTables.dataTables'
// import 'datatables-bulma/js/dataTables.bulma'

const $ = require('jquery')
$.DataTable = require('datatables-bulma')

export default class Table extends Component {

  componentDidMount() {
    console.log(this.el)
    this.$el = $(this.el)
    this.$el.DataTable(
      {
        data: this.props.data,
        columns: [
          {title: 'Name'},
          {title: 'Position'},
          {title: 'Office'},
          {title: 'Extn.'},
          {title: 'Start date'},
          {title: 'Salary'}
        ]
      }
    )
  }

  render() {
    return (
      <div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title"> Title</p>
          </header>
          <div className="card-content">
            <table className="table is-bordered is-hoverable is-narrow "  ref={ el => this.el = el }></table>
          </div>
        </div>

      </div>
    );
  }
}
