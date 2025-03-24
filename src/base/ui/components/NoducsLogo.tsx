import React, { useRef } from "react";

const NoducsLogo = () => {
  const imageRef = useRef(
    "https://wtemrwnjzqbbmgxpxrvf.supabase.co/storage/v1/object/public/cat_designs/public/noducst.png?t=2025-01-19T13%3A58%3A33.049Z"
  );

  return (
    <img
      src={imageRef.current}
      alt="Noducs"
      className="w-60 h-auto"
      loading="lazy"
    />
  );
};

export default NoducsLogo;
