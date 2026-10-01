import React, { useEffect, useState } from "react";
import {ArrowUp} from "lucide-react";

export const BackToTop=(()=>{

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    function handleScroll() {

      setVisible(window.scrollY > 350);

    }

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, []);


  if (!visible) {
    return null;
  }


  return (
    <button
      className="back-top"
      onClick={() => {

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }}
      aria-label="Back to top"
    >
      <ArrowUp size={21} />
    </button>
  );
}) 