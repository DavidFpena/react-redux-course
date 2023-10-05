import ImageShow from "./ImageShow";
import '../stylesheet/ImageList.css'

function ImageList({ images }) {
  const renderedImages = images.map((img) => {
    return <ImageShow source={img.urls.small} key={img.id} />
  })

  return(
    <div className="ImageList-cont">
      {renderedImages}
    </div>
  );
};


export default ImageList;
