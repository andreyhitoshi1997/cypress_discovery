const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "fsgi6q",
    viewportHeight: 1920,
    viewportWidth: 1080,
    baseUrl: 'https://buger-eats-qa.vercel.app'
  },
});
