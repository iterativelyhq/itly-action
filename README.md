<h1 align="center">
  <img src="static/iteratively.svg" alt="Iteratively" title="Iteratively" height="100px" />
</h1>

<h3 align="center">💬 <a href='https://iterative.ly' target='_blank'>Iteratively</a> is a tracking plan collaboration tool that helps data, marketing, and engineering keep aligned and up-to-date.</h3>

---

## Introduction

This [GitHub Action](https://github.com/features/actions) helps your team enforce the best-practice analytics workflow with Iteratively.

## Checks
- **Branch** - check `.itlyrc` branch is valid before merging
- **CI** - run `itly ci` on all PRs [coming soon]

## Usage
To get started, just add the following to your GitHub Workflow:
```yml
name: Itly
on: [pull_request]
jobs:
  itly_branch:
    runs-on: ubuntu-latest
    name: Itly Branch Check
    steps:
    - uses: actions/checkout@v2
    - name: Check that correct branch is specified in .itlyrc
      id: itly-branch
      uses: iterativelyhq/itly-action@v2
      with:
        expected-branch: 'main'
    - name: Report detected branch
      run: echo "The branch we found in .itlyrc was [${{ steps['itly-branch'].outputs['detected-branch'] }}]"
```

## What is Iteratively?
[Iteratively](https://iterative.ly) is a tracking plan collaboration tool that helps data, marketing, and engineering keep aligned and up-to-date.

## License
TBD