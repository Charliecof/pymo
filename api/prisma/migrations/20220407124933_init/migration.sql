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
    "active" BOOLEAN NOT NULL DEFAULT true,
    "date" TIMESTAMP(3),

    CONSTRAINT "Peticiones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Insumos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "nombre_clave" TEXT NOT NULL DEFAULT E'',
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "Insumos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InsumosPeticiones" (
    "id" SERIAL NOT NULL,
    "id_insumo" INTEGER NOT NULL,
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
    "cantidad" INTEGER NOT NULL,

    CONSTRAINT "InsumosPaquete_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InsumosBodega" (
    "id" SERIAL NOT NULL,
    "id_insumo" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,

    CONSTRAINT "InsumosBodega_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "mail" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "InsumosBodega_id_insumo_key" ON "InsumosBodega"("id_insumo");

-- AddForeignKey
ALTER TABLE "Casos" ADD CONSTRAINT "Casos_id_hospital_fkey" FOREIGN KEY ("id_hospital") REFERENCES "Hospital"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Peticiones" ADD CONSTRAINT "Peticiones_id_hospital_fkey" FOREIGN KEY ("id_hospital") REFERENCES "Hospital"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InsumosPeticiones" ADD CONSTRAINT "InsumosPeticiones_id_peticion_fkey" FOREIGN KEY ("id_peticion") REFERENCES "Peticiones"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InsumosPeticiones" ADD CONSTRAINT "InsumosPeticiones_id_insumo_fkey" FOREIGN KEY ("id_insumo") REFERENCES "Insumos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paquetes" ADD CONSTRAINT "Paquetes_id_hospital_fkey" FOREIGN KEY ("id_hospital") REFERENCES "Hospital"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InsumosPaquete" ADD CONSTRAINT "InsumosPaquete_id_insumo_fkey" FOREIGN KEY ("id_insumo") REFERENCES "Insumos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InsumosPaquete" ADD CONSTRAINT "InsumosPaquete_id_paquete_fkey" FOREIGN KEY ("id_paquete") REFERENCES "Paquetes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InsumosBodega" ADD CONSTRAINT "InsumosBodega_id_insumo_fkey" FOREIGN KEY ("id_insumo") REFERENCES "Insumos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
