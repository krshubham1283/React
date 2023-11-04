
type ProfileCardAtt = {
  title: string
  handle: string
  image: string
  description: string
}
function ProfileCard(props: ProfileCardAtt) {
  return (
    <div className='card'>
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={props.image} alt='pda logo'/>
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className='title is-4'>{props.title}</p>
          <p className='subtitle is-6'>{props.handle}</p>
        </div>
        <div className="content">
          {props.description}
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
