import React from "react";
import "./styles.scss";

enum TypeToast {
  SUCCESS="SUCCESS",
  WARNING="WARNING",
  ERROR="ERROR"
}

interface ToastProps {
  title:string
  message:string,
  type?:TypeToast
}

const Toast: React.FC<ToastProps> = ({title,message,type}) => {
  return (
    <div className={`message-container`}>
      <h4 className={"message-title"}>
        <i className={`message-icon`} />
        {title}
      </h4>
      <p className={"message-text"}>{message}</p>
    </div>
  );
};

export default Toast;
