## Subject Part: Solution
###### 1. What properties should a shortened URL possess, and what architectural decisions or algorithms would you devise to guarantee those properties?
Shortended URL and Shortended URL service provider should have the following properties:
- HA of redirection service.
- URL should not be completely opaque, implying the shortened form should give some idea about the original content.
- Shortened URL should be unique, minimal chances of collision with other URLs.
- Top level domain name should be small(or even domain hacked for better readability)
The basic concept behind URL shortening is Hash Map or bijective function i.e. every URL is associated with a unique key, we can use a hash function or randomly generated numbers so that the shortening technique is not predictable.
OR we can also keep them user driven as long as the uniqueness is guaranteed. Keys can be generated in base36, base64 depending on your choice of representation and lenght of key.
###### 2. What do you feel are the limitations or vulnerabilities of your submitted solution? What should be done to address these limitations or vulnerabilities?
For the submitted solution, it can be improved in the following ways:
- Data store for the shortened URLs which can ensure if a URL needs to be shortened or not and save the overhead if it is a redundant URL.
- Unique ID generation can be improved, I am currently using a basic Math.random function to generate the keys that can be improved either by a better algorithm for random number generation.
###### 3. We would like to allow the users to specify an expiration period for the generated URL. How would you accommodate this feature into your solution?
We can allow the user to specify the life span of the URL e.g. X minutes or Y hours or Z date. Once the shortened URL is generated the timestamp of creation and the user input can be stored and only upon clicking the application can check if the URL is expired or not and delete it as well from the URL store that we are maintaning. We can also check the expiration if there is a collision in the generated short URL and depending of if the already created URL should exist we can delete/update our store. 
###### 4. We would like to give users a real-time dashboard against each URL generated, which they can use to monitor analytics regarding the usage of that generated URL. What sort of architecture would you propose we implement to do that?
We can simply introduce counters that can monitor the usage per redirection used from our shortening service.
###### 5. We would like to prevent abuse of the service by making sure that only human users can submit URLs to be shortened (as opposed to spam bots and scripts). But we would also like to let other applications (e.g. Slack and Skype etc.) use our service. How do you propose we go about doing that?
We can use the following methods to avoid bots/scripts and allow other applications to use them:
- CAPTCHAs
- Checking Blacklists for spammers, we can also check the requesting IP, target domain, target domain content (text).
- We can introduce flags at the ends of shortened URLs to provide info about the destination.
