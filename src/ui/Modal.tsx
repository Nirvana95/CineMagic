import { createPortal } from "react-dom";
import MovieModal from "../feature/movie/MovieModal";
import { useNavigate } from "react-router";
import { useEffect } from "react";

function Modal() {
  const navigate = useNavigate();

  useEffect(function () {
    window.scrollTo(0, 0);
  }, []);

  function handleExit(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target !== e.currentTarget) return;
    navigate("/");
  }
  return createPortal(
    <div
      className={`absolute right-1/2 translate-x-1/2 w-full z-50 p-20 bg-[rgba(225,225,225,0.1)] backdrop-blur-xs`}
      onClick={(e) => handleExit(e)}
    >
      <MovieModal />
    </div>,
    document.body
  );
}

export default Modal;
