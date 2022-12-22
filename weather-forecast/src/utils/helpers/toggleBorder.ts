const toggleBorder = (e: React.MouseEvent) => {
  const target = e.target as HTMLImageElement;
  if (target.classList.contains("image-wrapper-bordered")) {
    target.classList.remove("image-wrapper-bordered");
  } else {
    target.classList.add("image-wrapper-bordered");
  }
};

export default toggleBorder;
