export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fe19cd9b607b1a879c38e6b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-2-studio-x6rbimre',
                  apiId: '2b660311-43a5-4695-884f-a47921ff7e6f'
                },
                {
                  buildHookId: '5fe19cd93662cc8953460d20',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-2-web-eki8oqvd',
                  apiId: 'dc8b595f-bf3f-46d8-be64-3581b469fcc3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gofurtheronline/sanity-kitchen-sink2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-2-web-eki8oqvd.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
