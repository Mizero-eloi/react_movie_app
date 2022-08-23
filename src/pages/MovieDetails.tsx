import React, { useEffect } from "react";

interface IProps {
  handleToggleRightSideBar: (v: boolean) => void;
  handleToggleLeftSideBar: (v: boolean) => void;
}

const MovieDetails = ({
  handleToggleRightSideBar,
  handleToggleLeftSideBar,
}: IProps) => {
  useEffect(() => {
    handleToggleRightSideBar(false);
    handleToggleLeftSideBar(false);
  }, []);

  return <div className="bg-red-500 text-white">MovieDetails</div>;
};

export default MovieDetails;
