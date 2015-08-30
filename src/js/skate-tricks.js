let tricksInternal = {
  Kickflip: {
    'Pop Shuvit, BS': { name: 'Varial Kickflip', aliases: ['Kickflip Shuvit', '180 Flip'] },
    'Pop Shuvit, FS': { name: 'Hardflip' },
    '360 Pop Shuvit, FS': { name: 'Tre Flip', aliases: ['360 Flip'] }
  },
  Heelflip: {
    'Pop Shuvit, FS': { name: 'Varial Heelflip', aliases: ['Heelflip Shuvit'] }
  }
};

/**
 * Return a list of fundamental tricks.
 * @return {Array<String>} Fundamental tricks
 */
export function list() {
  return Object.keys(tricksInternal);
}

/**
 * Given a list of fundamental tricks, return the trick that is a combination
 * of the provided tricks.
 * @param  {...String} tricks Fundamental tricks
 * @return {Object} Returns an object containing the trick data, or undefined if
 * the list of fundamental tricks does not resolve to a known trick.
 */
export function resolveTrick(...tricks) {
  let resolved = tricksInternal[tricks.shift()];

  tricks.forEach((trick) => resolved = resolved[trick]);

  return resolved;
}
