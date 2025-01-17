function ProfileCard (prop){
    const title = prop.title;
    const handle = prop.handle;
    const image =  prop.image;
    const des =  prop.description;

    return(
    <div className="card">
        <div className="card-image">
          <figure className="image is-1by1">
             <img src = {image} alt = "Digital Assistant's Image"/>
          </figure>
        </div>

        <div clclassNameass="card-content">
            <div className="media-content">            
                <p className="title is-4">{title}</p>
                <p className="subtitle is-6">{handle}</p>
            </div>
            <div className="content">{des}</div>
        </div>
    </div>    
    );
}
export default ProfileCard;