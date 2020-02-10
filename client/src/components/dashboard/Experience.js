import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';

const Experience = ({ experience }) => {
  const experiences = experience.map(exp => (
    <td key={exp._id}>
      <td>{exp.company}</td>
      <td className='hide-sm'>{exp.title}</td>
      <td>
        <Moment format='YYYY/MM/DD'>{exp.from}</Moment>
      </td>
    </td>
  ));

  return (
    <Fragment>
      <h2 className='my-2'>Experience Credentials</h2>
      <table className='table'>
        <thread>
          <tr>
            <th>Company</th>
            <th className='hide-sm'>Title</th>
            <th className='hide-sm'>Years</th>
            <th />
          </tr>
        </thread>
      </table>
    </Fragment>
  );
};

Experience.propTypes = {};

export default Experience;
