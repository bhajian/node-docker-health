# node-docker-health

The component is used to be injected to a component to your "node.js microservice"/"loopback app" for 
checking the health when we are running the app in a docker container. 
This implements a health rest end point that returns a status = "ALIVE".
is still alive.

## usage

First, edit `server/component-config.json` and add the following content in it:

```
{
  "node-docker-health": {

  }

}
```

Second, add the following dependency in the `package.json` file:

```
"node-docker-health": "^0.2.0"
```

Then edit the `Dockerfile` and add the following line in it.

```
HEALTHCHECK CMD curl --fail http://localhost:<APIPORT>/<RestApiRoot>/vitals/node-docker-health || exit 1
```


