import { logger } from '../libs/logger'

export const handler = async (event: any) => {
  logger.info('createProject', event)
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'createProject',
      input: event,
    }),
  }
}

if (require.main === module) {
  handler(null)
}