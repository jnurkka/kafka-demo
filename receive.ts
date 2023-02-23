import { Kafka } from 'kafkajs';

const main = async () => {
  const kafka = new Kafka({
    clientId: 'receiver',
    brokers: ['localhost:29092'],
  })
  const consumer = kafka.consumer({ groupId: 'test-group' })
  await consumer.connect()
  await consumer.subscribe({ topic: 'hello', fromBeginning: true })
  await consumer.run({
    eachMessage: async ({ message }) => {
      console.log({
        value: message?.value?.toString(),
      })
    }
  })
}

main();