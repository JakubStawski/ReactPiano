import { blackKeys } from './../keyboard/config';

export const Key = ({keyCode, activeState}) => {

    const afterBlackKeys = blackKeys.map((key) => {
        return key + 1;
    })

    const keyColorClass = blackKeys.includes(keyCode) ? 'blackKey' : 'whiteKey';
    const afterBlackClass = afterBlackKeys.includes(keyCode) ? 'afterBlack' : '';
    const activeKeyClass = activeState ? 'active' : '';

	return <li data-note={keyCode} className={['key', keyColorClass, activeKeyClass, afterBlackClass].join(' ')} />;
};
