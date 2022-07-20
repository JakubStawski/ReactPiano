import { audioContextStart } from "./AudioContextStart.scss";
import pianoImage from './piano-svgrepo-com.svg';

export const AudioContextStart = ({callback, visible}) => {

    const visibleClass = visible ? 'visible' : '';

	return (
        <div className={[visibleClass, 'audioContextPopup'].join(' ')}>
            <button className={['audioContextPopup__Button'].join(' ')} onClick={() => callback()}>
                <img src={pianoImage} className={['audioContextPopup__Image'].join(' ')} alt="piano icon"/>
                Click 'n' play~!
            </button>
        </div>
    );
};
