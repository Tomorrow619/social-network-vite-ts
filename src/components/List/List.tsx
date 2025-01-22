import { UserElem } from "../UI/UserElem/UserElem";
import { dataList } from "./dataList";
import { SList } from "./List.style";
import { AppHeader } from "../UI/AppHeader/AppHeader";
export const List = () => {
  return (
    <SList>
      <div className="List__title">
        <AppHeader
        AppHeaderText="Подписки" textType="h2"
        />
        <span className="count">123</span>
      </div>
      {dataList.map((elem) => (
        <UserElem
          userImg={elem.listImg}
          userMainText={elem.listMain}
          userSecondaryText={elem.listSecondary}
        />
      ))} </SList>
 
  );
};
