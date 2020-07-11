import React from 'react'
import ResourcePreview from './ResourcePreview'
import ArticlePreview from './ArticlePreview'
import { Header } from 'semantic-ui-react'

function ResourcesPage () {
    return (
        <div>
            <Header as='h2'>Articles</Header>
            <div id='articles-list'>
            {/* list */}
                <ArticlePreview ></ArticlePreview>
            </div>
            <div id='resources-list'>
                {/* list */}
                <ResourcePreview></ResourcePreview>
            </div>
        </div>
    )

}

export default ResourcesPage