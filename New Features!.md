# Design of fair and responsible data market ecosystem 
# This is the repo for MarketFramework and third-party services Prototype. 

# Technology Stack
We are using a NodeJS midllewares with a MongoDB for most of our backend.

   - NodeJS 8.10
   - MongoDB 3.4
   - Docker for Ubuntu 
   - Angular 6
   - RabbitMQ 3.7.7
   - Chainpoint V3
   - Grakn 1.4.3
   
# Microservices
Third-party services:
  - [quantifySelfService] [df1]
  - [custodianService] [df1]
  - [practitionnerService] [df1]
  
Marketplace services: 
  - [CatalogService] [df1]: data Asset and Service catalogue,
  - [HashingService] [df1]: service for agreement and transactions hashing,
  - [AgreementManagerService] [df1]: Service for agreement creation and management,
  - [MonitoringService] [df1]: Service for handling monitored elements and submit into the Chainpoint Calendar Blockchain,
  - [DatabusService ] [df1]: service for handling data transfer,
  - [APIGatewayService ] [df1]: Implement a service which is the entry point into others microservices
  - [Marketplace User Interface ] [df1]: MarketUI

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

How to run the marketplace microservices
We need to have docker installed previously.

```sh
$ bash < kraken.sh
```

### Docker

By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.






Verify the deployment by navigating to each server address in your preferred browser.

```sh
127.0.0.1:8000
```




### Todos

 - Write MORE Tests


License
----

MIT


**Free Software!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
