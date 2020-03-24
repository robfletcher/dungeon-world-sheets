# Dungeon World Sheets

Interactive character sheets for [_Dungeon World_](https://dungeon-world.com/).

## Playbooks

The app supports all official playbooks (including _The Barbarian_ and _The Immolator_), as well as _The Mage_, _The Priest_, and _The Templar_.
_The Ranger_ playbook is the [_Perilous Wilds_](https://lampblack-and-brimstone.com/shop/the-perilous-wilds-print-on-demand-edition/) version.

## Limitations

This is still under development and not yet fully-featured.
Don't rely on it!

* Not all Dungeon World character features are implemented. Racial/background moves, spells, bonds/flags, and multi-class moves are not there yet.
* There is basically no mobile optimization yet. You'll need to use a desktop or tablet browser.
* Currently I'm using local storage to keep track of the character. If you use a different browser your character will not be there.

---

# Customizing & contributing

If you want to run the app yourself, or customize a copy for your own use, just clone the GitHub repository then...

## Running the app

Install the dependencies...

```bash
cd dungeon-world-sheets
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.


## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

## Deploying to the web

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
```

Then, from within your project folder:

```bash
cd public
now deploy --name my-project
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```
