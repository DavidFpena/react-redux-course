import ImageShow from "./ImageShow";

function ImageList({ images }) {
  const renderedImages = images.map((image, index) => {
    return <ImageShow source={image.urls.small} desc={image.alt_description} key={index}/>
  });

  return(
    <div>
      {renderedImages}
    </div>
  );
};

export default ImageList;
