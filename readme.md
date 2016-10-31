# node-docker-health

The modle is used to be injected to a loopback module for a microservice architecture
to implement a health signal. This simple api returns a live signal if the application
is still alive.

## usage

edit `models-config.json` and add the `"node-docker-health/models",` to `sources` section:
```
 "sources": [
            "node-docker-health/models", // <--- add it e.g. here
            "loopback/common/models",
            "loopback/server/models",
            "../common/models",
            "./models"
        ],
```

Now edit `server/models-config.json`

Then edit the `Dockerfile` and add the following line in it.

```
HEALTHCHECK CMD curl --fail http://localhost:<APIPORT>/<RestApiRoot>/vitals/node-docker-health || exit 1
```


