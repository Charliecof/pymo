/*
  Warnings:

  - You are about to drop the `InsumosPaquete` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `InsumosPeticiones` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_InsumosToInsumosPeticiones` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "InsumosPaquete" DROP CONSTRAINT "InsumosPaquete_id_insumo_fkey";

-- DropForeignKey
ALTER TABLE "InsumosPaquete" DROP CONSTRAINT "InsumosPaquete_id_paquete_fkey";

-- DropForeignKey
ALTER TABLE "InsumosPeticiones" DROP CONSTRAINT "InsumosPeticiones_id_peticion_fkey";

-- DropForeignKey
ALTER TABLE "_InsumosToInsumosPeticiones" DROP CONSTRAINT "_InsumosToInsumosPeticiones_A_fkey";

-- DropForeignKey
ALTER TABLE "_InsumosToInsumosPeticiones" DROP CONSTRAINT "_InsumosToInsumosPeticiones_B_fkey";

-- DropTable
DROP TABLE "InsumosPaquete";

-- DropTable
DROP TABLE "InsumosPeticiones";

-- DropTable
DROP TABLE "_InsumosToInsumosPeticiones";

-- CreateTable
CREATE TABLE "_InsumosToPeticiones" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_InsumosToPaquetes" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_InsumosToPeticiones_AB_unique" ON "_InsumosToPeticiones"("A", "B");

-- CreateIndex
CREATE INDEX "_InsumosToPeticiones_B_index" ON "_InsumosToPeticiones"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_InsumosToPaquetes_AB_unique" ON "_InsumosToPaquetes"("A", "B");

-- CreateIndex
CREATE INDEX "_InsumosToPaquetes_B_index" ON "_InsumosToPaquetes"("B");

-- AddForeignKey
ALTER TABLE "_InsumosToPeticiones" ADD FOREIGN KEY ("A") REFERENCES "Insumos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InsumosToPeticiones" ADD FOREIGN KEY ("B") REFERENCES "Peticiones"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InsumosToPaquetes" ADD FOREIGN KEY ("A") REFERENCES "Insumos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InsumosToPaquetes" ADD FOREIGN KEY ("B") REFERENCES "Paquetes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
