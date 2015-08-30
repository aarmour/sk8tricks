let tricksInternal = {
  Kickflip: {
    'Pop Shuvit, Backside': { name: 'Varial Kickflip', aliases: ['Kickflip Shuvit', '180 Flip'] },
    'Pop Shuvit, Frontside': { name: 'Hardflip' },
    '360 Pop Shuvit, Frontside': { name: 'Tre Flip', aliases: ['360 Flip'] }
  },
  Heelflip: {
    'Pop Shuvit, Frontside': { name: 'Varial Heelflip', aliases: ['Heelflip Shuvit'] }
  }
};

/**
 * Return a list of fundamental tricks.
 * @param {String} [trick] If provided, return a list of fundamental tricks that can be combined
 * with trick.
 * @return {Array<String>} Fundamental tricks
 */
export function list(trick) {
  return Object.keys(trick ? (tricksInternal[trick] || {}) : tricksInternal);
}

/**
 * Given a list of fundamental tricks, return the trick that is a combination
 * of the provided tricks.
 * @param  {...String} tricks Fundamental tricks
 * @return {Object} Returns an object containing the trick data, or undefined if
 * the list of fundamental tricks does not resolve to a known trick.
 */
export function resolve(...tricks) {
  let resolved = tricksInternal[tricks.shift()];

  tricks.forEach((trick) => resolved = resolved[trick]);

  return resolved;
}
