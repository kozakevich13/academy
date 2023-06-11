import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  function handleSubmit(e) {
    e.preventDefault();

    const inputs = [...e.target.elements];
    const res = inputs.reduce((prev, current) => {
      if (current.id) {
        prev[current.id] = current.value;
      }

      return prev;
    }, {});

    const link = document.createElement("a");
    link.href = `mailto:vitaliy.kozakevich@gmail.com?subject=name:${res.subject}&body=phone number:${res.description}, email: ${res.email}`;
    link.click();
  }

  return (
    <div className="user-form">
      <form onSubmit={handleSubmit}>
        <h2>
          Запишитесь <strong>бесплатно</strong> и получите подарок
        </h2>
        <input id="email" type="text" placeholder="email" required />
        <input
          id="subject"
          type="text"
          placeholder="Імя та Прізвище"
          required
        />
        <input id="description" placeholder="Номер телефону" />
        <div>
          <button type="submit">Записаться бесплатно</button>
        </div>

        <p>
          Нажимая на кнопку я согашаюсь <br />{" "}
          <u>с политикой конфидециальности</u>{" "}
        </p>
      </form>
    </div>
  );
};

export default Form;
