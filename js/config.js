/**
 * The current user data
 */
export const user = {
  id: userEl.getAttribute('content'),
  slug: userEl.dataset.slug,
  first_name: userEl.dataset.first_name,
  last_name: userEl.dataset.last_name,
  roles: userEl.dataset.roles.split(','),
}

/**
 * Map debug features on Webpack DEBUG flag
 */
export const debug = DEBUG

/**
 * The current language is guessed from the html lang attribute
 */
export const lang = 'en'

/**
 * Reuse server side site title
 */
export const title = 'Admin - Udata'

/**
 * The API Swagger specifications URL
 */
export const api_specs = 'https://next.data.gouv.fr/api/1/swagger.json'

/**
 * The theme static root URL
 */
export const theme_static = '/'

/**
 * The static assets root URL
 */
export const static_root = '/'

/**
 * The administration root URL
 */
export const admin_root = '/en/admin'

/**
 * The authentification URL for logins
 */
export const auth_url = '/en/login'

/**
 * Whether the 'delete me' feature is enabled or not.
 */
export const is_delete_me_enabled = true

/**
 * Detect HiDPI screens
 */
export const hidpi = (window.devicePixelRatio > 1 || (
    window.matchMedia
    && window.matchMedia('(-webkit-min-device-pixel-ratio: 1.25),(min-resolution: 120dpi)').matches)
)
/**
 * Attributions for map tiles
 */
export const tiles_attributions = '&copy;' + [
    '<a href="http://openstreetmap.org/copyright">OpenStreetMap</a>',
    '<a href="https://cartodb.com/attributions">CartoDB</a>'
].join('/')
/**
 * Map tiles URL
 */
export const tiles_url = `https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}${hidpi ? '@2x' : ''}.png`

/**
 * Leaflet base config
 */
export const tiles_config = {subdomains: 'abcd', attribution: tiles_attributions}
