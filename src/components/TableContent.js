import React from 'react';
import Moment from 'react-moment';

const TableContent = ({ items }) => {
  return (
    <tbody>
      {
        items.map(item => (
          < tr key={item.index} >
            <td className="text-center" > {item.title} </td>
            <td className="text-center" > {item.content} </td>
            <td className="text-center" > <Moment fromNow ago>{item.created_at}</Moment> ago </td>
            <td className="text-center">
              <div className="btn btn-group">
                <button className="btn btn-primary" disabled={true}> <i className="fa fa-eye"></i> View</button>
                <button className="btn btn-info" disabled={true}><i className="fa fa-pencil"></i> Edit</button>
                <button className="btn btn-danger" disabled={true}><i className="fa fa-trash"></i> Delete</button>
              </div>
            </td>
          </tr >
        ))
      }
    </tbody >
  );
}

export default TableContent;