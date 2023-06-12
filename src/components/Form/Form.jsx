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
        <input
          id="subject"
          type="text"
          placeholder="Ваше имя и фамилия"
          required
        />
        <input
          id="description"
          type="tel"
          placeholder="Ваш номер телефона"
          required
          pattern="[0-9]{12}"
        />
        <input id="email" type="email" placeholder="Ваш email" required />
        <div>
          <button type="submit">Записаться бесплатно</button>
        </div>

        <p>
          Нажимая на кнопку я соглашаюсь <br />{" "}
          <u>с политикой конфиденциальности</u>{" "}
        </p>
      </form>
    </div>
  );
};

export default Form;
