/*
  Warnings:

  - Added the required column `productName` to the `Orderitem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Orderitem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Orderitem" ADD COLUMN     "productName" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;
