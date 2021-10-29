import classnames from 'classnames';

// Простая обертка вокруг classNames для возврата null, если классы не были созданы
// Otherwise, original classNames returns empty string which causes class="" to be generated
export default function classNames(...args) {
    return classnames.call(this, ...args) || null;
}
