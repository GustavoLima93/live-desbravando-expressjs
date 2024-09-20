import { connect } from 'amqplib';

export const sendQueue = async (message, queue_name) => {
  try {
    const connection = await connect('amqp://user:123456@localhost:5672');

    const channel = await connection.createChannel();

    await channel.assertQueue(queue_name)

    await channel.sendToQueue(queue_name, Buffer.from(JSON.stringify(message)));

    console.log('Mensagem enviada para a fila', JSON.stringify(message));

    await channel.close();

    await connection.close();

  } catch (error) {
    console.error(error);
  }
}