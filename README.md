# KSEAWeb

Working space for implementing the site for Website rebuilding project of Korean-American Scientists and Engineers Association - Wisconsin Chapter

 - The temporal documentation while implementing codes for this repository is maintained on a [separated repository, KSEAWebDocuments](https://github.com/hyecheol123/KSEAWebDocuments).
 - For all notifications and rules, please refer to the [README of KSEAWebDocuments](https://github.com/hyecheol123/KSEAWebDocuments/blob/master/README.md).

## Editting contents
By changing contents of _data and _posts, almost all **contents** on this website can be modified.

### _data
This folder containing event's list of main page (`home_events.yml`), event list on event page (`events.yml`), list of leaders on about page (`about_*.yml`), and list of website development contributors (`taskforce_*.yml`).  
When you open each file, by comment, the description and direction is written.

### _posts
This folder is the place to write down description for each event. Using markdown syntax, user can implement a separated page for each events.

## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "KSEAWeb"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: KSEAWeb
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install KSEAWeb

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `KSEAWeb.gemspec` accordingly.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

