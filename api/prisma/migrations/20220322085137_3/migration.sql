/*
  Warnings:

  - Added the required column `cantidad` to the `InsumosPaquete` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `InsumosPaquete` ADD COLUMN `cantidad` INTEGER NOT NULL;
