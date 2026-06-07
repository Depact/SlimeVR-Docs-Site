/**
 * Smol Building Calculator - Components Data
 * Defines all component choices and their cost/amount calculations.
 * @module components-data
 */

export const recommendedTrackersPerReceiver = 8;

// TENSTAR NRF52840 2-pack → $7.16 (2pcs Red NRF52840)
export const nrf52840_2Pack_Price = 7.16;
// 401230 120mAh 10pcs
export const battery_10Pack_Price = 17.45;


function calculateRecommendedReceiversAmount(set) {
    return Math.max(1, Math.ceil(set / recommendedTrackersPerReceiver));
}


/**
 * @typedef {Object} Choice
 * @property {string} name - Name of the part.
 * @property {string} [description] - Description of the part.
 * @property {(number|((set:number)=>number|string))} amount - Numeric amount or function returning amount/display string.
 * @property {(number|((set:number)=>number))} cost - Unit cost or function returning unit cost.
 * @property {(number|((set:number)=>number))} costAll - Total cost or function returning total cost.
 * @property {string} links - HTML string with purchase links/info.
 */

/**
 * @typedef {Object} ComponentCategory
 * @property {string} name - Name of the component category.
 * @property {Choice[]} choices - Available choices for this component.
 * @property {boolean} [hideFor5Set] - Whether to hide this component when 5-set is selected.
 */

/**
 * All component categories and their choice options.
 * @type {ComponentCategory[]}
 */
