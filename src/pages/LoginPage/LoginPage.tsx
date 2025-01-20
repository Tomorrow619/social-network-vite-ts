import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { Applink } from "../../components/UI/Applink/Applink";
import { IconsWrapper } from "../../components/UI/IconsWrapper/IconsWrapper";
import { SLoginPage } from "./LoginPage.style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useLoginUserMutation } from "../../store/API/authApi";

const AuthFormScheme = yup.object({
  userEmail: yup
    .string()
    .required("Email обязателен")
    .email("Введите корректный email")
    .min(4, "Введите минимум 4 символа")
    .max(30, "не более 30 символов"),

  userPassword: yup
    .string()
    .required("Пароль обязателен")
    .min(6, "Минимум 6 символов")
    .max(30, "не более 30 символов"),
});

export const LoginPage = () => {
  interface SLoginPage {
    userEmail: string;
    userPassword: string;
  }
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SLoginPage>({
    resolver: yupResolver(AuthFormScheme),
    defaultValues: {
      userEmail: "",
      userPassword: "",
    },
  });
  const  [loginUser,{ data: userData } ]= useLoginUserMutation( );


  const formData: SubmitHandler<SLoginPage> = (data) => {
    const payloud = {
      email: data.userEmail,
      password: data.userPassword,
    };
    loginUser(payloud);
    
  };
  return (
    <SLoginPage>
      <h1>Авторизация</h1>
      <form action="#" onSubmit={handleSubmit(formData)}>
        <Controller
          control={control}
          name="userEmail"
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Ваша почта"
              inputType="email"
              {...field}
              isError={Boolean(errors.userEmail)}
              errorText={errors.userEmail?.message}
              inputValue={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="userPassword"
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Пароль"
              inputType="password"
              {...field} //onChange,onBlur
              isError={Boolean(errors.userPassword)}
              errorText={errors.userPassword?.message}
              inputValue={field.value}
              onChange={field.onChange}
            />
          )}
        />

        <AppButton buttonText="Войти" buttonType="submit" isDisabled={false} />
      </form>
      <Applink href="./ForgetPassword" linkText="Забыли пароль?" />
      <Applink href="#" linkText="Зарегистрироваться" />
      <IconsWrapper
        regLink="./RegistrationPage"
        regEnterText="Войти с помощью"
        regText="У вас нет аккаунта?"
        regHrefText="Зарегестрироваться"
      />
    </SLoginPage>
  );
};
