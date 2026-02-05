const mixme = require('mixme')
const config_default = require('../conf/default')

module.exports = (config_custom = {}) => {
  // Allow environment variables to override default config
  const config_env = {}
  if (process.env.REDIS_HOST || process.env.REDIS_PORT) {
    config_env.redis = {
      host: process.env.REDIS_HOST || config_default.redis.host,
      port: parseInt(process.env.REDIS_PORT) || config_default.redis.port
    }
  }
  const config = mixme.merge(config_default, config_env, config_custom)
  return config
}
