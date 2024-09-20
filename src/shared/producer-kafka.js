import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'loca-tech',
  brokers: ['localhost:9092']
})

export const createTopic = async () => {
  const admin = kafka.admin();

  await admin.connect()

  console.log('Conectado ao Kafka')

  const topics = await admin.listTopics();

  if (topics.includes('aluguel-topic-locatech')) {
    console.log('Topico já existe')
    await admin.disconnect();
    return;
  }

  await admin.createTopics({
    topics: [{
      topic: 'aluguel-topic-locatech',
      numPartitions: 1
    }]
  })


  console.log('Topico criado com sucesso')

  await admin.disconnect();

}


export const sendQueue = async (message) => {
  const producer = kafka.producer();

  await producer.connect();

  console.log('Producer Conectado ao Kafka')

  await producer.send(
    {
      topic: 'aluguel-topic-locatech',
      messages: [
        {
          partition: 0,
          key: 'veiculo-alugado',
          value: JSON.stringify(message)
        }
      ]
    }
  );

  await producer.disconnect();
}