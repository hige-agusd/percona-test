# percona-test

## Building

To build this panel, you can use the ususal grafana commands:
`npm run dev` and `npm run build`

## Docker Image

I've created a docker image based on grafana's image.

### Pulling the Image

To pull the image run `docker pull higeagusd/giphy-panel-101`

### Running the Image

To run it, execute `docker run -d -p 3000:3000 higeagusd/giphy-panel-101`.
This will make it accesible at `localhost:3000`.

## Using the panel

Once the image has been pulled and is running, you can access it at `localhost:3000`, by the above provided command.
After having browsed there, you have to log into the grafana instance. Default username and password are `admin:admin`.
In the instance provided, there's already a panel named `New dashboard Copy`, which already includes the `giphy-panel`, and you can also create a new dashboard and include it.
The way it works is quite simple. There's an input field where you can type something, and the panel will search a gif and show the first match only. The search is debounced every 200ms. Errors are shown in console. If the search produces no match, there's no message shown.

