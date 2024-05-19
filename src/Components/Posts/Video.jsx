import PropTypes from 'prop-types';
import ReactPlayer from 'react-player/youtube';
const Video = ({ videoUrl }) => {
    return (
        <div className="relative pb-[56.25%] h-0 overflow-hidden">
            <ReactPlayer
                className="absolute top-0 left-0"
                url={videoUrl}
                width="100%"
                height="100%"
                controls={true}
            />
        </div>
    );
};
Video.propTypes = {
    videoUrl: PropTypes.string,
};

export default Video;

