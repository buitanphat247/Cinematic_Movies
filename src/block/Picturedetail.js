import React from "react";
import Button from "../Components/Button";
import Modal from "@mui/material/Modal";
const Picturedetail = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="h-[550px] rounded-md overflow-hidden relative">
      <img
        src={`https://image.tmdb.org/t/p/w500/${props.url_image}`}
        alt="Notfound"
        className="object-cover w-full h-full"
      />
      <Button
        className={
          "text-black p-2 rounded-md text-2xl absolute top-5 left-5 font-bold bg-yellow-300"
        }
      >
        Watch Now
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden w-[70%] h-[90%]">
          <iframe
            src={`https://www.youtube.com/embed/${props.keyVideo}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="w-full h-full"
          ></iframe>
        </div>
      </Modal>
      <div
        onClick={handleOpen}
        className="bg-black absolute top-0 right-0 bottom-0 left-0 opacity-55 transition-all cursor-pointer flex items-center justify-center"
      >
        <i className="fa-regular fa-circle-play text-[80px] text-white"></i>
      </div>
    </div>
  );
};

export default Picturedetail;
