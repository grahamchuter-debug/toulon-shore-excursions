# Toulon Shore Excursions — remaining destination work

Config generated for `toulon` with domain `toulonshoreexcursions.com` and `contactMode: "central"` (info@wowatour.com).

## Completed for World 2.0 Gold (localhost)

- [x] Destination config, footer, completion tracker
- [x] SEG catalogue imported (7 products, all `comingSoon`)
- [x] Editor's Choice: Discover Cassis, Calanques & Provence Wine Tasting
- [x] Homepage editorial, Experience Cards, Choose Your Day, Honest Advice, Spirit of Place
- [x] Walk It Yourself via `/guides/explore-independently`
- [x] Guides hub populated
- [x] SEO metadata, schema, canonicals, sitemap
- [x] Placeholder images + `sources.json`
- [x] `npm run qa:world2 -- --build` → **World 2.0 Gold PASS**

## Outstanding before production

- [ ] Replace placeholder images with licensed photography
- [ ] Verify EUR selling prices → then populate `bookable-products.ts` + Worker `catalogue.ts`
- [ ] Publish verified cruise schedules (no fictitious calls)
- [ ] `wrangler d1 create toulon-bookings` → set database_id
- [ ] Stripe + Resend secrets
- [ ] Confirm DNS for toulonshoreexcursions.com
- [ ] Deploy site Worker: `npm run deploy` (Workers Static Assets — ADR-0001; do **not** use Pages)
- [ ] Attach apex Custom Domain only; www → apex via Redirect Rules (rules stubbed in `public/_redirects`)
- [ ] Configure hello@ / bookings@ / privacy@ forwarding, then set `contactMode: "local"`
- [ ] Add site to World-2.0 `sites.json`
- [ ] Confirm any additional SEG Toulon products beyond the seven imported from the public port page
