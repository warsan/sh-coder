import classnames from 'classnames';

// Простая обёртка вокруг classNames для возврата null, если классы не были созданы
// В противном случае исходное classNames возвращает пустую строку, что вызывает class="" генерироваться
export default function classNames(...args) {
    return classnames.call(this, ...args) || null;
}
