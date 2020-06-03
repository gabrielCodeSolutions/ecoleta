import Knex from 'knex'
export async function up(knex: Knex){
 // Criar a tabela
return knex.schema.createTable('items', table =>{
  table.increments('id').primary
  table.string('image').notNullable()
  table.string('title').notNullable()

})
}
export async function down(knex: Knex){
 // Para voltar atrás -> Deletar a tabela que a gente criou;
 // Fazer o contrário que o método up fez;
 return knex.schema.dropTable('items')
}

