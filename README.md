Hello Anchor
---

You can read more on my blog post : [เขียน Solana Program ด้วย Anchor Framework](https://devahoy.com/blog/hello-anchor-solana)


## Getting Started

Install Anchor with `avm`

First, install avm using Cargo, it will replace anchor binary.

```bash
cargo install --git https://github.com/project-serum/anchor avm --locked --force
```

Then install anchor using avm:

```
avm install latest
avm use latest
```

Verify the installation:

```
anchor --version

# current version.
anchor-cli 0.23.0
```

Create new project

```bash
anchor init <project_name>
```
