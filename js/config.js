const hidpi = (window.devicePixelRatio > 1 || (
    window.matchMedia &&
    window.matchMedia('(-webkit-min-device-pixel-ratio: 1.25),(min-resolution: 120dpi)').matches)
)

const tiles_attributions = '&copy;' + [
    '<a href="http://openstreetmap.org/copyright">OpenStreetMap</a>',
    '<a href="https://cartodb.com/attributions">CartoDB</a>'
].join('/')

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
   * The static assets root URL
   */
  static_root: '/',

  /**
   * The administration root URL
   */
  admin_root: '/en/admin',

  /**
   * The authentification URL for logins
   */
  auth_url: '/en/login',

  /**
   * Whether the 'delete me' feature is enabled or not.
   */
  is_delete_me_enabled: true,

  /**
   * Map tiles URL
   */
  tiles_url: `https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}${hidpi ? '@2x' : ''}.png`,

  /**
   * Leaflet base config
   */
  tiles_config: {subdomains: 'abcd', attribution: tiles_attributions},
}
