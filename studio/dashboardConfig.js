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
                  buildHookId: '5fbc69334207f519f768d9b8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-zaihicov',
                  apiId: 'a5ed15f9-6259-4968-8e29-8da548b2c307'
                },
                {
                  buildHookId: '5fbc69338bcde818b6a0accb',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-sj184mca',
                  apiId: 'f549497c-cf6e-436a-8f86-16557ec804a2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/getcordial/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-sj184mca.netlify.app', category: 'apps'}
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
