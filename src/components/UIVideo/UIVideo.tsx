import s from './UIVideo.module.css';

type UIVideoProps = {
  src: string;
  classes: string;
};

const UIVideo = ({ src, classes }: UIVideoProps) => {
  return (
    <video loop autoPlay muted className={classes}>
      <source src={src} />
    </video>
  );
};

export default UIVideo;
