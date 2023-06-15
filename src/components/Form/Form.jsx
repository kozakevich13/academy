import React, { useState } from "react";
import "./Form.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Form = () => {
  const [phone, setPhone] = useState("");

  function handlePhoneChange(value) {
    setPhone(value);

    if (/[^\d+]/.test(value)) {
      alert("Будь ласка, введіть тільки цифри для номера телефону");
    }
  }

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
    link.href = `mailto:designer.web.studio.rgb@gmail.com?subject=name:${res.subject}&body=phone number:${res.description}, email: ${res.email}`;
    link.click();
  }

  return (
    <div className="user-form">
      <form onSubmit={handleSubmit}>
        <h2>
          Запишитесь <strong>бесплатно</strong> и получите подарок
        </h2>
        <div className="box-input">
          <input
            id="subject"
            type="text"
            placeholder="Ваше имя и фамилия"
            required
            className="form-input"
          />
          <PhoneInput
            id="description"
            placeholder="Ваш номер телефона"
            required
            defaultCountry="UA"
            international={true}
            value={phone}
            onChange={handlePhoneChange}
            className="form-input phone-input"
          />

          <input
            className="form-input"
            id="email"
            type="email"
            placeholder="Ваш email"
            required
          />
        </div>

        <div>
          <button type="submit">Записаться бесплатно</button>
        </div>
        <div className="text-rules">
          <p>
            Нажимая на кнопку я соглашаюсь <br />{" "}
            <u>с политикой конфиденциальности</u>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;
