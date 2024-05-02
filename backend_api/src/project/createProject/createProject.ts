import { logger } from '/opt/lib/logger'
// import { Project } from '../../types'

export const handler = async (event: any) => {
  // const project: Project = {
  //   id: '1',
  //   name: 'Project 1',
  //   description: 'This is project 1',
  // }
  // console.log('project', project)

  logger.info('createProject', event)
  logger.info('Hello, its working')
  console.log('hello, its working')
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'createProject',
      input: event,
    }),
  }
}
