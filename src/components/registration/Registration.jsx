import { createUserWithEmailAndPassword } from "firebase/auth";
import "./Registration.css";
import React, { useState } from "react";
import { auth } from "./Auth";

export const Registration = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [copyPassword, setCopyPassword] = useState("");
    const [error, setError] = useState("");
    function register(e) {
        e.preventDefault();
        if (copyPassword !== password) {
            setError("Password don't match");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user);
                setError("");
                setEmail("");
                setPassword("");
                setCopyPassword("");
            })
            .catch((error) => console.log(error));
    }
    return (
        <div className="registration">
            <div className="registration__container">
                <form
                    action=""
                    className="registration__form"
                    onSubmit={register}
                >
                    <h2 className="registration__title">Create an account</h2>
                    <input
                        placeholder="Please enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="registration__input"
                    />
                    <input
                        placeholder="Please enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="registration__input"
                    />
                    <input
                        placeholder="Please confirm your password"
                        value={copyPassword}
                        onChange={(e) => setCopyPassword(e.target.value)}
                        type="password"
                        className="registration__input"
                    />
                    <button className="registration__button">Create</button>
                    {error ? (
                        <p className="registration__error">{error}</p>
                    ) : (
                        ""
                    )}
                </form>
            </div>
        </div>
    );
};

export default Registration;

/*export const Registration = () => {
    return (
        <>
            <form className="registration__form" action="" method="post">
                <h2 className="registration__title">Форма регистрации</h2>
                <h3 className="registration__subtitle">
                    Поля, обязательные для заполнения
                </h3>
                <label className="registration__label">
                    Имя:<em className="registration__field">*</em>
                </label>
                <input
                    className="regisration__input"
                    type="text"
                    placeholder="Ваше имя"
                    required
                />
                <label className="registration__label">
                    Фамилия:<em className="field__required">*</em>
                </label>
                <input
                    className="regisration__input"
                    type="text"
                    placeholder="Ваша фамилия"
                    required
                />
                <label className="registration__label">
                    Отчество:<em className="field__required">*</em>
                </label>
                <input
                    className="regisration__input"
                    type="text"
                    placeholder="Ваше отчество"
                    required
                />
                <label className="registration__label">
                    Почта:<em className="field__required">*</em>
                </label>
                <input
                    className="regisration__input"
                    type="email"
                    placeholder="Ваш e-mail"
                    required
                />
                <label className="registration__label">
                    Пароль:<em className="field__required">*</em>
                </label>
                <input
                    className="registration__input"
                    type="password"
                    placeholder="Пароль"
                    minLength={5}
                    maxLength={16}
                    required
                />
                <label className="registration__label">
                    Повторите пароль:<em className="field__required">*</em>
                </label>
                <input
                    className="regisration__input"
                    type="password"
                    placeholder="Пароль еще раз"
                    minLength={5}
                    maxLength={16}
                    required
                />
                <label htmlFor="agreement">
                    Согласие на обработку персональных данных
                    <input type="checkbox" name="" />{" "}
                </label>
                <p>
                    <u>Дополнительная информация</u>
                </p>
                <label htmlFor="avatar">Загрузите свой аватар:</label>
                <input type="file" name="file" id="file" />
                <img src="" />
                <label htmlFor="gender">Пол:</label>
                <select id="gender">
                    <option>Мужской</option>
                    <option>Женский</option>
                </select>
                <div className="registration__passport">
                    <label htmlFor="passport_full">Серия/номер паспорта:</label>
                    <input
                        type="text"
                        placeholder="Введите данные"
                        name="passport_series"
                        maxLength={4}
                    />
                    <span className="regisration__separator"> / </span>
                    <input
                        type="text"
                        placeholder="Введите данные"
                        name="passport_number"
                        maxLength={6}
                    />
                </div>
                <label htmlFor="passportDate">Дата выдачи паспорта:</label>
                <input type="date" placeholder="Введите данные" />
                <label htmlFor="passportIssuer">Кто выдал паспорт:</label>
                <input type="text" placeholder="Введите данные" />
                <button className="registration__button" type="submit">
                    Зарегистрироваться
                </button>
            </form>
        </>
    );
};

export default Registration;
*/
