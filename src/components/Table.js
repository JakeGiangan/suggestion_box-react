import React from 'react';
import TableContent from './TableContent';

const Table = ({ items }) => {

  return (
    <div className="row">
      <div className="col">
        <table className="table table-striped table-dark">
          <thead className="text-center">
            <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Date Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <TableContent items={items} />
        </table>
      </div>
    </div >
  );
}

export default Table;