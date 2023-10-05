import '../stylesheet/ImageShow.css'

function ImageShow({ source }) {


  return(
    <div className='imgshow'>
      <img src={source} className='imgshow'/>
    </div>
  );
};

export default ImageShow;
