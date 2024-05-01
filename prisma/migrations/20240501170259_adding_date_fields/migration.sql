/*
  Warnings:

  - Added the required column `updatedAt` to the `JobPosting` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_JobPosting" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "pay_interval" TEXT NOT NULL,
    "pay_min" TEXT NOT NULL,
    "pay_max" TEXT NOT NULL,
    "currency" TEXT,
    "description" TEXT NOT NULL,
    "date_posted" TEXT NOT NULL,
    "is_remote" BOOLEAN NOT NULL,
    "job_link" TEXT NOT NULL,
    "queryId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    CONSTRAINT "JobPosting_queryId_fkey" FOREIGN KEY ("queryId") REFERENCES "SearchQuery" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_JobPosting" ("company", "currency", "date_posted", "description", "id", "is_remote", "job_link", "location", "pay_interval", "pay_max", "pay_min", "queryId", "title") SELECT "company", "currency", "date_posted", "description", "id", "is_remote", "job_link", "location", "pay_interval", "pay_max", "pay_min", "queryId", "title" FROM "JobPosting";
DROP TABLE "JobPosting";
ALTER TABLE "new_JobPosting" RENAME TO "JobPosting";
CREATE UNIQUE INDEX "JobPosting_id_key" ON "JobPosting"("id");
CREATE TABLE "new_SearchQuery" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "sites" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_SearchQuery" ("id", "location", "sites", "title") SELECT "id", "location", "sites", "title" FROM "SearchQuery";
DROP TABLE "SearchQuery";
ALTER TABLE "new_SearchQuery" RENAME TO "SearchQuery";
CREATE UNIQUE INDEX "SearchQuery_id_key" ON "SearchQuery"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