export const componentCategories = [
    {
        name: 'Microcontroller\
        <br/>\
        <sup><a href="smol-tracker.html#-microcontroller-boards" target="_blank">[more]</a></sup>',
        choices: [
            {
                name: "nRF52840",
                description: "Includes 20% overage to account for DOA (Dead on Arrival) issues.",
                amount: (set) => Math.ceil(set * 1.2) + " (20% overage)",
                cost: () => nrf52840_2Pack_Price / 2,
                costAll: (set) => Math.ceil(set * 1.2) * (nrf52840_2Pack_Price / 2),
                links: '\
                    Available on AliExpress with <code>compatible with nice!nano</code>, <code>SuperMini</code>, or<code>Pro Micro</code> branding.\
                    <ul>\
                        <li>\
                            <a href="https://pl.aliexpress.com/item/1005007738886550.html" target="_blank">AliExpress (2pcs Red NRF52840)</a>\
                        </li>\
                    </ul>\
                    <br/><br/><span>$7.16 per 2-pack ($3.58/board).</span>',
            },
            {
                name: "Sourced elsewhere",
                amount: () => 0,
                cost: () => 0,
                costAll: () => 0,
                links: "",
            },
        ],
    },
    {
        name: 'IMU\
        <br/>\
        <sup><a href="smol-tracker.html#-inertial-measurement-units" target="_blank">[more]</a></sup>',
        choices: [
            {
                name: "🟢 ICM-45686",
                description: "",
                amount: (set) => set,
                cost: () => 6.70,
                costAll: (set) => set * 6.70 + 6.7,
                links: '<a href="https://shop.slimevr.dev/products/slimevr-mumo-breakout-module-v1-icm-45686-qmc6309" target="_blank">SlimeVR Mumo Breakout Module V1 (ICM-45686 + QMC6309)</a><br/><br/><span>$6.70 per IMU. Cost includes one extra for receiver spare (+$6.70).</span>',
            },
            {
                name: "🟢 LSM6DSV",
                amount: (set) => set,
                cost: () => 8.93,
                costAll: (set) => set * 8.93 + 5.58,
                links: '<a href="https://moffshop.deyta.de/products/lsm6dsv-module" target="_blank">Moffshop LSM6DSV</a><br/><br/><span>$8.93 per IMU. Cost includes one extra for receiver spare (+$5.58).</span>',
            },
            {
                name: "🟢 Nekumori Chrysalis LSM6DSV",
                description: "An LSM6DSV shield with a button and RGB LED",
                amount: (set) => set,
                cost: () => 4.39,
                costAll: (set) => set * 4.39 + 5.5,
                links: '<a href="https://nekumori.pink/products/chrysalis" target="_blank">Nekumori Chrysalis</a><br/><br/><span>$4.39 per IMU. Cost includes one extra for receiver spare (+$5.50).</span>',
            },
        ],
    },
    {
        name: 'Button\
        <br/>\
        <sup><a href="smol-tracker.html#-buttons" target="_blank">[more]</a></sup>',
        choices: [
            {
                name: "3X4X2MM SMD 2-PIN (AliExpress)",
                amount: (set) => set,
                cost: () => 1.26 / 100,
                costAll: (set) => set * (1.26 / 100),
                links: '<a href="https://www.aliexpress.com/item/1005004194174696.html" target="_blank">3×4×2mm 100pcs (AliExpress)</a><br/><br/><span>$1.26 per 100pcs ($0.013 per button).</span>',
            },
            {
                name: "Sourced elsewhere",
                amount: () => 0,
                cost: () => 0,
                costAll: () => 0,
                links: "",
            },
        ],
    },
    {
        name: 'Batteries\
        <br/>\
        <sup><a href="smol-tracker.html#-batteries" target="_blank">[more]</a></sup>',
        choices: [
            {
                name: "401230 3.7V 120 mAh Battery (AliExpress)",
                description: "Most community cases are designed to accommodate this battery.",
                amount: (set) => set,
                cost: () => battery_10Pack_Price / 10,
                costAll: (set) => set * (battery_10Pack_Price / 10),
                links: '<a href="https://www.aliexpress.com/item/1005006119986947.html" target="_blank">401230 120mAh×10 (AliExpress)</a><br/><br/><span>$17.45 per 10-pack ($1.75 per battery).</span>',
            },
            {
                name: "Sourced elsewhere",
                amount: () => 0,
                cost: () => 0,
                costAll: () => 0,
                links: "",
            },
        ],
    },
    {
        name: 'Kapton Tape <sup><a href="smol-tracker.html#-kapton-tape" target="_blank">[more]</a></sup>',
        choices: [
            {
                name: "Width: 20MM",
                description: "Do not skip using Kapton tape—it's essential to prevent short circuits when building stacked setups.",
                amount: () => 1,
                cost: () => 0.99,
                costAll: () => 0.99 + 0.99,
                links: '<a href="https://www.aliexpress.com/item/1005007518587827.html" target="_blank">AliExpress (Brown/33M/0.05MM/20MM)</a><br/><br/><span>$0.99 per roll, plus $0.99 shipping.</span>',
            },
            {
                name: "Sourced elsewhere",
                amount: () => 0,
                cost: () => 0,
                costAll: () => 0,
                links: "",
            },
        ],
    },
    {
        name: 'Wire for trackers wire mod\
            <br/>\
            <sup><a href="smol-tracker.html#-copper-wire-for-wire-antenna-mod" target="_blank">[more]</a></sup>',
        choices: [
            {
                name: "🟢 22 AWG, 2m (AliExpress)",
                amount: () => 1,
                cost: () => 3.78,
                costAll: () => 3.78 + 1.68,
                links: '<a href="https://www.aliexpress.com/item/1005002632016529.html" target="_blank">AliExpress (22 AWG, 2m)</a><br/><br/><span>$3.78 for 2m wire, plus $1.68 shipping.</span>',
            },
            {
                name: "🟡 26AWG, 10m spools - 6 pcs (Amazon)",
                amount: () => 1,
                cost: () => 14.99,
                costAll: () => 14.99,
                links: '<a href="https://www.amazon.com/dp/B07G2LRX68" target="_blank">Amazon 26 AWG, 10m spools</a>',
            },
            {
                name: "🟢 Sourced from Ethernet cable",
                amount: () => 1,
                cost: () => 3,
                costAll: () => 3,
                links: "Ethernet cable has 8 isolated copper wires inside. You can buy cable and cut it for wires.",
            },
            {
                name: "Sourced elsewhere",
                amount: () => 0,
                cost: () => 0,
                costAll: () => 0,
                links: "",
            },
        ],
    },
    {
        name: 'Cases\
        <br/>\
        <sup><a href="smol-tracker.html#-cases" target="_blank">[more]</a></sup>',
        choices: [
            {
                name: "🟢 3D printed, approximate cost",
                amount: (set) => set,
                cost: () => 2,
                costAll: (set) => set * 2,
                links: '\
                    Files of case designs can be found on <a href="smol-slimes-community-builds.html" target="_blank">community builds page</a>.<br/><br/>Stacked designs are recommended.\
                    <br/><br/><span>$2 per case (3D print material estimate).</span>',
            },
            {
                name: "Sourced elsewhere",
                amount: () => 0,
                cost: () => 0,
                costAll: () => 0,
                links: "",
            },
        ],
    },
    {
        name: 'Straps\
        <br/>\
        <sup><a href="smol-tracker.html#-straps" target="_blank">[more]</a></sup>',
        choices: [
            {
                name: "🟢 DIY, Depact V3",
                amount: (set) => set,
                cost: (set) => 0.99 + Math.ceil(set / 6) * 1.14,
                costAll: (set) => 0.99 + Math.ceil(set / 6) * 1.14,
                links: '<a href="smol-slimes-community-straps.html" target="_blank">Depact V3 strap docs</a><br/><br/><span>$0.99 GoPro chest strap (one-time) + $1.14 per 5m band roll (~6 straps).</span>',
            },
            {
                name: "🟡 Generic AliExpress straps + GoPro Chest Strap",
                amount: (set) => Math.ceil(set / 5),
                cost: () => 5 + 0.99,
                costAll: (set) => Math.ceil(set / 5) * 2.67 + 2.77 + 0.99,
                links: '\
                    Parts:\
                    <ul>\
                        <li><a href="https://aliexpress.com/item/1005001908740631.html" target="_blank">AliExpress (25mm×200-400mm, 2-5pcs)</a>\
                            <br/>Most cases are designed for 30mm wide straps.\
                        </li>\
                        <li><a href="https://www.aliexpress.com/item/1005004792179605.html" target="_blank">$0.99 GoPro Chest Strap</a></li>\
                    </ul>',
            },
            {
                name: "🟡 Generic AliExpress straps",
                amount: (set) => Math.ceil(set / 5),
                cost: () => 5,
                costAll: (set) => Math.ceil(set / 5) * 2.67 + 2.77,
                links: '\
                    Parts:\
                    <ul>\
                        <li><a href="https://aliexpress.com/item/1005001908740631.html" target="_blank">AliExpress</a>\
                            <br/>Most cases are designed for 30mm wide straps.\
                        </li>\
                    </ul>',
            },
            {
                name: "🟡 Generic Amazon straps",
                amount: (set) => (set < 5 ? 1 : 2),
                cost: () => 9.0,
                costAll: (set) => (set < 5 ? 1 : 2) * 9.0,
                links: '<a href="https://www.amazon.com/dp/B09T5YDMTR/" target="_blank">Amazon straps</a><br/><br/><span>$9 per pack. 1 pack for under 5 trackers, 2 packs for 5+.</span>',
            },
            {
                name: "Sourced elsewhere",
                amount: () => 0,
                cost: () => 0,
                costAll: () => 0,
                links: "",
            },
        ],
    },
    {
        name: 'Dongle\
        <br/>\
        <sup><a href="smol-receiver.html" target="_blank">[more]</a></sup>',
        choices: [
            {
                name: "🟢 HolyIOT-21017",
                description: "Best performance option.<br/>Good signal over 4m, even through walls, but is the most expensive.",
                amount: (set) => calculateRecommendedReceiversAmount(set),
                cost: () => 16.17,
                costAll: (set) => 16.17 * calculateRecommendedReceiversAmount(set),
                links: '<a href="https://www.aliexpress.com/item/1005004673179004.html">AliExpress</a><br/><br/><span>$16.17 per receiver (one per 8 trackers, min 1).</span>',
            },
            {
                name: "🟠 nRF52840 with Wi-Fi Antenna Mod",
                description: "Range is about 4m and cannot penetrate walls",
                amount: (set) => calculateRecommendedReceiversAmount(set),
                cost: () => nrf52840_2Pack_Price / 2 + 3.14,
                costAll: (set) => (nrf52840_2Pack_Price / 2 + 3.14) * calculateRecommendedReceiversAmount(set),
                links: '\
                    <a href="smol-receiver.html#option-3-wi-fi-antenna-mod" target="_blank">Wi-Fi Antenna Mod docs reference.</a>\
                    <br/>\
                    Parts:\
                    <ul>\
                        <li>\
                            <a href="https://pl.aliexpress.com/item/1005007738886550.html" target="_blank">AliExpress (2pcs Red NRF52840)</a>\
                        </li>\
                        <li>\
                            <a href="https://pl.aliexpress.com/item/4000298368244.html" target="_blank">AliExpress (5PCS)</a>\
                        </li>\
                    </ul>\
                    <br/><br/><span>$7.16/2pack / 2 = $3.58/board + $3.14 antenna = $6.72 per receiver.</span>',
            },
            {
                name: "🟠 nRF52840 with Wire Antenna Mod",
                description: "Cheapest option with the shortest range.<br/>Range is about 3m and cannot penetrate walls",
                amount: (set) => calculateRecommendedReceiversAmount(set),
                cost: () => nrf52840_2Pack_Price / 2,
                costAll: (set) => (nrf52840_2Pack_Price / 2) * calculateRecommendedReceiversAmount(set),
                links: '\
                    <a href="./smol-receiver.html#option-2-wire-antenna-mod" target="_blank">Wire Antenna Mod docs reference.</a>\
                    <br/>\
                    Parts:\
                    <ul>\
                        <li>\
                            <a href="https://pl.aliexpress.com/item/1005007738886550.html">AliExpress (2pcs Red NRF52840)</a>\
                        </li>\
                        <li>\
                            Use the wire from the wire for antenna mod\
                        </li>\
                    </ul>\
                    <br/><br/><span>$7.16/2pack / 2 = $3.58 per board (wire from wire mod purchased separately).</span>',
            },
            {
                name: "Sourced elsewhere",
                amount: () => 0,
                cost: () => 0,
                costAll: () => 0,
                links: "",
            },
        ],
    },
    {
        name: "Dock",
        choices: [
            {
                name: "Sourced elsewhere",
                amount: () => 0,
                cost: () => 0,
                costAll: () => 0,
                links: "",
            },
            {
                name: "🟡 Depact Smol Sudo Dock",
                amount: (set) => Math.ceil(set / 7),
                cost: (set) => Math.ceil(set / 7) * 0.99 + set * 0.38,
                costAll: (set) => Math.ceil(set / 7) * 0.99 + set * 0.38,
                links: '<a href="../community/smol-slimes-community-docks.html#depact-smol-sudo-dock" target="_blank">Depact Smol Sudo Dock docs</a><br/><br/><span>$0.99 per USB hub (one per 7 trackers) + $0.38 OTG adapter per tracker.</span>',
            },
        ],
    },
];
