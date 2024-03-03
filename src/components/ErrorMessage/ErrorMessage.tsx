import UIVideo from '../UIVideo';
import video from './../UIVideo/video/video.mp4';
import s from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <>
      <p className={s.text}>
        The dark side of the force has won.
        <br />
        We cannot display data.
        <br />
        Come back when we fix everything
      </p>
      <UIVideo src={video} classes={s.video} />
    </>
  );
};

export default ErrorMessage;
