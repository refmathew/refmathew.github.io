// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(async actions => {

    const Links = require('./data/links.json');
    const Projects = require('./data/projects.json');
    const Socials = require('./data/socials.json');
    const Works = require('./data/works.json');

    const LinksCollection = actions.addCollection('Link');
    const ProjectsCollection = actions.addCollection('Project');
    const SocialsCollection = actions.addCollection('Social');
    const WorksCollection = actions.addCollection('Work');

    for (const link of Links){
      LinksCollection.addNode(link);
    }
    for (const project of Projects){
      ProjectsCollection.addNode(project);
    }
    for (const social of Socials){
      SocialsCollection.addNode(social);
    }
    for (const work of Works){
      WorksCollection.addNode(work);
    }
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
