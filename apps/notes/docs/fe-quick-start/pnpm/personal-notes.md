## Motivation
### Saving disk space

In the official explanation, pnpm can save disk space by storing all files in a single place and giving all packages a hard link from that location. If your different projects depend on different versions of the same dependency, only the files that differ are added to the store.