# dhaiwat.xyz

My shitty personal site with some links and a web3-ish guestbook

### How the guestbook works

I'm using message signing and [Supabase](https://supabase.com) for the guestbook.

- User connects their wallet
- User signs a message (literally _gm_)
- I send this signature to my server
- I verify the signature and make an entry in my DB
