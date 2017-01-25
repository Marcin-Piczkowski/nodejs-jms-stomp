# nodejs-jms-stomp

Demo JMS subscriber implemented in NodeJS using STOMP protocol.

It subscribes to queue 'Consumer.CMS.VirtualTopic.Contact.Status'.

Assuming the JMS provider is ActiveMQ this allows publisher to send messages to virtual topic 'VirtualTopic.Contact.Status'
and multiple consumers can connect to queues on the fly.

ActiveMQ will recognize naming convention Consumer.*.VirtualTopic.Contact.Status and forward each message from topic to each queue.
E.g. queue names:

- Consumer.A.VirtualTopic.Contact.Status
- Consumer.B.VirtualTopic.Contact.Status
- Consumer.Any.Long.Name.VirtualTopic.Contact.Status

## Building
```npm install```

##Running

```node client.js```


NOTE: You must have node and npm installed:
[Installation instruction on Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-an-ubuntu-14-04-server)