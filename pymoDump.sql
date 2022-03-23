-- MariaDB dump 10.19  Distrib 10.5.15-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: 198.251.68.96    Database: pymo
-- ------------------------------------------------------
-- Server version	10.3.34-MariaDB-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Casos`
--

DROP TABLE IF EXISTS `Casos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Casos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_hospital` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `mes` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Casos_id_hospital_fkey` (`id_hospital`),
  CONSTRAINT `Casos_id_hospital_fkey` FOREIGN KEY (`id_hospital`) REFERENCES `Hospital` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Casos`
--

LOCK TABLES `Casos` WRITE;
/*!40000 ALTER TABLE `Casos` DISABLE KEYS */;
INSERT INTO `Casos` VALUES (1,2,500,'2022-01-01 06:00:00.000'),(2,2,1000,'2021-01-01 00:00:00.000'),(3,1,400,'2022-10-01 00:00:00.000'),(4,4,100,'2021-01-01 00:00:00.000'),(5,4,200,'2021-02-01 00:00:00.000'),(6,4,300,'2021-03-01 00:00:00.000'),(7,4,500,'2021-04-01 00:00:00.000'),(8,4,550,'2021-05-01 00:00:00.000'),(9,4,550,'2021-06-01 00:00:00.000'),(10,4,700,'2021-07-01 00:00:00.000'),(11,4,700,'2021-08-01 00:00:00.000'),(12,4,500,'2021-09-01 00:00:00.000'),(13,4,550,'2021-10-01 00:00:00.000'),(14,4,550,'2021-11-01 00:00:00.000'),(15,4,550,'2021-12-01 00:00:00.000'),(16,8,400,'2021-01-01 00:00:00.000'),(17,1,600,'2021-01-01 00:00:00.000'),(18,8,400,'2021-06-01 00:00:00.000');
/*!40000 ALTER TABLE `Casos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Hospital`
--

DROP TABLE IF EXISTS `Hospital`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Hospital` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Hospital`
--

LOCK TABLES `Hospital` WRITE;
/*!40000 ALTER TABLE `Hospital` DISABLE KEYS */;
INSERT INTO `Hospital` VALUES (1,'Hospital Puebla'),(2,'Hospital Angeles'),(4,'Betania'),(8,'Universitario');
/*!40000 ALTER TABLE `Hospital` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Insumos`
--

DROP TABLE IF EXISTS `Insumos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Insumos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre_clave` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `descripcion` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Insumos`
--

LOCK TABLES `Insumos` WRITE;
/*!40000 ALTER TABLE `Insumos` DISABLE KEYS */;
INSERT INTO `Insumos` VALUES (1,'Cubrebocas','cubre','Cubrebocas de tela'),(2,'Careta','careta','Careta para doctores'),(3,'Lentes Protectores','lentes','');
/*!40000 ALTER TABLE `Insumos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `InsumosBodega`
--

DROP TABLE IF EXISTS `InsumosBodega`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `InsumosBodega` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_insumo` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `InsumosBodega_id_insumo_key` (`id_insumo`),
  CONSTRAINT `InsumosBodega_id_insumo_fkey` FOREIGN KEY (`id_insumo`) REFERENCES `Insumos` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `InsumosBodega`
--

LOCK TABLES `InsumosBodega` WRITE;
/*!40000 ALTER TABLE `InsumosBodega` DISABLE KEYS */;
INSERT INTO `InsumosBodega` VALUES (1,1,495300),(2,2,495100),(3,3,495700);
/*!40000 ALTER TABLE `InsumosBodega` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `InsumosPaquete`
--

DROP TABLE IF EXISTS `InsumosPaquete`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `InsumosPaquete` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_insumo` int(11) NOT NULL,
  `id_paquete` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `InsumosPaquete_id_insumo_fkey` (`id_insumo`),
  KEY `InsumosPaquete_id_paquete_fkey` (`id_paquete`),
  CONSTRAINT `InsumosPaquete_id_insumo_fkey` FOREIGN KEY (`id_insumo`) REFERENCES `Insumos` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `InsumosPaquete_id_paquete_fkey` FOREIGN KEY (`id_paquete`) REFERENCES `Paquetes` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `InsumosPaquete`
