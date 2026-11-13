# Microsoft Rewards Script (MathWithManim Fork)

Forked from [TheNetsky/Microsoft-Rewards-Script](https://github.com/TheNetsky/Microsoft-Rewards-Script) with anti-bot hardening and GitHub Actions daily cron.

## What's Different

- **Human-like delays**: Randomized account/task/search delays (45s-3min)
- **Natural search behavior**: Random scrolling, clicking, varied query engines
- **Reduced parallelism**: Sequential searches to avoid fingerprint correlation
- **GitHub Actions workflow**: Daily run at 06:37 UTC (randomized minute)
- **Bonus searches enabled**: Up to 90/day with human-like patterns

## Quick Start (Local)

```sh
# 1. Install deps
npm ci --include=dev

# 2. Install Chromium (one-time)
npm run install:browser

# 3. Build
npm run build

# 4. Configure accounts
cp env.example .env
# Edit .env with your Microsoft account(s)

# 5. Run
npm start
```

## GitHub Actions Setup (Automated Daily Runs)

1. Go to **Settings → Secrets and variables → Actions**
2. Add repository secrets:
   - `ACCOUNT_1_EMAIL` — your Microsoft email
   - `ACCOUNT_1_PASSWORD` — your password (or leave empty for Authenticator)
   - `ACCOUNT_1_TOTP_SECRET` — base32 TOTP secret (if 2FA enabled)
   - `ACCOUNT_1_GEO_LOCALE` — `auto` (default) or country code like `US`
   - `ACCOUNT_1_LANG_CODE` — `en` (default)
3. Enable workflow: **Actions → Daily Microsoft Rewards → Enable workflow**

The workflow runs daily at ~06:37 UTC (randomized to avoid detection).

## Human-like Search Queries

```sh
# Generate natural queries for testing
npx ts-node scripts/humanQueries.ts 30
```

## Configuration

Edit `config.json` for behavior tuning. Key anti-bot settings:
- `accountDelay`: 2-5 min between accounts
- `taskDelay`: 30-90 sec between tasks  
- `searchDelay`: 45 sec - 2 min between searches
- `readDelay`: 1-3 min on result pages
- `parallelSearching`: false (sequential = more human)
- `scrollRandomResults` / `clickRandomResults`: true

## License

GPL-3.0-or-later — same as upstream.