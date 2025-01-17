import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppHeader } from "../../components/UI/AppHeader/AppHeader";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { Applink } from "../../components/UI/Applink/Applink";
import { IconsWrapper } from "../../components/UI/IconsWrapper/IconsWrapper";
import { SLoginPage } from "../LoginPage/LoginPage.style";
import "./RegistrationPage.scss"


export const RegistrationPage = ()=> {
    return (

<SLoginPage>
<AppHeader AppHeaderText="Регистарция" textType="h1"/>
<form action="#">

<AppInput inputPlaceholder="Введите Имя" inputType="tel" isError={false}     />
<AppInput inputPlaceholder="Номер телефона" inputType="text" isError={false}   />
<AppInput inputPlaceholder="Пароль" inputType="password" isError={false}    />
<AppButton  buttonText="Зарегистрироваться" buttonType="button" isDisabled={false}   />
<Applink href="#" linkText="Войти"/>
</form>
<IconsWrapper regLink="#" regText="Уже есть аккаунт?" regHrefText="Войти" regEnterText="Регистрация с помощью" />
</SLoginPage>




    )
} 