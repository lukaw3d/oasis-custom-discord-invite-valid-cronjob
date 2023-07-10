// @ts-check
// https://oasis.io/discord
// https://discord.com/invite/BQCxwhT5wS

// https://oasis.io/discord/invite-api-check
// https://discord.com/api/v9/invites/BQCxwhT5wS

import assert from 'node:assert/strict'

const inviteRequest = await fetch('https://oasis.io/discord')
assert(
  inviteRequest.url.startsWith('https://discord.com/invite/'),
  'Custom discord link "https://oasis.io/discord" still redirects',
)

const inviteApiCheckUrl = inviteRequest.url.replace(
  'https://discord.com/invite/',
  'https://discord.com/api/v9/invites/',
)
const inviteApiCheckRequest = await fetch('https://oasis.io/discord/invite-api-check')
assert.equal(
  inviteApiCheckRequest.url, inviteApiCheckUrl,
  'Discord API check link "https://oasis.io/discord/invite-api-check" still matches invite link "https://oasis.io/discord"',
)
assert.equal(inviteApiCheckRequest.status, 201, 'Discord invite link check is valid')
