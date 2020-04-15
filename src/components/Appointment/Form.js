import React, { useState } from "react";

import InterviewerList from "../InterviewerList";
import Button from "../Button";


export default function Form(props) {
  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);


  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Enter Student Name"
          />
        </form>
        <InterviewerList interviewers={props.interviewers} value={interviewer} onChange={(event) => setInterviewer(event.target.value)}/>
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={props.onCancel}>Cancel</Button>
          <Button confirm onClick={props.onSave}>Save</Button>
        </section>
      </section>
    </main>
  )
};
