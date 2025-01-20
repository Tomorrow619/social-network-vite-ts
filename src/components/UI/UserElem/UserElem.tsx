import { SUserElem } from "./UserElem.style";
import { Badge } from "../Badge/Badge";
interface IUserElem {
  userImg:string;
  userMainText:string;
  userSecondaryText:string;
 
  
}

export const UserElem = ({userImg, userMainText, userSecondaryText}:IUserElem) => {
  return (
    <SUserElem>
      <img src={userImg} alt="User" />
      <div className="user__description">
        <p className="main__text">{userMainText}</p>
        <p className="secondary__text">{userSecondaryText}</p>
      </div>
      <Badge badgeText="3" />
    </SUserElem>
  );
};
