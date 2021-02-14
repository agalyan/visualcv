module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'VisualCV Questionnaire', // Navigation and Site Title
  siteLanguage: 'en', // Language Tag on <html> element
  // JSONLD / Manifest
  favicon: 'static/logo/favicon.png', // Used for manifest favicon generation
  shortName: 'Questionnaire page for VisualCV', // shortname for manifest. MUST be shorter than 12 characters
  description: 'VisualCV', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Arman', // Author for schemaORGJSONLD
  themeColor: '#3e7bf2',
  backgroundColor: '#d3e0ff',
  copyrightText: (year) => `Copyright © ${year} VisualCV`,
};
