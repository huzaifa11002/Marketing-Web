import { type SchemaTypeDefinition } from 'sanity'
import hero from './hero'
import client from './client'
import service from './service'
import about from './about'
import project from './project'
import team from './team'
import chooseUs from './chooseUs'
import testimonial from './testimonial'
import happyClient from './happyClient'
import contact from './contact'
import weChat from './weChat'

export const schema: { types: SchemaTypeDefinition[] } = {

  types: [hero, client, service, about, project, team, chooseUs, testimonial, happyClient, contact, weChat],
  
}
