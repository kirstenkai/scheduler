import React from 'react';
import PropTypes from 'prop-types';
import InterviewerListItem from './InterviewerListItem.js';

import './InterviewerList.scss';

export default function InterviewerList(props) {

  InterviewerList.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func.isRequired
  };

  const list = props.interviewers.map(interviewer => {
    return (
    <InterviewerListItem
      key={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected={interviewer.id === props.value}
      setInterviewer={ event => props.onChange(interviewer.id)}
    />
    )
  });
  

  return (
  <section className="interviewers">
  <h4 className="interviewers__header text--light">Interviewer</h4>
  <ul className="interviewers__list">{list}</ul>
  </section>
)
}
