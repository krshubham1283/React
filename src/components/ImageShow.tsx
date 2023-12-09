type ImageShowProp = {
  image: any
}

function ImageShow(props: ImageShowProp) {
  return (
    <div>
      <img src={props.image.urls.small} alt={props.image.alt_description}/>
    </div>
  )
}

export default ImageShow
