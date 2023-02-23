import { Kafka } from 'kafkajs';

const main = async () => {
  const kafka = new Kafka({
    clientId: 'sender',
    brokers: ['localhost:29092'],
  })
  const producer = kafka.producer()
  await producer.connect()
  setInterval(async () => {
    const msg = "Hello World!"
    console.log(`Sending message to topic "hello": ${msg}`)
    await producer.send({
      topic: 'hello',
      messages: [
        { value: msg },
      ],
    })
  }, 1000)
}

main();