'use strict';

import React from 'react';

const EmployeeDetail = ({employee}) => {
  //destructuring
  const {name, email, phone, avatar} = employee;

  return (
    <div className="thumbnail">
      <img src={avatar} />
      <div className="caption">
        <h3>{name}</h3>
        <ul className="list-group">
          <li className="list-group-item">{phone}</li>
          <li className="list-group-item">{email}</li>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeDetail;
