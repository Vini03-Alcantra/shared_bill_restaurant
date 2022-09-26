/*
  Warnings:

  - You are about to drop the `map` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "map";

-- CreateTable
CREATE TABLE "table" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "vip" BOOLEAN NOT NULL,

    CONSTRAINT "table_pkey" PRIMARY KEY ("id")
);
