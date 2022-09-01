import { diContainer } from '../../infrastructure/register'
import { SuggestionController } from '../../infrastructure/controllers/suggestionController'

async function run(): Promise<void> {
    const controller: SuggestionController = diContainer.resolve('SuggestionController')

    const userId = 3

    const now = new Date()
    const yesterday = new Date(now.toISOString().substring(0, 10))
    yesterday.setDate(yesterday.getDate() - 1)

    const tomorrow = new Date(now.toISOString().substring(0, 10))
    tomorrow.setDate(tomorrow.getDate() + 1)

    await controller.makeSuggestion(userId, now)
    await controller.makeSuggestion(userId, now)
    await controller.makeSuggestion(userId, now)

    const suggestions = await controller.getSuggestions(userId, yesterday, tomorrow)
    console.log('getSuggestions() for ', userId, suggestions)
}

(async () => {
    await run()
})()