import React from 'react';
import _ from 'lodash';

import components, { Layout } from '../components/index';
import { getPageUrl } from '../utils';

export default class Advanced extends React.Component {
    render() {
        const data = _.get(this.props, 'data');
        const config = _.get(data, 'config');
        const posts = _.get(this.props, 'posts');
        const page = _.get(this.props, 'page');
        const sections = _.get(page, 'sections');
        const pageUrl = getPageUrl(page);

        return (
            <Layout page={page} config={config}>
                {_.map(sections, (section, index) => {
                    const sectionType = _.get(section, 'type');
                    const component = _.upperFirst(_.camelCase(sectionType));
                    if (!component) {
                        throw new Error(`у раздела page нет свойства 'type', page: ${pageUrl}`);
                    }
                    const Component = components[component];
                    if (!Component) {
                        throw new Error(`нет компонента, соответствующего типу раздела страницы: ${sectionType}`);
                    }
                    return  <Component key={index} section={section} data={data} posts={posts} />;
                })}
            </Layout>
        );
    }
}
