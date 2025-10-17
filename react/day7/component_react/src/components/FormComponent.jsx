import React from "react";

export default function FormComponent() {
  return (
    <div>
      <form action="">
        <label htmlFor="">name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="enter your name"
        />
      </form>
    </div>
  );
}
