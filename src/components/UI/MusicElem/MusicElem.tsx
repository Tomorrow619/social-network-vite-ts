
import { SMusicElem } from "./MusicElem.style";

interface IMusicElem {
    musicImg: string;
    musicMainText: string;
    musicSecondaryText: string;
    altText: string;
}

export const MusicElem = ({
    musicImg,
    musicMainText,
    musicSecondaryText,
    altText,
}: IMusicElem) => {
    return (
        <SMusicElem>
         <img src={musicImg} alt={altText} />
            <div className="music-description">
        <p className="main__text">{musicMainText}</p>
        <p className="secondary__text">{musicSecondaryText}</p>
      </div>
      <div className="plus-button"></div>
        </SMusicElem>
    );
};