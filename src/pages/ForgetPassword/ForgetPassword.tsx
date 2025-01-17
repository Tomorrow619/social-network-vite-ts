
import { AppButton } from "../../components/UI/AppButton/AppButton"
import { AppInput } from "../../components/UI/AppInput/AppInput"
import "./ForgetPassword.scss"


export const ForgetPassword = ()=>{
   return (
    <div className="ForgetPassword">
<h1>Забыли пароль?</h1>
<span>Укажите номер телефона,чтобы получить код сброса пароля</span>
<form action="#">
<AppInput inputPlaceholder="Номер телефона" inputType="tel" isError={false}  />

<AppButton buttonText="Отправить" buttonType="button" isDisabled={false} />
</form>


</div>
   ) 
}

