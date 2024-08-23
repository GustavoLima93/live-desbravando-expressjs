import { existsSync } from "fs"

import db from './index.js';

const initDatabase = async () => {
  if(!existsSync('./locatech.sqlite')) {
    
    console.log('Criando o banco de dados 🚁');
    
    await db.schema.createTable('veiculos', (table) => {
      table.increments('id').primary();
      table.string('modelo').notNullable();
      table.string('marca').notNullable();
      table.string('ano').notNullable();
      table.string('cor').notNullable();
      table.float('valor_diaria').unsigned().notNullable();
    });

    // criacao tabela pessoas
    await db.schema.createTable('pessoas', (table) => {
      table.increments('id').primary();
      table.string('nome').notNullable();
      table.string('cpf').notNullable();
      table.string('telefone').notNullable();
      table.string('email').notNullable();
    });

    // criacao tabela alugueis

    await db.schema.createTable('alugueis', (table) => {
      table.increments('id').primary();
      table.integer('id_veiculo').unsigned().notNullable();
      table.integer('id_pessoa').unsigned().notNullable();
      table.date('data_inicio').notNullable();
      table.date('data_fim').notNullable();
      table.float('valor_total').unsigned().notNullable();
      table.foreign('id_veiculo').references('veiculos.id');
      table.foreign('id_pessoa').references('pessoas.id');
    });

    // criacao de seed 

    await db('veiculos').insert([
      {
        modelo: 'Uno',
        marca: 'Fiat',
        ano: '2010',
        cor: 'Branco',
        valor_diaria: 100
      },
      {
        modelo: 'Gol',
        marca: 'Volkswagen',
        ano: '2015',
        cor: 'Preto',
        valor_diaria: 150
      },
      {
        modelo: 'Onix',
        marca: 'Chevrolet',
        ano: '2018',
        cor: 'Prata',
        valor_diaria: 200
      }
    ]);

    //criacao seed tabela pessoas

    await db('pessoas').insert([
      {
        nome: 'João Silva',
        cpf: '123.456.789-00',
        telefone: '(11) 98765-4321',
        email: 'joao.silva@example.com'
      },
      {
        nome: 'Maria Oliveira',
        cpf: '987.654.321-00',
        telefone: '(21) 91234-5678',
        email: 'maria.oliveira@example.com'
      },
      {
        nome: 'Carlos Souza',
        cpf: '456.789.123-00',
        telefone: '(31) 99876-5432',
        email: 'carlos.souza@example.com'
      }
    ]);

    //criacao seed tabela alugueis

    await db('alugueis').insert([
      {
        id_pessoa: 1,
        id_veiculo: 1,
        data_inicio: '2023-01-01',
        data_fim: '2023-01-10',
        valor_total: 2000
      },
      {
        id_pessoa: 2,
        id_veiculo: 2,
        data_inicio: '2023-02-01',
        data_fim: '2023-02-05',
        valor_total: 1000
      },
      {
        id_pessoa: 3,
        id_veiculo: 3,
        data_inicio: '2023-03-01',
        data_fim: '2023-03-07',
        valor_total: 1400
      }
    ]);

  }
}

export default initDatabase;