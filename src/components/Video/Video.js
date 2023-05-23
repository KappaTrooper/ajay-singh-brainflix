import "./Video.scss";

export default function Video(props) {
    return (
        <>
            <div className="video-item">

           
              <video className="video-item__box" controls poster={props.image}>
                <source src="" type="video/mp4" />
            </video>

            </div>

        </>
    )
}
