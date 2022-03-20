-- CreateTable
CREATE TABLE "Hospital" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Hospital_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Casos" (
    "id" SERIAL NOT NULL,
    "id_hospital" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "mes" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Casos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Peticiones" (
    "id" SERIAL NOT NULL,
    "id_hospital" INTEGER NOT NULL,

    CONSTRAINT "Peticiones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Insumos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "Insumos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InsumosPeticiones" (
    "id" SERIAL NOT NULL,
    "id_peticion" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,

    CONSTRAINT "InsumosPeticiones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Paquetes" (
    "id" SERIAL NOT NULL,
    "id_hospital" INTEGER NOT NULL,
    "delivery_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Paquetes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InsumosPaquete" (
    "id" SERIAL NOT NULL,
    "id_insumo" INTEGER NOT NULL,
    "id_paquete" INTEGER NOT NULL,

    CONSTRAINT "InsumosPaquete_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_InsumosToInsumosPeticiones" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_InsumosToInsumosPeticiones_AB_unique" ON "_InsumosToInsumosPeticiones"("A", "B");

-- CreateIndex
CREATE INDEX "_InsumosToInsumosPeticiones_B_index" ON "_InsumosToInsumosPeticiones"("B");

-- AddForeignKey
ALTER TABLE "Casos" ADD CONSTRAINT "Casos_id_hospital_fkey" FOREIGN KEY ("id_hospital") REFERENCES "Hospital"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Peticiones" ADD CONSTRAINT "Peticiones_id_hospital_fkey" FOREIGN KEY ("id_hospital") REFERENCES "Hospital"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InsumosPeticiones" ADD CONSTRAINT "InsumosPeticiones_id_peticion_fkey" FOREIGN KEY ("id_peticion") REFERENCES "Peticiones"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paquetes" ADD CONSTRAINT "Paquetes_id_hospital_fkey" FOREIGN KEY ("id_hospital") REFERENCES "Hospital"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InsumosPaquete" ADD CONSTRAINT "InsumosPaquete_id_insumo_fkey" FOREIGN KEY ("id_insumo") REFERENCES "Insumos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InsumosPaquete" ADD CONSTRAINT "InsumosPaquete_id_paquete_fkey" FOREIGN KEY ("id_paquete") REFERENCES "Paquetes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InsumosToInsumosPeticiones" ADD FOREIGN KEY ("A") REFERENCES "Insumos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InsumosToInsumosPeticiones" ADD FOREIGN KEY ("B") REFERENCES "InsumosPeticiones"("id") ON DELETE CASCADE ON UPDATE CASCADE;
