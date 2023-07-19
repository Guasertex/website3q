export default defineEventHandler(async event => {
  const query =  getQuery(event);
  const body = await readBody(event);
  return {
    api: "works bitch",
    record: query.param1,
    body: body
  };
});