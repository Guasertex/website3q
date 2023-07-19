export default defineEventHandler(
  async event => `Hello, ${event.context.params.info}`
);