--

LOCK TABLES `InsumosPaquete` WRITE;
/*!40000 ALTER TABLE `InsumosPaquete` DISABLE KEYS */;
INSERT INTO `InsumosPaquete` VALUES (1,1,2,1500),(2,2,2,1500),(3,3,2,1500),(4,1,3,200),(5,2,3,200),(6,3,3,200),(7,1,4,500),(8,2,4,600),(9,3,4,1000),(10,1,5,600),(11,2,5,600),(12,3,5,600),(13,1,6,600),(14,2,6,600),(15,3,6,600),(16,1,7,1000),(17,2,7,1000),(18,3,7,1000),(19,1,8,400),(20,2,8,400),(21,3,8,400),(22,1,9,600),(23,2,9,600),(24,3,9,600),(25,1,10,600),(26,2,10,600),(27,3,10,600),(28,1,11,1000),(29,2,11,1000),(30,3,11,1000),(31,1,12,800),(32,2,12,800),(33,3,12,800),(34,1,13,600),(35,2,13,600),(36,3,13,600),(37,1,14,500),(38,2,14,700),(39,3,14,100),(40,1,15,600),(41,2,15,600),(42,3,15,600),(43,1,16,600),(44,2,16,600),(45,3,16,600);
/*!40000 ALTER TABLE `InsumosPaquete` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `InsumosPeticiones`
--

DROP TABLE IF EXISTS `InsumosPeticiones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `InsumosPeticiones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_insumo` int(11) NOT NULL,
  `id_peticion` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `InsumosPeticiones_id_peticion_fkey` (`id_peticion`),
  KEY `InsumosPeticiones_id_insumo_fkey` (`id_insumo`),
  CONSTRAINT `InsumosPeticiones_id_insumo_fkey` FOREIGN KEY (`id_insumo`) REFERENCES `Insumos` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `InsumosPeticiones_id_peticion_fkey` FOREIGN KEY (`id_peticion`) REFERENCES `Peticiones` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `InsumosPeticiones`
--

LOCK TABLES `InsumosPeticiones` WRITE;
/*!40000 ALTER TABLE `InsumosPeticiones` DISABLE KEYS */;
INSERT INTO `InsumosPeticiones` VALUES (1,1,2,1500),(2,2,2,1500),(3,3,2,1500),(6,1,4,200),(7,2,4,200),(8,3,4,200),(9,1,5,400),(10,2,5,400),(11,3,5,400),(12,1,6,600),(13,2,6,600),(14,3,6,600),(15,1,7,800),(16,2,7,800),(17,3,7,800),(18,1,8,1000),(19,2,8,1000),(20,3,8,1000),(21,1,9,1000),(22,2,9,1000),(23,3,9,1000),(24,1,10,600),(25,2,10,600),(26,3,10,600),(27,1,11,600),(28,2,11,600),(29,3,11,600),(30,1,12,600),(31,2,12,600),(32,3,12,600),(33,1,13,600),(34,2,13,600),(35,3,13,600),(36,1,14,600),(37,2,14,600),(38,3,14,600),(39,1,15,600),(40,2,15,600),(41,3,15,600),(42,1,16,500),(43,2,16,600),(44,3,16,1000),(45,1,17,500),(46,2,17,700),(47,3,17,100),(48,1,18,1555),(49,2,18,16116),(50,3,18,2341);
/*!40000 ALTER TABLE `InsumosPeticiones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Paquetes`
--

DROP TABLE IF EXISTS `Paquetes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Paquetes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_hospital` int(11) NOT NULL,
  `delivery_date` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Paquetes_id_hospital_fkey` (`id_hospital`),
  CONSTRAINT `Paquetes_id_hospital_fkey` FOREIGN KEY (`id_hospital`) REFERENCES `Hospital` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Paquetes`
--

LOCK TABLES `Paquetes` WRITE;
/*!40000 ALTER TABLE `Paquetes` DISABLE KEYS */;
INSERT INTO `Paquetes` VALUES (1,2,'1970-01-01 00:00:00.000'),(2,2,'2022-03-22 10:25:24.223'),(3,4,'2022-03-23 09:27:24.402'),(4,8,'2022-03-23 09:27:34.683'),(5,4,'2022-03-23 09:57:59.378'),(6,4,'2022-03-23 10:00:38.131'),(7,4,'2022-03-23 10:01:29.871'),(8,4,'2022-03-23 10:02:27.129'),(9,4,'2022-03-23 10:02:56.201'),(10,4,'2022-03-23 10:03:26.721'),(11,4,'2022-03-23 10:04:13.747'),(12,4,'2022-03-23 10:05:42.290'),(13,4,'2022-03-23 10:05:45.566'),(14,1,'2022-03-23 10:37:45.192'),(15,4,'2022-03-23 11:27:41.790'),(16,4,'2022-03-23 11:32:25.933');
/*!40000 ALTER TABLE `Paquetes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Peticiones`
--

DROP TABLE IF EXISTS `Peticiones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Peticiones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_hospital` int(11) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1,
  `date` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Peticiones_id_hospital_fkey` (`id_hospital`),
  CONSTRAINT `Peticiones_id_hospital_fkey` FOREIGN KEY (`id_hospital`) REFERENCES `Hospital` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Peticiones`
--

LOCK TABLES `Peticiones` WRITE;
/*!40000 ALTER TABLE `Peticiones` DISABLE KEYS */;
INSERT INTO `Peticiones` VALUES (2,2,0,'2022-02-01 00:00:00.000'),(4,4,0,'2021-01-22 14:54:28.300'),(5,4,0,'2021-02-22 14:54:56.506'),(6,4,0,'2021-03-22 14:55:30.693'),(7,4,0,'2021-04-22 14:55:30.693'),(8,4,0,'2021-05-22 14:55:30.693'),(9,4,0,'2021-06-22 14:57:26.113'),(10,4,0,'2021-07-22 14:55:30.693'),(11,4,0,'2021-08-22 14:55:30.693'),(12,4,0,'2021-09-22 14:55:30.693'),(13,4,0,'2022-10-22 15:00:09.253'),(14,4,0,'2021-11-22 14:55:30.693'),(15,4,0,'2021-12-22 14:55:30.693'),(16,8,0,'2022-03-23 01:56:07.975'),(17,1,0,'2022-03-23 10:37:09.026'),(18,8,1,'2022-03-23 12:03:47.703');
/*!40000 ALTER TABLE `Peticiones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('248fab3a-ce13-45cf-8a89-9c7877ad3c20','a4ba8f65488ae5ebb9a0927460ee863ad0c613808300ca28a304e6c1c76e56d0','2022-03-22 08:51:39.145','20220322085137_3',NULL,NULL,'2022-03-22 08:51:38.571',1),('32688a1b-7f90-4ae3-a8c8-af97d7fa48d1','5b3040660b6696ccc0610eeb7519e90eac34b0cd26fef5766c2f3505c7d06c4d','2022-03-21 15:53:21.962','20220321155318_init',NULL,NULL,'2022-03-21 15:53:19.221',1),('7a18ea3a-1053-4f31-bfc5-f2e2e81f8aca','61dc6fcccc2a991445eb47368c427e5724aa512c77f2a1d43e849529e98b6513','2022-03-22 10:41:14.866','20220322104113_6',NULL,NULL,'2022-03-22 10:41:13.975',1),('b13bac6a-04c6-4b71-84f2-3ec5d05f7323','e70ce5a4d7c9fe9c0c106f013eb24414f2123b1476123a7c3c0ffa3c35d47a68','2022-03-21 17:19:41.458','20220321171939_2',NULL,NULL,'2022-03-21 17:19:40.847',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-23 12:58:14
