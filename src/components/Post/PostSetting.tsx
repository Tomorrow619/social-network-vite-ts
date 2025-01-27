import { SPostSetting } from "./Post.style";

interface IPostSettingProps {
  onEditClick?: () => void;
  onDeleteClick?: () => void;
}

export const PostSetting = ({
  onEditClick,
  onDeleteClick,
}: IPostSettingProps) => {
  return (
    <SPostSetting>
      <span onClick={onEditClick}> Изменить</span>
      <span onClick={onDeleteClick}> Удалить</span>
    </SPostSetting>
  );
};
