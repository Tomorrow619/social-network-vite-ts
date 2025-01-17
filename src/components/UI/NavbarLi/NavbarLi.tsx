import React from "react"

type TNavbarLi = {
  liName:string,
  liViewBox:string,
  liId:string,
  liD:string,
  liText:string,
}& React.LiHTMLAttributes<HTMLLIElement>

export const NavbarLi = ({
  liName,
  liD,
  liViewBox,
  liId,
  liText,
}:TNavbarLi)=>{
  return(
    <li className="navbar__item">
          <svg
            className={liName}
            viewBox={liViewBox}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id={liId}
              d={liD}
            />
          </svg>
          <p className="item__name">{liText}</p>
          <span className="Badge">1</span>
        </li>
  )
}