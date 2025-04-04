import { useRef } from "react";
import "./NewItem.css";

interface NewItemProps {
  placeholder: string;
  handleClick: (text: string) => void;
}

const NewItem = ({ handleClick, placeholder }: NewItemProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const onClick = () => {
    if (inputRef.current) {
      handleClick(inputRef.current.value);
      inputRef.current.value = "";
    }
  };
  return (
    <>
      <input type="text" placeholder={placeholder} ref={inputRef} />
      <button onClick={onClick}>Add todo</button>
    </>
  );
};

export default NewItem;
