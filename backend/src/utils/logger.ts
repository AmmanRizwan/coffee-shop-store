import pino from "pino";

const logger = pino({
  level: "info",
  transport: {
    target: "pino-pretty",
    options: {
      levelFirst: true,
      translateTime: "SYS:standard"
    }
  }
})

export default logger;