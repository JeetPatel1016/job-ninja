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
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" DATETIME,
    CONSTRAINT "JobPosting_queryId_fkey" FOREIGN KEY ("queryId") REFERENCES "SearchQuery" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_JobPosting" ("company", "createdAt", "currency", "date_posted", "deletedAt", "description", "id", "is_remote", "job_link", "location", "pay_interval", "pay_max", "pay_min", "queryId", "title", "updatedAt") SELECT "company", "createdAt", "currency", "date_posted", "deletedAt", "description", "id", "is_remote", "job_link", "location", "pay_interval", "pay_max", "pay_min", "queryId", "title", "updatedAt" FROM "JobPosting";
DROP TABLE "JobPosting";
ALTER TABLE "new_JobPosting" RENAME TO "JobPosting";
CREATE UNIQUE INDEX "JobPosting_id_key" ON "JobPosting"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
