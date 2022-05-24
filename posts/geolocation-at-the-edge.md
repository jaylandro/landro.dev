---
title: Geolocation at the edge
date: 2022-05-23T11:50:47.947Z
author: landro
summary: How to use Cloudflare's latitude & longitude geolocation data to dynamically serve weather data for a users location rendered on demand at the edge with Cloudflare workers
tags:
  - post
---

## What are we building?

Check it out! https://weatherflare.adhocracy.workers.dev
![Screenshot of geolocation weather site at https://weatherflare.adhocracy.workers.dev](/static/img/cloudflare-weather-geo.png)

A rendered on demand static HTML page rendered via Javascript on Cloudflare workers based on the visitors geo-location *without* the use of client side javascript or location data.

## What geolocation data is available via Cloudflare headers?

`request.cf.colo` - The three-letter IATA airport code of the data center that the request hit, for example, "DFW".
country 

`request.cf.country` - Country of the incoming request. The two-letter country code in the request. This is the same value as that provided in the CF-IPCountry header, for example, "US".

`request.cf.isEUCountry` - If the country of the incoming request is in the EU, this will return "1". Otherwise, this property will be omitted.

`request.cf.city` - City of the incoming request, for example, "Austin".

`request.cf.continent` - Continent of the incoming request, for example, "NA".

`request.cf.latitude` - Latitude of the incoming request, for example, "30.27130".

`request.cf.longitude` - Longitude of the incoming request, for example, "-97.74260".

`request.cf.postalCode` - Postal code of the incoming request, for example, "78701".

`request.cf.metroCode` - Metro code (DMA) of the incoming request, for example, "635".

`request.cf.region` -  If known, the ISO 3166-2 name for the first level region associated with the IP address of the incoming request, for example, "Texas".

`request.cf.regionCode` - If known, the ISO 3166-2 code for the first-level region associated with the IP address of the incoming request, for example, "TX".

`request.cf.timezone` - Timezone of the incoming request, for example, "America/Chicago".

Check it out! https://weatherflare.adhocracy.workers.dev

## Complete cloudflare worker code (no client side javascript)

<script src="https://gist.github.com/jaylandro/917c76e1c301ed3494f7dfe0d6e9ed73.js"></script>
