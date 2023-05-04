import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

import { exhibitionListActions } from "../../store/exhibitionListSlice";

const ExhibitionList = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.exhibitionList);

  useEffect(() => {
    dispatch(exhibitionListActions.getExhibitionListStart());
  }, []);

  console.log("데이터는?", data);

  return (
    <div>
      <h1>하이?</h1>
    </div>
  );
};

export default ExhibitionList;
