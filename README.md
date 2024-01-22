# Searches the current directory, outputs to ./_site
npx @11ty/eleventy

# Global installation
eleventy

# `npx @11ty/eleventy` is the same as:
npx @11ty/eleventy --input=. --output=_site

# Boot up a Browsersync web server to apply changes and
# refresh automatically. We’ll also --watch for you.
npx @11ty/eleventy --serve