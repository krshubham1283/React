import ImageShow from "./ImageShow";
import './ImageList.css'

type ImageListProp = {
  images: any[]
}

function ImageList(props: ImageListProp) {

  const renderedImages = props.images.map((image) => {
    return <ImageShow key={image.id} image={image}/>
  })
  return (
    <div className='image-list'>
      {renderedImages}
    </div>
  )
}

export default ImageList
