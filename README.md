### Hexlet tests and linter status:
[![Actions Status](https://github.com/marik-yakovlev/frontend-project-11/workflows/hexlet-check/badge.svg)](https://github.com/marik-yakovlev/frontend-project-11/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/2d68a694f29433a1c575/maintainability)](https://codeclimate.com/github/marik-yakovlev/frontend-project-11/maintainability)

RSS Reader - is a project designed for convenient reading and organizing news information using the RSS (Really Simple Syndication) technology. It allows users to subscribe to various news sources, blogs, or websites, collect their updates in one place, and view their content in a user-friendly format.


How to use it:

• Find a blog or news feed, which you prefer to read

• Use link-to-RSS converters to make your blog/news link suitable for RSS Reader

• Make sure the link is a file with .xml markup

• Add this link to the feed

• If you need to change the language, press RU/EN button in the upper-right corner

• All downloaded feeds would constantly update every 5 seconds, so you won't miss anything



Installation:
# Step 1 — clone this repository
$ git clone https://github.com/marik-yakovlev/frontend-project-11

# Step 2 — install the dependencies
$ make install

# Step 3 — install the packages
$ sudo npm link

# Step 4 — make new bundle using production mode
$ make production