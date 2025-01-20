import { UserElem } from "../UI/UserElem/UserElem";
import { dataFriends } from "./dataFriends";

export const Friends = () => {
  return (
    <div className="List">
      <div className="List__title">
        <h2>Близкие друзья</h2>
        <span className="count">123</span>
      </div>
      {/* Функция обратного вызова (elem) для каждого элемента массива и map()-перебирает массив dataFriends */}
      {dataFriends && dataFriends.map((elem) => (
          <UserElem
            userImg={elem.userImg}
            userMainText={elem.userMainText}
            userSecondaryText={elem.userSecondaryText}
          />
        ))}
    </div>
  );
};
