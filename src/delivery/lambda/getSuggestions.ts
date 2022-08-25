import 'reflect-metadata'
import { diContainer } from '../../infrastructure/register'
import { SuggestionController } from '../../infrastructure/controllers/suggestionController'
import { parseEvent } from './helpers/events'

export const handler = async (event: any): Promise<any> => {
  const controller: SuggestionController = diContainer.resolve('SuggestionController')
  const { userId, startDate, endDate } = parseEvent(event)

  const suggestions = await controller.getSuggestions(userId, startDate, endDate)

  return {
    statusCode: 200,
    body: JSON.stringify(suggestions),
  }
}
