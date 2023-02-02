import React from "react";

export default function Alert(props) {
  return (
    <div>
      <div class="alert alert-primary" role="alert">
        {props.message}
      </div>
    </div>
  );
}
