-- CreateTable
CREATE TABLE `Hospital` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Casos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_hospital` INTEGER NOT NULL,
    `cantidad` INTEGER NOT NULL,
    `mes` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Peticiones` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_hospital` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Insumos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `nombre_clave` VARCHAR(191) NOT NULL DEFAULT '',
    `descripcion` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InsumosPeticiones` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_insumo` INTEGER NOT NULL,
    `id_peticion` INTEGER NOT NULL,
    `cantidad` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Paquetes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_hospital` INTEGER NOT NULL,
    `delivery_date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InsumosPaquete` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_insumo` INTEGER NOT NULL,
    `id_paquete` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InsumosBodega` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_insumo` INTEGER NOT NULL,
    `cantidad` INTEGER NOT NULL,

    UNIQUE INDEX `InsumosBodega_id_insumo_key`(`id_insumo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Casos` ADD CONSTRAINT `Casos_id_hospital_fkey` FOREIGN KEY (`id_hospital`) REFERENCES `Hospital`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Peticiones` ADD CONSTRAINT `Peticiones_id_hospital_fkey` FOREIGN KEY (`id_hospital`) REFERENCES `Hospital`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InsumosPeticiones` ADD CONSTRAINT `InsumosPeticiones_id_peticion_fkey` FOREIGN KEY (`id_peticion`) REFERENCES `Peticiones`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InsumosPeticiones` ADD CONSTRAINT `InsumosPeticiones_id_insumo_fkey` FOREIGN KEY (`id_insumo`) REFERENCES `Insumos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Paquetes` ADD CONSTRAINT `Paquetes_id_hospital_fkey` FOREIGN KEY (`id_hospital`) REFERENCES `Hospital`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InsumosPaquete` ADD CONSTRAINT `InsumosPaquete_id_insumo_fkey` FOREIGN KEY (`id_insumo`) REFERENCES `Insumos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InsumosPaquete` ADD CONSTRAINT `InsumosPaquete_id_paquete_fkey` FOREIGN KEY (`id_paquete`) REFERENCES `Paquetes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InsumosBodega` ADD CONSTRAINT `InsumosBodega_id_insumo_fkey` FOREIGN KEY (`id_insumo`) REFERENCES `Insumos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
