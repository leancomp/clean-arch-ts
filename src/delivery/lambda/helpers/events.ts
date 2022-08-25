export const parseEvent = (event: any) => {
  const isFromHttp = !!event.headers
  return isFromHttp ? event.queryStringParameters || JSON.parse(event.body) : event.detail
}