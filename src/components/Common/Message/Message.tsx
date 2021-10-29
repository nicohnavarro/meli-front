import React from 'react';
import './Message.scss';

export default function Message(props:any){
    return <div className={`message-container ${props.error ? 'error' : ''}`}>
        <h4 className={'message-title'}><i className={`message-icon ${props.error ? 'error' : ''}`}/>Lo sentimos!</h4>
        <p className={'message-text'}>{props.message}</p>
    </div>
}