/**
 * @cometweb/carbon-badge
 * 
 * Lightweight web component showing CO₂e emissions per page view.
 * Powered by CometWeb & SWDM v4.
 * 
 * Usage:
 *   <script src="https://cdn.jsdelivr.net/npm/@cometweb/carbon-badge"></script>
 *   <cometweb-carbon-badge url="https://example.com"></cometweb-carbon-badge>
 * 
 * Or via npm:
 *   import '@cometweb/carbon-badge';
 */

export { CometWebCarbonBadge } from './badge';
export { estimateCO2, co2ToScore } from './estimator';
export type { BadgeData, ScoreLetter, BadgeTheme, BadgeMode } from './types';

import { CometWebCarbonBadge } from './badge';

if (typeof customElements !== 'undefined' && !customElements.get('cometweb-carbon-badge')) {
    customElements.define('cometweb-carbon-badge', CometWebCarbonBadge);
}
