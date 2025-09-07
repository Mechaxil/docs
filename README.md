# Mechaxil — Docs & Open Hardware Hub

This repo powers our documentation website, built with [Docusaurus](https://docusaurus.io/) (with a little bit of custom code), a modern static site generator. It’s fast, simple, and perfect for open hardware docs.

## What is Mechaxil?

Mechaxil is a hobby-electronics store + documentation site. We build and curate open-source projects, publish guides, and offer affordable kits and parts. We’re a tiny team, so contributions (docs, fixes, examples) help a ton — and yes, grabbing parts from our [webshop](https://mechaxil.com/) supports the mission ❤️

## Quick Links

| Topic | Link |
|---|---|
| 🌐 Website / Docs | https://docs.mechaxil.com/  |
| 🛒 Webshop | https://mechaxil.com/ |
| 🐛 Issues / Bugs | https://github.com/Mechaxil/docs/issues |

## Project Bounty Program

Got an open-source project that fits our collections (smart agriculture, robotics, smart home, etc.)? Share it and earn rewards.

**How it works**
1. Send us your repo/blog/video.
2. We collaborate to polish docs so others can build it.
3. You choose your reward: coupons **or** kits.

* In case your project is not fully built or some roadblocks are present get in contact with us so we can help!

**Why we do this**

 > We love open-source and want a single place where people can **plan → order → build** in a cohesive, repeatable way.

**What to submit**
- Clear build steps + BOM (with alternatives if possible)  
- License (OSHW/OSI preferred)  
- Photos/Gerbers/code/schematics as applicable

> Submit via a GitHub issue titled **“Bounty Submission: _Project Name_”** with links + a short summary.

## Contributing

PRs welcome! Easiest wins:
- Fix typos, broken links, or unclear steps
- Add wiring diagrams, photos, test results
- Translate pages (EN/HU) where helpful

**Workflow**
1. Fork & branch (`feat/...` or `fix/...`)
2. Commit cleanly (small, focused changes)
3. Open a PR with before/after notes or screenshots

## Local Dev (Docs)

```bash
# Prereqs: Node 18+ and npm/pnpm/yarn

# install
npm i

# run locally
npm run start

# build static site
npm run build
