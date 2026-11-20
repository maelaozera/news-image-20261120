# The World Today — Friday 20 November 2026

[![make.fun bounty](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun/bounty/news-image-20261120)
[![make.fun](https://img.shields.io/badge/make.fun-platform-green)](https://make.fun)
[![GitHub repo](https://img.shields.io/badge/GitHub-maelaozera%2Fnews--image--20261120-black)](https://github.com/maelaozera/news-image-20261120)

One image that sums up the world's news of **Friday 20 November 2026**, as a
newspaper front page: a masthead reading "THE WORLD TODAY", the date, and six
panels, one per story.

## The six stories

1. **Trump, Xi & Putin meet** — the three leaders hold a historic first
   three-way summit in Shenzhen, China, talking nuclear arms control and
   global security on the sidelines of the APEC summit.
2. **Iran decision delayed** — President Trump says there is no rush on a
   decision about war with Iran and that he will "see what happens" after
   1 January, pushing the call into 2027.
3. **Cyclone Akvan** — a severe cyclone bears down on India's Odisha coast,
   with about 300,000 people evacuated and hundreds of rescue teams deployed
   ahead of landfall on 20 November.
4. **Myanmar guilty of genocide** — the International Court of Justice rules
   that Myanmar committed genocide against the Rohingya in its 2017
   crackdown, the first time the world court has found a state guilty of
   genocide, and orders restitution and compensation.
5. **Kyiv under fire** — Russian strikes on Kyiv damage the Austrian and
   Dutch embassies, as Ukraine keeps up its campaign against the Crimean
   Bridge.
6. **Voyager 1: one light-day** — NASA confirms Voyager 1 has become the
   first human-made object one light-day from Earth, about 16.1 billion
   miles away, so its radio signals now take a full 24 hours to reach home.

## How it works

`main.ts` (Node 22, standard library only) copies the image in this
repository, `entry.png`, to `$MAKEFUN_OUTPUT_DIR/entry.png`. It reads nothing
from the network, so two runs always write identical bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The image is 1024 × 1024 pixels and under 1 MiB, within the competition's
limits.

## License

MIT — see [LICENSE](LICENSE).
