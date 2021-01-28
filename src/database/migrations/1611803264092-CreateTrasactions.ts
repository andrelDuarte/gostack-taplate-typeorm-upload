import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTrasactions1611803264092 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'Transaction',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid_generated_v4()',
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'value',
            type: 'decimal',
            precision: 10,
            scale: 2,
          }
          {
            name: 'created_at'
          }
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
