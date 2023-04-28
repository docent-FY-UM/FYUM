import { ListContainer } from "./style";
const List = () => {
  let currentUrl = window.location.pathname.split("/");
  return <ListContainer add={currentUrl[2]}></ListContainer>;
};
export default List;
