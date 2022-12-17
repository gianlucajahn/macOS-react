import { useContext } from "react";
import { store } from "../../App";
const [state, dispatch] = useContext(store);

const submitInput = (e: any, query: string) => {
  const event = e;
  const target = e.currentTarget;
  if (event.key === "Enter") {
    dispatch({
      type: "query/SUBMIT",
      payload: "test",
    });
  }
};

export default submitInput;
