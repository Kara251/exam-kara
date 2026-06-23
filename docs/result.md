# Anime Summer 2026 Source Basis

## Source

This repository's Summer 2026 anime test is based on:

- `/Users/kara/Code/material/26July-Anime-Test/result.md`
- GitHub repository: [Kara251/26July-Anime-Test](https://github.com/Kara251/26July-Anime-Test)

That file is the upstream research note used to define the candidate pool, screening rules, and recommendation dimensions for the test.

## Scope

The source note uses this inclusion rule:

- 2026 July-August Japanese summer anime window
- TV anime
- web / streaming anime
- sequels
- shorts / specials
- animated films

The test implementation in this repository then narrows that research pool into a product-facing recommendation set.

## Product Constraints Derived From The Source

### Included focus

- Japanese ACG works only
- works suitable for personality-style recommendation output
- works that can support weighted recommendation and weighted avoidance

### Excluded or de-emphasized

- non-Japanese / Western family-animation entries
- entries with weak fit for the site's ACG tone
- items better used as side recommendations than main result cards

In code, this is reflected by explicit exclusion of several non-target poster assets during build sync.

## Main Result Pool Direction

The source note recommends keeping the main result pool relatively tight so the test still feels like a personality match rather than a giant catalog.

The implementation here follows that spirit by centering the result pool around works such as:

- `supermarket_smoking`
- `ghost_shell`
- `bleach_tybw`
- `mushoku_iii`
- `youjo_senki_ii`
- `black_torch`
- `grand_blue_s3`
- `polar_opposites_s2`
- `young_ladies_fighting_games`
- `jaadugar`
- `sparks_of_tomorrow`
- `goodbye_lara`
- `old_bumpkin_sword`
- `ibikona`
- `100_girlfriends_s3`
- `paprika_4k`
- `madoka_walpurgis`
- `chiikawa_mermaid`

The final in-repo pool is defined in [anime-route-patch/data.js](../anime-route-patch/data.js).

## Test Axes Derived From The Source

The source note recommends mapping users by viewing state and temperament, not only by genre labels.

That recommendation became the current trait model:

- intensity
- humor
- intimacy
- wonder
- futurism
- darkness
- community
- mastery
- artiness
- legacy

These traits drive:

- per-question scoring
- weighted best-match recommendations
- weighted "maybe avoid" results

## Notes

- This document is the normalized source-basis record for the repository.
- The full upstream raw research remains in the sibling project at `/Users/kara/Code/material/26July-Anime-Test/result.md`.
- The current site repository is [Kara251/exam-kara](https://github.com/Kara251/exam-kara).
