/*
  Warnings:

  - You are about to drop the column `productName` on the `Orderitem` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Orderitem` table. All the data in the column will be lost.
  - Added the required column `productName` to the `Cartitem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cartitem" ADD COLUMN     "productName" TEXT NOT NULL,
ADD COLUMN     "url" TEXT;

-- AlterTable
ALTER TABLE "Orderitem" DROP COLUMN "productName",
DROP COLUMN "url";
