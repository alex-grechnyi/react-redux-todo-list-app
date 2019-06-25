import React from 'react';
import './Buttons.css'

const Btn = props => (
    <span
        onClick={props.onClick}
        className={`btn btn-outline-${props.className}`}
        title={props.t}
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
    {props.symb}
  </span>);

export const ImportantBtn = p => <Btn onClick={p.onClick} className="warning" symb="&#128293;" t='Important'/>;
export const DeleteBtn = p => <Btn onClick={p.onClick} className="danger" symb="&#128683;" t='Delete'/>;
export const CloseBtn = p => <Btn onClick={p.onClick} className="danger" symb="&#10060;" t='Close'/>;
export const UpdateBtn = p => <Btn onClick={p.onClick} className="primary" symb="&#128259;" t='Edit'/>;
export const AddBtn = p => <Btn onClick={p.onClick} className="dark" symb="&#128204;" t='Add'/>;

export const ImportantBtnAct = p => <span className="btn btn-warning" title='Important'
                                          role="img"
                                          aria-label={p.label ? p.label : ""}
                                          aria-hidden={p.label ? "false" : "true"}>&#128293;</span>;

export const CompleteBtn = () => <span className="complete" title="Complete">&#10004;</span>;
export const UnCompleteBtn = () => <span className="unComplete" title="UnComplete">&#10004;</span>;






