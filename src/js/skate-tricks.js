let tricksInternal = {
  Hardflip: {
    'Late Backside 180': { name: 'Ghetto Bird', excludeReverse: true },
    '360 Body Rotation, Backside': { name: 'Diamond Flip', excludeReverse: true }
  },
  Heelflip: {
    'Pop Shuvit, Frontside': { name: 'Varial Heelflip', aliases: ['Heelflip Shuvit'] },
    'Pop Shuvit, Backside': { name: 'Inward Heelflip' },
    '360 Pop Shuvit, Frontside': { name: 'Laser Flip', aliases: ['Frontside 360 Heelflip'] },
    '360 Pop Shuvit, Backside': { name: '360 Inward Heelflip', aliases: ['Mainecoon Flip'] }
  },
  Kickflip: {
    'Pop Shuvit, Backside': { name: 'Varial Kickflip', aliases: ['Kickflip Shuvit', '180 Flip'] },
    'Pop Shuvit, Frontside': { name: 'Hardflip' },
    '360 Pop Shuvit, Backside': { name: 'Tre Flip', aliases: ['360 Flip'] },
    '360 Pop Shuvit, Frontside': { name: '360 Hardflip'}
  }
};

mergeInverse();

function mergeInverse() {
  Object.keys(tricksInternal).forEach(function (key) {
    var trick = tricksInternal[key];

    Object.keys(trick).forEach(function (innerKey) {
      var innerTrick = trick[innerKey];

      if (innerTrick.excludeReverse) return;

      if (!tricksInternal[innerKey]) {
        tricksInternal[innerKey] = {};
      }

      tricksInternal[innerKey][key] = innerTrick;
    });
  });
}

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
