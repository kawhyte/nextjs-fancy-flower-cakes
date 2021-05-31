export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '60b55358efb68e438c5bfab3',
                  title: 'Sanity Studio',
                  name: 'nextjs-fancy-flower-cakes-studio',
                  apiId: '6a642465-6ce3-4b4d-b522-37961d68ceee'
                },
                {
                  buildHookId: '60b553585fa6c4925d253938',
                  title: 'Landing pages Website',
                  name: 'nextjs-fancy-flower-cakes',
                  apiId: '8ae6c7d3-0e12-4ce3-83c2-f0afc118260c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kawhyte/nextjs-fancy-flower-cakes',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://nextjs-fancy-flower-cakes.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
