import config from 'config.lookup';

/**
 * Resolve placeholder for a given type
 */
export function getFor(type) {
	return `/img/placeholders/${type}.png`;
}

/**
 * Organization placeholder
 */
export const organization = getFor('organization');

/**
 * User placeholder
 */
export const user = getFor('user');

/**
 * Reuse placeholder
 */
export const reuse = getFor('reuse');

/**
 * Generic placeholder
 */
export const generic = user;


export default {
    getFor,
    user,
    organization,
    reuse,
    generic,
};
