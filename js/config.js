module.exports = {
  /**
   * Map debug features on Webpack DEBUG flag
   */
  debug: DEBUG,

  /**
   * The current language is guessed from the html lang attribute
   */
  lang: 'en',

  /**
   * Reuse server side site title
   */
  title: 'Admin - Udata',

  /**
   * The API Swagger specifications URL
   */
  api_specs: '/api/1/swagger.json',

  /**
   * The theme static root URL
   */
  theme_static: '/',

  /**
   * The administration root URL
   */
  admin_root: '/en/admin',

  /**
   * Whether the 'delete me' feature is enabled or not.
   */
  is_delete_me_enabled: true,

  tiles_config: {
    url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
    hiDPIUrl: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}@2x.png',
    subdomains: 'abcd',
    attributions: [
      { name: 'OpenStreetMap', url: 'http://openstreetmap.org/copyright' },
      { name: 'CartoDB', url: 'https://cartodb.com/attributions' }
    ]
  }
}
