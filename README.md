# cv-materializer

![GitHub Actions](https://github.com/scifier/cv-materializer/workflows/CI/badge.svg)

A React.js/typescript resume builder that is using markdown files for generating pages and concatenates them into a downloadable PDF.

- [Usage](#getting-started)
  - [GitHub Pages Deployment](#github-pages-deployment)
  - [Development and Manual Deployment](#development-manual-deployment)
- [Versioning](#versioning)
- [Authors](#authors)
- [License](#license)

## Usage

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### GitHub Pages Deployment

The standard GitHub Pages deployment is pretty easy. Follow these steps to get a configured auto-updatable online portfolio:

1. Generate your [personal token](https://github.com/settings/tokens) with repo access if you haven't already.
2. Fork this project and create a new repository secret with name `API_TOKEN_GITHUB`. Copy here your personal token.
3. Create a repository named `<YOUR_GITHUB_USERNAME>.github.io` if you haven't already (the repository should be empty).
4. Edit the .env file.
5. Edit the markdown files in `src/assets`.
6. Change (or just remove) the `public/logo.png` image.
7. Push your changes to the `master` branch if you have worked with a local copy of your `cv-materializer` repository.
8. Profit! (In a few minutes you can access your online portfolio on `https://<YOUR_GITHUB_USERNAME>.github.io`).

### Development and Manual Deployment

If you have [git](https://git-scm.com) and [Node.js 8.0+](https://nodejs.org/en/download) already installed, you can follow these steps to get a local copy for development, testing or manual deployment:

```bash
# Get the latest snapshot and install dependencies
git clone https://github.com/scifier/cv-materializer
cd cv-materializer
npm install
```

Before starting/building the project follow these steps:

1. Edit the .env file.
2. Edit the markdown files in `src/assets`.
3. Change (or just remove) the `public/logo.png` image.

```bash
# Start the development server
npm run start

# Build the application by running
npm run build
```

After building the application just copy all the files from `build` to the root directory of your server.

## Versioning

This project use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/scifier/cv-materializer/tags).

## Authors

- **Niţa Radu** - *Initial work* - [scifier](https://github.com/scifier)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
