import { AppButton } from "../../components/UI/AppButton/AppButton";

import { AppInput } from "../../components/UI/AppInput/AppInput";
import { Applink } from "../../components/UI/Applink/Applink";
import { IconsWrapper } from "../../components/UI/IconsWrapper/IconsWrapper";
import { useRegisterUserMutation } from "../../store/API/authApi";
import { SLoginPage } from "../LoginPage/LoginPage.style";
import { changeUser } from "../../store/userSlice";

// export const RegistrationPage = ()=> {
//     return (

// <SLoginPage>
// <AppHeader AppHeaderText="Регистарция" textType="h1"/>
// <form action="#">

// <AppInput inputPlaceholder="Введите Имя" inputType="tel" isError={false}     />
// <AppInput inputPlaceholder="Номер телефона" inputType="text" isError={false}   />
// <AppInput inputPlaceholder="Пароль" inputType="password" isError={false}    />
// <AppButton  buttonText="Зарегистрироваться" buttonType="button" isDisabled={false}   />
// <Applink href="#" linkText="Войти"/>
// </form>
// <IconsWrapper regLink="#" regText="Уже есть аккаунт?" regHrefText="Войти" regEnterText="Регистрация с помощью" />
// </SLoginPage>

//     )
// }

import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { IRegisterUserPayload } from "../../store/API/authApi";
import { useDispatch } from "react-redux";
import { AppHeader } from "../../components/UI/AppHeader/AppHeader";

const registrationFormScheme = yup.object({
  name: yup.string().required(),
  email: yup
    .string()
    .email("Введите корректный email")
    .required("Введите email"),

  phone_number: yup.string().required("Введите номер телефона"),
  password: yup
    .string()
    .min(4, "Пароль должен быть не менее 4 символов")
    .required("Обязательное поле"),
  user_city: yup.string().required("Введите город"),
});

export const RegistrationPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [registerUser] = useRegisterUserMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUserPayload>({
    resolver: yupResolver(registrationFormScheme),
    // mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      password: "",
      user_city: "",
    },
  });

  const formData: SubmitHandler<IRegisterUserPayload> = async (data) => {
    const payload = {
      name: data.name,
      email: data.email,
      phone_number: data.phone_number,
      password: data.password,
      user_city: data.user_city,
    };
    try {
      const response = await registerUser(payload).unwrap();

      if (response.user_id) {
        dispatch(changeUser(payload));
        navigate("/");
      }
    } catch (error) {
      console.error("Ошибка" + error);
    }
  };
  return (
    <SLoginPage>
      <AppHeader AppHeaderText="Зарегестрироваться" textType="h1"  />
      <form onSubmit={handleSubmit(formData)}>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Ваше имя"
              inputType="text"
              inputValue={field.value}
              onChange={field.onChange}
              isError={errors.email ? true : false}
              errorText={errors.name?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Введите почту"
              inputType="email"
              inputValue={field.value}
              onChange={field.onChange}
              isError={errors.email ? true : false}
              errorText={errors.name?.message}
            />
          )}
        />
         <Controller
          control={control}
          name="phone_number"
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Ваш номер"
              inputType="text"
              {...field}
              isError={errors.phone_number ? true : false}
              errorText={errors.phone_number?.message}
              inputValue={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Пароль"
              inputType="password"
              inputValue={field.value}
              onChange={field.onChange}
              isError={Boolean(errors.name)}
              errorText={errors.password?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="user_city"
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Ваш город"
              inputValue={field.value}
              onChange={field.onChange}
              isError={Boolean(errors.user_city)}
              errorText={errors.user_city?.message}
              inputType="text"
            />
          )}
        />
        <AppButton buttonText="Войти" buttonType="submit" isDisabled={false} />
      </form>
      <Applink href="./forget-password" linkText="Забыли пароль?" />
      <IconsWrapper
        regLink="/"
        regText="Уже есть аккаунт?"
        regHrefText="Войти"
        regEnterText="Регистрация с помощью"
      />
    </SLoginPage>
  );
};
