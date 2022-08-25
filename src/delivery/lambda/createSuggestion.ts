import { diContainer } from '../../infrastructure/register'
import { SuggestionController } from '../../infrastructure/controllers/suggestionController'
import { parseEvent } from './helpers/events'

export const handler = async (event: any): Promise<any> => {
  const controller: SuggestionController = diContainer.resolve('SuggestionController')
  let { userId, date } = parseEvent(event)

  if (!date) {
    date = new Date().toISOString()
  }

  const suggestion = await controller.makeSuggestion(userId, date)

  return {
    statusCode: 200,
    body: JSON.stringify(suggestion),
  }
}
