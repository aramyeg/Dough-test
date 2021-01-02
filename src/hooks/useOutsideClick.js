import { useEffect, useRef } from "react";

const useOutsideClick = (attachEvent, callback) => {
  const reference = useRef(null);

  const handleClick = e => {
    if (reference.current && !reference.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    attachEvent && document.addEventListener('click', handleClick, true);

    return ()=>{
      document.removeEventListener('click', handleClick, true);
    }
  }, [attachEvent]);

  return reference

};

export default useOutsideClick;