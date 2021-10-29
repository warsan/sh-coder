import _ from 'lodash';

/**
 * Получите страницу по указанному адресу `urlPath`.
 *
 * @param {Array} pages Массив объектов страниц. Все страницы должны иметь поле '__metadata.urlPath'.
 * @param {string} urlPath The url path to find the page by
 * @return {Object}
 */
export default function getPage(pages, urlPath) {
    urlPath = _.trim(urlPath, '/');
    return _.find(pages, page => {
        const pageUrlPath = _.trim(_.get(page, '__metadata.urlPath'), '/');
        return urlPath === pageUrlPath;
    });
}
